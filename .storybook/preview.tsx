import type { Preview } from '@storybook/react'

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
  // decorators: [
  //   (Story, { parameters }) => {
  //     return (
  //       <Screen>
  //         <ScreenDrawerProvider>
  //           <Story />
  //         </ScreenDrawerProvider>
  //       </Screen>
  //     )
  //   },
  // ],
}

export default preview
