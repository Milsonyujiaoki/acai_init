import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
const kpiData = [
    {
        title: "Total Revenue",
        value: "RM1,24,563",
        change: "+12.5%",
        trend: "up",
        icon: DollarSign,
        description: "vs last month",
        color: "text-primary",
        bgColor: "bg-primary/10"
    },
    {
        title: "Total Orders",
        value: "1,247",
        change: "+8.2%",
        trend: "up",
        icon: ShoppingCart,
        description: "vs last month",
        color: "text-blue-600",
        bgColor: "bg-blue-100 dark:bg-blue-950"
    },
    {
        title: "Inventory Value",
        value: "RM86,420",
        change: "-2.1%",
        trend: "down",
        icon: Package,
        description: "vs last month",
        color: "text-green-600",
        bgColor: "bg-green-100 dark:bg-green-950"
    },
    {
        title: "Active Customers",
        value: "2,847",
        change: "+15.3%",
        trend: "up",
        icon: Users,
        description: "vs last month",
        color: "text-purple-600",
        bgColor: "bg-purple-100 dark:bg-purple-950"
    }
];
export function KPICards() {
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: kpiData.map((kpi) => (_jsxs(Card, { className: "hover:shadow-md transition-all duration-300 hover:border-primary/20 group", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: kpi.title }), _jsx("div", { className: `p-2 rounded-lg ${kpi.bgColor} ${kpi.color} group-hover:scale-105 transition-transform`, children: _jsx(kpi.icon, { className: "h-4 w-4" }) })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-1", children: [_jsx("div", { className: "text-2xl font-semibold", style: { fontFamily: 'Satoshi' }, children: kpi.value }), _jsxs("div", { className: "flex items-center space-x-1 text-xs", children: [kpi.trend === "up" ? (_jsx(TrendingUp, { className: "h-3 w-3 text-green-500" })) : (_jsx(TrendingDown, { className: "h-3 w-3 text-red-500" })), _jsx("span", { className: `font-medium ${kpi.trend === "up" ? "text-green-600" : "text-red-600"}`, children: kpi.change }), _jsx("span", { className: "text-muted-foreground", children: kpi.description })] })] }) })] }, kpi.title))) }));
}
//# sourceMappingURL=KPICards.js.map