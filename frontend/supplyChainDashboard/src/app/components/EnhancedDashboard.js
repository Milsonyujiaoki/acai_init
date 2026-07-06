import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { GoogleMapsTracker } from './GoogleMapsTracker';
import { UpcomingBookings } from './UpcomingBookings';
import { RecentTrips } from './RecentTrips';
import { RevenueAnalytics } from './RevenueAnalytics';
import { TimePeriodModal } from './TimePeriodModal';
import { FiltersModal } from './FiltersModal';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Truck, Users, Package, DollarSign, MapPin, Clock, AlertTriangle, CheckCircle, Fuel, Target, ArrowUp, ArrowDown, MoreHorizontal, RefreshCw, Download, Filter, Calendar, Plus } from 'lucide-react';
// Real-time data simulation
const useRealTimeData = () => {
    const [data, setData] = useState({
        activeVehicles: 247,
        tripsInProgress: 42,
        monthlyRevenue: 892500,
        upcomingBookings: 18,
        fuelEfficiency: 8.2,
        onTimeDelivery: 94.5,
        driverUtilization: 87.3,
        maintenanceAlerts: 5
    });
    useEffect(() => {
        const interval = setInterval(() => {
            setData(prev => ({
                ...prev,
                activeVehicles: prev.activeVehicles + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3),
                tripsInProgress: Math.max(20, prev.tripsInProgress + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 2)),
                monthlyRevenue: prev.monthlyRevenue + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 1000),
                fuelEfficiency: Math.max(6, Math.min(12, prev.fuelEfficiency + (Math.random() - 0.5) * 0.1))
            }));
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return data;
};
const revenueData = [
    { month: 'Jan', revenue: 185000, profit: 46250, trips: 156 },
    { month: 'Feb', revenue: 192000, profit: 48000, trips: 168 },
    { month: 'Mar', revenue: 205000, profit: 51250, trips: 189 },
    { month: 'Apr', revenue: 198000, profit: 49500, trips: 172 },
    { month: 'May', revenue: 212000, profit: 53000, trips: 195 },
    { month: 'Jun', revenue: 225000, profit: 56250, trips: 208 },
    { month: 'Jul', revenue: 238000, profit: 59500, trips: 219 },
    { month: 'Aug', revenue: 245000, profit: 61250, trips: 225 },
    { month: 'Sep', revenue: 252000, profit: 63000, trips: 231 },
    { month: 'Oct', revenue: 268000, profit: 67000, trips: 247 },
    { month: 'Nov', revenue: 275000, profit: 68750, trips: 253 },
    { month: 'Dec', revenue: 295000, profit: 73750, trips: 269 }
];
const transportModeData = [
    { name: 'Road Transport', value: 45, revenue: 450000, color: '#10b981' },
    { name: 'Air Transport', value: 30, revenue: 380000, color: '#3b82f6' },
    { name: 'Sea Transport', value: 20, revenue: 280000, color: '#0d9488' },
    { name: 'Rail Transport', value: 5, revenue: 90000, color: '#f59e0b' }
];
const performanceData = [
    { metric: 'On-Time Delivery', current: 94.5, target: 95, trend: 'up' },
    { metric: 'Fuel Efficiency', current: 8.2, target: 8.5, trend: 'up' },
    { metric: 'Vehicle Utilization', current: 87.3, target: 90, trend: 'down' },
    { metric: 'Customer Satisfaction', current: 92.1, target: 95, trend: 'up' }
];
const upcomingTrips = [
    {
        id: 'TR-001',
        route: 'NY → Boston',
        driver: 'Michael Johnson',
        vehicle: 'TRK-001',
        departure: '08:30 AM',
        cargo: 'Electronics',
        priority: 'High',
        status: 'Ready'
    },
    {
        id: 'TR-002',
        route: 'LA → Seattle',
        driver: 'Sarah Wilson',
        vehicle: 'TRK-105',
        departure: '09:15 AM',
        cargo: 'Medical Supplies',
        priority: 'Urgent',
        status: 'Loading'
    },
    {
        id: 'TR-003',
        route: 'Chicago → Miami',
        driver: 'Carlos Rodriguez',
        vehicle: 'AIR-202',
        departure: '10:00 AM',
        cargo: 'Fresh Produce',
        priority: 'Medium',
        status: 'Scheduled'
    }
];
const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
};
const getPriorityColor = (priority) => {
    switch (priority) {
        case 'Urgent': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300';
        case 'High': return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300';
        case 'Medium': return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300';
        case 'Low': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300';
        default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300';
    }
};
export function EnhancedDashboard({ onOpenCreateTrip, onOpenRouteOptimization, onOpenAnalytics, onOpenAlerts, onOpenGenerateReport, onNavigateToModule }) {
    const realTimeData = useRealTimeData();
    const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [timePeriodModalOpen, setTimePeriodModalOpen] = useState(false);
    const [filtersModalOpen, setFiltersModalOpen] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
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
            // Trigger report generation modal
            onOpenGenerateReport?.();
        }, 1500);
    };
    const handleTimePeriodSelect = (period) => {
        setSelectedTimeRange(period);
        // Here you would typically refresh data based on the selected period
        console.log('Selected time period:', period);
    };
    const handleFiltersApply = (filters) => {
        console.log('Applied filters:', filters);
        // Here you would apply the filters to your data
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
    const kpiCards = [
        {
            title: 'Active Fleet',
            value: realTimeData.activeVehicles,
            change: '+8',
            changePercent: 3.3,
            icon: Truck,
            color: 'blue',
            description: 'vehicles operational',
            onClick: () => onNavigateToModule?.('vehicles')
        },
        {
            title: 'Active Trips',
            value: realTimeData.tripsInProgress,
            change: '+5',
            changePercent: 13.5,
            icon: Package,
            color: 'green',
            description: 'in progress now',
            onClick: () => onNavigateToModule?.('transports')
        },
        {
            title: 'Monthly Revenue',
            value: formatCurrency(realTimeData.monthlyRevenue),
            change: formatCurrency(45200),
            changePercent: 5.3,
            icon: DollarSign,
            color: 'emerald',
            description: 'vs last month',
            onClick: () => onNavigateToModule?.('revenue')
        },
        {
            title: 'Available Drivers',
            value: 156,
            change: '+12',
            changePercent: 8.3,
            icon: Users,
            color: 'purple',
            description: 'ready for dispatch',
            onClick: () => onNavigateToModule?.('drivers')
        },
        {
            title: 'Pending Bookings',
            value: realTimeData.upcomingBookings,
            change: '+3',
            changePercent: 20.0,
            icon: MapPin,
            color: 'orange',
            description: 'awaiting confirmation',
            onClick: () => onNavigateToModule?.('routes')
        },
        {
            title: 'Fuel Efficiency',
            value: `${realTimeData.fuelEfficiency.toFixed(1)} MPG`,
            change: '+0.3',
            changePercent: 3.8,
            icon: Fuel,
            color: 'indigo',
            description: 'fleet average'
        },
        {
            title: 'On-Time Rate',
            value: `${realTimeData.onTimeDelivery.toFixed(1)}%`,
            change: '+2.1%',
            changePercent: 2.3,
            icon: Target,
            color: 'teal',
            description: 'delivery performance'
        },
        {
            title: 'Maintenance Alerts',
            value: realTimeData.maintenanceAlerts,
            change: '-2',
            changePercent: -28.6,
            icon: AlertTriangle,
            color: 'red',
            description: 'requiring attention',
            onClick: () => onOpenAlerts?.()
        }
    ];
    const getIconColor = (color) => {
        const colors = {
            blue: 'bg-blue-500',
            green: 'bg-green-500',
            emerald: 'bg-emerald-500',
            purple: 'bg-purple-500',
            orange: 'bg-orange-500',
            indigo: 'bg-indigo-500',
            teal: 'bg-teal-500',
            red: 'bg-red-500'
        };
        return colors[color] || 'bg-gray-500';
    };
    return (_jsxs("div", { className: "p-6 space-y-6 bg-background min-h-screen", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Dashboard Overview" }), _jsx("p", { className: "text-muted-foreground mt-1", children: "Real-time supply chain operations monitoring" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Button, { variant: "outline", size: "sm", className: "flex items-center gap-2 hover:bg-accent", onClick: () => setTimePeriodModalOpen(true), children: [_jsx(Calendar, { className: "h-4 w-4" }), getTimePeriodLabel(selectedTimeRange)] }), _jsxs(Button, { variant: "outline", size: "sm", className: "flex items-center gap-2 hover:bg-accent", onClick: () => setFiltersModalOpen(true), children: [_jsx(Filter, { className: "h-4 w-4" }), "Filters"] })] }), _jsxs(Button, { variant: "outline", size: "sm", className: "flex items-center gap-2 hover:bg-accent", onClick: handleRefresh, disabled: isRefreshing, children: [_jsx(RefreshCw, { className: `h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}` }), isRefreshing ? 'Refreshing...' : 'Refresh'] }), _jsxs(Button, { variant: "outline", size: "sm", className: "flex items-center gap-2 hover:bg-accent", onClick: handleExport, disabled: isExporting, children: [_jsx(Download, { className: `h-4 w-4 ${isExporting ? 'animate-spin' : ''}` }), isExporting ? 'Exporting...' : 'Export'] }), _jsxs(Button, { size: "sm", className: "flex items-center gap-2 bg-blue-600 hover:bg-blue-700", onClick: onOpenCreateTrip, children: [_jsx(Plus, { className: "h-4 w-4" }), "Create Trip"] })] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3", children: kpiCards.map((kpi, index) => (_jsx(Card, { className: `relative overflow-hidden hover:shadow-lg transition-all duration-200 group border-0 shadow-sm ${kpi.onClick ? 'cursor-pointer' : ''}`, onClick: kpi.onClick, children: _jsxs(CardContent, { className: "p-3", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("div", { className: `h-7 w-7 rounded-lg ${getIconColor(kpi.color)} flex items-center justify-center group-hover:scale-110 transition-transform`, children: _jsx(kpi.icon, { className: "h-3.5 w-3.5 text-white" }) }), _jsxs("div", { className: "flex items-center gap-1", children: [kpi.changePercent > 0 ? (_jsx(ArrowUp, { className: "h-2.5 w-2.5 text-green-500" })) : (_jsx(ArrowDown, { className: "h-2.5 w-2.5 text-red-500" })), _jsxs("span", { className: `text-xs font-medium ${kpi.changePercent > 0 ? 'text-green-600' : 'text-red-600'}`, children: [Math.abs(kpi.changePercent).toFixed(1), "%"] })] })] }), _jsxs("div", { className: "space-y-0.5", children: [_jsx("h3", { className: "text-lg font-bold text-foreground group-hover:text-blue-600 transition-colors", children: typeof kpi.value === 'string' ? kpi.value : kpi.value.toLocaleString() }), _jsx("p", { className: "text-xs font-medium text-foreground", children: kpi.title }), _jsx("p", { className: "text-xs text-muted-foreground", children: kpi.description })] }), _jsxs("div", { className: "mt-2", children: [_jsxs("div", { className: "flex items-center justify-between text-xs mb-1", children: [_jsx("span", { className: "text-muted-foreground", children: "Change" }), _jsx("span", { className: `font-medium ${kpi.changePercent > 0 ? 'text-green-600' : 'text-red-600'}`, children: kpi.change })] }), _jsx(Progress, { value: Math.abs(kpi.changePercent) * 2, className: "h-1" })] })] }) }, index))) }), _jsx(GoogleMapsTracker, {}), _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "h-5 w-5 text-orange-600" }), "Upcoming Trips"] }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => onNavigateToModule?.('transports'), children: "View All" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-3", children: upcomingTrips.map((trip, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "h-10 w-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center", children: _jsx(Package, { className: "h-5 w-5 text-blue-600" }) }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-1", children: [_jsx("h4", { className: "font-medium text-sm", children: trip.route }), _jsx(Badge, { className: getPriorityColor(trip.priority), children: trip.priority })] }), _jsxs("p", { className: "text-xs text-muted-foreground", children: [trip.driver, " \u2022 ", trip.vehicle, " \u2022 ", trip.cargo] })] })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "font-semibold text-sm", children: trip.departure }), _jsx(Badge, { variant: "outline", className: "text-xs", children: trip.status })] })] }, index))) }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Target, { className: "h-5 w-5 text-green-600" }), "Performance Metrics"] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: performanceData.map((metric, index) => (_jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "text-sm font-medium", children: metric.metric }), _jsxs("div", { className: "flex items-center gap-1", children: [metric.trend === 'up' ? (_jsx(TrendingUp, { className: "h-3 w-3 text-green-500" })) : (_jsx(TrendingDown, { className: "h-3 w-3 text-red-500" })), _jsxs("span", { className: "text-sm font-semibold", children: [metric.current, metric.metric.includes('%') ? '' : metric.metric.includes('MPG') ? ' MPG' : '%'] })] })] }), _jsx(Progress, { value: (metric.current / metric.target) * 100, className: "h-2" }), _jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-1", children: [_jsx("span", { children: "Current" }), _jsxs("span", { children: ["Target: ", metric.target, metric.metric.includes('%') ? '' : metric.metric.includes('MPG') ? ' MPG' : '%'] })] })] }, index))) }) })] })] }), _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [_jsx("div", { className: "xl:col-span-2", children: _jsxs(Card, { className: "h-96", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "h-5 w-5 text-green-600" }), "Revenue & Performance Trends"] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: onOpenAnalytics, children: "View Details" }), _jsx(Button, { variant: "outline", size: "sm", children: "7D" }), _jsx(Button, { variant: "outline", size: "sm", className: "bg-accent", children: "30D" }), _jsx(Button, { variant: "outline", size: "sm", children: "90D" })] })] }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 280, children: _jsxs(AreaChart, { data: revenueData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", className: "opacity-30" }), _jsx(XAxis, { dataKey: "month", className: "text-xs", tick: { fill: 'hsl(var(--muted-foreground))' } }), _jsx(YAxis, { className: "text-xs", tick: { fill: 'hsl(var(--muted-foreground))' }, tickFormatter: (value) => `$${value / 1000}k` }), _jsx(Tooltip, { contentStyle: {
                                                        backgroundColor: 'hsl(var(--card))',
                                                        border: '1px solid hsl(var(--border))',
                                                        borderRadius: '8px'
                                                    }, formatter: (value, name) => [
                                                        name === 'revenue' ? formatCurrency(value) : formatCurrency(value),
                                                        name === 'revenue' ? 'Revenue' : 'Profit'
                                                    ] }), _jsx(Area, { type: "monotone", dataKey: "revenue", stackId: "1", stroke: "#3b82f6", fill: "url(#colorRevenue)" }), _jsx(Area, { type: "monotone", dataKey: "profit", stackId: "1", stroke: "#10b981", fill: "url(#colorProfit)" }), _jsxs("defs", { children: [_jsxs("linearGradient", { id: "colorRevenue", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: "#3b82f6", stopOpacity: 0.1 }), _jsx("stop", { offset: "95%", stopColor: "#3b82f6", stopOpacity: 0 })] }), _jsxs("linearGradient", { id: "colorProfit", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: "#10b981", stopOpacity: 0.1 }), _jsx("stop", { offset: "95%", stopColor: "#10b981", stopOpacity: 0 })] })] })] }) }) })] }) }), _jsxs(Card, { className: "h-96", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Package, { className: "h-5 w-5 text-blue-600" }), "Transport Modes"] }) }), _jsxs(CardContent, { children: [_jsx(ResponsiveContainer, { width: "100%", height: 200, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: transportModeData, cx: "50%", cy: "50%", innerRadius: 40, outerRadius: 80, paddingAngle: 2, dataKey: "value", children: transportModeData.map((entry, index) => (_jsx(Cell, { fill: entry.color }, `cell-${index}`))) }), _jsx(Tooltip, { formatter: (value, name, props) => [
                                                        `${value}%`,
                                                        formatCurrency(props.payload.revenue)
                                                    ], labelFormatter: (label) => label })] }) }), _jsx("div", { className: "space-y-2 mt-4", children: transportModeData.map((item, index) => (_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: item.color } }), _jsx("span", { className: "font-medium", children: item.name })] }), _jsxs("div", { className: "text-right", children: [_jsxs("p", { className: "font-semibold", children: [item.value, "%"] }), _jsx("p", { className: "text-xs text-muted-foreground", children: formatCurrency(item.revenue) })] })] }, index))) })] })] })] }), _jsx(TimePeriodModal, { isOpen: timePeriodModalOpen, onClose: () => setTimePeriodModalOpen(false), onSelect: handleTimePeriodSelect, currentPeriod: selectedTimeRange }), _jsx(FiltersModal, { isOpen: filtersModalOpen, onClose: () => setFiltersModalOpen(false), onApply: handleFiltersApply })] }));
}
//# sourceMappingURL=EnhancedDashboard.js.map