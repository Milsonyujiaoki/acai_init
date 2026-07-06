import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Truck, Plane, Ship, MapPin } from 'lucide-react';
import { Badge } from './ui/badge';
const vehicles = [
    { id: 'V001', type: 'road', location: 'New York', status: 'In Transit', lat: 40.7128, lng: -74.0060 },
    { id: 'V002', type: 'air', location: 'Los Angeles', status: 'Loading', lat: 34.0522, lng: -118.2437 },
    { id: 'V003', type: 'sea', location: 'Miami Port', status: 'In Transit', lat: 25.7617, lng: -80.1918 },
    { id: 'V004', type: 'road', location: 'Chicago', status: 'Delivered', lat: 41.8781, lng: -87.6298 },
    { id: 'V005', type: 'air', location: 'Denver', status: 'In Transit', lat: 39.7392, lng: -104.9903 },
];
const getTransportIcon = (type) => {
    switch (type) {
        case 'road': return _jsx(Truck, { className: "h-4 w-4 text-green-600" });
        case 'air': return _jsx(Plane, { className: "h-4 w-4 text-blue-600" });
        case 'sea': return _jsx(Ship, { className: "h-4 w-4 text-teal-600" });
        default: return _jsx(MapPin, { className: "h-4 w-4" });
    }
};
const getStatusColor = (status) => {
    switch (status) {
        case 'In Transit': return 'bg-blue-100 text-blue-800';
        case 'Loading': return 'bg-yellow-100 text-yellow-800';
        case 'Delivered': return 'bg-green-100 text-green-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};
export function VehicleTrackingMap() {
    return (_jsxs(Card, { className: "border-gray-200", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "h-5 w-5 text-blue-600" }), "Real-time Vehicle Tracking"] }) }), _jsxs(CardContent, { children: [_jsxs("div", { className: "bg-gray-50 rounded-lg h-64 relative mb-4 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50" }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsxs("div", { className: "text-gray-500 text-center", children: [_jsx(MapPin, { className: "h-8 w-8 mx-auto mb-2 text-gray-400" }), _jsx("p", { className: "text-sm", children: "Interactive Map View" }), _jsx("p", { className: "text-xs", children: "Real-time vehicle tracking" })] }) }), vehicles.map((vehicle, index) => (_jsx("div", { className: "absolute transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md border-2 border-white", style: {
                                    left: `${20 + (index * 15)}%`,
                                    top: `${30 + (index * 10)}%`,
                                }, children: getTransportIcon(vehicle.type) }, vehicle.id)))] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium text-gray-900 mb-3", children: "Active Vehicles" }), vehicles.map((vehicle) => (_jsxs("div", { className: "flex items-center justify-between p-2 bg-gray-50 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-3", children: [getTransportIcon(vehicle.type), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-gray-900", children: vehicle.id }), _jsx("p", { className: "text-sm text-gray-500", children: vehicle.location })] })] }), _jsx(Badge, { className: getStatusColor(vehicle.status), children: vehicle.status })] }, vehicle.id)))] })] })] }));
}
//# sourceMappingURL=VehicleTrackingMap.js.map