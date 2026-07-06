"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, Users, Zap, CheckCircle, ArrowRight, Star, Video, Monitor, Bot, Brain, Target, TrendingUp, Award, Building2, Mail, Phone, Globe, MessageCircle, Download, Play, Pause, Volume2, FileText, BarChart3, Shield, Lightbulb, Rocket, Handshake, Eye, Lock, Code } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
const demoTypes = [
    {
        id: "ai-playground",
        title: "AI Playground Demo",
        description: "Interactive demonstration of our AI tools and capabilities",
        duration: "30 minutes",
        features: [
            "Live AI model testing",
            "Interactive tool exploration",
            "Real-time result visualization",
            "Q&A session"
        ],
        icon: Bot,
        recommended: true
    },
    {
        id: "enterprise-solutions",
        title: "Enterprise Solutions",
        description: "Comprehensive overview for large-scale implementations",
        duration: "60 minutes",
        features: [
            "Custom AI solution design",
            "Integration possibilities",
            "Scalability planning",
            "ROI analysis"
        ],
        icon: Building2
    },
    {
        id: "industry-specific",
        title: "Industry-Specific Demo",
        description: "Tailored demonstration for your specific industry needs",
        duration: "45 minutes",
        features: [
            "Industry use cases",
            "Specific solution demos",
            "Compliance considerations",
            "Implementation roadmap"
        ],
        icon: Target
    },
    {
        id: "technical-deep-dive",
        title: "Technical Deep Dive",
        description: "In-depth technical exploration for developers and IT teams",
        duration: "90 minutes",
        features: [
            "API demonstrations",
            "Technical architecture",
            "Integration examples",
            "Development resources"
        ],
        icon: Code
    }
];
const industries = [
    "Healthcare", "Finance & Banking", "E-commerce", "Manufacturing",
    "Education", "Government", "Retail", "Technology", "Media & Entertainment",
    "Real Estate", "Transportation", "Energy", "Consulting", "Other"
];
const companySizes = [
    "1-10 employees", "11-50 employees", "51-200 employees",
    "201-1000 employees", "1000+ employees"
];
const roles = [
    "CEO/Founder", "CTO/Technical Lead", "Product Manager", "Developer",
    "Data Scientist", "Business Analyst", "Marketing Manager", "Operations Manager", "Other"
];
const timeSlots = [
    "09:00 - 09:30", "09:30 - 10:00", "10:00 - 10:30", "10:30 - 11:00",
    "11:00 - 11:30", "11:30 - 12:00", "13:00 - 13:30", "13:30 - 14:00",
    "14:00 - 14:30", "14:30 - 15:00", "15:00 - 15:30", "15:30 - 16:00"
];
const demoStats = [
    { label: "Average Demo Rating", value: "4.9/5", description: "From 500+ demos" },
    { label: "Conversion Rate", value: "78%", description: "Demo to pilot program" },
    { label: "Time to Value", value: "< 30 days", description: "Implementation timeline" },
    { label: "ROI Improvement", value: "340%", description: "Average client ROI" }
];
export function DemoRequestPage({ navigate }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        phone: "",
        industry: "",
        companySize: "",
        demoType: "",
        preferredDate: "",
        preferredTime: "",
        goals: "",
        currentChallenges: "",
        budget: "",
        timeline: "",
        additionalInfo: "",
        agreeToTerms: false,
        subscribeNewsletter: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setShowSuccessMessage(true);
    };
    const getNextAvailableDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    };
    if (showSuccessMessage) {
        return (_jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "max-w-2xl mx-auto text-center p-8", children: [_jsx("div", { className: "w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx(CheckCircle, { className: "w-10 h-10 text-green-600 dark:text-green-400" }) }), _jsx("h1", { className: "text-4xl font-bold mb-4", children: "Demo Request Submitted!" }), _jsx("p", { className: "text-xl text-foreground-muted mb-8", children: "Thank you for your interest! Our team will contact you within 24 hours to schedule your personalized demo." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { onClick: () => navigate('home'), className: "gradient-bg-blue text-white", children: "Return to Homepage" }), _jsx(Button, { variant: "outline", onClick: () => navigate('ai-playground'), children: "Explore AI Playground" })] })] }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [Video, Monitor, Bot, Brain, Target, Building2];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Video, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Personalized Demo" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["See AI in ", _jsx("span", { className: "gradient-text-blue", children: "Action" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Experience how Delibix AI can transform your business with a personalized demonstration tailored to your specific needs and industry." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: demoStats.map((stat, index) => (_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text-blue mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: stat.label }), _jsx("div", { className: "text-xs text-foreground-muted", children: stat.description })] }, index))) })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsxs("div", { className: "grid lg:grid-cols-12 gap-12", children: [_jsx("div", { className: "lg:col-span-4", children: _jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.2 }, className: "sticky top-8", children: [_jsx("h2", { className: "mb-6", children: "Choose Your Demo Type" }), _jsx("div", { className: "space-y-4", children: demoTypes.map((demo, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 + index * 0.1 }, children: _jsx(Card, { className: `glass p-6 cursor-pointer transition-all duration-300 ${formData.demoType === demo.id
                                                        ? 'ring-2 ring-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
                                                        : 'hover:shadow-lg'}`, onClick: () => handleInputChange('demoType', demo.id), children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center", children: _jsx(demo.icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx("h3", { className: "text-lg font-semibold", children: demo.title }), demo.recommended && (_jsx(Badge, { className: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400", children: "Recommended" }))] }), _jsx("p", { className: "text-foreground-muted text-sm mb-3", children: demo.description }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-3", children: [_jsx(Clock, { className: "w-4 h-4" }), demo.duration] }), _jsx("ul", { className: "space-y-1", children: demo.features.map((feature, idx) => (_jsxs("li", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle, { className: "w-3 h-3 text-green-600 dark:text-green-400" }), feature] }, idx))) })] })] }) }) }, demo.id))) })] }) }), _jsx("div", { className: "lg:col-span-8", children: _jsx(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.3 }, children: _jsxs(Card, { className: "glass p-8", children: [_jsx("h2", { className: "mb-6", children: "Request Your Personal Demo" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "First Name *" }), _jsx(Input, { required: true, value: formData.firstName, onChange: (e) => handleInputChange('firstName', e.target.value), className: "bg-input-background" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Last Name *" }), _jsx(Input, { required: true, value: formData.lastName, onChange: (e) => handleInputChange('lastName', e.target.value), className: "bg-input-background" })] })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Work Email *" }), _jsx(Input, { type: "email", required: true, value: formData.email, onChange: (e) => handleInputChange('email', e.target.value), className: "bg-input-background" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Phone Number" }), _jsx(Input, { type: "tel", value: formData.phone, onChange: (e) => handleInputChange('phone', e.target.value), className: "bg-input-background" })] })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Company Name *" }), _jsx(Input, { required: true, value: formData.company, onChange: (e) => handleInputChange('company', e.target.value), className: "bg-input-background" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Your Role *" }), _jsxs(Select, { value: formData.role, onValueChange: (value) => handleInputChange('role', value), children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "Select your role" }) }), _jsx(SelectContent, { children: roles.map((role) => (_jsx(SelectItem, { value: role, children: role }, role))) })] })] })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Industry *" }), _jsxs(Select, { value: formData.industry, onValueChange: (value) => handleInputChange('industry', value), children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "Select your industry" }) }), _jsx(SelectContent, { children: industries.map((industry) => (_jsx(SelectItem, { value: industry, children: industry }, industry))) })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Company Size *" }), _jsxs(Select, { value: formData.companySize, onValueChange: (value) => handleInputChange('companySize', value), children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "Select company size" }) }), _jsx(SelectContent, { children: companySizes.map((size) => (_jsx(SelectItem, { value: size, children: size }, size))) })] })] })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Preferred Date *" }), _jsx(Input, { type: "date", required: true, min: getNextAvailableDate(), value: formData.preferredDate, onChange: (e) => handleInputChange('preferredDate', e.target.value), className: "bg-input-background" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Preferred Time (WIB) *" }), _jsxs(Select, { value: formData.preferredTime, onValueChange: (value) => handleInputChange('preferredTime', value), children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "Select time slot" }) }), _jsx(SelectContent, { children: timeSlots.map((time) => (_jsx(SelectItem, { value: time, children: time }, time))) })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "What are your main goals with AI? *" }), _jsx(Textarea, { required: true, value: formData.goals, onChange: (e) => handleInputChange('goals', e.target.value), placeholder: "e.g., Automate customer service, improve data analysis, enhance decision making...", className: "bg-input-background", rows: 3 })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "What are your current challenges?" }), _jsx(Textarea, { value: formData.currentChallenges, onChange: (e) => handleInputChange('currentChallenges', e.target.value), placeholder: "e.g., Manual processes, data silos, lack of AI expertise...", className: "bg-input-background", rows: 3 })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Estimated Budget Range" }), _jsxs(Select, { value: formData.budget, onValueChange: (value) => handleInputChange('budget', value), children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "Select budget range" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "under-10k", children: "Under $10,000" }), _jsx(SelectItem, { value: "10k-50k", children: "$10,000 - $50,000" }), _jsx(SelectItem, { value: "50k-100k", children: "$50,000 - $100,000" }), _jsx(SelectItem, { value: "100k-500k", children: "$100,000 - $500,000" }), _jsx(SelectItem, { value: "500k-plus", children: "$500,000+" }), _jsx(SelectItem, { value: "not-sure", children: "Not sure yet" })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Timeline for Implementation" }), _jsxs(Select, { value: formData.timeline, onValueChange: (value) => handleInputChange('timeline', value), children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "Select timeline" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "immediate", children: "Immediate (within 1 month)" }), _jsx(SelectItem, { value: "short-term", children: "Short-term (1-3 months)" }), _jsx(SelectItem, { value: "medium-term", children: "Medium-term (3-6 months)" }), _jsx(SelectItem, { value: "long-term", children: "Long-term (6+ months)" }), _jsx(SelectItem, { value: "exploring", children: "Just exploring" })] })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Additional Information" }), _jsx(Textarea, { value: formData.additionalInfo, onChange: (e) => handleInputChange('additionalInfo', e.target.value), placeholder: "Any specific questions or requirements you'd like us to address during the demo?", className: "bg-input-background", rows: 3 })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-start gap-3", children: [_jsx(Checkbox, { id: "terms", checked: formData.agreeToTerms, onCheckedChange: (checked) => handleInputChange('agreeToTerms', !!checked), className: "mt-1" }), _jsxs("label", { htmlFor: "terms", className: "text-sm leading-relaxed", children: ["I agree to the", " ", _jsx("button", { type: "button", onClick: () => navigate('terms-service'), className: "text-blue-600 dark:text-blue-400 hover:underline", children: "Terms of Service" }), " ", "and", " ", _jsx("button", { type: "button", onClick: () => navigate('privacy-policy'), className: "text-blue-600 dark:text-blue-400 hover:underline", children: "Privacy Policy" }), ". *"] })] }), _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(Checkbox, { id: "newsletter", checked: formData.subscribeNewsletter, onCheckedChange: (checked) => handleInputChange('subscribeNewsletter', !!checked), className: "mt-1" }), _jsx("label", { htmlFor: "newsletter", className: "text-sm leading-relaxed", children: "Subscribe to our newsletter for AI insights and updates" })] })] }), _jsx("div", { className: "pt-6", children: _jsx(Button, { type: "submit", disabled: isSubmitting || !formData.agreeToTerms, className: "w-full gradient-bg-blue text-white py-4 text-lg font-semibold", children: isSubmitting ? (_jsxs("span", { className: "flex items-center gap-2", children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" }, className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full" }), "Submitting Request..."] })) : (_jsxs("span", { className: "flex items-center gap-2", children: ["Schedule Demo", _jsx(ArrowRight, { className: "w-5 h-5" })] })) }) })] })] }) }) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "mt-20", children: _jsxs(Card, { className: "glass p-8", children: [_jsx("h2", { className: "text-center mb-8", children: "What to Expect from Your Demo" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Users, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }) }), _jsx("h3", { className: "mb-3", children: "Personalized Experience" }), _jsx("p", { className: "text-foreground-muted", children: "Our AI experts will tailor the demo specifically to your industry, use cases, and business goals." })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Eye, { className: "w-8 h-8 text-green-600 dark:text-green-400" }) }), _jsx("h3", { className: "mb-3", children: "Live Demonstrations" }), _jsx("p", { className: "text-foreground-muted", children: "See our AI tools in action with real data and scenarios relevant to your business challenges." })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Lightbulb, { className: "w-8 h-8 text-purple-600 dark:text-purple-400" }) }), _jsx("h3", { className: "mb-3", children: "Strategic Insights" }), _jsx("p", { className: "text-foreground-muted", children: "Get expert recommendations on implementation strategy, timeline, and potential ROI for your organization." })] })] })] }) })] })] }));
}
//# sourceMappingURL=DemoRequestPage.js.map