import { default as React } from '../../node_modules/react';

export type HorizontalScrollAreaProps = {
    children: React.ReactNode;
    className?: string;
    gap?: number;
    margin?: number;
};
export declare const HorizontalScrollArea: ({ children, className, margin, gap, }: HorizontalScrollAreaProps) => import("react/jsx-runtime").JSX.Element;
