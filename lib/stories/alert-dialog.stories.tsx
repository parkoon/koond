import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import AlertDialog from "../components/alert-dialog";
import { Button } from "../components/button";

const meta = {
  title: "ui/AlertDialog",
  component: AlertDialog,
  parameters: {
    controls: {
      exclude: ["open", "okButtonProps", "cancelButtonProps"],
    },
  },
  args: {
    title: "Lorem Ipsum",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    hideCancelButton: false,
  },
  argTypes: {},
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _AlertDialog = ({ ...props }: Story["args"]) => {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpened(true)}>Open Alert Dialog</Button>
      <AlertDialog
        open={opened}
        onCancel={() => setOpened(false)}
        onOk={() => {
          alert("Ok Button Clicked");
          setOpened(false);
        }}
        {...props}
      />
    </div>
  );
};
