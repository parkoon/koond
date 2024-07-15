import { default as React } from '../../node_modules/react';

type MenuItem = {
    type?: 'link';
    label: string;
    icon?: React.ReactNode;
    extra?: string | React.ReactNode;
    onClick?(): void;
} | {
    type: 'separator';
};
export type ListMenuProps = {
    hideLinkIcon?: boolean;
    title?: string;
    items: MenuItem[];
    classNames?: {
        root?: string;
        title?: string;
        item?: string;
    };
};
export declare const ListMenu: ({ title, items, classNames, hideLinkIcon }: ListMenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
