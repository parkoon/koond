import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';
export type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> & {
    bordered?: boolean;
};
export declare const Accordion: ({ className, bordered, ...props }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>;
export declare const AccordionItem: ({ className, ...props }: AccordionItemProps) => import("react/jsx-runtime").JSX.Element;
export type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger>;
export declare const AccordionTrigger: ({ children, className, ...props }: AccordionTriggerProps) => import("react/jsx-runtime").JSX.Element;
export type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content>;
export declare const AccordionContent: ({ className, children, ...props }: AccordionContentProps) => import("react/jsx-runtime").JSX.Element;
