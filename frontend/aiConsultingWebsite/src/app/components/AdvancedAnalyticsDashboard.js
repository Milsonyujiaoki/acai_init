"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, FunnelChart, Funnel, LabelList } from "recharts";
import { TrendingUp, TrendingDown, Users, DollarSign, Eye, MousePointer, Calendar, Download, Share2, Filter, RefreshCw, BarChart3, PieChart as PieChartIcon, LineChart as LineChartIcon, Globe, Smartphone, Monitor, MapPin, Clock, Target, Zap, Star } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
import { LoadingSpinner } from "./LoadingSpinner";
import { SEOHead } from "./SEOHead";
export function AdvancedAnalyticsDashboard({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, language } = useLanguage();
    const [timeRange, setTimeRange] = useState('30d');
    const [activeTab, setActiveTab] = useState('overview');
    const [isLoading, setIsLoading] = useState(true);
    const [chartData, setChartData] = useState(null);
    // Mock data generation
    useEffect(() => {
        const loadAnalyticsData = async () => {
            setIsLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            const mockData = generateMockData(timeRange);
            setChartData(mockData);
            setIsLoading(false);
        };
        loadAnalyticsData();
    }, [timeRange]);
    // Generate comprehensive mock data
    const generateMockData = (range) => {
        const days = range === '7d' ? 7 : range === '30d' ? 30 : 90;
        const now = new Date();
        // Revenue and user data
        const revenueData = Array.from({ length: days }, (_, i) => {
            const date = new Date(now);
            date.setDate(date.getDate() - (days - 1 - i));
            return {
                date: date.toISOString().split('T')[0],
                day: date.toLocaleDateString('en', { weekday: 'short' }),
                revenue: Math.floor(Math.random() * 15000) + 5000,
                users: Math.floor(Math.random() * 500) + 200,
                conversions: Math.floor(Math.random() * 50) + 10,
                pageViews: Math.floor(Math.random() * 2000) + 1000,
                avgSessionDuration: Math.floor(Math.random() * 300) + 120,
                bounceRate: Math.floor(Math.random() * 30) + 20
            };
        });
        // Geographic data
        const geographicData = [
            { country: 'Indonesia', users: 4521, revenue: 125000, flag: '🇮🇩' },
            { country: 'Singapore', users: 2341, revenue: 89000, flag: '🇸🇬' },
            { country: 'Malaysia', users: 1876, revenue: 67000, flag: '🇲🇾' },
            { country: 'Thailand', users: 1432, revenue: 45000, flag: '🇹🇭' },
            { country: 'Vietnam', users: 987, revenue: 32000, flag: '🇻🇳' },
            { country: 'Philippines', users: 756, revenue: 28000, flag: '🇵🇭' },
            { country: 'United States', users: 543, revenue: 78000, flag: '🇺🇸' },
            { country: 'Australia', users: 432, revenue: 56000, flag: '🇦🇺' }
        ];
        // Device data
        const deviceData = [
            { name: 'Desktop', value: 45.2, users: 5420, color: '#3b82f6' },
            { name: 'Mobile', value: 38.7, users: 4635, color: '#10b981' },
            { name: 'Tablet', value: 16.1, users: 1928, color: '#f59e0b' }
        ];
        // Traffic sources
        const trafficSources = [
            { source: 'Organic Search', users: 3542, percentage: 42.3, color: '#3b82f6' },
            { source: 'Direct', users: 2187, percentage: 26.1, color: '#10b981' },
            { source: 'Social Media', users: 1456, percentage: 17.4, color: '#f59e0b' },
            { source: 'Paid Ads', users: 876, percentage: 10.5, color: '#8b5cf6' },
            { source: 'Referral', users: 312, percentage: 3.7, color: '#ef4444' }
        ];
        // Conversion funnel
        const conversionFunnel = [
            { name: 'Visitors', value: 12450, color: '#3b82f6' },
            { name: 'Page Views', value: 8930, color: '#06b6d4' },
            { name: 'Engaged Users', value: 4521, color: '#10b981' },
            { name: 'Leads', value: 1876, color: '#f59e0b' },
            { name: 'Customers', value: 234, color: '#ef4444' }
        ];
        // Content performance
        const contentPerformance = [
            { page: '/ai-playground', views: 12543, avgTime: 342, bounceRate: 23.4 },
            { page: '/pricing', views: 9876, avgTime: 195, bounceRate: 45.6 },
            { page: '/about', views: 8765, avgTime: 267, bounceRate: 35.2 },
            { page: '/services', views: 7654, avgTime: 423, bounceRate: 28.9 },
            { page: '/demo-request', views: 6543, avgTime: 156, bounceRate: 67.3 },
            { page: '/blog', views: 5432, avgTime: 298, bounceRate: 41.7 }
        ];
        // User journey
        const userJourney = [
            { step: 'Homepage', users: 10000, dropOff: 0 },
            { step: 'Services', users: 7500, dropOff: 25 },
            { step: 'Pricing', users: 5000, dropOff: 33.3 },
            { step: 'Demo Request', users: 2500, dropOff: 50 },
            { step: 'Consultation', users: 1250, dropOff: 50 },
            { step: 'Purchase', users: 625, dropOff: 50 }
        ];
        // Performance metrics
        const performanceMetrics = revenueData.map(item => ({
            ...item,
            loadTime: Math.random() * 2 + 1,
            coreWebVitals: Math.random() * 100,
            errorRate: Math.random() * 5
        }));
        return {
            revenueData,
            geographicData,
            deviceData,
            trafficSources,
            conversionFunnel,
            contentPerformance,
            userJourney,
            performanceMetrics
        };
    };
    // Chart colors for dark mode
    const getChartColors = () => ({
        primary: isDark ? '#60a5fa' : '#3b82f6',
        secondary: isDark ? '#34d399' : '#10b981',
        accent: isDark ? '#fbbf24' : '#f59e0b',
        text: isDark ? '#f8fafc' : '#1e293b',
        grid: isDark ? '#334155' : '#e2e8f0'
    });
    const colors = getChartColors();
    // Custom tooltip component
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (_jsxs("div", { className: "glass-heavy p-3 rounded-lg border border-slate-200 dark:border-slate-700", children: [_jsx("p", { className: "font-medium text-slate-900 dark:text-slate-100", children: label }), payload.map((entry, index) => (_jsxs("p", { style: { color: entry.color }, className: "text-sm", children: [entry.name, ": ", typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value] }, index)))] }));
        }
        return null;
    };
    if (isLoading || !chartData) {
        return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEOHead, { title: "Advanced Analytics - Delibix", description: "Comprehensive business analytics and data insights dashboard." }), _jsx("div", { className: "flex items-center justify-center min-h-screen", children: _jsx(LoadingSpinner, { size: "lg", variant: "delibix", text: "Loading analytics data..." }) })] }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEOHead, { title: "Advanced Analytics - Delibix", description: "Comprehensive business analytics and data insights dashboard." }), _jsx("div", { className: "border-b border-slate-200 dark:border-slate-700 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: _jsx("div", { className: "max-w-7xl mx-auto px-6 py-8", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center", children: _jsx(BarChart3, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: "Advanced Analytics" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mt-1", children: "Comprehensive business intelligence and data insights" })] })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsxs(Select, { value: timeRange, onValueChange: setTimeRange, children: [_jsx(SelectTrigger, { className: "w-32", children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "7d", children: "Last 7 days" }), _jsx(SelectItem, { value: "30d", children: "Last 30 days" }), _jsx(SelectItem, { value: "90d", children: "Last 90 days" })] })] }), _jsxs(Button, { variant: "outline", onClick: () => window.location.reload(), children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2" }), "Refresh"] }), _jsxs(Button, { className: "gradient-bg-blue text-white", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Export"] })] })] }) }) }), _jsx("div", { className: "max-w-7xl mx-auto px-6 py-8", children: _jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "space-y-8", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-6 gap-1 glass-heavy p-1", children: [_jsxs(TabsTrigger, { value: "overview", className: "flex items-center gap-2", children: [_jsx(BarChart3, { className: "w-4 h-4" }), "Overview"] }), _jsxs(TabsTrigger, { value: "traffic", className: "flex items-center gap-2", children: [_jsx(Users, { className: "w-4 h-4" }), "Traffic"] }), _jsxs(TabsTrigger, { value: "revenue", className: "flex items-center gap-2", children: [_jsx(DollarSign, { className: "w-4 h-4" }), "Revenue"] }), _jsxs(TabsTrigger, { value: "geographic", className: "flex items-center gap-2", children: [_jsx(Globe, { className: "w-4 h-4" }), "Geographic"] }), _jsxs(TabsTrigger, { value: "behavior", className: "flex items-center gap-2", children: [_jsx(Target, { className: "w-4 h-4" }), "Behavior"] }), _jsxs(TabsTrigger, { value: "performance", className: "flex items-center gap-2", children: [_jsx(Zap, { className: "w-4 h-4" }), "Performance"] })] }), _jsx(TabsContent, { value: "overview", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "space-y-8", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsx(Card, { className: "glass-heavy", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Total Revenue" }), _jsxs("p", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: ["$", chartData.revenueData.reduce((sum, item) => sum + item.revenue, 0).toLocaleString()] }), _jsxs("div", { className: "flex items-center gap-1 mt-1", children: [_jsx(TrendingUp, { className: "w-3 h-3 text-green-500" }), _jsx("span", { className: "text-xs text-green-600 dark:text-green-400", children: "+12.5%" })] })] }), _jsx("div", { className: "w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center", children: _jsx(DollarSign, { className: "w-6 h-6 text-green-600 dark:text-green-400" }) })] }) }) }), _jsx(Card, { className: "glass-heavy", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Total Users" }), _jsx("p", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: chartData.revenueData.reduce((sum, item) => sum + item.users, 0).toLocaleString() }), _jsxs("div", { className: "flex items-center gap-1 mt-1", children: [_jsx(TrendingUp, { className: "w-3 h-3 text-green-500" }), _jsx("span", { className: "text-xs text-green-600 dark:text-green-400", children: "+8.3%" })] })] }), _jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center", children: _jsx(Users, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) })] }) }) }), _jsx(Card, { className: "glass-heavy", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Page Views" }), _jsx("p", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: chartData.revenueData.reduce((sum, item) => sum + item.pageViews, 0).toLocaleString() }), _jsxs("div", { className: "flex items-center gap-1 mt-1", children: [_jsx(TrendingUp, { className: "w-3 h-3 text-green-500" }), _jsx("span", { className: "text-xs text-green-600 dark:text-green-400", children: "+5.7%" })] })] }), _jsx("div", { className: "w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center", children: _jsx(Eye, { className: "w-6 h-6 text-purple-600 dark:text-purple-400" }) })] }) }) }), _jsx(Card, { className: "glass-heavy", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Conversion Rate" }), _jsxs("p", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: [((chartData.revenueData.reduce((sum, item) => sum + item.conversions, 0) /
                                                                                chartData.revenueData.reduce((sum, item) => sum + item.users, 0)) * 100).toFixed(1), "%"] }), _jsxs("div", { className: "flex items-center gap-1 mt-1", children: [_jsx(TrendingDown, { className: "w-3 h-3 text-red-500" }), _jsx("span", { className: "text-xs text-red-600 dark:text-red-400", children: "-2.1%" })] })] }), _jsx("div", { className: "w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center", children: _jsx(Target, { className: "w-6 h-6 text-amber-600 dark:text-amber-400" }) })] }) }) })] }), _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-8", children: [_jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(LineChartIcon, { className: "w-5 h-5 text-blue-500" }), "Revenue Trend"] }), _jsx(CardDescription, { children: "Daily revenue over time" })] }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(AreaChart, { data: chartData.revenueData, children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "revenueGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: colors.primary, stopOpacity: 0.3 }), _jsx("stop", { offset: "95%", stopColor: colors.primary, stopOpacity: 0 })] }) }), _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: colors.grid }), _jsx(XAxis, { dataKey: "day", stroke: colors.text }), _jsx(YAxis, { stroke: colors.text }), _jsx(Tooltip, { content: _jsx(CustomTooltip, {}) }), _jsx(Area, { type: "monotone", dataKey: "revenue", stroke: colors.primary, fillOpacity: 1, fill: "url(#revenueGradient)" })] }) }) })] }), _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Users, { className: "w-5 h-5 text-green-500" }), "User Growth"] }), _jsx(CardDescription, { children: "Daily active users" })] }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(LineChart, { data: chartData.revenueData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: colors.grid }), _jsx(XAxis, { dataKey: "day", stroke: colors.text }), _jsx(YAxis, { stroke: colors.text }), _jsx(Tooltip, { content: _jsx(CustomTooltip, {}) }), _jsx(Line, { type: "monotone", dataKey: "users", stroke: colors.secondary, strokeWidth: 3, dot: { fill: colors.secondary, strokeWidth: 2, r: 4 } })] }) }) })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [_jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(PieChartIcon, { className: "w-5 h-5 text-purple-500" }), "Device Distribution"] }), _jsx(CardDescription, { children: "Users by device type" })] }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: chartData.deviceData, cx: "50%", cy: "50%", labelLine: false, label: ({ name, value }) => `${name}: ${value}%`, outerRadius: 80, fill: "#8884d8", dataKey: "value", children: chartData.deviceData.map((entry, index) => (_jsx(Cell, { fill: entry.color }, `cell-${index}`))) }), _jsx(Tooltip, { content: _jsx(CustomTooltip, {}) })] }) }) })] }), _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "w-5 h-5 text-blue-500" }), "Traffic Sources"] }), _jsx(CardDescription, { children: "Where your users come from" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: chartData.trafficSources.map((source, index) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: source.color } }), _jsx("span", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: source.source })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("span", { className: "text-sm text-slate-600 dark:text-slate-400", children: source.users.toLocaleString() }), _jsxs(Badge, { variant: "outline", className: "text-xs", children: [source.percentage, "%"] })] })] }, index))) }) })] })] })] }) }), _jsx(TabsContent, { value: "traffic", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "space-y-8", children: _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Traffic Analytics Implementation" }), _jsx(CardDescription, { children: "This would contain detailed traffic analysis including user flow, bounce rates, session duration, and more comprehensive traffic metrics." })] }), _jsx(CardContent, { children: _jsx("div", { className: "h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-lg", children: _jsxs("div", { className: "text-center", children: [_jsx(Users, { className: "w-12 h-12 text-slate-400 mx-auto mb-4" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: "Advanced traffic analytics charts would be displayed here" })] }) }) })] }) }) })] }) })] }));
}
//# sourceMappingURL=AdvancedAnalyticsDashboard.js.map