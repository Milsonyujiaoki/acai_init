"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "motion/react";
export function BreadcrumbNavigation({ breadcrumbs, navigate }) {
    if (!breadcrumbs || breadcrumbs.length <= 1) {
        return null;
    }
    const handleClick = (href, e) => {
        e.preventDefault();
        const page = href === '/' ? 'home' : href.slice(1);
        navigate(page);
    };
    return (_jsx("div", { className: "bg-background-secondary/30 dark:bg-background-secondary/50 border-b border-border/50", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx("nav", { "aria-label": "Breadcrumb", className: "py-3", children: _jsx("ol", { className: "flex items-center space-x-2 text-sm", children: breadcrumbs.map((crumb, index) => (_jsxs(motion.li, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "flex items-center", children: [index === 0 && (_jsx(Home, { className: "w-4 h-4 mr-1 text-foreground-muted" })), index < breadcrumbs.length - 1 ? (_jsx("button", { onClick: (e) => handleClick(crumb.href, e), className: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors hover:underline", children: crumb.label })) : (_jsx("span", { className: "text-foreground-muted font-medium", children: crumb.label })), index < breadcrumbs.length - 1 && (_jsx(ChevronRight, { className: "w-4 h-4 mx-2 text-foreground-muted" }))] }, crumb.href))) }) }) }) }));
}
//# sourceMappingURL=BreadcrumbNavigation.js.map