"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { useLanguage } from "./LanguageProvider";
import { useDarkMode } from "./DarkModeProvider";
import { TrendingUp, Target, Users, Globe, Zap, Shield, Award, BarChart3, PieChart, ArrowUpRight, MapPin, Calendar, DollarSign, Briefcase, Rocket, Building, Mail, Phone, Download, ExternalLink, ChevronRight, Star, Home, Heart, Brain, Lightbulb, Handshake, Lock, CheckCircle, Circle, Clock } from "lucide-react";
export function InvestorsPage({ navigate }) {
    const { t, isRTL } = useLanguage();
    const { isDark } = useDarkMode();
    const shouldReduceMotion = useReducedMotion();
    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };
    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    // Key metrics data
    const keyMetrics = [
        { label: "Market Size", value: "$2.8B", growth: "+45%", description: "Indonesia AI Market 2024", icon: Globe },
        { label: "Revenue Growth", value: "320%", growth: "YoY", description: "Annual recurring revenue", icon: TrendingUp },
        { label: "Client Retention", value: "95%", growth: "+12%", description: "Customer satisfaction rate", icon: Heart },
        { label: "Team Size", value: "28", growth: "+180%", description: "Technical experts", icon: Users }
    ];
    // Investment highlights
    const investmentHighlights = [
        {
            icon: Target,
            title: "Market Leadership",
            description: "First-mover advantage in Indonesia's AI consulting market with proven track record.",
            value: "#1",
            subtitle: "AI Consultancy in Yogyakarta"
        },
        {
            icon: Rocket,
            title: "Rapid Growth",
            description: "320% revenue growth with expanding client base across multiple industries.",
            value: "320%",
            subtitle: "Annual Growth Rate"
        },
        {
            icon: Globe,
            title: "Market Opportunity",
            description: "Indonesia's AI market projected to reach $7.2B by 2030 with 35% CAGR.",
            value: "$7.2B",
            subtitle: "Market Size by 2030"
        },
        {
            icon: Award,
            title: "Client Success",
            description: "95% client retention rate with proven ROI improvements across all projects.",
            value: "95%",
            subtitle: "Client Retention"
        }
    ];
    // Revenue streams
    const revenueStreams = [
        { name: "AI Consulting", percentage: 45, color: "from-blue-500 to-blue-600", revenue: "$450K" },
        { name: "Custom Development", percentage: 30, color: "from-green-500 to-green-600", revenue: "$300K" },
        { name: "Training & Workshops", percentage: 15, color: "from-purple-500 to-purple-600", revenue: "$150K" },
        { name: "SaaS Products", percentage: 10, color: "from-orange-500 to-orange-600", revenue: "$100K" }
    ];
    // Competitive advantages
    const competitiveAdvantages = [
        {
            icon: Brain,
            title: "AI Expertise",
            description: "Deep technical knowledge in machine learning, NLP, and computer vision with proven implementations.",
            points: ["10+ AI specializations", "Advanced ML algorithms", "Custom model development"]
        },
        {
            icon: MapPin,
            title: "Local Market Understanding",
            description: "Native understanding of Indonesian business culture and regulatory environment.",
            points: ["Cultural expertise", "Local partnerships", "Government relations"]
        },
        {
            icon: Zap,
            title: "Rapid Implementation",
            description: "Proprietary frameworks and methodologies for faster AI solution deployment.",
            points: ["30% faster delivery", "Proven methodologies", "Agile development"]
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Bank-grade security standards with compliance to Indonesian data protection laws.",
            points: ["ISO 27001 compliant", "Data sovereignty", "End-to-end encryption"]
        }
    ];
    // Investment opportunities
    const investmentRounds = [
        {
            round: "Series A",
            status: "Open",
            target: "$2M",
            raised: "$1.2M",
            progress: 60,
            investors: 8,
            leadInvestor: "Jakarta Ventures",
            usage: ["Product Development", "Market Expansion", "Team Growth"],
            timeline: "Q2 2024",
            valuation: "$12M"
        },
        {
            round: "Seed Extension",
            status: "Completed",
            target: "$500K",
            raised: "$500K",
            progress: 100,
            investors: 12,
            leadInvestor: "Yogya Angel Network",
            usage: ["Technology Development", "Initial Team", "Market Validation"],
            timeline: "Q4 2023",
            valuation: "$5M"
        }
    ];
    // Team highlights
    const teamHighlights = [
        {
            role: "CEO & Co-Founder",
            name: "Ahmad Rizky",
            experience: "15+ years",
            background: "Former Google, MIT Graduate",
            expertise: "AI Strategy, Business Development"
        },
        {
            role: "CTO & Co-Founder",
            name: "Sari Melati",
            experience: "12+ years",
            background: "Ex-Microsoft, Stanford PhD",
            expertise: "Machine Learning, Architecture"
        },
        {
            role: "Head of AI",
            name: "Budi Santoso",
            experience: "10+ years",
            background: "Research Scientist, Carnegie Mellon",
            expertise: "Deep Learning, NLP"
        }
    ];
    return (_jsxs("div", { className: `relative min-h-screen overflow-hidden pt-32 pb-20 ${isRTL ? 'rtl' : ''}`, children: [_jsxs("div", { className: "fixed inset-0 z-0", children: [_jsx("div", { className: `absolute inset-0 transition-colors duration-300 ${isDark
                            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950/30'
                            : 'bg-gradient-to-br from-blue-50/30 via-background to-blue-100/20'}` }), !shouldReduceMotion && (_jsxs(_Fragment, { children: [_jsx(motion.div, { className: "absolute top-20 right-20 w-64 h-64 rounded-full opacity-10 dark:opacity-5", style: {
                                    background: "radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)",
                                    filter: "blur(40px)",
                                }, animate: {
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.15, 0.1],
                                }, transition: {
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                } }), _jsx(motion.div, { className: "absolute bottom-40 left-20 w-48 h-48 rounded-full opacity-8 dark:opacity-4", style: {
                                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                                    filter: "blur(30px)",
                                }, animate: {
                                    scale: [1, 1.15, 1],
                                    opacity: [0.08, 0.12, 0.08],
                                }, transition: {
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 3,
                                } })] }))] }), _jsx("div", { className: "relative z-10 px-6 lg:px-8", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("section", { className: "mb-32", children: [_jsxs(motion.div, { className: "text-center mb-20", initial: "initial", animate: "animate", variants: staggerChildren, children: [_jsx(motion.div, { variants: fadeInUp, children: _jsxs(Badge, { variant: "secondary", className: `mb-8 ${isDark
                                                    ? 'bg-green-900/40 text-green-300 border-green-700/60'
                                                    : 'bg-green-100/80 text-green-700 border-green-300/60'} px-6 py-3 font-medium rounded-full border backdrop-blur-sm shadow-sm text-lg`, children: [_jsx(TrendingUp, { className: `w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}` }), "Investment Opportunity"] }) }), _jsxs(motion.h1, { className: `text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, variants: fadeInUp, children: ["Invest in the Future of", _jsx("br", {}), _jsx("span", { className: "gradient-text-blue", children: "AI in Indonesia" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'} ${isRTL ? 'text-right' : ''}`, variants: fadeInUp, children: "Join us in democratizing AI technology across Indonesia's $2.8B market. Be part of the transformation that's helping businesses unlock the power of artificial intelligence." }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-6 justify-center mt-12 ${isRTL ? 'sm:flex-row-reverse' : ''}`, variants: fadeInUp, children: [_jsxs(Button, { size: "lg", className: "gradient-bg-blue hover:scale-105 transition-all duration-300 font-semibold px-10 py-6 text-lg rounded-2xl", onClick: () => {
                                                        const element = document.getElementById('investment-opportunities');
                                                        element?.scrollIntoView({ behavior: 'smooth' });
                                                    }, children: ["View Investment Opportunities", _jsx(TrendingUp, { className: `w-6 h-6 ${isRTL ? 'mr-2' : 'ml-2'}` })] }), _jsxs(Button, { variant: "outline", size: "lg", className: `border-2 font-semibold px-10 py-6 text-lg rounded-2xl ${isDark
                                                        ? 'border-blue-400/30 hover:bg-blue-400/10 text-blue-300'
                                                        : 'border-blue-200 hover:bg-blue-50 text-blue-700'}`, onClick: () => {
                                                        window.open('mailto:investors@delibix.com?subject=Investment Inquiry', '_blank');
                                                    }, children: ["Contact Investor Relations", _jsx(Mail, { className: `w-6 h-6 ${isRTL ? 'mr-2' : 'ml-2'}` })] })] })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-8", initial: "initial", animate: "animate", variants: staggerChildren, children: keyMetrics.map((metric, index) => (_jsxs(motion.div, { className: "text-center group", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, whileHover: { y: -4 }, children: [_jsx(motion.div, { className: `inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${isDark
                                                    ? 'bg-slate-800/50 border border-slate-700/50'
                                                    : 'bg-white/70 border border-slate-200/50'} backdrop-blur-sm group-hover:scale-110 transition-all duration-300`, whileHover: { scale: 1.1 }, children: _jsx(metric.icon, { className: `w-7 h-7 ${isDark ? 'text-blue-400' : 'text-blue-600'}` }) }), _jsx("div", { className: `text-3xl md:text-4xl font-bold mb-1 gradient-text-blue`, children: metric.value }), _jsx("div", { className: `text-sm font-medium mb-1 ${isDark ? 'text-green-400' : 'text-green-600'}`, children: metric.growth }), _jsx("p", { className: `text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: metric.description })] }, index))) })] }), _jsxs("section", { className: "mb-32", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsxs(Badge, { variant: "secondary", className: `mb-6 glass-blue ${isDark ? 'text-blue-300 border-blue-400/20' : 'text-blue-700 border-blue-200/50'} px-4 py-2`, children: [_jsx(Award, { className: `w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}` }), "Investment Highlights"] }), _jsx("h2", { className: `text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "Why Invest in Delibix" }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'text-right' : ''}`, children: "Strategic advantages that position us for exceptional growth in Indonesia's expanding AI market." })] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8", initial: "initial", whileInView: "animate", variants: staggerChildren, viewport: { once: true }, children: investmentHighlights.map((highlight, index) => (_jsx(motion.div, { variants: fadeInUp, children: _jsx(Card, { className: `glass-heavy p-8 h-full hover-lift transition-all duration-300 ${isDark
                                                ? 'border-blue-400/20 bg-slate-800/30'
                                                : 'border-blue-200/50 bg-white/30'}`, children: _jsxs("div", { className: `flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg", children: _jsx(highlight.icon, { className: "w-8 h-8 text-white" }) }) }), _jsxs("div", { className: `flex-1 ${isRTL ? 'text-right' : ''}`, children: [_jsxs("div", { className: `flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("h3", { className: `text-xl font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: highlight.title }), _jsx(Badge, { className: "gradient-bg-blue text-white font-bold px-3 py-1", children: highlight.value })] }), _jsx("p", { className: `text-base leading-relaxed mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: highlight.description }), _jsx("p", { className: `text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`, children: highlight.subtitle })] })] }) }) }, index))) })] }), _jsxs("section", { id: "investment-opportunities", className: "mb-32", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsxs(Badge, { variant: "secondary", className: `mb-6 glass-blue ${isDark ? 'text-green-300 border-green-400/20' : 'text-green-700 border-green-200/50'} px-4 py-2`, children: [_jsx(DollarSign, { className: `w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}` }), "Investment Rounds"] }), _jsx("h2", { className: `text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "Current Funding Opportunities" }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'text-right' : ''}`, children: "Join our growth journey with strategic investment opportunities designed for maximum impact." })] }), _jsx(motion.div, { className: "space-y-8", initial: "initial", whileInView: "animate", variants: staggerChildren, viewport: { once: true }, children: investmentRounds.map((round, index) => (_jsx(motion.div, { variants: fadeInUp, children: _jsx(Card, { className: `glass-heavy p-8 ${isDark
                                                ? 'border-blue-400/20 bg-slate-800/30'
                                                : 'border-blue-200/50 bg-white/30'}`, children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsxs("div", { className: `lg:col-span-1 ${isRTL ? 'text-right' : ''}`, children: [_jsxs("div", { className: `flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("h3", { className: `text-2xl font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: round.round }), _jsx(Badge, { className: `${round.status === 'Open'
                                                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                                                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`, children: round.status })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: `flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: "Target:" }), _jsx("span", { className: `font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: round.target })] }), _jsxs("div", { className: `flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: "Raised:" }), _jsx("span", { className: `font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: round.raised })] }), _jsxs("div", { className: `flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: "Valuation:" }), _jsx("span", { className: `font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: round.valuation })] }), _jsxs("div", { className: `flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: "Timeline:" }), _jsx("span", { className: `font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: round.timeline })] })] })] }), _jsxs("div", { className: "lg:col-span-2", children: [_jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: `flex justify-between items-center mb-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: `text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Funding Progress" }), _jsxs("span", { className: `text-sm font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`, children: [round.progress, "%"] })] }), _jsx(Progress, { value: round.progress, className: "h-3" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h4", { className: `font-semibold mb-3 ${isDark ? 'text-slate-200' : 'text-slate-800'} ${isRTL ? 'text-right' : ''}`, children: "Use of Funds" }), _jsx("ul", { className: "space-y-2", children: round.usage.map((use, useIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'} ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), use] }, useIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: `font-semibold mb-3 ${isDark ? 'text-slate-200' : 'text-slate-800'} ${isRTL ? 'text-right' : ''}`, children: "Investment Details" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: `flex justify-between text-sm ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: isDark ? 'text-slate-400' : 'text-slate-500', children: "Investors:" }), _jsx("span", { className: `font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: round.investors })] }), _jsxs("div", { className: `flex justify-between text-sm ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: isDark ? 'text-slate-400' : 'text-slate-500', children: "Lead Investor:" }), _jsx("span", { className: `font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: round.leadInvestor })] })] })] })] })] })] }) }) }, index))) })] }), _jsxs("section", { className: "mb-32", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsxs(Badge, { variant: "secondary", className: `mb-6 glass-blue ${isDark ? 'text-blue-300 border-blue-400/20' : 'text-blue-700 border-blue-200/50'} px-4 py-2`, children: [_jsx(BarChart3, { className: `w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}` }), "Business Model"] }), _jsx("h2", { className: `text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "Diversified Revenue Streams" }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'text-right' : ''}`, children: "Multiple revenue channels ensuring stable growth and reduced market risk." })] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", initial: "initial", whileInView: "animate", variants: staggerChildren, viewport: { once: true }, children: revenueStreams.map((stream, index) => (_jsx(motion.div, { variants: fadeInUp, children: _jsx(Card, { className: `glass-heavy p-6 h-full hover-lift transition-all duration-300 ${isDark
                                                ? 'border-blue-400/20 bg-slate-800/30'
                                                : 'border-blue-200/50 bg-white/30'}`, children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: `w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stream.color} flex items-center justify-center shadow-lg`, children: _jsxs("div", { className: `text-2xl font-bold text-white`, children: [stream.percentage, "%"] }) }), _jsx("h3", { className: `text-lg font-bold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'} ${isRTL ? 'text-right' : ''}`, children: stream.name }), _jsxs("p", { className: `text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: [stream.revenue, " ARR"] }), _jsx(Progress, { value: stream.percentage, className: "h-2" })] }) }) }, index))) })] }), _jsxs("section", { className: "mb-32", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsxs(Badge, { variant: "secondary", className: `mb-6 glass-blue ${isDark ? 'text-purple-300 border-purple-400/20' : 'text-purple-700 border-purple-200/50'} px-4 py-2`, children: [_jsx(Zap, { className: `w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}` }), "Competitive Advantages"] }), _jsx("h2", { className: `text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "What Sets Us Apart" }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'text-right' : ''}`, children: "Strategic advantages that create sustainable moats in the competitive AI landscape." })] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8", initial: "initial", whileInView: "animate", variants: staggerChildren, viewport: { once: true }, children: competitiveAdvantages.map((advantage, index) => (_jsx(motion.div, { variants: fadeInUp, children: _jsx(Card, { className: `glass-heavy p-8 h-full hover-lift transition-all duration-300 ${isDark
                                                ? 'border-blue-400/20 bg-slate-800/30'
                                                : 'border-blue-200/50 bg-white/30'}`, children: _jsxs("div", { className: `flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-lg", children: _jsx(advantage.icon, { className: "w-7 h-7 text-white" }) }) }), _jsxs("div", { className: `flex-1 ${isRTL ? 'text-right' : ''}`, children: [_jsx("h3", { className: `text-xl font-bold mb-3 ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: advantage.title }), _jsx("p", { className: `text-base leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: advantage.description }), _jsx("ul", { className: "space-y-2", children: advantage.points.map((point, pointIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), point] }, pointIndex))) })] })] }) }) }, index))) })] }), _jsxs("section", { className: "mb-32", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsxs(Badge, { variant: "secondary", className: `mb-6 glass-blue ${isDark ? 'text-orange-300 border-orange-400/20' : 'text-orange-700 border-orange-200/50'} px-4 py-2`, children: [_jsx(Users, { className: `w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}` }), "Leadership Team"] }), _jsx("h2", { className: `text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "World-Class Team" }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'text-right' : ''}`, children: "Experienced leaders from top global tech companies driving our vision forward." })] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-8", initial: "initial", whileInView: "animate", variants: staggerChildren, viewport: { once: true }, children: teamHighlights.map((member, index) => (_jsx(motion.div, { variants: fadeInUp, children: _jsxs(Card, { className: `glass-heavy p-8 h-full hover-lift transition-all duration-300 text-center ${isDark
                                                ? 'border-blue-400/20 bg-slate-800/30'
                                                : 'border-blue-200/50 bg-white/30'}`, children: [_jsx("div", { className: "w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-lg", children: _jsx(Users, { className: "w-10 h-10 text-white" }) }), _jsx("h3", { className: `text-xl font-bold mb-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: member.name }), _jsx("p", { className: `text-base font-semibold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`, children: member.role }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("p", { className: isDark ? 'text-slate-400' : 'text-slate-500', children: [_jsx("strong", { children: "Experience:" }), " ", member.experience] }), _jsxs("p", { className: isDark ? 'text-slate-400' : 'text-slate-500', children: [_jsx("strong", { children: "Background:" }), " ", member.background] }), _jsxs("p", { className: isDark ? 'text-slate-400' : 'text-slate-500', children: [_jsx("strong", { children: "Expertise:" }), " ", member.expertise] })] })] }) }, index))) })] }), _jsx("section", { children: _jsx(motion.div, { className: "text-center", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: _jsxs(Card, { className: `glass-heavy p-12 lg:p-16 max-w-5xl mx-auto ${isDark
                                        ? 'border-blue-400/20 bg-slate-800/30'
                                        : 'border-blue-200/50 bg-white/30'}`, children: [_jsx(motion.div, { initial: { scale: 0 }, whileInView: { scale: 1 }, transition: { duration: 0.5, delay: 0.2 }, viewport: { once: true }, children: _jsx(TrendingUp, { className: "w-24 h-24 text-green-500 mx-auto mb-8" }) }), _jsx("h3", { className: `text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "Ready to Invest in the Future?" }), _jsx("p", { className: `text-lg md:text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'text-right' : ''}`, children: "Join us in transforming Indonesia's digital landscape. Get access to our investor materials and schedule a meeting with our leadership team." }), _jsxs("div", { className: `flex flex-col sm:flex-row gap-6 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`, children: [_jsxs(Button, { size: "lg", className: "gradient-bg-blue hover:scale-105 transition-all duration-300 font-semibold px-10 py-6 text-lg", onClick: () => {
                                                        window.open('mailto:investors@delibix.com?subject=Investment Inquiry&body=I am interested in learning more about investment opportunities at Delibix.', '_blank');
                                                    }, children: ["Schedule Investor Meeting", _jsx(Calendar, { className: `w-6 h-6 ${isRTL ? 'mr-2' : 'ml-2'}` })] }), _jsxs(Button, { variant: "outline", size: "lg", className: "border-blue-200 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/20 font-semibold px-10 py-6 text-lg", onClick: () => {
                                                        // Simulate downloading investor deck
                                                        window.open('mailto:investors@delibix.com?subject=Investor Deck Request', '_blank');
                                                    }, children: ["Download Investor Deck", _jsx(Download, { className: `w-6 h-6 ${isRTL ? 'mr-2' : 'ml-2'}` })] })] }), _jsx(motion.div, { className: "mt-8 pt-8 border-t border-blue-200/30 dark:border-blue-700/30", initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, delay: 0.4 }, viewport: { once: true }, children: _jsxs("div", { className: `flex flex-col sm:flex-row items-center justify-center gap-6 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'} ${isRTL ? 'sm:flex-row-reverse' : ''}`, children: [_jsxs("div", { className: `flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Mail, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { children: "investors@delibix.com" })] }), _jsxs("div", { className: `flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Phone, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { children: "+62 857-7002-4933" })] }), _jsxs("div", { className: `flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(MapPin, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { children: "Yogyakarta, Indonesia" })] })] }) })] }) }) }), _jsx(motion.div, { className: "text-center mt-16", initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, children: _jsxs(Button, { onClick: () => navigate('home'), variant: "ghost", className: `${isDark
                                    ? 'text-blue-300 hover:bg-blue-400/10'
                                    : 'text-blue-600 hover:bg-blue-50'} rounded-xl font-medium`, children: [_jsx(Home, { className: `w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}` }), "Back to Home"] }) })] }) })] }));
}
//# sourceMappingURL=InvestorsPage.js.map