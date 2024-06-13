import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../node_modules/react').ForwardRefExoticComponent<import('../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> & import('class-variance-authority').VariantProps<(props?: ({
        variant?: "primary" | "secondary" | "ghost" | "outlined" | null | undefined;
        size?: "default" | "sm" | "lg" | "icon" | null | undefined;
        danger?: boolean | null | undefined;
        loading?: boolean | null | undefined;
        block?: boolean | null | undefined;
    } & import('class-variance-authority/types').ClassProp) | undefined) => string> & import('../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    argTypes: {
        variant: {
            options: string[];
            control: {
                type: "radio";
            };
        };
        size: {
            options: string[];
            control: {
                type: "radio";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const _Button: Story;
