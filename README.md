# Test environment + zod record

This repo is just to demonstrate a weird behaviour while parsing a `z.record` to process `process.env` or `import.meta.env` directly when running on vitest and node test environment.

## Requirements

- Node 22.18 or higher (otherwise you must add the flag `--experimental-strip-types` in the run command)
- Bun 1.2.19 or higher
- Deno 2.4.2 or higher

## Problem

For some reason, zod has issues to parse `process.env` and `import.meta.env` (in contexts that it has) straight in record schemas:

```
ZodError: [
  {
    "expected": "record",
    "code": "invalid_type",
    "path": [],
    "message": "Invalid input: expected record, received "
  }
]
```

## Reproduce

I've created a few environments to see how it behaves and I conclude it's something related to NodeJS.

### Tests frameworks

- `./tests/bun.test.ts` => uses Bun testing framework.
  - run `npm run test:bun`
  - Everything passes ✅

- `./tests/node.test.ts` => uses NodeJS testing framework
  - run `npm run test:node`
  - All valibot tests passes
  - zod processing `process.env` directly fails
    ```
    ZodError: [
      {
        "expected": "record",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected record, received "
      }
    ]
    ```
- `./tests/vitest.test.ts` => uses Vitest as test framework
  - All valibot tests passes
  - zod processing `process.env` and `import.meta.env` directly fails:
    ```
    [
      {
        "expected": "record",
        "code": "invalid_type",
        "path": [],
        "message": "Invalid input: expected record, received "
      }
    ]
    ```

## Running directly

I thought somehow this could be related to the test framework, so I've decided to only console.log and the result of schema parsing and run it in Bun, Deno and Node.

- `npm run env:bun` => No errors ✅
- `npm run env:deno` => No errors ✅
- `npm run env:node` => error 🔴
  ```
  [
    {
      "expected": "record",
      "code": "invalid_type",
      "path": [],
      "message": "Invalid input: expected record, received "
    }
  ]
  ```
