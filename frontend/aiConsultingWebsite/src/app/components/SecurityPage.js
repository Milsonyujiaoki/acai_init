"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Shield, Lock, Key, Server, Eye, FileCheck, Users, Globe, Zap, AlertTriangle, CheckCircle, Award, Clock, Mail, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
export function SecurityPage({ navigate }) {
    const [activeTab, setActiveTab] = useState('overview');
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    const securityFeatures = [
        {
            title: 'End-to-End Encryption',
            description: 'All data is encrypted using AES-256 encryption both in transit and at rest',
            icon: Lock,
            level: 'Advanced',
            color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
        },
        {
            title: 'Multi-Factor Authentication',
            description: 'Enhanced security with TOTP, SMS, and hardware key support',
            icon: Key,
            level: 'Standard',
            color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
        },
        {
            title: 'Zero Trust Architecture',
            description: 'Network security based on never trust, always verify principle',
            icon: Shield,
            level: 'Enterprise',
            color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
        },
        {
            title: 'Regular Security Audits',
            description: 'Third-party penetration testing and vulnerability assessments',
            icon: FileCheck,
            level: 'Ongoing',
            color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
        },
        {
            title: 'Secure Infrastructure',
            description: 'Cloud infrastructure with enterprise-grade security controls',
            icon: Server,
            level: 'Advanced',
            color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
        },
        {
            title: 'Privacy by Design',
            description: 'Data minimization and privacy-first approach to system design',
            icon: Eye,
            level: 'Core',
            color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300'
        }
    ];
    const complianceStandards = [
        {
            name: 'SOC 2 Type II',
            description: 'Service Organization Control 2 compliance for security and availability',
            status: 'Certified',
            icon: Award,
            progress: 100
        },
        {
            name: 'ISO 27001',
            description: 'Information Security Management System certification',
            status: 'In Progress',
            icon: Shield,
            progress: 85
        },
        {
            name: 'GDPR',
            description: 'General Data Protection Regulation compliance',
            status: 'Compliant',
            icon: Globe,
            progress: 100
        },
        {
            name: 'CCPA',
            description: 'California Consumer Privacy Act compliance',
            status: 'Compliant',
            icon: FileCheck,
            progress: 100
        }
    ];
    const securityMetrics = [
        { label: 'Uptime SLA', value: '99.9%', icon: Zap },
        { label: 'Security Incidents (2024)', value: '0', icon: Shield },
        { label: 'Average Response Time', value: '<2hrs', icon: Clock },
        { label: 'Data Breach History', value: 'None', icon: CheckCircle }
    ];
    return (_jsxs("div", { className: "min-h-screen", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => (_jsx(motion.div, { className: "absolute text-blue-500", style: {
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }, animate: {
                                        scale: [0.5, 1, 0.5],
                                        opacity: [0, 0.3, 0],
                                        rotate: [0, 180, 360]
                                    }, transition: {
                                        duration: 8,
                                        repeat: Infinity,
                                        delay: i * 0.5
                                    }, children: i % 4 === 0 ? _jsx(Shield, { className: "w-8 h-8" }) :
                                        i % 4 === 1 ? _jsx(Lock, { className: "w-8 h-8" }) :
                                            i % 4 === 2 ? _jsx(Key, { className: "w-8 h-8" }) :
                                                _jsx(Server, { className: "w-8 h-8" }) }, i))) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Shield, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Enterprise Security & Trust" }), _jsx(Lock, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Security & ", _jsx("span", { className: "gradient-text-blue", children: "Trust" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Your security is our top priority. Learn about our comprehensive security measures, compliance standards, and commitment to protecting your data." })] }), _jsx(motion.div, { className: "flex flex-wrap justify-center gap-8 pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [
                                        { icon: Lock, text: 'End-to-end encryption' },
                                        { icon: Key, text: 'Multi-factor auth' },
                                        { icon: Award, text: 'SOC 2 certified' },
                                        { icon: CheckCircle, text: 'Zero incidents' }
                                    ].map((item, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(item.icon, { className: "w-5 h-5 text-blue-500" }), _jsx("span", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: item.text })] }, index))) }), _jsxs(motion.div, { className: "pt-8 flex flex-col sm:flex-row gap-4 justify-center", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsxs(Button, { onClick: () => setActiveTab('measures'), className: "h-14 px-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg", children: [_jsx(Shield, { className: "w-5 h-5 mr-2" }), "View Security Measures"] }), _jsxs(Button, { onClick: () => navigate('privacy-policy'), variant: "outline", className: "h-14 px-8 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: [_jsx(ArrowRight, { className: "w-5 h-5 mr-2" }), "Privacy Policy"] })] })] }) })] }), _jsx("section", { className: "px-6 py-20", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Security at a Glance" }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: "Key metrics demonstrating our commitment to security and reliability" })] }), _jsx("div", { className: "grid md:grid-cols-4 gap-6 mb-16", children: securityMetrics.map((metric, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, children: _jsx(Card, { className: "glass text-center card-hover", children: _jsxs(CardContent, { className: "p-6", children: [_jsx(metric.icon, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" }), _jsx("div", { className: "text-3xl font-bold gradient-text-blue mb-2", children: metric.value }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: metric.label })] }) }) }, metric.label))) })] }) }), _jsx("section", { className: "px-6 pb-20", children: _jsx("div", { className: "max-w-6xl mx-auto", children: _jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "space-y-8", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [_jsx(TabsTrigger, { value: "overview", children: "Overview" }), _jsx(TabsTrigger, { value: "measures", children: "Security Measures" }), _jsx(TabsTrigger, { value: "compliance", children: "Compliance" }), _jsx(TabsTrigger, { value: "incident-response", children: "Incident Response" })] }), _jsx(TabsContent, { value: "overview", className: "space-y-8", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: _jsx(Card, { className: "glass", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6", children: "Our Security Philosophy" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg", children: "At Delibix, security isn't an afterthought\u2014it's built into everything we do. We employ a defense-in-depth strategy with multiple layers of protection to ensure your data and AI systems remain secure." }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center p-6 rounded-xl glass-secondary", children: [_jsx(Shield, { className: "w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "Proactive Security" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Continuous monitoring and threat detection to prevent security incidents before they occur" })] }), _jsxs("div", { className: "text-center p-6 rounded-xl glass-secondary", children: [_jsx(Users, { className: "w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "Human-Centered" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Security awareness training and processes that empower our team to be security champions" })] }), _jsxs("div", { className: "text-center p-6 rounded-xl glass-secondary", children: [_jsx(CheckCircle, { className: "w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "Transparent" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Open communication about our security practices and any incidents that may occur" })] })] })] }) }) }) }), _jsx(TabsContent, { value: "measures", className: "space-y-8", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: securityFeatures.map((feature, index) => (_jsx(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, children: _jsx(Card, { className: "glass card-hover h-full", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-start gap-4 mb-4", children: [_jsx("div", { className: "w-12 h-12 rounded-xl gradient-bg-blue flex items-center justify-center", children: _jsx(feature.icon, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-slate-100", children: feature.title }), _jsx(Badge, { className: feature.color, children: feature.level })] }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 leading-relaxed", children: feature.description })] })] }) }) }) }, feature.title))) }) }) }), _jsx(TabsContent, { value: "compliance", className: "space-y-8", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Compliance & Certifications" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: "We maintain compliance with industry standards and regulations to ensure the highest level of security and trust." })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: complianceStandards.map((standard, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, children: _jsx(Card, { className: "glass", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-start gap-4 mb-4", children: [_jsx("div", { className: "w-12 h-12 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center", children: _jsx(standard.icon, { className: "w-6 h-6" }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-slate-100", children: standard.name }), _jsx(Badge, { className: standard.status === 'Certified' || standard.status === 'Compliant'
                                                                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                                                                        : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300', children: standard.status })] }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4", children: standard.description }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-slate-600 dark:text-slate-400", children: "Progress" }), _jsxs("span", { className: "text-slate-900 dark:text-slate-100 font-medium", children: [standard.progress, "%"] })] }), _jsx(Progress, { value: standard.progress, className: "h-2" })] })] })] }) }) }) }, standard.name))) })] }) }), _jsx(TabsContent, { value: "incident-response", className: "space-y-8", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: _jsx(Card, { className: "glass", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6", children: "Incident Response Plan" }), _jsxs("div", { className: "space-y-8", children: [_jsx("div", { className: "grid md:grid-cols-4 gap-6", children: [
                                                                { step: '1', title: 'Detection', description: 'Automated monitoring systems detect potential security incidents', time: '< 5 min' },
                                                                { step: '2', title: 'Assessment', description: 'Security team evaluates threat level and impact', time: '< 30 min' },
                                                                { step: '3', title: 'Response', description: 'Immediate containment and mitigation actions', time: '< 2 hrs' },
                                                                { step: '4', title: 'Recovery', description: 'System restoration and post-incident analysis', time: '< 24 hrs' }
                                                            ].map((phase, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-12 h-12 rounded-full gradient-bg-blue text-white font-bold flex items-center justify-center mx-auto mb-3", children: phase.step }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: phase.title }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: phase.description }), _jsx(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", children: phase.time })] }, phase.step))) }), _jsx("div", { className: "bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx(AlertTriangle, { className: "w-6 h-6 text-orange-600 dark:text-orange-400 mt-1" }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2", children: "Report a Security Issue" }), _jsx("p", { className: "text-orange-800 dark:text-orange-200 mb-4", children: "If you discover a security vulnerability, please report it immediately to our security team." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [_jsxs(Button, { onClick: () => navigate('contact'), className: "bg-orange-600 text-white hover:bg-orange-700", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "security@delibix.com"] }), _jsxs("p", { className: "text-sm text-orange-700 dark:text-orange-300 flex items-center", children: [_jsx(Clock, { className: "w-4 h-4 mr-1" }), "24/7 Response Team"] })] })] })] }) })] })] }) }) }) })] }) }) }), _jsx("section", { className: "px-6 pb-20", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx(Card, { className: "glass", children: _jsxs(CardContent, { className: "p-8 text-center", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Security Questions or Concerns?" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto", children: "Our security team is available 24/7 to address any security-related questions or concerns." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('contact'), className: "gradient-bg-blue text-white hover:opacity-90", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Contact Security Team"] }), _jsxs(Button, { onClick: () => navigate('support'), variant: "outline", className: "border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: [_jsx(Phone, { className: "w-4 h-4 mr-2" }), "Emergency Support"] })] }), _jsx("div", { className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700", children: _jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["Email: ", _jsx("span", { className: "font-medium text-blue-600 dark:text-blue-400", children: "security@delibix.com" }), " \u2022 Emergency: ", _jsx("span", { className: "font-medium text-red-600 dark:text-red-400", children: "+62-XXX-XXXX-XXXX" })] }) })] }) }) }) })] }));
}
//# sourceMappingURL=SecurityPage.js.map