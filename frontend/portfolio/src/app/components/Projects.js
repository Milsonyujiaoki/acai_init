import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { projects } from '../data/projects'; // Import shared data
export const Projects = () => {
    // Use first 4 projects for home
    const featuredProjects = projects.slice(0, 4);
    return (_jsx("section", { id: "work", className: "py-32 px-6 bg-neutral-950", children: _jsxs("div", { className: "container mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "mb-24 flex flex-col md:flex-row justify-between items-end gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-6 mb-8", children: [_jsxs("div", { className: "flex items-baseline gap-3", children: [_jsx("span", { className: "font-serif italic text-lg text-white", children: "01" }), _jsx("span", { className: "text-xs font-mono uppercase tracking-[0.3em] text-neutral-400", children: "Selected Work" })] }), _jsx("div", { className: "h-px w-32 bg-gradient-to-r from-white/30 to-transparent" })] }), _jsxs("h2", { className: "text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9]", children: ["Curated ", _jsx("br", {}), _jsx("span", { className: "italic font-serif text-neutral-500", children: "Excellence" })] })] }), _jsx("div", { className: "hidden md:block mb-2", children: _jsx(Link, { to: "/work", className: "text-xs font-mono uppercase tracking-widest border-b border-white/30 pb-2 hover:text-neutral-300 transition-colors inline-block", children: "View All Projects" }) })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8 md:gap-y-32", children: featuredProjects.map((project, index) => (_jsx(ProjectCard, { project: project, index: index }, project.id))) })] }) }));
};
const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const isEven = index % 2 === 0;
    return (_jsx(motion.div, { ref: ref, style: { y: isEven ? 0 : y }, className: `group cursor-pointer ${!isEven ? 'md:mt-32' : ''}`, children: _jsxs(Link, { to: `/work/${project.slug}`, children: [_jsxs("div", { className: "relative overflow-hidden rounded-sm aspect-[4/3] mb-8 bg-neutral-900", children: [_jsx(motion.img, { whileHover: { scale: 1.05 }, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }, src: project.image, alt: project.title, className: "absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" }), _jsx("div", { className: "absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10", children: _jsx("div", { className: "bg-white/10 backdrop-blur-md p-5 rounded-full border border-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-[0.16,1,0.3,1]", children: _jsx(ArrowUpRight, { className: "w-6 h-6 text-white" }) }) })] }), _jsxs("div", { className: "flex justify-between items-end border-t border-white/10 pt-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-3xl font-medium tracking-tight mb-2 group-hover:text-neutral-400 transition-colors", children: project.title }), _jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-neutral-500", children: project.category })] }), _jsx("span", { className: "font-mono text-xs text-neutral-600", children: project.year })] })] }) }));
};
//# sourceMappingURL=Projects.js.map