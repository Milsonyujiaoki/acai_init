import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { LayoutDashboard, Truck, Users, Route, Package, DollarSign, FileText, Settings, ChevronLeft, ChevronRight, Zap, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
const menuItems = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
        description: 'Overview and key metrics'
    },
    {
        id: 'transports',
        label: 'Trips / Transports',
        icon: Package,
        notifications: 3,
        badge: {
            text: 'Active',
            variant: 'default'
        },
        description: 'Manage transportation orders'
    },
    {
        id: 'vehicles',
        label: 'Fleet Management',
        icon: Truck,
        notifications: 2,
        badge: {
            text: '247',
            variant: 'secondary'
        },
        description: 'Vehicle fleet and maintenance'
    },
    {
        id: 'drivers',
        label: 'Drivers',
        icon: Users,
        badge: {
            text: 'On Duty',
            variant: 'outline'
        },
        description: 'Driver management and assignments'
    },
    {
        id: 'routes',
        label: 'Routes & Bookings',
        icon: Route,
        notifications: 1,
        description: 'Route optimization and customer bookings'
    },
    {
        id: 'revenue',
        label: 'Revenue & Reports',
        icon: DollarSign,
        badge: {
            text: '+12%',
            variant: 'default',
            animate: true
        },
        description: 'Financial analytics and reporting'
    },
    {
        id: 'logs',
        label: 'Activity Logs',
        icon: FileText,
        description: 'System logs and audit trail'
    },
    {
        id: 'settings',
        label: 'Settings',
        icon: Settings,
        description: 'System configuration and preferences'
    }
];
export function EnhancedSidebar({ collapsed, onCollapse, activeModule, onModuleChange, onOpenRouteOptimization, onOpenAnalytics, onOpenAlerts, onOpenGenerateReport }) {
    const [hoveredItem, setHoveredItem] = useState(null);
    const quickActions = [
        {
            id: 'optimize',
            label: 'Optimize Routes',
            icon: Zap,
            color: 'text-orange-500',
            onClick: () => onOpenRouteOptimization?.()
        },
        {
            id: 'analytics',
            label: 'View Analytics',
            icon: TrendingUp,
            color: 'text-blue-500',
            onClick: () => onOpenAnalytics?.()
        },
        {
            id: 'alerts',
            label: 'Check Alerts',
            icon: AlertCircle,
            color: 'text-red-500',
            onClick: () => onOpenAlerts?.()
        },
        {
            id: 'reports',
            label: 'Generate Report',
            icon: CheckCircle2,
            color: 'text-green-500',
            onClick: () => onOpenGenerateReport?.()
        }
    ];
    const MenuItem = ({ item }) => {
        const isActive = activeModule === item.id;
        const menuButton = (_jsxs(Button, { variant: isActive ? 'default' : 'ghost', className: `w-full justify-start h-11 px-3 mb-1 transition-all duration-200 ${isActive
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'hover:bg-accent hover:text-accent-foreground hover:translate-x-1'} ${collapsed ? 'px-0 justify-center' : ''}`, onClick: () => onModuleChange(item.id), onMouseEnter: () => setHoveredItem(item.id), onMouseLeave: () => setHoveredItem(null), children: [_jsx(item.icon, { className: `h-5 w-5 flex-shrink-0 ${collapsed ? '' : 'mr-3'}` }), !collapsed && (_jsxs(_Fragment, { children: [_jsx("span", { className: "flex-1 text-left font-medium", children: item.label }), _jsxs("div", { className: "flex items-center gap-2", children: [item.notifications && item.notifications > 0 && (_jsx(Badge, { className: `h-5 w-5 flex items-center justify-center p-0 text-xs ${item.notifications > 99 ? 'px-1' : ''}`, variant: "destructive", children: item.notifications > 99 ? '99+' : item.notifications })), item.badge && (_jsx(Badge, { variant: item.badge.variant, className: `text-xs font-medium ${item.badge.animate ? 'animate-pulse' : ''}`, children: item.badge.text }))] })] }))] }));
        if (collapsed) {
            return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: menuButton }), _jsx(TooltipContent, { side: "right", className: "bg-popover border-border", children: _jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("p", { className: "font-medium", children: item.label }), item.description && (_jsx("p", { className: "text-xs text-muted-foreground", children: item.description })), item.notifications && item.notifications > 0 && (_jsxs(Badge, { variant: "destructive", className: "text-xs self-start", children: [item.notifications, " new"] }))] }) })] }) }));
        }
        return menuButton;
    };
    return (_jsxs("aside", { className: `bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out flex flex-col ${collapsed ? 'w-16' : 'w-72'}`, children: [_jsx("div", { className: `p-4 border-b border-sidebar-border ${collapsed ? 'px-2' : ''}`, children: _jsxs("div", { className: "flex items-center justify-between", children: [!collapsed && (_jsxs("div", { children: [_jsx("h2", { className: "font-semibold text-sidebar-foreground", children: "Navigation" }), _jsx("p", { className: "text-xs text-sidebar-foreground/60", children: "Manage your operations" })] })), _jsx(Button, { variant: "ghost", size: "sm", onClick: onCollapse, className: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors", children: collapsed ? (_jsx(ChevronRight, { className: "h-4 w-4" })) : (_jsx(ChevronLeft, { className: "h-4 w-4" })) })] }) }), _jsxs("nav", { className: "flex-1 p-2 space-y-1 overflow-y-auto", children: [menuItems.map((item) => (_jsx(MenuItem, { item: item }, item.id))), !collapsed && (_jsxs(_Fragment, { children: [_jsx(Separator, { className: "my-4 bg-sidebar-border" }), _jsx("div", { className: "px-2 mb-3", children: _jsx("p", { className: "text-xs font-semibold text-sidebar-foreground/70 mb-2 uppercase tracking-wider", children: "Quick Actions" }) }), _jsx("div", { className: "space-y-1", children: quickActions.map((action) => (_jsxs(Button, { variant: "ghost", size: "sm", className: "w-full justify-start h-9 text-xs hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200", onClick: action.onClick, children: [_jsx(action.icon, { className: `h-4 w-4 mr-3 ${action.color}` }), action.label] }, action.id))) })] }))] }), !collapsed && (_jsx("div", { className: "p-4 border-t border-sidebar-border", children: _jsxs("div", { className: "bg-sidebar-accent/50 rounded-lg p-3", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("div", { className: "h-2 w-2 bg-green-500 rounded-full animate-pulse" }), _jsx("span", { className: "text-sm font-medium text-sidebar-foreground", children: "System Status" })] }), _jsx("p", { className: "text-xs text-sidebar-foreground/60", children: "All systems operational" }), _jsxs("div", { className: "mt-2 text-xs text-sidebar-foreground/60", children: ["Last update: ", new Date().toLocaleTimeString()] })] }) }))] }));
}
//# sourceMappingURL=EnhancedSidebar.js.map