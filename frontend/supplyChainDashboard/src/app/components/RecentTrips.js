import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Clock, Truck, Plane, Ship } from 'lucide-react';
const recentTrips = [
    {
        id: 'TR001',
        route: 'New York → Boston',
        vehicle: 'TRK-001',
        driver: 'Mike Johnson',
        driverInitials: 'MJ',
        mode: 'road',
        material: 'Electronics',
        revenue: '$2,450',
        status: 'Completed',
        completedDate: '2024-01-10',
    },
    {
        id: 'TR002',
        route: 'LA → San Francisco',
        vehicle: 'AIR-205',
        driver: 'Sarah Wilson',
        driverInitials: 'SW',
        mode: 'air',
        material: 'Medical Supplies',
        revenue: '$8,900',
        status: 'Completed',
        completedDate: '2024-01-09',
    },
    {
        id: 'TR003',
        route: 'Seattle → Vancouver',
        vehicle: 'SEA-102',
        driver: 'David Chen',
        driverInitials: 'DC',
        mode: 'sea',
        material: 'Machinery',
        revenue: '$15,600',
        status: 'Completed',
        completedDate: '2024-01-08',
    },
    {
        id: 'TR004',
        route: 'Chicago → Detroit',
        vehicle: 'TRK-089',
        driver: 'Lisa Brown',
        driverInitials: 'LB',
        mode: 'road',
        material: 'Consumer Goods',
        revenue: '$1,890',
        status: 'Completed',
        completedDate: '2024-01-07',
    },
];
const getTransportIcon = (mode) => {
    switch (mode) {
        case 'road': return _jsx(Truck, { className: "h-4 w-4 text-green-600" });
        case 'air': return _jsx(Plane, { className: "h-4 w-4 text-blue-600" });
        case 'sea': return _jsx(Ship, { className: "h-4 w-4 text-teal-600" });
        default: return null;
    }
};
export function RecentTrips() {
    return (_jsxs(Card, { className: "border-gray-200", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "h-5 w-5 text-blue-600" }), "Recent Trips"] }) }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Trip ID" }), _jsx(TableHead, { children: "Route" }), _jsx(TableHead, { children: "Vehicle" }), _jsx(TableHead, { children: "Driver" }), _jsx(TableHead, { children: "Mode" }), _jsx(TableHead, { children: "Material" }), _jsx(TableHead, { children: "Revenue" }), _jsx(TableHead, { children: "Status" })] }) }), _jsx(TableBody, { children: recentTrips.map((trip) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: trip.id }), _jsxs(TableCell, { children: [_jsx("div", { className: "text-sm", children: trip.route }), _jsx("div", { className: "text-xs text-gray-500", children: trip.completedDate })] }), _jsx(TableCell, { className: "font-medium", children: trip.vehicle }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Avatar, { className: "h-6 w-6", children: _jsx(AvatarFallback, { className: "text-xs bg-blue-100 text-blue-600", children: trip.driverInitials }) }), _jsx("span", { className: "text-sm", children: trip.driver })] }) }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-2", children: [getTransportIcon(trip.mode), _jsx("span", { className: "capitalize text-sm", children: trip.mode })] }) }), _jsx(TableCell, { className: "text-sm", children: trip.material }), _jsx(TableCell, { className: "font-semibold text-green-600", children: trip.revenue }), _jsx(TableCell, { children: _jsx(Badge, { className: "bg-green-100 text-green-800", children: trip.status }) })] }, trip.id))) })] }) })] }));
}
//# sourceMappingURL=RecentTrips.js.map