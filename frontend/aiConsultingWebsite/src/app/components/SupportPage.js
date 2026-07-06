"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Send, MessageCircle, Clock, User, Mail, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
export function SupportPage({ navigate }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        category: '',
        priority: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const supportChannels = [
        {
            title: "Live Chat",
            description: "Get instant help from our support team",
            icon: MessageCircle,
            availability: "24/7",
            responseTime: "< 2 minutes",
            color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
        },
        {
            title: "Email Support",
            description: "Detailed support via email",
            icon: Mail,
            availability: "24/7",
            responseTime: "< 4 hours",
            color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
        },
        {
            title: "Phone Support",
            description: "Direct phone support for urgent issues",
            icon: Phone,
            availability: "Business Hours",
            responseTime: "< 1 hour",
            color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
        }
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                subject: '',
                category: '',
                priority: '',
                message: ''
            });
        }, 3000);
    };
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx("section", { className: "px-6 py-32 text-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900", children: _jsxs(motion.div, { className: "max-w-4xl mx-auto", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsx(motion.div, { variants: itemVariants, className: "flex justify-center mb-6", children: _jsx("div", { className: "w-16 h-16 rounded-2xl gradient-bg-blue flex items-center justify-center shadow-lg", children: _jsx(MessageCircle, { className: "w-8 h-8 text-white" }) }) }), _jsx(motion.h1, { variants: itemVariants, className: "mb-6 text-slate-900 dark:text-slate-100", children: "Support Center" }), _jsx(motion.p, { variants: itemVariants, className: "text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto", children: "Get the help you need with Delibix AI. Our expert support team is here to assist you 24/7." }), _jsx(motion.div, { variants: itemVariants, className: "grid md:grid-cols-3 gap-6", children: supportChannels.map((channel, index) => (_jsx(Card, { className: "glass card-hover cursor-pointer", children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: `w-12 h-12 rounded-xl ${channel.color} flex items-center justify-center mx-auto mb-4`, children: _jsx(channel.icon, { className: "w-6 h-6" }) }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: channel.title }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 mb-4", children: channel.description }), _jsxs("div", { className: "flex justify-center gap-2 text-xs", children: [_jsx(Badge, { variant: "outline", children: channel.availability }), _jsx(Badge, { variant: "outline", children: channel.responseTime })] })] }) }, index))) })] }) }), _jsx("section", { className: "px-6 py-20", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4 text-slate-900 dark:text-slate-100", children: "Submit a Support Ticket" }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: "Can't find what you're looking for? Submit a detailed support request and we'll get back to you soon." })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.2 }, children: _jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Send, { className: "w-5 h-5" }), "Create Support Ticket"] }) }), _jsx(CardContent, { children: !isSubmitted ? (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: "Full Name *" }), _jsx(Input, { value: formData.name, onChange: (e) => handleInputChange('name', e.target.value), placeholder: "Enter your full name", required: true, className: "glass" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: "Email Address *" }), _jsx(Input, { type: "email", value: formData.email, onChange: (e) => handleInputChange('email', e.target.value), placeholder: "Enter your email", required: true, className: "glass" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: "Subject *" }), _jsx(Input, { value: formData.subject, onChange: (e) => handleInputChange('subject', e.target.value), placeholder: "Brief description of your issue", required: true, className: "glass" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: "Category *" }), _jsxs(Select, { value: formData.category, onValueChange: (value) => handleInputChange('category', value), children: [_jsx(SelectTrigger, { className: "glass", children: _jsx(SelectValue, { placeholder: "Select category" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "api", children: "API & Integration" }), _jsx(SelectItem, { value: "billing", children: "Billing & Payments" }), _jsx(SelectItem, { value: "technical", children: "Technical Issues" }), _jsx(SelectItem, { value: "account", children: "Account Management" }), _jsx(SelectItem, { value: "general", children: "General Questions" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: "Priority *" }), _jsxs(Select, { value: formData.priority, onValueChange: (value) => handleInputChange('priority', value), children: [_jsx(SelectTrigger, { className: "glass", children: _jsx(SelectValue, { placeholder: "Select priority" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "low", children: "Low - General inquiry" }), _jsx(SelectItem, { value: "medium", children: "Medium - Service issue" }), _jsx(SelectItem, { value: "high", children: "High - Business impact" }), _jsx(SelectItem, { value: "urgent", children: "Urgent - Service down" })] })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: "Message *" }), _jsx(Textarea, { value: formData.message, onChange: (e) => handleInputChange('message', e.target.value), placeholder: "Please describe your issue in detail. Include any error messages, steps to reproduce, and what you expected to happen.", required: true, className: "glass min-h-[120px]" })] }), _jsx("div", { className: "bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4", children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(AlertCircle, { className: "w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" }), _jsxs("div", { className: "text-sm text-blue-800 dark:text-blue-300", children: [_jsx("p", { className: "font-medium mb-1", children: "Before submitting:" }), _jsxs("ul", { className: "space-y-1 text-xs", children: [_jsx("li", { children: "\u2022 Check our FAQ and Help Center for quick answers" }), _jsx("li", { children: "\u2022 Include relevant error messages or screenshots" }), _jsx("li", { children: "\u2022 Provide steps to reproduce the issue" }), _jsx("li", { children: "\u2022 Mention your account email if different from above" })] })] })] }) }), _jsxs(Button, { type: "submit", className: "w-full gradient-bg-blue text-white hover:opacity-90 transition-opacity h-12", children: [_jsx(Send, { className: "w-4 h-4 mr-2" }), "Submit Support Ticket"] })] })) : (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "text-center py-12", children: [_jsx("div", { className: "w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx(CheckCircle, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Ticket Submitted Successfully!" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto", children: "Your support ticket has been created. You'll receive a confirmation email shortly with your ticket number." }), _jsxs("div", { className: "bg-green-50 dark:bg-green-900/20 rounded-lg p-4 max-w-sm mx-auto", children: [_jsxs("p", { className: "text-sm text-green-800 dark:text-green-300", children: [_jsx("strong", { children: "Ticket ID:" }), " #SUP-", Date.now().toString().slice(-6)] }), _jsxs("p", { className: "text-sm text-green-800 dark:text-green-300", children: [_jsx("strong", { children: "Expected Response:" }), " Within 4 hours"] })] })] })) })] }) })] }) }), _jsx("section", { className: "px-6 py-20 bg-slate-50 dark:bg-slate-900/50", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4 text-slate-900 dark:text-slate-100", children: "Other Ways to Get Help" }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400", children: "Explore our self-service options for quick answers" })] }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [_jsx(Card, { className: "glass card-hover cursor-pointer", onClick: () => navigate('help-center'), children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-xl flex items-center justify-center mx-auto mb-4", children: _jsx(MessageCircle, { className: "w-6 h-6" }) }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "Help Center" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Browse articles and guides" })] }) }), _jsx(Card, { className: "glass card-hover cursor-pointer", onClick: () => navigate('faq'), children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "w-12 h-12 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-xl flex items-center justify-center mx-auto mb-4", children: _jsx(CheckCircle, { className: "w-6 h-6" }) }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "FAQ" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Find quick answers" })] }) }), _jsx(Card, { className: "glass card-hover cursor-pointer", onClick: () => navigate('documentation'), children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "w-12 h-12 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-xl flex items-center justify-center mx-auto mb-4", children: _jsx(User, { className: "w-6 h-6" }) }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "Documentation" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Technical guides & API docs" })] }) })] })] }) })] }));
}
//# sourceMappingURL=SupportPage.js.map