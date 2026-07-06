"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, Check, Star, Zap, Brain, Users, TrendingUp, Calendar, Bell, Settings, Shield, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
const newsletters = [
    {
        id: "ai-insights",
        name: "AI Insights Weekly",
        description: "Latest AI trends, breakthroughs, and industry analysis. Our most popular newsletter.",
        frequency: "Weekly",
        icon: Brain,
        color: "blue",
        subscribers: 15420,
        featured: true
    },
    {
        id: "product-updates",
        name: "Product Updates",
        description: "New features, tools, and platform announcements from Delibix.",
        frequency: "Bi-weekly",
        icon: Zap,
        color: "blue",
        subscribers: 12890
    },
    {
        id: "case-studies",
        name: "Success Stories",
        description: "Real client case studies, ROI insights, and implementation strategies.",
        frequency: "Monthly",
        icon: Star,
        color: "blue",
        subscribers: 8750
    },
    {
        id: "community",
        name: "Community Digest",
        description: "Events, workshops, networking opportunities, and community highlights.",
        frequency: "Monthly",
        icon: Users,
        color: "blue",
        subscribers: 6340
    },
    {
        id: "market-trends",
        name: "Market Intelligence",
        description: "Industry reports, market analysis, and competitive insights.",
        frequency: "Monthly",
        icon: TrendingUp,
        color: "blue",
        subscribers: 9820
    }
];
const benefits = [
    {
        icon: Brain,
        title: "Expert Insights",
        description: "Curated AI knowledge from industry leaders"
    },
    {
        icon: Zap,
        title: "Early Access",
        description: "Be first to know about new features and tools"
    },
    {
        icon: Star,
        title: "Success Stories",
        description: "Learn from real client implementations"
    },
    {
        icon: Users,
        title: "Community Access",
        description: "Connect with fellow AI practitioners"
    }
];
export function NewsletterPage({ navigate }) {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [selectedNewsletters, setSelectedNewsletters] = useState(["ai-insights"]);
    const [frequency, setFrequency] = useState("weekly");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const handleNewsletterToggle = (newsletterId) => {
        setSelectedNewsletters(prev => prev.includes(newsletterId)
            ? prev.filter(id => id !== newsletterId)
            : [...prev, newsletterId]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubscribed(true);
    };
    if (isSubscribed) {
        return (_jsx("div", { className: "min-h-screen bg-background", children: _jsx("div", { className: "container mx-auto px-4 py-20", children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "max-w-2xl mx-auto text-center", children: [_jsx("div", { className: "w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8", children: _jsx(Check, { className: "w-10 h-10 text-green-600 dark:text-green-400" }) }), _jsx("h1", { className: "mb-6 gradient-text-blue", children: "Welcome to the Community!" }), _jsx("p", { className: "text-xl text-foreground-muted mb-8", children: "Thank you for subscribing! You'll receive your first newsletter within 24 hours." }), _jsxs("div", { className: "glass rounded-3xl p-8 mb-8", children: [_jsx("h3", { className: "mb-4", children: "Your Subscription Details" }), _jsxs("div", { className: "space-y-3 text-left", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-foreground-muted", children: "Email:" }), _jsx("span", { children: email })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-foreground-muted", children: "Newsletters:" }), _jsxs("span", { children: [selectedNewsletters.length, " selected"] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-foreground-muted", children: "Frequency:" }), _jsx("span", { className: "capitalize", children: frequency })] })] })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('home'), className: "bg-blue-600 hover:bg-blue-700 text-white", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Back to Home"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('community'), className: "border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950", children: [_jsx(Users, { className: "w-4 h-4 mr-2" }), "Join Community"] })] })] }) }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [Mail, Bell, Send, Star, Zap, Users];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Mail, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Newsletter Subscription" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Stay Ahead with ", _jsx("span", { className: "gradient-text-blue", children: "AI Insights" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Join 50,000+ AI professionals receiving curated insights, exclusive content, and early access to Delibix innovations." })] }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [_jsx(Users, { className: "w-5 h-5 text-blue-500" }), _jsx("div", { className: "text-3xl font-bold gradient-text-blue", children: "50K+" })] }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Subscribers" })] }), _jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [_jsx(Bell, { className: "w-5 h-5 text-blue-500" }), _jsx("div", { className: "text-3xl font-bold gradient-text-blue", children: "Weekly" })] }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Insights" })] }), _jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [_jsx(Star, { className: "w-5 h-5 text-blue-500" }), _jsx("div", { className: "text-3xl font-bold gradient-text-blue", children: "100%" })] }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Free" })] })] }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }), children: _jsxs("span", { className: "flex items-center gap-3", children: ["Subscribe Now", _jsx(ArrowRight, { className: "w-5 h-5" })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-400/10", onClick: () => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }), children: "View Benefits" })] })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "mb-16", children: [_jsx("h2", { className: "text-center mb-8", children: "Choose Your Newsletters" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12", children: newsletters.map((newsletter, index) => {
                                    const Icon = newsletter.icon;
                                    const isSelected = selectedNewsletters.includes(newsletter.id);
                                    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 + index * 0.1 }, children: _jsxs(Card, { className: `relative p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${isSelected
                                                ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950/30'
                                                : 'hover:shadow-md'} ${newsletter.featured ? 'border-blue-300 dark:border-blue-700' : ''}`, onClick: () => handleNewsletterToggle(newsletter.id), children: [newsletter.featured && (_jsx(Badge, { className: "absolute -top-2 -right-2 bg-blue-600 text-white", children: "Most Popular" })), _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: `w-12 h-12 bg-${newsletter.color}-100 dark:bg-${newsletter.color}-900/30 rounded-lg flex items-center justify-center flex-shrink-0`, children: _jsx(Icon, { className: `w-6 h-6 text-${newsletter.color}-600 dark:text-${newsletter.color}-400` }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx("h3", { className: "font-semibold text-sm", children: newsletter.name }), _jsx(Badge, { variant: "outline", className: "text-xs", children: newsletter.frequency })] }), _jsx("p", { className: "text-sm text-foreground-muted mb-3 line-clamp-2", children: newsletter.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "text-xs text-foreground-muted", children: [newsletter.subscribers.toLocaleString(), " subscribers"] }), _jsx(Checkbox, { checked: isSelected, onChange: () => handleNewsletterToggle(newsletter.id), className: "data-[state=checked]:bg-blue-600" })] })] })] })] }) }, newsletter.id));
                                }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "mb-16", children: [_jsx("h2", { className: "text-center mb-12", children: "Why Subscribe?" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto", children: benefits.map((benefit, index) => {
                                    const Icon = benefit.icon;
                                    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4", children: _jsx(Icon, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }) }), _jsx("h3", { className: "mb-2", children: benefit.title }), _jsx("p", { className: "text-sm text-foreground-muted", children: benefit.description })] }, index));
                                }) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, className: "max-w-2xl mx-auto", children: _jsxs(Card, { className: "glass p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "mb-2", children: "Start Your AI Journey" }), _jsx("p", { className: "text-foreground-muted", children: "Join thousands of professionals staying ahead in AI" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "First Name *" }), _jsx(Input, { type: "text", value: firstName, onChange: (e) => setFirstName(e.target.value), placeholder: "Enter first name", required: true, className: "bg-input-background" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Last Name *" }), _jsx(Input, { type: "text", value: lastName, onChange: (e) => setLastName(e.target.value), placeholder: "Enter last name", required: true, className: "bg-input-background" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Email Address *" }), _jsx(Input, { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email", required: true, className: "bg-input-background" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Company" }), _jsx(Input, { type: "text", value: company, onChange: (e) => setCompany(e.target.value), placeholder: "Your company", className: "bg-input-background" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Role" }), _jsxs(Select, { value: role, onValueChange: setRole, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "Select your role" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "ceo", children: "CEO / Founder" }), _jsx(SelectItem, { value: "cto", children: "CTO / Tech Lead" }), _jsx(SelectItem, { value: "ai-engineer", children: "AI Engineer" }), _jsx(SelectItem, { value: "data-scientist", children: "Data Scientist" }), _jsx(SelectItem, { value: "product-manager", children: "Product Manager" }), _jsx(SelectItem, { value: "consultant", children: "Consultant" }), _jsx(SelectItem, { value: "student", children: "Student" }), _jsx(SelectItem, { value: "other", children: "Other" })] })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Email Frequency" }), _jsxs(Select, { value: frequency, onValueChange: setFrequency, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "daily", children: "Daily" }), _jsx(SelectItem, { value: "weekly", children: "Weekly" }), _jsx(SelectItem, { value: "monthly", children: "Monthly" })] })] })] }), _jsx(Separator, {}), _jsxs("div", { className: "text-center", children: [_jsxs("p", { className: "text-sm text-foreground-muted mb-4", children: ["Selected newsletters: ", _jsx("strong", { children: selectedNewsletters.length })] }), _jsx(Button, { type: "submit", disabled: isSubmitting || selectedNewsletters.length === 0, className: "w-full bg-blue-600 hover:bg-blue-700 text-white", children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" }), "Subscribing..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { className: "w-4 h-4 mr-2" }), "Subscribe Now"] })) })] }), _jsx("p", { className: "text-xs text-foreground-muted text-center", children: "By subscribing, you agree to our Privacy Policy. Unsubscribe anytime." })] })] }) })] })] }));
}
//# sourceMappingURL=NewsletterPage.js.map