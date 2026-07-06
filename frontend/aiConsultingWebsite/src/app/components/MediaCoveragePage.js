"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, ExternalLink, ArrowRight, Search, Filter, Eye, Share2, Star, TrendingUp, Globe, Newspaper, Radio, Video, Mic, Award, Building2, Users, Target, ThumbsUp, BookOpen, Clock, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
const mediaMentions = [
    {
        id: "1",
        title: "How Delibix is Revolutionizing AI Adoption in Indonesia's SME Sector",
        excerpt: "A comprehensive look at how this Yogyakarta-based startup is making artificial intelligence accessible to small and medium enterprises across Indonesia, with impressive results showing 300% efficiency gains.",
        publication: "TechCrunch",
        author: "Sarah Kim",
        publishDate: "2024-03-18",
        type: "article",
        readTime: "8 min read",
        url: "https://techcrunch.com/delibix-ai-indonesia",
        featured: true,
        sentiment: "positive",
        tags: ["ai", "indonesia", "sme", "startup", "innovation"],
        reach: 2300000
    },
    {
        id: "2",
        title: "AI for All: Delibix CEO Discusses Democratizing Artificial Intelligence",
        excerpt: "In this exclusive interview, Delibix's founding team shares their vision for making AI accessible to businesses of all sizes and their journey from university research to successful startup.",
        publication: "Forbes Indonesia",
        author: "Michael Chen",
        publishDate: "2024-03-15",
        type: "interview",
        readTime: "12 min read",
        url: "https://forbes.com/delibix-interview",
        featured: true,
        sentiment: "positive",
        tags: ["interview", "ceo", "vision", "accessibility", "forbes"],
        reach: 1800000
    },
    {
        id: "3",
        title: "The Rise of Indonesian AI Startups: Delibix Leading the Charge",
        excerpt: "Southeast Asia's AI ecosystem is booming, and Indonesian companies like Delibix are at the forefront of this technological revolution, attracting international attention and investment.",
        publication: "Wired",
        author: "Lisa Rodriguez",
        publishDate: "2024-03-12",
        type: "article",
        readTime: "6 min read",
        url: "https://wired.com/indonesian-ai-startups",
        sentiment: "positive",
        tags: ["startup-ecosystem", "southeast-asia", "investment", "wired"],
        reach: 1500000
    },
    {
        id: "4",
        title: "Building the Future of AI: A Conversation with Delibix",
        excerpt: "Join us for an in-depth discussion about the challenges and opportunities in AI consulting, the importance of ethical AI development, and what's next for the industry.",
        publication: "AI Podcast Network",
        author: "David Park",
        publishDate: "2024-03-08",
        type: "podcast",
        readTime: "45 min listen",
        url: "https://aipodcast.com/delibix-episode",
        sentiment: "positive",
        tags: ["podcast", "ai-ethics", "consulting", "future"],
        reach: 450000
    },
    {
        id: "5",
        title: "Delibix Wins 'AI Innovation of the Year' at Indonesia Tech Awards",
        excerpt: "The Yogyakarta-based AI consulting firm was recognized for its groundbreaking work in making artificial intelligence accessible to Indonesian businesses and its contribution to the country's digital transformation.",
        publication: "Jakarta Post",
        author: "Amanda Sari",
        publishDate: "2024-02-16",
        type: "award",
        readTime: "4 min read",
        url: "https://jakartapost.com/delibix-award",
        featured: true,
        sentiment: "positive",
        tags: ["award", "recognition", "indonesia-tech-awards", "innovation"],
        reach: 890000
    },
    {
        id: "6",
        title: "From University to Unicorn: The Delibix Story",
        excerpt: "A detailed look at how a university research project evolved into one of Indonesia's most promising AI startups, with insights from the founding team and early investors.",
        publication: "Startup Indonesia",
        author: "Rizki Pratama",
        publishDate: "2024-02-10",
        type: "article",
        readTime: "10 min read",
        url: "https://startupindonesia.com/delibix-story",
        sentiment: "positive",
        tags: ["origin-story", "university", "research", "startup-journey"],
        reach: 320000
    },
    {
        id: "7",
        title: "The Future of Work in Indonesia: AI's Role in Business Transformation",
        excerpt: "Industry experts, including Delibix's leadership team, discuss how artificial intelligence is reshaping the Indonesian business landscape and what companies need to know.",
        publication: "CNN Indonesia",
        author: "Budi Santoso",
        publishDate: "2024-02-05",
        type: "video",
        readTime: "15 min watch",
        url: "https://cnn.id/delibix-future-work",
        sentiment: "positive",
        tags: ["future-of-work", "business-transformation", "cnn", "video"],
        reach: 1200000
    },
    {
        id: "8",
        title: "Tech Talk: AI Accessibility and the Indonesian Market",
        excerpt: "Radio interview with Delibix's product team discussing the challenges of building AI solutions for the Indonesian market and the importance of local language support.",
        publication: "Radio Republik Indonesia",
        author: "Siti Nurhaliza",
        publishDate: "2024-01-28",
        type: "interview",
        readTime: "20 min listen",
        url: "https://rri.co.id/delibix-interview",
        sentiment: "positive",
        tags: ["radio", "product", "localization", "indonesian-market"],
        reach: 680000
    }
];
const publications = [
    { name: "TechCrunch", reach: "25M+ monthly readers" },
    { name: "Forbes Indonesia", reach: "18M+ monthly readers" },
    { name: "Wired", reach: "15M+ monthly readers" },
    { name: "Jakarta Post", reach: "8M+ monthly readers" },
    { name: "CNN Indonesia", reach: "12M+ monthly viewers" },
    { name: "AI Podcast Network", reach: "2M+ monthly listeners" }
];
const mediaStats = [
    { label: "Media Mentions", value: "156", change: "+45% this quarter" },
    { label: "Total Reach", value: "8.2M", change: "People reached" },
    { label: "Positive Coverage", value: "94%", change: "Sentiment score" },
    { label: "Publications", value: "67", change: "Media outlets" }
];
export function MediaCoveragePage({ navigate }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("all");
    const [selectedSentiment, setSelectedSentiment] = useState("all");
    const filteredMentions = mediaMentions.filter(mention => {
        const matchesSearch = mention.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mention.publication.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mention.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesType = selectedType === "all" || mention.type === selectedType;
        const matchesSentiment = selectedSentiment === "all" || mention.sentiment === selectedSentiment;
        return matchesSearch && matchesType && matchesSentiment;
    });
    const getTypeIcon = (type) => {
        switch (type) {
            case "article": return Newspaper;
            case "interview": return Mic;
            case "podcast": return Radio;
            case "video": return Video;
            case "award": return Award;
            default: return BookOpen;
        }
    };
    const getSentimentColor = (sentiment) => {
        switch (sentiment) {
            case "positive": return "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400";
            case "neutral": return "text-gray-600 bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400";
            case "negative": return "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400";
            default: return "text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400";
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [Newspaper, Radio, Video, Mic, Globe, TrendingUp];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Globe, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "156 Media Mentions" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Media ", _jsx("span", { className: "gradient-text-blue", children: "Coverage" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Discover how leading media outlets are covering Delibix's journey in democratizing AI technology and transforming businesses across Indonesia." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: mediaStats.map((stat, index) => (_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text-blue mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: stat.label }), _jsx("div", { className: "text-xs text-foreground-muted", children: stat.change })] }, index))) }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth' }), children: _jsxs("span", { className: "flex items-center gap-3", children: ["Explore Coverage", _jsx(ArrowRight, { className: "w-5 h-5" })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-400/10", onClick: () => navigate('press-releases'), children: "Press Releases" })] })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "mb-12", children: _jsx(Card, { className: "glass p-6", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-muted" }), _jsx(Input, { placeholder: "Search media coverage...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-11 text-lg py-6 bg-input-background" })] }), _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsxs(Select, { value: selectedType, onValueChange: setSelectedType, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "All Types" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Types" }), _jsx(SelectItem, { value: "article", children: "Articles" }), _jsx(SelectItem, { value: "interview", children: "Interviews" }), _jsx(SelectItem, { value: "podcast", children: "Podcasts" }), _jsx(SelectItem, { value: "video", children: "Videos" }), _jsx(SelectItem, { value: "award", children: "Awards" })] })] }), _jsxs(Select, { value: selectedSentiment, onValueChange: setSelectedSentiment, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "All Sentiment" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Sentiment" }), _jsx(SelectItem, { value: "positive", children: "Positive" }), _jsx(SelectItem, { value: "neutral", children: "Neutral" }), _jsx(SelectItem, { value: "negative", children: "Negative" })] })] })] })] }) }) }), filteredMentions.length > 0 && filteredMentions[0].featured && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "mb-16", children: [_jsx("h2", { className: "text-center mb-8", children: "Featured Coverage" }), _jsx(Card, { className: "glass p-8 hover:shadow-lg transition-all duration-300", children: _jsx("div", { className: "flex flex-col lg:flex-row gap-8", children: _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx(Badge, { className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400", children: "FEATURED" }), _jsx(Badge, { className: getSentimentColor(filteredMentions[0].sentiment), children: filteredMentions[0].sentiment.toUpperCase() }), _jsx(Badge, { variant: "outline", children: filteredMentions[0].type })] }), _jsx("h3", { className: "text-2xl md:text-3xl font-bold mb-4 leading-tight", children: filteredMentions[0].title }), _jsx("p", { className: "text-lg text-foreground-muted mb-6 leading-relaxed", children: filteredMentions[0].excerpt }), _jsx("div", { className: "flex items-center justify-between text-sm text-foreground-muted mb-6", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Building2, { className: "w-4 h-4" }), _jsx("span", { className: "font-medium", children: filteredMentions[0].publication })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "w-4 h-4" }), _jsx("span", { children: new Date(filteredMentions[0].publishDate).toLocaleDateString() })] }), filteredMentions[0].readTime && (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-4 h-4" }), _jsx("span", { children: filteredMentions[0].readTime })] })), filteredMentions[0].reach && (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Eye, { className: "w-4 h-4" }), _jsxs("span", { children: [(filteredMentions[0].reach / 1000000).toFixed(1), "M reach"] })] }))] }) }), _jsx("div", { className: "flex items-center gap-2 mb-6", children: filteredMentions[0].tags.map((tag, index) => (_jsxs(Badge, { variant: "secondary", className: "text-xs", children: [_jsx(Tag, { className: "w-3 h-3 mr-1" }), tag] }, index))) }), _jsxs("div", { className: "flex gap-3", children: [_jsxs(Button, { className: "bg-blue-600 hover:bg-blue-700 text-white", onClick: () => window.open(filteredMentions[0].url, '_blank'), children: ["Read Article", _jsx(ExternalLink, { className: "w-4 h-4 ml-2" })] }), _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Share2, { className: "w-4 h-4 mr-2" }), "Share"] })] })] }) }) })] })), _jsxs(motion.div, { id: "coverage", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, className: "mb-16", children: [_jsxs("div", { className: "flex items-center justify-between mb-8", children: [_jsx("h2", { children: "All Media Coverage" }), _jsxs("span", { className: "text-sm text-foreground-muted", children: [filteredMentions.length, " mentions found"] })] }), _jsx("div", { className: "grid gap-6", children: filteredMentions.slice(1).map((mention, index) => {
                                    const TypeIcon = getTypeIcon(mention.type);
                                    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 + index * 0.1 }, children: _jsx(Card, { className: "glass p-6 hover:shadow-lg transition-all duration-300 cursor-pointer", children: _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0", children: _jsx(TypeIcon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [mention.featured && (_jsx(Badge, { className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400", children: "Featured" })), _jsx(Badge, { className: getSentimentColor(mention.sentiment), children: mention.sentiment }), _jsx(Badge, { variant: "outline", children: mention.type })] }), _jsx("h3", { className: "text-xl font-semibold mb-3 line-clamp-2", children: mention.title }), _jsx("p", { className: "text-foreground-muted mb-4 line-clamp-2", children: mention.excerpt }), _jsx("div", { className: "flex items-center justify-between text-sm text-foreground-muted mb-4", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Building2, { className: "w-4 h-4" }), _jsx("span", { className: "font-medium", children: mention.publication })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Calendar, { className: "w-4 h-4" }), _jsx("span", { children: new Date(mention.publishDate).toLocaleDateString() })] }), mention.readTime && (_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-4 h-4" }), _jsx("span", { children: mention.readTime })] }))] }) }), _jsxs("div", { className: "flex items-center gap-2 mb-4", children: [mention.tags.slice(0, 3).map((tag, tagIndex) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, tagIndex))), mention.tags.length > 3 && (_jsxs(Badge, { variant: "secondary", className: "text-xs", children: ["+", mention.tags.length - 3] }))] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("span", { className: "text-sm text-foreground-muted", children: ["By ", mention.author] }), mention.reach && (_jsxs("span", { className: "text-sm text-foreground-muted", children: [(mention.reach / 1000000).toFixed(1), "M reach"] }))] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => window.open(mention.url, '_blank'), children: _jsx(ExternalLink, { className: "w-4 h-4" }) })] })] })] }) }) }, mention.id));
                                }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "mb-16", children: [_jsx("h2", { className: "text-center mb-12", children: "Featured In" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: publications.map((publication, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 + index * 0.1 }, children: _jsxs(Card, { className: "glass p-6 text-center hover:shadow-lg transition-all duration-300", children: [_jsx("h3", { className: "mb-2", children: publication.name }), _jsx("p", { className: "text-sm text-foreground-muted", children: publication.reach })] }) }, index))) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5 }, className: "max-w-4xl mx-auto", children: _jsxs(Card, { className: "glass p-8 text-center", children: [_jsx("h3", { className: "mb-6", children: "Want to Feature Delibix?" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "We're always happy to speak with journalists and content creators. Get in touch for interviews, expert commentary, or company information." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { onClick: () => window.open('mailto:press@delibix.com', '_blank'), className: "gradient-bg-blue text-white px-8 py-3", children: "Contact Press Team" }), _jsx(Button, { variant: "outline", onClick: () => navigate('press-media-kit'), children: "Download Media Kit" })] })] }) })] })] }));
}
//# sourceMappingURL=MediaCoveragePage.js.map