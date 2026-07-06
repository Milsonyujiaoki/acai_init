"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Building2, Shield, Zap, Users, Globe, TrendingUp, BarChart3, CheckCircle, ArrowRight, Star, Award, Target, Rocket, Database, Cloud, Network, Lock, Code, Cpu, Monitor, Brain, Bot, Handshake, Eye, MessageCircle, Phone, Mail, Download, Clock, Calendar, FileText, PieChart, Activity, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
const enterpriseSolutions = [
    {
        id: "ai-automation-suite",
        title: "AI Automation Suite",
        description: "Comprehensive AI-powered automation platform for enterprise workflows",
        icon: Zap,
        features: [
            "Intelligent process automation",
            "Multi-system integration",
            "Custom workflow builder",
            "Real-time monitoring",
            "Advanced analytics"
        ],
        benefits: [
            "80% reduction in manual tasks",
            "99.9% uptime guarantee",
            "ROI within 6 months",
            "24/7 expert support"
        ],
        useCases: [
            "Document processing",
            "Customer service automation",
            "Supply chain optimization",
            "Financial reporting"
        ],
        pricing: "Custom pricing",
        popular: true
    },
    {
        id: "enterprise-ai-platform",
        title: "Enterprise AI Platform",
        description: "Scalable AI infrastructure for large-scale deployments",
        icon: Cloud,
        features: [
            "Multi-cloud deployment",
            "Auto-scaling infrastructure",
            "Enterprise security",
            "API management",
            "Model versioning"
        ],
        benefits: [
            "Unlimited scalability",
            "Enterprise-grade security",
            "Global deployment",
            "Cost optimization"
        ],
        useCases: [
            "AI model deployment",
            "Data lake management",
            "Real-time analytics",
            "Machine learning pipelines"
        ],
        pricing: "Starting at $50,000/year"
    },
    {
        id: "custom-ai-development",
        title: "Custom AI Development",
        description: "Bespoke AI solutions tailored to your specific enterprise needs",
        icon: Code,
        features: [
            "Custom model development",
            "Domain-specific training",
            "Integration services",
            "Maintenance & support",
            "Knowledge transfer"
        ],
        benefits: [
            "Perfect fit for your needs",
            "Competitive advantage",
            "Full ownership",
            "Ongoing optimization"
        ],
        useCases: [
            "Industry-specific models",
            "Proprietary algorithms",
            "Legacy system integration",
            "Specialized workflows"
        ],
        pricing: "Project-based pricing"
    }
];
const caseStudies = [
    {
        company: "PT Mega Manufacturing",
        industry: "Manufacturing",
        challenge: "Manual quality control processes causing delays and inconsistencies",
        solution: "AI-powered computer vision system for automated quality inspection",
        results: [
            "95% improvement in defect detection accuracy",
            "60% reduction in inspection time",
            "50% decrease in human error",
            "$2.3M annual cost savings"
        ],
        roi: "340%",
        timeline: "3 months implementation"
    },
    {
        company: "Bank Nusantara Digital",
        industry: "Financial Services",
        challenge: "Rising fraud cases and slow transaction processing",
        solution: "Real-time AI fraud detection and automated transaction processing",
        results: [
            "99.8% fraud detection accuracy",
            "85% faster transaction processing",
            "90% reduction in false positives",
            "$5.2M prevented fraud losses"
        ],
        roi: "520%",
        timeline: "4 months implementation"
    },
    {
        company: "HealthCare Plus Network",
        industry: "Healthcare",
        challenge: "Overwhelming patient data analysis and diagnosis support needs",
        solution: "AI-assisted diagnostic platform with predictive analytics",
        results: [
            "92% diagnostic accuracy improvement",
            "40% faster patient processing",
            "30% reduction in readmissions",
            "15,000+ patients helped monthly"
        ],
        roi: "280%",
        timeline: "6 months implementation"
    }
];
const enterpriseFeatures = [
    {
        title: "Enterprise Security",
        description: "Bank-grade security with SOC 2 compliance",
        icon: Shield,
        details: [
            "End-to-end encryption",
            "Multi-factor authentication",
            "Regular security audits",
            "Compliance certifications"
        ]
    },
    {
        title: "Scalable Architecture",
        description: "Handle millions of requests with auto-scaling",
        icon: TrendingUp,
        details: [
            "Auto-scaling infrastructure",
            "Load balancing",
            "Global CDN",
            "99.9% uptime SLA"
        ]
    },
    {
        title: "Advanced Analytics",
        description: "Real-time insights and comprehensive reporting",
        icon: BarChart3,
        details: [
            "Real-time dashboards",
            "Custom reporting",
            "Predictive analytics",
            "Data visualization"
        ]
    },
    {
        title: "24/7 Support",
        description: "Dedicated enterprise support team",
        icon: Users,
        details: [
            "Dedicated account manager",
            "Priority support queue",
            "On-site training",
            "Regular health checks"
        ]
    }
];
const implementationSteps = [
    {
        step: 1,
        title: "Discovery & Planning",
        description: "Deep dive into your business requirements and current systems",
        duration: "2-4 weeks",
        deliverables: ["Requirements analysis", "Architecture design", "Implementation roadmap"]
    },
    {
        step: 2,
        title: "Custom Development",
        description: "Build and configure AI solutions specific to your needs",
        duration: "6-12 weeks",
        deliverables: ["Custom AI models", "Integration modules", "Testing suite"]
    },
    {
        step: 3,
        title: "Integration & Testing",
        description: "Seamless integration with your existing systems",
        duration: "2-4 weeks",
        deliverables: ["System integration", "Performance testing", "Security validation"]
    },
    {
        step: 4,
        title: "Deployment & Training",
        description: "Go-live support and comprehensive team training",
        duration: "1-2 weeks",
        deliverables: ["Production deployment", "User training", "Documentation"]
    },
    {
        step: 5,
        title: "Optimization & Support",
        description: "Ongoing optimization and enterprise support",
        duration: "Ongoing",
        deliverables: ["Performance monitoring", "Regular updates", "24/7 support"]
    }
];
export function EnterpriseSolutionsPage({ navigate }) {
    const [selectedSolution, setSelectedSolution] = useState(enterpriseSolutions[0]);
    const [activeTab, setActiveTab] = useState("solutions");
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [Building2, Cloud, Network, Database, Shield, Globe];
                                    const IconComponent = icons[i % icons.length];
                                    return (_jsx(motion.div, { className: "absolute", style: {
                                            left: `${15 + (i % 4) * 20}%`,
                                            top: `${15 + Math.floor(i / 4) * 25}%`,
                                        }, animate: {
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, -5, 0],
                                            opacity: [0.3, 0.7, 0.3]
                                        }, transition: {
                                            duration: 6,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }, children: _jsx(IconComponent, { className: "w-12 h-12 text-blue-500" }) }, i));
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Building2, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Enterprise Solutions" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Enterprise ", _jsx("span", { className: "gradient-text-blue", children: "AI Solutions" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Scalable, secure, and intelligent AI solutions designed for large enterprises. Transform your organization with cutting-edge AI technology." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [
                                        { label: "Enterprise Clients", value: "100+", desc: "Global companies" },
                                        { label: "Average ROI", value: "340%", desc: "Within 12 months" },
                                        { label: "Uptime SLA", value: "99.9%", desc: "Guaranteed availability" },
                                        { label: "Implementation", value: "90 days", desc: "Average timeline" }
                                    ].map((stat, index) => (_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text-blue mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: stat.label }), _jsx("div", { className: "text-xs text-foreground-muted", children: stat.desc })] }, index))) }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: "flex items-center gap-3", children: ["Request Enterprise Demo", _jsx(ArrowRight, { className: "w-5 h-5" })] }) }), _jsxs(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-400/10", onClick: () => window.open('/enterprise-brochure.pdf', '_blank'), children: [_jsx(Download, { className: "w-5 h-5 mr-2" }), "Download Brochure"] })] })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, children: _jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-2 md:grid-cols-5 mb-12", children: [_jsxs(TabsTrigger, { value: "solutions", className: "flex items-center gap-2", children: [_jsx(Rocket, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Solutions" })] }), _jsxs(TabsTrigger, { value: "features", className: "flex items-center gap-2", children: [_jsx(Shield, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Features" })] }), _jsxs(TabsTrigger, { value: "case-studies", className: "flex items-center gap-2", children: [_jsx(Award, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Case Studies" })] }), _jsxs(TabsTrigger, { value: "implementation", className: "flex items-center gap-2", children: [_jsx(Settings, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Implementation" })] }), _jsxs(TabsTrigger, { value: "pricing", className: "flex items-center gap-2", children: [_jsx(PieChart, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Pricing" })] })] }), _jsx(TabsContent, { value: "solutions", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Enterprise AI Solutions" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Comprehensive AI solutions designed to scale with your enterprise needs." })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: enterpriseSolutions.map((solution, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsxs(Card, { className: "glass p-8 h-full hover:shadow-lg transition-all duration-300", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center", children: _jsx(solution.icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), solution.popular && (_jsx(Badge, { className: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400", children: "Popular" }))] }), _jsx("h3", { className: "mb-3", children: solution.title }), _jsx("p", { className: "text-foreground-muted mb-6", children: solution.description }), _jsxs("div", { className: "space-y-4 mb-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-2", children: "Key Features:" }), _jsx("ul", { className: "space-y-1", children: solution.features.map((feature, idx) => (_jsxs("li", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle, { className: "w-3 h-3 text-green-600 dark:text-green-400" }), feature] }, idx))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-2", children: "Benefits:" }), _jsx("ul", { className: "space-y-1", children: solution.benefits.map((benefit, idx) => (_jsxs("li", { className: "flex items-center gap-2 text-sm", children: [_jsx(Star, { className: "w-3 h-3 text-amber-500" }), benefit] }, idx))) })] })] }), _jsxs("div", { className: "mt-auto", children: [_jsxs("div", { className: "text-sm text-foreground-muted mb-4", children: [_jsx("strong", { children: "Pricing:" }), " ", solution.pricing] }), _jsx(Button, { className: "w-full gradient-bg-blue text-white", onClick: () => navigate('demo-request'), children: "Request Demo" })] })] }) }, solution.id))) })] }) }), _jsx(TabsContent, { value: "features", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Enterprise Features" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Built for enterprise scale with security, reliability, and performance at the core." })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: enterpriseFeatures.map((feature, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsxs(Card, { className: "glass p-8 h-full", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6", children: _jsx(feature.icon, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }) }), _jsx("h3", { className: "mb-3", children: feature.title }), _jsx("p", { className: "text-foreground-muted mb-6", children: feature.description }), _jsx("ul", { className: "space-y-2", children: feature.details.map((detail, idx) => (_jsxs("li", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-600 dark:text-green-400" }), detail] }, idx))) })] }) }, index))) })] }) }), _jsx(TabsContent, { value: "case-studies", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Enterprise Success Stories" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Real results from enterprises that transformed their operations with our AI solutions." })] }), _jsx("div", { className: "space-y-8", children: caseStudies.map((study, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsx(Card, { className: "glass p-8", children: _jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-2", children: study.company }), _jsx(Badge, { variant: "outline", className: "mb-4", children: study.industry }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-sm mb-1", children: "Challenge:" }), _jsx("p", { className: "text-sm text-foreground-muted", children: study.challenge })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-sm mb-1", children: "Solution:" }), _jsx("p", { className: "text-sm text-foreground-muted", children: study.solution })] })] })] }), _jsxs("div", { className: "lg:col-span-2", children: [_jsx("h4", { className: "font-semibold mb-4", children: "Results Achieved:" }), _jsx("div", { className: "grid md:grid-cols-2 gap-4 mb-6", children: study.results.map((result, idx) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-600 dark:text-green-400" }), _jsx("span", { className: "text-sm", children: result })] }, idx))) }), _jsxs("div", { className: "flex gap-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold gradient-text-blue", children: study.roi }), _jsx("div", { className: "text-sm text-foreground-muted", children: "ROI" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold gradient-text-blue", children: study.timeline }), _jsx("div", { className: "text-sm text-foreground-muted", children: "Implementation" })] })] })] })] }) }) }, index))) })] }) }), _jsx(TabsContent, { value: "implementation", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Implementation Process" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Our proven 5-step process ensures successful AI implementation at enterprise scale." })] }), _jsx("div", { className: "space-y-6", children: implementationSteps.map((step, index) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsx(Card, { className: "glass p-8", children: _jsxs("div", { className: "flex gap-6", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0", children: _jsx("span", { className: "text-blue-600 dark:text-blue-400 font-bold", children: step.step }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between mb-4", children: [_jsx("h3", { children: step.title }), _jsx(Badge, { variant: "outline", className: "self-start md:self-center mt-2 md:mt-0", children: step.duration })] }), _jsx("p", { className: "text-foreground-muted mb-4", children: step.description }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-2", children: "Key Deliverables:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: step.deliverables.map((deliverable, idx) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: deliverable }, idx))) })] })] })] }) }) }, step.step))) })] }) }), _jsx(TabsContent, { value: "pricing", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Enterprise Pricing" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Flexible pricing models designed to scale with your enterprise needs." })] }), _jsxs(Card, { className: "glass p-8 max-w-4xl mx-auto", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h3", { className: "mb-4", children: "Custom Enterprise Solutions" }), _jsx("p", { className: "text-foreground-muted", children: "Our enterprise solutions are tailored to your specific needs. Pricing varies based on:" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
                                                            { icon: Users, title: "Team Size", desc: "Number of users and administrators" },
                                                            { icon: Database, title: "Data Volume", desc: "Amount of data processed monthly" },
                                                            { icon: Cloud, title: "Infrastructure", desc: "Cloud resources and deployment scope" },
                                                            { icon: Clock, title: "Support Level", desc: "SLA requirements and support tier" }
                                                        ].map((factor, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3", children: _jsx(factor.icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsx("h4", { className: "mb-2", children: factor.title }), _jsx("p", { className: "text-sm text-foreground-muted", children: factor.desc })] }, index))) }), _jsxs("div", { className: "text-center", children: [_jsxs("p", { className: "text-lg mb-6", children: [_jsx("strong", { children: "Starting from $50,000/year" }), " for enterprise deployments"] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { className: "gradient-bg-blue text-white", onClick: () => navigate('demo-request'), children: "Get Custom Quote" }), _jsxs(Button, { variant: "outline", children: [_jsx(Phone, { className: "w-4 h-4 mr-2" }), "Schedule Call"] })] })] })] })] }) })] }) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5 }, className: "mt-20", children: _jsxs(Card, { className: "glass p-8 text-center", children: [_jsx("h2", { className: "mb-6", children: "Ready to Transform Your Enterprise?" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8 max-w-2xl mx-auto", children: "Join 100+ enterprises that have already transformed their operations with our AI solutions." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-4", onClick: () => navigate('demo-request'), children: [_jsx(Calendar, { className: "w-5 h-5 mr-2" }), "Schedule Enterprise Demo"] }), _jsxs(Button, { variant: "outline", size: "lg", onClick: () => window.open('mailto:enterprise@delibix.com', '_blank'), children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Contact Enterprise Team"] })] })] }) })] })] }));
}
//# sourceMappingURL=EnterpriseSolutionsPage.js.map