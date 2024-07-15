type DateFormat = 'YYYY.MM.DD' | 'DD.MM.YYYY' | 'YYYY.MM' | 'MM.YYYY';
type Placeholder = {
    yyyy?: string;
    mm: string;
    dd: string;
};
type DateInputProps = {
    format?: DateFormat;
    placeholder?: Placeholder;
    classNames?: {
        root?: string;
        placeholder?: string;
    };
};
declare const DateInput: ({ format, placeholder, classNames, }: DateInputProps) => import("react/jsx-runtime").JSX.Element;
export default DateInput;
