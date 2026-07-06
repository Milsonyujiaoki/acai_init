"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, Users, Clock, Star, ArrowRight, CheckCircle, PlayCircle, Download, Calendar, Target, Brain, Trophy, Shield, Globe, Zap, Code, Database, Monitor, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
const courses = [
    {
        id: "ai-fundamentals",
        title: "AI Fundamentals",
        description: "Master the basics of artificial intelligence and machine learning",
        duration: "4 weeks",
        level: "Beginner",
        price: "Free",
        enrolled: 2500,
        rating: 4.8,
        modules: 12,
        certification: true,
        featured: true
    },
    {
        id: "advanced-ml",
        title: "Advanced Machine Learning",
        description: "Deep dive into advanced ML algorithms and techniques",
        duration: "8 weeks",
        level: "Advanced",
        price: "$299",
        enrolled: 850,
        rating: 4.9,
        modules: 24,
        certification: true
    },
    {
        id: "ai-business",
        title: "AI for Business Leaders",
        description: "Strategic AI implementation for business transformation",
        duration: "6 weeks",
        level: "Intermediate",
        price: "$199",
        enrolled: 1200,
        rating: 4.7,
        modules: 18,
        certification: true
    }
];
const certifications = [
    {
        title: "Delibix AI Practitioner",
        description: "Entry-level certification for AI fundamentals",
        requirements: ["Complete AI Fundamentals course", "Pass final exam (80%+)"],
        validity: "2 years",
        badge: "ai-practitioner.png"
    },
    {
        title: "Delibix AI Specialist",
        description: "Advanced certification for AI implementation",
        requirements: ["Complete 3 advanced courses", "Real-world project", "Pass comprehensive exam"],
        validity: "3 years",
        badge: "ai-specialist.png"
    }
];
export function TrainingCertificationPage({ navigate }) {
    const [selectedCourse, setSelectedCourse] = useState(courses[0]);
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, className: "space-y-8", children: [_jsxs("div", { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3", children: [_jsx(GraduationCap, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Training & Certification" })] }), _jsxs("h1", { className: "text-5xl md:text-7xl font-bold", children: ["Master ", _jsx("span", { className: "gradient-text-blue", children: "AI" }), " Skills"] }), _jsx("p", { className: "text-xl max-w-4xl mx-auto text-foreground-muted", children: "Comprehensive training programs and industry-recognized certifications to advance your AI career." }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", children: [
                                        { label: "Students", value: "5,000+" },
                                        { label: "Courses", value: "25+" },
                                        { label: "Certifications", value: "500+" },
                                        { label: "Success Rate", value: "94%" }
                                    ].map((stat, index) => (_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center", children: [_jsx("div", { className: "text-2xl font-bold gradient-text-blue", children: stat.value }), _jsx("div", { className: "text-sm text-foreground-muted", children: stat.label })] }, index))) })] }) })] }), _jsx("div", { className: "container mx-auto px-4 py-20", children: _jsxs(Tabs, { defaultValue: "courses", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-3 mb-12", children: [_jsx(TabsTrigger, { value: "courses", children: "Courses" }), _jsx(TabsTrigger, { value: "certifications", children: "Certifications" }), _jsx(TabsTrigger, { value: "programs", children: "Programs" })] }), _jsx(TabsContent, { value: "courses", children: _jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: _jsx("div", { className: "grid gap-6", children: courses.map((course, index) => (_jsxs(Card, { className: "glass p-6 hover:shadow-lg transition-all", children: [_jsxs("div", { className: "flex justify-between items-start mb-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx("h3", { children: course.title }), course.featured && _jsx(Badge, { className: "bg-amber-100 text-amber-800", children: "Featured" })] }), _jsx("p", { className: "text-foreground-muted mb-4", children: course.description }), _jsxs("div", { className: "flex gap-4 text-sm text-foreground-muted", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-4 h-4" }), course.duration] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(BookOpen, { className: "w-4 h-4" }), course.modules, " modules"] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Users, { className: "w-4 h-4" }), course.enrolled, " enrolled"] })] })] }), _jsxs("div", { className: "text-right", children: [_jsx("div", { className: "text-2xl font-bold gradient-text-blue", children: course.price }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-4 h-4 text-amber-500" }), _jsx("span", { className: "text-sm", children: course.rating })] })] })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx(Badge, { variant: "outline", children: course.level }), _jsx(Button, { children: "Enroll Now" })] })] }, course.id))) }) }), _jsxs("div", { className: "space-y-6", children: [_jsxs(Card, { className: "glass p-6", children: [_jsx("h3", { className: "mb-4", children: "Learning Path" }), _jsx("div", { className: "space-y-4", children: ['AI Fundamentals', 'Machine Learning', 'Deep Learning', 'AI Ethics'].map((step, index) => (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-400", children: index + 1 }) }), _jsx("span", { className: "text-sm", children: step })] }, index))) })] }), _jsxs(Card, { className: "glass p-6", children: [_jsx("h3", { className: "mb-4", children: "Your Progress" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between text-sm mb-1", children: [_jsx("span", { children: "AI Fundamentals" }), _jsx("span", { children: "75%" })] }), _jsx(Progress, { value: 75, className: "h-2" })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex justify-between text-sm mb-1", children: [_jsx("span", { children: "Machine Learning" }), _jsx("span", { children: "30%" })] }), _jsx(Progress, { value: 30, className: "h-2" })] })] })] })] })] }) }), _jsx(TabsContent, { value: "certifications", children: _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: certifications.map((cert, index) => (_jsxs(Card, { className: "glass p-8", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx(Award, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }) }), _jsx("h3", { className: "text-center mb-4", children: cert.title }), _jsx("p", { className: "text-center text-foreground-muted mb-6", children: cert.description }), _jsxs("div", { className: "space-y-4 mb-6", children: [_jsx("h4", { className: "font-semibold", children: "Requirements:" }), _jsx("ul", { className: "space-y-2", children: cert.requirements.map((req, idx) => (_jsxs("li", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-green-600 dark:text-green-400" }), req] }, idx))) })] }), _jsxs("div", { className: "text-center", children: [_jsxs("p", { className: "text-sm text-foreground-muted mb-4", children: ["Valid for ", cert.validity] }), _jsx(Button, { className: "gradient-bg-blue text-white", children: "Start Certification Path" })] })] }, index))) }) }), _jsx(TabsContent, { value: "programs", children: _jsxs(Card, { className: "glass p-8 text-center", children: [_jsx("h2", { className: "mb-6", children: "Corporate Training Programs" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8 max-w-2xl mx-auto", children: "Custom training programs designed for organizations looking to upskill their teams in AI." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", className: "gradient-bg-blue text-white", children: [_jsx(Users, { className: "w-5 h-5 mr-2" }), "Request Corporate Training"] }), _jsxs(Button, { variant: "outline", size: "lg", children: [_jsx(Download, { className: "w-5 h-5 mr-2" }), "Download Brochure"] })] })] }) })] }) })] }));
}
//# sourceMappingURL=TrainingCertificationPage.js.map