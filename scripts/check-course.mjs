// Validates every course section: run with `npm run check:course`.
// Loads the real course through Vite so the same parser and exercise generator are tested.
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const problems = []
const warnings = []
try {
  const { units, lessons, allItems } = await server.ssrLoadModule('/src/data/course.ts')
  const { lessonExercises, reviewExercises } = await server.ssrLoadModule('/src/lib/exercises.ts')

  const seenUnit = new Set()
  for (const u of units) {
    if (seenUnit.has(u.id)) problems.push(`duplicate unit id ${u.id}`)
    seenUnit.add(u.id)
    if (!u.story) warnings.push(`${u.id}: no story`)
    for (const l of u.lessons) {
      if (l.items.length < 5) warnings.push(`${l.id}: only ${l.items.length} items`)
      const ids = new Set()
      for (const it of l.items) {
        if (ids.has(it.id)) problems.push(`${l.id}: "${it.es}" appears twice`)
        ids.add(it.id)
        if (/[|]/.test(it.es + it.en)) problems.push(`${l.id}: stray "|" in "${it.es}"`)
        if (!it.id) problems.push(`${l.id}: "${it.es}" has an empty id`)
      }
      try {
        const exs = lessonExercises(l)
        for (const ex of exs) {
          if (ex.kind === 'choice' && ex.options.length < 3) warnings.push(`${l.id}: only ${ex.options.length} options for "${ex.item.es}"`)
          if (ex.kind === 'choice' && !ex.options.includes(ex.answer)) problems.push(`${l.id}: answer missing from options`)
        }
      } catch (e) {
        problems.push(`${l.id}: exercise generation failed: ${e.message}`)
      }
    }
    if (u.story) {
      for (const line of u.story.lines) if (!line.en) problems.push(`${u.id} story: line without English: "${line.es}"`)
      for (const q of u.story.questions)
        if (!(q.answer >= 0 && q.answer < q.options.length)) problems.push(`${u.id} story: bad answer index for "${q.q}"`)
    }
  }

  // Same Spanish text taught with different meanings shares one review card; flag it.
  const byId = new Map()
  for (const l of lessons)
    for (const it of l.items) {
      const prev = byId.get(it.id)
      if (prev && prev.en.toLowerCase() !== it.en.toLowerCase() && !prev.enAlt.includes(it.en) && !it.enAlt.includes(prev.en) && !it.id.includes("~"))
        warnings.push(`"${it.es}" means "${prev.en}" in ${prev.unitId} but "${it.en}" in ${it.unitId}`)
      if (!prev) byId.set(it.id, it)
    }

  reviewExercises(allItems.map((i) => i.id), new Map(allItems.map((i) => [i.id, i])))

  const sentences = allItems.filter((i) => i.kind === 'sentence').length
  console.log(
    `${units.length} units · ${lessons.length} lessons · ${allItems.length} unique items (${sentences} sentences) · ${units.filter((u) => u.story).length} stories`,
  )
  for (const s of [1, 2, 3, 4]) {
    const us = units.filter((u) => u.section === s)
    if (us.length) console.log(`  section ${s}: ${us.length} units, ${us.reduce((n, u) => n + u.lessons.length, 0)} lessons`)
  }
} catch (e) {
  problems.push(`failed to load course: ${e.stack ?? e}`)
} finally {
  await server.close()
}

if (warnings.length) console.log(`\n${warnings.length} warning(s):\n  ` + warnings.join('\n  '))
if (problems.length) {
  console.log(`\n${problems.length} problem(s):\n  ` + problems.join('\n  '))
  process.exit(1)
}
console.log('\nCourse OK')
