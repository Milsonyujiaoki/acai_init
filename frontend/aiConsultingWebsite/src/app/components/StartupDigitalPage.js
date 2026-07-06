"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Rocket, TrendingUp, Zap, Users, CheckCircle, Star, ArrowRight, Brain, Lightbulb, Target, Database, Monitor, Clock, DollarSign, Award, Globe, Search, Bell, MessageSquare, Calendar, Mail, Phone, Video, Headphones, Settings, BarChart3, Activity, Network, Smartphone, Laptop } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function StartupDigitalPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // Startup Digital Solutions
    const startupSolutions = [
        {
            title: "MVP Development & Launch",
            description: "Rapid MVP development with AI-powered features, user analytics, and scalable architecture for quick market entry.",
            icon: Rocket,
            features: [
                "Rapid prototyping & development",
                "AI-powered feature integration",
                "User analytics & feedback loops",
                "Scalable cloud architecture"
            ],
            metrics: {
                speed: "60% faster time to market",
                cost: "50% lower development cost",
                scalability: "10x growth capacity"
            },
            pricing: "MVP packages from $15K"
        },
        {
            title: "Growth & Scaling Platform",
            description: "Complete growth toolkit with marketing automation, customer analytics, and performance optimization for rapid scaling.",
            icon: TrendingUp,
            features: [
                "Marketing automation suite",
                "Customer acquisition analytics",
                "Performance optimization",
                "A/B testing framework"
            ],
            metrics: {
                growth: "200% user acquisition",
                conversion: "80% better conversion",
                retention: "60% higher retention"
            },
            pricing: "Growth plans from $2K/month"
        },
        {
            title: "AI-First Product Development",
            description: "AI-native product development framework enabling startups to build intelligent products with competitive advantages.",
            icon: Brain,
            features: [
                "AI model integration",
                "Machine learning pipelines",
                "Natural language processing",
                "Computer vision capabilities"
            ],
            metrics: {
                intelligence: "AI-powered features",
                advantage: "Competitive differentiation",
                automation: "80% process automation"
            },
            pricing: "AI solutions from $10K"
        },
        {
            title: "Investor-Ready Analytics",
            description: "Comprehensive analytics dashboard and reporting system designed for investor presentations and funding rounds.",
            icon: BarChart3,
            features: [
                "Real-time business metrics",
                "Investor-grade reporting",
                "Growth projection models",
                "Financial performance tracking"
            ],
            metrics: {
                insights: "Real-time business insights",
                funding: "Higher funding success rate",
                decisions: "Data-driven strategies"
            },
            pricing: "Analytics platform from $500/month"
        }
    ];
    // Startup Success Accelerators
    const successAccelerators = [
        {
            title: "Speed to Market",
            value: "60%",
            description: "Faster product launch",
            icon: Zap
        },
        {
            title: "Cost Efficiency",
            value: "50%",
            description: "Lower development costs",
            icon: DollarSign
        },
        {
            title: "Growth Rate",
            value: "200%",
            description: "User acquisition increase",
            icon: TrendingUp
        },
        {
            title: "Success Rate",
            value: "85%",
            description: "Startup success with our platform",
            icon: Target
        }
    ];
    // Industry Stats
    const industryStats = [
        { label: "Startups Accelerated", value: "200+", desc: "Successfully launched" },
        { label: "Total Funding Raised", value: "$50M+", desc: "By our startup clients" },
        { label: "Average Growth Rate", value: "200%", desc: "User acquisition" },
        { label: "Success Rate", value: "85%", desc: "Achieving product-market fit" }
    ];
    // Success Stories
    const successStories = [
        {
            organization: "TechFlow Indonesia",
            stage: "Series A Startup",
            industry: "FinTech",
            challenge: "Needed rapid MVP development and AI-powered features to compete with established financial institutions",
            solution: "AI-first product development with automated financial analytics and rapid MVP deployment",
            results: [
                "Launch in 8 weeks vs 6 months",
                "500K+ users in first year",
                "$3M Series A funding raised",
                "80% lower development costs"
            ]
        },
        {
            organization: "GreenTech Solutions",
            stage: "Seed Stage",
            industry: "Sustainability",
            challenge: "Limited budget but needed comprehensive platform for environmental monitoring and AI-powered insights",
            solution: "MVP development with IoT integration and investor-ready analytics dashboard",
            results: [
                "Product-market fit in 4 months",
                "200% month-over-month growth",
                "$1.5M seed funding secured",
                "Partnership with 3 major corporations"
            ]
        }
    ];
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => {
                                    const icons = [Rocket, Lightbulb, TrendingUp, Zap, Target, Brain];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Rocket, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "Startup Digital Acceleration" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Startup ", _jsx("span", { className: "gradient-text-blue", children: "Acceleration" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Accelerate your startup journey with AI-first product development. From rapid MVP creation to scaling platforms, we provide the digital foundation for startup success and growth." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: successAccelerators.map((accelerator, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(accelerator.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: accelerator.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: accelerator.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: accelerator.description })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Launch Your Startup", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('startup-solutions');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "Explore Startup Solutions" }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('pricing'), children: "View Startup Pricing" })] })] }) })] }), _jsx("section", { id: "startup-solutions", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Startup ", _jsx("span", { className: "gradient-text-blue", children: "Solutions" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Comprehensive digital solutions designed specifically for startups to accelerate growth, reduce costs, and achieve product-market fit faster." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: startupSolutions.map((solution, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: `flex items-start gap-6 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `w-16 h-16 rounded-2xl gradient-bg-blue flex items-center justify-center flex-shrink-0`, children: _jsx(solution.icon, { className: "w-8 h-8 text-white" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: `text-xl font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: solution.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-4`, children: solution.description })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: `text-sm font-semibold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Key Features:" }), _jsx("ul", { className: "space-y-2", children: solution.features.map((feature, featureIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), feature] }, featureIndex))) })] }), _jsx("div", { className: "mb-4", children: _jsx("div", { className: "grid grid-cols-1 gap-3 mb-4", children: Object.entries(solution.metrics).map(([key, value]) => (_jsx("div", { className: `p-3 rounded-xl ${isDark ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-200'}`, children: _jsx("div", { className: `text-sm font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`, children: value }) }, key))) }) }), _jsx("div", { className: `p-4 rounded-xl ${isDark ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'}`, children: _jsxs("div", { className: `text-sm font-semibold ${isDark ? 'text-green-400' : 'text-green-600'}`, children: ["\uD83D\uDCB0 ", solution.pricing] }) })] }, solution.title))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Startup ", _jsx("span", { className: "gradient-text-blue", children: "Success Stories" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Real success stories from startups that accelerated their growth and achieved product-market fit with Delibix." })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: successStories.map((story, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -30 : 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: `flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Rocket, { className: "w-8 h-8 text-blue-500" }), _jsxs("div", { children: [_jsx("h3", { className: `text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: story.organization }), _jsxs("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [story.stage, " \u2022 ", story.industry] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Challenge:" }), _jsx("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: story.challenge })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Solution:" }), _jsx("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: story.solution })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Results Achieved:" }), _jsx("ul", { className: "space-y-2", children: story.results.map((result, resultIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), result] }, resultIndex))) })] })] })] }, story.organization))) })] }) }), _jsx("section", { className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsx("div", { className: "max-w-4xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Ready to Accelerate Your ", _jsx("span", { className: "gradient-text-blue", children: "Startup Journey" }), "?"] }), _jsx("p", { className: `text-xl ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: "Join 200+ startups that have successfully launched and scaled with Delibix digital acceleration platform." }), _jsxs("div", { className: `flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Start Your Startup Journey", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                            ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                            : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('contact'), children: "Contact Startup Experts" })] })] }) }) })] }));
}
//# sourceMappingURL=StartupDigitalPage.js.map