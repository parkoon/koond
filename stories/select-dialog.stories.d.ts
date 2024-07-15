declare const meta: {
    title: string;
    component: <T extends string>({ title, items, value, onChange, }: {
        title?: string | undefined;
        items: {
            label: string;
            value: T;
        }[];
        value?: T | undefined;
        onChange?(value: T): void;
    }) => import("react/jsx-runtime").JSX.Element;
    argTypes: {};
};
export default meta;
export declare const _SelectDialog: () => import("react/jsx-runtime").JSX.Element;
