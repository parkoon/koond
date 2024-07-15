import { default as React } from '../../node_modules/react';

type BottomSheetProps = {
    className?: string;
    children?: React.ReactNode;
    open?: boolean;
    onClose?(): void;
    hideHandle?: boolean;
    maskClosable?: boolean;
    height?: number;
    handleOnly?: boolean;
};
declare const BottomSheet: ({ className, open, children, hideHandle, onClose, height, maskClosable, handleOnly, }: BottomSheetProps) => import("react/jsx-runtime").JSX.Element;
export default BottomSheet;
