"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Filter, X, FileText, Briefcase, Users, Settings, Phone, Home, Clock, Star, ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function SearchPage({ navigate, initialQuery = '' }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const [query, setQuery] = useState(initialQuery);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    // Search data - comprehensive dataset
    const searchData = [
        // Services
        {
            id: 'ai-integration',
            title: 'AI Integration Services',
            description: 'Seamlessly integrate artificial intelligence into your existing business processes and workflows.',
            category: 'Services',
            type: 'service',
            relevance: 5,
            tags: ['AI', 'Integration', 'Business', 'Automation']
        },
        {
            id: 'web-development',
            title: 'Web Development',
            description: 'Custom web applications built with modern technologies like React, Next.js, and TypeScript.',
            category: 'Services',
            type: 'service',
            relevance: 5,
            tags: ['React', 'Next.js', 'TypeScript', 'Web', 'Frontend']
        },
        {
            id: 'digital-transformation',
            title: 'Digital Transformation Consulting',
            description: 'Guide your organization through comprehensive digital transformation initiatives.',
            category: 'Services',
            type: 'service',
            relevance: 4,
            tags: ['Digital', 'Transformation', 'Consulting', 'Strategy']
        },
        {
            id: 'mobile-development',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications for iOS and Android.',
            category: 'Services',
            type: 'service',
            relevance: 4,
            tags: ['Mobile', 'iOS', 'Android', 'React Native']
        },
        {
            id: 'cloud-solutions',
            title: 'Cloud Infrastructure Solutions',
            description: 'Scalable cloud architecture and migration services using AWS, Azure, and Google Cloud.',
            category: 'Services',
            type: 'service',
            relevance: 4,
            tags: ['Cloud', 'AWS', 'Azure', 'Google Cloud', 'Infrastructure']
        },
        // Portfolio Projects
        {
            id: 'ecommerce-platform',
            title: 'E-commerce Platform Redesign',
            description: 'Complete redesign and development of a modern e-commerce platform with AI-powered recommendations.',
            category: 'Portfolio',
            type: 'project',
            relevance: 5,
            tags: ['E-commerce', 'AI', 'React', 'Recommendations']
        },
        {
            id: 'fintech-dashboard',
            title: 'FinTech Analytics Dashboard',
            description: 'Real-time financial analytics dashboard with advanced data visualization and AI insights.',
            category: 'Portfolio',
            type: 'project',
            relevance: 4,
            tags: ['FinTech', 'Analytics', 'Dashboard', 'Data Visualization']
        },
        {
            id: 'healthcare-app',
            title: 'Healthcare Management System',
            description: 'Comprehensive healthcare management system with AI-powered patient diagnosis assistance.',
            category: 'Portfolio',
            type: 'project',
            relevance: 4,
            tags: ['Healthcare', 'AI', 'Management', 'Diagnosis']
        },
        {
            id: 'logistics-optimization',
            title: 'Logistics Route Optimization',
            description: 'AI-powered logistics and supply chain optimization system for enterprise clients.',
            category: 'Portfolio',
            type: 'project',
            relevance: 3,
            tags: ['Logistics', 'AI', 'Optimization', 'Supply Chain']
        },
        // Tools & Technologies
        {
            id: 'react-framework',
            title: 'React Development Framework',
            description: 'Our proprietary React development framework for rapid application development.',
            category: 'Tools',
            type: 'tool',
            relevance: 5,
            tags: ['React', 'Framework', 'Development', 'JavaScript']
        },
        {
            id: 'ai-toolkit',
            title: 'AI Development Toolkit',
            description: 'Comprehensive toolkit for AI model development, training, and deployment.',
            category: 'Tools',
            type: 'tool',
            relevance: 5,
            tags: ['AI', 'Machine Learning', 'Toolkit', 'Development']
        },
        {
            id: 'design-system',
            title: 'Delibix Design System',
            description: 'Our comprehensive design system with reusable components and design tokens.',
            category: 'Tools',
            type: 'tool',
            relevance: 4,
            tags: ['Design System', 'Components', 'UI/UX']
        },
        {
            id: 'api-gateway',
            title: 'API Gateway Solution',
            description: 'Scalable API gateway solution for microservices architecture.',
            category: 'Tools',
            type: 'tool',
            relevance: 3,
            tags: ['API', 'Gateway', 'Microservices', 'Architecture']
        },
        // Team & Company
        {
            id: 'team-overview',
            title: 'Our Team',
            description: 'Meet our talented team of developers, designers, and AI specialists.',
            category: 'Company',
            type: 'page',
            relevance: 3,
            tags: ['Team', 'Developers', 'Designers', 'AI Specialists']
        },
        {
            id: 'company-vision',
            title: 'Company Vision & Mission',
            description: 'Learn about Delibix\'s vision for the future of AI-native digital consulting.',
            category: 'Company',
            type: 'page',
            relevance: 3,
            tags: ['Vision', 'Mission', 'Company', 'AI-native']
        },
        {
            id: 'careers',
            title: 'Career Opportunities',
            description: 'Join our team and help shape the future of AI-powered digital solutions.',
            category: 'Company',
            type: 'page',
            relevance: 3,
            tags: ['Careers', 'Jobs', 'Opportunities', 'Team']
        },
        // Support & Resources
        {
            id: 'documentation',
            title: 'Technical Documentation',
            description: 'Comprehensive documentation for our APIs, tools, and development frameworks.',
            category: 'Support',
            type: 'resource',
            relevance: 4,
            tags: ['Documentation', 'API', 'Technical', 'Development']
        },
        {
            id: 'faq',
            title: 'Frequently Asked Questions',
            description: 'Find answers to common questions about our services and technologies.',
            category: 'Support',
            type: 'resource',
            relevance: 3,
            tags: ['FAQ', 'Questions', 'Help', 'Support']
        },
        {
            id: 'contact-support',
            title: 'Contact Support',
            description: 'Get in touch with our support team for technical assistance and inquiries.',
            category: 'Support',
            type: 'contact',
            relevance: 4,
            tags: ['Contact', 'Support', 'Help', 'Assistance']
        }
    ];
    // Categories for filtering
    const categories = [
        { id: 'all', name: 'All', icon: Search, count: searchData.length },
        { id: 'Services', name: 'Services', icon: Briefcase, count: searchData.filter(item => item.category === 'Services').length },
        { id: 'Portfolio', name: 'Portfolio', icon: FileText, count: searchData.filter(item => item.category === 'Portfolio').length },
        { id: 'Tools', name: 'Tools', icon: Settings, count: searchData.filter(item => item.category === 'Tools').length },
        { id: 'Company', name: 'Company', icon: Users, count: searchData.filter(item => item.category === 'Company').length },
        { id: 'Support', name: 'Support', icon: Phone, count: searchData.filter(item => item.category === 'Support').length }
    ];
    // Search functionality
    const searchResults = useMemo(() => {
        if (!query.trim())
            return [];
        const searchTerm = query.toLowerCase();
        return searchData.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(searchTerm);
            const descriptionMatch = item.description.toLowerCase().includes(searchTerm);
            const tagsMatch = item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            const categoryMatch = item.category.toLowerCase().includes(searchTerm);
            return titleMatch || descriptionMatch || tagsMatch || categoryMatch;
        }).sort((a, b) => {
            // Sort by relevance score first
            if (a.relevance !== b.relevance) {
                return b.relevance - a.relevance;
            }
            // Then by title match priority
            const aTitle = a.title.toLowerCase().includes(query.toLowerCase());
            const bTitle = b.title.toLowerCase().includes(query.toLowerCase());
            if (aTitle && !bTitle)
                return -1;
            if (bTitle && !aTitle)
                return 1;
            return 0;
        });
    }, [query]);
    // Filter results by category
    const filteredResults = useMemo(() => {
        if (selectedCategory === 'all')
            return searchResults;
        return searchResults.filter(item => item.category === selectedCategory);
    }, [searchResults, selectedCategory]);
    // Update categories count based on search results
    const updatedCategories = useMemo(() => {
        return categories.map(category => ({
            ...category,
            count: category.id === 'all'
                ? searchResults.length
                : searchResults.filter(item => item.category === category.id).length
        }));
    }, [searchResults, categories]);
    // Handle result click
    const handleResultClick = (result) => {
        // Navigate based on result type
        switch (result.type) {
            case 'service':
                navigate('home'); // Navigate to home and scroll to services
                setTimeout(() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                break;
            case 'project':
                navigate('home'); // Navigate to home and scroll to case studies
                setTimeout(() => {
                    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                break;
            case 'tool':
                navigate('home'); // Navigate to home and scroll to tools
                setTimeout(() => {
                    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                break;
            case 'page':
                if (result.id === 'team-overview')
                    navigate('team');
                else if (result.id === 'company-vision')
                    navigate('about');
                else if (result.id === 'careers')
                    navigate('careers');
                break;
            case 'resource':
                if (result.id === 'documentation')
                    navigate('documentation');
                else if (result.id === 'faq')
                    navigate('faq');
                break;
            case 'contact':
                navigate('contact');
                break;
            default:
                navigate('home');
        }
    };
    // Highlight search terms in text
    const highlightText = (text, query) => {
        if (!query.trim())
            return text;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) => regex.test(part) ? (_jsx("mark", { className: `${isDark ? 'bg-blue-500/30 text-blue-200' : 'bg-blue-200/60 text-blue-800'} px-1 rounded`, children: part }, index)) : part);
    };
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };
    // Update query when initialQuery changes
    useEffect(() => {
        if (initialQuery && initialQuery !== query) {
            setQuery(initialQuery);
        }
    }, [initialQuery]);
    return (_jsx("div", { className: `min-h-screen px-6 pt-32 pb-24 ${isRTL ? 'rtl' : ''}`, children: _jsxs(motion.div, { className: "max-w-6xl mx-auto", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsxs(motion.div, { className: "text-center mb-12", variants: itemVariants, children: [_jsx(motion.div, { className: `inline-flex items-center justify-center w-20 h-20 rounded-2xl glass-heavy mb-6 ${isDark
                                ? 'border border-blue-400/20 bg-slate-800/30'
                                : 'border border-blue-200/50 bg-white/30'} shadow-xl`, whileHover: { scale: 1.05, rotate: 5 }, transition: { duration: 0.3 }, children: _jsx(Search, { className: `w-10 h-10 ${isDark ? 'text-blue-400' : 'text-blue-500'}` }) }), _jsx("h1", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Search Delibix" }), _jsx("p", { className: `text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Find services, portfolio projects, tools, team information, and everything about our AI-native digital consulting." })] }), _jsx(motion.div, { className: "mb-8", variants: itemVariants, children: _jsxs("div", { className: "relative max-w-2xl mx-auto", children: [_jsx(Search, { className: `absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}` }), _jsx(Input, { type: "text", placeholder: "Search for services, projects, tools...", value: query, onChange: (e) => setQuery(e.target.value), className: `pl-12 pr-4 py-6 text-lg rounded-2xl ${isDark
                                    ? 'glass-heavy border-blue-400/20 bg-slate-800/30 text-slate-100 placeholder:text-slate-400'
                                    : 'glass-heavy border-blue-200/50 bg-white/30 text-slate-900 placeholder:text-slate-500'} focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300`, autoFocus: true }), query && (_jsx(motion.button, { className: `absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full ${isDark
                                    ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'} transition-colors`, onClick: () => setQuery(''), whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: _jsx(X, { className: "w-4 h-4" }) }))] }) }), query && searchResults.length > 0 && (_jsxs(motion.div, { className: "mb-8", variants: itemVariants, children: [_jsxs("div", { className: `flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("h3", { className: `font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: "Filters" }), _jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setIsFilterOpen(!isFilterOpen), className: `${isDark
                                        ? 'text-slate-400 hover:text-blue-300'
                                        : 'text-slate-500 hover:text-blue-600'}`, children: [_jsx(Filter, { className: "w-4 h-4 mr-2" }), isFilterOpen ? 'Hide' : 'Show', " Categories"] })] }), _jsx(AnimatePresence, { children: isFilterOpen && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.3 }, className: "overflow-hidden", children: _jsx("div", { className: "flex flex-wrap gap-3", children: updatedCategories.map((category) => (_jsxs(motion.button, { onClick: () => setSelectedCategory(category.id), className: `flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${selectedCategory === category.id
                                            ? 'gradient-bg-blue text-white shadow-lg'
                                            : isDark
                                                ? 'glass-secondary border border-blue-400/20 text-slate-300 hover:bg-blue-400/10'
                                                : 'glass-secondary border border-blue-200/50 text-slate-600 hover:bg-blue-50'}`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [_jsx(category.icon, { className: "w-4 h-4" }), _jsx("span", { children: category.name }), category.count > 0 && (_jsx("span", { className: `px-2 py-1 rounded-full text-xs ${selectedCategory === category.id
                                                    ? 'bg-white/20 text-white'
                                                    : isDark
                                                        ? 'bg-blue-500/20 text-blue-300'
                                                        : 'bg-blue-100 text-blue-600'}`, children: category.count }))] }, category.id))) }) })) })] })), _jsx(motion.div, { variants: itemVariants, children: !query ? (_jsxs("div", { className: `text-center py-12 ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: [_jsx(Sparkles, { className: `w-16 h-16 mx-auto mb-4 opacity-50 ${isDark ? 'text-blue-400' : 'text-blue-500'}` }), _jsx("p", { className: "text-lg mb-6", children: "Start typing to search our services, portfolio, and expertise" }), _jsx("div", { className: "flex flex-wrap justify-center gap-3", children: ['AI Integration', 'Web Development', 'React', 'Portfolio', 'Team'].map((suggestion) => (_jsx("button", { onClick: () => setQuery(suggestion), className: `px-4 py-2 rounded-lg font-medium transition-colors ${isDark
                                        ? 'glass-secondary border border-blue-400/20 text-slate-300 hover:bg-blue-400/10'
                                        : 'glass-secondary border border-blue-200/50 text-slate-600 hover:bg-blue-50'}`, children: suggestion }, suggestion))) })] })) : filteredResults.length === 0 ? (_jsxs("div", { className: `text-center py-12 ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: [_jsx(Search, { className: `w-16 h-16 mx-auto mb-4 opacity-50 ${isDark ? 'text-blue-400' : 'text-blue-500'}` }), _jsxs("p", { className: "text-lg mb-4", children: ["No results found for \"", query, "\""] }), _jsx("p", { className: "mb-6", children: "Try different keywords or browse our categories" }), _jsxs(Button, { onClick: () => navigate('home'), variant: "outline", className: `${isDark
                                    ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                    : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, children: [_jsx(Home, { className: "w-4 h-4 mr-2" }), "Back to Home"] })] })) : (_jsxs("div", { children: [_jsxs("div", { className: `flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsxs("p", { className: `${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: ["Found ", filteredResults.length, " result", filteredResults.length !== 1 ? 's' : '', " for \"", query, "\""] }), _jsxs("div", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`, children: [_jsx(Clock, { className: "w-4 h-4" }), _jsx("span", { children: "Sorted by relevance" })] })] }), _jsx("div", { className: "space-y-4", children: filteredResults.map((result, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: index * 0.05 }, className: `glass-heavy rounded-2xl p-6 cursor-pointer group ${isDark
                                        ? 'border border-blue-400/20 bg-slate-800/30 hover:bg-slate-700/30'
                                        : 'border border-blue-200/50 bg-white/30 hover:bg-blue-50/30'} shadow-lg hover:shadow-xl transition-all duration-300`, onClick: () => handleResultClick(result), whileHover: { scale: 1.01, y: -2 }, children: _jsxs("div", { className: `flex items-start justify-between gap-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: `flex items-center gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: `px-3 py-1 rounded-full text-xs font-medium ${isDark
                                                                    ? 'bg-blue-500/20 text-blue-300'
                                                                    : 'bg-blue-100 text-blue-700'}`, children: result.category }), _jsx("div", { className: `flex items-center gap-1 ${isDark ? 'text-amber-400' : 'text-amber-500'}`, children: [...Array(Math.min(5, Math.max(1, result.relevance)))].map((_, i) => (_jsx(Star, { className: "w-3 h-3 fill-current" }, i))) })] }), _jsx("h3", { className: `text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors ${isDark ? 'text-slate-100' : 'text-slate-900'} ${isRTL ? 'text-right' : ''}`, children: highlightText(result.title, query) }), _jsx("p", { className: `leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'} ${isRTL ? 'text-right' : ''}`, children: highlightText(result.description, query) })] }), _jsx(motion.div, { className: "flex-shrink-0", whileHover: { x: isRTL ? -4 : 4 }, children: _jsx(ChevronRight, { className: `w-5 h-5 ${isDark ? 'text-slate-400 group-hover:text-blue-300' : 'text-slate-500 group-hover:text-blue-600'} transition-colors ${isRTL ? 'rotate-180' : ''}` }) })] }) }, result.id))) })] })) }), query && (_jsx(motion.div, { className: "text-center mt-12", variants: itemVariants, children: _jsxs(Button, { onClick: () => navigate('home'), variant: "outline", size: "lg", className: `${isDark
                            ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                            : 'border-blue-200 text-blue-600 hover:bg-blue-50'} rounded-xl px-8 py-6`, children: [_jsx(Home, { className: "w-5 h-5 mr-3" }), "Back to Home"] }) }))] }) }));
}
//# sourceMappingURL=SearchPage.js.map