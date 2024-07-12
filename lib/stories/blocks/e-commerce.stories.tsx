import { CalendarHeart, Heart, Search, ShoppingCartIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertSlot, AlertTitle } from '../../components/alert'
import { APP_BAR_HEIGHT, AppBar, AppBarAction, AppBarExtra } from '../../components/app-bar'
import AspectRatio from '../../components/aspect-ratio'
import { Avatar } from '../../components/avatar'
import { Carousel } from '../../components/carousel'
import { HorizontalScrollArea } from '../../components/horizontal-scroll-area'
import { HorizontalSnapScrollArea } from '../../components/horizontal-snap-scroll-area'
import { IconButton } from '../../components/icon-button'
import { Indicator } from '../../components/indicator'
import { Screen } from '../../components/screen'
import {
  ScrollableTabs,
  ScrollableTabsList,
  ScrollableTabsTrigger,
} from '../../components/scrollable-tabs'
import { Section, SectionBody, SectionHeader } from '../../components/section'
import { Separator } from '../../components/separator'
import { TextInput } from '../../components/text-input'

const meta = {
  title: 'blocks/Commerce App',
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

export const CommerceApp = () => {
  return (
    <Screen className="pb-5">
      <AppBar>
        <AppBarAction className="mr-4 flex-1">
          <TextInput
            suffix={<Search />}
            placeholder="Lorem ipsum dolor sit"
            className="w-full rounded-full"
            filled
            readOnly
          />
        </AppBarAction>
        <AppBarExtra>
          <ShoppingCartIcon />
        </AppBarExtra>
      </AppBar>

      <ScrollableTabs
        defaultValue="recommend"
        className="sticky z-10"
        style={{ top: APP_BAR_HEIGHT }}
      >
        <ScrollableTabsList>
          <ScrollableTabsTrigger value="recommend">Recommend</ScrollableTabsTrigger>
          <ScrollableTabsTrigger value="best">Best</ScrollableTabsTrigger>
          <ScrollableTabsTrigger value="event">Event</ScrollableTabsTrigger>
          <ScrollableTabsTrigger value="rank">Rank</ScrollableTabsTrigger>
        </ScrollableTabsList>
      </ScrollableTabs>

      <Carousel classNames={{ root: 'mb-3' }} autoplay delay={2000}>
        {banners.map((src, index) => (
          <img key={index} src={src} className="h-[240px] w-full object-cover" />
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

      <div className="mt-5 px-4">
        <Alert clickable>
          <AlertSlot>
            <CalendarHeart />
          </AlertSlot>
          <AlertTitle>Lorem ipsum dolor sit</AlertTitle>
          <AlertDescription>reiciendis alias temporibus officia quia</AlertDescription>
        </Alert>
      </div>

      <Separator size={6} className="opacity-30" />

      <Section>
        <SectionHeader
          title="Lorem ipsum"
          description="amet consectetur adipisicing elit. Iure ipsum"
          extra={<a href="#">More</a>}
        />
        <SectionBody>
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
        </SectionBody>
      </Section>

      <Separator size={6} className="opacity-30" />

      <Section>
        <SectionHeader
          title="Lorem ipsum"
          description="amet consectetur adipisicing elit. Iure ipsum"
        />
        <SectionBody className="flex flex-col gap-4 px-4">
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
        </SectionBody>
      </Section>
    </Screen>
  )
}

export default meta
