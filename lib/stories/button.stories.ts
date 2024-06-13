import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/button";

const meta = {
  title: "UI",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Button: Story = {
  args: {
    children: "로그인",
  },
};
