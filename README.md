# Test environment + zod record

This repo is just to demonstrate a weird behaviour while parsing a `z.record` to process `process.env` or `import.meta.env` directly when running on vitest and node test environment.

## Requirements

- Node 22.18 or higher (otherwise you must add the flag `--experimental-strip-types` in the run command)
- Bun 1.2.19 or higher
- Deno 2.4.2 or higher

## Problem

For some reason, zod has issues to parse `process.env` and `import.meta.env` (in contexts that it has) straight in record schemas.
