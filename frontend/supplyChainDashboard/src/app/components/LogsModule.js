import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { FileText, Search, Filter, Download, Eye, AlertTriangle, CheckCircle, Info, Clock, User, Truck, Package, Route, DollarSign, Settings, Shield, RefreshCw, Calendar } from 'lucide-react';
const activityLogs = [
    {
        id: 'LOG001',
        timestamp: '2024-01-12 10:30:15',
        user: {
            name: 'John Administrator',
            email: 'john@company.com',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MzQyMTA0Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080'
        },
        action: 'Created',
        category: 'User Management',
        target: 'New driver account for Mike Supervisor',
        details: 'Added new driver with full credentials and vehicle assignments',
        ipAddress: '192.168.1.101',
        status: 'Success',
        severity: 'info'
    },
    {
        id: 'LOG002',
        timestamp: '2024-01-12 10:15:42',
        user: {
            name: 'Sarah Manager',
            email: 'sarah@company.com',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDB8fHx8MTczNDIxMDQ2N3ww&ixlib=rb-4.0.3&q=80&w=1080'
        },
        action: 'Updated',
        category: 'Route Management',
        target: 'NY-Boston Express route optimization',
        details: 'Modified route parameters to improve efficiency by 8%',
        ipAddress: '192.168.1.105',
        status: 'Success',
        severity: 'info'
    },
    {
        id: 'LOG003',
        timestamp: '2024-01-12 09:45:30',
        user: {
            name: 'System',
            email: 'system@company.com',
            avatar: null
        },
        action: 'Alert Generated',
        category: 'Vehicle Maintenance',
        target: 'TRK-001 maintenance reminder',
        details: 'Vehicle TRK-001 scheduled maintenance due in 2 days',
        ipAddress: 'System',
        status: 'Warning',
        severity: 'warning'
    },
    {
        id: 'LOG004',
        timestamp: '2024-01-12 09:30:18',
        user: {
            name: 'Michael Johnson',
            email: 'mjohnson@company.com',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MzQyMTA1MDF8MA&ixlib=rb-4.0.3&q=80&w=1080'
        },
        action: 'Completed',
        category: 'Trip Management',
        target: 'Trip TR-2024-089 delivery',
        details: 'Successfully delivered shipment to Boston - Customer signature obtained',
        ipAddress: '192.168.1.110',
        status: 'Success',
        severity: 'success'
    },
    {
        id: 'LOG005',
        timestamp: '2024-01-12 08:45:12',
        user: {
            name: 'System',
            email: 'system@company.com',
            avatar: null
        },
        action: 'Failed Login Attempt',
        category: 'Security',
        target: 'Multiple failed login attempts detected',
        details: 'User account lisa@company.com exceeded maximum login attempts',
        ipAddress: '192.168.1.200',
        status: 'Error',
        severity: 'error'
    },
    {
        id: 'LOG006',
        timestamp: '2024-01-12 08:30:45',
        user: {
            name: 'Carlos Silva',
            email: 'carlos@company.com',
            avatar: 'https://images.unsplash.com/photo-1718434137166-b3cb7d944b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcml2ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTU1ODMxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        action: 'Started',
        category: 'Trip Management',
        target: 'Trip TR-2024-095 departure',
        details: 'Departed São Paulo with destination Rio de Janeiro - ETA 4h 15m',
        ipAddress: '192.168.1.115',
        status: 'Success',
        severity: 'info'
    }
];
const systemEvents = [
    {
        id: 'SYS001',
        timestamp: '2024-01-12 02:00:00',
        event: 'Database Backup',
        status: 'Completed',
        duration: '00:45:30',
        details: 'Full system backup completed successfully - 2.4GB archived'
    },
    {
        id: 'SYS002',
        timestamp: '2024-01-12 01:30:00',
        event: 'Route Optimization Job',
        status: 'Completed',
        duration: '00:15:22',
        details: 'Analyzed 24 routes - 3 optimization opportunities identified'
    },
    {
        id: 'SYS003',
        timestamp: '2024-01-12 00:45:00',
        event: 'Fuel Price Update',
        status: 'Completed',
        duration: '00:02:15',
        details: 'Updated fuel prices from 15 regional sources'
    },
    {
        id: 'SYS004',
        timestamp: '2024-01-11 23:30:00',
        event: 'Vehicle Telemetry Sync',
        status: 'Completed',
        duration: '00:08:45',
        details: 'Synchronized data from 247 active vehicles'
    }
];
const getStatusColor = (status) => {
    switch (status) {
        case 'Success': return 'bg-green-100 text-green-800 border-green-200';
        case 'Warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'Error': return 'bg-red-100 text-red-800 border-red-200';
        case 'Info': return 'bg-blue-100 text-blue-800 border-blue-200';
        case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
        default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
};
const getSeverityIcon = (severity) => {
    switch (severity) {
        case 'error': return _jsx(AlertTriangle, { className: "h-4 w-4 text-red-500" });
        case 'warning': return _jsx(Clock, { className: "h-4 w-4 text-yellow-500" });
        case 'success': return _jsx(CheckCircle, { className: "h-4 w-4 text-green-500" });
        case 'info': return _jsx(Info, { className: "h-4 w-4 text-blue-500" });
        default: return _jsx(Info, { className: "h-4 w-4 text-gray-500" });
    }
};
const getCategoryIcon = (category) => {
    switch (category) {
        case 'User Management': return _jsx(User, { className: "h-4 w-4 text-purple-500" });
        case 'Vehicle Maintenance': return _jsx(Truck, { className: "h-4 w-4 text-orange-500" });
        case 'Trip Management': return _jsx(Package, { className: "h-4 w-4 text-blue-500" });
        case 'Route Management': return _jsx(Route, { className: "h-4 w-4 text-green-500" });
        case 'Financial': return _jsx(DollarSign, { className: "h-4 w-4 text-emerald-500" });
        case 'Security': return _jsx(Shield, { className: "h-4 w-4 text-red-500" });
        case 'System': return _jsx(Settings, { className: "h-4 w-4 text-gray-500" });
        default: return _jsx(FileText, { className: "h-4 w-4 text-gray-500" });
    }
};
export function LogsModule() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');
    const [selectedLog, setSelectedLog] = useState(null);
    const [autoRefresh, setAutoRefresh] = useState(true);
    useEffect(() => {
        if (autoRefresh) {
            const interval = setInterval(() => {
                // Simulate new log entries
                console.log('Refreshing logs...');
            }, 30000);
            return () => clearInterval(interval);
        }
    }, [autoRefresh]);
    const filteredLogs = activityLogs.filter(log => {
        const matchesSearch = log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.user.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'all' || log.category === filterCategory;
        const matchesStatus = filterStatus === 'all' || log.status === filterStatus;
        return matchesSearch && matchesCategory && matchesStatus;
    });
    const categories = [...new Set(activityLogs.map(log => log.category))];
    const statuses = [...new Set(activityLogs.map(log => log.status))];
    return (_jsxs("div", { className: "p-6 space-y-6 bg-background min-h-screen", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(FileText, { className: "h-6 w-6 text-blue-600" }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold text-foreground", children: "Activity Logs" }), _jsx("p", { className: "text-muted-foreground", children: "Monitor system activities and user actions" })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("div", { className: "flex items-center gap-2 bg-muted/50 rounded-lg p-2", children: [_jsx("div", { className: `h-2 w-2 rounded-full ${autoRefresh ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}` }), _jsx("span", { className: "text-sm text-muted-foreground", children: autoRefresh ? 'Auto-refresh ON' : 'Auto-refresh OFF' }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setAutoRefresh(!autoRefresh), className: "h-6 w-6 p-0", children: _jsx(RefreshCw, { className: "h-3 w-3" }) })] }), _jsxs(Button, { variant: "outline", className: "flex items-center gap-2", children: [_jsx(Download, { className: "h-4 w-4" }), "Export Logs"] })] })] }), _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [_jsx(Card, { className: "border-0 shadow-sm", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center", children: _jsx(FileText, { className: "h-5 w-5 text-blue-600" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-2xl font-semibold text-foreground", children: "1,247" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Total Events" })] })] }) }) }), _jsx(Card, { className: "border-0 shadow-sm", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center", children: _jsx(CheckCircle, { className: "h-5 w-5 text-green-600" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-2xl font-semibold text-foreground", children: "1,186" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Successful" })] })] }) }) }), _jsx(Card, { className: "border-0 shadow-sm", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center", children: _jsx(Clock, { className: "h-5 w-5 text-orange-600" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-2xl font-semibold text-foreground", children: "45" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Warnings" })] })] }) }) }), _jsx(Card, { className: "border-0 shadow-sm", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center", children: _jsx(AlertTriangle, { className: "h-5 w-5 text-red-600" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-2xl font-semibold text-foreground", children: "16" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Errors" })] })] }) }) })] }), _jsxs(Tabs, { defaultValue: "activity", className: "w-full", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "activity", children: "Activity Logs" }), _jsx(TabsTrigger, { value: "system", children: "System Events" }), _jsx(TabsTrigger, { value: "security", children: "Security Logs" })] }), _jsxs(TabsContent, { value: "activity", className: "mt-6", children: [_jsx(Card, { className: "mb-6 border-0 shadow-sm", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "relative flex-1 max-w-md", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }), _jsx(Input, { placeholder: "Search logs...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10" })] }), _jsxs(Select, { value: filterCategory, onValueChange: setFilterCategory, children: [_jsx(SelectTrigger, { className: "w-48", children: _jsx(SelectValue, { placeholder: "Filter by category" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Categories" }), categories.map(category => (_jsx(SelectItem, { value: category, children: category }, category)))] })] }), _jsxs(Select, { value: filterStatus, onValueChange: setFilterStatus, children: [_jsx(SelectTrigger, { className: "w-32", children: _jsx(SelectValue, { placeholder: "Status" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Status" }), statuses.map(status => (_jsx(SelectItem, { value: status, children: status }, status)))] })] })] }) }) }), _jsx(Card, { className: "border-0 shadow-sm", children: _jsx(CardContent, { className: "p-0", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Timestamp" }), _jsx(TableHead, { children: "User" }), _jsx(TableHead, { children: "Action" }), _jsx(TableHead, { children: "Category" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Details" }), _jsx(TableHead, { children: "Actions" })] }) }), _jsx(TableBody, { children: filteredLogs.map((log) => (_jsxs(TableRow, { className: "hover:bg-accent/50 cursor-pointer", children: [_jsx(TableCell, { className: "font-mono text-sm", children: new Date(log.timestamp).toLocaleString() }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-3", children: [log.user.avatar ? (_jsxs(Avatar, { className: "h-6 w-6", children: [_jsx(AvatarImage, { src: log.user.avatar }), _jsx(AvatarFallback, { children: log.user.name.split(' ').map(n => n[0]).join('') })] })) : (_jsx("div", { className: "h-6 w-6 bg-muted rounded-full flex items-center justify-center", children: _jsx(Settings, { className: "h-3 w-3 text-muted-foreground" }) })), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-sm", children: log.user.name }), _jsx("p", { className: "text-xs text-muted-foreground", children: log.ipAddress })] })] }) }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-2", children: [getSeverityIcon(log.severity), _jsx("span", { className: "font-medium", children: log.action })] }) }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-2", children: [getCategoryIcon(log.category), _jsx("span", { className: "text-sm", children: log.category })] }) }), _jsx(TableCell, { children: _jsx(Badge, { className: getStatusColor(log.status), children: log.status }) }), _jsxs(TableCell, { className: "max-w-xs", children: [_jsx("p", { className: "text-sm truncate", children: log.target }), _jsx("p", { className: "text-xs text-muted-foreground truncate", children: log.details })] }), _jsx(TableCell, { children: _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setSelectedLog(log), children: _jsx(Eye, { className: "h-4 w-4" }) }) })] }, log.id))) })] }) }) })] }), _jsx(TabsContent, { value: "system", className: "mt-6", children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "System Events" }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: systemEvents.map((event) => (_jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center", children: _jsx(Settings, { className: "h-5 w-5 text-blue-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium", children: event.event }), _jsx("p", { className: "text-sm text-muted-foreground", children: event.details }), _jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [new Date(event.timestamp).toLocaleString(), " \u2022 Duration: ", event.duration] })] })] }), _jsx(Badge, { className: getStatusColor(event.status), children: event.status })] }, event.id))) }) })] }) }), _jsx(TabsContent, { value: "security", className: "mt-6", children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Shield, { className: "h-5 w-5 text-red-600" }), "Security Events"] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: activityLogs.filter(log => log.category === 'Security').map((log) => (_jsxs("div", { className: "flex items-center justify-between p-4 border border-red-200 bg-red-50 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(AlertTriangle, { className: "h-8 w-8 text-red-600" }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-red-800", children: log.action }), _jsx("p", { className: "text-sm text-red-700", children: log.details }), _jsxs("p", { className: "text-xs text-red-600 mt-1", children: [new Date(log.timestamp).toLocaleString(), " \u2022 IP: ", log.ipAddress] })] })] }), _jsx(Badge, { className: "bg-red-100 text-red-800 border-red-200", children: "Security Alert" })] }, log.id))) }) })] }) })] })] }));
}
//# sourceMappingURL=LogsModule.js.map