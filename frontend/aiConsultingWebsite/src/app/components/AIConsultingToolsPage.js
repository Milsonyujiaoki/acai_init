"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Brain, Bot, Zap, TrendingUp, CheckCircle, Star, ArrowRight, Settings, Target, Globe, Monitor, Clock, Award, BarChart3, Search, Bell, MessageSquare, Calendar, Mail, Phone, Video, Headphones, Activity, Laptop, Smartphone, Lightbulb, UserCheck, Eye, Layers, Network, Database, Workflow, Cog, Cpu } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function AIConsultingToolsPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // AI Consulting Tools
    const consultingTools = [
        {
            title: "AI Strategy Planner",
            description: "Comprehensive AI strategy development tool with industry-specific recommendations, implementation roadmaps, and ROI projections.",
            icon: Brain,
            category: "Strategy",
            features: [
                "Industry-specific AI strategy templates",
                "Implementation roadmap generator",
                "ROI calculation and projections",
                "Risk assessment framework"
            ],
            benefits: [
                "Accelerated strategy development",
                "Data-driven decision making",
                "Reduced implementation risks",
                "Clear business case creation"
            ],
            pricing: "Free",
            timeline: "30 minutes"
        },
        {
            title: "AI Readiness Assessment",
            description: "In-depth organizational readiness evaluation for AI adoption with personalized recommendations and capability gap analysis.",
            icon: UserCheck,
            category: "Assessment",
            features: [
                "Comprehensive readiness scoring",
                "Capability gap identification",
                "Technology infrastructure audit",
                "Team skills evaluation"
            ],
            benefits: [
                "Clear readiness baseline",
                "Prioritized improvement areas",
                "Resource requirement clarity",
                "Implementation timeline guidance"
            ],
            pricing: "Free",
            timeline: "45 minutes"
        },
        {
            title: "AI ROI Calculator",
            description: "Advanced ROI calculation tool with industry benchmarks, cost modeling, and benefit quantification for AI initiatives.",
            icon: BarChart3,
            category: "Analysis",
            features: [
                "Multi-scenario ROI modeling",
                "Industry benchmark comparisons",
                "Cost-benefit analysis",
                "Investment timeline planning"
            ],
            benefits: [
                "Accurate ROI projections",
                "Investment justification",
                "Budget planning support",
                "Performance tracking metrics"
            ],
            pricing: "Free",
            timeline: "20 minutes"
        },
        {
            title: "AI Implementation Planner",
            description: "Step-by-step implementation planning tool with resource allocation, timeline management, and milestone tracking.",
            icon: Settings,
            category: "Planning",
            features: [
                "Phase-by-phase planning",
                "Resource allocation optimizer",
                "Timeline and milestone tracking",
                "Risk mitigation strategies"
            ],
            benefits: [
                "Structured implementation approach",
                "Resource optimization",
                "Timeline predictability",
                "Risk minimization"
            ],
            pricing: "Premium",
            timeline: "60 minutes"
        },
        {
            title: "AI Vendor Selector",
            description: "Intelligent vendor comparison and selection tool with comprehensive evaluation criteria and recommendation engine.",
            icon: Search,
            category: "Selection",
            features: [
                "Vendor capability comparison",
                "Requirements matching",
                "Cost-benefit analysis",
                "Integration assessment"
            ],
            benefits: [
                "Optimal vendor selection",
                "Reduced selection time",
                "Objective decision making",
                "Integration risk reduction"
            ],
            pricing: "Premium",
            timeline: "90 minutes"
        },
        {
            title: "AI Performance Monitor",
            description: "Real-time AI system performance monitoring with KPI tracking, alert management, and optimization recommendations.",
            icon: Monitor,
            category: "Monitoring",
            features: [
                "Real-time performance tracking",
                "KPI dashboard and alerts",
                "Optimization recommendations",
                "Comparative benchmarking"
            ],
            benefits: [
                "Continuous performance optimization",
                "Proactive issue detection",
                "Data-driven improvements",
                "ROI maximization"
            ],
            pricing: "Enterprise",
            timeline: "Ongoing"
        }
    ];
    // Tools Framework
    const toolsFramework = [
        {
            step: "01",
            title: "Assess",
            description: "Evaluate current AI readiness and identify opportunities for intelligent automation",
            icon: Eye,
            activities: [
                "AI readiness assessment",
                "Opportunity identification",
                "Technology gap analysis",
                "Strategic planning"
            ]
        },
        {
            step: "02",
            title: "Plan",
            description: "Create comprehensive AI implementation strategy with clear roadmap and resource allocation",
            icon: Target,
            activities: [
                "Strategy development",
                "Implementation planning",
                "Resource allocation",
                "Timeline creation"
            ]
        },
        {
            step: "03",
            title: "Implement",
            description: "Execute AI initiatives with proper monitoring, vendor management, and performance tracking",
            icon: Bot,
            activities: [
                "Vendor selection",
                "System implementation",
                "Team training",
                "Performance monitoring"
            ]
        },
        {
            step: "04",
            title: "Optimize",
            description: "Continuously optimize AI performance and expand capabilities across the organization",
            icon: TrendingUp,
            activities: [
                "Performance optimization",
                "Capability expansion",
                "ROI maximization",
                "Strategic evolution"
            ]
        }
    ];
    // AI Tools Benefits
    const toolsBenefits = [
        {
            title: "Strategy Speed",
            value: "10x",
            description: "Faster AI strategy development",
            icon: Zap
        },
        {
            title: "Implementation Success",
            value: "95%",
            description: "Project success rate",
            icon: Target
        },
        {
            title: "ROI Improvement",
            value: "300%",
            description: "Average ROI increase",
            icon: TrendingUp
        },
        {
            title: "Risk Reduction",
            value: "80%",
            description: "Implementation risk decrease",
            icon: Award
        }
    ];
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => {
                                    const icons = [Brain, Bot, Settings, BarChart3, Search, Monitor];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Brain, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "AI Consulting Tools Suite" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["AI ", _jsx("span", { className: "gradient-text-blue", children: "Consulting" }), " Tools"] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Comprehensive suite of AI consulting tools to accelerate your digital transformation journey. From strategy planning to implementation monitoring, streamline your AI adoption process." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: toolsBenefits.map((benefit, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(benefit.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: benefit.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: benefit.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: benefit.description })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Access AI Tools Suite", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('tools-framework');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "Our AI Framework" }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('ai-roi-calculator'), children: "Try Free ROI Calculator" })] })] }) })] }), _jsx("section", { id: "tools-framework", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["AI Tools ", _jsx("span", { className: "gradient-text-blue", children: "Framework" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "A proven 4-phase AI consulting approach powered by intelligent tools that accelerate strategy development and ensure implementation success." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: toolsFramework.map((step, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-6 rounded-2xl gradient-bg-blue flex items-center justify-center`, children: _jsx(step.icon, { className: "w-8 h-8 text-white" }) }), _jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: step.step }), _jsx("h3", { className: `text-xl font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: step.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-6`, children: step.description }), _jsx("ul", { className: "space-y-2", children: step.activities.map((activity, activityIndex) => (_jsxs("li", { className: `text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: ["\u2022 ", activity] }, activityIndex))) })] }, step.step))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["AI Consulting ", _jsx("span", { className: "gradient-text-blue", children: "Tools Suite" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Comprehensive collection of AI consulting tools designed to accelerate your digital transformation and ensure successful AI implementation across your organization." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: consultingTools.map((tool, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 h-full group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("div", { className: `w-12 h-12 rounded-xl gradient-bg-blue flex items-center justify-center`, children: _jsx(tool.icon, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Badge, { variant: "secondary", className: "text-xs", children: tool.category }), _jsx(Badge, { variant: tool.pricing === 'Free' ? 'default' : tool.pricing === 'Premium' ? 'secondary' : 'outline', className: "text-xs", children: tool.pricing })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: `text-xl font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: tool.title }), _jsx("p", { className: `text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: tool.description }), _jsxs("div", { className: `flex items-center gap-2 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: [_jsx(Clock, { className: "w-4 h-4" }), "Completion time: ", tool.timeline] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: `text-sm font-semibold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Key Features:" }), _jsx("ul", { className: "space-y-2", children: tool.features.slice(0, 3).map((feature, featureIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-3 h-3 text-green-500 flex-shrink-0" }), feature] }, featureIndex))) })] }), _jsx("div", { className: "mt-auto", children: _jsx(Button, { className: `w-full ${tool.pricing === 'Free'
                                                ? 'gradient-bg-blue text-white'
                                                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700'} rounded-xl`, onClick: () => {
                                                if (tool.pricing === 'Free') {
                                                    navigate('demo-request');
                                                }
                                                else {
                                                    navigate('contact');
                                                }
                                            }, children: _jsxs("span", { className: `flex items-center gap-2 justify-center ${isRTL ? 'flex-row-reverse' : ''}`, children: [tool.pricing === 'Free' ? 'Try Free Tool' : 'Contact for Access', _jsx(ArrowRight, { className: `w-4 h-4 ${isRTL ? 'rotate-180' : ''}` })] }) }) })] }, tool.title))) })] }) }), _jsxs("section", { className: "py-16 lg:py-24 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 transition-colors duration-300" }), _jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 dark:opacity-10 transition-opacity duration-300", style: {
                            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                            filter: "blur(60px)",
                        } }), _jsx("div", { className: "max-w-4xl mx-auto px-6 relative z-10", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsxs("div", { className: "glass-heavy rounded-3xl p-12 text-center relative overflow-hidden border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl transition-colors duration-300" }), _jsxs("div", { className: "relative z-10", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-lg", children: _jsx(Brain, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300", children: "Ready to Accelerate Your AI Journey?" }), _jsx("div", { className: "text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300", children: "Access our comprehensive AI consulting tools suite and achieve 10x faster strategy development with 95% implementation success rate." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl border-0 shadow-lg relative overflow-hidden transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: "relative z-10 flex items-center", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Access Free Tools"] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "glass-secondary border-2 border-blue-300 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300", onClick: () => navigate('contact'), children: "Schedule AI Consultation" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-blue-200 dark:border-blue-600/50 transition-colors duration-300", children: [_jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Free AI Tools" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "Strategy & ROI calculators" })] }), _jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Expert Guidance" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "AI consulting specialists" })] })] })] })] }) }) })] })] }));
}
//# sourceMappingURL=AIConsultingToolsPage.js.map