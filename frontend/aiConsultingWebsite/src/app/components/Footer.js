"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Sparkles, Heart, Mail, Phone, Globe, ExternalLink, Send, Home, Settings, BookOpen, DollarSign, Bot, FlaskConical, Brain, Users, UserPlus, TrendingUp, Info, ArrowUp, Calendar, MessageCircle, Lightbulb, HelpCircle, Target, Youtube, Activity, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
import { XIcon, WhatsAppIcon, TikTokIcon } from "./SocialIcons";
export function Footer({ currentPage, navigate } = {}) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const [emailInput, setEmailInput] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    // Track scroll for back-to-top button
    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Essential navigation sections - simplified
    const navigationSections = [
        {
            title: 'Products',
            links: [
                { name: 'AI Playground', href: '#ai-playground', icon: Bot },
                { name: 'Experiments', href: '#experiments', icon: FlaskConical },
                { name: 'AGI Platform', href: '#autonomous-ai', icon: Brain },
                { name: 'Pricing', href: '#pricing', icon: DollarSign }
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About', href: '#about', icon: Info },
                { name: 'Services', href: '#services', icon: Settings },
                { name: 'Blog', href: '#blog', icon: BookOpen },
                { name: 'Investors', href: '#investors', icon: TrendingUp }
            ]
        },
        {
            title: 'Community',
            links: [
                { name: 'Events', href: '#events-workshops', icon: Calendar },
                { name: 'Submit Ideas', href: '#submit-idea', icon: Lightbulb },
                { name: 'Affiliate Program', href: '#affiliate-program', icon: Target },
                { name: 'Help Center', href: '#help-center', icon: HelpCircle }
            ]
        }
    ];
    // Updated social media links with proper icons
    const socialLinks = [
        {
            name: 'YouTube',
            href: 'https://www.youtube.com/@delibixcom',
            icon: Youtube,
            color: 'hover:text-red-500',
            bgColor: 'hover:bg-red-100 dark:hover:bg-red-900/30'
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/delibix',
            icon: Instagram,
            color: 'hover:text-pink-500',
            bgColor: 'hover:bg-pink-100 dark:hover:bg-pink-900/30'
        },
        {
            name: 'Facebook',
            href: 'https://facebook.com/delibix',
            icon: Facebook,
            color: 'hover:text-blue-600',
            bgColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30'
        },
        {
            name: 'X (Twitter)',
            href: 'https://x.com/delibix',
            icon: XIcon,
            color: 'hover:text-gray-900 dark:hover:text-white',
            bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-800/30'
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/6285770024933',
            icon: WhatsAppIcon,
            color: 'hover:text-green-500',
            bgColor: 'hover:bg-green-100 dark:hover:bg-green-900/30'
        },
        {
            name: 'TikTok',
            href: 'https://tiktok.com/@delibix',
            icon: TikTokIcon,
            color: 'hover:text-purple-500',
            bgColor: 'hover:bg-purple-100 dark:hover:bg-purple-900/30'
        }
    ];
    // Legal links
    const legalLinks = [
        { name: 'Privacy Policy', href: '#privacy-policy' },
        { name: 'Terms of Service', href: '#terms-service' },
        { name: 'Security', href: '#security' },
        { name: 'Cookies', href: '#cookies-policy' }
    ];
    // Contact information - simplified
    const contactInfo = [
        { label: 'Email', value: 'hello@delibix.com', href: 'mailto:hello@delibix.com', icon: Mail },
        { label: 'WhatsApp', value: '+62 857 7002 4933', href: 'http://wa.me/6285770024933', icon: Phone },
        { label: 'Office', value: 'Yogyakarta, Indonesia', href: '#contact-page', icon: MapPin }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };
    const handleSocialClick = (href) => {
        window.open(href, '_blank', 'noopener,noreferrer');
    };
    const handleNavClick = (href) => {
        if (navigate) {
            const pageRoutes = {
                '#home': 'home',
                '#about': 'about',
                '#contact-page': 'contact',
                '#services': 'services',
                '#blog': 'blog',
                '#pricing': 'pricing',
                '#ai-playground': 'ai-playground',
                '#experiments': 'experiments',
                '#autonomous-ai': 'agi',
                '#investors': 'investors',
                '#events-workshops': 'events-workshops',
                '#submit-idea': 'submit-idea',
                '#affiliate-program': 'affiliate-program',
                '#help-center': 'help-center',
                '#privacy-policy': 'privacy-policy',
                '#terms-service': 'terms-service',
                '#security': 'security',
                '#cookies-policy': 'cookies-policy'
            };
            if (pageRoutes[href]) {
                navigate(pageRoutes[href]);
            }
        }
    };
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (emailInput.trim()) {
            setIsSubscribed(true);
            setEmailInput('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (_jsxs("footer", { className: "relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950" }), _jsx("div", { className: "absolute top-1/4 left-1/4 w-48 h-48 rounded-full opacity-5 dark:opacity-3 pulse-subtle", style: {
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                    filter: "blur(40px)",
                } }), _jsx("div", { className: "mx-auto max-w-7xl px-6 py-8 relative z-10", children: _jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "space-y-8", children: [_jsx(motion.div, { variants: itemVariants, children: _jsxs("div", { className: "grid lg:grid-cols-5 gap-8", children: [_jsxs("div", { className: "lg:col-span-2 space-y-6", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-xl gradient-bg-blue flex items-center justify-center shadow-lg", children: _jsx(Sparkles, { className: "w-5 h-5 text-white" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold text-white", children: "Delibix" }), _jsx("p", { className: "text-blue-300 text-sm", children: "AI-Native Digital Consulting" })] })] }), _jsx("p", { className: "text-blue-200 text-base leading-relaxed max-w-md", children: "Transforming businesses with cutting-edge AI solutions from Yogyakarta, Indonesia." }), _jsxs("div", { className: "space-y-3", children: [_jsx("h4", { className: "text-white font-semibold", children: "Stay Updated" }), !isSubscribed ? (_jsxs("form", { onSubmit: handleNewsletterSubmit, className: "flex gap-2", children: [_jsx(Input, { type: "email", value: emailInput, onChange: (e) => setEmailInput(e.target.value), placeholder: "Enter your email", className: "flex-1 h-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-blue-400", required: true }), _jsx(Button, { type: "submit", size: "sm", className: "h-10 px-4 gradient-bg-blue hover:opacity-90 text-white", children: _jsx(Send, { className: "w-4 h-4" }) })] })) : (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "flex items-center gap-2 text-green-300", children: [_jsx("div", { className: "w-4 h-4 bg-green-500 rounded-full flex items-center justify-center", children: _jsx("div", { className: "w-2 h-2 bg-white rounded-full" }) }), _jsx("span", { className: "text-sm", children: "Subscribed successfully!" })] }))] })] }), navigationSections.map((section) => (_jsxs(motion.div, { variants: itemVariants, className: "space-y-4", children: [_jsx("h4", { className: "text-white font-semibold", children: section.title }), _jsx("nav", { className: "space-y-2", children: section.links.map((link) => (_jsxs(motion.button, { onClick: () => handleNavClick(link.href), className: "flex items-center gap-2 text-blue-200 hover:text-white text-sm transition-colors font-medium cursor-pointer group w-full text-left", whileHover: { x: 2 }, children: [_jsx(link.icon, { className: "w-4 h-4 group-hover:text-blue-400 transition-colors" }), link.name] }, link.name))) })] }, section.title)))] }) }), _jsx(motion.div, { variants: itemVariants, children: _jsxs("div", { className: "grid md:grid-cols-2 gap-8 pt-6 border-t border-blue-700/30", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-4", children: "Get in Touch" }), _jsx("div", { className: "space-y-3", children: contactInfo.map((contact) => (_jsxs(motion.button, { onClick: () => contact.href.startsWith('http') ? window.open(contact.href, '_blank') : handleNavClick(contact.href), className: "flex items-center gap-3 text-blue-200 hover:text-white text-sm transition-colors cursor-pointer group", whileHover: { x: 2 }, children: [_jsx(contact.icon, { className: "w-4 h-4 group-hover:text-blue-400 transition-colors" }), _jsx("span", { children: contact.value }), contact.href.startsWith('http') && (_jsx(ExternalLink, { className: "w-3 h-3 opacity-50" }))] }, contact.label))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-4", children: "Follow Us" }), _jsx("div", { className: "flex flex-wrap gap-3", children: socialLinks.map((social, index) => (_jsx(motion.button, { onClick: () => handleSocialClick(social.href), className: `group w-12 h-12 rounded-lg bg-blue-900/20 hover:bg-blue-800/30 border border-blue-500/20 hover:border-blue-400/40 flex items-center justify-center transition-all duration-200 ${social.color} ${social.bgColor}`, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, title: social.name, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.2, delay: index * 0.05 }, children: _jsx(social.icon, { className: "w-5 h-5 text-blue-300 group-hover:text-white transition-colors" }) }, social.name))) })] })] }) }), _jsx(motion.div, { variants: itemVariants, children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center pt-6 border-t border-blue-700/30 gap-4", children: [_jsxs("div", { className: "flex items-center gap-2 text-blue-300 text-sm", children: [_jsx("span", { children: "\u00A9 2025 Delibix. Crafted with" }), _jsx(Heart, { className: "w-4 h-4 text-red-400 fill-current pulse-subtle" }), _jsx("span", { children: "and AI in Yogyakarta, Indonesia." })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "flex gap-4", children: legalLinks.map((link) => (_jsx(motion.button, { onClick: () => handleNavClick(link.href), className: "text-blue-300 hover:text-white text-xs transition-colors", whileHover: { scale: 1.05 }, children: link.name }, link.name))) }), _jsxs("div", { className: "flex items-center gap-2 text-blue-400 text-sm", children: [_jsx(Globe, { className: "w-4 h-4" }), _jsx(Badge, { variant: "outline", className: "border-blue-400/30 text-blue-300 text-xs", children: "v2025.1" })] })] })] }) })] }) }), _jsx(AnimatePresence, { children: showBackToTop && (_jsx(motion.button, { onClick: scrollToTop, className: "fixed bottom-6 right-6 w-10 h-10 rounded-full gradient-bg-blue text-white shadow-lg hover:shadow-xl z-50", initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0 }, whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: _jsx(ArrowUp, { className: "w-4 h-4 mx-auto" }) })) })] }));
}
//# sourceMappingURL=Footer.js.map