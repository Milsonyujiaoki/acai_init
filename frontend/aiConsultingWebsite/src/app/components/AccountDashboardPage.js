"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import { User, Settings, CreditCard, Bell, Shield, Activity, Download, Upload, Edit3, Camera, Check, X, AlertCircle, Key, Mail, Phone, Building, MapPin, Calendar, Clock, TrendingUp, Award, Target, Zap, Crown, Star, Gift, FileText, Eye, Trash2, Plus, ExternalLink, RefreshCw } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
import { LoadingSpinner } from "./LoadingSpinner";
import { SEOHead } from "./SEOHead";
export function AccountDashboardPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState('profile');
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [userProfile, setUserProfile] = useState(null);
    const [errors, setErrors] = useState({});
    // Mock user data - in production, this would come from API
    useEffect(() => {
        const loadUserProfile = async () => {
            setIsLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            const mockProfile = {
                id: 'user_123',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@company.com',
                phone: '+1 (555) 123-4567',
                company: 'TechCorp Industries',
                position: 'Digital Transformation Director',
                location: 'San Francisco, CA',
                bio: 'Digital transformation leader with 10+ years of experience in enterprise consulting and AI implementation.',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
                accountType: 'business',
                subscription: {
                    plan: 'Professional',
                    status: 'active',
                    nextBilling: '2024-07-15',
                    features: ['Advanced AI Tools', 'Priority Support', 'Custom Reports', 'Team Collaboration']
                },
                usage: {
                    aiConsultations: 45,
                    toolsAccessed: 12,
                    reportsGenerated: 8,
                    storageUsed: 2.4
                },
                preferences: {
                    notifications: {
                        email: true,
                        browser: true,
                        marketing: false,
                        security: true
                    },
                    privacy: {
                        profileVisibility: 'limited',
                        dataSharing: false,
                        analytics: true
                    },
                    interface: {
                        theme: 'system',
                        language: 'en',
                        timezone: 'America/Los_Angeles'
                    }
                },
                security: {
                    twoFactorEnabled: true,
                    lastLogin: '2024-06-09T10:30:00Z',
                    activeSessions: 2,
                    securityScore: 85
                },
                activity: [
                    {
                        id: '1',
                        type: 'consultation',
                        description: 'Completed AI Readiness Assessment',
                        timestamp: '2024-06-09T09:15:00Z',
                        status: 'success'
                    },
                    {
                        id: '2',
                        type: 'report',
                        description: 'Generated Digital Transformation Report',
                        timestamp: '2024-06-08T14:20:00Z',
                        status: 'success'
                    },
                    {
                        id: '3',
                        type: 'login',
                        description: 'Signed in from new device',
                        timestamp: '2024-06-08T08:45:00Z',
                        status: 'warning'
                    },
                    {
                        id: '4',
                        type: 'tool',
                        description: 'Used ROI Calculator',
                        timestamp: '2024-06-07T16:30:00Z',
                        status: 'success'
                    },
                    {
                        id: '5',
                        type: 'subscription',
                        description: 'Subscription renewed automatically',
                        timestamp: '2024-06-07T00:00:00Z',
                        status: 'success'
                    }
                ]
            };
            setUserProfile(mockProfile);
            setIsLoading(false);
        };
        loadUserProfile();
    }, []);
    // Handle profile updates
    const handleSaveProfile = async () => {
        if (!userProfile)
            return;
        setIsSaving(true);
        setErrors({});
        try {
            // Validate required fields
            const newErrors = {};
            if (!userProfile.firstName.trim()) {
                newErrors.firstName = 'First name is required';
            }
            if (!userProfile.lastName.trim()) {
                newErrors.lastName = 'Last name is required';
            }
            if (!userProfile.email.trim()) {
                newErrors.email = 'Email is required';
            }
            else if (!/\S+@\S+\.\S+/.test(userProfile.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                setIsSaving(false);
                return;
            }
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsEditing(false);
            // Show success message (you could implement toast notifications here)
            console.log('Profile updated successfully');
        }
        catch (error) {
            setErrors({ submit: 'Failed to update profile. Please try again.' });
        }
        finally {
            setIsSaving(false);
        }
    };
    // Handle preference updates
    const handlePreferenceUpdate = async (section, key, value) => {
        if (!userProfile)
            return;
        const updatedProfile = {
            ...userProfile,
            preferences: {
                ...userProfile.preferences,
                [section]: {
                    ...userProfile.preferences[section],
                    [key]: value
                }
            }
        };
        setUserProfile(updatedProfile);
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            console.log('Preference updated:', section, key, value);
        }
        catch (error) {
            console.error('Failed to update preference:', error);
        }
    };
    if (isLoading || !userProfile) {
        return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEOHead, { title: "Account Dashboard - Delibix", description: "Manage your Delibix account, subscription, preferences, and access AI consulting tools and reports." }), _jsx("div", { className: "flex items-center justify-center min-h-screen", children: _jsx(LoadingSpinner, { size: "lg", variant: "delibix", text: "Loading your dashboard..." }) })] }));
    }
    const getStatusColor = (status) => {
        switch (status) {
            case 'success': return 'text-green-600 dark:text-green-400';
            case 'warning': return 'text-yellow-600 dark:text-yellow-400';
            case 'error': return 'text-red-600 dark:text-red-400';
            default: return 'text-slate-600 dark:text-slate-400';
        }
    };
    const getSubscriptionBadgeVariant = (status) => {
        switch (status) {
            case 'active': return 'default';
            case 'trial': return 'secondary';
            case 'inactive': return 'destructive';
            default: return 'outline';
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEOHead, { title: "Account Dashboard - Delibix", description: "Manage your Delibix account, subscription, preferences, and access AI consulting tools and reports." }), _jsx("div", { className: "border-b border-slate-200 dark:border-slate-700 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: _jsx("div", { className: "max-w-7xl mx-auto px-6 py-8", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs(Avatar, { className: "h-16 w-16 ring-2 ring-blue-500/20", children: [_jsx(AvatarImage, { src: userProfile.avatar, alt: `${userProfile.firstName} ${userProfile.lastName}` }), _jsxs(AvatarFallback, { className: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-lg font-semibold", children: [userProfile.firstName[0], userProfile.lastName[0]] })] }), _jsxs("div", { children: [_jsxs("h1", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: ["Welcome back, ", userProfile.firstName, "!"] }), _jsxs("p", { className: "text-slate-600 dark:text-slate-400 mt-1", children: [userProfile.position, " at ", userProfile.company] }), _jsxs("div", { className: "flex items-center space-x-4 mt-2", children: [_jsxs(Badge, { variant: getSubscriptionBadgeVariant(userProfile.subscription.status), children: [_jsx(Crown, { className: "w-3 h-3 mr-1" }), userProfile.subscription.plan] }), _jsxs("div", { className: "flex items-center text-sm text-slate-500 dark:text-slate-400", children: [_jsx(Shield, { className: "w-4 h-4 mr-1" }), "Security Score: ", userProfile.security.securityScore, "%"] })] })] })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsxs(Button, { variant: "outline", onClick: () => navigate?.('home'), className: "hidden sm:flex", children: [_jsx(ExternalLink, { className: "w-4 h-4 mr-2" }), "Visit Site"] }), _jsxs(Button, { onClick: () => navigate?.(userProfile.subscription.plan === 'Free' ? 'pricing' : 'billing'), className: "gradient-bg-blue text-white", children: [_jsx(TrendingUp, { className: "w-4 h-4 mr-2" }), userProfile.subscription.plan === 'Free' ? 'Upgrade Plan' : 'Manage Billing'] })] })] }) }) }), _jsx("div", { className: "max-w-7xl mx-auto px-6 py-8", children: _jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "space-y-8", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-2 lg:grid-cols-6 gap-1 glass-heavy p-1", children: [_jsxs(TabsTrigger, { value: "profile", className: "flex items-center gap-2", children: [_jsx(User, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Profile" })] }), _jsxs(TabsTrigger, { value: "subscription", className: "flex items-center gap-2", children: [_jsx(CreditCard, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Subscription" })] }), _jsxs(TabsTrigger, { value: "usage", className: "flex items-center gap-2", children: [_jsx(Activity, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Usage" })] }), _jsxs(TabsTrigger, { value: "preferences", className: "flex items-center gap-2", children: [_jsx(Settings, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Preferences" })] }), _jsxs(TabsTrigger, { value: "security", className: "flex items-center gap-2", children: [_jsx(Shield, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Security" })] }), _jsxs(TabsTrigger, { value: "activity", className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Activity" })] })] }), _jsx(TabsContent, { value: "profile", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "space-y-6", children: _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [_jsxs("div", { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(User, { className: "w-5 h-5 text-blue-500" }), "Profile Information"] }), _jsx(CardDescription, { children: "Manage your personal information and professional details" })] }), !isEditing ? (_jsxs(Button, { variant: "outline", onClick: () => setIsEditing(true), className: "flex items-center gap-2", children: [_jsx(Edit3, { className: "w-4 h-4" }), "Edit Profile"] })) : (_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Button, { variant: "outline", onClick: () => {
                                                                setIsEditing(false);
                                                                setErrors({});
                                                            }, disabled: isSaving, children: [_jsx(X, { className: "w-4 h-4 mr-2" }), "Cancel"] }), _jsxs(Button, { onClick: handleSaveProfile, disabled: isSaving, className: "gradient-bg-blue text-white", children: [isSaving ? (_jsx(LoadingSpinner, { size: "sm", className: "mr-2" })) : (_jsx(Check, { className: "w-4 h-4 mr-2" })), isSaving ? 'Saving...' : 'Save Changes'] })] }))] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center space-x-6", children: [_jsxs("div", { className: "relative", children: [_jsxs(Avatar, { className: "h-24 w-24 ring-2 ring-blue-500/20", children: [_jsx(AvatarImage, { src: userProfile.avatar, alt: "Profile picture" }), _jsxs(AvatarFallback, { className: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-2xl font-semibold", children: [userProfile.firstName[0], userProfile.lastName[0]] })] }), isEditing && (_jsx(Button, { size: "sm", variant: "outline", className: "absolute -bottom-2 -right-2 h-8 w-8 rounded-full", children: _jsx(Camera, { className: "w-4 h-4" }) }))] }), isEditing && (_jsxs("div", { className: "space-y-2", children: [_jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Upload, { className: "w-4 h-4 mr-2" }), "Upload New Photo"] }), _jsxs(Button, { variant: "ghost", size: "sm", className: "text-red-600 dark:text-red-400", children: [_jsx(Trash2, { className: "w-4 h-4 mr-2" }), "Remove Photo"] })] }))] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "firstName", children: "First Name" }), _jsx(Input, { id: "firstName", value: userProfile.firstName, onChange: (e) => setUserProfile({
                                                                        ...userProfile,
                                                                        firstName: e.target.value
                                                                    }), disabled: !isEditing, className: errors.firstName ? 'border-red-500' : '' }), errors.firstName && (_jsxs("p", { className: "text-red-500 text-xs flex items-center gap-1", children: [_jsx(AlertCircle, { className: "w-3 h-3" }), errors.firstName] }))] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "lastName", children: "Last Name" }), _jsx(Input, { id: "lastName", value: userProfile.lastName, onChange: (e) => setUserProfile({
                                                                        ...userProfile,
                                                                        lastName: e.target.value
                                                                    }), disabled: !isEditing, className: errors.lastName ? 'border-red-500' : '' }), errors.lastName && (_jsxs("p", { className: "text-red-500 text-xs flex items-center gap-1", children: [_jsx(AlertCircle, { className: "w-3 h-3" }), errors.lastName] }))] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email Address" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" }), _jsx(Input, { id: "email", type: "email", value: userProfile.email, onChange: (e) => setUserProfile({
                                                                                ...userProfile,
                                                                                email: e.target.value
                                                                            }), disabled: !isEditing, className: `pl-10 ${errors.email ? 'border-red-500' : ''}` })] }), errors.email && (_jsxs("p", { className: "text-red-500 text-xs flex items-center gap-1", children: [_jsx(AlertCircle, { className: "w-3 h-3" }), errors.email] }))] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "phone", children: "Phone Number" }), _jsxs("div", { className: "relative", children: [_jsx(Phone, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" }), _jsx(Input, { id: "phone", value: userProfile.phone, onChange: (e) => setUserProfile({
                                                                                ...userProfile,
                                                                                phone: e.target.value
                                                                            }), disabled: !isEditing, className: "pl-10" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "company", children: "Company" }), _jsxs("div", { className: "relative", children: [_jsx(Building, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" }), _jsx(Input, { id: "company", value: userProfile.company, onChange: (e) => setUserProfile({
                                                                                ...userProfile,
                                                                                company: e.target.value
                                                                            }), disabled: !isEditing, className: "pl-10" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "position", children: "Position" }), _jsx(Input, { id: "position", value: userProfile.position, onChange: (e) => setUserProfile({
                                                                        ...userProfile,
                                                                        position: e.target.value
                                                                    }), disabled: !isEditing })] }), _jsxs("div", { className: "space-y-2 md:col-span-2", children: [_jsx(Label, { htmlFor: "location", children: "Location" }), _jsxs("div", { className: "relative", children: [_jsx(MapPin, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" }), _jsx(Input, { id: "location", value: userProfile.location, onChange: (e) => setUserProfile({
                                                                                ...userProfile,
                                                                                location: e.target.value
                                                                            }), disabled: !isEditing, className: "pl-10" })] })] }), _jsxs("div", { className: "space-y-2 md:col-span-2", children: [_jsx(Label, { htmlFor: "bio", children: "Bio" }), _jsx("textarea", { id: "bio", value: userProfile.bio, onChange: (e) => setUserProfile({
                                                                        ...userProfile,
                                                                        bio: e.target.value
                                                                    }), disabled: !isEditing, rows: 3, className: "w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-input-background dark:bg-slate-800 text-slate-900 dark:text-slate-100 disabled:opacity-50 disabled:cursor-not-allowed resize-none", placeholder: "Tell us about yourself and your professional background..." })] })] }), errors.submit && (_jsx("div", { className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3", children: _jsxs("p", { className: "text-red-600 dark:text-red-400 text-sm flex items-center gap-2", children: [_jsx(AlertCircle, { className: "w-4 h-4" }), errors.submit] }) }))] })] }) }) }), _jsx(TabsContent, { value: "subscription", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "space-y-6", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs(Card, { className: "glass-heavy lg:col-span-2", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Crown, { className: "w-5 h-5 text-blue-500" }), "Current Subscription"] }), _jsx(CardDescription, { children: "Manage your subscription plan and billing information" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg", children: [_jsxs("div", { children: [_jsxs("h3", { className: "font-semibold text-lg text-blue-900 dark:text-blue-100", children: [userProfile.subscription.plan, " Plan"] }), _jsxs("p", { className: "text-blue-700 dark:text-blue-300 text-sm", children: ["Status: ", _jsx(Badge, { variant: getSubscriptionBadgeVariant(userProfile.subscription.status), children: userProfile.subscription.status })] })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-sm text-blue-600 dark:text-blue-400", children: "Next billing" }), _jsx("p", { className: "font-semibold text-blue-900 dark:text-blue-100", children: new Date(userProfile.subscription.nextBilling).toLocaleDateString() })] })] }), _jsxs("div", { className: "space-y-3", children: [_jsx("h4", { className: "font-medium text-slate-900 dark:text-slate-100", children: "Plan Features" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: userProfile.subscription.features.map((feature, index) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(Check, { className: "w-4 h-4 text-green-500" }), _jsx("span", { className: "text-slate-600 dark:text-slate-400", children: feature })] }, index))) })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [_jsxs(Button, { onClick: () => navigate?.('pricing'), className: "gradient-bg-blue text-white flex-1", children: [_jsx(TrendingUp, { className: "w-4 h-4 mr-2" }), "Upgrade Plan"] }), _jsxs(Button, { variant: "outline", className: "flex-1", children: [_jsx(CreditCard, { className: "w-4 h-4 mr-2" }), "Billing History"] })] })] })] }), _jsxs(Card, { className: "glass-heavy", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Award, { className: "w-5 h-5 text-amber-500" }), "Account Stats"] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Member since" }), _jsx("span", { className: "text-sm font-medium", children: "Jan 2024" })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Total consultations" }), _jsx("span", { className: "text-sm font-medium", children: userProfile.usage.aiConsultations })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Reports generated" }), _jsx("span", { className: "text-sm font-medium", children: userProfile.usage.reportsGenerated })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Tools accessed" }), _jsx("span", { className: "text-sm font-medium", children: userProfile.usage.toolsAccessed })] })] }), _jsx(Separator, {}), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Storage used" }), _jsxs("span", { className: "text-sm font-medium", children: [userProfile.usage.storageUsed, "GB / 10GB"] })] }), _jsx(Progress, { value: (userProfile.usage.storageUsed / 10) * 100, className: "w-full" })] })] })] })] }) }) }), _jsx(TabsContent, { value: "usage", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsx(Card, { className: "glass-secondary", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "AI Consultations" }), _jsx("p", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: userProfile.usage.aiConsultations })] }), _jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center", children: _jsx(Zap, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) })] }) }) }), _jsx(Card, { className: "glass-secondary", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Tools Accessed" }), _jsx("p", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: userProfile.usage.toolsAccessed })] }), _jsx("div", { className: "w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center", children: _jsx(Target, { className: "w-6 h-6 text-green-600 dark:text-green-400" }) })] }) }) }), _jsx(Card, { className: "glass-secondary", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Reports Generated" }), _jsx("p", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: userProfile.usage.reportsGenerated })] }), _jsx("div", { className: "w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center", children: _jsx(FileText, { className: "w-6 h-6 text-purple-600 dark:text-purple-400" }) })] }) }) }), _jsx(Card, { className: "glass-secondary", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Storage Used" }), _jsxs("p", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: [userProfile.usage.storageUsed, "GB"] })] }), _jsx("div", { className: "w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center", children: _jsx(Download, { className: "w-6 h-6 text-amber-600 dark:text-amber-400" }) })] }) }) })] }), _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-5 h-5 text-blue-500" }), "Usage Analytics"] }), _jsx(CardDescription, { children: "Track your AI consulting tool usage over time" })] }), _jsx(CardContent, { children: _jsx("div", { className: "h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-lg", children: _jsxs("div", { className: "text-center", children: [_jsx(TrendingUp, { className: "w-12 h-12 text-slate-400 mx-auto mb-4" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: "Usage analytics chart would be displayed here" })] }) }) })] })] }) }), _jsx(TabsContent, { value: "preferences", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "space-y-6", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Bell, { className: "w-5 h-5 text-blue-500" }), "Notification Preferences"] }), _jsx(CardDescription, { children: "Control how you receive notifications" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Email Notifications" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Receive updates via email" })] }), _jsx(Switch, { checked: userProfile.preferences.notifications.email, onCheckedChange: (checked) => handlePreferenceUpdate('notifications', 'email', checked) })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Browser Notifications" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Real-time browser alerts" })] }), _jsx(Switch, { checked: userProfile.preferences.notifications.browser, onCheckedChange: (checked) => handlePreferenceUpdate('notifications', 'browser', checked) })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Marketing Communications" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Product updates and newsletters" })] }), _jsx(Switch, { checked: userProfile.preferences.notifications.marketing, onCheckedChange: (checked) => handlePreferenceUpdate('notifications', 'marketing', checked) })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Security Alerts" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Account security notifications" })] }), _jsx(Switch, { checked: userProfile.preferences.notifications.security, onCheckedChange: (checked) => handlePreferenceUpdate('notifications', 'security', checked) })] })] })] }), _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Eye, { className: "w-5 h-5 text-blue-500" }), "Privacy Settings"] }), _jsx(CardDescription, { children: "Manage your privacy and data sharing preferences" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Data Sharing" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Share anonymized data for improvements" })] }), _jsx(Switch, { checked: userProfile.preferences.privacy.dataSharing, onCheckedChange: (checked) => handlePreferenceUpdate('privacy', 'dataSharing', checked) })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Analytics Tracking" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Help us improve user experience" })] }), _jsx(Switch, { checked: userProfile.preferences.privacy.analytics, onCheckedChange: (checked) => handlePreferenceUpdate('privacy', 'analytics', checked) })] })] })] })] }) }) }), _jsx(TabsContent, { value: "security", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "space-y-6", children: _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Shield, { className: "w-5 h-5 text-blue-500" }), "Security Overview"] }), _jsx(CardDescription, { children: "Monitor and manage your account security" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "p-4 bg-green-50 dark:bg-green-900/20 rounded-lg", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsx("h3", { className: "font-medium text-green-900 dark:text-green-100", children: "Security Score" }), _jsxs("span", { className: "text-2xl font-bold text-green-700 dark:text-green-300", children: [userProfile.security.securityScore, "%"] })] }), _jsx(Progress, { value: userProfile.security.securityScore, className: "w-full mb-2" }), _jsx("p", { className: "text-sm text-green-700 dark:text-green-300", children: "Your account security is strong. Great job!" })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center", children: _jsx(Key, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Two-Factor Authentication" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: userProfile.security.twoFactorEnabled ? 'Enabled' : 'Disabled' })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [userProfile.security.twoFactorEnabled && (_jsx(Badge, { variant: "default", className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: "Active" })), _jsx(Button, { variant: "outline", size: "sm", children: userProfile.security.twoFactorEnabled ? 'Manage' : 'Enable' })] })] }), _jsxs("div", { className: "flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center", children: _jsx(Key, { className: "w-5 h-5 text-amber-600 dark:text-amber-400" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Password" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Last changed 3 months ago" })] })] }), _jsx(Button, { variant: "outline", size: "sm", children: "Change Password" })] }), _jsxs("div", { className: "flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center", children: _jsx(Activity, { className: "w-5 h-5 text-purple-600 dark:text-purple-400" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Active Sessions" }), _jsxs("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: [userProfile.security.activeSessions, " active sessions"] })] })] }), _jsx(Button, { variant: "outline", size: "sm", children: "View All" })] })] }), _jsxs("div", { className: "p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Clock, { className: "w-4 h-4 text-slate-600 dark:text-slate-400" }), _jsx("span", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: "Last Login" })] }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: new Date(userProfile.security.lastLogin).toLocaleString() })] })] })] }) }) }), _jsx(TabsContent, { value: "activity", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "space-y-6", children: _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [_jsxs("div", { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Activity, { className: "w-5 h-5 text-blue-500" }), "Recent Activity"] }), _jsx(CardDescription, { children: "Track your recent actions and system events" })] }), _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2" }), "Refresh"] })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "space-y-4", children: userProfile.activity.map((activity) => (_jsxs("div", { className: "flex items-center gap-4 p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors", children: [_jsx("div", { className: `w-2 h-2 rounded-full ${getStatusColor(activity.status).replace('text-', 'bg-')}` }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "font-medium text-slate-900 dark:text-slate-100", children: activity.description }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: new Date(activity.timestamp).toLocaleString() })] }), _jsx(Badge, { variant: "outline", className: "capitalize", children: activity.type })] }, activity.id))) }), _jsx("div", { className: "mt-6 text-center", children: _jsxs(Button, { variant: "outline", children: [_jsx(Plus, { className: "w-4 h-4 mr-2" }), "Load More Activity"] }) })] })] }) }) })] }) })] }));
}
//# sourceMappingURL=AccountDashboardPage.js.map