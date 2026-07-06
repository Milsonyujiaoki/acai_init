"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Phone, MessageCircle, Download, Mail, Calendar, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
export function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredElement, setHoveredElement] = useState(null);
    const { t, isRTL } = useLanguage();
    const contactOptions = [
        {
            icon: Phone,
            title: t("contact.option1.title"),
            description: t("contact.option1.description"),
            action: t("contact.option1.action"),
            color: "from-blue-500 to-blue-600",
            glowColor: "rgba(59, 130, 246, 0.3)",
            iconColor: "text-blue-600 dark:text-blue-400",
            href: "http://wa.me/6285770024933" // Changed to WhatsApp
        },
        {
            icon: MessageCircle,
            title: t("contact.option2.title"),
            description: t("contact.option2.description"),
            action: t("contact.option2.action"),
            color: "from-blue-600 to-blue-700",
            glowColor: "rgba(37, 99, 235, 0.3)",
            iconColor: "text-blue-700 dark:text-blue-300",
            href: "http://wa.me/6285770024933" // Updated WhatsApp link
        },
        {
            icon: Download,
            title: t("contact.option3.title"),
            description: t("contact.option3.description"),
            action: t("contact.option3.action"),
            color: "from-blue-700 to-blue-800",
            glowColor: "rgba(29, 78, 216, 0.3)",
            iconColor: "text-blue-800 dark:text-blue-200",
            href: "#tools" // Redirect to tools section
        }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15 // Reduced for faster animations
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 }, // Reduced movement
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5, // Faster animation
                ease: "easeOut"
            }
        }
    };
    const handleContactClick = (href) => {
        if (href.startsWith('#')) {
            // Internal link - scroll to section
            const element = document.getElementById(href.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        else {
            // External link - open in new tab
            window.open(href, '_blank', 'noopener,noreferrer');
        }
    };
    const handleViewCaseStudies = () => {
        const element = document.getElementById('work');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (_jsxs("section", { id: "contact", className: "py-32 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 transition-colors duration-300" }), _jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 dark:opacity-10 pulse-subtle transition-opacity duration-300", style: {
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                    filter: "blur(60px)",
                } }), _jsx("div", { className: "absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-15 dark:opacity-8 pulse-subtle transition-opacity duration-300", style: {
                    background: "radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)",
                    filter: "blur(80px)",
                    animationDelay: "2s"
                } }), _jsxs("div", { className: "max-w-7xl mx-auto px-6 relative z-10", ref: ref, children: [_jsxs(motion.div, { className: `text-center mb-20 ${isRTL ? 'rtl' : ''}`, initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6 }, children: [_jsxs(motion.div, { className: `scale-on-hover inline-flex items-center gap-2 glass-secondary rounded-full px-4 py-2 mb-8 border border-blue-300 dark:border-blue-600/50 cursor-pointer transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Sparkles, { className: "w-4 h-4 text-blue-700 dark:text-blue-400" }), _jsx("span", { className: "text-sm text-blue-700 dark:text-blue-400 font-medium transition-colors duration-300", children: t("contact.badge") })] }), _jsxs("h2", { className: `text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight transition-colors duration-300 ${isRTL ? 'text-right' : ''}`, children: [t("contact.title"), " ", _jsx("span", { className: "gradient-text-blue font-bold", children: t("contact.subtitle") })] }), _jsx("p", { className: `text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto font-light transition-colors duration-300 ${isRTL ? 'text-right' : ''}`, children: t("contact.description") })] }), _jsx(motion.div, { className: "grid md:grid-cols-3 gap-8 mb-16", variants: containerVariants, initial: "hidden", animate: isInView ? "visible" : "hidden", children: contactOptions.map((option, index) => (_jsx(motion.div, { variants: itemVariants, onHoverStart: () => setHoveredElement(`contact-${index}`), onHoverEnd: () => setHoveredElement(null), className: "group relative", children: _jsxs("div", { className: "card-hover-scale glass-heavy rounded-3xl p-8 h-full relative overflow-hidden border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl transition-colors duration-300" }), _jsxs("div", { className: `relative z-10 text-center ${isRTL ? 'text-right' : ''}`, children: [_jsx("div", { className: `button-hover w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${option.color} shadow-lg cursor-pointer transition-all duration-300`, children: _jsx(option.icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: option.title }), _jsx("div", { className: "text-slate-600 dark:text-slate-300 mb-6 leading-relaxed transition-colors duration-300", children: option.description }), _jsx("div", { className: "scale-on-hover", children: _jsx(Button, { className: `button-hover w-full bg-gradient-to-r ${option.color} text-white border-0 shadow-lg rounded-xl relative overflow-hidden transition-all duration-300`, size: "lg", onClick: () => handleContactClick(option.href), children: _jsx("span", { className: "relative z-10", children: option.action }) }) })] }), _jsx("div", { className: "absolute top-4 right-4 w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full opacity-60 pulse-subtle transition-colors duration-300" })] }) }, index))) }), _jsx(motion.div, { className: "max-w-4xl mx-auto", initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6, delay: 0.4 }, children: _jsxs("div", { className: "card-hover glass-heavy rounded-3xl p-12 text-center relative overflow-hidden border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl transition-colors duration-300" }), _jsxs("div", { className: `relative z-10 ${isRTL ? 'rtl' : ''}`, children: [_jsx("div", { className: "button-hover inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-lg cursor-pointer transition-all duration-300", children: _jsx(Calendar, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: `text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300 ${isRTL ? 'text-right' : ''}`, children: t("contact.bottom.title") }), _jsx("div", { className: `text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${isRTL ? 'text-right' : ''}`, children: t("contact.bottom.description") }), _jsxs("div", { className: `flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`, children: [_jsx("div", { className: "scale-on-hover", children: _jsx(Button, { size: "lg", className: "button-hover gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl border-0 shadow-lg relative overflow-hidden transition-all duration-300", onClick: () => window.open('http://wa.me/6285770024933', '_blank', 'noopener,noreferrer'), children: _jsxs("span", { className: `relative z-10 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Mail, { className: `w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}` }), t("contact.bottom.cta1")] }) }) }), _jsx("div", { className: "scale-on-hover", children: _jsx(Button, { variant: "outline", size: "lg", className: "card-hover glass-secondary border-2 border-blue-300 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300", onClick: handleViewCaseStudies, children: t("contact.bottom.cta2") }) })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-blue-200 dark:border-blue-600/50 transition-colors duration-300", children: [_jsxs("div", { className: `text-center ${isRTL ? 'text-right' : ''}`, children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: t("contact.bottom.info1.title") }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: t("contact.bottom.info1.description") })] }), _jsxs("div", { className: `text-center ${isRTL ? 'text-right' : ''}`, children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: t("contact.bottom.info2.title") }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: t("contact.bottom.info2.description") })] })] })] })] }) })] })] }));
}
//# sourceMappingURL=ContactSection.js.map