// "Make the AI Judge Laugh: the Office Joke Open" — entry program.
// Writes exactly ONE office joke (a single line, no trailing newline)
// to the harness-prescribed output file: /output/entry.txt
// Deterministic: same joke on every run, byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// The joke: specific office detail (out-of-office auto-replies, the
// manager, HR), a familiar setup, and the payoff lands in the last
// few words — the referral chain climbs the whole org chart until
// nobody is actually in the office, and HR is still looking.
const JOKE =
  "My out-of-office reply says 'for urgent matters, contact my manager.' " +
  "His says the same about his manager. HR has been searching for the " +
  "entire company since March.";

function main(): void {
  if (JOKE.length === 0 || JOKE.length > MAX_CHARS) {
    throw new Error(`Joke must be 1-${MAX_CHARS} characters, got ${JOKE.length}`);
  }
  if (JOKE.includes("\n")) {
    throw new Error("Joke must be a single line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // No trailing newline: the gate counts every character.
  writeFileSync(OUTPUT_PATH, JOKE, "utf8");
  console.log(`Wrote ${JOKE.length} characters to ${OUTPUT_PATH}`);
}

main();
