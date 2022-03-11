'use strict'

import React, { FC } from 'react'
import { Box, Text } from 'ink'
import open from 'open'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'
import Link from 'ink-link'
import SelectInput from 'ink-select-input'

interface ISelectItem {
  label: string
  url?: string
  key?: string
  action?: () => void
}

const handleSelect = (item: ISelectItem) => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const createItems = (items: ISelectItem[]) => {
  for (const item of items) {
    item.key = item.url || item.label
  }
  return items
}

const items: ISelectItem[] = createItems([
  {
    label: `Website`,
    url: `https://ntnyq.com`,
  },
  {
    label: `Twitter`,
    url: `https://twitter.com/ntnyq`,
  },
  {
    label: `Github`,
    url: `https://github.com/ntnyq`,
  },
  {
    label: `Blog`,
    url: `https://ntnyq.github.io`,
  },
  {
    label: `Segment Fault`,
    url: `https://segmentfault.com/ntnyq`,
  },
  {
    label: `Quit`,
    action() {
      process.exit()
    },
  },
])

const App: FC<{ name: string }> = ({ name }) => (
  <Box flexDirection='column'>
    <Gradient name='rainbow'>
      <BigText text={name} />
    </Gradient>
    <Box marginBottom={1}>
      <Link url={`'https://${name}.com'`}>
        Hello, this is <Text color='cyan'>{name}</Text>, an FE developer.
      </Link>
    </Box>
    <SelectInput items={items as any} onSelect={handleSelect} />
    <Box
      justifyContent='center'
      width='40%'
      borderStyle='classic'
      borderColor='#0ff'
      marginTop={1}
      paddingY={1}
      paddingX={1}
    >
      <Text>
        Copyright &copy; <Text color='green'>{name}</Text>
      </Text>
    </Box>
  </Box>
)

export default App
