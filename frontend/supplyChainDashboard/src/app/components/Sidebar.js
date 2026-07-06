import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { LayoutDashboard, Truck, Car, Users, Route, DollarSign, Settings, ChevronLeft, Plane, Ship } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from './ui/utils';
const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'transports', label: 'Transports / Trips', icon: Truck, badge: '12' },
    { id: 'vehicles', label: 'Vehicles', icon: Car },
    { id: 'drivers', label: 'Drivers', icon: Users },
    { id: 'routes', label: 'Routes & Bookings', icon: Route, badge: '5' },
    { id: 'revenue', label: 'Revenue & Reports', icon: DollarSign },
    { id: 'settings', label: 'Settings', icon: Settings },
];
export function Sidebar({ collapsed, onCollapse, activeModule, onModuleChange }) {
    return (_jsxs("div", { className: cn("bg-white border-r border-gray-200 flex flex-col transition-all duration-300", collapsed ? "w-16" : "w-64"), children: [_jsx("div", { className: "p-4 flex justify-end", children: _jsx(Button, { variant: "ghost", size: "icon", onClick: onCollapse, className: "h-8 w-8", children: _jsx(ChevronLeft, { className: cn("h-4 w-4 transition-transform", collapsed && "rotate-180") }) }) }), _jsxs("nav", { className: "flex-1 px-3 pb-4", children: [_jsx("div", { className: "space-y-1", children: menuItems.map((item) => (_jsxs(Button, { variant: activeModule === item.id ? "secondary" : "ghost", className: cn("w-full justify-start h-10", collapsed ? "px-0" : "px-3", activeModule === item.id && "bg-blue-50 text-blue-700 border-blue-200"), onClick: () => onModuleChange(item.id), children: [_jsx(item.icon, { className: cn("h-4 w-4", collapsed ? "mx-auto" : "mr-3") }), !collapsed && (_jsxs(_Fragment, { children: [_jsx("span", { className: "flex-1 text-left", children: item.label }), item.badge && (_jsx(Badge, { variant: "secondary", className: "ml-auto bg-blue-100 text-blue-700", children: item.badge }))] }))] }, item.id))) }), !collapsed && (_jsxs("div", { className: "mt-8 p-3 bg-gray-50 rounded-lg", children: [_jsx("h4", { className: "font-medium text-gray-900 mb-2", children: "Transport Modes" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Truck, { className: "h-4 w-4 text-green-600" }), _jsx("span", { className: "text-gray-700", children: "Road" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Plane, { className: "h-4 w-4 text-blue-600" }), _jsx("span", { className: "text-gray-700", children: "Air" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Ship, { className: "h-4 w-4 text-teal-600" }), _jsx("span", { className: "text-gray-700", children: "Sea" })] })] })] }))] })] }));
}
//# sourceMappingURL=Sidebar.js.map