import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Calendar, Truck, Plane, Ship } from 'lucide-react';
const bookings = [
    {
        id: 'BK001',
        customer: 'Acme Corp',
        origin: 'New York',
        destination: 'Los Angeles',
        mode: 'road',
        material: 'Electronics',
        date: '2024-01-15',
        status: 'Confirmed',
    },
    {
        id: 'BK002',
        customer: 'TechFlow Inc',
        origin: 'Chicago',
        destination: 'Miami',
        mode: 'air',
        material: 'Medical Supplies',
        date: '2024-01-16',
        status: 'Pending',
    },
    {
        id: 'BK003',
        customer: 'Global Exports',
        origin: 'Seattle',
        destination: 'Tokyo',
        mode: 'sea',
        material: 'Machinery',
        date: '2024-01-18',
        status: 'Confirmed',
    },
    {
        id: 'BK004',
        customer: 'FastTrack Ltd',
        origin: 'Dallas',
        destination: 'Denver',
        mode: 'road',
        material: 'Consumer Goods',
        date: '2024-01-20',
        status: 'In Progress',
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
const getStatusColor = (status) => {
    switch (status) {
        case 'Confirmed': return 'bg-green-100 text-green-800';
        case 'Pending': return 'bg-yellow-100 text-yellow-800';
        case 'In Progress': return 'bg-blue-100 text-blue-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};
export function UpcomingBookings() {
    return (_jsxs(Card, { className: "border-gray-200", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "h-5 w-5 text-blue-600" }), "Upcoming Bookings"] }) }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Booking ID" }), _jsx(TableHead, { children: "Customer" }), _jsx(TableHead, { children: "Route" }), _jsx(TableHead, { children: "Mode" }), _jsx(TableHead, { children: "Material" }), _jsx(TableHead, { children: "Date" }), _jsx(TableHead, { children: "Status" })] }) }), _jsx(TableBody, { children: bookings.map((booking) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: booking.id }), _jsx(TableCell, { children: booking.customer }), _jsx(TableCell, { children: _jsxs("div", { className: "text-sm", children: [_jsxs("div", { children: [booking.origin, " \u2192"] }), _jsx("div", { className: "text-gray-500", children: booking.destination })] }) }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-2", children: [getTransportIcon(booking.mode), _jsx("span", { className: "capitalize", children: booking.mode })] }) }), _jsx(TableCell, { children: booking.material }), _jsx(TableCell, { children: booking.date }), _jsx(TableCell, { children: _jsx(Badge, { className: getStatusColor(booking.status), children: booking.status }) })] }, booking.id))) })] }) })] }));
}
//# sourceMappingURL=UpcomingBookings.js.map