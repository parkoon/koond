import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button";
import ScreenDrawer, { useScreenDrawer } from "../components/screen-drawer";

const meta = {
  title: "ui/ScreenDrawer",
  component: ScreenDrawer,
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<typeof ScreenDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _ScreenDrawer = (props: Story["args"]) => {
  const { open } = useScreenDrawer();
  return (
    <div>
      <Button onClick={open}>Open Screen Drawer</Button>
      <ScreenDrawer {...props}>BOOO</ScreenDrawer>
    </div>
  );
};
