import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Filter, Search } from "lucide-react";
export function EnhancedFilterSection({ selectedFilterType, selectedDevice, selectedDevices, dataMode, selectedDay, onFilterTypeChange, onDeviceChange, onDevicesChange, onDataModeChange, onDayChange, onApplyFilters, }) {
    const [isVirtualGroupDropdownOpen, setIsVirtualGroupDropdownOpen] = useState(false);
    // All individual devices
    const allDevices = [
        { id: "device-1", name: "Main Building - Floor 1", location: "Building A", status: "active" },
        { id: "device-2", name: "Main Building - Floor 2", location: "Building A", status: "active" },
        { id: "device-3", name: "Manufacturing Unit 1", location: "Building B", status: "active" },
        { id: "device-4", name: "Manufacturing Unit 2", location: "Building B", status: "warning" },
        { id: "device-5", name: "Office Block A", location: "Building C", status: "active" },
        { id: "device-6", name: "Office Block B", location: "Building C", status: "active" },
        { id: "device-7", name: "Production Line A", location: "Building B", status: "active" },
        { id: "device-8", name: "Production Line B", location: "Building B", status: "active" },
        { id: "device-9", name: "Assembly Unit 1", location: "Building D", status: "active" },
        { id: "device-10", name: "Assembly Unit 2", location: "Building D", status: "inactive" },
    ];
    // Virtual groups with associated devices
    const virtualGroups = {
        "group-production": {
            name: "Production Group",
            devices: ["device-3", "device-4", "device-7", "device-8", "device-9", "device-10"]
        },
        "group-administration": {
            name: "Administration Group",
            devices: ["device-1", "device-2", "device-5", "device-6"]
        }
    };
    const dataModes = [
        { id: "real-time", name: "Real-Time" },
        { id: "historical", name: "Historical" },
        { id: "combined", name: "Combined" },
    ];
    const timePerl = [
        { id: "today", name: "Today" },
        { id: "yesterday", name: "Yesterday" },
        { id: "last-7-days", name: "Last 7 Days" },
        { id: "last-30-days", name: "Last 30 Days" },
    ];
    const handleVirtualGroupDeviceToggle = (deviceId) => {
        const newSelection = selectedDevices.includes(deviceId)
            ? selectedDevices.filter(id => id !== deviceId)
            : [...selectedDevices, deviceId];
        onDevicesChange(newSelection);
    };
    const getDevicesForGroup = (groupId) => {
        const group = virtualGroups[groupId];
        if (!group)
            return [];
        return allDevices.filter(device => group.devices.includes(device.id));
    };
    const getStatusColor = (status) => {
        switch (status) {
            case "active": return "bg-green-500";
            case "warning": return "bg-yellow-500";
            case "inactive": return "bg-gray-400";
            default: return "bg-gray-400";
        }
    };
    return (_jsx(Card, { className: "border-border/30 shadow-sm mb-6 bg-card/80 backdrop-blur-sm", children: _jsx(CardContent, { className: "p-5", children: _jsxs("div", { className: "flex flex-col lg:flex-row gap-4 items-end", children: [_jsxs("div", { className: "flex-1 space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-muted-foreground", children: "Filter Type" }), _jsxs(Select, { value: selectedFilterType, onValueChange: (value) => onFilterTypeChange(value), children: [_jsx(SelectTrigger, { className: "h-11 border-border/50 bg-background/50", children: _jsx(SelectValue, { placeholder: "Select filter type" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "device", children: "Individual Device" }), _jsx(SelectItem, { value: "virtual-group", children: "Virtual Group" })] })] })] }), _jsxs("div", { className: "flex-1 space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-muted-foreground", children: selectedFilterType === "device" ? "Select Device" : "Select Virtual Group & Devices" }), selectedFilterType === "device" ? (_jsxs(Select, { value: selectedDevice, onValueChange: onDeviceChange, children: [_jsx(SelectTrigger, { className: "h-11 border-border/50 bg-background/50", children: _jsx(SelectValue, { placeholder: "Choose a device" }) }), _jsx(SelectContent, { children: allDevices.map((device) => (_jsx(SelectItem, { value: device.id, children: _jsxs("div", { className: "flex items-center gap-2 w-full", children: [_jsx("div", { className: `w-2 h-2 rounded-full ${getStatusColor(device.status)}` }), _jsx("span", { className: "flex-1", children: device.name }), _jsx("span", { className: "text-xs text-muted-foreground", children: device.location })] }) }, device.id))) })] })) : (_jsxs(Select, { value: selectedDevice, onValueChange: onDeviceChange, open: isVirtualGroupDropdownOpen, onOpenChange: setIsVirtualGroupDropdownOpen, children: [_jsx(SelectTrigger, { className: "h-11 border-border/50 bg-background/50", children: _jsx(SelectValue, { placeholder: "Choose virtual group", children: selectedDevice && virtualGroups[selectedDevice] && (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { children: virtualGroups[selectedDevice].name }), selectedDevices.length > 0 && (_jsxs(Badge, { variant: "secondary", className: "ml-2 text-xs", children: [selectedDevices.length, " devices selected"] }))] })) }) }), _jsx(SelectContent, { className: "w-[400px]", children: Object.entries(virtualGroups).map(([groupId, group]) => (_jsxs("div", { children: [_jsx(SelectItem, { value: groupId, onSelect: () => {
                                                        onDeviceChange(groupId);
                                                        // Don't close dropdown to allow device selection
                                                        setIsVirtualGroupDropdownOpen(true);
                                                    }, children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-medium", children: group.name }), _jsxs(Badge, { variant: "outline", className: "text-xs", children: [group.devices.length, " devices"] })] }) }), selectedDevice === groupId && (_jsxs("div", { className: "mt-2 pl-4 border-l-2 border-primary/20 space-y-2", children: [_jsx("div", { className: "text-xs font-medium text-muted-foreground mb-2", children: "Select devices:" }), getDevicesForGroup(groupId).map((device) => (_jsxs("div", { className: "flex items-center gap-2 p-2 hover:bg-muted/50 rounded cursor-pointer", onClick: (e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                handleVirtualGroupDeviceToggle(device.id);
                                                            }, children: [_jsx(Checkbox, { checked: selectedDevices.includes(device.id), onCheckedChange: () => handleVirtualGroupDeviceToggle(device.id), disabled: device.status === "inactive" }), _jsx("div", { className: `w-2 h-2 rounded-full ${getStatusColor(device.status)}` }), _jsx("span", { className: "text-sm flex-1", children: device.name }), _jsx("span", { className: "text-xs text-muted-foreground", children: device.location })] }, device.id)))] }))] }, groupId))) })] }))] }), _jsxs("div", { className: "flex-1 space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-muted-foreground", children: "Data Mode" }), _jsxs(Select, { value: dataMode, onValueChange: onDataModeChange, children: [_jsx(SelectTrigger, { className: "h-11 border-border/50 bg-background/50", children: _jsx(SelectValue, { placeholder: "Select mode" }) }), _jsx(SelectContent, { children: dataModes.map((mode) => (_jsx(SelectItem, { value: mode.id, children: mode.name }, mode.id))) })] })] }), _jsxs("div", { className: "flex-1 space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-muted-foreground", children: "Time Period" }), _jsxs(Select, { value: selectedDay, onValueChange: onDayChange, children: [_jsx(SelectTrigger, { className: "h-11 border-border/50 bg-background/50", children: _jsx(SelectValue, { placeholder: "Select period" }) }), _jsx(SelectContent, { children: timePerl.map((day) => (_jsx(SelectItem, { value: day.id, children: day.name }, day.id))) })] })] }), _jsx("div", { className: "flex gap-2", children: _jsxs(Button, { onClick: onApplyFilters, className: "h-11 px-6 bg-primary hover:bg-primary/90 shadow-sm", children: [_jsx(Filter, { className: "w-4 h-4 mr-2" }), "Apply Filter"] }) })] }) }) }));
}
//# sourceMappingURL=EnhancedFilterSection.js.map