"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Search, BarChart3, Zap, TrendingUp, CheckCircle, Star, ArrowRight, Settings, Brain, Globe, Monitor, Clock, Award, Eye, Bell, MessageSquare, Calendar, Mail, Phone, Video, Headphones, Activity, Laptop, Smartphone, Lightbulb, UserCheck, Database, Layers, Network, Workflow, Cog, Cpu, Users, Target, Radar, Shield, AlertTriangle, ChevronUp, ChevronDown } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function CompetitorAnalysisPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // Competitor Analysis Categories
    const analysisCategories = [
        {
            title: "Digital Presence Analysis",
            description: "Comprehensive analysis of competitors' digital footprint including website performance, SEO, and online visibility.",
            icon: Globe,
            category: "Digital",
            metrics: [
                "Website traffic analysis",
                "SEO keyword rankings",
                "Social media presence",
                "Content strategy evaluation"
            ],
            insights: [
                "Market share visibility",
                "Traffic source analysis",
                "Engagement metrics",
                "Content gap opportunities"
            ],
            competitorScore: 78,
            yourScore: 65,
            gap: -13
        },
        {
            title: "Technology Stack Assessment",
            description: "Deep dive into competitors' technology choices, platform usage, and digital infrastructure capabilities.",
            icon: Layers,
            category: "Technology",
            metrics: [
                "Technology stack identification",
                "Platform usage analysis",
                "API and integration mapping",
                "Innovation adoption rate"
            ],
            insights: [
                "Technology advantage gaps",
                "Innovation opportunities",
                "Integration capabilities",
                "Technical debt assessment"
            ],
            competitorScore: 82,
            yourScore: 73,
            gap: -9
        },
        {
            title: "Market Positioning Analysis",
            description: "Strategic positioning evaluation including pricing, value propositions, and market segment targeting.",
            icon: Target,
            category: "Positioning",
            metrics: [
                "Pricing strategy analysis",
                "Value proposition mapping",
                "Market segment targeting",
                "Brand positioning assessment"
            ],
            insights: [
                "Positioning opportunities",
                "Pricing optimization",
                "Market gap identification",
                "Differentiation strategies"
            ],
            competitorScore: 85,
            yourScore: 71,
            gap: -14
        },
        {
            title: "Customer Experience Benchmarking",
            description: "Customer journey analysis, user experience evaluation, and service quality benchmarking against competitors.",
            icon: Users,
            category: "Experience",
            metrics: [
                "Customer journey mapping",
                "User experience scoring",
                "Service quality assessment",
                "Customer satisfaction benchmarks"
            ],
            insights: [
                "Experience improvement areas",
                "Customer pain point analysis",
                "Service gap opportunities",
                "Satisfaction enhancement strategies"
            ],
            competitorScore: 88,
            yourScore: 79,
            gap: -9
        },
        {
            title: "Innovation & R&D Tracking",
            description: "Research and development analysis, innovation pipeline tracking, and emerging technology adoption monitoring.",
            icon: Brain,
            category: "Innovation",
            metrics: [
                "R&D investment analysis",
                "Patent portfolio review",
                "Innovation pipeline tracking",
                "Technology adoption speed"
            ],
            insights: [
                "Innovation investment gaps",
                "Technology trend opportunities",
                "R&D optimization strategies",
                "Innovation timing advantages"
            ],
            competitorScore: 76,
            yourScore: 84,
            gap: +8
        },
        {
            title: "Financial Performance Analysis",
            description: "Financial metrics comparison, revenue analysis, and investment pattern evaluation for competitive intelligence.",
            icon: BarChart3,
            category: "Financial",
            metrics: [
                "Revenue growth tracking",
                "Investment pattern analysis",
                "Profitability benchmarking",
                "Market valuation comparison"
            ],
            insights: [
                "Financial performance gaps",
                "Investment opportunity areas",
                "Revenue optimization strategies",
                "Market position strength"
            ],
            competitorScore: 80,
            yourScore: 77,
            gap: -3
        }
    ];
    // Competitor Analysis Framework
    const analysisFramework = [
        {
            step: "01",
            title: "Discover",
            description: "Comprehensive competitor identification and market landscape mapping with AI-powered reconnaissance",
            icon: Radar,
            activities: [
                "Competitor identification",
                "Market landscape mapping",
                "Digital footprint scanning",
                "Baseline data collection"
            ]
        },
        {
            step: "02",
            title: "Analyze",
            description: "Deep competitive analysis across multiple dimensions with performance benchmarking",
            icon: Search,
            activities: [
                "Multi-dimensional analysis",
                "Performance benchmarking",
                "Gap identification",
                "Strength assessment"
            ]
        },
        {
            step: "03",
            title: "Insights",
            description: "Strategic insights generation with actionable recommendations and opportunity identification",
            icon: Brain,
            activities: [
                "Strategic insights generation",
                "Opportunity identification",
                "Threat assessment",
                "Recommendation development"
            ]
        },
        {
            step: "04",
            title: "Strategy",
            description: "Competitive strategy development with continuous monitoring and adaptive planning",
            icon: TrendingUp,
            activities: [
                "Competitive strategy formulation",
                "Action plan development",
                "Continuous monitoring setup",
                "Adaptive strategy evolution"
            ]
        }
    ];
    // Analysis Benefits
    const analysisBenefits = [
        {
            title: "Market Insights",
            value: "360°",
            description: "Comprehensive market view",
            icon: Eye
        },
        {
            title: "Strategy Improvement",
            value: "250%",
            description: "Strategic decision quality",
            icon: Target
        },
        {
            title: "Competitive Edge",
            value: "85%",
            description: "Market advantage increase",
            icon: TrendingUp
        },
        {
            title: "Risk Reduction",
            value: "70%",
            description: "Strategic risk mitigation",
            icon: Shield
        }
    ];
    // Calculate overall competitive position
    const overallYourScore = Math.round(analysisCategories.reduce((acc, category) => acc + category.yourScore, 0) / analysisCategories.length);
    const overallCompetitorScore = Math.round(analysisCategories.reduce((acc, category) => acc + category.competitorScore, 0) / analysisCategories.length);
    const overallGap = overallYourScore - overallCompetitorScore;
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => {
                                    const icons = [Search, Radar, Target, BarChart3, Brain, Globe];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Search, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "AI-Powered Competitor Intelligence" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Competitor ", _jsx("span", { className: "gradient-text-blue", children: "Analysis" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Advanced competitive intelligence platform powered by AI. Analyze competitors across multiple dimensions and gain strategic insights for market advantage." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: analysisBenefits.map((benefit, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(benefit.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: benefit.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: benefit.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: benefit.description })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Start Competitor Analysis", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('analysis-framework');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "Analysis Framework" }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('market-research'), children: "Market Research Tool" })] })] }) })] }), _jsx("section", { id: "analysis-framework", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Analysis ", _jsx("span", { className: "gradient-text-blue", children: "Framework" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "A comprehensive 4-phase competitive analysis approach that provides deep market insights and strategic recommendations for sustainable competitive advantage." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: analysisFramework.map((step, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-6 rounded-2xl gradient-bg-blue flex items-center justify-center`, children: _jsx(step.icon, { className: "w-8 h-8 text-white" }) }), _jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: step.step }), _jsx("h3", { className: `text-xl font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: step.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-6`, children: step.description }), _jsx("ul", { className: "space-y-2", children: step.activities.map((activity, activityIndex) => (_jsxs("li", { className: `text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: ["\u2022 ", activity] }, activityIndex))) })] }, step.step))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Competitive ", _jsx("span", { className: "gradient-text-blue", children: "Analysis Dimensions" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Comprehensive competitive analysis across six critical business dimensions to provide complete visibility into market position and strategic opportunities." })] }), _jsx("div", { className: "space-y-8", children: analysisCategories.map((category, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: `flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `w-12 h-12 rounded-xl gradient-bg-blue flex items-center justify-center`, children: _jsx(category.icon, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { children: [_jsx(Badge, { className: "mb-2", variant: "secondary", children: category.category }), _jsx("h3", { className: `text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: category.title })] })] }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: category.description })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Performance Comparison" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: `text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Your Performance" }), _jsxs("span", { className: `text-sm font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: [category.yourScore, "%"] })] }), _jsx("div", { className: `w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2`, children: _jsx("div", { className: "h-2 rounded-full bg-blue-500", style: { width: `${category.yourScore}%` } }) })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: `text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Competitor Average" }), _jsxs("span", { className: `text-sm font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: [category.competitorScore, "%"] })] }), _jsx("div", { className: `w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2`, children: _jsx("div", { className: "h-2 rounded-full bg-red-500", style: { width: `${category.competitorScore}%` } }) })] }), _jsx("div", { className: "pt-2", children: _jsxs("div", { className: `flex items-center gap-2 text-sm ${category.gap >= 0 ? 'text-green-500' : 'text-red-500'}`, children: [category.gap >= 0 ? _jsx(ChevronUp, { className: "w-4 h-4" }) : _jsx(ChevronDown, { className: "w-4 h-4" }), _jsxs("span", { className: "font-semibold", children: [category.gap >= 0 ? '+' : '', category.gap, "% gap"] })] }) })] })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Analysis Metrics" }), _jsx("ul", { className: "space-y-2", children: category.metrics.map((metric, metricIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-blue-500 flex-shrink-0" }), metric] }, metricIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Strategic Insights" }), _jsx("ul", { className: "space-y-2", children: category.insights.map((insight, insightIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(Brain, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), insight] }, insightIndex))) })] })] }) }, category.title))) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.6 }, className: "mt-16", children: _jsxs("div", { className: `glass-heavy rounded-2xl p-8 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-2xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Overall Competitive Position" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: `text-4xl font-bold mb-2 text-blue-500`, children: [overallYourScore, "%"] }), _jsx("div", { className: `text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Your Average Score" })] }), _jsxs("div", { children: [_jsxs("div", { className: `text-4xl font-bold mb-2 text-red-500`, children: [overallCompetitorScore, "%"] }), _jsx("div", { className: `text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Competitor Average" })] }), _jsxs("div", { children: [_jsxs("div", { className: `text-4xl font-bold mb-2 ${overallGap >= 0 ? 'text-green-500' : 'text-red-500'}`, children: [overallGap >= 0 ? '+' : '', overallGap, "%"] }), _jsx("div", { className: `text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Competitive Gap" })] })] }), _jsx("div", { className: "mt-6", children: _jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-3 font-semibold rounded-xl", onClick: () => navigate('demo-request'), children: "Get Complete Competitive Analysis Report" }) })] }) })] }) }), _jsxs("section", { className: "py-16 lg:py-24 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 transition-colors duration-300" }), _jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 dark:opacity-10 transition-opacity duration-300", style: {
                            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                            filter: "blur(60px)",
                        } }), _jsx("div", { className: "max-w-4xl mx-auto px-6 relative z-10", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsxs("div", { className: "glass-heavy rounded-3xl p-12 text-center relative overflow-hidden border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl transition-colors duration-300" }), _jsxs("div", { className: "relative z-10", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-lg", children: _jsx(Search, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300", children: "Ready to Gain Competitive Intelligence?" }), _jsx("div", { className: "text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300", children: "Start your comprehensive competitor analysis and gain 360\u00B0 market insights with 250% better strategic decisions." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl border-0 shadow-lg relative overflow-hidden transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: "relative z-10 flex items-center", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Start Competitor Analysis"] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "glass-secondary border-2 border-blue-300 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300", onClick: () => navigate('contact'), children: "Consult Intelligence Experts" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-blue-200 dark:border-blue-600/50 transition-colors duration-300", children: [_jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "AI-Powered Analysis" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "360\u00B0 competitive intelligence" })] }), _jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Strategic Advantage" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "85% market advantage increase" })] })] })] })] }) }) })] })] }));
}
//# sourceMappingURL=CompetitorAnalysisPage.js.map