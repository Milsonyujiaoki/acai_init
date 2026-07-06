"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, TrendingUp, Zap, Target, Star, ArrowRight, Settings, Brain, Globe, Monitor, Clock, Award, BarChart3, Search, Bell, MessageSquare, Calendar, Mail, Phone, Video, Headphones, Activity, Laptop, Smartphone, Lightbulb, UserCheck, Database, Layers, Network, Workflow, Cog, Cpu, Users, Eye, Gauge, AlertTriangle, Shield, Rocket } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function DigitalReadinessPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // Digital Readiness Assessment Areas
    const readinessAreas = [
        {
            title: "Technology Infrastructure",
            description: "Assessment of current technology stack, cloud readiness, and IT infrastructure capabilities.",
            icon: Database,
            category: "Technology",
            questions: [
                "Cloud adoption and migration status",
                "Legacy system modernization needs",
                "Data infrastructure scalability",
                "Cybersecurity implementation level"
            ],
            currentScore: 72,
            targetScore: 90,
            readinessLevel: "Developing",
            priority: "High"
        },
        {
            title: "Digital Skills & Workforce",
            description: "Evaluation of team digital competencies, training needs, and workforce transformation readiness.",
            icon: Users,
            category: "Workforce",
            questions: [
                "Digital literacy assessment",
                "Training and development programs",
                "Change management readiness",
                "Leadership digital vision"
            ],
            currentScore: 65,
            targetScore: 85,
            readinessLevel: "Emerging",
            priority: "Critical"
        },
        {
            title: "Process Automation",
            description: "Analysis of process automation opportunities, workflow optimization, and operational efficiency.",
            icon: Workflow,
            category: "Process",
            questions: [
                "Manual process identification",
                "Automation tool adoption",
                "Workflow optimization level",
                "Efficiency measurement systems"
            ],
            currentScore: 58,
            targetScore: 88,
            readinessLevel: "Basic",
            priority: "Critical"
        },
        {
            title: "Data & Analytics",
            description: "Assessment of data strategy, analytics capabilities, and business intelligence maturity.",
            icon: BarChart3,
            category: "Analytics",
            questions: [
                "Data collection and quality",
                "Analytics tool implementation",
                "Business intelligence usage",
                "Data-driven decision making"
            ],
            currentScore: 68,
            targetScore: 92,
            readinessLevel: "Developing",
            priority: "High"
        },
        {
            title: "Customer Experience",
            description: "Evaluation of digital customer touchpoints, omnichannel integration, and service delivery.",
            icon: UserCheck,
            category: "Experience",
            questions: [
                "Digital customer journey mapping",
                "Omnichannel experience delivery",
                "Customer self-service capabilities",
                "Digital feedback and support"
            ],
            currentScore: 75,
            targetScore: 88,
            readinessLevel: "Advancing",
            priority: "Medium"
        },
        {
            title: "Innovation & Agility",
            description: "Assessment of innovation culture, agile practices, and organizational adaptability.",
            icon: Lightbulb,
            category: "Innovation",
            questions: [
                "Innovation culture and mindset",
                "Agile methodology adoption",
                "Rapid prototyping capabilities",
                "Market responsiveness speed"
            ],
            currentScore: 62,
            targetScore: 85,
            readinessLevel: "Emerging",
            priority: "High"
        }
    ];
    // Digital Readiness Assessment Framework
    const assessmentFramework = [
        {
            step: "01",
            title: "Assess",
            description: "Comprehensive digital readiness evaluation across all business dimensions",
            icon: Gauge,
            activities: [
                "Current state evaluation",
                "Digital capability assessment",
                "Gap identification",
                "Baseline establishment"
            ]
        },
        {
            step: "02",
            title: "Analyze",
            description: "Deep analysis of readiness gaps with prioritization and impact assessment",
            icon: Search,
            activities: [
                "Readiness gap analysis",
                "Priority area identification",
                "Impact assessment",
                "Readiness scoring"
            ]
        },
        {
            step: "03",
            title: "Plan",
            description: "Strategic readiness improvement planning with clear roadmap and milestones",
            icon: Target,
            activities: [
                "Improvement roadmap creation",
                "Milestone definition",
                "Resource planning",
                "Timeline establishment"
            ]
        },
        {
            step: "04",
            title: "Transform",
            description: "Digital transformation execution with continuous readiness monitoring",
            icon: Rocket,
            activities: [
                "Transformation execution",
                "Progress monitoring",
                "Readiness re-assessment",
                "Continuous improvement"
            ]
        }
    ];
    // Readiness Assessment Benefits
    const assessmentBenefits = [
        {
            title: "Readiness Score",
            value: "100%",
            description: "Complete readiness visibility",
            icon: Eye
        },
        {
            title: "Success Rate",
            value: "85%",
            description: "Transformation success increase",
            icon: TrendingUp
        },
        {
            title: "Risk Reduction",
            value: "70%",
            description: "Implementation risk decrease",
            icon: Shield
        },
        {
            title: "Speed Boost",
            value: "3x",
            description: "Faster transformation delivery",
            icon: Zap
        }
    ];
    // Calculate overall readiness score
    const overallCurrentScore = Math.round(readinessAreas.reduce((acc, area) => acc + area.currentScore, 0) / readinessAreas.length);
    const overallTargetScore = Math.round(readinessAreas.reduce((acc, area) => acc + area.targetScore, 0) / readinessAreas.length);
    const readinessGap = overallTargetScore - overallCurrentScore;
    // Get readiness level based on score
    const getReadinessLevel = (score) => {
        if (score >= 80)
            return { level: "Advanced", color: "text-green-500" };
        if (score >= 65)
            return { level: "Developing", color: "text-yellow-500" };
        if (score >= 50)
            return { level: "Emerging", color: "text-orange-500" };
        return { level: "Basic", color: "text-red-500" };
    };
    const overallReadiness = getReadinessLevel(overallCurrentScore);
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => {
                                    const icons = [CheckCircle, Gauge, Target, Users, Workflow, Rocket];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(CheckCircle, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "Quick Digital Readiness Assessment" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Digital ", _jsx("span", { className: "gradient-text-blue", children: "Readiness" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Quick digital readiness assessment to evaluate your organization's transformation preparedness. Identify gaps, prioritize improvements, and accelerate your digital journey." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: assessmentBenefits.map((benefit, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(benefit.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: benefit.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: benefit.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: benefit.description })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Start Readiness Assessment", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('assessment-framework');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "Assessment Framework" }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('digital-maturity'), children: "Full Maturity Assessment" })] })] }) })] }), _jsx("section", { id: "assessment-framework", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Assessment ", _jsx("span", { className: "gradient-text-blue", children: "Framework" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "A comprehensive 4-phase digital readiness assessment approach that provides clear insights into your organization's transformation preparedness and improvement priorities." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: assessmentFramework.map((step, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-6 rounded-2xl gradient-bg-blue flex items-center justify-center`, children: _jsx(step.icon, { className: "w-8 h-8 text-white" }) }), _jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: step.step }), _jsx("h3", { className: `text-xl font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: step.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-6`, children: step.description }), _jsx("ul", { className: "space-y-2", children: step.activities.map((activity, activityIndex) => (_jsxs("li", { className: `text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: ["\u2022 ", activity] }, activityIndex))) })] }, step.step))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Digital ", _jsx("span", { className: "gradient-text-blue", children: "Readiness Areas" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Comprehensive assessment across six critical readiness dimensions to provide complete visibility into your digital transformation preparedness." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: readinessAreas.map((area, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 h-full group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsxs("div", { className: `flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `w-12 h-12 rounded-xl gradient-bg-blue flex items-center justify-center`, children: _jsx(area.icon, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { children: [_jsx(Badge, { className: "mb-2", variant: "secondary", children: area.category }), _jsx("h3", { className: `text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: area.title })] })] }), _jsx("div", { className: "text-right", children: _jsx(Badge, { variant: area.priority === 'Critical' ? 'destructive' : area.priority === 'High' ? 'default' : 'secondary', className: "mb-2", children: area.priority }) })] }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-6`, children: area.description }), _jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: `text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Current Readiness" }), _jsxs("span", { className: `text-sm font-bold ${area.currentScore >= 80 ? 'text-green-500' :
                                                            area.currentScore >= 65 ? 'text-yellow-500' :
                                                                area.currentScore >= 50 ? 'text-orange-500' : 'text-red-500'}`, children: [area.currentScore, "%"] })] }), _jsx("div", { className: `w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-2`, children: _jsx("div", { className: `h-2 rounded-full ${area.currentScore >= 80 ? 'bg-green-500' :
                                                        area.currentScore >= 65 ? 'bg-yellow-500' :
                                                            area.currentScore >= 50 ? 'bg-orange-500' : 'bg-red-500'}`, style: { width: `${area.currentScore}%` } }) }), _jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsxs("span", { className: `text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: ["Level: ", area.readinessLevel] }), _jsxs("span", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: ["Target: ", area.targetScore, "%"] })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: `text-sm font-semibold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Key Assessment Areas:" }), _jsx("ul", { className: "space-y-2", children: area.questions.slice(0, 3).map((question, questionIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-3 h-3 text-blue-500 flex-shrink-0" }), question] }, questionIndex))) })] }), _jsx("div", { className: "mt-auto", children: _jsx(Button, { className: "w-full gradient-bg-blue text-white rounded-xl", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-2 justify-center ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Assess This Area", _jsx(ArrowRight, { className: `w-4 h-4 ${isRTL ? 'rotate-180' : ''}` })] }) }) })] }, area.title))) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.6 }, className: "mt-16", children: _jsxs("div", { className: `glass-heavy rounded-2xl p-8 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-2xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Overall Digital Readiness Score" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: `text-5xl font-bold mb-2 ${overallReadiness.color}`, children: [overallCurrentScore, "%"] }), _jsx("div", { className: `text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Current Readiness" }), _jsx("div", { className: `text-sm ${overallReadiness.color}`, children: overallReadiness.level })] }), _jsxs("div", { children: [_jsxs("div", { className: `text-5xl font-bold mb-2 text-green-500`, children: [overallTargetScore, "%"] }), _jsx("div", { className: `text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Target Readiness" }), _jsx("div", { className: `text-sm text-green-500`, children: "Advanced Level" })] }), _jsxs("div", { children: [_jsxs("div", { className: `text-5xl font-bold mb-2 text-blue-500`, children: [readinessGap, "%"] }), _jsx("div", { className: `text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Improvement Gap" }), _jsx("div", { className: `text-sm text-blue-500`, children: "Action Required" })] })] }), _jsx("div", { className: "mt-8", children: _jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-3 font-semibold rounded-xl", onClick: () => navigate('demo-request'), children: "Get Complete Readiness Assessment Report" }) })] }) })] }) }), _jsxs("section", { className: "py-16 lg:py-24 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 transition-colors duration-300" }), _jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 dark:opacity-10 transition-opacity duration-300", style: {
                            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                            filter: "blur(60px)",
                        } }), _jsx("div", { className: "max-w-4xl mx-auto px-6 relative z-10", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsxs("div", { className: "glass-heavy rounded-3xl p-12 text-center relative overflow-hidden border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl transition-colors duration-300" }), _jsxs("div", { className: "relative z-10", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-lg", children: _jsx(CheckCircle, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300", children: "Ready to Assess Your Digital Readiness?" }), _jsx("div", { className: "text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300", children: "Start your quick digital readiness assessment and achieve 100% readiness visibility with 85% transformation success rate." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl border-0 shadow-lg relative overflow-hidden transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: "relative z-10 flex items-center", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Start Free Assessment"] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "glass-secondary border-2 border-blue-300 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300", onClick: () => navigate('contact'), children: "Consult Readiness Experts" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-blue-200 dark:border-blue-600/50 transition-colors duration-300", children: [_jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Quick Assessment" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "6 critical readiness areas" })] }), _jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Proven Success" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "85% transformation success rate" })] })] })] })] }) }) })] })] }));
}
//# sourceMappingURL=DigitalReadinessPage.js.map