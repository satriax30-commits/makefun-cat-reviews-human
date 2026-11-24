# Make the AI Judge Laugh: Cat Reviews Its Human

[![Make the AI Judge Laugh: Cat Reviews Its Human](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/satriax30-commits/makefun-cat-reviews-human/rank.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/satriax30-commits/makefun-cat-reviews-human/reward.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

A one-star review written by a house cat about its human, for the
[Make the AI Judge Laugh: Cat Reviews Its Human](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
competition on make.fun.

The program holds a single funny one-line review as a constant, validates it
(1–200 characters, a single line, not only whitespace), writes it to
`entry.txt`, reads it back, and verifies the file matches byte-for-byte.

## The review

> One star. My bowl sat empty for four whole minutes. I ate a houseplant in protest and threw up on his shoes. Would not recommend this human.

## How to run

Requires Node 22 or later. No dependencies to install — Node's standard
library only.

```sh
node main.ts
```

This writes the review to `/output/entry.txt`. To write somewhere else
instead, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

The program prints the output path and the review's character count, and
exits with an error if validation or the read-back verification fails.
