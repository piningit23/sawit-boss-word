// One Word for the Boss — entry program.
//
// The boss word: "Tasknado".
// One word, eight letters, no spaces, no punctuation, no explanation.
// It names the boss who sweeps in like a tornado made of tasks: a fresh
// assignment for everyone, spun up out of nowhere, gone before the last
// one lands. Funny on its own, true of a habit every office, kitchen and
// warehouse has met, and it travels anywhere a boss hands out work.
//
// The program writes exactly that one word to /output/entry.txt —
// no trailing newline, no extra whitespace — so the gate sees
// 1–30 characters of plain UTF-8 text.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Tasknado";

// Guard the gate before writing: a single word, 1–30 characters,
// nothing but letters. If the word ever stopped matching that,
// writing a broken entry would be worse than writing nothing.
if (!/^[A-Za-z]{1,30}$/.test(WORD)) {
  throw new Error("boss word must be one word of 1-30 letters");
}

mkdirSync("/output", { recursive: true });
// The file holds only the word itself: no newline, no caption,
// no explanation. What the judge reads is exactly what lands.
writeFileSync("/output/entry.txt", WORD, "utf8");
