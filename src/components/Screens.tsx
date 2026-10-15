import { useEffect, useRef, useState } from 'react'
import { sectionNames, units, type Lesson, type Story } from '../data/course'
import { lessonUnlocked, nextLesson, nextStory, unitComplete, unitProgress, unitUnlocked } from '../lib/progress'
import { canListen, speak, spanishVoices } from '../lib/speech'
import { dueItemIds, knownCount } from '../lib/srs'
import {
  addDays,
  currentStreak,
  dayKey,
  defaultState,
  longestStreak,
  replaceState,
  setState,
  totalXp,
  useStore,
  type State,
} from '../lib/store'
import { Modal, ProgressBar, TipText } from './ui'

export type Activity =
  | { kind: 'lesson'; lesson: Lesson }
  | { kind: 'review' }
  | { kind: 'practice' }
  | { kind: 'story'; story: Story }

type Start = (a: Activity) => void

// ---------------- Today ----------------

export function Today({ start }: { start: Start }) {
  const s = useStore()
  const streak = currentStreak(s)
  const xpToday = s.xpByDay[dayKey()] ?? 0
  const goal = s.settings.dailyGoal
  const next = nextLesson(s)
  const story = nextStory(s)
  const due = dueItemIds(s).length
  const learned = Object.keys(s.cards).length
  const week = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i - 6))

  return (
    <div className="screen">
      <header className="today-header">
        <div className="streak-big">
          <span className={`flame ${s.xpByDay[dayKey()] ? 'lit' : ''}`}>🔥</span>
          <div>
            <strong>{streak}</strong>
            <span>day streak</span>
          </div>
        </div>
        <div className="week">
          {week.map((d) => (
            <div key={dayKey(d)} className={`week-day ${s.xpByDay[dayKey(d)] ? 'hit' : ''} ${dayKey(d) === dayKey() ? 'today' : ''}`}>
              <span>{d.toLocaleDateString(undefined, { weekday: 'narrow' })}</span>
              <div className="dot">{s.xpByDay[dayKey(d)] ? '✓' : ''}</div>
            </div>
          ))}
        </div>
      </header>

      <section className="card goal-card">
        <div className="row between">
          <h3>Daily goal</h3>
          <span className="muted">
            ⚡ {xpToday} / {goal} XP
          </span>
        </div>
        <ProgressBar value={xpToday / goal} color={xpToday >= goal ? 'var(--gold)' : undefined} />
        {xpToday >= goal && <p className="muted small">Goal reached. ¡Bien hecho!</p>}
      </section>

      {next ? (
        <section className="card hero-card">
          <div className="hero-emoji">{next.unit.emoji}</div>
          <div className="hero-body">
            <div className="eyebrow">
              Unit {next.unitIndex + 1} · Lesson {next.lessonIndex + 1} of {next.unit.lessons.length}
            </div>
            <h2>{next.lesson.title}</h2>
            <p className="muted">{next.unit.title}</p>
          </div>
          <button className="btn primary wide" onClick={() => start({ kind: 'lesson', lesson: next.lesson })}>
            {Object.keys(s.lessonsDone).length ? 'Continue' : 'Start learning'}
          </button>
        </section>
      ) : (
        <section className="card hero-card">
          <div className="hero-emoji">🏆</div>
          <h2>You've finished every lesson!</h2>
          <p className="muted">Keep your reviews going to lock it all in.</p>
        </section>
      )}

      <section className="card action-card">
        <div className="action-icon">🧠</div>
        <div className="grow">
          <h3>Review</h3>
          <p className="muted small">
            {due
              ? `${due} item${due === 1 ? '' : 's'} ready to review`
              : learned
                ? "All caught up. Reviews come back right before you'd forget them."
                : 'Words you learn will come back here for review.'}
          </p>
        </div>
        {due > 0 ? (
          <button className="btn secondary" onClick={() => start({ kind: 'review' })}>
            Review
          </button>
        ) : learned >= 4 ? (
          <button className="btn ghost" onClick={() => start({ kind: 'practice' })}>
            Practice
          </button>
        ) : null}
      </section>

      <section className="card action-card">
        <div className="action-icon">📖</div>
        <div className="grow">
          <h3>Story</h3>
          <p className="muted small">{story ? story.title : 'Finish a unit to unlock its story.'}</p>
        </div>
        {story && (
          <button className="btn secondary" onClick={() => start({ kind: 'story', story })}>
            Read
          </button>
        )}
      </section>
    </div>
  )
}

