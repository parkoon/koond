import { Meta } from '@storybook/react'
import { Search, ShoppingCartIcon } from 'lucide-react'

import { AppBar, AppBarAction, AppBarExtra } from '../components/app-bar'
import { TextInput } from '../components/text-input'

const meta = {
  title: 'ui/App bar',
  tags: ['autodocs'],
} satisfies Meta<typeof AppBar>

export const Default = () => {
  return (
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
  )
}

export default meta
