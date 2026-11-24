// The Dog Ate My Homework: Funniest Excuse
// Writes the chosen one-line excuse (in the dog's own voice) to /output/entry.txt.
// Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You left it on the floor. The floor is mine. The homework was on the floor. Do the math.";

// Gate self-check: the sealed scorer only accepts 1-200 chars, one line,
// non-blank UTF-8. Fail loudly here instead of shipping an invalid entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} chars, outside the 1-200 gate`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
