import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Good news — I turned your ticket off and on again, and my screen says you're all fixed now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
