"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search, Calendar, Clock, User, Tag, ArrowRight, Filter, Grid3X3, List, BookOpen, TrendingUp, Star, Heart, Share2, MessageCircle, Brain, Code, Lightbulb, Rocket, Target, Zap, Globe, Shield, Database, Cloud, Monitor, Smartphone, Bot, Eye, Cpu, Network, Sparkles, Award, Trophy, Users, Building2, Briefcase, ChevronRight, ExternalLink, ThumbsUp, Bookmark, Play, Download, FileText, Image } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function BlogPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('latest');
    // Blog Categories
    const categories = [
        { id: 'all', name: 'All Posts', icon: BookOpen, description: 'All blog articles', count: 24, color: 'blue' },
        { id: 'ai-insights', name: 'AI Insights', icon: Brain, description: 'Latest in AI technology', count: 8, color: 'purple' },
        { id: 'development', name: 'Development', icon: Code, description: 'Programming & coding', count: 6, color: 'green' },
        { id: 'business', name: 'Business', icon: Briefcase, description: 'Business strategy & growth', count: 5, color: 'orange' },
        { id: 'tutorials', name: 'Tutorials', icon: Play, description: 'Step-by-step guides', count: 3, color: 'red' },
        { id: 'case-studies', name: 'Case Studies', icon: Target, description: 'Real-world success stories', count: 2, color: 'teal' }
    ];
    // Sample Blog Posts Data
    const blogPosts = [
        {
            id: '1',
            title: 'The Future of AI in Digital Consulting: What to Expect in 2024',
            excerpt: 'Explore the cutting-edge AI technologies that are reshaping the digital consulting landscape and how businesses can leverage them for competitive advantage.',
            content: 'Full article content here...',
            author: {
                name: 'Dr. Sarah Chen',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9d13b0c?w=150&h=150&fit=crop&crop=face',
                role: 'AI Research Director',
                bio: 'Leading AI researcher with 10+ years in machine learning and digital transformation.'
            },
            publishedAt: '2024-01-15',
            readingTime: 8,
            category: 'ai-insights',
            tags: ['AI', 'Machine Learning', 'Digital Transformation', 'Future Tech'],
            featured: true,
            trending: true,
            likes: 234,
            comments: 45,
            coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
            slug: 'future-ai-digital-consulting-2024'
        },
        {
            id: '2',
            title: 'Building Scalable React Applications with Modern Architecture Patterns',
            excerpt: 'Learn how to structure large-scale React applications using proven architectural patterns, state management strategies, and performance optimization techniques.',
            content: 'Full article content here...',
            author: {
                name: 'Michael Rodriguez',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
                role: 'Senior Frontend Engineer',
                bio: 'Full-stack developer specializing in React, TypeScript, and modern web technologies.'
            },
            publishedAt: '2024-01-12',
            readingTime: 12,
            category: 'development',
            tags: ['React', 'TypeScript', 'Architecture', 'Performance'],
            featured: false,
            trending: true,
            likes: 189,
            comments: 32,
            coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
            slug: 'scalable-react-applications-modern-architecture'
        },
        {
            id: '3',
            title: 'Digital Transformation ROI: Measuring Success in the AI Era',
            excerpt: 'Understanding key metrics and KPIs for measuring the return on investment in digital transformation initiatives powered by artificial intelligence.',
            content: 'Full article content here...',
            author: {
                name: 'Jennifer Park',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
                role: 'Business Strategy Consultant',
                bio: 'Strategic consultant helping enterprises navigate digital transformation and AI adoption.'
            },
            publishedAt: '2024-01-10',
            readingTime: 6,
            category: 'business',
            tags: ['ROI', 'Digital Transformation', 'KPIs', 'Business Strategy'],
            featured: true,
            trending: false,
            likes: 156,
            comments: 28,
            coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
            slug: 'digital-transformation-roi-measuring-success'
        },
        {
            id: '4',
            title: 'Complete Guide to Building AI Chatbots with Natural Language Processing',
            excerpt: 'Step-by-step tutorial on creating intelligent chatbots using modern NLP techniques, from design to deployment with real-world examples.',
            content: 'Full article content here...',
            author: {
                name: 'Alex Thompson',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
                role: 'AI Solutions Architect',
                bio: 'Expert in conversational AI and natural language processing with enterprise experience.'
            },
            publishedAt: '2024-01-08',
            readingTime: 15,
            category: 'tutorials',
            tags: ['Chatbots', 'NLP', 'Tutorial', 'AI Development'],
            featured: false,
            trending: true,
            likes: 267,
            comments: 58,
            coverImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop',
            slug: 'complete-guide-ai-chatbots-nlp'
        },
        {
            id: '5',
            title: 'Case Study: 300% Revenue Growth Through AI-Powered E-commerce Optimization',
            excerpt: 'How we helped a mid-size retailer achieve unprecedented growth using machine learning for personalization, inventory management, and customer insights.',
            content: 'Full article content here...',
            author: {
                name: 'Dr. Sarah Chen',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9d13b0c?w=150&h=150&fit=crop&crop=face',
                role: 'AI Research Director',
                bio: 'Leading AI researcher with 10+ years in machine learning and digital transformation.'
            },
            publishedAt: '2024-01-05',
            readingTime: 10,
            category: 'case-studies',
            tags: ['Case Study', 'E-commerce', 'AI Optimization', 'Revenue Growth'],
            featured: true,
            trending: false,
            likes: 312,
            comments: 76,
            coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
            slug: 'case-study-300-percent-revenue-growth-ai-ecommerce'
        },
        {
            id: '6',
            title: 'The Ethics of AI: Building Responsible Machine Learning Systems',
            excerpt: 'Exploring the ethical considerations in AI development, bias mitigation strategies, and frameworks for building responsible AI systems.',
            content: 'Full article content here...',
            author: {
                name: 'Dr. Ravi Patel',
                avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
                role: 'Ethics in AI Researcher',
                bio: 'Researcher focused on AI ethics, bias mitigation, and responsible machine learning practices.'
            },
            publishedAt: '2024-01-03',
            readingTime: 9,
            category: 'ai-insights',
            tags: ['AI Ethics', 'Responsible AI', 'Bias Mitigation', 'Machine Learning'],
            featured: false,
            trending: false,
            likes: 198,
            comments: 34,
            coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
            slug: 'ethics-ai-responsible-machine-learning-systems'
        }
    ];
    // Filter and sort posts
    const getFilteredPosts = () => {
        let filtered = blogPosts;
        // Filter by category
        if (activeCategory !== 'all') {
            filtered = filtered.filter(post => post.category === activeCategory);
        }
        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(post => post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                post.tags.some(tag => tag.toLowerCase().includes(query)) ||
                post.author.name.toLowerCase().includes(query));
        }
        // Sort posts
        switch (sortBy) {
            case 'popular':
                return filtered.sort((a, b) => b.likes - a.likes);
            case 'trending':
                return filtered.sort((a, b) => {
                    if (a.trending && !b.trending)
                        return -1;
                    if (!a.trending && b.trending)
                        return 1;
                    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
                });
            case 'latest':
            default:
                return filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        }
    };
    const filteredPosts = getFilteredPosts();
    const featuredPosts = blogPosts.filter(post => post.featured);
    // Format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    // Get category color
    const getCategoryColor = (categoryId) => {
        const category = categories.find(c => c.id === categoryId);
        return category?.color || 'blue';
    };
    // Handle post click
    const handlePostClick = (post) => {
        // In a real app, this would navigate to the individual post page
        console.log('Navigate to post:', post.slug);
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative pt-32 pb-20 px-6 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/30 dark:to-slate-900/50" }), _jsx("div", { className: "relative max-w-7xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsxs(Badge, { className: "mb-6 px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", children: [_jsx(BookOpen, { className: "w-4 h-4 mr-2" }), "Insights & Knowledge Hub"] }), _jsxs("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-slate-100", children: ["The ", _jsx("span", { className: "gradient-text-blue", children: "Blog" })] }), _jsx("p", { className: "text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed", children: "Discover the latest insights in AI, digital transformation, and cutting-edge technology. Expert knowledge from our team and industry leaders." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [_jsxs("div", { className: "relative max-w-md", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" }), _jsx(Input, { type: "text", placeholder: "Search articles...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-10 h-12 text-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border-blue-200 dark:border-blue-700" })] }), _jsxs(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg rounded-2xl backdrop-blur-xl", onClick: () => navigate && navigate('newsletter'), children: [_jsx(Heart, { className: "w-5 h-5 mr-2" }), "Subscribe"] })] })] }) })] }), featuredPosts.length > 0 && !searchQuery && (_jsx("section", { className: "py-16 px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "mb-12", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100", children: ["Featured ", _jsx("span", { className: "gradient-text-blue", children: "Articles" })] }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400", children: "Editor's picks and trending content" })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: featuredPosts.slice(0, 2).map((post, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, children: _jsxs(Card, { className: `group cursor-pointer h-full overflow-hidden ${isDark
                                        ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50'
                                        : 'bg-white/50 border-blue-100 hover:bg-blue-50/50'} transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-xl`, onClick: () => handlePostClick(post), children: [_jsxs("div", { className: "relative h-48 overflow-hidden", children: [_jsx(ImageWithFallback, { src: post.coverImage, alt: post.title, className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" }), _jsxs("div", { className: "absolute top-4 left-4 flex gap-2", children: [post.featured && (_jsxs(Badge, { className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300", children: [_jsx(Star, { className: "w-3 h-3 mr-1" }), "Featured"] })), post.trending && (_jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: [_jsx(TrendingUp, { className: "w-3 h-3 mr-1" }), "Trending"] }))] })] }), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx(Badge, { variant: "secondary", className: `bg-${getCategoryColor(post.category)}-100 text-${getCategoryColor(post.category)}-700`, children: categories.find(c => c.id === post.category)?.name }), _jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1", children: [_jsx(Clock, { className: "w-4 h-4" }), post.readingTime, " min read"] })] }), _jsx("h3", { className: "text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children: post.title }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4 line-clamp-2", children: post.excerpt }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(ImageWithFallback, { src: post.author.avatar, alt: post.author.name, className: "w-8 h-8 rounded-full" }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: post.author.name }), _jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: formatDate(post.publishedAt) })] })] }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(ThumbsUp, { className: "w-4 h-4" }), post.likes] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(MessageCircle, { className: "w-4 h-4" }), post.comments] })] })] })] })] }) }, post.id))) })] }) })), _jsx("section", { className: "py-12 px-6 bg-gradient-to-br from-blue-50/30 to-blue-100/20 dark:from-blue-950/20 dark:to-slate-900/30", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("div", { className: "flex flex-wrap gap-4 justify-center mb-8", children: categories.map((category) => (_jsxs(motion.button, { onClick: () => setActiveCategory(category.id), className: `flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'gradient-bg-blue text-white shadow-lg'
                                    : isDark
                                        ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                                        : 'bg-white/50 text-slate-700 hover:bg-blue-50/50 border border-blue-100'}`, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx(category.icon, { className: "w-5 h-5" }), category.name, _jsx(Badge, { variant: "secondary", className: "text-xs", children: category.count })] }, category.id))) }), _jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [_jsx("div", { className: "flex items-center gap-4", children: _jsxs("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: `px-4 py-2 rounded-xl border ${isDark
                                            ? 'bg-slate-800/50 border-slate-700 text-slate-200'
                                            : 'bg-white/50 border-blue-200 text-slate-800'} backdrop-blur-xl`, children: [_jsx("option", { value: "latest", children: "Latest" }), _jsx("option", { value: "popular", children: "Most Popular" }), _jsx("option", { value: "trending", children: "Trending" })] }) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: viewMode === 'grid' ? 'default' : 'outline', size: "sm", onClick: () => setViewMode('grid'), children: _jsx(Grid3X3, { className: "w-4 h-4" }) }), _jsx(Button, { variant: viewMode === 'list' ? 'default' : 'outline', size: "sm", onClick: () => setViewMode('list'), children: _jsx(List, { className: "w-4 h-4" }) })] })] })] }) }), _jsx("section", { className: "py-20 px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-3xl font-bold mb-2 text-slate-900 dark:text-slate-100", children: searchQuery ? `Search Results for "${searchQuery}"` : 'All Articles' }), _jsxs("p", { className: "text-slate-600 dark:text-slate-400", children: [filteredPosts.length, " article", filteredPosts.length !== 1 ? 's' : '', " found"] })] }), _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: viewMode === 'grid'
                                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                                    : 'space-y-6', children: filteredPosts.map((post, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, children: viewMode === 'grid' ? (_jsxs(Card, { className: `group cursor-pointer h-full overflow-hidden ${isDark
                                            ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50'
                                            : 'bg-white/50 border-blue-100 hover:bg-blue-50/50'} transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-xl`, onClick: () => handlePostClick(post), children: [_jsxs("div", { className: "relative h-48 overflow-hidden", children: [_jsx(ImageWithFallback, { src: post.coverImage, alt: post.title, className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" }), _jsx("div", { className: "absolute top-4 right-4", children: post.trending && (_jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: [_jsx(TrendingUp, { className: "w-3 h-3 mr-1" }), "Trending"] })) })] }), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center gap-4 mb-3", children: [_jsx(Badge, { variant: "secondary", children: categories.find(c => c.id === post.category)?.name }), _jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1", children: [_jsx(Clock, { className: "w-3 h-3" }), post.readingTime, " min"] })] }), _jsx("h3", { className: "font-bold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2", children: post.title }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2", children: post.excerpt }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(ImageWithFallback, { src: post.author.avatar, alt: post.author.name, className: "w-6 h-6 rounded-full" }), _jsx("span", { className: "text-xs text-slate-600 dark:text-slate-400", children: post.author.name })] }), _jsxs("div", { className: "flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(ThumbsUp, { className: "w-3 h-3" }), post.likes] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(MessageCircle, { className: "w-3 h-3" }), post.comments] })] })] })] })] })) : (_jsx(Card, { className: `group cursor-pointer overflow-hidden ${isDark
                                            ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50'
                                            : 'bg-white/50 border-blue-100 hover:bg-blue-50/50'} transition-all duration-300 hover:shadow-lg backdrop-blur-xl`, onClick: () => handlePostClick(post), children: _jsxs("div", { className: "flex gap-6 p-6", children: [_jsx("div", { className: "relative w-48 h-32 overflow-hidden rounded-lg flex-shrink-0", children: _jsx(ImageWithFallback, { src: post.coverImage, alt: post.title, className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-4 mb-3", children: [_jsx(Badge, { variant: "secondary", children: categories.find(c => c.id === post.category)?.name }), _jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1", children: [_jsx(Clock, { className: "w-4 h-4" }), post.readingTime, " min read"] }), post.trending && (_jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: [_jsx(TrendingUp, { className: "w-3 h-3 mr-1" }), "Trending"] }))] }), _jsx("h3", { className: "text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children: post.title }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4 line-clamp-2", children: post.excerpt }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(ImageWithFallback, { src: post.author.avatar, alt: post.author.name, className: "w-8 h-8 rounded-full" }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: post.author.name }), _jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: formatDate(post.publishedAt) })] })] }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(ThumbsUp, { className: "w-4 h-4" }), post.likes] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(MessageCircle, { className: "w-4 h-4" }), post.comments] })] })] })] })] }) })) }, post.id))) }, `${activeCategory}-${viewMode}-${sortBy}`) }), filteredPosts.length === 0 && (_jsxs("div", { className: "text-center py-16", children: [_jsx(BookOpen, { className: "w-16 h-16 mx-auto mb-4 text-slate-400" }), _jsx("h3", { className: "text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100", children: "No articles found" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-6", children: "Try adjusting your search or browse different categories" }), _jsx(Button, { onClick: () => {
                                        setSearchQuery('');
                                        setActiveCategory('all');
                                    }, children: "Clear Filters" })] }))] }) }), _jsx("section", { className: "py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Stay Updated with Latest Insights" }), _jsx("p", { className: "text-xl mb-8 text-blue-100", children: "Get the latest articles, tutorials, and AI insights delivered directly to your inbox every week." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto", children: [_jsx(Input, { type: "email", placeholder: "Enter your email", className: "flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70" }), _jsx(Button, { size: "lg", variant: "secondary", className: "bg-white text-blue-600 hover:bg-blue-50", onClick: () => navigate && navigate('newsletter'), children: "Subscribe" })] }), _jsxs("div", { className: "flex items-center justify-center gap-8 mt-8 text-blue-100", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Users, { className: "w-5 h-5" }), _jsx("span", { children: "10,000+ Subscribers" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Award, { className: "w-5 h-5" }), _jsx("span", { children: "Weekly Insights" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Shield, { className: "w-5 h-5" }), _jsx("span", { children: "No Spam" })] })] })] }) }) })] }));
}
//# sourceMappingURL=BlogPage.js.map