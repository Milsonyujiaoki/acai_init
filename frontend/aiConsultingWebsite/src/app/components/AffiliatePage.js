"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { DollarSign, Users, TrendingUp, Star, Award, ArrowRight, CheckCircle, Calculator, Target, Zap, Gift, CreditCard, BarChart3, UserPlus, Share2, Copy, ExternalLink, Clock, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
const commissionTiers = [
    {
        level: "Starter",
        requirement: "0-10 referrals",
        commission: "15%",
        bonuses: ["Welcome bonus: $50", "Marketing materials"],
        color: "blue"
    },
    {
        level: "Growth",
        requirement: "11-25 referrals",
        commission: "20%",
        bonuses: ["Quarterly bonus: $200", "Priority support", "Co-marketing opportunities"],
        color: "green"
    },
    {
        level: "Pro",
        requirement: "26-50 referrals",
        commission: "25%",
        bonuses: ["Monthly bonus: $500", "Dedicated account manager", "Early feature access"],
        color: "purple"
    },
    {
        level: "Elite",
        requirement: "51+ referrals",
        commission: "30%",
        bonuses: ["Weekly bonus: $1000", "Revenue sharing", "Partner summit invite", "Custom solutions"],
        color: "gold"
    }
];
const benefits = [
    {
        icon: DollarSign,
        title: "High Commissions",
        description: "Earn 15-30% recurring commissions on all referred clients"
    },
    {
        icon: Clock,
        title: "Lifetime Value",
        description: "Get paid for as long as your referrals remain active"
    },
    {
        icon: Target,
        title: "Performance Bonuses",
        description: "Additional rewards for hitting monthly and quarterly targets"
    },
    {
        icon: Users,
        title: "Two-Tier System",
        description: "Earn from your direct referrals and their sub-affiliates"
    },
    {
        icon: Zap,
        title: "Real-Time Tracking",
        description: "Monitor clicks, conversions, and earnings in real-time"
    },
    {
        icon: Gift,
        title: "Marketing Support",
        description: "Professional creatives, landing pages, and campaign materials"
    }
];
const stats = [
    {
        icon: Users,
        label: "Active Affiliates",
        value: "2,500+",
        change: "+15%"
    },
    {
        icon: DollarSign,
        label: "Total Paid Out",
        value: "$1.2M+",
        change: "+28%"
    },
    {
        icon: TrendingUp,
        label: "Avg. Monthly Earnings",
        value: "$850",
        change: "+12%"
    },
    {
        icon: Star,
        label: "Success Rate",
        value: "94%",
        change: "+3%"
    }
];
export function AffiliatePage({ navigate }) {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [website, setWebsite] = useState("");
    const [experience, setExperience] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isApplied, setIsApplied] = useState(false);
    const [calculatorValues, setCalculatorValues] = useState({
        referrals: 10,
        avgDeal: 2500,
        commission: 20
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsApplied(true);
    };
    const monthlyEarnings = (calculatorValues.referrals * calculatorValues.avgDeal * calculatorValues.commission) / 100;
    const yearlyEarnings = monthlyEarnings * 12;
    if (isApplied) {
        return (_jsx("div", { className: "min-h-screen bg-background", children: _jsx("div", { className: "container mx-auto px-4 py-20", children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "max-w-2xl mx-auto text-center", children: [_jsx("div", { className: "w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8", children: _jsx(CheckCircle, { className: "w-10 h-10 text-green-600 dark:text-green-400" }) }), _jsx("h1", { className: "mb-6 gradient-text-blue", children: "Application Submitted!" }), _jsx("p", { className: "text-xl text-foreground-muted mb-8", children: "Welcome to the Delibix Affiliate Program! We'll review your application and get back to you within 24-48 hours." }), _jsxs("div", { className: "glass rounded-3xl p-8 mb-8", children: [_jsx("h3", { className: "mb-4", children: "What's Next?" }), _jsxs("div", { className: "space-y-4 text-left", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }), _jsx("span", { children: "Application review (24-48 hours)" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }), _jsx("span", { children: "Account setup and onboarding" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }), _jsx("span", { children: "Access to affiliate dashboard and materials" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }), _jsx("span", { children: "Start earning commissions immediately" })] })] })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('home'), className: "bg-blue-600 hover:bg-blue-700 text-white", children: [_jsx(ArrowRight, { className: "w-4 h-4 mr-2" }), "Back to Home"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('contact'), className: "border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Contact Support"] })] })] }) }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [DollarSign, Users, TrendingUp, Star, Target, Gift];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(DollarSign, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "2,500+ Active Affiliates" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsx(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: _jsx("span", { className: "gradient-text-blue", children: "Affiliate Program" }) }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Partner with us and earn up to 30% recurring commissions by referring clients to our AI solutions. Join 2,500+ successful affiliates worldwide." })] }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [_jsx(DollarSign, { className: "w-5 h-5 text-blue-500" }), _jsx("div", { className: "text-3xl font-bold gradient-text-blue", children: "30%" })] }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Max Commission" })] }), _jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [_jsx(Clock, { className: "w-5 h-5 text-blue-500" }), _jsx("div", { className: "text-3xl font-bold gradient-text-blue", children: "Lifetime" })] }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Payouts" })] }), _jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [_jsx(TrendingUp, { className: "w-5 h-5 text-blue-500" }), _jsx("div", { className: "text-3xl font-bold gradient-text-blue", children: "$1.2M+" })] }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Paid Out" })] })] }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }), children: _jsxs("span", { className: "flex items-center gap-3", children: ["Join Now", _jsx(ArrowRight, { className: "w-5 h-5" })] }) }), _jsxs(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-400/10", onClick: () => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }), children: [_jsx(Calculator, { className: "w-4 h-4 mr-2" }), "Calculate Earnings"] })] })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (_jsxs(Card, { className: "glass p-6 text-center", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4", children: _jsx(Icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsx("div", { className: "text-2xl font-bold mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-foreground-muted mb-2", children: stat.label }), stat.change && (_jsxs(Badge, { variant: "secondary", className: "text-green-600 bg-green-100 dark:bg-green-900/30", children: [stat.change, " this month"] }))] }, index));
                        }) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "mb-16", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Commission Structure" }), _jsx("p", { className: "text-foreground-muted max-w-2xl mx-auto", children: "Our tiered commission system rewards your growth with higher rates and exclusive bonuses" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: commissionTiers.map((tier, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsxs(Card, { className: `relative p-6 ${tier.level === 'Pro' ? 'ring-2 ring-blue-500 shadow-lg' : ''}`, children: [tier.level === 'Pro' && (_jsx(Badge, { className: "absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white", children: "Most Popular" })), _jsxs("div", { className: "text-center mb-6", children: [_jsx("h3", { className: "text-lg font-semibold mb-2", children: tier.level }), _jsx("div", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1", children: tier.commission }), _jsx("p", { className: "text-sm text-foreground-muted", children: tier.requirement })] }), _jsx("div", { className: "space-y-3", children: tier.bonuses.map((bonus, i) => (_jsxs("div", { className: "flex items-start gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }), _jsx("span", { className: "text-sm", children: bonus })] }, i))) })] }) }, tier.level))) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, className: "mb-16", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Why Choose Our Program?" }), _jsx("p", { className: "text-foreground-muted max-w-2xl mx-auto", children: "Industry-leading benefits designed to maximize your earning potential" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: benefits.map((benefit, index) => {
                                    const Icon = benefit.icon;
                                    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 + index * 0.1 }, className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4", children: _jsx(Icon, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }) }), _jsx("h3", { className: "mb-2", children: benefit.title }), _jsx("p", { className: "text-sm text-foreground-muted", children: benefit.description })] }, index));
                                }) })] }), _jsx(motion.div, { id: "calculator", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "mb-16", children: _jsxs(Card, { className: "glass p-8 max-w-4xl mx-auto", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "mb-2", children: "Earnings Calculator" }), _jsx("p", { className: "text-foreground-muted", children: "Estimate your potential monthly and yearly earnings" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Monthly Referrals" }), _jsx(Input, { type: "number", value: calculatorValues.referrals, onChange: (e) => setCalculatorValues(prev => ({ ...prev, referrals: parseInt(e.target.value) || 0 })), className: "bg-input-background" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Average Deal Size ($)" }), _jsx(Input, { type: "number", value: calculatorValues.avgDeal, onChange: (e) => setCalculatorValues(prev => ({ ...prev, avgDeal: parseInt(e.target.value) || 0 })), className: "bg-input-background" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Commission Rate (%)" }), _jsx(Input, { type: "number", value: calculatorValues.commission, onChange: (e) => setCalculatorValues(prev => ({ ...prev, commission: parseInt(e.target.value) || 0 })), max: "30", min: "15", className: "bg-input-background" })] })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "text-center p-6 bg-blue-50 dark:bg-blue-950/30 rounded-xl", children: [_jsx("div", { className: "text-sm text-foreground-muted mb-2", children: "Monthly Earnings" }), _jsxs("div", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400", children: ["$", monthlyEarnings.toLocaleString()] })] }), _jsxs("div", { className: "text-center p-6 bg-green-50 dark:bg-green-950/30 rounded-xl", children: [_jsx("div", { className: "text-sm text-foreground-muted mb-2", children: "Yearly Earnings" }), _jsxs("div", { className: "text-3xl font-bold text-green-600 dark:text-green-400", children: ["$", yearlyEarnings.toLocaleString()] })] }), _jsx("div", { className: "text-xs text-foreground-muted text-center", children: "* Estimates based on recurring monthly commissions. Actual earnings may vary." })] })] })] }) }), _jsx(motion.div, { id: "apply", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5 }, className: "max-w-2xl mx-auto", children: _jsxs(Card, { className: "glass p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "mb-2", children: "Join Our Affiliate Program" }), _jsx("p", { className: "text-foreground-muted", children: "Start earning commissions with our AI solutions today" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "First Name *" }), _jsx(Input, { type: "text", value: firstName, onChange: (e) => setFirstName(e.target.value), placeholder: "Enter first name", required: true, className: "bg-input-background" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Last Name *" }), _jsx(Input, { type: "text", value: lastName, onChange: (e) => setLastName(e.target.value), placeholder: "Enter last name", required: true, className: "bg-input-background" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Email Address *" }), _jsx(Input, { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email", required: true, className: "bg-input-background" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Website or Social Media" }), _jsx(Input, { type: "url", value: website, onChange: (e) => setWebsite(e.target.value), placeholder: "https://yourwebsite.com", className: "bg-input-background" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm mb-2", children: "Marketing Experience" }), _jsx(Input, { type: "text", value: experience, onChange: (e) => setExperience(e.target.value), placeholder: "Describe your marketing experience or audience", className: "bg-input-background" })] }), _jsx(Separator, {}), _jsx("div", { className: "text-center", children: _jsx(Button, { type: "submit", disabled: isSubmitting, className: "w-full bg-blue-600 hover:bg-blue-700 text-white", children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" }), "Submitting Application..."] })) : (_jsxs(_Fragment, { children: [_jsx(UserPlus, { className: "w-4 h-4 mr-2" }), "Apply Now"] })) }) }), _jsx("p", { className: "text-xs text-foreground-muted text-center", children: "By applying, you agree to our Affiliate Terms and Conditions. Applications are typically reviewed within 24-48 hours." })] })] }) })] })] }));
}
//# sourceMappingURL=AffiliatePage.js.map