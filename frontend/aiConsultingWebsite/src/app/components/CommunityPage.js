"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Users, MessageCircle, Calendar, Trophy, Star, ArrowRight, Heart, Zap, Globe, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
export function CommunityPage({ navigate }) {
    const [activeTab, setActiveTab] = useState('overview');
    const communityStats = [
        { label: "Active Members", value: "15,000+", icon: Users },
        { label: "Projects Shared", value: "2,400+", icon: Code },
        { label: "Events Hosted", value: "120+", icon: Calendar },
        { label: "Countries", value: "80+", icon: Globe }
    ];
    const featuredMembers = [
        {
            name: "Sarah Chen",
            role: "AI Research Lead",
            company: "TechCorp",
            location: "Singapore",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
            contributions: 156,
            speciality: "NLP"
        },
        {
            name: "Dr. Raj Patel",
            role: "ML Engineer",
            company: "DataLabs",
            location: "Mumbai, India",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
            contributions: 143,
            speciality: "Computer Vision"
        },
        {
            name: "Elena Rodriguez",
            role: "Product Manager",
            company: "AI Startup",
            location: "Madrid, Spain",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
            contributions: 127,
            speciality: "Product Strategy"
        },
        {
            name: "Ahmad Fitrianto",
            role: "Full Stack Developer",
            company: "Delibix",
            location: "Yogyakarta, Indonesia",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
            contributions: 198,
            speciality: "AI Integration"
        }
    ];
    const upcomingEvents = [
        {
            title: "AI Ethics Workshop",
            date: "Jan 25, 2025",
            time: "14:00 UTC",
            type: "Workshop",
            attendees: 89,
            maxAttendees: 100
        },
        {
            title: "Monthly Community Meetup",
            date: "Feb 1, 2025",
            time: "16:00 UTC",
            type: "Meetup",
            attendees: 234,
            maxAttendees: 300
        },
        {
            title: "Hackathon: Climate AI",
            date: "Feb 15-17, 2025",
            time: "All Day",
            type: "Hackathon",
            attendees: 156,
            maxAttendees: 200
        }
    ];
    const discussionTopics = [
        {
            title: "Best practices for fine-tuning large language models",
            author: "Sarah Chen",
            replies: 23,
            likes: 89,
            tag: "LLM",
            timeAgo: "2 hours ago"
        },
        {
            title: "Implementing real-time image recognition in mobile apps",
            author: "Dr. Raj Patel",
            replies: 17,
            likes: 56,
            tag: "Computer Vision",
            timeAgo: "4 hours ago"
        },
        {
            title: "Ethics considerations in AI product development",
            author: "Elena Rodriguez",
            replies: 31,
            likes: 102,
            tag: "Ethics",
            timeAgo: "6 hours ago"
        },
        {
            title: "Deploying AI models to production: lessons learned",
            author: "Ahmad Fitrianto",
            replies: 19,
            likes: 67,
            tag: "Deployment",
            timeAgo: "1 day ago"
        }
    ];
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
    const getTypeColor = (type) => {
        switch (type) {
            case 'Workshop': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
            case 'Meetup': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
            case 'Hackathon': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
            default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
        }
    };
    const getTagColor = (tag) => {
        const colors = {
            'LLM': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
            'Computer Vision': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
            'Ethics': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
            'Deployment': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
        };
        return colors[tag] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    };
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx("section", { className: "px-6 py-32 text-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900", children: _jsxs(motion.div, { className: "max-w-4xl mx-auto", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsx(motion.div, { variants: itemVariants, className: "flex justify-center mb-6", children: _jsx("div", { className: "w-16 h-16 rounded-2xl gradient-bg-blue flex items-center justify-center shadow-lg", children: _jsx(Users, { className: "w-8 h-8 text-white" }) }) }), _jsx(motion.h1, { variants: itemVariants, className: "mb-6 text-slate-900 dark:text-slate-100", children: "Join Our AI Community" }), _jsx(motion.p, { variants: itemVariants, className: "text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto", children: "Connect with AI enthusiasts, researchers, and developers from around the world. Share knowledge, collaborate on projects, and shape the future of AI together." }), _jsxs(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [_jsxs(Button, { onClick: () => navigate('community-forum'), className: "h-12 px-8 gradient-bg-blue text-white hover:opacity-90 transition-opacity", children: [_jsx(MessageCircle, { className: "w-4 h-4 mr-2" }), "Join Discussions"] }), _jsxs(Button, { onClick: () => navigate('events-workshops'), variant: "outline", className: "h-12 px-8 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: [_jsx(Calendar, { className: "w-4 h-4 mr-2" }), "View Events"] })] }), _jsx(motion.div, { variants: itemVariants, className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: communityStats.map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-3", children: _jsx(stat.icon, { className: "w-6 h-6" }) }), _jsx("div", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: stat.label })] }, index))) })] }) }), _jsx("section", { className: "px-6 py-8 border-b border-slate-200 dark:border-slate-800", children: _jsx("div", { className: "max-w-6xl mx-auto", children: _jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: [
                            { id: 'overview', label: 'Overview' },
                            { id: 'members', label: 'Featured Members' },
                            { id: 'events', label: 'Upcoming Events' },
                            { id: 'discussions', label: 'Latest Discussions' }
                        ].map((tab) => (_jsx("button", { onClick: () => setActiveTab(tab.id), className: `px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'}`, children: tab.label }, tab.id))) }) }) }), _jsx("section", { className: "px-6 py-20", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [activeTab === 'overview' && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "space-y-16", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-center mb-12 text-slate-900 dark:text-slate-100", children: "What Makes Our Community Special" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [_jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6", children: _jsx(MessageCircle, { className: "w-8 h-8" }) }), _jsx("h3", { className: "text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4", children: "Active Discussions" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: "Engage in meaningful conversations about AI, share insights, and learn from experts worldwide." })] }) }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6", children: _jsx(Code, { className: "w-8 h-8" }) }), _jsx("h3", { className: "text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4", children: "Open Source Projects" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: "Collaborate on cutting-edge AI projects and contribute to the open source ecosystem." })] }) }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("div", { className: "w-16 h-16 bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6", children: _jsx(Calendar, { className: "w-8 h-8" }) }), _jsx("h3", { className: "text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4", children: "Regular Events" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: "Join workshops, meetups, and hackathons to expand your skills and network." })] }) })] })] }), _jsxs("div", { className: "text-center bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-12", children: [_jsx("h3", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Ready to Join the Community?" }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto", children: "Become part of a global network of AI enthusiasts and professionals." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { onClick: () => navigate('community-forum'), className: "h-12 px-8 gradient-bg-blue text-white hover:opacity-90", children: "Join Community Forum" }), _jsx(Button, { onClick: () => navigate('contact'), variant: "outline", className: "h-12 px-8 border-blue-300 text-blue-600 hover:bg-blue-50", children: "Contact Community Team" })] })] })] })), activeTab === 'members' && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsx("h2", { className: "text-center mb-12 text-slate-900 dark:text-slate-100", children: "Featured Community Members" }), _jsx("div", { className: "grid md:grid-cols-2 gap-6", children: featuredMembers.map((member, index) => (_jsx(Card, { className: "glass card-hover", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsxs(Avatar, { className: "w-16 h-16", children: [_jsx(AvatarImage, { src: member.avatar, alt: member.name }), _jsx(AvatarFallback, { children: member.name.split(' ').map(n => n[0]).join('') })] }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-1", children: member.name }), _jsxs("p", { className: "text-sm text-slate-600 dark:text-slate-400 mb-1", children: [member.role, " at ", member.company] }), _jsx("p", { className: "text-sm text-slate-500 mb-3", children: member.location }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-4 h-4 text-yellow-500" }), _jsxs("span", { className: "text-sm font-medium", children: [member.contributions, " contributions"] })] }), _jsx(Badge, { className: "text-xs", children: member.speciality })] })] })] }) }) }, index))) })] })), activeTab === 'events' && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsx("h2", { className: "text-center mb-12 text-slate-900 dark:text-slate-100", children: "Upcoming Community Events" }), _jsx("div", { className: "space-y-6", children: upcomingEvents.map((event, index) => (_jsx(Card, { className: "glass card-hover", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-lg font-semibold text-slate-900 dark:text-slate-100", children: event.title }), _jsx(Badge, { className: `text-xs ${getTypeColor(event.type)}`, children: event.type })] }), _jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: [event.date, " \u2022 ", event.time] }), _jsxs("div", { className: "text-sm text-slate-500", children: [event.attendees, "/", event.maxAttendees, " attendees"] })] }), _jsx(Button, { className: "gradient-bg-blue text-white hover:opacity-90", children: "Join Event" })] }) }) }, index))) }), _jsx("div", { className: "text-center mt-8", children: _jsxs(Button, { onClick: () => navigate('events-workshops'), variant: "outline", className: "border-blue-300 text-blue-600 hover:bg-blue-50", children: ["View All Events", _jsx(ArrowRight, { className: "w-4 h-4 ml-2" })] }) })] })), activeTab === 'discussions' && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsx("h2", { className: "text-center mb-12 text-slate-900 dark:text-slate-100", children: "Latest Community Discussions" }), _jsx("div", { className: "space-y-4", children: discussionTopics.map((topic, index) => (_jsx(Card, { className: "glass card-hover cursor-pointer", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100", children: topic.title }), _jsx(Badge, { className: `text-xs ${getTagColor(topic.tag)}`, children: topic.tag })] }), _jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: ["by ", topic.author, " \u2022 ", topic.timeAgo] }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-500", children: [_jsxs("span", { children: [topic.replies, " replies"] }), _jsxs("span", { children: [topic.likes, " likes"] })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Heart, { className: "w-4 h-4 text-red-500" }), _jsx("span", { className: "text-sm font-medium", children: topic.likes })] })] }) }) }, index))) }), _jsx("div", { className: "text-center mt-8", children: _jsxs(Button, { onClick: () => navigate('community-forum'), variant: "outline", className: "border-blue-300 text-blue-600 hover:bg-blue-50", children: ["View All Discussions", _jsx(ArrowRight, { className: "w-4 h-4 ml-2" })] }) })] }))] }) })] }));
}
//# sourceMappingURL=CommunityPage.js.map