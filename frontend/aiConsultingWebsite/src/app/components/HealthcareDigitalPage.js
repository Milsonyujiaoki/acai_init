"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Heart, Shield, Activity, Users, TrendingUp, CheckCircle, Star, ArrowRight, Brain, Stethoscope, FileText, Database, Monitor, Clock, Target, Zap, Award, Building2, Globe, BarChart3, Smartphone, Tablet, Cloud, Lock, Search, Bell, MessageSquare, Calendar, Mail, Phone, Video, Headphones, Settings } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function HealthcareDigitalPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // Healthcare Digital Solutions
    const healthcareSolutions = [
        {
            title: "AI-Powered Diagnostics",
            description: "Advanced AI systems for medical image analysis, symptom assessment, and diagnostic support.",
            icon: Brain,
            features: [
                "Medical image recognition & analysis",
                "Symptom-based diagnostic assistance",
                "Predictive health analytics",
                "Integration with existing EMR systems"
            ],
            metrics: {
                accuracy: "95%+ diagnostic accuracy",
                speed: "70% faster diagnosis",
                cost: "40% cost reduction"
            }
        },
        {
            title: "Patient Management Systems",
            description: "Comprehensive digital platforms for patient care coordination and health monitoring.",
            icon: Users,
            features: [
                "Electronic Health Records (EHR)",
                "Patient portal & mobile app",
                "Appointment scheduling & reminders",
                "Telehealth integration"
            ],
            metrics: {
                satisfaction: "85% patient satisfaction",
                efficiency: "60% admin time saved",
                engagement: "3x patient engagement"
            }
        },
        {
            title: "Healthcare Analytics",
            description: "Data-driven insights for operational efficiency and improved patient outcomes.",
            icon: BarChart3,
            features: [
                "Population health analytics",
                "Operational efficiency metrics",
                "Clinical outcome tracking",
                "Resource optimization"
            ],
            metrics: {
                insights: "Real-time insights",
                efficiency: "45% operational improvement",
                outcomes: "30% better patient outcomes"
            }
        },
        {
            title: "Telemedicine Platform",
            description: "Complete digital health platform enabling remote consultations and monitoring.",
            icon: Video,
            features: [
                "HD video consultations",
                "Remote patient monitoring",
                "Digital prescriptions",
                "Integration with wearable devices"
            ],
            metrics: {
                reach: "500% increased patient reach",
                satisfaction: "90% consultation satisfaction",
                cost: "35% lower consultation costs"
            }
        }
    ];
    // Healthcare Industry Stats
    const industryStats = [
        { label: "Healthcare Organizations", value: "200+", desc: "Successfully transformed" },
        { label: "Patient Records", value: "2M+", desc: "Digitally managed" },
        { label: "Cost Reduction", value: "40%", desc: "Average savings" },
        { label: "Efficiency Gain", value: "60%", desc: "Operational improvement" }
    ];
    // Success Stories
    const successStories = [
        {
            organization: "Metro General Hospital",
            challenge: "Manual patient records and inefficient scheduling system causing delays and errors",
            solution: "Complete EHR implementation with AI-powered scheduling and patient management",
            results: [
                "70% reduction in patient wait times",
                "90% decrease in administrative errors",
                "200% increase in patient satisfaction",
                "$2.3M annual cost savings"
            ]
        },
        {
            organization: "Regional Health Network",
            challenge: "Lack of integrated systems across 15 clinics leading to fragmented patient care",
            solution: "Unified healthcare platform with centralized patient data and telemedicine capabilities",
            results: [
                "100% system integration across all clinics",
                "85% increase in care coordination",
                "60% improvement in patient outcomes",
                "45% reduction in operational costs"
            ]
        }
    ];
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => {
                                    const icons = [Heart, Stethoscope, Activity, Brain, Shield, FileText];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Heart, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "Healthcare Digital Transformation" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Digital Healthcare ", _jsx("span", { className: "gradient-text-blue", children: "Revolution" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Transform patient care with AI-native healthcare solutions. From diagnostics to patient management, we digitize healthcare operations for better outcomes." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: industryStats.map((stat, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: stat.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: stat.label }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: stat.desc })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Start Healthcare Transformation", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('healthcare-solutions');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "Explore Solutions" }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('success-stories'), children: "View Success Stories" })] })] }) })] }), _jsx("section", { id: "healthcare-solutions", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Healthcare ", _jsx("span", { className: "gradient-text-blue", children: "Solutions" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Comprehensive digital healthcare solutions powered by AI to transform patient care, streamline operations, and improve health outcomes." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: healthcareSolutions.map((solution, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: `flex items-start gap-6 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `w-16 h-16 rounded-2xl gradient-bg-blue flex items-center justify-center flex-shrink-0`, children: _jsx(solution.icon, { className: "w-8 h-8 text-white" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: `text-xl font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: solution.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-4`, children: solution.description })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: `text-sm font-semibold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Key Features:" }), _jsx("ul", { className: "space-y-2", children: solution.features.map((feature, featureIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), feature] }, featureIndex))) })] }), _jsx("div", { className: "grid grid-cols-1 gap-3", children: Object.entries(solution.metrics).map(([key, value]) => (_jsx("div", { className: `p-3 rounded-xl ${isDark ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-200'}`, children: _jsx("div", { className: `text-sm font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`, children: value }) }, key))) })] }, solution.title))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Healthcare ", _jsx("span", { className: "gradient-text-blue", children: "Success Stories" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Real transformations from healthcare organizations that chose Delibix for their digital journey." })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: successStories.map((story, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -30 : 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: `flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Building2, { className: "w-8 h-8 text-blue-500" }), _jsx("h3", { className: `text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: story.organization })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Challenge:" }), _jsx("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: story.challenge })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Solution:" }), _jsx("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: story.solution })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Results Achieved:" }), _jsx("ul", { className: "space-y-2", children: story.results.map((result, resultIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), result] }, resultIndex))) })] })] })] }, story.organization))) })] }) }), _jsx("section", { className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsx("div", { className: "max-w-4xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Ready to Transform Your ", _jsx("span", { className: "gradient-text-blue", children: "Healthcare Organization" }), "?"] }), _jsx("p", { className: `text-xl ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: "Join 200+ healthcare organizations that have successfully digitized their operations with Delibix." }), _jsxs("div", { className: `flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Get Free Healthcare Assessment", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                            ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                            : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('contact'), children: "Contact Healthcare Experts" })] })] }) }) })] }));
}
//# sourceMappingURL=HealthcareDigitalPage.js.map