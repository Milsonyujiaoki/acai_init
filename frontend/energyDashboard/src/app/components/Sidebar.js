import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { cn } from "./ui/utils";
import { LayoutDashboard, BarChart3, Settings, FileText, User, Zap, X } from "lucide-react";
export function Sidebar({ currentPage, onPageChange }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleNavigationClick = (pageId) => {
        if (!isExpanded) {
            setIsExpanded(true);
            // Delay the page change to allow expansion animation
            setTimeout(() => onPageChange(pageId), 150);
        }
        else {
            onPageChange(pageId);
        }
    };
    const navigationItems = [
        {
            id: "dashboard",
            name: "Dashboard",
            icon: LayoutDashboard,
            description: "Overview & monitoring"
        },
        {
            id: "analytics",
            name: "Analytics",
            icon: BarChart3,
            description: "Advanced analytics"
        },
        {
            id: "configuration",
            name: "Configuration",
            icon: Settings,
            description: "System settings"
        },
        {
            id: "reports",
            name: "Reports",
            icon: FileText,
            description: "Generate reports"
        },
        {
            id: "settings",
            name: "Settings & Profile",
            icon: User,
            description: "User preferences"
        }
    ];
    return (_jsx("div", { className: "ml-6 my-6", children: _jsxs("div", { className: cn("flex flex-col h-[calc(100vh-3rem)] transition-all duration-300 ease-in-out rounded-3xl", "bg-gradient-to-b from-sidebar via-sidebar to-sidebar-accent shadow-2xl border border-sidebar-border/20 overflow-hidden", isExpanded ? "w-64" : "w-20"), children: [_jsxs("div", { className: "p-6 flex flex-col items-center relative", children: [isExpanded && (_jsx("button", { onClick: () => setIsExpanded(false), className: "absolute top-4 right-4 w-8 h-8 bg-sidebar-accent/50 hover:bg-sidebar-accent rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110", children: _jsx(X, { className: "w-4 h-4 text-sidebar-foreground" }) })), _jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-sidebar-primary to-sidebar-primary/80 rounded-full flex items-center justify-center shadow-lg", children: _jsx(Zap, { className: "w-6 h-6 text-sidebar-primary-foreground" }) }), isExpanded && (_jsxs("div", { className: "mt-3 text-center", children: [_jsx("h2", { className: "text-sidebar-foreground font-semibold text-base whitespace-nowrap", children: "EMS Control" }), _jsx("p", { className: "text-sidebar-foreground/70 text-xs whitespace-nowrap mt-1", children: "Energy Management" })] }))] }), _jsx("nav", { className: "flex-1 px-4 py-6", children: _jsx("div", { className: "space-y-4", children: navigationItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = currentPage === item.id;
                            return (_jsxs("div", { className: "relative group", children: [_jsxs("button", { onClick: () => handleNavigationClick(item.id), className: cn("transition-all duration-300 flex items-center relative overflow-hidden", "hover:scale-110 hover:shadow-lg", isExpanded
                                            ? "w-full px-4 py-3 justify-start rounded-xl"
                                            : "w-12 h-12 justify-center mx-auto rounded-full", isActive
                                            ? "bg-gradient-to-br from-sidebar-primary to-sidebar-primary/80 shadow-lg shadow-sidebar-primary/30 scale-105"
                                            : "bg-gradient-to-br from-sidebar-accent to-sidebar-accent/80 hover:from-sidebar-primary/80 hover:to-sidebar-primary/60"), children: [_jsx(Icon, { className: cn("transition-colors duration-300 flex-shrink-0", "w-5 h-5", isActive
                                                    ? "text-sidebar-primary-foreground"
                                                    : "text-sidebar-accent-foreground group-hover:text-sidebar-primary-foreground") }), isExpanded && (_jsxs("div", { className: "ml-3 overflow-hidden", children: [_jsx("div", { className: cn("font-medium text-sm whitespace-nowrap transition-colors duration-300", isActive
                                                            ? "text-sidebar-primary-foreground"
                                                            : "text-sidebar-accent-foreground group-hover:text-sidebar-primary-foreground"), children: item.name }), isActive && (_jsx("div", { className: "text-xs text-sidebar-primary-foreground/70 mt-0.5 whitespace-nowrap", children: item.description }))] })), isActive && !isExpanded && (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute inset-0 rounded-full bg-sidebar-primary opacity-20 animate-pulse" }), _jsx("div", { className: "absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-sidebar-primary rounded-l-full" })] })), isActive && isExpanded && (_jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-sidebar-primary-foreground rounded-full animate-pulse" }))] }), !isExpanded && (_jsxs("div", { className: "absolute left-full ml-4 px-3 py-2 bg-gradient-to-br from-sidebar-primary to-sidebar-primary/90 text-sidebar-primary-foreground rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-lg transform translate-x-2 group-hover:translate-x-0", children: [_jsx("div", { className: "font-medium text-sm", children: item.name }), _jsx("div", { className: "text-xs opacity-75 mt-1", children: item.description }), _jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-sidebar-primary rotate-45" })] }))] }, item.id));
                        }) }) }), _jsx("div", { className: "p-4 flex justify-center", children: _jsxs("div", { className: "relative group", children: [_jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-sidebar-primary to-sidebar-primary/80 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer", onClick: () => setIsExpanded(!isExpanded), children: _jsx("span", { className: "text-sidebar-primary-foreground font-semibold text-lg", children: "LG" }) }), !isExpanded && (_jsxs("div", { className: "absolute left-full ml-4 px-3 py-2 bg-gradient-to-br from-sidebar-primary to-sidebar-primary/90 text-sidebar-primary-foreground rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-lg transform translate-x-2 group-hover:translate-x-0", children: [_jsx("div", { className: "font-medium text-sm", children: "Liam Gallagher" }), _jsx("div", { className: "text-xs opacity-75 mt-1", children: "System Administrator" }), _jsx("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-sidebar-primary rotate-45" })] })), isExpanded && (_jsxs("div", { className: "absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-center", children: [_jsx("div", { className: "text-sidebar-foreground font-medium text-sm whitespace-nowrap", children: "Liam Gallagher" }), _jsx("div", { className: "text-sidebar-foreground/70 text-xs whitespace-nowrap", children: "System Administrator" })] }))] }) })] }) }));
}
//# sourceMappingURL=Sidebar.js.map