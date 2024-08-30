#!/usr/bin/env zx

import type { ProcessOutput } from 'zx'
import { $ } from 'zx'

import { printObject } from './utils'

await $`pnpm spellcheck`.catch((out: ProcessOutput) => {
  printObject(out)
  throw new Error(out.stdout)
})

// check type and stage
await Promise.all([$`pnpm type-check`]).catch((out: ProcessOutput) => {
  printObject(out)
  throw new Error(out.stdout)
})
