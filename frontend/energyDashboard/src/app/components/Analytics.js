import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Calendar, Download, Leaf, TrendingUp, Zap, Activity, BarChart3, Waves } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { AnalyticsChart } from "./AnalyticsChart";
import { RealtimeDataPanel } from "./RealtimeDataPanel";
import { SummaryReportTable } from "./SummaryReportTable";
import { EnvironmentalImpact } from "./EnvironmentalImpact";
export function Analytics() {
    const [selectedDevice, setSelectedDevice] = useState("device-001");
    const [selectedShift, setSelectedShift] = useState("all");
    const [selectedGraphType, setSelectedGraphType] = useState("consumption");
    // Mock devices data
    const devices = [
        { id: "device-001", name: "Main Power Panel A", location: "Building A - Floor 1" },
        { id: "device-002", name: "HVAC Control Unit", location: "Building A - Floor 2" },
        { id: "device-003", name: "Manufacturing Line 1", location: "Production Floor" },
        { id: "device-004", name: "Lighting Circuit B", location: "Building B - All Floors" },
        { id: "device-005", name: "Server Room UPS", location: "Data Center" }
    ];
    const shifts = [
        { id: "all", name: "All Shifts" },
        { id: "morning", name: "Morning Shift (6AM - 2PM)" },
        { id: "afternoon", name: "Afternoon Shift (2PM - 10PM)" },
        { id: "night", name: "Night Shift (10PM - 6AM)" }
    ];
    const graphTypes = [
        { id: "consumption", name: "Consumption", icon: TrendingUp },
        { id: "parameterized", name: "Parameterized View", icon: BarChart3 },
        { id: "harmonic", name: "Harmonic Analysis", icon: Waves }
    ];
    // Mock analytics data
    const mockData = Array.from({ length: 24 }, (_, i) => ({
        deviceId: selectedDevice,
        timestamp: `${String(i).padStart(2, '0')}:00`,
        kvah: 45 + Math.random() * 20,
        billing: (45 + Math.random() * 20) * 8.5, // ₹8.5 per unit
        kva: 42 + Math.random() * 18,
        kw: 38 + Math.random() * 15,
        kwh: 35 + Math.random() * 25,
        pf: 0.85 + Math.random() * 0.1,
        kvarh_lag: 12 + Math.random() * 8,
        kvarh_lead: 8 + Math.random() * 5,
        co2_emissions: (35 + Math.random() * 25) * 0.82 // kg CO2 per kWh
    }));
    const selectedDeviceInfo = devices.find(d => d.id === selectedDevice);
    return (_jsxs("div", { className: "p-6 space-y-6 bg-background min-h-full", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-semibold text-foreground", children: "Analytics" }), _jsx("p", { className: "text-muted-foreground mt-1", children: "Detailed device-specific energy analysis and insights" })] }), _jsxs(Button, { variant: "outline", className: "gap-2", children: [_jsx(Download, { className: "w-4 h-4" }), "Export All Data"] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Activity, { className: "w-5 h-5 text-primary" }), "Analysis Filters"] }), _jsx(CardDescription, { children: "Configure your analysis parameters and view settings" })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium", children: "Device Selection" }), _jsxs(Select, { value: selectedDevice, onValueChange: setSelectedDevice, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select device" }) }), _jsx(SelectContent, { children: devices.map((device) => (_jsx(SelectItem, { value: device.id, children: _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: device.name }), _jsx("div", { className: "text-xs text-muted-foreground", children: device.location })] }) }, device.id))) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium", children: "Shift Filter" }), _jsxs(Select, { value: selectedShift, onValueChange: setSelectedShift, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select shift" }) }), _jsx(SelectContent, { children: shifts.map((shift) => (_jsx(SelectItem, { value: shift.id, children: shift.name }, shift.id))) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium", children: "Graph Type" }), _jsxs(Select, { value: selectedGraphType, onValueChange: setSelectedGraphType, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select graph type" }) }), _jsx(SelectContent, { children: graphTypes.map((type) => {
                                                            const Icon = type.icon;
                                                            return (_jsx(SelectItem, { value: type.id, children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Icon, { className: "w-4 h-4" }), type.name] }) }, type.id));
                                                        }) })] })] })] }), selectedDeviceInfo && (_jsx("div", { className: "mt-4 p-4 bg-accent/50 rounded-lg", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-primary rounded-full animate-pulse" }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium", children: selectedDeviceInfo.name }), _jsx("p", { className: "text-sm text-muted-foreground", children: selectedDeviceInfo.location })] }), _jsx(Badge, { variant: "secondary", className: "ml-auto", children: "Active" })] }) }))] })] }), _jsx(EnvironmentalImpact, { data: mockData }), _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [_jsx("div", { className: "xl:col-span-2 space-y-6", children: _jsx(AnalyticsChart, { data: mockData, graphType: selectedGraphType, deviceName: selectedDeviceInfo?.name || "Unknown Device" }) }), _jsx("div", { className: "space-y-6", children: _jsx(RealtimeDataPanel, { data: mockData[mockData.length - 1] }) })] }), _jsx(SummaryReportTable, { data: mockData, deviceName: selectedDeviceInfo?.name || "Unknown Device" })] }));
}
//# sourceMappingURL=Analytics.js.map