declare const meta: {
    title: string;
    component: ({ className, open, children, onClose, }: {
        className?: string | undefined;
        children?: import('../../node_modules/react').ReactNode;
        open?: boolean | undefined;
        onClose?(): void;
    }) => import("react/jsx-runtime").JSX.Element;
};
export default meta;
export declare const _BottomSheet: () => import("react/jsx-runtime").JSX.Element;
