'use strict'
const React = require('react')
const { Box, Text, Color } = require('ink')
const open = require('open')
const InkBox = require('ink-box')
const Gradient = require('ink-gradient')
const BigText = require('ink-big-text')
const SelectInput = require('ink-select-input').default

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const createItems = items => {
  for (const item of items) {
    item.key = item.url || item.label
  }

  return items
}

const items = createItems([
  {
    label: 'Website',
    url: 'https://ntnyq.com',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/ntnyq',
  },
  {
    label: 'Github',
    url: 'https://github.com/ntnyq',
  },
  {
    label: 'Blog',
    url: 'https://ntnyq.github.io',
  },
  {
    label: 'Segment Fault',
    url: 'https://segmentfault.com',
  },
  {
    label: 'Quit',
    action() {
      process.exit()
    },
  },
])

module.exports = () => (
  <Box flexDirection='column'>
    <Gradient name='rainbow'>
      <BigText text='ntnyq' />
    </Gradient>
    <Box marginBottom={1}>
      <Text>
        Hello, this is <Color cyan>ntnyq</Color>, an FE developer.
      </Text>
    </Box>
    <SelectInput items={items} onSelect={handleSelect} />
    <InkBox borderStyle='round' borderColor='cyan' float='center' padding={1}>
      Copyright &copy; <Color green>ntnyq</Color>
    </InkBox>
  </Box>
)
