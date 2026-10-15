import { allItems, unitById, type Item, type Lesson } from '../data/course'
import { normalize, stripAccents, tokens } from './answer'
import { getState } from './store'

export type Exercise =
  | { kind: 'intro'; key: string; item: Item }
  | { kind: 'choice'; key: string; item: Item; dir: 'es2en' | 'en2es' | 'audio'; options: string[]; answer: string }
  | { kind: 'build'; key: string; item: Item; dir: 'es2en' | 'en2es'; tiles: string[]; accepted: string[] }
  | { kind: 'type'; key: string; item: Item }
  | { kind: 'listen'; key: string; item: Item }
  | { kind: 'speak'; key: string; item: Item }
  | { kind: 'match'; key: string; items: Item[] }

let seq = 0
const key = () => `x${++seq}`

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const pickOne = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

/** Items to borrow wrong answers from: same kind, nearby in the course first. */
function distractorPool(item: Item): Item[] {
  const unitIds = [...unitById.keys()]
  const ui = unitIds.indexOf(item.unitId)
  const near = new Set(unitIds.slice(Math.max(0, ui - 2), ui + 1))
  const same = allItems.filter((o) => o.kind === item.kind && o.id !== item.id)
  const nearby = same.filter((o) => near.has(o.unitId))
  return nearby.length >= 6 ? nearby : same
}

function choice(item: Item, dir: 'es2en' | 'en2es' | 'audio'): Exercise {
  const field = dir === 'es2en' ? 'en' : 'es'
  const answer = item[field]
  const taken = new Set([answer, ...(dir === 'es2en' ? item.enAlt : item.esAlt)].map((s) => normalize(s)))
  const options = [answer]
  for (const o of shuffle(distractorPool(item))) {
    const v = o[field]
    if (taken.has(normalize(v))) continue
    taken.add(normalize(v))
    options.push(v)
    if (options.length === 4) break
  }
  return { kind: 'choice', key: key(), item, dir, options: shuffle(options), answer }
}

function build(item: Item, dir: 'es2en' | 'en2es'): Exercise {
  const target = dir === 'es2en' ? item.en : item.es
  const accepted = dir === 'es2en' ? [item.en, ...item.enAlt] : [item.es, ...item.esAlt]
  const words = tokens(target)
  const have = new Set(words.map((w) => w.toLowerCase()))
  const extra: string[] = []
  for (const o of shuffle(distractorPool(item))) {
    for (const w of tokens(dir === 'es2en' ? o.en : o.es)) {
      const lw = w.toLowerCase()
      if (have.has(lw)) continue
      have.add(lw)
      extra.push(w)
      if (extra.length >= Math.min(5, Math.max(3, Math.ceil(words.length / 2)))) break
    }
    if (extra.length >= 3) break
  }
  return { kind: 'build', key: key(), item, dir, tiles: shuffle([...words, ...extra]), accepted }
}

const intro = (item: Item): Exercise => ({ kind: 'intro', key: key(), item })
const typeIt = (item: Item): Exercise => ({ kind: 'type', key: key(), item })
const listen = (item: Item): Exercise => ({ kind: 'listen', key: key(), item })
const speakIt = (item: Item): Exercise => ({ kind: 'speak', key: key(), item })
/** Matching needs every Spanish and English label to be unique on screen. */
function match(items: Item[]): Exercise {
  const es = new Set<string>()
  const en = new Set<string>()
  const unique = items.filter((it) => {
    const a = normalize(it.es)
    const b = normalize(it.en)
    if (es.has(a) || en.has(b)) return false
    es.add(a)
    en.add(b)
    return true
  })
  return { kind: 'match', key: key(), items: unique.slice(0, 5) }
}

/** A harder "produce the Spanish" exercise for an item the learner has already seen. */
function production(item: Item, section: number): Exercise {
  const { listening } = getState().settings
  if (item.kind === 'word') {
    const opts = [choice(item, 'en2es'), typeIt(item)]
    if (listening) opts.push(choice(item, 'audio'))
    return pickOne(opts)
  }
  const opts = [build(item, 'en2es'), build(item, 'en2es')]
  if (section >= 2) opts.push(typeIt(item))
  if (section >= 3) opts.push(typeIt(item))
  return pickOne(opts)
}

export function lessonExercises(lesson: Lesson): Exercise[] {
  const section = unitById.get(lesson.unitId)?.section ?? 1
  const { listening, speaking } = getState().settings
  const items = lesson.items
  const words = items.filter((i) => i.kind === 'word')
  const sentences = items.filter((i) => i.kind === 'sentence')

  // Pass 1: meet everything (new words get an intro card, sentences are read first).
  const first: Exercise[] = items.map((it) => (it.kind === 'word' ? intro(it) : build(it, 'es2en')))
  // Pass 2: recognize, then produce.
  const second: Exercise[] = []
  for (const w of words.slice(0, 3)) second.push(choice(w, 'es2en'))
  for (const it of items) second.push(production(it, section))
  const spoken = shuffle(sentences.length ? sentences : items)
  if (listening && spoken[0]) second.push(listen(spoken[0]))
  if (speaking && spoken[1]) second.push(speakIt(spoken[1]))

  const out = [...first, ...shuffle(second)]
  if (words.length >= 3) out.splice(first.length, 0, match(shuffle(words)))
  return out
}

export function reviewExercises(itemIds: string[], items: Map<string, Item>): Exercise[] {
  const { listening, speaking } = getState().settings
  return shuffle(
    itemIds.flatMap((id) => {
      const it = items.get(id)
      if (!it) return []
      const section = unitById.get(it.unitId)?.section ?? 1
      const r = Math.random()
      // Words already get audio questions via production(); give sentences their share here.
      if (it.kind === 'sentence' && listening && r < 0.2) return [listen(it)]
      if (it.kind === 'sentence' && speaking && r < 0.3) return [speakIt(it)]
      return [production(it, section)]
    }),
  )
}

/** The items an exercise tests, for scoring (intros and matching aren't scored). */
export function scoredItem(ex: Exercise): Item | null {
  return ex.kind === 'intro' || ex.kind === 'match' ? null : ex.item
}

/** Clone an exercise to retry it at the end of the session after a mistake. */
export function retry(ex: Exercise): Exercise {
  if (ex.kind === 'choice') return choice(ex.item, ex.dir)
  if (ex.kind === 'build') return build(ex.item, ex.dir)
  return { ...ex, key: key() }
}

// ---- tap-a-word hints, built from the course's own single-word items ----

const ARTICLES = /^(el|la|los|las|un|una) /
let hintMap: Map<string, string> | null = null

export function hintFor(word: string): string | undefined {
  if (!hintMap) {
    hintMap = new Map()
    for (const it of allItems) {
      if (it.kind !== 'word') continue
      const es = normalize(it.es).replace(ARTICLES, '')
      if (es.includes(' ')) {
        if (!hintMap.has(es)) hintMap.set(es, it.en)
        continue
      }
      const en = it.en.replace(/^(the|a|an) /i, '')
      if (!hintMap.has(es)) hintMap.set(es, en)
      if (!hintMap.has(stripAccents(es))) hintMap.set(stripAccents(es), en)
    }
  }
  const w = normalize(word)
  return hintMap.get(w) ?? hintMap.get(stripAccents(w))
}
