"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Lightbulb, TrendingUp, Zap, Target, CheckCircle, Star, ArrowRight, Award, Mail, Users, Beaker, Cpu, Brain, Rocket, Activity, Monitor, Settings, Calendar, FileText, Microscope, Globe, Database } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function InnovationLabPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // Innovation Lab Statistics
    const innovationStats = [
        {
            title: "Active Projects",
            value: "50+",
            description: "Cutting-edge research initiatives",
            icon: Beaker,
            growth: "Continuously expanding"
        },
        {
            title: "Innovation Patents",
            value: "25+",
            description: "Breakthrough technology patents",
            icon: Award,
            growth: "IP portfolio"
        },
        {
            title: "Research Publications",
            value: "150+",
            description: "Published research papers",
            icon: FileText,
            growth: "Academic excellence"
        },
        {
            title: "Lab Success Rate",
            value: "92%",
            description: "Project to production success",
            icon: Target,
            growth: "Innovation excellence"
        }
    ];
    // Innovation Lab Research Areas
    const researchAreas = [
        {
            id: 1,
            title: "Artificial General Intelligence",
            description: "Advancing towards AGI with safe, beneficial, and human-aligned AI systems that can understand and solve complex problems.",
            icon: Brain,
            projects: 12,
            patents: 8,
            publications: 25,
            timeline: "2024-2026",
            funding: "$5.2M",
            team: "15 researchers",
            technologies: ["Neural Networks", "Reinforcement Learning", "Natural Language Processing", "Computer Vision"],
            breakthroughs: [
                "Multi-modal reasoning architecture",
                "Self-improving learning algorithms",
                "Human-AI collaborative frameworks",
                "Ethical AI decision systems"
            ],
            impact: "Revolutionary advancement in human-AI collaboration and problem-solving capabilities"
        },
        {
            id: 2,
            title: "Quantum Computing Integration",
            description: "Exploring quantum computing applications for exponential performance gains in optimization and machine learning.",
            icon: Cpu,
            projects: 8,
            patents: 5,
            publications: 18,
            timeline: "2024-2027",
            funding: "$3.8M",
            team: "12 researchers",
            technologies: ["Quantum Algorithms", "Quantum ML", "Hybrid Systems", "Error Correction"],
            breakthroughs: [
                "Quantum-classical hybrid optimization",
                "Quantum machine learning algorithms",
                "Noise-resilient quantum computing",
                "Quantum advantage demonstrations"
            ],
            impact: "100x performance improvement in complex optimization and cryptographic applications"
        },
        {
            id: 3,
            title: "Autonomous Business Systems",
            description: "Developing self-managing business processes that adapt, optimize, and evolve without human intervention.",
            icon: Settings,
            projects: 10,
            patents: 6,
            publications: 22,
            timeline: "2024-2025",
            funding: "$4.1M",
            team: "18 researchers",
            technologies: ["Process Mining", "Autonomous Agents", "Predictive Analytics", "Smart Contracts"],
            breakthroughs: [
                "Self-optimizing supply chains",
                "Autonomous decision frameworks",
                "Adaptive business processes",
                "Intelligent resource allocation"
            ],
            impact: "75% reduction in operational overhead and 90% faster decision-making processes"
        },
        {
            id: 4,
            title: "Next-Gen Digital Interfaces",
            description: "Creating intuitive, context-aware interfaces that seamlessly blend physical and digital experiences.",
            icon: Monitor,
            projects: 9,
            patents: 4,
            publications: 16,
            timeline: "2024-2026",
            funding: "$2.9M",
            team: "14 researchers",
            technologies: ["AR/VR", "Brain-Computer Interfaces", "Haptic Technology", "Gesture Recognition"],
            breakthroughs: [
                "Mind-controlled digital interfaces",
                "Holographic collaboration spaces",
                "Emotion-responsive UX systems",
                "Multi-sensory feedback systems"
            ],
            impact: "Revolutionary user experience with 95% more intuitive human-computer interaction"
        },
        {
            id: 5,
            title: "Sustainable Technology",
            description: "Pioneering eco-friendly digital solutions that minimize environmental impact while maximizing efficiency.",
            icon: Globe,
            projects: 7,
            patents: 3,
            publications: 12,
            timeline: "2024-2028",
            funding: "$3.5M",
            team: "11 researchers",
            technologies: ["Green Computing", "Carbon Analytics", "Sustainable Architecture", "Energy Optimization"],
            breakthroughs: [
                "Carbon-neutral data centers",
                "Biodegradable computing materials",
                "Energy-harvesting devices",
                "Circular economy platforms"
            ],
            impact: "80% reduction in digital carbon footprint and sustainable technology adoption"
        },
        {
            id: 6,
            title: "Predictive Intelligence Systems",
            description: "Building systems that can predict and prevent problems before they occur across various business domains.",
            icon: Activity,
            projects: 11,
            patents: 7,
            publications: 20,
            timeline: "2024-2025",
            funding: "$4.7M",
            team: "16 researchers",
            technologies: ["Predictive Analytics", "Time Series Analysis", "Anomaly Detection", "Causal AI"],
            breakthroughs: [
                "Real-time risk prediction models",
                "Preventive maintenance algorithms",
                "Market disruption forecasting",
                "Behavioral prediction engines"
            ],
            impact: "85% reduction in critical failures and 70% improvement in strategic planning accuracy"
        }
    ];
    // Innovation Lab Facilities
    const labFacilities = [
        {
            name: "AI Research Center",
            description: "State-of-the-art facility with advanced GPU clusters and quantum computers",
            capacity: "500+ researchers",
            equipment: ["NVIDIA H100 Clusters", "Quantum Computers", "Edge Computing Labs", "VR/AR Studios"],
            specialization: "Artificial Intelligence & Machine Learning"
        },
        {
            name: "Innovation Incubator",
            description: "Collaborative space for rapid prototyping and proof-of-concept development",
            capacity: "200+ projects",
            equipment: ["3D Printing Labs", "IoT Testing Facilities", "Rapid Prototyping Tools", "Collaboration Spaces"],
            specialization: "Product Development & Prototyping"
        },
        {
            name: "Digital Twin Laboratory",
            description: "Advanced simulation environment for testing digital transformation scenarios",
            capacity: "100+ simulations",
            equipment: ["Simulation Clusters", "Digital Twin Platforms", "Real-time Analytics", "Testing Environments"],
            specialization: "Digital Transformation Simulation"
        }
    ];
    // Success Metrics
    const successMetrics = [
        {
            category: "Research Impact",
            metrics: [
                { metric: "Patent Applications", value: "25+", trend: "+180% YoY" },
                { metric: "Research Publications", value: "150+", trend: "+220% YoY" },
                { metric: "Citation Index", value: "4,200+", trend: "+350% YoY" },
                { metric: "Innovation Awards", value: "12", trend: "+400% YoY" }
            ]
        },
        {
            category: "Commercial Success",
            metrics: [
                { metric: "Projects to Production", value: "92%", trend: "+15% YoY" },
                { metric: "Revenue from Innovation", value: "$50M+", trend: "+280% YoY" },
                { metric: "Client Adoptions", value: "1,000+", trend: "+320% YoY" },
                { metric: "Market Validation", value: "95%", trend: "+12% YoY" }
            ]
        },
        {
            category: "Industry Leadership",
            metrics: [
                { metric: "Technology Partnerships", value: "50+", trend: "+250% YoY" },
                { metric: "Research Collaborations", value: "30+", trend: "+180% YoY" },
                { metric: "Industry Recognition", value: "98%", trend: "+8% YoY" },
                { metric: "Thought Leadership", value: "200+", trend: "+400% YoY" }
            ]
        }
    ];
    const [selectedArea, setSelectedArea] = useState(researchAreas[0]);
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 15 }, (_, i) => {
                                    const icons = [Lightbulb, Beaker, Cpu, Brain, Rocket, Microscope];
                                    const IconComponent = icons[i % icons.length];
                                    return (_jsx(motion.div, { className: "absolute", style: {
                                            left: `${10 + (i % 5) * 20}%`,
                                            top: `${10 + Math.floor(i / 5) * 25}%`,
                                        }, animate: {
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 15, -15, 0],
                                            opacity: [0.3, 0.8, 0.3]
                                        }, transition: {
                                            duration: 10,
                                            repeat: Infinity,
                                            delay: i * 0.6
                                        }, children: _jsx(IconComponent, { className: "w-16 h-16 text-blue-500" }) }, i));
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Lightbulb, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "Cutting-Edge Innovation" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Innovation ", _jsx("span", { className: "gradient-text-blue", children: "Lab" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Leading innovation laboratory with 50+ cutting-edge research projects and 25+ breakthrough patents. 92% project success rate driving the future of digital transformation technology." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: innovationStats.map((stat, index) => (_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx(stat.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-500" }), _jsx("div", { className: `text-2xl md:text-3xl font-bold mb-2 gradient-text-blue`, children: stat.value }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-1`, children: stat.title }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'} mb-2`, children: stat.description }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: stat.growth })] }, index))) }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Explore Innovation Lab", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('research-areas');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "Research Areas" })] })] }) })] }), _jsx("section", { id: "research-areas", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Research ", _jsx("span", { className: "gradient-text-blue", children: "Areas" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Six pioneering research areas pushing the boundaries of digital transformation with breakthrough innovations and cutting-edge technology development." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: researchAreas.map((area, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 h-full cursor-pointer hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'} ${selectedArea.id === area.id ? 'ring-2 ring-blue-500' : ''}`, onClick: () => setSelectedArea(area), children: [_jsxs("div", { className: "mb-6", children: [_jsx("div", { className: `w-16 h-16 rounded-2xl gradient-bg-blue flex items-center justify-center mb-4`, children: _jsx(area.icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: `text-xl font-bold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: area.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} mb-6 line-clamp-3`, children: area.description })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: `glass-secondary rounded-xl p-3 text-center ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsx("div", { className: `text-lg font-bold gradient-text-blue`, children: area.projects }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: "Active Projects" })] }), _jsxs("div", { className: `glass-secondary rounded-xl p-3 text-center ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsx("div", { className: `text-lg font-bold gradient-text-blue`, children: area.patents }), _jsx("div", { className: `text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`, children: "Patents Filed" })] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: area.timeline }), _jsx("div", { className: `text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: area.funding })] })] })] }, area.id))) }), selectedArea && (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: `mt-12 glass-heavy rounded-3xl p-8 lg:p-12 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: `w-16 h-16 rounded-2xl gradient-bg-blue flex items-center justify-center`, children: _jsx(selectedArea.icon, { className: "w-8 h-8 text-white" }) }), _jsxs("div", { children: [_jsx("h3", { className: `text-2xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: selectedArea.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: selectedArea.team })] })] }), _jsx("p", { className: `text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: selectedArea.description }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Key Technologies:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: selectedArea.technologies.map((tech, techIndex) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: tech }, techIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Expected Impact:" }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: selectedArea.impact })] })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Breakthrough Achievements:" }), _jsx("div", { className: "space-y-3", children: selectedArea.breakthroughs.map((breakthrough, breakIndex) => (_jsxs("div", { className: `flex items-center gap-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), breakthrough] }, breakIndex))) })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: `glass-secondary rounded-xl p-4 ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsx("div", { className: `text-sm font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Publications" }), _jsx("div", { className: `text-2xl font-bold gradient-text-blue`, children: selectedArea.publications })] }), _jsxs("div", { className: `glass-secondary rounded-xl p-4 ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsx("div", { className: `text-sm font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: "Timeline" }), _jsx("div", { className: `text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: selectedArea.timeline })] })] })] })] }) }))] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Innovation ", _jsx("span", { className: "gradient-text-blue", children: "Impact" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Measurable innovation impact across research excellence, commercial success, and industry leadership with consistent year-over-year growth." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: successMetrics.map((category, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 h-full ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-2xl font-bold mb-6 text-center ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: category.category }), _jsx("div", { className: "space-y-4", children: category.metrics.map((metric, metricIndex) => (_jsxs("div", { className: `glass-secondary rounded-xl p-4 ${isDark ? 'border-blue-400/10' : 'border-blue-200/30'}`, children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("div", { className: `text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: metric.metric }), _jsx("div", { className: `text-lg font-bold gradient-text-blue`, children: metric.value })] }), _jsx("div", { className: `text-xs text-green-500 font-medium`, children: metric.trend })] }, metricIndex))) })] }, category.category))) })] }) }), _jsxs("section", { className: "py-16 lg:py-24 relative overflow-hidden bg-background transition-colors duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 transition-colors duration-300" }), _jsx("div", { className: "max-w-4xl mx-auto px-6 relative z-10", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsxs("div", { className: "glass-heavy rounded-3xl p-12 text-center relative overflow-hidden border-2 border-blue-300 dark:border-blue-600/50 transition-all duration-300", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl transition-colors duration-300" }), _jsxs("div", { className: "relative z-10", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-lg", children: _jsx(Lightbulb, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300", children: "Ready to Partner with Our Innovation Lab?" }), _jsx("div", { className: "text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300", children: "Join 50+ cutting-edge research projects with 92% success rate and breakthrough innovation in digital transformation technology." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl border-0 shadow-lg relative overflow-hidden transition-all duration-300", onClick: () => navigate('demo-request'), children: _jsxs("span", { className: "relative z-10 flex items-center", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Partner with Innovation Lab"] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "glass-secondary border-2 border-blue-300 dark:border-blue-600/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300", onClick: () => navigate('digital-research'), children: "View Research Findings" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-blue-200 dark:border-blue-600/50 transition-colors duration-300", children: [_jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Innovation Excellence" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "50+ projects & 25+ patents with 92% success" })] }), _jsxs("div", { className: "text-center", children: [_jsx("h4", { className: "text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300", children: "Research Impact" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 transition-colors duration-300", children: "150+ publications & industry leadership" })] })] })] })] }) }) })] })] }));
}
//# sourceMappingURL=InnovationLabPage.js.map