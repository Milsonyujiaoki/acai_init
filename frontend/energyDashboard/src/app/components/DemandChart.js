import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
export function DemandChart({ dataMode, selectedDay }) {
    // Mock data - in real app this would come from API based on filters
    const demandData = [
        { time: "00:00", maxDemand: 1200, actualDemand: 890 },
        { time: "02:00", maxDemand: 1200, actualDemand: 750 },
        { time: "04:00", maxDemand: 1200, actualDemand: 650 },
        { time: "06:00", maxDemand: 1200, actualDemand: 980 },
        { time: "08:00", maxDemand: 1200, actualDemand: 1150 },
        { time: "10:00", maxDemand: 1200, actualDemand: 1080 },
        { time: "12:00", maxDemand: 1200, actualDemand: 1190 },
        { time: "14:00", maxDemand: 1200, actualDemand: 1240 },
        { time: "16:00", maxDemand: 1200, actualDemand: 1180 },
        { time: "18:00", maxDemand: 1200, actualDemand: 1350 },
        { time: "20:00", maxDemand: 1200, actualDemand: 1220 },
        { time: "22:00", maxDemand: 1200, actualDemand: 1010 },
    ];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (_jsxs("div", { className: "bg-background border border-border rounded-lg p-3 shadow-lg", children: [_jsx("p", { className: "font-medium", children: `Time: ${label}` }), payload.map((pld, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-3 h-1 rounded", style: { backgroundColor: pld.color } }), _jsxs("span", { className: "text-sm", children: [pld.dataKey === 'maxDemand' ? 'Max Demand' : 'Actual Demand', ": ", pld.value, " kW"] })] }, index)))] }));
        }
        return null;
    };
    // Calculate statistics
    const avgActualDemand = Math.round(demandData.reduce((sum, item) => sum + item.actualDemand, 0) / demandData.length);
    const peakDemand = Math.max(...demandData.map(item => item.actualDemand));
    const demandEfficiency = Math.round((avgActualDemand / 1200) * 100);
    return (_jsxs(Card, { className: "border-border/30 shadow-sm bg-card/80 backdrop-blur-sm", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsx(CardTitle, { className: "text-lg font-semibold text-card-foreground", children: "Max vs Actual Demand" }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Comparison of peak demand against actual usage over time (", dataMode, ")"] })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-3 gap-4", children: [_jsxs("div", { className: "text-center space-y-1", children: [_jsxs("div", { className: "text-xl font-bold text-foreground", children: [avgActualDemand, " kW"] }), _jsx("div", { className: "text-xs text-muted-foreground", children: "Avg Demand" })] }), _jsxs("div", { className: "text-center space-y-1", children: [_jsxs("div", { className: "text-xl font-bold text-foreground", children: [peakDemand, " kW"] }), _jsx("div", { className: "text-xs text-muted-foreground", children: "Peak Demand" })] }), _jsxs("div", { className: "text-center space-y-1", children: [_jsxs("div", { className: "text-xl font-bold text-foreground", children: [demandEfficiency, "%"] }), _jsx("div", { className: "text-xs text-muted-foreground", children: "Efficiency" })] })] }), _jsx("div", { className: "h-80 w-full min-h-[320px]", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: demandData, margin: { top: 5, right: 30, left: 20, bottom: 5 }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }), _jsx(XAxis, { dataKey: "time", stroke: "hsl(var(--muted-foreground))", fontSize: 12 }), _jsx(YAxis, { stroke: "hsl(var(--muted-foreground))", fontSize: 12, domain: [0, 1400] }), _jsx(Tooltip, { content: _jsx(CustomTooltip, {}) }), _jsx(Legend, { wrapperStyle: { position: 'relative' } }), _jsx(Line, { type: "monotone", dataKey: "maxDemand", stroke: "#ef4444", strokeWidth: 2, strokeDasharray: "5 5", name: "Max Demand", dot: false }, "line-max-demand"), _jsx(Line, { type: "monotone", dataKey: "actualDemand", stroke: "#22c55e", strokeWidth: 3, name: "Actual Demand", dot: { fill: "#22c55e", strokeWidth: 2, r: 4 }, activeDot: { r: 6, stroke: "#22c55e", strokeWidth: 2 } }, "line-actual-demand")] }) }) }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "text-sm font-medium", children: "Demand Analysis" }), _jsxs("div", { className: "grid grid-cols-1 gap-2", children: [_jsxs("div", { className: "flex items-center justify-between p-2 bg-muted/50 rounded-md", children: [_jsx("span", { className: "text-sm", children: "Peak Time" }), _jsx("span", { className: "text-sm font-medium", children: "18:00 (1,350 kW)" })] }), _jsxs("div", { className: "flex items-center justify-between p-2 bg-muted/50 rounded-md", children: [_jsx("span", { className: "text-sm", children: "Low Demand Time" }), _jsx("span", { className: "text-sm font-medium", children: "04:00 (650 kW)" })] }), _jsxs("div", { className: "flex items-center justify-between p-2 bg-muted/50 rounded-md", children: [_jsx("span", { className: "text-sm", children: "Demand Variance" }), _jsx("span", { className: "text-sm font-medium", children: "700 kW (58.3%)" })] })] })] })] }) })] }));
}
//# sourceMappingURL=DemandChart.js.map