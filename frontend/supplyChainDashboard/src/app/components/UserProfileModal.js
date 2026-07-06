import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { User, Mail, Phone, MapPin, Calendar, Shield, Settings, Edit, Save, Camera, Bell, Lock, Eye, Download, Upload } from 'lucide-react';
const userProfile = {
    id: 'USR001',
    name: 'John Administrator',
    email: 'john.admin@transphere.com',
    phone: '+1 (555) 123-4567',
    role: 'System Administrator',
    department: 'IT Operations',
    location: 'New York, NY',
    joinDate: '2022-03-15',
    lastLogin: '2024-01-12 09:30 AM',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MzQyMTA0Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080',
    permissions: [
        'Full System Access',
        'User Management',
        'Financial Reports',
        'Vehicle Fleet Control',
        'Route Optimization',
        'Data Export'
    ],
    preferences: {
        notifications: {
            email: true,
            sms: false,
            push: true,
            maintenance: true,
            trips: true,
            security: true
        },
        dashboard: {
            defaultView: 'overview',
            autoRefresh: true,
            theme: 'auto'
        }
    },
    recentActivity: [
        { action: 'Updated route optimization settings', time: '2 hours ago' },
        { action: 'Generated monthly revenue report', time: '1 day ago' },
        { action: 'Added new driver: Mike Supervisor', time: '2 days ago' },
        { action: 'Modified security settings', time: '3 days ago' }
    ]
};
export function UserProfileModal({ isOpen, onClose }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState(userProfile);
    const [isUploading, setIsUploading] = useState(false);
    const handleSave = () => {
        // Simulate save operation
        setTimeout(() => {
            setIsEditing(false);
            // Show success message
        }, 1000);
    };
    const handleAvatarUpload = () => {
        setIsUploading(true);
        // Simulate upload
        setTimeout(() => {
            setIsUploading(false);
            // Update avatar
        }, 2000);
    };
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "max-w-4xl max-h-[90vh] overflow-y-auto", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { className: "flex items-center gap-3", children: [_jsx(User, { className: "h-6 w-6 text-blue-600" }), "User Profile"] }) }), _jsxs("div", { className: "space-y-6", children: [_jsx(Card, { className: "border-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center gap-6", children: [_jsxs("div", { className: "relative", children: [_jsxs(Avatar, { className: "h-24 w-24", children: [_jsx(AvatarImage, { src: editedProfile.avatar }), _jsx(AvatarFallback, { className: "text-2xl", children: editedProfile.name.split(' ').map(n => n[0]).join('') })] }), isEditing && (_jsx(Button, { size: "sm", variant: "secondary", className: "absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0", onClick: handleAvatarUpload, disabled: isUploading, children: isUploading ? (_jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" })) : (_jsx(Camera, { className: "h-4 w-4" })) }))] }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("h2", { className: "text-2xl font-bold text-foreground", children: editedProfile.name }), _jsx("div", { className: "flex gap-2", children: isEditing ? (_jsxs(_Fragment, { children: [_jsx(Button, { size: "sm", variant: "outline", onClick: () => setIsEditing(false), children: "Cancel" }), _jsxs(Button, { size: "sm", onClick: handleSave, children: [_jsx(Save, { className: "h-4 w-4 mr-1" }), "Save Changes"] })] })) : (_jsxs(Button, { size: "sm", onClick: () => setIsEditing(true), children: [_jsx(Edit, { className: "h-4 w-4 mr-1" }), "Edit Profile"] })) })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Badge, { variant: "secondary", children: editedProfile.role }), _jsx("span", { className: "text-muted-foreground", children: "\u2022" }), _jsx("span", { className: "text-muted-foreground", children: editedProfile.department })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "h-4 w-4 text-muted-foreground" }), _jsxs("span", { className: "text-muted-foreground", children: ["Joined ", editedProfile.joinDate] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Mail, { className: "h-4 w-4 text-muted-foreground" }), _jsx("span", { className: "text-muted-foreground", children: editedProfile.email })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Eye, { className: "h-4 w-4 text-muted-foreground" }), _jsxs("span", { className: "text-muted-foreground", children: ["Last login: ", editedProfile.lastLogin] })] })] })] })] }) }) }), _jsxs(Tabs, { defaultValue: "personal", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [_jsx(TabsTrigger, { value: "personal", children: "Personal Info" }), _jsx(TabsTrigger, { value: "permissions", children: "Permissions" }), _jsx(TabsTrigger, { value: "preferences", children: "Preferences" }), _jsx(TabsTrigger, { value: "activity", children: "Activity Log" })] }), _jsx(TabsContent, { value: "personal", className: "space-y-4", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(User, { className: "h-5 w-5" }), "Personal Information"] }) }), _jsx(CardContent, { className: "space-y-4", children: _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "name", children: "Full Name" }), _jsx(Input, { id: "name", value: editedProfile.name, onChange: (e) => setEditedProfile({ ...editedProfile, name: e.target.value }), disabled: !isEditing })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email Address" }), _jsx(Input, { id: "email", type: "email", value: editedProfile.email, onChange: (e) => setEditedProfile({ ...editedProfile, email: e.target.value }), disabled: !isEditing })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "phone", children: "Phone Number" }), _jsx(Input, { id: "phone", value: editedProfile.phone, onChange: (e) => setEditedProfile({ ...editedProfile, phone: e.target.value }), disabled: !isEditing })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "location", children: "Location" }), _jsx(Input, { id: "location", value: editedProfile.location, onChange: (e) => setEditedProfile({ ...editedProfile, location: e.target.value }), disabled: !isEditing })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "role", children: "Role" }), _jsx(Input, { id: "role", value: editedProfile.role, disabled: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "department", children: "Department" }), _jsx(Input, { id: "department", value: editedProfile.department, disabled: true })] })] }) })] }) }), _jsx(TabsContent, { value: "permissions", className: "space-y-4", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Shield, { className: "h-5 w-5" }), "System Permissions"] }) }), _jsx(CardContent, { children: _jsx("div", { className: "grid grid-cols-2 gap-4", children: editedProfile.permissions.map((permission, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [_jsx("span", { className: "font-medium", children: permission }), _jsx(Badge, { variant: "secondary", className: "bg-green-100 text-green-800", children: "Granted" })] }, index))) }) })] }) }), _jsx(TabsContent, { value: "preferences", className: "space-y-4", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Bell, { className: "h-5 w-5" }), "Notification Preferences"] }) }), _jsx(CardContent, { className: "space-y-4", children: Object.entries(editedProfile.preferences.notifications).map(([key, value]) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(Label, { className: "capitalize", children: [key, " Notifications"] }), _jsx(Switch, { checked: value })] }, key))) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Settings, { className: "h-5 w-5" }), "Dashboard Settings"] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Label, { children: "Auto Refresh" }), _jsx(Switch, { checked: editedProfile.preferences.dashboard.autoRefresh })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Default View" }), _jsx(Input, { value: editedProfile.preferences.dashboard.defaultView, disabled: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Theme Preference" }), _jsx(Input, { value: editedProfile.preferences.dashboard.theme, disabled: true })] })] })] })] }) }), _jsx(TabsContent, { value: "activity", className: "space-y-4", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Eye, { className: "h-5 w-5" }), "Recent Activity"] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: editedProfile.recentActivity.map((activity, index) => (_jsxs("div", { className: "flex items-center gap-4 p-3 border rounded-lg", children: [_jsx("div", { className: "h-2 w-2 bg-blue-500 rounded-full flex-shrink-0" }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "font-medium", children: activity.action }), _jsx("p", { className: "text-sm text-muted-foreground", children: activity.time })] })] }, index))) }) })] }) })] }), _jsxs("div", { className: "flex justify-between", children: [_jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", onClick: () => { }, children: [_jsx(Download, { className: "h-4 w-4 mr-1" }), "Export Profile"] }), _jsxs(Button, { variant: "outline", onClick: () => { }, children: [_jsx(Lock, { className: "h-4 w-4 mr-1" }), "Change Password"] })] }), _jsx(Button, { variant: "outline", onClick: onClose, children: "Close" })] })] })] }) }));
}
//# sourceMappingURL=UserProfileModal.js.map