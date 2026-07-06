import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Home, TrendingUp, Package, DollarSign, Warehouse, Truck, Users, Store, Globe, ShoppingCart, FileText, BarChart3, Settings, Crown, Minimize2 } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from './figma/ImageWithFallback';
import kredivLogo from 'figma:asset/78c5270246ba09f94198b786559619f1c2eac406.png';
const navigationItems = [
    {
        title: "Overview",
        items: [
            { title: "Dashboard", icon: Home, url: "#", active: true },
            { title: "Analytics", icon: BarChart3, url: "#" },
        ]
    },
    {
        title: "Sales Channels",
        items: [
            { title: "Store", icon: Store, url: "#" },
            { title: "Marketplace", icon: ShoppingCart, url: "#" },
            { title: "Website", icon: Globe, url: "#" },
        ]
    },
    {
        title: "SCM & Stocks",
        items: [
            { title: "Inventory", icon: Package, url: "#" },
            { title: "Products", icon: Package, url: "#" },
            { title: "Supply Chain", icon: TrendingUp, url: "#" },
        ]
    },
    {
        title: "Finance",
        items: [
            { title: "Invoicing", icon: FileText, url: "#" },
            { title: "Reports", icon: BarChart3, url: "#" },
            { title: "Accounts", icon: DollarSign, url: "#" },
        ]
    },
    {
        title: "WMS",
        items: [
            { title: "Warehouse", icon: Warehouse, url: "#" },
            { title: "Orders", icon: FileText, url: "#" },
            { title: "Tracking", icon: Package, url: "#" },
        ]
    },
    {
        title: "Delivery",
        items: [
            { title: "EasyParcel", icon: Truck, url: "#" },
            { title: "Deliva", icon: Truck, url: "#" },
            { title: "ParcelDaily", icon: Truck, url: "#" },
        ]
    },
    {
        title: "CRM",
        items: [
            { title: "Customers", icon: Users, url: "#" },
            { title: "Support", icon: Users, url: "#" },
        ]
    }
];
export function AppSidebar({ onMinimize }) {
    return (_jsxs(Sidebar, { collapsible: "icon", className: "border-r", children: [_jsx(SidebarHeader, { children: _jsxs("div", { className: "flex items-center justify-between p-2", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 flex items-center justify-center", children: _jsx(ImageWithFallback, { src: kredivLogo, alt: "Krediv Logo", className: "w-full h-full object-contain" }) }), _jsx("span", { className: "font-semibold text-sidebar-foreground text-lg", style: { fontFamily: 'Satoshi' }, children: "Krediv ERP" })] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: onMinimize, className: "h-8 w-8 p-0 hover:bg-accent", children: _jsx(Minimize2, { className: "w-4 h-4" }) })] }) }), _jsxs(SidebarContent, { className: "px-2", children: [navigationItems.map((section) => (_jsxs(SidebarGroup, { children: [_jsx(SidebarGroupLabel, { className: "text-xs font-medium text-muted-foreground px-2 mb-2", children: section.title }), _jsx(SidebarGroupContent, { children: _jsx(SidebarMenu, { children: section.items.map((item) => (_jsx(SidebarMenuItem, { children: _jsx(SidebarMenuButton, { asChild: true, className: `w-full justify-start gap-3 h-9 px-3 rounded-lg transition-colors ${item.active
                                                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                                : 'hover:bg-accent hover:text-accent-foreground'}`, children: _jsxs("a", { href: item.url, children: [_jsx(item.icon, { className: "w-4 h-4" }), _jsx("span", { className: "text-sm", children: item.title })] }) }) }, item.title))) }) })] }, section.title))), _jsx(Separator, { className: "my-4" }), _jsx(SidebarGroup, { children: _jsx(SidebarGroupContent, { children: _jsx(SidebarMenu, { children: _jsx(SidebarMenuItem, { children: _jsx(SidebarMenuButton, { asChild: true, children: _jsxs("a", { href: "#", className: "w-full justify-start gap-3 h-9 px-3 rounded-lg hover:bg-accent hover:text-accent-foreground", children: [_jsx(Settings, { className: "w-4 h-4" }), _jsx("span", { className: "text-sm", children: "Settings" })] }) }) }) }) }) })] }), _jsx(SidebarFooter, { className: "p-4", children: _jsxs(Button, { className: "w-full justify-start gap-2 bg-gradient-to-r from-primary to-[#ff6b2d] hover:from-primary/90 hover:to-[#ff6b2d]/90 text-primary-foreground", children: [_jsx(Crown, { className: "w-4 h-4" }), "Upgrade Plan"] }) }), _jsx(SidebarRail, {})] }));
}
//# sourceMappingURL=AppSidebar.js.map