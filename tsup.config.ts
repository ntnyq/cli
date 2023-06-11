import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/cli.tsx'],
  clean: true,
  bundle: true,
  format: ['esm'],
})
