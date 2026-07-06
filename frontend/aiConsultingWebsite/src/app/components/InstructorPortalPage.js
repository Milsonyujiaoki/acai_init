"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Users, BookOpen, Star, Award, TrendingUp, BarChart3, Calendar, MessageSquare, Video, FileText, Upload, Download, Settings, Bell, Clock, Target, CheckCircle2, ChevronRight, Play, Edit, Eye, DollarSign, Globe, Activity, Monitor, Lightbulb, Shield, Database, Zap, Brain, Network } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
export function InstructorPortalPage({ navigate }) {
    const [selectedTab, setSelectedTab] = useState("dashboard");
    const instructorStats = [
        { label: "Total Students", value: "2,847", change: "+12%", icon: Users, color: "text-blue-600" },
        { label: "Course Completion Rate", value: "94%", change: "+5%", icon: TrendingUp, color: "text-green-600" },
        { label: "Average Rating", value: "4.9", change: "+0.1", icon: Star, color: "text-yellow-600" },
        { label: "Revenue This Month", value: "$12,450", change: "+8%", icon: DollarSign, color: "text-purple-600" },
        { label: "Active Courses", value: "8", change: "+2", icon: BookOpen, color: "text-orange-600" },
        { label: "Hours Taught", value: "156", change: "+18", icon: Clock, color: "text-indigo-600" }
    ];
    const activeCourses = [
        {
            id: "ai-fundamentals",
            title: "AI Fundamentals for Business",
            students: 342,
            completion: 87,
            rating: 4.9,
            revenue: "$3,240",
            status: "Active",
            nextDeadline: "Assignment Review",
            dueDate: "2024-06-15"
        },
        {
            id: "machine-learning",
            title: "Machine Learning Implementation",
            students: 189,
            completion: 92,
            rating: 4.8,
            revenue: "$2,835",
            status: "Active",
            nextDeadline: "Course Update",
            dueDate: "2024-06-18"
        },
        {
            id: "digital-strategy",
            title: "Digital Strategy Masterclass",
            students: 256,
            completion: 89,
            rating: 4.9,
            revenue: "$3,840",
            status: "Active",
            nextDeadline: "Live Session",
            dueDate: "2024-06-16"
        },
        {
            id: "ai-ethics",
            title: "AI Ethics & Governance",
            students: 97,
            completion: 94,
            rating: 4.7,
            revenue: "$1,455",
            status: "New",
            nextDeadline: "Content Review",
            dueDate: "2024-06-20"
        }
    ];
    const recentActivities = [
        {
            type: "student_question",
            message: "New question from Sarah Chen in AI Fundamentals",
            time: "5 minutes ago",
            priority: "high"
        },
        {
            type: "course_completion",
            message: "25 students completed Machine Learning Module 3",
            time: "2 hours ago",
            priority: "medium"
        },
        {
            type: "review_received",
            message: "New 5-star review for Digital Strategy course",
            time: "4 hours ago",
            priority: "low"
        },
        {
            type: "payment_received",
            message: "Monthly earnings payment of $2,340 processed",
            time: "1 day ago",
            priority: "medium"
        },
        {
            type: "course_milestone",
            message: "AI Ethics course reached 100 students milestone",
            time: "2 days ago",
            priority: "low"
        }
    ];
    const upcomingSchedule = [
        {
            type: "live_session",
            title: "AI Strategy Live Q&A",
            course: "Digital Strategy Masterclass",
            date: "2024-06-16",
            time: "14:00 UTC",
            participants: 45
        },
        {
            type: "assignment_deadline",
            title: "Module 4 Assignment Review",
            course: "AI Fundamentals for Business",
            date: "2024-06-17",
            time: "23:59 UTC",
            submissions: 234
        },
        {
            type: "webinar",
            title: "Future of AI in Business",
            course: "Public Webinar",
            date: "2024-06-20",
            time: "16:00 UTC",
            participants: 150
        },
        {
            type: "office_hours",
            title: "Office Hours - ML Implementation",
            course: "Machine Learning Implementation",
            date: "2024-06-18",
            time: "10:00 UTC",
            participants: 12
        }
    ];
    const instructorResources = [
        {
            category: "Teaching Tools",
            icon: Monitor,
            resources: [
                "Interactive lesson builder",
                "Assignment creation tools",
                "Quiz and assessment maker",
                "Live session platform",
                "Student progress tracking",
                "Grade book management"
            ]
        },
        {
            category: "Content Library",
            icon: Database,
            resources: [
                "Course template library",
                "Stock image collection",
                "Video editing tools",
                "Presentation templates",
                "Code snippet library",
                "Case study database"
            ]
        },
        {
            category: "Analytics & Insights",
            icon: BarChart3,
            resources: [
                "Student engagement analytics",
                "Course performance metrics",
                "Revenue tracking",
                "Completion rate analysis",
                "Feedback sentiment analysis",
                "Market trend insights"
            ]
        },
        {
            category: "Support & Training",
            icon: Lightbulb,
            resources: [
                "Instructor best practices guide",
                "Video recording tutorials",
                "Course marketing strategies",
                "Student engagement techniques",
                "Technology training",
                "Peer instructor community"
            ]
        }
    ];
    const certificationStatus = {
        current: [
            { name: "Certified AI Instructor", level: "Advanced", earned: "2023-09-15", expires: "2025-09-15" },
            { name: "Digital Strategy Expert", level: "Master", earned: "2023-12-20", expires: "2025-12-20" },
            { name: "Machine Learning Specialist", level: "Professional", earned: "2024-02-10", expires: "2026-02-10" }
        ],
        available: [
            { name: "Quantum Computing Educator", level: "Emerging", duration: "40 hours", cost: "Free" },
            { name: "Web3 Technology Instructor", level: "Advanced", duration: "60 hours", cost: "Free" },
            { name: "IoT Systems Trainer", level: "Professional", duration: "50 hours", cost: "Free" }
        ]
    };
    const getPriorityColor = (priority) => {
        switch (priority) {
            case "high": return "text-red-600 bg-red-100 dark:bg-red-900/30";
            case "medium": return "text-orange-600 bg-orange-100 dark:bg-orange-900/30";
            case "low": return "text-green-600 bg-green-100 dark:bg-green-900/30";
            default: return "text-gray-600 bg-gray-100 dark:bg-gray-800";
        }
    };
    const getActivityIcon = (type) => {
        switch (type) {
            case "student_question": return MessageSquare;
            case "course_completion": return CheckCircle2;
            case "review_received": return Star;
            case "payment_received": return DollarSign;
            case "course_milestone": return Award;
            default: return Bell;
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-purple-100/40 dark:from-purple-950/20 dark:via-blue-950/10 dark:to-purple-900/20" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(139,69,244,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-purple-200/30 dark:bg-purple-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-blue-300/40 dark:bg-blue-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-purple-400/35 dark:bg-purple-400/25 rounded-full blur-md float-delayed-2" })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(GraduationCap, { className: "w-12 h-12 text-purple-600 dark:text-purple-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "Instructor" }), ' ', _jsx("span", { className: "text-purple-600", children: "Portal" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Empower the next generation of AI professionals. Manage your courses, track student progress, and grow your teaching impact at Delibix Academy." }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8", children: instructorStats.map((stat, index) => {
                                                const Icon = stat.icon;
                                                return (_jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx(Icon, { className: `w-6 h-6 ${stat.color} mx-auto mb-2` }), _jsx("div", { className: "text-lg font-bold text-purple-600", children: stat.value }), _jsx("div", { className: "text-xs text-foreground-muted", children: stat.label }), _jsx("div", { className: "text-xs text-green-600", children: stat.change })] }, index));
                                            }) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "glass p-6 rounded-2xl mb-8 max-w-3xl mx-auto", children: _jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx(Avatar, { className: "w-16 h-16", children: _jsx(AvatarFallback, { className: "bg-purple-600 text-white text-lg font-bold", children: "DR" }) }), _jsxs("div", { className: "text-left", children: [_jsx("h2", { className: "text-2xl font-bold", children: "Welcome back, Dr. Rodriguez!" }), _jsx("p", { className: "text-foreground-muted", children: "AI Strategy & Digital Transformation Expert" }), _jsxs("div", { className: "flex items-center gap-2 mt-1", children: [_jsx(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", children: "Master Instructor" }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }), _jsx("span", { className: "text-sm font-medium", children: "4.9 Rating" })] })] })] })] }) })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "dashboard", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-5 glass", children: [_jsx(TabsTrigger, { value: "dashboard", children: "Dashboard" }), _jsx(TabsTrigger, { value: "courses", children: "My Courses" }), _jsx(TabsTrigger, { value: "students", children: "Students" }), _jsx(TabsTrigger, { value: "resources", children: "Resources" }), _jsx(TabsTrigger, { value: "certification", children: "Certification" })] }), _jsx(TabsContent, { value: "dashboard", className: "space-y-8 mt-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsxs("div", { className: "lg:col-span-2 space-y-6", children: [_jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(BarChart3, { className: "w-6 h-6 text-purple-600" }), "Performance Overview"] }), _jsx(CardDescription, { children: "Your teaching metrics for this month" })] }), _jsx(CardContent, { children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: instructorStats.map((stat, index) => {
                                                                    const Icon = stat.icon;
                                                                    return (_jsxs("div", { className: "text-center p-4 glass-blue-light rounded-lg", children: [_jsx(Icon, { className: `w-8 h-8 ${stat.color} mx-auto mb-2` }), _jsx("div", { className: "text-2xl font-bold", children: stat.value }), _jsx("div", { className: "text-sm text-foreground-muted", children: stat.label }), _jsxs("div", { className: `text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`, children: [stat.change, " this month"] })] }, index));
                                                                }) }) })] }), _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(BookOpen, { className: "w-6 h-6 text-blue-600" }), "Active Courses"] }), _jsx(CardDescription, { children: "Manage your current course offerings" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: activeCourses.map((course, index) => (_jsxs("div", { className: "glass-blue-light p-4 rounded-lg", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg", children: course.title }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-foreground-muted", children: [_jsxs("span", { children: [course.students, " students"] }), _jsxs("span", { children: [course.completion, "% completion"] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-3 h-3 fill-yellow-400 text-yellow-400" }), _jsx("span", { children: course.rating })] })] })] }), _jsxs("div", { className: "text-right", children: [_jsx("div", { className: "text-lg font-bold text-green-600", children: course.revenue }), _jsx(Badge, { className: course.status === 'New' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', children: course.status })] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "text-sm", children: [_jsx("span", { className: "font-medium", children: "Next: " }), _jsx("span", { children: course.nextDeadline }), _jsxs("span", { className: "text-foreground-muted", children: [" - ", course.dueDate] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Eye, { className: "w-4 h-4 mr-1" }), "View"] }), _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Edit, { className: "w-4 h-4 mr-1" }), "Edit"] })] })] })] }, index))) }) })] })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Activity, { className: "w-5 h-5 text-green-600" }), "Recent Activities"] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-3", children: recentActivities.map((activity, index) => {
                                                                    const Icon = getActivityIcon(activity.type);
                                                                    return (_jsxs("div", { className: "flex items-start gap-3 p-3 glass-blue-light rounded-lg", children: [_jsx(Icon, { className: "w-4 h-4 text-blue-600 mt-0.5" }), _jsxs("div", { className: "flex-grow", children: [_jsx("p", { className: "text-sm", children: activity.message }), _jsxs("div", { className: "flex items-center gap-2 mt-1", children: [_jsx("span", { className: "text-xs text-foreground-muted", children: activity.time }), _jsx(Badge, { className: getPriorityColor(activity.priority), variant: "secondary", children: activity.priority })] })] })] }, index));
                                                                }) }) })] }), _jsxs(Card, { className: "glass", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "w-5 h-5 text-orange-600" }), "Upcoming Schedule"] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-3", children: upcomingSchedule.map((item, index) => (_jsxs("div", { className: "p-3 glass-blue-light rounded-lg", children: [_jsx("h4", { className: "font-medium text-sm", children: item.title }), _jsx("p", { className: "text-xs text-foreground-muted", children: item.course }), _jsxs("div", { className: "flex items-center justify-between mt-2", children: [_jsxs("span", { className: "text-xs", children: [item.date, " at ", item.time] }), _jsxs(Badge, { variant: "outline", className: "text-xs", children: [item.participants || item.submissions, " participants"] })] })] }, index))) }) })] })] })] }) }), _jsxs(TabsContent, { value: "courses", className: "space-y-6 mt-8", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h2", { className: "text-2xl font-bold", children: "Course Management" }), _jsxs(Button, { className: "gradient-bg-blue text-white", children: [_jsx(Plus, { className: "w-4 h-4 mr-2" }), "Create New Course"] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: activeCourses.map((course, index) => (_jsx(Card, { className: "glass-heavy card-hover", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsx(Badge, { className: course.status === 'New' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', children: course.status }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }), _jsx("span", { className: "text-sm font-medium", children: course.rating })] })] }), _jsx("h3", { className: "font-semibold text-lg mb-2", children: course.title }), _jsxs("div", { className: "space-y-3 mb-4", children: [_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { children: "Students Enrolled:" }), _jsx("span", { className: "font-medium", children: course.students })] }), _jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { children: "Completion Rate:" }), _jsxs("span", { className: "font-medium", children: [course.completion, "%"] })] }), _jsx(Progress, { value: course.completion, className: "h-2" })] }), _jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { children: "Revenue:" }), _jsx("span", { className: "font-bold text-green-600", children: course.revenue })] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { variant: "outline", size: "sm", className: "flex-1", children: [_jsx(Play, { className: "w-4 h-4 mr-1" }), "Preview"] }), _jsxs(Button, { variant: "outline", size: "sm", className: "flex-1", children: [_jsx(BarChart3, { className: "w-4 h-4 mr-1" }), "Analytics"] })] })] }) }, index))) })] }), _jsx(TabsContent, { value: "students", className: "space-y-6 mt-8", children: _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Users, { className: "w-6 h-6 text-blue-600" }), "Student Analytics"] }), _jsx(CardDescription, { children: "Overview of your student base and engagement" })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6", children: [_jsxs("div", { className: "text-center p-4 glass-blue-light rounded-lg", children: [_jsx(Users, { className: "w-8 h-8 text-blue-600 mx-auto mb-2" }), _jsx("div", { className: "text-2xl font-bold", children: "2,847" }), _jsx("div", { className: "text-sm text-foreground-muted", children: "Total Students" })] }), _jsxs("div", { className: "text-center p-4 glass-blue-light rounded-lg", children: [_jsx(TrendingUp, { className: "w-8 h-8 text-green-600 mx-auto mb-2" }), _jsx("div", { className: "text-2xl font-bold", children: "94%" }), _jsx("div", { className: "text-sm text-foreground-muted", children: "Avg Completion" })] }), _jsxs("div", { className: "text-center p-4 glass-blue-light rounded-lg", children: [_jsx(Star, { className: "w-8 h-8 text-yellow-600 mx-auto mb-2" }), _jsx("div", { className: "text-2xl font-bold", children: "4.9" }), _jsx("div", { className: "text-sm text-foreground-muted", children: "Avg Rating" })] }), _jsxs("div", { className: "text-center p-4 glass-blue-light rounded-lg", children: [_jsx(MessageSquare, { className: "w-8 h-8 text-purple-600 mx-auto mb-2" }), _jsx("div", { className: "text-2xl font-bold", children: "156" }), _jsx("div", { className: "text-sm text-foreground-muted", children: "Active Discussions" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs(Button, { variant: "outline", className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(MessageSquare, { className: "w-6 h-6" }), _jsx("span", { children: "Q&A Forum" }), _jsx("span", { className: "text-xs text-foreground-muted", children: "24 new questions" })] }), _jsxs(Button, { variant: "outline", className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(Video, { className: "w-6 h-6" }), _jsx("span", { children: "Live Sessions" }), _jsx("span", { className: "text-xs text-foreground-muted", children: "Next: Tomorrow 2PM" })] }), _jsxs(Button, { variant: "outline", className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(Award, { className: "w-6 h-6" }), _jsx("span", { children: "Certificates" }), _jsx("span", { className: "text-xs text-foreground-muted", children: "89 pending reviews" })] })] })] })] }) }), _jsx(TabsContent, { value: "resources", className: "space-y-6 mt-8", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: instructorResources.map((resource, index) => {
                                        const Icon = resource.icon;
                                        return (_jsxs(Card, { className: "glass-heavy", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl", children: _jsx(Icon, { className: "w-8 h-8 text-purple-600 dark:text-purple-400" }) }), _jsx("div", { children: _jsx(CardTitle, { className: "text-lg", children: resource.category }) })] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-3", children: resource.resources.map((item, itemIndex) => (_jsxs("div", { className: "flex items-center justify-between p-3 glass-blue-light rounded-lg", children: [_jsx("span", { className: "text-sm", children: item }), _jsx(ChevronRight, { className: "w-4 h-4 text-foreground-muted" })] }, itemIndex))) }) })] }, index));
                                    }) }) }), _jsx(TabsContent, { value: "certification", className: "space-y-6 mt-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [_jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Award, { className: "w-6 h-6 text-gold-600" }), "Current Certifications"] }), _jsx(CardDescription, { children: "Your active instructor certifications" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: certificationStatus.current.map((cert, index) => (_jsxs("div", { className: "p-4 glass-blue-light rounded-lg", children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsx("h3", { className: "font-semibold", children: cert.name }), _jsx(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: cert.level })] }), _jsxs("div", { className: "text-sm text-foreground-muted", children: [_jsxs("div", { children: ["Earned: ", cert.earned] }), _jsxs("div", { children: ["Expires: ", cert.expires] })] })] }, index))) }) })] }), _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Target, { className: "w-6 h-6 text-blue-600" }), "Available Certifications"] }), _jsx(CardDescription, { children: "Expand your expertise with new certifications" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: certificationStatus.available.map((cert, index) => (_jsxs("div", { className: "p-4 glass-blue-light rounded-lg", children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsx("h3", { className: "font-semibold", children: cert.name }), _jsx(Badge, { variant: "outline", children: cert.level })] }), _jsxs("div", { className: "text-sm text-foreground-muted mb-3", children: [_jsxs("div", { children: ["Duration: ", cert.duration] }), _jsxs("div", { children: ["Cost: ", cert.cost] })] }), _jsxs(Button, { size: "sm", className: "w-full", children: [_jsx(GraduationCap, { className: "w-4 h-4 mr-2" }), "Start Certification"] })] }, index))) }) })] })] }) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16", children: _jsx(Card, { className: "glass w-full", children: _jsxs(CardContent, { className: "p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Ready to Expand Your Impact?" }), _jsx("p", { className: "text-foreground-muted max-w-2xl mx-auto", children: "Take your teaching to the next level with advanced tools, new courses, and expanded reach." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [_jsxs(Button, { className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(BookOpen, { className: "w-6 h-6" }), _jsx("span", { children: "Create Course" })] }), _jsxs(Button, { variant: "outline", className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(Video, { className: "w-6 h-6" }), _jsx("span", { children: "Schedule Live Session" })] }), _jsxs(Button, { variant: "outline", className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(BarChart3, { className: "w-6 h-6" }), _jsx("span", { children: "View Analytics" })] }), _jsxs(Button, { variant: "outline", className: "h-auto p-4 flex flex-col items-center gap-2", children: [_jsx(MessageSquare, { className: "w-6 h-6" }), _jsx("span", { children: "Contact Support" })] })] })] }) }) })] })] }));
}
//# sourceMappingURL=InstructorPortalPage.js.map