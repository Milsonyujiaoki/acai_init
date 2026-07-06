"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Award, Users, TrendingUp, Star, Quote, ArrowRight, Play, Pause, CheckCircle, Building2, Calendar, MapPin, ExternalLink, Share2, BarChart3, Target, Zap, Brain, Heart, Eye, Download, Filter, Search, ChevronLeft, ChevronRight, Volume2, Lightbulb, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
const successStories = [
    {
        id: "pt-mega-manufacturing",
        company: "PT Mega Manufacturing",
        industry: "Manufacturing",
        location: "Jakarta, Indonesia",
        companySize: "1000+ employees",
        featured: true,
        challenge: "Manual quality control processes were causing significant delays and inconsistencies in product quality. The company was experiencing 15% defect rates and spending excessive resources on manual inspection.",
        solution: "Implemented AI-powered computer vision system for automated quality inspection with real-time defect detection and classification.",
        implementation: "3-month phased rollout starting with pilot line, followed by full factory deployment with staff training and process optimization.",
        results: [
            "95% improvement in defect detection accuracy",
            "60% reduction in inspection time",
            "50% decrease in human error",
            "$2.3M annual cost savings",
            "Zero safety incidents since implementation"
        ],
        metrics: [
            { label: "Defect Detection Accuracy", value: "99.2%", improvement: "+95%" },
            { label: "Inspection Speed", value: "300 units/hour", improvement: "+60%" },
            { label: "Cost Savings", value: "$2.3M", improvement: "Annual" },
            { label: "ROI", value: "340%", improvement: "12 months" }
        ],
        testimonial: {
            quote: "Delibix transformed our entire quality control process. The AI system not only improved our accuracy but also freed up our team to focus on more strategic initiatives. The ROI exceeded our expectations.",
            author: "Budi Santoso",
            role: "Head of Operations"
        },
        timeline: "3 months",
        tags: ["Computer Vision", "Quality Control", "Manufacturing", "Automation"]
    },
    {
        id: "bank-nusantara-digital",
        company: "Bank Nusantara Digital",
        industry: "Financial Services",
        location: "Surabaya, Indonesia",
        companySize: "500-1000 employees",
        featured: true,
        challenge: "Rising fraud cases were causing significant financial losses and slow transaction processing was affecting customer satisfaction. Manual fraud detection was only 65% accurate.",
        solution: "Deployed real-time AI fraud detection system with machine learning algorithms and automated transaction processing pipeline.",
        implementation: "4-month implementation including data integration, model training, testing, and gradual rollout across all transaction channels.",
        results: [
            "99.8% fraud detection accuracy",
            "85% faster transaction processing",
            "90% reduction in false positives",
            "$5.2M prevented fraud losses",
            "40% improvement in customer satisfaction"
        ],
        metrics: [
            { label: "Fraud Detection Rate", value: "99.8%", improvement: "+34.8%" },
            { label: "Transaction Speed", value: "2.3 seconds", improvement: "+85%" },
            { label: "False Positives", value: "0.1%", improvement: "-90%" },
            { label: "Annual Savings", value: "$5.2M", improvement: "Fraud prevention" }
        ],
        testimonial: {
            quote: "The AI fraud detection system has been a game-changer for our bank. We've dramatically reduced fraud losses while improving the customer experience. Delibix delivered beyond our expectations.",
            author: "Dr. Sari Wijaya",
            role: "Chief Risk Officer"
        },
        timeline: "4 months",
        tags: ["Fraud Detection", "Machine Learning", "Banking", "Real-time Processing"]
    },
    {
        id: "healthcare-plus-network",
        company: "HealthCare Plus Network",
        industry: "Healthcare",
        location: "Yogyakarta, Indonesia",
        companySize: "200-500 employees",
        challenge: "Overwhelming patient data analysis and the need for faster, more accurate diagnostic support. Doctors were spending 40% of their time on administrative tasks instead of patient care.",
        solution: "AI-assisted diagnostic platform with predictive analytics, automated patient data analysis, and intelligent treatment recommendations.",
        implementation: "6-month implementation including HIPAA compliance setup, staff training, integration with existing EMR systems, and gradual deployment across all departments.",
        results: [
            "92% diagnostic accuracy improvement",
            "40% faster patient processing",
            "30% reduction in readmissions",
            "15,000+ patients helped monthly",
            "60% reduction in administrative time"
        ],
        metrics: [
            { label: "Diagnostic Accuracy", value: "94%", improvement: "+92%" },
            { label: "Patient Processing", value: "45 min", improvement: "+40%" },
            { label: "Readmissions", value: "12%", improvement: "-30%" },
            { label: "Admin Time Saved", value: "60%", improvement: "Per doctor" }
        ],
        testimonial: {
            quote: "This AI platform has revolutionized how we deliver healthcare. Our doctors can now focus more on patient care while the AI handles complex data analysis. Patient outcomes have never been better.",
            author: "Dr. Indira Kusuma",
            role: "Chief Medical Officer"
        },
        timeline: "6 months",
        tags: ["Healthcare AI", "Diagnostic Support", "Predictive Analytics", "EMR Integration"]
    },
    {
        id: "smart-retail-chain",
        company: "Smart Retail Chain",
        industry: "Retail",
        location: "Bandung, Indonesia",
        companySize: "50-200 employees",
        challenge: "Inventory management was inefficient with 25% stockouts and 30% overstock situations. Customer demand prediction was largely guesswork, leading to lost sales and tied-up capital.",
        solution: "AI-powered inventory optimization system with demand forecasting, automated reordering, and dynamic pricing algorithms.",
        implementation: "2-month rapid deployment with phased rollout across 15 stores, including POS integration and staff training.",
        results: [
            "90% reduction in stockouts",
            "70% decrease in overstock",
            "25% increase in sales revenue",
            "$800K working capital freed up",
            "95% forecast accuracy"
        ],
        metrics: [
            { label: "Stockout Reduction", value: "90%", improvement: "Elimination" },
            { label: "Overstock Decrease", value: "70%", improvement: "Optimization" },
            { label: "Sales Increase", value: "25%", improvement: "Revenue growth" },
            { label: "Forecast Accuracy", value: "95%", improvement: "+65%" }
        ],
        testimonial: {
            quote: "The AI system transformed our inventory management. We went from constant stockouts and overstock to having exactly what customers want, when they want it. Our profit margins have never been better.",
            author: "Lisa Tanaka",
            role: "Operations Director"
        },
        timeline: "2 months",
        tags: ["Inventory Optimization", "Demand Forecasting", "Retail AI", "Dynamic Pricing"]
    },
    {
        id: "green-energy-solutions",
        company: "Green Energy Solutions",
        industry: "Energy",
        location: "Bali, Indonesia",
        companySize: "100-500 employees",
        challenge: "Solar panel maintenance was reactive and inefficient, leading to 20% energy loss due to undetected issues. Manual monitoring of 50+ installations was time-consuming and error-prone.",
        solution: "AI-powered predictive maintenance system with IoT sensors, satellite imagery analysis, and automated alert systems.",
        implementation: "4-month implementation including sensor installation, AI model training, dashboard development, and team training.",
        results: [
            "85% reduction in unplanned downtime",
            "30% increase in energy output",
            "50% lower maintenance costs",
            "Real-time monitoring of all installations",
            "99.5% system availability"
        ],
        metrics: [
            { label: "Downtime Reduction", value: "85%", improvement: "Prevention" },
            { label: "Energy Output", value: "30%", improvement: "Increase" },
            { label: "Maintenance Costs", value: "50%", improvement: "Reduction" },
            { label: "System Availability", value: "99.5%", improvement: "+19.5%" }
        ],
        testimonial: {
            quote: "The predictive maintenance AI has transformed our operations. We can now prevent issues before they happen, maximizing energy output and reducing costs. It's been a fantastic investment.",
            author: "Made Sutrisna",
            role: "Technical Director"
        },
        timeline: "4 months",
        tags: ["Predictive Maintenance", "IoT", "Energy Optimization", "Satellite Analysis"]
    },
    {
        id: "logistics-express-indonesia",
        company: "Logistics Express Indonesia",
        industry: "Logistics",
        location: "Medan, Indonesia",
        companySize: "300-500 employees",
        challenge: "Route optimization was manual and inefficient, leading to 30% longer delivery times and higher fuel costs. Customer satisfaction was declining due to delayed deliveries.",
        solution: "AI-powered route optimization with real-time traffic analysis, dynamic rerouting, and automated dispatch system.",
        implementation: "3-month implementation including GPS integration, driver training, and system optimization based on historical data.",
        results: [
            "40% reduction in delivery times",
            "25% decrease in fuel consumption",
            "95% on-time delivery rate",
            "$1.2M annual fuel savings",
            "90% customer satisfaction score"
        ],
        metrics: [
            { label: "Delivery Time", value: "40%", improvement: "Faster" },
            { label: "Fuel Savings", value: "25%", improvement: "Consumption" },
            { label: "On-time Delivery", value: "95%", improvement: "+25%" },
            { label: "Customer Satisfaction", value: "90%", improvement: "+35%" }
        ],
        testimonial: {
            quote: "The AI route optimization has revolutionized our delivery operations. Faster deliveries, lower costs, and happier customers - exactly what we needed to stay competitive.",
            author: "Rahman Hakim",
            role: "Fleet Operations Manager"
        },
        timeline: "3 months",
        tags: ["Route Optimization", "Logistics AI", "Real-time Analytics", "Fleet Management"]
    }
];
const videoTestimonials = [
    {
        id: "video-1",
        company: "PT Mega Manufacturing",
        author: "Budi Santoso",
        role: "Head of Operations",
        industry: "Manufacturing",
        thumbnail: "/api/placeholder/400/225",
        duration: "3:45",
        videoUrl: "#",
        quote: "Delibix's AI system transformed our quality control process completely."
    },
    {
        id: "video-2",
        company: "Bank Nusantara Digital",
        author: "Dr. Sari Wijaya",
        role: "Chief Risk Officer",
        industry: "Financial Services",
        thumbnail: "/api/placeholder/400/225",
        duration: "4:12",
        videoUrl: "#",
        quote: "Our fraud detection accuracy improved by 95% in just 4 months."
    },
    {
        id: "video-3",
        company: "HealthCare Plus Network",
        author: "Dr. Indira Kusuma",
        role: "Chief Medical Officer",
        industry: "Healthcare",
        thumbnail: "/api/placeholder/400/225",
        duration: "5:30",
        videoUrl: "#",
        quote: "Patient outcomes have never been better since implementing AI diagnostics."
    }
];
const industries = ["All Industries", "Manufacturing", "Financial Services", "Healthcare", "Retail", "Energy", "Logistics"];
const companySizes = ["All Sizes", "50-200 employees", "200-500 employees", "500-1000 employees", "1000+ employees"];
export function SuccessStoriesPage({ navigate }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
    const [selectedSize, setSelectedSize] = useState("All Sizes");
    const [selectedStory, setSelectedStory] = useState(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const filteredStories = successStories.filter(story => {
        const matchesSearch = story.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            story.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
            story.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesIndustry = selectedIndustry === "All Industries" || story.industry === selectedIndustry;
        const matchesSize = selectedSize === "All Sizes" || story.companySize === selectedSize;
        return matchesSearch && matchesIndustry && matchesSize;
    });
    const featuredStories = filteredStories.filter(story => story.featured);
    const nextVideo = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videoTestimonials.length);
    };
    const prevVideo = () => {
        setCurrentVideoIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [Award, TrendingUp, Star, Target, Rocket, Heart];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Award, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Client Success Stories" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Success ", _jsx("span", { className: "gradient-text-blue", children: "Stories" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Real transformations from companies that trusted Delibix with their AI journey. Discover how our solutions delivered measurable results." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [
                                        { label: "Success Stories", value: "100+", desc: "Documented cases" },
                                        { label: "Average ROI", value: "340%", desc: "Within 12 months" },
                                        { label: "Client Satisfaction", value: "99%", desc: "Rating score" },
                                        { label: "Industries Served", value: "15+", desc: "Diverse sectors" }
                                    ].map((stat, index) => (_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text-blue mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: stat.label }), _jsx("div", { className: "text-xs text-foreground-muted", children: stat.desc })] }, index))) })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "mb-12", children: _jsx(Card, { className: "glass p-6", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-muted" }), _jsx(Input, { placeholder: "Search success stories...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-11 text-lg py-6 bg-input-background" })] }), _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsxs(Select, { value: selectedIndustry, onValueChange: setSelectedIndustry, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "All Industries" }) }), _jsx(SelectContent, { children: industries.map((industry) => (_jsx(SelectItem, { value: industry, children: industry }, industry))) })] }), _jsxs(Select, { value: selectedSize, onValueChange: setSelectedSize, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "All Company Sizes" }) }), _jsx(SelectContent, { children: companySizes.map((size) => (_jsx(SelectItem, { value: size, children: size }, size))) })] })] })] }) }) }), _jsxs(Tabs, { defaultValue: "featured", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-3 mb-12", children: [_jsx(TabsTrigger, { value: "featured", children: "Featured Stories" }), _jsx(TabsTrigger, { value: "all", children: "All Stories" }), _jsx(TabsTrigger, { value: "videos", children: "Video Testimonials" })] }), _jsx(TabsContent, { value: "featured", children: _jsx("div", { className: "space-y-8", children: featuredStories.map((story, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 + index * 0.1 }, children: _jsx(Card, { className: "glass p-8 hover:shadow-lg transition-all duration-300", children: _jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center", children: _jsx(Building2, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold", children: story.company }), _jsx("p", { className: "text-sm text-foreground-muted", children: story.industry })] })] }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "w-4 h-4 text-foreground-muted" }), _jsx("span", { children: story.location })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Users, { className: "w-4 h-4 text-foreground-muted" }), _jsx("span", { children: story.companySize })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "w-4 h-4 text-foreground-muted" }), _jsxs("span", { children: [story.timeline, " implementation"] })] })] }), _jsx("div", { className: "flex flex-wrap gap-1", children: story.tags.map((tag, idx) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, idx))) })] }), _jsxs("div", { className: "lg:col-span-2 space-y-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-2", children: "Challenge:" }), _jsx("p", { className: "text-foreground-muted text-sm", children: story.challenge })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-2", children: "Solution:" }), _jsx("p", { className: "text-foreground-muted text-sm", children: story.solution })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: story.metrics.map((metric, idx) => (_jsxs("div", { className: "text-center p-3 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg", children: [_jsx("div", { className: "text-lg font-bold gradient-text-blue", children: metric.value }), _jsx("div", { className: "text-xs text-foreground-muted", children: metric.label }), _jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: metric.improvement })] }, idx))) }), _jsxs(Card, { className: "bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 p-6", children: [_jsx(Quote, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" }), _jsxs("p", { className: "text-foreground-muted italic mb-4", children: ["\"", story.testimonial.quote, "\""] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 bg-blue-200 dark:bg-blue-700 rounded-full flex items-center justify-center", children: _jsx(Users, { className: "w-5 h-5 text-blue-600 dark:text-blue-300" }) }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: story.testimonial.author }), _jsx("div", { className: "text-sm text-foreground-muted", children: story.testimonial.role })] })] })] }), _jsxs("div", { className: "flex gap-3", children: [_jsxs(Button, { variant: "outline", onClick: () => setSelectedStory(story), children: [_jsx(Eye, { className: "w-4 h-4 mr-2" }), "View Details"] }), story.caseStudyUrl && (_jsxs(Button, { variant: "outline", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Case Study"] })), _jsxs(Button, { variant: "outline", children: [_jsx(Share2, { className: "w-4 h-4 mr-2" }), "Share"] })] })] })] }) }) }, story.id))) }) }), _jsx(TabsContent, { value: "all", children: _jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-6", children: filteredStories.map((story, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 + index * 0.1 }, children: _jsx(Card, { className: "glass p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer", onClick: () => setSelectedStory(story), children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center", children: _jsx(Building2, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: story.company }), _jsx("p", { className: "text-sm text-foreground-muted", children: story.industry })] })] }), _jsx("p", { className: "text-sm text-foreground-muted line-clamp-3", children: story.challenge }), _jsx("div", { className: "grid grid-cols-2 gap-2", children: story.metrics.slice(0, 2).map((metric, idx) => (_jsxs("div", { className: "text-center p-2 bg-blue-50/50 dark:bg-blue-900/20 rounded", children: [_jsx("div", { className: "text-sm font-bold gradient-text-blue", children: metric.value }), _jsx("div", { className: "text-xs text-foreground-muted", children: metric.label })] }, idx))) }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx(Badge, { variant: "outline", children: story.timeline }), _jsx(ArrowRight, { className: "w-4 h-4 text-foreground-muted" })] })] }) }) }, story.id))) }) }), _jsx(TabsContent, { value: "videos", children: _jsxs("div", { className: "space-y-8", children: [_jsx(Card, { className: "glass p-8", children: _jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [_jsxs("div", { className: "relative", children: [_jsxs("div", { className: "aspect-video bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden", children: [_jsx("img", { src: videoTestimonials[currentVideoIndex].thumbnail, alt: "Video thumbnail", className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsx(Button, { size: "lg", className: "w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white", onClick: () => setIsPlaying(!isPlaying), children: isPlaying ? _jsx(Pause, { className: "w-6 h-6" }) : _jsx(Play, { className: "w-6 h-6 ml-1" }) }) }), _jsx("div", { className: "absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm", children: videoTestimonials[currentVideoIndex].duration })] }), _jsxs("div", { className: "flex justify-between mt-4", children: [_jsxs(Button, { variant: "outline", onClick: prevVideo, children: [_jsx(ChevronLeft, { className: "w-4 h-4 mr-2" }), "Previous"] }), _jsxs(Button, { variant: "outline", onClick: nextVideo, children: ["Next", _jsx(ChevronRight, { className: "w-4 h-4 ml-2" })] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-2", children: videoTestimonials[currentVideoIndex].company }), _jsx("p", { className: "text-foreground-muted", children: videoTestimonials[currentVideoIndex].industry })] }), _jsx(Quote, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }), _jsxs("blockquote", { className: "text-lg italic", children: ["\"", videoTestimonials[currentVideoIndex].quote, "\""] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-12 h-12 bg-blue-200 dark:bg-blue-700 rounded-full flex items-center justify-center", children: _jsx(Users, { className: "w-6 h-6 text-blue-600 dark:text-blue-300" }) }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: videoTestimonials[currentVideoIndex].author }), _jsx("div", { className: "text-sm text-foreground-muted", children: videoTestimonials[currentVideoIndex].role })] })] })] })] }) }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: videoTestimonials.map((video, index) => (_jsxs(Card, { className: `glass p-4 cursor-pointer transition-all duration-300 ${index === currentVideoIndex ? 'ring-2 ring-blue-400' : 'hover:shadow-lg'}`, onClick: () => setCurrentVideoIndex(index), children: [_jsx("div", { className: "aspect-video bg-slate-200 dark:bg-slate-700 rounded overflow-hidden mb-3", children: _jsx("img", { src: video.thumbnail, alt: "Video thumbnail", className: "w-full h-full object-cover" }) }), _jsx("h4", { className: "font-semibold mb-1", children: video.company }), _jsx("p", { className: "text-sm text-foreground-muted mb-2", children: video.author }), _jsx("p", { className: "text-xs text-foreground-muted", children: video.role })] }, video.id))) })] }) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-20", children: _jsxs(Card, { className: "glass p-8 text-center", children: [_jsx("h2", { className: "mb-6", children: "Ready to Create Your Success Story?" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8 max-w-2xl mx-auto", children: "Join these successful companies and transform your business with AI. Let's discuss how we can help you achieve similar results." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-4", onClick: () => navigate('demo-request'), children: [_jsx(Rocket, { className: "w-5 h-5 mr-2" }), "Start Your Journey"] }), _jsxs(Button, { variant: "outline", size: "lg", onClick: () => navigate('contact'), children: [_jsx(Users, { className: "w-5 h-5 mr-2" }), "Speak with Expert"] })] })] }) })] }), selectedStory && (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4", children: _jsx(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto", children: _jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "flex justify-between items-start mb-6", children: [_jsxs("div", { children: [_jsx("h2", { className: "mb-2", children: selectedStory.company }), _jsxs("p", { className: "text-foreground-muted", children: [selectedStory.industry, " \u2022 ", selectedStory.location] })] }), _jsx(Button, { variant: "outline", onClick: () => setSelectedStory(null), children: "\u2715" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-3", children: "Challenge" }), _jsx("p", { className: "text-foreground-muted", children: selectedStory.challenge })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-3", children: "Solution" }), _jsx("p", { className: "text-foreground-muted", children: selectedStory.solution })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-3", children: "Implementation" }), _jsx("p", { className: "text-foreground-muted", children: selectedStory.implementation })] }), _jsxs("div", { children: [_jsx("h3", { className: "mb-3", children: "Results" }), _jsx("div", { className: "grid md:grid-cols-2 gap-4", children: selectedStory.results.map((result, idx) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-600 dark:text-green-400" }), _jsx("span", { className: "text-sm", children: result })] }, idx))) })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: selectedStory.metrics.map((metric, idx) => (_jsxs("div", { className: "text-center p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg", children: [_jsx("div", { className: "text-xl font-bold gradient-text-blue", children: metric.value }), _jsx("div", { className: "text-sm text-foreground-muted", children: metric.label }), _jsx("div", { className: "text-sm text-green-600 dark:text-green-400", children: metric.improvement })] }, idx))) })] })] }) }) }))] }));
}
//# sourceMappingURL=SuccessStoriesPage.js.map