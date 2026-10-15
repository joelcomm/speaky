import { Fragment, useState, type ReactNode } from 'react'
import { hintFor } from '../lib/exercises'
import { speak } from '../lib/speech'

export function AudioButtons({ text, big }: { text: string; big?: boolean }) {
  return (
    <span className="audio-buttons">
      <button className={big ? 'audio big' : 'audio'} onClick={() => speak(text)} aria-label="Play audio">
        🔊
      </button>
      <button className="audio slow" onClick={() => speak(text, { slow: true })} aria-label="Play slowly">
        🐢
      </button>
    </span>
  )
}

/** A Spanish sentence where each word can be tapped for a hint. */
export function HintedSpanish({ text }: { text: string }) {
  const [open, setOpen] = useState<number | null>(null)
  const parts = text.split(/(\s+)/)
  return (
    <span className="hinted">
      {parts.map((p, i) => {
        if (/^\s+$/.test(p)) return <Fragment key={i}>{p}</Fragment>
        const hint = hintFor(p)
        return (
          <span
            key={i}
            className={hint ? 'hint-word has-hint' : 'hint-word'}
            onClick={() => {
              speak(p.replace(/[¿?¡!.,]/g, ''))
              setOpen(open === i ? null : i)
            }}
          >
            {p}
            {open === i && hint && <span className="hint-pop">{hint}</span>}
          </span>
        )
      })}
    </span>
  )
}

export function ProgressBar({ value, color }: { value: number; color?: string }) {
  return (
    <div className="progress">
      <div className="progress-fill" style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%`, background: color }} />
    </div>
  )
}

/** Renders the course's markdown-lite tips: paragraphs, "- " bullets and **bold**. */
export function TipText({ text }: { text: string }) {
  const lines = text.split('\n').map((l) => l.trim())
  const out: ReactNode[] = []
  let bullets: string[] = []
  const flush = () => {
    if (bullets.length) out.push(<ul key={out.length}>{bullets.map((b, i) => <li key={i}>{bold(b)}</li>)}</ul>)
    bullets = []
  }
  for (const l of lines) {
    if (l.startsWith('- ')) bullets.push(l.slice(2))
    else {
      flush()
      if (l) out.push(<p key={out.length}>{bold(l)}</p>)
    }
  }
  flush()
  return <div className="tip-text">{out}</div>
}

function bold(s: string): ReactNode[] {
  return s.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))
}

export function Modal({ onClose, children }: { onClose: () => void; children: ReactNode }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}
