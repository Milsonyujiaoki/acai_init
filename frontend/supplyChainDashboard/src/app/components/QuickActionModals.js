import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Zap, TrendingUp, AlertCircle, FileText, CheckCircle, Clock, Route, DollarSign, MapPin, Download, RefreshCw, ArrowUp, ArrowDown, Target, Fuel, Users } from 'lucide-react';
export function RouteOptimizationModal({ isOpen, onClose }) {
    const [isOptimizing, setIsOptimizing] = useState(false);
    const [optimizationComplete, setOptimizationComplete] = useState(false);
    const handleOptimize = () => {
        setIsOptimizing(true);
        setTimeout(() => {
            setIsOptimizing(false);
            setOptimizationComplete(true);
        }, 3000);
    };
    const routeData = [
        {
            id: 'RT001',
            name: 'NY-Boston Express',
            current: { distance: '215 miles', time: '4h 30m', cost: '$2,450', efficiency: 94 },
            optimized: { distance: '198 miles', time: '4h 8m', cost: '$2,250', efficiency: 97 },
            savings: { distance: '17 miles', time: '22 min', cost: '$200', efficiency: '+3%' }
        },
        {
            id: 'RT002',
            name: 'LA-Seattle Route',
            current: { distance: '1,135 miles', time: '18h 45m', cost: '$4,850', efficiency: 89 },
            optimized: { distance: '1,089 miles', time: '17h 52m', cost: '$4,520', efficiency: 92 },
            savings: { distance: '46 miles', time: '53 min', cost: '$330', efficiency: '+3%' }
        },
        {
            id: 'RT003',
            name: 'Chicago-Miami Air',
            current: { distance: '1,197 miles', time: '3h 15m', cost: '$8,900', efficiency: 97 },
            optimized: { distance: '1,197 miles', time: '3h 15m', cost: '$8,650', efficiency: 98 },
            savings: { distance: '0 miles', time: '0 min', cost: '$250', efficiency: '+1%' }
        }
    ];
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "max-w-6xl max-h-[90vh] overflow-y-auto", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { className: "flex items-center gap-3", children: [_jsx(Zap, { className: "h-6 w-6 text-orange-600" }), "Route Optimization Engine"] }) }), _jsxs("div", { className: "space-y-6", children: [_jsx(Card, { className: "border-0 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-foreground", children: "AI-Powered Route Optimization" }), _jsx("p", { className: "text-muted-foreground", children: isOptimizing ? 'Analyzing routes and calculating optimal paths...' :
                                                            optimizationComplete ? 'Optimization complete! Review the suggested improvements below.' :
                                                                'Analyze your current routes and discover optimization opportunities.' })] }), _jsx(Button, { onClick: handleOptimize, disabled: isOptimizing, className: "bg-orange-600 hover:bg-orange-700", children: isOptimizing ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" }), "Optimizing..."] })) : (_jsxs(_Fragment, { children: [_jsx(Zap, { className: "h-4 w-4 mr-1" }), "Start Optimization"] })) })] }), isOptimizing && (_jsxs("div", { className: "mt-4", children: [_jsxs("div", { className: "flex justify-between text-sm mb-2", children: [_jsx("span", { children: "Progress" }), _jsx("span", { children: "Analyzing routes..." })] }), _jsx(Progress, { value: 85, className: "h-2" })] }))] }) }), (optimizationComplete || !isOptimizing) && (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center justify-between", children: [_jsx("span", { children: "Optimization Results" }), _jsx(Badge, { className: "bg-green-100 text-green-800", children: "Potential Savings: $780/day" })] }) }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Route" }), _jsx(TableHead, { children: "Current" }), _jsx(TableHead, { children: "Optimized" }), _jsx(TableHead, { children: "Savings" }), _jsx(TableHead, { children: "Action" })] }) }), _jsx(TableBody, { children: routeData.map((route) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: route.name }), _jsx("p", { className: "text-sm text-muted-foreground", children: route.id })] }) }), _jsx(TableCell, { children: _jsxs("div", { className: "text-sm", children: [_jsxs("p", { children: [route.current.distance, " \u2022 ", route.current.time] }), _jsxs("p", { className: "text-muted-foreground", children: [route.current.cost, " \u2022 ", route.current.efficiency, "% eff."] })] }) }), _jsx(TableCell, { children: _jsxs("div", { className: "text-sm", children: [_jsxs("p", { className: "text-green-600", children: [route.optimized.distance, " \u2022 ", route.optimized.time] }), _jsxs("p", { className: "text-green-600", children: [route.optimized.cost, " \u2022 ", route.optimized.efficiency, "% eff."] })] }) }), _jsx(TableCell, { children: _jsxs("div", { className: "text-sm", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(ArrowDown, { className: "h-3 w-3 text-green-500" }), _jsx("span", { className: "text-green-600", children: route.savings.distance })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(ArrowDown, { className: "h-3 w-3 text-green-500" }), _jsx("span", { className: "text-green-600", children: route.savings.cost })] })] }) }), _jsx(TableCell, { children: _jsx(Button, { size: "sm", variant: "outline", children: "Apply Changes" }) })] }, route.id))) })] }) })] }))] })] }) }));
}
export function AnalyticsModal({ isOpen, onClose }) {
    const [timeRange, setTimeRange] = useState('7d');
    const metrics = [
        { title: 'Fleet Utilization', value: '87.3%', change: '+2.1%', trend: 'up' },
        { title: 'On-Time Delivery', value: '94.5%', change: '+1.8%', trend: 'up' },
        { title: 'Fuel Efficiency', value: '8.2 MPG', change: '+0.4', trend: 'up' },
        { title: 'Revenue per Mile', value: '$3.45', change: '-$0.08', trend: 'down' },
        { title: 'Customer Satisfaction', value: '4.7/5', change: '+0.2', trend: 'up' },
        { title: 'Maintenance Cost', value: '$892/vehicle', change: '-$45', trend: 'down' }
    ];
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "max-w-6xl max-h-[90vh] overflow-y-auto", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { className: "flex items-center gap-3", children: [_jsx(TrendingUp, { className: "h-6 w-6 text-blue-600" }), "Advanced Analytics Dashboard"] }) }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h3", { className: "text-lg font-semibold", children: "Performance Analytics" }), _jsxs(Select, { value: timeRange, onValueChange: setTimeRange, children: [_jsx(SelectTrigger, { className: "w-32", children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "24h", children: "Last 24h" }), _jsx(SelectItem, { value: "7d", children: "Last 7 days" }), _jsx(SelectItem, { value: "30d", children: "Last 30 days" }), _jsx(SelectItem, { value: "90d", children: "Last 90 days" })] })] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: metrics.map((metric, index) => (_jsx(Card, { children: _jsxs(CardContent, { className: "p-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "text-sm text-muted-foreground", children: metric.title }), _jsxs("div", { className: "flex items-center gap-1", children: [metric.trend === 'up' ? (_jsx(ArrowUp, { className: "h-3 w-3 text-green-500" })) : (_jsx(ArrowDown, { className: "h-3 w-3 text-red-500" })), _jsx("span", { className: `text-xs ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`, children: metric.change })] })] }), _jsx("p", { className: "text-2xl font-bold", children: metric.value })] }) }, index))) }), _jsxs(Tabs, { defaultValue: "performance", className: "w-full", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "performance", children: "Performance" }), _jsx(TabsTrigger, { value: "financial", children: "Financial" }), _jsx(TabsTrigger, { value: "operational", children: "Operational" })] }), _jsx(TabsContent, { value: "performance", className: "space-y-4", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Fleet Performance Trends" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "h-64 flex items-center justify-center text-muted-foreground", children: ["Interactive Performance Chart", _jsx("br", {}), _jsx("small", { children: "(Chart would be rendered here with real data)" })] }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Route Efficiency Analysis" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: "NY-Boston Express" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Progress, { value: 94, className: "w-20" }), _jsx("span", { className: "text-sm font-medium", children: "94%" })] })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: "Chicago-Miami Air" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Progress, { value: 97, className: "w-20" }), _jsx("span", { className: "text-sm font-medium", children: "97%" })] })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: "LA-Seattle Route" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Progress, { value: 89, className: "w-20" }), _jsx("span", { className: "text-sm font-medium", children: "89%" })] })] })] }) })] })] }) }), _jsx(TabsContent, { value: "financial", className: "space-y-4", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Revenue Analytics" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-3 gap-4", children: [_jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-2xl font-bold text-green-600", children: "$127K" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Total Revenue" })] }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-2xl font-bold text-blue-600", children: "$89K" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Net Profit" })] }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-2xl font-bold text-purple-600", children: "24.5%" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Profit Margin" })] })] }) })] }) }), _jsx(TabsContent, { value: "operational", className: "space-y-4", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Operational Metrics" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Vehicle Status" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Active" }), _jsx("span", { className: "text-green-600 font-medium", children: "247" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Maintenance" }), _jsx("span", { className: "text-orange-600 font-medium", children: "15" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Out of Service" }), _jsx("span", { className: "text-red-600 font-medium", children: "3" })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Driver Status" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "On Duty" }), _jsx("span", { className: "text-green-600 font-medium", children: "156" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Off Duty" }), _jsx("span", { className: "text-gray-600 font-medium", children: "89" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "On Break" }), _jsx("span", { className: "text-yellow-600 font-medium", children: "12" })] })] })] })] }) })] }) })] }), _jsxs("div", { className: "flex justify-between", children: [_jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", children: [_jsx(Download, { className: "h-4 w-4 mr-1" }), "Export PDF"] }), _jsxs(Button, { variant: "outline", children: [_jsx(Download, { className: "h-4 w-4 mr-1" }), "Export CSV"] })] }), _jsx(Button, { variant: "outline", onClick: onClose, children: "Close" })] })] })] }) }));
}
export function AlertsModal({ isOpen, onClose }) {
    const alerts = [
        {
            id: 'ALT001',
            type: 'critical',
            title: 'Vehicle Breakdown - TRK-105',
            description: 'Vehicle TRK-105 has reported engine failure on I-95. Driver is safe, requesting immediate assistance.',
            time: '5 minutes ago',
            status: 'unresolved',
            priority: 'critical'
        },
        {
            id: 'ALT002',
            type: 'warning',
            title: 'Maintenance Due - Multiple Vehicles',
            description: '5 vehicles are due for scheduled maintenance within the next 48 hours.',
            time: '1 hour ago',
            status: 'acknowledged',
            priority: 'high'
        },
        {
            id: 'ALT003',
            type: 'info',
            title: 'Route Optimization Available',
            description: 'NY-Boston route can be optimized to save 22 minutes and $200 in fuel costs.',
            time: '2 hours ago',
            status: 'unresolved',
            priority: 'medium'
        },
        {
            id: 'ALT004',
            type: 'warning',
            title: 'Weather Alert - Chicago Route',
            description: 'Severe weather conditions reported on Chicago-Milwaukee route. Consider delays or rerouting.',
            time: '3 hours ago',
            status: 'resolved',
            priority: 'high'
        }
    ];
    const getAlertIcon = (type) => {
        switch (type) {
            case 'critical': return _jsx(AlertCircle, { className: "h-5 w-5 text-red-500" });
            case 'warning': return _jsx(Clock, { className: "h-5 w-5 text-orange-500" });
            case 'info': return _jsx(CheckCircle, { className: "h-5 w-5 text-blue-500" });
            default: return _jsx(AlertCircle, { className: "h-5 w-5 text-gray-500" });
        }
    };
    const getAlertColor = (priority) => {
        switch (priority) {
            case 'critical': return 'bg-red-50 border-red-200 dark:bg-red-950/20';
            case 'high': return 'bg-orange-50 border-orange-200 dark:bg-orange-950/20';
            case 'medium': return 'bg-blue-50 border-blue-200 dark:bg-blue-950/20';
            case 'low': return 'bg-green-50 border-green-200 dark:bg-green-950/20';
            default: return 'bg-gray-50 border-gray-200 dark:bg-gray-950/20';
        }
    };
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "max-w-4xl max-h-[90vh] overflow-y-auto", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { className: "flex items-center gap-3", children: [_jsx(AlertCircle, { className: "h-6 w-6 text-red-600" }), "System Alerts & Notifications"] }) }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-4 gap-4", children: [_jsx(Card, { className: "border-red-200 bg-red-50 dark:bg-red-950/20", children: _jsxs(CardContent, { className: "p-4 text-center", children: [_jsx("p", { className: "text-2xl font-bold text-red-600", children: "1" }), _jsx("p", { className: "text-sm text-red-700", children: "Critical" })] }) }), _jsx(Card, { className: "border-orange-200 bg-orange-50 dark:bg-orange-950/20", children: _jsxs(CardContent, { className: "p-4 text-center", children: [_jsx("p", { className: "text-2xl font-bold text-orange-600", children: "2" }), _jsx("p", { className: "text-sm text-orange-700", children: "High Priority" })] }) }), _jsx(Card, { className: "border-blue-200 bg-blue-50 dark:bg-blue-950/20", children: _jsxs(CardContent, { className: "p-4 text-center", children: [_jsx("p", { className: "text-2xl font-bold text-blue-600", children: "1" }), _jsx("p", { className: "text-sm text-blue-700", children: "Medium Priority" })] }) }), _jsx(Card, { className: "border-green-200 bg-green-50 dark:bg-green-950/20", children: _jsxs(CardContent, { className: "p-4 text-center", children: [_jsx("p", { className: "text-2xl font-bold text-green-600", children: "3" }), _jsx("p", { className: "text-sm text-green-700", children: "Resolved Today" })] }) })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-semibold", children: "Active Alerts" }), alerts.map((alert) => (_jsx(Card, { className: `${getAlertColor(alert.priority)} border`, children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-start gap-4", children: [getAlertIcon(alert.type), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("h4", { className: "font-semibold text-foreground", children: alert.title }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Badge, { className: alert.priority === 'critical' ? 'bg-red-100 text-red-800' :
                                                                                alert.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                                                                                    alert.priority === 'medium' ? 'bg-blue-100 text-blue-800' :
                                                                                        'bg-green-100 text-green-800', children: alert.priority }), _jsx(Badge, { variant: alert.status === 'resolved' ? 'secondary' : 'outline', className: alert.status === 'resolved' ? 'bg-green-100 text-green-800' : '', children: alert.status })] })] }), _jsx("p", { className: "text-sm text-muted-foreground mb-3", children: alert.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-xs text-muted-foreground", children: alert.time }), _jsxs("div", { className: "flex gap-2", children: [alert.status === 'unresolved' && (_jsxs(_Fragment, { children: [_jsx(Button, { size: "sm", variant: "outline", children: "Acknowledge" }), _jsx(Button, { size: "sm", children: "Resolve" })] })), _jsx(Button, { size: "sm", variant: "outline", children: "View Details" })] })] })] })] }) }) }, alert.id)))] })] })] }) }));
}
export function GenerateReportModal({ isOpen, onClose }) {
    const [reportType, setReportType] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            // Simulate download
            const link = document.createElement('a');
            link.href = '#';
            link.download = `${reportType}-report-${new Date().toISOString().split('T')[0]}.pdf`;
            link.click();
        }, 3000);
    };
    const reportTypes = [
        { id: 'revenue', name: 'Revenue Summary', description: 'Financial performance and revenue analytics' },
        { id: 'fleet', name: 'Fleet Performance', description: 'Vehicle utilization and performance metrics' },
        { id: 'driver', name: 'Driver Performance', description: 'Driver statistics and performance analysis' },
        { id: 'routes', name: 'Route Analysis', description: 'Route efficiency and optimization opportunities' },
        { id: 'maintenance', name: 'Maintenance Report', description: 'Vehicle maintenance costs and schedules' },
        { id: 'customer', name: 'Customer Analytics', description: 'Customer satisfaction and service metrics' }
    ];
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "max-w-2xl", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { className: "flex items-center gap-3", children: [_jsx(FileText, { className: "h-6 w-6 text-green-600" }), "Generate Custom Report"] }) }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Select Report Type" }), _jsx("div", { className: "grid grid-cols-1 gap-3", children: reportTypes.map((type) => (_jsx(Card, { className: `cursor-pointer transition-all hover:shadow-md ${reportType === type.id ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950/20' : ''}`, onClick: () => setReportType(type.id), children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium", children: type.name }), _jsx("p", { className: "text-sm text-muted-foreground", children: type.description })] }), _jsx("div", { className: `w-4 h-4 rounded-full border-2 ${reportType === type.id ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}` })] }) }) }, type.id))) })] }), reportType && (_jsx(Card, { className: "bg-muted/50", children: _jsxs(CardContent, { className: "p-4", children: [_jsx("h4", { className: "font-medium mb-2", children: "Report Configuration" }), _jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [_jsxs("div", { children: [_jsx("span", { className: "text-muted-foreground", children: "Format:" }), _jsx("span", { className: "ml-2 font-medium", children: "PDF" })] }), _jsxs("div", { children: [_jsx("span", { className: "text-muted-foreground", children: "Date Range:" }), _jsx("span", { className: "ml-2 font-medium", children: "Last 30 days" })] }), _jsxs("div", { children: [_jsx("span", { className: "text-muted-foreground", children: "Include Charts:" }), _jsx("span", { className: "ml-2 font-medium", children: "Yes" })] }), _jsxs("div", { children: [_jsx("span", { className: "text-muted-foreground", children: "Estimated Size:" }), _jsx("span", { className: "ml-2 font-medium", children: "2.4 MB" })] })] })] }) })), _jsxs("div", { className: "flex justify-between", children: [_jsx(Button, { variant: "outline", onClick: onClose, children: "Cancel" }), _jsx(Button, { onClick: handleGenerate, disabled: !reportType || isGenerating, className: "bg-green-600 hover:bg-green-700", children: isGenerating ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" }), "Generating..."] })) : (_jsxs(_Fragment, { children: [_jsx(FileText, { className: "h-4 w-4 mr-1" }), "Generate Report"] })) })] })] })] }) }));
}
//# sourceMappingURL=QuickActionModals.js.map