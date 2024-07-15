import { UsePromoVisibilityOptions } from './use-promo-vibisility';

export type PromoBannerProps = {
    id?: string;
    content: React.ReactNode;
    classNames?: {
        close?: string;
        root?: string;
    };
    strategy?: UsePromoVisibilityOptions['strategy'];
};
declare const PromoBanner: ({ id, content, classNames, strategy, }: PromoBannerProps) => import("react/jsx-runtime").JSX.Element | null;
export default PromoBanner;
