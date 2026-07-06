import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Globe, RefreshCw, Maximize2, Filter, Truck, Plane, Ship } from 'lucide-react';
import { worldVehicleData, filterOptions } from './data/vehicleData';
import { filterVehicles } from './utils/mapUtils';
import { WorldMapBackground } from './map/WorldMapBackground';
import { VehicleMarker, VehiclePopup } from './map/VehicleMarker';
import { VehicleList } from './map/VehicleList';
export function WorldVehicleMap() {
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [filter, setFilter] = useState('all');
    const filteredVehicles = filterVehicles(worldVehicleData, filter);
    const handleVehicleSelect = (vehicleId) => {
        setSelectedVehicle(selectedVehicle === vehicleId ? null : vehicleId);
    };
    return (_jsxs(Card, { className: "border-0 shadow-lg", children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "h-5 w-5 text-blue-600" }), "Global Fleet Tracking"] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", children: [_jsx(RefreshCw, { className: "h-3 w-3" }), "Refresh"] }), _jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", children: [_jsx(Maximize2, { className: "h-3 w-3" }), "Fullscreen"] })] })] }), _jsxs("div", { className: "flex items-center gap-2 mt-4", children: [_jsx(Filter, { className: "h-4 w-4 text-gray-500" }), _jsx("div", { className: "flex gap-2", children: filterOptions.map(f => (_jsx(Button, { size: "sm", variant: filter === f.key ? 'default' : 'outline', onClick: () => setFilter(f.key), className: "text-xs", children: f.label }, f.key))) })] })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: [_jsxs("div", { className: "lg:col-span-3 relative", children: [_jsx(WorldMapBackground, {}), _jsx("div", { className: "absolute inset-0", children: filteredVehicles.map((vehicle) => (_jsxs("div", { children: [_jsx(VehicleMarker, { vehicle: vehicle, isSelected: selectedVehicle === vehicle.id, onClick: () => handleVehicleSelect(vehicle.id) }), _jsx(VehiclePopup, { vehicle: vehicle, isVisible: selectedVehicle === vehicle.id })] }, vehicle.id))) }), _jsxs("div", { className: "absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg", children: [_jsx("h5", { className: "font-medium text-gray-900 mb-2 text-sm", children: "Legend" }), _jsxs("div", { className: "space-y-1 text-xs", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Truck, { className: "h-3 w-3 text-green-600" }), _jsx("span", { children: "Road Transport" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Plane, { className: "h-3 w-3 text-blue-600" }), _jsx("span", { children: "Air Transport" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Ship, { className: "h-3 w-3 text-teal-600" }), _jsx("span", { children: "Sea Transport" })] })] })] })] }), _jsx("div", { children: _jsx(VehicleList, { vehicles: filteredVehicles, selectedVehicle: selectedVehicle, onVehicleSelect: handleVehicleSelect }) })] }) })] }));
}
//# sourceMappingURL=WorldVehicleMap.js.map