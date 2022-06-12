'use strict'

import React from 'react'
import { Box, Text } from 'ink'
import open from 'open'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'
import Link from 'ink-link'
import SelectInput from 'ink-select-input'
import type { ISelectItem } from './types'

const handleSelect = (item: ISelectItem) => {
  if (item.url) return open(item.url)
  item.action?.()
}

const createItems = (items: ISelectItem[]) =>
  items.map(item => ({ ...item, key: item.url || item.label }))

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
    url: `https://segmentfault.com/u/ntnyq`,
  },
  {
    label: `Quit`,
    action() {
      process.exit()
    },
  },
])

export interface Props {
  name: string
}

export const App = ({ name }: Props) => (
  <Box flexDirection='column'>
    <Gradient name='rainbow'>
      <BigText text={name} />
    </Gradient>
    <Box marginBottom={1}>
      <Link url={`https://${name}.com`}>
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
