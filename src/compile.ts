#!/usr/bin/env node
import { execSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Compile [${process.cwd()}]`)
  const imageExtList = ['gif', 'png', 'svg', 'jpg', 'jpeg', 'webp']
  execSync('yarn rimraf dist', { stdio: 'inherit' })
  execSync('yarn rollup -c', { stdio: 'inherit' })
  execSync('yarn tsc -p tsconfig.build.json', { stdio: 'inherit' })
  imageExtList.forEach((ext) => {
    execSync(`yarn copyfiles -u 1 "./src/**/*.${ext}" dist`, { stdio: 'inherit' })
  })
})
