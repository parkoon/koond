type ExpiredAtUnit = 'h' | 'd';
export type PromoBannerStrategy = {
    storage?: 'session';
} | {
    storage?: 'local';
    expiredAt: {
        value: number;
        unit: ExpiredAtUnit;
    };
};
export type UsePromoVisibilityOptions = {
    initialVisibility?: boolean;
    strategy?: PromoBannerStrategy;
};
declare const usePromoVisibility: (key: string, { initialVisibility, strategy, }?: UsePromoVisibilityOptions) => {
    visible: boolean;
    close: () => void;
    closeWithStrategy: () => void;
};
export default usePromoVisibility;
