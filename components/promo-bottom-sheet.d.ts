import { ButtonProps } from './button';
import { UsePromoVisibilityOptions } from './use-promo-vibisility';

type PromoBottomSheetProps = {
    id: string;
    strategy?: UsePromoVisibilityOptions['strategy'];
    children: React.ReactNode;
    hideButtonProps?: ButtonProps;
    cancelButtonProps?: ButtonProps;
};
declare const PromoBottomSheet: ({ id, children, strategy, cancelButtonProps, hideButtonProps, }: PromoBottomSheetProps) => import("react/jsx-runtime").JSX.Element;
export default PromoBottomSheet;
