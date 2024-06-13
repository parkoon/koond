import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ title, description, open, onOk, onCancel, classNames, okButtonProps, cancelButtonProps, hideCancelButton, okText, cancelText, }: {
        title?: string | undefined;
        description?: import('../../node_modules/react').ReactNode;
        open?: boolean | undefined;
        onOk?(): void;
        onCancel?(): void;
        okText?: string | undefined;
        cancelText?: string | undefined;
        okButtonProps?: import('../components/button').ButtonProps | undefined;
        cancelButtonProps?: import('../components/button').ButtonProps | undefined;
        hideCancelButton?: boolean | undefined;
        classNames?: {
            title?: string | undefined;
            description?: string | undefined;
        } | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    args: {
        title: string;
        description: string;
        hideCancelButton: false;
    };
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const _AlertDialog: ({ ...props }: Story["args"]) => import("react/jsx-runtime").JSX.Element;
