"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Smartphone, Wifi, Database, Cloud, Cpu, Radio, Car, Home, Factory, Heart, Shield, Zap, TrendingUp, BarChart3, Network, Settings, Brain, Target, Award, CheckCircle2, ArrowRight, Star, Clock, Globe, Users, Lightbulb, Lock, Activity, Thermometer, Calendar, MessageSquare, FileText, Download, Play, Layers } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
export function IoTEcosystemPage({ navigate }) {
    const [selectedSolution, setSelectedSolution] = useState("smart-manufacturing");
    const iotSolutions = [
        {
            id: "smart-manufacturing",
            title: "Smart Manufacturing",
            description: "AI-driven Industrial IoT for Industry 4.0 transformation",
            icon: Factory,
            applications: [
                "Predictive maintenance",
                "Quality control automation",
                "Production optimization",
                "Energy management",
                "Supply chain tracking",
                "Worker safety monitoring"
            ],
            technologies: ["Industrial sensors", "Edge computing", "AI analytics", "Digital twins"],
            roi: "300-500%",
            timeline: "12-24 weeks",
            complexity: "High",
            connectivity: ["5G", "LoRaWAN", "Industrial Ethernet"]
        },
        {
            id: "smart-cities",
            title: "Smart Cities",
            description: "Comprehensive IoT infrastructure for urban intelligence",
            icon: Globe,
            applications: [
                "Traffic flow optimization",
                "Environmental monitoring",
                "Smart lighting systems",
                "Waste management",
                "Public safety networks",
                "Energy grid optimization"
            ],
            technologies: ["Smart sensors", "Edge AI", "City-wide networks", "Data analytics"],
            roi: "200-400%",
            timeline: "16-32 weeks",
            complexity: "Very High",
            connectivity: ["5G", "NB-IoT", "WiFi 6", "Mesh networks"]
        },
        {
            id: "smart-agriculture",
            title: "Smart Agriculture",
            description: "IoT-powered precision farming and crop optimization",
            icon: Lightbulb,
            applications: [
                "Soil monitoring",
                "Weather station networks",
                "Irrigation automation",
                "Livestock tracking",
                "Crop health monitoring",
                "Equipment management"
            ],
            technologies: ["Environmental sensors", "Satellite connectivity", "AI models", "Drones"],
            roi: "250-400%",
            timeline: "8-16 weeks",
            complexity: "Medium",
            connectivity: ["LoRaWAN", "Satellite", "Cellular", "WiFi"]
        },
        {
            id: "smart-healthcare",
            title: "Smart Healthcare",
            description: "Connected health monitoring and AI-powered diagnostics",
            icon: Heart,
            applications: [
                "Patient monitoring",
                "Medical asset tracking",
                "Environmental controls",
                "Medication management",
                "Emergency response",
                "Telemedicine support"
            ],
            technologies: ["Wearable devices", "Medical IoT", "AI diagnostics", "Cloud platforms"],
            roi: "180-350%",
            timeline: "10-20 weeks",
            complexity: "High",
            connectivity: ["Bluetooth", "WiFi", "Cellular", "RFID"]
        }
    ];
    const iotArchitecture = [
        {
            layer: "Device Layer",
            description: "Smart sensors, actuators, and connected devices",
            components: [
                "Environmental sensors",
                "Smart actuators",
                "Wearable devices",
                "Industrial equipment",
                "Camera systems",
                "RFID/NFC tags"
            ],
            technologies: ["ARM processors", "Low-power MCUs", "Sensor fusion", "Edge AI chips"]
        },
        {
            layer: "Connectivity Layer",
            description: "Communication protocols and network infrastructure",
            components: [
                "5G networks",
                "WiFi 6/6E",
                "LoRaWAN",
                "NB-IoT",
                "Bluetooth 5.0",
                "Mesh networks"
            ],
            technologies: ["Protocol gateways", "Network management", "QoS optimization", "Security protocols"]
        },
        {
            layer: "Edge Computing Layer",
            description: "Local processing and intelligent decision making",
            components: [
                "Edge servers",
                "AI inference engines",
                "Data preprocessing",
                "Local analytics",
                "Caching systems",
                "Protocol conversion"
            ],
            technologies: ["Edge AI", "Real-time processing", "Fog computing", "Micro-services"]
        },
        {
            layer: "Cloud Platform Layer",
            description: "Scalable data processing and AI analytics",
            components: [
                "Data lakes",
                "AI/ML platforms",
                "Analytics engines",
                "API gateways",
                "Device management",
                "Security services"
            ],
            technologies: ["Cloud AI", "Big data", "Microservices", "Container orchestration"]
        },
        {
            layer: "Application Layer",
            description: "Business applications and user interfaces",
            components: [
                "Dashboards",
                "Mobile apps",
                "Web portals",
                "APIs",
                "Reporting tools",
                "Alert systems"
            ],
            technologies: ["React/Vue.js", "Native apps", "Progressive Web Apps", "Business intelligence"]
        }
    ];
    const implementationPhases = [
        {
            phase: "Assessment & Strategy",
            duration: "2-4 weeks",
            activities: [
                "IoT readiness assessment",
                "Use case identification",
                "Architecture design",
                "Technology selection",
                "ROI modeling",
                "Security planning"
            ],
            deliverables: [
                "IoT strategy document",
                "Architecture blueprint",
                "Technology roadmap",
                "Security framework"
            ]
        },
        {
            phase: "Pilot Development",
            duration: "6-10 weeks",
            activities: [
                "Device procurement",
                "Connectivity setup",
                "Platform development",
                "Data pipeline creation",
                "Dashboard development",
                "Security implementation"
            ],
            deliverables: [
                "Pilot IoT system",
                "Data analytics platform",
                "Mobile/web applications",
                "Security controls"
            ]
        },
        {
            phase: "AI Integration",
            duration: "4-8 weeks",
            activities: [
                "AI model development",
                "Edge computing setup",
                "Predictive analytics",
                "Automation workflows",
                "Performance optimization",
                "Testing and validation"
            ],
            deliverables: [
                "AI-powered analytics",
                "Automated workflows",
                "Predictive models",
                "Performance reports"
            ]
        },
        {
            phase: "Scale & Optimize",
            duration: "4-6 weeks",
            activities: [
                "Full-scale deployment",
                "Performance monitoring",
                "System optimization",
                "User training",
                "Maintenance setup",
                "Continuous improvement"
            ],
            deliverables: [
                "Production IoT ecosystem",
                "Monitoring systems",
                "Training programs",
                "Maintenance procedures"
            ]
        }
    ];
    const iotMetrics = [
        { label: "Connected Devices", value: "50B+", icon: Smartphone },
        { label: "Data Processing Speed", value: "Real-time", icon: Zap },
        { label: "Operational Efficiency", value: "40%+", icon: TrendingUp },
        { label: "Cost Reduction", value: "35%", icon: BarChart3 },
        { label: "Predictive Accuracy", value: "95%+", icon: Brain },
        { label: "System Uptime", value: "99.9%", icon: Shield }
    ];
    const selectedSolutionData = iotSolutions.find(sol => sol.id === selectedSolution);
    const getComplexityColor = (complexity) => {
        switch (complexity) {
            case "Very High": return "text-red-600 bg-red-100 dark:bg-red-900/30";
            case "High": return "text-orange-600 bg-orange-100 dark:bg-orange-900/30";
            case "Medium": return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30";
            case "Low": return "text-green-600 bg-green-100 dark:bg-green-900/30";
            default: return "text-gray-600 bg-gray-100 dark:bg-gray-800";
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-green-50/50 via-blue-50/30 to-green-100/40 dark:from-green-950/20 dark:via-blue-950/10 dark:to-green-900/20" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-green-200/30 dark:bg-green-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-blue-300/40 dark:bg-blue-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-green-400/35 dark:bg-green-400/25 rounded-full blur-md float-delayed-2" }), _jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10", children: _jsxs("div", { className: "relative w-64 h-64", children: [[...Array(8)].map((_, i) => (_jsx("div", { className: "absolute w-4 h-4 bg-green-400 rounded-full animate-pulse", style: {
                                                top: `${30 + Math.sin((i * Math.PI) / 4) * 30}%`,
                                                left: `${50 + Math.cos((i * Math.PI) / 4) * 30}%`,
                                                animationDelay: `${i * 0.3}s`,
                                                animationDuration: '2s'
                                            } }, i))), _jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full animate-ping" })] }) })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(Network, { className: "w-12 h-12 text-green-600 dark:text-green-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "IoT" }), ' ', _jsx("span", { className: "text-green-600", children: "Ecosystem" }), ' ', _jsx("span", { className: "gradient-text-blue-light", children: "Platform" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Build intelligent connected systems with AI-powered IoT solutions. Transform operations with real-time data, predictive analytics, and automated decision making." }), _jsxs("div", { className: "flex justify-center flex-wrap gap-4 mb-8", children: [_jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-4 py-2", children: [_jsx(Radio, { className: "w-4 h-4 mr-2" }), "Smart Sensors"] }), _jsxs(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2", children: [_jsx(Wifi, { className: "w-4 h-4 mr-2" }), "5G/WiFi 6"] }), _jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2", children: [_jsx(Brain, { className: "w-4 h-4 mr-2" }), "Edge AI"] }), _jsxs(Badge, { className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 px-4 py-2", children: [_jsx(Cloud, { className: "w-4 h-4 mr-2" }), "Cloud Analytics"] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8", children: iotMetrics.map((metric, index) => {
                                                const Icon = metric.icon;
                                                return (_jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx(Icon, { className: "w-6 h-6 text-green-600 mx-auto mb-2" }), _jsx("div", { className: "text-lg font-bold text-green-600", children: metric.value }), _jsx("div", { className: "text-xs text-foreground-muted", children: metric.label })] }, index));
                                            }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Network, { className: "w-5 h-5 mr-2" }), "Start IoT Project"] }), _jsxs(Button, { onClick: () => navigate('contact'), variant: "outline", size: "lg", className: "glass-blue-light border-blue-200 dark:border-blue-700 hover:glass-blue transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "IoT Consultation"] })] })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "solutions", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 glass", children: [_jsx(TabsTrigger, { value: "solutions", children: "IoT Solutions" }), _jsx(TabsTrigger, { value: "architecture", children: "Architecture" }), _jsx(TabsTrigger, { value: "implementation", children: "Implementation" }), _jsx(TabsTrigger, { value: "technologies", children: "Technologies" })] }), _jsx(TabsContent, { value: "solutions", className: "space-y-8 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Brain, { className: "w-6 h-6 text-green-600" }), "AI-Powered IoT Solutions"] }), _jsx(CardDescription, { children: "Comprehensive IoT ecosystems for intelligent operations" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: iotSolutions.map((solution, index) => {
                                                        const Icon = solution.icon;
                                                        const isSelected = solution.id === selectedSolution;
                                                        return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: `cursor-pointer ${isSelected ? 'ring-2 ring-green-500' : ''}`, onClick: () => setSelectedSolution(solution.id), children: _jsx(Card, { className: `glass h-full card-hover ${isSelected ? 'bg-green-50/50 dark:bg-green-950/30' : ''}`, children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "p-3 bg-green-100 dark:bg-green-900/30 rounded-xl", children: _jsx(Icon, { className: "w-8 h-8 text-green-600 dark:text-green-400" }) }) }), _jsx("h3", { className: "font-semibold text-lg mb-2", children: solution.title }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: solution.description }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Badge, { className: getComplexityColor(solution.complexity), children: [solution.complexity, " Complexity"] }), _jsxs("div", { className: "text-xs text-foreground-muted", children: ["ROI: ", solution.roi] })] })] }) }) }, solution.id));
                                                    }) }), selectedSolutionData && (_jsxs(Card, { className: "glass bg-green-50/50 dark:bg-green-950/30 border-green-200 dark:border-green-700", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "text-green-700 dark:text-green-300", children: [selectedSolutionData.title, " - Implementation Details"] }), _jsx(CardDescription, { children: "Applications, technologies, and connectivity options" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Key Applications:" }), _jsx("div", { className: "space-y-2", children: selectedSolutionData.applications.map((app, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }), _jsx("span", { className: "text-sm", children: app })] }, index))) })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Core Technologies:" }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: selectedSolutionData.technologies.map((tech, index) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: tech }, index))) }), _jsx("h4", { className: "font-semibold", children: "Connectivity:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: selectedSolutionData.connectivity.map((conn, index) => (_jsx(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs", children: conn }, index))) })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Project Metrics:" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "glass-blue-light p-3 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium", children: "Expected ROI:" }), _jsx("div", { className: "text-lg font-bold text-green-600", children: selectedSolutionData.roi })] }), _jsxs("div", { className: "glass-blue-light p-3 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium", children: "Timeline:" }), _jsx("div", { className: "text-lg font-bold text-blue-600", children: selectedSolutionData.timeline })] })] }), _jsxs(Button, { className: "w-full", onClick: () => navigate('demo-request'), children: [_jsx(Play, { className: "w-4 h-4 mr-2" }), "Request Demo"] })] })] }) })] }))] })] }) }), _jsxs(TabsContent, { value: "architecture", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Layers, { className: "w-6 h-6 text-green-600" }), "IoT Architecture Stack"] }), _jsx(CardDescription, { children: "Five-layer architecture for scalable IoT ecosystems" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-6", children: iotArchitecture.map((layer, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "relative", children: [index < iotArchitecture.length - 1 && (_jsx("div", { className: "absolute left-6 top-16 w-0.5 h-24 bg-green-200 dark:bg-green-700" })), _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "p-3 bg-green-100 dark:bg-green-900/30 rounded-xl flex-shrink-0", children: _jsx("div", { className: "w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: 5 - index }) }), _jsxs("div", { className: "flex-grow", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: layer.layer }), _jsx("p", { className: "text-foreground-muted mb-4", children: layer.description }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Components:" }), _jsx("div", { className: "grid grid-cols-2 gap-2", children: layer.components.map((component, compIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full" }), _jsx("span", { children: component })] }, compIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Technologies:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: layer.technologies.map((tech, techIndex) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: tech }, techIndex))) })] })] })] })] })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Architecture Advantages" }), _jsx(CardDescription, { children: "Benefits of our layered IoT architecture approach" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Zap, { className: "w-8 h-8 text-green-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Scalable Performance" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Edge processing reduces latency and improves real-time responsiveness" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Shield, { className: "w-8 h-8 text-blue-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Enhanced Security" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Multi-layer security with encryption, authentication, and monitoring" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(TrendingUp, { className: "w-8 h-8 text-purple-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Cost Efficiency" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Optimized data processing reduces bandwidth and cloud costs" })] })] }) })] })] }), _jsx(TabsContent, { value: "implementation", className: "space-y-6 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Settings, { className: "w-6 h-6 text-green-600" }), "IoT Implementation Process"] }), _jsx(CardDescription, { children: "Structured approach to building your IoT ecosystem" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-8", children: implementationPhases.map((phase, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "relative", children: [index < implementationPhases.length - 1 && (_jsx("div", { className: "absolute left-6 top-16 w-0.5 h-32 bg-green-200 dark:bg-green-700" })), _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "p-3 bg-green-100 dark:bg-green-900/30 rounded-xl flex-shrink-0", children: _jsx("div", { className: "w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: index + 1 }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-xl font-semibold", children: phase.phase }), _jsx(Badge, { variant: "outline", children: phase.duration })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Key Activities:" }), _jsx("div", { className: "space-y-2", children: phase.activities.map((activity, actIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(ArrowRight, { className: "w-3 h-3 text-green-600" }), _jsx("span", { children: activity })] }, actIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Deliverables:" }), _jsx("div", { className: "space-y-2", children: phase.deliverables.map((deliverable, delIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle2, { className: "w-3 h-3 text-green-600" }), _jsx("span", { children: deliverable })] }, delIndex))) })] })] })] })] })] }, index))) }) })] }) }), _jsxs(TabsContent, { value: "technologies", className: "space-y-6 mt-8", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
                                            {
                                                category: "Connectivity",
                                                icon: Wifi,
                                                technologies: ["5G/4G", "WiFi 6/6E", "LoRaWAN", "NB-IoT", "Bluetooth 5.0", "Zigbee"],
                                                description: "Advanced wireless protocols for reliable device connectivity"
                                            },
                                            {
                                                category: "Edge Computing",
                                                icon: Cpu,
                                                technologies: ["Edge AI chips", "GPU acceleration", "Real-time OS", "Container runtime"],
                                                description: "Local processing power for immediate decision making"
                                            },
                                            {
                                                category: "Sensors & Hardware",
                                                icon: Radio,
                                                technologies: ["Environmental sensors", "Computer vision", "LIDAR", "RFID/NFC", "Actuators"],
                                                description: "Smart devices for comprehensive environmental monitoring"
                                            },
                                            {
                                                category: "Cloud Platforms",
                                                icon: Cloud,
                                                technologies: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "Custom platforms"],
                                                description: "Scalable cloud infrastructure for data processing and storage"
                                            },
                                            {
                                                category: "Security",
                                                icon: Lock,
                                                technologies: ["Device certificates", "Encryption", "Secure boot", "OTA updates"],
                                                description: "End-to-end security for IoT devices and communications"
                                            },
                                            {
                                                category: "Analytics & AI",
                                                icon: BarChart3,
                                                technologies: ["Machine learning", "Predictive analytics", "Computer vision", "NLP"],
                                                description: "AI-powered insights from IoT data streams"
                                            }
                                        ].map((tech, index) => {
                                            const Icon = tech.icon;
                                            return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsxs(Card, { className: "glass-heavy h-full", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-3 bg-green-100 dark:bg-green-900/30 rounded-xl", children: _jsx(Icon, { className: "w-8 h-8 text-green-600 dark:text-green-400" }) }), _jsx("div", { children: _jsx(CardTitle, { className: "text-lg", children: tech.category }) })] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-foreground-muted mb-4", children: tech.description }), _jsxs("div", { className: "space-y-3", children: [_jsx("h4", { className: "font-semibold text-sm", children: "Technologies:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: tech.technologies.map((technology, techIndex) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: technology }, techIndex))) })] })] })] }) }, index));
                                        }) }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Integrated Technology Stack" }), _jsx(CardDescription, { children: "How different IoT technologies work together" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [_jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(Smartphone, { className: "w-12 h-12 text-green-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Device Layer" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Smart sensors, actuators, and connected devices" })] }), _jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(Network, { className: "w-12 h-12 text-blue-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Connectivity" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Reliable wireless communication protocols" })] }), _jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(Cpu, { className: "w-12 h-12 text-purple-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Edge Processing" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Local AI processing for real-time decisions" })] }), _jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(Cloud, { className: "w-12 h-12 text-orange-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Cloud Analytics" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Scalable data processing and insights" })] })] }) })] })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16", children: _jsx(Card, { className: "glass w-full bg-gradient-to-r from-green-50/50 via-blue-50/50 to-green-50/50 dark:from-green-950/30 dark:via-blue-950/30 dark:to-green-950/30", children: _jsx(CardContent, { className: "p-12", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Connect Everything with Intelligence" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "Build smarter operations with our comprehensive IoT ecosystem. Real-time insights, predictive analytics, and automated decisions." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-4", children: [_jsx(Network, { className: "w-5 h-5 mr-2" }), "Launch IoT Project"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('contact'), size: "lg", className: "px-8 py-4", children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "IoT Consultation"] })] })] }) }) }) })] })] }));
}
//# sourceMappingURL=IoTEcosystemPage.js.map