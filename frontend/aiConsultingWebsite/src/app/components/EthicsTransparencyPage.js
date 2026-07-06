"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Shield, Heart, Eye, Scale, Leaf, Users, CheckCircle, AlertTriangle, Lock, Globe, Brain, Code, Lightbulb, Target, TrendingUp, Award, FileText, MessageCircle, BookOpen, Search, Filter, Star, ArrowRight, Building2, Handshake, Zap, Database, Server, Cloud, Network, UserCheck, ShieldCheck, EyeOff, Gavel, HelpCircle, Info, Trees, Recycle, Sun, Battery, Cpu, Monitor, Phone, Mail, ExternalLink, Download, Share2, ChevronRight, Clock, Calendar, BadgeCheck, AlertCircle, ThumbsUp, Flag, Balance, Compass } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
const ethicsFrameworks = [
    {
        id: "responsible-ai",
        title: "Responsible AI Development",
        description: "Comprehensive framework ensuring AI systems are developed and deployed ethically",
        icon: Brain,
        principles: [
            "Fairness and non-discrimination",
            "Transparency and explainability",
            "Human oversight and control",
            "Privacy and data protection",
            "Robustness and reliability"
        ],
        status: "implemented",
        progress: 95
    },
    {
        id: "data-ethics",
        title: "Data Ethics & Privacy",
        description: "Strict guidelines for data collection, processing, and protection",
        icon: Shield,
        principles: [
            "Minimal data collection",
            "Purpose limitation",
            "Data subject rights",
            "Security by design",
            "Consent and transparency"
        ],
        status: "implemented",
        progress: 98
    },
    {
        id: "algorithmic-transparency",
        title: "Algorithmic Transparency",
        description: "Clear documentation and explanation of AI decision-making processes",
        icon: Eye,
        principles: [
            "Algorithm documentation",
            "Decision explanation",
            "Bias monitoring",
            "Performance metrics",
            "Regular audits"
        ],
        status: "implemented",
        progress: 92
    },
    {
        id: "social-impact",
        title: "Social Impact Assessment",
        description: "Evaluating and optimizing the societal effects of our AI solutions",
        icon: Users,
        principles: [
            "Impact assessment",
            "Stakeholder engagement",
            "Community feedback",
            "Benefit distribution",
            "Harm mitigation"
        ],
        status: "in-progress",
        progress: 78
    },
    {
        id: "environmental-responsibility",
        title: "Environmental Responsibility",
        description: "Minimizing environmental impact through sustainable AI practices",
        icon: Leaf,
        principles: [
            "Energy efficiency",
            "Carbon footprint reduction",
            "Green computing",
            "Sustainable infrastructure",
            "Circular economy"
        ],
        status: "in-progress",
        progress: 85
    },
    {
        id: "governance-accountability",
        title: "Governance & Accountability",
        description: "Clear governance structures and accountability mechanisms",
        icon: Scale,
        principles: [
            "Clear governance structure",
            "Regular ethics reviews",
            "Incident response",
            "Continuous monitoring",
            "Public reporting"
        ],
        status: "implemented",
        progress: 90
    }
];
const transparencyMetrics = [
    {
        label: "Open Source Contributions",
        value: "24",
        description: "Public repositories and tools",
        icon: Code,
        trend: "up"
    },
    {
        label: "Data Processing Transparency",
        value: "100%",
        description: "Documented data flows",
        icon: Database,
        trend: "stable"
    },
    {
        label: "Algorithm Explainability",
        value: "92%",
        description: "Explainable AI implementations",
        icon: Brain,
        trend: "improving"
    },
    {
        label: "Privacy Compliance",
        value: "99.8%",
        description: "Privacy regulation compliance",
        icon: Shield,
        trend: "stable"
    },
    {
        label: "Ethics Review Coverage",
        value: "100%",
        description: "Projects with ethics review",
        icon: CheckCircle,
        trend: "stable"
    },
    {
        label: "Community Feedback Response",
        value: "48h",
        description: "Average response time",
        icon: MessageCircle,
        trend: "improving"
    }
];
const commitments = [
    {
        category: "AI Ethics",
        title: "Bias-Free AI Systems",
        description: "Developing and maintaining AI systems free from harmful biases",
        actions: [
            "Regular bias testing and monitoring",
            "Diverse training datasets",
            "Inclusive development teams",
            "Community feedback integration"
        ],
        timeline: "Ongoing",
        status: "active",
        impact: "Ensures fair and equitable AI outcomes for all users"
    },
    {
        category: "Data Protection",
        title: "Zero Data Breach Policy",
        description: "Maintaining the highest standards of data security and privacy",
        actions: [
            "End-to-end encryption",
            "Regular security audits",
            "Employee security training",
            "Incident response protocols"
        ],
        timeline: "Ongoing",
        status: "active",
        impact: "Protects user data and maintains trust"
    },
    {
        category: "Environmental",
        title: "Carbon Neutral Operations",
        description: "Achieving carbon neutrality in all business operations by 2025",
        actions: [
            "Renewable energy adoption",
            "Efficient algorithm optimization",
            "Carbon offset programs",
            "Sustainable infrastructure"
        ],
        timeline: "By 2025",
        status: "ongoing",
        impact: "Reduces environmental footprint of AI operations"
    },
    {
        category: "Transparency",
        title: "Open Algorithm Initiative",
        description: "Making core AI algorithms transparent and auditable",
        actions: [
            "Algorithm documentation",
            "Public code repositories",
            "Research paper publication",
            "Community review process"
        ],
        timeline: "Q2 2024",
        status: "ongoing",
        impact: "Enables public scrutiny and builds trust"
    },
    {
        category: "Social Impact",
        title: "AI for Good Program",
        description: "Dedicating resources to solve social and environmental challenges",
        actions: [
            "Pro-bono AI solutions",
            "NGO partnerships",
            "Educational initiatives",
            "Community development"
        ],
        timeline: "Ongoing",
        status: "active",
        impact: "Leverages AI for positive social change"
    },
    {
        category: "Governance",
        title: "Independent Ethics Board",
        description: "Establishing external oversight for ethical AI development",
        actions: [
            "Ethics board formation",
            "External expert recruitment",
            "Regular review processes",
            "Public reporting"
        ],
        timeline: "Q3 2024",
        status: "ongoing",
        impact: "Provides independent oversight and accountability"
    }
];
const certifications = [
    { name: "ISO 27001", description: "Information Security Management", status: "Certified" },
    { name: "GDPR Compliant", description: "European Data Protection", status: "Certified" },
    { name: "SOC 2 Type II", description: "Security & Availability", status: "In Progress" },
    { name: "IEEE 2857", description: "Privacy Engineering", status: "In Progress" },
    { name: "AI Ethics Certification", description: "Responsible AI Development", status: "Planned" }
];
const sustainabilityStats = [
    { metric: "Energy Efficiency", value: "85%", improvement: "+12% this year" },
    { metric: "Carbon Footprint", value: "-40%", improvement: "vs 2022 baseline" },
    { metric: "Renewable Energy", value: "78%", improvement: "of total consumption" },
    { metric: "E-waste Reduction", value: "-60%", improvement: "through optimization" }
];
export function EthicsTransparencyPage({ navigate }) {
    const [selectedFramework, setSelectedFramework] = useState(null);
    const [activeTab, setActiveTab] = useState("frameworks");
    const getStatusColor = (status) => {
        switch (status) {
            case 'implemented':
            case 'active':
            case 'completed':
            case 'Certified':
                return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
            case 'in-progress':
            case 'ongoing':
            case 'In Progress':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
            case 'planned':
            case 'Planned':
                return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
        }
    };
    const getTrendIcon = (trend) => {
        switch (trend) {
            case 'up':
                return _jsx(TrendingUp, { className: "w-4 h-4 text-green-600 dark:text-green-400" });
            case 'improving':
                return _jsx(ArrowRight, { className: "w-4 h-4 text-blue-600 dark:text-blue-400" });
            default:
                return _jsx(CheckCircle, { className: "w-4 h-4 text-blue-600 dark:text-blue-400" });
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [Shield, Scale, Heart, Eye, Leaf, Users];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Shield, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Ethics & Transparency" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Ethics & ", _jsx("span", { className: "gradient-text-blue", children: "Transparency" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Our commitment to responsible AI development, ethical practices, and complete transparency in everything we do. Building trust through openness and accountability." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: transparencyMetrics.slice(0, 4).map((metric, index) => (_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsxs("div", { className: "flex items-center justify-center mb-2", children: [_jsx(metric.icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" }), getTrendIcon(metric.trend)] }), _jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text-blue mb-1", children: metric.value }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: metric.label }), _jsx("div", { className: "text-xs text-foreground-muted", children: metric.description })] }, index))) }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => document.getElementById('frameworks')?.scrollIntoView({ behavior: 'smooth' }), children: _jsxs("span", { className: "flex items-center gap-3", children: ["Explore Our Ethics", _jsx(ArrowRight, { className: "w-5 h-5" })] }) }), _jsxs(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-400/10", onClick: () => window.open('/ethics-report.pdf', '_blank'), children: [_jsx(Download, { className: "w-5 h-5 mr-2" }), "Ethics Report"] })] })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, children: _jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-2 md:grid-cols-5 mb-12", children: [_jsxs(TabsTrigger, { value: "frameworks", className: "flex items-center gap-2", children: [_jsx(Shield, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Ethics" })] }), _jsxs(TabsTrigger, { value: "transparency", className: "flex items-center gap-2", children: [_jsx(Eye, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Transparency" })] }), _jsxs(TabsTrigger, { value: "commitments", className: "flex items-center gap-2", children: [_jsx(Target, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Commitments" })] }), _jsxs(TabsTrigger, { value: "sustainability", className: "flex items-center gap-2", children: [_jsx(Leaf, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Sustainability" })] }), _jsxs(TabsTrigger, { value: "governance", className: "flex items-center gap-2", children: [_jsx(Scale, { className: "w-4 h-4" }), _jsx("span", { className: "hidden sm:inline", children: "Governance" })] })] }), _jsx(TabsContent, { value: "frameworks", id: "frameworks", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Ethics Frameworks" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Comprehensive frameworks guiding our ethical AI development and deployment practices." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: ethicsFrameworks.map((framework, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsx(Card, { className: "glass p-6 hover:shadow-lg transition-all duration-300 h-full cursor-pointer", onClick: () => setSelectedFramework(selectedFramework === framework.id ? null : framework.id), children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-start justify-between", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center", children: _jsx(framework.icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsx(Badge, { className: getStatusColor(framework.status), children: framework.status.replace('-', ' ') })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-2", children: framework.title }), _jsx("p", { className: "text-foreground-muted text-sm mb-4", children: framework.description })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { children: "Implementation Progress" }), _jsxs("span", { className: "font-medium", children: [framework.progress, "%"] })] }), _jsx(Progress, { value: framework.progress, className: "h-2" })] }), selectedFramework === framework.id && (_jsxs(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, className: "border-t pt-4 mt-4", children: [_jsx("h4", { className: "font-semibold mb-2", children: "Key Principles:" }), _jsx("ul", { className: "space-y-1", children: framework.principles.map((principle, idx) => (_jsxs("li", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle, { className: "w-3 h-3 text-green-600 dark:text-green-400 flex-shrink-0" }), principle] }, idx))) })] })), _jsx("div", { className: "flex justify-end", children: _jsx(ChevronRight, { className: `w-5 h-5 text-foreground-muted transition-transform duration-200 ${selectedFramework === framework.id ? 'rotate-90' : ''}` }) })] }) }) }, framework.id))) })] }) }), _jsx(TabsContent, { value: "transparency", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Transparency Metrics" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Real-time metrics demonstrating our commitment to openness and accountability." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: transparencyMetrics.map((metric, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsxs(Card, { className: "glass p-6 hover:shadow-lg transition-all duration-300 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(metric.icon, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }) }), _jsx("div", { className: "text-3xl font-bold gradient-text-blue mb-2", children: metric.value }), _jsx("h3", { className: "mb-2", children: metric.label }), _jsx("p", { className: "text-foreground-muted text-sm mb-4", children: metric.description }), _jsxs("div", { className: "flex items-center justify-center gap-2", children: [getTrendIcon(metric.trend), _jsx("span", { className: "text-sm text-foreground-muted capitalize", children: metric.trend === 'up' ? 'Increasing' :
                                                                            metric.trend === 'improving' ? 'Improving' : 'Stable' })] })] }) }, index))) }), _jsxs("div", { className: "mt-16", children: [_jsx("h3", { className: "text-center mb-8", children: "Certifications & Compliance" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4", children: certifications.map((cert, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 + index * 0.1 }, children: _jsxs(Card, { className: "glass p-4 text-center hover:shadow-lg transition-all duration-300", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3", children: _jsx(BadgeCheck, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsx("h4", { className: "font-semibold mb-1", children: cert.name }), _jsx("p", { className: "text-xs text-foreground-muted mb-2", children: cert.description }), _jsx(Badge, { className: getStatusColor(cert.status), size: "sm", children: cert.status })] }) }, index))) })] })] }) }), _jsx(TabsContent, { value: "commitments", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Our Commitments" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Specific commitments with measurable actions and timelines for ethical AI development." })] }), _jsx("div", { className: "space-y-6", children: commitments.map((commitment, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsx(Card, { className: "glass p-6 hover:shadow-lg transition-all duration-300", children: _jsx("div", { className: "flex flex-col lg:flex-row gap-6", children: _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: commitment.category }), _jsx(Badge, { className: getStatusColor(commitment.status), children: commitment.status })] }), _jsx("h3", { className: "mb-3", children: commitment.title }), _jsx("p", { className: "text-foreground-muted mb-4", children: commitment.description }), _jsxs("div", { className: "grid md:grid-cols-2 gap-4 mb-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-sm font-semibold mb-2", children: "Key Actions:" }), _jsx("ul", { className: "space-y-1", children: commitment.actions.map((action, idx) => (_jsxs("li", { className: "flex items-start gap-2 text-sm", children: [_jsx(CheckCircle, { className: "w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" }), action] }, idx))) })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 text-sm text-foreground-muted mb-1", children: [_jsx(Clock, { className: "w-4 h-4" }), "Timeline"] }), _jsx("p", { className: "font-medium", children: commitment.timeline })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 text-sm text-foreground-muted mb-1", children: [_jsx(Target, { className: "w-4 h-4" }), "Expected Impact"] }), _jsx("p", { className: "text-sm", children: commitment.impact })] })] })] })] }) }) }) }, index))) })] }) }), _jsx(TabsContent, { value: "sustainability", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Environmental Responsibility" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Our commitment to sustainable AI development and carbon-neutral operations." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: sustainabilityStats.map((stat, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsxs(Card, { className: "glass p-6 text-center hover:shadow-lg transition-all duration-300", children: [_jsx("div", { className: "w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4", children: _jsx(Leaf, { className: "w-6 h-6 text-green-600 dark:text-green-400" }) }), _jsx("div", { className: "text-2xl font-bold gradient-text-blue mb-2", children: stat.value }), _jsx("h4", { className: "mb-2", children: stat.metric }), _jsx("p", { className: "text-sm text-foreground-muted", children: stat.improvement })] }) }, index))) }), _jsxs(Card, { className: "glass p-8", children: [_jsxs("h3", { className: "mb-6 flex items-center gap-2", children: [_jsx(Trees, { className: "w-5 h-5 text-green-600 dark:text-green-400" }), "Sustainability Initiatives"] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-start gap-3", children: [_jsx(Sun, { className: "w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-1", children: "Renewable Energy" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "78% of our operations powered by renewable energy sources" })] })] }), _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(Cpu, { className: "w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-1", children: "Efficient Computing" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Algorithm optimization reducing computational energy by 40%" })] })] }), _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(Recycle, { className: "w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-1", children: "Circular Economy" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Hardware lifecycle extension and responsible e-waste management" })] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-start gap-3", children: [_jsx(Cloud, { className: "w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-1", children: "Green Cloud" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Carbon-neutral cloud infrastructure and data centers" })] })] }), _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(Battery, { className: "w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-1", children: "Energy Storage" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Advanced battery systems for energy efficiency optimization" })] })] }), _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(Monitor, { className: "w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-1", children: "Carbon Monitoring" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Real-time carbon footprint tracking and reporting" })] })] })] })] })] })] }) }), _jsx(TabsContent, { value: "governance", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Governance & Accountability" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Robust governance structures ensuring accountability and ethical oversight." })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [_jsxs(Card, { className: "glass p-8", children: [_jsxs("h3", { className: "mb-6 flex items-center gap-2", children: [_jsx(Scale, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), "Ethics Committee"] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(UserCheck, { className: "w-5 h-5 text-green-600 dark:text-green-400" }), _jsx("span", { children: "Independent external experts" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Calendar, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { children: "Monthly review meetings" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(FileText, { className: "w-5 h-5 text-purple-600 dark:text-purple-400" }), _jsx("span", { children: "Public transparency reports" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Flag, { className: "w-5 h-5 text-red-600 dark:text-red-400" }), _jsx("span", { children: "Issue escalation protocols" })] })] })] }), _jsxs(Card, { className: "glass p-8", children: [_jsxs("h3", { className: "mb-6 flex items-center gap-2", children: [_jsx(Search, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), "Audit Processes"] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(ShieldCheck, { className: "w-5 h-5 text-green-600 dark:text-green-400" }), _jsx("span", { children: "Quarterly security audits" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Brain, { className: "w-5 h-5 text-purple-600 dark:text-purple-400" }), _jsx("span", { children: "AI bias testing protocols" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Database, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { children: "Data governance reviews" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Compass, { className: "w-5 h-5 text-orange-600 dark:text-orange-400" }), _jsx("span", { children: "Compliance assessments" })] })] })] })] }), _jsxs(Card, { className: "glass p-8", children: [_jsxs("h3", { className: "mb-6 flex items-center gap-2", children: [_jsx(AlertTriangle, { className: "w-5 h-5 text-amber-600 dark:text-amber-400" }), "Incident Response & Transparency"] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-3", children: "Response Timeline" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-sm", children: "Initial Response" }), _jsx("span", { className: "text-sm font-medium", children: "< 1 hour" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-sm", children: "Investigation" }), _jsx("span", { className: "text-sm font-medium", children: "< 24 hours" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-sm", children: "Public Update" }), _jsx("span", { className: "text-sm font-medium", children: "< 48 hours" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-sm", children: "Resolution Report" }), _jsx("span", { className: "text-sm font-medium", children: "< 7 days" })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-3", children: "Transparency Measures" }), _jsxs("ul", { className: "space-y-2", children: [_jsxs("li", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle, { className: "w-3 h-3 text-green-600 dark:text-green-400" }), "Public incident disclosure"] }), _jsxs("li", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle, { className: "w-3 h-3 text-green-600 dark:text-green-400" }), "Root cause analysis sharing"] }), _jsxs("li", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle, { className: "w-3 h-3 text-green-600 dark:text-green-400" }), "Preventive measure updates"] }), _jsxs("li", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle, { className: "w-3 h-3 text-green-600 dark:text-green-400" }), "Community feedback integration"] })] })] })] })] })] }) })] }) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "max-w-4xl mx-auto mt-20", children: _jsxs(Card, { className: "glass p-8 text-center", children: [_jsx("h3", { className: "mb-6", children: "Questions or Concerns?" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "We welcome feedback and questions about our ethics and transparency practices. Your input helps us improve." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => window.open('mailto:ethics@delibix.com', '_blank'), className: "gradient-bg-blue text-white px-8 py-3", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Contact Ethics Team"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('submit-idea'), children: [_jsx(MessageCircle, { className: "w-4 h-4 mr-2" }), "Submit Feedback"] }), _jsxs(Button, { variant: "outline", onClick: () => window.open('/ethics-report.pdf', '_blank'), children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Download Report"] })] })] }) })] })] }));
}
//# sourceMappingURL=EthicsTransparencyPage.js.map