"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, X, Star, Zap, Target, Users, Settings, Building2, ArrowRight, ChevronRight, Calculator, Clock, Shield, Headphones, Globe, Code, Database, Brain, Sparkles, TrendingUp, Award, MessageSquare, Phone, Mail, DollarSign, CreditCard, Banknote, PiggyBank, Briefcase, Monitor, Smartphone, Tablet, Laptop, Server, Rocket, Cloud, Lock, Eye, Heart, Bookmark, Share2, Download, FileText, BarChart3, PieChart, LineChart, Activity, Lightbulb, Cpu, Layers, Workflow, Bot, Microscope, Package, Gift, Percent, Timer, Calendar, Bell, AlertCircle, CheckCircle, UserCheck, Handshake, BookOpen, Presentation, Search, Filter, Gauge, FlaskConical, CircleDollarSign, Repeat, Contract, Wrench, Sparkle } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function PricingPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    const [selectedModel, setSelectedModel] = useState('fixed-fee');
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // Digital Consultant Pricing Models
    const pricingModels = [
        {
            id: 'fixed-fee',
            name: 'Fixed Fee (Sprint-Based)',
            subtitle: 'Project-Based Pricing',
            description: 'Perfect for defined scope projects with clear deliverables and timelines.',
            icon: Zap,
            color: 'blue',
            popular: false,
            pricing: {
                small: { price: '$1,250 - $3,750', duration: '3-7 days', projects: 'Small Projects' },
                medium: { price: '$3,750 - $12,500', duration: '1-3 weeks', projects: 'Medium Projects' },
                large: { price: '$12,500 - $37,500', duration: '3-6 weeks', projects: 'Large Projects' }
            },
            features: [
                'Clear project scope and timeline',
                'Fixed budget with no surprises',
                'Defined deliverables upfront',
                'Risk-free for clients',
                'Perfect for specific problems',
                'Fast project turnaround',
                'Milestone-based payments',
                'Full project ownership'
            ],
            bestFor: [
                'Website redesigns',
                'AI strategy development',
                'Process optimization',
                'Digital transformation planning'
            ],
            benefits: {
                client: ['Predictable costs', 'Clear timeline', 'Defined outcomes'],
                consultant: ['Scope protection', 'Premium pricing', 'Efficient delivery']
            }
        },
        {
            id: 'outcome-based',
            name: 'Outcome-Based Pricing',
            subtitle: 'Results-Driven Investment',
            description: 'Pricing tied to measurable business outcomes and value creation for maximum ROI.',
            icon: Target,
            color: 'green',
            popular: true,
            pricing: {
                small: { price: '5-10% of savings', duration: '1.5-3 months', projects: 'Cost Reduction' },
                medium: { price: '2.5-7.5% of revenue', duration: '3-6 months', projects: 'Revenue Growth' },
                large: { price: '$25K + % upside', duration: '6+ months', projects: 'Transformation' }
            },
            features: [
                'Payment tied to results',
                'Shared risk and reward',
                'Long-term partnership approach',
                'Performance-based bonuses',
                'ROI-focused engagement',
                'Success metrics tracking',
                'Continuous optimization',
                'Value-based relationship'
            ],
            bestFor: [
                'Revenue optimization',
                'Cost reduction initiatives',
                'Digital transformation',
                'Growth strategy implementation'
            ],
            benefits: {
                client: ['Pay for results only', 'Shared risk', 'Aligned incentives'],
                consultant: ['Higher upside potential', 'Long-term relationships', 'Premium positioning']
            }
        },
        {
            id: 'retainer',
            name: 'Retainer Model',
            subtitle: 'Ongoing Partnership',
            description: 'Continuous support and strategic guidance through monthly or quarterly retainers.',
            icon: Repeat,
            color: 'purple',
            popular: false,
            pricing: {
                small: { price: '$1,500 - $4,000/mo', duration: 'Monthly', projects: 'Basic Support' },
                medium: { price: '$4,000 - $10,000/mo', duration: 'Monthly', projects: 'Strategic Consulting' },
                large: { price: '$10,000 - $25,000/mo', duration: 'Monthly', projects: 'Executive Partnership' }
            },
            features: [
                'Ongoing strategic support',
                'Priority access to consultant',
                'Regular strategy sessions',
                'Continuous improvement',
                'Flexible scope adjustments',
                'Relationship-based pricing',
                'Long-term value creation',
                'Predictable monthly investment'
            ],
            bestFor: [
                'Strategic advisory',
                'Ongoing optimization',
                'Team training and development',
                'Digital transformation oversight'
            ],
            benefits: {
                client: ['Continuous support', 'Priority access', 'Predictable costs'],
                consultant: ['Recurring revenue', 'Deep relationships', 'Sustainable business']
            }
        },
        {
            id: 'custom',
            name: 'Custom Engagements',
            subtitle: 'Tailored Solutions',
            description: 'Bespoke pricing models designed for unique requirements and complex initiatives.',
            icon: Settings,
            color: 'orange',
            popular: false,
            pricing: {
                small: { price: 'Negotiated', duration: 'Variable', projects: 'Unique Needs' },
                medium: { price: 'Value-Based', duration: 'Flexible', projects: 'Complex Projects' },
                large: { price: 'Partnership', duration: 'Long-term', projects: 'Enterprise Scale' }
            },
            features: [
                'Fully customized approach',
                'Flexible payment terms',
                'Hybrid pricing models',
                'Risk-sharing arrangements',
                'Equity participation options',
                'Performance milestones',
                'Scalable engagement model',
                'Strategic partnership setup'
            ],
            bestFor: [
                'Enterprise transformations',
                'Startup partnerships',
                'Industry-specific needs',
                'Multi-phase initiatives'
            ],
            benefits: {
                client: ['Perfect fit solution', 'Flexible terms', 'Risk mitigation'],
                consultant: ['Premium positioning', 'Creative structuring', 'Long-term value']
            }
        }
    ];
    // Digital Consultant Benefits
    const consultantBenefits = [
        {
            title: 'Premium Positioning',
            description: 'Position yourself as a high-value strategic partner rather than just a service provider.',
            icon: Award,
            metric: '3x higher rates'
        },
        {
            title: 'Predictable Revenue',
            description: 'Build sustainable consulting practice with diverse pricing models for different client needs.',
            icon: TrendingUp,
            metric: 'Stable income'
        },
        {
            title: 'Client Alignment',
            description: 'Choose pricing models that align your success with client outcomes and build trust.',
            icon: Handshake,
            metric: '95% retention'
        },
        {
            title: 'Scalable Practice',
            description: 'Mix different pricing models to optimize your time, risk, and revenue potential.',
            icon: Rocket,
            metric: '5x growth'
        }
    ];
    // Pricing Model Comparison
    const comparisonFeatures = [
        { feature: 'Budget Predictability', fixed: 'High', outcome: 'Medium', retainer: 'High', custom: 'Variable' },
        { feature: 'Revenue Potential', fixed: 'Medium', outcome: 'High', retainer: 'Medium', custom: 'High' },
        { feature: 'Client Risk', fixed: 'Low', outcome: 'Very Low', retainer: 'Low', custom: 'Variable' },
        { feature: 'Consultant Risk', fixed: 'Medium', outcome: 'Medium', retainer: 'Low', custom: 'Variable' },
        { feature: 'Relationship Depth', fixed: 'Low', outcome: 'High', retainer: 'Very High', custom: 'High' },
        { feature: 'Time Investment', fixed: 'Defined', outcome: 'Ongoing', retainer: 'Ongoing', custom: 'Variable' }
    ];
    // FAQ data focused on digital consultant pricing
    const faqData = [
        {
            question: 'How do I choose the right pricing model for my consulting practice?',
            answer: 'Consider your client type, project complexity, and risk tolerance. Fixed-fee works for defined projects, outcome-based for measurable results, retainers for ongoing relationships, and custom for unique situations. Many successful consultants use a mix of all models.'
        },
        {
            question: 'What are the advantages of outcome-based pricing?',
            answer: 'Outcome-based pricing aligns your success with client results, allows for premium rates, and builds stronger partnerships. Clients love it because they only pay for results, while consultants can earn significantly more for delivering value.'
        },
        {
            question: 'How do I structure a retainer agreement?',
            answer: 'Define clear scope boundaries, set monthly/quarterly fees, establish communication expectations, and include performance metrics. Retainers work best for ongoing strategic work rather than project deliverables.'
        },
        {
            question: 'When should I consider custom pricing models?',
            answer: 'Use custom models for enterprise clients, complex multi-phase projects, startup partnerships, or when standard models don\'t fit. Consider equity participation, risk-sharing, or hybrid approaches for unique situations.'
        },
        {
            question: 'How do I price my digital consulting services competitively?',
            answer: 'Focus on value creation rather than hourly rates. Research market rates, understand client ROI, and position based on outcomes. Premium pricing comes from proven results and strategic positioning, not just time investment.'
        },
        {
            question: 'What should I include in fixed-fee project proposals?',
            answer: 'Clearly define scope, deliverables, timeline, payment milestones, and change request process. Include assumptions, exclusions, and risk factors. Always build in a buffer for scope creep and unexpected challenges.'
        },
        {
            question: 'How do I measure success in outcome-based engagements?',
            answer: 'Define clear, measurable KPIs upfront (revenue, cost savings, efficiency gains). Use baseline measurements, regular tracking, and transparent reporting. Document both direct and indirect value creation.'
        },
        {
            question: 'Can I combine different pricing models in one engagement?',
            answer: 'Absolutely! Many consultants use hybrid models - for example, a fixed fee for initial strategy with outcome-based pricing for implementation, or a retainer for ongoing support with project-based work for specific initiatives.'
        }
    ];
    // Get selected model details
    const getSelectedModel = () => {
        return pricingModels.find(model => model.id === selectedModel);
    };
    // Get model color
    const getModelColor = (color) => {
        switch (color) {
            case 'blue': return 'from-blue-500 to-blue-600';
            case 'green': return 'from-green-500 to-green-600';
            case 'purple': return 'from-purple-500 to-purple-600';
            case 'orange': return 'from-orange-500 to-orange-600';
            default: return 'from-blue-500 to-blue-600';
        }
    };
    const getModelAccent = (color) => {
        switch (color) {
            case 'blue': return 'text-blue-600 bg-blue-500/10 border-blue-500/20';
            case 'green': return 'text-green-600 bg-green-500/10 border-green-500/20';
            case 'purple': return 'text-purple-600 bg-purple-500/10 border-purple-500/20';
            case 'orange': return 'text-orange-600 bg-orange-500/10 border-orange-500/20';
            default: return 'text-blue-600 bg-blue-500/10 border-blue-500/20';
        }
    };
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => (_jsx(motion.div, { className: "absolute text-blue-500", style: {
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }, animate: {
                                        scale: [0.5, 1, 0.5],
                                        opacity: [0, 0.3, 0],
                                        rotate: [0, 180, 360]
                                    }, transition: {
                                        duration: 8,
                                        repeat: Infinity,
                                        delay: i * 0.5
                                    }, children: i % 4 === 0 ? _jsx(CircleDollarSign, { className: "w-8 h-8" }) :
                                        i % 4 === 1 ? _jsx(Target, { className: "w-8 h-8" }) :
                                            i % 4 === 2 ? _jsx(Repeat, { className: "w-8 h-8" }) :
                                                _jsx(Settings, { className: "w-8 h-8" }) }, i))) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Briefcase, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "Digital Consultant Pricing" }), _jsx(Sparkles, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: [_jsx("span", { className: "gradient-text-blue", children: "Strategic Pricing" }), " Models"] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Choose the right pricing strategy for your digital consulting practice. From fixed-fee projects to outcome-based partnerships." })] }), _jsx(motion.div, { className: "flex flex-wrap justify-center gap-8 pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [
                                        { icon: Award, text: 'Premium positioning' },
                                        { icon: TrendingUp, text: 'Predictable revenue' },
                                        { icon: Handshake, text: 'Client alignment' },
                                        { icon: Rocket, text: 'Scalable practice' }
                                    ].map((item, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(item.icon, { className: "w-5 h-5 text-blue-500" }), _jsx("span", { className: `text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: item.text })] }, index))) }), _jsx(motion.div, { className: "pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 } })] }) })] }), _jsx("section", { className: "py-16 lg:py-24", children: _jsx("div", { className: "max-w-7xl mx-auto px-6", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: pricingModels.map((model, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `relative ${model.popular ? 'lg:scale-105 lg:-mt-4' : ''}`, children: [model.popular && (_jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 z-10", children: _jsxs(Badge, { className: "bg-green-500 text-white border-green-500 px-4 py-1", children: [_jsx(Star, { className: "w-3 h-3 mr-1" }), "Most Popular"] }) })), _jsxs(Card, { className: `h-full ${model.popular
                                        ? 'glass-heavy border-green-500/30 shadow-green-500/10'
                                        : 'glass-heavy'} ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'} transition-all duration-300 hover:scale-105`, children: [_jsxs(CardHeader, { className: "text-center pb-4", children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${getModelColor(model.color)} flex items-center justify-center`, children: _jsx(model.icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: `text-xl font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: model.name }), _jsx("p", { className: `text-sm font-medium mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`, children: model.subtitle }), _jsx("p", { className: `text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: model.description })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsx("div", { className: "space-y-3", children: Object.entries(model.pricing).map(([tier, details]) => (_jsxs("div", { className: `p-3 rounded-lg ${isDark ? 'bg-slate-800/30' : 'bg-blue-50/50'}`, children: [_jsxs("div", { className: "flex justify-between items-start mb-1", children: [_jsx("span", { className: `text-sm font-semibold capitalize ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: details.projects }), _jsx("span", { className: `text-xs px-2 py-1 rounded ${getModelAccent(model.color)}`, children: details.duration })] }), _jsx("div", { className: `text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: details.price })] }, tier))) }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: `text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: "Key Features:" }), model.features.slice(0, 4).map((feature, featureIndex) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Check, { className: "w-3 h-3 text-green-500 flex-shrink-0" }), _jsx("span", { className: `text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: feature })] }, featureIndex)))] }), _jsx("div", { className: "pt-4", children: _jsx(Button, { size: "sm", className: `w-full ${model.popular
                                                            ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white'
                                                            : `bg-gradient-to-r ${getModelColor(model.color)} hover:opacity-90 text-white`}`, onClick: () => {
                                                            setSelectedModel(model.id);
                                                            const element = document.getElementById('model-details');
                                                            if (element) {
                                                                element.scrollIntoView({ behavior: 'smooth' });
                                                            }
                                                        }, children: _jsxs("span", { className: `flex items-center gap-2 justify-center ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Learn More", _jsx(ArrowRight, { className: `w-3 h-3 ${isRTL ? 'rotate-180' : ''}` })] }) }) })] })] })] }, model.id))) }) }) }), getSelectedModel() && (_jsx("section", { id: "model-details", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: (() => {
                                const selectedModel = getSelectedModel();
                                if (!selectedModel)
                                    return null;
                                const SelectedIcon = selectedModel.icon;
                                return (_jsxs(_Fragment, { children: [_jsx("div", { className: `w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${getModelColor(selectedModel.color)} flex items-center justify-center`, children: _jsx(SelectedIcon, { className: "w-10 h-10 text-white" }) }), _jsx("h2", { className: `text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: selectedModel.name }), _jsx("p", { className: `text-xl mb-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`, children: selectedModel.subtitle }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: selectedModel.description })] }));
                            })() }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-2xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Benefits & Best Use Cases" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-3 ${isDark ? 'text-green-400' : 'text-green-600'}`, children: "Client Benefits:" }), _jsx("div", { className: "space-y-2", children: getSelectedModel()?.benefits.client.map((benefit, index) => (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }), _jsx("span", { className: `text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: benefit })] }, index))) })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`, children: "Consultant Benefits:" }), _jsx("div", { className: "space-y-2", children: getSelectedModel()?.benefits.consultant.map((benefit, index) => (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { className: `text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: benefit })] }, index))) })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`, children: "Best For:" }), _jsx("div", { className: "space-y-2", children: getSelectedModel()?.bestFor.map((useCase, index) => (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Target, { className: "w-4 h-4 text-purple-500" }), _jsx("span", { className: `text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: useCase })] }, index))) })] })] })] }), _jsxs(motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-2xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Complete Feature Set" }), _jsx("div", { className: "space-y-3", children: getSelectedModel()?.features.map((feature, index) => (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Check, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), _jsx("span", { className: `text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: feature })] }, index))) }), _jsx("div", { className: "mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-700/50", children: _jsx(Button, { size: "lg", className: "w-full gradient-bg-blue text-white", onClick: () => navigate && navigate('contact'), children: _jsxs("span", { className: `flex items-center gap-3 justify-center ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Discuss This Model", _jsx(MessageSquare, { className: "w-5 h-5" })] }) }) })] })] })] }) })), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Why Strategic ", _jsx("span", { className: "gradient-text-blue", children: "Pricing Matters" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "The right pricing model can transform your consulting practice and client relationships." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: consultantBenefits.map((benefit, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0", children: _jsx(benefit.icon, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: `text-xl font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: benefit.title }), _jsx("p", { className: `text-base mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: benefit.description }), _jsx(Badge, { className: "bg-green-500/10 text-green-600 border-green-500/20", children: benefit.metric })] })] }) }, benefit.title))) })] }) }), _jsx("section", { className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-4xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Pricing ", _jsx("span", { className: "gradient-text-blue", children: "FAQ" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Common questions about digital consultant pricing strategies and models." })] }), _jsx("div", { className: "space-y-6", children: faqData.map((faq, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-6 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-lg font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: faq.question }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`, children: faq.answer })] }, index))) })] }) }), _jsx("section", { className: "py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white", children: _jsx("div", { className: "max-w-4xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold", children: ["Ready to Optimize Your ", _jsx("span", { className: "text-blue-200", children: "Pricing Strategy" }), "?"] }), _jsx("p", { className: "text-xl max-w-3xl mx-auto text-blue-100", children: "Let's discuss which pricing model fits your consulting practice and client base. Build a sustainable, profitable consulting business with strategic pricing." }), _jsxs("div", { className: `flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`, children: [_jsx(Button, { size: "lg", className: "bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg rounded-2xl", onClick: () => navigate && navigate('contact'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Schedule Pricing Consultation", _jsx(Calendar, { className: "w-5 h-5" })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-2xl", onClick: () => {
                                            const element = document.getElementById('services');
                                            if (element) {
                                                navigate && navigate('home');
                                                setTimeout(() => {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }, 100);
                                            }
                                        }, children: "View Our Services" })] }), _jsx(motion.div, { className: "pt-12 grid grid-cols-2 md:grid-cols-4 gap-8", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.4 }, children: [
                                    { icon: Users, number: '200+', label: 'Consultants Advised' },
                                    { icon: TrendingUp, number: '3x', label: 'Avg Rate Increase' },
                                    { icon: Handshake, number: '95%', label: 'Client Satisfaction' },
                                    { icon: Award, number: '5 Years', label: 'Pricing Expertise' }
                                ].map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx(stat.icon, { className: "w-8 h-8 mx-auto mb-2 text-blue-200" }), _jsx("div", { className: "text-2xl font-bold text-white", children: stat.number }), _jsx("div", { className: "text-sm text-blue-200", children: stat.label })] }, index))) }), _jsxs(motion.div, { className: "pt-12 text-center", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.6 }, children: [_jsx("p", { className: "text-blue-200 mb-4", children: "Questions about pricing strategies?" }), _jsxs("div", { className: `flex items-center justify-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: "text-blue-100", children: "pricing@delibix.com" }), _jsx("span", { className: "text-blue-100", children: "+62 857 7002 4933" })] })] })] }) }) })] }));
}
//# sourceMappingURL=PricingPage.js.map