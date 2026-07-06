"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Brain, Cpu, Network, Zap, Shield, Clock, Target, Users, ArrowRight, CheckCircle, Star, Lightbulb, Rocket, Globe, Code, Database, Monitor, Activity, TrendingUp, Lock, BookOpen, Eye, Heart, Sparkles, ChevronRight, Play, Building2, Microscope, Gauge, Timer, Award, Settings, Briefcase, Factory, Building, Stethoscope, ShoppingCart, DollarSign, Quote, BarChart3, PieChart, LineChart, Calendar, Mail, Bell, AlertCircle, Info, Layers, Workflow, Bot, Cog, FileText, MessageSquare, Presentation } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function AGIPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // Development Timeline 2025-2032
    const developmentPhases = [
        {
            year: '2025',
            quarter: 'Q1-Q4',
            phase: 'Foundation Research',
            title: 'Core AI Research & Infrastructure',
            description: 'Fundamental research in artificial general intelligence, establishing research partnerships, and building core infrastructure.',
            milestones: [
                'Advanced neural architecture research',
                'Multi-modal learning frameworks',
                'Ethical AI foundation establishment',
                'Research team expansion globally'
            ],
            status: 'upcoming',
            icon: Microscope,
            color: 'blue'
        },
        {
            year: '2026-2027',
            quarter: 'Continuous',
            phase: 'Cognitive Framework Development',
            title: 'Building Human-Level Reasoning',
            description: 'Developing cognitive frameworks that can understand, learn, and reason across multiple domains with human-level capability.',
            milestones: [
                'Complex reasoning systems',
                'Cross-domain knowledge transfer',
                'Natural language understanding',
                'Problem-solving architectures'
            ],
            status: 'upcoming',
            icon: Brain,
            color: 'purple'
        },
        {
            year: '2028-2029',
            quarter: 'Continuous',
            phase: 'Professional Integration',
            title: 'Workplace Intelligence Systems',
            description: 'Creating AGI systems specifically designed to enhance professional workflows and decision-making processes.',
            milestones: [
                'Professional workflow analysis',
                'Decision support systems',
                'Industry-specific adaptations',
                'Collaboration frameworks'
            ],
            status: 'upcoming',
            icon: Briefcase,
            color: 'green'
        },
        {
            year: '2030-2031',
            quarter: 'Continuous',
            phase: 'Beta Testing & Refinement',
            title: 'Real-World Testing & Optimization',
            description: 'Extensive testing with select professional partners, refining capabilities based on real-world usage and feedback.',
            milestones: [
                'Closed beta with professionals',
                'Performance optimization',
                'Safety protocol implementation',
                'User experience refinement'
            ],
            status: 'upcoming',
            icon: Settings,
            color: 'orange'
        },
        {
            year: '2032',
            quarter: 'Q2',
            phase: 'Public Release',
            title: 'Global AGI Launch',
            description: 'Official launch of Delibix AGI to professionals worldwide, marking the beginning of the AGI era in professional services.',
            milestones: [
                'Global platform launch',
                'Professional certification programs',
                'Enterprise integration tools',
                'Continuous learning deployment'
            ],
            status: 'target',
            icon: Rocket,
            color: 'blue'
        }
    ];
    // Professional Worker Benefits
    const professionalBenefits = [
        {
            category: 'Knowledge Workers',
            icon: BookOpen,
            benefits: [
                {
                    title: 'Intelligent Research Assistant',
                    description: 'Instantly access and synthesize information from millions of sources to support your research and analysis.',
                    impact: '10x faster research'
                },
                {
                    title: 'Advanced Document Analysis',
                    description: 'Automatically analyze complex documents, contracts, and reports with human-level comprehension.',
                    impact: '80% time savings'
                },
                {
                    title: 'Strategic Decision Support',
                    description: 'Get sophisticated analysis and recommendations for complex business decisions.',
                    impact: '95% accuracy improvement'
                }
            ]
        },
        {
            category: 'Creative Professionals',
            icon: Lightbulb,
            benefits: [
                {
                    title: 'Creative Ideation Partner',
                    description: 'Collaborate with AGI for brainstorming, concept development, and creative problem-solving.',
                    impact: '5x more creative options'
                },
                {
                    title: 'Multi-Media Content Creation',
                    description: 'Generate, edit, and optimize content across text, images, video, and interactive media.',
                    impact: '70% faster production'
                },
                {
                    title: 'Brand Strategy Intelligence',
                    description: 'Develop comprehensive brand strategies with market analysis and consumer insights.',
                    impact: '60% better targeting'
                }
            ]
        },
        {
            category: 'Technical Professionals',
            icon: Code,
            benefits: [
                {
                    title: 'Advanced Code Generation',
                    description: 'Generate, review, and optimize code across all programming languages and frameworks.',
                    impact: '3x development speed'
                },
                {
                    title: 'System Architecture Design',
                    description: 'Design and optimize complex system architectures with AGI-powered analysis.',
                    impact: '90% fewer bugs'
                },
                {
                    title: 'Automated Testing & QA',
                    description: 'Comprehensive testing strategies and quality assurance with human-level understanding.',
                    impact: '99% test coverage'
                }
            ]
        },
        {
            category: 'Business Professionals',
            icon: TrendingUp,
            benefits: [
                {
                    title: 'Market Intelligence',
                    description: 'Real-time market analysis, trend prediction, and competitive intelligence.',
                    impact: '85% prediction accuracy'
                },
                {
                    title: 'Process Optimization',
                    description: 'Analyze and optimize business processes for maximum efficiency and ROI.',
                    impact: '40% efficiency gain'
                },
                {
                    title: 'Stakeholder Communication',
                    description: 'Perfect presentations, reports, and communications tailored to each audience.',
                    impact: '100% audience engagement'
                }
            ]
        }
    ];
    // Digital Consultant Specific Benefits
    const consultantBenefits = [
        {
            title: 'Client Analysis & Strategy',
            description: 'Instantly analyze client businesses, identify opportunities, and develop comprehensive digital strategies.',
            icon: Target,
            features: [
                'Complete business analysis in minutes',
                'Competitor landscape mapping',
                'Growth opportunity identification',
                'Custom strategy development'
            ],
            value: 'Deliver expert-level analysis 50x faster'
        },
        {
            title: 'Multi-Client Portfolio Management',
            description: 'Manage unlimited clients simultaneously with personalized attention and expert-level service quality.',
            icon: Users,
            features: [
                'Parallel client project management',
                'Personalized communication at scale',
                'Real-time progress tracking',
                'Automated reporting and updates'
            ],
            value: 'Scale from 10 clients to 1000+ clients'
        },
        {
            title: 'Advanced Solution Development',
            description: 'Create sophisticated digital solutions, applications, and systems without technical limitations.',
            icon: Workflow,
            features: [
                'Full-stack development capabilities',
                'Custom application creation',
                'System integration expertise',
                'Advanced automation implementation'
            ],
            value: 'Offer enterprise-level solutions as a solo consultant'
        },
        {
            title: 'Market Intelligence & Insights',
            description: 'Access real-time market data, industry trends, and predictive analytics for informed consulting.',
            icon: BarChart3,
            features: [
                'Real-time market monitoring',
                'Industry trend analysis',
                'Competitive intelligence',
                'Predictive market modeling'
            ],
            value: 'Provide Fortune 500-level insights to any client'
        },
        {
            title: 'Content & Communication Excellence',
            description: 'Create professional presentations, reports, and communications at the highest quality level.',
            icon: Presentation,
            features: [
                'Executive-level presentation creation',
                'Comprehensive report generation',
                'Multi-language communication',
                'Visual content development'
            ],
            value: 'Deliver consultancy-firm quality at individual scale'
        },
        {
            title: 'Continuous Learning & Adaptation',
            description: 'Stay ahead of every industry trend and technology development without constant study.',
            icon: BookOpen,
            features: [
                'Real-time industry knowledge updates',
                'Technology trend monitoring',
                'Best practice identification',
                'Regulatory change tracking'
            ],
            value: 'Maintain expert knowledge across all industries'
        }
    ];
    // Preparation Guidelines
    const preparationSteps = [
        {
            timeframe: 'Now - 2026',
            title: 'Foundation Building',
            description: 'Build strong fundamentals in your profession and understand AI capabilities.',
            actions: [
                'Master current digital tools and platforms',
                'Develop strong analytical thinking skills',
                'Learn basic AI/ML concepts and applications',
                'Build a network of forward-thinking professionals'
            ],
            icon: Building2
        },
        {
            timeframe: '2026 - 2029',
            title: 'Skill Evolution',
            description: 'Develop skills that complement AGI capabilities and prepare for integration.',
            actions: [
                'Focus on creative and strategic thinking',
                'Develop leadership and team management skills',
                'Learn to work with AI tools effectively',
                'Understand ethical implications of AI'
            ],
            icon: TrendingUp
        },
        {
            timeframe: '2029 - 2032',
            title: 'AGI Readiness',
            description: 'Prepare for the integration of AGI into your professional workflow.',
            actions: [
                'Participate in AGI beta testing programs',
                'Develop AGI-human collaboration workflows',
                'Prepare your business for AGI transformation',
                'Build expertise in AGI management and oversight'
            ],
            icon: Rocket
        },
        {
            timeframe: '2032+',
            title: 'AGI Integration',
            description: 'Successfully integrate AGI into your professional practice for maximum impact.',
            actions: [
                'Seamlessly work with AGI systems',
                'Lead AGI transformation in your industry',
                'Mentor others in AGI adoption',
                'Innovate new AGI-enabled service models'
            ],
            icon: Award
        }
    ];
    // FAQ Data
    const faqData = [
        {
            question: 'Why will AGI only be available in 2032?',
            answer: 'Developing true AGI requires fundamental breakthroughs in artificial intelligence that demand 7-8 years of intensive research. We are committed to developing AGI that is safe, reliable, and truly beneficial for professional workers, not just more advanced AI.'
        },
        {
            question: 'How can I prepare myself as a professional worker?',
            answer: 'Focus on skills that are difficult for AGI to replace: creative thinking, emotional intelligence, strategic planning, and leadership. Also learn how to collaborate with current AI tools so you\'re ready to adapt when AGI arrives.'
        },
        {
            question: 'Will AGI replace digital consultant jobs?',
            answer: 'No, AGI will strengthen the capabilities of digital consultants. With AGI, consultants can handle more clients, provide deeper analysis, and focus on strategic aspects and relationship building that require human touch.'
        },
        {
            question: 'How much will it cost to use AGI when it launches?',
            answer: 'We are planning flexible pricing models ranging from individual subscriptions to enterprise licenses. Early adopters who join now will receive preferential pricing and beta testing opportunities.'
        },
        {
            question: 'How does Delibix ensure AGI is safe and ethical?',
            answer: 'We develop AGI with safety-first principles, involving ethical AI experts, and collaborating with regulatory bodies. Every development phase includes extensive safety testing and ethical review.'
        },
        {
            question: 'Can I contribute to AGI development?',
            answer: 'Yes! We will open beta testing programs starting in 2029, research collaboration opportunities, and feedback sessions for professional workers. Register for early access now to get notifications.'
        }
    ];
    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            // Here you would typically handle the email subscription
            console.log('Email subscribed:', email);
        }
    };
    const getPhaseColor = (color) => {
        switch (color) {
            case 'blue': return 'from-blue-500 to-blue-600';
            case 'purple': return 'from-purple-500 to-purple-600';
            case 'green': return 'from-green-500 to-green-600';
            case 'orange': return 'from-orange-500 to-orange-600';
            default: return 'from-blue-500 to-blue-600';
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'upcoming': return 'text-blue-600 bg-blue-500/10 border-blue-500/20';
            case 'target': return 'text-green-600 bg-green-500/10 border-green-500/20';
            default: return 'text-slate-600 bg-slate-500/10 border-slate-500/20';
        }
    };
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-10 dark:opacity-20", children: _jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 800 600", className: "w-full h-full", children: [_jsx("defs", { children: _jsxs("radialGradient", { id: "nodeGradient", cx: "50%", cy: "50%", r: "50%", children: [_jsx("stop", { offset: "0%", stopColor: "rgb(59, 130, 246)", stopOpacity: "0.8" }), _jsx("stop", { offset: "100%", stopColor: "rgb(59, 130, 246)", stopOpacity: "0.2" })] }) }), Array.from({ length: 15 }, (_, i) => {
                                            const x = 100 + (i % 5) * 150;
                                            const y = 100 + Math.floor(i / 5) * 150;
                                            return (_jsxs("g", { children: [_jsx(motion.circle, { cx: x, cy: y, r: "4", fill: "url(#nodeGradient)", animate: {
                                                            scale: [1, 1.2, 1],
                                                            opacity: [0.6, 1, 0.6]
                                                        }, transition: {
                                                            duration: 3,
                                                            repeat: Infinity,
                                                            delay: i * 0.2
                                                        } }), i < 14 && (_jsx(motion.line, { x1: x, y1: y, x2: 100 + ((i + 1) % 5) * 150, y2: 100 + Math.floor((i + 1) / 5) * 150, stroke: "rgb(59, 130, 246)", strokeWidth: "1", strokeOpacity: "0.3", animate: {
                                                            strokeOpacity: [0.2, 0.6, 0.2]
                                                        }, transition: {
                                                            duration: 4,
                                                            repeat: Infinity,
                                                            delay: i * 0.3
                                                        } }))] }, i));
                                        })] }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Calendar, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: "Coming 2032" }), _jsx(Sparkles, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["The Future of", ' ', _jsx("span", { className: "gradient-text-blue", children: "Professional Intelligence" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Delibix AGI is in development to launch a new era of artificial general intelligence specifically designed for professional workers and digital consultants in 2032." })] }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: "7+ Years" }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: "Development Timeline" })] }), _jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: "2032" }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: "Target Launch Year" })] }), _jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: "100%" }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: "Human-Level Intelligence" })] })] }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => {
                                                const element = document.getElementById('early-access');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Join Early Access", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('timeline');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "View Development Timeline" })] })] }) })] }), _jsx("section", { className: "py-16 lg:py-24 relative", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Why ", _jsx("span", { className: "gradient-text-blue", children: "2032" }), "?"] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Developing true AGI requires fundamental breakthroughs in various AI fields. We are committed to developing AGI that is truly transformative, not just more advanced AI." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
                                {
                                    title: 'Deep Research',
                                    description: 'Fundamental research in cognitive science, neural networks, and reasoning systems',
                                    icon: Microscope,
                                    color: 'blue'
                                },
                                {
                                    title: 'Safety & Ethics',
                                    description: 'Developing comprehensive safety and ethics frameworks for AGI',
                                    icon: Shield,
                                    color: 'green'
                                },
                                {
                                    title: 'Real-World Testing',
                                    description: 'Extensive testing with professional partners to ensure reliability',
                                    icon: CheckCircle,
                                    color: 'purple'
                                },
                                {
                                    title: 'Scalable Infrastructure',
                                    description: 'Building infrastructure that can support AGI for millions of users',
                                    icon: Network,
                                    color: 'orange'
                                }
                            ].map((reason, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-6 rounded-2xl gradient-bg-blue flex items-center justify-center`, children: _jsx(reason.icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: `text-xl font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: reason.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: reason.description })] }, reason.title))) })] }) }), _jsx("section", { id: "timeline", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Development ", _jsx("span", { className: "gradient-text-blue", children: "Timeline" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Comprehensive roadmap for AGI development from research to global launch in 2032." })] }), _jsx("div", { className: "space-y-12", children: developmentPhases.map((phase, index) => (_jsx(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8 items-center", children: [_jsxs("div", { className: "text-center lg:text-left", children: [_jsx("div", { className: `w-20 h-20 mx-auto lg:mx-0 mb-4 rounded-2xl bg-gradient-to-r ${getPhaseColor(phase.color)} flex items-center justify-center`, children: _jsx(phase.icon, { className: "w-10 h-10 text-white" }) }), _jsx("div", { className: `text-2xl font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: phase.year }), _jsx("div", { className: `text-sm px-3 py-1 rounded-full border inline-block ${getStatusColor(phase.status)}`, children: phase.quarter })] }), _jsxs("div", { className: "lg:col-span-3", children: [_jsx("div", { className: `text-sm font-semibold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`, children: phase.phase }), _jsx("h3", { className: `text-2xl font-bold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: phase.title }), _jsx("p", { className: `text-base mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: phase.description }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: phase.milestones.map((milestone, milestoneIndex) => (_jsxs("div", { className: `flex items-center gap-3 text-sm ${isRTL ? 'flex-row-reverse' : ''} ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), milestone] }, milestoneIndex))) })] })] }) }, phase.year))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Benefits for ", _jsx("span", { className: "gradient-text-blue", children: "Professional Workers" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "AGI will transform how professionals work across various fields by providing capabilities that match or exceed human-level intelligence." })] }), _jsx("div", { className: "space-y-16", children: professionalBenefits.map((category, categoryIndex) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: categoryIndex * 0.2 }, children: [_jsxs("div", { className: "flex items-center gap-4 mb-8", children: [_jsx("div", { className: `w-16 h-16 rounded-2xl gradient-bg-blue flex items-center justify-center`, children: _jsx(category.icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: `text-2xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: category.category })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: category.benefits.map((benefit, benefitIndex) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4, delay: benefitIndex * 0.1 }, className: `glass-heavy rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h4", { className: `text-xl font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: benefit.title }), _jsx("p", { className: `text-base mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: benefit.description }), _jsx("div", { className: `text-sm font-semibold px-3 py-1 rounded-full bg-green-500/10 text-green-600 border border-green-500/20 inline-block`, children: benefit.impact })] }, benefit.title))) })] }, category.category))) })] }) }), _jsx("section", { className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/50 to-background dark:from-blue-950/20 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Revolution for ", _jsx("span", { className: "gradient-text-blue", children: "Digital Consultants" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "AGI will transform the digital consulting landscape, enabling individual consultants to deliver services equivalent to large consulting firms." })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: consultantBenefits.map((benefit, index) => (_jsx(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -30 : 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: _jsxs("div", { className: `flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `w-16 h-16 rounded-2xl gradient-bg-blue flex items-center justify-center flex-shrink-0`, children: _jsx(benefit.icon, { className: "w-8 h-8 text-white" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: `text-xl font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: benefit.title }), _jsx("p", { className: `text-base mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: benefit.description }), _jsx("div", { className: "space-y-2 mb-4", children: benefit.features.map((feature, featureIndex) => (_jsxs("div", { className: `flex items-center gap-2 text-sm ${isRTL ? 'flex-row-reverse' : ''} ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }), feature] }, featureIndex))) }), _jsxs("div", { className: `text-sm font-semibold px-3 py-2 rounded-lg bg-blue-500/10 text-blue-600 border border-blue-500/20`, children: ["\uD83D\uDCA1 ", benefit.value] })] })] }) }, benefit.title))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["How to ", _jsx("span", { className: "gradient-text-blue", children: "Prepare Yourself" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Step-by-step guide to prepare your career for the AGI era and maximize the benefits from this revolutionary technology." })] }), _jsx("div", { className: "space-y-8", children: preparationSteps.map((step, index) => (_jsx(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8 items-center", children: [_jsxs("div", { className: "text-center lg:text-left", children: [_jsx("div", { className: `w-16 h-16 mx-auto lg:mx-0 mb-4 rounded-2xl gradient-bg-blue flex items-center justify-center`, children: _jsx(step.icon, { className: "w-8 h-8 text-white" }) }), _jsx("div", { className: `text-lg font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`, children: step.timeframe })] }), _jsxs("div", { className: "lg:col-span-3", children: [_jsx("h3", { className: `text-2xl font-bold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: step.title }), _jsx("p", { className: `text-base mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: step.description }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.actions.map((action, actionIndex) => (_jsxs("div", { className: `flex items-center gap-3 text-sm ${isRTL ? 'flex-row-reverse' : ''} ${isDark ? 'text-slate-300' : 'text-slate-700'}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }), action] }, actionIndex))) })] })] }) }, step.timeframe))) })] }) }), _jsx("section", { className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-4xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Frequently Asked ", _jsx("span", { className: "gradient-text-blue", children: "Questions" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Answers to the most frequently asked questions about AGI and its development timeline." })] }), _jsx("div", { className: "space-y-6", children: faqData.map((faq, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-6 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("h3", { className: `text-lg font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: faq.question }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`, children: faq.answer })] }, index))) })] }) }), _jsx("section", { id: "early-access", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white", children: _jsx("div", { className: "max-w-4xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold", children: ["Join ", _jsx("span", { className: "text-blue-200", children: "Early Access" })] }), _jsx("p", { className: "text-xl max-w-3xl mx-auto text-blue-100", children: "Register now for priority notifications, beta testing access, preferential pricing, and opportunities to contribute to AGI development." }), !isSubscribed ? (_jsx("form", { onSubmit: handleEmailSubmit, className: "max-w-md mx-auto", children: _jsxs("div", { className: "flex gap-4", children: [_jsx(Input, { type: "email", placeholder: "Enter your email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70" }), _jsx(Button, { type: "submit", className: "bg-white text-blue-700 hover:bg-blue-50 font-semibold", children: "Join Waitlist" })] }) })) : (_jsxs("div", { className: "max-w-md mx-auto p-6 bg-green-500/20 border border-green-400/30 rounded-2xl", children: [_jsx(CheckCircle, { className: "w-8 h-8 mx-auto mb-3 text-green-400" }), _jsx("p", { className: "text-green-100 font-semibold", children: "Thank you! You are now registered for early AGI access." })] })), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-8", children: [
                                    { icon: Bell, title: 'Priority Updates', desc: 'First to know about development progress' },
                                    { icon: Users, title: 'Beta Testing', desc: 'Early access to beta versions starting 2029' },
                                    { icon: DollarSign, title: 'Special Pricing', desc: 'Preferential pricing for early adopters' }
                                ].map((benefit, index) => (_jsxs("div", { className: "text-center", children: [_jsx(benefit.icon, { className: "w-8 h-8 mx-auto mb-3 text-blue-200" }), _jsx("h3", { className: "font-semibold mb-2", children: benefit.title }), _jsx("p", { className: "text-sm text-blue-100", children: benefit.desc })] }, benefit.title))) }), _jsxs(motion.div, { className: "pt-12 text-center", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.4 }, children: [_jsx("p", { className: "text-blue-200 mb-4", children: "Have questions about AGI or want to consult about future preparation?" }), _jsxs("div", { className: `flex items-center justify-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: "text-blue-100", children: "hello@delibix.com" }), _jsx("span", { className: "text-blue-100", children: "+62 857 7002 4933" })] })] })] }) }) })] }));
}
//# sourceMappingURL=AGIPage.js.map