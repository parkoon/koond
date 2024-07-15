type SectionProps = React.ComponentProps<'section'>;
export declare const Section: ({ children, ...props }: SectionProps) => import("react/jsx-runtime").JSX.Element;
export type SectionHeaderProps = {
    title?: string;
    description?: string;
    extra?: React.ReactNode;
} & React.ComponentProps<'header'>;
export declare const SectionHeader: ({ title, description, extra, className, ...props }: SectionHeaderProps) => import("react/jsx-runtime").JSX.Element;
export type SectionBodyProps = React.ComponentProps<'div'>;
export declare const SectionBody: ({ children, ...props }: SectionBodyProps) => import("react/jsx-runtime").JSX.Element;
export {};
