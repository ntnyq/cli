import process from 'node:process'
import { render } from 'ink-testing-library'
import React from 'react'
import stripAnsi from 'strip-ansi'
import { expect, it } from 'vitest'
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

it('snapshot', () => {
  const { lastFrame } = render(<App name='ntnyq' />)
  const stripedFrame = stripAnsi(lastFrame())

  // no `❯` for windows
  expect(stripedFrame.replace('>', '❯')).toMatchSnapshot()
})
