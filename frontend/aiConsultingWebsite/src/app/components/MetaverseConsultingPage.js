"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Globe, Users, Gamepad2, ShoppingCart, GraduationCap, Building2, Headphones, Smartphone, Monitor, Brain, Zap, Target, TrendingUp, Award, CheckCircle2, ArrowRight, Star, Clock, Settings, Eye, Heart, Lightbulb, Network, Database, Shield, Rocket, Calendar, MessageSquare, FileText, Download, Play, Code, Layers } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
export function MetaverseConsultingPage({ navigate }) {
    const [selectedSolution, setSelectedSolution] = useState("virtual-commerce");
    const metaverseSolutions = [
        {
            id: "virtual-commerce",
            title: "Virtual Commerce",
            description: "AI-powered virtual stores and immersive shopping experiences",
            icon: ShoppingCart,
            applications: [
                "3D virtual showrooms",
                "AI shopping assistants",
                "Virtual try-on technology",
                "Immersive product demos",
                "Social commerce experiences",
                "Cross-platform integration"
            ],
            technologies: ["WebXR", "3D Modeling", "AI Avatars", "Blockchain", "NFTs"],
            roi: "250-400%",
            timeline: "8-16 weeks",
            maturity: "Production Ready",
            industries: ["Retail", "Fashion", "Real Estate", "Automotive"]
        },
        {
            id: "virtual-events",
            title: "Virtual Events & Meetings",
            description: "Next-generation virtual conferences and collaboration spaces",
            icon: Users,
            applications: [
                "Virtual conference halls",
                "AI-powered networking",
                "Interactive exhibitions",
                "Real-time collaboration",
                "Multi-platform streaming",
                "Analytics and insights"
            ],
            technologies: ["Spatial Audio", "Motion Capture", "WebRTC", "AI Translation"],
            roi: "180-300%",
            timeline: "6-12 weeks",
            maturity: "Production Ready",
            industries: ["Events", "Corporate", "Education", "Healthcare"]
        },
        {
            id: "virtual-training",
            title: "Virtual Training & Education",
            description: "Immersive learning experiences with AI-powered personalization",
            icon: GraduationCap,
            applications: [
                "VR training simulations",
                "AI tutoring systems",
                "Gamified learning",
                "Skill assessment",
                "Progress tracking",
                "Collaborative learning"
            ],
            technologies: ["VR/AR", "AI Tutors", "Learning Analytics", "Gamification"],
            roi: "200-350%",
            timeline: "10-18 weeks",
            maturity: "Emerging",
            industries: ["Education", "Healthcare", "Manufacturing", "Aviation"]
        },
        {
            id: "virtual-workspaces",
            title: "Virtual Workspaces",
            description: "AI-enhanced virtual offices and remote collaboration environments",
            icon: Building2,
            applications: [
                "Virtual office spaces",
                "AI meeting assistants",
                "Collaborative whiteboards",
                "Virtual team building",
                "Remote presence",
                "Productivity analytics"
            ],
            technologies: ["Spatial Computing", "AI Assistants", "Cloud Rendering"],
            roi: "150-280%",
            timeline: "12-20 weeks",
            maturity: "Developing",
            industries: ["Technology", "Finance", "Consulting", "Media"]
        }
    ];
    const metaversePlatforms = [
        {
            name: "Meta Horizon",
            description: "Social VR platform for immersive experiences",
            strengths: ["Large user base", "Social features", "Developer tools"],
            integration: "High",
            accessibility: "Mobile + VR",
            businessModel: "B2C focused"
        },
        {
            name: "Microsoft Mesh",
            description: "Enterprise-focused mixed reality platform",
            strengths: ["Enterprise integration", "HoloLens support", "Teams integration"],
            integration: "Very High",
            accessibility: "All devices",
            businessModel: "B2B focused"
        },
        {
            name: "NVIDIA Omniverse",
            description: "Collaborative 3D creation and simulation platform",
            strengths: ["High fidelity", "Real-time collaboration", "AI integration"],
            integration: "Medium",
            accessibility: "Desktop + VR",
            businessModel: "Enterprise/Creator"
        },
        {
            name: "Roblox",
            description: "User-generated content and gaming platform",
            strengths: ["Content creation", "Young demographics", "Monetization"],
            integration: "Medium",
            accessibility: "All devices",
            businessModel: "Creator economy"
        },
        {
            name: "Web-based Solutions",
            description: "Custom WebXR solutions accessible via browsers",
            strengths: ["No downloads", "Cross-platform", "Easy access"],
            integration: "Custom",
            accessibility: "All devices",
            businessModel: "Flexible"
        }
    ];
    const implementationPhases = [
        {
            phase: "Strategy & Design",
            duration: "3-5 weeks",
            activities: [
                "Metaverse strategy development",
                "User experience design",
                "Platform selection",
                "Technical architecture",
                "3D environment planning",
                "Content strategy"
            ],
            deliverables: [
                "Metaverse strategy document",
                "UX/UI designs",
                "Technical blueprint",
                "3D environment concepts"
            ]
        },
        {
            phase: "3D Development",
            duration: "6-10 weeks",
            activities: [
                "3D environment creation",
                "Avatar development",
                "Interactive elements",
                "Physics simulation",
                "Lighting and textures",
                "Performance optimization"
            ],
            deliverables: [
                "3D environments",
                "Avatar systems",
                "Interactive prototypes",
                "Performance reports"
            ]
        },
        {
            phase: "AI Integration",
            duration: "4-8 weeks",
            activities: [
                "AI assistant development",
                "Personalization algorithms",
                "Natural language processing",
                "Behavioral analytics",
                "Recommendation systems",
                "Automated moderation"
            ],
            deliverables: [
                "AI-powered features",
                "Personalization engine",
                "Analytics dashboard",
                "Moderation systems"
            ]
        },
        {
            phase: "Launch & Scale",
            duration: "2-4 weeks",
            activities: [
                "Platform deployment",
                "User onboarding",
                "Performance monitoring",
                "Community management",
                "Content moderation",
                "Continuous optimization"
            ],
            deliverables: [
                "Live metaverse platform",
                "User onboarding system",
                "Community guidelines",
                "Monitoring dashboard"
            ]
        }
    ];
    const metaverseMetrics = [
        { label: "User Engagement", value: "300%+", icon: Users },
        { label: "Session Duration", value: "45 min avg", icon: Clock },
        { label: "Conversion Rate", value: "85%+", icon: TrendingUp },
        { label: "Brand Recall", value: "90%+", icon: Brain },
        { label: "Cost Efficiency", value: "60%", icon: Award },
        { label: "Global Reach", value: "24/7", icon: Globe }
    ];
    const useCases = [
        {
            title: "Virtual Showroom - Automotive",
            industry: "Automotive",
            challenge: "Remote car sales and virtual test drives",
            solution: "Immersive VR showroom with AI configurator",
            results: ["400% increase in engagement", "250% boost in conversions", "50% reduction in sales cycle"],
            timeline: "12 weeks",
            client: "Premium Auto Dealer"
        },
        {
            title: "Virtual Campus - Education",
            industry: "Education",
            challenge: "Remote learning and campus tours",
            solution: "Interactive virtual campus with AI tutors",
            results: ["300% increase in virtual tours", "180% improvement in retention", "90% student satisfaction"],
            timeline: "16 weeks",
            client: "International University"
        },
        {
            title: "Virtual Training - Healthcare",
            industry: "Healthcare",
            challenge: "Medical procedure training at scale",
            solution: "VR surgery simulation with AI feedback",
            results: ["85% improvement in skill retention", "70% reduction in training costs", "95% trainee satisfaction"],
            timeline: "20 weeks",
            client: "Medical Training Institute"
        }
    ];
    const selectedSolutionData = metaverseSolutions.find(sol => sol.id === selectedSolution);
    const getMaturityColor = (maturity) => {
        switch (maturity) {
            case "Production Ready": return "text-green-600 bg-green-100 dark:bg-green-900/30";
            case "Emerging": return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30";
            case "Developing": return "text-blue-600 bg-blue-100 dark:bg-blue-900/30";
            default: return "text-gray-600 bg-gray-100 dark:bg-gray-800";
        }
    };
    const getIntegrationColor = (integration) => {
        switch (integration) {
            case "Very High": return "text-green-600";
            case "High": return "text-blue-600";
            case "Medium": return "text-yellow-600";
            case "Custom": return "text-purple-600";
            default: return "text-gray-600";
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-purple-100/40 dark:from-purple-950/20 dark:via-blue-950/10 dark:to-purple-900/20" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(139,69,244,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-purple-200/30 dark:bg-purple-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-blue-300/40 dark:bg-blue-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-purple-400/35 dark:bg-purple-400/25 rounded-full blur-md float-delayed-2" }), _jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5", children: _jsxs("div", { className: "relative w-64 h-64", children: [_jsx("div", { className: "absolute inset-0 border-2 border-purple-400 rounded-full animate-ping", style: { animationDuration: '4s' } }), _jsx("div", { className: "absolute inset-4 border-2 border-blue-400 rounded-full animate-ping", style: { animationDuration: '3s', animationDelay: '1s' } }), _jsx("div", { className: "absolute inset-8 border-2 border-purple-300 rounded-full animate-ping", style: { animationDuration: '2s', animationDelay: '2s' } })] }) })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(Globe, { className: "w-12 h-12 text-purple-600 dark:text-purple-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "Metaverse" }), ' ', _jsx("span", { className: "text-purple-600", children: "Consulting" }), ' ', _jsx("span", { className: "gradient-text-blue-light", children: "Solutions" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Build immersive virtual worlds and AI-powered experiences. Transform your business with cutting-edge metaverse technologies and virtual commerce solutions." }), _jsxs("div", { className: "flex justify-center flex-wrap gap-4 mb-8", children: [_jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2", children: [_jsx(Headphones, { className: "w-4 h-4 mr-2" }), "VR/AR"] }), _jsxs(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2", children: [_jsx(Brain, { className: "w-4 h-4 mr-2" }), "AI Avatars"] }), _jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-4 py-2", children: [_jsx(Layers, { className: "w-4 h-4 mr-2" }), "3D Worlds"] }), _jsxs(Badge, { className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 px-4 py-2", children: [_jsx(Network, { className: "w-4 h-4 mr-2" }), "Social Commerce"] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8", children: metaverseMetrics.map((metric, index) => {
                                                const Icon = metric.icon;
                                                return (_jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx(Icon, { className: "w-6 h-6 text-purple-600 mx-auto mb-2" }), _jsx("div", { className: "text-lg font-bold text-purple-600", children: metric.value }), _jsx("div", { className: "text-xs text-foreground-muted", children: metric.label })] }, index));
                                            }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Globe, { className: "w-5 h-5 mr-2" }), "Start Metaverse Project"] }), _jsxs(Button, { onClick: () => navigate('contact'), variant: "outline", size: "lg", className: "glass-blue-light border-blue-200 dark:border-blue-700 hover:glass-blue transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "Metaverse Consultation"] })] })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "solutions", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 glass", children: [_jsx(TabsTrigger, { value: "solutions", children: "Metaverse Solutions" }), _jsx(TabsTrigger, { value: "platforms", children: "Platforms" }), _jsx(TabsTrigger, { value: "implementation", children: "Implementation" }), _jsx(TabsTrigger, { value: "case-studies", children: "Case Studies" })] }), _jsx(TabsContent, { value: "solutions", className: "space-y-8 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Brain, { className: "w-6 h-6 text-purple-600" }), "AI-Powered Metaverse Solutions"] }), _jsx(CardDescription, { children: "Comprehensive virtual world solutions for business transformation" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: metaverseSolutions.map((solution, index) => {
                                                        const Icon = solution.icon;
                                                        const isSelected = solution.id === selectedSolution;
                                                        return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: `cursor-pointer ${isSelected ? 'ring-2 ring-purple-500' : ''}`, onClick: () => setSelectedSolution(solution.id), children: _jsx(Card, { className: `glass h-full card-hover ${isSelected ? 'bg-purple-50/50 dark:bg-purple-950/30' : ''}`, children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl", children: _jsx(Icon, { className: "w-8 h-8 text-purple-600 dark:text-purple-400" }) }) }), _jsx("h3", { className: "font-semibold text-lg mb-2", children: solution.title }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: solution.description }), _jsxs("div", { className: "space-y-2", children: [_jsx(Badge, { className: getMaturityColor(solution.maturity), children: solution.maturity }), _jsxs("div", { className: "text-xs text-foreground-muted", children: ["ROI: ", solution.roi] })] })] }) }) }, solution.id));
                                                    }) }), selectedSolutionData && (_jsxs(Card, { className: "glass bg-purple-50/50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-700", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "text-purple-700 dark:text-purple-300", children: [selectedSolutionData.title, " - Implementation Details"] }), _jsx(CardDescription, { children: "Applications, technologies, and business impact" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Key Applications:" }), _jsx("div", { className: "space-y-2", children: selectedSolutionData.applications.map((app, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }), _jsx("span", { className: "text-sm", children: app })] }, index))) })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Technologies:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: selectedSolutionData.technologies.map((tech, index) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: tech }, index))) }), _jsxs("div", { className: "pt-4 border-t border-purple-200 dark:border-purple-700", children: [_jsx("div", { className: "text-sm font-medium mb-1", children: "Target Industries:" }), _jsx("div", { className: "flex flex-wrap gap-1", children: selectedSolutionData.industries.map((industry, index) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: industry }, index))) })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Project Details:" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "glass-blue-light p-3 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium", children: "Expected ROI:" }), _jsx("div", { className: "text-lg font-bold text-purple-600", children: selectedSolutionData.roi })] }), _jsxs("div", { className: "glass-blue-light p-3 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium", children: "Timeline:" }), _jsx("div", { className: "text-lg font-bold text-blue-600", children: selectedSolutionData.timeline })] })] }), _jsxs(Button, { className: "w-full", onClick: () => navigate('demo-request'), children: [_jsx(Play, { className: "w-4 h-4 mr-2" }), "Request Demo"] })] })] }) })] }))] })] }) }), _jsxs(TabsContent, { value: "platforms", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Layers, { className: "w-6 h-6 text-purple-600" }), "Metaverse Platform Ecosystem"] }), _jsx(CardDescription, { children: "Choose the right platform for your virtual world deployment" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-6", children: metaversePlatforms.map((platform, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: "glass-blue-light p-6 rounded-lg", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg", children: platform.name }), _jsx("p", { className: "text-sm text-foreground-muted mt-1", children: platform.description })] }), _jsxs(Badge, { className: getIntegrationColor(platform.integration), children: [platform.integration, " Integration"] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium text-sm mb-2", children: "Strengths:" }), _jsx("div", { className: "space-y-1", children: platform.strengths.map((strength, idx) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(Star, { className: "w-3 h-3 text-yellow-600" }), _jsx("span", { children: strength })] }, idx))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-sm mb-2", children: "Details:" }), _jsxs("div", { className: "space-y-1 text-sm", children: [_jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "Access:" }), " ", platform.accessibility] }), _jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "Model:" }), " ", platform.businessModel] })] })] }), _jsx("div", { className: "flex items-center", children: _jsxs(Button, { variant: "outline", size: "sm", className: "w-full", children: [_jsx(ArrowRight, { className: "w-3 h-3 mr-1" }), "Learn More"] }) })] })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Platform Selection Guide" }), _jsx(CardDescription, { children: "Choose based on your specific requirements" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(Building2, { className: "w-12 h-12 text-blue-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Enterprise Solutions" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "For business meetings, training, and collaboration" }), _jsx(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", children: "Microsoft Mesh, Custom WebXR" })] }), _jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(ShoppingCart, { className: "w-12 h-12 text-green-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Virtual Commerce" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "For retail, showrooms, and e-commerce experiences" }), _jsx(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: "Custom WebXR, Meta Horizon" })] }), _jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(Users, { className: "w-12 h-12 text-purple-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Social Experiences" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "For community building and social interaction" }), _jsx(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", children: "Meta Horizon, Roblox" })] })] }) })] })] }), _jsxs(TabsContent, { value: "implementation", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Settings, { className: "w-6 h-6 text-purple-600" }), "Metaverse Implementation Process"] }), _jsx(CardDescription, { children: "Step-by-step approach to building your virtual world" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-8", children: implementationPhases.map((phase, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "relative", children: [index < implementationPhases.length - 1 && (_jsx("div", { className: "absolute left-6 top-16 w-0.5 h-32 bg-purple-200 dark:bg-purple-700" })), _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex-shrink-0", children: _jsx("div", { className: "w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: index + 1 }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-xl font-semibold", children: phase.phase }), _jsx(Badge, { variant: "outline", children: phase.duration })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Key Activities:" }), _jsx("div", { className: "space-y-2", children: phase.activities.map((activity, actIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(ArrowRight, { className: "w-3 h-3 text-purple-600" }), _jsx("span", { children: activity })] }, actIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Deliverables:" }), _jsx("div", { className: "space-y-2", children: phase.deliverables.map((deliverable, delIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle2, { className: "w-3 h-3 text-green-600" }), _jsx("span", { children: deliverable })] }, delIndex))) })] })] })] })] })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Why Choose Metaverse Solutions?" }), _jsx(CardDescription, { children: "Benefits of implementing virtual world experiences" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(TrendingUp, { className: "w-8 h-8 text-purple-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Enhanced Engagement" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "3x higher user engagement and 300% longer session duration" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Globe, { className: "w-8 h-8 text-blue-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Global Accessibility" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "24/7 access from anywhere, breaking geographical barriers" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Award, { className: "w-8 h-8 text-green-600" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Cost Efficiency" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "60% reduction in event costs and physical infrastructure needs" })] })] }) })] })] }), _jsxs(TabsContent, { value: "case-studies", className: "space-y-6 mt-8", children: [_jsx("div", { className: "space-y-6", children: useCases.map((useCase, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsx(Card, { className: "glass-heavy", children: _jsx(CardContent, { className: "p-6", children: _jsx("div", { className: "flex items-start justify-between mb-4", children: _jsxs("div", { className: "flex-grow", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: useCase.title }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-foreground-muted mb-4", children: [_jsxs("span", { children: ["\uD83C\uDFE2 ", useCase.industry] }), _jsxs("span", { children: ["\u23F1\uFE0F ", useCase.timeline] }), _jsxs("span", { children: ["\uD83D\uDC64 ", useCase.client] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-2", children: "Challenge:" }), _jsx("p", { className: "text-foreground-muted", children: useCase.challenge })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-2", children: "Solution:" }), _jsx("p", { className: "text-foreground-muted", children: useCase.solution })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-2", children: "Results:" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: useCase.results.map((result, resultIndex) => (_jsx("div", { className: "bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg text-center", children: _jsx("div", { className: "text-purple-600 dark:text-purple-400 font-semibold", children: result }) }, resultIndex))) })] })] })] }) }) }) }) }, index))) }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Ready to Enter the Metaverse?" }), _jsx("p", { className: "text-foreground-muted mb-6", children: "Join leading brands creating immersive virtual experiences that engage and convert." }), _jsxs("div", { className: "flex gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('success-stories'), children: [_jsx(FileText, { className: "w-4 h-4 mr-2" }), "More Case Studies"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('demo-request'), children: [_jsx(Calendar, { className: "w-4 h-4 mr-2" }), "Schedule Demo"] })] })] }) })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16", children: _jsx(Card, { className: "glass w-full bg-gradient-to-r from-purple-50/50 via-blue-50/50 to-purple-50/50 dark:from-purple-950/30 dark:via-blue-950/30 dark:to-purple-950/30", children: _jsx(CardContent, { className: "p-12", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Step Into the Future of Business" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "Create immersive experiences that engage customers, train employees, and transform your business model." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-4", children: [_jsx(Globe, { className: "w-5 h-5 mr-2" }), "Launch Metaverse Project"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('contact'), size: "lg", className: "px-8 py-4", children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "Virtual Consultation"] })] })] }) }) }) })] })] }));
}
//# sourceMappingURL=MetaverseConsultingPage.js.map