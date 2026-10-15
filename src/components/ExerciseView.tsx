import { useEffect, useMemo, useRef, useState } from 'react'
import type { Item } from '../data/course'
import { check, normalize, speechMatches } from '../lib/answer'
import { shuffle, type Exercise } from '../lib/exercises'
import { canListen, listen, speak, type Listening } from '../lib/speech'
import { AudioButtons, HintedSpanish } from './ui'

export interface Result {
  ok: boolean
  /** Skipped exercises (e.g. "can't speak now") aren't scored. */
  skipped?: boolean
  note?: string
  answer?: string
}

export interface ExerciseProps<E extends Exercise = Exercise> {
  ex: E
  locked: boolean
  /** Report the current answer: a grader when ready, or null while incomplete. */
  setGrader: (g: (() => Result) | null) => void
  /** Finish immediately (used by matching and speaking). */
  finish: (r: Result) => void
}

export function ExerciseView(props: ExerciseProps) {
  const { ex } = props
  switch (ex.kind) {
    case 'intro':
      return <Intro {...(props as ExerciseProps<typeof ex>)} />
    case 'choice':
      return <Choice {...(props as ExerciseProps<typeof ex>)} />
    case 'build':
      return <Build {...(props as ExerciseProps<typeof ex>)} />
    case 'type':
      return <TypeIn {...(props as ExerciseProps<typeof ex>)} />
    case 'listen':
      return <Listen {...(props as ExerciseProps<typeof ex>)} />
    case 'speak':
      return <Speak {...(props as ExerciseProps<typeof ex>)} />
    case 'match':
      return <Match {...(props as ExerciseProps<typeof ex>)} />
  }
}

const accept = (it: Item) => [it.es, ...it.esAlt]

function Intro({ ex, setGrader }: ExerciseProps<Extract<Exercise, { kind: 'intro' }>>) {
  useEffect(() => {
    speak(ex.item.es)
    setGrader(() => ({ ok: true, skipped: true }))
  }, [ex.key])
  return (
    <div className="ex">
      <div className="ex-label new-word">New word</div>
      <div className="intro-card">
        <div className="intro-es">{ex.item.es}</div>
        <AudioButtons text={ex.item.es} big />
        <div className="intro-en">{ex.item.en}</div>
        {ex.item.enAlt.length > 0 && <div className="intro-alt">also: {ex.item.enAlt.slice(0, 3).join(', ')}</div>}
      </div>
    </div>
  )
}

function Choice({ ex, locked, setGrader }: ExerciseProps<Extract<Exercise, { kind: 'choice' }>>) {
  const [sel, setSel] = useState<string | null>(null)
  useEffect(() => {
    if (ex.dir !== 'en2es') speak(ex.item.es)
  }, [ex.key])
  useEffect(() => {
    setGrader(sel === null ? null : () => ({ ok: sel === ex.answer, answer: ex.answer }))
  }, [sel])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const n = Number(e.key)
      if (!locked && n >= 1 && n <= ex.options.length) setSel(ex.options[n - 1])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [locked, ex.key])

  return (
    <div className="ex">
      <div className="ex-label">
        {ex.dir === 'es2en' ? 'What does this mean?' : ex.dir === 'audio' ? 'What do you hear?' : 'Choose the Spanish'}
      </div>
      <div className="prompt">
        {ex.dir === 'es2en' && (
          <>
            <AudioButtons text={ex.item.es} />
            <span className="prompt-text">{ex.item.es}</span>
          </>
        )}
        {ex.dir === 'audio' && <AudioButtons text={ex.item.es} big />}
        {ex.dir === 'en2es' && <span className="prompt-text">{ex.item.en}</span>}
      </div>
      <div className="options">
        {ex.options.map((o, i) => (
          <button
            key={o}
            className={`option ${sel === o ? 'selected' : ''}`}
            disabled={locked}
            onClick={() => {
              setSel(o)
              if (ex.dir !== 'es2en') speak(o)
            }}
          >
            <span className="kbd">{i + 1}</span>
            {o}
          </button>
        ))}
      </div>
    </div>
  )
}

