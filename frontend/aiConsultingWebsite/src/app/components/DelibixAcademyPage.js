"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, BookOpen, Award, Users, Play, Clock, Star, ChevronRight, Download, Certificate, Brain, TrendingUp, Target, Lightbulb, Code, Database, Shield, Rocket, HeartHandshake, CheckCircle2, ArrowRight, Video, FileText, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback } from "./ui/avatar";
export function DelibixAcademyPage({ navigate }) {
    const [selectedTrack, setSelectedTrack] = useState("ai-fundamentals");
    const learningTracks = [
        {
            id: "ai-fundamentals",
            title: "AI Fundamentals",
            description: "Master the core concepts of artificial intelligence and machine learning",
            level: "Beginner",
            duration: "6 weeks",
            modules: 12,
            icon: Brain,
            color: "bg-blue-500",
            enrolled: 2847,
            rating: 4.9,
            skills: ["Machine Learning Basics", "AI Ethics", "Data Science", "Python Programming"]
        },
        {
            id: "digital-strategy",
            title: "Digital Strategy",
            description: "Learn to develop and execute comprehensive digital transformation strategies",
            level: "Intermediate",
            duration: "8 weeks",
            modules: 16,
            icon: Target,
            color: "bg-purple-500",
            enrolled: 1923,
            rating: 4.8,
            skills: ["Strategic Planning", "Digital Leadership", "Change Management", "Innovation"]
        },
        {
            id: "ai-implementation",
            title: "AI Implementation",
            description: "Hands-on experience implementing AI solutions in enterprise environments",
            level: "Advanced",
            duration: "10 weeks",
            modules: 20,
            icon: Code,
            color: "bg-green-500",
            enrolled: 1456,
            rating: 4.9,
            skills: ["MLOps", "Cloud AI", "Model Deployment", "System Integration"]
        },
        {
            id: "data-governance",
            title: "Data Governance & Ethics",
            description: "Understand responsible AI practices and data management frameworks",
            level: "Intermediate",
            duration: "6 weeks",
            modules: 14,
            icon: Shield,
            color: "bg-orange-500",
            enrolled: 1789,
            rating: 4.7,
            skills: ["Data Privacy", "AI Ethics", "Compliance", "Risk Management"]
        }
    ];
    const featuredCourses = [
        {
            title: "Introduction to Generative AI",
            instructor: "Dr. Sarah Chen",
            duration: "3 hours",
            level: "Beginner",
            rating: 4.9,
            students: 15420,
            description: "Explore the fundamentals of generative AI and its business applications",
            thumbnail: "🤖"
        },
        {
            title: "AI Strategy for Executives",
            instructor: "Michael Rodriguez",
            duration: "2.5 hours",
            level: "Executive",
            rating: 4.8,
            students: 8930,
            description: "Strategic framework for AI adoption in enterprise environments",
            thumbnail: "🎯"
        },
        {
            title: "Machine Learning in Production",
            instructor: "Dr. Amit Patel",
            duration: "6 hours",
            level: "Advanced",
            rating: 4.9,
            students: 5670,
            description: "Deploy and maintain ML models in production environments",
            thumbnail: "⚙️"
        },
        {
            title: "Data Ethics & AI Bias",
            instructor: "Dr. Lisa Thompson",
            duration: "4 hours",
            level: "Intermediate",
            rating: 4.7,
            students: 7890,
            description: "Understanding and mitigating bias in AI systems",
            thumbnail: "⚖️"
        }
    ];
    const achievements = [
        { label: "Total Students", value: "50,000+", icon: Users },
        { label: "Course Completion Rate", value: "94%", icon: CheckCircle2 },
        { label: "Industry Certifications", value: "25+", icon: Award },
        { label: "Expert Instructors", value: "150+", icon: GraduationCap }
    ];
    const selectedTrackData = learningTracks.find(track => track.id === selectedTrack);
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/60 dark:from-blue-950/40 dark:via-background dark:to-blue-900/30" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-blue-300/40 dark:bg-blue-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-blue-400/35 dark:bg-blue-400/25 rounded-full blur-md float-delayed-2" })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(GraduationCap, { className: "w-12 h-12 text-blue-600 dark:text-blue-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "Delibix" }), ' ', _jsx("span", { className: "gradient-text-blue-light", children: "Academy" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Master AI and digital transformation with our comprehensive learning platform. From fundamentals to advanced implementation." }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8", children: achievements.map((achievement, index) => {
                                                const Icon = achievement.icon;
                                                return (_jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx(Icon, { className: "w-6 h-6 text-blue-600 mx-auto mb-2" }), _jsx("div", { className: "text-xl font-bold text-blue-600", children: achievement.value }), _jsx("div", { className: "text-xs text-foreground-muted", children: achievement.label })] }, index));
                                            }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { onClick: () => navigate('course-catalog'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(BookOpen, { className: "w-5 h-5 mr-2" }), "Explore Courses"] }), _jsxs(Button, { onClick: () => navigate('certification-program'), variant: "outline", size: "lg", className: "glass-blue-light border-blue-200 dark:border-blue-700 hover:glass-blue transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Award, { className: "w-5 h-5 mr-2" }), "Get Certified"] })] })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "tracks", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-3 glass", children: [_jsx(TabsTrigger, { value: "tracks", children: "Learning Tracks" }), _jsx(TabsTrigger, { value: "courses", children: "Featured Courses" }), _jsx(TabsTrigger, { value: "instructors", children: "Expert Instructors" })] }), _jsxs(TabsContent, { value: "tracks", className: "space-y-8 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Target, { className: "w-6 h-6 text-blue-600" }), "Structured Learning Paths"] }), _jsx(CardDescription, { children: "Choose your learning journey based on your experience level and career goals" })] }), _jsx(CardContent, { children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: learningTracks.map((track, index) => {
                                                        const Icon = track.icon;
                                                        const isSelected = track.id === selectedTrack;
                                                        return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: `cursor-pointer ${isSelected ? 'ring-2 ring-blue-500' : ''}`, onClick: () => setSelectedTrack(track.id), children: _jsxs(Card, { className: `glass-heavy h-full card-hover ${isSelected ? 'bg-blue-50/50 dark:bg-blue-950/30' : ''}`, children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: `p-3 ${track.color} rounded-xl text-white`, children: _jsx(Icon, { className: "w-6 h-6" }) }), _jsxs("div", { className: "flex-grow", children: [_jsx(CardTitle, { className: "text-lg", children: track.title }), _jsxs("div", { className: "flex items-center gap-2 mt-1", children: [_jsx(Badge, { variant: "secondary", children: track.level }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-3 h-3 fill-yellow-400 text-yellow-400" }), _jsx("span", { className: "text-xs", children: track.rating })] })] })] })] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-foreground-muted mb-4", children: track.description }), _jsxs("div", { className: "grid grid-cols-3 gap-2 text-sm mb-4", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-3 h-3" }), _jsx("span", { children: track.duration })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(BookOpen, { className: "w-3 h-3" }), _jsxs("span", { children: [track.modules, " modules"] })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Users, { className: "w-3 h-3" }), _jsx("span", { children: track.enrolled.toLocaleString() })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("p", { className: "text-xs font-medium text-foreground-muted", children: "Key Skills:" }), _jsxs("div", { className: "flex flex-wrap gap-1", children: [track.skills.slice(0, 3).map((skill, idx) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: skill }, idx))), track.skills.length > 3 && (_jsxs(Badge, { variant: "outline", className: "text-xs", children: ["+", track.skills.length - 3, " more"] }))] })] })] })] }) }, track.id));
                                                    }) }) })] }), selectedTrackData && (_jsxs(Card, { className: "glass w-full bg-blue-50/50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-700", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "text-blue-700 dark:text-blue-300", children: [selectedTrackData.title, " - Learning Path"] }), _jsx(CardDescription, { children: "Detailed curriculum and progression for this track" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "md:col-span-2 space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-2", children: "What You'll Learn:" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: selectedTrackData.skills.map((skill, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }), _jsx("span", { className: "text-sm", children: skill })] }, index))) })] }), _jsxs("div", { className: "pt-4 border-t border-blue-200 dark:border-blue-700", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "text-sm font-medium", children: "Track Progress" }), _jsx("span", { className: "text-sm text-blue-600", children: "0% Complete" })] }), _jsx(Progress, { value: 0, className: "h-2" }), _jsx("p", { className: "text-xs text-foreground-muted mt-1", children: "Start your journey today and track your progress" })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "glass-blue-light p-4 rounded-lg", children: [_jsx("h4", { className: "font-semibold mb-2", children: "Track Details" }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Level:" }), _jsx("span", { className: "font-medium", children: selectedTrackData.level })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Duration:" }), _jsx("span", { className: "font-medium", children: selectedTrackData.duration })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Modules:" }), _jsx("span", { className: "font-medium", children: selectedTrackData.modules })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Enrolled:" }), _jsx("span", { className: "font-medium", children: selectedTrackData.enrolled.toLocaleString() })] })] })] }), _jsxs(Button, { className: "w-full", onClick: () => navigate('signup'), children: [_jsx(Rocket, { className: "w-4 h-4 mr-2" }), "Start Learning"] })] })] }) })] }))] }), _jsxs(TabsContent, { value: "courses", className: "space-y-6 mt-8", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6", children: featuredCourses.map((course, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsxs(Card, { className: "glass-heavy h-full card-hover", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "text-4xl", children: course.thumbnail }), _jsxs("div", { className: "flex-grow", children: [_jsx(CardTitle, { className: "text-lg mb-2", children: course.title }), _jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Badge, { variant: "outline", children: course.level }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-3 h-3 fill-yellow-400 text-yellow-400" }), _jsx("span", { className: "text-xs", children: course.rating })] })] }), _jsx("p", { className: "text-sm text-foreground-muted", children: course.instructor })] })] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-foreground-muted mb-4", children: course.description }), _jsx("div", { className: "flex items-center justify-between text-sm mb-4", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-3 h-3" }), _jsx("span", { children: course.duration })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Users, { className: "w-3 h-3" }), _jsx("span", { children: course.students.toLocaleString() })] })] }) }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { size: "sm", className: "flex-grow", children: [_jsx(Play, { className: "w-4 h-4 mr-2" }), "Start Course"] }), _jsx(Button, { variant: "outline", size: "sm", children: _jsx(Download, { className: "w-4 h-4" }) })] })] })] }) }, index))) }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Browse by Category" }), _jsx(CardDescription, { children: "Explore courses organized by topics and specializations" })] }), _jsx(CardContent, { children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
                                                        { name: "AI Fundamentals", count: "24 courses", icon: Brain },
                                                        { name: "Machine Learning", count: "18 courses", icon: TrendingUp },
                                                        { name: "Data Science", count: "16 courses", icon: Database },
                                                        { name: "Digital Strategy", count: "12 courses", icon: Target },
                                                        { name: "Ethics & Governance", count: "8 courses", icon: Shield },
                                                        { name: "Implementation", count: "14 courses", icon: Code },
                                                        { name: "Leadership", count: "10 courses", icon: Users },
                                                        { name: "Innovation", count: "6 courses", icon: Lightbulb }
                                                    ].map((category, index) => {
                                                        const Icon = category.icon;
                                                        return (_jsxs(Button, { variant: "outline", className: "h-auto p-4 flex flex-col items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/30", onClick: () => navigate('course-catalog'), children: [_jsx(Icon, { className: "w-6 h-6 text-blue-600" }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "font-medium text-sm", children: category.name }), _jsx("div", { className: "text-xs text-foreground-muted", children: category.count })] })] }, index));
                                                    }) }) })] })] }), _jsx(TabsContent, { value: "instructors", className: "space-y-6 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Award, { className: "w-6 h-6 text-blue-600" }), "World-Class Instructors"] }), _jsx(CardDescription, { children: "Learn from industry experts and thought leaders in AI and digital transformation" })] }), _jsx(CardContent, { children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
                                                    {
                                                        name: "Dr. Sarah Chen",
                                                        title: "AI Research Director",
                                                        expertise: "Generative AI, NLP",
                                                        courses: 8,
                                                        students: 15420,
                                                        rating: 4.9,
                                                        bio: "Former Google AI researcher with 15+ years in machine learning and natural language processing."
                                                    },
                                                    {
                                                        name: "Michael Rodriguez",
                                                        title: "Digital Transformation Expert",
                                                        expertise: "Strategy, Leadership",
                                                        courses: 6,
                                                        students: 12350,
                                                        rating: 4.8,
                                                        bio: "Ex-McKinsey partner who led digital transformation for Fortune 500 companies."
                                                    },
                                                    {
                                                        name: "Dr. Amit Patel",
                                                        title: "MLOps Specialist",
                                                        expertise: "Production ML, DevOps",
                                                        courses: 10,
                                                        students: 9870,
                                                        rating: 4.9,
                                                        bio: "Senior engineer at Netflix, specialist in scaling machine learning systems."
                                                    },
                                                    {
                                                        name: "Dr. Lisa Thompson",
                                                        title: "AI Ethics Researcher",
                                                        expertise: "Ethics, Bias, Governance",
                                                        courses: 5,
                                                        students: 7890,
                                                        rating: 4.7,
                                                        bio: "Stanford professor and leading researcher in responsible AI and algorithmic fairness."
                                                    },
                                                    {
                                                        name: "James Wilson",
                                                        title: "Enterprise Architect",
                                                        expertise: "System Design, Integration",
                                                        courses: 7,
                                                        students: 11200,
                                                        rating: 4.8,
                                                        bio: "20+ years designing enterprise systems, currently CTO at a leading AI startup."
                                                    },
                                                    {
                                                        name: "Dr. Maria Garcia",
                                                        title: "Data Science Director",
                                                        expertise: "Analytics, Visualization",
                                                        courses: 9,
                                                        students: 13450,
                                                        rating: 4.9,
                                                        bio: "Former Uber data science leader, expert in large-scale analytics and experimentation."
                                                    }
                                                ].map((instructor, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsx(Card, { className: "glass h-full card-hover", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx(Avatar, { className: "w-16 h-16", children: _jsx(AvatarFallback, { className: "bg-blue-600 text-white text-lg font-bold", children: instructor.name.split(' ').map(n => n[0]).join('') }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg", children: instructor.name }), _jsx("p", { className: "text-sm text-blue-600", children: instructor.title }), _jsx("p", { className: "text-xs text-foreground-muted", children: instructor.expertise })] })] }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: instructor.bio }), _jsxs("div", { className: "grid grid-cols-3 gap-2 text-sm mb-4", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "font-semibold", children: instructor.courses }), _jsx("div", { className: "text-xs text-foreground-muted", children: "Courses" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "font-semibold", children: instructor.students.toLocaleString() }), _jsx("div", { className: "text-xs text-foreground-muted", children: "Students" })] }), _jsxs("div", { className: "text-center", children: [_jsxs("div", { className: "font-semibold flex items-center justify-center gap-1", children: [_jsx(Star, { className: "w-3 h-3 fill-yellow-400 text-yellow-400" }), instructor.rating] }), _jsx("div", { className: "text-xs text-foreground-muted", children: "Rating" })] })] }), _jsxs(Button, { variant: "outline", size: "sm", className: "w-full", children: [_jsx(MessageSquare, { className: "w-4 h-4 mr-2" }), "View Profile"] })] }) }) }, index))) }) })] }) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16", children: _jsx(Card, { className: "glass w-full bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 dark:from-blue-950/30 dark:via-background dark:to-blue-950/30", children: _jsx(CardContent, { className: "p-12", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Start Your AI Learning Journey Today" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "Join thousands of professionals who have advanced their careers with Delibix Academy." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('signup'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-4", children: [_jsx(GraduationCap, { className: "w-5 h-5 mr-2" }), "Enroll Now"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('course-catalog'), size: "lg", className: "px-8 py-4", children: [_jsx(BookOpen, { className: "w-5 h-5 mr-2" }), "Browse Catalog"] })] })] }) }) }) })] })] }));
}
//# sourceMappingURL=DelibixAcademyPage.js.map