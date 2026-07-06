"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Cpu, Zap, Network, Clock, Database, Brain, Smartphone, Car, Factory, Shield, TrendingUp, BarChart3, Target, Globe, Users, Settings, Layers, Activity, Gauge, Server, Cloud, ChevronRight, CheckCircle2, ArrowRight, Star, Award, Lightbulb, Rocket, MessageSquare, Calendar, FileText, Download, Play, Monitor } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
export function EdgeComputingPage({ navigate }) {
    const [selectedUseCaseId, setSelectedUseCaseId] = useState("autonomous-vehicles");
    const edgeUseCases = [
        {
            id: "autonomous-vehicles",
            title: "Autonomous Vehicles",
            description: "Real-time AI processing for self-driving vehicles and smart transportation",
            icon: Car,
            applications: [
                "Real-time object detection",
                "Traffic pattern analysis",
                "Collision avoidance systems",
                "Route optimization",
                "Vehicle-to-vehicle communication",
                "Predictive maintenance"
            ],
            latency: "< 1ms",
            bandwidth: "90% reduction",
            reliability: "99.99%",
            processing: "Local AI inference",
            industries: ["Automotive", "Logistics", "Public Transport", "Smart Cities"]
        },
        {
            id: "smart-manufacturing",
            title: "Smart Manufacturing",
            description: "Edge AI for Industry 4.0 and real-time production optimization",
            icon: Factory,
            applications: [
                "Quality control automation",
                "Predictive maintenance",
                "Real-time monitoring",
                "Worker safety systems",
                "Production optimization",
                "Supply chain integration"
            ],
            latency: "< 5ms",
            bandwidth: "80% reduction",
            reliability: "99.9%",
            processing: "Edge inference engines",
            industries: ["Manufacturing", "Energy", "Mining", "Aerospace"]
        },
        {
            id: "smart-retail",
            title: "Smart Retail",
            description: "Edge AI for enhanced customer experiences and operational efficiency",
            icon: Smartphone,
            applications: [
                "Computer vision analytics",
                "Inventory management",
                "Customer behavior analysis",
                "Personalized recommendations",
                "Loss prevention",
                "Queue optimization"
            ],
            latency: "< 10ms",
            bandwidth: "70% reduction",
            reliability: "99.5%",
            processing: "Edge analytics",
            industries: ["Retail", "Hospitality", "Entertainment", "Sports"]
        },
        {
            id: "healthcare-edge",
            title: "Healthcare Edge",
            description: "Real-time medical AI for critical healthcare applications",
            icon: Activity,
            applications: [
                "Real-time patient monitoring",
                "Medical image analysis",
                "Emergency response systems",
                "Drug discovery acceleration",
                "Wearable health analytics",
                "Surgical assistance"
            ],
            latency: "< 2ms",
            bandwidth: "85% reduction",
            reliability: "99.99%",
            processing: "Medical edge AI",
            industries: ["Healthcare", "Pharmaceuticals", "Medical Devices", "Telemedicine"]
        }
    ];
    const edgeArchitecture = [
        {
            layer: "Edge Devices",
            description: "Smart sensors, cameras, and IoT devices with built-in AI chips",
            components: [
                "AI-enabled cameras",
                "Smart sensors",
                "Edge gateways",
                "Industrial controllers",
                "Mobile devices",
                "Autonomous systems"
            ],
            technologies: ["ARM processors", "GPU acceleration", "FPGA", "TPU", "Neural Processing Units"],
            latency: "< 1ms",
            capabilities: "Real-time inference"
        },
        {
            layer: "Edge Infrastructure",
            description: "Local computing resources for data processing and AI inference",
            components: [
                "Edge servers",
                "Mini data centers",
                "5G base stations",
                "Local storage",
                "Network switches",
                "Load balancers"
            ],
            technologies: ["Edge computing platforms", "Container orchestration", "Microservices", "Local databases"],
            latency: "< 5ms",
            capabilities: "Local processing"
        },
        {
            layer: "Edge-Cloud Hybrid",
            description: "Seamless integration between edge computing and cloud services",
            components: [
                "Hybrid orchestration",
                "Data synchronization",
                "Workload distribution",
                "Failover systems",
                "Security gateways",
                "API management"
            ],
            technologies: ["Multi-cloud platforms", "Edge-cloud APIs", "Data pipelines", "Security protocols"],
            latency: "< 50ms",
            capabilities: "Hybrid processing"
        },
        {
            layer: "Cloud Backend",
            description: "Centralized AI training, model updates, and long-term analytics",
            components: [
                "AI training platforms",
                "Model repositories",
                "Big data analytics",
                "Business intelligence",
                "Global orchestration",
                "Compliance monitoring"
            ],
            technologies: ["Cloud AI platforms", "MLOps", "Data lakes", "Global CDN"],
            latency: "50ms+",
            capabilities: "Global intelligence"
        }
    ];
    const edgebenefits = [
        {
            category: "Ultra-Low Latency",
            icon: Zap,
            description: "Process data at the source for instant response times",
            metrics: [
                { label: "Response Time", value: "< 1ms", improvement: "100x faster" },
                { label: "Real-time Processing", value: "99.9%", improvement: "Near-instant" },
                { label: "Network Hops", value: "0", improvement: "Direct processing" }
            ]
        },
        {
            category: "Bandwidth Optimization",
            icon: Network,
            description: "Reduce data transmission costs and improve efficiency",
            metrics: [
                { label: "Bandwidth Usage", value: "90% less", improvement: "Massive savings" },
                { label: "Data Transfer", value: "Local only", improvement: "Zero cloud transfer" },
                { label: "Cost Reduction", value: "80%", improvement: "Significant savings" }
            ]
        },
        {
            category: "Enhanced Security",
            icon: Shield,
            description: "Keep sensitive data local and improve privacy protection",
            metrics: [
                { label: "Data Privacy", value: "100%", improvement: "Local processing" },
                { label: "Attack Surface", value: "75% less", improvement: "Reduced exposure" },
                { label: "Compliance", value: "Enhanced", improvement: "Local data governance" }
            ]
        },
        {
            category: "Improved Reliability",
            icon: CheckCircle2,
            description: "Maintain operations even when cloud connectivity is poor",
            metrics: [
                { label: "Uptime", value: "99.99%", improvement: "Cloud-independent" },
                { label: "Offline Capability", value: "Full", improvement: "Always operational" },
                { label: "Fault Tolerance", value: "High", improvement: "Distributed resilience" }
            ]
        }
    ];
    const implementationPhases = [
        {
            phase: "Assessment & Strategy",
            duration: "2-3 weeks",
            activities: [
                "Edge computing readiness assessment",
                "Use case identification and prioritization",
                "Infrastructure analysis",
                "Network architecture design",
                "Performance requirements definition",
                "Security and compliance planning"
            ],
            deliverables: [
                "Edge strategy document",
                "Infrastructure requirements",
                "Performance benchmarks",
                "Security framework"
            ]
        },
        {
            phase: "Infrastructure Setup",
            duration: "4-6 weeks",
            activities: [
                "Edge hardware deployment",
                "Network configuration",
                "Security implementation",
                "Platform installation",
                "Connectivity establishment",
                "Performance testing"
            ],
            deliverables: [
                "Edge infrastructure",
                "Network connectivity",
                "Security controls",
                "Performance reports"
            ]
        },
        {
            phase: "AI Model Deployment",
            duration: "3-5 weeks",
            activities: [
                "Model optimization for edge",
                "Edge inference deployment",
                "Real-time testing",
                "Performance optimization",
                "Monitoring setup",
                "Validation and certification"
            ],
            deliverables: [
                "Optimized AI models",
                "Edge inference engines",
                "Monitoring systems",
                "Validation reports"
            ]
        },
        {
            phase: "Production & Scale",
            duration: "2-4 weeks",
            activities: [
                "Production deployment",
                "Performance monitoring",
                "Continuous optimization",
                "Scale-out planning",
                "Maintenance procedures",
                "Team training"
            ],
            deliverables: [
                "Production system",
                "Monitoring dashboards",
                "Scaling procedures",
                "Training materials"
            ]
        }
    ];
    const edgeMetrics = [
        { label: "Latency Reduction", value: "100x", icon: Zap },
        { label: "Bandwidth Savings", value: "90%", icon: Network },
        { label: "Uptime Guarantee", value: "99.99%", icon: Shield },
        { label: "Processing Speed", value: "Real-time", icon: Cpu },
        { label: "Cost Reduction", value: "80%", icon: TrendingUp },
        { label: "Response Time", value: "< 1ms", icon: Clock }
    ];
    const selectedUseCaseData = edgeUseCases.find(uc => uc.id === selectedUseCaseId);
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-orange-50/50 via-blue-50/30 to-orange-100/40 dark:from-orange-950/20 dark:via-blue-950/10 dark:to-orange-900/20" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(251,146,60,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-orange-200/30 dark:bg-orange-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-blue-300/40 dark:bg-blue-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-orange-400/35 dark:bg-orange-400/25 rounded-full blur-md float-delayed-2" }), _jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10", children: _jsxs("div", { className: "relative w-64 h-64", children: [[...Array(5)].map((_, i) => (_jsx("div", { className: "absolute w-6 h-6 bg-orange-400 rounded-lg animate-pulse", style: {
                                                top: `${30 + Math.sin((i * Math.PI * 2) / 5) * 30}%`,
                                                left: `${50 + Math.cos((i * Math.PI * 2) / 5) * 30}%`,
                                                animationDelay: `${i * 0.4}s`,
                                                animationDuration: '2s'
                                            } }, i))), _jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500 rounded-lg animate-ping" })] }) })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(Cpu, { className: "w-12 h-12 text-orange-600 dark:text-orange-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "Edge" }), ' ', _jsx("span", { className: "text-orange-600", children: "Computing" }), ' ', _jsx("span", { className: "gradient-text-blue-light", children: "AI" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Ultra-low latency AI processing at the edge. Deploy intelligent systems that process data locally for real-time decision making and enhanced privacy." }), _jsxs("div", { className: "flex justify-center flex-wrap gap-4 mb-8", children: [_jsxs(Badge, { className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 px-4 py-2", children: [_jsx(Zap, { className: "w-4 h-4 mr-2" }), "Real-time AI"] }), _jsxs(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2", children: [_jsx(Cpu, { className: "w-4 h-4 mr-2" }), "Edge Inference"] }), _jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-4 py-2", children: [_jsx(Shield, { className: "w-4 h-4 mr-2" }), "Local Processing"] }), _jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2", children: [_jsx(Network, { className: "w-4 h-4 mr-2" }), "5G Ready"] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8", children: edgeMetrics.map((metric, index) => {
                                                const Icon = metric.icon;
                                                return (_jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx(Icon, { className: "w-6 h-6 text-orange-600 mx-auto mb-2" }), _jsx("div", { className: "text-lg font-bold text-orange-600", children: metric.value }), _jsx("div", { className: "text-xs text-foreground-muted", children: metric.label })] }, index));
                                            }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Rocket, { className: "w-5 h-5 mr-2" }), "Start Edge Project"] }), _jsxs(Button, { onClick: () => navigate('contact'), variant: "outline", size: "lg", className: "glass-blue-light border-blue-200 dark:border-blue-700 hover:glass-blue transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "Edge Consultation"] })] })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "usecases", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 glass", children: [_jsx(TabsTrigger, { value: "usecases", children: "Use Cases" }), _jsx(TabsTrigger, { value: "architecture", children: "Architecture" }), _jsx(TabsTrigger, { value: "benefits", children: "Benefits" }), _jsx(TabsTrigger, { value: "implementation", children: "Implementation" })] }), _jsx(TabsContent, { value: "usecases", className: "space-y-8 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Brain, { className: "w-6 h-6 text-orange-600" }), "Edge AI Use Cases"] }), _jsx(CardDescription, { children: "Real-world applications of edge computing and AI at the source" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: edgeUseCases.map((usecase, index) => {
                                                        const Icon = usecase.icon;
                                                        const isSelected = usecase.id === selectedUseCaseId;
                                                        return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: `cursor-pointer ${isSelected ? 'ring-2 ring-orange-500' : ''}`, onClick: () => setSelectedUseCaseId(usecase.id), children: _jsx(Card, { className: `glass h-full card-hover ${isSelected ? 'bg-orange-50/50 dark:bg-orange-950/30' : ''}`, children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl", children: _jsx(Icon, { className: "w-8 h-8 text-orange-600 dark:text-orange-400" }) }) }), _jsx("h3", { className: "font-semibold text-lg mb-2", children: usecase.title }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: usecase.description }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Badge, { className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", children: [usecase.latency, " latency"] }), _jsxs("div", { className: "text-xs text-foreground-muted", children: [usecase.bandwidth, " bandwidth"] })] })] }) }) }, usecase.id));
                                                    }) }), selectedUseCaseData && (_jsxs(Card, { className: "glass bg-orange-50/50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-700", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "text-orange-700 dark:text-orange-300", children: [selectedUseCaseData.title, " - Implementation Details"] }), _jsx(CardDescription, { children: "Technical specifications and performance characteristics" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "AI Applications:" }), _jsx("div", { className: "space-y-2", children: selectedUseCaseData.applications.map((app, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }), _jsx("span", { className: "text-sm", children: app })] }, index))) })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Performance Metrics:" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "glass-blue-light p-3 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium", children: "Latency:" }), _jsx("div", { className: "text-lg font-bold text-orange-600", children: selectedUseCaseData.latency })] }), _jsxs("div", { className: "glass-blue-light p-3 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium", children: "Bandwidth Reduction:" }), _jsx("div", { className: "text-lg font-bold text-green-600", children: selectedUseCaseData.bandwidth })] }), _jsxs("div", { className: "glass-blue-light p-3 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium", children: "Reliability:" }), _jsx("div", { className: "text-lg font-bold text-blue-600", children: selectedUseCaseData.reliability })] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Target Industries:" }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: selectedUseCaseData.industries.map((industry, index) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: industry }, index))) }), _jsxs("div", { className: "pt-4 border-t border-orange-200 dark:border-orange-700", children: [_jsx("div", { className: "text-sm font-medium mb-1", children: "Processing Type:" }), _jsx("div", { className: "text-orange-600 font-semibold", children: selectedUseCaseData.processing })] }), _jsxs(Button, { className: "w-full", onClick: () => navigate('demo-request'), children: [_jsx(Play, { className: "w-4 h-4 mr-2" }), "Request Demo"] })] })] }) })] }))] })] }) }), _jsx(TabsContent, { value: "architecture", className: "space-y-6 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Layers, { className: "w-6 h-6 text-orange-600" }), "Edge Computing Architecture"] }), _jsx(CardDescription, { children: "Four-layer architecture for distributed AI processing" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-8", children: edgeArchitecture.map((layer, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "relative", children: [index < edgeArchitecture.length - 1 && (_jsx("div", { className: "absolute left-6 top-16 w-0.5 h-32 bg-orange-200 dark:bg-orange-700" })), _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex-shrink-0", children: _jsx("div", { className: "w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: index + 1 }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-xl font-semibold", children: layer.layer }), _jsx(Badge, { className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", children: layer.latency })] }), _jsx("p", { className: "text-foreground-muted mb-4", children: layer.description }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Components:" }), _jsx("div", { className: "grid grid-cols-2 gap-2", children: layer.components.map((component, compIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("div", { className: "w-2 h-2 bg-orange-400 rounded-full" }), _jsx("span", { children: component })] }, compIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Technologies:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: layer.technologies.map((tech, techIndex) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: tech }, techIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Capabilities:" }), _jsx("div", { className: "glass-blue-light p-3 rounded-lg text-center", children: _jsx("div", { className: "text-sm font-medium text-orange-600", children: layer.capabilities }) })] })] })] })] })] }, index))) }) })] }) }), _jsxs(TabsContent, { value: "benefits", className: "space-y-6 mt-8", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: edgebenefits.map((benefit, index) => {
                                            const Icon = benefit.icon;
                                            return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsxs(Card, { className: "glass-heavy h-full", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl", children: _jsx(Icon, { className: "w-8 h-8 text-orange-600 dark:text-orange-400" }) }), _jsxs("div", { children: [_jsx(CardTitle, { className: "text-xl", children: benefit.category }), _jsx(CardDescription, { children: benefit.description })] })] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: benefit.metrics.map((metric, metricIndex) => (_jsxs("div", { className: "glass-blue-light p-4 rounded-lg", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "font-medium", children: metric.label }), _jsx("span", { className: "text-xl font-bold text-orange-600", children: metric.value })] }), _jsx("div", { className: "text-sm text-foreground-muted", children: metric.improvement })] }, metricIndex))) }) })] }) }, index));
                                        }) }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Edge vs Cloud Computing" }), _jsx(CardDescription, { children: "Performance comparison across key metrics" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-6", children: [
                                                        { metric: "Latency", edge: "< 1ms", cloud: "50-200ms", winner: "edge" },
                                                        { metric: "Bandwidth Usage", edge: "90% less", cloud: "Full upload", winner: "edge" },
                                                        { metric: "Privacy", edge: "Local processing", cloud: "Data in cloud", winner: "edge" },
                                                        { metric: "Reliability", edge: "Offline capable", cloud: "Network dependent", winner: "edge" },
                                                        { metric: "Scalability", edge: "Local scaling", cloud: "Unlimited scale", winner: "cloud" },
                                                        { metric: "Maintenance", edge: "Distributed", cloud: "Centralized", winner: "cloud" }
                                                    ].map((comparison, index) => (_jsxs("div", { className: "grid grid-cols-4 gap-4 items-center p-4 glass-blue-light rounded-lg", children: [_jsx("div", { className: "font-medium", children: comparison.metric }), _jsx("div", { className: `text-center p-2 rounded ${comparison.winner === 'edge' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`, children: comparison.edge }), _jsx("div", { className: `text-center p-2 rounded ${comparison.winner === 'cloud' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`, children: comparison.cloud }), _jsx("div", { className: "text-center", children: comparison.winner === 'edge' ? (_jsx(Badge, { className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", children: "Edge Wins" })) : (_jsx(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", children: "Cloud Wins" })) })] }, index))) }) })] })] }), _jsxs(TabsContent, { value: "implementation", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Settings, { className: "w-6 h-6 text-orange-600" }), "Edge Computing Implementation"] }), _jsx(CardDescription, { children: "Structured approach to deploying edge AI solutions" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-8", children: implementationPhases.map((phase, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "relative", children: [index < implementationPhases.length - 1 && (_jsx("div", { className: "absolute left-6 top-16 w-0.5 h-32 bg-orange-200 dark:bg-orange-700" })), _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex-shrink-0", children: _jsx("div", { className: "w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: index + 1 }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-xl font-semibold", children: phase.phase }), _jsx(Badge, { variant: "outline", children: phase.duration })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Key Activities:" }), _jsx("div", { className: "space-y-2", children: phase.activities.map((activity, actIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(ArrowRight, { className: "w-3 h-3 text-orange-600" }), _jsx("span", { children: activity })] }, actIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Deliverables:" }), _jsx("div", { className: "space-y-2", children: phase.deliverables.map((deliverable, delIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle2, { className: "w-3 h-3 text-green-600" }), _jsx("span", { children: deliverable })] }, delIndex))) })] })] })] })] })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Edge Implementation Best Practices" }), _jsx(CardDescription, { children: "Key considerations for successful edge deployments" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Gauge, { className: "w-8 h-8 text-orange-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Performance First" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Optimize for ultra-low latency and real-time processing requirements" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Shield, { className: "w-8 h-8 text-blue-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Security by Design" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Implement comprehensive security measures for distributed environments" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Target, { className: "w-8 h-8 text-green-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Scalable Architecture" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Design for horizontal scaling and distributed management" })] })] }) })] })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16", children: _jsx(Card, { className: "glass w-full bg-gradient-to-r from-orange-50/50 via-blue-50/50 to-orange-50/50 dark:from-orange-950/30 dark:via-blue-950/30 dark:to-orange-950/30", children: _jsx(CardContent, { className: "p-12", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Deploy AI at the Speed of Thought" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "Transform your operations with ultra-low latency edge computing solutions. Process data locally, protect privacy, and enable real-time intelligence." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-4", children: [_jsx(Cpu, { className: "w-5 h-5 mr-2" }), "Deploy Edge AI"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('contact'), size: "lg", className: "px-8 py-4", children: [_jsx(Calendar, { className: "w-5 h-5 mr-2" }), "Edge Consultation"] })] })] }) }) }) })] })] }));
}
//# sourceMappingURL=EdgeComputingPage.js.map