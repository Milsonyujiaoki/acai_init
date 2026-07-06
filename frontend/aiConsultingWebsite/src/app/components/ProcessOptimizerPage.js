"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Workflow, Zap, TrendingUp, Target, CheckCircle, Star, ArrowRight, Settings, Brain, Globe, Monitor, Clock, Award, BarChart3, Search, Bell, MessageSquare, Calendar, Mail, Phone, Video, Headphones, Activity, Laptop, Smartphone, Lightbulb, UserCheck, Database, Layers, Network, Cog, Cpu, Users, Eye, RefreshCw, GitBranch, Repeat, RotateCw } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function ProcessOptimizerPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // Process Optimization Areas
    const optimizationAreas = [
        {
            title: "Workflow Automation",
            description: "Intelligent workflow design and automation with AI-powered optimization and continuous improvement.",
            icon: Workflow,
            category: "Automation",
            processes: [
                "End-to-end workflow mapping",
                "Automation opportunity identification",
                "Intelligent decision routing",
                "Exception handling automation"
            ],
            improvements: [
                "80% task automation rate",
                "90% reduction in manual effort",
                "75% faster process completion",
                "99% accuracy improvement"
            ],
            currentEfficiency: 85,
            targetEfficiency: 95
        },
        {
            title: "Performance Analytics",
            description: "Real-time process performance monitoring with bottleneck identification and optimization recommendations.",
            icon: BarChart3,
            category: "Analytics",
            processes: [
                "Real-time performance tracking",
                "Bottleneck identification",
                "KPI dashboard monitoring",
                "Predictive analytics"
            ],
            improvements: [
                "100% process visibility",
                "60% faster issue resolution",
                "85% prediction accuracy",
                "50% reduction in delays"
            ],
            currentEfficiency: 78,
            targetEfficiency: 92
        },
        {
            title: "Resource Optimization",
            description: "Smart resource allocation and capacity planning with predictive modeling and efficiency maximization.",
            icon: Users,
            category: "Resources",
            processes: [
                "Resource allocation optimization",
                "Capacity planning automation",
                "Skill-based task assignment",
                "Workload balancing"
            ],
            improvements: [
                "70% better resource utilization",
                "40% cost reduction",
                "95% optimal task assignment",
                "60% improved productivity"
            ],
            currentEfficiency: 72,
            targetEfficiency: 88
        },
        {
            title: "Quality Management",
            description: "Automated quality control with continuous monitoring, defect prevention, and compliance assurance.",
            icon: Award,
            category: "Quality",
            processes: [
                "Automated quality checks",
                "Defect prevention systems",
                "Compliance monitoring",
                "Continuous improvement loops"
            ],
            improvements: [
                "95% defect reduction",
                "100% compliance adherence",
                "80% faster quality checks",
                "90% customer satisfaction"
            ],
            currentEfficiency: 82,
            targetEfficiency: 96
        }
    ];
    // Process Optimization Framework
    const optimizationFramework = [
        {
            step: "01",
            title: "Analyze",
            description: "Comprehensive process analysis with current state mapping and performance assessment",
            icon: Search,
            activities: [
                "Current state process mapping",
                "Performance baseline measurement",
                "Bottleneck identification",
                "Efficiency gap analysis"
            ]
        },
        {
            step: "02",
            title: "Design",
            description: "Optimal process design with automation integration and performance optimization",
            icon: GitBranch,
            activities: [
                "Future state process design",
                "Automation integration planning",
                "Resource optimization strategy",
                "Quality improvement framework"
            ]
        },
        {
            step: "03",
            title: "Implement",
            description: "Phased implementation with change management and continuous monitoring",
            icon: RefreshCw,
            activities: [
                "Phased implementation plan",
                "Change management execution",
                "Performance monitoring setup",
                "Training and enablement"
            ]
        },
        {
            step: "04",
            title: "Optimize",
            description: "Continuous optimization with AI-powered insights and performance enhancement",
            icon: TrendingUp,
            activities: [
                "Continuous performance monitoring",
                "AI-powered optimization",
                "Process refinement",
                "Best practice evolution"
            ]
        }
    ];
    // Optimization Benefits
    const optimizationBenefits = [
        {
            title: "Efficiency Gain",
            value: "400%",
            description: "Process efficiency improvement",
            icon: Zap
        },
        {
            title: "Cost Reduction",
            value: "60%",
            description: "Operational cost savings",
            icon: Target
        },
        {
            title: "Time Savings",
            value: "75%",
            description: "Process completion time reduction",
            icon: Clock
        },
        {
            title: "Quality Score",
            value: "95%",
            description: "Process quality improvement",
            icon: Award
        }
    ];
    // Calculate overall optimization potential
    const overallOptimizationPotential = Math.round(optimizationAreas.reduce((acc, area) => acc + (area.targetEfficiency - area.currentEfficiency), 0) / optimizationAreas.length);
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => {
                                    const icons = [Workflow, BarChart3, Users, Award, RefreshCw, GitBranch];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Workflow, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "AI-Powered Process Optimizer" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Process ", _jsx("span", { className: "gradient-text-blue", children: "Optimizer" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Intelligent business process optimization platform powered by AI. Analyze, redesign, and optimize your workflows for maximum efficiency and performance." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: optimizationBenefits.map((benefit, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(benefit.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: benefit.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: benefit.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: benefit.description })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Optimize My Processes", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('optimization-framework');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "Optimization Framework" }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('business-process'), children: "Free Process Assessment" })] })] }) })] }), _jsx("section", { id: "optimization-framework", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Optimization ", _jsx("span", { className: "gradient-text-blue", children: "Framework" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "A comprehensive 4-phase process optimization approach that analyzes, redesigns, and continuously improves your business workflows for maximum efficiency and performance." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: optimizationFramework.map((step, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-6 rounded-2xl gradient-bg-blue flex items-center justify-center`, children: _jsx(step.icon, { className: "w-8 h-8 text-white" }) }), _jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: step.step }), _jsx("h3", { className: `text-xl font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: step.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-6`, children: step.description }), _jsx("ul", { className: "space-y-2", children: step.activities.map((activity, activityIndex) => (_jsxs("li", { className: `text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: ["\u2022 ", activity] }, activityIndex))) })] }, step.step))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Process ", _jsx("span", { className: "gradient-text-blue", children: "Optimization Areas" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Comprehensive process optimization across four critical business areas to maximize efficiency, reduce costs, and improve overall performance." })] }), _jsx("div", { className: "space-y-8", children: optimizationAreas.map((area, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: `flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `w-12 h-12 rounded-xl gradient-bg-blue flex items-center justify-center`, children: _jsx(area.icon, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { children: [_jsx(Badge, { className: "mb-2", variant: "secondary", children: area.category }), _jsx("h3", { className: `text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: area.title })] })] }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-4`, children: area.description }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: isDark ? 'text-slate-300' : 'text-slate-700', children: "Current" }), _jsxs("span", { className: isDark ? 'text-slate-300' : 'text-slate-700', children: [area.currentEfficiency, "%"] })] }), _jsx("div", { className: `w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2`, children: _jsx("div", { className: "h-2 rounded-full bg-blue-500", style: { width: `${area.currentEfficiency}%` } }) }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: isDark ? 'text-slate-300' : 'text-slate-700', children: "Target" }), _jsxs("span", { className: "text-green-500", children: [area.targetEfficiency, "%"] })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Process Areas" }), _jsx("ul", { className: "space-y-2", children: area.processes.map((process, processIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-blue-500 flex-shrink-0" }), process] }, processIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Expected Improvements" }), _jsx("ul", { className: "space-y-2", children: area.improvements.map((improvement, improvementIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(TrendingUp, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), improvement] }, improvementIndex))) })] }), _jsx("div", { className: "flex flex-col justify-center", children: _jsx(Button, { className: "gradient-bg-blue text-white rounded-xl", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Optimize Area", _jsx(ArrowRight, { className: `w-4 h-4 ${isRTL ? 'rotate-180' : ''}` })] }) }) })] }) }, area.title))) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.6 }, className: "mt-16", children: _jsxs("div", { className: `glass-heavy rounded-2xl p-8 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-2xl font-bold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Overall Process Optimization Potential" }), _jsxs("div", { className: `text-6xl font-bold mb-4 gradient-text-blue`, children: ["+", overallOptimizationPotential, "%"] }), _jsx("p", { className: `text-lg mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: "Average efficiency improvement across all process areas" }), _jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-3 font-semibold rounded-xl", onClick: () => navigate('demo-request'), children: "Get Complete Process Optimization Plan" })] }) })] }) }), _jsxs("section", { className: "py-16 lg:py-24 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 transition-colors duration-300" }), _jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 dark:opacity-10 transition-opacity duration-300", style: {
                            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                            filter: "blur(60px)",
                        } }), _jsx("div", { className: "max-w-4xl mx-auto px-6 relative z-10", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsxs("div", { className: "glass-heavy rounded-3xl p-12 text-center relative overflow-hidden border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl transition-colors duration-300" }), _jsxs("div", { className: "relative z-10", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-lg", children: _jsx(Workflow, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300", children: "Ready to Optimize Your Business Processes?" }), _jsx("div", { className: "text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300", children: "Start your comprehensive process optimization and achieve 400% efficiency improvement with 60% cost reduction." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl border-0 shadow-lg relative overflow-hidden transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: "relative z-10 flex items-center", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Start Process Optimization"] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "glass-secondary border-2 border-blue-300 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300", onClick: () => navigate('contact'), children: "Consult Process Experts" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-blue-200 dark:border-blue-600/50 transition-colors duration-300", children: [_jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "AI-Powered Optimization" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "Intelligent process automation" })] }), _jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Proven Results" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "400% efficiency improvement" })] })] })] })] }) }) })] })] }));
}
//# sourceMappingURL=ProcessOptimizerPage.js.map