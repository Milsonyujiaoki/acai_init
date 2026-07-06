import { jsx as _jsx } from "react/jsx-runtime";
import { Search, Truck, Route, Users, User, Package, AlertCircle, CheckCircle, Clock, Bell } from 'lucide-react';
export const getSearchIcon = (type) => {
    switch (type) {
        case 'vehicle': return _jsx(Truck, { className: "h-4 w-4 text-green-600" });
        case 'driver': return _jsx(User, { className: "h-4 w-4 text-blue-600" });
        case 'trip': return _jsx(Package, { className: "h-4 w-4 text-orange-600" });
        case 'route': return _jsx(Route, { className: "h-4 w-4 text-purple-600" });
        case 'customer': return _jsx(Users, { className: "h-4 w-4 text-teal-600" });
        default: return _jsx(Search, { className: "h-4 w-4" });
    }
};
export const getNotificationIcon = (type) => {
    switch (type) {
        case 'alert': return _jsx(AlertCircle, { className: "h-4 w-4 text-red-500" });
        case 'success': return _jsx(CheckCircle, { className: "h-4 w-4 text-green-500" });
        case 'warning': return _jsx(Clock, { className: "h-4 w-4 text-orange-500" });
        default: return _jsx(Bell, { className: "h-4 w-4 text-blue-500" });
    }
};
export const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
};
//# sourceMappingURL=navigationUtils.js.map