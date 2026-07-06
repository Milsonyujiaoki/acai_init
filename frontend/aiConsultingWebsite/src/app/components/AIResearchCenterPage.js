"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Microscope, FileText, Download, Calendar, Users, TrendingUp, Brain, Database, Atom, Lightbulb, Target, Award, ExternalLink, Search, Filter, BookOpen, Quote, Globe, ChevronRight, Star, Clock, Eye, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Avatar, AvatarFallback } from "./ui/avatar";
export function AIResearchCenterPage({ navigate }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const researchCategories = [
        { id: "all", label: "All Research", count: 156 },
        { id: "generative-ai", label: "Generative AI", count: 42 },
        { id: "machine-learning", label: "Machine Learning", count: 38 },
        { id: "ai-ethics", label: "AI Ethics", count: 24 },
        { id: "computer-vision", label: "Computer Vision", count: 28 },
        { id: "nlp", label: "Natural Language Processing", count: 34 },
        { id: "robotics", label: "Robotics & Automation", count: 18 },
        { id: "quantum-ai", label: "Quantum AI", count: 12 }
    ];
    const featuredResearch = [
        {
            title: "Advances in Large Language Model Efficiency",
            authors: ["Dr. Sarah Chen", "Dr. Michael Zhang", "Prof. Lisa Wang"],
            date: "2024-06-01",
            category: "Generative AI",
            abstract: "This paper presents novel techniques for improving the computational efficiency of large language models while maintaining performance quality...",
            downloads: 2847,
            citations: 156,
            impact: "High",
            type: "Journal Article",
            status: "Published",
            journal: "Nature Machine Intelligence"
        },
        {
            title: "Ethical Considerations in AI Decision Making Systems",
            authors: ["Dr. Priya Sharma", "Dr. John Mueller"],
            date: "2024-05-15",
            category: "AI Ethics",
            abstract: "A comprehensive analysis of ethical frameworks for AI systems in critical decision-making scenarios across healthcare, finance, and justice...",
            downloads: 1923,
            citations: 89,
            impact: "Medium",
            type: "Conference Paper",
            status: "Published",
            journal: "AAAI 2024"
        },
        {
            title: "Quantum-Enhanced Machine Learning Algorithms",
            authors: ["Dr. Ahmed Hassan", "Prof. Maria Rodriguez"],
            date: "2024-05-01",
            category: "Quantum AI",
            abstract: "Investigation into hybrid quantum-classical algorithms that demonstrate significant speedup for specific machine learning tasks...",
            downloads: 1456,
            citations: 67,
            impact: "High",
            type: "Preprint",
            status: "Under Review",
            journal: "arXiv"
        },
        {
            title: "Real-time Computer Vision for Industrial Automation",
            authors: ["Dr. Thomas Kim", "Dr. Elena Petrov", "Dr. Raj Patel"],
            date: "2024-04-20",
            category: "Computer Vision",
            abstract: "Development of edge-optimized computer vision models for real-time quality control in manufacturing environments...",
            downloads: 2156,
            citations: 112,
            impact: "Medium",
            type: "Journal Article",
            status: "Published",
            journal: "IEEE Transactions on Industrial Informatics"
        }
    ];
    const researchStats = [
        { label: "Published Papers", value: "450+", icon: FileText },
        { label: "Total Citations", value: "12,500+", icon: Quote },
        { label: "Research Partners", value: "85+", icon: Users },
        { label: "H-Index", value: "87", icon: TrendingUp }
    ];
    const collaborations = [
        {
            name: "Stanford AI Lab",
            type: "University",
            projects: 8,
            duration: "2020-2024",
            focus: "Generative AI, Ethics"
        },
        {
            name: "MIT CSAIL",
            type: "University",
            projects: 6,
            duration: "2021-2024",
            focus: "Quantum Computing, ML"
        },
        {
            name: "Google DeepMind",
            type: "Industry",
            projects: 4,
            duration: "2022-2024",
            focus: "Large Language Models"
        },
        {
            name: "OpenAI",
            type: "Industry",
            projects: 3,
            duration: "2023-2024",
            focus: "AGI Safety, Alignment"
        }
    ];
    const getImpactColor = (impact) => {
        switch (impact) {
            case "High": return "text-red-600 bg-red-100 dark:bg-red-900/30";
            case "Medium": return "text-orange-600 bg-orange-100 dark:bg-orange-900/30";
            case "Low": return "text-green-600 bg-green-100 dark:bg-green-900/30";
            default: return "text-gray-600 bg-gray-100 dark:bg-gray-800";
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case "Published": return "text-green-600 bg-green-100 dark:bg-green-900/30";
            case "Under Review": return "text-blue-600 bg-blue-100 dark:bg-blue-900/30";
            case "In Progress": return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30";
            default: return "text-gray-600 bg-gray-100 dark:bg-gray-800";
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/60 dark:from-blue-950/40 dark:via-background dark:to-blue-900/30" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-blue-300/40 dark:bg-blue-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-blue-400/35 dark:bg-blue-400/25 rounded-full blur-md float-delayed-2" })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(Microscope, { className: "w-12 h-12 text-blue-600 dark:text-blue-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "AI Research" }), ' ', _jsx("span", { className: "gradient-text-blue-light", children: "Center" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Advancing the frontiers of artificial intelligence through cutting-edge research, publications, and global collaborations." }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8", children: researchStats.map((stat, index) => {
                                                const Icon = stat.icon;
                                                return (_jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx(Icon, { className: "w-6 h-6 text-blue-600 mx-auto mb-2" }), _jsx("div", { className: "text-xl font-bold text-blue-600", children: stat.value }), _jsx("div", { className: "text-xs text-foreground-muted", children: stat.label })] }, index));
                                            }) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "max-w-2xl mx-auto mb-8", children: _jsx("div", { className: "relative glass p-2 rounded-2xl", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Search, { className: "w-5 h-5 text-foreground-muted ml-3" }), _jsx(Input, { placeholder: "Search research papers, authors, topics...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "border-0 bg-transparent focus:ring-0 text-lg" }), _jsx(Button, { size: "sm", className: "gradient-bg-blue text-white", children: "Search" })] }) }) })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "publications", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 glass", children: [_jsx(TabsTrigger, { value: "publications", children: "Publications" }), _jsx(TabsTrigger, { value: "projects", children: "Research Projects" }), _jsx(TabsTrigger, { value: "collaborations", children: "Collaborations" }), _jsx(TabsTrigger, { value: "impact", children: "Research Impact" })] }), _jsxs(TabsContent, { value: "publications", className: "space-y-8 mt-8", children: [_jsx(Card, { className: "glass w-full", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Filter, { className: "w-4 h-4" }), _jsx("span", { className: "font-medium", children: "Filter by:" })] }), _jsxs(Select, { value: selectedCategory, onValueChange: setSelectedCategory, children: [_jsx(SelectTrigger, { className: "w-48", children: _jsx(SelectValue, { placeholder: "Select category" }) }), _jsx(SelectContent, { children: researchCategories.map((category) => (_jsxs(SelectItem, { value: category.id, children: [category.label, " (", category.count, ")"] }, category.id))) })] }), _jsxs(Select, { defaultValue: "recent", children: [_jsx(SelectTrigger, { className: "w-48", children: _jsx(SelectValue, { placeholder: "Sort by" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "recent", children: "Most Recent" }), _jsx(SelectItem, { value: "citations", children: "Most Cited" }), _jsx(SelectItem, { value: "downloads", children: "Most Downloaded" }), _jsx(SelectItem, { value: "impact", children: "Highest Impact" })] })] }), _jsx("div", { className: "flex flex-wrap gap-2", children: researchCategories.slice(1, 5).map((category) => (_jsx(Badge, { variant: selectedCategory === category.id ? "default" : "outline", className: "cursor-pointer", onClick: () => setSelectedCategory(category.id), children: category.label }, category.id))) })] }) }) }), _jsx("div", { className: "space-y-6", children: featuredResearch.map((paper, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsx(Card, { className: "glass-heavy card-hover", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Badge, { className: getStatusColor(paper.status), children: paper.status }), _jsx(Badge, { variant: "outline", children: paper.type }), _jsxs(Badge, { className: getImpactColor(paper.impact), children: [paper.impact, " Impact"] })] }), _jsx("h3", { className: "text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer", children: paper.title }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-foreground-muted mb-3", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Calendar, { className: "w-3 h-3" }), _jsx("span", { children: new Date(paper.date).toLocaleDateString() })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(BookOpen, { className: "w-3 h-3" }), _jsx("span", { children: paper.journal })] }), _jsx(Badge, { variant: "outline", className: "text-xs", children: paper.category })] }), _jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("span", { className: "text-sm font-medium", children: "Authors:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: paper.authors.map((author, authorIndex) => (_jsxs("span", { className: "text-sm text-blue-600 hover:underline cursor-pointer", children: [author, authorIndex < paper.authors.length - 1 && ","] }, authorIndex))) })] }), _jsx("p", { className: "text-foreground-muted mb-4", children: paper.abstract }), _jsxs("div", { className: "flex items-center gap-6 text-sm", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Download, { className: "w-3 h-3" }), _jsxs("span", { children: [paper.downloads.toLocaleString(), " downloads"] })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Quote, { className: "w-3 h-3" }), _jsxs("span", { children: [paper.citations, " citations"] })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Eye, { className: "w-3 h-3" }), _jsx("span", { children: "Views" })] })] })] }), _jsxs("div", { className: "flex flex-col gap-2 ml-4", children: [_jsxs(Button, { size: "sm", variant: "outline", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "PDF"] }), _jsxs(Button, { size: "sm", variant: "outline", children: [_jsx(ExternalLink, { className: "w-4 h-4 mr-2" }), "View"] }), _jsxs(Button, { size: "sm", variant: "outline", children: [_jsx(Share2, { className: "w-4 h-4 mr-2" }), "Share"] })] })] }) }) }) }, index))) }), _jsx("div", { className: "text-center", children: _jsxs(Button, { variant: "outline", size: "lg", children: ["Load More Publications", _jsx(ChevronRight, { className: "w-4 h-4 ml-2" })] }) })] }), _jsx(TabsContent, { value: "projects", className: "space-y-6 mt-8", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                                        {
                                            title: "Next-Generation Language Models",
                                            status: "Active",
                                            timeline: "2023-2025",
                                            funding: "$2.5M",
                                            team: 12,
                                            description: "Developing more efficient and aligned language models with reduced computational requirements.",
                                            partners: ["Stanford University", "Google AI"],
                                            publications: 8
                                        },
                                        {
                                            title: "Ethical AI Framework Development",
                                            status: "Active",
                                            timeline: "2024-2026",
                                            funding: "$1.8M",
                                            team: 8,
                                            description: "Creating comprehensive frameworks for ethical AI development and deployment.",
                                            partners: ["MIT", "Partnership on AI"],
                                            publications: 5
                                        },
                                        {
                                            title: "Quantum-Classical Hybrid Learning",
                                            status: "Planning",
                                            timeline: "2024-2027",
                                            funding: "$3.2M",
                                            team: 15,
                                            description: "Exploring quantum advantages in machine learning algorithms for specific problem domains.",
                                            partners: ["IBM Quantum", "University of Oxford"],
                                            publications: 2
                                        },
                                        {
                                            title: "Automated Scientific Discovery",
                                            status: "Completed",
                                            timeline: "2022-2024",
                                            funding: "$1.9M",
                                            team: 10,
                                            description: "AI systems that can autonomously generate and test scientific hypotheses.",
                                            partners: ["Allen Institute", "Nature Research"],
                                            publications: 12
                                        }
                                    ].map((project, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsxs(Card, { className: "glass-heavy h-full card-hover", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { children: [_jsx(CardTitle, { className: "text-lg", children: project.title }), _jsxs("div", { className: "flex items-center gap-2 mt-1", children: [_jsx(Badge, { className: getStatusColor(project.status), children: project.status }), _jsx("span", { className: "text-sm text-foreground-muted", children: project.timeline })] })] }), _jsx(Badge, { variant: "outline", children: project.funding })] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-foreground-muted mb-4", children: project.description }), _jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm mb-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Users, { className: "w-3 h-3" }), _jsxs("span", { children: [project.team, " team members"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "w-3 h-3" }), _jsxs("span", { children: [project.publications, " publications"] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("p", { className: "text-xs font-medium text-foreground-muted", children: "Research Partners:" }), _jsx("div", { className: "flex flex-wrap gap-1", children: project.partners.map((partner, idx) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: partner }, idx))) })] }), _jsxs(Button, { variant: "outline", size: "sm", className: "w-full mt-4", children: [_jsx(ExternalLink, { className: "w-4 h-4 mr-2" }), "View Project Details"] })] })] }) }, index))) }) }), _jsxs(TabsContent, { value: "collaborations", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "w-6 h-6 text-blue-600" }), "Global Research Partnerships"] }), _jsx(CardDescription, { children: "Our collaborative research network spans leading universities and industry partners worldwide" })] }), _jsx(CardContent, { children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: collaborations.map((collab, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "glass-blue-light p-6 rounded-lg", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg", children: collab.name }), _jsx(Badge, { variant: "outline", className: "mt-1", children: collab.type })] }), _jsxs("div", { className: "text-right text-sm text-foreground-muted", children: [_jsx("div", { children: collab.duration }), _jsxs("div", { children: [collab.projects, " projects"] })] })] }), _jsxs("p", { className: "text-sm text-foreground-muted mb-4", children: ["Focus areas: ", collab.focus] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(Target, { className: "w-3 h-3" }), _jsx("span", { children: "Active collaboration" })] }), _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(ExternalLink, { className: "w-3 h-3 mr-1" }), "View"] })] })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Global Partnership Network" }), _jsx(CardDescription, { children: "Interactive map of our research collaborations worldwide" })] }), _jsx(CardContent, { children: _jsx("div", { className: "h-96 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-dashed border-blue-200 dark:border-blue-700 flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx(Globe, { className: "w-12 h-12 text-blue-400 mx-auto mb-4" }), _jsx("p", { className: "text-foreground-muted", children: "Interactive Partnership Map" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Explore our global research network" })] }) }) })] })] }), _jsxs(TabsContent, { value: "impact", className: "space-y-6 mt-8", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-6", children: [_jsx(Award, { className: "w-12 h-12 text-blue-600 mx-auto mb-4" }), _jsx("div", { className: "text-3xl font-bold text-blue-600 mb-2", children: "87" }), _jsx("div", { className: "text-sm text-foreground-muted", children: "H-Index Score" }), _jsx("div", { className: "text-xs text-foreground-muted mt-1", children: "Top 1% globally" })] }) }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-6", children: [_jsx(TrendingUp, { className: "w-12 h-12 text-green-600 mx-auto mb-4" }), _jsx("div", { className: "text-3xl font-bold text-green-600 mb-2", children: "12.5K" }), _jsx("div", { className: "text-sm text-foreground-muted", children: "Total Citations" }), _jsx("div", { className: "text-xs text-foreground-muted mt-1", children: "+25% this year" })] }) }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-6", children: [_jsx(Star, { className: "w-12 h-12 text-yellow-600 mx-auto mb-4" }), _jsx("div", { className: "text-3xl font-bold text-yellow-600 mb-2", children: "156" }), _jsx("div", { className: "text-sm text-foreground-muted", children: "Publications" }), _jsx("div", { className: "text-xs text-foreground-muted mt-1", children: "42 this year" })] }) })] }), _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Award, { className: "w-6 h-6 text-yellow-600" }), "Awards & Recognition"] }), _jsx(CardDescription, { children: "Recent achievements and accolades from the research community" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: [
                                                        {
                                                            title: "Best Paper Award - ICML 2024",
                                                            description: "Outstanding contribution to machine learning theory",
                                                            date: "June 2024",
                                                            type: "Conference Award"
                                                        },
                                                        {
                                                            title: "AI Ethics Excellence Award",
                                                            description: "Recognition for leadership in responsible AI development",
                                                            date: "May 2024",
                                                            type: "Industry Award"
                                                        },
                                                        {
                                                            title: "Nature Research Spotlight",
                                                            description: "Featured research on quantum machine learning",
                                                            date: "April 2024",
                                                            type: "Publication"
                                                        },
                                                        {
                                                            title: "Young Researcher Award",
                                                            description: "Dr. Sarah Chen recognized for breakthrough research",
                                                            date: "March 2024",
                                                            type: "Individual Award"
                                                        }
                                                    ].map((award, index) => (_jsxs("div", { className: "flex items-start gap-4 p-4 glass-blue-light rounded-lg", children: [_jsx("div", { className: "p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full", children: _jsx(Award, { className: "w-4 h-4 text-yellow-600" }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-2 mb-1", children: [_jsx("h3", { className: "font-semibold", children: award.title }), _jsx(Badge, { variant: "outline", className: "text-xs", children: award.type })] }), _jsx("p", { className: "text-sm text-foreground-muted mb-2", children: award.description }), _jsxs("div", { className: "flex items-center gap-1 text-xs text-foreground-muted", children: [_jsx(Calendar, { className: "w-3 h-3" }), _jsx("span", { children: award.date })] })] })] }, index))) }) })] })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16", children: _jsx(Card, { className: "glass w-full bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 dark:from-blue-950/30 dark:via-background dark:to-blue-950/30", children: _jsx(CardContent, { className: "p-12", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Collaborate with Our Research Team" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "Join our research initiatives or propose collaborative projects to advance AI science together." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('contact'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-4", children: [_jsx(Users, { className: "w-5 h-5 mr-2" }), "Join Research"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('whitepapers'), size: "lg", className: "px-8 py-4", children: [_jsx(FileText, { className: "w-5 h-5 mr-2" }), "Download Papers"] })] })] }) }) }) })] })] }));
}
//# sourceMappingURL=AIResearchCenterPage.js.map