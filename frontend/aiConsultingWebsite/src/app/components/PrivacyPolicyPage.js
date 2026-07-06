"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Shield, Lock, Eye, Database, Settings, Phone, Mail, Globe, Calendar, AlertCircle, CheckCircle, FileText, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
export function PrivacyPolicyPage({ navigate }) {
    const [activeSection, setActiveSection] = useState('overview');
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
    const privacySections = [
        {
            id: 'information-collection',
            title: 'Information We Collect',
            icon: Database,
            content: [
                {
                    subtitle: 'Personal Information',
                    description: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us.',
                    details: [
                        'Name, email address, and contact information',
                        'Company name and business information',
                        'Account credentials and preferences',
                        'Communication history and support requests'
                    ]
                },
                {
                    subtitle: 'Usage Information',
                    description: 'We automatically collect information about how you use our services and interact with our platform.',
                    details: [
                        'Device information and IP addresses',
                        'Browser type and operating system',
                        'Pages visited and time spent on our platform',
                        'Features used and interaction patterns'
                    ]
                },
                {
                    subtitle: 'AI Training Data',
                    description: 'With your explicit consent, we may collect data to improve our AI models and services.',
                    details: [
                        'Anonymized interaction data',
                        'Aggregated usage patterns',
                        'Performance metrics and feedback',
                        'Model improvement suggestions'
                    ]
                }
            ]
        },
        {
            id: 'data-usage',
            title: 'How We Use Your Data',
            icon: Settings,
            content: [
                {
                    subtitle: 'Service Provision',
                    description: 'We use your information to provide, maintain, and improve our AI consulting services.',
                    details: [
                        'Deliver personalized AI solutions',
                        'Process transactions and billing',
                        'Provide customer support',
                        'Send service-related communications'
                    ]
                },
                {
                    subtitle: 'AI Model Development',
                    description: 'With appropriate safeguards, we use data to enhance our AI capabilities.',
                    details: [
                        'Improve model accuracy and performance',
                        'Develop new AI features and services',
                        'Conduct research and development',
                        'Enhance user experience and personalization'
                    ]
                },
                {
                    subtitle: 'Business Operations',
                    description: 'We use information for legitimate business purposes and legal compliance.',
                    details: [
                        'Analyze usage trends and patterns',
                        'Prevent fraud and ensure security',
                        'Comply with legal obligations',
                        'Communicate about updates and news'
                    ]
                }
            ]
        },
        {
            id: 'data-sharing',
            title: 'Data Sharing & Disclosure',
            icon: Users,
            content: [
                {
                    subtitle: 'Service Providers',
                    description: 'We share data with trusted third-party service providers who assist in our operations.',
                    details: [
                        'Cloud hosting and infrastructure providers',
                        'Payment processing services',
                        'Analytics and monitoring tools',
                        'Customer support platforms'
                    ]
                },
                {
                    subtitle: 'Legal Requirements',
                    description: 'We may disclose information when required by law or to protect our rights.',
                    details: [
                        'Comply with legal processes and court orders',
                        'Respond to government requests',
                        'Protect against fraud and abuse',
                        'Enforce our terms of service'
                    ]
                },
                {
                    subtitle: 'Business Transfers',
                    description: 'Information may be transferred in connection with business transactions.',
                    details: [
                        'Mergers and acquisitions',
                        'Asset sales or transfers',
                        'Bankruptcy proceedings',
                        'Corporate restructuring'
                    ]
                }
            ]
        },
        {
            id: 'data-protection',
            title: 'Data Protection & Security',
            icon: Lock,
            content: [
                {
                    subtitle: 'Security Measures',
                    description: 'We implement comprehensive security measures to protect your data.',
                    details: [
                        'Industry-standard encryption (AES-256)',
                        'Secure data transmission (TLS 1.3)',
                        'Multi-factor authentication',
                        'Regular security audits and penetration testing'
                    ]
                },
                {
                    subtitle: 'Access Controls',
                    description: 'We maintain strict access controls and data governance policies.',
                    details: [
                        'Role-based access permissions',
                        'Regular access reviews and updates',
                        'Employee privacy training',
                        'Incident response procedures'
                    ]
                },
                {
                    subtitle: 'Data Retention',
                    description: 'We retain data only as long as necessary for business and legal purposes.',
                    details: [
                        'Personal data: 7 years after account closure',
                        'Transaction records: 10 years for compliance',
                        'Analytics data: 3 years in aggregated form',
                        'Support communications: 5 years'
                    ]
                }
            ]
        },
        {
            id: 'user-rights',
            title: 'Your Rights & Choices',
            icon: Eye,
            content: [
                {
                    subtitle: 'Data Access Rights',
                    description: 'You have the right to access and review your personal information.',
                    details: [
                        'Request a copy of your data',
                        'Review data processing activities',
                        'Verify data accuracy',
                        'Understand data sources'
                    ]
                },
                {
                    subtitle: 'Data Control Rights',
                    description: 'You can control how your data is used and processed.',
                    details: [
                        'Correct inaccurate information',
                        'Delete your account and data',
                        'Restrict certain processing activities',
                        'Object to data processing'
                    ]
                },
                {
                    subtitle: 'Communication Preferences',
                    description: 'You can manage your communication preferences and opt-outs.',
                    details: [
                        'Unsubscribe from marketing emails',
                        'Adjust notification settings',
                        'Control data sharing preferences',
                        'Manage cookie settings'
                    ]
                }
            ]
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
                                    }, children: i % 4 === 0 ? _jsx(Shield, { className: "w-8 h-8" }) :
                                        i % 4 === 1 ? _jsx(Lock, { className: "w-8 h-8" }) :
                                            i % 4 === 2 ? _jsx(Eye, { className: "w-8 h-8" }) :
                                                _jsx(Database, { className: "w-8 h-8" }) }, i))) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(Shield, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Privacy & Data Protection" }), _jsx(Lock, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: [_jsx("span", { className: "gradient-text-blue", children: "Privacy" }), " Policy"] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "We are committed to protecting your privacy and ensuring the security of your personal information. Learn how we collect, use, and safeguard your data." })] }), _jsx(motion.div, { className: "flex flex-wrap justify-center gap-8 pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [
                                        { icon: Lock, text: 'Secure by design' },
                                        { icon: Eye, text: 'Full transparency' },
                                        { icon: Settings, text: 'Your control' },
                                        { icon: Shield, text: 'GDPR compliant' }
                                    ].map((item, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(item.icon, { className: "w-5 h-5 text-blue-500" }), _jsx("span", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: item.text })] }, index))) }), _jsxs(motion.div, { className: "pt-8 flex flex-col sm:flex-row gap-4 justify-center", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsxs(Button, { onClick: () => navigate('contact'), className: "h-14 px-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Contact Privacy Team"] }), _jsxs(Button, { onClick: () => navigate('security'), variant: "outline", className: "h-14 px-8 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: [_jsx(ArrowRight, { className: "w-5 h-5 mr-2" }), "View Security Practices"] })] })] }) })] }), _jsx("section", { className: "px-6 py-20", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx(Card, { className: "glass mb-12", children: _jsxs(CardContent, { className: "p-8", children: [_jsxs("div", { className: "flex items-start gap-4 mb-6", children: [_jsx("div", { className: "w-12 h-12 rounded-xl bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 flex items-center justify-center", children: _jsx(CheckCircle, { className: "w-6 h-6" }) }), _jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2", children: "Our Privacy Commitment" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 leading-relaxed", children: "At Delibix, we believe privacy is a fundamental right. This policy explains how we handle your information with transparency, security, and respect for your choices." })] })] }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center p-4 rounded-xl glass-secondary", children: [_jsx(Lock, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "Secure by Design" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "End-to-end encryption and industry-leading security measures" })] }), _jsxs("div", { className: "text-center p-4 rounded-xl glass-secondary", children: [_jsx(Eye, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "Full Transparency" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Clear explanations of what data we collect and why" })] }), _jsxs("div", { className: "text-center p-4 rounded-xl glass-secondary", children: [_jsx(Settings, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "Your Control" }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Complete control over your data and privacy settings" })] })] })] }) }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mb-12", children: [_jsx(Card, { className: "glass", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsx(Calendar, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }), _jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-slate-100", children: "Last Updated" })] }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4", children: "This privacy policy was last updated on December 15, 2024" }), _jsx(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: "Current Version 3.1" })] }) }), _jsx(Card, { className: "glass", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsx(Globe, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }), _jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-slate-100", children: "Jurisdiction" })] }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4", children: "This policy complies with GDPR, CCPA, and Indonesian data protection laws" }), _jsx(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", children: "Global Compliance" })] }) })] })] }) }), _jsx("section", { className: "px-6 pb-20", children: _jsx("div", { className: "max-w-6xl mx-auto", children: _jsx("div", { className: "space-y-12", children: privacySections.map((section, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, children: _jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-12 h-12 rounded-xl gradient-bg-blue flex items-center justify-center", children: _jsx(section.icon, { className: "w-6 h-6 text-white" }) }), _jsx(CardTitle, { className: "text-2xl text-slate-900 dark:text-slate-100", children: section.title })] }) }), _jsx(CardContent, { className: "space-y-8", children: section.content.map((item, itemIndex) => (_jsxs("div", { children: [_jsx("h4", { className: "text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3", children: item.subtitle }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4 leading-relaxed", children: item.description }), _jsx("div", { className: "grid md:grid-cols-2 gap-3", children: item.details.map((detail, detailIndex) => (_jsxs("div", { className: "flex items-start gap-3 p-3 rounded-xl glass-secondary", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" }), _jsx("span", { className: "text-slate-700 dark:text-slate-300 text-sm leading-relaxed", children: detail })] }, detailIndex))) }), itemIndex < section.content.length - 1 && (_jsx(Separator, { className: "mt-6" }))] }, itemIndex))) })] }) }, section.id))) }) }) }), _jsx("section", { className: "px-6 pb-20", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx(Card, { className: "glass", children: _jsxs(CardContent, { className: "p-8 text-center", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Questions About Your Privacy?" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto", children: "Our privacy team is here to help. Contact us with any questions about this policy or your data rights." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('contact'), className: "gradient-bg-blue text-white hover:opacity-90", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Contact Privacy Team"] }), _jsxs(Button, { onClick: () => navigate('support'), variant: "outline", className: "border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: [_jsx(Phone, { className: "w-4 h-4 mr-2" }), "Get Support"] })] }), _jsx("div", { className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700", children: _jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["Email us directly at: ", _jsx("span", { className: "font-medium text-blue-600 dark:text-blue-400", children: "privacy@delibix.com" })] }) })] }) }) }) })] }));
}
//# sourceMappingURL=PrivacyPolicyPage.js.map