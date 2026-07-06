import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Activity, Zap, TrendingUp, BarChart } from "lucide-react";
export function RealtimeDataPanel({ data }) {
    const parameters = [
        {
            id: "kvah",
            label: "KVAH",
            value: data.kvah,
            unit: "KVAH",
            description: "Apparent Energy",
            icon: BarChart,
            color: "text-primary"
        },
        {
            id: "billing",
            label: "Billing",
            value: data.billing,
            unit: "₹",
            description: "Current Billing",
            icon: TrendingUp,
            color: "text-chart-3"
        },
        {
            id: "kva",
            label: "KVA",
            value: data.kva,
            unit: "KVA",
            description: "Apparent Power",
            icon: Zap,
            color: "text-chart-2"
        },
        {
            id: "kw",
            label: "KW",
            value: data.kw,
            unit: "KW",
            description: "Active Power",
            icon: Activity,
            color: "text-primary"
        },
        {
            id: "kwh",
            label: "KWH",
            value: data.kwh,
            unit: "KWH",
            description: "Energy Consumption",
            icon: TrendingUp,
            color: "text-chart-1"
        },
        {
            id: "pf",
            label: "Power Factor",
            value: data.pf,
            unit: "",
            description: "Power Factor",
            icon: BarChart,
            color: "text-chart-4"
        },
        {
            id: "kvarh_lag",
            label: "KVARh (Lag)",
            value: data.kvarh_lag,
            unit: "KVARh",
            description: "Reactive Energy Lag",
            icon: Activity,
            color: "text-chart-4"
        },
        {
            id: "kvarh_lead",
            label: "KVARh (Lead)",
            value: data.kvarh_lead,
            unit: "KVARh",
            description: "Reactive Energy Lead",
            icon: Activity,
            color: "text-chart-5"
        }
    ];
    const getPowerFactorStatus = (pf) => {
        if (pf >= 0.95)
            return { status: "Excellent", variant: "default", color: "bg-green-500" };
        if (pf >= 0.85)
            return { status: "Good", variant: "secondary", color: "bg-yellow-500" };
        return { status: "Poor", variant: "destructive", color: "bg-red-500" };
    };
    const pfStatus = getPowerFactorStatus(data.pf);
    return (_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Activity, { className: "w-5 h-5 text-primary" }), "Real-time Device Data"] }), _jsxs(CardDescription, { children: ["Live parameter readings - Last updated: ", data.timestamp] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" }), _jsx("span", { className: "text-sm text-muted-foreground", children: "Live" })] })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("div", { className: "p-4 bg-accent/50 rounded-lg", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium", children: "Power Factor Status" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "System efficiency indicator" })] }), _jsxs("div", { className: "text-right", children: [_jsx("div", { className: "text-2xl font-bold", children: data.pf.toFixed(3) }), _jsx(Badge, { variant: pfStatus.variant, children: pfStatus.status })] })] }) }), _jsx(Separator, {}), _jsxs("div", { className: "space-y-3", children: [_jsx("h4", { className: "font-medium text-sm text-muted-foreground", children: "ENERGY PARAMETERS" }), parameters.map((param, index) => {
                                const Icon = param.icon;
                                return (_jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg hover:bg-accent/30 transition-colors", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: `p-2 rounded-lg bg-accent/50 ${param.color}`, children: _jsx(Icon, { className: "w-4 h-4" }) }), _jsxs("div", { children: [_jsx("div", { className: "font-medium text-sm", children: param.label }), _jsx("div", { className: "text-xs text-muted-foreground", children: param.description })] })] }), _jsxs("div", { className: "text-right", children: [_jsx("div", { className: "font-semibold", children: param.id === 'pf'
                                                        ? param.value.toFixed(3)
                                                        : param.value.toFixed(2) }), _jsx("div", { className: "text-xs text-muted-foreground", children: param.unit })] })] }, param.id));
                            })] }), _jsx(Separator, {}), _jsxs("div", { className: "grid grid-cols-2 gap-3", children: [_jsxs("div", { className: "p-3 bg-accent/30 rounded-lg", children: [_jsx("div", { className: "text-xs text-muted-foreground", children: "Peak Demand" }), _jsxs("div", { className: "font-semibold", children: [Math.max(...[data.kw, data.kva]).toFixed(1), " KW"] })] }), _jsxs("div", { className: "p-3 bg-accent/30 rounded-lg", children: [_jsx("div", { className: "text-xs text-muted-foreground", children: "Efficiency" }), _jsxs("div", { className: "font-semibold", children: [((data.kw / data.kva) * 100).toFixed(1), "%"] })] })] })] })] }));
}
//# sourceMappingURL=RealtimeDataPanel.js.map