"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle, Circle, Download, Share2, TrendingUp, Users, Database, Shield, Brain, Target, AlertCircle, CheckCircle2, XCircle, Info, ArrowRight, Home, BarChart3, Settings, Lightbulb, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Checkbox } from "./ui/checkbox";
export function AIReadinessChecklistPage({ navigate }) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [checkedItems, setCheckedItems] = useState(new Set());
    const [activeTab, setActiveTab] = useState('checklist');
    // Comprehensive AI Readiness Checklist
    const checklistCategories = [
        {
            id: 'strategy',
            name: 'AI Strategy & Vision',
            description: 'Clear understanding of AI goals and alignment with business objectives',
            icon: Target,
            color: 'from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20',
            items: [
                {
                    id: 'strategy-1',
                    title: 'Clear AI Vision and Goals',
                    description: 'Defined vision for AI implementation with specific, measurable goals',
                    weight: 10,
                    category: 'strategy'
                },
                {
                    id: 'strategy-2',
                    title: 'Business Case Development',
                    description: 'Comprehensive business case with ROI projections and success metrics',
                    weight: 9,
                    category: 'strategy'
                },
                {
                    id: 'strategy-3',
                    title: 'Stakeholder Buy-in',
                    description: 'Executive sponsorship and stakeholder commitment to AI initiatives',
                    weight: 8,
                    category: 'strategy'
                },
                {
                    id: 'strategy-4',
                    title: 'AI Roadmap',
                    description: 'Detailed implementation roadmap with timelines and milestones',
                    weight: 7,
                    category: 'strategy'
                },
                {
                    id: 'strategy-5',
                    title: 'Change Management Plan',
                    description: 'Strategy for managing organizational change and user adoption',
                    weight: 6,
                    category: 'strategy'
                }
            ]
        },
        {
            id: 'data',
            name: 'Data Readiness',
            description: 'Quality, accessibility, and governance of data assets',
            icon: Database,
            color: 'from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20',
            items: [
                {
                    id: 'data-1',
                    title: 'Data Quality Assessment',
                    description: 'High-quality, clean, and consistent data across systems',
                    weight: 10,
                    category: 'data'
                },
                {
                    id: 'data-2',
                    title: 'Data Accessibility',
                    description: 'Easy access to relevant data sources and integration capabilities',
                    weight: 9,
                    category: 'data'
                },
                {
                    id: 'data-3',
                    title: 'Data Governance',
                    description: 'Established data governance policies and procedures',
                    weight: 8,
                    category: 'data'
                },
                {
                    id: 'data-4',
                    title: 'Data Security & Privacy',
                    description: 'Robust data security measures and privacy compliance',
                    weight: 9,
                    category: 'data'
                },
                {
                    id: 'data-5',
                    title: 'Data Volume & Variety',
                    description: 'Sufficient data volume and variety for AI model training',
                    weight: 7,
                    category: 'data'
                },
                {
                    id: 'data-6',
                    title: 'Real-time Data Capabilities',
                    description: 'Ability to process and analyze data in real-time',
                    weight: 6,
                    category: 'data'
                }
            ]
        },
        {
            id: 'technology',
            name: 'Technology Infrastructure',
            description: 'Technical capabilities and infrastructure requirements',
            icon: Settings,
            color: 'from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20',
            items: [
                {
                    id: 'tech-1',
                    title: 'Computing Resources',
                    description: 'Adequate computational power for AI workloads (CPU, GPU, storage)',
                    weight: 9,
                    category: 'technology'
                },
                {
                    id: 'tech-2',
                    title: 'Cloud Infrastructure',
                    description: 'Scalable cloud infrastructure or hybrid capabilities',
                    weight: 8,
                    category: 'technology'
                },
                {
                    id: 'tech-3',
                    title: 'Integration Capabilities',
                    description: 'APIs and integration tools for connecting AI with existing systems',
                    weight: 8,
                    category: 'technology'
                },
                {
                    id: 'tech-4',
                    title: 'Security Infrastructure',
                    description: 'Robust cybersecurity measures and threat protection',
                    weight: 9,
                    category: 'technology'
                },
                {
                    id: 'tech-5',
                    title: 'Monitoring & Analytics',
                    description: 'Tools for monitoring AI performance and system analytics',
                    weight: 7,
                    category: 'technology'
                },
                {
                    id: 'tech-6',
                    title: 'Backup & Recovery',
                    description: 'Reliable backup and disaster recovery systems',
                    weight: 6,
                    category: 'technology'
                }
            ]
        },
        {
            id: 'team',
            name: 'Team & Skills',
            description: 'Human resources and competencies for AI implementation',
            icon: Users,
            color: 'from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20',
            items: [
                {
                    id: 'team-1',
                    title: 'AI Leadership',
                    description: 'Dedicated AI leadership or Chief AI Officer role',
                    weight: 8,
                    category: 'team'
                },
                {
                    id: 'team-2',
                    title: 'Data Scientists',
                    description: 'Skilled data scientists and machine learning engineers',
                    weight: 9,
                    category: 'team'
                },
                {
                    id: 'team-3',
                    title: 'Technical Skills',
                    description: 'Development team with AI/ML technical capabilities',
                    weight: 8,
                    category: 'team'
                },
                {
                    id: 'team-4',
                    title: 'Domain Expertise',
                    description: 'Subject matter experts who understand business context',
                    weight: 7,
                    category: 'team'
                },
                {
                    id: 'team-5',
                    title: 'Training Programs',
                    description: 'AI literacy and training programs for employees',
                    weight: 6,
                    category: 'team'
                },
                {
                    id: 'team-6',
                    title: 'External Partnerships',
                    description: 'Partnerships with AI vendors, consultants, or research institutions',
                    weight: 5,
                    category: 'team'
                }
            ]
        },
        {
            id: 'governance',
            name: 'AI Governance & Ethics',
            description: 'Policies, compliance, and ethical considerations',
            icon: Shield,
            color: 'from-teal-50 to-teal-100 dark:from-teal-950/30 dark:to-teal-900/20',
            items: [
                {
                    id: 'gov-1',
                    title: 'AI Ethics Framework',
                    description: 'Established ethical guidelines and responsible AI principles',
                    weight: 8,
                    category: 'governance'
                },
                {
                    id: 'gov-2',
                    title: 'Regulatory Compliance',
                    description: 'Understanding and compliance with relevant AI regulations',
                    weight: 9,
                    category: 'governance'
                },
                {
                    id: 'gov-3',
                    title: 'Risk Management',
                    description: 'AI risk assessment and mitigation strategies',
                    weight: 8,
                    category: 'governance'
                },
                {
                    id: 'gov-4',
                    title: 'Transparency & Explainability',
                    description: 'Ability to explain AI decisions and maintain transparency',
                    weight: 7,
                    category: 'governance'
                },
                {
                    id: 'gov-5',
                    title: 'Bias Detection & Mitigation',
                    description: 'Processes to identify and address algorithmic bias',
                    weight: 7,
                    category: 'governance'
                },
                {
                    id: 'gov-6',
                    title: 'Audit & Documentation',
                    description: 'Regular auditing and comprehensive documentation practices',
                    weight: 6,
                    category: 'governance'
                }
            ]
        }
    ];
    // Calculate scores and progress
    const scores = useMemo(() => {
        const categoryScores = checklistCategories.map(category => {
            const totalWeight = category.items.reduce((sum, item) => sum + item.weight, 0);
            const checkedWeight = category.items
                .filter(item => checkedItems.has(item.id))
                .reduce((sum, item) => sum + item.weight, 0);
            return {
                categoryId: category.id,
                categoryName: category.name,
                score: totalWeight > 0 ? Math.round((checkedWeight / totalWeight) * 100) : 0,
                checkedItems: category.items.filter(item => checkedItems.has(item.id)).length,
                totalItems: category.items.length
            };
        });
        const totalWeight = checklistCategories.reduce((sum, category) => sum + category.items.reduce((itemSum, item) => itemSum + item.weight, 0), 0);
        const totalCheckedWeight = checklistCategories.reduce((sum, category) => sum + category.items
            .filter(item => checkedItems.has(item.id))
            .reduce((itemSum, item) => itemSum + item.weight, 0), 0);
        const overallScore = totalWeight > 0 ? Math.round((totalCheckedWeight / totalWeight) * 100) : 0;
        const totalCheckedItems = checkedItems.size;
        const totalItems = checklistCategories.reduce((sum, category) => sum + category.items.length, 0);
        return {
            overall: overallScore,
            categories: categoryScores,
            checkedItems: totalCheckedItems,
            totalItems
        };
    }, [checkedItems, checklistCategories]);
    const handleItemCheck = (itemId, checked) => {
        setCheckedItems(prev => {
            const newSet = new Set(prev);
            if (checked) {
                newSet.add(itemId);
            }
            else {
                newSet.delete(itemId);
            }
            return newSet;
        });
    };
    const resetChecklist = () => {
        setCheckedItems(new Set());
    };
    const exportResults = () => {
        const results = {
            overallScore: scores.overall,
            categoryScores: scores.categories,
            checkedItems: Array.from(checkedItems),
            totalProgress: `${scores.checkedItems}/${scores.totalItems}`,
            timestamp: new Date().toISOString(),
            recommendations: getRecommendations()
        };
        const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ai-readiness-assessment-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const shareResults = async () => {
        const shareText = `AI Readiness Assessment Results:\n\nOverall Score: ${scores.overall}%\nCompleted: ${scores.checkedItems}/${scores.totalItems} items\n\nCategory Breakdown:\n${scores.categories.map(cat => `• ${cat.categoryName}: ${cat.score}%`).join('\n')}`;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'AI Readiness Assessment Results',
                    text: shareText,
                    url: window.location.href
                });
            }
            catch (error) {
                console.log('Share cancelled');
            }
        }
        else {
            navigator.clipboard.writeText(shareText);
        }
    };
    const getReadinessLevel = (score) => {
        if (score >= 80)
            return { level: 'Advanced', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/30' };
        if (score >= 60)
            return { level: 'Intermediate', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' };
        if (score >= 40)
            return { level: 'Basic', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-900/30' };
        return { level: 'Getting Started', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-100 dark:bg-red-900/30' };
    };
    const getRecommendations = () => {
        const recommendations = [];
        scores.categories.forEach(category => {
            if (category.score < 60) {
                const categoryData = checklistCategories.find(cat => cat.id === category.categoryId);
                recommendations.push({
                    category: category.categoryName,
                    priority: category.score < 40 ? 'High' : 'Medium',
                    suggestion: `Focus on improving ${category.categoryName.toLowerCase()} - currently at ${category.score}%`
                });
            }
        });
        return recommendations;
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
                                    }, children: i % 4 === 0 ? _jsx(CheckCircle2, { className: "w-8 h-8" }) :
                                        i % 4 === 1 ? _jsx(Target, { className: "w-8 h-8" }) :
                                            i % 4 === 2 ? _jsx(Users, { className: "w-8 h-8" }) :
                                                _jsx(Shield, { className: "w-8 h-8" }) }, i))) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(CheckCircle2, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "AI Readiness Assessment" }), _jsx(Target, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["AI ", _jsx("span", { className: "gradient-text-blue", children: "Readiness" }), " Checklist"] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Assess your organization's readiness for AI implementation with our comprehensive checklist. Evaluate key areas and get actionable recommendations for success." })] }), _jsx(motion.div, { className: "flex flex-wrap justify-center gap-8 pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [
                                        { icon: Target, text: 'Strategy assessment' },
                                        { icon: Database, text: 'Data readiness' },
                                        { icon: Users, text: 'Team evaluation' },
                                        { icon: Shield, text: 'Governance check' }
                                    ].map((item, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(item.icon, { className: "w-5 h-5 text-blue-500" }), _jsx("span", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: item.text })] }, index))) }), _jsxs(motion.div, { className: "pt-8 flex flex-col sm:flex-row gap-4 justify-center", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsxs(Button, { onClick: () => setActiveTab('checklist'), className: "h-14 px-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg", children: [_jsx(CheckCircle2, { className: "w-5 h-5 mr-2" }), "Start Assessment"] }), _jsxs(Button, { onClick: () => navigate('contact'), variant: "outline", className: "h-14 px-8 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: [_jsx(Lightbulb, { className: "w-5 h-5 mr-2" }), "Get Expert Guidance"] })] })] }) })] }), _jsx("section", { className: "px-6 py-20", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "space-y-8", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-3", children: [_jsx(TabsTrigger, { value: "checklist", children: "Checklist" }), _jsx(TabsTrigger, { value: "results", children: "Results" }), _jsx(TabsTrigger, { value: "recommendations", children: "Recommendations" })] }), _jsx(TabsContent, { value: "checklist", className: "space-y-6", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "AI Readiness Assessment" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: "Complete this comprehensive checklist to evaluate your organization's readiness for AI implementation." })] }), _jsx(Card, { className: "glass mb-8", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-slate-100", children: "Overall Progress" }), _jsx(Badge, { className: `${getReadinessLevel(scores.overall).bg} ${getReadinessLevel(scores.overall).color} border-0`, children: getReadinessLevel(scores.overall).level })] }), _jsx(Progress, { value: scores.overall, className: "mb-4" }), _jsxs("div", { className: "flex justify-between text-sm text-slate-600 dark:text-slate-400", children: [_jsxs("span", { children: [scores.checkedItems, " of ", scores.totalItems, " items completed"] }), _jsxs("span", { children: [scores.overall, "% ready"] })] })] }) }), _jsx("div", { className: "space-y-8", children: checklistCategories.map((category, categoryIndex) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: categoryIndex * 0.1 }, children: _jsxs(Card, { className: "glass card-hover", children: [_jsx(CardHeader, { className: "pb-4", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: `w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`, children: _jsx(category.icon, { className: "w-7 h-7 text-slate-700 dark:text-slate-300" }) }), _jsxs("div", { className: "flex-1", children: [_jsx(CardTitle, { className: "text-xl font-bold text-slate-900 dark:text-slate-100 mb-2", children: category.name }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: category.description })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "text-2xl font-bold gradient-text-blue", children: [scores.categories.find(cat => cat.categoryId === category.id)?.score || 0, "%"] }), _jsxs("div", { className: "text-sm text-slate-500 dark:text-slate-400", children: [scores.categories.find(cat => cat.categoryId === category.id)?.checkedItems || 0, "/", scores.categories.find(cat => cat.categoryId === category.id)?.totalItems || 0] })] })] }) }), _jsx(CardContent, { className: "space-y-4", children: category.items.map((item, itemIndex) => (_jsxs(motion.div, { className: "flex items-start gap-4 p-4 rounded-2xl glass-secondary hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay: itemIndex * 0.05 }, children: [_jsx(Checkbox, { id: item.id, checked: checkedItems.has(item.id), onCheckedChange: (checked) => handleItemCheck(item.id, checked), className: "mt-1" }), _jsxs("div", { className: "flex-1", children: [_jsx("label", { htmlFor: item.id, className: "font-semibold text-slate-900 dark:text-slate-100 cursor-pointer block mb-1", children: item.title }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 text-sm", children: item.description })] }), _jsxs(Badge, { variant: "outline", className: "text-xs", children: ["Weight: ", item.weight] })] }, item.id))) })] }) }, category.id))) }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mt-12", children: [_jsxs(Button, { onClick: () => setActiveTab('results'), className: "gradient-bg-blue text-white hover:opacity-90", children: ["View Results", _jsx(BarChart3, { className: "w-4 h-4 ml-2" })] }), _jsxs(Button, { onClick: resetChecklist, variant: "outline", className: "border-slate-300 text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-800/20", children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2" }), "Reset Checklist"] })] })] }) }), _jsx(TabsContent, { value: "results", className: "space-y-6", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Assessment Results" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: "Your AI readiness assessment results with detailed breakdown by category." })] }), _jsx(Card, { className: "glass mb-8 text-center", children: _jsxs(CardContent, { className: "p-8", children: [_jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "text-6xl font-bold gradient-text-blue mb-2", children: [scores.overall, "%"] }), _jsx(Badge, { className: `${getReadinessLevel(scores.overall).bg} ${getReadinessLevel(scores.overall).color} border-0 text-lg px-4 py-2`, children: getReadinessLevel(scores.overall).level })] }), _jsx("h3", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2", children: "Overall AI Readiness Score" }), _jsxs("p", { className: "text-slate-600 dark:text-slate-400", children: ["Based on ", scores.checkedItems, " completed items out of ", scores.totalItems, " total"] })] }) }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8", children: scores.categories.map((category, index) => {
                                                const categoryData = checklistCategories.find(cat => cat.id === category.categoryId);
                                                const readinessLevel = getReadinessLevel(category.score);
                                                return (_jsxs(motion.div, { className: "glass card-hover p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsx("div", { className: `w-12 h-12 rounded-xl bg-gradient-to-br ${categoryData?.color} flex items-center justify-center`, children: categoryData?.icon && _jsx(categoryData.icon, { className: "w-6 h-6 text-slate-700 dark:text-slate-300" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100", children: category.categoryName }), _jsx(Badge, { className: `${readinessLevel.bg} ${readinessLevel.color} border-0 text-xs`, children: readinessLevel.level })] })] }), _jsxs("div", { className: "text-3xl font-bold gradient-text-blue mb-2", children: [category.score, "%"] }), _jsx(Progress, { value: category.score, className: "mb-2" }), _jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: [category.checkedItems, "/", category.totalItems, " items completed"] })] }, category.categoryId));
                                            }) }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: exportResults, className: "gradient-bg-blue text-white hover:opacity-90", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Export Results"] }), _jsxs(Button, { onClick: shareResults, variant: "outline", className: "border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: [_jsx(Share2, { className: "w-4 h-4 mr-2" }), "Share Results"] }), _jsxs(Button, { onClick: () => navigate('contact'), variant: "outline", className: "border-green-300 text-green-600 hover:bg-green-50 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/20", children: [_jsx(Users, { className: "w-4 h-4 mr-2" }), "Get Expert Help"] })] })] }) }), _jsx(TabsContent, { value: "recommendations", className: "space-y-6", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Personalized Recommendations" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: "Based on your assessment, here are specific recommendations to improve your AI readiness." })] }), getRecommendations().length > 0 ? (_jsx("div", { className: "space-y-6", children: getRecommendations().map((rec, index) => (_jsx(motion.div, { className: "glass card-hover p-6", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsxs(Badge, { className: `${rec.priority === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'} border-0`, children: [rec.priority, " Priority"] }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-slate-100 mb-2", children: rec.category }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: rec.suggestion })] }), _jsx(AlertCircle, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" })] }) }, index))) })) : (_jsxs(Card, { className: "glass text-center p-12", children: [_jsx(CheckCircle, { className: "w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" }), _jsx("h3", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2", children: "Excellent AI Readiness!" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-6", children: "Your organization shows strong readiness across all categories. Consider advanced AI implementation strategies." }), _jsx(Button, { onClick: () => navigate('contact'), className: "gradient-bg-blue text-white hover:opacity-90", children: "Discuss Advanced AI Strategy" })] })), _jsx(Card, { className: "glass mt-8", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-slate-100 mb-6", children: "General AI Implementation Best Practices" }), _jsx("div", { className: "grid md:grid-cols-2 gap-4", children: [
                                                            { title: 'Start Small', description: 'Begin with pilot projects to prove value before scaling' },
                                                            { title: 'Focus on Data Quality', description: 'Invest in data cleansing and governance before AI implementation' },
                                                            { title: 'Build Cross-functional Teams', description: 'Include business, technical, and ethical expertise' },
                                                            { title: 'Plan for Change Management', description: 'Prepare your organization for AI-driven transformation' },
                                                            { title: 'Establish AI Governance', description: 'Create policies for responsible AI development and deployment' },
                                                            { title: 'Measure and Iterate', description: 'Continuously monitor AI performance and business impact' }
                                                        ].map((practice, index) => (_jsxs("div", { className: "flex items-start gap-3 p-4 rounded-xl glass-secondary", children: [_jsx(Info, { className: "w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-1", children: practice.title }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: practice.description })] })] }, index))) })] }) })] }) })] }) }) }), _jsx("section", { className: "py-24", children: _jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Ready to Transform Your Business with AI?" }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 mb-8", children: "Based on your assessment results, our AI experts will help you develop a customized roadmap for successful AI implementation." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { onClick: () => navigate('contact'), className: "bg-blue-600 text-white hover:bg-blue-700", children: "Get Expert Guidance" }), _jsx(Button, { onClick: () => navigate('ai-roi-calculator'), variant: "outline", className: "border-blue-300 text-blue-600 hover:bg-blue-50", children: "Calculate ROI" })] })] }) })] }));
}
//# sourceMappingURL=AIReadinessChecklistPage.js.map