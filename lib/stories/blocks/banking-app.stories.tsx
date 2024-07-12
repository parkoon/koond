import {
  Bell,
  ChevronRight,
  FileSearch,
  FileSearchIcon,
  HandCoins,
  Landmark,
  NotebookPen,
  Receipt,
  Shield,
  Target,
  Users2,
  Wallet,
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'

import { APP_BAR_HEIGHT, AppBar, AppBarAction, AppBarExtra } from '../../components/app-bar'
import { Badge } from '../../components/badge'
import { Button } from '../../components/button'
import { Indicator } from '../../components/indicator'
import {
  Meta,
  MetaAvatar,
  MetaContent,
  MetaDescription,
  MetaExtra,
  MetaTitle,
} from '../../components/meta'
import Paper from '../../components/paper'
import { Screen } from '../../components/screen'
import { Separator } from '../../components/separator'
import StepBar from '../../components/step-bar'
import { cn } from '../../utils/cn'

const meta = {
  title: 'blocks/Banking App',
}

export const BankingApp = () => {
  const { ref, inView } = useInView({
    initialInView: true,
    threshold: 0.6,
  })

  console.log(inView)

  return (
    <Screen className="bg-slate-50 pb-5">
      <AppBar className={cn('bg-transparent transition', !inView && 'bg-white')}>
        <AppBarAction>
          <h1 className="flex items-center space-x-1 text-xl font-semibold text-muted-foreground">
            <Landmark />
            <span>Bank</span>
          </h1>
        </AppBarAction>
        <AppBarExtra>
          <Indicator dot>
            <Bell />
          </Indicator>
        </AppBarExtra>
      </AppBar>

      <div ref={ref} style={{ height: APP_BAR_HEIGHT }} className="absolute top-0" />

      <div className="mt-4 space-y-4 px-4">
        <Paper shadow>
          <Meta>
            <MetaAvatar src="https://picsum.photos/seed/27/200" />
            <MetaContent>
              <MetaDescription>possimus temporibus animi hic</MetaDescription>
              <MetaTitle className="text-primary">Lorem ipsum</MetaTitle>
            </MetaContent>

            <MetaExtra className="text-muted-foreground">
              <ChevronRight />
            </MetaExtra>
          </Meta>
        </Paper>

        <Paper shadow>
          <Meta>
            <MetaContent>
              <MetaTitle className="text-xl">Payments</MetaTitle>
            </MetaContent>
            <MetaExtra className="text-muted-foreground">
              <ChevronRight />
            </MetaExtra>
          </Meta>
        </Paper>

        <Paper shadow>
          <Meta className="mb-5">
            <MetaContent>
              <MetaDescription>excepturi sint, ducimus dolore</MetaDescription>
              <MetaTitle className="text-primary">Lorem ipsum</MetaTitle>
            </MetaContent>

            <MetaExtra>
              <FileSearchIcon className="h-6 w-6 text-primary" />
            </MetaExtra>
          </Meta>
          <StepBar items={['lorem', 'ipsum', 'ducimus', 'dolore']} currentStep={1} />
        </Paper>

        <Paper shadow>
          <Meta>
            <Users2 className="h-6 w-6" />
            <MetaContent>
              <MetaDescription>possimus temporibus animi hic</MetaDescription>
              <MetaTitle>Lorem ipsum</MetaTitle>
            </MetaContent>

            <MetaExtra className="flex text-muted-foreground">
              <Badge variant="secondary">lorem</Badge>
              <ChevronRight />
            </MetaExtra>
          </Meta>
        </Paper>

        <Paper shadow className="pb-2">
          <div className="mb-4 space-y-5">
            <Meta>
              <Wallet className="h-6 w-6" />
              <MetaContent>
                <MetaDescription>delectus ullam voluptatibus</MetaDescription>
                <MetaTitle>Connect Again</MetaTitle>
              </MetaContent>
            </Meta>
            <Meta>
              <Wallet className="h-6 w-6" />
              <MetaContent>
                <MetaDescription>delectus ullam voluptatibus</MetaDescription>
                <MetaTitle>Connect Again</MetaTitle>
              </MetaContent>
            </Meta>
            <Meta>
              <Indicator dot>
                <Wallet className="h-6 w-6" />
              </Indicator>
              <MetaContent>
                <MetaDescription>
                  ducimus et aliquid iusto similique aut saepe amet minus
                </MetaDescription>
                <MetaTitle>Check balance</MetaTitle>
              </MetaContent>
            </Meta>
          </div>

          <Separator margin={0} />

          <Button variant="ghost" block className="text-muted-foreground">
            See more <ChevronRight />
          </Button>
        </Paper>

        <Paper shadow>
          <Meta>
            <MetaAvatar src="https://picsum.photos/seed/37/200" />
            <MetaContent>
              <MetaDescription>possimus temporibus animi hic</MetaDescription>
              <MetaTitle className="text-primary">Lorem ipsum</MetaTitle>
            </MetaContent>
          </Meta>
        </Paper>
        <Paper shadow>
          <Meta>
            <Shield />
            <MetaContent>
              <MetaTitle className="text-base font-normal">My credit score</MetaTitle>
            </MetaContent>
            <MetaExtra>
              <div className="flex items-center leading-none text-muted-foreground">
                Check
                <ChevronRight />
              </div>
            </MetaExtra>
          </Meta>

          <Separator />

          <div className="flex h-5 justify-around px-4">
            Create Account <Separator orientation="vertical" />
            Issue a card <Separator orientation="vertical" />
            Get a loan
          </div>
        </Paper>

        <Paper shadow>
          <Meta>
            <MetaContent>
              <MetaDescription>Friday, July 16th</MetaDescription>
              <MetaTitle>Lorem, ipsum dolor sit</MetaTitle>
            </MetaContent>
          </Meta>

          <div className="my-4 flex gap-2">
            <Button variant="secondary" block className="justify-between">
              Refinance a loan
              <HandCoins />
            </Button>
            <Button variant="secondary" block className="justify-between">
              Today mission
              <Target />
            </Button>
          </div>

          <div className="space-y-2">
            <Meta role="button" className="py-2">
              <Receipt />
              <MetaContent>
                <MetaTitle className="font-normal">Saepe esse debitis</MetaTitle>
              </MetaContent>
              <MetaExtra className="text-muted-foreground">
                <ChevronRight />
              </MetaExtra>
            </Meta>
            <Meta role="button" className="py-2">
              <NotebookPen />
              <MetaContent>
                <MetaTitle className="font-normal">Dolore natus asperiores</MetaTitle>
              </MetaContent>
              <MetaExtra className="text-muted-foreground">
                <ChevronRight />
              </MetaExtra>
            </Meta>
            <Meta role="button" className="py-2">
              <FileSearch />
              <MetaContent>
                <MetaTitle className="font-normal">Nemo hic eligendi</MetaTitle>
              </MetaContent>
              <MetaExtra className="text-muted-foreground">
                <ChevronRight />
              </MetaExtra>
            </Meta>
          </div>
        </Paper>
      </div>
    </Screen>
  )
}

export default meta
