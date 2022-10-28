import React from 'react'
import { it, expect } from 'vitest'
import { render } from 'ink-testing-library'
import { App } from './App'

it(`render App`, () => {
  const { lastFrame } = render(<App name='ntnyq' />)
  expect(lastFrame().includes(`ntnyq`)).toBeTruthy()
})
