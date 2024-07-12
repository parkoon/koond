import type { Preview } from '@storybook/react'
import React from 'react'

import { Screen } from '../lib/components/screen'
import '../lib/index.css'
import './preview.css'

const preview: Preview = {
  parameters: {
    // viewport: {
    //   viewports: INITIAL_VIEWPORTS,
    //   defaultViewport: 'iphone6',
    // },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['blocks', 'ui'],
      },
    },
  },
  decorators: [
    (Story, context) => {
      if (context.title.includes('ui')) {
        return (
          <Screen style={{ padding: 16 }}>
            <Story />
          </Screen>
        )
      }
      return <Story />
    },
  ],
}

export default preview
