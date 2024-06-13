import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ui/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "ghost", "outlined"],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Button: Story = {
  args: {
    children: "Primary Button",
    danger: false,
    loading: false,
    block: false,
    variant: "primary",
    size: "default",
  },
};
