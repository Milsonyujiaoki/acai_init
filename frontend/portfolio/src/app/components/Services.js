import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Layout, Smartphone, Globe, Box, Zap, Search } from 'lucide-react';
const services = [
    {
        icon: Layout,
        title: "UI/UX Design",
        description: "Crafting intuitive interfaces that guide users effortlessly through digital journeys."
    },
    {
        icon: Smartphone,
        title: "Mobile First",
        description: "Responsive experiences that feel native on every device and screen size."
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "Robust, scalable front-end solutions built with modern frameworks."
    },
    {
        icon: Box,
        title: "3D & Motion",
        description: "Immersive interactions that add depth and character to your brand."
    }
];
export const Services = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    return (_jsxs("section", { ref: containerRef, id: "services", className: "py-32 px-6 bg-neutral-950 relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" }), _jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 60, repeat: Infinity, ease: "linear" }, className: "absolute -top-[20%] -right-[10%] w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none opacity-50 dashed-border", style: { borderStyle: 'dashed' } }), _jsx(motion.div, { animate: { rotate: -360 }, transition: { duration: 80, repeat: Infinity, ease: "linear" }, className: "absolute top-[20%] right-[10%] w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none opacity-30" }), _jsxs("div", { className: "container mx-auto relative z-10", children: [_jsxs("div", { className: "mb-32 grid md:grid-cols-2 gap-16 items-end", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-6 mb-8", children: [_jsxs("div", { className: "flex items-baseline gap-3", children: [_jsx("span", { className: "font-serif italic text-lg text-white", children: "03" }), _jsx("span", { className: "text-xs font-mono uppercase tracking-[0.3em] text-neutral-400", children: "/ Capabilities" })] }), _jsx("div", { className: "h-px w-32 bg-gradient-to-r from-white/30 to-transparent" })] }), _jsxs(motion.h2, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-6xl md:text-9xl font-medium tracking-tighter leading-none", children: ["Digital ", _jsx("br", {}), _jsx("span", { className: "italic font-serif text-neutral-500", children: "Solutions" })] })] }), _jsxs(motion.div, { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: 0.2, duration: 0.8 }, className: "md:pl-12 border-l border-white/10 relative", children: [_jsx("div", { className: "absolute top-0 left-[-1px] h-12 w-[1px] bg-gradient-to-b from-white to-transparent" }), _jsx("p", { className: "text-xl md:text-2xl font-light text-neutral-300 leading-relaxed", children: "We combine aesthetic precision with technical robustness to build products that stand the test of time." })] })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24 group/list", children: services.map((service, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1, duration: 0.8 }, className: `
                 relative 
                 ${index % 2 === 1 ? 'lg:mt-32' : ''} 
                 transition-all duration-500 ease-out
                 hover:!opacity-100 group-hover/list:opacity-20
               `, children: [_jsx("div", { className: "absolute -top-6 -left-6 w-3 h-3 border-t border-l border-white/20 transition-all duration-500 group-hover:w-[calc(100%+3rem)] group-hover:h-[calc(100%+3rem)] group-hover:border-white/10 pointer-events-none" }), _jsx("div", { className: "absolute -bottom-6 -right-6 w-3 h-3 border-b border-r border-white/20 transition-all duration-500 group-hover:w-[calc(100%+3rem)] group-hover:h-[calc(100%+3rem)] group-hover:border-white/10 pointer-events-none" }), _jsx(ServiceCard, { service: service, index: index })] }, index))) })] })] }));
};
const ServiceCard = ({ service, index }) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1, duration: 0.5 }, whileHover: { y: -10 }, className: "group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm", children: [_jsx("div", { className: "mb-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500", children: _jsx(service.icon, { className: "w-6 h-6" }) }), _jsx("h3", { className: "text-xl font-medium mb-4 tracking-tight", children: service.title }), _jsx("p", { className: "text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors", children: service.description })] }));
};
//# sourceMappingURL=Services.js.map