import { default as React } from '../../node_modules/react';

export declare const BOTTOM_TAB_NAVIGATION_HEIGHT = 56;
type NavItem = {
    label: string;
    icon: React.ReactNode;
};
export type BottomNavigationProps = {
    classNames?: {
        root?: string;
        item?: string;
        label?: string;
    };
    items: NavItem[];
    value?: number;
    onChange?(value: number): void;
};
export declare const BottomNavigation: ({ classNames, value, onChange, items }: BottomNavigationProps) => import("react/jsx-runtime").JSX.Element;
export {};
