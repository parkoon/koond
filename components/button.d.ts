import { VariantProps } from 'class-variance-authority';
import { default as React } from '../../node_modules/react';

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "ghost" | "outlined" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    danger?: boolean | null | undefined;
    loading?: boolean | null | undefined;
    block?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;
declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: ({
    variant?: "primary" | "secondary" | "ghost" | "outlined" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    danger?: boolean | null | undefined;
    loading?: boolean | null | undefined;
    block?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
