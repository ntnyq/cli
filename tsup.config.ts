import { defineConfig } from 'tsup'

export default defineConfig({
  bundle: true,
  clean: true,
  entry: ['src/cli.tsx'],
  format: ['esm'],
})
