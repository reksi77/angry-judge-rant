// Angry Judge: The Short Rant Contest — entry program.
//
// Writes exactly one short funny rant to /output/entry.txt.
// No dependencies, Node 22+. The rant is a single string constant;
// the program does nothing else, so the output is deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "My neighbour fires up his leaf blower at 7:04 every Saturday, four minutes after I finally fall back asleep. He owns one tree. One. It drops about nine leaves a week, and he chases each one like it insulted his mother. By half past seven the garden is spotless, the street is awake, and I am lying there wondering what kind of man wages war on nine leaves before breakfast.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate check, mirroring the contest gate: the entry must be UTF-8 text of
// 1 to 400 characters and not only whitespace. Fail loudly instead of
// writing an invalid entry.
const charCount = [...RANT].length;
if (charCount < 1 || charCount > 400) {
  throw new Error(`entry is ${charCount} characters, must be 1-400`);
}
if (RANT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, RANT, "utf8");
