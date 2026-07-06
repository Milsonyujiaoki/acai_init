"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { FileText, Clock, CheckCircle2, XCircle, Award, Users, BarChart3, Calendar, Monitor, Shield, Brain, Target, TrendingUp, Zap, Star, Play, Pause, RotateCcw, Flag, AlertTriangle, Eye, Download, Upload, Settings, HelpCircle, MessageSquare, Camera, Mic, MicOff, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Checkbox } from "./ui/checkbox";
export function ExamCenterPage({ navigate }) {
    const [selectedExam, setSelectedExam] = useState("ai-fundamentals");
    const [examMode, setExamMode] = useState("practice"); // practice, certification, proctored
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(3600); // 60 minutes in seconds
    const [isExamActive, setIsExamActive] = useState(false);
    const availableExams = [
        {
            id: "ai-fundamentals",
            title: "AI Fundamentals Certification",
            description: "Test your knowledge of basic AI concepts, machine learning, and business applications",
            level: "Beginner",
            duration: "60 minutes",
            questions: 50,
            passingScore: 80,
            attempts: 3,
            cost: "Free",
            category: "AI & Machine Learning",
            prerequisites: ["Complete AI Fundamentals Course"],
            badge: "AI Fundamentals Certified"
        },
        {
            id: "digital-strategy",
            title: "Digital Strategy Expert",
            description: "Advanced certification in digital transformation and strategic AI implementation",
            level: "Advanced",
            duration: "90 minutes",
            questions: 75,
            passingScore: 85,
            attempts: 2,
            cost: "Free",
            category: "Strategy & Leadership",
            prerequisites: ["Complete Digital Strategy Course", "2+ years experience"],
            badge: "Digital Strategy Expert"
        },
        {
            id: "machine-learning",
            title: "Machine Learning Specialist",
            description: "Comprehensive examination on ML algorithms, implementation, and optimization",
            level: "Intermediate",
            duration: "75 minutes",
            questions: 60,
            passingScore: 82,
            attempts: 3,
            cost: "Free",
            category: "Technical Implementation",
            prerequisites: ["Complete ML Implementation Course", "Basic Python knowledge"],
            badge: "ML Specialist Certified"
        },
        {
            id: "ai-ethics",
            title: "AI Ethics & Governance",
            description: "Certification in responsible AI development, ethics, and regulatory compliance",
            level: "Intermediate",
            duration: "45 minutes",
            questions: 40,
            passingScore: 85,
            attempts: 3,
            cost: "Free",
            category: "Ethics & Compliance",
            prerequisites: ["Complete AI Ethics Course"],
            badge: "AI Ethics Certified"
        }
    ];
    const examStats = [
        { label: "Total Exams Taken", value: "12,847", icon: FileText },
        { label: "Pass Rate", value: "87%", icon: CheckCircle2 },
        { label: "Average Score", value: "89%", icon: TrendingUp },
        { label: "Certifications Issued", value: "11,156", icon: Award },
        { label: "Active Candidates", value: "3,429", icon: Users },
        { label: "Exam Sessions Today", value: "156", icon: Calendar }
    ];
    const sampleQuestions = [
        {
            id: 1,
            question: "Which of the following best describes the primary goal of machine learning?",
            type: "multiple-choice",
            options: [
                "To replace human decision-making entirely",
                "To enable computers to learn and improve from experience without being explicitly programmed",
                "To create artificial general intelligence",
                "To automate all business processes"
            ],
            correctAnswer: 1,
            explanation: "Machine learning's primary goal is to enable computers to learn patterns from data and improve their performance on tasks without being explicitly programmed for each scenario.",
            difficulty: "Easy",
            category: "Fundamentals"
        },
        {
            id: 2,
            question: "What are the key considerations when implementing AI in a business environment?",
            type: "multiple-select",
            options: [
                "Data quality and availability",
                "Regulatory compliance and ethics",
                "Technical infrastructure requirements",
                "Cost-benefit analysis",
                "Employee training and change management"
            ],
            correctAnswers: [0, 1, 2, 3, 4],
            explanation: "All these factors are crucial for successful AI implementation in business environments.",
            difficulty: "Medium",
            category: "Implementation"
        },
        {
            id: 3,
            question: "Explain the difference between supervised and unsupervised learning, providing one example of each.",
            type: "essay",
            maxWords: 200,
            rubric: [
                "Clear definition of supervised learning (2 points)",
                "Clear definition of unsupervised learning (2 points)",
                "Appropriate example of supervised learning (2 points)",
                "Appropriate example of unsupervised learning (2 points)",
                "Overall clarity and organization (2 points)"
            ],
            difficulty: "Hard",
            category: "Theory"
        }
    ];
    const examHistory = [
        {
            examTitle: "AI Fundamentals Certification",
            date: "2024-05-15",
            score: 92,
            passed: true,
            duration: "58:32",
            certificateId: "AFC-2024-0892"
        },
        {
            examTitle: "Digital Strategy Expert",
            date: "2024-04-20",
            score: 78,
            passed: false,
            duration: "87:45",
            certificateId: null
        },
        {
            examTitle: "Machine Learning Specialist",
            date: "2024-03-10",
            score: 89,
            passed: true,
            duration: "72:18",
            certificateId: "MLS-2024-0567"
        }
    ];
    const proctorFeatures = [
        { name: "Live Video Monitoring", icon: Camera, description: "Real-time webcam monitoring during exam" },
        { name: "Screen Recording", icon: Monitor, description: "Full screen recording and analysis" },
        { name: "Audio Monitoring", icon: Mic, description: "Continuous audio monitoring for irregularities" },
        { name: "AI Behavior Analysis", icon: Brain, description: "AI-powered suspicious behavior detection" },
        { name: "Browser Security", icon: Shield, description: "Secure browser environment with restrictions" },
        { name: "Identity Verification", icon: Eye, description: "Multi-factor identity verification process" }
    ];
    const selectedExamData = availableExams.find(exam => exam.id === selectedExam);
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    };
    const getLevelColor = (level) => {
        switch (level) {
            case "Beginner": return "text-green-600 bg-green-100 dark:bg-green-900/30";
            case "Intermediate": return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30";
            case "Advanced": return "text-red-600 bg-red-100 dark:bg-red-900/30";
            default: return "text-gray-600 bg-gray-100 dark:bg-gray-800";
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-blue-50/30 to-indigo-100/40 dark:from-indigo-950/20 dark:via-blue-950/10 dark:to-indigo-900/20" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-indigo-200/30 dark:bg-indigo-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-blue-300/40 dark:bg-blue-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-indigo-400/35 dark:bg-indigo-400/25 rounded-full blur-md float-delayed-2" })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(FileText, { className: "w-12 h-12 text-indigo-600 dark:text-indigo-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "Exam" }), ' ', _jsx("span", { className: "text-indigo-600", children: "Center" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Validate your AI expertise with industry-recognized certifications. Take proctored exams, track your progress, and earn credentials that advance your career." }), _jsxs("div", { className: "flex justify-center flex-wrap gap-4 mb-8", children: [_jsxs(Badge, { className: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 px-4 py-2", children: [_jsx(Shield, { className: "w-4 h-4 mr-2" }), "Secure Proctoring"] }), _jsxs(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2", children: [_jsx(Award, { className: "w-4 h-4 mr-2" }), "Industry Certified"] }), _jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-4 py-2", children: [_jsx(Brain, { className: "w-4 h-4 mr-2" }), "AI-Powered"] }), _jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2", children: [_jsx(Monitor, { className: "w-4 h-4 mr-2" }), "Remote Testing"] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8", children: examStats.map((stat, index) => {
                                                const Icon = stat.icon;
                                                return (_jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx(Icon, { className: "w-6 h-6 text-indigo-600 mx-auto mb-2" }), _jsx("div", { className: "text-lg font-bold text-indigo-600", children: stat.value }), _jsx("div", { className: "text-xs text-foreground-muted", children: stat.label })] }, index));
                                            }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Play, { className: "w-5 h-5 mr-2" }), "Take Practice Exam"] }), _jsxs(Button, { onClick: () => navigate('delibix-academy'), variant: "outline", size: "lg", className: "glass-blue-light border-blue-200 dark:border-blue-700 hover:glass-blue transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Award, { className: "w-5 h-5 mr-2" }), "View Certifications"] })] })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "exams", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-5 glass", children: [_jsx(TabsTrigger, { value: "exams", children: "Available Exams" }), _jsx(TabsTrigger, { value: "practice", children: "Practice Mode" }), _jsx(TabsTrigger, { value: "proctoring", children: "Proctored Exams" }), _jsx(TabsTrigger, { value: "results", children: "My Results" }), _jsx(TabsTrigger, { value: "certificates", children: "Certificates" })] }), _jsx(TabsContent, { value: "exams", className: "space-y-8 mt-8", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: availableExams.map((exam, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsxs(Card, { className: "glass-heavy h-full card-hover", children: [_jsx(CardHeader, { children: _jsx("div", { className: "flex items-start justify-between", children: _jsxs("div", { children: [_jsx(CardTitle, { className: "text-xl mb-2", children: exam.title }), _jsx(CardDescription, { className: "mb-3", children: exam.description }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Badge, { className: getLevelColor(exam.level), children: exam.level }), _jsx(Badge, { variant: "outline", children: exam.category })] })] }) }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-4 h-4 text-indigo-600" }), _jsx("span", { children: exam.duration })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "w-4 h-4 text-blue-600" }), _jsxs("span", { children: [exam.questions, " questions"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Target, { className: "w-4 h-4 text-green-600" }), _jsxs("span", { children: [exam.passingScore, "% to pass"] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(RotateCcw, { className: "w-4 h-4 text-orange-600" }), _jsxs("span", { children: [exam.attempts, " attempts"] })] })] }), _jsx(Separator, {}), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-sm mb-2", children: "Prerequisites:" }), _jsx("div", { className: "space-y-1", children: exam.prerequisites.map((prereq, prereqIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle2, { className: "w-3 h-3 text-green-600" }), _jsx("span", { children: prereq })] }, prereqIndex))) })] }), _jsx(Separator, {}), _jsxs("div", { className: "glass-blue-light p-3 rounded-lg text-center", children: [_jsx(Award, { className: "w-6 h-6 text-indigo-600 mx-auto mb-2" }), _jsx("div", { className: "font-medium text-sm", children: exam.badge })] }), _jsxs("div", { className: "grid grid-cols-2 gap-2", children: [_jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Play, { className: "w-4 h-4 mr-2" }), "Practice"] }), _jsxs(Button, { size: "sm", className: "gradient-bg-blue text-white", children: [_jsx(FileText, { className: "w-4 h-4 mr-2" }), "Take Exam"] })] })] }) })] }) }, exam.id))) }) }), _jsx(TabsContent, { value: "practice", className: "space-y-6 mt-8", children: _jsxs(Card, { className: "glass-heavy", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Brain, { className: "w-6 h-6 text-indigo-600" }), "Practice Mode - AI Fundamentals"] }), _jsx(CardDescription, { children: "Unlimited practice with instant feedback" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: ["Question ", currentQuestion + 1, " of ", sampleQuestions.length] }), _jsx("div", { className: "text-lg font-mono text-indigo-600", children: formatTime(timeRemaining) })] })] }) }), _jsxs(CardContent, { children: [_jsx("div", { className: "mb-6", children: _jsx(Progress, { value: (currentQuestion / sampleQuestions.length) * 100, className: "h-2" }) }), sampleQuestions[currentQuestion] && (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "p-6 glass-blue-light rounded-lg", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsx("h3", { className: "text-lg font-semibold", children: sampleQuestions[currentQuestion].question }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: sampleQuestions[currentQuestion].difficulty }), _jsx(Badge, { variant: "outline", className: "text-xs", children: sampleQuestions[currentQuestion].category })] })] }), sampleQuestions[currentQuestion].type === "multiple-choice" && (_jsx(RadioGroup, { children: sampleQuestions[currentQuestion].options.map((option, optionIndex) => (_jsxs("div", { className: "flex items-center space-x-2 p-3 glass rounded-lg", children: [_jsx(RadioGroupItem, { value: optionIndex.toString(), id: `option-${optionIndex}` }), _jsx(Label, { htmlFor: `option-${optionIndex}`, className: "flex-grow cursor-pointer", children: option })] }, optionIndex))) })), sampleQuestions[currentQuestion].type === "multiple-select" && (_jsx("div", { className: "space-y-3", children: sampleQuestions[currentQuestion].options.map((option, optionIndex) => (_jsxs("div", { className: "flex items-center space-x-2 p-3 glass rounded-lg", children: [_jsx(Checkbox, { id: `checkbox-${optionIndex}` }), _jsx(Label, { htmlFor: `checkbox-${optionIndex}`, className: "flex-grow cursor-pointer", children: option })] }, optionIndex))) })), sampleQuestions[currentQuestion].type === "essay" && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "glass p-4 rounded-lg", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "font-medium", children: "Essay Response" }), _jsxs("span", { className: "text-sm text-foreground-muted", children: ["Max ", sampleQuestions[currentQuestion].maxWords, " words"] })] }), _jsx("textarea", { className: "w-full h-32 p-3 bg-input-background border border-border rounded-lg resize-none", placeholder: "Type your response here..." })] }), _jsxs("div", { className: "glass-blue-light p-4 rounded-lg", children: [_jsx("h4", { className: "font-medium mb-2", children: "Grading Rubric:" }), _jsx("div", { className: "space-y-1", children: sampleQuestions[currentQuestion].rubric?.map((criterion, index) => (_jsxs("div", { className: "text-sm text-foreground-muted", children: ["\u2022 ", criterion] }, index))) })] })] }))] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Button, { variant: "outline", onClick: () => setCurrentQuestion(Math.max(0, currentQuestion - 1)), disabled: currentQuestion === 0, children: "Previous" }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", children: [_jsx(Flag, { className: "w-4 h-4 mr-2" }), "Flag for Review"] }), _jsx(Button, { children: "Submit Answer" })] }), _jsx(Button, { onClick: () => setCurrentQuestion(Math.min(sampleQuestions.length - 1, currentQuestion + 1)), disabled: currentQuestion === sampleQuestions.length - 1, children: "Next" })] })] }))] })] }) }), _jsxs(TabsContent, { value: "proctoring", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Shield, { className: "w-6 h-6 text-indigo-600" }), "Secure Proctored Examinations"] }), _jsx(CardDescription, { children: "Industry-standard remote proctoring for certification exams" })] }), _jsx(CardContent, { children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: proctorFeatures.map((feature, index) => {
                                                        const Icon = feature.icon;
                                                        return (_jsxs("div", { className: "glass-blue-light p-6 rounded-lg text-center", children: [_jsx(Icon, { className: "w-12 h-12 text-indigo-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: feature.name }), _jsx("p", { className: "text-sm text-foreground-muted", children: feature.description })] }, index));
                                                    }) }) })] }), _jsxs(Card, { className: "glass", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "System Requirements & Setup" }), _jsx(CardDescription, { children: "Ensure your system meets requirements for proctored exams" })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: "Technical Requirements:" }), _jsx("div", { className: "space-y-3", children: [
                                                                            "Stable internet connection (minimum 5 Mbps)",
                                                                            "Webcam (720p or higher resolution)",
                                                                            "Microphone with noise cancellation",
                                                                            "Modern web browser (Chrome, Firefox, Safari)",
                                                                            "Quiet, well-lit testing environment",
                                                                            "Government-issued photo ID for verification"
                                                                        ].map((req, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }), _jsx("span", { className: "text-sm", children: req })] }, index))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-4", children: "Pre-Exam Checklist:" }), _jsx("div", { className: "space-y-3", children: [
                                                                            "Complete system compatibility test",
                                                                            "Verify identity documents",
                                                                            "Clear your testing area",
                                                                            "Close all unnecessary applications",
                                                                            "Inform others not to disturb",
                                                                            "Review exam rules and policies"
                                                                        ].map((item, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-4 h-4 border border-gray-400 rounded" }), _jsx("span", { className: "text-sm", children: item })] }, index))) })] })] }), _jsx("div", { className: "mt-6 pt-6 border-t border-border", children: _jsxs(Button, { className: "gradient-bg-blue text-white", children: [_jsx(Settings, { className: "w-4 h-4 mr-2" }), "Test System Compatibility"] }) })] })] })] }), _jsx(TabsContent, { value: "results", className: "space-y-6 mt-8", children: _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(BarChart3, { className: "w-6 h-6 text-blue-600" }), "Exam History & Results"] }), _jsx(CardDescription, { children: "Track your examination performance and progress" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: examHistory.map((exam, index) => (_jsxs("div", { className: "glass-blue-light p-6 rounded-lg", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg", children: exam.examTitle }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-foreground-muted", children: [_jsxs("span", { children: ["Date: ", exam.date] }), _jsxs("span", { children: ["Duration: ", exam.duration] })] })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: `text-2xl font-bold ${exam.passed ? 'text-green-600' : 'text-red-600'}`, children: [exam.score, "%"] }), _jsx(Badge, { className: exam.passed ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300', children: exam.passed ? 'PASSED' : 'FAILED' })] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { children: exam.certificateId && (_jsxs("span", { className: "text-sm", children: ["Certificate ID: ", exam.certificateId] })) }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Eye, { className: "w-4 h-4 mr-1" }), "View Details"] }), exam.certificateId && (_jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Download, { className: "w-4 h-4 mr-1" }), "Download Certificate"] })), !exam.passed && (_jsxs(Button, { size: "sm", children: [_jsx(RotateCcw, { className: "w-4 h-4 mr-1" }), "Retake"] }))] })] })] }, index))) }) })] }) }), _jsx(TabsContent, { value: "certificates", className: "space-y-6 mt-8", children: _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Award, { className: "w-6 h-6 text-yellow-600" }), "Digital Certificates"] }), _jsx(CardDescription, { children: "Your earned certifications and digital badges" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: examHistory.filter(exam => exam.passed).map((exam, index) => (_jsxs("div", { className: "glass-blue-light p-6 rounded-lg text-center", children: [_jsx(Award, { className: "w-16 h-16 text-yellow-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold text-lg mb-2", children: exam.examTitle }), _jsxs("div", { className: "space-y-2 mb-4", children: [_jsxs("div", { className: "text-2xl font-bold text-green-600", children: [exam.score, "%"] }), _jsxs("div", { className: "text-sm text-foreground-muted", children: ["Earned: ", exam.date] }), _jsx("div", { className: "text-xs font-mono", children: exam.certificateId })] }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", size: "sm", className: "flex-1", children: [_jsx(Eye, { className: "w-4 h-4 mr-1" }), "View"] }), _jsxs(Button, { variant: "outline", size: "sm", className: "flex-1", children: [_jsx(Download, { className: "w-4 h-4 mr-1" }), "Download"] })] })] }, index))) }), examHistory.filter(exam => exam.passed).length === 0 && (_jsxs("div", { className: "text-center py-12", children: [_jsx(Award, { className: "w-24 h-24 text-gray-300 mx-auto mb-4" }), _jsx("h3", { className: "text-xl font-semibold text-foreground-muted mb-2", children: "No Certificates Yet" }), _jsx("p", { className: "text-foreground-muted mb-6", children: "Pass your first exam to earn a digital certificate" }), _jsxs(Button, { children: [_jsx(FileText, { className: "w-4 h-4 mr-2" }), "Take Your First Exam"] })] }))] })] }) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16", children: _jsx(Card, { className: "glass w-full", children: _jsxs(CardContent, { className: "p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Need Help with Exams?" }), _jsx("p", { className: "text-foreground-muted max-w-2xl mx-auto", children: "Our support team is here to help you succeed. Get assistance with technical issues, exam preparation, or certification questions." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [_jsxs(Button, { variant: "outline", className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(HelpCircle, { className: "w-6 h-6" }), _jsx("span", { children: "FAQ" })] }), _jsxs(Button, { variant: "outline", className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(MessageSquare, { className: "w-6 h-6" }), _jsx("span", { children: "Live Chat" })] }), _jsxs(Button, { variant: "outline", className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(FileText, { className: "w-6 h-6" }), _jsx("span", { children: "Study Guides" })] }), _jsxs(Button, { variant: "outline", className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(Settings, { className: "w-6 h-6" }), _jsx("span", { children: "System Test" })] })] })] }) }) })] })] }));
}
//# sourceMappingURL=ExamCenterPage.js.map