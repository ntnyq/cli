import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  entry: ['src/cli.tsx'],
  format: 'esm',
  platform: 'node',
})
