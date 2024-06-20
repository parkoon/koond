import type { Preview } from '@storybook/react'
import React from 'react'

import Screen from '../lib/components/screen'
import { ScreenDrawerProvider } from '../lib/components/screen-drawer'
import '../lib/index.css'
import './style.css'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { parameters }) => {
      return (
        <Screen>
          <ScreenDrawerProvider>
            <Story />
          </ScreenDrawerProvider>
        </Screen>
      )
    },
  ],
}

export default preview
