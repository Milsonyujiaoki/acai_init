"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Store, TrendingUp, Zap, Target, CheckCircle, Star, ArrowRight, Award, Mail, Users, Search, Filter, Download, Heart, ShoppingBag, Verified, Globe } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function DigitalMarketplacePage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    const marketplaceStats = [
        {
            title: "Digital Solutions",
            value: "2,500+",
            description: "Apps, tools & templates available",
            icon: Store,
            growth: "Growing ecosystem"
        },
        {
            title: "Active Vendors",
            value: "500+",
            description: "Certified solution providers",
            icon: Users,
            growth: "Trusted partners"
        },
        {
            title: "Downloads",
            value: "1M+",
            description: "Solutions downloaded globally",
            icon: Download,
            growth: "Proven adoption"
        },
        {
            title: "Success Rate",
            value: "98%",
            description: "Customer satisfaction rating",
            icon: CheckCircle,
            growth: "Exceptional quality"
        }
    ];
    // Featured marketplace categories
    const marketplaceCategories = [
        {
            id: 1,
            name: "AI & Machine Learning",
            description: "Intelligent automation and analytics solutions",
            icon: "🤖",
            solutionCount: 450,
            averageRating: 4.8,
            popularSolutions: [
                "AI Process Optimizer",
                "Smart Analytics Dashboard",
                "Predictive Maintenance AI",
                "Customer Intelligence Platform"
            ],
            priceRange: "$99 - $999/month",
            featured: true
        },
        {
            id: 2,
            name: "Business Process Automation",
            description: "Streamline operations with workflow automation",
            icon: "⚙️",
            solutionCount: 380,
            averageRating: 4.7,
            popularSolutions: [
                "Workflow Engine Pro",
                "Document Automation Suite",
                "Approval Management System",
                "Task Orchestrator"
            ],
            priceRange: "$49 - $499/month",
            featured: true
        },
        {
            id: 3,
            name: "Data Analytics & BI",
            description: "Business intelligence and data visualization tools",
            icon: "📊",
            solutionCount: 320,
            averageRating: 4.9,
            popularSolutions: [
                "Real-time Analytics Pro",
                "Executive Dashboard Suite",
                "Data Visualization Toolkit",
                "KPI Monitoring Platform"
            ],
            priceRange: "$79 - $799/month",
            featured: true
        },
        {
            id: 4,
            name: "Customer Experience",
            description: "Enhance customer interactions and satisfaction",
            icon: "👥",
            solutionCount: 280,
            averageRating: 4.6,
            popularSolutions: [
                "CX Management Platform",
                "Customer Journey Mapper",
                "Feedback Analytics Tool",
                "Personalization Engine"
            ],
            priceRange: "$59 - $599/month",
            featured: false
        },
        {
            id: 5,
            name: "Cloud Infrastructure",
            description: "Scalable cloud solutions and services",
            icon: "☁️",
            solutionCount: 250,
            averageRating: 4.8,
            popularSolutions: [
                "Multi-Cloud Manager",
                "Container Orchestration",
                "Serverless Platform",
                "Cloud Security Suite"
            ],
            priceRange: "$29 - $2999/month",
            featured: false
        },
        {
            id: 6,
            name: "Cybersecurity",
            description: "Advanced security and compliance solutions",
            icon: "🔒",
            solutionCount: 200,
            averageRating: 4.9,
            popularSolutions: [
                "Zero Trust Security",
                "Threat Detection AI",
                "Compliance Manager",
                "Identity & Access Management"
            ],
            priceRange: "$99 - $1999/month",
            featured: false
        }
    ];
    // Featured solutions showcase
    const featuredSolutions = [
        {
            id: 1,
            name: "SmartFlow Pro",
            vendor: "FlowTech Solutions",
            category: "Business Process Automation",
            rating: 4.9,
            reviews: 1247,
            price: "$199/month",
            description: "Intelligent workflow automation platform with AI-powered optimization and real-time analytics.",
            features: ["Drag & Drop Builder", "AI Optimization", "Real-time Analytics", "Multi-platform Integration"],
            verified: true,
            downloads: "50K+",
            image: "🚀"
        },
        {
            id: 2,
            name: "DataViz Enterprise",
            vendor: "Analytics Pro Inc",
            category: "Data Analytics & BI",
            rating: 4.8,
            reviews: 987,
            price: "$299/month",
            description: "Advanced data visualization and business intelligence platform with enterprise-grade security.",
            features: ["Interactive Dashboards", "Real-time Data", "Custom Reports", "API Integration"],
            verified: true,
            downloads: "35K+",
            image: "📈"
        },
        {
            id: 3,
            name: "AI Customer Insights",
            vendor: "CX Innovation Labs",
            category: "Customer Experience",
            rating: 4.7,
            reviews: 723,
            price: "$149/month",
            description: "AI-powered customer analytics platform providing deep insights into customer behavior and preferences.",
            features: ["Behavioral Analytics", "Sentiment Analysis", "Predictive Modeling", "Journey Mapping"],
            verified: true,
            downloads: "28K+",
            image: "🎯"
        }
    ];
    // Marketplace success metrics
    const successMetrics = [
        {
            category: "Solution Quality",
            metrics: [
                { metric: "Average Rating", value: "4.8/5", benchmark: "Industry: 4.2/5" },
                { metric: "Verification Rate", value: "95%", benchmark: "Industry: 67%" },
                { metric: "Update Frequency", value: "Weekly", benchmark: "Industry: Monthly" },
                { metric: "Support Response", value: "<2hrs", benchmark: "Industry: <24hrs" }
            ]
        },
        {
            category: "Marketplace Performance",
            metrics: [
                { metric: "Solution Availability", value: "99.9%", benchmark: "Target: 99%" },
                { metric: "Download Success", value: "99.8%", benchmark: "Target: 95%" },
                { metric: "Search Accuracy", value: "96%", benchmark: "Target: 85%" },
                { metric: "Payment Security", value: "100%", benchmark: "Required: 100%" }
            ]
        },
        {
            category: "Vendor Success",
            metrics: [
                { metric: "Vendor Satisfaction", value: "94%", benchmark: "Target: 85%" },
                { metric: "Revenue Growth", value: "+320%", benchmark: "Target: +200%" },
                { metric: "Customer Retention", value: "91%", benchmark: "Target: 80%" },
                { metric: "Solution Updates", value: "2.5x/month", benchmark: "Target: 1x/month" }
            ]
        }
    ];
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => {
                                    const icons = [Store, ShoppingBag, Globe, Award, Verified, Target];
                                    const IconComponent = icons[i % icons.length];
                                    return (_jsx(motion.div, { className: "absolute", style: {
                                            left: `${10 + (i % 5) * 20}%`,
                                            top: `${10 + Math.floor(i / 5) * 25}%`,
                                        }, animate: {
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 15, -15, 0],
                                            opacity: [0.3, 0.8, 0.3]
                                        }, transition: {
                                            duration: 10,
                                            repeat: Infinity,
                                            delay: i * 0.6
                                        }, children: _jsx(IconComponent, { className: "w-16 h-16 text-blue-500" }) }, i));
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Store, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "Digital Ecosystem" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Digital ", _jsx("span", { className: "gradient-text-blue", children: "Marketplace" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Comprehensive digital marketplace with 2,500+ solutions and 500+ certified vendors. 1M+ downloads globally with 98% customer satisfaction and growing ecosystem." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: marketplaceStats.map((stat, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(stat.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: stat.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: stat.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'} mb-2`, children: stat.description }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: stat.growth })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => {
                                                const element = document.getElementById('marketplace-browse');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Browse Marketplace", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('api-exchange'), children: "API Exchange" })] })] }) })] }), _jsx("section", { id: "marketplace-browse", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Solution ", _jsx("span", { className: "gradient-text-blue", children: "Categories" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Discover enterprise-grade solutions across six major categories with 2,500+ verified applications and tools." })] }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: `glass-heavy rounded-2xl p-6 mb-12 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsxs("div", { className: "flex-1 relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" }), _jsx(Input, { placeholder: "Search solutions, vendors, or categories...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-10 h-12" })] }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", className: "h-12 px-6", children: [_jsx(Filter, { className: "w-4 h-4 mr-2" }), "Filters"] }), _jsx(Button, { className: "h-12 px-6 gradient-bg-blue text-white", children: "Search" })] })] }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16", children: marketplaceCategories.map((category, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 h-full cursor-pointer hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'} ${category.featured ? 'ring-2 ring-blue-500' : ''}`, children: [_jsxs("div", { className: "mb-6", children: [_jsx("div", { className: "text-4xl mb-4", children: category.icon }), _jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsx("h3", { className: `text-xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: category.name }), category.featured && (_jsx(Badge, { className: "gradient-bg-blue text-white", children: "Featured" }))] }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-6`, children: category.description })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: `glass-secondary rounded-xl p-3 text-center ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsx("div", { className: `text-lg font-bold gradient-text-blue`, children: category.solutionCount }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: "Solutions" })] }), _jsxs("div", { className: `glass-secondary rounded-xl p-3 text-center ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsx("div", { className: `text-lg font-bold gradient-text-blue`, children: category.averageRating }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: "Avg Rating" })] })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Popular Solutions:" }), _jsx("div", { className: "space-y-1", children: category.popularSolutions.slice(0, 3).map((solution, solutionIndex) => (_jsxs("div", { className: `text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: ["\u2022 ", solution] }, solutionIndex))) })] }), _jsxs("div", { className: "flex items-center justify-between pt-2", children: [_jsx("div", { className: `text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: category.priceRange }), _jsx(Button, { size: "sm", variant: "outline", children: "Explore" })] })] })] }, category.id))) }), _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "mb-16", children: [_jsxs("h3", { className: `text-3xl font-bold mb-8 text-center ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Featured ", _jsx("span", { className: "gradient-text-blue", children: "Solutions" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: featuredSolutions.map((solution, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-6 h-full ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: "mb-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsx("div", { className: "text-3xl", children: solution.image }), solution.verified && (_jsxs(Badge, { className: "bg-green-100 text-green-700 border-green-200", children: [_jsx(Verified, { className: "w-3 h-3 mr-1" }), "Verified"] }))] }), _jsx("h4", { className: `text-lg font-bold mb-1 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: solution.name }), _jsxs("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-2`, children: ["by ", solution.vendor] }), _jsx(Badge, { variant: "outline", className: "text-xs mb-3", children: solution.category }), _jsx("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-4`, children: solution.description })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h5", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Key Features:" }), _jsx("div", { className: "space-y-1", children: solution.features.map((feature, featureIndex) => (_jsxs("div", { className: `text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: ["\u2022 ", feature] }, featureIndex))) })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-1 mb-1", children: [_jsx(Star, { className: "w-4 h-4 text-yellow-500 fill-current" }), _jsx("span", { className: `text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: solution.rating }), _jsxs("span", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: ["(", solution.reviews, ")"] })] }), _jsxs("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: [solution.downloads, " downloads"] })] }), _jsxs("div", { className: "text-right", children: [_jsx("div", { className: `text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: solution.price }), _jsx(Button, { size: "sm", className: "mt-2 gradient-bg-blue text-white", children: "View Details" })] })] })] })] }, solution.id))) })] })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Marketplace ", _jsx("span", { className: "gradient-text-blue", children: "Excellence" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Industry-leading marketplace performance across solution quality, platform reliability, and vendor success metrics." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: successMetrics.map((category, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 h-full ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-2xl font-bold mb-6 text-center ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: category.category }), _jsx("div", { className: "space-y-4", children: category.metrics.map((metric, metricIndex) => (_jsxs("div", { className: `glass-secondary rounded-xl p-4 ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("div", { className: `text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: metric.metric }), _jsx("div", { className: `text-lg font-bold gradient-text-blue`, children: metric.value })] }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: metric.benchmark })] }, metricIndex))) })] }, category.category))) })] }) }), _jsxs("section", { className: "py-16 lg:py-24 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 transition-colors duration-300" }), _jsx("div", { className: "max-w-4xl mx-auto px-6 relative z-10", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsxs("div", { className: "glass-heavy rounded-3xl p-12 text-center relative overflow-hidden border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl transition-colors duration-300" }), _jsxs("div", { className: "relative z-10", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-lg", children: _jsx(Store, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300", children: "Ready to Explore Our Digital Marketplace?" }), _jsx("div", { className: "text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300", children: "Access 2,500+ digital solutions from 500+ certified vendors with 1M+ downloads and 98% satisfaction rating." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl border-0 shadow-lg relative overflow-hidden transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: "relative z-10 flex items-center", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Browse Solutions"] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "glass-secondary border-2 border-blue-300 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300", onClick: () => navigate('contact'), children: "Become a Vendor" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-blue-200 dark:border-blue-600/50 transition-colors duration-300", children: [_jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Comprehensive Solutions" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "2,500+ solutions & 500+ vendors" })] }), _jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Proven Quality" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "1M+ downloads & 98% satisfaction" })] })] })] })] }) }) })] })] }));
}
//# sourceMappingURL=DigitalMarketplacePage.js.map