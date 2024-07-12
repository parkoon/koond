import {
  Calendar,
  Home,
  LayoutGrid,
  MessageCircle,
  Plus,
  Search,
  Settings,
  UserPlus2Icon,
} from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/accordion'
import { AppBar, AppBarAction, AppBarExtra } from '../../components/app-bar'
import { Avatar } from '../../components/avatar'
import { Badge } from '../../components/badge'
import { BottomNavigation } from '../../components/bottom-navigation'
import { HorizontalScrollArea } from '../../components/horizontal-scroll-area'
import { Indicator } from '../../components/indicator'
import { Screen } from '../../components/screen'

const meta = {
  title: 'blocks/Chat App',
}

const profiles = Array.from({ length: 5 }).map(
  (_, index) => `https://picsum.photos/seed/${index + 1}/200`,
)
const friends = Array.from({ length: 100 }).map(
  (_, index) => `https://picsum.photos/seed/${index + 1}/200`,
)

export const ChatApp = () => {
  return (
    <Screen>
      <AppBar>
        <AppBarAction>
          <h2 className="text-lg font-bold">Friends</h2>
        </AppBarAction>

        <AppBarExtra>
          <Search />
          <UserPlus2Icon />
          <Settings />
        </AppBarExtra>
      </AppBar>

      <div className="flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Avatar src="https://picsum.photos/200/300" fallback="Lo" size={52} shape="square" />
          <span>Lorem</span>
        </div>

        <Badge role="button" variant="outline" className="text-muted-foreground">
          Multi profile <Plus className="h-3 w-3" />
        </Badge>
      </div>

      <div className="mt-5 px-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="1" className="border-t">
            <AccordionTrigger className="text-muted-foreground">Updated profile 5</AccordionTrigger>
            <AccordionContent>
              <HorizontalScrollArea margin={0}>
                {profiles.map((src, index) => (
                  <a href="#" key={index} className="flex flex-col items-center space-y-1">
                    <Avatar src={src} shape="square" size={40} />
                    <p className="text-center">Lorem {index + 1}</p>
                  </a>
                ))}
              </HorizontalScrollArea>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-2 px-4 py-4">
        <p className="text-sm text-muted-foreground">Friends 100</p>
        {friends.map((src) => (
          <div className="flex items-center space-x-4">
            <Avatar src={src} size={40} shape="square" />

            <div className="flex flex-col">
              <span>Lorem</span>
              <p className="text-sm text-muted-foreground">nihil quisquam eveniet repreh</p>
            </div>
          </div>
        ))}
      </div>
      <BottomNavigation
        items={[
          { icon: <Home />, label: 'Home' },
          {
            icon: (
              <Indicator label="42" className="top-1">
                <MessageCircle />
              </Indicator>
            ),
            label: 'Message',
          },
          { icon: <Calendar />, label: 'Schedule' },
          { icon: <LayoutGrid />, label: 'More' },
        ]}
      />
    </Screen>
  )
}

export default meta
