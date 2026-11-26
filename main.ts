// Monday Morning Punchlines — writes one joke (<= 200 chars) to /output/entry.txt.
// Node 22, standard library only, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My doctor told me to keep a consistent sleep schedule. So now I've slept through every Monday morning since 2019.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", joke + "\n", "utf8");
