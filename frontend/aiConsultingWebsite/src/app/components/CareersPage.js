"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Users, MapPin, Calendar, Briefcase, ArrowRight, Search, Filter, Star, CheckCircle, Heart, Coffee, Car, Zap, Shield, TrendingUp, Award, Globe, Building2, Clock, DollarSign, Laptop, Wifi, BookOpen, Target, Lightbulb, Rocket, Brain, Code, Palette, HeadphonesIcon, MessageSquare, Mail, Phone } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function CareersPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const { scrollY } = useScroll();
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [selectedLocation, setSelectedLocation] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    // Parallax effects
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);
    // Job Openings Data
    const jobOpenings = [
        {
            id: 'senior-ai-engineer',
            title: 'Senior AI Engineer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            experience: 'Senior',
            salary: '$80,000 - $120,000',
            description: 'Lead the development of cutting-edge AI solutions and machine learning models that power our digital consulting platform.',
            requirements: [
                '5+ years experience in AI/ML development',
                'Strong background in Python, TensorFlow, PyTorch',
                'Experience with large language models and neural networks',
                'PhD in Computer Science, AI, or related field preferred'
            ],
            responsibilities: [
                'Design and implement advanced AI algorithms',
                'Lead machine learning research initiatives',
                'Collaborate with cross-functional teams',
                'Mentor junior engineers and data scientists'
            ],
            benefits: ['Remote work', 'Health insurance', 'Stock options', 'Learning budget'],
            featured: true,
            urgent: false,
            postedDays: 3
        },
        {
            id: 'fullstack-developer',
            title: 'Full-Stack Developer',
            department: 'Engineering',
            location: 'Yogyakarta',
            type: 'Full-time',
            experience: 'Mid-level',
            salary: '$50,000 - $70,000',
            description: 'Build and maintain our web applications using modern technologies like React, Node.js, and cloud infrastructure.',
            requirements: [
                '3+ years full-stack development experience',
                'Proficiency in React, Node.js, TypeScript',
                'Experience with cloud platforms (AWS, GCP)',
                'Strong understanding of web architecture'
            ],
            responsibilities: [
                'Develop responsive web applications',
                'Build and maintain APIs and databases',
                'Implement security best practices',
                'Collaborate with designers and product managers'
            ],
            benefits: ['Hybrid work', 'Health insurance', 'Performance bonus', 'Tech stipend'],
            featured: true,
            urgent: true,
            postedDays: 1
        },
        {
            id: 'digital-marketing-specialist',
            title: 'Digital Marketing Specialist',
            department: 'Marketing',
            location: 'Remote',
            type: 'Full-time',
            experience: 'Mid-level',
            salary: '$45,000 - $65,000',
            description: 'Drive our digital marketing efforts across multiple channels to increase brand awareness and generate qualified leads.',
            requirements: [
                '3+ years digital marketing experience',
                'Expertise in SEO, SEM, social media marketing',
                'Experience with analytics tools (Google Analytics, etc.)',
                'Strong content creation and copywriting skills'
            ],
            responsibilities: [
                'Develop and execute marketing campaigns',
                'Optimize SEO and manage paid advertising',
                'Create engaging content for multiple platforms',
                'Analyze campaign performance and ROI'
            ],
            benefits: ['Remote work', 'Health insurance', 'Marketing budget', 'Conference tickets'],
            featured: false,
            urgent: false,
            postedDays: 7
        },
        {
            id: 'ux-ui-designer',
            title: 'UX/UI Designer',
            department: 'Design',
            location: 'Yogyakarta',
            type: 'Full-time',
            experience: 'Mid-level',
            salary: '$40,000 - $60,000',
            description: 'Create intuitive and beautiful user experiences for our AI-powered consulting platform and client applications.',
            requirements: [
                '3+ years UX/UI design experience',
                'Proficiency in Figma, Adobe Creative Suite',
                'Strong portfolio showcasing web/mobile design',
                'Understanding of design systems and accessibility'
            ],
            responsibilities: [
                'Design user interfaces and experiences',
                'Conduct user research and usability testing',
                'Create wireframes, prototypes, and design systems',
                'Collaborate with developers and product managers'
            ],
            benefits: ['Hybrid work', 'Health insurance', 'Design tools budget', 'Creative time'],
            featured: true,
            urgent: false,
            postedDays: 5
        },
        {
            id: 'business-development-manager',
            title: 'Business Development Manager',
            department: 'Sales',
            location: 'Remote',
            type: 'Full-time',
            experience: 'Senior',
            salary: '$60,000 - $90,000',
            description: 'Drive business growth by identifying new opportunities, building partnerships, and expanding our client base.',
            requirements: [
                '5+ years business development experience',
                'Strong network in digital consulting or tech industry',
                'Excellent communication and negotiation skills',
                'Experience with CRM systems and sales processes'
            ],
            responsibilities: [
                'Identify and pursue new business opportunities',
                'Build and maintain strategic partnerships',
                'Develop proposals and close deals',
                'Represent company at industry events'
            ],
            benefits: ['Remote work', 'Commission structure', 'Travel allowance', 'Networking budget'],
            featured: false,
            urgent: true,
            postedDays: 2
        },
        {
            id: 'data-scientist',
            title: 'Data Scientist',
            department: 'Data',
            location: 'Remote',
            type: 'Contract',
            experience: 'Senior',
            salary: '$70,000 - $100,000',
            description: 'Extract insights from large datasets to inform business decisions and improve our AI models and consulting services.',
            requirements: [
                '4+ years data science experience',
                'Strong skills in Python, R, SQL',
                'Experience with machine learning and statistical analysis',
                'Knowledge of data visualization tools'
            ],
            responsibilities: [
                'Analyze complex datasets for business insights',
                'Build predictive models and algorithms',
                'Create data visualizations and reports',
                'Collaborate with AI team on model improvement'
            ],
            benefits: ['Remote work', 'Flexible hours', 'Learning budget', 'Conference attendance'],
            featured: false,
            urgent: false,
            postedDays: 10
        }
    ];
    // Filter options
    const departments = [
        { id: 'all', name: 'All Departments', count: jobOpenings.length },
        { id: 'Engineering', name: 'Engineering', count: jobOpenings.filter(job => job.department === 'Engineering').length },
        { id: 'Marketing', name: 'Marketing', count: jobOpenings.filter(job => job.department === 'Marketing').length },
        { id: 'Design', name: 'Design', count: jobOpenings.filter(job => job.department === 'Design').length },
        { id: 'Sales', name: 'Sales', count: jobOpenings.filter(job => job.department === 'Sales').length },
        { id: 'Data', name: 'Data', count: jobOpenings.filter(job => job.department === 'Data').length }
    ];
    const locations = [
        { id: 'all', name: 'All Locations', count: jobOpenings.length },
        { id: 'Remote', name: 'Remote', count: jobOpenings.filter(job => job.location === 'Remote').length },
        { id: 'Yogyakarta', name: 'Yogyakarta', count: jobOpenings.filter(job => job.location === 'Yogyakarta').length },
        { id: 'Hybrid', name: 'Hybrid', count: jobOpenings.filter(job => job.location === 'Hybrid').length }
    ];
    const jobTypes = [
        { id: 'all', name: 'All Types', count: jobOpenings.length },
        { id: 'Full-time', name: 'Full-time', count: jobOpenings.filter(job => job.type === 'Full-time').length },
        { id: 'Part-time', name: 'Part-time', count: jobOpenings.filter(job => job.type === 'Part-time').length },
        { id: 'Contract', name: 'Contract', count: jobOpenings.filter(job => job.type === 'Contract').length }
    ];
    // Company Benefits
    const companyBenefits = [
        {
            title: 'Flexible Work Environment',
            description: 'Work remotely, in our Yogyakarta office, or choose a hybrid model that works best for you.',
            icon: Laptop,
            color: 'blue'
        },
        {
            title: 'Professional Development',
            description: 'Annual learning budget, conference tickets, and support for certifications and courses.',
            icon: BookOpen,
            color: 'green'
        },
        {
            title: 'Competitive Compensation',
            description: 'Competitive salaries, performance bonuses, and equity options for full-time employees.',
            icon: DollarSign,
            color: 'purple'
        },
        {
            title: 'Health & Wellness',
            description: 'Comprehensive health insurance, mental health support, and wellness allowances.',
            icon: Heart,
            color: 'red'
        },
        {
            title: 'Innovation Time',
            description: '20% time for personal projects, research, and exploring new technologies and ideas.',
            icon: Lightbulb,
            color: 'orange'
        },
        {
            title: 'Global Impact',
            description: 'Work on projects that democratize AI and help businesses worldwide transform digitally.',
            icon: Globe,
            color: 'teal'
        }
    ];
    // Company Values
    const companyValues = [
        {
            title: 'Innovation First',
            description: 'We push the boundaries of what is possible with AI and technology.',
            icon: Rocket
        },
        {
            title: 'Transparency',
            description: 'Open communication, honest feedback, and clear decision-making processes.',
            icon: Shield
        },
        {
            title: 'Growth Mindset',
            description: 'Continuous learning, experimenting, and improving both personally and professionally.',
            icon: TrendingUp
        },
        {
            title: 'Global Perspective',
            description: 'Serving clients worldwide while maintaining our Indonesian roots and values.',
            icon: Globe
        }
    ];
    // Filter jobs based on selected criteria
    const filteredJobs = jobOpenings.filter(job => {
        const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
        const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
        const matchesType = selectedType === 'all' || job.type === selectedType;
        const matchesSearch = searchQuery === '' ||
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.department.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesDepartment && matchesLocation && matchesType && matchesSearch;
    });
    // Get department icon
    const getDepartmentIcon = (department) => {
        switch (department) {
            case 'Engineering': return Code;
            case 'Marketing': return TrendingUp;
            case 'Design': return Palette;
            case 'Sales': return Target;
            case 'Data': return Brain;
            default: return Briefcase;
        }
    };
    // Get experience level color
    const getExperienceColor = (experience) => {
        switch (experience) {
            case 'Entry-level': return 'bg-green-500/10 text-green-600 border-green-500/20';
            case 'Mid-level': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
            case 'Senior': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
            default: return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
        }
    };
    // Get benefit color
    const getBenefitColor = (color) => {
        switch (color) {
            case 'blue': return 'from-blue-500 to-blue-600';
            case 'green': return 'from-green-500 to-green-600';
            case 'purple': return 'from-purple-500 to-purple-600';
            case 'red': return 'from-red-500 to-red-600';
            case 'orange': return 'from-orange-500 to-orange-600';
            case 'teal': return 'from-teal-500 to-teal-600';
            default: return 'from-blue-500 to-blue-600';
        }
    };
    return (_jsxs("div", { className: `min-h-screen bg-background ${isRTL ? 'rtl' : ''}`, children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30", style: { y: heroY, opacity: heroOpacity } }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [Code, Palette, Brain, Target, BookOpen, Rocket];
                                    const IconComponent = icons[i % icons.length];
                                    return (_jsx(motion.div, { className: "absolute", style: {
                                            left: `${20 + (i % 4) * 20}%`,
                                            top: `${20 + Math.floor(i / 4) * 25}%`,
                                        }, animate: {
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, -5, 0],
                                            opacity: [0.3, 0.7, 0.3]
                                        }, transition: {
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                        }, children: _jsx(IconComponent, { className: "w-16 h-16 text-blue-500" }) }, i));
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: `inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Users, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsxs("span", { className: `text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: [jobOpenings.length, " Open Positions"] }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: `text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Join Our ", _jsx("span", { className: "gradient-text-blue", children: "Mission" })] }), _jsx(motion.p, { className: `text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Help us democratize AI and transform businesses worldwide. Join our team of innovators, creators, and problem-solvers working on the future of digital consulting." })] }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [_jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: jobOpenings.length }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: "Open Positions" })] }), _jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: "5" }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: "Departments" })] }), _jsxs("div", { className: `glass-heavy rounded-2xl p-6 text-center ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `text-3xl font-bold mb-2 gradient-text-blue`, children: "Remote" }), _jsx("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: "Work Options" })] })] }), _jsxs(motion.div, { className: `flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`, initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => {
                                                const element = document.getElementById('open-positions');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: _jsxs("span", { className: `flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["View Open Positions", _jsx(ArrowRight, { className: `w-5 h-5 ${isRTL ? 'rotate-180' : ''}` })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: `px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl ${isDark
                                                ? 'border-blue-400/30 text-blue-300 hover:bg-blue-400/10'
                                                : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`, onClick: () => {
                                                const element = document.getElementById('company-culture');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }, children: "Learn About Our Culture" })] })] }) })] }), _jsx("section", { id: "company-culture", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Why ", _jsx("span", { className: "gradient-text-blue", children: "Delibix" }), "?"] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "We offer more than just a job - we provide an environment where you can grow, innovate, and make a meaningful impact on the future of AI." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: companyBenefits.map((benefit, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${getBenefitColor(benefit.color)} flex items-center justify-center`, children: _jsx(benefit.icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: `text-xl font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: benefit.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: benefit.description })] }, benefit.title))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Our ", _jsx("span", { className: "gradient-text-blue", children: "Values" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "The principles that guide everything we do and the foundation of our company culture." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: companyValues.map((value, index) => (_jsx(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -30 : 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, className: `glass-heavy rounded-2xl p-8 group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'}`, children: _jsxs("div", { className: `flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `w-16 h-16 rounded-2xl gradient-bg-blue flex items-center justify-center flex-shrink-0`, children: _jsx(value.icon, { className: "w-8 h-8 text-white" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: `text-xl font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: value.title }), _jsx("p", { className: `${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: value.description })] })] }) }, value.title))) })] }) }), _jsx("section", { id: "open-positions", className: "py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsxs("h2", { className: `text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: ["Open ", _jsx("span", { className: "gradient-text-blue", children: "Positions" })] }), _jsx("p", { className: `text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`, children: "Find your perfect role and join our mission to democratize AI and transform businesses worldwide." })] }), _jsxs("div", { className: "mb-12 space-y-6", children: [_jsx("div", { className: "max-w-2xl mx-auto", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: `absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}` }), _jsx(Input, { type: "text", placeholder: "Search positions...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: `pl-12 pr-4 py-6 text-lg rounded-2xl ${isDark
                                                    ? 'glass-heavy border-blue-400/20 bg-slate-800/30 text-slate-100 placeholder:text-slate-400'
                                                    : 'glass-heavy border-blue-200/50 bg-white/30 text-slate-900 placeholder:text-slate-500'} focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300` })] }) }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsx("div", { className: "flex flex-wrap gap-2", children: departments.map((dept) => (_jsxs(motion.button, { onClick: () => setSelectedDepartment(dept.id), className: `flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${selectedDepartment === dept.id
                                                    ? 'gradient-bg-blue text-white shadow-lg'
                                                    : isDark
                                                        ? 'glass-secondary border border-blue-400/20 text-slate-300 hover:bg-blue-400/10'
                                                        : 'glass-secondary border border-blue-200/50 text-slate-600 hover:bg-blue-50'}`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [_jsx("span", { children: dept.name }), _jsx("span", { className: `px-2 py-1 rounded-full text-xs ${selectedDepartment === dept.id
                                                            ? 'bg-white/20 text-white'
                                                            : isDark
                                                                ? 'bg-blue-500/20 text-blue-300'
                                                                : 'bg-blue-100 text-blue-600'}`, children: dept.count })] }, dept.id))) }), _jsx("div", { className: "flex flex-wrap gap-2", children: locations.map((location) => (_jsxs(motion.button, { onClick: () => setSelectedLocation(location.id), className: `flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${selectedLocation === location.id
                                                    ? 'gradient-bg-blue text-white shadow-lg'
                                                    : isDark
                                                        ? 'glass-secondary border border-blue-400/20 text-slate-300 hover:bg-blue-400/10'
                                                        : 'glass-secondary border border-blue-200/50 text-slate-600 hover:bg-blue-50'}`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [_jsx(MapPin, { className: "w-4 h-4" }), _jsx("span", { children: location.name }), _jsx("span", { className: `px-2 py-1 rounded-full text-xs ${selectedLocation === location.id
                                                            ? 'bg-white/20 text-white'
                                                            : isDark
                                                                ? 'bg-blue-500/20 text-blue-300'
                                                                : 'bg-blue-100 text-blue-600'}`, children: location.count })] }, location.id))) }), _jsx("div", { className: "flex flex-wrap gap-2", children: jobTypes.map((type) => (_jsxs(motion.button, { onClick: () => setSelectedType(type.id), className: `flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${selectedType === type.id
                                                    ? 'gradient-bg-blue text-white shadow-lg'
                                                    : isDark
                                                        ? 'glass-secondary border border-blue-400/20 text-slate-300 hover:bg-blue-400/10'
                                                        : 'glass-secondary border border-blue-200/50 text-slate-600 hover:bg-blue-50'}`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [_jsx(Clock, { className: "w-4 h-4" }), _jsx("span", { children: type.name }), _jsx("span", { className: `px-2 py-1 rounded-full text-xs ${selectedType === type.id
                                                            ? 'bg-white/20 text-white'
                                                            : isDark
                                                                ? 'bg-blue-500/20 text-blue-300'
                                                                : 'bg-blue-100 text-blue-600'}`, children: type.count })] }, type.id))) })] })] }), _jsx("div", { className: "space-y-6", children: filteredJobs.map((job, index) => {
                                const DepartmentIcon = getDepartmentIcon(job.department);
                                return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4, delay: index * 0.05 }, className: `glass-heavy rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 ${isDark ? 'border-blue-400/20' : 'border-blue-200/50'} ${job.featured ? 'ring-2 ring-blue-500/50' : ''}`, children: _jsxs("div", { className: "p-8", children: [_jsxs("div", { className: `flex items-start justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: `flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `w-12 h-12 rounded-xl gradient-bg-blue flex items-center justify-center`, children: _jsx(DepartmentIcon, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { children: [_jsx("h3", { className: `text-2xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: job.title }), _jsxs("div", { className: `flex items-center gap-4 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Building2, { className: "w-4 h-4" }), job.department] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(MapPin, { className: "w-4 h-4" }), job.location] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-4 h-4" }), job.type] })] })] })] }), _jsx("p", { className: `text-base mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: job.description }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6", children: [_jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Requirements" }), _jsx("ul", { className: "space-y-2", children: job.requirements.map((req, reqIndex) => (_jsxs("li", { className: `flex items-start gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" }), req] }, reqIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: `text-lg font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Responsibilities" }), _jsx("ul", { className: "space-y-2", children: job.responsibilities.map((resp, respIndex) => (_jsxs("li", { className: `flex items-start gap-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(CheckCircle, { className: "w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" }), resp] }, respIndex))) })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: `text-lg font-semibold mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: "Benefits" }), _jsx("div", { className: "flex flex-wrap gap-2", children: job.benefits.map((benefit, benefitIndex) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: benefit }, benefitIndex))) })] })] }), _jsxs("div", { className: `flex flex-col items-end gap-3 ml-6 ${isRTL ? 'items-start mr-6 ml-0' : ''}`, children: [job.featured && (_jsxs(Badge, { className: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20", children: [_jsx(Star, { className: "w-3 h-3 mr-1" }), "Featured"] })), job.urgent && (_jsxs(Badge, { className: "bg-red-500/10 text-red-600 border-red-500/20", children: [_jsx(Zap, { className: "w-3 h-3 mr-1" }), "Urgent"] })), _jsx(Badge, { className: `border ${getExperienceColor(job.experience)}`, children: job.experience }), _jsxs("div", { className: `text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: [job.postedDays, " days ago"] })] })] }), _jsxs("div", { className: `flex items-center justify-between pt-6 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'} ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("div", { className: `text-lg font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`, children: job.salary }), _jsx(Button, { className: "gradient-bg-blue text-white px-6 py-3 rounded-xl", onClick: () => navigate('contact'), children: _jsxs("span", { className: `flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: ["Apply Now", _jsx(ArrowRight, { className: `w-4 h-4 ${isRTL ? 'rotate-180' : ''}` })] }) })] })] }) }, job.id));
                            }) }), filteredJobs.length === 0 && (_jsxs("div", { className: "text-center py-12", children: [_jsx(Search, { className: `w-16 h-16 mx-auto mb-4 opacity-50 ${isDark ? 'text-blue-400' : 'text-blue-500'}` }), _jsx("p", { className: `text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`, children: "No positions found matching your criteria." })] }))] }) }), _jsx("section", { className: "py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white", children: _jsx("div", { className: "max-w-4xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold", children: ["Ready to ", _jsx("span", { className: "text-blue-200", children: "Make an Impact" }), "?"] }), _jsx("p", { className: "text-xl max-w-3xl mx-auto text-blue-100", children: "Don't see a perfect fit? We're always interested in hearing from talented individuals. Join our mission to democratize AI and shape the future of technology." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { size: "lg", className: "bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg rounded-2xl", onClick: () => navigate('contact'), children: [_jsx(Briefcase, { className: "w-5 h-5 mr-3" }), "Send Us Your Resume"] }), _jsxs(Button, { variant: "outline", size: "lg", className: "border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-2xl", onClick: () => navigate('team'), children: [_jsx(Users, { className: "w-5 h-5 mr-3" }), "Learn About Our Culture"] })] }), _jsxs(motion.div, { className: "pt-12 text-center", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.4 }, children: [_jsx("p", { className: "text-blue-200 mb-4", children: "Have questions about joining our team or want to discuss opportunities?" }), _jsxs("div", { className: "flex items-center justify-center gap-6", children: [_jsx("span", { className: "text-blue-100", children: "careers@delibix.com" }), _jsx("span", { className: "text-blue-100", children: "+62 857 7002 4933" })] })] })] }) }) })] }));
}
//# sourceMappingURL=CareersPage.js.map