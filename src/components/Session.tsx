import { useEffect, useRef, useState } from 'react'
import { retry, scoredItem, type Exercise } from '../lib/exercises'
import { recordResults } from '../lib/srs'
import { speak } from '../lib/speech'
import { addXp } from '../lib/store'
import { ExerciseView, type Result } from './ExerciseView'
import { ProgressBar } from './ui'

export interface SessionSummary {
  xp: number
  accuracy: number
  seconds: number
}

interface Props {
  title: string
  exercises: Exercise[]
  /** XP for finishing; perfect sessions get a bonus. */
  baseXp: (scored: number) => number
  onComplete?: () => void
  onExit: () => void
}

const PRAISE = ['¡Muy bien!', '¡Excelente!', '¡Perfecto!', '¡Genial!', '¡Así se hace!', 'Nice!', 'Great job!']

export function Session({ title, exercises, baseXp, onComplete, onExit }: Props) {
  const [queue, setQueue] = useState(exercises)
  const [index, setIndex] = useState(0)
  const [result, setResult] = useState<Result | null>(null)
  const [canCheck, setCanCheck] = useState(false)
  const [summary, setSummary] = useState<SessionSummary | null>(null)
  const grader = useRef<(() => Result) | null>(null)
  const outcomes = useRef(new Map<string, boolean>())
  const counts = useRef({ answers: 0, correct: 0 })
  const started = useRef(Date.now())
  const praise = useRef(PRAISE[0])

  const ex = queue[index]
  const firstPassTotal = exercises.length

  const setGrader = (g: (() => Result) | null) => {
    grader.current = g
    setCanCheck(!!g)
  }

  const applyResult = (r: Result) => {
    praise.current = PRAISE[Math.floor(Math.random() * PRAISE.length)]
    setResult(r)
    const item = scoredItem(ex)
    if (r.skipped || !item) return
    counts.current.answers++
    if (r.ok) counts.current.correct++
    const prev = outcomes.current.get(item.id)
    outcomes.current.set(item.id, (prev ?? true) && r.ok)
    if (!r.ok) setQueue((q) => [...q, retry(ex)])
    // Hear the Spanish you just produced.
    if (r.ok && ((ex.kind === 'build' && ex.dir === 'en2es') || ex.kind === 'type')) speak(item.es)
  }

  const check = () => {
    if (result) return next()
    if (grader.current) applyResult(grader.current())
  }

  const finishNow = (r: Result) => {
    if (ex.kind === 'match' || (ex.kind === 'speak' && r.ok)) {
      // These finish themselves: record and move straight on for matching.
      applyResult(r)
      if (ex.kind === 'match') setTimeout(() => advance(), 50)
    } else applyResult(r)
  }

  const advance = () => {
    setResult(null)
    setGrader(null)
    setIndex((i) => i + 1)
  }

  const next = () => {
    if (index + 1 < queue.length) return advance()
    // Session complete.
    const seconds = Math.min(Math.round((Date.now() - started.current) / 1000), queue.length * 90)
    const { answers, correct } = counts.current
    const accuracy = answers ? correct / answers : 1
    const xp = baseXp(outcomes.current.size) + (answers > 0 && correct === answers ? 5 : 0)
    recordResults(outcomes.current)
    addXp(xp, seconds, answers, correct)
    onComplete?.()
    setSummary({ xp, accuracy, seconds })
  }

  // Intro cards don't need a separate "Check" step.
  const isIntro = ex?.kind === 'intro'

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || summary) return
      e.preventDefault()
      if (isIntro && !result) return advance()
      check()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (summary) {
    return (
      <div className="session done-screen">
        <div className="done-emoji">🎉</div>
        <h1>{title}: complete!</h1>
        <div className="done-stats">
          <div className="done-stat xp">
            <span>Total XP</span>
            <strong>⚡ {summary.xp}</strong>
          </div>
          <div className="done-stat acc">
            <span>Accuracy</span>
            <strong>🎯 {Math.round(summary.accuracy * 100)}%</strong>
          </div>
          <div className="done-stat time">
            <span>Time</span>
            <strong>
              ⏱ {Math.floor(summary.seconds / 60)}:{String(summary.seconds % 60).padStart(2, '0')}
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

  if (!ex) return null
  const progress = Math.min(index, firstPassTotal) / firstPassTotal

  return (
    <div className="session">
      <div className="session-top">
        <button className="icon-btn" onClick={onExit} aria-label="Quit">
          ✕
        </button>
        <ProgressBar value={progress} />
      </div>
      {index >= firstPassTotal && <div className="retry-banner">Let's fix a mistake</div>}
      <div className="session-body">
        <ExerciseView key={ex.key} ex={ex} locked={!!result} setGrader={setGrader} finish={finishNow} />
      </div>
      <div className={`bottom-bar ${result ? (result.ok ? 'good' : 'bad') : ''}`}>
        {result && !result.skipped && (
          <div className="feedback">
            <div className="feedback-title">{result.ok ? praise.current : 'Correct answer:'}</div>
            {!result.ok && result.answer && <div className="feedback-answer">{result.answer}</div>}
            {result.ok && result.note && (
              <div className="feedback-answer">
                {result.note} <strong>{result.answer}</strong>
              </div>
            )}
          </div>
        )}
        {isIntro && !result ? (
          <button className="btn primary wide" onClick={advance}>
            Got it
          </button>
        ) : result ? (
          <button className={`btn wide ${result.ok ? 'primary' : 'danger'}`} onClick={next} autoFocus>
            Continue
          </button>
        ) : ex.kind === 'match' || ex.kind === 'speak' ? null : (
          <button className="btn primary wide" disabled={!canCheck} onClick={check}>
            Check
          </button>
        )}
      </div>
    </div>
  )
}
