"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useLanguage } from "./LanguageProvider";
import { useDarkMode } from "./DarkModeProvider";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, CheckCircle, HelpCircle, Calendar, Globe, Users, ArrowRight, MessageSquare, Video, Coffee, Star, Zap, Shield, Award, Headphones, Home, Building2, Timer, ChevronDown, ExternalLink, Smartphone } from "lucide-react";
export function ContactPage() {
    const { t, isRTL } = useLanguage();
    const { isDark } = useDarkMode();
    const shouldReduceMotion = useReducedMotion();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        budget: '',
        phone: '',
        timeline: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                service: '',
                message: '',
                budget: '',
                phone: '',
                timeline: ''
            });
        }, 5000);
    };
    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };
    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const contactMethods = [
        {
            icon: MessageCircle,
            title: "WhatsApp Business",
            description: "Instant messaging for quick responses and real-time project updates",
            action: "Chat on WhatsApp",
            href: "https://wa.me/6285770024933",
            color: "green",
            availability: "24/7 Available",
            response: "< 5 min"
        },
        {
            icon: Mail,
            title: "Email Support",
            description: "Detailed project discussions and comprehensive documentation",
            action: "Send Email",
            href: "mailto:hello@delibix.com",
            color: "blue",
            availability: "Always Open",
            response: "< 2 hours"
        },
        {
            icon: Phone,
            title: "Phone Consultation",
            description: "Direct voice consultation for complex project requirements",
            action: "Schedule Call",
            href: "tel:+6285770024933",
            color: "purple",
            availability: "9 AM - 6 PM WIB",
            response: "Immediate"
        },
        {
            icon: Video,
            title: "Video Meeting",
            description: "Face-to-face project planning and detailed technical discussions",
            action: "Book Meeting",
            href: "#",
            color: "orange",
            availability: "By Appointment",
            response: "Scheduled"
        }
    ];
    const quickStats = [
        { icon: Timer, label: "Response Time", value: "< 2 Hours", color: "blue" },
        { icon: Users, label: "Client Satisfaction", value: "100%", color: "green" },
        { icon: Globe, label: "Languages Supported", value: "14+", color: "purple" },
        { icon: Award, label: "Projects Completed", value: "20+", color: "orange" },
        { icon: Coffee, label: "Free Consultation", value: "Always", color: "blue" },
        { icon: Shield, label: "Data Security", value: "Enterprise", color: "green" }
    ];
    const officeInfo = [
        {
            icon: Building2,
            title: "Main Office",
            details: [
                "Jl. Kaliurang KM 14.5",
                "Yogyakarta, DIY 55584",
                "Indonesia"
            ]
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: [
                "Monday - Friday: 9:00 AM - 6:00 PM",
                "Saturday: 10:00 AM - 4:00 PM",
                "Sunday: Emergency Only"
            ]
        },
        {
            icon: Smartphone,
            title: "Emergency Contact",
            details: [
                "24/7 WhatsApp Support",
                "Critical Issue Hotline",
                "Emergency Response Team"
            ]
        }
    ];
    const faqs = [
        {
            question: "What is your typical project timeline?",
            answer: "Our projects typically range from 3-28 days depending on complexity. Simple landing pages can be completed in 3-7 days, while comprehensive web applications may take 2-4 weeks. We provide detailed timelines during our initial consultation."
        },
        {
            question: "How do you price your services?",
            answer: "We offer transparent, project-based pricing starting from $2,500 for basic websites. Our pricing depends on project scope, features required, and timeline. We provide detailed quotes with no hidden fees after understanding your requirements."
        },
        {
            question: "Do you provide ongoing support and maintenance?",
            answer: "Yes! All projects include 1-6 months of free support depending on the package. We also offer ongoing maintenance plans for updates, security patches, and feature enhancements. Our support team is available via WhatsApp for quick assistance."
        },
        {
            question: "Can you work with international clients?",
            answer: "Absolutely! We serve clients globally and support 14+ languages. We're experienced in working across different time zones and use modern collaboration tools to ensure seamless communication regardless of location."
        },
        {
            question: "What technologies do you specialize in?",
            answer: "We specialize in modern web technologies including React, Next.js, Node.js, and AI integration. Our team stays updated with the latest trends and uses cutting-edge tools to deliver future-proof solutions."
        },
        {
            question: "How do you ensure project security and data protection?",
            answer: "We implement enterprise-grade security measures including encrypted communications, secure development practices, and comprehensive data protection protocols. All client data is handled with strict confidentiality agreements."
        }
    ];
    return (_jsxs("div", { className: `relative min-h-screen overflow-hidden pt-32 pb-20 ${isRTL ? 'rtl' : ''}`, children: [_jsxs("div", { className: "fixed inset-0 z-0", children: [_jsx("div", { className: `absolute inset-0 transition-colors duration-300 ${isDark
                            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950/30'
                            : 'bg-gradient-to-br from-blue-50/30 via-background to-blue-100/20'}` }), !shouldReduceMotion && (_jsxs(_Fragment, { children: [_jsx(motion.div, { className: "absolute top-20 right-20 w-64 h-64 rounded-full opacity-10 dark:opacity-5", style: {
                                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                                    filter: "blur(40px)",
                                }, animate: {
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.15, 0.1],
                                }, transition: {
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                } }), _jsx(motion.div, { className: "absolute bottom-40 left-20 w-48 h-48 rounded-full opacity-8 dark:opacity-4", style: {
                                    background: "radial-gradient(circle, rgba(147, 197, 253, 0.1) 0%, transparent 70%)",
                                    filter: "blur(30px)",
                                }, animate: {
                                    scale: [1, 1.15, 1],
                                    opacity: [0.08, 0.12, 0.08],
                                }, transition: {
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2,
                                } })] }))] }), _jsx("div", { className: "relative z-10 px-6 lg:px-8", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("section", { className: "mb-32", children: [_jsxs(motion.div, { className: "text-center mb-20", initial: "initial", animate: "animate", variants: staggerChildren, children: [_jsx(motion.div, { variants: fadeInUp, children: _jsx(Badge, { variant: "secondary", className: `mb-8 ${isDark
                                                    ? 'bg-blue-900/40 text-blue-300 border-blue-700/60'
                                                    : 'bg-blue-100/80 text-blue-700 border-blue-300/60'} px-4 py-2 font-medium rounded-full border backdrop-blur-sm shadow-sm`, children: "Contact" }) }), _jsxs(motion.h1, { className: `text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, variants: fadeInUp, children: ["Let's create something", _jsx("br", {}), _jsx("span", { className: `${isDark ? 'text-blue-400' : 'text-blue-600'}`, children: "incredible together." })] }), _jsxs(motion.p, { className: `text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'} ${isRTL ? 'text-right' : ''}`, variants: fadeInUp, children: ["Great ideas deserve exceptional execution.", _jsx("br", {}), "Tell us about your vision."] })] }), _jsx(motion.div, { className: "max-w-4xl mx-auto", initial: "initial", animate: "animate", variants: staggerChildren, children: _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12", variants: fadeInUp, children: [
                                            {
                                                value: "< 2h",
                                                label: "Response time",
                                                icon: Timer
                                            },
                                            {
                                                value: "100%",
                                                label: "Client satisfaction",
                                                icon: Star
                                            },
                                            {
                                                value: "24/7",
                                                label: "Support available",
                                                icon: Shield
                                            }
                                        ].map((stat, index) => (_jsxs(motion.div, { className: "text-center group", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.2 }, whileHover: { y: -2 }, children: [_jsx(motion.div, { className: `inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${isDark
                                                        ? 'bg-slate-800/50 border border-slate-700/50'
                                                        : 'bg-white/70 border border-slate-200/50'} backdrop-blur-sm group-hover:scale-110 transition-all duration-300`, whileHover: { scale: 1.1 }, children: _jsx(stat.icon, { className: `w-7 h-7 ${isDark ? 'text-blue-400' : 'text-blue-600'}` }) }), _jsx("div", { className: `text-3xl md:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`, children: stat.value }), _jsx("p", { className: `text-lg font-normal ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: stat.label })] }, index))) }) })] }), _jsx("section", { className: "mb-24", children: _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-5 gap-12", children: [_jsxs(motion.div, { className: "xl:col-span-2", initial: { opacity: 0, x: isRTL ? 50 : -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsxs(Badge, { variant: "secondary", className: `mb-6 glass-blue ${isDark ? 'text-blue-300 border-blue-400/20' : 'text-blue-700 border-blue-200/50'} px-3 py-1`, children: [_jsx(MessageCircle, { className: `w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}` }), "Contact Methods"] }), _jsx("h2", { className: `text-2xl md:text-3xl font-bold mb-8 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "Choose Your Preferred Way to Connect" }), _jsx("div", { className: "space-y-4", children: contactMethods.map((method, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, children: _jsx(Card, { className: `glass-heavy p-6 hover-lift transition-all duration-300 cursor-pointer ${isDark
                                                            ? 'border-blue-400/20 bg-slate-800/30 hover:bg-slate-700/40'
                                                            : 'border-blue-200/50 bg-white/30 hover:bg-blue-50/30'}`, onClick: () => window.open(method.href, '_blank'), children: _jsxs("div", { className: `flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `w-14 h-14 rounded-2xl flex items-center justify-center ${method.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                                                                        method.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                                                                            method.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                                                                                'bg-orange-100 dark:bg-orange-900/30'}`, children: _jsx(method.icon, { className: `w-7 h-7 ${method.color === 'green' ? 'text-green-600 dark:text-green-400' :
                                                                            method.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                                                                                method.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                                                                                    'text-orange-600 dark:text-orange-400'}` }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: `flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("h3", { className: `font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'} ${isRTL ? 'text-right' : ''}`, children: method.title }), _jsx(Badge, { variant: "outline", className: `text-xs ${method.color === 'green' ? 'border-green-300 text-green-600 dark:border-green-600 dark:text-green-400' :
                                                                                        method.color === 'blue' ? 'border-blue-300 text-blue-600 dark:border-blue-600 dark:text-blue-400' :
                                                                                            method.color === 'purple' ? 'border-purple-300 text-purple-600 dark:border-purple-600 dark:text-purple-400' :
                                                                                                'border-orange-300 text-orange-600 dark:border-orange-600 dark:text-orange-400'}`, children: method.response })] }), _jsx("p", { className: `text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'} ${isRTL ? 'text-right' : ''}`, children: method.description }), _jsxs("div", { className: `flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`, children: method.availability }), _jsxs(Button, { variant: "ghost", size: "sm", className: `text-xs h-auto p-2 ${method.color === 'green' ? 'text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20' :
                                                                                        method.color === 'blue' ? 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20' :
                                                                                            method.color === 'purple' ? 'text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/20' :
                                                                                                'text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-900/20'}`, children: [method.action, _jsx(ExternalLink, { className: `w-3 h-3 ${isRTL ? 'mr-1' : 'ml-1'}` })] })] })] })] }) }) }, index))) })] }), _jsxs(motion.div, { className: "xl:col-span-3", initial: { opacity: 0, x: isRTL ? -50 : 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsxs(Badge, { variant: "secondary", className: `mb-6 glass-blue ${isDark ? 'text-blue-300 border-blue-400/20' : 'text-blue-700 border-blue-200/50'} px-3 py-1`, children: [_jsx(Send, { className: `w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}` }), "Project Inquiry Form"] }), _jsx("h2", { className: `text-2xl md:text-3xl font-bold mb-8 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "Tell Us About Your Project" }), _jsx(Card, { className: `glass-heavy p-8 ${isDark
                                                    ? 'border-blue-400/20 bg-slate-800/30'
                                                    : 'border-blue-200/50 bg-white/30'}`, children: !isSubmitted ? (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? 'text-slate-200' : 'text-slate-700'} ${isRTL ? 'text-right' : ''}`, children: "Full Name *" }), _jsx(Input, { value: formData.name, onChange: (e) => handleInputChange('name', e.target.value), placeholder: "Enter your full name", required: true, className: `glass-secondary transition-all duration-200 ${isDark
                                                                                ? 'border-blue-400/20 bg-slate-800/50 focus:border-blue-400/40'
                                                                                : 'border-blue-200/50 bg-white/50 focus:border-blue-300'}` })] }), _jsxs("div", { children: [_jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? 'text-slate-200' : 'text-slate-700'} ${isRTL ? 'text-right' : ''}`, children: "Email Address *" }), _jsx(Input, { type: "email", value: formData.email, onChange: (e) => handleInputChange('email', e.target.value), placeholder: "your.email@company.com", required: true, className: `glass-secondary transition-all duration-200 ${isDark
                                                                                ? 'border-blue-400/20 bg-slate-800/50 focus:border-blue-400/40'
                                                                                : 'border-blue-200/50 bg-white/50 focus:border-blue-300'}` })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? 'text-slate-200' : 'text-slate-700'} ${isRTL ? 'text-right' : ''}`, children: "Company/Organization" }), _jsx(Input, { value: formData.company, onChange: (e) => handleInputChange('company', e.target.value), placeholder: "Your company name", className: `glass-secondary transition-all duration-200 ${isDark
                                                                                ? 'border-blue-400/20 bg-slate-800/50 focus:border-blue-400/40'
                                                                                : 'border-blue-200/50 bg-white/50 focus:border-blue-300'}` })] }), _jsxs("div", { children: [_jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? 'text-slate-200' : 'text-slate-700'} ${isRTL ? 'text-right' : ''}`, children: "Phone Number" }), _jsx(Input, { type: "tel", value: formData.phone, onChange: (e) => handleInputChange('phone', e.target.value), placeholder: "+62 xxx xxxx xxxx", className: `glass-secondary transition-all duration-200 ${isDark
                                                                                ? 'border-blue-400/20 bg-slate-800/50 focus:border-blue-400/40'
                                                                                : 'border-blue-200/50 bg-white/50 focus:border-blue-300'}` })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? 'text-slate-200' : 'text-slate-700'} ${isRTL ? 'text-right' : ''}`, children: "Service Needed *" }), _jsxs(Select, { value: formData.service, onValueChange: (value) => handleInputChange('service', value), children: [_jsx(SelectTrigger, { className: `glass-secondary ${isDark
                                                                                        ? 'border-blue-400/20 bg-slate-800/50'
                                                                                        : 'border-blue-200/50 bg-white/50'}`, children: _jsx(SelectValue, { placeholder: "Select service type" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "ai-consulting", children: "AI Consulting & Strategy" }), _jsx(SelectItem, { value: "web-development", children: "Web Development" }), _jsx(SelectItem, { value: "mobile-apps", children: "Mobile App Development" }), _jsx(SelectItem, { value: "digital-transformation", children: "Digital Transformation" }), _jsx(SelectItem, { value: "data-analytics", children: "Data Analytics & BI" }), _jsx(SelectItem, { value: "ecommerce", children: "E-commerce Solutions" }), _jsx(SelectItem, { value: "other", children: "Other (Please specify)" })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? 'text-slate-200' : 'text-slate-700'} ${isRTL ? 'text-right' : ''}`, children: "Project Timeline" }), _jsxs(Select, { value: formData.timeline, onValueChange: (value) => handleInputChange('timeline', value), children: [_jsx(SelectTrigger, { className: `glass-secondary ${isDark
                                                                                        ? 'border-blue-400/20 bg-slate-800/50'
                                                                                        : 'border-blue-200/50 bg-white/50'}`, children: _jsx(SelectValue, { placeholder: "When do you need it?" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "asap", children: "ASAP (Rush Project)" }), _jsx(SelectItem, { value: "1-2-weeks", children: "1-2 Weeks" }), _jsx(SelectItem, { value: "3-4-weeks", children: "3-4 Weeks" }), _jsx(SelectItem, { value: "1-2-months", children: "1-2 Months" }), _jsx(SelectItem, { value: "3-6-months", children: "3-6 Months" }), _jsx(SelectItem, { value: "flexible", children: "Flexible Timeline" })] })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? 'text-slate-200' : 'text-slate-700'} ${isRTL ? 'text-right' : ''}`, children: "Project Budget Range" }), _jsxs(Select, { value: formData.budget, onValueChange: (value) => handleInputChange('budget', value), children: [_jsx(SelectTrigger, { className: `glass-secondary ${isDark
                                                                                ? 'border-blue-400/20 bg-slate-800/50'
                                                                                : 'border-blue-200/50 bg-white/50'}`, children: _jsx(SelectValue, { placeholder: "Select your budget range" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "under-2500", children: "< $2,500" }), _jsx(SelectItem, { value: "2500-5000", children: "$2,500 - $5,000" }), _jsx(SelectItem, { value: "5000-10000", children: "$5,000 - $10,000" }), _jsx(SelectItem, { value: "10000-25000", children: "$10,000 - $25,000" }), _jsx(SelectItem, { value: "25000-50000", children: "$25,000 - $50,000" }), _jsx(SelectItem, { value: "over-50000", children: "> $50,000" }), _jsx(SelectItem, { value: "discuss", children: "Let's Discuss" })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? 'text-slate-200' : 'text-slate-700'} ${isRTL ? 'text-right' : ''}`, children: "Project Description *" }), _jsx(Textarea, { value: formData.message, onChange: (e) => handleInputChange('message', e.target.value), placeholder: "Tell us about your project requirements, goals, and any specific features you need...", rows: 6, required: true, className: `glass-secondary transition-all duration-200 ${isDark
                                                                        ? 'border-blue-400/20 bg-slate-800/50 focus:border-blue-400/40'
                                                                        : 'border-blue-200/50 bg-white/50 focus:border-blue-300'}` })] }), _jsxs("div", { className: `flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`, children: [_jsx(Button, { type: "submit", size: "lg", disabled: isSubmitting, className: "flex-1 gradient-bg-blue hover:scale-105 transition-all duration-300 font-semibold", children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx(motion.div, { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2", animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" } }), "Sending Message..."] })) : (_jsxs(_Fragment, { children: ["Send Project Inquiry", _jsx(Send, { className: `w-4 h-4 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}` })] })) }), _jsxs(Button, { type: "button", variant: "outline", size: "lg", className: `border-blue-200 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/20 font-semibold ${isRTL ? 'sm:mr-auto' : 'sm:ml-auto'}`, onClick: () => window.open('https://wa.me/6285770024933', '_blank'), children: ["Quick WhatsApp", _jsx(MessageCircle, { className: `w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}` })] })] })] })) : (_jsxs(motion.div, { className: "text-center py-16", initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 }, children: [_jsx(motion.div, { initial: { scale: 0 }, animate: { scale: 1 }, transition: { duration: 0.5, delay: 0.2 }, children: _jsx(CheckCircle, { className: "w-20 h-20 text-green-500 mx-auto mb-6" }) }), _jsx("h3", { className: `text-2xl font-bold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "Message Sent Successfully! \uD83C\uDF89" }), _jsx("p", { className: `text-lg mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'text-right' : ''}`, children: "Thank you for reaching out! We'll get back to you within 2 hours." }), _jsxs("div", { className: `inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`, children: [_jsx(Timer, { className: "w-4 h-4" }), "Expected response: < 2 hours"] })] })) })] })] }) }), _jsxs("section", { className: "mb-24", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsxs(Badge, { variant: "secondary", className: `mb-6 glass-blue ${isDark ? 'text-blue-300 border-blue-400/20' : 'text-blue-700 border-blue-200/50'} px-4 py-2`, children: [_jsx(MapPin, { className: `w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}` }), "Our Location"] }), _jsx("h2", { className: `text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "Visit Our Office in Yogyakarta" }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'text-right' : ''}`, children: "Located in the heart of Indonesia's tech hub, our modern office is equipped with state-of-the-art facilities for collaborative project development." })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [_jsxs(motion.div, { initial: { opacity: 0, x: isRTL ? 50 : -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "space-y-6", children: [officeInfo.map((info, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, children: _jsx(Card, { className: `glass-heavy p-6 hover-lift transition-all duration-300 ${isDark
                                                            ? 'border-blue-400/20 bg-slate-800/30'
                                                            : 'border-blue-200/50 bg-white/30'}`, children: _jsxs("div", { className: `flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: "w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0", children: _jsx(info.icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: `font-semibold mb-3 ${isDark ? 'text-slate-200' : 'text-slate-800'} ${isRTL ? 'text-right' : ''}`, children: info.title }), _jsx("div", { className: "space-y-1", children: info.details.map((detail, idx) => (_jsx("p", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'} ${isRTL ? 'text-right' : ''}`, children: detail }, idx))) })] })] }) }) }, index))), _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 }, viewport: { once: true }, className: `flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`, children: [_jsxs(Button, { variant: "outline", className: "border-blue-200 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/20 font-semibold", onClick: () => window.open('https://maps.google.com', '_blank'), children: ["Get Directions", _jsx(ArrowRight, { className: `w-4 h-4 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}` })] }), _jsxs(Button, { className: "gradient-bg-blue font-semibold", onClick: () => window.open('https://wa.me/6285770024933', '_blank'), children: ["Schedule Visit", _jsx(Calendar, { className: `w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}` })] })] })] }), _jsx(motion.div, { initial: { opacity: 0, x: isRTL ? -50 : 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: _jsxs(Card, { className: `glass-heavy p-8 h-full ${isDark
                                                    ? 'border-blue-400/20 bg-slate-800/30'
                                                    : 'border-blue-200/50 bg-white/30'}`, children: [_jsxs("div", { className: "aspect-video bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden", children: [_jsx(MapPin, { className: "w-24 h-24 text-white z-10" }), _jsx(motion.div, { className: "absolute inset-0 flex items-center justify-center", initial: { scale: 1, opacity: 0.7 }, animate: { scale: [1, 1.2, 1], opacity: [0.7, 0.3, 0.7] }, transition: { duration: 2, repeat: Infinity }, children: _jsx("div", { className: "w-32 h-32 rounded-full bg-white/20" }) }), _jsx(motion.div, { className: "absolute inset-0 flex items-center justify-center", initial: { scale: 1, opacity: 0.5 }, animate: { scale: [1, 1.4, 1], opacity: [0.5, 0.1, 0.5] }, transition: { duration: 2, repeat: Infinity, delay: 0.5 }, children: _jsx("div", { className: "w-40 h-40 rounded-full bg-white/10" }) })] }), _jsx("h3", { className: `text-xl font-bold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "Delibix Office Location" }), _jsx("p", { className: `mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'text-right' : ''}`, children: "Strategically located in Yogyakarta's growing tech district, easily accessible by public transportation and major highways." }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: `flex items-center gap-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'} ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Zap, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { children: "High-speed fiber internet" })] }), _jsxs("div", { className: `flex items-center gap-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'} ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Coffee, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { children: "Client meeting rooms available" })] }), _jsxs("div", { className: `flex items-center gap-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'} ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Shield, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { children: "Secure and professional environment" })] })] })] }) })] })] }), _jsxs("section", { className: "mb-24", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsxs(Badge, { variant: "secondary", className: `mb-6 glass-blue ${isDark ? 'text-blue-300 border-blue-400/20' : 'text-blue-700 border-blue-200/50'} px-4 py-2`, children: [_jsx(HelpCircle, { className: `w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}` }), "Frequently Asked Questions"] }), _jsx("h2", { className: `text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "Everything You Need to Know" }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'text-right' : ''}`, children: "Quick answers to common questions about our services, processes, and partnerships." })] }), _jsx(motion.div, { className: "max-w-4xl mx-auto space-y-4", initial: "initial", whileInView: "animate", variants: staggerChildren, viewport: { once: true }, children: faqs.map((faq, index) => (_jsx(motion.div, { variants: fadeInUp, children: _jsxs(Card, { className: `glass-heavy overflow-hidden transition-all duration-300 ${isDark
                                                ? 'border-blue-400/20 bg-slate-800/30'
                                                : 'border-blue-200/50 bg-white/30'}`, children: [_jsx("button", { className: `w-full p-6 text-left transition-all duration-200 ${expandedFaq === index
                                                        ? isDark ? 'bg-blue-900/20' : 'bg-blue-50/50'
                                                        : 'hover:bg-blue-50/30 dark:hover:bg-blue-900/10'} ${isRTL ? 'text-right' : ''}`, onClick: () => setExpandedFaq(expandedFaq === index ? null : index), children: _jsxs("div", { className: `flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("h3", { className: `font-semibold pr-4 ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: faq.question }), _jsx(motion.div, { animate: { rotate: expandedFaq === index ? 180 : 0 }, transition: { duration: 0.2 }, children: _jsx(ChevronDown, { className: `w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'} flex-shrink-0` }) })] }) }), _jsx(motion.div, { initial: false, animate: {
                                                        height: expandedFaq === index ? 'auto' : 0,
                                                        opacity: expandedFaq === index ? 1 : 0
                                                    }, transition: { duration: 0.3 }, className: "overflow-hidden", children: _jsx("div", { className: `px-6 pb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'} leading-relaxed ${isRTL ? 'text-right' : ''}`, children: faq.answer }) })] }) }, index))) })] }), _jsx("section", { children: _jsx(motion.div, { className: "text-center", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: _jsxs(Card, { className: `glass-heavy p-12 lg:p-16 max-w-4xl mx-auto ${isDark
                                        ? 'border-blue-400/20 bg-slate-800/30'
                                        : 'border-blue-200/50 bg-white/30'}`, children: [_jsx(motion.div, { initial: { scale: 0 }, whileInView: { scale: 1 }, transition: { duration: 0.5, delay: 0.2 }, viewport: { once: true }, children: _jsx(Calendar, { className: "w-20 h-20 text-blue-500 mx-auto mb-8" }) }), _jsx("h3", { className: `text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: "Ready to Start Your Project?" }), _jsx("p", { className: `text-lg md:text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'text-right' : ''}`, children: "Let's schedule a free consultation to discuss your requirements and create a custom solution that exceeds your expectations." }), _jsxs("div", { className: `flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`, children: [_jsxs(Button, { size: "lg", className: "gradient-bg-blue hover:scale-105 transition-all duration-300 font-semibold px-8 py-6 text-lg", onClick: () => window.open('https://wa.me/6285770024933', '_blank'), children: ["Schedule Free Consultation", _jsx(Calendar, { className: `w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}` })] }), _jsxs(Button, { variant: "outline", size: "lg", className: "border-blue-200 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/20 font-semibold px-8 py-6 text-lg", onClick: () => {
                                                        const element = document.getElementById('work');
                                                        if (element) {
                                                            element.scrollIntoView({ behavior: 'smooth' });
                                                        }
                                                    }, children: ["View Our Portfolio", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}` })] })] }), _jsx(motion.div, { className: "mt-8 pt-8 border-t border-blue-200/30 dark:border-blue-700/30", initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, delay: 0.4 }, viewport: { once: true }, children: _jsxs("div", { className: `flex items-center justify-center gap-6 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'} ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsxs("div", { className: `flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Star, { className: "w-4 h-4 text-yellow-500" }), _jsx("span", { children: "100% Client Satisfaction" })] }), _jsxs("div", { className: `flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Timer, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { children: "< 2 Hour Response" })] }), _jsxs("div", { className: `flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Shield, { className: "w-4 h-4 text-green-500" }), _jsx("span", { children: "NDA Protected" })] })] }) })] }) }) }), _jsx(motion.div, { className: "text-center mt-16", initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, children: _jsxs(Button, { onClick: () => window.location.href = '#home', variant: "ghost", className: `${isDark
                                    ? 'text-blue-300 hover:bg-blue-400/10'
                                    : 'text-blue-600 hover:bg-blue-50'} rounded-xl font-medium`, children: [_jsx(Home, { className: `w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}` }), "Back to Home"] }) })] }) })] }));
}
//# sourceMappingURL=ContactPage.js.map