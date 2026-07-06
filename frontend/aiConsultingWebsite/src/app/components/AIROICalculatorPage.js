"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { Calculator, TrendingUp, DollarSign, Clock, Users, Target, BarChart3, Download, Share2, RefreshCw, CheckCircle, AlertCircle, Info, Zap, Brain, Eye, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Slider } from "./ui/slider";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
export function AIROICalculatorPage({ navigate }) {
    const [inputs, setInputs] = useState({
        // Business Metrics
        annualRevenue: 5000000,
        employeeCount: 50,
        avgHourlyWage: 35,
        currentProcessTime: 8,
        errorRate: 5,
        // AI Implementation
        implementationType: 'nlp',
        implementationCost: 150000,
        trainingCost: 25000,
        maintenanceCost: 30000,
        licenseYearlyCost: 50000,
        // Expected Benefits
        timeReduction: 40,
        errorReduction: 70,
        productivityIncrease: 25,
        revenueIncrease: 15,
        // Timeline
        implementationTimeMonths: 6,
        analysisYears: 3
    });
    const [selectedTemplate, setSelectedTemplate] = useState('custom');
    const [activeTab, setActiveTab] = useState('inputs');
    const aiTemplates = [
        {
            id: 'custom',
            name: 'Custom Configuration',
            description: 'Configure your own AI implementation parameters'
        },
        {
            id: 'nlp',
            name: 'Natural Language Processing',
            description: 'Document processing, chatbots, content analysis',
            defaults: {
                implementationType: 'nlp',
                implementationCost: 120000,
                trainingCost: 20000,
                maintenanceCost: 25000,
                licenseYearlyCost: 40000,
                timeReduction: 50,
                errorReduction: 60,
                productivityIncrease: 30,
                revenueIncrease: 12
            }
        },
        {
            id: 'computer-vision',
            name: 'Computer Vision',
            description: 'Image recognition, quality control, automated inspection',
            defaults: {
                implementationType: 'computer-vision',
                implementationCost: 200000,
                trainingCost: 35000,
                maintenanceCost: 40000,
                licenseYearlyCost: 60000,
                timeReduction: 60,
                errorReduction: 80,
                productivityIncrease: 35,
                revenueIncrease: 18
            }
        },
        {
            id: 'predictive-analytics',
            name: 'Predictive Analytics',
            description: 'Demand forecasting, risk assessment, optimization',
            defaults: {
                implementationType: 'predictive-analytics',
                implementationCost: 180000,
                trainingCost: 30000,
                maintenanceCost: 35000,
                licenseYearlyCost: 45000,
                timeReduction: 35,
                errorReduction: 50,
                productivityIncrease: 28,
                revenueIncrease: 20
            }
        },
        {
            id: 'automation',
            name: 'Process Automation',
            description: 'RPA, workflow automation, decision making',
            defaults: {
                implementationType: 'automation',
                implementationCost: 100000,
                trainingCost: 15000,
                maintenanceCost: 20000,
                licenseYearlyCost: 30000,
                timeReduction: 70,
                errorReduction: 75,
                productivityIncrease: 40,
                revenueIncrease: 10
            }
        }
    ];
    // Calculate ROI metrics
    const calculations = useMemo(() => {
        const yearsArray = Array.from({ length: inputs.analysisYears }, (_, i) => i + 1);
        // Annual costs
        const totalImplementationCost = inputs.implementationCost + inputs.trainingCost;
        const annualOperatingCost = inputs.maintenanceCost + inputs.licenseYearlyCost;
        // Annual benefits
        const timeSavingsValue = (inputs.currentProcessTime * (inputs.timeReduction / 100) * inputs.employeeCount * inputs.avgHourlyWage * 250); // 250 working days
        const errorReductionValue = (inputs.annualRevenue * (inputs.errorRate / 100) * (inputs.errorReduction / 100));
        const productivityValue = (inputs.annualRevenue * (inputs.productivityIncrease / 100));
        const revenueIncreaseValue = (inputs.annualRevenue * (inputs.revenueIncrease / 100));
        const totalAnnualBenefits = timeSavingsValue + errorReductionValue + productivityValue + revenueIncreaseValue;
        // Calculate cumulative values
        let cumulativeCosts = totalImplementationCost;
        let cumulativeBenefits = 0;
        let roiBreakeven = null;
        const yearlyData = yearsArray.map(year => {
            const yearCosts = year === 1 ? totalImplementationCost + annualOperatingCost : annualOperatingCost;
            const yearBenefits = year <= (inputs.implementationTimeMonths / 12) ? totalAnnualBenefits * (year / (inputs.implementationTimeMonths / 12)) : totalAnnualBenefits;
            cumulativeCosts += year === 1 ? 0 : annualOperatingCost;
            cumulativeBenefits += yearBenefits;
            const netValue = cumulativeBenefits - cumulativeCosts;
            const roi = ((cumulativeBenefits - cumulativeCosts) / cumulativeCosts) * 100;
            if (netValue >= 0 && roiBreakeven === null) {
                roiBreakeven = year;
            }
            return {
                year: `Year ${year}`,
                yearNumber: year,
                costs: yearCosts,
                benefits: yearBenefits,
                cumulativeCosts,
                cumulativeBenefits,
                netValue,
                roi: roi > -100 ? roi : -100 // Cap at -100% for display
            };
        });
        const finalROI = yearlyData[yearlyData.length - 1]?.roi || 0;
        const totalNetValue = cumulativeBenefits - cumulativeCosts;
        // Benefit breakdown for pie chart
        const benefitBreakdown = [
            { name: 'Time Savings', value: timeSavingsValue, color: '#3b82f6' },
            { name: 'Error Reduction', value: errorReductionValue, color: '#10b981' },
            { name: 'Productivity Gain', value: productivityValue, color: '#f59e0b' },
            { name: 'Revenue Increase', value: revenueIncreaseValue, color: '#ef4444' }
        ];
        return {
            yearlyData,
            finalROI,
            totalNetValue,
            totalImplementationCost,
            totalAnnualBenefits,
            annualOperatingCost,
            roiBreakeven,
            benefitBreakdown,
            timeSavingsValue,
            errorReductionValue,
            productivityValue,
            revenueIncreaseValue
        };
    }, [inputs]);
    const handleInputChange = (field, value) => {
        setInputs(prev => ({
            ...prev,
            [field]: typeof value === 'string' ? value : Number(value)
        }));
    };
    const handleTemplateChange = (templateId) => {
        setSelectedTemplate(templateId);
        const template = aiTemplates.find(t => t.id === templateId);
        if (template && template.defaults) {
            setInputs(prev => ({
                ...prev,
                ...template.defaults
            }));
        }
    };
    const resetCalculator = () => {
        setInputs({
            annualRevenue: 5000000,
            employeeCount: 50,
            avgHourlyWage: 35,
            currentProcessTime: 8,
            errorRate: 5,
            implementationType: 'nlp',
            implementationCost: 150000,
            trainingCost: 25000,
            maintenanceCost: 30000,
            licenseYearlyCost: 50000,
            timeReduction: 40,
            errorReduction: 70,
            productivityIncrease: 25,
            revenueIncrease: 15,
            implementationTimeMonths: 6,
            analysisYears: 3
        });
        setSelectedTemplate('custom');
    };
    const exportResults = () => {
        const results = {
            inputs,
            calculations: {
                finalROI: calculations.finalROI,
                totalNetValue: calculations.totalNetValue,
                roiBreakeven: calculations.roiBreakeven,
                yearlyData: calculations.yearlyData
            },
            generatedAt: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ai-roi-calculation-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const shareResults = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'AI ROI Calculator Results',
                    text: `AI Implementation ROI: ${calculations.finalROI.toFixed(1)}% over ${inputs.analysisYears} years`,
                    url: window.location.href
                });
            }
            catch (error) {
                console.log('Share cancelled');
            }
        }
        else {
            // Fallback - copy to clipboard
            const shareText = `AI Implementation ROI: ${calculations.finalROI.toFixed(1)}% over ${inputs.analysisYears} years\nBreakeven: ${calculations.roiBreakeven ? `Year ${calculations.roiBreakeven}` : 'Beyond analysis period'}\nNet Value: $${calculations.totalNetValue.toLocaleString()}`;
            navigator.clipboard.writeText(shareText);
        }
    };
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };
    const formatPercentage = (value) => {
        return `${value.toFixed(1)}%`;
    };
    const getROIColor = (roi) => {
        if (roi >= 50)
            return 'text-green-600 dark:text-green-400';
        if (roi >= 20)
            return 'text-blue-600 dark:text-blue-400';
        if (roi >= 0)
            return 'text-yellow-600 dark:text-yellow-400';
        return 'text-red-600 dark:text-red-400';
    };
    const getROIBadgeColor = (roi) => {
        if (roi >= 50)
            return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
        if (roi >= 20)
            return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
        if (roi >= 0)
            return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    return (_jsxs("div", { className: "min-h-screen", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => (_jsx(motion.div, { className: "absolute text-blue-500", style: {
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
                                    }, children: i % 4 === 0 ? _jsx(Calculator, { className: "w-8 h-8" }) :
                                        i % 4 === 1 ? _jsx(TrendingUp, { className: "w-8 h-8" }) :
                                            i % 4 === 2 ? _jsx(DollarSign, { className: "w-8 h-8" }) :
                                                _jsx(BarChart3, { className: "w-8 h-8" }) }, i))) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Calculator, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "AI Investment Analysis" }), _jsx(TrendingUp, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["AI ", _jsx("span", { className: "gradient-text-blue", children: "ROI" }), " Calculator"] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Calculate the return on investment for your AI implementation. Get detailed projections, break-even analysis, and comprehensive insights to make informed decisions." })] }), _jsx(motion.div, { className: "flex flex-wrap justify-center gap-8 pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [
                                        { icon: DollarSign, text: 'Cost analysis' },
                                        { icon: TrendingUp, text: 'ROI projections' },
                                        { icon: BarChart3, text: 'Break-even timeline' },
                                        { icon: Target, text: 'Expert insights' }
                                    ].map((item, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(item.icon, { className: "w-5 h-5 text-blue-500" }), _jsx("span", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: item.text })] }, index))) }), _jsxs(motion.div, { className: "pt-8 flex flex-col sm:flex-row gap-4 justify-center", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsxs(Button, { onClick: () => setActiveTab('results'), className: "h-14 px-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg", children: [_jsx(TrendingUp, { className: "w-5 h-5 mr-2" }), "View Results"] }), _jsxs(Button, { onClick: () => navigate('contact'), variant: "outline", className: "h-14 px-8 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: [_jsx(Target, { className: "w-5 h-5 mr-2" }), "Get Expert Consultation"] })] })] }) })] }), _jsx("section", { className: "px-6 py-20", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "space-y-8", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-3 lg:grid-cols-4", children: [_jsx(TabsTrigger, { value: "templates", children: "Templates" }), _jsx(TabsTrigger, { value: "inputs", children: "Business Inputs" }), _jsx(TabsTrigger, { value: "results", children: "Results" }), _jsx(TabsTrigger, { value: "analysis", className: "hidden lg:block", children: "Analysis" })] }), _jsx(TabsContent, { value: "templates", className: "space-y-6", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Choose an AI Implementation Template" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: "Start with a pre-configured template based on common AI use cases, or create a custom configuration." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: aiTemplates.map((template) => (_jsx(Card, { className: `glass card-hover cursor-pointer transition-all duration-200 ${selectedTemplate === template.id ? 'ring-2 ring-blue-500/50 bg-blue-50/50 dark:bg-blue-900/20' : ''}`, onClick: () => handleTemplateChange(template.id), children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-start gap-3 mb-4", children: [_jsxs("div", { className: "w-10 h-10 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center", children: [template.id === 'nlp' && _jsx(MessageSquare, { className: "w-5 h-5" }), template.id === 'computer-vision' && _jsx(Eye, { className: "w-5 h-5" }), template.id === 'predictive-analytics' && _jsx(BarChart3, { className: "w-5 h-5" }), template.id === 'automation' && _jsx(Zap, { className: "w-5 h-5" }), template.id === 'custom' && _jsx(Brain, { className: "w-5 h-5" })] }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-1", children: template.name }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: template.description })] }), selectedTemplate === template.id && (_jsx(CheckCircle, { className: "w-5 h-5 text-blue-600" }))] }), template.defaults && (_jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [_jsxs("div", { className: "bg-slate-50 dark:bg-slate-800/50 rounded p-2", children: [_jsx("div", { className: "text-slate-500 dark:text-slate-400", children: "Time Reduction" }), _jsxs("div", { className: "font-medium", children: [template.defaults.timeReduction, "%"] })] }), _jsxs("div", { className: "bg-slate-50 dark:bg-slate-800/50 rounded p-2", children: [_jsx("div", { className: "text-slate-500 dark:text-slate-400", children: "Error Reduction" }), _jsxs("div", { className: "font-medium", children: [template.defaults.errorReduction, "%"] })] }), _jsxs("div", { className: "bg-slate-50 dark:bg-slate-800/50 rounded p-2", children: [_jsx("div", { className: "text-slate-500 dark:text-slate-400", children: "Implementation" }), _jsx("div", { className: "font-medium", children: formatCurrency(template.defaults.implementationCost) })] }), _jsxs("div", { className: "bg-slate-50 dark:bg-slate-800/50 rounded p-2", children: [_jsx("div", { className: "text-slate-500 dark:text-slate-400", children: "Annual License" }), _jsx("div", { className: "font-medium", children: formatCurrency(template.defaults.licenseYearlyCost) })] })] }))] }) }, template.id))) }), _jsx("div", { className: "flex justify-center mt-8", children: _jsxs(Button, { onClick: () => setActiveTab('inputs'), className: "gradient-bg-blue text-white hover:opacity-90", children: ["Configure Parameters", _jsx(Target, { className: "w-4 h-4 ml-2" })] }) })] }) }), _jsx(TabsContent, { value: "inputs", className: "space-y-6", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [_jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Users, { className: "w-5 h-5" }), "Business Metrics"] }) }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "annualRevenue", children: "Annual Revenue" }), _jsx(Input, { id: "annualRevenue", type: "number", value: inputs.annualRevenue, onChange: (e) => handleInputChange('annualRevenue', e.target.value), className: "glass" }), _jsx("p", { className: "text-xs text-slate-500", children: "Total company revenue per year" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "employeeCount", children: "Number of Employees" }), _jsx(Input, { id: "employeeCount", type: "number", value: inputs.employeeCount, onChange: (e) => handleInputChange('employeeCount', e.target.value), className: "glass" }), _jsx("p", { className: "text-xs text-slate-500", children: "Employees affected by AI implementation" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "avgHourlyWage", children: "Average Hourly Wage ($)" }), _jsx(Input, { id: "avgHourlyWage", type: "number", value: inputs.avgHourlyWage, onChange: (e) => handleInputChange('avgHourlyWage', e.target.value), className: "glass" }), _jsx("p", { className: "text-xs text-slate-500", children: "Including benefits and overhead" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "currentProcessTime", children: "Current Process Time (hours/day)" }), _jsx(Input, { id: "currentProcessTime", type: "number", step: "0.5", value: inputs.currentProcessTime, onChange: (e) => handleInputChange('currentProcessTime', e.target.value), className: "glass" }), _jsx("p", { className: "text-xs text-slate-500", children: "Hours spent on processes to be automated" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "errorRate", children: "Current Error Rate (%)" }), _jsx(Input, { id: "errorRate", type: "number", step: "0.1", value: inputs.errorRate, onChange: (e) => handleInputChange('errorRate', e.target.value), className: "glass" }), _jsx("p", { className: "text-xs text-slate-500", children: "Percentage of work requiring correction" })] })] })] }), _jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(DollarSign, { className: "w-5 h-5" }), "Implementation Costs"] }) }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "implementationCost", children: "Implementation Cost ($)" }), _jsx(Input, { id: "implementationCost", type: "number", value: inputs.implementationCost, onChange: (e) => handleInputChange('implementationCost', e.target.value), className: "glass" }), _jsx("p", { className: "text-xs text-slate-500", children: "One-time setup and integration costs" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "trainingCost", children: "Training Cost ($)" }), _jsx(Input, { id: "trainingCost", type: "number", value: inputs.trainingCost, onChange: (e) => handleInputChange('trainingCost', e.target.value), className: "glass" }), _jsx("p", { className: "text-xs text-slate-500", children: "Staff training and change management" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "licenseYearlyCost", children: "Annual License Cost ($)" }), _jsx(Input, { id: "licenseYearlyCost", type: "number", value: inputs.licenseYearlyCost, onChange: (e) => handleInputChange('licenseYearlyCost', e.target.value), className: "glass" }), _jsx("p", { className: "text-xs text-slate-500", children: "Software licenses and subscriptions" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "maintenanceCost", children: "Annual Maintenance ($)" }), _jsx(Input, { id: "maintenanceCost", type: "number", value: inputs.maintenanceCost, onChange: (e) => handleInputChange('maintenanceCost', e.target.value), className: "glass" }), _jsx("p", { className: "text-xs text-slate-500", children: "Support, updates, and maintenance" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "implementationTimeMonths", children: "Implementation Timeline (months)" }), _jsxs("div", { className: "px-3", children: [_jsx(Slider, { value: [inputs.implementationTimeMonths], onValueChange: (value) => handleInputChange('implementationTimeMonths', value[0]), max: 24, min: 1, step: 1, className: "w-full" }), _jsxs("div", { className: "flex justify-between text-xs text-slate-500 mt-1", children: [_jsx("span", { children: "1 month" }), _jsxs("span", { className: "font-medium", children: [inputs.implementationTimeMonths, " months"] }), _jsx("span", { children: "24 months" })] })] })] })] })] }), _jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-5 h-5" }), "Expected Benefits"] }) }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { children: ["Time Reduction: ", inputs.timeReduction, "%"] }), _jsxs("div", { className: "px-3", children: [_jsx(Slider, { value: [inputs.timeReduction], onValueChange: (value) => handleInputChange('timeReduction', value[0]), max: 90, min: 0, step: 5, className: "w-full" }), _jsxs("div", { className: "flex justify-between text-xs text-slate-500 mt-1", children: [_jsx("span", { children: "0%" }), _jsx("span", { children: "90%" })] })] }), _jsx("p", { className: "text-xs text-slate-500", children: "Reduction in time spent on manual tasks" })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { children: ["Error Reduction: ", inputs.errorReduction, "%"] }), _jsxs("div", { className: "px-3", children: [_jsx(Slider, { value: [inputs.errorReduction], onValueChange: (value) => handleInputChange('errorReduction', value[0]), max: 95, min: 0, step: 5, className: "w-full" }), _jsxs("div", { className: "flex justify-between text-xs text-slate-500 mt-1", children: [_jsx("span", { children: "0%" }), _jsx("span", { children: "95%" })] })] }), _jsx("p", { className: "text-xs text-slate-500", children: "Reduction in errors and rework" })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { children: ["Productivity Increase: ", inputs.productivityIncrease, "%"] }), _jsxs("div", { className: "px-3", children: [_jsx(Slider, { value: [inputs.productivityIncrease], onValueChange: (value) => handleInputChange('productivityIncrease', value[0]), max: 50, min: 0, step: 5, className: "w-full" }), _jsxs("div", { className: "flex justify-between text-xs text-slate-500 mt-1", children: [_jsx("span", { children: "0%" }), _jsx("span", { children: "50%" })] })] }), _jsx("p", { className: "text-xs text-slate-500", children: "Overall productivity improvement" })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { children: ["Revenue Increase: ", inputs.revenueIncrease, "%"] }), _jsxs("div", { className: "px-3", children: [_jsx(Slider, { value: [inputs.revenueIncrease], onValueChange: (value) => handleInputChange('revenueIncrease', value[0]), max: 50, min: 0, step: 1, className: "w-full" }), _jsxs("div", { className: "flex justify-between text-xs text-slate-500 mt-1", children: [_jsx("span", { children: "0%" }), _jsx("span", { children: "50%" })] })] }), _jsx("p", { className: "text-xs text-slate-500", children: "Additional revenue from AI capabilities" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "analysisYears", children: "Analysis Period (years)" }), _jsxs(Select, { value: inputs.analysisYears.toString(), onValueChange: (value) => handleInputChange('analysisYears', parseInt(value)), children: [_jsx(SelectTrigger, { className: "glass", children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "1", children: "1 Year" }), _jsx(SelectItem, { value: "2", children: "2 Years" }), _jsx(SelectItem, { value: "3", children: "3 Years" }), _jsx(SelectItem, { value: "4", children: "4 Years" }), _jsx(SelectItem, { value: "5", children: "5 Years" })] })] })] })] })] })] }), _jsxs("div", { className: "flex justify-center gap-4 mt-8", children: [_jsxs(Button, { onClick: resetCalculator, variant: "outline", children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2" }), "Reset"] }), _jsxs(Button, { onClick: () => setActiveTab('results'), className: "gradient-bg-blue text-white hover:opacity-90", children: ["Calculate ROI", _jsx(Calculator, { className: "w-4 h-4 ml-2" })] })] })] }) }), _jsx(TabsContent, { value: "results", className: "space-y-6", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "space-y-8", children: [_jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4", children: _jsx(TrendingUp, { className: "w-6 h-6" }) }), _jsx("div", { className: `text-3xl font-bold mb-2 ${getROIColor(calculations.finalROI)}`, children: formatPercentage(calculations.finalROI) }), _jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: [inputs.analysisYears, "-Year ROI"] })] }) }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("div", { className: "w-12 h-12 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 rounded-xl flex items-center justify-center mx-auto mb-4", children: _jsx(DollarSign, { className: "w-6 h-6" }) }), _jsx("div", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2", children: formatCurrency(calculations.totalNetValue) }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Net Value" })] }) }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("div", { className: "w-12 h-12 bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4", children: _jsx(Clock, { className: "w-6 h-6" }) }), _jsx("div", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2", children: calculations.roiBreakeven ? `Year ${calculations.roiBreakeven}` : 'Beyond' }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Breakeven Point" })] }) }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("div", { className: "w-12 h-12 bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4", children: _jsx(Target, { className: "w-6 h-6" }) }), _jsx("div", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2", children: formatCurrency(calculations.totalAnnualBenefits) }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Annual Benefits" })] }) })] }), _jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center justify-between", children: [_jsxs("span", { className: "flex items-center gap-2", children: [_jsx(BarChart3, { className: "w-5 h-5" }), "ROI Projection Over Time"] }), _jsx(Badge, { className: getROIBadgeColor(calculations.finalROI), children: calculations.finalROI >= 0 ? 'Positive ROI' : 'Negative ROI' })] }) }), _jsx(CardContent, { children: _jsx("div", { className: "h-80", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: calculations.yearlyData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e2e8f0" }), _jsx(XAxis, { dataKey: "year", stroke: "#64748b" }), _jsx(YAxis, { stroke: "#64748b", tickFormatter: (value) => `${value}%` }), _jsx(Tooltip, { formatter: (value) => [`${value.toFixed(1)}%`, 'ROI'], labelStyle: { color: '#334155' }, contentStyle: {
                                                                            background: 'rgba(255, 255, 255, 0.95)',
                                                                            border: '1px solid #e2e8f0',
                                                                            borderRadius: '8px'
                                                                        } }), _jsx(Line, { type: "monotone", dataKey: "roi", stroke: "#3b82f6", strokeWidth: 3, dot: { fill: '#3b82f6', strokeWidth: 2, r: 6 }, activeDot: { r: 8, stroke: '#3b82f6', strokeWidth: 2 } })] }) }) }) })] }), _jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(BarChart3, { className: "w-5 h-5" }), "Cumulative Benefits vs Costs"] }) }), _jsx(CardContent, { children: _jsx("div", { className: "h-80", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(AreaChart, { data: calculations.yearlyData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e2e8f0" }), _jsx(XAxis, { dataKey: "year", stroke: "#64748b" }), _jsx(YAxis, { stroke: "#64748b", tickFormatter: (value) => formatCurrency(value) }), _jsx(Tooltip, { formatter: (value, name) => [formatCurrency(value), name === 'cumulativeBenefits' ? 'Benefits' : 'Costs'], labelStyle: { color: '#334155' }, contentStyle: {
                                                                            background: 'rgba(255, 255, 255, 0.95)',
                                                                            border: '1px solid #e2e8f0',
                                                                            borderRadius: '8px'
                                                                        } }), _jsx(Area, { type: "monotone", dataKey: "cumulativeCosts", stackId: "1", stroke: "#ef4444", fill: "#ef4444", fillOpacity: 0.3 }), _jsx(Area, { type: "monotone", dataKey: "cumulativeBenefits", stackId: "2", stroke: "#10b981", fill: "#10b981", fillOpacity: 0.3 })] }) }) }) })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [_jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Target, { className: "w-5 h-5" }), "Annual Benefit Breakdown"] }) }), _jsx(CardContent, { children: _jsx("div", { className: "h-64", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(PieChart, { children: [_jsx(Pie, { data: calculations.benefitBreakdown, cx: "50%", cy: "50%", outerRadius: 80, fill: "#8884d8", dataKey: "value", label: (entry) => `${entry.name}: ${formatCurrency(entry.value)}`, children: calculations.benefitBreakdown.map((entry, index) => (_jsx(Cell, { fill: entry.color }, `cell-${index}`))) }), _jsx(Tooltip, { formatter: (value) => formatCurrency(value) })] }) }) }) })] }), _jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Info, { className: "w-5 h-5" }), "Key Insights"] }) }), _jsx(CardContent, { className: "space-y-4", children: _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-start gap-3", children: [calculations.finalROI >= 20 ? (_jsx(CheckCircle, { className: "w-5 h-5 text-green-500 mt-0.5" })) : calculations.finalROI >= 0 ? (_jsx(AlertCircle, { className: "w-5 h-5 text-yellow-500 mt-0.5" })) : (_jsx(AlertCircle, { className: "w-5 h-5 text-red-500 mt-0.5" })), _jsxs("div", { children: [_jsx("div", { className: "font-medium text-slate-900 dark:text-slate-100", children: calculations.finalROI >= 20 ? 'Excellent ROI' : calculations.finalROI >= 0 ? 'Positive ROI' : 'Negative ROI' }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: calculations.finalROI >= 20
                                                                                            ? 'This AI implementation shows strong financial returns.'
                                                                                            : calculations.finalROI >= 0
                                                                                                ? 'This implementation will be profitable.'
                                                                                                : 'Consider adjusting parameters or timeline.' })] })] }), _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(Clock, { className: "w-5 h-5 text-blue-500 mt-0.5" }), _jsxs("div", { children: [_jsx("div", { className: "font-medium text-slate-900 dark:text-slate-100", children: "Payback Period" }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: calculations.roiBreakeven
                                                                                            ? `Investment will pay back in ${calculations.roiBreakeven} year${calculations.roiBreakeven > 1 ? 's' : ''}.`
                                                                                            : 'Payback extends beyond the analysis period.' })] })] }), _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(TrendingUp, { className: "w-5 h-5 text-purple-500 mt-0.5" }), _jsxs("div", { children: [_jsx("div", { className: "font-medium text-slate-900 dark:text-slate-100", children: "Primary Benefit" }), _jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: [calculations.benefitBreakdown.reduce((max, current) => current.value > max.value ? current : max).name, " contributes the most value."] })] })] })] }) })] })] }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { onClick: exportResults, variant: "outline", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Export Results"] }), _jsxs(Button, { onClick: shareResults, variant: "outline", children: [_jsx(Share2, { className: "w-4 h-4 mr-2" }), "Share Results"] }), _jsx(Button, { onClick: () => navigate('contact'), className: "gradient-bg-blue text-white hover:opacity-90", children: "Get Expert Review" })] })] }) }), _jsx(TabsContent, { value: "analysis", className: "space-y-6", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: _jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Detailed Analysis & Recommendations" }) }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-semibold text-slate-900 dark:text-slate-100", children: "Financial Analysis" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: "Total Investment" }), _jsx("div", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: formatCurrency(calculations.totalImplementationCost) }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Initial + Training costs" })] }), _jsxs("div", { className: "p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: "Annual Operating Cost" }), _jsx("div", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: formatCurrency(calculations.annualOperatingCost) }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "License + Maintenance" })] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-semibold text-slate-900 dark:text-slate-100", children: "Benefit Analysis" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "p-4 bg-green-50 dark:bg-green-900/20 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium text-green-800 dark:text-green-300", children: "Time Savings" }), _jsx("div", { className: "text-2xl font-bold text-green-800 dark:text-green-300", children: formatCurrency(calculations.timeSavingsValue) }), _jsx("div", { className: "text-sm text-green-600 dark:text-green-400", children: "Per year" })] }), _jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium text-blue-800 dark:text-blue-300", children: "Error Reduction" }), _jsx("div", { className: "text-2xl font-bold text-blue-800 dark:text-blue-300", children: formatCurrency(calculations.errorReductionValue) }), _jsx("div", { className: "text-sm text-blue-600 dark:text-blue-400", children: "Per year" })] })] })] })] }), _jsx(Separator, {}), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-semibold text-slate-900 dark:text-slate-100", children: "Recommendations" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [calculations.finalROI < 0 && (_jsxs("div", { className: "p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800", children: [_jsx("div", { className: "font-medium text-red-800 dark:text-red-300 mb-2", children: "Consider Optimization" }), _jsx("div", { className: "text-sm text-red-600 dark:text-red-400", children: "The current parameters show negative ROI. Consider reducing costs or increasing expected benefits." })] })), calculations.roiBreakeven && calculations.roiBreakeven <= 2 && (_jsxs("div", { className: "p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800", children: [_jsx("div", { className: "font-medium text-green-800 dark:text-green-300 mb-2", children: "Fast Payback" }), _jsx("div", { className: "text-sm text-green-600 dark:text-green-400", children: "Quick return on investment makes this a low-risk implementation." })] })), calculations.finalROI >= 50 && (_jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800", children: [_jsx("div", { className: "font-medium text-blue-800 dark:text-blue-300 mb-2", children: "Excellent Returns" }), _jsx("div", { className: "text-sm text-blue-600 dark:text-blue-400", children: "High ROI indicates strong business case for AI implementation." })] }))] })] })] })] }) }) })] }) }) }), _jsx("section", { className: "py-24", children: _jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Ready to Implement AI in Your Business?" }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 mb-8", children: "Our AI experts can help you validate these projections and create a customized implementation plan." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { onClick: () => navigate('contact'), className: "bg-blue-600 text-white hover:bg-blue-700", children: "Schedule Consultation" }), _jsx(Button, { onClick: () => navigate('services'), variant: "outline", className: "border-blue-300 text-blue-600 hover:bg-blue-50", children: "View Our Services" })] })] }) })] }));
}
//# sourceMappingURL=AIROICalculatorPage.js.map