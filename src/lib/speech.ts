import { getState } from './store'

// Uses the device's built-in Spanish voices (free, offline on Mac and iPhone).

const PREFERRED_LANGS = ['es-MX', 'es-US', 'es-419', 'es-CO', 'es-AR', 'es-ES']

let voices: SpeechSynthesisVoice[] = []

function refreshVoices() {
  if (!('speechSynthesis' in window)) return
  voices = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('es'))
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  refreshVoices()
  speechSynthesis.addEventListener?.('voiceschanged', refreshVoices)
}

export function spanishVoices(): SpeechSynthesisVoice[] {
  refreshVoices()
  return [...voices].sort((a, b) => rank(a) - rank(b))
}

function rank(v: SpeechSynthesisVoice): number {
  const i = PREFERRED_LANGS.findIndex((l) => v.lang.replace('_', '-').toLowerCase() === l.toLowerCase())
  // Enhanced/premium voices sound far better than compact ones.
  const quality = /premium|enhanced|mejorad/i.test(v.name) ? -0.5 : 0
  return (i === -1 ? PREFERRED_LANGS.length : i) + quality
}

function pickVoice(): SpeechSynthesisVoice | undefined {
  const all = spanishVoices()
  const chosen = getState().settings.voiceURI
  return all.find((v) => v.voiceURI === chosen) ?? all[0]
}

export function canSpeak(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

export function speak(text: string, opts: { slow?: boolean } = {}): Promise<void> {
  if (!canSpeak()) return Promise.resolve()
  return new Promise((resolve) => {
    speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    const v = pickVoice()
    if (v) u.voice = v
    u.lang = v?.lang ?? 'es-MX'
    u.rate = getState().settings.rate * (opts.slow ? 0.6 : 1)
    u.onend = () => resolve()
    u.onerror = () => resolve()
    speechSynthesis.speak(u)
  })
}

// ---- speech recognition ----

type Recognition = {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  continuous: boolean
  start(): void
  stop(): void
  abort(): void
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null
  onerror: ((e: { error: string }) => void) | null
  onend: (() => void) | null
}

function RecognitionCtor(): (new () => Recognition) | undefined {
  const w = window as unknown as Record<string, unknown>
  return (w.SpeechRecognition ?? w.webkitSpeechRecognition) as (new () => Recognition) | undefined
}

export function canListen(): boolean {
  return typeof window !== 'undefined' && !!RecognitionCtor() && window.isSecureContext
}

export interface Listening {
  result: Promise<string[]>
  stop: () => void
}

/** Start listening for Spanish. Resolves with candidate transcripts (best first). */
export function listen(): Listening {
  const Ctor = RecognitionCtor()
  if (!Ctor) return { result: Promise.reject(new Error('unsupported')), stop: () => {} }
  const rec = new Ctor()
  rec.lang = 'es-MX'
  rec.interimResults = false
  rec.maxAlternatives = 5
  rec.continuous = false
  const result = new Promise<string[]>((resolve, reject) => {
    let got: string[] = []
    rec.onresult = (e) => {
      const r = e.results[0]
      got = Array.from({ length: r.length }, (_, i) => r[i].transcript)
    }
    rec.onerror = (e) => (e.error === 'no-speech' ? resolve([]) : reject(new Error(e.error)))
    rec.onend = () => resolve(got)
  })
  rec.start()
  return { result, stop: () => rec.stop() }
}
