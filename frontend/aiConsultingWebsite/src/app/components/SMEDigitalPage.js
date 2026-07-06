"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Users, TrendingUp, BarChart3, CheckCircle, Star, ArrowRight, Brain, Smartphone, Briefcase, Database, Monitor, Clock, Target, Zap, Award, Globe, Search, Bell, MessageSquare, Calendar, Mail, Phone, Video, Headphones, DollarSign, Rocket, Shield, Settings, Lightbulb, Package, Store } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function SMEDigitalPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // SME Digital Solutions
    const smeSolutions = [
        {
            title: "Business Management Suite",
            description: "Complete business management platform integrating CRM, accounting, inventory, and project management for SMEs.",
            icon: Briefcase,
            features: [
                "Customer relationship management",
                "Financial management & accounting",
                "Inventory tracking & management",
                "Project & task management"
            ],
            metrics: {
                efficiency: "50% operational efficiency",
                time: "40% time savings",
                cost: "30% cost reduction"
            },
            priceRange: "Affordable packages starting $99/month"
        },
        {
            title: "Digital Marketing Automation",
            description: "AI-powered marketing automation platform designed specifically for small and medium businesses to compete effectively.",
            icon: TrendingUp,
            features: [
                "Social media management",
                "Email marketing automation",
                "Lead generation & nurturing",
                "Analytics & reporting"
            ],
            metrics: {
                leads: "200% lead increase",
                conversion: "35% better conversion",
                engagement: "3x social engagement"
            },
            priceRange: "Starting from $79/month"
        },
        {
            title: "E-commerce Starter Kit",
            description: "Complete e-commerce solution tailored for SMEs to quickly establish online presence and start selling digitally.",
            icon: Store,
            features: [
                "Professional website & store",
                "Payment gateway integration",
                "Inventory & order management",
                "Mobile-responsive design"
            ],
            metrics: {
                sales: "150% online sales boost",
                reach: "5x customer reach",
                setup: "Setup in 7 days"
            },
            priceRange: "Complete package from $149/month"
        },
        {
            title: "Business Intelligence Dashboard",
            description: "Simple yet powerful analytics dashboard providing SMEs with insights to make data-driven business decisions.",
            icon: BarChart3,
            features: [
                "Real-time business metrics",
                "Financial performance tracking",
                "Customer analytics",
                "Automated reports"
            ],
            metrics: {
                insights: "Real-time insights",
                decisions: "Faster decision making",
                growth: "25% revenue growth"
            },
            priceRange: "Analytics from $59/month"
        }
    ];
    // SME Digital Benefits
    const smeDigitalBenefits = [
        {
            title: "Affordable Solutions",
            value: "70%",
            description: "Cost savings vs traditional solutions",
            icon: DollarSign
        },
        {
            title: "Quick Implementation",
            value: "7 Days",
            description: "Average setup time",
            icon: Rocket
        },
        {
            title: "Business Growth",
            value: "150%",
            description: "Average revenue increase",
            icon: TrendingUp
        },
        {
            title: "Customer Support",
            value: "24/7",
            description: "Dedicated SME support",
            icon: Users
        }
    ];
    // SME Industry Stats
    const industryStats = [
        { label: "SME Clients", value: "500+", desc: "Successfully transformed" },
        { label: "Average ROI", value: "280%", desc: "Within 12 months" },
        { label: "Business Growth", value: "150%", desc: "Average increase" },
        { label: "Cost Savings", value: "40%", desc: "Operational efficiency" }
    ];
    // SME Success Stories
    const successStories = [
        {
            organization: "Warung Digital Indonesia",
            size: "15 employees",
            industry: "Food & Beverage",
            challenge: "Manual ordering system and lack of online presence limiting growth potential",
            solution: "Complete digital transformation with e-commerce platform, POS system, and digital marketing",
            results: [
                "300% increase in online orders",
                "50% operational cost reduction",
                "Expanded to 5 new locations",
                "4.8/5 customer satisfaction rating"
            ]
        },
        {
            organization: "Batik Heritage Craft",
            size: "25 employees",
            industry: "Traditional Crafts",
            challenge: "Traditional business model struggling to reach modern customers and manage operations",
            solution: "E-commerce platform, inventory management, and digital marketing to reach global customers",
            results: [
                "500% increase in sales revenue",
                "International market expansion",
                "90% inventory optimization",
                "Digital presence in 10 countries"
            ]
        }
    ];
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => {
                                    const icons = [Building2, Briefcase, Store, Lightbulb, Rocket, Settings];
                                    const IconComponent = icons[i % icons.length];
                                    return (_jsx(motion.div, { className: "absolute", style: {
                                            left: `${15 + (i % 5) * 18}%`,
                                            top: `${15 + Math.floor(i / 5) * 25}%`,
                                        }, animate: {
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, -5, 0],
                                            opacity: [0.3, 0.7, 0.3]
                                        }, transition: {
                                            duration: 6,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }, children: _jsx(IconComponent, { className: "w-12 h-12 text-blue-500" }) }, i));
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Building2, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "SME Digital Transformation" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["SME ", _jsx("span", { className: "gradient-text-blue", children: "Digital Success" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Affordable digital transformation solutions designed specifically for small and medium enterprises. Compete with larger businesses using powerful yet budget-friendly AI-native tools." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: smeDigitalBenefits.map((benefit, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(benefit.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: benefit.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: benefit.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: benefit.description })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Start SME Digital Journey", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('sme-solutions');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "Explore SME Solutions" }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('pricing'), children: "View Affordable Pricing" })] })] }) })] }), _jsx("section", { id: "sme-solutions", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["SME ", _jsx("span", { className: "gradient-text-blue", children: "Solutions" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Powerful digital solutions specifically designed and priced for small and medium enterprises to compete effectively in the digital marketplace." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: smeSolutions.map((solution, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: `flex items-start gap-6 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `w-16 h-16 rounded-2xl gradient-bg-blue flex items-center justify-center flex-shrink-0`, children: _jsx(solution.icon, { className: "w-8 h-8 text-white" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: `text-xl font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: solution.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-4`, children: solution.description })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: `text-sm font-semibold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Key Features:" }), _jsx("ul", { className: "space-y-2", children: solution.features.map((feature, featureIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), feature] }, featureIndex))) })] }), _jsx("div", { className: "mb-4", children: _jsx("div", { className: "grid grid-cols-1 gap-3 mb-4", children: Object.entries(solution.metrics).map(([key, value]) => (_jsx("div", { className: `p-3 rounded-xl ${isDark ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-200'}`, children: _jsx("div", { className: `text-sm font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`, children: value }) }, key))) }) }), _jsx("div", { className: `p-4 rounded-xl ${isDark ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'}`, children: _jsxs("div", { className: `text-sm font-semibold ${isDark ? 'text-green-400' : 'text-green-600'}`, children: ["\uD83D\uDCB0 ", solution.priceRange] }) })] }, solution.title))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["SME ", _jsx("span", { className: "gradient-text-blue", children: "Success Stories" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Real success stories from small and medium enterprises that transformed their businesses with Delibix." })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: successStories.map((story, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -30 : 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: `flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Building2, { className: "w-8 h-8 text-blue-500" }), _jsxs("div", { children: [_jsx("h3", { className: `text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: story.organization }), _jsxs("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [story.size, " \u2022 ", story.industry] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Challenge:" }), _jsx("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: story.challenge })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Solution:" }), _jsx("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: story.solution })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Results Achieved:" }), _jsx("ul", { className: "space-y-2", children: story.results.map((result, resultIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), result] }, resultIndex))) })] })] })] }, story.organization))) })] }) }), _jsx("section", { className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsx("div", { className: "max-w-4xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Ready to Grow Your ", _jsx("span", { className: "gradient-text-blue", children: "SME Business" }), "?"] }), _jsx("p", { className: `text-xl ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: "Join 500+ SMEs that have successfully digitized their operations with affordable Delibix solutions." }), _jsxs("div", { className: `flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Get Free SME Assessment", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                            ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                            : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('contact'), children: "Contact SME Specialists" })] })] }) }) })] }));
}
//# sourceMappingURL=SMEDigitalPage.js.map