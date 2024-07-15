import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ format, placeholder, classNames, }: {
        format?: ("YYYY.MM.DD" | "DD.MM.YYYY" | "YYYY.MM" | "MM.YYYY") | undefined;
        placeholder?: {
            yyyy?: string | undefined;
            mm: string;
            dd: string;
        } | undefined;
        classNames?: {
            root?: string | undefined;
            placeholder?: string | undefined;
        } | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        format: {
            options: string[];
            control: {
                type: "radio";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const _DateInput: (args: Story['args']) => import("react/jsx-runtime").JSX.Element;