function Build({ ex, locked, setGrader }: ExerciseProps<Extract<Exercise, { kind: 'build' }>>) {
  const [picked, setPicked] = useState<number[]>([])
  useEffect(() => {
    if (ex.dir === 'es2en') speak(ex.item.es)
  }, [ex.key])
  useEffect(() => {
    const sentence = picked.map((i) => ex.tiles[i]).join(' ')
    setGrader(
      picked.length === 0
        ? null
        : () => {
            const lang = ex.dir === 'es2en' ? 'en' : 'es'
            const v = check(sentence, ex.accepted, lang)
            return { ok: v.ok, answer: ex.accepted[0] }
          },
    )
  }, [picked])

  return (
    <div className="ex">
      <div className="ex-label">{ex.dir === 'es2en' ? 'Translate this sentence' : 'Write this in Spanish'}</div>
      <div className="prompt">
        {ex.dir === 'es2en' ? (
          <>
            <AudioButtons text={ex.item.es} />
            <span className="prompt-text">
              <HintedSpanish text={ex.item.es} />
            </span>
          </>
        ) : (
          <span className="prompt-text">{ex.item.en}</span>
        )}
      </div>
      <div className="answer-line">
        {picked.map((ti, pos) => (
          <button key={ti} className="tile" disabled={locked} onClick={() => setPicked(picked.filter((_, p) => p !== pos))}>
            {ex.tiles[ti]}
          </button>
        ))}
      </div>
      <div className="tile-bank">
        {ex.tiles.map((t, i) => (
          <button
            key={i}
            className={`tile ${picked.includes(i) ? 'used' : ''}`}
            disabled={locked || picked.includes(i)}
            onClick={() => {
              setPicked([...picked, i])
              if (ex.dir === 'en2es') speak(t)
            }}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}

const ACCENTS = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡']

function TextAnswer({
  value,
  setValue,
  locked,
  placeholder,
}: {
  value: string
  setValue: (s: string) => void
  locked: boolean
  placeholder: string
}) {
  const ref = useRef<HTMLTextAreaElement>(null)
  useEffect(() => ref.current?.focus(), [])
  const insert = (ch: string) => {
    const el = ref.current
    if (!el) return setValue(value + ch)
    const start = el.selectionStart ?? value.length
    const end = el.selectionEnd ?? value.length
    setValue(value.slice(0, start) + ch + value.slice(end))
    requestAnimationFrame(() => {
      el.focus()
      el.setSelectionRange(start + 1, start + 1)
    })
  }
  return (
    <>
      <textarea
        ref={ref}
        className="text-answer"
        value={value}
        disabled={locked}
        placeholder={placeholder}
        lang="es"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        onChange={(e) => setValue(e.target.value.replace(/\n/g, ''))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') e.preventDefault()
        }}
      />
      <div className="accent-keys">
        {ACCENTS.map((a) => (
          <button key={a} className="accent-key" disabled={locked} onMouseDown={(e) => e.preventDefault()} onClick={() => insert(a)}>
            {a}
          </button>
        ))}
      </div>
    </>
  )
}

function verdictResult(input: string, it: Item): Result {
  const v = check(input, accept(it), 'es')
  if (!v.ok) return { ok: false, answer: it.es }
  if (v.note === 'accent') return { ok: true, note: 'Watch the accents:', answer: it.es }
  if (v.note === 'typo') return { ok: true, note: 'You have a typo:', answer: it.es }
  return { ok: true, answer: normalize(input) === normalize(it.es) ? undefined : it.es, note: normalize(input) === normalize(it.es) ? undefined : 'Also correct:' }
}

function TypeIn({ ex, locked, setGrader }: ExerciseProps<Extract<Exercise, { kind: 'type' }>>) {
  const [value, setValue] = useState('')
  useEffect(() => setGrader(value.trim() ? () => verdictResult(value, ex.item) : null), [value])
  return (
    <div className="ex">
      <div className="ex-label">Type this in Spanish</div>
      <div className="prompt">
        <span className="prompt-text">{ex.item.en}</span>
      </div>
      <TextAnswer value={value} setValue={setValue} locked={locked} placeholder="Escribe en español" />
    </div>
  )
}

function Listen({ ex, locked, setGrader }: ExerciseProps<Extract<Exercise, { kind: 'listen' }>>) {
  const [value, setValue] = useState('')
  useEffect(() => {
    speak(ex.item.es)
  }, [ex.key])
  useEffect(() => setGrader(value.trim() ? () => verdictResult(value, ex.item) : null), [value])
  return (
    <div className="ex">
      <div className="ex-label">Type what you hear</div>
      <div className="prompt center">
        <AudioButtons text={ex.item.es} big />
      </div>
      <TextAnswer value={value} setValue={setValue} locked={locked} placeholder="Escribe lo que oyes" />
    </div>
  )
}

function Speak({ ex, locked, setGrader, finish }: ExerciseProps<Extract<Exercise, { kind: 'speak' }>>) {
  const [status, setStatus] = useState<'idle' | 'listening' | 'retry' | 'error'>('idle')
  const [heard, setHeard] = useState('')
  const session = useRef<Listening | null>(null)
  const supported = canListen()
  useEffect(() => {
    setGrader(null)
    speak(ex.item.es)
    return () => session.current?.stop()
  }, [ex.key])

  const start = async () => {
    if (status === 'listening') return session.current?.stop()
    setStatus('listening')
    setHeard('')
    try {
      session.current = listen()
      const got = await session.current.result
      setHeard(got[0] ?? '')
      if (got.length && speechMatches(got, ex.item.es)) finish({ ok: true })
      else setStatus('retry')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="ex">
      <div className="ex-label">Say this out loud</div>
      <div className="prompt">
        <AudioButtons text={ex.item.es} />
        <span className="prompt-text">
          <HintedSpanish text={ex.item.es} />
        </span>
      </div>
      {supported ? (
        <div className="speak-area">
          <button className={`mic ${status === 'listening' ? 'on' : ''}`} disabled={locked} onClick={start}>
            🎤 {status === 'listening' ? 'Listening… tap to stop' : 'Tap and speak'}
          </button>
          {status === 'retry' && (
            <div className="speak-feedback">
              {heard ? <>I heard: “{heard}”. Try again.</> : <>I didn't catch that. Try again.</>}
            </div>
          )}
          {status === 'error' && <div className="speak-feedback">The microphone isn't available. Check permissions, or skip.</div>}
        </div>
      ) : (
        <div className="speak-feedback">Speech recognition isn't available in this browser. Say it out loud anyway, then continue.</div>
      )}
      <button className="link-button" disabled={locked} onClick={() => finish({ ok: true, skipped: true })}>
        {supported ? "Can't speak now" : 'I said it'}
      </button>
    </div>
  )
}

function Match({ ex, finish, setGrader }: ExerciseProps<Extract<Exercise, { kind: 'match' }>>) {
  const left = useMemo(() => shuffle(ex.items), [ex.key])
  const right = useMemo(() => shuffle(ex.items), [ex.key])
  const [selL, setSelL] = useState<string | null>(null)
  const [selR, setSelR] = useState<string | null>(null)
  const [done, setDone] = useState<string[]>([])
  const [wrong, setWrong] = useState<string[]>([])

  useEffect(() => setGrader(null), [ex.key])
  useEffect(() => {
    if (!selL || !selR) return
    if (selL === selR) {
      const next = [...done, selL]
      setDone(next)
      if (next.length === ex.items.length) setTimeout(() => finish({ ok: true, skipped: true }), 300)
    } else {
      setWrong([selL, selR])
      setTimeout(() => setWrong([]), 500)
    }
    setSelL(null)
    setSelR(null)
  }, [selL, selR])

  const cls = (id: string, sel: string | null) =>
    `option match-opt ${done.includes(id) ? 'matched' : ''} ${sel === id ? 'selected' : ''} ${wrong.includes(id) ? 'wrong-flash' : ''}`

  return (
    <div className="ex">
      <div className="ex-label">Tap the matching pairs</div>
      <div className="match-grid">
        <div className="match-col">
          {left.map((it) => (
            <button
              key={it.id}
              className={cls(it.id, selL)}
              disabled={done.includes(it.id)}
              onClick={() => {
                speak(it.es)
                setSelL(it.id)
              }}
            >
              {it.es}
            </button>
          ))}
        </div>
        <div className="match-col">
          {right.map((it) => (
            <button key={it.id} className={cls(it.id, selR)} disabled={done.includes(it.id)} onClick={() => setSelR(it.id)}>
              {it.en}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
