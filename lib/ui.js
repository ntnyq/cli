'use strict'

const React = require('react')
const { Box, Text } = require('ink')
const open = require('open')
const Gradient = require('ink-gradient')
const BigText = require('ink-big-text')
const Link = require('ink-link')
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

const App = () => (
  <Box flexDirection='column'>
    <Gradient name='rainbow'>
      <BigText text='ntnyq' />
    </Gradient>
    <Box marginBottom={1}>
      <Link url='https://ntnyq.com'>
        Hello, this is <Text color='cyan'>ntnyq</Text>, an FE developer.
      </Link>
    </Box>
    <SelectInput items={items} onSelect={handleSelect} />
    <Box
      justifyContent='center'
      width='40%'
      borderStyle='classic'
      borderColor='#0ff'
      marginTop={1}
      paddingY={2}
      paddingX={1}
    >
      <Text>
        Copyright &copy; <Text color='green'>ntnyq</Text>
      </Text>
    </Box>
  </Box>
)

module.exports = App
