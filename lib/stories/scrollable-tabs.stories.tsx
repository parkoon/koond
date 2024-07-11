import type { Meta } from '@storybook/react'

import {
  ScrollableTabs,
  ScrollableTabsContent,
  ScrollableTabsList,
  ScrollableTabsTrigger,
} from '../components/scrollable-tabs'

const meta = {
  title: 'ui/ScrollableTabs',
  component: ScrollableTabs,
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollableTabs>

export default meta

const tabs = Array.from({ length: 20 })

export const Default = () => {
  return (
    <ScrollableTabs defaultValue="5">
      <ScrollableTabsList>
        {tabs.map((_, index) => (
          <ScrollableTabsTrigger key={index} value={index.toString()} scrollIntoView={index === 5}>
            Tab {index}
          </ScrollableTabsTrigger>
        ))}
      </ScrollableTabsList>

      {tabs.map((_, index) => (
        <ScrollableTabsContent key={index} value={index.toString()}>
          Content {index}
        </ScrollableTabsContent>
      ))}
    </ScrollableTabs>
  )
}
