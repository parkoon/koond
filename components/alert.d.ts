import { VariantProps } from 'class-variance-authority';

declare const alertVariants: (props?: ({
    variant?: "default" | "danger" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type AlertProps = VariantProps<typeof alertVariants> & Omit<React.ComponentProps<'div'>, 'role'> & {
    clickable?: boolean;
};
export declare const Alert: ({ className, variant, clickable, children, ...props }: AlertProps) => import("react/jsx-runtime").JSX.Element;
export type AlertTitleProps = React.ComponentProps<'h5'>;
export declare const AlertTitle: ({ className, ...props }: AlertTitleProps) => import("react/jsx-runtime").JSX.Element;
export type AlertDescriptionProps = React.ComponentProps<'p'>;
export declare const AlertDescription: ({ className, ...props }: AlertDescriptionProps) => import("react/jsx-runtime").JSX.Element;
export type AlertSlotProps = React.ComponentProps<'div'>;
export declare const AlertSlot: ({ className, ...props }: AlertSlotProps) => import("react/jsx-runtime").JSX.Element;
export {};
