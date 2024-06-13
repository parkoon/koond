import { default as React } from '../../node_modules/react';

export declare const DEFAULT_SCREEN_WIDTH = 440;
export declare const DEFAULT_SCREEN_HEADER_HEIGHT = 56;
type ScreenProps = {
    width?: number;
    children: React.ReactNode;
    className?: string;
};
declare const Screen: {
    ({ width, className, children, }: ScreenProps): import("react/jsx-runtime").JSX.Element;
    Header: ({ title, extra, action, classNames, bordered, }: ScreenHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Back: ({ onBack }: ScreenBackProps) => import("react/jsx-runtime").JSX.Element;
};
type ScreenHeaderProps = {
    action?: React.ReactNode;
    title?: string;
    extra?: React.ReactNode;
    bordered?: boolean;
    classNames?: {
        root?: string;
        title?: string;
    };
};
type ScreenBackProps = {
    onBack?(): void;
};
export default Screen;
