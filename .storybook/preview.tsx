import type { Preview } from '@storybook/react'
import React from 'react'

import { Content, Screen } from '../lib/components/layout'
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
          <Screen>
            <Content>
              <Story />
            </Content>
          </Screen>
        )
      }
      return <Story />
    },
  ],
}

export default preview
