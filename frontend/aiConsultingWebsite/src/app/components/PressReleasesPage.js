"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, User, ArrowRight, Search, Filter, Eye, Share2, Download, ExternalLink, Clock, Tag, ChevronRight, Star, TrendingUp, Zap, Building2, Award, Globe, Users, Target, Megaphone, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
const pressReleases = [
    {
        id: "1",
        title: "Delibix Raises $2.5M Series A to Democratize AI for Indonesian SMEs",
        excerpt: "Leading AI consulting firm secures funding from Google Cloud and Techstars to expand operations across Southeast Asia and develop innovative AI solutions for small and medium enterprises.",
        content: "Delibix, Indonesia's premier AI-native digital consulting company, today announced the successful completion of its $2.5 million Series A funding round...",
        publishDate: "2024-03-15",
        category: "Funding",
        tags: ["funding", "series-a", "expansion", "sme", "southeast-asia"],
        author: "Corporate Communications",
        readTime: "4 min read",
        views: 2340,
        featured: true,
        urgent: true
    },
    {
        id: "2",
        title: "Delibix Launches AI Playground: Revolutionary Platform for Business AI Experimentation",
        excerpt: "New interactive platform allows businesses to test AI capabilities without technical expertise, featuring 25+ pre-built models and real-time ROI calculations.",
        content: "Today, Delibix unveiled its groundbreaking AI Playground platform, designed to make artificial intelligence accessible to businesses of all sizes...",
        publishDate: "2024-03-10",
        category: "Product Launch",
        tags: ["ai-playground", "product-launch", "innovation", "accessibility"],
        author: "Product Team",
        readTime: "3 min read",
        views: 1890,
        featured: true
    },
    {
        id: "3",
        title: "Partnership Announcement: Delibix and Universitas Gadjah Mada Launch AI Research Initiative",
        excerpt: "Strategic partnership aims to advance AI research in Indonesia and develop next-generation AI solutions for local industries and government sectors.",
        content: "Delibix is proud to announce a strategic research partnership with Universitas Gadjah Mada (UGM), Indonesia's leading university...",
        publishDate: "2024-03-05",
        category: "Partnership",
        tags: ["ugm", "research", "partnership", "education", "indonesia"],
        author: "Strategic Partnerships",
        readTime: "5 min read",
        views: 1456
    },
    {
        id: "4",
        title: "Delibix Achieves 99% Client Satisfaction Rate, Completes 25+ AI Implementation Projects",
        excerpt: "Company milestone highlights exceptional service delivery and successful AI transformations across healthcare, manufacturing, and e-commerce sectors.",
        content: "Delibix today announced significant operational milestones, including a 99% client satisfaction rate and the successful completion of over 25 AI implementation projects...",
        publishDate: "2024-02-28",
        category: "Milestone",
        tags: ["milestone", "client-satisfaction", "projects", "success"],
        author: "Operations Team",
        readTime: "3 min read",
        views: 1234,
        featured: true
    },
    {
        id: "5",
        title: "Delibix Expands Team with Senior AI Engineers from Google and Microsoft",
        excerpt: "Strategic hiring initiative brings world-class talent to strengthen technical capabilities and accelerate product development roadmap.",
        content: "Delibix continues its rapid growth trajectory with the addition of senior AI engineers from leading technology companies...",
        publishDate: "2024-02-20",
        category: "Team",
        tags: ["hiring", "team-expansion", "talent", "growth"],
        author: "Human Resources",
        readTime: "2 min read",
        views: 987
    },
    {
        id: "6",
        title: "Delibix Wins 'AI Innovation of the Year' at Indonesia Tech Awards 2024",
        excerpt: "Recognition for groundbreaking work in making AI accessible to Indonesian businesses and contribution to the country's digital transformation.",
        content: "We are honored to announce that Delibix has been awarded 'AI Innovation of the Year' at the prestigious Indonesia Tech Awards 2024...",
        publishDate: "2024-02-15",
        category: "Award",
        tags: ["award", "recognition", "innovation", "indonesia-tech-awards"],
        author: "Marketing Team",
        readTime: "2 min read",
        views: 1678,
        featured: true
    }
];
const categories = [
    { id: "all", name: "All Categories", count: pressReleases.length },
    { id: "Funding", name: "Funding & Investment", count: 1 },
    { id: "Product Launch", name: "Product Launches", count: 1 },
    { id: "Partnership", name: "Partnerships", count: 1 },
    { id: "Milestone", name: "Company Milestones", count: 1 },
    { id: "Team", name: "Team & Hiring", count: 1 },
    { id: "Award", name: "Awards & Recognition", count: 1 }
];
const pressStats = [
    { label: "Press Releases", value: "24", change: "+6 this quarter" },
    { label: "Media Mentions", value: "156", change: "+45% growth" },
    { label: "Media Reach", value: "2.3M", change: "People reached" },
    { label: "Coverage Score", value: "94%", change: "Positive sentiment" }
];
export function PressReleasesPage({ navigate }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("date");
    const filteredReleases = pressReleases.filter(release => {
        const matchesSearch = release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            release.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            release.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === "all" || release.category === selectedCategory;
        return matchesSearch && matchesCategory;
    }).sort((a, b) => {
        switch (sortBy) {
            case "views":
                return b.views - a.views;
            case "title":
                return a.title.localeCompare(b.title);
            default:
                return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        }
    });
    const getCategoryIcon = (category) => {
        switch (category) {
            case "Funding": return TrendingUp;
            case "Product Launch": return Zap;
            case "Partnership": return Users;
            case "Milestone": return Target;
            case "Team": return User;
            case "Award": return Award;
            default: return FileText;
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [Megaphone, FileText, Globe, Award, TrendingUp, Building2];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Megaphone, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Latest Company News" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Press ", _jsx("span", { className: "gradient-text-blue", children: "Releases" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Latest announcements, milestones, and company news from Delibix. Stay informed about our journey in democratizing AI technology." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: pressStats.map((stat, index) => (_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text-blue mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: stat.label }), _jsx("div", { className: "text-xs text-foreground-muted", children: stat.change })] }, index))) }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => document.getElementById('releases')?.scrollIntoView({ behavior: 'smooth' }), children: _jsxs("span", { className: "flex items-center gap-3", children: ["Read Latest News", _jsx(ArrowRight, { className: "w-5 h-5" })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-400/10", onClick: () => navigate('press-media-kit'), children: "Media Kit" })] })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "mb-12", children: _jsx(Card, { className: "glass p-6", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-muted" }), _jsx(Input, { placeholder: "Search press releases...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-11 text-lg py-6 bg-input-background" })] }), _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsxs(Select, { value: selectedCategory, onValueChange: setSelectedCategory, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "All Categories" }) }), _jsx(SelectContent, { children: categories.map((category) => (_jsxs(SelectItem, { value: category.id, children: [category.name, " (", category.count, ")"] }, category.id))) })] }), _jsxs(Select, { value: sortBy, onValueChange: setSortBy, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "Sort by" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "date", children: "Latest First" }), _jsx(SelectItem, { value: "views", children: "Most Viewed" }), _jsx(SelectItem, { value: "title", children: "Title A-Z" })] })] })] })] }) }) }), filteredReleases.length > 0 && filteredReleases[0].featured && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "mb-16", children: [_jsx("h2", { className: "text-center mb-8", children: "Featured Announcement" }), _jsx(Card, { className: "glass p-8 hover:shadow-lg transition-all duration-300 cursor-pointer", children: _jsx("div", { className: "flex flex-col lg:flex-row gap-8", children: _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [filteredReleases[0].urgent && (_jsx(Badge, { className: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400", children: "URGENT" })), _jsx(Badge, { className: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400", children: "FEATURED" }), _jsx(Badge, { variant: "outline", children: filteredReleases[0].category })] }), _jsx("h3", { className: "text-2xl md:text-3xl font-bold mb-4 leading-tight", children: filteredReleases[0].title }), _jsx("p", { className: "text-lg text-foreground-muted mb-6 leading-relaxed", children: filteredReleases[0].excerpt }), _jsx("div", { className: "flex items-center justify-between text-sm text-foreground-muted mb-6", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "w-4 h-4" }), _jsx("span", { children: new Date(filteredReleases[0].publishDate).toLocaleDateString() })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(User, { className: "w-4 h-4" }), _jsx("span", { children: filteredReleases[0].author })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-4 h-4" }), _jsx("span", { children: filteredReleases[0].readTime })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Eye, { className: "w-4 h-4" }), _jsx("span", { children: filteredReleases[0].views.toLocaleString() })] })] }) }), _jsx("div", { className: "flex items-center gap-2 mb-6", children: filteredReleases[0].tags.map((tag, index) => (_jsxs(Badge, { variant: "secondary", className: "text-xs", children: [_jsx(Tag, { className: "w-3 h-3 mr-1" }), tag] }, index))) }), _jsxs("div", { className: "flex gap-3", children: [_jsxs(Button, { className: "bg-blue-600 hover:bg-blue-700 text-white", children: ["Read Full Release", _jsx(ArrowRight, { className: "w-4 h-4 ml-2" })] }), _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Share2, { className: "w-4 h-4 mr-2" }), "Share"] }), _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Download PDF"] })] })] }) }) })] })), _jsxs(motion.div, { id: "releases", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, className: "mb-16", children: [_jsxs("div", { className: "flex items-center justify-between mb-8", children: [_jsx("h2", { children: "All Press Releases" }), _jsxs("span", { className: "text-sm text-foreground-muted", children: [filteredReleases.length, " releases found"] })] }), _jsx("div", { className: "grid gap-6", children: filteredReleases.slice(1).map((release, index) => {
                                    const CategoryIcon = getCategoryIcon(release.category);
                                    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 + index * 0.1 }, children: _jsx(Card, { className: "glass p-6 hover:shadow-lg transition-all duration-300 cursor-pointer", children: _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0", children: _jsx(CategoryIcon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [release.featured && (_jsx(Badge, { className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400", children: "Featured" })), _jsx(Badge, { variant: "outline", children: release.category })] }), _jsx("h3", { className: "text-xl font-semibold mb-3 line-clamp-2", children: release.title }), _jsx("p", { className: "text-foreground-muted mb-4 line-clamp-2", children: release.excerpt }), _jsx("div", { className: "flex items-center justify-between text-sm text-foreground-muted mb-4", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Calendar, { className: "w-4 h-4" }), _jsx("span", { children: new Date(release.publishDate).toLocaleDateString() })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-4 h-4" }), _jsx("span", { children: release.readTime })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Eye, { className: "w-4 h-4" }), _jsx("span", { children: release.views.toLocaleString() })] })] }) }), _jsxs("div", { className: "flex items-center gap-2 mb-4", children: [release.tags.slice(0, 3).map((tag, tagIndex) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, tagIndex))), release.tags.length > 3 && (_jsxs(Badge, { variant: "secondary", className: "text-xs", children: ["+", release.tags.length - 3] }))] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "text-sm text-foreground-muted", children: ["By ", release.author] }), _jsx(ChevronRight, { className: "w-5 h-5 text-foreground-muted" })] })] })] }) }) }, release.id));
                                }) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "max-w-4xl mx-auto", children: _jsxs(Card, { className: "glass p-8 text-center", children: [_jsx("h3", { className: "mb-6", children: "Media Inquiries" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "For media inquiries, interview requests, or additional information about Delibix, please contact our press team." }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "mb-2", children: "Press Contact" }), _jsx("p", { className: "text-foreground-muted mb-1", children: "Sarah Chen" }), _jsx("p", { className: "text-foreground-muted mb-1", children: "Head of Communications" }), _jsx("p", { className: "text-blue-600 dark:text-blue-400", children: "press@delibix.com" }), _jsx("p", { className: "text-foreground-muted", children: "+62 857 7002 4933" })] }), _jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "mb-2", children: "Partnership Inquiries" }), _jsx("p", { className: "text-foreground-muted mb-1", children: "Michael Rodriguez" }), _jsx("p", { className: "text-foreground-muted mb-1", children: "Strategic Partnerships" }), _jsx("p", { className: "text-blue-600 dark:text-blue-400", children: "partnerships@delibix.com" }), _jsx("p", { className: "text-foreground-muted", children: "+62 857 7002 4934" })] })] }), _jsx("div", { className: "mt-8", children: _jsxs(Button, { onClick: () => navigate('press-media-kit'), className: "gradient-bg-blue text-white px-8 py-3", children: ["Download Media Kit", _jsx(Download, { className: "w-4 h-4 ml-2" })] }) })] }) })] })] }));
}
//# sourceMappingURL=PressReleasesPage.js.map