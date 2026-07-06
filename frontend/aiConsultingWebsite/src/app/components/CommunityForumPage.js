"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { MessageSquare, Users, Search, TrendingUp, Star, Clock, ArrowRight, ChevronRight, Filter, Pin, MessageCircle, ThumbsUp, Eye, Tag, Calendar, User, Plus, Bell, Settings, Hash, CheckCircle, Crown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
const categories = [
    {
        id: "general",
        name: "General Discussion",
        description: "Open discussions about AI, technology, and industry trends",
        icon: MessageSquare,
        color: "blue",
        topics: 1247,
        posts: 8934,
        lastActivity: "2 minutes ago"
    },
    {
        id: "ai-implementation",
        name: "AI Implementation",
        description: "Technical discussions about implementing AI solutions",
        icon: Settings,
        color: "green",
        topics: 892,
        posts: 5621,
        lastActivity: "5 minutes ago"
    },
    {
        id: "help-support",
        name: "Help & Support",
        description: "Get help with Delibix products and services",
        icon: CheckCircle,
        color: "orange",
        topics: 634,
        posts: 3847,
        lastActivity: "8 minutes ago"
    },
    {
        id: "showcase",
        name: "Project Showcase",
        description: "Share your AI projects and success stories",
        icon: Star,
        color: "purple",
        topics: 445,
        posts: 2156,
        lastActivity: "12 minutes ago"
    },
    {
        id: "announcements",
        name: "Announcements",
        description: "Official updates and announcements from Delibix",
        icon: Bell,
        color: "red",
        topics: 67,
        posts: 234,
        lastActivity: "1 hour ago"
    },
    {
        id: "feedback",
        name: "Product Feedback",
        description: "Share feedback and feature requests",
        icon: TrendingUp,
        color: "yellow",
        topics: 356,
        posts: 1789,
        lastActivity: "15 minutes ago"
    }
];
const recentPosts = [
    {
        id: "1",
        title: "Best practices for implementing AI in manufacturing?",
        author: "Sarah Chen",
        avatar: "SC",
        category: "AI Implementation",
        content: "Looking for advice on implementing predictive maintenance AI in our manufacturing setup. What are the key considerations and potential pitfalls to avoid?",
        replies: 23,
        views: 456,
        likes: 18,
        lastReply: "3 minutes ago",
        isPinned: true,
        isAnswered: true,
        tags: ["manufacturing", "predictive-maintenance", "implementation"],
        userType: "expert"
    },
    {
        id: "2",
        title: "ROI Calculator results interpretation",
        author: "Mike Johnson",
        avatar: "MJ",
        category: "Help & Support",
        content: "I've run the AI ROI calculator for our e-commerce business, but I'm having trouble interpreting some of the metrics. Can someone help explain the projected automation savings?",
        replies: 12,
        views: 234,
        likes: 8,
        lastReply: "8 minutes ago",
        tags: ["roi-calculator", "e-commerce", "metrics"],
        userType: "member"
    },
    {
        id: "3",
        title: "Successful chatbot implementation - 300% efficiency gain!",
        author: "Lisa Wang",
        avatar: "LW",
        category: "Project Showcase",
        content: "Wanted to share our incredible results after implementing an AI chatbot using Delibix's solutions. We achieved a 300% improvement in customer service efficiency.",
        replies: 34,
        views: 892,
        likes: 67,
        lastReply: "12 minutes ago",
        tags: ["chatbot", "success-story", "customer-service"],
        userType: "expert"
    },
    {
        id: "4",
        title: "New AI Playground features released!",
        author: "Delibix Team",
        avatar: "DT",
        category: "Announcements",
        content: "We're excited to announce new features in our AI Playground, including advanced model fine-tuning capabilities and improved collaboration tools.",
        replies: 45,
        views: 1234,
        likes: 89,
        lastReply: "25 minutes ago",
        isPinned: true,
        tags: ["ai-playground", "new-features", "announcement"],
        userType: "admin"
    },
    {
        id: "5",
        title: "Feature request: Multi-language support for documentation",
        author: "Ahmed Hassan",
        avatar: "AH",
        category: "Product Feedback",
        content: "Would love to see documentation translated into more languages, especially Arabic and Spanish for our international team.",
        replies: 19,
        views: 345,
        likes: 24,
        lastReply: "18 minutes ago",
        tags: ["documentation", "localization", "feature-request"],
        userType: "member"
    }
];
const communityStats = [
    { label: "Active Members", value: "15.2K", change: "+12%" },
    { label: "Total Posts", value: "23.4K", change: "+8%" },
    { label: "Topics Discussed", value: "3.6K", change: "+15%" },
    { label: "Expert Contributors", value: "234", change: "+5%" }
];
export function CommunityForumPage({ navigate }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("recent");
    const getUserTypeIcon = (userType) => {
        switch (userType) {
            case 'admin': return _jsx(Crown, { className: "w-3 h-3 text-yellow-500" });
            case 'moderator': return _jsx(CheckCircle, { className: "w-3 h-3 text-green-500" });
            case 'expert': return _jsx(Star, { className: "w-3 h-3 text-blue-500" });
            default: return null;
        }
    };
    const getUserTypeBadge = (userType) => {
        switch (userType) {
            case 'admin': return _jsx(Badge, { className: "text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400", children: "Admin" });
            case 'moderator': return _jsx(Badge, { className: "text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400", children: "Moderator" });
            case 'expert': return _jsx(Badge, { className: "text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400", children: "Expert" });
            default: return null;
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [MessageSquare, Users, Star, TrendingUp, Hash, Bell];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(MessageSquare, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "15.2K+ Active Members" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Community ", _jsx("span", { className: "gradient-text-blue", children: "Forum" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Connect with AI professionals, share knowledge, get help, and discuss the latest trends in artificial intelligence and automation." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: communityStats.map((stat, index) => (_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text-blue mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: stat.label }), _jsxs(Badge, { variant: "secondary", className: "text-xs text-green-600 bg-green-100 dark:bg-green-900/30", children: [stat.change, " this month"] })] }, index))) }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' }), children: _jsxs("span", { className: "flex items-center gap-3", children: [_jsx(Plus, { className: "w-5 h-5" }), "Join Discussion", _jsx(ArrowRight, { className: "w-5 h-5" })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-400/10", onClick: () => document.getElementById('recent-posts')?.scrollIntoView({ behavior: 'smooth' }), children: "Browse Topics" })] })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "mb-12", children: _jsx(Card, { className: "glass p-6", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsxs("div", { className: "flex-1 relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-muted" }), _jsx(Input, { placeholder: "Search discussions, topics, or users...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-10 bg-input-background" })] }), _jsxs(Select, { value: selectedCategory, onValueChange: setSelectedCategory, children: [_jsx(SelectTrigger, { className: "w-full md:w-48 bg-input-background", children: _jsx(SelectValue, { placeholder: "All Categories" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Categories" }), categories.map((category) => (_jsx(SelectItem, { value: category.id, children: category.name }, category.id)))] })] }), _jsxs(Select, { value: sortBy, onValueChange: setSortBy, children: [_jsx(SelectTrigger, { className: "w-full md:w-32 bg-input-background", children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "recent", children: "Recent" }), _jsx(SelectItem, { value: "popular", children: "Popular" }), _jsx(SelectItem, { value: "replies", children: "Most Replies" }), _jsx(SelectItem, { value: "views", children: "Most Views" })] })] })] }) }) }), _jsxs(motion.div, { id: "categories", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "mb-16", children: [_jsx("h2", { className: "text-center mb-12", children: "Discussion Categories" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: categories.map((category, index) => {
                                    const Icon = category.icon;
                                    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsx(Card, { className: "glass p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: `w-12 h-12 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`, children: _jsx(Icon, { className: `w-6 h-6 text-${category.color}-600 dark:text-${category.color}-400` }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h3", { className: "font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children: category.name }), _jsx("p", { className: "text-sm text-foreground-muted mb-4 line-clamp-2", children: category.description }), _jsxs("div", { className: "flex items-center justify-between text-xs text-foreground-muted", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("span", { children: [category.topics, " topics"] }), _jsxs("span", { children: [category.posts, " posts"] })] }), _jsx("span", { children: category.lastActivity })] })] })] }) }) }, category.id));
                                }) })] }), _jsxs(motion.div, { id: "recent-posts", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, className: "mb-16", children: [_jsxs("div", { className: "flex items-center justify-between mb-8", children: [_jsx("h2", { children: "Recent Discussions" }), _jsxs(Button, { variant: "outline", className: "border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950", children: [_jsx(Plus, { className: "w-4 h-4 mr-2" }), "New Post"] })] }), _jsx("div", { className: "space-y-4", children: recentPosts.map((post, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 + index * 0.1 }, children: _jsx(Card, { className: "glass p-6 hover:shadow-lg transition-all duration-300 cursor-pointer", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-semibold text-blue-600 dark:text-blue-400 flex-shrink-0", children: post.avatar }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsxs("div", { className: "flex items-center gap-2", children: [post.isPinned && _jsx(Pin, { className: "w-4 h-4 text-yellow-500" }), _jsx("h3", { className: "font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-1", children: post.title }), post.isAnswered && _jsx(CheckCircle, { className: "w-4 h-4 text-green-500" })] }), _jsx(Badge, { variant: "outline", className: "text-xs", children: post.category })] }), _jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("span", { className: "text-sm font-medium", children: post.author }), getUserTypeIcon(post.userType), getUserTypeBadge(post.userType), _jsx("span", { className: "text-xs text-foreground-muted", children: "\u00B7" }), _jsx("span", { className: "text-xs text-foreground-muted", children: post.lastReply })] }), _jsx("p", { className: "text-sm text-foreground-muted mb-4 line-clamp-2", children: post.content }), _jsx("div", { className: "flex items-center gap-2 mb-4", children: post.tags.map((tag, tagIndex) => (_jsxs(Badge, { variant: "secondary", className: "text-xs", children: [_jsx(Hash, { className: "w-3 h-3 mr-1" }), tag] }, tagIndex))) }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-6 text-xs text-foreground-muted", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(MessageCircle, { className: "w-4 h-4" }), _jsx("span", { children: post.replies })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Eye, { className: "w-4 h-4" }), _jsx("span", { children: post.views })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(ThumbsUp, { className: "w-4 h-4" }), _jsx("span", { children: post.likes })] })] }), _jsx(ChevronRight, { className: "w-4 h-4 text-foreground-muted" })] })] })] }) }) }, post.id))) }), _jsx("div", { className: "text-center mt-8", children: _jsx(Button, { variant: "outline", className: "border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950", children: "Load More Posts" }) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "max-w-4xl mx-auto", children: _jsxs(Card, { className: "glass p-8", children: [_jsx("h3", { className: "mb-6 text-center", children: "Community Guidelines" }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [_jsxs("div", { children: [_jsx("h4", { className: "mb-4 text-green-600 dark:text-green-400", children: "\u2705 Do's" }), _jsxs("ul", { className: "space-y-2 text-sm", children: [_jsxs("li", { className: "flex items-start gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }), _jsx("span", { children: "Be respectful and professional in all interactions" })] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }), _jsx("span", { children: "Search before posting to avoid duplicates" })] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }), _jsx("span", { children: "Use clear, descriptive titles for your posts" })] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }), _jsx("span", { children: "Share knowledge and help others learn" })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "mb-4 text-red-600 dark:text-red-400", children: "\u274C Don'ts" }), _jsxs("ul", { className: "space-y-2 text-sm", children: [_jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0", children: "\u00D7" }), _jsx("span", { children: "Post spam, promotional content, or off-topic discussions" })] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0", children: "\u00D7" }), _jsx("span", { children: "Share confidential or proprietary information" })] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0", children: "\u00D7" }), _jsx("span", { children: "Use offensive language or engage in personal attacks" })] }), _jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0", children: "\u00D7" }), _jsx("span", { children: "Post duplicate questions without searching first" })] })] })] })] })] }) })] })] }));
}
//# sourceMappingURL=CommunityForumPage.js.map