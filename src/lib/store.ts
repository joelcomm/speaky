import { useSyncExternalStore } from 'react'

// All progress lives in this one object, saved to localStorage on this device.

export interface Settings {
  dailyGoal: number
  voiceURI?: string
  rate: number
  speaking: boolean
  listening: boolean
}

export interface SavedCard {
  due: string
  stability: number
  difficulty: number
  elapsed_days: number
  scheduled_days: number
  learning_steps: number
  reps: number
  lapses: number
  state: number
  last_review?: string
}

export interface State {
  version: 1
  xpByDay: Record<string, number>
  lessonsDone: Record<string, number>
  storiesDone: Record<string, number>
  unlockedThrough: number // index of the furthest unit unlocked by "jump here"
  cards: Record<string, SavedCard>
  answers: number
  correct: number
  secondsStudied: number
  settings: Settings
}

const KEY = 'speaky-v1'

export const defaultState = (): State => ({
  version: 1,
  xpByDay: {},
  lessonsDone: {},
  storiesDone: {},
  unlockedThrough: 0,
  cards: {},
  answers: 0,
  correct: 0,
  secondsStudied: 0,
  settings: { dailyGoal: 30, rate: 0.95, speaking: true, listening: true },
})

function load(): State {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const s = JSON.parse(raw)
      const d = defaultState()
      return { ...d, ...s, settings: { ...d.settings, ...s.settings } }
    }
  } catch {
    /* storage unavailable: start fresh */
  }
  return defaultState()
}

let state = load()
const listeners = new Set<() => void>()

export function getState(): State {
  return state
}

export function setState(update: (s: State) => State) {
  state = update(state)
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    /* storage full or blocked: keep in memory */
  }
  listeners.forEach((l) => l())
}

export function replaceState(next: State) {
  setState(() => ({ ...defaultState(), ...next, settings: { ...defaultState().settings, ...next.settings } }))
}

export function useStore(): State {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => state,
  )
}

// ---- dates, XP and streaks ----

export function dayKey(d = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function addDays(d: Date, n: number): Date {
  const c = new Date(d)
  c.setDate(c.getDate() + n)
  return c
}

export function addXp(xp: number, seconds: number, answers: number, correct: number) {
  const today = dayKey()
  setState((s) => ({
    ...s,
    xpByDay: { ...s.xpByDay, [today]: (s.xpByDay[today] ?? 0) + xp },
    secondsStudied: s.secondsStudied + seconds,
    answers: s.answers + answers,
    correct: s.correct + correct,
  }))
}

/** Consecutive days with any practice, ending today (or yesterday if today isn't done yet). */
export function currentStreak(s: State): number {
  let d = new Date()
  if (!s.xpByDay[dayKey(d)]) d = addDays(d, -1)
  let n = 0
  while (s.xpByDay[dayKey(d)]) {
    n++
    d = addDays(d, -1)
  }
  return n
}

export function longestStreak(s: State): number {
  const days = Object.keys(s.xpByDay).filter((k) => s.xpByDay[k] > 0).sort()
  let best = 0
  let run = 0
  let prev: string | null = null
  for (const k of days) {
    const [y, m, d] = k.split('-').map(Number)
    const expected = prev && dayKey(addDays(new Date(Number(prev.slice(0, 4)), Number(prev.slice(5, 7)) - 1, Number(prev.slice(8))), 1))
    run = expected === dayKey(new Date(y, m - 1, d)) ? run + 1 : 1
    best = Math.max(best, run)
    prev = k
  }
  return best
}

export function totalXp(s: State): number {
  return Object.values(s.xpByDay).reduce((a, b) => a + b, 0)
}
