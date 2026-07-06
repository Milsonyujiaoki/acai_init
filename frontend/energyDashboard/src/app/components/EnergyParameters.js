import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
export function EnergyParameters({ dataMode, selectedDevice }) {
    // Mock data - in real app this would come from API
    const parameters = [
        {
            id: "kva",
            name: "KVA",
            fullName: "Apparent Power",
            value: "1,245.6",
            unit: "kVA",
            change: "+5.2%",
            trend: "up",
            status: "normal",
        },
        {
            id: "kwh",
            name: "KWH",
            fullName: "Energy Consumption",
            value: "8,932.4",
            unit: "kWh",
            change: "+12.8%",
            trend: "up",
            status: "high",
        },
        {
            id: "kvar",
            name: "KVAR",
            fullName: "Reactive Power",
            value: "342.1",
            unit: "kVAR",
            change: "-2.1%",
            trend: "down",
            status: "normal",
        },
        {
            id: "pf",
            name: "PF",
            fullName: "Power Factor",
            value: "0.92",
            unit: "",
            change: "0.0%",
            trend: "stable",
            status: "optimal",
        },
    ];
    const getTrendIcon = (trend) => {
        switch (trend) {
            case "up":
                return _jsx(TrendingUp, { className: "size-4" });
            case "down":
                return _jsx(TrendingDown, { className: "size-4" });
            default:
                return _jsx(Minus, { className: "size-4" });
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case "high":
                return "destructive";
            case "optimal":
                return "default";
            default:
                return "secondary";
        }
    };
    const getTrendColor = (trend) => {
        switch (trend) {
            case "up":
                return "text-sidebar-primary";
            case "down":
                return "text-red-400";
            default:
                return "text-sidebar-foreground/70";
        }
    };
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: parameters.map((param) => (_jsxs(Card, { className: "border-sidebar-border/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-sidebar via-sidebar to-sidebar-accent backdrop-blur-sm hover:scale-[1.02] transform", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-3", children: [_jsx(CardTitle, { className: "text-sm font-medium text-sidebar-foreground", children: param.name }), _jsx(Badge, { variant: getStatusColor(param.status), className: "text-xs bg-gradient-to-r from-sidebar-primary to-sidebar-primary/80 text-sidebar-primary-foreground shadow-sm", children: param.status })] }), _jsx(CardContent, { className: "pb-4", children: _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-baseline gap-1", children: [_jsx("div", { className: "text-2xl font-bold text-sidebar-foreground", children: param.value }), param.unit && (_jsx("div", { className: "text-sm text-sidebar-foreground/70", children: param.unit }))] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "text-xs text-sidebar-foreground/70", children: param.fullName }), _jsxs("div", { className: `flex items-center gap-1 text-xs ${getTrendColor(param.trend)}`, children: [getTrendIcon(param.trend), param.change] })] })] }) })] }, param.id))) }));
}
//# sourceMappingURL=EnergyParameters.js.map