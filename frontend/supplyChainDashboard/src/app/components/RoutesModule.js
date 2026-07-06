import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Route, Search, Filter, MapPin, Calendar as CalendarIcon, Plus, Clock, DollarSign, User, Package, Truck, Plane, Ship, CheckCircle, XCircle, AlertCircle, Edit, Eye, TrendingUp, Navigation, MoreHorizontal, Trash2, Copy, Settings, Download, RefreshCw } from 'lucide-react';
const routesData = [
    {
        id: 'RT001',
        name: 'NY-Boston Express',
        origin: { city: 'New York', state: 'NY', coords: [40.7128, -74.0060] },
        destination: { city: 'Boston', state: 'MA', coords: [42.3601, -71.0589] },
        distance: '215 miles',
        estimatedTime: '4h 30m',
        transportMode: 'road',
        status: 'Active',
        frequency: 'Daily',
        pricing: { baseRate: '$2.50/mile', fuelSurcharge: '15%' },
        activeBookings: 12,
        completedTrips: 342,
        avgRevenue: '$2,450',
        lastOptimized: '2024-01-08',
        efficiency: 94
    },
    {
        id: 'RT002',
        name: 'Chicago-Miami Air Route',
        origin: { city: 'Chicago', state: 'IL', coords: [41.8781, -87.6298] },
        destination: { city: 'Miami', state: 'FL', coords: [25.7617, -80.1918] },
        distance: '1,197 miles',
        estimatedTime: '3h 15m',
        transportMode: 'air',
        status: 'Active',
        frequency: 'Weekly',
        pricing: { baseRate: '$5.80/mile', fuelSurcharge: '12%' },
        activeBookings: 8,
        completedTrips: 89,
        avgRevenue: '$8,900',
        lastOptimized: '2024-01-05',
        efficiency: 97
    },
    {
        id: 'RT003',
        name: 'Seattle-Tokyo Ocean Route',
        origin: { city: 'Seattle', state: 'WA', coords: [47.6062, -122.3321] },
        destination: { city: 'Tokyo', state: 'Japan', coords: [35.6762, 139.6503] },
        distance: '4,792 miles',
        estimatedTime: '14 days',
        transportMode: 'sea',
        status: 'Seasonal',
        frequency: 'Monthly',
        pricing: { baseRate: '$1.20/mile', fuelSurcharge: '8%' },
        activeBookings: 3,
        completedTrips: 24,
        avgRevenue: '$15,600',
        lastOptimized: '2023-12-20',
        efficiency: 89
    }
];
const bookingsData = [
    {
        id: 'BK001',
        customer: {
            name: 'Acme Corporation',
            contact: 'John Smith',
            email: 'john@acme.com',
            phone: '+1 (555) 123-4567'
        },
        route: 'NY-Boston Express',
        routeId: 'RT001',
        shipmentDetails: {
            type: 'Electronics',
            weight: '15,000 lbs',
            dimensions: '8x6x6 ft',
            value: '$125,000'
        },
        pickupDate: '2024-01-15',
        deliveryDate: '2024-01-16',
        status: 'Confirmed',
        priority: 'High',
        revenue: '$2,450',
        specialRequirements: ['Temperature Control', 'Fragile Handling'],
        assignedVehicle: 'TRK-001',
        assignedDriver: 'Michael Johnson'
    },
    {
        id: 'BK002',
        customer: {
            name: 'MedSupply Inc',
            contact: 'Dr. Sarah Wilson',
            email: 'sarah@medsupply.com',
            phone: '+1 (555) 234-5678'
        },
        route: 'Chicago-Miami Air Route',
        routeId: 'RT002',
        shipmentDetails: {
            type: 'Medical Supplies',
            weight: '8,500 lbs',
            dimensions: '6x4x4 ft',
            value: '$85,000'
        },
        pickupDate: '2024-01-18',
        deliveryDate: '2024-01-18',
        status: 'Pending',
        priority: 'Urgent',
        revenue: '$8,900',
        specialRequirements: ['Biohazard Certified', 'Express Delivery'],
        assignedVehicle: 'AIR-102',
        assignedDriver: 'Captain Rodriguez'
    },
    {
        id: 'BK003',
        customer: {
            name: 'Global Exports Ltd',
            contact: 'David Chen',
            email: 'david@globalexports.com',
            phone: '+1 (555) 345-6789'
        },
        route: 'Seattle-Tokyo Ocean Route',
        routeId: 'RT003',
        shipmentDetails: {
            type: 'Machinery',
            weight: '45,000 lbs',
            dimensions: '20x8x8 ft',
            value: '$280,000'
        },
        pickupDate: '2024-01-25',
        deliveryDate: '2024-02-08',
        status: 'In Review',
        priority: 'Normal',
        revenue: '$15,600',
        specialRequirements: ['Heavy Lift', 'Customs Documentation'],
        assignedVehicle: 'SEA-301',
        assignedDriver: 'Captain Thompson'
    }
];
const getStatusColor = (status) => {
    switch (status) {
        case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
        case 'Seasonal': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300';
        case 'Inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
        case 'Confirmed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
        case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
        case 'In Review': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
        case 'Cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
        default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
};
const getPriorityColor = (priority) => {
    switch (priority) {
        case 'Urgent': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
        case 'High': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300';
        case 'Normal': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
        case 'Low': return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
        default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
};
const getTransportIcon = (mode) => {
    switch (mode) {
        case 'road': return _jsx(Truck, { className: "h-4 w-4 text-green-600" });
        case 'air': return _jsx(Plane, { className: "h-4 w-4 text-blue-600" });
        case 'sea': return _jsx(Ship, { className: "h-4 w-4 text-teal-600" });
        default: return _jsx(Route, { className: "h-4 w-4" });
    }
};
export function RoutesModule({ onOpenRouteOptimization }) {
    const [selectedRoute, setSelectedRoute] = useState(routesData[0]);
    const [selectedBooking, setSelectedBooking] = useState(bookingsData[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('routes');
    const [routeDetailsOpen, setRouteDetailsOpen] = useState(false);
    const [editRouteOpen, setEditRouteOpen] = useState(false);
    const [selectedRouteForAction, setSelectedRouteForAction] = useState(null);
    const [bookingDetailsOpen, setBookingDetailsOpen] = useState(false);
    const [selectedBookingForAction, setSelectedBookingForAction] = useState(null);
    const filteredRoutes = routesData.filter(route => route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.id.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredBookings = bookingsData.filter(booking => booking.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.id.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleRouteAction = (action, route) => {
        setSelectedRouteForAction(route);
        console.log(`${action} action for route:`, route.id);
        switch (action) {
            case 'view':
                setRouteDetailsOpen(true);
                break;
            case 'edit':
                setEditRouteOpen(true);
                break;
            case 'duplicate':
                console.log('Duplicating route:', route.id);
                break;
            case 'optimize':
                console.log('Optimizing route:', route.id);
                onOpenRouteOptimization?.();
                break;
            case 'delete':
                console.log('Deleting route:', route.id);
                break;
            default:
                break;
        }
    };
    const handleBookingAction = (action, booking) => {
        setSelectedBookingForAction(booking);
        console.log(`${action} action for booking:`, booking.id);
        switch (action) {
            case 'view':
                setBookingDetailsOpen(true);
                break;
            case 'approve':
                console.log('Approving booking:', booking.id);
                break;
            case 'reject':
                console.log('Rejecting booking:', booking.id);
                break;
            case 'modify':
                console.log('Modifying booking:', booking.id);
                break;
            case 'cancel':
                console.log('Cancelling booking:', booking.id);
                break;
            default:
                break;
        }
    };
    return (_jsxs("div", { className: "p-6 space-y-6 bg-background min-h-screen", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Route, { className: "h-6 w-6 text-orange-600" }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold text-foreground", children: "Routes & Bookings" }), _jsx("p", { className: "text-muted-foreground", children: "Manage routes, optimize paths, and handle customer bookings" })] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", className: "flex items-center gap-2", onClick: onOpenRouteOptimization, children: [_jsx(Navigation, { className: "h-4 w-4" }), "Optimize Routes"] }), _jsxs(Button, { className: "bg-orange-600 hover:bg-orange-700 flex items-center gap-2", children: [_jsx(Plus, { className: "h-4 w-4" }), "New Route"] })] })] }), _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [_jsxs(Card, { className: "p-3 border-0 shadow-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Route, { className: "h-4 w-4 text-orange-500" }), _jsx("span", { className: "text-sm text-muted-foreground", children: "Active Routes" })] }), _jsx("p", { className: "text-xl font-semibold mt-1", children: "24" })] }), _jsxs(Card, { className: "p-3 border-0 shadow-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Package, { className: "h-4 w-4 text-blue-500" }), _jsx("span", { className: "text-sm text-muted-foreground", children: "Pending Bookings" })] }), _jsx("p", { className: "text-xl font-semibold mt-1", children: "18" })] }), _jsxs(Card, { className: "p-3 border-0 shadow-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "h-4 w-4 text-green-500" }), _jsx("span", { className: "text-sm text-muted-foreground", children: "Route Efficiency" })] }), _jsx("p", { className: "text-xl font-semibold mt-1", children: "94.2%" })] }), _jsxs(Card, { className: "p-3 border-0 shadow-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(DollarSign, { className: "h-4 w-4 text-purple-500" }), _jsx("span", { className: "text-sm text-muted-foreground", children: "Booking Revenue" })] }), _jsx("p", { className: "text-xl font-semibold mt-1", children: "$127K" })] })] }), _jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "routes", children: "Routes Management" }), _jsx(TabsTrigger, { value: "bookings", children: "Bookings" }), _jsx(TabsTrigger, { value: "optimization", children: "Route Optimization" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Search, { className: "h-4 w-4 text-muted-foreground" }), _jsx(Input, { placeholder: `Search ${activeTab}...`, value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-64" })] })] }), _jsx(TabsContent, { value: "routes", className: "mt-6", children: _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [_jsx("div", { className: "xl:col-span-2", children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Route Network" }) }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Route" }), _jsx(TableHead, { children: "Path" }), _jsx(TableHead, { children: "Mode" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Efficiency" }), _jsx(TableHead, { children: "Revenue" }), _jsx(TableHead, { children: "Actions" })] }) }), _jsx(TableBody, { children: filteredRoutes.map((route) => (_jsxs(TableRow, { className: `cursor-pointer hover:bg-accent/50 ${selectedRoute.id === route.id ? 'bg-orange-50 dark:bg-orange-950/20' : ''}`, onClick: () => setSelectedRoute(route), children: [_jsx(TableCell, { className: "font-medium", children: route.name }), _jsx(TableCell, { children: _jsxs("div", { className: "text-sm", children: [_jsxs("div", { children: [route.origin.city, ", ", route.origin.state, " \u2192"] }), _jsxs("div", { className: "text-muted-foreground", children: [route.destination.city, ", ", route.destination.state] })] }) }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-2", children: [getTransportIcon(route.transportMode), _jsx("span", { className: "text-sm capitalize", children: route.transportMode })] }) }), _jsx(TableCell, { children: _jsx(Badge, { className: getStatusColor(route.status), children: route.status }) }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: "text-sm font-medium", children: [route.efficiency, "%"] }), _jsx("div", { className: `h-2 w-8 rounded-full ${route.efficiency >= 95 ? 'bg-green-200' : route.efficiency >= 90 ? 'bg-yellow-200' : 'bg-red-200'}`, children: _jsx("div", { className: `h-2 rounded-full ${route.efficiency >= 95 ? 'bg-green-500' : route.efficiency >= 90 ? 'bg-yellow-500' : 'bg-red-500'}`, style: { width: `${route.efficiency}%` } }) })] }) }), _jsx(TableCell, { className: "font-medium text-green-600", children: route.avgRevenue }), _jsx(TableCell, { children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: _jsx(MoreHorizontal, { className: "h-4 w-4" }) }) }), _jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [_jsxs(DropdownMenuItem, { onClick: () => handleRouteAction('view', route), children: [_jsx(Eye, { className: "mr-2 h-4 w-4" }), "View Details"] }), _jsxs(DropdownMenuItem, { onClick: () => handleRouteAction('edit', route), children: [_jsx(Edit, { className: "mr-2 h-4 w-4" }), "Edit Route"] }), _jsxs(DropdownMenuItem, { onClick: () => handleRouteAction('duplicate', route), children: [_jsx(Copy, { className: "mr-2 h-4 w-4" }), "Duplicate"] }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuItem, { onClick: () => handleRouteAction('optimize', route), children: [_jsx(Navigation, { className: "mr-2 h-4 w-4" }), "Optimize"] }), _jsxs(DropdownMenuItem, { onClick: () => handleRouteAction('settings', route), children: [_jsx(Settings, { className: "mr-2 h-4 w-4" }), "Settings"] }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuItem, { onClick: () => handleRouteAction('delete', route), className: "text-red-600 focus:text-red-600", children: [_jsx(Trash2, { className: "mr-2 h-4 w-4" }), "Delete"] })] })] }) })] }, route.id))) })] }) })] }) }), _jsx("div", { children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center justify-between", children: [_jsx("span", { children: "Route Details" }), _jsx(Badge, { className: getStatusColor(selectedRoute.status), children: selectedRoute.status })] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium text-foreground mb-3", children: selectedRoute.name }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Route ID:" }), _jsx("span", { className: "font-medium", children: selectedRoute.id })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Distance:" }), _jsx("span", { className: "font-medium", children: selectedRoute.distance })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Est. Time:" }), _jsx("span", { className: "font-medium", children: selectedRoute.estimatedTime })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Frequency:" }), _jsx("span", { className: "font-medium", children: selectedRoute.frequency })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-foreground mb-3", children: "Route Path" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200", children: [_jsx(MapPin, { className: "h-4 w-4 text-green-600" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-green-800 dark:text-green-300", children: "Origin" }), _jsxs("p", { className: "text-sm text-green-600 dark:text-green-400", children: [selectedRoute.origin.city, ", ", selectedRoute.origin.state] })] })] }), _jsxs("div", { className: "flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200", children: [_jsx(MapPin, { className: "h-4 w-4 text-red-600" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-red-800 dark:text-red-300", children: "Destination" }), _jsxs("p", { className: "text-sm text-red-600 dark:text-red-400", children: [selectedRoute.destination.city, ", ", selectedRoute.destination.state] })] })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-foreground mb-3", children: "Performance Metrics" }), _jsxs("div", { className: "grid grid-cols-2 gap-3", children: [_jsxs("div", { className: "bg-accent/30 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-muted-foreground", children: "Active Bookings" }), _jsx("p", { className: "text-lg font-semibold", children: selectedRoute.activeBookings })] }), _jsxs("div", { className: "bg-accent/30 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-muted-foreground", children: "Completed" }), _jsx("p", { className: "text-lg font-semibold", children: selectedRoute.completedTrips })] }), _jsxs("div", { className: "bg-accent/30 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-muted-foreground", children: "Efficiency" }), _jsxs("p", { className: "text-lg font-semibold text-green-600", children: [selectedRoute.efficiency, "%"] })] }), _jsxs("div", { className: "bg-accent/30 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-muted-foreground", children: "Avg Revenue" }), _jsx("p", { className: "text-lg font-semibold text-green-600", children: selectedRoute.avgRevenue })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-foreground mb-3", children: "Pricing Structure" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Base Rate:" }), _jsx("span", { className: "font-medium", children: selectedRoute.pricing.baseRate })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Fuel Surcharge:" }), _jsx("span", { className: "font-medium", children: selectedRoute.pricing.fuelSurcharge })] })] })] })] }) })] }) })] }) }), _jsx(TabsContent, { value: "bookings", className: "mt-6", children: _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [_jsx("div", { className: "xl:col-span-2", children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(CardTitle, { children: "Customer Bookings" }), _jsxs(Button, { size: "sm", className: "bg-orange-600 hover:bg-orange-700", children: [_jsx(Plus, { className: "h-4 w-4 mr-1" }), "New Booking"] })] }) }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Booking" }), _jsx(TableHead, { children: "Customer" }), _jsx(TableHead, { children: "Route" }), _jsx(TableHead, { children: "Dates" }), _jsx(TableHead, { children: "Priority" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Revenue" }), _jsx(TableHead, { children: "Actions" })] }) }), _jsx(TableBody, { children: filteredBookings.map((booking) => (_jsxs(TableRow, { className: `cursor-pointer hover:bg-accent/50 ${selectedBooking.id === booking.id ? 'bg-orange-50 dark:bg-orange-950/20' : ''}`, onClick: () => setSelectedBooking(booking), children: [_jsx(TableCell, { className: "font-medium", children: booking.id }), _jsx(TableCell, { children: _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: booking.customer.name }), _jsx("p", { className: "text-sm text-muted-foreground", children: booking.customer.contact })] }) }), _jsx(TableCell, { className: "text-sm", children: booking.route }), _jsx(TableCell, { children: _jsxs("div", { className: "text-sm", children: [_jsxs("div", { children: ["Pickup: ", booking.pickupDate] }), _jsxs("div", { className: "text-muted-foreground", children: ["Delivery: ", booking.deliveryDate] })] }) }), _jsx(TableCell, { children: _jsx(Badge, { className: getPriorityColor(booking.priority), children: booking.priority }) }), _jsx(TableCell, { children: _jsx(Badge, { className: getStatusColor(booking.status), children: booking.status }) }), _jsx(TableCell, { className: "font-medium text-green-600", children: booking.revenue }), _jsx(TableCell, { children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: _jsx(MoreHorizontal, { className: "h-4 w-4" }) }) }), _jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [_jsxs(DropdownMenuItem, { onClick: () => handleBookingAction('view', booking), children: [_jsx(Eye, { className: "mr-2 h-4 w-4" }), "View Details"] }), booking.status === 'Pending' && (_jsxs(_Fragment, { children: [_jsxs(DropdownMenuItem, { onClick: () => handleBookingAction('approve', booking), children: [_jsx(CheckCircle, { className: "mr-2 h-4 w-4 text-green-600" }), "Approve"] }), _jsxs(DropdownMenuItem, { onClick: () => handleBookingAction('reject', booking), children: [_jsx(XCircle, { className: "mr-2 h-4 w-4 text-red-600" }), "Reject"] })] })), _jsxs(DropdownMenuItem, { onClick: () => handleBookingAction('modify', booking), children: [_jsx(Edit, { className: "mr-2 h-4 w-4" }), "Modify"] }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuItem, { onClick: () => handleBookingAction('download', booking), children: [_jsx(Download, { className: "mr-2 h-4 w-4" }), "Download PDF"] }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuItem, { onClick: () => handleBookingAction('cancel', booking), className: "text-red-600 focus:text-red-600", children: [_jsx(XCircle, { className: "mr-2 h-4 w-4" }), "Cancel"] })] })] }) })] }, booking.id))) })] }) })] }) }), _jsx("div", { children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center justify-between", children: [_jsx("span", { children: "Booking Details" }), _jsx(Badge, { className: getStatusColor(selectedBooking.status), children: selectedBooking.status })] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium text-foreground mb-3", children: "Customer Information" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Company:" }), _jsx("span", { className: "font-medium", children: selectedBooking.customer.name })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Contact:" }), _jsx("span", { className: "font-medium", children: selectedBooking.customer.contact })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Email:" }), _jsx("span", { className: "font-medium", children: selectedBooking.customer.email })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Phone:" }), _jsx("span", { className: "font-medium", children: selectedBooking.customer.phone })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-foreground mb-3", children: "Shipment Details" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Type:" }), _jsx("span", { className: "font-medium", children: selectedBooking.shipmentDetails.type })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Weight:" }), _jsx("span", { className: "font-medium", children: selectedBooking.shipmentDetails.weight })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Dimensions:" }), _jsx("span", { className: "font-medium", children: selectedBooking.shipmentDetails.dimensions })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Value:" }), _jsx("span", { className: "font-medium text-green-600", children: selectedBooking.shipmentDetails.value })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-foreground mb-3", children: "Special Requirements" }), _jsx("div", { className: "flex flex-wrap gap-2", children: selectedBooking.specialRequirements.map((req, index) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: req }, index))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-foreground mb-3", children: "Assignment" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Vehicle:" }), _jsx("span", { className: "font-medium", children: selectedBooking.assignedVehicle })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Driver:" }), _jsx("span", { className: "font-medium", children: selectedBooking.assignedDriver })] })] })] }), _jsxs("div", { className: "bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(DollarSign, { className: "h-4 w-4 text-green-600" }), _jsx("span", { className: "font-medium text-green-800 dark:text-green-300", children: "Revenue" })] }), _jsx("p", { className: "text-2xl font-bold text-green-700 dark:text-green-400", children: selectedBooking.revenue }), _jsxs("p", { className: "text-sm text-green-600 dark:text-green-500 mt-1", children: ["Priority: ", selectedBooking.priority] })] })] }) })] }) })] }) }), _jsx(TabsContent, { value: "optimization", className: "mt-6", children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Navigation, { className: "h-5 w-5 text-orange-600" }), "Route Optimization Center"] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "text-center py-12", children: [_jsx(Navigation, { className: "h-12 w-12 text-muted-foreground mx-auto mb-4" }), _jsx("h3", { className: "text-lg font-semibold mb-2", children: "Route Optimization Tools" }), _jsx("p", { className: "text-muted-foreground mb-6", children: "Advanced algorithms to optimize your delivery routes for maximum efficiency" }), _jsx(Button, { onClick: onOpenRouteOptimization, className: "bg-orange-600 hover:bg-orange-700", children: "Launch Optimization Tool" })] }) })] }) })] }), _jsx(Dialog, { open: routeDetailsOpen, onOpenChange: setRouteDetailsOpen, children: _jsxs(DialogContent, { className: "sm:max-w-2xl", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { children: ["Route Details - ", selectedRouteForAction?.name] }) }), _jsx("div", { className: "py-4", children: _jsx("p", { className: "text-muted-foreground", children: "Detailed route information and analytics would be displayed here." }) })] }) }), _jsx(Dialog, { open: editRouteOpen, onOpenChange: setEditRouteOpen, children: _jsxs(DialogContent, { className: "sm:max-w-2xl", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { children: ["Edit Route - ", selectedRouteForAction?.name] }) }), _jsxs("div", { className: "space-y-4 py-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "routeName", children: "Route Name" }), _jsx(Input, { id: "routeName", defaultValue: selectedRouteForAction?.name })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "origin", children: "Origin" }), _jsx(Input, { id: "origin", defaultValue: `${selectedRouteForAction?.origin.city}, ${selectedRouteForAction?.origin.state}` })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "destination", children: "Destination" }), _jsx(Input, { id: "destination", defaultValue: `${selectedRouteForAction?.destination.city}, ${selectedRouteForAction?.destination.state}` })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "notes", children: "Notes" }), _jsx(Textarea, { id: "notes", placeholder: "Add any special notes or requirements..." })] }), _jsxs("div", { className: "flex gap-2 pt-4", children: [_jsx(Button, { variant: "outline", onClick: () => setEditRouteOpen(false), className: "flex-1", children: "Cancel" }), _jsx(Button, { className: "flex-1", children: "Save Changes" })] })] })] }) }), _jsx(Dialog, { open: bookingDetailsOpen, onOpenChange: setBookingDetailsOpen, children: _jsxs(DialogContent, { className: "sm:max-w-2xl", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { children: ["Booking Details - ", selectedBookingForAction?.id] }) }), _jsx("div", { className: "py-4", children: _jsx("p", { className: "text-muted-foreground", children: "Comprehensive booking information and management options would be displayed here." }) })] }) })] }));
}
//# sourceMappingURL=RoutesModule.js.map