// ---------------- Path ----------------

export function PathView({ start }: { start: Start }) {
  const s = useStore()
  const [tip, setTip] = useState<Lesson | null>(null)
  const [jump, setJump] = useState<number | null>(null)
  const current = nextLesson(s)
  let lastSection = 0

  // Open the path at the unit you're working on.
  useEffect(() => {
    if (current && current.unitIndex > 0) document.getElementById(current.unit.id)?.scrollIntoView({ block: 'start' })
  }, [])

  return (
    <div className="screen">
      <h1 className="screen-title">Learn</h1>
      {units.map((u, ui) => {
        const header =
          u.section !== lastSection ? (
            <h2 key={`s${u.section}`} className="section-title">
              {sectionNames[u.section] ?? `Section ${u.section}`}
            </h2>
          ) : null
        lastSection = u.section
        const open = unitUnlocked(s, ui)
        return [
          header,
          <section key={u.id} id={u.id} className={`card unit-card ${open ? '' : 'locked'}`}>
            <div className="unit-head">
              <div className="unit-emoji">{u.emoji}</div>
              <div className="grow">
                <div className="eyebrow">Unit {ui + 1}</div>
                <h3>{u.title}</h3>
                <p className="muted small">{u.description}</p>
              </div>
              {unitComplete(s, u) && <div className="unit-check">✓</div>}
            </div>
            <ProgressBar value={unitProgress(s, u)} />
            <div className="lesson-list">
              {u.lessons.map((l, li) => {
                const done = !!s.lessonsDone[l.id]
                const can = lessonUnlocked(s, u, ui, li)
                const isCurrent = current?.lesson.id === l.id
                return (
                  <div key={l.id} className={`lesson-row ${done ? 'done' : ''} ${isCurrent ? 'current' : ''}`}>
                    <button
                      className="lesson-node"
                      disabled={!can}
                      onClick={() => start({ kind: 'lesson', lesson: l })}
                      aria-label={`Start ${l.title}`}
                    >
                      {done ? '✓' : can ? '★' : '🔒'}
                    </button>
                    <button className="lesson-name" disabled={!can} onClick={() => start({ kind: 'lesson', lesson: l })}>
                      {l.title}
                      {done && s.lessonsDone[l.id] > 1 && <span className="muted small"> ×{s.lessonsDone[l.id]}</span>}
                    </button>
                    {l.tip && (
                      <button className="tip-btn" onClick={() => setTip(l)}>
                        Tips
                      </button>
                    )}
                  </div>
                )
              })}
              {u.story && (
                <div className={`lesson-row ${s.storiesDone[u.story.id] ? 'done' : ''}`}>
                  <button
                    className="lesson-node story-node"
                    disabled={!unitComplete(s, u)}
                    onClick={() => start({ kind: 'story', story: u.story! })}
                  >
                    {s.storiesDone[u.story.id] ? '✓' : '📖'}
                  </button>
                  <button className="lesson-name" disabled={!unitComplete(s, u)} onClick={() => start({ kind: 'story', story: u.story! })}>
                    Story: {u.story.title}
                  </button>
                </div>
              )}
            </div>
            {!open && (
              <button className="btn ghost small" onClick={() => setJump(ui)}>
                Already know this? Jump here
              </button>
            )}
          </section>,
        ]
      })}

      {tip && (
        <Modal onClose={() => setTip(null)}>
          <h2>{tip.title}</h2>
          {tip.tip && <TipText text={tip.tip} />}
          <h4>Key phrases</h4>
          <ul className="phrase-list">
            {tip.items.map((it) => (
              <li key={it.id} onClick={() => speak(it.es)}>
                <span className="es">🔊 {it.es}</span>
                <span className="en">{it.en}</span>
              </li>
            ))}
          </ul>
        </Modal>
      )}

      {jump !== null && (
        <Modal onClose={() => setJump(null)}>
          <h2>Jump to Unit {jump + 1}?</h2>
          <p>This unlocks every unit up to {units[jump].title}. You can still go back and do earlier lessons any time.</p>
          <button
            className="btn primary wide"
            onClick={() => {
              setState((st) => ({ ...st, unlockedThrough: Math.max(st.unlockedThrough, jump) }))
              setJump(null)
            }}
          >
            Unlock
          </button>
        </Modal>
      )}
    </div>
  )
}

