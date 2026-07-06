"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Building2, Shield, Users, TrendingUp, Award, Globe, Zap, Target, Database, Settings, BarChart3, Clock, CheckCircle2, ArrowRight, Star, Lock, Briefcase, Network, Code, Brain, Rocket, HeartHandshake, MessageSquare, FileText, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback } from "./ui/avatar";
export function EnterprisePortalPage({ navigate }) {
    const [selectedTier, setSelectedTier] = useState("enterprise");
    const enterpriseTiers = [
        {
            id: "enterprise",
            name: "Enterprise",
            description: "For large organizations with complex AI needs",
            minEmployees: "1,000+",
            price: "Custom",
            features: [
                "Dedicated AI consulting team",
                "Custom AI strategy development",
                "Enterprise-grade security",
                "24/7 priority support",
                "Quarterly business reviews",
                "Custom integration solutions"
            ],
            highlight: false
        },
        {
            id: "fortune500",
            name: "Fortune 500",
            description: "Tailored for Fortune 500 companies",
            minEmployees: "10,000+",
            price: "Premium",
            features: [
                "C-suite executive advisory",
                "Global deployment support",
                "Regulatory compliance consulting",
                "Advanced analytics & reporting",
                "Multi-region implementation",
                "Strategic partnership opportunities"
            ],
            highlight: true
        },
        {
            id: "global",
            name: "Global Enterprise",
            description: "For multinational corporations",
            minEmployees: "50,000+",
            price: "Enterprise",
            features: [
                "Global account management",
                "Cross-cultural AI implementation",
                "Multiple language support",
                "Regional compliance expertise",
                "Worldwide 24/7 support",
                "Board-level reporting"
            ],
            highlight: false
        }
    ];
    const enterpriseFeatures = [
        {
            category: "AI Strategy & Consulting",
            icon: Brain,
            capabilities: [
                "Enterprise AI readiness assessment",
                "Digital transformation roadmap",
                "AI governance framework",
                "ROI optimization strategy",
                "Change management consulting",
                "Executive training programs"
            ]
        },
        {
            category: "Security & Compliance",
            icon: Shield,
            capabilities: [
                "Enterprise-grade data security",
                "Regulatory compliance (GDPR, HIPAA, SOX)",
                "AI ethics and bias mitigation",
                "Audit trail and monitoring",
                "Risk assessment frameworks",
                "Incident response protocols"
            ]
        },
        {
            category: "Implementation & Integration",
            icon: Settings,
            capabilities: [
                "Legacy system integration",
                "API development and management",
                "Cloud and hybrid deployments",
                "Scalable architecture design",
                "Performance optimization",
                "Quality assurance testing"
            ]
        },
        {
            category: "Support & Maintenance",
            icon: HeartHandshake,
            capabilities: [
                "24/7 dedicated support team",
                "Proactive monitoring and alerts",
                "Regular performance reviews",
                "Continuous optimization",
                "Training and knowledge transfer",
                "Strategic guidance and updates"
            ]
        }
    ];
    const enterpriseClients = [
        {
            name: "Global Banking Corp",
            industry: "Financial Services",
            employees: "120,000+",
            implementation: "AI-powered fraud detection",
            results: "85% reduction in false positives",
            duration: "18 months",
            satisfaction: 4.9
        },
        {
            name: "International Manufacturing",
            industry: "Manufacturing",
            employees: "80,000+",
            implementation: "Predictive maintenance system",
            results: "40% reduction in downtime",
            duration: "12 months",
            satisfaction: 4.8
        },
        {
            name: "Healthcare Network",
            industry: "Healthcare",
            employees: "50,000+",
            implementation: "AI diagnostic assistance",
            results: "30% improvement in accuracy",
            duration: "24 months",
            satisfaction: 4.9
        },
        {
            name: "Retail Chain International",
            industry: "Retail",
            employees: "200,000+",
            implementation: "Customer behavior analytics",
            results: "25% increase in conversion",
            duration: "15 months",
            satisfaction: 4.7
        }
    ];
    const implementationPhases = [
        {
            phase: "Discovery & Assessment",
            duration: "4-6 weeks",
            activities: [
                "Enterprise readiness evaluation",
                "Current state analysis",
                "Stakeholder interviews",
                "Technical architecture review",
                "Risk and compliance assessment"
            ]
        },
        {
            phase: "Strategy & Planning",
            duration: "6-8 weeks",
            activities: [
                "AI strategy development",
                "Roadmap creation",
                "Resource planning",
                "Governance framework design",
                "Success metrics definition"
            ]
        },
        {
            phase: "Pilot Implementation",
            duration: "12-16 weeks",
            activities: [
                "Proof of concept development",
                "Pilot deployment",
                "User training and adoption",
                "Performance monitoring",
                "Feedback collection and iteration"
            ]
        },
        {
            phase: "Scale & Optimization",
            duration: "Ongoing",
            activities: [
                "Enterprise-wide rollout",
                "Continuous optimization",
                "Advanced feature implementation",
                "Performance tuning",
                "Strategic expansion planning"
            ]
        }
    ];
    const enterpriseMetrics = [
        { label: "Enterprise Clients", value: "50+", icon: Building2 },
        { label: "Fortune 500 Companies", value: "15+", icon: Award },
        { label: "Average Implementation Success", value: "97%", icon: CheckCircle2 },
        { label: "Client Satisfaction Score", value: "4.8/5", icon: Star },
        { label: "Average ROI Achievement", value: "340%", icon: TrendingUp },
        { label: "Global Deployments", value: "25+", icon: Globe }
    ];
    const selectedTierData = enterpriseTiers.find(tier => tier.id === selectedTier);
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/60 dark:from-blue-950/40 dark:via-background dark:to-blue-900/30" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-indigo-300/40 dark:bg-indigo-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-blue-400/35 dark:bg-blue-400/25 rounded-full blur-md float-delayed-2" })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(Building2, { className: "w-12 h-12 text-blue-600 dark:text-blue-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "Enterprise" }), ' ', _jsx("span", { className: "gradient-text-blue-light", children: "AI Portal" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Dedicated AI consulting solutions for Fortune 500 companies and global enterprises. Transform your organization at scale." }), _jsxs("div", { className: "flex justify-center flex-wrap gap-4 mb-8", children: [_jsxs(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2", children: [_jsx(Shield, { className: "w-4 h-4 mr-2" }), "Enterprise Security"] }), _jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-4 py-2", children: [_jsx(Award, { className: "w-4 h-4 mr-2" }), "Fortune 500 Trusted"] }), _jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2", children: [_jsx(Globe, { className: "w-4 h-4 mr-2" }), "Global Scale"] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8", children: enterpriseMetrics.map((metric, index) => {
                                                const Icon = metric.icon;
                                                return (_jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx(Icon, { className: "w-6 h-6 text-blue-600 mx-auto mb-2" }), _jsx("div", { className: "text-lg font-bold text-blue-600", children: metric.value }), _jsx("div", { className: "text-xs text-foreground-muted", children: metric.label })] }, index));
                                            }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Briefcase, { className: "w-5 h-5 mr-2" }), "Enterprise Consultation"] }), _jsxs(Button, { onClick: () => navigate('contact'), variant: "outline", size: "lg", className: "glass-blue-light border-blue-200 dark:border-blue-700 hover:glass-blue transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Calendar, { className: "w-5 h-5 mr-2" }), "Schedule Meeting"] })] })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "solutions", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 glass", children: [_jsx(TabsTrigger, { value: "solutions", children: "Enterprise Solutions" }), _jsx(TabsTrigger, { value: "tiers", children: "Service Tiers" }), _jsx(TabsTrigger, { value: "implementation", children: "Implementation" }), _jsx(TabsTrigger, { value: "success", children: "Success Stories" })] }), _jsxs(TabsContent, { value: "solutions", className: "space-y-8 mt-8", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: enterpriseFeatures.map((feature, index) => {
                                            const Icon = feature.icon;
                                            return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsxs(Card, { className: "glass-heavy h-full", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl", children: _jsx(Icon, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }) }), _jsx("div", { children: _jsx(CardTitle, { className: "text-xl", children: feature.category }) })] }) }), _jsxs(CardContent, { children: [_jsx("div", { className: "space-y-3", children: feature.capabilities.map((capability, capIndex) => (_jsxs("div", { className: "flex items-start gap-3", children: [_jsx(CheckCircle2, { className: "w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" }), _jsx("span", { className: "text-sm", children: capability })] }, capIndex))) }), _jsxs(Button, { variant: "outline", className: "w-full mt-6", children: [_jsx(ArrowRight, { className: "w-4 h-4 mr-2" }), "Learn More"] })] })] }) }, index));
                                        }) }), _jsx(Card, { className: "glass bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 dark:from-blue-950/30 dark:via-background dark:to-blue-950/30", children: _jsxs(CardContent, { className: "p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Why Fortune 500 Companies Choose Delibix" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "We understand the unique challenges of large-scale AI implementations and provide enterprise-grade solutions." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Lock, { className: "w-8 h-8 text-blue-600" }) }), _jsx("h3", { className: "font-semibold text-lg mb-2", children: "Enterprise Security" }), _jsx("p", { className: "text-foreground-muted", children: "Bank-grade security with compliance to all major regulations including GDPR, HIPAA, and SOX." })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(TrendingUp, { className: "w-8 h-8 text-green-600" }) }), _jsx("h3", { className: "font-semibold text-lg mb-2", children: "Proven ROI" }), _jsx("p", { className: "text-foreground-muted", children: "Average 340% ROI within 18 months, with measurable improvements across all key metrics." })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Network, { className: "w-8 h-8 text-purple-600" }) }), _jsx("h3", { className: "font-semibold text-lg mb-2", children: "Global Scale" }), _jsx("p", { className: "text-foreground-muted", children: "Multi-region deployments with 24/7 support and local expertise in key markets worldwide." })] })] })] }) })] }), _jsx(TabsContent, { value: "tiers", className: "space-y-8 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Award, { className: "w-6 h-6 text-blue-600" }), "Enterprise Service Tiers"] }), _jsx(CardDescription, { children: "Choose the right service level for your organization's size and complexity" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: enterpriseTiers.map((tier, index) => {
                                                        const isSelected = tier.id === selectedTier;
                                                        return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: `cursor-pointer ${isSelected ? 'ring-2 ring-blue-500' : ''} ${tier.highlight ? 'ring-2 ring-yellow-400' : ''}`, onClick: () => setSelectedTier(tier.id), children: _jsxs(Card, { className: `glass h-full card-hover ${isSelected ? 'bg-blue-50/50 dark:bg-blue-950/30' : ''} ${tier.highlight ? 'bg-yellow-50/50 dark:bg-yellow-950/30' : ''}`, children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(CardTitle, { className: "text-xl", children: tier.name }), tier.highlight && (_jsx(Badge, { className: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", children: "Most Popular" }))] }), _jsx(CardDescription, { children: tier.description }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "text-sm", children: [_jsx("span", { className: "font-medium", children: "Minimum Size:" }), " ", tier.minEmployees, " employees"] }), _jsx("div", { className: "text-2xl font-bold text-blue-600", children: tier.price })] })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-3", children: tier.features.map((feature, featureIndex) => (_jsxs("div", { className: "flex items-start gap-2", children: [_jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" }), _jsx("span", { className: "text-sm", children: feature })] }, featureIndex))) }) })] }) }, tier.id));
                                                    }) }), selectedTierData && (_jsxs(Card, { className: "glass bg-blue-50/50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-700", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "text-blue-700 dark:text-blue-300", children: [selectedTierData.name, " - Detailed Benefits"] }), _jsxs(CardDescription, { children: ["What's included in your ", selectedTierData.name.toLowerCase(), " engagement"] })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: "Service Highlights:" }), _jsx("div", { className: "space-y-3", children: selectedTierData.features.slice(0, 3).map((feature, index) => (_jsxs("div", { className: "flex items-center gap-3 p-3 glass-blue-light rounded-lg", children: [_jsx(Star, { className: "w-4 h-4 text-blue-600" }), _jsx("span", { className: "text-sm font-medium", children: feature })] }, index))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: "Additional Benefits:" }), _jsx("div", { className: "space-y-3", children: selectedTierData.features.slice(3).map((feature, index) => (_jsxs("div", { className: "flex items-center gap-3 p-3 glass-blue-light rounded-lg", children: [_jsx(Zap, { className: "w-4 h-4 text-blue-600" }), _jsx("span", { className: "text-sm font-medium", children: feature })] }, index))) })] })] }), _jsx("div", { className: "mt-6 pt-6 border-t border-blue-200 dark:border-blue-700", children: _jsxs(Button, { className: "w-full", onClick: () => navigate('demo-request'), children: [_jsx(Briefcase, { className: "w-4 h-4 mr-2" }), "Request ", selectedTierData.name, " Consultation"] }) })] })] }))] })] }) }), _jsxs(TabsContent, { value: "implementation", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Rocket, { className: "w-6 h-6 text-blue-600" }), "Enterprise Implementation Process"] }), _jsx(CardDescription, { children: "Our proven methodology for large-scale AI transformations" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-8", children: implementationPhases.map((phase, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "relative", children: [index < implementationPhases.length - 1 && (_jsx("div", { className: "absolute left-6 top-16 w-0.5 h-24 bg-blue-200 dark:bg-blue-700" })), _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex-shrink-0", children: _jsx("div", { className: "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: index + 1 }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-xl font-semibold", children: phase.phase }), _jsx(Badge, { variant: "outline", children: phase.duration })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 mt-4", children: phase.activities.map((activity, actIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("div", { className: "w-2 h-2 bg-blue-400 rounded-full" }), _jsx("span", { children: activity })] }, actIndex))) })] })] })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Implementation Advantages" }), _jsx(CardDescription, { children: "Why our enterprise implementation approach delivers results" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Target, { className: "w-8 h-8 text-blue-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Risk Mitigation" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Phased approach minimizes risk and ensures continuous value delivery" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Users, { className: "w-8 h-8 text-green-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Change Management" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Comprehensive training and adoption programs for smooth transitions" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(BarChart3, { className: "w-8 h-8 text-purple-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Measurable Results" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Clear metrics and KPIs to track progress and demonstrate value" })] })] }) })] })] }), _jsxs(TabsContent, { value: "success", className: "space-y-6 mt-8", children: [_jsx("div", { className: "space-y-6", children: enterpriseClients.map((client, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsx(Card, { className: "glass-heavy", children: _jsx(CardContent, { className: "p-6", children: _jsx("div", { className: "flex items-start justify-between mb-4", children: _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-4 mb-3", children: [_jsx(Avatar, { className: "w-12 h-12", children: _jsx(AvatarFallback, { className: "bg-blue-600 text-white font-bold", children: client.name.split(' ').map(n => n[0]).join('') }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold", children: client.name }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Badge, { variant: "outline", children: client.industry }), _jsxs("span", { className: "text-sm text-foreground-muted", children: [client.employees, " employees"] })] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-2", children: "Implementation:" }), _jsx("p", { className: "text-foreground-muted", children: client.implementation })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 p-4 rounded-lg", children: [_jsx("h5", { className: "font-medium text-green-700 dark:text-green-300", children: "Results" }), _jsx("p", { className: "text-green-600 dark:text-green-400 font-semibold", children: client.results })] }), _jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg", children: [_jsx("h5", { className: "font-medium text-blue-700 dark:text-blue-300", children: "Duration" }), _jsx("p", { className: "text-blue-600 dark:text-blue-400 font-semibold", children: client.duration })] }), _jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg", children: [_jsx("h5", { className: "font-medium text-yellow-700 dark:text-yellow-300", children: "Satisfaction" }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }), _jsxs("span", { className: "text-yellow-600 dark:text-yellow-400 font-semibold", children: [client.satisfaction, "/5.0"] })] })] })] })] })] }) }) }) }) }, index))) }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Explore More Success Stories" }), _jsx("p", { className: "text-foreground-muted mb-6", children: "Discover how other Fortune 500 companies have transformed their operations with Delibix." }), _jsxs("div", { className: "flex gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('success-stories'), children: [_jsx(FileText, { className: "w-4 h-4 mr-2" }), "View All Case Studies"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('client-testimonials'), children: [_jsx(MessageSquare, { className: "w-4 h-4 mr-2" }), "Client Testimonials"] })] })] }) })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16", children: _jsx(Card, { className: "glass w-full bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 dark:from-blue-950/30 dark:via-background dark:to-blue-950/30", children: _jsx(CardContent, { className: "p-12", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Ready to Transform Your Enterprise?" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "Join the Fortune 500 companies already leveraging AI for competitive advantage. Let's discuss your transformation journey." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-4", children: [_jsx(Building2, { className: "w-5 h-5 mr-2" }), "Start Enterprise Journey"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('contact'), size: "lg", className: "px-8 py-4", children: [_jsx(Calendar, { className: "w-5 h-5 mr-2" }), "Schedule Executive Briefing"] })] })] }) }) }) })] })] }));
}
//# sourceMappingURL=EnterprisePortalPage.js.map