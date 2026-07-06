"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, Search, Star, Clock, ArrowRight, User, Tag, Filter, ChevronRight, Download, ExternalLink, Play, FileText, Video, Code, Lightbulb, Zap, Target, Settings, HelpCircle, CheckCircle, TrendingUp, Heart, Eye, Bookmark, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
const categories = [
    {
        id: "getting-started",
        name: "Getting Started",
        description: "Essential guides for new users to begin their AI journey",
        icon: Lightbulb,
        color: "green",
        articles: 24,
        difficulty: "beginner"
    },
    {
        id: "ai-implementation",
        name: "AI Implementation",
        description: "Technical guides for implementing AI solutions",
        icon: Settings,
        color: "blue",
        articles: 45,
        difficulty: "intermediate"
    },
    {
        id: "best-practices",
        name: "Best Practices",
        description: "Industry standards and optimization techniques",
        icon: Target,
        color: "purple",
        articles: 32,
        difficulty: "advanced"
    },
    {
        id: "troubleshooting",
        name: "Troubleshooting",
        description: "Common issues and their solutions",
        icon: HelpCircle,
        color: "orange",
        articles: 28,
        difficulty: "intermediate"
    },
    {
        id: "api-documentation",
        name: "API Documentation",
        description: "Complete API references and examples",
        icon: Code,
        color: "red",
        articles: 67,
        difficulty: "advanced"
    },
    {
        id: "case-studies",
        name: "Case Studies",
        description: "Real-world implementation examples and results",
        icon: TrendingUp,
        color: "yellow",
        articles: 18,
        difficulty: "intermediate"
    }
];
const featuredArticles = [
    {
        id: "1",
        title: "Complete Guide to AI ROI Calculation",
        description: "Learn how to calculate and maximize return on investment for your AI projects with real-world examples and frameworks.",
        category: "Best Practices",
        type: "guide",
        difficulty: "intermediate",
        readTime: "15 min",
        views: 2340,
        likes: 187,
        author: "Sarah Chen",
        lastUpdated: "2 days ago",
        tags: ["roi", "business-value", "metrics", "planning"],
        isFeatured: true,
        isPopular: true
    },
    {
        id: "2",
        title: "Building Your First AI Chatbot",
        description: "Step-by-step tutorial for creating an intelligent chatbot using Delibix's AI Playground with code examples.",
        category: "Getting Started",
        type: "tutorial",
        difficulty: "beginner",
        readTime: "25 min",
        views: 3450,
        likes: 234,
        author: "Mike Johnson",
        lastUpdated: "1 week ago",
        tags: ["chatbot", "ai-playground", "tutorial", "beginner"],
        isFeatured: true
    },
    {
        id: "3",
        title: "Advanced Machine Learning Model Optimization",
        description: "Deep dive into optimizing ML models for production environments with performance benchmarks.",
        category: "Best Practices",
        type: "guide",
        difficulty: "advanced",
        readTime: "30 min",
        views: 1890,
        likes: 156,
        author: "Dr. Lisa Wang",
        lastUpdated: "4 days ago",
        tags: ["optimization", "machine-learning", "performance", "production"],
        isPopular: true
    },
    {
        id: "4",
        title: "API Integration Walkthrough",
        description: "Complete video guide showing how to integrate Delibix APIs into your existing applications.",
        category: "API Documentation",
        type: "video",
        difficulty: "intermediate",
        readTime: "45 min",
        views: 2780,
        likes: 198,
        author: "David Rodriguez",
        lastUpdated: "1 week ago",
        tags: ["api", "integration", "video", "development"]
    },
    {
        id: "5",
        title: "Troubleshooting Common Integration Issues",
        description: "Solutions to the most frequently encountered problems when implementing AI solutions.",
        category: "Troubleshooting",
        type: "faq",
        difficulty: "intermediate",
        readTime: "10 min",
        views: 1560,
        likes: 89,
        author: "Ahmed Hassan",
        lastUpdated: "3 days ago",
        tags: ["troubleshooting", "integration", "common-issues", "solutions"]
    },
    {
        id: "6",
        title: "E-commerce AI Success Story: 300% Revenue Growth",
        description: "Detailed case study of how an e-commerce company achieved exceptional results with AI implementation.",
        category: "Case Studies",
        type: "guide",
        difficulty: "intermediate",
        readTime: "20 min",
        views: 4230,
        likes: 312,
        author: "Maria Garcia",
        lastUpdated: "5 days ago",
        tags: ["case-study", "e-commerce", "success-story", "revenue-growth"],
        isPopular: true
    }
];
const quickStats = [
    { label: "Total Articles", value: "214", change: "+12 this month" },
    { label: "Video Tutorials", value: "48", change: "+3 this month" },
    { label: "Code Examples", value: "89", change: "+7 this month" },
    { label: "Monthly Views", value: "45K+", change: "+18% growth" }
];
export function KnowledgeBasePage({ navigate }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedType, setSelectedType] = useState("all");
    const [selectedDifficulty, setSelectedDifficulty] = useState("all");
    const getTypeIcon = (type) => {
        switch (type) {
            case 'guide': return _jsx(BookOpen, { className: "w-4 h-4" });
            case 'tutorial': return _jsx(Play, { className: "w-4 h-4" });
            case 'video': return _jsx(Video, { className: "w-4 h-4" });
            case 'code': return _jsx(Code, { className: "w-4 h-4" });
            case 'faq': return _jsx(HelpCircle, { className: "w-4 h-4" });
            default: return _jsx(FileText, { className: "w-4 h-4" });
        }
    };
    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'beginner': return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
            case 'intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'advanced': return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
            default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400';
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [BookOpen, Lightbulb, Code, Settings, Target, Video];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(BookOpen, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "214 Articles & Tutorials" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Knowledge ", _jsx("span", { className: "gradient-text-blue", children: "Base" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Comprehensive guides, tutorials, and documentation to help you master AI implementation and maximize your success with Delibix solutions." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: quickStats.map((stat, index) => (_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text-blue mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: stat.label }), _jsx("div", { className: "text-xs text-foreground-muted", children: stat.change })] }, index))) }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' }), children: _jsxs("span", { className: "flex items-center gap-3", children: ["Start Learning", _jsx(ArrowRight, { className: "w-5 h-5" })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-400/10", onClick: () => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' }), children: "Browse Articles" })] })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsx(motion.div, { id: "search", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "mb-12", children: _jsx(Card, { className: "glass p-6", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-muted" }), _jsx(Input, { placeholder: "Search articles, tutorials, guides...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-11 text-lg py-6 bg-input-background" })] }), _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsxs(Select, { value: selectedCategory, onValueChange: setSelectedCategory, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "All Categories" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Categories" }), categories.map((category) => (_jsx(SelectItem, { value: category.id, children: category.name }, category.id)))] })] }), _jsxs(Select, { value: selectedType, onValueChange: setSelectedType, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "All Types" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Types" }), _jsx(SelectItem, { value: "guide", children: "Guides" }), _jsx(SelectItem, { value: "tutorial", children: "Tutorials" }), _jsx(SelectItem, { value: "video", children: "Videos" }), _jsx(SelectItem, { value: "code", children: "Code Examples" }), _jsx(SelectItem, { value: "faq", children: "FAQs" })] })] }), _jsxs(Select, { value: selectedDifficulty, onValueChange: setSelectedDifficulty, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "All Levels" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Levels" }), _jsx(SelectItem, { value: "beginner", children: "Beginner" }), _jsx(SelectItem, { value: "intermediate", children: "Intermediate" }), _jsx(SelectItem, { value: "advanced", children: "Advanced" })] })] })] })] }) }) }), _jsxs(motion.div, { id: "categories", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "mb-16", children: [_jsx("h2", { className: "text-center mb-12", children: "Browse by Category" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: categories.map((category, index) => {
                                    const Icon = category.icon;
                                    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsx(Card, { className: "glass p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: `w-12 h-12 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`, children: _jsx(Icon, { className: `w-6 h-6 text-${category.color}-600 dark:text-${category.color}-400` }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("h3", { className: "font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children: category.name }), _jsx(Badge, { className: getDifficultyColor(category.difficulty), children: category.difficulty })] }), _jsx("p", { className: "text-sm text-foreground-muted mb-4 line-clamp-2", children: category.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "text-sm font-medium", children: [category.articles, " articles"] }), _jsx(ChevronRight, { className: "w-4 h-4 text-foreground-muted group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" })] })] })] }) }) }, category.id));
                                }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, className: "mb-16", children: [_jsxs("div", { className: "flex items-center justify-between mb-8", children: [_jsx("h2", { children: "Featured Articles" }), _jsx(Button, { variant: "outline", className: "border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950", children: "View All Articles" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: featuredArticles.map((article, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 + index * 0.1 }, children: _jsx(Card, { className: "glass h-full hover:shadow-lg transition-all duration-300 cursor-pointer group", children: _jsxs("div", { className: "p-6 flex flex-col h-full", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [getTypeIcon(article.type), _jsx(Badge, { variant: "outline", className: "text-xs", children: article.type }), article.isFeatured && (_jsx(Badge, { className: "text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400", children: "Featured" })), article.isPopular && (_jsx(Badge, { className: "text-xs bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400", children: "Popular" }))] }), _jsx(Badge, { className: getDifficultyColor(article.difficulty), children: article.difficulty })] }), _jsx("h3", { className: "font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2", children: article.title }), _jsx("p", { className: "text-sm text-foreground-muted mb-4 line-clamp-3 flex-1", children: article.description }), _jsx("div", { className: "flex items-center gap-2 mb-4", children: article.tags.slice(0, 3).map((tag, tagIndex) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, tagIndex))) }), _jsx("div", { className: "flex items-center justify-between text-xs text-foreground-muted mb-4", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-3 h-3" }), _jsx("span", { children: article.readTime })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Eye, { className: "w-3 h-3" }), _jsx("span", { children: article.views })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Heart, { className: "w-3 h-3" }), _jsx("span", { children: article.likes })] })] }) }), _jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-border", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(User, { className: "w-4 h-4 text-foreground-muted" }), _jsx("span", { className: "text-sm", children: article.author })] }), _jsx("span", { className: "text-xs text-foreground-muted", children: article.lastUpdated })] })] }) }) }, article.id))) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "grid md:grid-cols-3 gap-6", children: [_jsxs(Card, { className: "glass p-6 text-center hover:shadow-lg transition-all duration-300", children: [_jsx(BookOpen, { className: "w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" }), _jsx("h3", { className: "mb-2", children: "Getting Started Guide" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "New to AI? Start here with our comprehensive beginner's guide." }), _jsx(Button, { variant: "outline", className: "w-full", children: "Start Reading" })] }), _jsxs(Card, { className: "glass p-6 text-center hover:shadow-lg transition-all duration-300", children: [_jsx(Video, { className: "w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" }), _jsx("h3", { className: "mb-2", children: "Video Tutorials" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "Learn with step-by-step video tutorials and live demonstrations." }), _jsx(Button, { variant: "outline", className: "w-full", children: "Watch Now" })] }), _jsxs(Card, { className: "glass p-6 text-center hover:shadow-lg transition-all duration-300", children: [_jsx(Code, { className: "w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" }), _jsx("h3", { className: "mb-2", children: "Code Examples" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "Copy and paste code examples to accelerate your development." }), _jsx(Button, { variant: "outline", className: "w-full", children: "Browse Code" })] })] })] })] }));
}
//# sourceMappingURL=KnowledgeBasePage.js.map