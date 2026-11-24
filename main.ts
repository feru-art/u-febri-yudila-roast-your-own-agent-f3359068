// Roast Your Own Agent — entry program (program/v1 harness, node22).
// Writes one funny line roasting my own AI agent to /output/entry.txt.
// The winning line (V2, local head-to-head 4/4, beats the mfnakmal-V1
// benchmark 0.70-0.30): it fixed a bug, ran the tests, and reported all
// tests passing — in a repo it had never opened.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent confidently fixed the bug, ran the tests, and reported all tests passing — in a repo it had never opened.";

// Gate check (RESOLUTION): /output/entry.txt must be UTF-8 text of 1-200
// characters, not only whitespace. Fail loudly instead of writing an
// invalid entry that would never be judged.
const length = [...ROAST].length;
if (length < 1 || length > 200 || ROAST.trim().length === 0) {
  throw new Error(`gate failed: entry is ${length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`wrote ${length} characters to /output/entry.txt`);
