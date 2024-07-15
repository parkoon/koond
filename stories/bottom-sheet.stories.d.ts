declare const meta: {
    title: string;
    component: ({ className, open, children, hideHandle, onClose, height, maskClosable, handleOnly, }: {
        className?: string | undefined;
        children?: import('../../node_modules/react').ReactNode;
        open?: boolean | undefined;
        onClose?(): void;
        hideHandle?: boolean | undefined;
        maskClosable?: boolean | undefined;
        height?: number | undefined;
        handleOnly?: boolean | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
};
export default meta;
export declare const _BottomSheet: () => import("react/jsx-runtime").JSX.Element;
