type SelectItem<T> = {
    label: string;
    value: T;
};
type SelectDialogProps<T> = {
    title?: string;
    items: SelectItem<T>[];
    value?: T;
    onChange?(value: T): void;
};
declare const SelectDialog: <T extends string>({ title, items, value, onChange, }: SelectDialogProps<T>) => import("react/jsx-runtime").JSX.Element;
export default SelectDialog;
