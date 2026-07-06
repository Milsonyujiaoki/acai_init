import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Work } from './components/Work';
import { ProjectDetail } from './components/ProjectDetail';
// Preloader Component
const Preloader = () => (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }, className: "fixed inset-0 z-[999] bg-white flex items-center justify-center text-black", children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.8, filter: "blur(10px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }, className: "flex flex-col items-center gap-4", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-bold tracking-tighter", children: "ALEX.DESIGN" }), _jsx(motion.div, { initial: { width: 0 }, animate: { width: "100%" }, transition: { delay: 0.5, duration: 1.5, ease: "easeInOut" }, className: "h-px bg-black/20 w-32" })] }) }));
// Enhanced ScrollToTop to handle both routes and hash anchors
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);
    return null;
};
const HomePage = () => (_jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Projects, {}), _jsx(Services, {}), _jsx(Footer, {})] }));
function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Intro animation duration
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (_jsxs(Router, { children: [_jsx(ScrollToTop, {}), _jsx(AnimatePresence, { mode: "wait", children: loading && _jsx(Preloader, {}, "preloader") }), !loading && (_jsxs("div", { className: "bg-neutral-950 min-h-screen text-white selection:bg-white/20", children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/work", element: _jsx(Work, {}) }), _jsx(Route, { path: "/work/:slug", element: _jsx(ProjectDetail, {}) })] })] }))] }));
}
export default App;
//# sourceMappingURL=App.js.map