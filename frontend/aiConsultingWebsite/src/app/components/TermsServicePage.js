"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { FileText, Scale, AlertTriangle, Shield, CreditCard, Users, Globe, Calendar, CheckCircle, XCircle, Info, Mail, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
export function TermsServicePage({ navigate }) {
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
    const termsSections = [
        {
            id: 'acceptance',
            title: 'Acceptance of Terms',
            icon: CheckCircle,
            content: {
                description: 'By accessing and using Delibix services, you agree to be bound by these Terms of Service and all applicable laws and regulations.',
                points: [
                    'These terms constitute a legally binding agreement between you and Delibix',
                    'You must be at least 18 years old to use our services',
                    'If you disagree with any part of these terms, you may not use our services',
                    'We may update these terms periodically with notice to users'
                ]
            }
        },
        {
            id: 'services',
            title: 'Description of Services',
            icon: FileText,
            content: {
                description: 'Delibix provides AI consulting, implementation, and related technology services to businesses and organizations.',
                points: [
                    'AI strategy development and consulting',
                    'Custom AI model development and deployment',
                    'AI training and educational services',
                    'Technical support and maintenance for AI systems',
                    'Data analysis and insights generation',
                    'AI readiness assessments and audits'
                ]
            }
        },
        {
            id: 'user-responsibilities',
            title: 'User Responsibilities',
            icon: Users,
            content: {
                description: 'Users are responsible for their conduct and compliance with applicable laws while using our services.',
                points: [
                    'Provide accurate and complete information',
                    'Maintain the confidentiality of account credentials',
                    'Use services in compliance with all applicable laws',
                    'Respect intellectual property rights',
                    'Not engage in harmful or disruptive activities',
                    'Report security vulnerabilities or abuse'
                ]
            }
        },
        {
            id: 'payment-billing',
            title: 'Payment & Billing',
            icon: CreditCard,
            content: {
                description: 'Payment terms and billing procedures for Delibix services.',
                points: [
                    'Payments are due according to agreed terms in service contracts',
                    'Late payments may incur interest charges and service suspension',
                    'All fees are non-refundable unless otherwise specified',
                    'Price changes require 30 days advance notice',
                    'Disputed charges must be reported within 60 days',
                    'Automatic billing applies to recurring services'
                ]
            }
        },
        {
            id: 'intellectual-property',
            title: 'Intellectual Property',
            icon: Shield,
            content: {
                description: 'Rights and restrictions regarding intellectual property and proprietary information.',
                points: [
                    'Delibix retains ownership of all proprietary methodologies and frameworks',
                    'Custom AI models developed for clients remain client property',
                    'Client data and information remain client property',
                    'Licensed software and tools are subject to third-party terms',
                    'Improvements to our general methodologies remain our property',
                    'Client may not reverse engineer or copy our proprietary systems'
                ]
            }
        },
        {
            id: 'confidentiality',
            title: 'Confidentiality & Data Protection',
            icon: Scale,
            content: {
                description: 'Our commitment to protecting confidential information and data security.',
                points: [
                    'All client data is treated as confidential information',
                    'Non-disclosure agreements govern sensitive information sharing',
                    'Data is processed according to our Privacy Policy',
                    'Security measures protect against unauthorized access',
                    'Data retention policies ensure appropriate disposal',
                    'Breach notification procedures are in place'
                ]
            }
        },
        {
            id: 'limitations',
            title: 'Limitations & Disclaimers',
            icon: AlertTriangle,
            content: {
                description: 'Important limitations on liability and service warranties.',
                points: [
                    'Services are provided "as is" without warranties',
                    'We do not guarantee specific outcomes or results',
                    'Liability is limited to the amount paid for services',
                    'We are not liable for indirect or consequential damages',
                    'Force majeure events excuse performance delays',
                    'Some jurisdictions may not allow certain limitations'
                ]
            }
        },
        {
            id: 'termination',
            title: 'Termination',
            icon: XCircle,
            content: {
                description: 'Conditions under which services may be terminated by either party.',
                points: [
                    'Either party may terminate with written notice as specified in contracts',
                    'Immediate termination for material breach or non-payment',
                    'Data return and destruction procedures upon termination',
                    'Survival of certain terms after termination',
                    'No refunds for prepaid services after termination',
                    'Transition assistance may be available for a fee'
                ]
            }
        }
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
                                    }, children: i % 4 === 0 ? _jsx(Scale, { className: "w-8 h-8" }) :
                                        i % 4 === 1 ? _jsx(FileText, { className: "w-8 h-8" }) :
                                            i % 4 === 2 ? _jsx(Shield, { className: "w-8 h-8" }) :
                                                _jsx(Users, { className: "w-8 h-8" }) }, i))) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Scale, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Legal Terms & Conditions" }), _jsx(FileText, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["Terms of ", _jsx("span", { className: "gradient-text-blue", children: "Service" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Please read these terms carefully. They govern your use of Delibix services and establish the legal framework for our professional relationship." })] }), _jsx(motion.div, { className: "flex flex-wrap justify-center gap-8 pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [
                                        { icon: Scale, text: 'Legally binding' },
                                        { icon: Globe, text: 'Global compliance' },
                                        { icon: Shield, text: 'Client protection' },
                                        { icon: Users, text: 'Fair terms' }
                                    ].map((item, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(item.icon, { className: "w-5 h-5 text-blue-500" }), _jsx("span", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: item.text })] }, index))) }), _jsxs(motion.div, { className: "pt-8 flex flex-col sm:flex-row gap-4 justify-center", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsxs(Button, { onClick: () => navigate('contact'), className: "h-14 px-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Contact Legal Team"] }), _jsxs(Button, { onClick: () => navigate('privacy-policy'), variant: "outline", className: "h-14 px-8 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: [_jsx(ArrowRight, { className: "w-5 h-5 mr-2" }), "View Privacy Policy"] })] })] }) })] }), _jsx("section", { className: "px-6 py-20", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx(Card, { className: "glass mb-12", children: _jsxs(CardContent, { className: "p-8", children: [_jsxs("div", { className: "flex items-start gap-4 mb-6", children: [_jsx("div", { className: "w-12 h-12 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center", children: _jsx(Info, { className: "w-6 h-6" }) }), _jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2", children: "Important Information" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 leading-relaxed", children: "These Terms of Service govern your relationship with Delibix and our AI consulting services. Please review them carefully before using our services." })] })] }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center p-4 rounded-xl glass-secondary", children: [_jsx(Calendar, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "Effective Date" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "December 15, 2024" }), _jsx(Badge, { className: "mt-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: "Version 2.3" })] }), _jsxs("div", { className: "text-center p-4 rounded-xl glass-secondary", children: [_jsx(Globe, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "Jurisdiction" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Indonesia & International" }), _jsx(Badge, { className: "mt-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", children: "Global Services" })] }), _jsxs("div", { className: "text-center p-4 rounded-xl glass-secondary", children: [_jsx(Scale, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "Agreement Type" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Legally Binding Contract" }), _jsx(Badge, { className: "mt-2 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", children: "Enforceable" })] })] })] }) }) }) }), _jsx("section", { className: "px-6 pb-20", children: _jsx("div", { className: "max-w-6xl mx-auto", children: _jsx("div", { className: "space-y-12", children: termsSections.map((section, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, children: _jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-12 h-12 rounded-xl gradient-bg-blue flex items-center justify-center", children: _jsx(section.icon, { className: "w-6 h-6 text-white" }) }), _jsx(CardTitle, { className: "text-2xl text-slate-900 dark:text-slate-100", children: section.title })] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg", children: section.content.description }), _jsx("div", { className: "grid gap-4", children: section.content.points.map((point, pointIndex) => (_jsxs("div", { className: "flex items-start gap-3 p-4 rounded-xl glass-secondary", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" }), _jsx("span", { className: "text-slate-700 dark:text-slate-300 leading-relaxed", children: point })] }, pointIndex))) })] })] }) }, section.id))) }) }) }), _jsx("section", { className: "px-6 pb-20", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx(Card, { className: "glass border-orange-200 dark:border-orange-800", children: _jsx(CardContent, { className: "p-8", children: _jsxs("div", { className: "flex items-start gap-4 mb-6", children: [_jsx("div", { className: "w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 flex items-center justify-center", children: _jsx(AlertTriangle, { className: "w-6 h-6" }) }), _jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2", children: "Important Legal Notices" }), _jsxs("div", { className: "space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed", children: [_jsxs("p", { children: [_jsx("strong", { children: "Changes to Terms:" }), " We may modify these terms at any time. Material changes will be communicated with 30 days advance notice."] }), _jsxs("p", { children: [_jsx("strong", { children: "Severability:" }), " If any provision of these terms is found unenforceable, the remaining provisions will continue in full force."] }), _jsxs("p", { children: [_jsx("strong", { children: "Governing Law:" }), " These terms are governed by Indonesian law and international commercial law principles."] }), _jsxs("p", { children: [_jsx("strong", { children: "Dispute Resolution:" }), " Disputes will be resolved through binding arbitration in Yogyakarta, Indonesia."] })] })] })] }) }) }) }) }), _jsx("section", { className: "px-6 pb-20", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx(Card, { className: "glass", children: _jsxs(CardContent, { className: "p-8 text-center", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Questions About These Terms?" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto", children: "Our legal team is available to help clarify any questions about these terms of service." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('contact'), className: "gradient-bg-blue text-white hover:opacity-90", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Contact Legal Team"] }), _jsxs(Button, { onClick: () => navigate('support'), variant: "outline", className: "border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: [_jsx(Phone, { className: "w-4 h-4 mr-2" }), "Get Support"] })] }), _jsx("div", { className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700", children: _jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["Email us directly at: ", _jsx("span", { className: "font-medium text-blue-600 dark:text-blue-400", children: "legal@delibix.com" })] }) })] }) }) }) })] }));
}
//# sourceMappingURL=TermsServicePage.js.map