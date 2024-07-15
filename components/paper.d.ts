import { default as React } from '../../node_modules/react';

export type PaperProps = React.ComponentProps<'div'> & {
    bordered?: boolean;
    shadow?: boolean;
};
declare const Paper: ({ children, bordered, shadow, className, ...props }: PaperProps) => import("react/jsx-runtime").JSX.Element;
export default Paper;
