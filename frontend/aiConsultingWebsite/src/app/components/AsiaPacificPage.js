"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Globe, TrendingUp, Zap, Target, CheckCircle, Star, ArrowRight, Settings, Brain, Monitor, Users, Clock, Award, BarChart3, Search, Bell, MessageSquare, Calendar, Mail, Phone, Video, Headphones, Activity, Laptop, Smartphone, Lightbulb, UserCheck, Database, Layers, Network, Workflow, Cog, Cpu, MapPin, Building, Compass, Anchor, Ship } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function AsiaPacificPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // APAC Market Statistics
    const apacStats = [
        {
            title: "APAC Digital Economy",
            value: "$2.3T",
            description: "By 2025 market size",
            icon: TrendingUp,
            growth: "+8.5% CAGR"
        },
        {
            title: "Population Reach",
            value: "4.6B",
            description: "Total APAC population",
            icon: Users,
            growth: "60% global coverage"
        },
        {
            title: "Digital Transformation",
            value: "$890B",
            description: "Investment in digital initiatives",
            icon: Database,
            growth: "+12% YoY"
        },
        {
            title: "Market Coverage",
            value: "15+",
            description: "Countries served",
            icon: Globe,
            growth: "Regional leadership"
        }
    ];
    // APAC Countries & Markets
    const apacMarkets = [
        {
            region: "Northeast Asia",
            countries: ["Japan", "South Korea", "Taiwan", "Hong Kong"],
            population: "200M+",
            digitalEconomy: "$580B",
            flagship: "Advanced technology & innovation leadership",
            icon: Compass,
            specialization: "Technology Innovation",
            projects: "120+ active projects",
            growth: "+6% YoY",
            focus: ["AI & Robotics", "Smart Manufacturing", "Fintech Innovation", "5G Infrastructure"]
        },
        {
            region: "Southeast Asia",
            countries: ["Indonesia", "Singapore", "Thailand", "Malaysia", "Vietnam", "Philippines"],
            population: "680M+",
            digitalEconomy: "$295B",
            flagship: "Rapid digital adoption & e-commerce growth",
            icon: Ship,
            specialization: "Digital Transformation",
            projects: "500+ active projects",
            growth: "+22% YoY",
            focus: ["E-commerce", "Digital Banking", "Smart Cities", "Industry 4.0"]
        },
        {
            region: "South Asia",
            countries: ["India", "Bangladesh", "Sri Lanka", "Pakistan"],
            population: "2.0B+",
            digitalEconomy: "$450B",
            flagship: "Massive scale digital inclusion & mobile-first innovation",
            icon: Users,
            specialization: "Scale & Innovation",
            projects: "300+ active projects",
            growth: "+15% YoY",
            focus: ["Digital Inclusion", "Mobile Technology", "EdTech", "HealthTech"]
        },
        {
            region: "Oceania",
            countries: ["Australia", "New Zealand", "Pacific Islands"],
            population: "50M+",
            digitalEconomy: "$180B",
            flagship: "Advanced digital infrastructure & sustainability focus",
            icon: Anchor,
            specialization: "Sustainable Technology",
            projects: "80+ active projects",
            growth: "+9% YoY",
            focus: ["Sustainable Tech", "Mining Technology", "AgriTech", "Smart Infrastructure"]
        }
    ];
    // APAC Strategic Framework
    const apacFramework = [
        {
            step: "01",
            title: "Regional Intelligence",
            description: "Comprehensive APAC market analysis with cultural intelligence and regulatory landscape mapping",
            icon: Brain,
            activities: [
                "Multi-country market research",
                "Cultural intelligence gathering",
                "Regulatory framework analysis",
                "Competitive landscape mapping"
            ]
        },
        {
            step: "02",
            title: "Strategic Coordination",
            description: "Hub-and-spoke coordination model with Singapore as APAC headquarters and regional specialization",
            icon: Network,
            activities: [
                "Regional hub coordination",
                "Market entry strategy",
                "Resource optimization",
                "Partnership ecosystem development"
            ]
        },
        {
            step: "03",
            title: "Localized Execution",
            description: "Country-specific implementation with local expertise and cultural adaptation for each market",
            icon: MapPin,
            activities: [
                "Country-specific adaptation",
                "Local team development",
                "Cultural customization",
                "Regulatory compliance"
            ]
        },
        {
            step: "04",
            title: "Regional Growth",
            description: "Continuous expansion and optimization with cross-market synergies and best practice sharing",
            icon: TrendingUp,
            activities: [
                "Cross-market synergies",
                "Best practice sharing",
                "Regional expansion",
                "Performance optimization"
            ]
        }
    ];
    // APAC Industry Leadership
    const industryLeadership = [
        {
            industry: "Financial Services & Fintech",
            description: "Leading digital banking transformation across APAC with regulatory expertise and cross-border capabilities",
            markets: ["Singapore", "Hong Kong", "Australia", "Japan", "India", "Indonesia"],
            projects: "400+ projects",
            value: "$180B market opportunity",
            icon: Database,
            highlights: [
                "Multi-regulatory compliance",
                "Cross-border payment systems",
                "Digital banking platforms",
                "Cryptocurrency & blockchain solutions"
            ],
            achievements: [
                "MAS sandbox certification",
                "RBI digital banking approval",
                "JFSA fintech recognition",
                "ASIC innovation hub partnership"
            ]
        },
        {
            industry: "Technology & Innovation",
            description: "Advanced technology consulting across AI, IoT, 5G, and emerging technologies with innovation leadership",
            markets: ["Japan", "South Korea", "Singapore", "Australia", "India", "Taiwan"],
            projects: "350+ projects",
            value: "$220B market opportunity",
            icon: Brain,
            highlights: [
                "AI & machine learning platforms",
                "IoT & smart infrastructure",
                "5G network optimization",
                "Quantum computing initiatives"
            ],
            achievements: [
                "Samsung technology partnership",
                "Sony innovation collaboration",
                "Tata digital transformation",
                "Telstra 5G implementation"
            ]
        },
        {
            industry: "Manufacturing & Supply Chain",
            description: "Industry 4.0 transformation and smart manufacturing across APAC's diverse manufacturing landscape",
            markets: ["China", "Japan", "South Korea", "Thailand", "Vietnam", "India"],
            projects: "300+ projects",
            value: "$150B market opportunity",
            icon: Workflow,
            highlights: [
                "Smart factory implementation",
                "Supply chain optimization",
                "Quality management systems",
                "Predictive maintenance"
            ],
            achievements: [
                "Toyota production system digital",
                "Samsung smart factory design",
                "TATA steel optimization",
                "BYD automation integration"
            ]
        },
        {
            industry: "Healthcare & Life Sciences",
            description: "Digital healthcare transformation addressing APAC's diverse healthcare challenges and opportunities",
            markets: ["Singapore", "Australia", "Japan", "South Korea", "India", "Thailand"],
            projects: "250+ projects",
            value: "$120B market opportunity",
            icon: Activity,
            highlights: [
                "Telemedicine platforms",
                "Digital health records",
                "AI-powered diagnostics",
                "Healthcare IoT solutions"
            ],
            achievements: [
                "Singapore Health Group digital",
                "Apollo Hospitals transformation",
                "Samsung Medical Center AI",
                "Medibank digital platform"
            ]
        }
    ];
    // APAC Success Stories
    const apacSuccessStories = [
        {
            client: "Commonwealth Bank of Australia",
            country: "Australia",
            industry: "Banking",
            challenge: "Complete digital banking transformation for 17M+ customers across APAC",
            solution: "End-to-end digital banking platform with AI-powered customer experience",
            results: ["95% digital adoption", "60% operational cost reduction", "300% faster loan processing"],
            timeline: "24 months",
            scope: "Australia & APAC expansion"
        },
        {
            client: "Tata Consultancy Services",
            country: "India",
            industry: "Technology",
            challenge: "Digital transformation platform for enterprise clients across Asia",
            solution: "Comprehensive digital transformation suite with AI and cloud capabilities",
            results: ["500+ client implementations", "80% efficiency improvement", "Real-time global delivery"],
            timeline: "18 months",
            scope: "Pan-APAC deployment"
        },
        {
            client: "Sony Corporation",
            country: "Japan",
            industry: "Technology",
            challenge: "Digital innovation platform for entertainment and technology convergence",
            solution: "Integrated digital platform with AI-powered content and device management",
            results: ["10M+ user engagement", "70% content personalization", "Global distribution optimization"],
            timeline: "30 months",
            scope: "Global innovation hub"
        }
    ];
    // APAC Benefits
    const apacBenefits = [
        {
            title: "Market Coverage",
            value: "4.6B",
            description: "Population reach across APAC",
            icon: Globe
        },
        {
            title: "Success Rate",
            value: "97%",
            description: "Project delivery success",
            icon: Target
        },
        {
            title: "Regional Expertise",
            value: "1000+",
            description: "APAC specialists",
            icon: Users
        },
        {
            title: "Growth Impact",
            value: "280%",
            description: "Average client growth",
            icon: TrendingUp
        }
    ];
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => {
                                    const icons = [Globe, Compass, Ship, Anchor, Users, Brain];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Globe, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "Asia-Pacific Digital Leadership" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Asia ", _jsx("span", { className: "gradient-text-blue", children: "Pacific" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Leading digital transformation across the Asia-Pacific region. Connecting 4.6B people with innovative solutions from Northeast Asia to Oceania, driving growth and innovation." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: apacStats.map((stat, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(stat.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: stat.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: stat.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'} mb-2`, children: stat.description }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: stat.growth })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Expand Across APAC", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('apac-framework');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "APAC Framework" }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('global-delivery'), children: "Global Delivery" })] })] }) })] }), _jsx("section", { id: "apac-framework", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["APAC ", _jsx("span", { className: "gradient-text-blue", children: "Framework" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "A comprehensive 4-phase approach designed for Asia-Pacific's diverse markets, cultural complexities, and regulatory environments for successful regional transformation." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: apacFramework.map((step, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-6 rounded-2xl gradient-bg-blue flex items-center justify-center`, children: _jsx(step.icon, { className: "w-8 h-8 text-white" }) }), _jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: step.step }), _jsx("h3", { className: `text-xl font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: step.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-6`, children: step.description }), _jsx("ul", { className: "space-y-2", children: step.activities.map((activity, activityIndex) => (_jsxs("li", { className: `text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: ["\u2022 ", activity] }, activityIndex))) })] }, step.step))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["APAC ", _jsx("span", { className: "gradient-text-blue", children: "Regional Markets" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Comprehensive coverage across Asia-Pacific's diverse regions with specialized expertise and deep local market understanding for each unique market." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: apacMarkets.map((market, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 h-full group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx(market.icon, { className: "w-12 h-12 text-blue-500" }), _jsx(Badge, { variant: "secondary", children: market.growth })] }), _jsx("h3", { className: `text-2xl font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: market.region }), _jsxs("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-4`, children: [_jsx(MapPin, { className: "w-4 h-4 inline mr-1" }), market.countries.join(', ')] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Population" }), _jsx("p", { className: `text-lg font-bold gradient-text-blue`, children: market.population })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Digital Economy" }), _jsx("p", { className: `text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: market.digitalEconomy })] })] }), _jsxs("div", { children: [_jsxs("h4", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: ["Specialization: ", market.specialization] }), _jsx("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-3`, children: market.flagship }), _jsx("p", { className: `text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: market.projects })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Key Focus Areas:" }), _jsx("div", { className: "flex flex-wrap gap-1", children: market.focus.map((area, areaIndex) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: area }, areaIndex))) })] })] }), _jsx("div", { className: "mt-6", children: _jsx(Button, { className: "w-full gradient-bg-blue text-white rounded-xl", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-2 justify-center ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Explore Market", _jsx(ArrowRight, { className: `w-4 h-4 ${isRTL ? 'rotate-180' : ''}` })] }) }) })] }, market.region))) })] }) }), _jsx("section", { className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["APAC ", _jsx("span", { className: "gradient-text-blue", children: "Industry Leadership" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Leading digital transformation across key industries with deep sector expertise and proven track record of delivering transformational outcomes across the region." })] }), _jsx("div", { className: "space-y-8", children: industryLeadership.map((industry, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: `flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `w-12 h-12 rounded-xl gradient-bg-blue flex items-center justify-center`, children: _jsx(industry.icon, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { children: [_jsx("h3", { className: `text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: industry.industry }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: industry.value })] })] }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-4`, children: industry.description }), _jsxs("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx("strong", { children: "Projects:" }), " ", industry.projects] })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Key Markets" }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: industry.markets.map((market, marketIndex) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: market }, marketIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Key Highlights" }), _jsx("ul", { className: "space-y-2", children: industry.highlights.map((highlight, highlightIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), highlight] }, highlightIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Key Achievements" }), _jsx("ul", { className: "space-y-2", children: industry.achievements.map((achievement, achievementIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(Award, { className: "w-4 h-4 text-blue-500 flex-shrink-0" }), achievement] }, achievementIndex))) })] })] }), _jsx("div", { className: "mt-6 flex justify-center", children: _jsx(Button, { className: "gradient-bg-blue text-white rounded-xl px-8", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Explore Industry Solutions", _jsx(ArrowRight, { className: `w-4 h-4 ${isRTL ? 'rotate-180' : ''}` })] }) }) })] }, industry.industry))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["APAC ", _jsx("span", { className: "gradient-text-blue", children: "Success Stories" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Transformational success stories from across the Asia-Pacific region demonstrating our capability to deliver at scale with measurable impact." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: apacSuccessStories.map((story, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 h-full group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx(Badge, { variant: "secondary", children: story.industry }), _jsx("span", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: story.timeline })] }), _jsx("h3", { className: `text-xl font-semibold mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: story.client }), _jsxs("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-2`, children: [_jsx(MapPin, { className: "w-4 h-4 inline mr-1" }), story.country, " \u2022 ", story.scope] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Challenge:" }), _jsx("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: story.challenge })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Solution:" }), _jsx("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: story.solution })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Results:" }), _jsx("ul", { className: "space-y-1", children: story.results.map((result, resultIndex) => (_jsxs("li", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-3 h-3 text-green-500 flex-shrink-0" }), result] }, resultIndex))) })] })] })] }, story.client))) })] }) }), _jsxs("section", { className: "py-16 lg:py-24 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 transition-colors duration-300" }), _jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 dark:opacity-10 transition-opacity duration-300", style: {
                            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                            filter: "blur(60px)",
                        } }), _jsx("div", { className: "max-w-4xl mx-auto px-6 relative z-10", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsxs("div", { className: "glass-heavy rounded-3xl p-12 text-center relative overflow-hidden border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl transition-colors duration-300" }), _jsxs("div", { className: "relative z-10", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-lg", children: _jsx(Globe, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300", children: "Ready to Transform Across Asia-Pacific?" }), _jsx("div", { className: "text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300", children: "Join 2000+ companies across APAC that have achieved transformational growth with our regional expertise and proven methodology." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl border-0 shadow-lg relative overflow-hidden transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: "relative z-10 flex items-center", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Start APAC Expansion"] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "glass-secondary border-2 border-blue-300 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300", onClick: () => navigate('contact'), children: "Contact APAC Team" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-blue-200 dark:border-blue-600/50 transition-colors duration-300", children: [_jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Regional Coverage" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "4.6B people across 15+ countries" })] }), _jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Proven Success" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "97% success rate & 280% average growth" })] })] })] })] }) }) })] })] }));
}
//# sourceMappingURL=AsiaPacificPage.js.map