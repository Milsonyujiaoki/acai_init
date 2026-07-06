"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Bell, BellOff, Check, X, Trash2, Settings, Filter, AlertCircle, Info, CheckCircle, XCircle, Zap, Crown, Mail, MessageSquare, Calendar, TrendingUp, Shield, Users, Gift, Star, Clock, Archive, RefreshCw, Search, Eye, EyeOff, Volume2, VolumeX, Smartphone, Monitor } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
import { LoadingSpinner } from "./LoadingSpinner";
import { SEOHead } from "./SEOHead";
export function NotificationsPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState('all');
    const [notifications, setNotifications] = useState([]);
    const [preferences, setPreferences] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedNotifications, setSelectedNotifications] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('all');
    // Mock data - in production, this would come from API
    useEffect(() => {
        const loadNotifications = async () => {
            setIsLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            const mockNotifications = [
                {
                    id: '1',
                    title: 'Welcome to Delibix Professional!',
                    message: 'Your subscription has been activated. Explore our advanced AI consulting tools and premium features.',
                    type: 'success',
                    category: 'account',
                    timestamp: '2024-06-09T10:30:00Z',
                    read: false,
                    important: true,
                    actionUrl: '#dashboard',
                    actionText: 'Get Started',
                    metadata: { source: 'subscription_service' }
                },
                {
                    id: '2',
                    title: 'New AI Tool Available: Market Research Analyzer',
                    message: 'Discover market opportunities with our latest AI-powered market research tool. Available now in your toolkit.',
                    type: 'update',
                    category: 'updates',
                    timestamp: '2024-06-09T09:15:00Z',
                    read: false,
                    important: false,
                    actionUrl: '#market-research',
                    actionText: 'Try Now',
                    metadata: { source: 'product_updates' }
                },
                {
                    id: '3',
                    title: 'Security Alert: New Login Detected',
                    message: 'We detected a new sign-in to your account from San Francisco, CA. If this wasn\'t you, please secure your account.',
                    type: 'warning',
                    category: 'security',
                    timestamp: '2024-06-09T08:45:00Z',
                    read: true,
                    important: true,
                    actionUrl: '#security',
                    actionText: 'Review Activity',
                    metadata: { source: 'security_service', userId: 'user_123' }
                },
                {
                    id: '4',
                    title: 'Monthly Report Ready',
                    message: 'Your Digital Transformation Progress Report for May 2024 is ready for download.',
                    type: 'info',
                    category: 'activity',
                    timestamp: '2024-06-08T16:00:00Z',
                    read: true,
                    important: false,
                    actionUrl: '#reports',
                    actionText: 'Download',
                    metadata: { source: 'reporting_service' }
                },
                {
                    id: '5',
                    title: 'Payment Successful',
                    message: 'Your payment of $99 for Professional Plan has been processed successfully. Next billing: July 9, 2024.',
                    type: 'success',
                    category: 'billing',
                    timestamp: '2024-06-08T14:20:00Z',
                    read: true,
                    important: false,
                    metadata: { source: 'billing_service' }
                },
                {
                    id: '6',
                    title: 'Limited Time: 20% Off Enterprise Plan',
                    message: 'Upgrade to Enterprise and save 20% for the first 6 months. Advanced features, priority support, and team collaboration.',
                    type: 'promotion',
                    category: 'marketing',
                    timestamp: '2024-06-07T12:00:00Z',
                    read: false,
                    important: false,
                    actionUrl: '#pricing',
                    actionText: 'View Offer',
                    metadata: { source: 'marketing_service' }
                },
                {
                    id: '7',
                    title: 'System Maintenance Scheduled',
                    message: 'Scheduled maintenance on June 15, 2024, from 2:00 AM to 4:00 AM UTC. Some features may be temporarily unavailable.',
                    type: 'info',
                    category: 'system',
                    timestamp: '2024-06-07T10:00:00Z',
                    read: true,
                    important: true,
                    metadata: { source: 'system_admin' }
                },
                {
                    id: '8',
                    title: 'New Team Member Invitation',
                    message: 'Sarah Johnson has been invited to join your team workspace. They will have access to shared projects and reports.',
                    type: 'info',
                    category: 'account',
                    timestamp: '2024-06-06T15:30:00Z',
                    read: true,
                    important: false,
                    metadata: { source: 'team_service', relatedEntity: 'team_456' }
                }
            ];
            const mockPreferences = {
                email: {
                    enabled: true,
                    categories: ['security', 'billing', 'account', 'updates'],
                    frequency: 'immediate'
                },
                browser: {
                    enabled: true,
                    categories: ['security', 'system', 'activity'],
                    sound: true
                },
                mobile: {
                    enabled: true,
                    categories: ['security', 'billing'],
                    quiet_hours: {
                        enabled: true,
                        start: '22:00',
                        end: '08:00'
                    }
                }
            };
            setNotifications(mockNotifications);
            setPreferences(mockPreferences);
            setIsLoading(false);
        };
        loadNotifications();
    }, []);
    // Filter notifications based on active tab and search
    const filteredNotifications = notifications.filter(notification => {
        const matchesTab = activeTab === 'all' ||
            (activeTab === 'unread' && !notification.read) ||
            (activeTab === 'important' && notification.important) ||
            notification.category === activeTab;
        const matchesSearch = !searchQuery ||
            notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            notification.message.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filterType === 'all' || notification.type === filterType;
        return matchesTab && matchesSearch && matchesFilter;
    });
    // Mark notification as read
    const markAsRead = (notificationId) => {
        setNotifications(prev => prev.map(notif => notif.id === notificationId ? { ...notif, read: true } : notif));
    };
    // Mark all as read
    const markAllAsRead = () => {
        setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
    };
    // Delete notification
    const deleteNotification = (notificationId) => {
        setNotifications(prev => prev.filter(notif => notif.id !== notificationId));
        setSelectedNotifications(prev => prev.filter(id => id !== notificationId));
    };
    // Delete selected notifications
    const deleteSelected = () => {
        setNotifications(prev => prev.filter(notif => !selectedNotifications.includes(notif.id)));
        setSelectedNotifications([]);
    };
    // Toggle notification selection
    const toggleSelection = (notificationId) => {
        setSelectedNotifications(prev => prev.includes(notificationId)
            ? prev.filter(id => id !== notificationId)
            : [...prev, notificationId]);
    };
    // Select all filtered notifications
    const selectAll = () => {
        const allIds = filteredNotifications.map(notif => notif.id);
        setSelectedNotifications(allIds);
    };
    // Clear selection
    const clearSelection = () => {
        setSelectedNotifications([]);
    };
    // Update preferences
    const updatePreferences = async (section, key, value) => {
        if (!preferences)
            return;
        const updatedPreferences = {
            ...preferences,
            [section]: {
                ...preferences[section],
                [key]: value
            }
        };
        setPreferences(updatedPreferences);
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            console.log('Preferences updated:', section, key, value);
        }
        catch (error) {
            console.error('Failed to update preferences:', error);
        }
    };
    // Get notification icon
    const getNotificationIcon = (type) => {
        switch (type) {
            case 'success': return CheckCircle;
            case 'warning': return AlertCircle;
            case 'error': return XCircle;
            case 'update': return Zap;
            case 'promotion': return Gift;
            case 'security': return Shield;
            case 'system': return Settings;
            default: return Info;
        }
    };
    // Get notification color
    const getNotificationColor = (type) => {
        switch (type) {
            case 'success': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
            case 'warning': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30';
            case 'error': return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30';
            case 'update': return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30';
            case 'promotion': return 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30';
            case 'security': return 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30';
            case 'system': return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30';
            default: return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30';
        }
    };
    // Get unread count
    const unreadCount = notifications.filter(notif => !notif.read).length;
    const importantCount = notifications.filter(notif => notif.important && !notif.read).length;
    if (isLoading) {
        return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEOHead, { title: "Notifications - Delibix", description: "Manage your notifications, alerts, and communication preferences." }), _jsx("div", { className: "flex items-center justify-center min-h-screen", children: _jsx(LoadingSpinner, { size: "lg", variant: "delibix", text: "Loading notifications..." }) })] }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEOHead, { title: "Notifications - Delibix", description: "Manage your notifications, alerts, and communication preferences." }), _jsx("div", { className: "border-b border-slate-200 dark:border-slate-700 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: _jsx("div", { className: "max-w-7xl mx-auto px-6 py-8", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center", children: _jsx(Bell, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: "Notifications" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mt-1", children: "Stay updated with your account activity and system updates" }), _jsxs("div", { className: "flex items-center space-x-4 mt-2", children: [unreadCount > 0 && (_jsxs(Badge, { variant: "default", className: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300", children: [unreadCount, " Unread"] })), importantCount > 0 && (_jsxs(Badge, { variant: "destructive", children: [importantCount, " Important"] }))] })] })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [selectedNotifications.length > 0 && (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "outline", size: "sm", onClick: clearSelection, children: "Clear Selection" }), _jsxs(Button, { variant: "destructive", size: "sm", onClick: deleteSelected, children: [_jsx(Trash2, { className: "w-4 h-4 mr-2" }), "Delete (", selectedNotifications.length, ")"] })] })), _jsxs(Button, { variant: "outline", onClick: markAllAsRead, children: [_jsx(Check, { className: "w-4 h-4 mr-2" }), "Mark All Read"] }), _jsxs(Button, { onClick: () => setActiveTab('preferences'), className: "gradient-bg-blue text-white", children: [_jsx(Settings, { className: "w-4 h-4 mr-2" }), "Settings"] })] })] }) }) }), _jsx("div", { className: "max-w-7xl mx-auto px-6 py-8", children: _jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "space-y-8", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-3 lg:grid-cols-8 gap-1 glass-heavy p-1", children: [_jsxs(TabsTrigger, { value: "all", className: "flex items-center gap-2", children: [_jsx(Bell, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "All" }), _jsx(Badge, { variant: "secondary", className: "ml-1", children: notifications.length })] }), _jsxs(TabsTrigger, { value: "unread", className: "flex items-center gap-2", children: [_jsx(BellOff, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Unread" }), unreadCount > 0 && _jsx(Badge, { variant: "default", className: "ml-1", children: unreadCount })] }), _jsxs(TabsTrigger, { value: "important", className: "flex items-center gap-2", children: [_jsx(Star, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Important" }), importantCount > 0 && _jsx(Badge, { variant: "destructive", className: "ml-1", children: importantCount })] }), _jsxs(TabsTrigger, { value: "security", className: "flex items-center gap-2", children: [_jsx(Shield, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Security" })] }), _jsxs(TabsTrigger, { value: "billing", className: "flex items-center gap-2", children: [_jsx(Crown, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Billing" })] }), _jsxs(TabsTrigger, { value: "updates", className: "flex items-center gap-2", children: [_jsx(Zap, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Updates" })] }), _jsxs(TabsTrigger, { value: "activity", className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Activity" })] }), _jsxs(TabsTrigger, { value: "preferences", className: "flex items-center gap-2", children: [_jsx(Settings, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Settings" })] })] }), ['all', 'unread', 'important', 'security', 'billing', 'updates', 'activity'].includes(activeTab) && (_jsx(TabsContent, { value: activeTab, children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "space-y-6", children: [_jsx(Card, { className: "glass-secondary", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-center", children: [_jsxs("div", { className: "relative flex-1", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" }), _jsx("input", { type: "text", placeholder: "Search notifications...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-background text-slate-900 dark:text-slate-100" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("select", { value: filterType, onChange: (e) => setFilterType(e.target.value), className: "px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-background text-slate-900 dark:text-slate-100", children: [_jsx("option", { value: "all", children: "All Types" }), _jsx("option", { value: "info", children: "Info" }), _jsx("option", { value: "success", children: "Success" }), _jsx("option", { value: "warning", children: "Warning" }), _jsx("option", { value: "error", children: "Error" }), _jsx("option", { value: "update", children: "Updates" }), _jsx("option", { value: "promotion", children: "Promotions" }), _jsx("option", { value: "security", children: "Security" }), _jsx("option", { value: "system", children: "System" })] }), _jsx(Button, { variant: "outline", size: "sm", onClick: selectAll, children: "Select All" }), _jsx(Button, { variant: "outline", size: "sm", children: _jsx(RefreshCw, { className: "w-4 h-4" }) })] })] }) }) }), _jsx("div", { className: "space-y-3", children: _jsx(AnimatePresence, { children: filteredNotifications.length > 0 ? (filteredNotifications.map((notification, index) => {
                                                const IconComponent = getNotificationIcon(notification.type);
                                                const colorClasses = getNotificationColor(notification.type);
                                                return (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 20 }, transition: { duration: 0.3, delay: index * 0.05 }, children: _jsx(Card, { className: `glass-heavy cursor-pointer transition-all duration-200 hover:shadow-lg ${!notification.read ? 'ring-2 ring-blue-500/20' : ''} ${selectedNotifications.includes(notification.id) ? 'ring-2 ring-blue-500' : ''}`, children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("input", { type: "checkbox", checked: selectedNotifications.includes(notification.id), onChange: () => toggleSelection(notification.id), className: "mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" }), _jsx("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClasses}`, children: _jsx(IconComponent, { className: "w-5 h-5" }) }), _jsx("div", { className: "flex-1 min-w-0", children: _jsxs("div", { className: "flex items-start justify-between gap-4", children: [_jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-center gap-2 mb-1", children: [_jsx("h3", { className: `font-semibold text-slate-900 dark:text-slate-100 truncate ${!notification.read ? 'font-bold' : ''}`, children: notification.title }), notification.important && (_jsx(Star, { className: "w-4 h-4 text-amber-500 fill-current flex-shrink-0" })), !notification.read && (_jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" }))] }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 text-sm leading-relaxed", children: notification.message }), _jsxs("div", { className: "flex items-center gap-4 mt-2", children: [_jsx("span", { className: "text-xs text-slate-500 dark:text-slate-400", children: new Date(notification.timestamp).toLocaleString() }), _jsx(Badge, { variant: "outline", className: "text-xs capitalize", children: notification.category })] })] }), _jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [notification.actionUrl && (_jsx(Button, { size: "sm", variant: "outline", onClick: () => {
                                                                                                markAsRead(notification.id);
                                                                                                navigate?.(notification.actionUrl.replace('#', ''));
                                                                                            }, children: notification.actionText || 'View' })), !notification.read && (_jsx(Button, { size: "sm", variant: "ghost", onClick: () => markAsRead(notification.id), children: _jsx(Eye, { className: "w-4 h-4" }) })), _jsx(Button, { size: "sm", variant: "ghost", onClick: () => deleteNotification(notification.id), className: "text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300", children: _jsx(Trash2, { className: "w-4 h-4" }) })] })] }) })] }) }) }) }, notification.id));
                                            })) : (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-center py-12", children: [_jsx(BellOff, { className: "w-16 h-16 text-slate-400 mx-auto mb-4" }), _jsx("h3", { className: "text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "No notifications found" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: searchQuery || filterType !== 'all'
                                                            ? 'Try adjusting your search or filters'
                                                            : 'You\'re all caught up! No new notifications.' })] })) }) })] }) })), _jsx(TabsContent, { value: "preferences", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "space-y-6", children: preferences && (_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Mail, { className: "w-5 h-5 text-blue-500" }), "Email Notifications"] }), _jsx(CardDescription, { children: "Control how you receive email notifications" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Email Notifications" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Receive notifications via email" })] }), _jsx(Switch, { checked: preferences.email.enabled, onCheckedChange: (checked) => updatePreferences('email', 'enabled', checked) })] }), _jsxs("div", { className: "space-y-3", children: [_jsx("p", { className: "font-medium text-sm", children: "Email Categories" }), ['security', 'billing', 'account', 'updates', 'marketing', 'activity'].map((category) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm capitalize text-slate-600 dark:text-slate-400", children: category }), _jsx(Switch, { checked: preferences.email.categories.includes(category), onCheckedChange: (checked) => {
                                                                                const updatedCategories = checked
                                                                                    ? [...preferences.email.categories, category]
                                                                                    : preferences.email.categories.filter(c => c !== category);
                                                                                updatePreferences('email', 'categories', updatedCategories);
                                                                            }, disabled: !preferences.email.enabled })] }, category)))] }), _jsxs("div", { className: "space-y-2", children: [_jsx("p", { className: "font-medium text-sm", children: "Email Frequency" }), _jsxs("select", { value: preferences.email.frequency, onChange: (e) => updatePreferences('email', 'frequency', e.target.value), disabled: !preferences.email.enabled, className: "w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-background text-slate-900 dark:text-slate-100 disabled:opacity-50", children: [_jsx("option", { value: "immediate", children: "Immediate" }), _jsx("option", { value: "daily", children: "Daily Digest" }), _jsx("option", { value: "weekly", children: "Weekly Summary" })] })] })] })] }), _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Monitor, { className: "w-5 h-5 text-blue-500" }), "Browser Notifications"] }), _jsx(CardDescription, { children: "Control browser push notifications" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Browser Notifications" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Show browser push notifications" })] }), _jsx(Switch, { checked: preferences.browser.enabled, onCheckedChange: (checked) => updatePreferences('browser', 'enabled', checked) })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Notification Sound" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Play sound for notifications" })] }), _jsx(Switch, { checked: preferences.browser.sound, onCheckedChange: (checked) => updatePreferences('browser', 'sound', checked), disabled: !preferences.browser.enabled })] }), _jsxs("div", { className: "space-y-3", children: [_jsx("p", { className: "font-medium text-sm", children: "Browser Categories" }), ['security', 'system', 'activity', 'billing'].map((category) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm capitalize text-slate-600 dark:text-slate-400", children: category }), _jsx(Switch, { checked: preferences.browser.categories.includes(category), onCheckedChange: (checked) => {
                                                                                const updatedCategories = checked
                                                                                    ? [...preferences.browser.categories, category]
                                                                                    : preferences.browser.categories.filter(c => c !== category);
                                                                                updatePreferences('browser', 'categories', updatedCategories);
                                                                            }, disabled: !preferences.browser.enabled })] }, category)))] })] })] }), _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Smartphone, { className: "w-5 h-5 text-blue-500" }), "Mobile Notifications"] }), _jsx(CardDescription, { children: "Control mobile push notifications" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Mobile Notifications" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Receive mobile push notifications" })] }), _jsx(Switch, { checked: preferences.mobile.enabled, onCheckedChange: (checked) => updatePreferences('mobile', 'enabled', checked) })] }), _jsxs("div", { className: "space-y-3", children: [_jsx("p", { className: "font-medium text-sm", children: "Mobile Categories" }), ['security', 'billing', 'account'].map((category) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm capitalize text-slate-600 dark:text-slate-400", children: category }), _jsx(Switch, { checked: preferences.mobile.categories.includes(category), onCheckedChange: (checked) => {
                                                                                const updatedCategories = checked
                                                                                    ? [...preferences.mobile.categories, category]
                                                                                    : preferences.mobile.categories.filter(c => c !== category);
                                                                                updatePreferences('mobile', 'categories', updatedCategories);
                                                                            }, disabled: !preferences.mobile.enabled })] }, category)))] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Quiet Hours" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Disable notifications during specified hours" })] }), _jsx(Switch, { checked: preferences.mobile.quiet_hours.enabled, onCheckedChange: (checked) => updatePreferences('mobile', 'quiet_hours', {
                                                                                ...preferences.mobile.quiet_hours,
                                                                                enabled: checked
                                                                            }), disabled: !preferences.mobile.enabled })] }), preferences.mobile.quiet_hours.enabled && (_jsxs("div", { className: "grid grid-cols-2 gap-3", children: [_jsxs("div", { children: [_jsx("label", { className: "text-sm text-slate-600 dark:text-slate-400", children: "From" }), _jsx("input", { type: "time", value: preferences.mobile.quiet_hours.start, onChange: (e) => updatePreferences('mobile', 'quiet_hours', {
                                                                                        ...preferences.mobile.quiet_hours,
                                                                                        start: e.target.value
                                                                                    }), className: "w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-background text-slate-900 dark:text-slate-100 mt-1" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-sm text-slate-600 dark:text-slate-400", children: "To" }), _jsx("input", { type: "time", value: preferences.mobile.quiet_hours.end, onChange: (e) => updatePreferences('mobile', 'quiet_hours', {
                                                                                        ...preferences.mobile.quiet_hours,
                                                                                        end: e.target.value
                                                                                    }), className: "w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-background text-slate-900 dark:text-slate-100 mt-1" })] })] }))] })] })] }), _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Settings, { className: "w-5 h-5 text-blue-500" }), "Additional Settings"] }), _jsx(CardDescription, { children: "Advanced notification preferences" })] }), _jsx(CardContent, { className: "space-y-4", children: _jsxs("div", { className: "space-y-3", children: [_jsxs(Button, { variant: "outline", className: "w-full justify-start", children: [_jsx(Archive, { className: "w-4 h-4 mr-2" }), "View Archived Notifications"] }), _jsxs(Button, { variant: "outline", className: "w-full justify-start", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Export Notification History"] }), _jsxs(Button, { variant: "outline", className: "w-full justify-start text-red-600 dark:text-red-400", children: [_jsx(Trash2, { className: "w-4 h-4 mr-2" }), "Clear All Notifications"] })] }) })] })] })) }) })] }) })] }));
}
//# sourceMappingURL=NotificationsPage.js.map