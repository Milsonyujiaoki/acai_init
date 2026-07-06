"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Target, BarChart3, Zap, TrendingUp, CheckCircle, Star, ArrowRight, Settings, Brain, Globe, Monitor, Clock, Award, Eye, Search, Bell, MessageSquare, Calendar, Mail, Phone, Video, Headphones, Activity, Laptop, Smartphone, Lightbulb, UserCheck, Database, Layers, Network, Workflow, Cog, Cpu, Users } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function DigitalMaturityPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // Digital Maturity Assessment Areas
    const assessmentAreas = [
        {
            title: "Digital Strategy & Vision",
            description: "Evaluate strategic alignment, digital vision clarity, and transformation roadmap maturity across the organization.",
            icon: Target,
            dimension: "Strategy",
            criteria: [
                "Digital strategy alignment",
                "Leadership commitment",
                "Vision communication",
                "Transformation roadmap"
            ],
            maturityLevels: [
                "No clear digital strategy",
                "Basic strategy defined",
                "Comprehensive strategy",
                "Advanced strategic execution"
            ],
            score: 75
        },
        {
            title: "Technology Infrastructure",
            description: "Assess current technology stack, cloud adoption, integration capabilities, and infrastructure scalability.",
            icon: Database,
            dimension: "Technology",
            criteria: [
                "Cloud adoption level",
                "System integration",
                "Infrastructure scalability",
                "Technology stack modernization"
            ],
            maturityLevels: [
                "Legacy systems dominant",
                "Basic cloud adoption",
                "Integrated cloud strategy",
                "Cloud-native architecture"
            ],
            score: 60
        },
        {
            title: "Digital Capabilities",
            description: "Evaluate workforce digital skills, process automation, data analytics capabilities, and innovation capacity.",
            icon: Brain,
            dimension: "Capabilities",
            criteria: [
                "Digital skills assessment",
                "Process automation level",
                "Data analytics maturity",
                "Innovation capabilities"
            ],
            maturityLevels: [
                "Basic digital skills",
                "Developing capabilities",
                "Advanced competencies",
                "Digital-native workforce"
            ],
            score: 55
        },
        {
            title: "Customer Experience",
            description: "Measure digital customer journey, omnichannel integration, personalization, and customer satisfaction.",
            icon: Users,
            dimension: "Experience",
            criteria: [
                "Digital customer journey",
                "Omnichannel integration",
                "Personalization level",
                "Customer satisfaction metrics"
            ],
            maturityLevels: [
                "Traditional touchpoints",
                "Basic digital channels",
                "Integrated experience",
                "Personalized journey"
            ],
            score: 70
        },
        {
            title: "Data & Analytics",
            description: "Assess data governance, analytics capabilities, business intelligence maturity, and data-driven decision making.",
            icon: BarChart3,
            dimension: "Analytics",
            criteria: [
                "Data governance framework",
                "Analytics capabilities",
                "Business intelligence maturity",
                "Data-driven culture"
            ],
            maturityLevels: [
                "Siloed data sources",
                "Basic analytics",
                "Integrated BI platform",
                "Advanced AI/ML analytics"
            ],
            score: 65
        },
        {
            title: "Process Automation",
            description: "Evaluate automation maturity, workflow efficiency, intelligent process optimization, and ROI measurement.",
            icon: Workflow,
            dimension: "Automation",
            criteria: [
                "Automation maturity level",
                "Workflow optimization",
                "Intelligent process design",
                "ROI measurement"
            ],
            maturityLevels: [
                "Manual processes",
                "Basic automation",
                "Intelligent workflows",
                "Autonomous operations"
            ],
            score: 50
        }
    ];
    // Maturity Assessment Framework
    const maturityFramework = [
        {
            step: "01",
            title: "Evaluate",
            description: "Comprehensive assessment of current digital maturity across all dimensions",
            icon: Eye,
            activities: [
                "Digital maturity audit",
                "Capability gap analysis",
                "Benchmarking assessment",
                "Stakeholder interviews"
            ]
        },
        {
            step: "02",
            title: "Analyze",
            description: "Deep analysis of assessment results with industry benchmarking and gap identification",
            icon: BarChart3,
            activities: [
                "Maturity scoring",
                "Gap identification",
                "Industry benchmarking",
                "Priority area mapping"
            ]
        },
        {
            step: "03",
            title: "Plan",
            description: "Strategic roadmap development with clear milestones and improvement initiatives",
            icon: Target,
            activities: [
                "Improvement roadmap",
                "Milestone definition",
                "Resource planning",
                "Timeline development"
            ]
        },
        {
            step: "04",
            title: "Transform",
            description: "Execution of digital maturity improvement initiatives with continuous monitoring",
            icon: TrendingUp,
            activities: [
                "Initiative execution",
                "Progress monitoring",
                "Continuous improvement",
                "Maturity re-assessment"
            ]
        }
    ];
    // Maturity Assessment Benefits
    const assessmentBenefits = [
        {
            title: "Clarity Improvement",
            value: "90%",
            description: "Digital transformation clarity",
            icon: Eye
        },
        {
            title: "ROI Increase",
            value: "250%",
            description: "Initiative return on investment",
            icon: TrendingUp
        },
        {
            title: "Risk Reduction",
            value: "75%",
            description: "Implementation risk decrease",
            icon: Award
        },
        {
            title: "Speed Acceleration",
            value: "5x",
            description: "Faster transformation delivery",
            icon: Zap
        }
    ];
    // Calculate overall maturity score
    const overallMaturityScore = Math.round(assessmentAreas.reduce((acc, area) => acc + area.score, 0) / assessmentAreas.length);
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => {
                                    const icons = [Target, BarChart3, Brain, Database, Workflow, Users];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Target, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "Digital Maturity Assessment" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Digital ", _jsx("span", { className: "gradient-text-blue", children: "Maturity" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Comprehensive digital maturity assessment to evaluate your organization's readiness for digital transformation. Identify gaps, benchmark against industry leaders, and create strategic improvement roadmaps." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: assessmentBenefits.map((benefit, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(benefit.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: benefit.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: benefit.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: benefit.description })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Start Maturity Assessment", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('maturity-framework');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "Our Assessment Framework" }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('digital-readiness'), children: "Quick Readiness Check" })] })] }) })] }), _jsx("section", { id: "maturity-framework", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Assessment ", _jsx("span", { className: "gradient-text-blue", children: "Framework" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "A comprehensive 4-phase digital maturity assessment approach that provides clear insights and actionable improvement roadmaps for successful digital transformation." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: maturityFramework.map((step, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-6 rounded-2xl gradient-bg-blue flex items-center justify-center`, children: _jsx(step.icon, { className: "w-8 h-8 text-white" }) }), _jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: step.step }), _jsx("h3", { className: `text-xl font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: step.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-6`, children: step.description }), _jsx("ul", { className: "space-y-2", children: step.activities.map((activity, activityIndex) => (_jsxs("li", { className: `text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: ["\u2022 ", activity] }, activityIndex))) })] }, step.step))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Maturity ", _jsx("span", { className: "gradient-text-blue", children: "Assessment Areas" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Comprehensive evaluation across six critical dimensions of digital maturity to provide complete visibility into your organization's transformation readiness." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: assessmentAreas.map((area, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 h-full group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("div", { className: `w-12 h-12 rounded-xl gradient-bg-blue flex items-center justify-center`, children: _jsx(area.icon, { className: "w-6 h-6 text-white" }) }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: area.dimension })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: `text-xl font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: area.title }), _jsx("p", { className: `text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: area.description }), _jsxs("div", { className: "mb-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: `text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Current Maturity Score" }), _jsxs("span", { className: `text-sm font-bold ${area.score >= 70 ? 'text-green-500' :
                                                                    area.score >= 50 ? 'text-yellow-500' : 'text-red-500'}`, children: [area.score, "%"] })] }), _jsx("div", { className: `w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2`, children: _jsx("div", { className: `h-2 rounded-full ${area.score >= 70 ? 'bg-green-500' :
                                                                area.score >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`, style: { width: `${area.score}%` } }) })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: `text-sm font-semibold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Assessment Criteria:" }), _jsx("ul", { className: "space-y-2", children: area.criteria.slice(0, 3).map((criterion, criterionIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-3 h-3 text-blue-500 flex-shrink-0" }), criterion] }, criterionIndex))) })] }), _jsx("div", { className: "mt-auto", children: _jsx(Button, { className: "w-full gradient-bg-blue text-white rounded-xl", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-2 justify-center ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Assess This Area", _jsx(ArrowRight, { className: `w-4 h-4 ${isRTL ? 'rotate-180' : ''}` })] }) }) })] }, area.title))) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.6 }, className: "mt-16", children: _jsxs("div", { className: `glass-heavy rounded-2xl p-8 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-2xl font-bold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Overall Digital Maturity Score" }), _jsxs("div", { className: `text-6xl font-bold mb-4 ${overallMaturityScore >= 70 ? 'text-green-500' :
                                            overallMaturityScore >= 50 ? 'text-yellow-500' : 'text-red-500'}`, children: [overallMaturityScore, "%"] }), _jsx("p", { className: `text-lg mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: overallMaturityScore >= 70 ? 'Advanced Digital Maturity' :
                                            overallMaturityScore >= 50 ? 'Developing Digital Capabilities' : 'Early Digital Transformation Stage' }), _jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-3 font-semibold rounded-xl", onClick: () => navigate('demo-request'), children: "Get Complete Assessment Report" })] }) })] }) }), _jsxs("section", { className: "py-16 lg:py-24 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 transition-colors duration-300" }), _jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 dark:opacity-10 transition-opacity duration-300", style: {
                            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                            filter: "blur(60px)",
                        } }), _jsx("div", { className: "max-w-4xl mx-auto px-6 relative z-10", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsxs("div", { className: "glass-heavy rounded-3xl p-12 text-center relative overflow-hidden border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl transition-colors duration-300" }), _jsxs("div", { className: "relative z-10", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-lg", children: _jsx(Target, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300", children: "Discover Your Digital Maturity Level" }), _jsx("div", { className: "text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300", children: "Start your comprehensive digital maturity assessment and get actionable insights to accelerate your transformation journey." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl border-0 shadow-lg relative overflow-hidden transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: "relative z-10 flex items-center", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Start Free Assessment"] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "glass-secondary border-2 border-blue-300 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300", onClick: () => navigate('contact'), children: "Consult Maturity Experts" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-blue-200 dark:border-blue-600/50 transition-colors duration-300", children: [_jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Comprehensive Assessment" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "6 critical maturity dimensions" })] }), _jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Actionable Roadmap" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "Clear improvement priorities" })] })] })] })] }) }) })] })] }));
}
//# sourceMappingURL=DigitalMaturityPage.js.map