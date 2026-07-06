"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle, XCircle, Zap, Clock, Target, Users, Code, Lightbulb } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
export function WhyDelibixSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { t, isRTL } = useLanguage();
    const comparisons = [
        {
            category: t("why.timeline"),
            traditional: t("why.timeline.traditional"),
            delibix: t("why.timeline.delibix"),
            icon: Clock
        },
        {
            category: t("why.approach"),
            traditional: t("why.approach.traditional"),
            delibix: t("why.approach.delibix"),
            icon: Target
        },
        {
            category: t("why.team"),
            traditional: t("why.team.traditional"),
            delibix: t("why.team.delibix"),
            icon: Users
        },
        {
            category: t("why.output"),
            traditional: t("why.output.traditional"),
            delibix: t("why.output.delibix"),
            icon: Code
        }
    ];
    const advantages = [
        {
            icon: Zap,
            title: t("why.advantage1.title"),
            description: t("why.advantage1.description"),
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20"
        },
        {
            icon: Code,
            title: t("why.advantage2.title"),
            description: t("why.advantage2.description"),
            color: "text-blue-700 dark:text-blue-300",
            bgColor: "from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/30"
        },
        {
            icon: Target,
            title: t("why.advantage3.title"),
            description: t("why.advantage3.description"),
            color: "text-blue-800 dark:text-blue-200",
            bgColor: "from-blue-200 to-blue-300 dark:from-blue-800/40 dark:to-blue-700/30"
        },
        {
            icon: Lightbulb,
            title: t("why.advantage4.title"),
            description: t("why.advantage4.description"),
            color: "text-blue-900 dark:text-blue-100",
            bgColor: "from-blue-300 to-blue-400 dark:from-blue-700/40 dark:to-blue-600/30"
        }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    return (_jsxs("section", { className: "py-32 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20 transition-colors duration-300" }), _jsxs("div", { className: "max-w-7xl mx-auto px-6", ref: ref, children: [_jsxs(motion.div, { className: `text-center mb-20 ${isRTL ? 'rtl' : ''}`, initial: { opacity: 0, y: 30 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }, transition: { duration: 0.8 }, children: [_jsxs(motion.div, { className: `inline-flex items-center gap-2 glass-secondary rounded-full px-4 py-2 mb-8 border border-blue-200 dark:border-blue-600/50 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`, whileHover: { scale: 1.05 }, children: [_jsx(Zap, { className: "w-4 h-4 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300", children: t("why.badge") })] }), _jsxs("h2", { className: `text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight transition-colors duration-300 ${isRTL ? 'text-right' : ''}`, children: [t("why.title"), " ", _jsx("span", { className: "text-red-600 dark:text-red-400 font-bold transition-colors duration-300", children: t("why.vs") }), " ", _jsx("span", { className: "gradient-text-blue font-bold", children: t("why.delibix") })] })] }), _jsx(motion.div, { className: "mb-20", variants: containerVariants, initial: "hidden", animate: isInView ? "visible" : "hidden", children: _jsx("div", { className: "glass-heavy rounded-3xl p-8 overflow-hidden border-2 border-blue-200 dark:border-blue-700/50 transition-all duration-300", children: _jsxs("div", { className: `grid md:grid-cols-3 gap-6 ${isRTL ? 'rtl' : ''}`, children: [_jsx("div", { className: `text-center ${isRTL ? 'text-right' : ''}`, children: _jsx("div", { className: "text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium transition-colors duration-300", children: t("why.comparison") }) }), _jsxs(motion.div, { className: "text-center p-4 glass-secondary rounded-xl border border-red-200 dark:border-red-700/50 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/20 transition-all duration-300", variants: itemVariants, children: [_jsx(XCircle, { className: "w-6 h-6 text-red-500 dark:text-red-400 mx-auto mb-2 transition-colors duration-300" }), _jsx("div", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors duration-300", children: t("why.traditional") }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300", children: t("why.consulting") })] }), _jsxs(motion.div, { className: "text-center p-4 glass bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-xl border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", variants: itemVariants, children: [_jsx(CheckCircle, { className: "w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2 transition-colors duration-300" }), _jsx("div", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors duration-300", children: t("why.delibix") }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300", children: t("why.ainative") })] }), comparisons.map((comparison, index) => (_jsxs(motion.div, { className: "contents", variants: itemVariants, children: [_jsxs("div", { className: `flex items-center gap-3 p-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(comparison.icon, { className: "w-5 h-5 text-slate-600 dark:text-slate-400 transition-colors duration-300" }), _jsx("span", { className: "text-slate-900 dark:text-slate-100 font-semibold transition-colors duration-300", children: comparison.category })] }), _jsx("div", { className: `p-4 glass-secondary rounded-xl text-slate-600 dark:text-slate-400 text-sm font-medium border border-red-200 dark:border-red-700/50 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/20 transition-all duration-300 ${isRTL ? 'text-right' : ''}`, children: comparison.traditional }), _jsx("div", { className: `p-4 glass bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-xl border-2 border-blue-300 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 text-sm font-medium transition-all duration-300 ${isRTL ? 'text-right' : ''}`, children: comparison.delibix })] }, comparison.category)))] }) }) }), _jsx(motion.div, { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", variants: containerVariants, initial: "hidden", animate: isInView ? "visible" : "hidden", children: advantages.map((advantage, index) => (_jsx(motion.div, { variants: itemVariants, className: "group", whileHover: {
                                y: -10,
                                scale: 1.02
                            }, transition: { duration: 0.3 }, children: _jsxs(motion.div, { className: `glass-heavy rounded-3xl p-6 h-full relative overflow-hidden bg-gradient-to-br ${advantage.bgColor} border-2 border-blue-200 dark:border-blue-700/50 transition-all duration-300`, whileHover: {
                                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                                }, children: [_jsx(motion.div, { className: "w-12 h-12 glass rounded-xl flex items-center justify-center mb-4 border border-blue-200 dark:border-blue-600/50 transition-all duration-300", whileHover: {
                                            scale: 1.1,
                                            rotate: 5,
                                        }, children: _jsx(advantage.icon, { className: `w-6 h-6 ${advantage.color} transition-colors duration-300` }) }), _jsx("h3", { className: `text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 transition-colors duration-300 ${isRTL ? 'text-right' : ''}`, children: advantage.title }), _jsx("div", { className: `text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300 ${isRTL ? 'text-right' : ''}`, children: advantage.description }), _jsx(motion.div, { className: `absolute top-4 right-4 w-1 h-1 ${advantage.color.replace('text-', 'bg-').replace('dark:text-', 'dark:bg-')} rounded-full opacity-60`, animate: {
                                            scale: [1, 2, 1],
                                            opacity: [0.6, 1, 0.6],
                                        }, transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.3,
                                        } })] }) }, index))) })] })] }));
}
//# sourceMappingURL=WhyDelibixSection.js.map