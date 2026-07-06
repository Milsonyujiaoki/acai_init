interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'default' | 'dots' | 'pulse' | 'bounce' | 'premium';
    color?: 'blue' | 'white' | 'gray';
    text?: string;
    fullScreen?: boolean;
    className?: string;
}
export declare function LoadingSpinner({ size, variant, color, text, fullScreen, className }: LoadingSpinnerProps): any;
export declare function PageLoader({ message }: {
    message?: string;
}): any;
export declare function ButtonLoader({ size }: {
    size?: 'sm' | 'md';
}): any;
export declare function InlineLoader({ text }: {
    text?: string;
}): any;
export {};
//# sourceMappingURL=LoadingSpinner.d.ts.map