import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TrendingUp, BarChart3, Waves } from "lucide-react";
export function AnalyticsChart({ data, graphType, deviceName }) {
    const renderConsumptionChart = () => (_jsx("div", { className: "w-full min-h-[400px]", children: _jsx(ResponsiveContainer, { width: "100%", height: 400, children: _jsxs(AreaChart, { data: data, children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "consumptionGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: "hsl(var(--primary))", stopOpacity: 0.3 }), _jsx("stop", { offset: "95%", stopColor: "hsl(var(--primary))", stopOpacity: 0 })] }) }), _jsx(CartesianGrid, { strokeDasharray: "3 3", className: "opacity-30" }), _jsx(XAxis, { dataKey: "timestamp", className: "text-xs", tick: { fontSize: 12 } }), _jsx(YAxis, { className: "text-xs", tick: { fontSize: 12 } }), _jsx(Tooltip, { contentStyle: {
                            backgroundColor: 'hsl(var(--card))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                            color: 'hsl(var(--card-foreground))'
                        }, labelFormatter: (value) => `Time: ${value}`, formatter: (value, name) => [
                            `${value.toFixed(2)} ${name === 'kwh' ? 'kWh' : name === 'kw' ? 'kW' : name === 'billing' ? '₹' : name.toUpperCase()}`,
                            name === 'kwh' ? 'Energy Consumption' :
                                name === 'kw' ? 'Active Power' :
                                    name === 'billing' ? 'Billing Amount' : name.toUpperCase()
                        ] }), _jsx(Legend, { wrapperStyle: { position: 'relative' } }), _jsx(Area, { type: "monotone", dataKey: "kwh", stroke: "hsl(var(--primary))", strokeWidth: 2, fill: "url(#consumptionGradient)", name: "Energy (kWh)" }, "area-kwh"), _jsx(Line, { type: "monotone", dataKey: "kw", stroke: "hsl(var(--chart-2))", strokeWidth: 2, name: "Power (kW)", dot: false }, "line-kw-consumption")] }) }) }));
    const renderParameterizedChart = () => (_jsx("div", { className: "w-full min-h-[400px]", children: _jsx(ResponsiveContainer, { width: "100%", height: 400, children: _jsxs(LineChart, { data: data, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", className: "opacity-30" }), _jsx(XAxis, { dataKey: "timestamp", className: "text-xs", tick: { fontSize: 12 } }), _jsx(YAxis, { className: "text-xs", tick: { fontSize: 12 } }), _jsx(Tooltip, { contentStyle: {
                            backgroundColor: 'hsl(var(--card))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                            color: 'hsl(var(--card-foreground))'
                        }, labelFormatter: (value) => `Time: ${value}`, formatter: (value, name) => [
                            `${value.toFixed(2)} ${name === 'kvah' ? 'KVAH' :
                                name === 'kva' ? 'KVA' :
                                    name === 'kw' ? 'KW' :
                                        name === 'pf' ? '' :
                                            name === 'kvarh_lag' ? 'KVARh' :
                                                name === 'kvarh_lead' ? 'KVARh' : ''}`,
                            name === 'kvah' ? 'Apparent Energy' :
                                name === 'kva' ? 'Apparent Power' :
                                    name === 'kw' ? 'Active Power' :
                                        name === 'pf' ? 'Power Factor' :
                                            name === 'kvarh_lag' ? 'Reactive Energy (Lag)' :
                                                name === 'kvarh_lead' ? 'Reactive Energy (Lead)' : name
                        ] }), _jsx(Legend, { wrapperStyle: { position: 'relative' } }), _jsx(Line, { type: "monotone", dataKey: "kvah", stroke: "hsl(var(--primary))", strokeWidth: 2, name: "KVAH", dot: false }, "line-kvah"), _jsx(Line, { type: "monotone", dataKey: "kva", stroke: "hsl(var(--chart-2))", strokeWidth: 2, name: "KVA", dot: false }, "line-kva"), _jsx(Line, { type: "monotone", dataKey: "kw", stroke: "hsl(var(--chart-3))", strokeWidth: 2, name: "KW", dot: false }, "line-kw-param"), _jsx(Line, { type: "monotone", dataKey: "pf", stroke: "hsl(var(--chart-4))", strokeWidth: 2, name: "Power Factor", dot: false }, "line-pf")] }) }) }));
    const renderHarmonicChart = () => (_jsx("div", { className: "w-full min-h-[400px]", children: _jsx(ResponsiveContainer, { width: "100%", height: 400, children: _jsxs(BarChart, { data: data, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", className: "opacity-30" }), _jsx(XAxis, { dataKey: "timestamp", className: "text-xs", tick: { fontSize: 12 } }), _jsx(YAxis, { className: "text-xs", tick: { fontSize: 12 } }), _jsx(Tooltip, { contentStyle: {
                            backgroundColor: 'hsl(var(--card))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                            color: 'hsl(var(--card-foreground))'
                        }, labelFormatter: (value) => `Time: ${value}`, formatter: (value, name) => [
                            `${value.toFixed(2)} KVARh`,
                            name === 'kvarh_lag' ? 'Reactive Energy (Lag)' : 'Reactive Energy (Lead)'
                        ] }), _jsx(Legend, { wrapperStyle: { position: 'relative' } }), _jsx(Bar, { dataKey: "kvarh_lag", fill: "hsl(var(--chart-4))", name: "KVARh (Lag)", radius: [2, 2, 0, 0] }, "bar-kvarh-lag"), _jsx(Bar, { dataKey: "kvarh_lead", fill: "hsl(var(--chart-5))", name: "KVARh (Lead)", radius: [2, 2, 0, 0] }, "bar-kvarh-lead")] }) }) }));
    const getChartTitle = () => {
        switch (graphType) {
            case "consumption":
                return "Energy Consumption Trends";
            case "parameterized":
                return "Parameterized Power Analysis";
            case "harmonic":
                return "Harmonic Analysis - Reactive Power";
            default:
                return "Energy Analysis";
        }
    };
    const getChartDescription = () => {
        switch (graphType) {
            case "consumption":
                return "Real-time energy consumption and active power monitoring";
            case "parameterized":
                return "Comprehensive power parameters including KVAH, KVA, KW, and Power Factor";
            case "harmonic":
                return "Reactive power analysis showing lag and lead components";
            default:
                return "Energy system analysis";
        }
    };
    const getChartIcon = () => {
        switch (graphType) {
            case "consumption":
                return TrendingUp;
            case "parameterized":
                return BarChart3;
            case "harmonic":
                return Waves;
            default:
                return TrendingUp;
        }
    };
    const ChartIcon = getChartIcon();
    return (_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(ChartIcon, { className: "w-5 h-5 text-primary" }), getChartTitle()] }), _jsxs(CardDescription, { children: [getChartDescription(), " for ", deviceName] })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsx(Tabs, { value: graphType, className: "w-full", children: _jsxs(TabsList, { className: "grid w-full grid-cols-3", children: [_jsxs(TabsTrigger, { value: "consumption", className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-4 h-4" }), "Consumption"] }), _jsxs(TabsTrigger, { value: "parameterized", className: "flex items-center gap-2", children: [_jsx(BarChart3, { className: "w-4 h-4" }), "Parameters"] }), _jsxs(TabsTrigger, { value: "harmonic", className: "flex items-center gap-2", children: [_jsx(Waves, { className: "w-4 h-4" }), "Harmonic"] })] }) }), _jsxs("div", { className: "w-full", children: [graphType === "consumption" && renderConsumptionChart(), graphType === "parameterized" && renderParameterizedChart(), graphType === "harmonic" && renderHarmonicChart()] })] }) })] }));
}
//# sourceMappingURL=AnalyticsChart.js.map