// ---------------- Stats ----------------

export function Stats() {
  const s = useStore()
  const weeks = 16
  const startDay = addDays(new Date(), -(weeks * 7 - 1) - new Date().getDay())
  const days = Array.from({ length: weeks * 7 }, (_, i) => addDays(startDay, i))
  const goal = s.settings.dailyGoal
  const totalLessons = units.reduce((n, u) => n + u.lessons.length, 0)
  const doneLessons = Object.keys(s.lessonsDone).length

  const level = (xp: number) => (xp <= 0 ? 0 : xp < goal / 2 ? 1 : xp < goal ? 2 : xp < goal * 2 ? 3 : 4)

  return (
    <div className="screen">
      <h1 className="screen-title">Progress</h1>
      <div className="stat-grid">
        <Stat icon="🔥" value={currentStreak(s)} label="Day streak" />
        <Stat icon="🏅" value={longestStreak(s)} label="Best streak" />
        <Stat icon="⚡" value={totalXp(s)} label="Total XP" />
        <Stat icon="🧠" value={knownCount(s)} label="Words & phrases known" />
        <Stat icon="📚" value={`${doneLessons}/${totalLessons}`} label="Lessons done" />
        <Stat icon="🎯" value={s.answers ? `${Math.round((s.correct / s.answers) * 100)}%` : '—'} label="Accuracy" />
        <Stat icon="⏱" value={formatMinutes(s.secondsStudied)} label="Time studied" />
        <Stat icon="📝" value={Object.keys(s.cards).length} label="Items learned" />
      </div>

      <section className="card">
        <h3>Activity</h3>
        <div className="heatmap" style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }}>
          {days.map((d) => (
            <div
              key={dayKey(d)}
              className={`heat l${level(s.xpByDay[dayKey(d)] ?? 0)} ${d > new Date() ? 'future' : ''}`}
              title={`${d.toLocaleDateString()}: ${s.xpByDay[dayKey(d)] ?? 0} XP`}
            />
          ))}
        </div>
      </section>

      <section className="card">
        <h3>Course</h3>
        {Object.entries(sectionNames).map(([sec, name]) => {
          const us = units.filter((u) => u.section === Number(sec))
          if (!us.length) return null
          const ls = us.flatMap((u) => u.lessons)
          const done = ls.filter((l) => s.lessonsDone[l.id]).length
          return (
            <div key={sec} className="section-progress">
              <div className="row between small">
                <span>{name}</span>
                <span className="muted">
                  {done}/{ls.length}
                </span>
              </div>
              <ProgressBar value={done / ls.length} />
            </div>
          )
        })}
      </section>
    </div>
  )
}

