import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { ConsumptionChart } from "./ConsumptionChart";
import { DemandChart } from "./DemandChart";
import { EnergyParameters } from "./EnergyParameters";
import { EnhancedFilterSection } from "./EnhancedFilterSection";
export function Dashboard() {
    const [selectedFilterType, setSelectedFilterType] = useState("device");
    const [selectedDevice, setSelectedDevice] = useState("device-1");
    const [selectedDevices, setSelectedDevices] = useState([]);
    const [dataMode, setDataMode] = useState("real-time");
    const [selectedDay, setSelectedDay] = useState("today");
    const handleApplyFilters = () => {
        // In a real application, this would trigger data fetching
        console.log("Applying filters:", {
            filterType: selectedFilterType,
            device: selectedDevice,
            devices: selectedDevices,
            dataMode,
            selectedDay,
        });
    };
    const handleFilterTypeChange = (type) => {
        setSelectedFilterType(type);
        if (type === "device") {
            setSelectedDevice("device-1");
            setSelectedDevices([]);
        }
        else {
            setSelectedDevice("group-production");
            setSelectedDevices([]);
        }
    };
    return (_jsx("div", { className: "min-h-screen", style: { backgroundColor: '#f8faf9' }, children: _jsxs("div", { className: "p-6 space-y-6", children: [_jsx("div", { className: "flex flex-col space-y-3", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold text-foreground", children: "Hello, Liam Gallagher! \uD83D\uDC4B" }), _jsx("p", { className: "text-muted-foreground mt-1", children: "What are you looking for today?" })] }), _jsx("div", { className: "flex items-center gap-2", children: _jsxs(Badge, { className: "bg-primary/10 text-primary border-primary/20 px-3 py-1.5", children: [_jsx("div", { className: "w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" }), "Real-time monitoring active"] }) })] }) }), _jsx(EnhancedFilterSection, { selectedFilterType: selectedFilterType, selectedDevice: selectedDevice, selectedDevices: selectedDevices, dataMode: dataMode, selectedDay: selectedDay, onFilterTypeChange: handleFilterTypeChange, onDeviceChange: setSelectedDevice, onDevicesChange: setSelectedDevices, onDataModeChange: setDataMode, onDayChange: setSelectedDay, onApplyFilters: handleApplyFilters }), _jsx(EnergyParameters, { dataMode: dataMode, selectedDevice: selectedFilterType === "device" ? selectedDevice : selectedDevices.join(",") }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsx(ConsumptionChart, { selectedDay: selectedDay, selectedDevice: selectedFilterType === "device" ? selectedDevice : selectedDevices.join(",") }), _jsx(DemandChart, { dataMode: dataMode, selectedDay: selectedDay })] })] }) }));
}
//# sourceMappingURL=Dashboard.js.map