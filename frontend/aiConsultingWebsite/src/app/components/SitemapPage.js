"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Search, Map, Home, Building2, User, Brain, Factory, Lightbulb, Layers, Globe, GraduationCap, MapPin, BookOpen, Rocket, Newspaper, Scale, Settings, Users, ChevronRight, ExternalLink, Filter, Grid3X3, List, BarChart3, Zap, Shield, Heart, Code, Cpu, Network, Database, Cloud, Smartphone, Monitor, Award, Target, TrendingUp, MessageSquare, Calendar, FileText, Star, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
export function SitemapPage({ navigate }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState("grid");
    const [selectedCategory, setSelectedCategory] = useState(null);
    // Complete sitemap data organized by categories
    const sitemapData = {
        "Core System": {
            icon: Home,
            description: "Essential pages and system functions",
            color: "text-blue-600",
            bgColor: "bg-blue-50 dark:bg-blue-950/30",
            pages: [
                { name: "Home", url: "home", description: "Main landing page with core sections" },
                { name: "About Us", url: "about", description: "Company information and mission" },
                { name: "Contact", url: "contact", description: "Get in touch with our team" },
                { name: "Search", url: "search", description: "Find content across our platform" },
                { name: "Sitemap", url: "sitemap", description: "Complete site navigation overview" },
                { name: "404 Error", url: "404", description: "Page not found handler" },
                { name: "500 Error", url: "500", description: "Server error handler" },
                { name: "Maintenance", url: "maintenance", description: "Maintenance mode page" }
            ]
        },
        "Business & Company": {
            icon: Building2,
            description: "Company information and business pages",
            color: "text-purple-600",
            bgColor: "bg-purple-50 dark:bg-purple-950/30",
            pages: [
                { name: "Pricing", url: "pricing", description: "Service pricing and packages" },
                { name: "Services", url: "services", description: "Our consulting services overview" },
                { name: "Team", url: "team", description: "Meet our expert team" },
                { name: "Careers", url: "careers", description: "Join our growing team" },
                { name: "Branding", url: "branding", description: "Brand guidelines and assets" },
                { name: "Investors", url: "investors", description: "Investor relations and information" },
                { name: "Career Paths", url: "career-paths", description: "Professional development opportunities" },
                { name: "Client Journey", url: "client-journey", description: "How we work with clients" },
                { name: "Client Testimonials", url: "client-testimonials", description: "What our clients say" },
                { name: "Transformation Stories", url: "transformation-stories", description: "Success transformation cases" },
                { name: "ROI Showcase", url: "roi-showcase", description: "Return on investment examples" }
            ]
        },
        "Authentication": {
            icon: User,
            description: "User account and authentication system",
            color: "text-green-600",
            bgColor: "bg-green-50 dark:bg-green-950/30",
            pages: [
                { name: "Login", url: "login", description: "User login portal" },
                { name: "Sign Up", url: "signup", description: "Create new account" },
                { name: "Forgot Password", url: "forgot-password", description: "Password recovery" },
                { name: "Account Dashboard", url: "account-dashboard", description: "User account management" },
                { name: "Notifications", url: "notifications", description: "User notifications center" }
            ]
        },
        "AI Tools & Calculators": {
            icon: Brain,
            description: "Interactive AI tools and assessment platforms",
            color: "text-indigo-600",
            bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
            pages: [
                { name: "AI Playground", url: "ai-playground", description: "Experiment with AI tools" },
                { name: "AI ROI Calculator", url: "ai-roi-calculator", description: "Calculate AI investment returns" },
                { name: "AI Readiness Checklist", url: "ai-readiness-checklist", description: "Assess AI implementation readiness" },
                { name: "Strategy Template", url: "strategy-template", description: "Digital strategy templates" },
                { name: "AGI Research", url: "agi", description: "Artificial General Intelligence insights" },
                { name: "AI Experiments", url: "experiments", description: "Latest AI experiments and demos" },
                { name: "Cost Calculator", url: "cost-calculator", description: "Project cost estimation" },
                { name: "Digital Readiness", url: "digital-readiness", description: "Digital transformation readiness" },
                { name: "Transformation Planner", url: "digital-transformation-planner", description: "Plan your digital journey" },
                { name: "Compliance Checker", url: "compliance-checker", description: "AI compliance assessment" },
                { name: "Risk Assessment", url: "risk-assessment", description: "AI implementation risk analysis" },
                { name: "Skill Assessment", url: "skill-assessment", description: "Team skill evaluation" },
                { name: "Timeline Estimator", url: "timeline-estimator", description: "Project timeline estimation" },
                { name: "Resource Planner", url: "resource-planner", description: "Resource allocation planning" },
                { name: "Competitor Analysis", url: "competitor-analysis", description: "Market competition analysis" },
                { name: "Digital Benchmarks", url: "digital-benchmarks", description: "Industry benchmark data" }
            ]
        },
        "Industry Solutions": {
            icon: Factory,
            description: "Specialized solutions for different industries",
            color: "text-orange-600",
            bgColor: "bg-orange-50 dark:bg-orange-950/30",
            pages: [
                { name: "Healthcare Digital", url: "healthcare-digital", description: "Healthcare AI and digital solutions" },
                { name: "Finance Digital", url: "finance-digital", description: "Financial services transformation" },
                { name: "Manufacturing Digital", url: "manufacturing-digital", description: "Industry 4.0 solutions" },
                { name: "Retail Digital", url: "retail-digital", description: "Retail and e-commerce AI" },
                { name: "Education Digital", url: "education-digital", description: "Educational technology solutions" },
                { name: "Government Digital", url: "government-digital", description: "Public sector digitization" },
                { name: "SME Digital", url: "sme-digital", description: "Small and medium enterprise solutions" },
                { name: "Startup Digital", url: "startup-digital", description: "Startup acceleration programs" },
                { name: "Agriculture Digital", url: "agriculture-digital", description: "Smart farming and AgTech solutions" }
            ]
        },
        "Consulting Services": {
            icon: Lightbulb,
            description: "Professional consulting and strategy services",
            color: "text-yellow-600",
            bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
            pages: [
                { name: "Digital Strategy", url: "digital-strategy", description: "Digital transformation strategy" },
                { name: "Business Process", url: "business-process", description: "Process optimization consulting" },
                { name: "Tech Stack Consulting", url: "tech-stack-consulting", description: "Technology architecture advice" },
                { name: "Data Strategy", url: "data-strategy", description: "Data management and analytics" },
                { name: "Digital Workforce", url: "digital-workforce", description: "Workforce transformation" },
                { name: "Cybersecurity Consulting", url: "cybersecurity-consulting", description: "Security and compliance" },
                { name: "Cloud Transformation", url: "cloud-transformation", description: "Cloud migration and strategy" },
                { name: "Automation Consulting", url: "automation-consulting", description: "Process automation solutions" },
                { name: "Business Intelligence", url: "business-intelligence", description: "BI and analytics solutions" },
                { name: "AI Consulting Tools", url: "ai-consulting-tools", description: "AI implementation tools" },
                { name: "Consulting Frameworks", url: "consulting-frameworks", description: "Proven consulting methodologies" },
                { name: "Consulting Methodology", url: "consulting-methodology", description: "Our consulting approach" },
                { name: "Change Management", url: "change-management", description: "Organizational change support" },
                { name: "Project Management", url: "project-management", description: "Project delivery excellence" },
                { name: "Implementation Timeline", url: "implementation-timeline", description: "Project timeline planning" },
                { name: "Post Implementation", url: "post-implementation", description: "Post-launch support and optimization" }
            ]
        },
        "Platform Features": {
            icon: Layers,
            description: "Advanced platform capabilities and tools",
            color: "text-cyan-600",
            bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
            pages: [
                { name: "Digital Maturity", url: "digital-maturity", description: "Digital maturity assessment" },
                { name: "Business Transformation", url: "business-transformation", description: "Transformation management platform" },
                { name: "Tech Stack Analyzer", url: "tech-stack-analyzer", description: "Technology stack analysis" },
                { name: "ROI Dashboard", url: "roi-dashboard", description: "Return on investment tracking" },
                { name: "Process Optimizer", url: "process-optimizer", description: "Business process optimization" },
                { name: "API Exchange", url: "api-exchange", description: "API marketplace and integration" },
                { name: "Digital Marketplace", url: "digital-marketplace", description: "Digital solutions marketplace" },
                { name: "Integration Hub", url: "integration-hub", description: "System integration center" },
                { name: "Innovation Lab", url: "innovation-lab", description: "Innovation and R&D platform" },
                { name: "Tech Radar", url: "tech-radar", description: "Technology trend analysis" },
                { name: "Vendor Ecosystem", url: "vendor-ecosystem", description: "Partner and vendor management" }
            ]
        },
        "Technology Stack": {
            icon: Cpu,
            description: "Cutting-edge technology solutions and research",
            color: "text-pink-600",
            bgColor: "bg-pink-50 dark:bg-pink-950/30",
            pages: [
                { name: "Metaverse Consulting", url: "metaverse-consulting", description: "Virtual world business solutions" },
                { name: "IoT Ecosystem", url: "iot-ecosystem", description: "Internet of Things platform" },
                { name: "Edge Computing", url: "edge-computing", description: "Edge AI and computing solutions" },
                { name: "Quantum Computing", url: "quantum-computing", description: "Quantum technology research" },
                { name: "Web3 Integration", url: "web3-integration", description: "Blockchain and Web3 solutions" },
                { name: "AI Ethics Checker", url: "ai-ethics-checker", description: "AI ethics and compliance" },
                { name: "AI Research Center", url: "ai-research-center", description: "AI research and development" },
                { name: "Data Governance", url: "data-governance", description: "Data management and governance" }
            ]
        },
        "Academy & Training": {
            icon: GraduationCap,
            description: "Education and certification programs",
            color: "text-violet-600",
            bgColor: "bg-violet-50 dark:bg-violet-950/30",
            pages: [
                { name: "Delibix Academy", url: "delibix-academy", description: "AI education and training platform" },
                { name: "Instructor Portal", url: "instructor-portal", description: "Instructor management system" },
                { name: "Exam Center", url: "exam-center", description: "Certification exams and testing" },
                { name: "Client Onboarding", url: "client-onboarding", description: "New client integration process" },
                { name: "Enterprise Portal", url: "enterprise-portal", description: "Enterprise client management" }
            ]
        },
        "Regional Presence": {
            icon: MapPin,
            description: "Regional hubs and global delivery capabilities",
            color: "text-emerald-600",
            bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
            pages: [
                { name: "Southeast Asia", url: "southeast-asia", description: "Southeast Asia operations" },
                { name: "Indonesia Digital", url: "indonesia-digital", description: "Indonesia market focus" },
                { name: "Singapore Hub", url: "singapore-hub", description: "Singapore business hub" },
                { name: "Malaysia Hub", url: "malaysia-hub", description: "Malaysia operations center" },
                { name: "Thailand Hub", url: "thailand-hub", description: "Thailand market presence" },
                { name: "Vietnam Hub", url: "vietnam-hub", description: "Vietnam business operations" },
                { name: "Asia Pacific", url: "asia-pacific", description: "Regional Asia Pacific strategy" },
                { name: "Global Delivery", url: "global-delivery", description: "Worldwide delivery capabilities" }
            ]
        },
        "Resources & Community": {
            icon: BookOpen,
            description: "Knowledge resources and community platforms",
            color: "text-teal-600",
            bgColor: "bg-teal-50 dark:bg-teal-950/30",
            pages: [
                { name: "Blog", url: "blog", description: "Latest insights and articles" },
                { name: "Community", url: "community", description: "User community platform" },
                { name: "Documentation", url: "documentation", description: "Technical documentation" },
                { name: "Events & Workshops", url: "events-workshops", description: "Training events and workshops" },
                { name: "FAQ", url: "faq", description: "Frequently asked questions" },
                { name: "Help Center", url: "help-center", description: "Support and help resources" },
                { name: "Support", url: "support", description: "Customer support portal" },
                { name: "Community Forum", url: "community-forum", description: "Discussion forums" },
                { name: "Knowledge Base", url: "knowledge-base", description: "Comprehensive knowledge library" },
                { name: "Whitepapers", url: "whitepapers", description: "Research papers and studies" },
                { name: "Glossary", url: "glossary", description: "Terms and definitions" },
                { name: "Best Practices", url: "best-practices", description: "Industry best practices" },
                { name: "Template Library", url: "template-library", description: "Downloadable templates" },
                { name: "Tools Directory", url: "tools-directory", description: "Recommended tools and software" },
                { name: "Market Research", url: "market-research", description: "Industry research and trends" },
                { name: "Future of Digital", url: "future-of-digital", description: "Digital transformation insights" },
                { name: "Webinar Archive", url: "webinar-archive", description: "Past webinars and recordings" }
            ]
        },
        "Business Development": {
            icon: Rocket,
            description: "Growth and partnership opportunities",
            color: "text-red-600",
            bgColor: "bg-red-50 dark:bg-red-950/30",
            pages: [
                { name: "Newsletter", url: "newsletter", description: "Subscribe to our newsletter" },
                { name: "Submit Idea", url: "submit-idea", description: "Share your innovation ideas" },
                { name: "Affiliate Program", url: "affiliate", description: "Partner with us" },
                { name: "Demo Request", url: "demo-request", description: "Request a personalized demo" },
                { name: "Enterprise Solutions", url: "enterprise-solutions", description: "Large-scale enterprise offerings" },
                { name: "Success Stories", url: "success-stories", description: "Client success case studies" },
                { name: "Developer Portal", url: "developer-portal", description: "Developer resources and APIs" },
                { name: "Training Certification", url: "training-certification", description: "Professional certification programs" },
                { name: "Certification Program", url: "certification-program", description: "Detailed certification paths" },
                { name: "Course Catalog", url: "course-catalog", description: "Available training courses" },
                { name: "Digital University", url: "digital-university", description: "Comprehensive learning platform" }
            ]
        },
        "Media & Press": {
            icon: Newspaper,
            description: "Media relations and press resources",
            color: "text-gray-600",
            bgColor: "bg-gray-50 dark:bg-gray-950/30",
            pages: [
                { name: "Press Releases", url: "press-releases", description: "Latest company announcements" },
                { name: "Media Coverage", url: "media-coverage", description: "Media mentions and coverage" },
                { name: "Press Media Kit", url: "press-media-kit", description: "Media resources and assets" }
            ]
        },
        "Legal & Compliance": {
            icon: Scale,
            description: "Legal information and compliance policies",
            color: "text-slate-600",
            bgColor: "bg-slate-50 dark:bg-slate-950/30",
            pages: [
                { name: "Privacy Policy", url: "privacy-policy", description: "Data privacy and protection" },
                { name: "Terms of Service", url: "terms-service", description: "Terms and conditions" },
                { name: "Security", url: "security", description: "Security measures and protocols" },
                { name: "Cookies Policy", url: "cookies-policy", description: "Cookie usage policy" },
                { name: "Ethics & Transparency", url: "ethics-transparency", description: "Ethical guidelines and transparency" }
            ]
        },
        "Administration": {
            icon: Settings,
            description: "Administrative tools and system management",
            color: "text-amber-600",
            bgColor: "bg-amber-50 dark:bg-amber-950/30",
            pages: [
                { name: "Admin Dashboard", url: "admin-dashboard", description: "Administrative control panel" },
                { name: "Advanced Analytics", url: "advanced-analytics", description: "Detailed analytics and reporting" },
                { name: "Shopping Cart", url: "shopping-cart", description: "E-commerce cart functionality" },
                { name: "Merchandise Store", url: "merchandise-store", description: "Company merchandise" },
                { name: "System Status", url: "system-status", description: "Platform status and uptime" },
                { name: "Digital Research", url: "digital-research", description: "Research and development portal" }
            ]
        },
        "Partners & Ecosystem": {
            icon: Users,
            description: "Partnership programs and ecosystem",
            color: "text-rose-600",
            bgColor: "bg-rose-50 dark:bg-rose-950/30",
            pages: [
                { name: "Clients", url: "clients", description: "Our valued clients" },
                { name: "Partners", url: "partners", description: "Strategic partnerships" },
                { name: "Channel Partners", url: "channel-partners", description: "Channel partner program" },
                { name: "Consulting Partners", url: "consulting-partners", description: "Consulting partner network" },
                { name: "Implementation Partners", url: "implementation-partners", description: "Implementation specialists" },
                { name: "Technology Partners", url: "technology-partners", description: "Technology alliance partners" },
                { name: "University Partners", url: "university-partners", description: "Academic partnerships" }
            ]
        }
    };
    // Calculate total pages
    const totalPages = Object.values(sitemapData).reduce((total, category) => total + category.pages.length, 0);
    // Filter pages based on search query
    const filteredCategories = useMemo(() => {
        if (!searchQuery)
            return sitemapData;
        const filtered = {};
        Object.entries(sitemapData).forEach(([categoryName, category]) => {
            const filteredPages = category.pages.filter(page => page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                page.url.toLowerCase().includes(searchQuery.toLowerCase()));
            if (filteredPages.length > 0 || categoryName.toLowerCase().includes(searchQuery.toLowerCase())) {
                filtered[categoryName] = {
                    ...category,
                    pages: filteredPages.length > 0 ? filteredPages : category.pages
                };
            }
        });
        return filtered;
    }, [searchQuery, sitemapData]);
    // Calculate filtered total
    const filteredTotal = Object.values(filteredCategories).reduce((total, category) => total + category.pages.length, 0);
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/30 to-blue-100/40 dark:from-blue-950/20 dark:via-background/10 dark:to-blue-900/20" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-purple-300/40 dark:bg-purple-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-blue-400/35 dark:bg-blue-400/25 rounded-full blur-md float-delayed-2" })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsx("div", { className: "text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(Map, { className: "w-12 h-12 text-blue-600 dark:text-blue-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "Complete" }), ' ', _jsx("span", { className: "text-blue-600", children: "Sitemap" })] }), _jsxs("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: ["Navigate our comprehensive AI consulting ecosystem. Explore all ", totalPages, " pages across 16 categories of services, tools, and resources."] }), _jsxs("div", { className: "flex justify-center flex-wrap gap-6 mb-8", children: [_jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx("div", { className: "text-2xl font-bold text-blue-600", children: totalPages }), _jsx("div", { className: "text-sm text-foreground-muted", children: "Total Pages" })] }), _jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx("div", { className: "text-2xl font-bold text-purple-600", children: "16" }), _jsx("div", { className: "text-sm text-foreground-muted", children: "Categories" })] }), _jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx("div", { className: "text-2xl font-bold text-green-600", children: "100%" }), _jsx("div", { className: "text-sm text-foreground-muted", children: "Coverage" })] })] })] }) }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "mb-12", children: _jsx(Card, { className: "glass-heavy", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between", children: [_jsx("div", { className: "flex-grow max-w-xl", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-muted w-5 h-5" }), _jsx(Input, { placeholder: "Search pages, categories, or descriptions...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-10 h-12 text-lg" })] }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-sm text-foreground-muted", children: "View:" }), _jsx(Button, { variant: viewMode === "grid" ? "default" : "outline", size: "sm", onClick: () => setViewMode("grid"), children: _jsx(Grid3X3, { className: "w-4 h-4" }) }), _jsx(Button, { variant: viewMode === "list" ? "default" : "outline", size: "sm", onClick: () => setViewMode("list"), children: _jsx(List, { className: "w-4 h-4" }) })] }), searchQuery && (_jsxs(Badge, { variant: "secondary", className: "px-3 py-1", children: [filteredTotal, " results"] }))] })] }) }) }) }), !searchQuery && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 }, className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "Categories Overview" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4", children: Object.entries(sitemapData).map(([categoryName, category], index) => {
                                    const Icon = category.icon;
                                    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.05 }, className: "cursor-pointer", onClick: () => setSelectedCategory(selectedCategory === categoryName ? null : categoryName), children: _jsx(Card, { className: `glass card-hover text-center ${selectedCategory === categoryName ? 'ring-2 ring-blue-500' : ''}`, children: _jsxs(CardContent, { className: "p-4", children: [_jsx("div", { className: `w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`, children: _jsx(Icon, { className: `w-6 h-6 ${category.color}` }) }), _jsx("h3", { className: "font-medium text-sm mb-1", children: categoryName }), _jsxs("div", { className: "text-xs text-foreground-muted", children: [category.pages.length, " pages"] })] }) }) }, categoryName));
                                }) })] })), _jsx("div", { className: "space-y-12", children: Object.entries(filteredCategories).map(([categoryName, category], categoryIndex) => {
                            // Skip if category is filtered out by selection
                            if (selectedCategory && selectedCategory !== categoryName) {
                                return null;
                            }
                            const Icon = category.icon;
                            return (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: categoryIndex * 0.1 }, id: categoryName.toLowerCase().replace(/\s+/g, '-'), children: _jsxs(Card, { className: "glass-heavy", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: `p-3 ${category.bgColor} rounded-xl`, children: _jsx(Icon, { className: `w-8 h-8 ${category.color}` }) }), _jsxs("div", { children: [_jsx(CardTitle, { className: "text-2xl", children: categoryName }), _jsx(CardDescription, { className: "text-lg", children: category.description })] })] }), _jsxs(Badge, { variant: "secondary", className: "px-3 py-1", children: [category.pages.length, " pages"] })] }) }), _jsx(CardContent, { children: viewMode === "grid" ? (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: category.pages.map((page, pageIndex) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: pageIndex * 0.05 }, className: "cursor-pointer", onClick: () => navigate(page.url), children: _jsx(Card, { className: "glass card-hover h-full", children: _jsxs(CardContent, { className: "p-4", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsx("h3", { className: "font-semibold text-lg", children: page.name }), _jsx(ExternalLink, { className: "w-4 h-4 text-foreground-muted flex-shrink-0 ml-2" })] }), _jsx("p", { className: "text-foreground-muted text-sm mb-3", children: page.description }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs(Badge, { variant: "outline", className: "text-xs", children: ["/", page.url] }), _jsx(ChevronRight, { className: "w-3 h-3 text-foreground-muted" })] })] }) }) }, page.url))) })) : (_jsx("div", { className: "space-y-2", children: category.pages.map((page, pageIndex) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: pageIndex * 0.03 }, className: "cursor-pointer", onClick: () => navigate(page.url), children: _jsxs("div", { className: "glass p-4 rounded-lg hover:glass-blue transition-all duration-200 flex items-center justify-between group", children: [_jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-3 mb-1", children: [_jsx("h3", { className: "font-semibold", children: page.name }), _jsxs(Badge, { variant: "outline", className: "text-xs", children: ["/", page.url] })] }), _jsx("p", { className: "text-foreground-muted text-sm", children: page.description })] }), _jsx(ChevronRight, { className: "w-5 h-5 text-foreground-muted group-hover:text-blue-600 transition-colors" })] }) }, page.url))) })) })] }) }, categoryName));
                        }) }), searchQuery && Object.keys(filteredCategories).length === 0 && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center py-12", children: [_jsx(Search, { className: "w-16 h-16 text-foreground-muted mx-auto mb-4" }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: "No results found" }), _jsx("p", { className: "text-foreground-muted mb-4", children: "Try adjusting your search terms or browse all categories above." }), _jsx(Button, { onClick: () => setSearchQuery(""), variant: "outline", children: "Clear Search" })] })), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 }, className: "mt-16", children: _jsx(Card, { className: "glass", children: _jsxs(CardContent, { className: "p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Quick Navigation" }), _jsx("p", { className: "text-foreground-muted", children: "Jump to the most popular sections of our platform" })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
                                            { name: "AI Tools", url: "ai-playground", icon: Brain, color: "text-indigo-600" },
                                            { name: "Services", url: "services", icon: Lightbulb, color: "text-yellow-600" },
                                            { name: "Academy", url: "delibix-academy", icon: GraduationCap, color: "text-violet-600" },
                                            { name: "Contact", url: "contact", icon: MessageSquare, color: "text-green-600" }
                                        ].map((link, index) => {
                                            const Icon = link.icon;
                                            return (_jsxs(Button, { variant: "outline", onClick: () => navigate(link.url), className: "h-auto p-4 flex flex-col items-center gap-2 hover:glass-blue", children: [_jsx(Icon, { className: `w-6 h-6 ${link.color}` }), _jsx("span", { children: link.name })] }, link.url));
                                        }) })] }) }) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, className: "mt-12 text-center", children: _jsxs("div", { className: "glass-blue-light p-6 rounded-2xl", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { children: [_jsx("div", { className: "text-3xl font-bold text-blue-600 mb-2", children: totalPages }), _jsx("div", { className: "text-foreground-muted", children: "Total Pages" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-3xl font-bold text-purple-600 mb-2", children: "16" }), _jsx("div", { className: "text-foreground-muted", children: "Categories" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-3xl font-bold text-green-600 mb-2", children: "100%" }), _jsx("div", { className: "text-foreground-muted", children: "Platform Coverage" })] })] }), _jsx(Separator, { className: "my-6" }), _jsx("p", { className: "text-foreground-muted", children: "Explore the most comprehensive AI consulting ecosystem with tools, services, and resources across every aspect of digital transformation." })] }) })] })] }));
}
//# sourceMappingURL=SitemapPage.js.map