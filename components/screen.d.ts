import { default as React } from '../../node_modules/react';

export declare const MAX_SCREEN_WIDTH = 440;
type ScreenProps = {
    width?: number;
} & React.ComponentProps<'div'>;
export declare const Screen: ({ className, style, children, ...props }: ScreenProps) => import("react/jsx-runtime").JSX.Element;
export {};
