"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Lightbulb, Send, Star, TrendingUp, Users, Zap, Heart, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
const categories = [
    {
        id: "ai-tools",
        name: "AI Tools & Features",
        description: "New AI capabilities, models, or automation tools",
        icon: Zap,
        color: "blue",
        count: 124
    },
    {
        id: "user-experience",
        name: "User Experience",
        description: "Interface improvements, navigation, and usability",
        icon: Heart,
        color: "pink",
        count: 89
    },
    {
        id: "integrations",
        name: "Integrations",
        description: "Third-party connections and API improvements",
        icon: TrendingUp,
        color: "green",
        count: 67
    },
    {
        id: "community",
        name: "Community Features",
        description: "Collaboration, sharing, and social features",
        icon: Users,
        color: "purple",
        count: 45
    },
    {
        id: "performance",
        name: "Performance",
        description: "Speed, reliability, and optimization improvements",
        icon: Star,
        color: "yellow",
        count: 78
    },
    {
        id: "other",
        name: "Other Ideas",
        description: "General suggestions and feedback",
        icon: MessageSquare,
        color: "gray",
        count: 56
    }
];
const recentIdeas = [
    {
        title: "AI Code Review Assistant",
        description: "Automated code review with AI suggestions for improvements",
        category: "AI Tools",
        votes: 34,
        status: "Under Review"
    },
    {
        title: "Dark Mode for Mobile",
        description: "Add dark theme support for mobile applications",
        category: "User Experience",
        votes: 28,
        status: "In Progress"
    },
    {
        title: "Slack Integration",
        description: "Native Slack bot for project notifications and updates",
        category: "Integrations",
        votes: 22,
        status: "Planned"
    }
];
export function SubmitIdeaPage({ navigate }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState([5]);
    const [email, setEmail] = useState("");
    const [useCase, setUseCase] = useState("");
    const [impact, setImpact] = useState("");
    const [isSubscribeUpdates, setIsSubscribeUpdates] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };
    const getPriorityLabel = (value) => {
        if (value <= 2)
            return "Low Priority";
        if (value <= 4)
            return "Nice to Have";
        if (value <= 6)
            return "Important";
        if (value <= 8)
            return "High Priority";
        return "Critical";
    };
    const getPriorityColor = (value) => {
        if (value <= 2)
            return "text-gray-600";
        if (value <= 4)
            return "text-blue-600";
        if (value <= 6)
            return "text-yellow-600";
        if (value <= 8)
            return "text-orange-600";
        return "text-red-600";
    };
    if (isSubmitted) {
        return (_jsx("div", { className: "min-h-screen bg-background", children: _jsx("div", { className: "container mx-auto px-4 py-20", children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "max-w-2xl mx-auto text-center", children: [_jsx("div", { className: "w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8", children: _jsx(CheckCircle, { className: "w-10 h-10 text-green-600 dark:text-green-400" }) }), _jsx("h1", { className: "mb-6 gradient-text-blue", children: "Idea Submitted Successfully!" }), _jsx("p", { className: "text-xl text-foreground-muted mb-8", children: "Thank you for your suggestion! Our product team will review your idea and provide updates on its progress." }), _jsxs("div", { className: "glass rounded-3xl p-8 mb-8", children: [_jsx("h3", { className: "mb-4", children: "What happens next?" }), _jsxs("div", { className: "space-y-4 text-left", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }), _jsx("span", { children: "Your idea will be reviewed within 5-7 business days" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }), _jsx("span", { children: "You'll receive email updates on the status" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }), _jsx("span", { children: "Community voting will help prioritize development" })] })] })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('home'), className: "bg-blue-600 hover:bg-blue-700 text-white", children: [_jsx(ArrowRight, { className: "w-4 h-4 mr-2" }), "Back to Home"] }), _jsxs(Button, { variant: "outline", onClick: () => window.location.reload(), className: "border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950", children: [_jsx(Lightbulb, { className: "w-4 h-4 mr-2" }), "Submit Another Idea"] })] })] }) }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [Lightbulb, Star, TrendingUp, Users, Zap, Heart];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Lightbulb, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Product Feedback" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Share Your ", _jsx("span", { className: "gradient-text-blue", children: "Ideas" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Help us build the future of AI solutions. Your feedback drives our innovation and helps create tools that truly matter." })] }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [_jsx(MessageSquare, { className: "w-5 h-5 text-blue-500" }), _jsx("div", { className: "text-3xl font-bold gradient-text-blue", children: "500+" })] }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Ideas Submitted" })] }), _jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-blue-500" }), _jsx("div", { className: "text-3xl font-bold gradient-text-blue", children: "85+" })] }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Features Built" })] }), _jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [_jsx(Users, { className: "w-5 h-5 text-blue-500" }), _jsx("div", { className: "text-3xl font-bold gradient-text-blue", children: "100%" })] }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Community Driven" })] })] }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }), children: _jsxs("span", { className: "flex items-center gap-3", children: ["Submit Idea", _jsx(ArrowRight, { className: "w-5 h-5" })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-400/10", onClick: () => document.getElementById('recent-ideas')?.scrollIntoView({ behavior: 'smooth' }), children: "Browse Ideas" })] })] }) })] }), _jsx("div", { className: "container mx-auto px-4 py-20", children: _jsxs("div", { className: "grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto", id: "recent-ideas", children: [_jsx("div", { className: "lg:col-span-2", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, children: _jsxs(Card, { className: "glass p-8", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "mb-2", children: "Submit Your Idea" }), _jsx("p", { className: "text-foreground-muted", children: "Tell us about your suggestion, feature request, or improvement idea" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Idea Title *" }), _jsx(Input, { type: "text", value: title, onChange: (e) => setTitle(e.target.value), placeholder: "Give your idea a clear, descriptive title", required: true, className: "bg-input-background" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Category *" }), _jsxs(Select, { value: category, onValueChange: setCategory, required: true, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "Select a category" }) }), _jsx(SelectContent, { children: categories.map((cat) => (_jsx(SelectItem, { value: cat.id, children: cat.name }, cat.id))) })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Detailed Description *" }), _jsx(Textarea, { value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Describe your idea in detail. What problem does it solve? How would it work?", rows: 4, required: true, className: "bg-input-background resize-none" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Use Case / Problem It Solves" }), _jsx(Textarea, { value: useCase, onChange: (e) => setUseCase(e.target.value), placeholder: "Describe a specific scenario where this feature would be helpful", rows: 3, className: "bg-input-background resize-none" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Expected Impact" }), _jsx(Textarea, { value: impact, onChange: (e) => setImpact(e.target.value), placeholder: "How would this benefit users? What's the expected outcome?", rows: 3, className: "bg-input-background resize-none" })] }), _jsxs("div", { children: [_jsxs("label", { className: "block text-sm mb-4", children: ["Priority Level: ", _jsx("span", { className: `font-medium ${getPriorityColor(priority[0])}`, children: getPriorityLabel(priority[0]) })] }), _jsx(Slider, { value: priority, onValueChange: setPriority, max: 10, min: 1, step: 1, className: "w-full" }), _jsxs("div", { className: "flex justify-between text-xs text-foreground-muted mt-2", children: [_jsx("span", { children: "Low" }), _jsx("span", { children: "Medium" }), _jsx("span", { children: "High" }), _jsx("span", { children: "Critical" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Your Email (optional)" }), _jsx(Input, { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Get updates on your idea's progress", className: "bg-input-background" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "updates", checked: isSubscribeUpdates, onCheckedChange: setIsSubscribeUpdates }), _jsx("label", { htmlFor: "updates", className: "text-sm", children: "Subscribe to product updates and feature announcements" })] }), _jsx(Button, { type: "submit", disabled: isSubmitting, className: "w-full bg-blue-600 hover:bg-blue-700 text-white", children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" }), "Submitting..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { className: "w-4 h-4 mr-2" }), "Submit Idea"] })) }), _jsx("p", { className: "text-xs text-foreground-muted text-center", children: "By submitting, you agree that your idea may be used to improve our products. Ideas become part of our community feedback." })] })] }) }) }), _jsxs("div", { className: "space-y-8", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, children: _jsxs(Card, { className: "glass p-6", children: [_jsx("h3", { className: "mb-4", children: "Popular Categories" }), _jsx("div", { className: "space-y-3", children: categories.slice(0, 4).map((cat) => {
                                                    const Icon = cat.icon;
                                                    return (_jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer", onClick: () => setCategory(cat.id), children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Icon, { className: "w-4 h-4 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-medium", children: cat.name })] }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: cat.count })] }, cat.id));
                                                }) })] }) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, children: _jsxs(Card, { className: "glass p-6", children: [_jsx("h3", { className: "mb-4", children: "Recent Community Ideas" }), _jsx("div", { className: "space-y-4", children: recentIdeas.map((idea, index) => (_jsxs("div", { className: "border-l-2 border-blue-200 dark:border-blue-800 pl-4", children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsx("h4", { className: "text-sm font-medium line-clamp-1", children: idea.title }), _jsx(Badge, { variant: "outline", className: `text-xs ml-2 ${idea.status === 'In Progress' ? 'border-green-300 text-green-700 dark:text-green-400' :
                                                                        idea.status === 'Under Review' ? 'border-yellow-300 text-yellow-700 dark:text-yellow-400' :
                                                                            'border-blue-300 text-blue-700 dark:text-blue-400'}`, children: idea.status })] }), _jsx("p", { className: "text-xs text-foreground-muted mb-2 line-clamp-2", children: idea.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-xs text-foreground-muted", children: idea.category }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Heart, { className: "w-3 h-3 text-red-500" }), _jsx("span", { className: "text-xs", children: idea.votes })] })] })] }, index))) })] }) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, children: _jsxs(Card, { className: "glass p-6", children: [_jsx("h3", { className: "mb-4", children: "\uD83D\uDCA1 Tips for Great Ideas" }), _jsxs("div", { className: "space-y-3 text-sm text-foreground-muted", children: [_jsxs("div", { className: "flex items-start gap-2", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" }), _jsx("span", { children: "Be specific about the problem you're trying to solve" })] }), _jsxs("div", { className: "flex items-start gap-2", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" }), _jsx("span", { children: "Include real use cases and examples" })] }), _jsxs("div", { className: "flex items-start gap-2", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" }), _jsx("span", { children: "Explain the expected impact on users" })] }), _jsxs("div", { className: "flex items-start gap-2", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" }), _jsx("span", { children: "Check if similar ideas have been submitted" })] })] })] }) })] })] }) })] }));
}
//# sourceMappingURL=SubmitIdeaPage.js.map