function Stat({ icon, value, label }: { icon: string; value: string | number; label: string }) {
  return (
    <div className="stat">
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function formatMinutes(sec: number): string {
  const m = Math.round(sec / 60)
  return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`
}

// ---------------- Settings ----------------

export function SettingsView() {
  const s = useStore()
  const voices = spanishVoices()
  const fileRef = useRef<HTMLInputElement>(null)
  const [msg, setMsg] = useState('')
  const set = (patch: Partial<State['settings']>) => setState((st) => ({ ...st, settings: { ...st.settings, ...patch } }))

  const exportData = () => {
    const blob = new Blob([JSON.stringify(s, null, 1)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `speaky-progress-${dayKey()}.json`
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const importData = async (file: File) => {
    try {
      const data = JSON.parse(await file.text())
      if (data?.version !== 1 || typeof data.cards !== 'object') throw new Error('bad file')
      replaceState(data)
      setMsg('Progress imported.')
    } catch {
      setMsg("That file doesn't look like a Speaky backup.")
    }
  }

  return (
    <div className="screen">
      <h1 className="screen-title">Settings</h1>

      <section className="card settings">
        <h3>Daily goal</h3>
        <div className="seg">
          {[
            [10, 'Casual'],
            [20, 'Regular'],
            [30, 'Serious'],
            [50, 'Intense'],
          ].map(([xp, name]) => (
            <button key={xp} className={s.settings.dailyGoal === xp ? 'on' : ''} onClick={() => set({ dailyGoal: xp as number })}>
              <strong>{name}</strong>
              <span>{xp} XP</span>
            </button>
          ))}
        </div>
      </section>

      <section className="card settings">
        <h3>Voice</h3>
        {voices.length ? (
          <>
            <select value={s.settings.voiceURI ?? voices[0]?.voiceURI} onChange={(e) => set({ voiceURI: e.target.value })}>
              {voices.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
            <p className="muted small">
              For the most natural audio, download an "Enhanced" or "Premium" Spanish voice. On Mac: System Settings → Accessibility → Spoken
              Content → System voice → Manage Voices. On iPhone: Settings → Accessibility → Spoken Content → Voices → Spanish.
            </p>
          </>
        ) : (
          <p className="muted small">No Spanish voice found on this device yet. Add one in your device's Spoken Content settings.</p>
        )}
        <label className="row between">
          <span>Speed</span>
          <input
            type="range"
            min={0.6}
            max={1.2}
            step={0.05}
            value={s.settings.rate}
            onChange={(e) => set({ rate: Number(e.target.value) })}
          />
        </label>
        <button className="btn ghost" onClick={() => speak('Hola, ¿cómo estás? Me llamo Speaky.')}>
          🔊 Test voice
        </button>
      </section>

      <section className="card settings">
        <h3>Exercises</h3>
        <label className="row between toggle">
          <span>
            Speaking exercises
            {!canListen() && <span className="muted small"> (not supported here)</span>}
          </span>
          <input type="checkbox" checked={s.settings.speaking} onChange={(e) => set({ speaking: e.target.checked })} />
        </label>
        <label className="row between toggle">
          <span>Listening exercises</span>
          <input type="checkbox" checked={s.settings.listening} onChange={(e) => set({ listening: e.target.checked })} />
        </label>
      </section>

      <section className="card settings">
        <h3>Your data</h3>
        <p className="muted small">
          Progress is saved on this device only. To move it between your Mac and iPhone, export it here and import it on the other device.
        </p>
        <div className="row gap">
          <button className="btn secondary" onClick={exportData}>
            Export progress
          </button>
          <button className="btn ghost" onClick={() => fileRef.current?.click()}>
            Import progress
          </button>
          <input ref={fileRef} type="file" accept="application/json,.json" hidden onChange={(e) => e.target.files?.[0] && importData(e.target.files[0])} />
        </div>
        {msg && <p className="small">{msg}</p>}
        <button
          className="btn danger-ghost"
          onClick={() => {
            if (confirm('Erase all progress on this device? This cannot be undone.')) replaceState(defaultState())
          }}
        >
          Reset all progress
        </button>
      </section>

      <section className="card settings">
        <h3>More free Spanish</h3>
        <ul className="links">
          <li>
            <a href="https://www.languagetransfer.org/" target="_blank" rel="noreferrer">
              Language Transfer
            </a>{' '}
            · free audio course that teaches you to think in Spanish
          </li>
          <li>
            <a href="https://www.dreamingspanish.com/" target="_blank" rel="noreferrer">
              Dreaming Spanish
            </a>{' '}
            · videos graded from total beginner up
          </li>
          <li>
            <a href="https://www.spanishdict.com/" target="_blank" rel="noreferrer">
              SpanishDict
            </a>{' '}
            · dictionary and verb conjugations
          </li>
          <li>
            <a href="https://tatoeba.org/" target="_blank" rel="noreferrer">
              Tatoeba
            </a>{' '}
            · thousands of example sentences with native audio
          </li>
        </ul>
      </section>
    </div>
  )
}
