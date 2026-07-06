import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);
    const navItems = [
        { name: 'Work', to: '/work' },
        { name: 'About', to: '/#about' },
        { name: 'Services', to: '/#services' },
        { name: 'Contact', to: '/#contact' }
    ];
    return (_jsx(motion.nav, { initial: { y: -100 }, animate: { y: 0 }, className: `fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/80 backdrop-blur-md py-4 border-b border-white/5' : 'py-8 bg-transparent'}`, children: _jsxs("div", { className: "container mx-auto px-6 flex justify-between items-center", children: [_jsx(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: _jsx(Link, { to: "/", className: "text-2xl font-bold tracking-tighter mix-blend-difference z-50", children: "ALEX.DESIGN" }) }), _jsx("div", { className: "hidden md:flex gap-8", children: navItems.map((item, i) => (_jsx(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: i * 0.1 }, children: _jsxs(Link, { to: item.to, className: "text-sm uppercase tracking-widest hover:text-white/70 transition-colors relative group", children: [item.name, _jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" })] }) }, item.name))) }), _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "md:hidden z-50 text-white", children: isOpen ? _jsx(X, {}) : _jsx(Menu, {}) }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, x: '100%' }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: '100%' }, transition: { type: "tween", duration: 0.4 }, className: "fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center gap-12 md:hidden", children: navItems.map((item) => (_jsx(Link, { to: item.to, className: "text-4xl font-medium tracking-tight hover:text-neutral-500 transition-colors", children: item.name }, item.name))) })) })] }) }));
};
//# sourceMappingURL=Navbar.js.map