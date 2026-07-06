"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Globe, TrendingUp, Zap, Target, CheckCircle, Star, ArrowRight, Settings, Brain, Monitor, Users, Building, Clock, Award, BarChart3, Mail, Calendar, FileText, Lightbulb, Activity, MapPin, Download, Share, Eye } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function TransformationStoriesPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // Transformation Statistics
    const transformationStats = [
        {
            title: "Success Stories",
            value: "500+",
            description: "Documented transformation stories",
            icon: FileText,
            growth: "Proven results"
        },
        {
            title: "Average ROI",
            value: "320%",
            description: "Return on digital investment",
            icon: TrendingUp,
            growth: "Exceptional value"
        },
        {
            title: "Implementation Speed",
            value: "40%",
            description: "Faster than industry average",
            icon: Clock,
            growth: "Accelerated delivery"
        },
        {
            title: "Client Satisfaction",
            value: "98%",
            description: "Post-transformation satisfaction",
            icon: Users,
            growth: "Outstanding service"
        }
    ];
    // Featured Transformation Stories
    const transformationStories = [
        {
            id: 1,
            company: "PT Sari Husada Generasi Mahardika",
            industry: "Healthcare & Nutrition",
            location: "Jakarta, Indonesia",
            project: "AI-Driven Supply Chain Optimization",
            duration: "8 months",
            teamSize: "15 consultants",
            investment: "$2.4M",
            roi: "385%",
            description: "Complete digital transformation of supply chain operations using AI-powered demand forecasting and automated inventory management.",
            challenge: "Manual supply chain processes causing 30% excess inventory costs and frequent stockouts affecting customer satisfaction.",
            solution: "Implemented AI-driven demand forecasting, automated inventory management, and real-time supply chain visibility platform.",
            results: [
                "40% reduction in inventory costs",
                "95% improvement in demand forecast accuracy",
                "25% increase in customer satisfaction",
                "60% faster order processing time"
            ],
            technologies: ["AI/ML", "IoT Sensors", "Cloud Analytics", "Mobile Apps"],
            testimonial: "Delibix transformed our entire supply chain. The AI solution delivered results beyond our expectations, saving millions annually.",
            clientName: "Dr. Sarah Wijaya",
            clientRole: "Chief Operations Officer",
            image: "/api/placeholder/600/400",
            timeline: [
                { phase: "Discovery", duration: "4 weeks", status: "completed" },
                { phase: "Design", duration: "6 weeks", status: "completed" },
                { phase: "Implementation", duration: "20 weeks", status: "completed" },
                { phase: "Optimization", duration: "4 weeks", status: "completed" }
            ]
        },
        {
            id: 2,
            company: "Bank Mandiri Digital Solutions",
            industry: "Financial Services",
            location: "Jakarta, Indonesia",
            project: "Customer Experience Digital Platform",
            duration: "12 months",
            teamSize: "22 consultants",
            investment: "$3.8M",
            roi: "420%",
            description: "End-to-end digital banking platform with AI-powered customer insights and personalized financial services.",
            challenge: "Legacy banking systems with poor customer experience and limited digital capabilities affecting market competitiveness.",
            solution: "Built comprehensive digital banking platform with AI customer insights, mobile-first design, and automated financial advisory.",
            results: [
                "65% increase in digital adoption",
                "50% reduction in customer service costs",
                "35% improvement in customer retention",
                "80% faster loan approval process"
            ],
            technologies: ["Microservices", "AI Analytics", "Mobile Native", "Blockchain"],
            testimonial: "The digital transformation exceeded all our targets. Customer satisfaction and digital adoption rates have soared.",
            clientName: "Budi Santoso",
            clientRole: "Head of Digital Innovation",
            image: "/api/placeholder/600/400",
            timeline: [
                { phase: "Strategy", duration: "6 weeks", status: "completed" },
                { phase: "Development", duration: "32 weeks", status: "completed" },
                { phase: "Testing", duration: "8 weeks", status: "completed" },
                { phase: "Launch", duration: "6 weeks", status: "completed" }
            ]
        },
        {
            id: 3,
            company: "Astra International Manufacturing",
            industry: "Automotive Manufacturing",
            location: "Karawang, Indonesia",
            project: "Smart Factory IoT Implementation",
            duration: "10 months",
            teamSize: "18 consultants",
            investment: "$3.2M",
            roi: "290%",
            description: "Complete smart factory transformation with IoT sensors, predictive maintenance, and automated quality control systems.",
            challenge: "Manual production monitoring leading to unexpected downtime and quality issues affecting production efficiency.",
            solution: "Deployed comprehensive IoT infrastructure with predictive maintenance, real-time quality monitoring, and automated reporting.",
            results: [
                "45% reduction in unplanned downtime",
                "30% improvement in production efficiency",
                "50% decrease in quality defects",
                "25% reduction in maintenance costs"
            ],
            technologies: ["Industrial IoT", "Edge Computing", "Predictive Analytics", "Digital Twins"],
            testimonial: "The smart factory implementation revolutionized our operations. Efficiency gains have been remarkable.",
            clientName: "Teguh Wijayanto",
            clientRole: "Manufacturing Director",
            image: "/api/placeholder/600/400",
            timeline: [
                { phase: "Assessment", duration: "4 weeks", status: "completed" },
                { phase: "IoT Deployment", duration: "24 weeks", status: "completed" },
                { phase: "Integration", duration: "8 weeks", status: "completed" },
                { phase: "Optimization", duration: "4 weeks", status: "completed" }
            ]
        }
    ];
    // Industry Categories
    const industryCategories = [
        { name: "Healthcare", count: 85, icon: Activity, color: "bg-blue-500" },
        { name: "Finance", count: 72, icon: Building, color: "bg-green-500" },
        { name: "Manufacturing", count: 94, icon: Settings, color: "bg-orange-500" },
        { name: "Retail", count: 63, icon: Monitor, color: "bg-purple-500" },
        { name: "Education", count: 47, icon: Brain, color: "bg-indigo-500" },
        { name: "Government", count: 38, icon: MapPin, color: "bg-red-500" }
    ];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedStory, setSelectedStory] = useState(null);
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [TrendingUp, Target, Award, CheckCircle, Star, Building];
                                    const IconComponent = icons[i % icons.length];
                                    return (_jsx(motion.div, { className: "absolute", style: {
                                            left: `${10 + (i % 4) * 25}%`,
                                            top: `${10 + Math.floor(i / 4) * 30}%`,
                                        }, animate: {
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 10, -10, 0],
                                            opacity: [0.3, 0.7, 0.3]
                                        }, transition: {
                                            duration: 8,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                        }, children: _jsx(IconComponent, { className: "w-12 h-12 text-blue-500" }) }, i));
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(FileText, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "Proven Success Stories" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Transformation ", _jsx("span", { className: "gradient-text-blue", children: "Stories" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Real client transformation stories with 500+ documented success cases. Proven results delivering 320% average ROI and 98% client satisfaction across all industries." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: transformationStats.map((stat, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(stat.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: stat.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: stat.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'} mb-2`, children: stat.description }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: stat.growth })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Start Your Transformation", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('featured-stories');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "View Success Stories" })] })] }) })] }), _jsx("section", { className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Success Across ", _jsx("span", { className: "gradient-text-blue", children: "Industries" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Our transformation stories span across all major industries with consistent success and proven results." })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6", children: industryCategories.map((category, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'} ${selectedCategory === category.name ? 'ring-2 ring-blue-500' : ''}`, onClick: () => setSelectedCategory(category.name), children: [_jsx("div", { className: `w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 mx-auto`, children: _jsx(category.icon, { className: "w-6 h-6 text-white" }) }), _jsx("h3", { className: `text-lg font-semibold mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: category.name }), _jsx("div", { className: `text-2xl font-bold mb-1 gradient-text-blue`, children: category.count }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: "Success Stories" })] }, category.name))) })] }) }), _jsx("section", { id: "featured-stories", className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Featured ", _jsx("span", { className: "gradient-text-blue", children: "Success Stories" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "In-depth case studies showcasing real transformations with detailed implementations, challenges overcome, and measurable results achieved." })] }), _jsx("div", { className: "space-y-12", children: transformationStories.map((story, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.2 }, className: `glass-heavy rounded-3xl p-8 lg:p-12 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-start", children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: `text-2xl font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: story.company }), _jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx(Badge, { variant: "secondary", children: story.industry }), _jsxs("div", { className: `text-sm flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(MapPin, { className: "w-4 h-4" }), story.location] })] })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: `text-3xl font-bold gradient-text-blue`, children: [story.roi, " ROI"] }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: "Return on Investment" })] })] }), _jsx("div", { className: `text-lg font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: story.project }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: story.description }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: `glass-secondary rounded-xl p-4 ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsx("div", { className: `text-sm font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Duration" }), _jsx("div", { className: `text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: story.duration })] }), _jsxs("div", { className: `glass-secondary rounded-xl p-4 ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsx("div", { className: `text-sm font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Investment" }), _jsx("div", { className: `text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: story.investment })] })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Key Results:" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: story.results.map((result, resultIndex) => (_jsxs("div", { className: `flex items-center gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), result] }, resultIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Technologies Used:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: story.technologies.map((tech, techIndex) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: tech }, techIndex))) })] }), _jsxs("div", { className: `glass-secondary rounded-xl p-6 ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsxs("p", { className: `text-lg italic mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: ["\"", story.testimonial, "\""] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center", children: _jsx(Users, { className: "w-5 h-5 text-white" }) }), _jsxs("div", { children: [_jsx("div", { className: `font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: story.clientName }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: story.clientRole })] })] })] })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: `glass-secondary rounded-xl p-6 ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsx("h4", { className: `text-lg font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Implementation Timeline" }), _jsx("div", { className: "space-y-4", children: story.timeline.map((phase, phaseIndex) => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-green-500 flex items-center justify-center", children: _jsx(CheckCircle, { className: "w-4 h-4 text-white" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: `font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`, children: phase.phase }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: phase.duration })] })] }, phaseIndex))) })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs(Button, { className: "w-full gradient-bg-blue text-white rounded-xl", onClick: () => navigate('demo-request'), children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Download Full Case Study"] }), _jsxs("div", { className: "grid grid-cols-2 gap-3", children: [_jsxs(Button, { variant: "outline", className: `rounded-xl ${isDark
                                                                        ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                                        : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, children: [_jsx(Share, { className: "w-4 h-4 mr-2" }), "Share"] }), _jsxs(Button, { variant: "outline", className: `rounded-xl ${isDark
                                                                        ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                                        : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => navigate('client-journey'), children: [_jsx(Eye, { className: "w-4 h-4 mr-2" }), "View Journey"] })] })] })] })] }) }, story.id))) })] }) }), _jsxs("section", { className: "py-16 lg:py-24 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 transition-colors duration-300" }), _jsx("div", { className: "max-w-4xl mx-auto px-6 relative z-10", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsxs("div", { className: "glass-heavy rounded-3xl p-12 text-center relative overflow-hidden border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl transition-colors duration-300" }), _jsxs("div", { className: "relative z-10", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-lg", children: _jsx(FileText, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300", children: "Ready to Write Your Success Story?" }), _jsx("div", { className: "text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300", children: "Join 500+ successful transformations with proven 320% ROI and 98% client satisfaction. Start your transformation journey today." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl border-0 shadow-lg relative overflow-hidden transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: "relative z-10 flex items-center", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Start Your Transformation"] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "glass-secondary border-2 border-blue-300 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300", onClick: () => navigate('roi-showcase'), children: "View ROI Showcase" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-blue-200 dark:border-blue-600/50 transition-colors duration-300", children: [_jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Proven Success" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "500+ stories & 320% average ROI" })] }), _jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Client Satisfaction" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "98% satisfaction & outstanding results" })] })] })] })] }) }) })] })] }));
}
//# sourceMappingURL=TransformationStoriesPage.js.map