"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Atom, Zap, Brain, Cpu, Database, Network, Rocket, TrendingUp, Award, Users, Clock, Target, Lightbulb, Code, Shield, FileText, ExternalLink, Download, Play, Calendar, Star, ArrowRight, CheckCircle2, AlertTriangle, Globe, BookOpen, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
export function QuantumComputingPage({ navigate }) {
    const [selectedUseCase, setSelectedUseCase] = useState("optimization");
    const quantumCapabilities = [
        {
            id: "optimization",
            title: "Quantum Optimization",
            description: "Solve complex optimization problems exponentially faster than classical computers",
            icon: Target,
            applications: [
                "Supply chain optimization",
                "Portfolio management",
                "Route planning",
                "Resource allocation"
            ],
            speedup: "100x-1000x",
            readiness: "Near-term",
            industries: ["Finance", "Logistics", "Manufacturing"]
        },
        {
            id: "machine-learning",
            title: "Quantum Machine Learning",
            description: "Enhanced AI algorithms using quantum properties for superior pattern recognition",
            icon: Brain,
            applications: [
                "Quantum neural networks",
                "Feature mapping",
                "Clustering algorithms",
                "Data classification"
            ],
            speedup: "10x-100x",
            readiness: "Mid-term",
            industries: ["Healthcare", "Finance", "Research"]
        },
        {
            id: "simulation",
            title: "Quantum Simulation",
            description: "Model complex quantum systems for drug discovery and materials science",
            icon: Atom,
            applications: [
                "Drug discovery",
                "Materials design",
                "Chemical reactions",
                "Molecular modeling"
            ],
            speedup: "1000x+",
            readiness: "Long-term",
            industries: ["Pharmaceuticals", "Chemistry", "Energy"]
        },
        {
            id: "cryptography",
            title: "Quantum Cryptography",
            description: "Ultra-secure communication and quantum-resistant security protocols",
            icon: Shield,
            applications: [
                "Quantum key distribution",
                "Post-quantum cryptography",
                "Secure communications",
                "Digital signatures"
            ],
            speedup: "Unbreakable",
            readiness: "Near-term",
            industries: ["Government", "Finance", "Defense"]
        }
    ];
    const quantumPartners = [
        {
            name: "IBM Quantum Network",
            type: "Technology Partner",
            focus: "Quantum hardware access",
            collaboration: "Research & Development",
            since: "2023"
        },
        {
            name: "Google Quantum AI",
            type: "Research Partner",
            focus: "Quantum algorithms",
            collaboration: "Joint research projects",
            since: "2023"
        },
        {
            name: "Microsoft Azure Quantum",
            type: "Cloud Partner",
            focus: "Quantum cloud services",
            collaboration: "Implementation platform",
            since: "2024"
        },
        {
            name: "University of Oxford",
            type: "Academic Partner",
            focus: "Quantum research",
            collaboration: "Student exchange & research",
            since: "2022"
        }
    ];
    const quantumProjects = [
        {
            title: "Quantum Portfolio Optimization",
            client: "Leading Investment Bank",
            status: "Completed",
            duration: "6 months",
            results: "40% improvement in portfolio performance",
            description: "Implemented quantum algorithms for real-time portfolio optimization across multiple asset classes.",
            impact: "High",
            savings: "$2.5M annually"
        },
        {
            title: "Supply Chain Quantum Optimization",
            client: "Global Logistics Company",
            status: "In Progress",
            duration: "8 months",
            results: "Expected 25% cost reduction",
            description: "Developing quantum-enhanced route optimization for global supply chain management.",
            impact: "Medium",
            savings: "$5M projected"
        },
        {
            title: "Drug Discovery Acceleration",
            client: "Pharmaceutical Research Institute",
            status: "Planning",
            duration: "12 months",
            results: "50% faster molecular modeling",
            description: "Using quantum simulation for accelerated drug discovery and molecular interaction analysis.",
            impact: "High",
            savings: "$10M+ projected"
        }
    ];
    const quantumReadiness = [
        { category: "Hardware Access", progress: 85, description: "Access to quantum computers via cloud" },
        { category: "Algorithm Development", progress: 70, description: "Quantum algorithm expertise and frameworks" },
        { category: "Hybrid Systems", progress: 90, description: "Classical-quantum integration capabilities" },
        { category: "Talent Pool", progress: 60, description: "Quantum computing specialists and researchers" },
        { category: "Industry Applications", progress: 75, description: "Real-world quantum use case implementation" }
    ];
    const selectedCapability = quantumCapabilities.find(cap => cap.id === selectedUseCase);
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/60 dark:from-blue-950/40 dark:via-background dark:to-blue-900/30" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-purple-200/30 dark:bg-purple-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-blue-300/40 dark:bg-blue-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-indigo-400/35 dark:bg-indigo-400/25 rounded-full blur-md float-delayed-2" }), _jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: _jsxs("div", { className: "w-64 h-64 border border-blue-200/30 dark:border-blue-600/30 rounded-full animate-spin", style: { animationDuration: '20s' }, children: [_jsx("div", { className: "absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2" }), _jsx("div", { className: "absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2" })] }) })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(Atom, { className: "w-12 h-12 text-blue-600 dark:text-blue-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "Quantum" }), ' ', _jsx("span", { className: "gradient-text-blue-light", children: "Computing" }), ' ', _jsx("span", { className: "text-purple-600", children: "AI" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Harness the power of quantum computing to solve complex AI problems and unlock exponential performance gains for your business." }), _jsx("div", { className: "flex justify-center mb-8", children: _jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2 text-lg", children: [_jsx(Zap, { className: "w-4 h-4 mr-2" }), "Next-Generation Technology"] }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Rocket, { className: "w-5 h-5 mr-2" }), "Request Quantum Demo"] }), _jsxs(Button, { onClick: () => navigate('contact'), variant: "outline", size: "lg", className: "glass-blue-light border-blue-200 dark:border-blue-700 hover:glass-blue transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "Quantum Consultation"] })] })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "capabilities", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 glass", children: [_jsx(TabsTrigger, { value: "capabilities", children: "Quantum Capabilities" }), _jsx(TabsTrigger, { value: "projects", children: "Case Studies" }), _jsx(TabsTrigger, { value: "readiness", children: "Quantum Readiness" }), _jsx(TabsTrigger, { value: "partnerships", children: "Strategic Partners" })] }), _jsx(TabsContent, { value: "capabilities", className: "space-y-8 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Brain, { className: "w-6 h-6 text-blue-600" }), "Quantum AI Capabilities"] }), _jsx(CardDescription, { children: "Explore how quantum computing enhances AI and machine learning capabilities" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: quantumCapabilities.map((capability, index) => {
                                                        const Icon = capability.icon;
                                                        const isSelected = capability.id === selectedUseCase;
                                                        return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: `cursor-pointer ${isSelected ? 'ring-2 ring-blue-500' : ''}`, onClick: () => setSelectedUseCase(capability.id), children: _jsx(Card, { className: `glass h-full card-hover ${isSelected ? 'bg-blue-50/50 dark:bg-blue-950/30' : ''}`, children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl", children: _jsx(Icon, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }) }) }), _jsx("h3", { className: "font-semibold text-lg mb-2", children: capability.title }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: capability.description }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Badge, { className: `${isSelected ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`, children: [capability.speedup, " faster"] }), _jsx("div", { className: "text-xs text-foreground-muted", children: capability.readiness })] })] }) }) }, capability.id));
                                                    }) }), selectedCapability && (_jsxs(Card, { className: "glass bg-purple-50/50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-700", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "text-purple-700 dark:text-purple-300", children: [selectedCapability.title, " - Deep Dive"] }), _jsx(CardDescription, { children: "Detailed applications and industry impact" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Key Applications:" }), _jsx("div", { className: "space-y-2", children: selectedCapability.applications.map((app, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }), _jsx("span", { className: "text-sm", children: app })] }, index))) })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Target Industries:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: selectedCapability.industries.map((industry, index) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: industry }, index))) }), _jsxs("div", { className: "pt-4 border-t border-purple-200 dark:border-purple-700", children: [_jsx("div", { className: "text-sm font-medium mb-1", children: "Performance Gain:" }), _jsx("div", { className: "text-2xl font-bold text-purple-600", children: selectedCapability.speedup })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Implementation Timeline:" }), _jsx(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", children: selectedCapability.readiness }), _jsx("div", { className: "pt-4", children: _jsxs(Button, { className: "w-full", onClick: () => navigate('demo-request'), children: [_jsx(Rocket, { className: "w-4 h-4 mr-2" }), "Start Quantum Project"] }) })] })] }) })] }))] })] }) }), _jsxs(TabsContent, { value: "projects", className: "space-y-6 mt-8", children: [_jsx("div", { className: "space-y-6", children: quantumProjects.map((project, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsx(Card, { className: "glass-heavy", children: _jsx(CardContent, { className: "p-6", children: _jsx("div", { className: "flex items-start justify-between mb-4", children: _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx("h3", { className: "text-xl font-semibold", children: project.title }), _jsx(Badge, { className: project.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                                                                                project.status === 'In Progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                                                                    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300', children: project.status })] }), _jsx("p", { className: "text-foreground-muted mb-4", children: project.description }), _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4", children: [_jsxs("div", { children: [_jsx("div", { className: "font-medium", children: "Client:" }), _jsx("div", { className: "text-foreground-muted", children: project.client })] }), _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: "Duration:" }), _jsx("div", { className: "text-foreground-muted", children: project.duration })] }), _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: "Impact:" }), _jsx(Badge, { variant: "outline", children: project.impact })] }), _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: "Savings:" }), _jsx("div", { className: "text-green-600 font-semibold", children: project.savings })] })] }), _jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg", children: [_jsx("div", { className: "font-medium text-blue-700 dark:text-blue-300 mb-1", children: "Key Results:" }), _jsx("div", { className: "text-blue-600 dark:text-blue-400", children: project.results })] })] }) }) }) }) }, index))) }), _jsx(Card, { className: "glass bg-gradient-to-r from-purple-50/50 via-blue-50/50 to-purple-50/50 dark:from-purple-950/30 dark:via-blue-950/30 dark:to-purple-950/30", children: _jsxs(CardContent, { className: "p-8 text-center", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Ready to Start Your Quantum Journey?" }), _jsx("p", { className: "text-foreground-muted mb-6", children: "Join leading organizations leveraging quantum computing for competitive advantage." }), _jsxs(Button, { onClick: () => navigate('contact'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300", children: [_jsx(Atom, { className: "w-5 h-5 mr-2" }), "Discuss Your Quantum Project"] })] }) })] }), _jsxs(TabsContent, { value: "readiness", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-6 h-6 text-green-600" }), "Delibix Quantum Readiness"] }), _jsx(CardDescription, { children: "Our capabilities and preparedness for quantum computing implementations" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-6", children: quantumReadiness.map((item, index) => (_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "font-medium", children: item.category }), _jsxs("span", { className: "font-bold text-blue-600", children: [item.progress, "%"] })] }), _jsx(Progress, { value: item.progress, className: "h-3" }), _jsx("p", { className: "text-sm text-foreground-muted", children: item.description })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Quantum Computing Timeline" }), _jsx(CardDescription, { children: "Expected development and implementation phases" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-6", children: [
                                                        {
                                                            phase: "Near-term (2024-2025)",
                                                            focus: "Quantum Advantage",
                                                            applications: ["Optimization problems", "Quantum cryptography", "Hybrid algorithms"],
                                                            readiness: "Production Ready"
                                                        },
                                                        {
                                                            phase: "Mid-term (2025-2027)",
                                                            focus: "Quantum Machine Learning",
                                                            applications: ["Enhanced AI models", "Pattern recognition", "Feature mapping"],
                                                            readiness: "Pilot Programs"
                                                        },
                                                        {
                                                            phase: "Long-term (2027+)",
                                                            focus: "Fault-Tolerant Quantum",
                                                            applications: ["Complex simulations", "Drug discovery", "Climate modeling"],
                                                            readiness: "Research & Development"
                                                        }
                                                    ].map((phase, index) => (_jsxs("div", { className: "relative", children: [index < 2 && (_jsx("div", { className: "absolute left-6 top-16 w-0.5 h-16 bg-blue-200 dark:bg-blue-700" })), _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex-shrink-0", children: _jsx(Clock, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-lg font-semibold", children: phase.phase }), _jsx(Badge, { variant: "outline", children: phase.readiness })] }), _jsx("h4", { className: "font-medium text-blue-600 mb-2", children: phase.focus }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-2", children: phase.applications.map((app, appIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-blue-400 rounded-full" }), _jsx("span", { children: app })] }, appIndex))) })] })] })] }, index))) }) })] })] }), _jsxs(TabsContent, { value: "partnerships", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "w-6 h-6 text-blue-600" }), "Quantum Computing Partnerships"] }), _jsx(CardDescription, { children: "Strategic alliances with leading quantum computing organizations" })] }), _jsx(CardContent, { children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: quantumPartners.map((partner, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "glass-blue-light p-6 rounded-lg", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg", children: partner.name }), _jsx(Badge, { variant: "outline", className: "mt-1", children: partner.type })] }), _jsx("div", { className: "text-right text-sm text-foreground-muted", children: _jsxs("div", { children: ["Since ", partner.since] }) })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { children: [_jsx("div", { className: "text-sm font-medium", children: "Focus Area:" }), _jsx("div", { className: "text-sm text-foreground-muted", children: partner.focus })] }), _jsxs("div", { children: [_jsx("div", { className: "text-sm font-medium", children: "Collaboration:" }), _jsx("div", { className: "text-sm text-foreground-muted", children: partner.collaboration })] })] }), _jsxs(Button, { variant: "outline", size: "sm", className: "w-full mt-4", children: [_jsx(ExternalLink, { className: "w-3 h-3 mr-1" }), "Learn More"] })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Partnership Advantages" }), _jsx(CardDescription, { children: "How our quantum partnerships benefit your projects" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center", children: _jsx(Cpu, { className: "w-8 h-8 text-blue-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Hardware Access" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Direct access to cutting-edge quantum computers and simulators" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center", children: _jsx(Code, { className: "w-8 h-8 text-purple-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Algorithm Expertise" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Advanced quantum algorithms and optimization techniques" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "p-4 bg-green-100 dark:bg-green-900/30 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center", children: _jsx(Users, { className: "w-8 h-8 text-green-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Research Network" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Collaboration with leading researchers and institutions" })] })] }) })] })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16", children: _jsx(Card, { className: "glass w-full bg-gradient-to-r from-purple-50/50 via-blue-50/50 to-purple-50/50 dark:from-purple-950/30 dark:via-blue-950/30 dark:to-purple-950/30", children: _jsx(CardContent, { className: "p-12", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Enter the Quantum Era" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "Position your organization at the forefront of quantum computing innovation. Start exploring quantum advantages today." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-4", children: [_jsx(Atom, { className: "w-5 h-5 mr-2" }), "Request Quantum Demo"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('ai-research-center'), size: "lg", className: "px-8 py-4", children: [_jsx(BookOpen, { className: "w-5 h-5 mr-2" }), "Research Papers"] })] })] }) }) }) })] })] }));
}
//# sourceMappingURL=QuantumComputingPage.js.map