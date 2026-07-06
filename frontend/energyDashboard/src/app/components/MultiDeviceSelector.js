import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
export function MultiDeviceSelector({ selectedGroup, selectedDevices, onDeviceSelectionChange }) {
    const [isExpanded, setIsExpanded] = useState(true);
    // Mock device data based on selected group
    const getDevicesForGroup = (groupId) => {
        if (groupId === "group-1") { // Production
            return [
                { id: "prod-1", name: "Production Line A", location: "Building 1", status: "active", consumption: 2400 },
                { id: "prod-2", name: "Production Line B", location: "Building 1", status: "active", consumption: 2100 },
                { id: "prod-3", name: "Assembly Unit 1", location: "Building 2", status: "warning", consumption: 1800 },
                { id: "prod-4", name: "Assembly Unit 2", location: "Building 2", status: "active", consumption: 1950 },
                { id: "prod-5", name: "Quality Control", location: "Building 3", status: "active", consumption: 800 },
            ];
        }
        else if (groupId === "group-2") { // Administration
            return [
                { id: "admin-1", name: "Office Block A", location: "Main Building", status: "active", consumption: 450 },
                { id: "admin-2", name: "Office Block B", location: "Main Building", status: "active", consumption: 380 },
                { id: "admin-3", name: "Conference Center", location: "Main Building", status: "inactive", consumption: 0 },
                { id: "admin-4", name: "Reception & Lobby", location: "Main Building", status: "active", consumption: 320 },
                { id: "admin-5", name: "Cafeteria", location: "Main Building", status: "active", consumption: 280 },
            ];
        }
        return [];
    };
    const devices = getDevicesForGroup(selectedGroup);
    const getStatusColor = (status) => {
        switch (status) {
            case "active": return "bg-green-500";
            case "warning": return "bg-yellow-500";
            case "inactive": return "bg-gray-400";
            default: return "bg-gray-400";
        }
    };
    const getStatusBadge = (status) => {
        switch (status) {
            case "active": return _jsx(Badge, { className: "bg-green-100 text-green-800 border-green-200", children: "Active" });
            case "warning": return _jsx(Badge, { className: "bg-yellow-100 text-yellow-800 border-yellow-200", children: "Warning" });
            case "inactive": return _jsx(Badge, { className: "bg-gray-100 text-gray-800 border-gray-200", children: "Inactive" });
            default: return _jsx(Badge, { variant: "secondary", children: "Unknown" });
        }
    };
    const handleDeviceToggle = (deviceId) => {
        const newSelection = selectedDevices.includes(deviceId)
            ? selectedDevices.filter(id => id !== deviceId)
            : [...selectedDevices, deviceId];
        onDeviceSelectionChange(newSelection);
    };
    const handleSelectAll = () => {
        const activeDeviceIds = devices.filter(d => d.status === "active").map(d => d.id);
        onDeviceSelectionChange(activeDeviceIds);
    };
    const handleSelectNone = () => {
        onDeviceSelectionChange([]);
    };
    if (devices.length === 0)
        return null;
    return (_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: ["Device Selection for ", selectedGroup === "group-1" ? "Production Group" : "Administration Group", _jsxs(Badge, { variant: "outline", children: [selectedDevices.length, "/", devices.length, " selected"] })] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setIsExpanded(!isExpanded), children: isExpanded ? _jsx(ChevronUp, { className: "w-4 h-4" }) : _jsx(ChevronDown, { className: "w-4 h-4" }) })] }), isExpanded && (_jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: handleSelectAll, children: "Select All Active" }), _jsx(Button, { variant: "outline", size: "sm", onClick: handleSelectNone, children: "Select None" })] }))] }), isExpanded && (_jsxs(CardContent, { children: [_jsx("div", { className: "space-y-3", children: devices.map((device) => (_jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Checkbox, { id: device.id, checked: selectedDevices.includes(device.id), onCheckedChange: () => handleDeviceToggle(device.id), disabled: device.status === "inactive" }), _jsx("div", { className: `w-3 h-3 rounded-full ${getStatusColor(device.status)}` }), _jsxs("div", { children: [_jsx("label", { htmlFor: device.id, className: "font-medium cursor-pointer", children: device.name }), _jsx("p", { className: "text-sm text-muted-foreground", children: device.location })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "text-sm font-medium", children: [device.consumption.toLocaleString(), " kWh"] }), _jsx("div", { className: "text-xs text-muted-foreground", children: "Current usage" })] }), getStatusBadge(device.status)] })] }, device.id))) }), selectedDevices.length > 0 && (_jsx("div", { className: "mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg", children: _jsx("div", { className: "flex items-center justify-between", children: _jsxs("div", { children: [_jsxs("div", { className: "font-medium text-primary", children: [selectedDevices.length, " devices selected"] }), _jsxs("div", { className: "text-sm text-muted-foreground", children: ["Total consumption: ", devices
                                                .filter(d => selectedDevices.includes(d.id))
                                                .reduce((sum, d) => sum + d.consumption, 0)
                                                .toLocaleString(), " kWh"] })] }) }) }))] }))] }));
}
//# sourceMappingURL=MultiDeviceSelector.js.map