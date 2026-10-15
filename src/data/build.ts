// Course content is authored compactly and expanded here.
//
// Item string:   "spanish | english | english alternates ; separated | spanish alternates ; separated"
// Story line:    "Speaker: spanish | english"   (speaker optional)

export type ItemKind = 'word' | 'sentence'

export interface Item {
  id: string
  es: string
  en: string
  enAlt: string[]
  esAlt: string[]
  kind: ItemKind
  unitId: string
}

export interface Lesson {
  id: string
  unitId: string
  title: string
  tip?: string
  items: Item[]
}

export interface StoryLine {
  speaker?: string
  es: string
  en: string
}

export interface StoryQuestion {
  q: string
  options: string[]
  answer: number
}

export interface Story {
  id: string
  unitId: string
  title: string
  lines: StoryLine[]
  questions: StoryQuestion[]
}

export interface Unit {
  id: string
  section: number
  title: string
  emoji: string
  description: string
  lessons: Lesson[]
  story?: Story
}

export interface UnitSource {
  id: string
  title: string
  emoji: string
  description: string
  lessons: { title: string; tip?: string; items: string[] }[]
  story?: { title: string; lines: string[]; questions: StoryQuestion[] }
}

/** Stable id for an item's review card. Keeps accents (tú ≠ tu) and marks questions. */
export function slug(es: string): string {
  const base = es
    .toLowerCase()
    .normalize('NFC')
    .replace(/[^\p{L}\p{N} ]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
  return es.includes('?') ? `${base}-q` : base
}

function splitList(s: string | undefined): string[] {
  return (s ?? '')
    .split(';')
    .map((x) => x.trim())
    .filter(Boolean)
}

export function parseItem(src: string, unitId: string): Item {
  const [es, en, enAlt, esAlt] = src.split('|').map((s) => s.trim())
  if (!es || !en) throw new Error(`Bad item "${src}" in ${unitId}`)
  const words = es.replace(/[¿?¡!.,]/g, '').trim().split(/\s+/).length
  return {
    id: slug(es),
    es,
    en,
    enAlt: splitList(enAlt),
    esAlt: splitList(esAlt),
    kind: words >= 3 ? 'sentence' : 'word',
    unitId,
  }
}

export function unit(section: number, src: UnitSource): Unit {
  return {
    id: src.id,
    section,
    title: src.title,
    emoji: src.emoji,
    description: src.description,
    lessons: src.lessons.map((l, i) => ({
      id: `${src.id}-l${i + 1}`,
      unitId: src.id,
      title: l.title,
      tip: l.tip,
      items: l.items.map((s) => parseItem(s, src.id)),
    })),
    story: src.story && {
      id: `${src.id}-story`,
      unitId: src.id,
      title: src.story.title,
      lines: src.story.lines.map((line) => {
        const [left, en] = line.split('|').map((s) => s.trim())
        const m = left.match(/^([A-ZÁÉÍÓÚÑ][\wáéíóúñ]*):\s*(.+)$/)
        return m ? { speaker: m[1], es: m[2], en } : { es: left, en }
      }),
      questions: src.story.questions,
    },
  }
}
