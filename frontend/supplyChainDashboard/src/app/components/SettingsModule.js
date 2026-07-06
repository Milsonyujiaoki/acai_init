import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Settings, Users, Shield, Bell, Database, Key, Globe, Palette, Download, Upload, Save, Plus, Edit, Trash2, Eye, EyeOff, CheckCircle, XCircle, AlertTriangle, Smartphone, Mail, Clock } from 'lucide-react';
const usersData = [
    {
        id: 'USR001',
        name: 'John Administrator',
        email: 'john@company.com',
        role: 'Super Admin',
        department: 'IT',
        status: 'Active',
        lastLogin: '2024-01-12 09:30',
        permissions: ['Full Access'],
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MzQyMTA0Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        id: 'USR002',
        name: 'Sarah Manager',
        email: 'sarah@company.com',
        role: 'Operations Manager',
        department: 'Operations',
        status: 'Active',
        lastLogin: '2024-01-12 08:15',
        permissions: ['Routes', 'Vehicles', 'Drivers', 'Reports'],
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDB8fHx8MTczNDIxMDQ2N3ww&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        id: 'USR003',
        name: 'Mike Supervisor',
        email: 'mike@company.com',
        role: 'Fleet Supervisor',
        department: 'Fleet',
        status: 'Active',
        lastLogin: '2024-01-11 16:45',
        permissions: ['Vehicles', 'Drivers', 'Maintenance'],
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MzQyMTA1MDF8MA&ixlib=rb-4.0.3&q=80&w=1080'
    },
    {
        id: 'USR004',
        name: 'Lisa Analyst',
        email: 'lisa@company.com',
        role: 'Data Analyst',
        department: 'Finance',
        status: 'Inactive',
        lastLogin: '2024-01-08 14:22',
        permissions: ['Reports', 'Analytics'],
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDB8fHx8MTczNDIxMDUzNHww&ixlib=rb-4.0.3&q=80&w=1080'
    }
];
const systemSettings = {
    general: {
        companyName: 'TranSphere Logistics',
        timezone: 'America/New_York',
        language: 'English',
        dateFormat: 'MM/DD/YYYY',
        currency: 'USD'
    },
    notifications: {
        emailAlerts: true,
        smsAlerts: false,
        pushNotifications: true,
        maintenanceReminders: true,
        deliveryUpdates: true,
        lowFuelAlerts: true
    },
    security: {
        twoFactorAuth: true,
        sessionTimeout: 480,
        passwordComplexity: 'High',
        loginAttempts: 3,
        dataEncryption: true
    },
    integrations: {
        gpsTracking: 'Enabled',
        paymentGateway: 'Stripe',
        weatherService: 'OpenWeather',
        mapsProvider: 'Google Maps'
    }
};
const auditLogs = [
    {
        id: 'AUD001',
        user: 'John Administrator',
        action: 'User Created',
        target: 'Mike Supervisor',
        timestamp: '2024-01-12 10:30:15',
        ipAddress: '192.168.1.101',
        status: 'Success'
    },
    {
        id: 'AUD002',
        user: 'Sarah Manager',
        action: 'Route Updated',
        target: 'NY-Boston Express',
        timestamp: '2024-01-12 09:15:42',
        ipAddress: '192.168.1.105',
        status: 'Success'
    },
    {
        id: 'AUD003',
        user: 'System',
        action: 'Backup Created',
        target: 'Database Backup',
        timestamp: '2024-01-12 02:00:00',
        ipAddress: 'System',
        status: 'Success'
    },
    {
        id: 'AUD004',
        user: 'Lisa Analyst',
        action: 'Report Generated',
        target: 'Revenue Summary',
        timestamp: '2024-01-11 16:22:30',
        ipAddress: '192.168.1.108',
        status: 'Success'
    }
];
const getStatusColor = (status) => {
    switch (status) {
        case 'Active': return 'bg-green-100 text-green-800';
        case 'Inactive': return 'bg-gray-100 text-gray-800';
        case 'Suspended': return 'bg-red-100 text-red-800';
        case 'Success': return 'bg-green-100 text-green-800';
        case 'Failed': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};
const getRoleColor = (role) => {
    switch (role) {
        case 'Super Admin': return 'bg-purple-100 text-purple-800';
        case 'Operations Manager': return 'bg-blue-100 text-blue-800';
        case 'Fleet Supervisor': return 'bg-green-100 text-green-800';
        case 'Data Analyst': return 'bg-orange-100 text-orange-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};
export function SettingsModule() {
    const [activeTab, setActiveTab] = useState('general');
    const [selectedUser, setSelectedUser] = useState(usersData[0]);
    const [showApiKey, setShowApiKey] = useState(false);
    return (_jsxs("div", { className: "p-6 space-y-6 bg-gray-50 min-h-screen", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Settings, { className: "h-6 w-6 text-gray-600" }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: "System Settings" }), _jsx("p", { className: "text-gray-600", children: "Configure system preferences, manage users, and monitor security" })] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", className: "flex items-center gap-2", children: [_jsx(Download, { className: "h-4 w-4" }), "Export Config"] }), _jsxs(Button, { className: "bg-gray-600 hover:bg-gray-700 flex items-center gap-2", children: [_jsx(Save, { className: "h-4 w-4" }), "Save Changes"] })] })] }), _jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-6", children: [_jsx(TabsTrigger, { value: "general", children: "General" }), _jsx(TabsTrigger, { value: "users", children: "Users" }), _jsx(TabsTrigger, { value: "security", children: "Security" }), _jsx(TabsTrigger, { value: "notifications", children: "Notifications" }), _jsx(TabsTrigger, { value: "integrations", children: "Integrations" }), _jsx(TabsTrigger, { value: "audit", children: "Audit Logs" })] }), _jsx(TabsContent, { value: "general", className: "mt-6", children: _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-6", children: [_jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "h-5 w-5" }), "System Configuration"] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "companyName", children: "Company Name" }), _jsx(Input, { id: "companyName", value: systemSettings.general.companyName })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "timezone", children: "Timezone" }), _jsxs(Select, { value: systemSettings.general.timezone, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "America/New_York", children: "Eastern Time (ET)" }), _jsx(SelectItem, { value: "America/Chicago", children: "Central Time (CT)" }), _jsx(SelectItem, { value: "America/Denver", children: "Mountain Time (MT)" }), _jsx(SelectItem, { value: "America/Los_Angeles", children: "Pacific Time (PT)" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "language", children: "System Language" }), _jsxs(Select, { value: systemSettings.general.language, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "English", children: "English" }), _jsx(SelectItem, { value: "Spanish", children: "Spanish" }), _jsx(SelectItem, { value: "French", children: "French" })] })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "dateFormat", children: "Date Format" }), _jsxs(Select, { value: systemSettings.general.dateFormat, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "MM/DD/YYYY", children: "MM/DD/YYYY" }), _jsx(SelectItem, { value: "DD/MM/YYYY", children: "DD/MM/YYYY" }), _jsx(SelectItem, { value: "YYYY-MM-DD", children: "YYYY-MM-DD" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "currency", children: "Currency" }), _jsxs(Select, { value: systemSettings.general.currency, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "USD", children: "USD ($)" }), _jsx(SelectItem, { value: "EUR", children: "EUR (\u20AC)" }), _jsx(SelectItem, { value: "GBP", children: "GBP (\u00A3)" })] })] })] })] })] })] }), _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Palette, { className: "h-5 w-5" }), "Appearance & Branding"] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Theme Selection" }), _jsxs("div", { className: "grid grid-cols-2 gap-2", children: [_jsxs(Button, { variant: "outline", className: "justify-start", children: [_jsx("div", { className: "w-4 h-4 bg-white border rounded mr-2" }), "Light Mode"] }), _jsxs(Button, { variant: "outline", className: "justify-start", children: [_jsx("div", { className: "w-4 h-4 bg-gray-800 rounded mr-2" }), "Dark Mode"] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Company Logo" }), _jsxs("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center", children: [_jsx(Upload, { className: "h-8 w-8 text-gray-400 mx-auto mb-2" }), _jsx("p", { className: "text-sm text-gray-600", children: "Upload company logo" }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: "PNG, JPG up to 2MB" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Color Scheme" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("div", { className: "w-8 h-8 bg-blue-500 rounded border-2 border-blue-700" }), _jsx("div", { className: "w-8 h-8 bg-green-500 rounded" }), _jsx("div", { className: "w-8 h-8 bg-purple-500 rounded" }), _jsx("div", { className: "w-8 h-8 bg-orange-500 rounded" })] })] })] })] }), _jsxs(Card, { className: "border-0 shadow-sm xl:col-span-2", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Database, { className: "h-5 w-5" }), "System Information"] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: "System Version" }), _jsx("p", { className: "font-semibold", children: "v2.1.3" })] }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: "Database Size" }), _jsx("p", { className: "font-semibold", children: "847 MB" })] }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: "Active Users" }), _jsx("p", { className: "font-semibold", children: "156" })] }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: "Last Backup" }), _jsx("p", { className: "font-semibold", children: "2024-01-12" })] })] }) })] })] }) }), _jsx(TabsContent, { value: "users", className: "mt-6", children: _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [_jsx("div", { className: "xl:col-span-2", children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Users, { className: "h-5 w-5" }), "User Management"] }), _jsxs(Button, { size: "sm", className: "bg-gray-600 hover:bg-gray-700", children: [_jsx(Plus, { className: "h-4 w-4 mr-1" }), "Add User"] })] }) }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "User" }), _jsx(TableHead, { children: "Role" }), _jsx(TableHead, { children: "Department" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Last Login" }), _jsx(TableHead, { children: "Actions" })] }) }), _jsx(TableBody, { children: usersData.map((user) => (_jsxs(TableRow, { className: `cursor-pointer hover:bg-gray-50 ${selectedUser.id === user.id ? 'bg-blue-50' : ''}`, onClick: () => setSelectedUser(user), children: [_jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs(Avatar, { className: "h-8 w-8", children: [_jsx(AvatarImage, { src: user.avatar }), _jsx(AvatarFallback, { children: user.name.split(' ').map(n => n[0]).join('') })] }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: user.name }), _jsx("p", { className: "text-sm text-gray-500", children: user.email })] })] }) }), _jsx(TableCell, { children: _jsx(Badge, { className: getRoleColor(user.role), children: user.role }) }), _jsx(TableCell, { children: user.department }), _jsx(TableCell, { children: _jsx(Badge, { className: getStatusColor(user.status), children: user.status }) }), _jsx(TableCell, { className: "text-sm", children: user.lastLogin }), _jsx(TableCell, { children: _jsxs("div", { className: "flex gap-1", children: [_jsx(Button, { size: "sm", variant: "outline", children: _jsx(Edit, { className: "h-3 w-3" }) }), _jsx(Button, { size: "sm", variant: "outline", children: _jsx(Trash2, { className: "h-3 w-3" }) })] }) })] }, user.id))) })] }) })] }) }), _jsx("div", { children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "User Details" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "text-center", children: [_jsxs(Avatar, { className: "h-16 w-16 mx-auto mb-4", children: [_jsx(AvatarImage, { src: selectedUser.avatar }), _jsx(AvatarFallback, { className: "text-lg", children: selectedUser.name.split(' ').map(n => n[0]).join('') })] }), _jsx("h3", { className: "font-semibold", children: selectedUser.name }), _jsx("p", { className: "text-sm text-gray-600", children: selectedUser.email }), _jsx(Badge, { className: getRoleColor(selectedUser.role), style: { marginTop: '8px' }, children: selectedUser.role })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { className: "text-sm font-medium", children: "Department" }), _jsx("p", { className: "text-sm text-gray-700", children: selectedUser.department })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-sm font-medium", children: "Status" }), _jsx("div", { className: "flex items-center gap-2 mt-1", children: _jsx(Badge, { className: getStatusColor(selectedUser.status), children: selectedUser.status }) })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-sm font-medium", children: "Last Login" }), _jsx("p", { className: "text-sm text-gray-700", children: selectedUser.lastLogin })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-sm font-medium", children: "Permissions" }), _jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: selectedUser.permissions.map((permission, index) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: permission }, index))) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Button, { className: "w-full", size: "sm", children: [_jsx(Edit, { className: "h-4 w-4 mr-1" }), "Edit User"] }), _jsx(Button, { variant: "outline", className: "w-full", size: "sm", children: "Reset Password" })] })] }) })] }) })] }) }), _jsx(TabsContent, { value: "security", className: "mt-6", children: _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-6", children: [_jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Shield, { className: "h-5 w-5" }), "Security Settings"] }) }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(Label, { children: "Two-Factor Authentication" }), _jsx("p", { className: "text-sm text-gray-600", children: "Require 2FA for all users" })] }), _jsx(Switch, { checked: systemSettings.security.twoFactorAuth })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Session Timeout (minutes)" }), _jsx(Input, { type: "number", value: systemSettings.security.sessionTimeout })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Password Complexity" }), _jsxs(Select, { value: systemSettings.security.passwordComplexity, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "Low", children: "Low" }), _jsx(SelectItem, { value: "Medium", children: "Medium" }), _jsx(SelectItem, { value: "High", children: "High" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Max Login Attempts" }), _jsx(Input, { type: "number", value: systemSettings.security.loginAttempts })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(Label, { children: "Data Encryption" }), _jsx("p", { className: "text-sm text-gray-600", children: "Encrypt sensitive data at rest" })] }), _jsx(Switch, { checked: systemSettings.security.dataEncryption })] })] })] }), _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Key, { className: "h-5 w-5" }), "API Configuration"] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "API Key" }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { type: showApiKey ? "text" : "password", value: "sk_live_abcd1234567890...", readOnly: true }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => setShowApiKey(!showApiKey), children: showApiKey ? _jsx(EyeOff, { className: "h-4 w-4" }) : _jsx(Eye, { className: "h-4 w-4" }) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Webhook URL" }), _jsx(Input, { value: "https://api.company.com/webhooks" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Rate Limiting" }), _jsxs(Select, { defaultValue: "1000", children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "100", children: "100 requests/hour" }), _jsx(SelectItem, { value: "1000", children: "1,000 requests/hour" }), _jsx(SelectItem, { value: "10000", children: "10,000 requests/hour" }), _jsx(SelectItem, { value: "unlimited", children: "Unlimited" })] })] })] }), _jsx("div", { className: "pt-4 border-t", children: _jsx(Button, { className: "w-full", variant: "outline", children: "Generate New API Key" }) })] })] }), _jsxs(Card, { className: "border-0 shadow-sm xl:col-span-2", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Security Status" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "bg-green-50 p-4 rounded-lg border border-green-200", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(CheckCircle, { className: "h-5 w-5 text-green-600" }), _jsx("span", { className: "font-medium text-green-800", children: "SSL Certificate" })] }), _jsx("p", { className: "text-sm text-green-700", children: "Valid until Dec 2024" })] }), _jsxs("div", { className: "bg-green-50 p-4 rounded-lg border border-green-200", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(CheckCircle, { className: "h-5 w-5 text-green-600" }), _jsx("span", { className: "font-medium text-green-800", children: "Firewall Status" })] }), _jsx("p", { className: "text-sm text-green-700", children: "Active and configured" })] }), _jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg border border-yellow-200", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(AlertTriangle, { className: "h-5 w-5 text-yellow-600" }), _jsx("span", { className: "font-medium text-yellow-800", children: "Security Scan" })] }), _jsx("p", { className: "text-sm text-yellow-700", children: "Last scan: 7 days ago" })] })] }) })] })] }) }), _jsx(TabsContent, { value: "notifications", className: "mt-6", children: _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-6", children: [_jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Bell, { className: "h-5 w-5" }), "Notification Preferences"] }) }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Mail, { className: "h-4 w-4 text-gray-500" }), _jsxs("div", { children: [_jsx(Label, { children: "Email Alerts" }), _jsx("p", { className: "text-sm text-gray-600", children: "Receive notifications via email" })] })] }), _jsx(Switch, { checked: systemSettings.notifications.emailAlerts })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Smartphone, { className: "h-4 w-4 text-gray-500" }), _jsxs("div", { children: [_jsx(Label, { children: "SMS Alerts" }), _jsx("p", { className: "text-sm text-gray-600", children: "Receive critical alerts via SMS" })] })] }), _jsx(Switch, { checked: systemSettings.notifications.smsAlerts })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Bell, { className: "h-4 w-4 text-gray-500" }), _jsxs("div", { children: [_jsx(Label, { children: "Push Notifications" }), _jsx("p", { className: "text-sm text-gray-600", children: "Browser push notifications" })] })] }), _jsx(Switch, { checked: systemSettings.notifications.pushNotifications })] })] })] }), _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Alert Types" }) }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(Label, { children: "Maintenance Reminders" }), _jsx("p", { className: "text-sm text-gray-600", children: "Vehicle maintenance schedules" })] }), _jsx(Switch, { checked: systemSettings.notifications.maintenanceReminders })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(Label, { children: "Delivery Updates" }), _jsx("p", { className: "text-sm text-gray-600", children: "Real-time delivery status" })] }), _jsx(Switch, { checked: systemSettings.notifications.deliveryUpdates })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(Label, { children: "Low Fuel Alerts" }), _jsx("p", { className: "text-sm text-gray-600", children: "Vehicle fuel level warnings" })] }), _jsx(Switch, { checked: systemSettings.notifications.lowFuelAlerts })] })] })] }), _jsxs(Card, { className: "border-0 shadow-sm xl:col-span-2", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Notification Templates" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Delivery Confirmation" }), _jsx(Textarea, { placeholder: "Your package has been delivered successfully...", className: "h-20" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Maintenance Alert" }), _jsx(Textarea, { placeholder: "Vehicle maintenance is due in 3 days...", className: "h-20" })] })] }), _jsx(Button, { children: "Save Templates" })] }) })] })] }) }), _jsx(TabsContent, { value: "integrations", className: "mt-6", children: _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-6", children: [_jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Active Integrations" }) }), _jsx(CardContent, { className: "space-y-4", children: Object.entries(systemSettings.integrations).map(([integration, status], index) => (_jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium capitalize", children: integration.replace(/([A-Z])/g, ' $1') }), _jsxs("p", { className: "text-sm text-gray-600", children: ["Status: ", status] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Badge, { className: status === 'Enabled' ? getStatusColor('Active') : getStatusColor('Inactive'), children: status }), _jsx(Button, { size: "sm", variant: "outline", children: "Configure" })] })] }, index))) })] }), _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Available Integrations" }) }), _jsx(CardContent, { className: "space-y-4", children: [
                                                { name: 'QuickBooks', type: 'Accounting', description: 'Financial data sync' },
                                                { name: 'Salesforce', type: 'CRM', description: 'Customer management' },
                                                { name: 'Slack', type: 'Communication', description: 'Team notifications' },
                                                { name: 'Microsoft Teams', type: 'Communication', description: 'Video conferencing' }
                                            ].map((integration, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg border-dashed", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: integration.name }), _jsx("p", { className: "text-sm text-gray-600", children: integration.description }), _jsx(Badge, { variant: "outline", className: "text-xs mt-1", children: integration.type })] }), _jsx(Button, { size: "sm", children: "Connect" })] }, index))) })] })] }) }), _jsx(TabsContent, { value: "audit", className: "mt-6", children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "h-5 w-5" }), "Audit Logs"] }) }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Timestamp" }), _jsx(TableHead, { children: "User" }), _jsx(TableHead, { children: "Action" }), _jsx(TableHead, { children: "Target" }), _jsx(TableHead, { children: "IP Address" }), _jsx(TableHead, { children: "Status" })] }) }), _jsx(TableBody, { children: auditLogs.map((log) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-mono text-sm", children: log.timestamp }), _jsx(TableCell, { children: log.user }), _jsx(TableCell, { children: log.action }), _jsx(TableCell, { children: log.target }), _jsx(TableCell, { className: "font-mono text-sm", children: log.ipAddress }), _jsx(TableCell, { children: _jsx(Badge, { className: getStatusColor(log.status), children: log.status }) })] }, log.id))) })] }) })] }) })] })] }));
}
//# sourceMappingURL=SettingsModule.js.map