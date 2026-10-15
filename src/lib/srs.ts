import { createEmptyCard, fsrs, generatorParameters, Rating, State as CardState, type Card } from 'ts-fsrs'
import { getState, setState, type SavedCard, type State } from './store'

// FSRS spaced repetition. Lessons give in-session practice already, so short-term
// learning steps are off: a newly learned item first comes back in a day or more.
const scheduler = fsrs(generatorParameters({ enable_fuzz: true, enable_short_term: false, request_retention: 0.9 }))

function revive(c: SavedCard): Card {
  return { ...c, due: new Date(c.due), last_review: c.last_review ? new Date(c.last_review) : undefined }
}

function save(c: Card): SavedCard {
  return { ...c, due: c.due.toISOString(), last_review: c.last_review?.toISOString() }
}

/** Record how each item went. Items not yet due are left alone (extra practice doesn't skew scheduling). */
export function recordResults(results: Map<string, boolean>) {
  const now = new Date()
  setState((s) => {
    const cards = { ...s.cards }
    for (const [id, correct] of results) {
      const existing = cards[id] ? revive(cards[id]) : null
      if (existing && existing.due > now) continue
      const card: Card = existing ?? createEmptyCard<Card>(now)
      const isNew = !existing
      const rating = correct ? Rating.Good : isNew ? Rating.Hard : Rating.Again
      cards[id] = save(scheduler.next(card, now, rating).card)
    }
    return { ...s, cards }
  })
}

export function dueItemIds(s: State = getState(), now = new Date()): string[] {
  return Object.entries(s.cards)
    .filter(([, c]) => new Date(c.due) <= now)
    .sort((a, b) => a[1].due.localeCompare(b[1].due))
    .map(([id]) => id)
}

/** Items you've reviewed successfully past the first day count as "known". */
export function knownCount(s: State): number {
  return Object.values(s.cards).filter((c) => c.state === CardState.Review && c.stability >= 2).length
}

export function strength(s: State, id: string, now = new Date()): number {
  const c = s.cards[id]
  if (!c) return 0
  const card = revive(c)
  return scheduler.get_retrievability(card, now, false) as number
}
