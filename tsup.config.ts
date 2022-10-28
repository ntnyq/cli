import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [`lib/cli.tsx`],
  clean: true,
  bundle: true,
  format: [`cjs`],
})
