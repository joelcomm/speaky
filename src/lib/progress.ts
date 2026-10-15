import { units, type Lesson, type Story, type Unit } from '../data/course'
import type { State } from './store'

export function unitComplete(s: State, u: Unit): boolean {
  return u.lessons.every((l) => s.lessonsDone[l.id])
}

export function unitUnlocked(s: State, index: number): boolean {
  return index === 0 || index <= s.unlockedThrough || unitComplete(s, units[index - 1])
}

export function lessonUnlocked(s: State, u: Unit, unitIndex: number, lessonIndex: number): boolean {
  if (!unitUnlocked(s, unitIndex)) return false
  return lessonIndex === 0 || !!s.lessonsDone[u.lessons[lessonIndex - 1].id]
}

export interface NextLesson {
  unit: Unit
  unitIndex: number
  lesson: Lesson
  lessonIndex: number
}

/** The first unfinished lesson you're allowed to take. */
export function nextLesson(s: State): NextLesson | null {
  for (let ui = 0; ui < units.length; ui++) {
    const u = units[ui]
    if (!unitUnlocked(s, ui)) continue
    const li = u.lessons.findIndex((l) => !s.lessonsDone[l.id])
    if (li >= 0 && lessonUnlocked(s, u, ui, li)) return { unit: u, unitIndex: ui, lesson: u.lessons[li], lessonIndex: li }
  }
  return null
}

/** The first story from a finished unit that you haven't read yet. */
export function nextStory(s: State): Story | null {
  for (const u of units) if (u.story && unitComplete(s, u) && !s.storiesDone[u.story.id]) return u.story
  return null
}

export function unitProgress(s: State, u: Unit): number {
  return u.lessons.filter((l) => s.lessonsDone[l.id]).length / u.lessons.length
}
