import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ children }: {
        children: import('../../node_modules/react').ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const _Button: Story;
