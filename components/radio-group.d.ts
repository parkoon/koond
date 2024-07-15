import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
export type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive.Root> & {
    inline?: boolean;
};
export declare const RadioGroup: ({ inline, className, ...props }: RadioGroupProps) => import("react/jsx-runtime").JSX.Element;
export type RadioGroupButtonItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
    block?: boolean;
};
export declare const RadioGroupButtonItem: ({ block, className, ...props }: RadioGroupButtonItemProps) => import("react/jsx-runtime").JSX.Element;
export type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item>;
export declare const RadioGroupItem: ({ className, ...props }: RadioGroupItemProps) => import("react/jsx-runtime").JSX.Element;
