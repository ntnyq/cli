'use strict'

import process from 'node:process'
import { Box, Text } from 'ink'
import BigText from 'ink-big-text'
import Gradient from 'ink-gradient'
import Link from 'ink-link'
import SelectInput from 'ink-select-input'
import { UncontrolledTextInput } from 'ink-text-input'
import open from 'open'
import React, { useState } from 'react'
import type { ISelectItem } from './types'

const createItems = (items: Omit<ISelectItem, 'value'>[]) =>
  items.map(item => ({
    ...item,
    value: item.label,
  }))

export interface Props {
  name: string
}

export const App: React.FC<Props> = ({ name }) => {
  const [isComment, setIsComment] = useState(false)

  const items: ISelectItem[] = createItems([
    {
      label: 'Website',
      url: 'https://ntnyq.com',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/ntnyq',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/ntnyq',
    },
    {
      label: 'Bilibili',
      url: 'https://space.bilibili.com/40199161',
    },
    {
      label: 'Bluesky',
      url: 'https://bsky.app/profile/ntnyq.com',
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
      label: 'Leave a message',
      action() {
        setIsComment(true)
      },
    },
    {
      label: 'Quit',
      action() {
        process.exit()
      },
    },
  ])

  const handleSelect = (item: ISelectItem) => {
    if (item.url) {
      return open(item.url)
    }
    item.action?.()
  }
  const handleSubmit = (message: string) => {
    if (message.length) {
      open(
        `https://github.com/ntnyq/ntnyq/issues/new?title=${encodeURIComponent(message)}`,
      )
    }
    return setIsComment(false)
  }

  return isComment ? (
    <Box
      flexDirection='column'
      marginY={1}
    >
      <Box marginBottom={1}>
        <Text>Enter to submit a message or go back:</Text>
      </Box>
      <UncontrolledTextInput
        placeholder='A message to me'
        onSubmit={handleSubmit}
      />
    </Box>
  ) : (
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
        items={items}
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
}
