import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-aspect-ratio').AspectRatioProps & import('../../node_modules/react').RefAttributes<HTMLDivElement>>;
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const _AspectRatio: ({ ...props }: Story["args"]) => import("react/jsx-runtime").JSX.Element;
