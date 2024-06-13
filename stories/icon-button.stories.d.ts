import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ icon, variant, loading, ...props }: {
        icon: import('../../node_modules/react').ReactNode;
    } & Omit<import('../components/button').ButtonProps, "size" | "danger" | "children">) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        variant: {
            options: string[];
            control: {
                type: "radio";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const _IconButton: Story;
