export type DropdownMenuItem<T> = {
    key: T;
    label: string;
};
export type DropdownMenuProps<T> = {
    trigger: React.ReactNode;
    defaultMenuKey?: T;
    items: DropdownMenuItem<T>[];
    onMenuChange?(key: T): void;
};
declare const DropdownMenu: <T extends string>({ defaultMenuKey, trigger, items, onMenuChange, }: DropdownMenuProps<T>) => import("react/jsx-runtime").JSX.Element;
export default DropdownMenu;
