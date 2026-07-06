"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Download, FileText, Image, Video, Archive, Copy, Check, Mail, Phone, Globe, MapPin, Calendar, User, Building2, Award, Target, Zap, Users, TrendingUp, Star, ArrowRight, ExternalLink, Package, Camera, Palette, BookOpen, Shield, Info, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
const assets = [
    {
        id: "1",
        name: "Delibix Logo Package",
        description: "Complete logo package including PNG, SVG, and vector formats in various color schemes",
        type: "archive",
        format: "ZIP",
        size: "2.4 MB",
        lastUpdated: "2024-03-15",
        downloadUrl: "/media-kit/delibix-logo-package.zip",
        category: "Logo & Branding"
    },
    {
        id: "2",
        name: "Company Fact Sheet",
        description: "Official company information, statistics, and key facts about Delibix",
        type: "document",
        format: "PDF",
        size: "1.2 MB",
        lastUpdated: "2024-03-18",
        downloadUrl: "/media-kit/delibix-fact-sheet.pdf",
        category: "Company Information"
    },
    {
        id: "3",
        name: "Executive Team Photos",
        description: "High-resolution professional photos of Delibix leadership team",
        type: "archive",
        format: "ZIP",
        size: "15.6 MB",
        lastUpdated: "2024-03-10",
        downloadUrl: "/media-kit/executive-photos.zip",
        category: "Photography"
    },
    {
        id: "4",
        name: "Product Screenshots",
        description: "High-quality screenshots of AI Playground and other Delibix products",
        type: "archive",
        format: "ZIP",
        size: "8.3 MB",
        lastUpdated: "2024-03-12",
        downloadUrl: "/media-kit/product-screenshots.zip",
        category: "Product Images"
    },
    {
        id: "5",
        name: "Company Presentation",
        description: "Official company overview presentation with key metrics and achievements",
        type: "document",
        format: "PDF",
        size: "4.7 MB",
        lastUpdated: "2024-03-16",
        downloadUrl: "/media-kit/company-presentation.pdf",
        category: "Company Information"
    },
    {
        id: "6",
        name: "Office & Team Photos",
        description: "Professional photos of Delibix office space and team in action",
        type: "archive",
        format: "ZIP",
        size: "12.8 MB",
        lastUpdated: "2024-03-08",
        downloadUrl: "/media-kit/office-photos.zip",
        category: "Photography"
    },
    {
        id: "7",
        name: "Brand Guidelines",
        description: "Complete brand guidelines including typography, colors, and usage instructions",
        type: "document",
        format: "PDF",
        size: "3.1 MB",
        lastUpdated: "2024-03-14",
        downloadUrl: "/media-kit/brand-guidelines.pdf",
        category: "Logo & Branding"
    },
    {
        id: "8",
        name: "Award Certificates",
        description: "Official certificates and recognition documents from industry awards",
        type: "archive",
        format: "ZIP",
        size: "5.4 MB",
        lastUpdated: "2024-02-20",
        downloadUrl: "/media-kit/award-certificates.zip",
        category: "Awards & Recognition"
    }
];
const companyInfo = {
    name: "Delibix",
    tagline: "Democratizing AI for Indonesian Businesses",
    founded: "2023",
    headquarters: "Yogyakarta, Indonesia",
    employees: "8+ team members",
    departments: "7 specialized departments",
    experience: "80+ years combined experience",
    website: "www.delibix.com",
    email: "hello@delibix.com",
    phone: "+62 857 7002 4933"
};
const keyMetrics = [
    { label: "Projects Delivered", value: "25+", description: "Successful AI implementations" },
    { label: "Client Satisfaction", value: "99%", description: "Customer satisfaction rate" },
    { label: "Companies Served", value: "100+", description: "Businesses transformed" },
    { label: "Launch Time", value: "3-28 days", description: "Typical project timeline" }
];
const executiveTeam = [
    {
        name: "Dr. Sarah Chen",
        title: "Chief Executive Officer",
        bio: "Former Google AI researcher with 10+ years in machine learning",
        education: "PhD Computer Science, Stanford University",
        email: "sarah.chen@delibix.com"
    },
    {
        name: "Michael Rodriguez",
        title: "Chief Technology Officer",
        bio: "Ex-Microsoft engineer specializing in AI infrastructure and scalability",
        education: "MS Computer Engineering, MIT",
        email: "michael.rodriguez@delibix.com"
    },
    {
        name: "Dr. Lisa Wang",
        title: "Head of AI Research",
        bio: "Leading AI researcher with 15+ publications in top-tier conferences",
        education: "PhD Artificial Intelligence, Carnegie Mellon",
        email: "lisa.wang@delibix.com"
    }
];
const partnerships = [
    "Google Cloud Platform",
    "Techstars",
    "Universitas Gadjah Mada",
    "Accenture",
    "AWS Partner Network",
    "Microsoft for Startups"
];
const mediaKitStats = [
    { label: "Assets Available", value: "24", change: "High-quality resources" },
    { label: "Last Updated", value: "Mar 18", change: "Always current" },
    { label: "Download Size", value: "52MB", change: "Complete package" },
    { label: "File Formats", value: "8+", change: "Multiple formats" }
];
export function PressMediaKitPage({ navigate }) {
    const [copiedText, setCopiedText] = useState(null);
    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text);
        setCopiedText(label);
        setTimeout(() => setCopiedText(null), 2000);
    };
    const getAssetIcon = (type) => {
        switch (type) {
            case "image": return Image;
            case "document": return FileText;
            case "video": return Video;
            case "archive": return Archive;
            default: return FileText;
        }
    };
    const downloadAllAssets = () => {
        // In a real implementation, this would trigger a download of all assets
        console.log("Downloading all media kit assets...");
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [Package, Camera, FileText, Image, Download, Palette];
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
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Package, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "24 Media Assets" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Press & ", _jsx("span", { className: "gradient-text-blue", children: "Media Kit" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Complete media resources including logos, photos, company information, and brand guidelines for journalists and content creators." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: mediaKitStats.map((stat, index) => (_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text-blue mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: stat.label }), _jsx("div", { className: "text-xs text-foreground-muted", children: stat.change })] }, index))) }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: downloadAllAssets, children: _jsxs("span", { className: "flex items-center gap-3", children: [_jsx(Download, { className: "w-5 h-5" }), "Download Complete Kit"] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-400/10", onClick: () => document.getElementById('assets')?.scrollIntoView({ behavior: 'smooth' }), children: "Browse Assets" })] })] }) })] }), _jsx("div", { className: "container mx-auto px-4 py-20", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, children: _jsxs(Tabs, { defaultValue: "assets", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 mb-12", children: [_jsxs(TabsTrigger, { value: "assets", className: "flex items-center gap-2", children: [_jsx(Package, { className: "w-4 h-4" }), "Media Assets"] }), _jsxs(TabsTrigger, { value: "company", className: "flex items-center gap-2", children: [_jsx(Building2, { className: "w-4 h-4" }), "Company Info"] }), _jsxs(TabsTrigger, { value: "team", className: "flex items-center gap-2", children: [_jsx(Users, { className: "w-4 h-4" }), "Executive Team"] }), _jsxs(TabsTrigger, { value: "contact", className: "flex items-center gap-2", children: [_jsx(Mail, { className: "w-4 h-4" }), "Media Contact"] })] }), _jsx(TabsContent, { value: "assets", id: "assets", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Downloadable Media Assets" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "High-quality assets for media coverage, including logos, photos, and official documents. All assets are available for editorial use." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: assets.map((asset, index) => {
                                                const AssetIcon = getAssetIcon(asset.type);
                                                return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsxs(Card, { className: "glass p-6 hover:shadow-lg transition-all duration-300 h-full", children: [_jsxs("div", { className: "flex items-start gap-4 mb-4", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0", children: _jsx(AssetIcon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h3", { className: "font-semibold mb-1 line-clamp-1", children: asset.name }), _jsx(Badge, { variant: "outline", className: "text-xs mb-2", children: asset.category })] })] }), _jsx("p", { className: "text-sm text-foreground-muted mb-4 line-clamp-2", children: asset.description }), _jsxs("div", { className: "flex items-center justify-between text-xs text-foreground-muted mb-4", children: [_jsx("span", { children: asset.format }), _jsx("span", { children: asset.size }), _jsxs("span", { children: ["Updated ", new Date(asset.lastUpdated).toLocaleDateString()] })] }), _jsxs(Button, { className: "w-full bg-blue-600 hover:bg-blue-700 text-white", onClick: () => console.log(`Downloading ${asset.name}`), children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Download"] })] }) }, asset.id));
                                            }) })] }) }), _jsx(TabsContent, { value: "company", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Company Information" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Essential facts and figures about Delibix for accurate reporting and coverage." })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [_jsxs(Card, { className: "glass p-8", children: [_jsxs("h3", { className: "mb-6 flex items-center gap-2", children: [_jsx(Info, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), "Company Details"] }), _jsx("div", { className: "space-y-4", children: Object.entries(companyInfo).map(([key, value]) => (_jsxs("div", { className: "flex justify-between items-center py-2 border-b border-border last:border-0", children: [_jsxs("span", { className: "font-medium capitalize", children: [key.replace(/([A-Z])/g, ' $1').trim(), ":"] }), _jsx("span", { className: "text-foreground-muted", children: value })] }, key))) })] }), _jsxs(Card, { className: "glass p-8", children: [_jsxs("h3", { className: "mb-6 flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), "Key Metrics"] }), _jsx("div", { className: "space-y-6", children: keyMetrics.map((metric, index) => (_jsxs("div", { className: "text-center p-4 rounded-lg bg-muted/50", children: [_jsx("div", { className: "text-2xl font-bold gradient-text-blue mb-1", children: metric.value }), _jsx("div", { className: "font-medium mb-1", children: metric.label }), _jsx("div", { className: "text-sm text-foreground-muted", children: metric.description })] }, index))) })] })] }), _jsxs(Card, { className: "glass p-8", children: [_jsxs("h3", { className: "mb-6 flex items-center gap-2", children: [_jsx(Award, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), "Strategic Partnerships"] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: partnerships.map((partner, index) => (_jsx("div", { className: "text-center p-4 rounded-lg bg-muted/30", children: _jsx("span", { className: "text-sm font-medium", children: partner }) }, index))) })] })] }) }), _jsx(TabsContent, { value: "team", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Executive Team" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Meet the leadership team driving Delibix's mission to democratize AI technology." })] }), _jsx("div", { className: "grid lg:grid-cols-3 gap-8", children: executiveTeam.map((executive, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 + index * 0.1 }, children: _jsxs(Card, { className: "glass p-8 text-center hover:shadow-lg transition-all duration-300 h-full", children: [_jsx("div", { className: "w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx(User, { className: "w-12 h-12 text-blue-600 dark:text-blue-400" }) }), _jsx("h3", { className: "mb-2", children: executive.name }), _jsx("p", { className: "text-blue-600 dark:text-blue-400 font-medium mb-4", children: executive.title }), _jsx("p", { className: "text-sm text-foreground-muted mb-4 leading-relaxed", children: executive.bio }), _jsx("div", { className: "space-y-2 text-xs text-foreground-muted mb-6", children: _jsx("p", { children: executive.education }) }), _jsx("div", { className: "flex items-center justify-center gap-2", children: _jsxs(Button, { variant: "outline", size: "sm", onClick: () => copyToClipboard(executive.email, executive.name), className: "text-xs", children: [copiedText === executive.name ? (_jsx(Check, { className: "w-3 h-3 mr-1" })) : (_jsx(Copy, { className: "w-3 h-3 mr-1" })), copiedText === executive.name ? 'Copied!' : 'Copy Email'] }) })] }) }, index))) })] }) }), _jsx(TabsContent, { value: "contact", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Media Contact Information" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Get in touch with our media relations team for interviews, press inquiries, and additional information." })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto", children: [_jsxs(Card, { className: "glass p-8 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx(Mail, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }) }), _jsx("h3", { className: "mb-4", children: "Press Relations" }), _jsxs("div", { className: "space-y-3 mb-6", children: [_jsx("p", { className: "font-medium", children: "Sarah Chen" }), _jsx("p", { className: "text-foreground-muted", children: "Head of Communications" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-center gap-2", children: [_jsx(Mail, { className: "w-4 h-4 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-blue-600 dark:text-blue-400", children: "press@delibix.com" })] }), _jsxs("div", { className: "flex items-center justify-center gap-2", children: [_jsx(Phone, { className: "w-4 h-4 text-blue-600 dark:text-blue-400" }), _jsx("span", { children: "+62 857 7002 4933" })] })] })] }), _jsx(Button, { className: "w-full gradient-bg-blue text-white", onClick: () => window.open('mailto:press@delibix.com', '_blank'), children: "Send Email" })] }), _jsxs(Card, { className: "glass p-8 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx(Briefcase, { className: "w-8 h-8 text-green-600 dark:text-green-400" }) }), _jsx("h3", { className: "mb-4", children: "Partnership Inquiries" }), _jsxs("div", { className: "space-y-3 mb-6", children: [_jsx("p", { className: "font-medium", children: "Michael Rodriguez" }), _jsx("p", { className: "text-foreground-muted", children: "Strategic Partnerships" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-center gap-2", children: [_jsx(Mail, { className: "w-4 h-4 text-green-600 dark:text-green-400" }), _jsx("span", { className: "text-green-600 dark:text-green-400", children: "partnerships@delibix.com" })] }), _jsxs("div", { className: "flex items-center justify-center gap-2", children: [_jsx(Phone, { className: "w-4 h-4 text-green-600 dark:text-green-400" }), _jsx("span", { children: "+62 857 7002 4934" })] })] })] }), _jsx(Button, { className: "w-full bg-green-600 hover:bg-green-700 text-white", onClick: () => window.open('mailto:partnerships@delibix.com', '_blank'), children: "Send Email" })] })] }), _jsxs(Card, { className: "glass p-8 max-w-2xl mx-auto", children: [_jsx("h3", { className: "text-center mb-6", children: "Response Times" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6 text-center", children: [_jsxs("div", { children: [_jsx(Clock, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" }), _jsx("p", { className: "font-semibold", children: "Press Inquiries" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Within 4 hours" })] }), _jsxs("div", { children: [_jsx(Calendar, { className: "w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" }), _jsx("p", { className: "font-semibold", children: "Interview Requests" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Within 24 hours" })] }), _jsxs("div", { children: [_jsx(ExternalLink, { className: "w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" }), _jsx("p", { className: "font-semibold", children: "General Media" }), _jsx("p", { className: "text-sm text-foreground-muted", children: "Within 48 hours" })] })] })] })] }) })] }) }) })] }));
}
//# sourceMappingURL=PressMediaKitPage.js.map