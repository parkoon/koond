import { default as React } from '../../node_modules/react';

type BottomSheetProps = {
    className?: string;
    children?: React.ReactNode;
    open?: boolean;
    onClose?(): void;
};
declare const BottomSheet: ({ className, open, children, onClose, }: BottomSheetProps) => import("react/jsx-runtime").JSX.Element;
export default BottomSheet;
