import React, { Component, ErrorInfo, ReactNode } from "react";
interface Props {
    children: ReactNode;
    fallback?: ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
    errorId: string;
    copied: boolean;
}
export declare class ErrorBoundary extends Component<Props, State> {
    private retryCount;
    private maxRetries;
    constructor(props: Props);
    static getDerivedStateFromError(error: Error): Partial<State>;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    private reportError;
    private handleRetry;
    private handleGoHome;
    private handleCopyError;
    private handleReportIssue;
    render(): any;
}
export declare function useErrorHandler(): (error: Error, errorInfo?: ErrorInfo) => void;
export declare function withErrorBoundary<P extends object>(Component: React.ComponentType<P>, fallback?: ReactNode, onError?: (error: Error, errorInfo: ErrorInfo) => void): (props: P) => any;
export declare function AsyncErrorBoundary({ children, onError }: Props): any;
export {};
//# sourceMappingURL=ErrorBoundary.d.ts.map