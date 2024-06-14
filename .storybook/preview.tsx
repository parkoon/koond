import React from "react";

import type { Preview } from "@storybook/react";
import { ScreenDrawerProvider } from "../lib/components/screen-drawer";
import Screen from "../lib/components/screen";
import "../lib/index.css";
import "./style.css";
const preview: Preview = {
  parameters: {
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
      );
    },
  ],
};

export default preview;
