import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, DollarSign } from 'lucide-react';
const monthlyRevenueData = [
    { month: 'Jan', revenue: 120000 },
    { month: 'Feb', revenue: 135000 },
    { month: 'Mar', revenue: 148000 },
    { month: 'Apr', revenue: 162000 },
    { month: 'May', revenue: 151000 },
    { month: 'Jun', revenue: 179000 },
];
const transportModeData = [
    { mode: 'Road', revenue: 450000, color: '#10B981' },
    { mode: 'Air', revenue: 320000, color: '#3B82F6' },
    { mode: 'Sea', revenue: 275000, color: '#14B8A6' },
];
const topRoutesData = [
    { route: 'NY → LA', revenue: 89000 },
    { route: 'Chicago → Miami', revenue: 76000 },
    { route: 'Seattle → Denver', revenue: 64000 },
    { route: 'Boston → DC', revenue: 58000 },
    { route: 'Dallas → Houston', revenue: 52000 },
];
export function RevenueAnalytics() {
    const totalRevenue = transportModeData.reduce((sum, item) => sum + item.revenue, 0);
    return (_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs(Card, { className: "border-gray-200", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "h-5 w-5 text-blue-600" }), "Monthly Revenue Trend"] }) }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 250, children: _jsxs(LineChart, { data: monthlyRevenueData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#f0f0f0" }), _jsx(XAxis, { dataKey: "month", stroke: "#6B7280" }), _jsx(YAxis, { stroke: "#6B7280", tickFormatter: (value) => `$${value / 1000}K` }), _jsx(Tooltip, { formatter: (value) => [`$${value.toLocaleString()}`, 'Revenue'] }), _jsx(Line, { type: "monotone", dataKey: "revenue", stroke: "#3B82F6", strokeWidth: 3, dot: { fill: '#3B82F6', strokeWidth: 2, r: 4 } })] }) }) })] }), _jsxs(Card, { className: "border-gray-200", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(DollarSign, { className: "h-5 w-5 text-blue-600" }), "Revenue by Transport Mode"] }) }), _jsxs(CardContent, { children: [_jsx(ResponsiveContainer, { width: "100%", height: 250, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: transportModeData, cx: "50%", cy: "50%", innerRadius: 60, outerRadius: 100, paddingAngle: 5, dataKey: "revenue", children: transportModeData.map((entry, index) => (_jsx(Cell, { fill: entry.color }, `cell-${index}`))) }), _jsx(Tooltip, { formatter: (value) => [`$${value.toLocaleString()}`, 'Revenue'] })] }) }), _jsx("div", { className: "mt-4 space-y-2", children: transportModeData.map((item, index) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: item.color } }), _jsx("span", { className: "text-sm text-gray-700", children: item.mode })] }), _jsxs("div", { className: "text-sm font-medium", children: ["$", item.revenue.toLocaleString(), " (", Math.round((item.revenue / totalRevenue) * 100), "%)"] })] }, index))) })] })] }), _jsxs(Card, { className: "border-gray-200 lg:col-span-2", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Top Performing Routes" }) }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: topRoutesData, layout: "horizontal", children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#f0f0f0" }), _jsx(XAxis, { type: "number", stroke: "#6B7280", tickFormatter: (value) => `$${value / 1000}K` }), _jsx(YAxis, { dataKey: "route", type: "category", stroke: "#6B7280", width: 100 }), _jsx(Tooltip, { formatter: (value) => [`$${value.toLocaleString()}`, 'Revenue'] }), _jsx(Bar, { dataKey: "revenue", fill: "#3B82F6", radius: [0, 4, 4, 0] })] }) }) })] })] }));
}
//# sourceMappingURL=RevenueAnalytics.js.map