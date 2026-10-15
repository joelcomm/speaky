import { useEffect, useMemo, useRef, useState } from 'react'
import type { Story } from '../data/course'
import { shuffle } from '../lib/exercises'
import { speak } from '../lib/speech'
import { addXp, setState } from '../lib/store'
import { HintedSpanish, ProgressBar } from './ui'

const STORY_XP = 15

export function StoryView({ story, onExit }: { story: Story; onExit: () => void }) {
  const [shown, setShown] = useState(1)
  const [showEn, setShowEn] = useState<Set<number>>(new Set())
  const [qi, setQi] = useState(-1) // -1 while reading
  const [picked, setPicked] = useState<number | null>(null)
  const [done, setDone] = useState(false)
  const correct = useRef(0)
  const started = useRef(Date.now())
  const bottom = useRef<HTMLDivElement>(null)

  const questions = useMemo(
    () =>
      story.questions.map((q) => {
        const order = shuffle(q.options.map((_, i) => i))
        return { q: q.q, options: order.map((i) => q.options[i]), answer: order.indexOf(q.answer) }
      }),
    [story.id],
  )

  useEffect(() => {
    if (qi === -1) speak(story.lines[shown - 1].es)
    bottom.current?.scrollIntoView({ behavior: 'smooth' })
  }, [shown])

  const total = story.lines.length + questions.length
  const step = qi === -1 ? shown : story.lines.length + qi + (picked !== null ? 1 : 0)

  const continueStory = () => {
    if (qi === -1) {
      if (shown < story.lines.length) return setShown(shown + 1)
      return setQi(0)
    }
    if (picked === null) return
    if (qi + 1 < questions.length) {
      setQi(qi + 1)
      setPicked(null)
      return
    }
    const seconds = Math.round((Date.now() - started.current) / 1000)
    addXp(STORY_XP, seconds, questions.length, correct.current)
    setState((s) => ({ ...s, storiesDone: { ...s.storiesDone, [story.id]: (s.storiesDone[story.id] ?? 0) + 1 } }))
    setDone(true)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !done) continueStory()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (done) {
    return (
      <div className="session done-screen">
        <div className="done-emoji">📖</div>
        <h1>Story complete!</h1>
        <div className="done-stats">
          <div className="done-stat xp">
            <span>Total XP</span>
            <strong>⚡ {STORY_XP}</strong>
          </div>
          <div className="done-stat acc">
            <span>Questions</span>
            <strong>
              🎯 {correct.current}/{questions.length}
            </strong>
          </div>
        </div>
        <div className="bottom-bar">
          <button className="btn primary wide" onClick={onExit} autoFocus>
            Continue
          </button>
        </div>
      </div>
    )
  }

  const q = qi >= 0 ? questions[qi] : null

  return (
    <div className="session">
      <div className="session-top">
        <button className="icon-btn" onClick={onExit} aria-label="Quit">
          ✕
        </button>
        <ProgressBar value={step / total} />
      </div>
      <div className="session-body story">
        <h2 className="story-title">{story.title}</h2>
        {story.lines.slice(0, shown).map((l, i) => (
          <div key={i} className={`story-line ${l.speaker ? '' : 'narration'}`}>
            {l.speaker && <div className="speaker">{l.speaker}</div>}
            <div className="bubble">
              <button className="audio" onClick={() => speak(l.es)} aria-label="Play line">
                🔊
              </button>
              <div>
                <HintedSpanish text={l.es} />
                {showEn.has(i) ? (
                  <div className="story-en">{l.en}</div>
                ) : (
                  <button className="link-button small" onClick={() => setShowEn(new Set(showEn).add(i))}>
                    Show English
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        {q && (
          <div className="story-question">
            <div className="ex-label">{q.q}</div>
            <div className="options">
              {q.options.map((o, i) => (
                <button
                  key={o}
                  disabled={picked !== null}
                  className={`option ${picked === null ? '' : i === q.answer ? 'right' : picked === i ? 'wrong' : ''}`}
                  onClick={() => {
                    setPicked(i)
                    if (i === q.answer) correct.current++
                  }}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        )}
        <div ref={bottom} />
      </div>
      <div className="bottom-bar">
        <button className="btn primary wide" disabled={qi >= 0 && picked === null} onClick={continueStory}>
          Continue
        </button>
      </div>
    </div>
  )
}
