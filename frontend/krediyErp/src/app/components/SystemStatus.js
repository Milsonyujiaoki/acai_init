import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Server, Database, Wifi, Shield, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
const systemMetrics = [
    {
        name: "API Response",
        value: "120ms",
        status: "good",
        progress: 85
    },
    {
        name: "Database",
        value: "98.9%",
        status: "good",
        progress: 99
    },
    {
        name: "Storage",
        value: "67%",
        status: "warning",
        progress: 67
    },
    {
        name: "Network",
        value: "99.2%",
        status: "good",
        progress: 99
    }
];
const recentAlerts = [
    {
        type: "warning",
        message: "Storage usage above 65%",
        time: "2 hours ago"
    },
    {
        type: "info",
        message: "Database backup completed",
        time: "6 hours ago"
    },
    {
        type: "success",
        message: "All systems operational",
        time: "1 day ago"
    }
];
export function SystemStatus() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "text-base flex items-center gap-2", style: { fontFamily: 'Satoshi' }, children: [_jsx(Activity, { className: "w-4 h-4" }), "System Health"] }) }), _jsx(CardContent, { className: "space-y-4", children: systemMetrics.map((metric) => (_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm text-muted-foreground", children: metric.name }), _jsx("span", { className: "text-sm font-medium", children: metric.value })] }), _jsx(Progress, { value: metric.progress, className: "h-2" })] }, metric.name))) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-base", style: { fontFamily: 'Satoshi' }, children: "Recent Alerts" }) }), _jsx(CardContent, { className: "space-y-3", children: recentAlerts.map((alert, index) => (_jsxs("div", { className: "flex items-start gap-3 p-2 rounded-md hover:bg-muted/50", children: [_jsx("div", { className: `w-2 h-2 rounded-full mt-2 ${alert.type === 'warning' ? 'bg-yellow-500' :
                                        alert.type === 'success' ? 'bg-green-500' : 'bg-blue-500'}` }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "text-sm", children: alert.message }), _jsx("p", { className: "text-xs text-muted-foreground", children: alert.time })] })] }, index))) })] })] }));
}
//# sourceMappingURL=SystemStatus.js.map