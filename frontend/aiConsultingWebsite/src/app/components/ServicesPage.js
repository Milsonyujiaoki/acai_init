"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Star, Clock, Target, Users, Zap, Brain, Code, Smartphone, Monitor, Cloud, Database, Shield, Rocket, CheckCircle, TrendingUp, BarChart3, PieChart, Activity, Lightbulb, Settings, Globe, Heart, Award, DollarSign, Calendar, MessageSquare, Phone, Mail, ExternalLink, Sparkles, Bot, Cpu, Network, Eye, Lock, Palette, Search, FileText, Layers, Command, Package, Building2, Briefcase, PlayCircle } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function ServicesPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredService, setHoveredService] = useState(null);
    // Service categories
    const serviceCategories = [
        { id: 'all', name: 'All Services', icon: Grid3X3, count: 12 },
        { id: 'ai-development', name: 'AI Development', icon: Brain, count: 4 },
        { id: 'digital-strategy', name: 'Digital Strategy', icon: Target, count: 3 },
        { id: 'web-mobile', name: 'Web & Mobile', icon: Smartphone, count: 3 },
        { id: 'data-analytics', name: 'Data & Analytics', icon: BarChart3, count: 2 }
    ];
    // Comprehensive services data
    const services = [
        // AI Development Services
        {
            id: 'ai-chatbots',
            category: 'ai-development',
            title: 'AI Chatbots & Virtual Assistants',
            description: 'Intelligent conversational AI that understands context, learns from interactions, and provides 24/7 customer support.',
            icon: Bot,
            features: ['Natural Language Processing', 'Multi-language Support', 'Integration with CRM', 'Analytics Dashboard'],
            timeline: '2-4 weeks',
            price: 'From $3,000',
            popular: true,
            technologies: ['OpenAI GPT', 'TensorFlow', 'Dialogflow', 'Rasa'],
            deliverables: ['Custom AI model', 'Integration setup', 'Training data', '30-day support']
        },
        {
            id: 'machine-learning',
            category: 'ai-development',
            title: 'Machine Learning Solutions',
            description: 'Custom ML models for predictive analytics, recommendation systems, and automated decision-making processes.',
            icon: Cpu,
            features: ['Predictive Analytics', 'Recommendation Engines', 'Automated Classification', 'Real-time Processing'],
            timeline: '4-8 weeks',
            price: 'From $5,000',
            popular: false,
            technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
            deliverables: ['Trained ML model', 'API endpoints', 'Documentation', 'Performance metrics']
        },
        {
            id: 'computer-vision',
            category: 'ai-development',
            title: 'Computer Vision & Image AI',
            description: 'Advanced image recognition, object detection, and visual analysis for automation and insights.',
            icon: Eye,
            features: ['Object Detection', 'Facial Recognition', 'OCR Technology', 'Quality Control'],
            timeline: '3-6 weeks',
            price: 'From $4,000',
            popular: false,
            technologies: ['OpenCV', 'YOLO', 'TensorFlow', 'PyTorch'],
            deliverables: ['Vision model', 'Mobile/web integration', 'Testing suite', 'Training documentation']
        },
        {
            id: 'ai-automation',
            category: 'ai-development',
            title: 'AI Process Automation',
            description: 'Intelligent automation systems that streamline workflows and reduce manual tasks using AI.',
            icon: Settings,
            features: ['Workflow Automation', 'Document Processing', 'Data Entry Automation', 'Smart Routing'],
            timeline: '3-5 weeks',
            price: 'From $3,500',
            popular: true,
            technologies: ['RPA Tools', 'Python', 'API Integration', 'Zapier'],
            deliverables: ['Automation workflows', 'Integration setup', 'User training', 'Monitoring dashboard']
        },
        // Digital Strategy Services
        {
            id: 'digital-transformation',
            category: 'digital-strategy',
            title: 'Digital Transformation Consulting',
            description: 'Comprehensive digital strategy to modernize your business processes and enhance customer experience.',
            icon: Rocket,
            features: ['Strategy Development', 'Technology Roadmap', 'Change Management', 'ROI Analysis'],
            timeline: '4-6 weeks',
            price: 'From $4,500',
            popular: true,
            technologies: ['Enterprise Architecture', 'Cloud Platforms', 'Agile Methodology'],
            deliverables: ['Digital strategy report', 'Implementation roadmap', 'Technology recommendations', 'Training plan']
        },
        {
            id: 'business-intelligence',
            category: 'digital-strategy',
            title: 'Business Intelligence & Analytics',
            description: 'Transform raw data into actionable insights with custom dashboards and reporting systems.',
            icon: PieChart,
            features: ['Custom Dashboards', 'Real-time Reporting', 'Data Visualization', 'KPI Tracking'],
            timeline: '3-5 weeks',
            price: 'From $3,000',
            popular: false,
            technologies: ['Power BI', 'Tableau', 'Google Analytics', 'Custom APIs'],
            deliverables: ['Interactive dashboards', 'Automated reports', 'Data integration', 'User training']
        },
        {
            id: 'digital-marketing',
            category: 'digital-strategy',
            title: 'AI-Powered Digital Marketing',
            description: 'Leverage AI for personalized marketing campaigns, customer segmentation, and performance optimization.',
            icon: TrendingUp,
            features: ['Personalization Engine', 'Customer Segmentation', 'Campaign Optimization', 'Social Media AI'],
            timeline: '2-4 weeks',
            price: 'From $2,500',
            popular: true,
            technologies: ['Google Ads API', 'Facebook Marketing API', 'Analytics Tools', 'CRM Integration'],
            deliverables: ['Marketing automation', 'Campaign setup', 'Analytics dashboard', 'Strategy guide']
        },
        // Web & Mobile Services
        {
            id: 'web-development',
            category: 'web-mobile',
            title: 'Modern Web Applications',
            description: 'Responsive, fast, and scalable web applications built with the latest technologies and best practices.',
            icon: Monitor,
            features: ['Responsive Design', 'Progressive Web App', 'SEO Optimization', 'Performance Tuning'],
            timeline: '4-8 weeks',
            price: 'From $5,000',
            popular: true,
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            deliverables: ['Custom web application', 'Admin dashboard', 'Mobile-responsive design', 'SEO setup']
        },
        {
            id: 'mobile-apps',
            category: 'web-mobile',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications with seamless user experience and robust functionality.',
            icon: Smartphone,
            features: ['Cross-platform Development', 'Native Performance', 'Push Notifications', 'Offline Support'],
            timeline: '6-12 weeks',
            price: 'From $8,000',
            popular: false,
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
            deliverables: ['Mobile application', 'App store deployment', 'Backend integration', 'User documentation']
        },
        {
            id: 'ecommerce',
            category: 'web-mobile',
            title: 'E-commerce Solutions',
            description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
            icon: Package,
            features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Customer Portal'],
            timeline: '6-10 weeks',
            price: 'From $7,000',
            popular: true,
            technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
            deliverables: ['E-commerce website', 'Payment setup', 'Admin panel', 'Customer training']
        },
        // Data & Analytics Services
        {
            id: 'data-engineering',
            category: 'data-analytics',
            title: 'Data Engineering & Pipeline',
            description: 'Robust data infrastructure for collecting, processing, and storing large volumes of data efficiently.',
            icon: Database,
            features: ['Data Pipeline Setup', 'ETL Processes', 'Data Warehousing', 'Real-time Processing'],
            timeline: '4-6 weeks',
            price: 'From $4,000',
            popular: false,
            technologies: ['Apache Spark', 'Airflow', 'AWS/GCP', 'PostgreSQL'],
            deliverables: ['Data pipeline', 'Data warehouse', 'Monitoring setup', 'Documentation']
        },
        {
            id: 'cloud-migration',
            category: 'data-analytics',
            title: 'Cloud Migration & Architecture',
            description: 'Seamless migration to cloud platforms with optimized architecture for scalability and cost-efficiency.',
            icon: Cloud,
            features: ['Cloud Strategy', 'Migration Planning', 'Architecture Design', 'Cost Optimization'],
            timeline: '3-8 weeks',
            price: 'From $3,500',
            popular: true,
            technologies: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes'],
            deliverables: ['Migration plan', 'Cloud setup', 'Security configuration', 'Monitoring tools']
        }
    ];
    // Filter services based on active category
    const filteredServices = activeCategory === 'all'
        ? services
        : services.filter(service => service.category === activeCategory);
    // Service process steps
    const processSteps = [
        {
            step: '01',
            title: 'Discovery & Analysis',
            description: 'We understand your business needs, challenges, and goals through comprehensive analysis.',
            icon: Search,
            duration: '1-2 days'
        },
        {
            step: '02',
            title: 'Strategy & Planning',
            description: 'Develop a tailored strategy with clear timelines, milestones, and success metrics.',
            icon: Target,
            duration: '2-3 days'
        },
        {
            step: '03',
            title: 'Design & Development',
            description: 'Create and build your solution using cutting-edge technologies and best practices.',
            icon: Code,
            duration: '2-8 weeks'
        },
        {
            step: '04',
            title: 'Testing & Optimization',
            description: 'Rigorous testing and optimization to ensure quality, performance, and user satisfaction.',
            icon: CheckCircle,
            duration: '3-5 days'
        },
        {
            step: '05',
            title: 'Launch & Support',
            description: 'Smooth deployment and ongoing support to ensure continued success and growth.',
            icon: Rocket,
            duration: 'Ongoing'
        }
    ];
    // Why choose us benefits
    const benefits = [
        {
            icon: Brain,
            title: 'AI-First Approach',
            description: 'Every solution is designed with AI capabilities to future-proof your business.'
        },
        {
            icon: Zap,
            title: 'Rapid Delivery',
            description: 'Get your solutions live in weeks, not months, with our agile development process.'
        },
        {
            icon: Users,
            title: 'Expert Team',
            description: 'Work with experienced professionals who understand both technology and business.'
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Built-in security and compliance features to protect your data and users.'
        },
        {
            icon: TrendingUp,
            title: 'Scalable Solutions',
            description: 'Architectures that grow with your business and adapt to changing needs.'
        },
        {
            icon: Heart,
            title: 'Ongoing Support',
            description: '24/7 support and maintenance to keep your solutions running smoothly.'
        }
    ];
    const handleGetQuote = (serviceId) => {
        // Navigate to contact page or open contact form
        if (navigate) {
            navigate('contact');
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative pt-32 pb-20 px-6 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/30 dark:to-slate-900/50" }), _jsx("div", { className: "relative max-w-7xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsxs(Badge, { className: "mb-6 px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", children: [_jsx(Sparkles, { className: "w-4 h-4 mr-2" }), "AI-Powered Digital Solutions"] }), _jsxs("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-slate-100", children: ["Our ", _jsx("span", { className: "gradient-text-blue", children: "Services" })] }), _jsx("p", { className: "text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed", children: "Transform your business with our comprehensive suite of AI-driven digital consulting services. From strategy to implementation, we deliver results that matter." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300", onClick: () => {
                                                const element = document.getElementById('services-grid');
                                                if (element)
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                            }, children: [_jsx(PlayCircle, { className: "w-5 h-5 mr-2" }), "Explore Services"] }), _jsxs(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg rounded-2xl backdrop-blur-xl", onClick: () => handleGetQuote('consultation'), children: [_jsx(Calendar, { className: "w-5 h-5 mr-2" }), "Free Consultation"] })] })] }) })] }), _jsx("section", { className: "py-12 px-6", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("div", { className: "flex flex-wrap gap-4 justify-center mb-12", children: serviceCategories.map((category, index) => (_jsxs(motion.button, { onClick: () => setActiveCategory(category.id), className: `flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${activeCategory === category.id
                                ? 'gradient-bg-blue text-white shadow-lg'
                                : isDark
                                    ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                                    : 'bg-white/50 text-slate-700 hover:bg-blue-50/50 border border-blue-100'}`, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx(category.icon, { className: "w-5 h-5" }), category.name, _jsx(Badge, { variant: "secondary", className: "text-xs", children: category.count })] }, category.id))) }) }) }), _jsx("section", { id: "services-grid", className: "py-16 px-6", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredServices.map((service, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, onHoverStart: () => setHoveredService(service.id), onHoverEnd: () => setHoveredService(null), children: _jsxs(Card, { className: `h-full p-6 transition-all duration-300 cursor-pointer ${isDark
                                    ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50'
                                    : 'bg-white/50 border-blue-100 hover:bg-blue-50/50'} hover:shadow-xl hover:scale-105 backdrop-blur-xl`, children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsx("div", { className: `p-3 rounded-2xl ${isDark ? 'bg-blue-900/30' : 'bg-blue-100'}`, children: _jsx(service.icon, { className: `w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}` }) }), service.popular && (_jsxs(Badge, { className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300", children: [_jsx(Star, { className: "w-3 h-3 mr-1" }), "Popular"] }))] }), _jsx("h3", { className: "text-xl font-bold mb-3 text-slate-900 dark:text-slate-100", children: service.title }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4 line-clamp-3", children: service.description }), _jsxs("div", { className: "space-y-3 mb-6", children: [_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(Clock, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { className: "text-slate-600 dark:text-slate-400", children: service.timeline })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(DollarSign, { className: "w-4 h-4 text-green-500" }), _jsx("span", { className: "font-semibold text-slate-900 dark:text-slate-100", children: service.price })] })] }), _jsx("div", { className: "space-y-2 mb-6", children: service.features.slice(0, 3).map((feature, idx) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }), _jsx("span", { className: "text-slate-600 dark:text-slate-400", children: feature })] }, idx))) }), _jsxs(Button, { className: "w-full gradient-bg-blue text-white rounded-xl", onClick: () => handleGetQuote(service.id), children: ["Get Quote", _jsx(ArrowRight, { className: "w-4 h-4 ml-2" })] }), hoveredService === service.id && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, className: "mt-4 pt-4 border-t border-slate-200 dark:border-slate-700", children: _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold text-sm text-slate-900 dark:text-slate-100", children: "Technologies:" }), _jsx("div", { className: "flex flex-wrap gap-1", children: service.technologies.map((tech, idx) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: tech }, idx))) })] }) }))] }) }, service.id))) }) }) }), _jsx("section", { className: "py-20 px-6 bg-gradient-to-br from-blue-50/30 to-blue-100/20 dark:from-blue-950/20 dark:to-slate-900/30", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100", children: ["Our ", _jsx("span", { className: "gradient-text-blue", children: "Process" })] }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto", children: "A proven methodology that ensures successful project delivery and client satisfaction" })] }), _jsx("div", { className: "space-y-8", children: processSteps.map((step, index) => (_jsx(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: index * 0.1 }, viewport: { once: true }, className: `flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''} ${isRTL ? 'flex-row-reverse' : ''}`, children: _jsx("div", { className: "flex-1", children: _jsx(Card, { className: `p-6 ${isDark
                                            ? 'bg-slate-800/50 border-slate-700'
                                            : 'bg-white/50 border-blue-100'} backdrop-blur-xl`, children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-12 h-12 rounded-2xl gradient-bg-blue flex items-center justify-center text-white font-bold text-lg", children: step.step }), _jsx("div", { className: `p-3 rounded-2xl ${isDark ? 'bg-blue-900/30' : 'bg-blue-100'}`, children: _jsx(step.icon, { className: `w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}` }) })] }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-xl font-bold mb-2 text-slate-900 dark:text-slate-100", children: step.title }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-3", children: step.description }), _jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(Clock, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { className: "text-blue-600 dark:text-blue-400 font-medium", children: step.duration })] })] })] }) }) }) }, step.step))) })] }) }), _jsx("section", { className: "py-20 px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100", children: ["Why Choose ", _jsx("span", { className: "gradient-text-blue", children: "Delibix" })] }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto", children: "We combine technical expertise with business acumen to deliver solutions that drive real results" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: benefits.map((benefit, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, children: _jsxs(Card, { className: `p-6 text-center h-full ${isDark
                                        ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50'
                                        : 'bg-white/50 border-blue-100 hover:bg-blue-50/50'} transition-all duration-300 hover:shadow-lg backdrop-blur-xl`, children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${isDark ? 'bg-blue-900/30' : 'bg-blue-100'}`, children: _jsx(benefit.icon, { className: `w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}` }) }), _jsx("h3", { className: "text-xl font-bold mb-3 text-slate-900 dark:text-slate-100", children: benefit.title }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: benefit.description })] }) }, index))) })] }) }), _jsx("section", { className: "py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-xl mb-8 text-blue-100", children: "Let's discuss your project and create a custom solution that drives growth and innovation." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", variant: "secondary", className: "px-8 py-6 text-lg rounded-2xl bg-white text-blue-600 hover:bg-blue-50", onClick: () => handleGetQuote('consultation'), children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "Start Your Project"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "px-8 py-6 text-lg rounded-2xl border-white text-white hover:bg-white/10", onClick: () => window.open('http://wa.me/6285770024933', '_blank'), children: [_jsx(Phone, { className: "w-5 h-5 mr-2" }), "Call Us Now"] })] }), _jsxs("div", { className: "flex items-center justify-center gap-8 mt-12 text-blue-100", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-5 h-5" }), _jsx("span", { children: "Free Consultation" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-5 h-5" }), _jsx("span", { children: "No Commitment" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-5 h-5" }), _jsx("span", { children: "Expert Advice" })] })] })] }) }) })] }));
}
// Missing import that was used but not imported
import { Grid3X3 } from "lucide-react";
//# sourceMappingURL=ServicesPage.js.map