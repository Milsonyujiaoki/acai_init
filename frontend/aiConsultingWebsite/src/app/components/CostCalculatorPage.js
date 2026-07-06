"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Calculator, TrendingUp, Zap, Target, CheckCircle, Star, ArrowRight, Award, Mail, DollarSign, BarChart3, PieChart, TrendingDown, Users, Clock, Settings } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function CostCalculatorPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    const calculatorStats = [
        {
            title: "Cost Models",
            value: "25+",
            description: "Industry-specific pricing models",
            icon: Calculator,
            growth: "Comprehensive coverage"
        },
        {
            title: "Accuracy Rate",
            value: "98%",
            description: "Budget estimation precision",
            icon: Target,
            growth: "Proven reliability"
        },
        {
            title: "Cost Savings",
            value: "32%",
            description: "Average project cost reduction",
            icon: TrendingDown,
            growth: "Significant savings"
        },
        {
            title: "ROI Predictions",
            value: "285%",
            description: "Average return on investment",
            icon: TrendingUp,
            growth: "Exceptional returns"
        }
    ];
    // Cost calculation state
    const [costInputs, setCostInputs] = useState({
        projectScope: 'medium',
        timeline: '12',
        teamSize: '10',
        complexity: 'medium',
        industry: 'technology',
        region: 'global'
    });
    const [calculatedCosts, setCalculatedCosts] = useState({
        totalCost: 0,
        planning: 0,
        implementation: 0,
        training: 0,
        maintenance: 0,
        roi: 0,
        paybackPeriod: 0
    });
    // Cost factors and calculations
    const costFactors = {
        projectScope: {
            small: { multiplier: 0.6, description: "Limited scope project" },
            medium: { multiplier: 1.0, description: "Standard transformation" },
            large: { multiplier: 1.8, description: "Enterprise-wide project" },
            enterprise: { multiplier: 3.2, description: "Full organizational transformation" }
        },
        complexity: {
            low: { multiplier: 0.7, description: "Basic digital upgrade" },
            medium: { multiplier: 1.0, description: "Standard complexity" },
            high: { multiplier: 1.5, description: "Complex integration" },
            expert: { multiplier: 2.2, description: "Cutting-edge technology" }
        },
        industry: {
            technology: { multiplier: 0.9, description: "Technology sector" },
            finance: { multiplier: 1.3, description: "Financial services" },
            healthcare: { multiplier: 1.4, description: "Healthcare industry" },
            manufacturing: { multiplier: 1.1, description: "Manufacturing" },
            retail: { multiplier: 0.95, description: "Retail & commerce" },
            government: { multiplier: 1.6, description: "Government sector" }
        }
    };
    // Calculate costs based on inputs
    useEffect(() => {
        const baseCost = 100000; // Base cost in USD
        const teamSizeMultiplier = parseInt(costInputs.teamSize) * 8000;
        const timelineMultiplier = parseInt(costInputs.timeline) * 5000;
        const scopeMultiplier = costFactors.projectScope[costInputs.projectScope].multiplier;
        const complexityMultiplier = costFactors.complexity[costInputs.complexity].multiplier;
        const industryMultiplier = costFactors.industry[costInputs.industry].multiplier;
        const totalCost = Math.round((baseCost + teamSizeMultiplier + timelineMultiplier) *
            scopeMultiplier * complexityMultiplier * industryMultiplier);
        const planning = Math.round(totalCost * 0.15);
        const implementation = Math.round(totalCost * 0.65);
        const training = Math.round(totalCost * 0.12);
        const maintenance = Math.round(totalCost * 0.08);
        const roi = Math.round(totalCost * 2.85); // 285% average ROI
        const paybackPeriod = Math.round((totalCost / (roi / 12)) * 10) / 10;
        setCalculatedCosts({
            totalCost,
            planning,
            implementation,
            training,
            maintenance,
            roi,
            paybackPeriod
        });
    }, [costInputs]);
    const costBreakdown = [
        {
            category: "Planning & Strategy",
            amount: calculatedCosts.planning,
            percentage: 15,
            description: "Analysis, strategy development, and planning",
            icon: Target
        },
        {
            category: "Implementation",
            amount: calculatedCosts.implementation,
            percentage: 65,
            description: "Technology deployment and system integration",
            icon: Settings
        },
        {
            category: "Training & Change",
            amount: calculatedCosts.training,
            percentage: 12,
            description: "User training and change management",
            icon: Users
        },
        {
            category: "Maintenance & Support",
            amount: calculatedCosts.maintenance,
            percentage: 8,
            description: "Ongoing support and maintenance",
            icon: Clock
        }
    ];
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 z-0", children: _jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }) }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Calculator, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "Cost Intelligence" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Cost ", _jsx("span", { className: "gradient-text-blue", children: "Calculator" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Advanced cost calculation tool with 25+ industry models and 98% accuracy rate. Calculate ROI predictions with 32% average cost savings and comprehensive analysis." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: calculatorStats.map((stat, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(stat.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: stat.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: stat.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'} mb-2`, children: stat.description }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: stat.growth })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => {
                                                const element = document.getElementById('cost-calculator');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Calculate Costs", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('digital-transformation-planner'), children: "Transformation Planner" })] })] }) })] }), _jsx("section", { id: "cost-calculator", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Calculate Your ", _jsx("span", { className: "gradient-text-blue", children: "Investment" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Get accurate cost estimates for your digital transformation project with our advanced calculator based on industry benchmarks." })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-2xl font-bold mb-8 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Project Parameters" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx(Label, { className: "text-base font-medium", children: "Project Scope" }), _jsxs("select", { value: costInputs.projectScope, onChange: (e) => setCostInputs({ ...costInputs, projectScope: e.target.value }), className: `w-full mt-2 p-3 rounded-xl border ${isDark
                                                                ? 'bg-slate-800 border-blue-600/30 text-slate-100'
                                                                : 'bg-white border-blue-200 text-slate-900'}`, children: [_jsx("option", { value: "small", children: "Small - Limited scope project" }), _jsx("option", { value: "medium", children: "Medium - Standard transformation" }), _jsx("option", { value: "large", children: "Large - Enterprise-wide project" }), _jsx("option", { value: "enterprise", children: "Enterprise - Full organizational transformation" })] })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-base font-medium", children: "Timeline (months)" }), _jsx(Input, { type: "number", value: costInputs.timeline, onChange: (e) => setCostInputs({ ...costInputs, timeline: e.target.value }), className: "mt-2 h-12", min: "3", max: "48" })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-base font-medium", children: "Team Size" }), _jsx(Input, { type: "number", value: costInputs.teamSize, onChange: (e) => setCostInputs({ ...costInputs, teamSize: e.target.value }), className: "mt-2 h-12", min: "3", max: "100" })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-base font-medium", children: "Complexity Level" }), _jsxs("select", { value: costInputs.complexity, onChange: (e) => setCostInputs({ ...costInputs, complexity: e.target.value }), className: `w-full mt-2 p-3 rounded-xl border ${isDark
                                                                ? 'bg-slate-800 border-blue-600/30 text-slate-100'
                                                                : 'bg-white border-blue-200 text-slate-900'}`, children: [_jsx("option", { value: "low", children: "Low - Basic digital upgrade" }), _jsx("option", { value: "medium", children: "Medium - Standard complexity" }), _jsx("option", { value: "high", children: "High - Complex integration" }), _jsx("option", { value: "expert", children: "Expert - Cutting-edge technology" })] })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-base font-medium", children: "Industry" }), _jsxs("select", { value: costInputs.industry, onChange: (e) => setCostInputs({ ...costInputs, industry: e.target.value }), className: `w-full mt-2 p-3 rounded-xl border ${isDark
                                                                ? 'bg-slate-800 border-blue-600/30 text-slate-100'
                                                                : 'bg-white border-blue-200 text-slate-900'}`, children: [_jsx("option", { value: "technology", children: "Technology" }), _jsx("option", { value: "finance", children: "Financial Services" }), _jsx("option", { value: "healthcare", children: "Healthcare" }), _jsx("option", { value: "manufacturing", children: "Manufacturing" }), _jsx("option", { value: "retail", children: "Retail & Commerce" }), _jsx("option", { value: "government", children: "Government" })] })] })] })] }), _jsxs(motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "space-y-8", children: [_jsxs("div", { className: `glass-heavy rounded-2xl p-8 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-lg font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Estimated Total Investment" }), _jsx("div", { className: `text-4xl font-bold gradient-text-blue mb-4`, children: formatCurrency(calculatedCosts.totalCost) }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: `glass-secondary rounded-xl p-4 ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsx("div", { className: `text-2xl font-bold text-green-500`, children: formatCurrency(calculatedCosts.roi) }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: "Expected ROI (285%)" })] }), _jsxs("div", { className: `glass-secondary rounded-xl p-4 ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsxs("div", { className: `text-2xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: [calculatedCosts.paybackPeriod, " mo"] }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: "Payback Period" })] })] })] }), _jsxs("div", { className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Cost Breakdown" }), _jsx("div", { className: "space-y-4", children: costBreakdown.map((item, index) => (_jsxs("div", { className: `glass-secondary rounded-xl p-4 ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(item.icon, { className: "w-5 h-5 text-blue-500" }), _jsx("span", { className: `font-medium ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: item.category })] }), _jsx("div", { className: `font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: formatCurrency(item.amount) })] }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-2`, children: item.description }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2", children: _jsx("div", { className: "bg-gradient-to-r from-blue-600 to-blue-500 h-2 rounded-full", style: { width: `${item.percentage}%` } }) }), _jsxs("span", { className: `text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: [item.percentage, "%"] })] })] }, index))) })] })] })] })] }) }), _jsxs("section", { className: "py-16 lg:py-24 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 transition-colors duration-300" }), _jsx("div", { className: "max-w-4xl mx-auto px-6 relative z-10", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsxs("div", { className: "glass-heavy rounded-3xl p-12 text-center relative overflow-hidden border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl transition-colors duration-300" }), _jsxs("div", { className: "relative z-10", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-lg", children: _jsx(Calculator, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300", children: "Ready to Get Accurate Cost Estimates?" }), _jsx("div", { className: "text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300", children: "Access 25+ industry models with 98% accuracy and comprehensive ROI analysis with 32% average cost savings." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl border-0 shadow-lg relative overflow-hidden transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: "relative z-10 flex items-center", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Get Detailed Quote"] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "glass-secondary border-2 border-blue-300 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300", onClick: () => navigate('timeline-estimator'), children: "Timeline Estimator" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-blue-200 dark:border-blue-600/50 transition-colors duration-300", children: [_jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Cost Intelligence" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "25+ models & 98% accuracy" })] }), _jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Proven Savings" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "32% cost reduction & 285% ROI" })] })] })] })] }) }) })] })] }));
}
//# sourceMappingURL=CostCalculatorPage.js.map