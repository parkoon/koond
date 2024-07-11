import type { Meta } from '@storybook/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs'

const meta = {
  title: 'ui/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta

const tabs = Array.from({ length: 3 })

export const Default = () => {
  return (
    <Tabs defaultValue="0">
      <TabsList>
        {tabs.map((_, index) => (
          <TabsTrigger key={index} value={index.toString()}>
            Tab {index}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((_, index) => (
        <TabsContent key={index} value={index.toString()}>
          Content {index}
        </TabsContent>
      ))}
    </Tabs>
  )
}
