"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Brain, Shield, Scale, Eye, Users, AlertTriangle, CheckCircle2, XCircle, Info, Target, BarChart3, FileText, Download, Upload, Zap, Settings, Globe, Lock, Heart, Lightbulb, Award, MessageSquare, Calendar, ArrowRight, ChevronDown, Star, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";
export function AIEthicsCheckerPage({ navigate }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isAssessmentComplete, setIsAssessmentComplete] = useState(false);
    const [overallScore, setOverallScore] = useState(0);
    const ethicsCategories = [
        {
            id: "fairness",
            name: "Fairness & Bias",
            description: "Evaluate algorithmic fairness and bias mitigation",
            icon: Scale,
            color: "text-blue-600",
            questions: [
                {
                    id: "bias_training_data",
                    question: "Has your training data been evaluated for potential bias?",
                    options: [
                        { value: "comprehensive", label: "Comprehensive bias audit completed", score: 10 },
                        { value: "basic", label: "Basic bias evaluation done", score: 7 },
                        { value: "minimal", label: "Minimal evaluation conducted", score: 3 },
                        { value: "none", label: "No bias evaluation performed", score: 0 }
                    ]
                },
                {
                    id: "demographic_parity",
                    question: "Does your AI system maintain demographic parity across different groups?",
                    options: [
                        { value: "verified", label: "Verified through testing", score: 10 },
                        { value: "monitored", label: "Actively monitored", score: 7 },
                        { value: "considered", label: "Considered but not verified", score: 3 },
                        { value: "unknown", label: "Unknown or not considered", score: 0 }
                    ]
                }
            ]
        },
        {
            id: "transparency",
            name: "Transparency & Explainability",
            description: "Assess AI system transparency and decision explainability",
            icon: Eye,
            color: "text-green-600",
            questions: [
                {
                    id: "decision_explanation",
                    question: "Can your AI system explain its decisions to users?",
                    options: [
                        { value: "full", label: "Full explanations available", score: 10 },
                        { value: "partial", label: "Partial explanations provided", score: 7 },
                        { value: "limited", label: "Limited explanation capability", score: 3 },
                        { value: "none", label: "No explanation capability", score: 0 }
                    ]
                },
                {
                    id: "algorithm_documentation",
                    question: "Is your algorithm thoroughly documented and auditable?",
                    options: [
                        { value: "comprehensive", label: "Comprehensive documentation", score: 10 },
                        { value: "adequate", label: "Adequate documentation", score: 7 },
                        { value: "basic", label: "Basic documentation", score: 3 },
                        { value: "minimal", label: "Minimal or no documentation", score: 0 }
                    ]
                }
            ]
        },
        {
            id: "accountability",
            name: "Accountability & Governance",
            description: "Review governance structures and accountability measures",
            icon: Shield,
            color: "text-purple-600",
            questions: [
                {
                    id: "governance_structure",
                    question: "Do you have a clear AI governance structure in place?",
                    options: [
                        { value: "established", label: "Established governance committee", score: 10 },
                        { value: "developing", label: "Developing governance framework", score: 7 },
                        { value: "informal", label: "Informal governance processes", score: 3 },
                        { value: "none", label: "No governance structure", score: 0 }
                    ]
                },
                {
                    id: "responsibility_assignment",
                    question: "Are responsibilities for AI decisions clearly assigned?",
                    options: [
                        { value: "clear", label: "Clear responsibility assignment", score: 10 },
                        { value: "mostly", label: "Mostly clear assignments", score: 7 },
                        { value: "partial", label: "Partial assignment", score: 3 },
                        { value: "unclear", label: "Unclear or no assignment", score: 0 }
                    ]
                }
            ]
        },
        {
            id: "privacy",
            name: "Privacy & Data Protection",
            description: "Evaluate privacy safeguards and data protection measures",
            icon: Lock,
            color: "text-orange-600",
            questions: [
                {
                    id: "data_minimization",
                    question: "Do you practice data minimization in your AI system?",
                    options: [
                        { value: "strict", label: "Strict data minimization", score: 10 },
                        { value: "moderate", label: "Moderate data minimization", score: 7 },
                        { value: "limited", label: "Limited data minimization", score: 3 },
                        { value: "none", label: "No data minimization", score: 0 }
                    ]
                },
                {
                    id: "consent_management",
                    question: "How do you manage user consent for data processing?",
                    options: [
                        { value: "comprehensive", label: "Comprehensive consent management", score: 10 },
                        { value: "adequate", label: "Adequate consent processes", score: 7 },
                        { value: "basic", label: "Basic consent collection", score: 3 },
                        { value: "minimal", label: "Minimal or no consent", score: 0 }
                    ]
                }
            ]
        },
        {
            id: "human_oversight",
            name: "Human Oversight & Control",
            description: "Assess human involvement and control mechanisms",
            icon: Users,
            color: "text-red-600",
            questions: [
                {
                    id: "human_review",
                    question: "Do you have human review processes for AI decisions?",
                    options: [
                        { value: "always", label: "Always human reviewed", score: 10 },
                        { value: "critical", label: "Human review for critical decisions", score: 7 },
                        { value: "occasional", label: "Occasional human review", score: 3 },
                        { value: "never", label: "No human review", score: 0 }
                    ]
                },
                {
                    id: "override_capability",
                    question: "Can humans override AI decisions when necessary?",
                    options: [
                        { value: "full", label: "Full override capability", score: 10 },
                        { value: "limited", label: "Limited override capability", score: 7 },
                        { value: "restricted", label: "Restricted override", score: 3 },
                        { value: "none", label: "No override capability", score: 0 }
                    ]
                }
            ]
        }
    ];
    const allQuestions = ethicsCategories.flatMap(category => category.questions.map(q => ({ ...q, category: category.id, categoryName: category.name })));
    const handleAnswerChange = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };
    const calculateScore = () => {
        let totalScore = 0;
        let maxScore = 0;
        allQuestions.forEach(question => {
            const answer = answers[question.id];
            if (answer) {
                const option = question.options.find(opt => opt.value === answer);
                if (option) {
                    totalScore += option.score;
                }
            }
            maxScore += 10; // Maximum score per question
        });
        return Math.round((totalScore / maxScore) * 100);
    };
    const completeAssessment = () => {
        const score = calculateScore();
        setOverallScore(score);
        setIsAssessmentComplete(true);
    };
    const getScoreColor = (score) => {
        if (score >= 80)
            return "text-green-600";
        if (score >= 60)
            return "text-yellow-600";
        return "text-red-600";
    };
    const getScoreLabel = (score) => {
        if (score >= 90)
            return "Excellent";
        if (score >= 80)
            return "Good";
        if (score >= 60)
            return "Fair";
        if (score >= 40)
            return "Needs Improvement";
        return "Critical";
    };
    const getCategoryScore = (categoryId) => {
        const categoryQuestions = allQuestions.filter(q => q.category === categoryId);
        let categoryScore = 0;
        let maxCategoryScore = 0;
        categoryQuestions.forEach(question => {
            const answer = answers[question.id];
            if (answer) {
                const option = question.options.find(opt => opt.value === answer);
                if (option) {
                    categoryScore += option.score;
                }
            }
            maxCategoryScore += 10;
        });
        return Math.round((categoryScore / maxCategoryScore) * 100);
    };
    const currentQuestion = allQuestions[currentStep];
    const isLastQuestion = currentStep === allQuestions.length - 1;
    const answeredQuestions = Object.keys(answers).length;
    const progressPercentage = (answeredQuestions / allQuestions.length) * 100;
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/60 dark:from-blue-950/40 dark:via-background dark:to-blue-900/30" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-green-300/40 dark:bg-green-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-purple-400/35 dark:bg-purple-400/25 rounded-full blur-md float-delayed-2" })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(Brain, { className: "w-12 h-12 text-blue-600 dark:text-blue-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "AI Ethics" }), ' ', _jsx("span", { className: "gradient-text-blue-light", children: "Checker" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Comprehensive AI ethics assessment tool. Evaluate your AI systems against global ethical standards and best practices." }), _jsxs("div", { className: "flex justify-center flex-wrap gap-4 mb-8", children: [_jsxs(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2", children: [_jsx(Scale, { className: "w-4 h-4 mr-2" }), "Fairness"] }), _jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-4 py-2", children: [_jsx(Eye, { className: "w-4 h-4 mr-2" }), "Transparency"] }), _jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2", children: [_jsx(Shield, { className: "w-4 h-4 mr-2" }), "Accountability"] }), _jsxs(Badge, { className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 px-4 py-2", children: [_jsx(Lock, { className: "w-4 h-4 mr-2" }), "Privacy"] })] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { onClick: () => setCurrentStep(0), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Brain, { className: "w-5 h-5 mr-2" }), "Start Ethics Assessment"] }), _jsxs(Button, { onClick: () => navigate('ai-consulting-tools'), variant: "outline", size: "lg", className: "glass-blue-light border-blue-200 dark:border-blue-700 hover:glass-blue transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Settings, { className: "w-5 h-5 mr-2" }), "View All Tools"] })] })] }) })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: _jsxs(Tabs, { defaultValue: "assessment", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 glass", children: [_jsx(TabsTrigger, { value: "assessment", children: "Ethics Assessment" }), _jsx(TabsTrigger, { value: "categories", children: "Ethics Categories" }), _jsx(TabsTrigger, { value: "guidelines", children: "Best Practices" }), _jsx(TabsTrigger, { value: "resources", children: "Resources" })] }), _jsx(TabsContent, { value: "assessment", className: "space-y-8 mt-8", children: !isAssessmentComplete ? (_jsxs(_Fragment, { children: [_jsx(Card, { className: "glass w-full", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "text-lg font-semibold", children: "Assessment Progress" }), _jsxs(Badge, { variant: "outline", children: [answeredQuestions, " of ", allQuestions.length, " completed"] })] }), _jsx(Progress, { value: progressPercentage, className: "h-2" }), _jsxs("div", { className: "text-sm text-foreground-muted mt-2", children: [Math.round(progressPercentage), "% complete"] })] }) }), currentQuestion && (_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsxs(Badge, { variant: "outline", children: ["Question ", currentStep + 1, " of ", allQuestions.length] }), _jsx(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", children: currentQuestion.categoryName })] }), _jsx(CardTitle, { className: "text-xl", children: currentQuestion.question })] }), _jsxs(CardContent, { children: [_jsx(RadioGroup, { value: answers[currentQuestion.id] || "", onValueChange: (value) => handleAnswerChange(currentQuestion.id, value), children: _jsx("div", { className: "space-y-3", children: currentQuestion.options.map((option, index) => (_jsxs("div", { className: "flex items-center space-x-3 p-3 glass-blue-light rounded-lg hover:glass-blue transition-all", children: [_jsx(RadioGroupItem, { value: option.value, id: option.value }), _jsx(Label, { htmlFor: option.value, className: "flex-grow cursor-pointer", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { children: option.label }), _jsxs(Badge, { variant: "outline", className: "ml-2", children: [option.score, "/10"] })] }) })] }, option.value))) }) }), _jsxs("div", { className: "flex justify-between mt-6", children: [_jsx(Button, { variant: "outline", onClick: () => setCurrentStep(Math.max(0, currentStep - 1)), disabled: currentStep === 0, children: "Previous" }), isLastQuestion ? (_jsxs(Button, { onClick: completeAssessment, disabled: !answers[currentQuestion.id], className: "gradient-bg-blue text-white", children: [_jsx(CheckCircle2, { className: "w-4 h-4 mr-2" }), "Complete Assessment"] })) : (_jsxs(Button, { onClick: () => setCurrentStep(currentStep + 1), disabled: !answers[currentQuestion.id], children: ["Next", _jsx(ArrowRight, { className: "w-4 h-4 ml-2" })] }))] })] })] }))] })) : (_jsxs("div", { className: "space-y-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-center", children: _jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [_jsx(Award, { className: "w-8 h-8 text-yellow-600" }), _jsx("span", { children: "Ethics Assessment Results" })] }) }) }), _jsx(CardContent, { children: _jsxs("div", { className: "text-center", children: [_jsxs("div", { className: `text-6xl font-bold mb-2 ${getScoreColor(overallScore)}`, children: [overallScore, "%"] }), _jsx("div", { className: "text-2xl font-semibold mb-4", children: getScoreLabel(overallScore) }), _jsx(Progress, { value: overallScore, className: "h-4 max-w-md mx-auto" })] }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Category Breakdown" }), _jsx(CardDescription, { children: "Detailed scores by ethics category" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-6", children: ethicsCategories.map((category) => {
                                                        const Icon = category.icon;
                                                        const categoryScore = getCategoryScore(category.id);
                                                        return (_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Icon, { className: `w-5 h-5 ${category.color}` }), _jsx("span", { className: "font-medium", children: category.name })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: `font-bold ${getScoreColor(categoryScore)}`, children: [categoryScore, "%"] }), _jsx(Badge, { className: getScoreColor(categoryScore), variant: "secondary", children: getScoreLabel(categoryScore) })] })] }), _jsx(Progress, { value: categoryScore, className: "h-2" })] }, category.id));
                                                    }) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Recommended Actions" }), _jsx(CardDescription, { children: "Priority improvements based on your assessment" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: ethicsCategories
                                                        .filter(category => getCategoryScore(category.id) < 80)
                                                        .map((category) => {
                                                        const Icon = category.icon;
                                                        return (_jsxs("div", { className: "flex items-start gap-4 p-4 glass-blue-light rounded-lg", children: [_jsx(Icon, { className: `w-6 h-6 ${category.color} flex-shrink-0 mt-1` }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: category.name }), _jsx("p", { className: "text-sm text-foreground-muted mt-1", children: category.description }), _jsxs(Button, { variant: "outline", size: "sm", className: "mt-3", children: [_jsx(Lightbulb, { className: "w-3 h-3 mr-1" }), "View Recommendations"] })] })] }, category.id));
                                                    }) }) })] }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Get Detailed Report" }), _jsx("p", { className: "text-foreground-muted mb-6", children: "Download a comprehensive ethics assessment report with detailed recommendations." }), _jsxs("div", { className: "flex gap-4 justify-center", children: [_jsxs(Button, { className: "gradient-bg-blue text-white", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Download Report"] }), _jsxs(Button, { variant: "outline", onClick: () => {
                                                                setIsAssessmentComplete(false);
                                                                setCurrentStep(0);
                                                                setAnswers({});
                                                            }, children: [_jsx(Brain, { className: "w-4 h-4 mr-2" }), "Retake Assessment"] })] })] }) })] })) }), _jsx(TabsContent, { value: "categories", className: "space-y-6 mt-8", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: ethicsCategories.map((category, index) => {
                                    const Icon = category.icon;
                                    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsxs(Card, { className: "glass-heavy h-full card-hover", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl", children: _jsx(Icon, { className: `w-8 h-8 ${category.color}` }) }), _jsx("div", { children: _jsx(CardTitle, { className: "text-lg", children: category.name }) })] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-foreground-muted mb-4", children: category.description }), _jsxs("div", { className: "space-y-3", children: [_jsx("h4", { className: "font-semibold text-sm", children: "Key Focus Areas:" }), category.questions.map((question, qIndex) => (_jsxs("div", { className: "text-sm text-foreground-muted", children: ["\u2022 ", question.question] }, qIndex)))] }), _jsxs(Button, { variant: "outline", size: "sm", className: "w-full mt-4", children: [_jsx(Info, { className: "w-3 h-3 mr-1" }), "Learn More"] })] })] }) }, category.id));
                                }) }) }), _jsx(TabsContent, { value: "guidelines", className: "space-y-6 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Award, { className: "w-6 h-6 text-yellow-600" }), "AI Ethics Best Practices"] }), _jsx(CardDescription, { children: "Industry-standard guidelines for ethical AI development and deployment" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-6", children: [
                                                {
                                                    principle: "Human-Centric Design",
                                                    description: "Design AI systems that augment human capabilities rather than replace human judgment",
                                                    practices: [
                                                        "Involve humans in critical decision loops",
                                                        "Provide meaningful human oversight",
                                                        "Enable human override capabilities",
                                                        "Design for human-AI collaboration"
                                                    ]
                                                },
                                                {
                                                    principle: "Fairness and Non-Discrimination",
                                                    description: "Ensure AI systems treat all individuals and groups fairly",
                                                    practices: [
                                                        "Regular bias testing and mitigation",
                                                        "Diverse and representative training data",
                                                        "Continuous monitoring for discrimination",
                                                        "Inclusive design processes"
                                                    ]
                                                },
                                                {
                                                    principle: "Transparency and Explainability",
                                                    description: "Make AI systems understandable and their decisions explainable",
                                                    practices: [
                                                        "Clear documentation of AI capabilities",
                                                        "Explainable AI techniques",
                                                        "Open communication about limitations",
                                                        "Regular stakeholder engagement"
                                                    ]
                                                },
                                                {
                                                    principle: "Privacy and Data Protection",
                                                    description: "Protect individual privacy and ensure responsible data handling",
                                                    practices: [
                                                        "Data minimization principles",
                                                        "Strong consent mechanisms",
                                                        "Secure data storage and transmission",
                                                        "Regular privacy impact assessments"
                                                    ]
                                                }
                                            ].map((guideline, index) => (_jsxs("div", { className: "space-y-3 p-6 glass-blue-light rounded-lg", children: [_jsx("h3", { className: "text-lg font-semibold", children: guideline.principle }), _jsx("p", { className: "text-foreground-muted", children: guideline.description }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: guideline.practices.map((practice, pIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle2, { className: "w-3 h-3 text-green-600" }), _jsx("span", { children: practice })] }, pIndex))) })] }, index))) }) })] }) }), _jsxs(TabsContent, { value: "resources", className: "space-y-6 mt-8", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs(Card, { className: "glass h-full", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "w-5 h-5 text-blue-600" }), "Documentation & Guides"] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-3", children: [
                                                            "AI Ethics Implementation Guide",
                                                            "Bias Detection and Mitigation Manual",
                                                            "Transparency Framework Templates",
                                                            "Privacy Impact Assessment Tools",
                                                            "Governance Structure Guidelines"
                                                        ].map((doc, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 glass-blue-light rounded-lg", children: [_jsx("span", { className: "text-sm", children: doc }), _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Download, { className: "w-3 h-3 mr-1" }), "Download"] })] }, index))) }) })] }), _jsxs(Card, { className: "glass h-full", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "w-5 h-5 text-green-600" }), "Standards & Frameworks"] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-3", children: [
                                                            { name: "IEEE Standards for AI Ethics", org: "IEEE" },
                                                            { name: "EU AI Act Guidelines", org: "European Union" },
                                                            { name: "NIST AI Risk Management", org: "NIST" },
                                                            { name: "ISO/IEC AI Standards", org: "ISO" },
                                                            { name: "Partnership on AI Tenets", org: "Partnership on AI" }
                                                        ].map((standard, index) => (_jsxs("div", { className: "p-3 glass-blue-light rounded-lg", children: [_jsx("div", { className: "font-medium text-sm", children: standard.name }), _jsx("div", { className: "text-xs text-foreground-muted", children: standard.org })] }, index))) }) })] })] }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Need Expert Guidance?" }), _jsx("p", { className: "text-foreground-muted mb-6", children: "Our AI ethics specialists can help you implement comprehensive ethical frameworks." }), _jsxs("div", { className: "flex gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('contact'), className: "gradient-bg-blue text-white", children: [_jsx(MessageSquare, { className: "w-4 h-4 mr-2" }), "Consult Expert"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('demo-request'), children: [_jsx(Calendar, { className: "w-4 h-4 mr-2" }), "Schedule Demo"] })] })] }) })] })] }) })] }));
}
//# sourceMappingURL=AIEthicsCheckerPage.js.map