import type { Item, Lesson, Story, Unit } from './build'

export type { Item, Lesson, Story, Unit } from './build'

// Every src/data/section*.ts file is a course section; adding a file adds content.
const modules = import.meta.glob<{ default: Unit[] }>('./section*.ts', { eager: true })

export const units: Unit[] = Object.keys(modules)
  .sort()
  .flatMap((k) => modules[k].default)
  .sort((a, b) => a.section - b.section || a.id.localeCompare(b.id))

export const sectionNames: Record<number, string> = {
  1: 'Section 1 · Beginner (A1)',
  2: 'Section 2 · Elementary (A2)',
  3: 'Section 3 · Intermediate (B1)',
  4: 'Section 4 · Upper intermediate (B2)',
}

export const lessons: Lesson[] = units.flatMap((u) => u.lessons)
export const stories: Story[] = units.flatMap((u) => (u.story ? [u.story] : []))

export const itemsById = new Map<string, Item>()
for (const l of lessons)
  for (const it of l.items) {
    const prev = itemsById.get(it.id)
    // Same Spanish with a different meaning (la estación: season / station) gets its own card.
    const sameMeaning = (a: Item, b: Item) => [a.en, ...a.enAlt].some((e) => e.toLowerCase() === b.en.toLowerCase())
    if (prev && !sameMeaning(prev, it) && !sameMeaning(it, prev)) it.id = `${it.id}~${it.unitId}`
    if (!itemsById.has(it.id)) itemsById.set(it.id, it)
  }
export const allItems: Item[] = [...itemsById.values()]

export const unitById = new Map(units.map((u) => [u.id, u]))
export const lessonById = new Map(lessons.map((l) => [l.id, l]))
export const storyById = new Map(stories.map((s) => [s.id, s]))
