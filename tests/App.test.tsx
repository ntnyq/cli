import process from 'node:process'
import { stripVTControlCharacters } from 'node:util'
import { render } from 'ink-testing-library'
import React from 'react'
import { expect, it } from 'vitest'
import { App } from '../src/App'

it('render App', () => {
  // @ts-expect-error expect a string
  process.env.FORCE_COLOR = 1

  const { lastFrame } = render(<App name='ntnyq' />)

  const stripedFrame = stripVTControlCharacters(lastFrame())

  expect(
    [
      'ntnyq',
      'Website',
      'Twitter',
      'GitHub',
      'Bluesky',
      'Bilibili',
      'Juejin',
      'Segment Fault',
      'Quit',
    ].every(word => stripedFrame.includes(word)),
  ).toBeTruthy()

  delete process.env.FORCE_COLOR
})

it('snapshot', () => {
  const { lastFrame } = render(<App name='ntnyq' />)
  const stripedFrame = stripVTControlCharacters(lastFrame())

  // no `❯` for windows
  expect(stripedFrame.replace('>', '❯')).toMatchSnapshot()
})
