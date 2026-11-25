// Alien Field Notes: The Two Day Earth Review — one line, an alien
// tourist's review of planet Earth, written to /output/entry.txt.
// Deterministic: a fixed string, no network, no randomness, no clock,
// no input of any kind. Node 22 runs this TypeScript as-is.
//
// The angle: sleep is the weird human ritual — a third of life spent
// powered down — and coffee is the reboot. The alien complains about
// the shutdown, then admits the naps were the best part: the turn
// lands in the closing remark, and the rating up front makes it read
// like a real review.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Three stars: the locals power down eight hours a night, then drink bitter bean water to boot back up. Would return — mostly for the naps.";

// The grader runs this in a sandbox with /output ready. Outside the
// grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
