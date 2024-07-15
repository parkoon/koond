import * as TabsPrimitive from '@radix-ui/react-tabs';
type ScrollableTabsProps = React.ComponentProps<typeof TabsPrimitive.Root>;
export declare const ScrollableTabs: ({ defaultValue, className, ...props }: ScrollableTabsProps) => import("react/jsx-runtime").JSX.Element;
type ScrollableTabsListProps = React.ComponentProps<typeof TabsPrimitive.List>;
export declare const ScrollableTabsList: ({ className, ...props }: ScrollableTabsListProps) => import("react/jsx-runtime").JSX.Element;
type ScrollableTabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger> & {
    scrollIntoView?: boolean;
};
export declare const ScrollableTabsTrigger: ({ value, scrollIntoView, ...props }: ScrollableTabsTriggerProps) => import("react/jsx-runtime").JSX.Element;
type ScrollableTabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>;
export declare const ScrollableTabsContent: ({ className, ...props }: ScrollableTabsContentProps) => import("react/jsx-runtime").JSX.Element;
export {};
