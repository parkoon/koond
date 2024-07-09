import { AlignJustify, Heart, Search, ShoppingCartIcon } from 'lucide-react'
import React from 'react'

import { AppBar } from '../../components/app-bar'
import AspectRatio from '../../components/aspect-ratio'
import { Avatar } from '../../components/avatar'
import { Carousel } from '../../components/carousel'
import { HorizontalScrollArea } from '../../components/horizontal-scroll-area'
import { HorizontalSnapScrollArea } from '../../components/horizontal-snap-scroll-area'
import { IconButton } from '../../components/icon-button'
import { Indicator } from '../../components/indicator'
import { Content, Screen } from '../../components/layout'
import Paper from '../../components/paper'
import Separator from '../../components/separator'
import { cn } from '../../utils/cn'

const meta = {
  title: 'blocks/eCommerce page',
  tags: ['autodocs'],
}

const categories = Array.from({ length: 10 }).map(
  (_, index) => `https://picsum.photos/seed/${index + 1}/200`,
)
const banners = Array.from({ length: 3 }).map(
  (_, index) => `https://picsum.photos/seed/${index + 10}/800`,
)
const products = Array.from({ length: 12 }).map(
  (_, index) => `https://picsum.photos/seed/${index + 20}/800`,
)

// const Card = () => {
//   return (
//     <div>
//       <AspectRatio>
//         <div className="relative h-full">
//           <img
//             src="https://fastly.picsum.photos/id/558/600/300.jpg?hmac=fm0lTAUwSYC1ThfEp1LQGfIpd4yPQRX3Qb3gptH9FhA"
//             className="h-full object-cover"
//           />
//           <IconButton
//             icon={
//               <Heart className="text-muted-foreground opacity-80" fill="var(--muted-foreground)" />
//             }
//             variant="ghost"
//             className="absolute bottom-0 right-0"
//           />
//         </div>
//       </AspectRatio>

//       <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
//       <span className="text-sm text-muted-foreground line-through">3,000원</span>
//       <div className="space-x-1 text-lg font-bold">
//         <span className="text-orange-400">10%</span>
//         <span>2,990원</span>
//       </div>
//     </div>
//   )
// }

export const Default = () => {
  return (
    <Screen>
      <AppBar
        left={<IconButton className="-ml-4" variant="ghost" icon={<AlignJustify />} />}
        right={
          <div className="-mr-4">
            <IconButton variant="ghost" icon={<Search />} />
            <IconButton variant="ghost" icon={<ShoppingCartIcon />} />
          </div>
        }
      />
      <Content>
        <Carousel classNames={{ root: 'mb-3' }} autoplay delay={2000}>
          {banners.map((src, index) => (
            <img key={index} src={src} className="h-[120px] w-full object-cover" />
          ))}
        </Carousel>
        <HorizontalScrollArea className="pt-2">
          {categories.map((src, index) => (
            <a href="#" key={index}>
              <Indicator label="N" disabled={index % 3 === 0}>
                <Avatar src={src} shape="square" size={64} />
              </Indicator>

              <p className="text-center">Lorem {index + 1}</p>
            </a>
          ))}
        </HorizontalScrollArea>

        <Separator className="h-2 bg-muted" />

        <Section
          title="Lorem ipsum"
          description="amet consectetur adipisicing elit. Iure ipsum"
          extra={<a href="#">More</a>}
        >
          <HorizontalSnapScrollArea>
            {products.map((src, index) => (
              <div key={index}>
                <AspectRatio>
                  <div className="relative h-full overflow-hidden rounded">
                    <img src={src} className="h-full w-full object-cover" />
                    <IconButton
                      icon={
                        <Heart
                          className="text-muted-foreground opacity-80"
                          fill="var(--muted-foreground)"
                        />
                      }
                      variant="ghost"
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                </AspectRatio>

                <p className="leading-tight">Lorem ipsum dolor sit </p>
                <span className="text-sm text-muted-foreground line-through">3,000원</span>
                <div className="space-x-1 text-lg font-bold">
                  <span className="text-orange-400">10%</span>
                  <span>2,990원</span>
                </div>
              </div>
            ))}
          </HorizontalSnapScrollArea>
        </Section>
      </Content>
    </Screen>
  )
}

type SectionProps = {
  children: React.ReactNode
  title?: string | React.ReactNode
  description?: string | React.ReactNode

  extra?: React.ReactNode

  classNames?: {
    root?: string
    header?: string
    body?: string
  }
}
const Section = ({ title, description, classNames, extra, children }: SectionProps) => {
  return (
    <section className={classNames?.header}>
      <header className={cn('mb-4 px-4', classNames?.header)}>
        <div className="flex justify-between">
          {React.isValidElement(title) ? title : <h3 className="text-xl font-bold">{title}</h3>}
          {extra}
        </div>
        {React.isValidElement(description) ? (
          description
        ) : (
          <p className="text-muted-foreground">{description}</p>
        )}
      </header>
      <div className={classNames?.body}>{children}</div>
    </section>
  )
}

export default meta
