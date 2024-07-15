import { EmblaOptionsType } from 'embla-carousel';
import { default as React } from '../../node_modules/react';

export type CarouselProps = {
    children: React.ReactNode;
    gap?: number;
    options?: EmblaOptionsType;
    classNames?: {
        slide?: string;
        root?: string;
    };
    autoplay?: boolean;
    delay?: number;
};
export declare const Carousel: ({ children, classNames, options, autoplay, delay, gap, }: CarouselProps) => import("react/jsx-runtime").JSX.Element;
