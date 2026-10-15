# Speaky

A free, Duolingo-style Spanish course that runs in your browser and installs on iPhone and Mac. No account, no ads, no subscription. Progress is stored on your device.

**Live app:** https://joelcomm.github.io/speaky/. Every push to `main` rebuilds and republishes it automatically.

## What's inside

- **Course:** Latin American Spanish in 4 sections, from total beginner (A1) to upper intermediate (B2). Units are made of lessons, each lesson has grammar tips, and each unit ends with a short story.
- **Exercises:** new-word cards, multiple choice, tap-the-tiles sentence building, typing (with an accent keyboard), listening dictation, speaking (speech recognition), and matching pairs. Answer checking is forgiving: it accepts missing accents, small typos, contractions, and dropped subject pronouns.
- **Spaced repetition:** every word and sentence you learn gets a review card scheduled with [FSRS](https://github.com/open-spaced-repetition/ts-fsrs), the algorithm Anki uses, so it comes back right before you'd forget it.
- **Daily habit:** XP, a daily goal, streaks, a week strip, and an activity heatmap.
- **Audio:** uses your device's built-in Spanish voices, so it's free and works offline. For the best sound, download an *Enhanced* or *Premium* Spanish voice (Mexico or US). On Mac: System Settings → Accessibility → Spoken Content → System voice → Manage Voices. On iPhone: Settings → Accessibility → Spoken Content → Voices → Spanish.

## Run it

```bash
npm install
npm run dev
```

This opens at http://localhost:5180. Because the dev server listens on your network, your iPhone can open `http://<your-Mac's-IP>:5180` while both are on the same Wi-Fi. Over plain `http` the speaking exercises and offline mode are off; everything else works.

## Install it like an app

Build it with `npm run build`, then host the `dist/` folder on any free static host over HTTPS (GitHub Pages, Cloudflare Pages, Netlify). After that:

- **iPhone:** open the site in Safari → Share → **Add to Home Screen**.
- **Mac:** in Safari, File → **Add to Dock**. In Chrome, use the install icon in the address bar.

It then works offline and opens full-screen like an app.

## Moving progress between devices

Progress lives on each device. Use **Settings → Export progress** on one device and **Import progress** on the other.

## Adding or editing lessons

Course content lives in `src/data/section*.ts`, and any new `section*.ts` file is picked up automatically. Items are compact strings:

```ts
'spanish | english | english alternates;separated | spanish alternates;separated'
```

See `src/data/build.ts` for the full format and `src/data/section1a.ts` for examples. After editing, run:

```bash
npm run check:course
```

It validates every unit, lesson, item and story, and test-generates every exercise.

## Project layout

| Path | What it does |
|---|---|
| `src/data/` | Course content and parser |
| `src/lib/exercises.ts` | Turns lesson items into exercises |
| `src/lib/srs.ts` | Spaced-repetition scheduling |
| `src/lib/answer.ts` | Forgiving answer checking |
| `src/lib/speech.ts` | Text-to-speech and speech recognition |
| `src/lib/store.ts` | Saved progress, XP and streaks |
| `src/components/` | Screens, lesson player, exercises, stories |
