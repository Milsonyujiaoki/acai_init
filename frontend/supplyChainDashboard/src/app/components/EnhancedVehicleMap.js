import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { MapPin, Truck, Plane, Ship, Navigation, Clock, Fuel, User, Maximize2, Filter, RefreshCw } from 'lucide-react';
const vehicleData = [
    {
        id: 'TRK-001',
        name: 'Volvo VNL 860',
        type: 'road',
        status: 'In Transit',
        driver: {
            name: 'Michael Johnson',
            photo: 'https://images.unsplash.com/photo-1718434137166-b3cb7d944b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcml2ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTU1ODMxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        location: { name: 'I-95 Near Hartford, CT', lat: 41.7658, lng: -72.6734 },
        destination: 'Boston, MA',
        speed: '65 mph',
        fuelLevel: 78,
        eta: '2h 15m',
        mapPosition: { x: '68%', y: '35%' }
    },
    {
        id: 'VAN-205',
        name: 'Ford Transit',
        type: 'road',
        status: 'Loading',
        driver: {
            name: 'Sarah Wilson',
            photo: 'https://images.unsplash.com/photo-1622175691858-a4deb912838e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB0cnVjayUyMGRyaXZlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1ODMxODd8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        location: { name: 'LAX Distribution Center', lat: 33.9425, lng: -118.4081 },
        destination: 'San Francisco, CA',
        speed: '0 mph',
        fuelLevel: 42,
        eta: 'Loading...',
        mapPosition: { x: '15%', y: '62%' }
    },
    {
        id: 'AIR-102',
        name: 'Boeing 737 Cargo',
        type: 'air',
        status: 'In Transit',
        driver: {
            name: 'Captain Rodriguez',
            photo: 'https://images.unsplash.com/photo-1710242078536-fe62a305a86c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGRyaXZlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1ODMxODR8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        location: { name: 'Over Kansas', lat: 38.5266, lng: -96.7265 },
        destination: 'Miami, FL',
        speed: '485 mph',
        fuelLevel: 91,
        eta: '1h 45m',
        mapPosition: { x: '45%', y: '52%' }
    },
    {
        id: 'SEA-301',
        name: 'Container Ship Atlas',
        type: 'sea',
        status: 'In Transit',
        driver: {
            name: 'Captain Thompson',
            photo: 'https://images.unsplash.com/photo-1659353740059-5554fb2ac89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWxpdmVyeSUyMGRyaXZlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1ODMxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        location: { name: 'Pacific Ocean', lat: 36.7783, lng: -119.4179 },
        destination: 'Tokyo Port',
        speed: '22 knots',
        fuelLevel: 65,
        eta: '12 days',
        mapPosition: { x: '8%', y: '45%' }
    },
    {
        id: 'TRK-089',
        name: 'Peterbilt 579',
        type: 'road',
        status: 'Delivered',
        driver: {
            name: 'Lisa Brown',
            photo: 'https://images.unsplash.com/photo-1659353740059-5554fb2ac89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkZWxpdmVyeSUyMGRyaXZlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1ODMxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        location: { name: 'Miami Distribution Hub', lat: 25.7617, lng: -80.1918 },
        destination: 'Completed',
        speed: '0 mph',
        fuelLevel: 23,
        eta: 'Delivered',
        mapPosition: { x: '78%', y: '85%' }
    }
];
const getTransportIcon = (type, status) => {
    const baseClasses = "h-5 w-5";
    const isActive = status === 'In Transit';
    switch (type) {
        case 'road':
            return _jsx(Truck, { className: `${baseClasses} ${isActive ? 'text-green-600' : 'text-green-400'}` });
        case 'air':
            return _jsx(Plane, { className: `${baseClasses} ${isActive ? 'text-blue-600' : 'text-blue-400'}` });
        case 'sea':
            return _jsx(Ship, { className: `${baseClasses} ${isActive ? 'text-teal-600' : 'text-teal-400'}` });
        default:
            return _jsx(MapPin, { className: `${baseClasses} text-gray-400` });
    }
};
const getStatusColor = (status) => {
    switch (status) {
        case 'In Transit': return 'bg-blue-100 text-blue-800';
        case 'Loading': return 'bg-orange-100 text-orange-800';
        case 'Delivered': return 'bg-green-100 text-green-800';
        case 'Maintenance': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};
export function EnhancedVehicleMap() {
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [filter, setFilter] = useState('all');
    const filteredVehicles = vehicleData.filter(vehicle => {
        if (filter === 'all')
            return true;
        if (filter === 'active')
            return vehicle.status === 'In Transit';
        return vehicle.type === filter;
    });
    return (_jsxs(Card, { className: "border-0 shadow-lg", children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Navigation, { className: "h-5 w-5 text-blue-600" }), "Real-time Vehicle Tracking"] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", children: [_jsx(RefreshCw, { className: "h-3 w-3" }), "Refresh"] }), _jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", children: [_jsx(Maximize2, { className: "h-3 w-3" }), "Fullscreen"] })] })] }), _jsxs("div", { className: "flex items-center gap-2 mt-4", children: [_jsx(Filter, { className: "h-4 w-4 text-gray-500" }), _jsx("div", { className: "flex gap-2", children: [
                                    { key: 'all', label: 'All Vehicles' },
                                    { key: 'active', label: 'Active Only' },
                                    { key: 'road', label: 'Road' },
                                    { key: 'air', label: 'Air' },
                                    { key: 'sea', label: 'Sea' }
                                ].map(f => (_jsx(Button, { size: "sm", variant: filter === f.key ? 'default' : 'outline', onClick: () => setFilter(f.key), className: "text-xs", children: f.label }, f.key))) })] })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsx("div", { className: "lg:col-span-2", children: _jsxs("div", { className: "bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 rounded-xl h-96 relative overflow-hidden border", children: [_jsx("div", { className: "absolute inset-0 opacity-10", children: _jsx("div", { className: "grid grid-cols-12 grid-rows-8 h-full", children: Array.from({ length: 96 }).map((_, i) => (_jsx("div", { className: "border border-gray-300" }, i))) }) }), _jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute left-0 top-0 w-2 h-full bg-blue-200 opacity-30" }), _jsx("div", { className: "absolute right-0 top-0 w-2 h-full bg-blue-200 opacity-30" }), _jsx("div", { className: "absolute top-0 left-0 w-full h-2 bg-blue-200 opacity-30" }), _jsx("div", { className: "absolute bottom-0 left-0 w-full h-2 bg-blue-200 opacity-30" }), _jsx("div", { className: "absolute top-1/3 left-1/4 w-1/2 h-0.5 bg-gray-400 opacity-40 rotate-12" }), _jsx("div", { className: "absolute top-2/3 left-1/6 w-2/3 h-0.5 bg-gray-400 opacity-40 -rotate-6" })] }), filteredVehicles.map((vehicle) => (_jsxs("div", { className: "absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group", style: {
                                            left: vehicle.mapPosition.x,
                                            top: vehicle.mapPosition.y,
                                        }, onClick: () => setSelectedVehicle(selectedVehicle === vehicle.id ? null : vehicle.id), children: [_jsx("div", { className: `bg-white rounded-full p-3 shadow-lg border-2 transition-all duration-200 ${selectedVehicle === vehicle.id
                                                    ? 'scale-125 border-blue-500 ring-2 ring-blue-200'
                                                    : vehicle.status === 'In Transit'
                                                        ? 'border-green-500 animate-pulse'
                                                        : 'border-gray-300'}`, children: getTransportIcon(vehicle.type, vehicle.status) }), selectedVehicle === vehicle.id && (_jsxs("div", { className: "absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl p-4 min-w-64 z-10 border", children: [_jsxs("div", { className: "flex items-center gap-3 mb-3", children: [_jsxs(Avatar, { className: "h-10 w-10", children: [_jsx(AvatarImage, { src: vehicle.driver.photo }), _jsx(AvatarFallback, { children: vehicle.driver.name.split(' ').map(n => n[0]).join('') })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900", children: vehicle.name }), _jsx("p", { className: "text-sm text-gray-600", children: vehicle.id })] })] }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Driver:" }), _jsx("span", { className: "font-medium", children: vehicle.driver.name })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Location:" }), _jsx("span", { className: "font-medium", children: vehicle.location.name })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Speed:" }), _jsx("span", { className: "font-medium", children: vehicle.speed })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Fuel:" }), _jsxs("span", { className: "font-medium", children: [vehicle.fuelLevel, "%"] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "ETA:" }), _jsx("span", { className: "font-medium text-blue-600", children: vehicle.eta })] })] }), _jsx(Badge, { className: `${getStatusColor(vehicle.status)} mt-3`, children: vehicle.status })] })), vehicle.status === 'In Transit' && (_jsx("div", { className: "absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping -translate-x-1/2 -translate-y-1/2" }))] }, vehicle.id))), _jsxs("div", { className: "absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg", children: [_jsx("h5", { className: "font-medium text-gray-900 mb-2 text-sm", children: "Legend" }), _jsxs("div", { className: "space-y-1 text-xs", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Truck, { className: "h-3 w-3 text-green-600" }), _jsx("span", { children: "Road Transport" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Plane, { className: "h-3 w-3 text-blue-600" }), _jsx("span", { children: "Air Transport" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Ship, { className: "h-3 w-3 text-teal-600" }), _jsx("span", { children: "Sea Transport" })] })] })] })] }) }), _jsxs("div", { className: "space-y-4", children: [_jsxs("h4", { className: "font-medium text-gray-900", children: ["Active Vehicles (", filteredVehicles.length, ")"] }), _jsx("div", { className: "space-y-3 max-h-80 overflow-y-auto", children: filteredVehicles.map((vehicle) => (_jsx(Card, { className: `cursor-pointer transition-all hover:shadow-md ${selectedVehicle === vehicle.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'bg-white'}`, onClick: () => setSelectedVehicle(selectedVehicle === vehicle.id ? null : vehicle.id), children: _jsx(CardContent, { className: "p-3", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "flex-shrink-0", children: getTransportIcon(vehicle.type, vehicle.status) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h5", { className: "font-medium text-gray-900 truncate", children: vehicle.name }), _jsx("p", { className: "text-sm text-gray-600", children: vehicle.id }), _jsxs("div", { className: "flex items-center gap-2 mt-1", children: [_jsx(Badge, { className: getStatusColor(vehicle.status), children: vehicle.status }), vehicle.status === 'In Transit' && (_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "h-3 w-3 text-blue-500" }), _jsx("span", { className: "text-xs text-blue-600", children: vehicle.eta })] }))] }), _jsxs("div", { className: "flex items-center justify-between mt-2", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Avatar, { className: "h-5 w-5", children: [_jsx(AvatarImage, { src: vehicle.driver.photo }), _jsx(AvatarFallback, { className: "text-xs", children: vehicle.driver.name.split(' ').map(n => n[0]).join('') })] }), _jsx("span", { className: "text-xs text-gray-600", children: vehicle.driver.name })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Fuel, { className: "h-3 w-3 text-gray-400" }), _jsxs("span", { className: "text-xs text-gray-600", children: [vehicle.fuelLevel, "%"] })] })] })] })] }) }) }, vehicle.id))) })] })] }) })] }));
}
//# sourceMappingURL=EnhancedVehicleMap.js.map