import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ className, title, children }: {
        className?: string | undefined;
        children?: import('../../node_modules/react').ReactNode;
        title?: string | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        title: {
            control: "text";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const _ScreenDrawer: (props: Story["args"]) => import("react/jsx-runtime").JSX.Element;
