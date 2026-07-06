import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Globe, RefreshCw, Maximize2, Minimize2, Filter, Truck, Plane, Ship, Navigation, MapPin, Fuel, Clock, Plus, Minus } from 'lucide-react';
import { worldVehicleData, filterOptions } from './data/vehicleData';
export function GoogleMapsTracker({ className = '' }) {
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [filter, setFilter] = useState('all');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const mapRef = useRef(null);
    const [mapInstance, setMapInstance] = useState(null);
    // Simulate real Google Maps (since we can't use actual Google Maps API in this environment)
    const initializeMap = () => {
        // This would normally initialize Google Maps
        // For demo purposes, we'll create a realistic-looking map interface
        console.log('Initializing Google Maps...');
    };
    useEffect(() => {
        initializeMap();
    }, []);
    const filteredVehicles = worldVehicleData.filter(vehicle => {
        if (filter === 'all')
            return true;
        if (filter === 'active')
            return vehicle.status === 'In Transit';
        return vehicle.type === filter;
    });
    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
            // Simulate data refresh
        }, 2000);
    };
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            mapRef.current?.requestFullscreen();
            setIsFullscreen(true);
        }
        else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);
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
            case 'In Transit': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Loading': return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'Delivered': return 'bg-green-100 text-green-800 border-green-200';
            case 'Maintenance': return 'bg-red-100 text-red-800 border-red-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };
    return (_jsxs(Card, { className: `border-0 shadow-lg ${className}`, ref: mapRef, children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "h-5 w-5 text-blue-600" }), "Live Fleet Tracking - Google Maps"] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", onClick: handleRefresh, disabled: isRefreshing, children: [_jsx(RefreshCw, { className: `h-3 w-3 ${isRefreshing ? 'animate-spin' : ''}` }), isRefreshing ? 'Refreshing...' : 'Refresh'] }), _jsx(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", onClick: toggleFullscreen, children: isFullscreen ? (_jsxs(_Fragment, { children: [_jsx(Minimize2, { className: "h-3 w-3" }), "Exit Fullscreen"] })) : (_jsxs(_Fragment, { children: [_jsx(Maximize2, { className: "h-3 w-3" }), "Fullscreen"] })) })] })] }), _jsxs("div", { className: "flex items-center gap-2 mt-4", children: [_jsx(Filter, { className: "h-4 w-4 text-gray-500" }), _jsx("div", { className: "flex gap-2", children: filterOptions.map(f => (_jsx(Button, { size: "sm", variant: filter === f.key ? 'default' : 'outline', onClick: () => setFilter(f.key), className: "text-xs", children: f.label }, f.key))) })] })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: [_jsx("div", { className: "lg:col-span-3", children: _jsx("div", { className: "relative", children: _jsxs("div", { className: "bg-gray-100 dark:bg-gray-800 rounded-xl h-96 relative overflow-hidden border shadow-inner", children: [_jsx("div", { className: "absolute top-4 right-4 z-20 space-y-2", children: _jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg border", children: [_jsx(Button, { variant: "ghost", size: "sm", className: "p-2 rounded-t-lg rounded-b-none border-b", children: _jsx(Plus, { className: "h-4 w-4" }) }), _jsx(Button, { variant: "ghost", size: "sm", className: "p-2 rounded-none border-b", children: _jsx(Minus, { className: "h-4 w-4" }) }), _jsx(Button, { variant: "ghost", size: "sm", className: "p-2 rounded-b-lg rounded-t-none", children: _jsx(Navigation, { className: "h-4 w-4" }) })] }) }), _jsx("div", { className: "absolute bottom-4 right-4 z-20", children: _jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg border p-1 flex gap-1", children: [_jsx(Button, { variant: "ghost", size: "sm", className: "text-xs", children: "Map" }), _jsx(Button, { variant: "ghost", size: "sm", className: "text-xs", children: "Satellite" }), _jsx(Button, { variant: "ghost", size: "sm", className: "text-xs", children: "Terrain" })] }) }), _jsxs("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-blue-50 dark:from-blue-900/20 dark:via-green-900/10 dark:to-blue-900/20", children: [_jsxs("svg", { className: "absolute inset-0 w-full h-full opacity-20", children: [_jsx("defs", { children: _jsx("pattern", { id: "grid", width: "40", height: "40", patternUnits: "userSpaceOnUse", children: _jsx("path", { d: "M 40 0 L 0 0 0 40", fill: "none", stroke: "#666", strokeWidth: "1" }) }) }), _jsx("rect", { width: "100%", height: "100%", fill: "url(#grid)" })] }), _jsx("div", { className: "absolute top-8 left-12 w-24 h-16 bg-green-200 dark:bg-green-800/30 rounded-lg opacity-60" }), _jsx("div", { className: "absolute top-16 right-20 w-20 h-12 bg-green-200 dark:bg-green-800/30 rounded-lg opacity-60" }), _jsx("div", { className: "absolute bottom-20 left-16 w-28 h-20 bg-green-200 dark:bg-green-800/30 rounded-lg opacity-60" }), _jsx("div", { className: "absolute bottom-12 right-12 w-16 h-14 bg-green-200 dark:bg-green-800/30 rounded-lg opacity-60" })] }), filteredVehicles.map((vehicle) => (_jsx("div", { children: _jsxs("div", { className: "absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10", style: {
                                                        left: vehicle.mapPosition.x,
                                                        top: vehicle.mapPosition.y,
                                                    }, onClick: () => setSelectedVehicle(selectedVehicle === vehicle.id ? null : vehicle.id), children: [_jsxs("div", { className: `relative ${selectedVehicle === vehicle.id
                                                                ? 'scale-125'
                                                                : vehicle.status === 'In Transit'
                                                                    ? 'animate-pulse'
                                                                    : ''} transition-all duration-200`, children: [_jsx("div", { className: "bg-white rounded-full p-2 shadow-lg border-2 border-gray-300 hover:shadow-xl transition-shadow", children: getTransportIcon(vehicle.type) }), _jsx("div", { className: "w-0.5 h-3 bg-gray-400 mx-auto" }), _jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full mx-auto -mt-1" }), vehicle.status === 'In Transit' && (_jsx("div", { className: "absolute top-1/2 left-1/2 w-8 h-8 border-2 border-blue-400 rounded-full animate-ping -translate-x-1/2 -translate-y-1/2 opacity-75" }))] }), _jsx("div", { className: "absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded whitespace-nowrap", children: vehicle.location.country }), selectedVehicle === vehicle.id && (_jsxs("div", { className: "absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 min-w-72 z-30 border", children: [_jsx("div", { className: "absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t rotate-45" }), _jsxs("div", { className: "flex items-center gap-3 mb-3", children: [_jsxs(Avatar, { className: "h-10 w-10", children: [_jsx(AvatarImage, { src: vehicle.driver.photo }), _jsx(AvatarFallback, { children: vehicle.driver.name.split(' ').map((n) => n[0]).join('') })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-foreground", children: vehicle.name }), _jsx("p", { className: "text-sm text-muted-foreground", children: vehicle.id })] })] }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Driver:" }), _jsx("span", { className: "font-medium", children: vehicle.driver.name })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Location:" }), _jsx("span", { className: "font-medium", children: vehicle.location.name })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Speed:" }), _jsx("span", { className: "font-medium", children: vehicle.speed })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Fuel:" }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Fuel, { className: "h-3 w-3 text-muted-foreground" }), _jsxs("span", { className: "font-medium", children: [vehicle.fuelLevel, "%"] })] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "ETA:" }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "h-3 w-3 text-muted-foreground" }), _jsx("span", { className: "font-medium text-blue-600", children: vehicle.eta })] })] })] }), _jsxs("div", { className: "mt-3 flex justify-between items-center", children: [_jsx(Badge, { className: getStatusColor(vehicle.status), children: vehicle.status }), _jsx(Button, { size: "sm", variant: "outline", children: "Track Route" })] })] }))] }) }, vehicle.id))), _jsxs("div", { className: "absolute bottom-4 left-4 bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-sm rounded-lg p-3 shadow-lg border", children: [_jsx("h5", { className: "font-medium text-foreground mb-2 text-sm", children: "Vehicle Types" }), _jsxs("div", { className: "space-y-1 text-xs", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Truck, { className: "h-3 w-3 text-green-600" }), _jsxs("span", { children: ["Road Transport (", filteredVehicles.filter(v => v.type === 'road').length, ")"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Plane, { className: "h-3 w-3 text-blue-600" }), _jsxs("span", { children: ["Air Transport (", filteredVehicles.filter(v => v.type === 'air').length, ")"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Ship, { className: "h-3 w-3 text-teal-600" }), _jsxs("span", { children: ["Sea Transport (", filteredVehicles.filter(v => v.type === 'sea').length, ")"] })] })] })] })] }) }) }), _jsxs("div", { className: "space-y-4", children: [_jsxs("h4", { className: "font-medium text-foreground", children: ["Active Vehicles (", filteredVehicles.length, ")"] }), _jsx("div", { className: "space-y-3 max-h-80 overflow-y-auto", children: filteredVehicles.map((vehicle) => (_jsx(Card, { className: `cursor-pointer transition-all hover:shadow-md ${selectedVehicle === vehicle.id ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950/20' : 'bg-card'}`, onClick: () => setSelectedVehicle(selectedVehicle === vehicle.id ? null : vehicle.id), children: _jsx(CardContent, { className: "p-3", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "flex-shrink-0", children: getTransportIcon(vehicle.type) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h5", { className: "font-medium text-foreground truncate", children: vehicle.name }), _jsx("p", { className: "text-sm text-muted-foreground", children: vehicle.id }), _jsx("div", { className: "flex items-center gap-2 mt-1", children: _jsx(Badge, { className: getStatusColor(vehicle.status), children: vehicle.status }) }), _jsxs("div", { className: "flex items-center justify-between mt-2 text-xs", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsxs(Avatar, { className: "h-4 w-4", children: [_jsx(AvatarImage, { src: vehicle.driver.photo }), _jsx(AvatarFallback, { className: "text-xs", children: vehicle.driver.name.split(' ').map((n) => n[0]).join('') })] }), _jsx("span", { className: "text-muted-foreground truncate", children: vehicle.driver.name })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Fuel, { className: "h-3 w-3 text-muted-foreground" }), _jsxs("span", { className: "text-muted-foreground", children: [vehicle.fuelLevel, "%"] })] })] })] })] }) }) }, vehicle.id))) })] })] }), _jsxs("div", { className: "mt-4 flex items-center justify-between p-3 bg-muted/50 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-4 text-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "h-2 w-2 bg-green-500 rounded-full animate-pulse" }), _jsx("span", { className: "text-muted-foreground", children: "Live Tracking Active" })] }), _jsxs("div", { className: "text-muted-foreground", children: ["Last Update: ", new Date().toLocaleTimeString()] })] }), _jsxs("div", { className: "text-sm text-muted-foreground", children: [filteredVehicles.filter(v => v.status === 'In Transit').length, " vehicles in transit"] })] })] })] }));
}
//# sourceMappingURL=GoogleMapsTracker.js.map