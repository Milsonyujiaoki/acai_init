import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Store, Globe, ShoppingCart, Package, DollarSign, Warehouse, Truck, Users, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
const integrations = [
    {
        title: "Sales Channels",
        icon: Store,
        status: "active",
        description: "Store, Marketplace, Website integrations",
        modules: [
            { name: "Store Orders", value: "156", trend: "+12%" },
            { name: "Marketplace", value: "89", trend: "+8%" },
            { name: "Website", value: "234", trend: "+15%" }
        ],
        color: "bg-primary"
    },
    {
        title: "SCM & Stocks",
        icon: Package,
        status: "active",
        description: "Product content, inventory, shipping routes",
        modules: [
            { name: "Total Products", value: "1,247", trend: "+5%" },
            { name: "In Stock", value: "1,156", trend: "-2%" },
            { name: "Low Stock", value: "23", trend: "+3%" }
        ],
        color: "bg-green-500"
    },
    {
        title: "Finance Integration",
        icon: DollarSign,
        status: "active",
        description: "Invoices, reports, client accounts",
        modules: [
            { name: "Invoices", value: "RM1.2M", trend: "+18%" },
            { name: "Pending", value: "RM245K", trend: "-5%" },
            { name: "Overdue", value: "RM89K", trend: "+12%" }
        ],
        color: "bg-purple-500"
    },
    {
        title: "WMS",
        icon: Warehouse,
        status: "active",
        description: "Warehouse management, order processing",
        modules: [
            { name: "Orders Today", value: "67", trend: "+22%" },
            { name: "Shipped", value: "45", trend: "+18%" },
            { name: "Pending", value: "22", trend: "+5%" }
        ],
        color: "bg-blue-500"
    },
    {
        title: "Delivery Integration",
        icon: Truck,
        status: "warning",
        description: "EasyParcel, Deliva, ParcelDaily",
        modules: [
            { name: "In Transit", value: "134", trend: "+8%" },
            { name: "Delivered", value: "1,567", trend: "+15%" },
            { name: "Delayed", value: "12", trend: "+25%" }
        ],
        color: "bg-yellow-500"
    },
    {
        title: "CRM Support",
        icon: Users,
        status: "active",
        description: "Customer support, interaction records",
        modules: [
            { name: "Active Tickets", value: "28", trend: "-15%" },
            { name: "Resolved", value: "145", trend: "+12%" },
            { name: "Response Time", value: "2.5h", trend: "-8%" }
        ],
        color: "bg-teal-500"
    }
];
function getStatusIcon(status) {
    switch (status) {
        case "active":
            return _jsx(CheckCircle, { className: "w-4 h-4 text-green-500" });
        case "warning":
            return _jsx(AlertCircle, { className: "w-4 h-4 text-yellow-500" });
        case "error":
            return _jsx(AlertCircle, { className: "w-4 h-4 text-red-500" });
        default:
            return _jsx(Clock, { className: "w-4 h-4 text-gray-500" });
    }
}
function getStatusBadge(status) {
    const colors = {
        active: "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
        warning: "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800",
        error: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
        offline: "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800"
    };
    return (_jsx(Badge, { className: `${colors[status]} border text-xs`, children: status.charAt(0).toUpperCase() + status.slice(1) }));
}
export function IntegrationModules() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h2", { style: { fontFamily: 'Satoshi' }, children: "Integration Modules" }), _jsx(Button, { variant: "outline", size: "sm", className: "hover:bg-accent", children: "Manage Integrations" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: integrations.map((integration) => (_jsxs(Card, { className: "hover:shadow-md transition-shadow border hover:border-primary/20", children: [_jsxs(CardHeader, { className: "pb-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: `p-2 rounded-lg ${integration.color} text-white`, children: _jsx(integration.icon, { className: "w-4 h-4" }) }), _jsx("div", { children: _jsx(CardTitle, { className: "text-sm", style: { fontFamily: 'Satoshi' }, children: integration.title }) })] }), _jsxs("div", { className: "flex items-center gap-2", children: [getStatusIcon(integration.status), getStatusBadge(integration.status)] })] }), _jsx("p", { className: "text-xs text-muted-foreground mt-1", children: integration.description })] }), _jsx(CardContent, { className: "pt-0", children: _jsx("div", { className: "grid grid-cols-1 gap-3", children: integration.modules.map((module) => (_jsxs("div", { className: "flex items-center justify-between p-2 bg-accent/30 rounded-md hover:bg-accent/50 transition-colors", children: [_jsx("span", { className: "text-xs text-muted-foreground", children: module.name }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-sm font-medium", children: module.value }), _jsx("span", { className: `text-xs ${module.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`, children: module.trend })] })] }, module.name))) }) })] }, integration.title))) })] }));
}
//# sourceMappingURL=IntegrationModules.js.map