"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Search, MessageCircle, HelpCircle, Book, Video, Download, Star, ChevronRight, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
export function HelpCenterPage({ navigate }) {
    const [searchQuery, setSearchQuery] = useState('');
    const helpCategories = [
        {
            title: "Getting Started",
            description: "Essential guides for new users",
            icon: Book,
            color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
            articles: 12,
            popular: true
        },
        {
            title: "API & Integration",
            description: "Technical implementation guides",
            icon: MessageCircle,
            color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
            articles: 24,
            popular: true
        },
        {
            title: "Billing & Pricing",
            description: "Payment and subscription help",
            icon: Star,
            color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
            articles: 8,
            popular: false
        },
        {
            title: "Troubleshooting",
            description: "Solve common issues quickly",
            icon: HelpCircle,
            color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
            articles: 18,
            popular: true
        },
        {
            title: "Video Tutorials",
            description: "Step-by-step video guides",
            icon: Video,
            color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
            articles: 15,
            popular: false
        },
        {
            title: "Best Practices",
            description: "Tips and optimization guides",
            icon: Download,
            color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
            articles: 10,
            popular: false
        }
    ];
    const popularArticles = [
        {
            title: "How to get started with Delibix AI",
            category: "Getting Started",
            readTime: "5 min",
            rating: 4.9,
            helpful: 284
        },
        {
            title: "API Authentication Guide",
            category: "API & Integration",
            readTime: "8 min",
            rating: 4.8,
            helpful: 192
        },
        {
            title: "Understanding pricing plans",
            category: "Billing & Pricing",
            readTime: "6 min",
            rating: 4.7,
            helpful: 156
        },
        {
            title: "Troubleshooting common API errors",
            category: "Troubleshooting",
            readTime: "10 min",
            rating: 4.8,
            helpful: 134
        }
    ];
    const quickActions = [
        {
            title: "Contact Support",
            description: "Get help from our team",
            icon: MessageCircle,
            action: () => navigate('support'),
            color: "bg-blue-600 hover:bg-blue-700 text-white"
        },
        {
            title: "Live Chat",
            description: "Chat with us now",
            icon: Users,
            action: () => { },
            color: "bg-green-600 hover:bg-green-700 text-white"
        },
        {
            title: "Schedule Call",
            description: "Book a consultation",
            icon: Clock,
            action: () => navigate('contact'),
            color: "bg-purple-600 hover:bg-purple-700 text-white"
        }
    ];
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
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx("section", { className: "px-6 py-32 text-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900", children: _jsxs(motion.div, { className: "max-w-4xl mx-auto", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsx(motion.div, { variants: itemVariants, className: "flex justify-center mb-6", children: _jsx("div", { className: "w-16 h-16 rounded-2xl gradient-bg-blue flex items-center justify-center shadow-lg", children: _jsx(HelpCircle, { className: "w-8 h-8 text-white" }) }) }), _jsx(motion.h1, { variants: itemVariants, className: "mb-6 text-slate-900 dark:text-slate-100", children: "How can we help you?" }), _jsx(motion.p, { variants: itemVariants, className: "text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto", children: "Find answers, get support, and learn how to make the most of Delibix AI solutions." }), _jsx(motion.div, { variants: itemVariants, className: "max-w-xl mx-auto mb-8", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" }), _jsx(Input, { type: "text", placeholder: "Search for help articles...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-12 h-14 text-lg glass border-blue-200 dark:border-blue-800" })] }) }), _jsx(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row gap-4 justify-center", children: quickActions.map((action, index) => (_jsxs(Button, { onClick: action.action, className: `h-12 px-6 ${action.color} transition-all duration-200 hover:scale-105`, children: [_jsx(action.icon, { className: "w-4 h-4 mr-2" }), action.title] }, index))) })] }) }), _jsx("section", { className: "px-6 py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4 text-slate-900 dark:text-slate-100", children: "Browse Help Topics" }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: "Find the information you need organized by topic" })] }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: helpCategories.map((category, index) => (_jsx(motion.div, { variants: itemVariants, children: _jsxs(Card, { className: "h-full glass card-hover cursor-pointer", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsx("div", { className: `w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`, children: _jsx(category.icon, { className: "w-6 h-6" }) }), category.popular && (_jsx(Badge, { className: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", children: "Popular" }))] }), _jsx(CardTitle, { className: "text-xl mb-2", children: category.title }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: category.description })] }), _jsx(CardContent, { className: "pt-0", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "text-sm text-slate-500", children: [category.articles, " articles"] }), _jsx(ChevronRight, { className: "w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" })] }) })] }) }, category.title))) })] }) }), _jsx("section", { className: "px-6 py-20 bg-slate-50 dark:bg-slate-900/50", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, children: [_jsx("h2", { className: "text-center mb-12 text-slate-900 dark:text-slate-100", children: "Popular Help Articles" }), _jsx("div", { className: "space-y-4", children: popularArticles.map((article, index) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, children: _jsx(Card, { className: "glass card-hover cursor-pointer", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: article.title }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400", children: [_jsx("span", { children: article.category }), _jsx("span", { children: "\u2022" }), _jsxs("span", { children: [article.readTime, " read"] }), _jsx("span", { children: "\u2022" }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }), _jsx("span", { children: article.rating })] }), _jsx("span", { children: "\u2022" }), _jsxs("span", { children: [article.helpful, " found helpful"] })] })] }), _jsx(ChevronRight, { className: "w-5 h-5 text-slate-400" })] }) }) }) }, index))) })] }) }) }), _jsx("section", { className: "px-6 py-20", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, children: [_jsx("h2", { className: "mb-6 text-slate-900 dark:text-slate-100", children: "Still need help?" }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto", children: "Our support team is available 24/7 to help you with any questions or issues." }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [_jsxs(Card, { className: "glass text-center p-6", children: [_jsx(MessageCircle, { className: "w-12 h-12 text-blue-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Live Chat" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 mb-4", children: "Get instant help from our support team" }), _jsx(Button, { className: "w-full gradient-bg-blue text-white", children: "Start Chat" })] }), _jsxs(Card, { className: "glass text-center p-6", children: [_jsx(Users, { className: "w-12 h-12 text-green-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Community" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 mb-4", children: "Connect with other users and experts" }), _jsx(Button, { onClick: () => navigate('community'), variant: "outline", className: "w-full border-green-300 text-green-600 hover:bg-green-50", children: "Join Community" })] }), _jsxs(Card, { className: "glass text-center p-6", children: [_jsx(Clock, { className: "w-12 h-12 text-purple-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Support Ticket" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 mb-4", children: "Submit a detailed support request" }), _jsx(Button, { onClick: () => navigate('support'), variant: "outline", className: "w-full border-purple-300 text-purple-600 hover:bg-purple-50", children: "Create Ticket" })] })] })] }) }) })] }));
}
//# sourceMappingURL=HelpCenterPage.js.map