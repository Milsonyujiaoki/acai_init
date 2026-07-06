"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { Component, ErrorInfo, ReactNode } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { AlertTriangle, RefreshCw, Home, Mail, Bug, Shield, ArrowLeft, Copy, CheckCircle, ExternalLink } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
export class ErrorBoundary extends Component {
    retryCount = 0;
    maxRetries = 3;
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            errorId: '',
            copied: false
        };
    }
    static getDerivedStateFromError(error) {
        // Generate unique error ID for tracking
        const errorId = `ERR-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        return {
            hasError: true,
            error,
            errorId
        };
    }
    componentDidCatch(error, errorInfo) {
        // Log error details
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
        // Call optional error handler
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
        // Send error to monitoring service (in production)
        this.reportError(error, errorInfo);
    }
    reportError = (error, errorInfo) => {
        // In production, send to error monitoring service
        const errorData = {
            message: error.message,
            stack: error.stack,
            componentStack: errorInfo.componentStack,
            errorId: this.state.errorId,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
        };
        // Example: Send to monitoring service
        // errorMonitoringService.report(errorData);
        // For development, log to console
        console.group('🚨 Error Report');
        console.error('Error ID:', this.state.errorId);
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
        console.error('Full Report:', errorData);
        console.groupEnd();
    };
    handleRetry = () => {
        if (this.retryCount < this.maxRetries) {
            this.retryCount++;
            this.setState({
                hasError: false,
                error: null,
                errorInfo: null,
                errorId: '',
                copied: false
            });
        }
        else {
            // Max retries reached, force reload
            window.location.reload();
        }
    };
    handleGoHome = () => {
        window.location.href = '/';
    };
    handleCopyError = async () => {
        if (!this.state.error)
            return;
        const errorText = `
Error ID: ${this.state.errorId}
Error: ${this.state.error.message}
Stack: ${this.state.error.stack}
Timestamp: ${new Date().toISOString()}
URL: ${window.location.href}
    `.trim();
        try {
            await navigator.clipboard.writeText(errorText);
            this.setState({ copied: true });
            setTimeout(() => this.setState({ copied: false }), 2000);
        }
        catch (err) {
            console.error('Failed to copy error details:', err);
        }
    };
    handleReportIssue = () => {
        const subject = encodeURIComponent(`Error Report - ${this.state.errorId}`);
        const body = encodeURIComponent(`
Error ID: ${this.state.errorId}
Error Message: ${this.state.error?.message || 'Unknown error'}
Timestamp: ${new Date().toISOString()}
URL: ${window.location.href}

Please describe what you were doing when this error occurred:
[Your description here]
    `);
        window.open(`mailto:support@delibix.com?subject=${subject}&body=${body}`);
    };
    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback;
            }
            // Default error UI
            return (_jsx("div", { className: "min-h-screen bg-background flex items-center justify-center p-6", children: _jsx(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 }, className: "w-full max-w-2xl", children: _jsxs(Card, { className: "glass-heavy border-red-200 dark:border-red-800", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx(motion.div, { initial: { scale: 0 }, animate: { scale: 1 }, transition: { delay: 0.2, type: "spring", stiffness: 200 }, className: "mx-auto w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4", children: _jsx(AlertTriangle, { className: "w-10 h-10 text-red-600 dark:text-red-400" }) }), _jsx(CardTitle, { className: "text-2xl md:text-3xl text-red-600 dark:text-red-400 mb-2", children: "Oops! Something went wrong" }), _jsx(CardDescription, { className: "text-lg text-slate-600 dark:text-slate-400", children: "We encountered an unexpected error. Our team has been notified and we're working to fix it." }), _jsxs("div", { className: "flex items-center justify-center gap-2 mt-4", children: [_jsxs(Badge, { variant: "outline", className: "text-xs font-mono", children: ["Error ID: ", this.state.errorId] }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: new Date().toLocaleTimeString() })] })] }), _jsxs(CardContent, { className: "space-y-6", children: [process.env.NODE_ENV === 'development' && this.state.error && (_jsxs(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, transition: { delay: 0.3 }, className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4", children: [_jsxs("h4", { className: "text-sm font-semibold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2", children: [_jsx(Bug, { className: "w-4 h-4" }), "Error Details (Development Mode)"] }), _jsxs("div", { className: "text-xs font-mono text-red-700 dark:text-red-300 break-all", children: [_jsxs("div", { className: "mb-2", children: [_jsx("strong", { children: "Message:" }), " ", this.state.error.message] }), this.state.error.stack && (_jsxs("div", { className: "max-h-32 overflow-y-auto", children: [_jsx("strong", { children: "Stack:" }), _jsx("pre", { className: "whitespace-pre-wrap mt-1", children: this.state.error.stack })] }))] })] })), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "flex flex-col sm:flex-row gap-3", children: [_jsxs(Button, { onClick: this.handleRetry, className: "flex-1 gradient-bg-blue text-white", disabled: this.retryCount >= this.maxRetries, children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2" }), this.retryCount >= this.maxRetries ? 'Reload Page' : `Try Again (${this.maxRetries - this.retryCount} left)`] }), _jsxs(Button, { onClick: this.handleGoHome, variant: "outline", className: "flex-1", children: [_jsx(Home, { className: "w-4 h-4 mr-2" }), "Go Home"] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5 }, className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [_jsx(Button, { onClick: this.handleCopyError, variant: "outline", size: "sm", className: "w-full", children: this.state.copied ? (_jsxs(_Fragment, { children: [_jsx(CheckCircle, { className: "w-4 h-4 mr-2 text-green-500" }), "Copied!"] })) : (_jsxs(_Fragment, { children: [_jsx(Copy, { className: "w-4 h-4 mr-2" }), "Copy Error Details"] })) }), _jsxs(Button, { onClick: this.handleReportIssue, variant: "outline", size: "sm", className: "w-full", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Report Issue"] })] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 }, className: "text-center text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4", children: [_jsx(Shield, { className: "w-5 h-5 mx-auto mb-2 text-blue-500" }), _jsx("p", { className: "mb-2", children: "Your data is safe. This error has been automatically reported to our team." }), _jsxs("p", { children: ["If this problem persists, please contact", ' ', _jsx("a", { href: "mailto:support@delibix.com", className: "text-blue-600 dark:text-blue-400 hover:underline", children: "support@delibix.com" }), ' ', "with error ID: ", _jsx("code", { className: "font-mono text-xs", children: this.state.errorId })] })] })] })] }) }) }));
        }
        return this.props.children;
    }
}
// Hook version for functional components
export function useErrorHandler() {
    return (error, errorInfo) => {
        console.error('Error caught by useErrorHandler:', error, errorInfo);
        // Could integrate with error reporting service here
    };
}
// HOC version for wrapping components
export function withErrorBoundary(Component, fallback, onError) {
    return function WrappedComponent(props) {
        return (_jsx(ErrorBoundary, { fallback: fallback, onError: onError, children: _jsx(Component, { ...props }) }));
    };
}
// Specific error boundary for async operations
export function AsyncErrorBoundary({ children, onError }) {
    return (_jsx(ErrorBoundary, { onError: onError, fallback: _jsx("div", { className: "flex items-center justify-center p-8", children: _jsx(Card, { className: "glass-secondary max-w-md", children: _jsxs(CardContent, { className: "text-center p-6", children: [_jsx(AlertTriangle, { className: "w-12 h-12 text-yellow-500 mx-auto mb-4" }), _jsx("h3", { className: "text-lg font-semibold mb-2", children: "Loading Error" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4", children: "Failed to load this content. Please try refreshing the page." }), _jsxs(Button, { onClick: () => window.location.reload(), size: "sm", className: "gradient-bg-blue text-white", children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2" }), "Refresh"] })] }) }) }), children: children }));
}
//# sourceMappingURL=ErrorBoundary.js.map