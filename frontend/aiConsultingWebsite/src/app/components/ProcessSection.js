"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Search, Palette, Rocket, ArrowRight, Play } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
export function ProcessSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeStep, setActiveStep] = useState(0);
    const { t, isRTL } = useLanguage();
    const steps = [
        {
            icon: Search,
            title: t("process.step1.title"),
            description: t("process.step1.description"),
            details: t("process.step1.details"),
            color: "from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20",
            borderColor: "border-blue-200 dark:border-blue-700/50",
            iconColor: "text-blue-600 dark:text-blue-400",
            duration: t("process.step1.duration")
        },
        {
            icon: Palette,
            title: t("process.step2.title"),
            description: t("process.step2.description"),
            details: t("process.step2.details"),
            color: "from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/30",
            borderColor: "border-blue-300 dark:border-blue-600/50",
            iconColor: "text-blue-700 dark:text-blue-300",
            duration: t("process.step2.duration")
        },
        {
            icon: Rocket,
            title: t("process.step3.title"),
            description: t("process.step3.description"),
            details: t("process.step3.details"),
            color: "from-blue-200 to-blue-300 dark:from-blue-800/40 dark:to-blue-700/30",
            borderColor: "border-blue-400 dark:border-blue-500/50",
            iconColor: "text-blue-800 dark:text-blue-200",
            duration: t("process.step3.duration")
        }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const stepVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };
    return (_jsxs("section", { className: "py-32 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20 transition-colors duration-300" }), _jsxs("div", { className: "max-w-7xl mx-auto px-6", ref: ref, children: [_jsxs(motion.div, { className: "text-center mb-20", initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { duration: 0.6 }, children: [_jsxs(motion.div, { className: `scale-on-hover inline-flex items-center gap-2 glass-secondary rounded-full px-4 py-2 mb-8 border border-blue-200 dark:border-blue-600/50 cursor-pointer transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(Play, { className: "w-4 h-4 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300", children: t("process.badge") })] }), _jsxs("h2", { className: `text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight transition-colors duration-300 ${isRTL ? 'text-right' : ''}`, children: [t("process.title"), " ", _jsx("span", { className: "gradient-text-blue font-bold", children: t("process.subtitle") })] })] }), _jsx(motion.div, { className: "grid lg:grid-cols-3 gap-8 mb-16", variants: containerVariants, initial: "hidden", animate: isInView ? "visible" : "hidden", children: steps.map((step, index) => (_jsx(motion.div, { className: "relative group", variants: stepVariants, onMouseEnter: () => setActiveStep(index), children: _jsxs("div", { className: `card-hover-scale glass-heavy rounded-3xl p-8 h-full relative overflow-hidden bg-gradient-to-br ${step.color} border-2 ${step.borderColor} transition-all duration-300 ${activeStep === index ? 'ring-2 ring-blue-300 dark:ring-blue-500/50' : ''}`, children: [_jsx(motion.div, { className: "absolute -top-6 -right-6 w-12 h-12 glass rounded-full flex items-center justify-center text-slate-900 dark:text-slate-100 font-bold z-10 border border-blue-200 dark:border-blue-600/50 transition-all duration-300", initial: { scale: 0, rotate: -90 }, animate: isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }, transition: { duration: 0.4, delay: index * 0.1 + 0.6 }, children: index + 1 }), _jsx("div", { className: "relative z-10 mb-8", children: _jsxs("div", { className: "button-hover w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden border border-blue-200 dark:border-blue-600/50 cursor-pointer transition-all duration-300", children: [_jsx(step.icon, { className: `w-10 h-10 ${step.iconColor} transition-colors duration-300` }), activeStep === index && (_jsx("div", { className: `absolute inset-0 rounded-2xl border-2 ${step.iconColor.replace('text-', 'border-').replace('dark:text-', 'dark:border-')} opacity-30 animate-ping` })), _jsx("div", { className: `absolute top-2 right-2 w-1 h-1 ${step.iconColor.replace('text-', 'bg-').replace('dark:text-', 'dark:bg-')} rounded-full opacity-60 float` })] }) }), _jsxs("div", { className: `relative z-10 text-center ${isRTL ? 'text-right' : ''}`, children: [_jsx("h3", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300", children: step.title }), _jsx("div", { className: "text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-medium transition-colors duration-300", children: step.description }), _jsx("div", { className: "text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed transition-colors duration-300", children: step.details }), _jsx("div", { className: "scale-on-hover inline-flex items-center gap-2 px-4 py-2 glass-secondary rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-600/50 cursor-pointer transition-all duration-300", children: _jsx("span", { className: "text-blue-600 dark:text-blue-400 transition-colors duration-300", children: step.duration }) })] })] }) }, index))) }), _jsx(motion.div, { className: "text-center", initial: { opacity: 0, y: 15 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }, transition: { duration: 0.6, delay: 0.8 }, children: _jsx("div", { className: "card-hover inline-block glass-secondary rounded-2xl px-8 py-4 border border-blue-200 dark:border-blue-600/50 cursor-pointer transition-all duration-300", children: _jsxs("div", { className: `text-xl text-slate-700 dark:text-slate-300 font-medium transition-colors duration-300 ${isRTL ? 'text-right' : ''}`, children: [t("process.bottom.message"), " ", _jsx("span", { className: "text-blue-600 dark:text-blue-400 font-bold transition-colors duration-300", children: t("process.bottom.test") }), ",", " ", _jsx("span", { className: "text-blue-700 dark:text-blue-300 font-bold transition-colors duration-300", children: t("process.bottom.touch") }), ", and", " ", _jsx("span", { className: "text-blue-800 dark:text-blue-200 font-bold transition-colors duration-300", children: t("process.bottom.scale") }), "."] }) }) })] })] }));
}
//# sourceMappingURL=ProcessSection.js.map