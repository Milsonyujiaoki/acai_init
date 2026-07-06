"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Activity, CheckCircle, AlertTriangle, XCircle, Clock, Globe, Server, Database, Cloud, Network, Monitor, Zap, Calendar, TrendingUp, BarChart3, Wifi, Shield, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
const services = [
    { name: "API Gateway", status: "operational", uptime: "99.99%", responseTime: "45ms" },
    { name: "AI Models", status: "operational", uptime: "99.97%", responseTime: "120ms" },
    { name: "Database", status: "operational", uptime: "99.95%", responseTime: "12ms" },
    { name: "Authentication", status: "operational", uptime: "99.98%", responseTime: "35ms" },
    { name: "File Storage", status: "degraded", uptime: "99.85%", responseTime: "180ms" },
    { name: "Dashboard", status: "operational", uptime: "99.96%", responseTime: "250ms" }
];
const incidents = [
    {
        title: "API Gateway Latency",
        status: "resolved",
        severity: "minor",
        started: "2024-01-15 14:30 UTC",
        resolved: "2024-01-15 15:45 UTC",
        description: "Increased response times due to traffic spike"
    },
    {
        title: "Database Maintenance",
        status: "scheduled",
        severity: "maintenance",
        started: "2024-01-20 02:00 UTC",
        resolved: "2024-01-20 04:00 UTC",
        description: "Scheduled maintenance for performance optimization"
    }
];
export function SystemStatusPage({ navigate }) {
    const [lastUpdated, setLastUpdated] = useState(new Date());
    const getStatusColor = (status) => {
        switch (status) {
            case 'operational': return 'text-green-600 dark:text-green-400';
            case 'degraded': return 'text-yellow-600 dark:text-yellow-400';
            case 'down': return 'text-red-600 dark:text-red-400';
            default: return 'text-gray-600 dark:text-gray-400';
        }
    };
    const getStatusIcon = (status) => {
        switch (status) {
            case 'operational': return CheckCircle;
            case 'degraded': return AlertTriangle;
            case 'down': return XCircle;
            default: return Clock;
        }
    };
    const getIncidentColor = (severity) => {
        switch (severity) {
            case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
            case 'major': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
            case 'minor': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'maintenance': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, className: "space-y-8", children: [_jsxs("div", { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3", children: [_jsx(Activity, { className: "w-5 h-5 text-green-600 dark:text-green-400" }), _jsx("span", { className: "text-sm font-semibold text-green-600 dark:text-green-300", children: "All Systems Operational" })] }), _jsxs("h1", { className: "text-5xl md:text-7xl font-bold", children: ["System ", _jsx("span", { className: "gradient-text-blue", children: "Status" })] }), _jsx("p", { className: "text-xl max-w-4xl mx-auto text-foreground-muted", children: "Real-time status and performance metrics for all Delibix AI services." }), _jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-foreground-muted", children: [_jsx(Clock, { className: "w-4 h-4" }), _jsxs("span", { children: ["Last updated: ", lastUpdated.toLocaleString()] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setLastUpdated(new Date()), children: _jsx(RefreshCw, { className: "w-4 h-4" }) })] })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsxs(Card, { className: "glass p-8 mb-12", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h2", { children: "Current Status" }), _jsx(Badge, { className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400", children: "All Systems Operational" })] }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-green-600 dark:text-green-400 mb-2", children: "99.97%" }), _jsx("div", { className: "text-sm text-foreground-muted", children: "30-day uptime" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold gradient-text-blue mb-2", children: "65ms" }), _jsx("div", { className: "text-sm text-foreground-muted", children: "Avg response time" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold gradient-text-blue mb-2", children: "0" }), _jsx("div", { className: "text-sm text-foreground-muted", children: "Active incidents" })] })] })] }), _jsxs(Card, { className: "glass p-8 mb-12", children: [_jsx("h2", { className: "mb-6", children: "Service Status" }), _jsx("div", { className: "space-y-4", children: services.map((service, index) => {
                                    const StatusIcon = getStatusIcon(service.status);
                                    return (_jsxs("div", { className: "flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(StatusIcon, { className: `w-5 h-5 ${getStatusColor(service.status)}` }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: service.name }), _jsx("div", { className: "text-sm text-foreground-muted capitalize", children: service.status })] })] }), _jsxs("div", { className: "text-right", children: [_jsx("div", { className: "text-sm font-semibold", children: service.uptime }), _jsx("div", { className: "text-xs text-foreground-muted", children: service.responseTime })] })] }, index));
                                }) })] }), _jsxs(Card, { className: "glass p-8 mb-12", children: [_jsx("h2", { className: "mb-6", children: "Recent Incidents" }), _jsx("div", { className: "space-y-4", children: incidents.map((incident, index) => (_jsxs("div", { className: "border border-border rounded-lg p-6", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsx("h3", { children: incident.title }), _jsx(Badge, { className: getIncidentColor(incident.severity), children: incident.severity })] }), _jsx("p", { className: "text-foreground-muted mb-4", children: incident.description }), _jsxs("div", { className: "flex gap-6 text-sm text-foreground-muted", children: [_jsxs("span", { children: ["Started: ", incident.started] }), _jsxs("span", { children: ["Resolved: ", incident.resolved] }), _jsx(Badge, { variant: "outline", className: "text-xs", children: incident.status })] })] }, index))) })] }), _jsxs(Card, { className: "glass p-8 text-center", children: [_jsx("h2", { className: "mb-4", children: "Stay Updated" }), _jsx("p", { className: "text-foreground-muted mb-6", children: "Get notified about service updates and maintenance windows." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white", children: "Subscribe to Updates" }), _jsxs(Button, { variant: "outline", size: "lg", children: [_jsx(Calendar, { className: "w-5 h-5 mr-2" }), "Maintenance Schedule"] })] })] })] })] }));
}
//# sourceMappingURL=SystemStatusPage.js.map