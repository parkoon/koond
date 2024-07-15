export type AvatarShape = 'round' | 'square';
export type AvatarProps = {
    src?: string;
    alt?: string;
    size?: number;
    shape?: AvatarShape;
    fallback?: string;
    delayMs?: number;
    style?: React.CSSProperties;
    className?: string;
};
export declare const Avatar: ({ delayMs, size, shape, className, fallback, alt, src, style, }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
