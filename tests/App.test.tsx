import process from 'node:process'
import React from 'react'
import { it, expect } from 'vitest'
import stripAnsi from 'strip-ansi'
import { render } from 'ink-testing-library'
import { App } from '../src/App'

it('render App', () => {
  // @ts-expect-error expect a string
  process.env.FORCE_COLOR = 1

  const { lastFrame } = render(<App name='ntnyq' />)

  const stripedFrame = stripAnsi(lastFrame())

  expect(
    ['ntnyq', 'Website', 'Twitter', 'GitHub', 'Bilibili', 'Juejin', 'Segment Fault', 'Quit'].every(
      word => stripedFrame.includes(word),
    ),
  ).toBeTruthy()

  delete process.env.FORCE_COLOR
})
