"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Settings, Workflow, TrendingUp, Users, BarChart3, CheckCircle, Star, ArrowRight, Brain, Cog, Building2, Database, Monitor, Clock, Target, Zap, Award, Globe, Search, Bell, MessageSquare, Calendar, Mail, Phone, Video, Headphones, Layers, Network, Activity, Gauge, Eye, FileText, Bot } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function BusinessProcessPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // Business Process Services
    const processServices = [
        {
            title: "Process Analysis & Mapping",
            description: "Comprehensive analysis of existing business processes with detailed mapping and optimization recommendations.",
            icon: Network,
            phase: "Discovery",
            deliverables: [
                "Current state process documentation",
                "Process flow diagrams & mapping",
                "Bottleneck identification report",
                "Optimization opportunity analysis"
            ],
            benefits: [
                "Complete process visibility",
                "Identify inefficiencies",
                "Cost reduction opportunities",
                "Foundation for improvement"
            ],
            timeline: "2-4 weeks"
        },
        {
            title: "Process Automation Design",
            description: "Design and implementation of automated workflows using AI and RPA technologies to eliminate manual tasks.",
            icon: Bot,
            phase: "Design",
            deliverables: [
                "Automation opportunity assessment",
                "Workflow automation design",
                "Technology selection & architecture",
                "Implementation roadmap"
            ],
            benefits: [
                "80% reduction in manual tasks",
                "Improved accuracy & consistency",
                "Faster process execution",
                "Resource reallocation"
            ],
            timeline: "3-6 weeks"
        },
        {
            title: "Performance Optimization",
            description: "Continuous improvement of business processes through data analytics, AI insights, and performance monitoring.",
            icon: Gauge,
            phase: "Optimize",
            deliverables: [
                "Performance monitoring dashboard",
                "KPI measurement framework",
                "Continuous improvement plan",
                "Regular optimization reports"
            ],
            benefits: [
                "Real-time performance insights",
                "Data-driven decision making",
                "Continuous improvement culture",
                "Sustained performance gains"
            ],
            timeline: "Ongoing"
        },
        {
            title: "Change Management",
            description: "Comprehensive change management strategy to ensure successful adoption of new processes across the organization.",
            icon: Users,
            phase: "Implementation",
            deliverables: [
                "Change management strategy",
                "Training programs & materials",
                "Communication plan",
                "Adoption monitoring system"
            ],
            benefits: [
                "Smooth process transition",
                "High user adoption rates",
                "Minimized resistance",
                "Sustained organizational change"
            ],
            timeline: "4-8 weeks"
        }
    ];
    // Process Optimization Benefits
    const optimizationBenefits = [
        {
            title: "Efficiency Gain",
            value: "60%",
            description: "Average process efficiency improvement",
            icon: Zap
        },
        {
            title: "Cost Reduction",
            value: "40%",
            description: "Operational cost savings",
            icon: TrendingUp
        },
        {
            title: "Time Savings",
            value: "50%",
            description: "Process execution time reduction",
            icon: Clock
        },
        {
            title: "Error Reduction",
            value: "90%",
            description: "Decrease in manual errors",
            icon: Target
        }
    ];
    // Process Improvement Methodology
    const methodology = [
        {
            step: "01",
            title: "Assess",
            description: "Comprehensive analysis of current processes, workflows, and pain points",
            icon: Eye,
            activities: [
                "Process discovery workshops",
                "Current state documentation",
                "Stakeholder interviews",
                "Performance baseline measurement"
            ]
        },
        {
            step: "02",
            title: "Design",
            description: "Design optimized processes with automation and efficiency improvements",
            icon: Workflow,
            activities: [
                "Future state process design",
                "Automation opportunity identification",
                "Technology solution architecture",
                "Implementation planning"
            ]
        },
        {
            step: "03",
            title: "Implement",
            description: "Gradual implementation with change management and user training",
            icon: Settings,
            activities: [
                "Pilot implementation",
                "User training programs",
                "System integration",
                "Performance monitoring setup"
            ]
        },
        {
            step: "04",
            title: "Optimize",
            description: "Continuous monitoring and optimization for sustained improvements",
            icon: Gauge,
            activities: [
                "Performance tracking",
                "Continuous improvement",
                "Regular optimization reviews",
                "Success measurement"
            ]
        }
    ];
    // Industry Stats
    const industryStats = [
        { label: "Process Projects", value: "250+", desc: "Successfully optimized" },
        { label: "Efficiency Gain", value: "60%", desc: "Average improvement" },
        { label: "Cost Savings", value: "40%", desc: "Operational reduction" },
        { label: "Client Satisfaction", value: "4.8/5", desc: "Process consulting rating" }
    ];
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => {
                                    const icons = [Workflow, Settings, Cog, Network, Activity, Gauge];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Workflow, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "Business Process Optimization" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Process ", _jsx("span", { className: "gradient-text-blue", children: "Excellence" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Transform your business processes with AI-powered optimization and automation. Achieve operational excellence through data-driven process improvements and smart workflow design." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: optimizationBenefits.map((benefit, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(benefit.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: benefit.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: benefit.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: benefit.description })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Start Process Optimization", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('process-methodology');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "Our Methodology" }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('process-optimizer'), children: "Process Assessment Tool" })] })] }) })] }), _jsx("section", { id: "process-methodology", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Our Process ", _jsx("span", { className: "gradient-text-blue", children: "Methodology" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "A proven 4-phase methodology for business process optimization that delivers measurable improvements and sustainable results." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: methodology.map((step, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-6 rounded-2xl gradient-bg-blue flex items-center justify-center`, children: _jsx(step.icon, { className: "w-8 h-8 text-white" }) }), _jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: step.step }), _jsx("h3", { className: `text-xl font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: step.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-6`, children: step.description }), _jsx("ul", { className: "space-y-2", children: step.activities.map((activity, activityIndex) => (_jsxs("li", { className: `text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: ["\u2022 ", activity] }, activityIndex))) })] }, step.step))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Process ", _jsx("span", { className: "gradient-text-blue", children: "Services" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Comprehensive business process consulting services designed to transform your operations and drive sustainable performance improvements." })] }), _jsx("div", { className: "space-y-8", children: processServices.map((service, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: `flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `w-12 h-12 rounded-xl gradient-bg-blue flex items-center justify-center`, children: _jsx(service.icon, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { children: [_jsx(Badge, { className: "mb-2", variant: "secondary", children: service.phase }), _jsx("h3", { className: `text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: service.title }), _jsxs("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: ["Timeline: ", service.timeline] })] })] }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: service.description })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Key Deliverables" }), _jsx("ul", { className: "space-y-2", children: service.deliverables.map((deliverable, deliverableIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), deliverable] }, deliverableIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Expected Benefits" }), _jsx("ul", { className: "space-y-2", children: service.benefits.map((benefit, benefitIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(Star, { className: "w-4 h-4 text-blue-500 flex-shrink-0" }), benefit] }, benefitIndex))) })] }), _jsx("div", { className: "flex flex-col justify-center", children: _jsx(Button, { className: "gradient-bg-blue text-white rounded-xl", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Get Started", _jsx(ArrowRight, { className: `w-4 h-4 ${isRTL ? 'rotate-180' : ''}` })] }) }) })] }) }, service.title))) })] }) }), _jsx("section", { className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsx("div", { className: "max-w-4xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Ready to Optimize Your ", _jsx("span", { className: "gradient-text-blue", children: "Business Processes" }), "?"] }), _jsx("p", { className: `text-xl ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: "Start your process transformation journey with a comprehensive assessment and optimization plan." }), _jsxs("div", { className: `flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Start Process Assessment", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                            ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                            : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('contact'), children: "Contact Process Experts" })] })] }) }) })] }));
}
//# sourceMappingURL=BusinessProcessPage.js.map