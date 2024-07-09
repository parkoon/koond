import type { Meta } from '@storybook/react'

import { Carousel } from '../components/carousel'

const meta = {
  title: 'ui/ImageCarousel',
  component: Carousel,
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta

export const Default = () => {
  return (
    <Carousel>
      <img src="https://fastly.picsum.photos/id/558/600/300.jpg?hmac=fm0lTAUwSYC1ThfEp1LQGfIpd4yPQRX3Qb3gptH9FhA" />
      <img src="https://fastly.picsum.photos/id/6/600/300.jpg?hmac=CC29TxAS6fp7Z3yB6EL4Baw3fiTxOEQzUitQT59SXBc" />
      <img src="https://fastly.picsum.photos/id/261/600/300.jpg?hmac=Ol3fjF4Fe24w-Ra8sxo0fpvwRE7xQsarhupKPQBgv1s" />
    </Carousel>
  )
}
export const AutoPlay = () => {
  return (
    <Carousel autoplay delay={2000}>
      <img src="https://fastly.picsum.photos/id/558/600/300.jpg?hmac=fm0lTAUwSYC1ThfEp1LQGfIpd4yPQRX3Qb3gptH9FhA" />
      <img src="https://fastly.picsum.photos/id/6/600/300.jpg?hmac=CC29TxAS6fp7Z3yB6EL4Baw3fiTxOEQzUitQT59SXBc" />
      <img src="https://fastly.picsum.photos/id/261/600/300.jpg?hmac=Ol3fjF4Fe24w-Ra8sxo0fpvwRE7xQsarhupKPQBgv1s" />
    </Carousel>
  )
}
export const WithGap = () => {
  return (
    <Carousel gap={8}>
      <img src="https://fastly.picsum.photos/id/558/600/300.jpg?hmac=fm0lTAUwSYC1ThfEp1LQGfIpd4yPQRX3Qb3gptH9FhA" />
      <img src="https://fastly.picsum.photos/id/6/600/300.jpg?hmac=CC29TxAS6fp7Z3yB6EL4Baw3fiTxOEQzUitQT59SXBc" />
      <img src="https://fastly.picsum.photos/id/261/600/300.jpg?hmac=Ol3fjF4Fe24w-Ra8sxo0fpvwRE7xQsarhupKPQBgv1s" />
    </Carousel>
  )
}
