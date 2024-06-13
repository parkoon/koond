import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ui/AspectRatio",
  component: AspectRatio,

  argTypes: {},
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _AspectRatio = ({ ...props }: Story["args"]) => {
  return (
    <AspectRatio {...props}>
      <img
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
    </AspectRatio>
  );
};
