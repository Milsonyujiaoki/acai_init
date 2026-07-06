import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
export function ConsumptionChart({ selectedDay, selectedDevice }) {
    // Mock data - in real app this would come from API based on filters
    const consumptionData = [
        { name: "Device 1 - Main Building", value: 2400, color: "#22c55e" },
        { name: "Device 2 - Manufacturing", value: 4567, color: "#16a34a" },
        { name: "Device 3 - Office Block", value: 1890, color: "#15803d" },
        { name: "HVAC Systems", value: 3210, color: "#166534" },
        { name: "Lighting", value: 1250, color: "#14532d" },
        { name: "Equipment", value: 2100, color: "#052e16" },
    ];
    const totalConsumption = consumptionData.reduce((sum, item) => sum + item.value, 0);
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0];
            const percentage = ((data.value / totalConsumption) * 100).toFixed(1);
            return (_jsxs("div", { className: "bg-background border border-border rounded-lg p-3 shadow-lg", children: [_jsx("p", { className: "font-medium", children: data.name }), _jsxs("p", { className: "text-sm text-muted-foreground", children: [data.value.toLocaleString(), " kWh (", percentage, "%)"] })] }));
        }
        return null;
    };
    const CustomLegend = ({ payload }) => {
        return (_jsx("div", { className: "flex flex-wrap gap-4 justify-center mt-4", children: payload.map((entry, index) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: entry.color } }), _jsx("span", { className: "text-foreground", children: entry.value })] }, index))) }));
    };
    return (_jsxs(Card, { className: "border-border/30 shadow-sm bg-card/80 backdrop-blur-sm", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsx(CardTitle, { className: "text-lg font-semibold text-card-foreground", children: "Energy Consumption Overview" }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Distribution of energy consumption across all live devices for ", selectedDay] })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "text-center space-y-1", children: [_jsx("div", { className: "text-3xl font-bold text-foreground", children: totalConsumption.toLocaleString() }), _jsx("div", { className: "text-sm text-muted-foreground", children: "Total kWh consumption" })] }), _jsx("div", { className: "h-80 w-full min-h-[320px]", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(PieChart, { children: [_jsx(Pie, { data: consumptionData, cx: "50%", cy: "50%", innerRadius: 60, outerRadius: 120, paddingAngle: 2, dataKey: "value", children: consumptionData.map((entry, index) => (_jsx(Cell, { fill: entry.color }, `cell-${index}`))) }), _jsx(Tooltip, { content: _jsx(CustomTooltip, {}) }), _jsx(Legend, { content: _jsx(CustomLegend, {}), wrapperStyle: { position: 'relative' } })] }) }) }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "text-sm font-medium", children: "Device Status" }), _jsx("div", { className: "grid grid-cols-1 gap-2", children: consumptionData.slice(0, 3).map((device, index) => (_jsxs("div", { className: "flex items-center justify-between p-2 bg-muted/50 rounded-md", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 rounded-full", style: { backgroundColor: device.color } }), _jsx("span", { className: "text-sm", children: device.name })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: "text-sm font-medium", children: [device.value.toLocaleString(), " kWh"] }), _jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full", title: "Active" })] })] }, index))) })] })] }) })] }));
}
//# sourceMappingURL=ConsumptionChart.js.map