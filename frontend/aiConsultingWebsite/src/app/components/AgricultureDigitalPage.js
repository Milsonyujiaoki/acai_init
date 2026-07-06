"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Sprout, Cloud, Droplets, Sun, Cpu, Satellite, BarChart3, TrendingUp, Shield, Zap, Globe, Users, Target, Award, CheckCircle2, ArrowRight, Star, Clock, Lightbulb, Settings, Brain, Database, Network, Smartphone, Calendar, MessageSquare, FileText, Download, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
export function AgricultureDigitalPage({ navigate }) {
    const [selectedSolution, setSelectedSolution] = useState("precision");
    const agriTechSolutions = [
        {
            id: "precision",
            title: "Precision Agriculture",
            description: "AI-powered precision farming for optimal crop management",
            icon: Target,
            benefits: [
                "30% reduction in water usage",
                "25% increase in crop yield",
                "40% reduction in pesticide use",
                "Real-time crop monitoring",
                "Predictive disease detection",
                "Optimized nutrient management"
            ],
            technologies: ["Satellite imagery", "IoT sensors", "AI analytics", "Drone surveillance"],
            roi: "200-300%",
            timeline: "6-12 months",
            complexity: "Medium"
        },
        {
            id: "livestock",
            title: "Smart Livestock Management",
            description: "IoT and AI solutions for intelligent animal husbandry",
            icon: Users,
            benefits: [
                "20% improvement in feed efficiency",
                "Early disease detection",
                "Automated health monitoring",
                "Breeding optimization",
                "Stress level monitoring",
                "Production forecasting"
            ],
            technologies: ["Wearable sensors", "Computer vision", "Behavioral AI", "Health analytics"],
            roi: "150-250%",
            timeline: "4-8 months",
            complexity: "Medium"
        },
        {
            id: "supply",
            title: "Supply Chain Optimization",
            description: "End-to-end agricultural supply chain digitization",
            icon: Network,
            benefits: [
                "50% reduction in food waste",
                "Improved traceability",
                "Quality assurance",
                "Inventory optimization",
                "Price forecasting",
                "Logistics efficiency"
            ],
            technologies: ["Blockchain", "RFID tracking", "Cold chain monitoring", "Predictive analytics"],
            roi: "180-280%",
            timeline: "8-16 months",
            complexity: "High"
        },
        {
            id: "climate",
            title: "Climate-Smart Agriculture",
            description: "Weather prediction and climate adaptation strategies",
            icon: Cloud,
            benefits: [
                "Weather risk mitigation",
                "Climate adaptation planning",
                "Crop selection optimization",
                "Irrigation scheduling",
                "Carbon footprint reduction",
                "Sustainability reporting"
            ],
            technologies: ["Weather APIs", "Climate models", "Satellite data", "Machine learning"],
            roi: "120-200%",
            timeline: "3-6 months",
            complexity: "Low"
        }
    ];
    const agriTechCategories = [
        {
            category: "Crop Management",
            icon: Sprout,
            description: "Intelligent crop monitoring and optimization systems",
            solutions: [
                "Crop health monitoring",
                "Yield prediction models",
                "Pest and disease detection",
                "Growth stage tracking",
                "Harvest timing optimization",
                "Quality assessment"
            ],
            technology: "Computer Vision + AI",
            impact: "25-40% yield increase"
        },
        {
            category: "Water Management",
            icon: Droplets,
            description: "Smart irrigation and water conservation systems",
            solutions: [
                "Soil moisture monitoring",
                "Automated irrigation control",
                "Water usage optimization",
                "Drought prediction",
                "Irrigation scheduling",
                "Water quality monitoring"
            ],
            technology: "IoT Sensors + Analytics",
            impact: "30-50% water savings"
        },
        {
            category: "Weather Intelligence",
            icon: Sun,
            description: "Advanced weather monitoring and prediction systems",
            solutions: [
                "Microclimate monitoring",
                "Weather forecasting",
                "Frost prediction",
                "Growing degree days",
                "Evapotranspiration calculation",
                "Climate risk assessment"
            ],
            technology: "Satellite + Weather APIs",
            impact: "20-30% risk reduction"
        },
        {
            category: "Farm Automation",
            icon: Cpu,
            description: "Autonomous farming equipment and robotics",
            solutions: [
                "Autonomous tractors",
                "Robotic harvesters",
                "Drone applications",
                "Automated planting",
                "Precision spraying",
                "Livestock feeding systems"
            ],
            technology: "Robotics + AI Navigation",
            impact: "40-60% labor reduction"
        }
    ];
    const implementationSteps = [
        {
            phase: "Assessment & Planning",
            duration: "2-4 weeks",
            activities: [
                "Farm assessment and analysis",
                "Technology readiness evaluation",
                "ROI calculation and planning",
                "Custom solution design",
                "Infrastructure requirements",
                "Training needs assessment"
            ],
            deliverables: [
                "Farm digitization strategy",
                "Technology roadmap",
                "Cost-benefit analysis",
                "Implementation timeline"
            ]
        },
        {
            phase: "Infrastructure Setup",
            duration: "4-8 weeks",
            activities: [
                "IoT sensor installation",
                "Connectivity infrastructure",
                "Data collection systems",
                "Mobile app deployment",
                "Dashboard configuration",
                "Integration testing"
            ],
            deliverables: [
                "Operational sensor network",
                "Data collection platform",
                "Mobile applications",
                "Monitoring dashboards"
            ]
        },
        {
            phase: "AI Model Training",
            duration: "6-12 weeks",
            activities: [
                "Historical data analysis",
                "Custom model development",
                "Algorithm fine-tuning",
                "Validation and testing",
                "Performance optimization",
                "Accuracy verification"
            ],
            deliverables: [
                "Trained AI models",
                "Prediction algorithms",
                "Decision support systems",
                "Performance reports"
            ]
        },
        {
            phase: "Deployment & Training",
            duration: "2-4 weeks",
            activities: [
                "System go-live",
                "User training programs",
                "Process optimization",
                "Performance monitoring",
                "Feedback collection",
                "Continuous improvement"
            ],
            deliverables: [
                "Live production system",
                "Trained user base",
                "Operating procedures",
                "Support documentation"
            ]
        }
    ];
    const successMetrics = [
        { label: "Average Yield Increase", value: "32%", icon: TrendingUp },
        { label: "Water Usage Reduction", value: "35%", icon: Droplets },
        { label: "Cost Savings", value: "28%", icon: BarChart3 },
        { label: "Farm Efficiency Gain", value: "45%", icon: Zap },
        { label: "ROI Achievement", value: "240%", icon: Award },
        { label: "Farmer Satisfaction", value: "94%", icon: Star }
    ];
    const selectedSolutionData = agriTechSolutions.find(sol => sol.id === selectedSolution);
    const getComplexityColor = (complexity) => {
        switch (complexity) {
            case "Low": return "text-green-600 bg-green-100 dark:bg-green-900/30";
            case "Medium": return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30";
            case "High": return "text-red-600 bg-red-100 dark:bg-red-900/30";
            default: return "text-gray-600 bg-gray-100 dark:bg-gray-800";
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-green-50/50 via-blue-50/30 to-green-100/40 dark:from-green-950/20 dark:via-blue-950/10 dark:to-green-900/20" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-green-200/30 dark:bg-green-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-blue-300/40 dark:bg-blue-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-green-400/35 dark:bg-green-400/25 rounded-full blur-md float-delayed-2" })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(Sprout, { className: "w-12 h-12 text-green-600 dark:text-green-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "Smart" }), ' ', _jsx("span", { className: "text-green-600", children: "Agriculture" }), ' ', _jsx("span", { className: "gradient-text-blue-light", children: "Solutions" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Transform traditional farming with AI-powered precision agriculture, IoT monitoring, and data-driven decision making for sustainable and profitable farming." }), _jsxs("div", { className: "flex justify-center flex-wrap gap-4 mb-8", children: [_jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-4 py-2", children: [_jsx(Sprout, { className: "w-4 h-4 mr-2" }), "Precision Farming"] }), _jsxs(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2", children: [_jsx(Satellite, { className: "w-4 h-4 mr-2" }), "Satellite Monitoring"] }), _jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2", children: [_jsx(Brain, { className: "w-4 h-4 mr-2" }), "AI Analytics"] }), _jsxs(Badge, { className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 px-4 py-2", children: [_jsx(Smartphone, { className: "w-4 h-4 mr-2" }), "IoT Sensors"] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8", children: successMetrics.map((metric, index) => {
                                                const Icon = metric.icon;
                                                return (_jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx(Icon, { className: "w-6 h-6 text-green-600 mx-auto mb-2" }), _jsx("div", { className: "text-lg font-bold text-green-600", children: metric.value }), _jsx("div", { className: "text-xs text-foreground-muted", children: metric.label })] }, index));
                                            }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Sprout, { className: "w-5 h-5 mr-2" }), "Start Smart Farming"] }), _jsxs(Button, { onClick: () => navigate('contact'), variant: "outline", size: "lg", className: "glass-blue-light border-blue-200 dark:border-blue-700 hover:glass-blue transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "Farm Consultation"] })] })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "solutions", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 glass", children: [_jsx(TabsTrigger, { value: "solutions", children: "Smart Solutions" }), _jsx(TabsTrigger, { value: "categories", children: "Technology Areas" }), _jsx(TabsTrigger, { value: "implementation", children: "Implementation" }), _jsx(TabsTrigger, { value: "success", children: "Success Stories" })] }), _jsx(TabsContent, { value: "solutions", className: "space-y-8 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Brain, { className: "w-6 h-6 text-green-600" }), "AI-Powered Agriculture Solutions"] }), _jsx(CardDescription, { children: "Comprehensive smart farming solutions for modern agriculture" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: agriTechSolutions.map((solution, index) => {
                                                        const Icon = solution.icon;
                                                        const isSelected = solution.id === selectedSolution;
                                                        return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: `cursor-pointer ${isSelected ? 'ring-2 ring-green-500' : ''}`, onClick: () => setSelectedSolution(solution.id), children: _jsx(Card, { className: `glass h-full card-hover ${isSelected ? 'bg-green-50/50 dark:bg-green-950/30' : ''}`, children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "p-3 bg-green-100 dark:bg-green-900/30 rounded-xl", children: _jsx(Icon, { className: "w-8 h-8 text-green-600 dark:text-green-400" }) }) }), _jsx("h3", { className: "font-semibold text-lg mb-2", children: solution.title }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: solution.description }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Badge, { className: getComplexityColor(solution.complexity), children: [solution.complexity, " Complexity"] }), _jsxs("div", { className: "text-xs text-foreground-muted", children: ["ROI: ", solution.roi] })] })] }) }) }, solution.id));
                                                    }) }), selectedSolutionData && (_jsxs(Card, { className: "glass bg-green-50/50 dark:bg-green-950/30 border-green-200 dark:border-green-700", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "text-green-700 dark:text-green-300", children: [selectedSolutionData.title, " - Implementation Details"] }), _jsx(CardDescription, { children: "Benefits, technologies, and implementation approach" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Key Benefits:" }), _jsx("div", { className: "space-y-2", children: selectedSolutionData.benefits.map((benefit, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }), _jsx("span", { className: "text-sm", children: benefit })] }, index))) })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Technologies Used:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: selectedSolutionData.technologies.map((tech, index) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: tech }, index))) }), _jsxs("div", { className: "pt-4 border-t border-green-200 dark:border-green-700", children: [_jsx("div", { className: "text-sm font-medium mb-1", children: "Implementation:" }), _jsx("div", { className: "text-2xl font-bold text-green-600", children: selectedSolutionData.timeline })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Get Started:" }), _jsxs("div", { className: "space-y-3", children: [_jsxs(Button, { className: "w-full", onClick: () => navigate('demo-request'), children: [_jsx(Play, { className: "w-4 h-4 mr-2" }), "Request Demo"] }), _jsxs(Button, { variant: "outline", className: "w-full", onClick: () => navigate('contact'), children: [_jsx(Calendar, { className: "w-4 h-4 mr-2" }), "Farm Assessment"] })] })] })] }) })] }))] })] }) }), _jsxs(TabsContent, { value: "categories", className: "space-y-6 mt-8", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: agriTechCategories.map((category, index) => {
                                            const Icon = category.icon;
                                            return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsxs(Card, { className: "glass-heavy h-full", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-3 bg-green-100 dark:bg-green-900/30 rounded-xl", children: _jsx(Icon, { className: "w-8 h-8 text-green-600 dark:text-green-400" }) }), _jsxs("div", { children: [_jsx(CardTitle, { className: "text-lg", children: category.category }), _jsx(CardDescription, { children: category.description })] })] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-3", children: "Solutions:" }), _jsx("div", { className: "grid grid-cols-1 gap-2", children: category.solutions.map((solution, solIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full" }), _jsx("span", { children: solution })] }, solIndex))) })] }), _jsx(Separator, {}), _jsxs("div", { className: "grid grid-cols-1 gap-3 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "font-medium", children: "Technology:" }), _jsx(Badge, { variant: "outline", children: category.technology })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "font-medium", children: "Expected Impact:" }), _jsx("span", { className: "font-semibold text-green-600", children: category.impact })] })] })] }) })] }) }, index));
                                        }) }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Integrated Technology Stack" }), _jsx(CardDescription, { children: "How different technologies work together in smart farming" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(Satellite, { className: "w-12 h-12 text-blue-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Remote Sensing" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "Satellite and drone monitoring for large-scale crop assessment" }), _jsx(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", children: "Real-time Monitoring" })] }), _jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(Database, { className: "w-12 h-12 text-green-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "IoT Sensors" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "Ground-level sensors for precise environmental monitoring" }), _jsx(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: "Precision Data" })] }), _jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(Brain, { className: "w-12 h-12 text-purple-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "AI Analytics" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "Machine learning models for prediction and optimization" }), _jsx(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", children: "Smart Decisions" })] })] }) })] })] }), _jsxs(TabsContent, { value: "implementation", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Settings, { className: "w-6 h-6 text-green-600" }), "Smart Agriculture Implementation Process"] }), _jsx(CardDescription, { children: "Step-by-step approach to digitizing your farming operations" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-8", children: implementationSteps.map((step, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "relative", children: [index < implementationSteps.length - 1 && (_jsx("div", { className: "absolute left-6 top-16 w-0.5 h-32 bg-green-200 dark:bg-green-700" })), _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "p-3 bg-green-100 dark:bg-green-900/30 rounded-xl flex-shrink-0", children: _jsx("div", { className: "w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: index + 1 }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-xl font-semibold", children: step.phase }), _jsx(Badge, { variant: "outline", children: step.duration })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Key Activities:" }), _jsx("div", { className: "space-y-2", children: step.activities.map((activity, actIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(ArrowRight, { className: "w-3 h-3 text-green-600" }), _jsx("span", { children: activity })] }, actIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Deliverables:" }), _jsx("div", { className: "space-y-2", children: step.deliverables.map((deliverable, delIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle2, { className: "w-3 h-3 text-green-600" }), _jsx("span", { children: deliverable })] }, delIndex))) })] })] })] })] })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Why Choose Smart Agriculture?" }), _jsx(CardDescription, { children: "Benefits of implementing digital farming solutions" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(TrendingUp, { className: "w-8 h-8 text-green-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Increased Productivity" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "AI-driven insights lead to better yields and resource optimization" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Shield, { className: "w-8 h-8 text-blue-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Risk Mitigation" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Early detection of diseases, pests, and weather risks" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Globe, { className: "w-8 h-8 text-purple-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Sustainability" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Reduced environmental impact through precision farming" })] })] }) })] })] }), _jsxs(TabsContent, { value: "success", className: "space-y-6 mt-8", children: [_jsx("div", { className: "space-y-6", children: [
                                            {
                                                title: "Precision Rice Farming - Indonesia",
                                                farmSize: "500 hectares",
                                                location: "Central Java, Indonesia",
                                                challenge: "Water scarcity and inconsistent yields",
                                                solution: "IoT-based irrigation and AI crop monitoring",
                                                results: ["40% water usage reduction", "25% yield increase", "30% cost savings"],
                                                timeline: "8 months",
                                                farmer: "Budi Santoso, Rice Farmer"
                                            },
                                            {
                                                title: "Smart Dairy Farm - Netherlands",
                                                farmSize: "200 cows",
                                                location: "Friesland, Netherlands",
                                                challenge: "Feed efficiency and health monitoring",
                                                solution: "Wearable sensors and automated feed systems",
                                                results: ["20% feed efficiency improvement", "Early disease detection", "15% milk production increase"],
                                                timeline: "6 months",
                                                farmer: "Jan van der Berg, Dairy Farmer"
                                            },
                                            {
                                                title: "Vertical Farm Optimization - Singapore",
                                                farmSize: "Urban vertical farm",
                                                location: "Singapore",
                                                challenge: "Energy costs and crop optimization",
                                                solution: "AI-controlled environment and LED optimization",
                                                results: ["35% energy reduction", "50% faster growth", "90% water savings"],
                                                timeline: "4 months",
                                                farmer: "Sarah Lim, Urban Farmer"
                                            }
                                        ].map((story, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsx(Card, { className: "glass-heavy", children: _jsx(CardContent, { className: "p-6", children: _jsx("div", { className: "flex items-start justify-between mb-4", children: _jsxs("div", { className: "flex-grow", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: story.title }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-foreground-muted mb-4", children: [_jsxs("span", { children: ["\uD83D\uDCCD ", story.location] }), _jsxs("span", { children: ["\uD83D\uDE9C ", story.farmSize] }), _jsxs("span", { children: ["\u23F1\uFE0F ", story.timeline] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-2", children: "Challenge:" }), _jsx("p", { className: "text-foreground-muted", children: story.challenge })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-2", children: "Solution:" }), _jsx("p", { className: "text-foreground-muted", children: story.solution })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-2", children: "Results:" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: story.results.map((result, resultIndex) => (_jsx("div", { className: "bg-green-50 dark:bg-green-950/30 p-3 rounded-lg text-center", children: _jsx("div", { className: "text-green-600 dark:text-green-400 font-semibold", children: result }) }, resultIndex))) })] }), _jsx("div", { className: "pt-4 border-t border-gray-200 dark:border-gray-700", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold", children: story.farmer.charAt(0) }), _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: story.farmer }), _jsx("div", { className: "text-xs text-foreground-muted", children: "\"Smart farming transformed our operations\"" })] })] }) })] })] }) }) }) }) }, index))) }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Ready to Transform Your Farm?" }), _jsx("p", { className: "text-foreground-muted mb-6", children: "Join thousands of farmers who have increased productivity and profitability with smart agriculture." }), _jsxs("div", { className: "flex gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('success-stories'), children: [_jsx(FileText, { className: "w-4 h-4 mr-2" }), "More Success Stories"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('demo-request'), children: [_jsx(Calendar, { className: "w-4 h-4 mr-2" }), "Schedule Farm Visit"] })] })] }) })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16", children: _jsx(Card, { className: "glass w-full bg-gradient-to-r from-green-50/50 via-blue-50/50 to-green-50/50 dark:from-green-950/30 dark:via-blue-950/30 dark:to-green-950/30", children: _jsx(CardContent, { className: "p-12", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Cultivate the Future of Farming" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "Start your smart agriculture journey today. Increase yields, reduce costs, and farm sustainably with AI." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-4", children: [_jsx(Sprout, { className: "w-5 h-5 mr-2" }), "Start Smart Farming"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('contact'), size: "lg", className: "px-8 py-4", children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "Farm Consultation"] })] })] }) }) }) })] })] }));
}
//# sourceMappingURL=AgricultureDigitalPage.js.map