import { useState } from 'react'
import { PathView, SettingsView, Stats, Today, type Activity } from './components/Screens'
import { Session } from './components/Session'
import { StoryView } from './components/StoryView'
import { allItems, itemsById } from './data/course'
import { lessonExercises, reviewExercises, shuffle } from './lib/exercises'
import { dueItemIds, strength } from './lib/srs'
import { getState, setState } from './lib/store'

type Tab = 'today' | 'learn' | 'progress' | 'settings'

const TABS: [Tab, string, string][] = [
  ['today', '🏠', 'Today'],
  ['learn', '🗺️', 'Learn'],
  ['progress', '📈', 'Progress'],
  ['settings', '⚙️', 'Settings'],
]

const REVIEW_SIZE = 15

export default function App() {
  const [tab, setTab] = useState<Tab>('today')
  const [activity, setActivity] = useState<Activity | null>(null)

  if (activity) {
    const exit = () => setActivity(null)
    if (activity.kind === 'story') return <StoryView key={activity.story.id} story={activity.story} onExit={exit} />
    if (activity.kind === 'lesson') {
      const { lesson } = activity
      return (
        <Session
          key={lesson.id}
          title={lesson.title}
          exercises={lessonExercises(lesson)}
          baseXp={() => 10}
          onComplete={() =>
            setState((s) => ({ ...s, lessonsDone: { ...s.lessonsDone, [lesson.id]: (s.lessonsDone[lesson.id] ?? 0) + 1 } }))
          }
          onExit={exit}
        />
      )
    }
    const s = getState()
    // Review = items that are due. Practice = your weakest learned items, when nothing is due.
    const ids =
      activity.kind === 'review'
        ? dueItemIds(s).slice(0, REVIEW_SIZE)
        : shuffle(
            allItems
              .filter((it) => s.cards[it.id])
              .sort((a, b) => strength(s, a.id) - strength(s, b.id))
              .slice(0, REVIEW_SIZE * 2),
          )
            .slice(0, 10)
            .map((it) => it.id)
    return (
      <Session
        key={activity.kind}
        title={activity.kind === 'review' ? 'Review' : 'Practice'}
        exercises={reviewExercises(ids, itemsById)}
        baseXp={(n) => Math.max(5, n)}
        onExit={exit}
      />
    )
  }

  return (
    <div className="app">
      <main>
        {tab === 'today' && <Today start={setActivity} />}
        {tab === 'learn' && <PathView start={setActivity} />}
        {tab === 'progress' && <Stats />}
        {tab === 'settings' && <SettingsView />}
      </main>
      <nav className="tabbar">
        {TABS.map(([id, icon, label]) => (
          <button key={id} className={tab === id ? 'on' : ''} onClick={() => setTab(id)}>
            <span className="tab-icon">{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
