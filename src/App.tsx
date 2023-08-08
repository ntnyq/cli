'use strict'

import process from 'node:process'
import React from 'react'
import open from 'open'
import { Box, Text } from 'ink'
import Link from 'ink-link'
import BigText from 'ink-big-text'
import Gradient from 'ink-gradient'
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
    label: 'Website',
    url: 'https://ntnyq.com',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/ntnyq',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/ntnyq',
  },
  {
    label: 'Bilibili',
    url: 'https://space.bilibili.com/40199161',
  },
  {
    label: 'Juejin',
    url: 'https://juejin.cn/user/1591748566717591',
  },
  {
    label: 'Segment Fault',
    url: 'https://segmentfault.com/u/ntnyq',
  },
  {
    label: 'Quit',
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
      <Link
        url={`https://${name}.com`}
        fallback
      >
        Hello, this is <Text color='cyan'>{name}</Text>, an FE developer.
      </Link>
    </Box>
    <SelectInput
      items={items as any}
      onSelect={handleSelect}
    />
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
