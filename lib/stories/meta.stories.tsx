import { Meta as StorybookMeta } from '@storybook/react'
import { ChevronRight } from 'lucide-react'

import {
  Meta,
  MetaAvatar,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '../components/meta'

const meta = {
  title: 'ui/Meta',
  tags: ['autodocs'],
} satisfies StorybookMeta<typeof Meta>

export const Default = () => {
  return (
    <Meta>
      <MetaAvatar src="https://fastly.picsum.photos/id/558/600/300.jpg?hmac=fm0lTAUwSYC1ThfEp1LQGfIpd4yPQRX3Qb3gptH9FhA" />
      <MetaContent>
        <MetaTitle>Lorem</MetaTitle>
        <MetaDescription>possimus temporibus animi hic</MetaDescription>
      </MetaContent>

      <MetaExtra className="text-muted-foreground">
        <ChevronRight />
      </MetaExtra>
    </Meta>
  )
}

export default meta
