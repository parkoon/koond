import * as React from 'react';
export type InputProps = {
    prefix?: string | React.ReactNode;
    suffix?: string | React.ReactNode;
    filled?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'prefix'>;
export declare const TextInput: React.ForwardRefExoticComponent<{
    prefix?: string | React.ReactNode;
    suffix?: string | React.ReactNode;
    filled?: boolean | undefined;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "prefix"> & React.RefAttributes<HTMLInputElement>>;
