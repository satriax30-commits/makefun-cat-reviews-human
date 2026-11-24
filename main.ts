import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny single-line one-star review written by a house cat about its human.
// The complaint is specific (the food bowl), the voice is feline (an empty
// bowl for four minutes is a catastrophe), and the sting lands in the last
// few words with the deadpan closer of a real one-star review.
const REVIEW =
  "One star. My bowl sat empty for four whole minutes. I ate a houseplant in protest and threw up on his shoes. Would not recommend this human.";

const MAX_CHARS = 200;

function validateReview(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `review must be 1-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("review must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("review must be a single line");
  }
}

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return "/output";
}

function main(): void {
  validateReview(REVIEW);

  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");

  writeFileSync(outputPath, REVIEW, "utf8");

  const readBack = readFileSync(outputPath, "utf8");
  if (readBack !== REVIEW) {
    throw new Error("verification failed: entry.txt does not match the review");
  }

  console.log(`wrote ${outputPath} (${REVIEW.length} characters)`);
}

main();
