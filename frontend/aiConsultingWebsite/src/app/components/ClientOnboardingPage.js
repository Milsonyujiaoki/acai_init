"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { UserCheck, CheckCircle2, Clock, Users, Settings, BookOpen, Target, Calendar, ArrowRight, Rocket, Shield, Zap, Brain, HeartHandshake, FileText, MessageSquare, Star, Award, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
export function ClientOnboardingPage({ navigate }) {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 6;
    const onboardingSteps = [
        {
            id: 1,
            title: "Welcome & Discovery",
            description: "Understanding your business goals and AI readiness",
            icon: HeartHandshake,
            duration: "Week 1",
            status: "completed",
            activities: [
                "Initial consultation call",
                "Business requirements analysis",
                "Current state assessment",
                "Goal alignment workshop"
            ]
        },
        {
            id: 2,
            title: "Strategic Planning",
            description: "Developing your customized AI transformation roadmap",
            icon: Target,
            duration: "Week 2",
            status: "current",
            activities: [
                "AI strategy development",
                "Technology stack planning",
                "Resource allocation",
                "Timeline establishment"
            ]
        },
        {
            id: 3,
            title: "Team Setup",
            description: "Assembling your dedicated AI consulting team",
            icon: Users,
            duration: "Week 3",
            status: "upcoming",
            activities: [
                "Team member assignment",
                "Role and responsibility mapping",
                "Communication protocols",
                "Project management setup"
            ]
        },
        {
            id: 4,
            title: "Platform Access",
            description: "Getting you set up with our AI consulting platform",
            icon: Settings,
            duration: "Week 4",
            status: "upcoming",
            activities: [
                "Platform account creation",
                "Access permissions setup",
                "Tool configuration",
                "Integration planning"
            ]
        },
        {
            id: 5,
            title: "Knowledge Transfer",
            description: "Training your team on our methodologies and tools",
            icon: BookOpen,
            duration: "Week 5",
            status: "upcoming",
            activities: [
                "Methodology training",
                "Platform orientation",
                "Best practices sharing",
                "Q&A sessions"
            ]
        },
        {
            id: 6,
            title: "Project Launch",
            description: "Officially launching your AI transformation journey",
            icon: Rocket,
            duration: "Week 6",
            status: "upcoming",
            activities: [
                "Project kickoff meeting",
                "Milestone planning",
                "Success metrics definition",
                "Regular check-in scheduling"
            ]
        }
    ];
    const clientResources = [
        {
            title: "Client Portal Access",
            description: "Your dedicated dashboard for project tracking and resources",
            icon: Shield,
            link: "client-portal"
        },
        {
            title: "Knowledge Base",
            description: "Comprehensive guides and documentation library",
            icon: BookOpen,
            link: "knowledge-base"
        },
        {
            title: "Training Materials",
            description: "Video tutorials and learning resources",
            icon: Award,
            link: "training-certification"
        },
        {
            title: "Support Center",
            description: "24/7 support and expert consultation",
            icon: MessageSquare,
            link: "support"
        }
    ];
    const successMetrics = [
        { label: "Client Satisfaction", value: 98, color: "text-green-600" },
        { label: "On-time Delivery", value: 95, color: "text-blue-600" },
        { label: "ROI Achievement", value: 87, color: "text-purple-600" },
        { label: "Knowledge Transfer", value: 92, color: "text-orange-600" }
    ];
    const getStepStatus = (stepId) => {
        if (stepId < currentStep)
            return "completed";
        if (stepId === currentStep)
            return "current";
        return "upcoming";
    };
    const getStepColor = (status) => {
        switch (status) {
            case "completed": return "text-green-600 bg-green-100 dark:bg-green-900/30";
            case "current": return "text-blue-600 bg-blue-100 dark:bg-blue-900/30";
            default: return "text-gray-400 bg-gray-100 dark:bg-gray-800";
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/60 dark:from-blue-950/40 dark:via-background dark:to-blue-900/30" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-blue-300/40 dark:bg-blue-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-blue-400/35 dark:bg-blue-400/25 rounded-full blur-md float-delayed-2" })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(UserCheck, { className: "w-12 h-12 text-blue-600 dark:text-blue-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "Welcome to" }), ' ', _jsx("span", { className: "gradient-text-blue-light", children: "Delibix" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Your streamlined onboarding journey to AI transformation success. We'll guide you every step of the way." }), _jsxs("div", { className: "max-w-md mx-auto mb-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "text-sm font-medium text-foreground-muted", children: "Overall Progress" }), _jsxs("span", { className: "text-sm font-medium text-blue-600", children: [Math.round((currentStep / totalSteps) * 100), "%"] })] }), _jsx(Progress, { value: (currentStep / totalSteps) * 100, className: "h-2" })] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { onClick: () => navigate('contact'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Rocket, { className: "w-5 h-5 mr-2" }), "Start Your Journey"] }), _jsxs(Button, { onClick: () => navigate('demo-request'), variant: "outline", size: "lg", className: "glass-blue-light border-blue-200 dark:border-blue-700 hover:glass-blue transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Calendar, { className: "w-5 h-5 mr-2" }), "Schedule Demo"] })] })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "journey", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-3 glass", children: [_jsx(TabsTrigger, { value: "journey", children: "Onboarding Journey" }), _jsx(TabsTrigger, { value: "resources", children: "Client Resources" }), _jsx(TabsTrigger, { value: "success", children: "Success Metrics" })] }), _jsxs(TabsContent, { value: "journey", className: "space-y-8 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-6 h-6 text-blue-600" }), "Your 6-Week Onboarding Journey"] }), _jsx(CardDescription, { children: "A structured approach to ensure your success with AI transformation" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-6", children: onboardingSteps.map((step, index) => {
                                                        const Icon = step.icon;
                                                        const status = getStepStatus(step.id);
                                                        return (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "relative", children: [index < onboardingSteps.length - 1 && (_jsx("div", { className: "absolute left-6 top-16 w-0.5 h-16 bg-blue-200 dark:bg-blue-700" })), _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: `p-3 rounded-xl ${getStepColor(status)} flex-shrink-0`, children: _jsx(Icon, { className: "w-6 h-6" }) }), _jsxs("div", { className: "flex-grow min-w-0", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-lg font-semibold", children: step.title }), _jsx(Badge, { variant: "outline", className: "text-xs", children: step.duration }), status === "completed" && (_jsx(CheckCircle2, { className: "w-5 h-5 text-green-600" }))] }), _jsx("p", { className: "text-foreground-muted mb-4", children: step.description }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: step.activities.map((activity, actIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-blue-400 rounded-full" }), _jsx("span", { children: activity })] }, actIndex))) })] })] })] }, step.id));
                                                    }) }) })] }), _jsxs(Card, { className: "glass w-full bg-blue-50/50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-700", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "text-blue-700 dark:text-blue-300", children: ["Current Step: ", onboardingSteps[currentStep - 1]?.title] }), _jsx(CardDescription, { children: "What you can expect this week" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-5 h-5 text-blue-600" }), _jsxs("span", { className: "font-medium", children: ["Duration: ", onboardingSteps[currentStep - 1]?.duration] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: onboardingSteps[currentStep - 1]?.activities.map((activity, index) => (_jsxs("div", { className: "flex items-center gap-3 p-3 glass-blue-light rounded-lg", children: [_jsx(ArrowRight, { className: "w-4 h-4 text-blue-600" }), _jsx("span", { children: activity })] }, index))) })] }) })] })] }), _jsxs(TabsContent, { value: "resources", className: "space-y-6 mt-8", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: clientResources.map((resource, index) => {
                                            const Icon = resource.icon;
                                            return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsxs(Card, { className: "glass-heavy h-full card-hover cursor-pointer", onClick: () => navigate(resource.link), children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl", children: _jsx(Icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsx("div", { children: _jsx(CardTitle, { className: "text-lg", children: resource.title }) })] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-foreground-muted", children: resource.description }), _jsx("div", { className: "mt-4", children: _jsxs(Button, { variant: "outline", size: "sm", className: "group", children: ["Access Resource", _jsx(ArrowRight, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" })] }) })] })] }) }, index));
                                        }) }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Quick Links" }), _jsx(CardDescription, { children: "Frequently accessed resources during onboarding" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [_jsxs(Button, { variant: "outline", onClick: () => navigate('faq'), className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(MessageSquare, { className: "w-5 h-5" }), _jsx("span", { className: "text-sm", children: "FAQ" })] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('documentation'), className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(FileText, { className: "w-5 h-5" }), _jsx("span", { className: "text-sm", children: "Docs" })] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('team'), className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(Users, { className: "w-5 h-5" }), _jsx("span", { className: "text-sm", children: "Your Team" })] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('support'), className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(HeartHandshake, { className: "w-5 h-5" }), _jsx("span", { className: "text-sm", children: "Support" })] })] }) })] })] }), _jsxs(TabsContent, { value: "success", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-6 h-6 text-green-600" }), "Our Onboarding Success Metrics"] }), _jsx(CardDescription, { children: "Why 98% of our clients successfully complete onboarding" })] }), _jsx(CardContent, { children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: successMetrics.map((metric, index) => (_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "font-medium", children: metric.label }), _jsxs("span", { className: `font-bold ${metric.color}`, children: [metric.value, "%"] })] }), _jsx(Progress, { value: metric.value, className: "h-2" })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Client Testimonials" }), _jsx(CardDescription, { children: "What our clients say about the onboarding experience" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-4 p-4 glass-blue-light rounded-lg", children: [_jsx("div", { className: "flex items-center gap-1", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }, i))) }), _jsx("p", { className: "text-sm italic", children: "\"The onboarding process was incredibly smooth and well-structured. Our team was productive from day one.\"" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold", children: "A" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-sm", children: "Alex Chen" }), _jsx("p", { className: "text-xs text-foreground-muted", children: "CTO, TechCorp" })] })] })] }), _jsxs("div", { className: "space-y-4 p-4 glass-blue-light rounded-lg", children: [_jsx("div", { className: "flex items-center gap-1", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }, i))) }), _jsx("p", { className: "text-sm italic", children: "\"Delibix's systematic approach to onboarding gave us confidence and clarity about our AI journey.\"" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold", children: "S" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-sm", children: "Sarah Johnson" }), _jsx("p", { className: "text-xs text-foreground-muted", children: "VP Innovation, RetailMax" })] })] })] })] }) })] })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16 text-center", children: _jsx(Card, { className: "glass w-full bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 dark:from-blue-950/30 dark:via-background dark:to-blue-950/30", children: _jsx(CardContent, { className: "p-12", children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Ready to Start Your AI Transformation?" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "Join hundreds of successful companies who have transformed their business with our proven onboarding process." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('contact'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-4", children: [_jsx(Rocket, { className: "w-5 h-5 mr-2" }), "Begin Onboarding"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('demo-request'), size: "lg", className: "px-8 py-4", children: [_jsx(Calendar, { className: "w-5 h-5 mr-2" }), "Schedule Consultation"] })] })] }) }) }) })] })] }));
}
//# sourceMappingURL=ClientOnboardingPage.js.map