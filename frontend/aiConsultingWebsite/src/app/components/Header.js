"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X, Search, Home, DollarSign, FlaskConical, Brain, Mail, Users, Briefcase, Settings, ArrowRight, Phone, MapPin, Clock, Info, HelpCircle, Shield, FileText, Gavel, BookOpen, Lightbulb, Calendar, MessageCircle, Building2, Trophy, Newspaper, Gift, Palette, Zap, Code, Rocket, Star, Heart, Globe, Handshake, Award } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { NavigationMenu } from "./NavigationMenu";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
// Import the logo image (white version for all themes)
import delibixLogo from 'figma:asset/c874324ee6010c04a39e6a2042438c041a7af36e.png';
export function Header({ currentPage = 'home', navigate, onNavigate, onSearch }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredElement, setHoveredElement] = useState(null);
    const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const headerY = useTransform(scrollY, [0, 200], [0, -30]);
    const headerOpacity = useTransform(scrollY, [0, 150], [1, 0.98]);
    // Show hero section only on home page
    const showHeroSection = currentPage === 'home';
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    // Updated navigation items with proper hrefs
    const navItems = [
        { name: "Pricing", href: "#pricing" },
        { name: "Experiments", href: "#experiments" },
        { name: "AGI", href: "#autonomous-ai" },
    ];
    // Handle logo click to navigate to home
    const handleLogoClick = () => {
        const navigateFunction = navigate || onNavigate;
        if (navigateFunction) {
            navigateFunction('home');
        }
    };
    // Handle navigation click
    const handleNavClick = (href) => {
        const navigateFunction = navigate || onNavigate;
        if (!navigateFunction)
            return;
        // Remove the # and handle the navigation
        const page = href.replace('#', '');
        // Map specific hrefs to page names
        const pageMapping = {
            'pricing': 'pricing',
            'experiments': 'experiments',
            'autonomous-ai': 'agi',
            'home': 'home',
            'about': 'about',
            'contact-page': 'contact',
            'services': 'services',
            'blog': 'blog'
        };
        const targetPage = pageMapping[page] || page;
        navigateFunction(targetPage);
    };
    // Handle search - Fixed to navigate to search page
    const handleSearch = () => {
        const navigateFunction = navigate || onNavigate;
        if (navigateFunction) {
            navigateFunction('search');
        }
        // Also call onSearch if provided (for custom search handling)
        if (onSearch) {
            onSearch('');
        }
    };
    // Handle navigation menu toggle
    const handleNavigationMenuToggle = () => {
        setIsNavigationMenuOpen(!isNavigationMenuOpen);
    };
    return (_jsxs("header", { className: `relative ${showHeroSection ? 'min-h-screen' : 'h-auto'} w-full flex flex-col bg-background overflow-hidden transition-colors duration-300 ${isRTL ? 'rtl' : ''}`, children: [showHeroSection && (_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30 transition-colors duration-300", animate: {
                            background: isDark ? [
                                "linear-gradient(135deg, #0f172a 0%, rgba(30, 58, 138, 0.4) 50%, rgba(30, 41, 59, 0.3) 100%)",
                                "linear-gradient(135deg, #0f172a 0%, rgba(30, 58, 138, 0.6) 50%, rgba(30, 41, 59, 0.5) 100%)",
                                "linear-gradient(135deg, #0f172a 0%, rgba(30, 58, 138, 0.4) 50%, rgba(30, 41, 59, 0.3) 100%)"
                            ] : [
                                "linear-gradient(135deg, #ffffff 0%, rgba(239, 246, 255, 0.6) 50%, rgba(219, 234, 254, 0.4) 100%)",
                                "linear-gradient(135deg, #ffffff 0%, rgba(239, 246, 255, 0.8) 50%, rgba(219, 234, 254, 0.6) 100%)",
                                "linear-gradient(135deg, #ffffff 0%, rgba(239, 246, 255, 0.6) 50%, rgba(219, 234, 254, 0.4) 100%)"
                            ]
                        }, transition: { duration: 8, repeat: Infinity, ease: "easeInOut" } }), _jsx(motion.div, { className: "absolute -top-32 -left-32 w-80 h-80 opacity-15 dark:opacity-10", animate: {
                            rotate: 360,
                            scale: [1, 1.1, 1],
                        }, transition: {
                            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                        }, children: _jsx("div", { className: `w-full h-full rounded-full blur-3xl ${isDark
                                ? 'bg-gradient-to-br from-blue-400/10 to-blue-600/5'
                                : 'bg-gradient-to-br from-blue-400/20 to-blue-600/10'} transition-colors duration-300` }) }), _jsx(motion.div, { className: "absolute -top-16 -right-16 w-64 h-64 opacity-10 dark:opacity-8", animate: {
                            rotate: -360,
                            scale: [1, 1.2, 1],
                        }, transition: {
                            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                        }, children: _jsx("div", { className: `w-full h-full rounded-2xl blur-2xl transform rotate-45 ${isDark
                                ? 'bg-gradient-to-bl from-blue-500/8 to-blue-700/5'
                                : 'bg-gradient-to-bl from-blue-500/15 to-blue-700/10'} transition-colors duration-300` }) }), _jsx("div", { className: "absolute inset-0 opacity-[0.02] dark:opacity-[0.03]", style: {
                            backgroundImage: `
                linear-gradient(rgba(59, 130, 246, ${isDark ? '0.1' : '0.1'}) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, ${isDark ? '0.1' : '0.1'}) 1px, transparent 1px)
              `,
                            backgroundSize: '80px 80px',
                        } })] })), _jsxs(motion.nav, { className: `fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-6xl px-6 ${isScrolled
                    ? 'mt-2'
                    : 'mt-4'}`, initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 1, ease: "easeOut" }, children: [_jsxs("div", { className: `flex items-center justify-between w-full transition-all duration-500 ${isScrolled
                            ? `glass rounded-2xl px-6 py-3 shadow-xl ${isDark
                                ? 'border border-blue-400/20 bg-slate-800/50 backdrop-blur-xl'
                                : 'border border-blue-200/50 bg-white/50 backdrop-blur-xl'}`
                            : `glass-secondary rounded-full px-8 py-4 shadow-lg ${isDark
                                ? 'border border-blue-400/10 bg-slate-800/30 backdrop-blur-xl'
                                : 'border border-blue-100/30 bg-white/30 backdrop-blur-xl'}`} ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsxs(motion.div, { className: `flex items-center gap-3 group cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onHoverStart: () => setHoveredElement('logo'), onHoverEnd: () => setHoveredElement(null), onClick: handleLogoClick, children: [_jsx("div", { className: "relative", children: _jsxs(motion.div, { className: "relative w-10 h-10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden", animate: hoveredElement === 'logo' ? { rotate: [0, 5, -5, 0] } : {}, transition: hoveredElement === 'logo' ? {
                                                duration: 0.6,
                                                ease: "easeInOut"
                                            } : {}, children: [_jsx(motion.img, { src: delibixLogo, alt: "Delibix Logo", className: "w-full h-full object-contain", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 } }), _jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-xl pointer-events-none", animate: { opacity: [0.1, 0.3, 0.1] }, transition: { duration: 2, repeat: Infinity } }), _jsx(motion.div, { className: `absolute inset-0 rounded-xl pointer-events-none ${isDark
                                                        ? 'bg-blue-400/20'
                                                        : 'bg-blue-500/20'}`, initial: { opacity: 0 }, animate: {
                                                        opacity: hoveredElement === 'logo' ? 0.3 : 0,
                                                        scale: hoveredElement === 'logo' ? 1.05 : 1
                                                    }, transition: { duration: 0.3 } })] }) }), _jsx("div", { className: "flex flex-col", children: _jsx("span", { className: `text-xl font-bold gradient-text-blue-dark transition-colors duration-300 ${isDark ? 'text-blue-300' : ''}`, children: "Delibix" }) })] }), _jsx("div", { className: `hidden lg:flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: navItems.map((item, index) => (_jsxs(motion.button, { onClick: () => handleNavClick(item.href), className: `relative text-sm transition-all duration-300 font-medium px-3 py-2 rounded-lg ${isDark
                                        ? 'text-slate-300 hover:text-blue-300 hover:bg-blue-400/10'
                                        : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'}`, initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 + 0.3 }, whileHover: { scale: 1.05 }, children: [item.name, _jsx(motion.span, { className: `absolute -bottom-1 ${isRTL ? 'right-3' : 'left-3'} w-0 h-0.5 rounded-full ${isDark
                                                ? 'bg-gradient-to-r from-blue-400 to-blue-300'
                                                : 'bg-gradient-to-r from-blue-600 to-blue-400'}`, whileHover: { width: "calc(100% - 24px)" }, transition: { duration: 0.3 } })] }, item.name))) }), _jsxs("div", { className: `hidden lg:flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsxs(Button, { variant: "outline", size: "sm", className: `
                  relative p-2 w-10 h-10 rounded-xl border-2 transition-all duration-300 cursor-pointer
                  ${isDark
                                                ? 'border-blue-400/30 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-xl'
                                                : 'border-blue-200/50 bg-white/50 hover:bg-blue-50/50 backdrop-blur-xl'}
                  shadow-lg hover:shadow-xl
                `, onClick: handleSearch, "aria-label": "Search", children: [_jsx(Search, { className: `w-4 h-4 ${isDark ? 'text-blue-300' : 'text-blue-600'}` }), _jsx(motion.div, { className: `
                    absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
                    ${isDark
                                                        ? 'bg-blue-400/10 shadow-blue-400/20'
                                                        : 'bg-blue-500/10 shadow-blue-500/20'}
                  `, whileHover: { opacity: 1 } })] }) }), _jsx(LanguageToggle, {}), _jsx(DarkModeToggle, {}), _jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsxs(Button, { variant: "outline", size: "sm", className: `
                  relative p-2 w-10 h-10 rounded-xl border-2 transition-all duration-300
                  ${isDark
                                                ? 'border-blue-400/30 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-xl'
                                                : 'border-blue-200/50 bg-white/50 hover:bg-blue-50/50 backdrop-blur-xl'}
                  shadow-lg hover:shadow-xl
                `, onClick: handleNavigationMenuToggle, children: [_jsx(Menu, { className: `w-4 h-4 ${isDark ? 'text-blue-300' : 'text-blue-600'}` }), _jsx(motion.div, { className: `
                    absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
                    ${isDark
                                                        ? 'bg-blue-400/10 shadow-blue-400/20'
                                                        : 'bg-blue-500/10 shadow-blue-500/20'}
                  `, whileHover: { opacity: 1 } })] }) })] }), _jsx(motion.button, { className: `lg:hidden p-2 rounded-lg transition-colors ${isDark
                                    ? 'text-slate-300 hover:text-blue-300 hover:bg-blue-400/10'
                                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'}`, onClick: () => setIsMenuOpen(!isMenuOpen), whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: isMenuOpen ? _jsx(X, { className: "w-5 h-5" }) : _jsx(Menu, { className: "w-5 h-5" }) })] }), _jsx(motion.div, { className: `lg:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`, initial: { opacity: 0, height: 0 }, animate: {
                            opacity: isMenuOpen ? 1 : 0,
                            height: isMenuOpen ? 'auto' : 0
                        }, transition: { duration: 0.3 }, children: _jsx("div", { className: `rounded-2xl px-6 py-4 shadow-xl ${isDark
                                ? 'glass border border-blue-400/20 bg-slate-800/50 backdrop-blur-xl'
                                : 'glass border border-blue-200/50 bg-white/50 backdrop-blur-xl'}`, children: _jsxs("div", { className: "space-y-3", children: [navItems.map((item, index) => (_jsx(motion.button, { onClick: () => {
                                            handleNavClick(item.href);
                                            setIsMenuOpen(false);
                                        }, className: `block w-full text-left transition-colors font-medium px-3 py-2 rounded-lg ${isDark
                                            ? 'text-slate-300 hover:text-blue-300 hover:bg-blue-400/10'
                                            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'} ${isRTL ? 'text-right' : ''}`, initial: { opacity: 0, x: isRTL ? 20 : -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.3, delay: index * 0.1 }, children: item.name }, item.name))), _jsxs("div", { className: `pt-3 border-t border-border space-y-3`, children: [_jsxs("div", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse justify-start' : 'justify-between'}`, children: [_jsx(motion.button, { className: `p-2 rounded-lg transition-colors cursor-pointer ${isDark
                                                            ? 'text-slate-300 hover:text-blue-300 hover:bg-blue-400/10'
                                                            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'}`, onClick: () => {
                                                            setIsMenuOpen(false);
                                                            handleSearch();
                                                        }, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, "aria-label": "Search", children: _jsx(Search, { className: "w-5 h-5" }) }), _jsx(LanguageToggle, {}), _jsx(DarkModeToggle, {})] }), _jsx(Button, { size: "sm", className: "gradient-bg-blue text-white rounded-xl font-medium w-full", onClick: () => {
                                                    setIsMenuOpen(false);
                                                    window.open('http://wa.me/6285770024933', '_blank');
                                                }, children: t("nav.scheduleNow") || "Schedule Now" })] })] }) }) })] }), _jsx(NavigationMenu, { isOpen: isNavigationMenuOpen, onClose: () => setIsNavigationMenuOpen(false), currentPage: currentPage, navigate: navigate || onNavigate }), showHeroSection && (_jsx("div", { className: "flex-1 flex items-center justify-center relative z-10 px-6 pt-24 pb-16", children: _jsx("div", { className: "w-full max-w-7xl mx-auto px-[0px] py-[72px]", children: _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: 0.5 }, className: `text-center space-y-8 ${isRTL ? 'rtl' : ''}`, children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg group ${isDark
                                    ? 'border border-blue-400/20 bg-slate-800/30'
                                    : 'border border-blue-200/50 bg-white/30'} ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, delay: 0.6 }, whileHover: { scale: 1.02 }, onHoverStart: () => setHoveredElement('trust-badge'), onHoverEnd: () => setHoveredElement(null), children: [_jsx("div", { className: `flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`, children: [...Array(5)].map((_, i) => (_jsx(motion.div, { initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.8 + i * 0.1 }, children: _jsx(Star, { className: "w-4 h-4 text-amber-400 fill-amber-400" }) }, i))) }), _jsx("span", { className: `text-sm font-semibold gradient-text-blue ${isDark ? 'text-blue-300' : ''}`, children: t("header.trustedBy") || "Trusted by 100+ Companies" }), _jsx(motion.div, { className: "w-6 h-6 rounded-full gradient-bg-blue flex items-center justify-center", animate: hoveredElement === 'trust-badge' ? {} : { rotate: 360 }, transition: hoveredElement === 'trust-badge' ? {} : { duration: 8, repeat: Infinity, ease: "linear" }, children: _jsx(Zap, { className: "w-3 h-3 text-white" }) })] }), _jsx(motion.div, { className: "relative max-w-7xl mx-auto px-4", initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: 0.7 }, children: _jsxs("h1", { className: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: [_jsxs(motion.span, { className: "block relative sm:whitespace-nowrap", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [t("header.strategicPartner") || "Your Strategic Partner", ' ', _jsx(motion.div, { className: `absolute -top-4 md:-top-8 ${isRTL ? '-right-4 md:-right-8' : '-left-4 md:-left-8'} opacity-40`, animate: {
                                                        y: [0, -8, 0],
                                                        rotate: [0, 5, 0],
                                                    }, transition: {
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }, children: _jsx(Brain, { className: `w-6 h-6 md:w-8 md:h-8 ${isDark ? 'text-blue-400' : 'text-blue-500'}` }) }), _jsx(motion.div, { className: `absolute -top-2 md:-top-4 ${isRTL ? '-left-4 md:-left-8' : '-right-4 md:-right-8'} opacity-40`, animate: {
                                                        y: [0, -12, 0],
                                                        rotate: [0, -5, 0],
                                                    }, transition: {
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: 1,
                                                    }, children: _jsx(Rocket, { className: `w-5 h-5 md:w-6 md:h-6 ${isDark ? 'text-blue-500' : 'text-blue-600'}` }) })] }), _jsx(motion.span, { className: "block mt-2 md:mt-4 sm:whitespace-nowrap", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1.4 }, children: t("header.forDigitalSolutions") || "for AI Digital Solutions" })] }) }), _jsx(motion.div, { className: "max-w-4xl mx-auto", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: 1.6 }, children: _jsx("p", { className: `text-lg md:text-xl lg:text-2xl leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: t("header.description") || "We empower businesses with cutting-edge AI solutions, strategic consulting, and innovative digital transformation services to accelerate growth and success." }) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: 1.8 }, children: [_jsx(motion.div, { className: "relative group", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: _jsxs(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold rounded-2xl md:rounded-3xl border-0 shadow-xl relative overflow-hidden group transition-all duration-300", onClick: () => window.open('http://wa.me/6285770024933', '_blank'), children: [_jsxs("span", { className: `relative z-10 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: [t("header.bookConsultation") || "Book Free Consultation", _jsx(motion.div, { animate: { x: isRTL ? [-4, 0, -4] : [0, 4, 0] }, transition: { duration: 1.5, repeat: Infinity }, children: _jsx(ArrowRight, { className: `w-5 h-5 md:w-6 md:h-6 ${isRTL ? 'rotate-180' : ''}` }) })] }), _jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100", transition: { duration: 0.3 } }), _jsx(motion.div, { className: "absolute inset-0 bg-white/10", animate: { x: ["-100%", "100%"] }, transition: { duration: 3, repeat: Infinity, repeatDelay: 2 } })] }) }), _jsx(motion.div, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: _jsx(Button, { variant: "outline", size: "lg", className: `px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl rounded-2xl md:rounded-3xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-xl ${isDark
                                                ? 'glass-heavy border-2 border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'glass-heavy border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300'}`, onClick: () => navigate('development-journey'), children: "Our Journey" }) })] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-12 md:pt-20 max-w-5xl mx-auto", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1, delay: 2 }, children: [
                                    { label: "Projects Delivered", value: "25+", icon: Code, color: "from-blue-500 to-blue-600" },
                                    { label: "Days to Launch", value: "3-28", icon: Zap, color: "from-blue-600 to-blue-700" },
                                    { label: "Client Satisfaction", value: "99%", icon: Star, color: "from-blue-400 to-blue-500" },
                                ].map((stat, index) => (_jsxs(motion.div, { className: `glass-heavy rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 2.2 + index * 0.1 }, whileHover: { y: -5 }, children: [_jsx(motion.div, { className: `w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`, children: _jsx(stat.icon, { className: "w-6 h-6 text-white" }) }), _jsx(motion.div, { className: `text-3xl md:text-4xl font-bold mb-2 gradient-text-blue`, animate: { scale: [1, 1.05, 1] }, transition: { duration: 2, repeat: Infinity, delay: index * 0.5 }, children: stat.value }), _jsx("div", { className: `text-sm md:text-base font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: stat.label })] }, stat.label))) })] }) }) }))] }));
}
//# sourceMappingURL=Header.js.map