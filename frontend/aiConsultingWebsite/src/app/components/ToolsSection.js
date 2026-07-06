"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, FileText, Calculator, CheckSquare, Gift, ArrowRight, Eye, Video, Play, Users2, Heart, TrendingUp, MessageCircle } from "lucide-react";
export function ToolsSection({ navigate } = {}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredTool, setHoveredTool] = useState(null);
    const [hoveredElement, setHoveredElement] = useState(null);
    const tools = [
        {
            icon: Calculator,
            title: "AI ROI Calculator",
            description: "Calculate the potential return on investment for your AI initiatives",
            type: "Calculator",
            usageCount: "2.5K+",
            color: "from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20",
            borderColor: "border-blue-200 dark:border-blue-700/50",
            glowColor: "rgba(59, 130, 246, 0.15)",
            iconColor: "text-blue-600 dark:text-blue-400",
            url: "ai-roi-calculator",
            isInternal: true
        },
        {
            icon: CheckSquare,
            title: "AI Readiness Checklist",
            description: "Comprehensive checklist to assess your organization's AI readiness",
            type: "Checklist",
            usageCount: "3.2K+",
            color: "from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/30",
            borderColor: "border-blue-300 dark:border-blue-600/50",
            glowColor: "rgba(59, 130, 246, 0.2)",
            iconColor: "text-blue-700 dark:text-blue-300",
            url: "ai-readiness-checklist",
            isInternal: true
        },
        {
            icon: FileText,
            title: "Strategy Template",
            description: "Step-by-step template for creating your AI implementation strategy",
            type: "Template",
            usageCount: "1.8K+",
            color: "from-blue-200 to-blue-300 dark:from-blue-800/40 dark:to-blue-700/30",
            borderColor: "border-blue-400 dark:border-blue-500/50",
            glowColor: "rgba(59, 130, 246, 0.25)",
            iconColor: "text-blue-800 dark:text-blue-200",
            url: "strategy-templates",
            isInternal: true
        }
    ];
    const handleToolClick = (tool) => {
        console.log('Tool clicked:', tool); // Debug log
        if (tool.isInternal && navigate) {
            console.log('Navigating to:', tool.url); // Debug log
            navigate(tool.url);
        }
        else {
            console.log('Opening external URL:', tool.url); // Debug log
            window.open(tool.url, '_blank', 'noopener,noreferrer');
        }
    };
    const handleTikTokClick = () => {
        window.open('https://www.tiktok.com/@delibix', '_blank', 'noopener,noreferrer');
    };
    const handleSocialClick = (platform) => {
        const socialLinks = {
            'tiktok': 'https://www.tiktok.com/@delibix',
            'instagram': 'https://www.instagram.com/delibixcom/',
            'youtube': 'https://www.youtube.com/@delibixcom',
            'whatsapp': 'http://wa.me/6285770024933'
        };
        const url = socialLinks[platform];
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15 // Reduced for faster animations
            }
        }
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 }, // Reduced movement
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6, // Faster animation
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };
    return (_jsxs("section", { id: "tools", className: "py-32 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20 transition-colors duration-300" }), _jsxs("div", { className: "max-w-7xl mx-auto px-6", ref: ref, children: [_jsxs(motion.div, { className: "text-center mb-20", initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6 }, children: [_jsxs(motion.div, { className: "scale-on-hover inline-flex items-center gap-2 glass-secondary rounded-full px-4 py-2 mb-8 border border-blue-200 dark:border-blue-600/50 cursor-pointer transition-all duration-300", children: [_jsx(Gift, { className: "w-4 h-4 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300", children: "Free Tools" })] }), _jsxs("h2", { className: "text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight transition-colors duration-300", children: ["Community", " ", _jsx("span", { className: "gradient-text-blue font-bold", children: "resources" })] }), _jsx("div", { className: "text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light transition-colors duration-300", children: "Free tools and templates to help you get started with AI" })] }), _jsx(motion.div, { className: "grid md:grid-cols-3 gap-8 mb-16", variants: containerVariants, initial: "hidden", animate: isInView ? "visible" : "hidden", children: tools.map((tool, index) => (_jsx(motion.div, { variants: cardVariants, onHoverStart: () => {
                                setHoveredTool(index);
                                setHoveredElement(`tool-${index}`);
                            }, onHoverEnd: () => {
                                setHoveredTool(null);
                                setHoveredElement(null);
                            }, className: "group relative", children: _jsxs("div", { className: `card-hover-scale glass-heavy rounded-3xl p-8 h-full relative overflow-hidden bg-gradient-to-br ${tool.color} border-2 ${tool.borderColor} transition-all duration-300`, children: [_jsxs("div", { className: "relative z-10", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("div", { className: "button-hover w-14 h-14 glass rounded-2xl flex items-center justify-center border border-blue-200 dark:border-blue-600/50 cursor-pointer transition-all duration-300", children: _jsx(motion.div, { animate: hoveredElement === `tool-${index}` ? {} : (hoveredTool === index ? { rotate: 360 } : { rotate: 0 }), transition: hoveredElement === `tool-${index}` ? {} : { duration: 0.8 }, children: _jsx(tool.icon, { className: `w-7 h-7 ${tool.iconColor} transition-colors duration-300` }) }) }), _jsx("div", { className: "glass-secondary rounded-full px-3 py-1 border border-blue-200 dark:border-blue-600/50 transition-all duration-300", children: _jsx("span", { className: "text-xs text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300", children: tool.type }) })] }), _jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 transition-colors duration-300", children: tool.title }), _jsx("div", { className: "text-slate-600 dark:text-slate-300 mb-6 leading-relaxed transition-colors duration-300", children: tool.description }), _jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Eye, { className: "w-4 h-4 text-slate-500 dark:text-slate-400" }), _jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300", children: [tool.usageCount, " users"] })] }), _jsx("div", { className: "text-sm text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300", children: "Free" })] }), _jsx("div", { className: "scale-on-hover", children: _jsx(Button, { className: "button-hover w-full gradient-bg-blue text-white border-0 shadow-sm relative overflow-hidden transition-all duration-300", size: "sm", onClick: (e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleToolClick(tool);
                                                    }, children: _jsxs("span", { className: "relative z-10 flex items-center justify-center", children: [tool.isInternal ? (_jsx(ArrowRight, { className: "w-4 h-4 mr-2" })) : (_jsx(ExternalLink, { className: "w-4 h-4 mr-2" })), "Open Tool"] }) }) })] }), _jsx("div", { className: `absolute top-4 right-4 w-2 h-2 ${tool.iconColor.replace('text-', 'bg-').replace('dark:text-', 'dark:bg-')} rounded-full opacity-60 pulse-subtle` })] }) }, index))) }), _jsx(motion.div, { className: "max-w-5xl mx-auto", initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6, delay: 0.4 }, children: _jsx("div", { className: "card-hover glass-heavy rounded-3xl p-12 text-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-2 border-blue-200 dark:border-blue-700/50 transition-all duration-300", children: _jsxs("div", { className: "relative z-10", children: [_jsx("div", { className: "button-hover inline-flex items-center justify-center w-16 h-16 glass rounded-2xl mb-8 border border-blue-200 dark:border-blue-600/50 cursor-pointer transition-all duration-300", children: _jsx(Video, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }) }), _jsx("h3", { className: "text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300", children: "Join Our Viral TikTok Community" }), _jsxs("div", { className: "text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300", children: ["\uD83D\uDD25 ", _jsx("strong", { children: "Content that always goes viral!" }), " Get cutting-edge business insights, strategic thinking, and important information that will transform the way you do business. Follow now for exclusive content! \uD83D\uDE80"] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-10", children: [_jsx("div", { className: "scale-on-hover", children: _jsx(Button, { size: "lg", className: "button-hover gradient-bg-blue text-white px-10 py-6 text-lg font-semibold rounded-2xl border-0 shadow-lg relative overflow-hidden transition-all duration-300", onClick: handleTikTokClick, children: _jsxs("span", { className: "relative z-10 flex items-center", children: [_jsx(Play, { className: "w-5 h-5 mr-2" }), "Follow @delibix", _jsx(motion.div, { className: "ml-2", animate: { x: [0, 4, 0] }, transition: { duration: 1.5, repeat: Infinity }, children: _jsx(ArrowRight, { className: "w-5 h-5" }) })] }) }) }), _jsx("div", { className: "scale-on-hover", children: _jsxs(Button, { variant: "outline", size: "lg", className: "card-hover glass-secondary border-2 border-blue-200 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300", onClick: handleTikTokClick, children: [_jsx(Video, { className: "w-5 h-5 mr-2" }), "Watch Viral Content"] }) })] }), _jsx("div", { className: "grid md:grid-cols-5 gap-4 mb-10 pt-8 border-t border-blue-200 dark:border-blue-600/50 transition-colors duration-300", children: [
                                            {
                                                label: "Total Views",
                                                value: "47M+",
                                                icon: Eye,
                                                color: "text-blue-600 dark:text-blue-400"
                                            },
                                            {
                                                label: "Total Likes",
                                                value: "4.5M+",
                                                icon: Heart,
                                                color: "text-red-500 dark:text-red-400"
                                            },
                                            {
                                                label: "Comments",
                                                value: "750K+",
                                                icon: MessageCircle,
                                                color: "text-purple-500 dark:text-purple-400"
                                            },
                                            {
                                                label: "Followers",
                                                value: "34K+",
                                                icon: Users2,
                                                color: "text-blue-500 dark:text-blue-300"
                                            },
                                            {
                                                label: "Viral Posts Daily",
                                                value: "1-2",
                                                icon: TrendingUp,
                                                color: "text-green-500 dark:text-green-400"
                                            },
                                        ].map((stat, index) => (_jsxs(motion.div, { className: "text-center", initial: { opacity: 0, y: 15 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }, transition: { duration: 0.4, delay: 0.8 + index * 0.1 }, children: [_jsxs("div", { className: "scale-on-hover flex items-center justify-center mb-2 cursor-pointer", children: [_jsx(stat.icon, { className: `w-6 h-6 ${stat.color} mr-2 transition-colors duration-300` }), _jsx("div", { className: "text-3xl font-bold gradient-text-blue", children: stat.value })] }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300", children: stat.label })] }, stat.label))) })] }) }) })] })] }));
}
//# sourceMappingURL=ToolsSection.js.map