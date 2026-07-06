import { jsx as _jsx } from "react/jsx-runtime";
import { Truck, Plane, Ship, MapPin } from 'lucide-react';
export const getTransportIcon = (type, status) => {
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
export const getStatusColor = (status) => {
    switch (status) {
        case 'In Transit': return 'bg-blue-100 text-blue-800';
        case 'Loading': return 'bg-orange-100 text-orange-800';
        case 'Delivered': return 'bg-green-100 text-green-800';
        case 'Maintenance': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};
export const filterVehicles = (vehicles, filter) => {
    if (filter === 'all')
        return vehicles;
    if (filter === 'active')
        return vehicles.filter(v => v.status === 'In Transit');
    return vehicles.filter(v => v.type === filter);
};
//# sourceMappingURL=mapUtils.js.map