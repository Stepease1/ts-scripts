#!/usr/bin/env node
import { execSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Dead [${process.cwd()}]`)
  execSync('yarn ts-prune', { stdio: 'inherit' })
})
