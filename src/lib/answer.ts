// Forgiving answer checking: ignores case and punctuation, accepts listed alternates,
// and accepts small typos or missing accents with a gentle note.

export function stripAccents(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC')
}

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[¿?¡!.,;:"“”()…—–-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Plain words of a sentence, for word tiles. */
export function tokens(s: string): string[] {
  return s
    .replace(/[¿?¡!.,;:"“”()…]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

const SUBJECTS = /^(yo|tú|tu|él|ella|usted|nosotros|nosotras|ellos|ellas|ustedes) /

/** Spanish lets you drop the subject pronoun, so accept that automatically. */
export function spanishVariants(answers: string[]): string[] {
  const out = new Set<string>()
  for (const a of answers) {
    const n = normalize(a)
    out.add(n)
    if (SUBJECTS.test(n)) out.add(n.replace(SUBJECTS, ''))
  }
  return [...out]
}

const EN_CONTRACTIONS: [RegExp, string][] = [
  [/\bi'm\b/g, 'i am'],
  [/\byou're\b/g, 'you are'],
  [/\bwe're\b/g, 'we are'],
  [/\bthey're\b/g, 'they are'],
  [/\b(he|she|it|what|where|who|that|there)'s\b/g, '$1 is'],
  [/\b(do|does|did|is|are|was|were|have|has|had|could|would|should)n't\b/g, '$1 not'],
  [/\bcan't\b/g, 'cannot'],
  [/\bcan not\b/g, 'cannot'],
  [/\bwon't\b/g, 'will not'],
  [/\bi'll\b/g, 'i will'],
  [/\b(you|we|they|he|she|it)'ll\b/g, '$1 will'],
  [/\bi've\b/g, 'i have'],
  [/\b(you|we|they)'ve\b/g, '$1 have'],
  [/\bi'd\b/g, 'i would'],
  [/\b(you|we|they|he|she)'d\b/g, '$1 would'],
  [/\blet's\b/g, 'let us'],
]

function canonEnglish(s: string): string {
  let n = normalize(s)
  for (const [re, rep] of EN_CONTRACTIONS) n = n.replace(re, rep)
  return n
    .replace(/\(.*?\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0
  const dp = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0]
    dp[0] = i
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j]
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1))
      prev = tmp
    }
  }
  return dp[b.length]
}

export type Verdict = { ok: true; note?: 'accent' | 'typo' } | { ok: false }

export function check(input: string, accepted: string[], lang: 'es' | 'en'): Verdict {
  const canon = lang === 'en' ? canonEnglish : normalize
  const given = canon(input)
  if (!given) return { ok: false }
  const targets = (lang === 'es' ? spanishVariants(accepted) : accepted).map(canon)
  if (targets.includes(given)) return { ok: true }
  if (lang === 'es' && targets.some((t) => stripAccents(t) === stripAccents(given))) return { ok: true, note: 'accent' }
  const g = stripAccents(given)
  for (const t of targets) {
    const tt = stripAccents(t)
    const allowed = tt.length >= 12 ? 2 : tt.length >= 5 ? 1 : 0
    if (allowed && levenshtein(g, tt) <= allowed) return { ok: true, note: 'typo' }
  }
  return { ok: false }
}

/** Does a speech transcript match closely enough? Pronunciation is graded generously. */
export function speechMatches(transcripts: string[], target: string): boolean {
  const want = stripAccents(normalize(target)).split(' ')
  return transcripts.some((t) => {
    const got = new Set(stripAccents(normalize(t)).split(' '))
    const hits = want.filter((w) => got.has(w)).length
    return hits / want.length >= 0.75
  })
}
