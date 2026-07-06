"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Database, Shield, Lock, Eye, CheckCircle2, AlertTriangle, Users, FileText, Settings, BarChart3, TrendingUp, Globe, Clock, Target, Zap, Brain, Network, Code, Search, Filter, Download, Upload, Key, Bookmark, ArrowRight, ChevronRight, Star, Award, Briefcase, MessageSquare, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
export function DataGovernancePage({ navigate }) {
    const [selectedFramework, setSelectedFramework] = useState("gdpr");
    const governanceFrameworks = [
        {
            id: "gdpr",
            name: "GDPR Compliance",
            description: "European General Data Protection Regulation framework",
            region: "Europe",
            complexity: "High",
            requirements: [
                "Data subject rights implementation",
                "Privacy by design principles",
                "Data breach notification procedures",
                "Data protection impact assessments",
                "Consent management systems",
                "Right to erasure implementation"
            ],
            timeline: "6-12 months",
            penalty: "Up to 4% of annual revenue",
            coverage: "28 EU countries"
        },
        {
            id: "ccpa",
            name: "CCPA Compliance",
            description: "California Consumer Privacy Act requirements",
            region: "California, USA",
            complexity: "Medium",
            requirements: [
                "Consumer rights disclosure",
                "Opt-out mechanisms",
                "Data category transparency",
                "Third-party data sharing disclosure",
                "Non-discrimination policies",
                "Privacy policy requirements"
            ],
            timeline: "3-6 months",
            penalty: "$2,500-$7,500 per violation",
            coverage: "California residents"
        },
        {
            id: "pdpa",
            name: "PDPA Singapore",
            description: "Personal Data Protection Act Singapore",
            region: "Singapore",
            complexity: "Medium",
            requirements: [
                "Consent requirements",
                "Data breach notification",
                "Data protection officers",
                "Data retention policies",
                "Cross-border data transfers",
                "Individual access rights"
            ],
            timeline: "4-8 months",
            penalty: "Up to S$1 million",
            coverage: "Singapore jurisdiction"
        },
        {
            id: "pipeda",
            name: "PIPEDA Canada",
            description: "Personal Information Protection and Electronic Documents Act",
            region: "Canada",
            complexity: "Medium",
            requirements: [
                "Fair information principles",
                "Privacy policies",
                "Breach reporting requirements",
                "Individual access rights",
                "Safeguarding measures",
                "Accountability measures"
            ],
            timeline: "3-6 months",
            penalty: "Up to CAD $100,000",
            coverage: "Canadian federal jurisdiction"
        }
    ];
    const dataGovernanceComponents = [
        {
            category: "Data Classification",
            icon: Database,
            description: "Systematic categorization and labeling of data assets",
            components: [
                "Automated data discovery",
                "Sensitivity classification",
                "Business value assessment",
                "Regulatory mapping",
                "Lifecycle management",
                "Metadata cataloging"
            ],
            maturityLevels: {
                basic: "Manual classification processes",
                intermediate: "Semi-automated classification with rules",
                advanced: "AI-powered dynamic classification",
                optimal: "Real-time intelligent classification"
            }
        },
        {
            category: "Privacy Management",
            icon: Eye,
            description: "End-to-end privacy protection and compliance monitoring",
            components: [
                "Privacy impact assessments",
                "Consent management",
                "Data subject rights automation",
                "Privacy by design integration",
                "Cross-border transfer controls",
                "Incident response automation"
            ],
            maturityLevels: {
                basic: "Manual privacy processes",
                intermediate: "Standardized privacy workflows",
                advanced: "Automated privacy controls",
                optimal: "Intelligent privacy orchestration"
            }
        },
        {
            category: "Security Controls",
            icon: Shield,
            description: "Comprehensive data security and access management",
            components: [
                "Multi-factor authentication",
                "Role-based access control",
                "Data encryption at rest/transit",
                "Network security monitoring",
                "Vulnerability assessments",
                "Zero-trust architecture"
            ],
            maturityLevels: {
                basic: "Basic security measures",
                intermediate: "Layered security controls",
                advanced: "Adaptive security policies",
                optimal: "AI-driven threat protection"
            }
        },
        {
            category: "Compliance Monitoring",
            icon: BarChart3,
            description: "Continuous compliance tracking and reporting",
            components: [
                "Real-time compliance dashboards",
                "Automated audit trails",
                "Regulatory change tracking",
                "Risk assessment automation",
                "Compliance scoring",
                "Executive reporting"
            ],
            maturityLevels: {
                basic: "Manual compliance checks",
                intermediate: "Scheduled compliance reports",
                advanced: "Real-time compliance monitoring",
                optimal: "Predictive compliance analytics"
            }
        }
    ];
    const implementationPhases = [
        {
            phase: "Assessment & Planning",
            duration: "4-6 weeks",
            activities: [
                "Current state data audit",
                "Regulatory requirements analysis",
                "Gap assessment",
                "Stakeholder alignment",
                "Implementation roadmap",
                "Resource allocation"
            ],
            deliverables: [
                "Data governance assessment report",
                "Compliance gap analysis",
                "Implementation roadmap",
                "Risk mitigation plan"
            ]
        },
        {
            phase: "Framework Design",
            duration: "6-8 weeks",
            activities: [
                "Governance framework design",
                "Policy development",
                "Procedure documentation",
                "Role and responsibility definition",
                "Technology architecture",
                "Training curriculum design"
            ],
            deliverables: [
                "Data governance framework",
                "Policy and procedure documents",
                "Technical architecture blueprint",
                "Training materials"
            ]
        },
        {
            phase: "Technology Implementation",
            duration: "8-12 weeks",
            activities: [
                "Data discovery and classification",
                "Privacy management system setup",
                "Security controls implementation",
                "Monitoring and reporting tools",
                "Integration with existing systems",
                "Testing and validation"
            ],
            deliverables: [
                "Implemented technology stack",
                "Integrated governance platform",
                "Testing and validation reports",
                "System documentation"
            ]
        },
        {
            phase: "Rollout & Optimization",
            duration: "4-6 weeks",
            activities: [
                "Phased deployment",
                "User training and adoption",
                "Process refinement",
                "Performance monitoring",
                "Continuous improvement",
                "Compliance validation"
            ],
            deliverables: [
                "Deployed governance platform",
                "Trained user base",
                "Operational procedures",
                "Compliance certification"
            ]
        }
    ];
    const complianceMetrics = [
        { label: "Data Discovery Coverage", value: 95, target: 100, status: "good" },
        { label: "Policy Compliance Rate", value: 87, target: 95, status: "warning" },
        { label: "Incident Response Time", value: 92, target: 90, status: "excellent" },
        { label: "User Training Completion", value: 78, target: 85, status: "warning" },
        { label: "Audit Readiness Score", value: 88, target: 90, status: "good" },
        { label: "Data Quality Index", value: 91, target: 95, status: "good" }
    ];
    const governanceTools = [
        {
            name: "Data Discovery Engine",
            description: "AI-powered data discovery across all systems",
            features: ["Automated scanning", "Pattern recognition", "Sensitivity detection", "Metadata extraction"],
            category: "Discovery"
        },
        {
            name: "Privacy Compliance Hub",
            description: "Centralized privacy management and compliance",
            features: ["Consent management", "Rights automation", "Impact assessments", "Breach response"],
            category: "Privacy"
        },
        {
            name: "Security Control Center",
            description: "Comprehensive security monitoring and control",
            features: ["Access monitoring", "Threat detection", "Encryption management", "Audit logging"],
            category: "Security"
        },
        {
            name: "Compliance Dashboard",
            description: "Real-time compliance monitoring and reporting",
            features: ["Live monitoring", "Risk scoring", "Executive reports", "Regulatory alerts"],
            category: "Monitoring"
        }
    ];
    const selectedFrameworkData = governanceFrameworks.find(fw => fw.id === selectedFramework);
    const getStatusColor = (status) => {
        switch (status) {
            case "excellent": return "text-green-600 bg-green-100 dark:bg-green-900/30";
            case "good": return "text-blue-600 bg-blue-100 dark:bg-blue-900/30";
            case "warning": return "text-orange-600 bg-orange-100 dark:bg-orange-900/30";
            case "critical": return "text-red-600 bg-red-100 dark:bg-red-900/30";
            default: return "text-gray-600 bg-gray-100 dark:bg-gray-800";
        }
    };
    const getComplexityColor = (complexity) => {
        switch (complexity) {
            case "High": return "text-red-600 bg-red-100 dark:bg-red-900/30";
            case "Medium": return "text-orange-600 bg-orange-100 dark:bg-orange-900/30";
            case "Low": return "text-green-600 bg-green-100 dark:bg-green-900/30";
            default: return "text-gray-600 bg-gray-100 dark:bg-gray-800";
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/60 dark:from-blue-950/40 dark:via-background dark:to-blue-900/30" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-green-300/40 dark:bg-green-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-blue-400/35 dark:bg-blue-400/25 rounded-full blur-md float-delayed-2" })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(Database, { className: "w-12 h-12 text-blue-600 dark:text-blue-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "Data" }), ' ', _jsx("span", { className: "gradient-text-blue-light", children: "Governance" }), ' ', _jsx("span", { className: "text-green-600", children: "Framework" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Comprehensive data governance and compliance management. Ensure regulatory compliance, data security, and privacy protection across your enterprise." }), _jsxs("div", { className: "flex justify-center flex-wrap gap-4 mb-8", children: [_jsxs(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2", children: [_jsx(Shield, { className: "w-4 h-4 mr-2" }), "GDPR Ready"] }), _jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-4 py-2", children: [_jsx(CheckCircle2, { className: "w-4 h-4 mr-2" }), "SOX Compliant"] }), _jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2", children: [_jsx(Award, { className: "w-4 h-4 mr-2" }), "ISO 27001"] })] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Database, { className: "w-5 h-5 mr-2" }), "Request Assessment"] }), _jsxs(Button, { onClick: () => navigate('compliance-checker'), variant: "outline", size: "lg", className: "glass-blue-light border-blue-200 dark:border-blue-700 hover:glass-blue transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(CheckCircle2, { className: "w-5 h-5 mr-2" }), "Compliance Check"] })] })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "frameworks", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 glass", children: [_jsx(TabsTrigger, { value: "frameworks", children: "Compliance Frameworks" }), _jsx(TabsTrigger, { value: "components", children: "Governance Components" }), _jsx(TabsTrigger, { value: "implementation", children: "Implementation" }), _jsx(TabsTrigger, { value: "monitoring", children: "Monitoring & Tools" })] }), _jsx(TabsContent, { value: "frameworks", className: "space-y-8 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "w-6 h-6 text-blue-600" }), "Global Compliance Frameworks"] }), _jsx(CardDescription, { children: "Navigate complex regulatory requirements with our comprehensive compliance frameworks" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: governanceFrameworks.map((framework, index) => {
                                                        const isSelected = framework.id === selectedFramework;
                                                        return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: `cursor-pointer ${isSelected ? 'ring-2 ring-blue-500' : ''}`, onClick: () => setSelectedFramework(framework.id), children: _jsx(Card, { className: `glass h-full card-hover ${isSelected ? 'bg-blue-50/50 dark:bg-blue-950/30' : ''}`, children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "text-center mb-4", children: [_jsx("h3", { className: "font-semibold text-lg mb-2", children: framework.name }), _jsx("p", { className: "text-sm text-foreground-muted mb-3", children: framework.description }), _jsxs("div", { className: "space-y-2", children: [_jsx(Badge, { variant: "outline", children: framework.region }), _jsx(Badge, { className: getComplexityColor(framework.complexity), children: framework.complexity })] })] }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Timeline:" }), _jsx("span", { className: "font-medium", children: framework.timeline })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Coverage:" }), _jsx("span", { className: "font-medium", children: framework.coverage })] })] })] }) }) }, framework.id));
                                                    }) }), selectedFrameworkData && (_jsxs(Card, { className: "glass bg-blue-50/50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-700", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "text-blue-700 dark:text-blue-300", children: [selectedFrameworkData.name, " - Implementation Requirements"] }), _jsx(CardDescription, { children: "Detailed requirements and compliance obligations" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: "Key Requirements:" }), _jsx("div", { className: "space-y-3", children: selectedFrameworkData.requirements.map((req, index) => (_jsxs("div", { className: "flex items-center gap-3 p-3 glass-blue-light rounded-lg", children: [_jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }), _jsx("span", { className: "text-sm", children: req })] }, index))) })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "glass-blue-light p-4 rounded-lg", children: [_jsx("h4", { className: "font-semibold mb-2", children: "Compliance Details" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Implementation Timeline:" }), _jsx("span", { className: "font-medium", children: selectedFrameworkData.timeline })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Maximum Penalty:" }), _jsx("span", { className: "font-medium text-red-600", children: selectedFrameworkData.penalty })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Coverage Area:" }), _jsx("span", { className: "font-medium", children: selectedFrameworkData.coverage })] })] })] }), _jsxs(Button, { className: "w-full", onClick: () => navigate('compliance-checker'), children: [_jsx(Target, { className: "w-4 h-4 mr-2" }), "Start Compliance Assessment"] })] })] }) })] }))] })] }) }), _jsx(TabsContent, { value: "components", className: "space-y-6 mt-8", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: dataGovernanceComponents.map((component, index) => {
                                        const Icon = component.icon;
                                        return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsxs(Card, { className: "glass-heavy h-full", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl", children: _jsx(Icon, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }) }), _jsxs("div", { children: [_jsx(CardTitle, { className: "text-xl", children: component.category }), _jsx(CardDescription, { children: component.description })] })] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-3", children: "Key Components:" }), _jsx("div", { className: "grid grid-cols-1 gap-2", children: component.components.map((item, itemIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("div", { className: "w-2 h-2 bg-blue-400 rounded-full" }), _jsx("span", { children: item })] }, itemIndex))) })] }), _jsx(Separator, {}), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-3", children: "Maturity Levels:" }), _jsx("div", { className: "space-y-2 text-sm", children: Object.entries(component.maturityLevels).map(([level, description], levelIndex) => (_jsxs("div", { className: "flex items-start gap-2", children: [_jsx(Badge, { variant: "outline", className: "text-xs capitalize min-w-fit", children: level }), _jsx("span", { className: "text-foreground-muted", children: description })] }, levelIndex))) })] })] }) })] }) }, index));
                                    }) }) }), _jsxs(TabsContent, { value: "implementation", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-6 h-6 text-blue-600" }), "Implementation Roadmap"] }), _jsx(CardDescription, { children: "Structured approach to data governance implementation" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-8", children: implementationPhases.map((phase, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "relative", children: [index < implementationPhases.length - 1 && (_jsx("div", { className: "absolute left-6 top-16 w-0.5 h-32 bg-blue-200 dark:bg-blue-700" })), _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex-shrink-0", children: _jsx("div", { className: "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: index + 1 }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-xl font-semibold", children: phase.phase }), _jsx(Badge, { variant: "outline", children: phase.duration })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Key Activities:" }), _jsx("div", { className: "space-y-2", children: phase.activities.map((activity, actIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(ArrowRight, { className: "w-3 h-3 text-blue-600" }), _jsx("span", { children: activity })] }, actIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Deliverables:" }), _jsx("div", { className: "space-y-2", children: phase.deliverables.map((deliverable, delIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle2, { className: "w-3 h-3 text-green-600" }), _jsx("span", { children: deliverable })] }, delIndex))) })] })] })] })] })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Implementation Benefits" }), _jsx(CardDescription, { children: "Expected outcomes and business value" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(TrendingUp, { className: "w-8 h-8 text-green-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Risk Reduction" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Up to 80% reduction in compliance risk and data breach incidents" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Clock, { className: "w-8 h-8 text-blue-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Efficiency Gains" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "60% faster compliance reporting and 50% reduction in manual processes" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Award, { className: "w-8 h-8 text-purple-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Trust & Reputation" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Enhanced customer trust and competitive advantage through compliance" })] })] }) })] })] }), _jsxs(TabsContent, { value: "monitoring", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(BarChart3, { className: "w-6 h-6 text-blue-600" }), "Compliance Metrics Dashboard"] }), _jsx(CardDescription, { children: "Real-time monitoring of data governance and compliance metrics" })] }), _jsx(CardContent, { children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: complianceMetrics.map((metric, index) => (_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "font-medium", children: metric.label }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: "font-bold text-blue-600", children: [metric.value, "%"] }), _jsx(Badge, { className: getStatusColor(metric.status), variant: "secondary", children: metric.status })] })] }), _jsx(Progress, { value: metric.value, className: "h-2" }), _jsxs("div", { className: "text-xs text-foreground-muted", children: ["Target: ", metric.target, "% | Current: ", metric.value, "%"] })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Data Governance Tools" }), _jsx(CardDescription, { children: "Comprehensive toolset for data governance and compliance" })] }), _jsx(CardContent, { children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: governanceTools.map((tool, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: "glass-blue-light p-6 rounded-lg", children: [_jsx("div", { className: "flex items-start justify-between mb-3", children: _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg", children: tool.name }), _jsx(Badge, { variant: "outline", className: "mt-1", children: tool.category })] }) }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: tool.description }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium text-sm", children: "Key Features:" }), _jsx("div", { className: "grid grid-cols-2 gap-1", children: tool.features.map((feature, featureIndex) => (_jsxs("div", { className: "flex items-center gap-1 text-xs", children: [_jsx("div", { className: "w-1 h-1 bg-blue-400 rounded-full" }), _jsx("span", { children: feature })] }, featureIndex))) })] }), _jsxs(Button, { variant: "outline", size: "sm", className: "w-full mt-4", children: [_jsx(Search, { className: "w-3 h-3 mr-1" }), "Explore Tool"] })] }, index))) }) })] })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16", children: _jsx(Card, { className: "glass w-full bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 dark:from-blue-950/30 dark:via-background dark:to-blue-950/30", children: _jsx(CardContent, { className: "p-12", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Ready to Implement Data Governance?" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "Start your data governance journey with our comprehensive assessment and implementation services." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-4", children: [_jsx(Database, { className: "w-5 h-5 mr-2" }), "Start Assessment"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('contact'), size: "lg", className: "px-8 py-4", children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "Speak with Expert"] })] })] }) }) }) })] })] }));
}
//# sourceMappingURL=DataGovernancePage.js.map