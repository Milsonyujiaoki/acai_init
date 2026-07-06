import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { TripDetailsModal } from './TripDetailsModal';
import { TimePeriodModal } from './TimePeriodModal';
import { FiltersModal } from './FiltersModal';
import { Truck, Search, Filter, MapPin, Clock, DollarSign, User, Package, Route, Calendar, TrendingUp, AlertCircle, CheckCircle, XCircle, Plane, Ship, RefreshCw, Download, Eye, MoreHorizontal } from 'lucide-react';
const tripsData = [
    {
        id: 'TR001',
        route: { origin: 'New York, NY', destination: 'Boston, MA' },
        vehicle: { id: 'TRK-001', name: 'Volvo VNL 860', type: 'road' },
        driver: { name: 'Michael Johnson', id: 'D001', photo: 'https://images.unsplash.com/photo-1718434137166-b3cb7d944b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcml2ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTU1ODMxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
        customer: 'Acme Corp',
        material: { type: 'Electronics', weight: '15,000 lbs', quantity: '250 units' },
        status: 'Completed',
        startDate: '2024-01-08',
        endDate: '2024-01-10',
        estimatedDuration: '8h 30m',
        actualDuration: '8h 15m',
        distance: '215 miles',
        revenue: '$2,450',
        fuelCost: '$180',
        timeline: [
            { step: 'Trip Started', time: '2024-01-08 08:00', status: 'completed' },
            { step: 'Loaded Cargo', time: '2024-01-08 09:30', status: 'completed' },
            { step: 'En Route', time: '2024-01-08 10:00', status: 'completed' },
            { step: 'Delivered', time: '2024-01-08 18:15', status: 'completed' }
        ]
    },
    {
        id: 'TR002',
        route: { origin: 'Chicago, IL', destination: 'Miami, FL' },
        vehicle: { id: 'AIR-205', name: 'Boeing 737 Cargo', type: 'air' },
        driver: { name: 'Sarah Wilson', id: 'D002', photo: 'https://images.unsplash.com/photo-1622175691858-a4deb912838e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB0cnVjayUyMGRyaXZlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1ODMxODd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
        customer: 'MedSupply Inc',
        material: { type: 'Medical Supplies', weight: '8,500 lbs', quantity: '150 boxes' },
        status: 'In Transit',
        startDate: '2024-01-12',
        endDate: '2024-01-12',
        estimatedDuration: '3h 45m',
        actualDuration: 'In Progress',
        distance: '1,197 miles',
        revenue: '$8,900',
        fuelCost: '$650',
        timeline: [
            { step: 'Trip Started', time: '2024-01-12 06:00', status: 'completed' },
            { step: 'Loaded Cargo', time: '2024-01-12 07:15', status: 'completed' },
            { step: 'En Route', time: '2024-01-12 08:00', status: 'current' },
            { step: 'Deliver', time: '2024-01-12 11:45', status: 'pending' }
        ]
    },
    {
        id: 'TR003',
        route: { origin: 'Seattle, WA', destination: 'Tokyo, Japan' },
        vehicle: { id: 'SEA-102', name: 'Container Ship Atlas', type: 'sea' },
        driver: { name: 'David Chen', id: 'D003', photo: 'https://images.unsplash.com/photo-1710242078536-fe62a305a86c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGRyaXZlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1ODMxODR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
        customer: 'Global Exports Ltd',
        material: { type: 'Machinery', weight: '45,000 lbs', quantity: '12 containers' },
        status: 'Loading',
        startDate: '2024-01-15',
        endDate: '2024-01-30',
        estimatedDuration: '15 days',
        actualDuration: 'Not Started',
        distance: '4,792 miles',
        revenue: '$15,600',
        fuelCost: '$2,100',
        timeline: [
            { step: 'Cargo Preparation', time: '2024-01-15 10:00', status: 'current' },
            { step: 'Loading', time: '2024-01-15 14:00', status: 'pending' },
            { step: 'Departure', time: '2024-01-16 08:00', status: 'pending' },
            { step: 'Arrive Tokyo', time: '2024-01-30 16:00', status: 'pending' }
        ]
    },
    {
        id: 'TR004',
        route: { origin: 'Dallas, TX', destination: 'Denver, CO' },
        vehicle: { id: 'TRK-089', name: 'Peterbilt 579', type: 'road' },
        driver: { name: 'Lisa Brown', id: 'D004', photo: 'https://images.unsplash.com/photo-1659353740059-5554fb2ac89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMGRyaXZlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1ODMxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
        customer: 'FastTrack Logistics',
        material: { type: 'Consumer Goods', weight: '12,000 lbs', quantity: '500 packages' },
        status: 'Scheduled',
        startDate: '2024-01-20',
        endDate: '2024-01-21',
        estimatedDuration: '12h 30m',
        actualDuration: 'Not Started',
        distance: '781 miles',
        revenue: '$1,890',
        fuelCost: '$210',
        timeline: [
            { step: 'Pre-Trip Check', time: '2024-01-20 06:00', status: 'pending' },
            { step: 'Load Cargo', time: '2024-01-20 07:00', status: 'pending' },
            { step: 'Depart', time: '2024-01-20 08:00', status: 'pending' },
            { step: 'Deliver', time: '2024-01-20 20:30', status: 'pending' }
        ]
    }
];
const getStatusColor = (status) => {
    switch (status) {
        case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
        case 'In Transit': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
        case 'Loading': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300';
        case 'Scheduled': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
        case 'Cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
        default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
};
const getTransportIcon = (type) => {
    switch (type) {
        case 'road': return _jsx(Truck, { className: "h-4 w-4 text-green-600" });
        case 'air': return _jsx(Plane, { className: "h-4 w-4 text-blue-600" });
        case 'sea': return _jsx(Ship, { className: "h-4 w-4 text-teal-600" });
        default: return _jsx(Truck, { className: "h-4 w-4" });
    }
};
export function TransportsModule({ onOpenCreateTrip, onOpenGenerateReport }) {
    const [selectedTrip, setSelectedTrip] = useState(tripsData[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [tripDetailsOpen, setTripDetailsOpen] = useState(false);
    const [selectedTripForDetails, setSelectedTripForDetails] = useState(null);
    const [timePeriodModalOpen, setTimePeriodModalOpen] = useState(false);
    const [filtersModalOpen, setFiltersModalOpen] = useState(false);
    const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const filteredTrips = tripsData.filter(trip => {
        const matchesSearch = trip.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trip.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trip.route.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trip.route.destination.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || trip.status === statusFilter;
        return matchesSearch && matchesStatus;
    });
    const handleViewTrip = (trip) => {
        setSelectedTripForDetails(trip);
        setTripDetailsOpen(true);
    };
    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    };
    const handleExport = () => {
        setIsExporting(true);
        setTimeout(() => {
            setIsExporting(false);
            onOpenGenerateReport?.();
        }, 1500);
    };
    const handleTimePeriodSelect = (period) => {
        setSelectedTimeRange(period);
        console.log('Selected time period:', period);
    };
    const handleFiltersApply = (filters) => {
        console.log('Applied filters:', filters);
    };
    const getTimePeriodLabel = (period) => {
        switch (period) {
            case '7d': return 'Last 7 days';
            case '30d': return 'Last 1 month';
            case '3m': return 'Last 3 months';
            case '6m': return 'Last 6 months';
            case '1y': return 'Last 1 year';
            case 'ytd': return 'Year to date';
            default: return 'Last 7 days';
        }
    };
    return (_jsxs("div", { className: "p-6 space-y-6 bg-background min-h-screen", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Truck, { className: "h-6 w-6 text-green-600" }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold text-foreground", children: "Transports & Trips" }), _jsx("p", { className: "text-muted-foreground", children: "Manage and track all transportation activities" })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Button, { variant: "outline", size: "sm", className: "flex items-center gap-2 hover:bg-accent", onClick: () => setTimePeriodModalOpen(true), children: [_jsx(Calendar, { className: "h-4 w-4" }), getTimePeriodLabel(selectedTimeRange)] }), _jsxs(Button, { variant: "outline", size: "sm", className: "flex items-center gap-2 hover:bg-accent", onClick: () => setFiltersModalOpen(true), children: [_jsx(Filter, { className: "h-4 w-4" }), "Filters"] })] }), _jsxs(Button, { variant: "outline", size: "sm", className: "flex items-center gap-2 hover:bg-accent", onClick: handleRefresh, disabled: isRefreshing, children: [_jsx(RefreshCw, { className: `h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}` }), isRefreshing ? 'Refreshing...' : 'Refresh'] }), _jsxs(Button, { variant: "outline", size: "sm", className: "flex items-center gap-2 hover:bg-accent", onClick: handleExport, disabled: isExporting, children: [_jsx(Download, { className: `h-4 w-4 ${isExporting ? 'animate-spin' : ''}` }), isExporting ? 'Exporting...' : 'Export'] }), _jsx(Button, { className: "bg-green-600 hover:bg-green-700", onClick: onOpenCreateTrip, children: "Create New Trip" })] })] }), _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [_jsxs(Card, { className: "p-3 border-0 shadow-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "h-4 w-4 text-green-500" }), _jsx("span", { className: "text-sm text-muted-foreground", children: "Active Trips" })] }), _jsx("p", { className: "text-xl font-semibold mt-1", children: "18" })] }), _jsxs(Card, { className: "p-3 border-0 shadow-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: "h-4 w-4 text-blue-500" }), _jsx("span", { className: "text-sm text-muted-foreground", children: "Completed Today" })] }), _jsx("p", { className: "text-xl font-semibold mt-1", children: "7" })] }), _jsxs(Card, { className: "p-3 border-0 shadow-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "h-4 w-4 text-orange-500" }), _jsx("span", { className: "text-sm text-muted-foreground", children: "Scheduled" })] }), _jsx("p", { className: "text-xl font-semibold mt-1", children: "12" })] }), _jsxs(Card, { className: "p-3 border-0 shadow-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(DollarSign, { className: "h-4 w-4 text-purple-500" }), _jsx("span", { className: "text-sm text-muted-foreground", children: "Today's Revenue" })] }), _jsx("p", { className: "text-xl font-semibold mt-1", children: "$28.4K" })] })] }), _jsx(Card, { className: "border-0 shadow-sm", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsxs("div", { className: "flex-1 relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }), _jsx(Input, { placeholder: "Search trips by ID, customer, or route...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10" })] }), _jsx("div", { className: "flex gap-2", children: ['All', 'In Transit', 'Completed', 'Scheduled', 'Loading'].map(status => (_jsx(Button, { variant: statusFilter === status ? 'default' : 'outline', size: "sm", onClick: () => setStatusFilter(status), children: status }, status))) })] }) }) }), _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [_jsx("div", { className: "xl:col-span-2", children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "All Trips" }) }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Trip ID" }), _jsx(TableHead, { children: "Route" }), _jsx(TableHead, { children: "Vehicle" }), _jsx(TableHead, { children: "Driver" }), _jsx(TableHead, { children: "Customer" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Revenue" }), _jsx(TableHead, { children: "Actions" })] }) }), _jsx(TableBody, { children: filteredTrips.map((trip) => (_jsxs(TableRow, { className: `cursor-pointer hover:bg-accent/50 ${selectedTrip.id === trip.id ? 'bg-blue-50 dark:bg-blue-950/20' : ''}`, onClick: () => setSelectedTrip(trip), children: [_jsx(TableCell, { className: "font-medium", children: trip.id }), _jsx(TableCell, { children: _jsxs("div", { className: "text-sm", children: [_jsxs("div", { children: [trip.route.origin, " \u2192"] }), _jsx("div", { className: "text-muted-foreground", children: trip.route.destination })] }) }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-2", children: [getTransportIcon(trip.vehicle.type), _jsx("span", { className: "text-sm", children: trip.vehicle.id })] }) }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Avatar, { className: "h-6 w-6", children: [_jsx(AvatarImage, { src: trip.driver.photo }), _jsx(AvatarFallback, { className: "text-xs", children: trip.driver.name.split(' ').map(n => n[0]).join('') })] }), _jsx("span", { className: "text-sm", children: trip.driver.name })] }) }), _jsx(TableCell, { className: "text-sm", children: trip.customer }), _jsx(TableCell, { children: _jsx(Badge, { className: getStatusColor(trip.status), children: trip.status }) }), _jsx(TableCell, { className: "font-medium text-green-600", children: trip.revenue }), _jsx(TableCell, { children: _jsxs(Button, { size: "sm", variant: "outline", onClick: (e) => {
                                                                    e.stopPropagation();
                                                                    handleViewTrip(trip);
                                                                }, className: "flex items-center gap-1", children: [_jsx(Eye, { className: "h-3 w-3" }), "View"] }) })] }, trip.id))) })] }) })] }) }), _jsx("div", { children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center justify-between", children: [_jsx("span", { children: "Trip Details" }), _jsx(Badge, { className: getStatusColor(selectedTrip.status), children: selectedTrip.status })] }) }), _jsx(CardContent, { children: _jsxs(Tabs, { defaultValue: "overview", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [_jsx(TabsTrigger, { value: "overview", children: "Overview" }), _jsx(TabsTrigger, { value: "timeline", children: "Timeline" })] }), _jsx(TabsContent, { value: "overview", className: "mt-6", children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium text-foreground mb-3", children: "Trip Information" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Trip ID:" }), _jsx("span", { className: "font-medium", children: selectedTrip.id })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Customer:" }), _jsx("span", { className: "font-medium", children: selectedTrip.customer })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Distance:" }), _jsx("span", { className: "font-medium", children: selectedTrip.distance })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Duration:" }), _jsx("span", { className: "font-medium", children: selectedTrip.estimatedDuration })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-foreground mb-3", children: "Route" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "h-4 w-4 text-green-600" }), _jsx("span", { className: "text-sm", children: selectedTrip.route.origin })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "h-4 w-4 text-red-600" }), _jsx("span", { className: "text-sm", children: selectedTrip.route.destination })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-foreground mb-3", children: "Assignment" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3 p-2 bg-accent/30 rounded-lg", children: [getTransportIcon(selectedTrip.vehicle.type), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-sm", children: selectedTrip.vehicle.name }), _jsx("p", { className: "text-xs text-muted-foreground", children: selectedTrip.vehicle.id })] })] }), _jsxs("div", { className: "flex items-center gap-3 p-2 bg-accent/30 rounded-lg", children: [_jsxs(Avatar, { className: "h-8 w-8", children: [_jsx(AvatarImage, { src: selectedTrip.driver.photo }), _jsx(AvatarFallback, { className: "text-xs", children: selectedTrip.driver.name.split(' ').map(n => n[0]).join('') })] }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-sm", children: selectedTrip.driver.name }), _jsx("p", { className: "text-xs text-muted-foreground", children: selectedTrip.driver.id })] })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-foreground mb-3", children: "Financial" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Revenue:" }), _jsx("span", { className: "font-medium text-green-600", children: selectedTrip.revenue })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Fuel Cost:" }), _jsx("span", { className: "font-medium text-red-600", children: selectedTrip.fuelCost })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: "Profit:" }), _jsxs("span", { className: "font-medium text-blue-600", children: ["$", parseInt(selectedTrip.revenue.replace('$', '').replace(',', '')) -
                                                                                            parseInt(selectedTrip.fuelCost.replace('$', '').replace(',', ''))] })] })] })] })] }) }), _jsx(TabsContent, { value: "timeline", className: "mt-6", children: _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-medium text-foreground", children: "Trip Timeline" }), _jsx("div", { className: "space-y-3", children: selectedTrip.timeline.map((step, index) => (_jsxs("div", { className: "flex items-center gap-3", children: [step.status === 'completed' ? (_jsx(CheckCircle, { className: "h-4 w-4 text-green-500" })) : step.status === 'current' ? (_jsx(Clock, { className: "h-4 w-4 text-blue-500" })) : (_jsx(Clock, { className: "h-4 w-4 text-gray-400" })), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: `text-sm font-medium ${step.status === 'current' ? 'text-blue-700' :
                                                                                    step.status === 'completed' ? 'text-green-700' : 'text-muted-foreground'}`, children: step.step }), _jsx("p", { className: "text-xs text-muted-foreground", children: step.time })] })] }, index))) }), selectedTrip.status === 'In Transit' && (_jsxs("div", { className: "mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(MapPin, { className: "h-4 w-4 text-blue-600" }), _jsx("span", { className: "font-medium text-blue-800 dark:text-blue-300", children: "Current Location" })] }), _jsx("p", { className: "text-sm text-blue-700 dark:text-blue-400", children: "En route to Miami, FL" }), _jsx("p", { className: "text-xs text-blue-600 dark:text-blue-500 mt-1", children: "ETA: 2 hours 15 minutes" })] }))] }) })] }) })] }) })] }), _jsx(TripDetailsModal, { isOpen: tripDetailsOpen, onClose: () => setTripDetailsOpen(false), trip: selectedTripForDetails }), _jsx(TimePeriodModal, { isOpen: timePeriodModalOpen, onClose: () => setTimePeriodModalOpen(false), onSelect: handleTimePeriodSelect, currentPeriod: selectedTimeRange }), _jsx(FiltersModal, { isOpen: filtersModalOpen, onClose: () => setFiltersModalOpen(false), onApply: handleFiltersApply })] }));
}
//# sourceMappingURL=TransportsModule.js.map