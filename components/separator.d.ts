import * as SeparatorPrimitive from '@radix-ui/react-separator';
export type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root> & {
    size?: number;
    margin?: number;
};
export declare const Separator: ({ size, margin, orientation, className, style, ...props }: SeparatorProps) => import("react/jsx-runtime").JSX.Element;
