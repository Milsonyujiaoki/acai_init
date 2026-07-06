import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { getTransportIcon, getStatusColor } from '../utils/mapUtils';
export function VehicleMarker({ vehicle, isSelected, onClick }) {
    return (_jsxs("div", { className: "absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10", style: {
            left: vehicle.mapPosition.x,
            top: vehicle.mapPosition.y,
        }, onClick: onClick, children: [_jsx("div", { className: `bg-white rounded-full p-3 shadow-xl border-2 transition-all duration-200 ${isSelected
                    ? 'scale-125 border-yellow-400 ring-2 ring-yellow-200'
                    : vehicle.status === 'In Transit'
                        ? 'border-green-400 animate-pulse shadow-green-400/50'
                        : 'border-gray-300'}`, children: getTransportIcon(vehicle.type, vehicle.status) }), _jsx("div", { className: "absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded whitespace-nowrap", children: vehicle.location.country }), vehicle.status === 'In Transit' && (_jsx("div", { className: "absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping -translate-x-1/2 -translate-y-1/2" }))] }));
}
export function VehiclePopup({ vehicle, isVisible }) {
    if (!isVisible)
        return null;
    return (_jsxs("div", { className: "absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-lg shadow-2xl p-4 min-w-72 z-20 border", children: [_jsxs("div", { className: "flex items-center gap-3 mb-3", children: [_jsxs(Avatar, { className: "h-10 w-10", children: [_jsx(AvatarImage, { src: vehicle.driver.photo }), _jsx(AvatarFallback, { children: vehicle.driver.name.split(' ').map((n) => n[0]).join('') })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900", children: vehicle.name }), _jsx("p", { className: "text-sm text-gray-600", children: vehicle.id })] })] }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Driver:" }), _jsx("span", { className: "font-medium", children: vehicle.driver.name })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Location:" }), _jsx("span", { className: "font-medium", children: vehicle.location.name })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Speed:" }), _jsx("span", { className: "font-medium", children: vehicle.speed })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Fuel:" }), _jsxs("span", { className: "font-medium", children: [vehicle.fuelLevel, "%"] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "ETA:" }), _jsx("span", { className: "font-medium text-blue-600", children: vehicle.eta })] })] }), _jsx(Badge, { className: `${getStatusColor(vehicle.status)} mt-3`, children: vehicle.status })] }));
}
//# sourceMappingURL=VehicleMarker.js.map