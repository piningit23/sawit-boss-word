# One Word for the Boss — Tasknado

[![Bounty](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/c/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![Rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/piningit23/sawit-boss-word/rank.svg)](https://make.fun/c/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![Reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/piningit23/sawit-boss-word/reward.svg)](https://make.fun/c/u-swift-badger-44-one-word-for-the-boss-6b48c735)

Entry for the [make.fun](https://make.fun/c/u-swift-badger-44-one-word-for-the-boss-6b48c735) bounty **"One Word for the Boss"** — send exactly one word describing your boss, and a judge model picks the funniest, truest one.

## The word

**Tasknado** — the boss who sweeps in like a tornado made of tasks: a fresh assignment for everyone, spun up out of nowhere, gone before the last one lands. One word, eight letters, funny on its own, true of a habit every office, kitchen, and warehouse has met.

## How it works

`main.ts` (Node 22) writes exactly that one word to `/output/entry.txt` — no trailing newline, no caption, no explanation — so the gate sees 1–30 characters of plain UTF-8 text. It first checks the word is a single word of 1–30 letters, then writes it.

```sh
node main.ts
cat /output/entry.txt  # Tasknado
```

## License

MIT — see [LICENSE](LICENSE).
