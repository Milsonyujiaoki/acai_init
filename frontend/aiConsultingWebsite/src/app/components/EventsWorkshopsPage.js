"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Users, Clock, Star, Video, Trophy, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
export function EventsWorkshopsPage({ navigate }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const eventCategories = [
        { id: 'all', name: 'All Events', count: 15 },
        { id: 'workshop', name: 'Workshops', count: 6 },
        { id: 'meetup', name: 'Meetups', count: 4 },
        { id: 'hackathon', name: 'Hackathons', count: 3 },
        { id: 'webinar', name: 'Webinars', count: 2 }
    ];
    const upcomingEvents = [
        {
            id: 1,
            title: "AI Ethics Workshop: Building Responsible AI Systems",
            type: "workshop",
            date: "2025-01-25",
            time: "14:00 - 17:00 UTC",
            location: "Online",
            maxAttendees: 100,
            currentAttendees: 87,
            price: "Free",
            level: "Intermediate",
            description: "Learn about ethical considerations in AI development, bias detection, and responsible deployment strategies.",
            speaker: {
                name: "Dr. Elena Rodriguez",
                role: "AI Ethics Researcher",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
            },
            topics: ["AI Ethics", "Bias Detection", "Responsible AI"],
            rating: 4.9,
            featured: true
        },
        {
            id: 2,
            title: "Monthly AI Community Meetup",
            type: "meetup",
            date: "2025-02-01",
            time: "16:00 - 18:00 UTC",
            location: "Hybrid (Yogyakarta + Online)",
            maxAttendees: 150,
            currentAttendees: 134,
            price: "Free",
            level: "All Levels",
            description: "Connect with fellow AI enthusiasts, share projects, and discuss the latest trends in artificial intelligence.",
            speaker: {
                name: "Ahmad Fitrianto",
                role: "CEO, Delibix",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
            },
            topics: ["Networking", "Project Showcase", "AI Trends"],
            rating: 4.8,
            featured: false
        },
        {
            id: 3,
            title: "Climate AI Hackathon 2025",
            type: "hackathon",
            date: "2025-02-15",
            time: "48 hours",
            location: "Global (Remote)",
            maxAttendees: 200,
            currentAttendees: 156,
            price: "Free",
            level: "Intermediate",
            description: "Build AI solutions to combat climate change. Win prizes and make a positive impact on our planet.",
            speaker: {
                name: "Dr. Sarah Chen",
                role: "CTO, Delibix",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
            },
            topics: ["Climate Change", "Sustainability", "Machine Learning"],
            rating: 4.9,
            featured: true
        },
        {
            id: 4,
            title: "Introduction to Large Language Models",
            type: "workshop",
            date: "2025-02-20",
            time: "13:00 - 16:00 UTC",
            location: "Online",
            maxAttendees: 80,
            currentAttendees: 45,
            price: "$29",
            level: "Beginner",
            description: "Get started with LLMs, understand their architecture, and learn how to use them in your projects.",
            speaker: {
                name: "Dr. Raj Patel",
                role: "Head of AI Research",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
            },
            topics: ["LLM", "Natural Language Processing", "Transformers"],
            rating: 4.7,
            featured: false
        },
        {
            id: 5,
            title: "Computer Vision for Mobile Apps",
            type: "webinar",
            date: "2025-03-05",
            time: "15:00 - 16:30 UTC",
            location: "Online",
            maxAttendees: 300,
            currentAttendees: 178,
            price: "Free",
            level: "Intermediate",
            description: "Learn how to implement computer vision features in mobile applications using modern frameworks.",
            speaker: {
                name: "Maria Santos",
                role: "Lead UX Designer",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
            },
            topics: ["Computer Vision", "Mobile Development", "UI/UX"],
            rating: 4.6,
            featured: false
        },
        {
            id: 6,
            title: "AI Startup Pitch Competition",
            type: "hackathon",
            date: "2025-03-20",
            time: "19:00 - 21:00 UTC",
            location: "Hybrid (Singapore + Online)",
            maxAttendees: 100,
            currentAttendees: 67,
            price: "Free",
            level: "All Levels",
            description: "Present your AI startup idea to investors and industry experts. Win funding and mentorship opportunities.",
            speaker: {
                name: "Alex Thompson",
                role: "Venture Partner",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
            },
            topics: ["Entrepreneurship", "Pitching", "Investment"],
            rating: 4.8,
            featured: true
        }
    ];
    const pastEvents = [
        {
            title: "Deep Learning Fundamentals Workshop",
            date: "Dec 15, 2024",
            attendees: 95,
            rating: 4.9,
            recording: true
        },
        {
            title: "AI in Healthcare Symposium",
            date: "Nov 28, 2024",
            attendees: 156,
            rating: 4.8,
            recording: true
        },
        {
            title: "NLP Innovation Hackathon",
            date: "Oct 20, 2024",
            attendees: 89,
            rating: 4.7,
            recording: false
        }
    ];
    const filteredEvents = selectedCategory === 'all'
        ? upcomingEvents
        : upcomingEvents.filter(event => event.type === selectedCategory);
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
        const colors = {
            'workshop': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
            'meetup': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
            'hackathon': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
            'webinar': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
        };
        return colors[type] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    };
    const getLevelColor = (level) => {
        const colors = {
            'Beginner': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
            'Intermediate': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
            'Advanced': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
            'All Levels': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
        };
        return colors[level] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    const getAvailabilityStatus = (current, max) => {
        const percentage = (current / max) * 100;
        if (percentage >= 90)
            return { text: 'Almost Full', color: 'text-red-600' };
        if (percentage >= 75)
            return { text: 'Filling Fast', color: 'text-orange-600' };
        return { text: 'Available', color: 'text-green-600' };
    };
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx("section", { className: "px-6 py-32 text-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900", children: _jsxs(motion.div, { className: "max-w-4xl mx-auto", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsx(motion.div, { variants: itemVariants, className: "flex justify-center mb-6", children: _jsx("div", { className: "w-16 h-16 rounded-2xl gradient-bg-blue flex items-center justify-center shadow-lg", children: _jsx(Calendar, { className: "w-8 h-8 text-white" }) }) }), _jsx(motion.h1, { variants: itemVariants, className: "mb-6 text-slate-900 dark:text-slate-100", children: "Events & Workshops" }), _jsx(motion.p, { variants: itemVariants, className: "text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto", children: "Join our global community at workshops, meetups, and hackathons. Learn from experts, network with peers, and advance your AI skills." }), _jsxs(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [_jsxs(Button, { onClick: () => navigate('community'), className: "h-12 px-8 gradient-bg-blue text-white hover:opacity-90 transition-opacity", children: [_jsx(Users, { className: "w-4 h-4 mr-2" }), "Join Community"] }), _jsx(Button, { onClick: () => navigate('submit-idea'), variant: "outline", className: "h-12 px-8 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: "Suggest Event Topic" })] }), _jsxs(motion.div, { variants: itemVariants, className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1", children: "120+" }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Events Hosted" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1", children: "15,000+" }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Attendees" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1", children: "4.8" }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Avg Rating" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1", children: "80+" }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: "Countries" })] })] })] }) }), _jsx("section", { className: "px-6 py-8 border-b border-slate-200 dark:border-slate-800", children: _jsx("div", { className: "max-w-6xl mx-auto", children: _jsx("div", { className: "flex flex-wrap gap-3 justify-center", children: eventCategories.map((category) => (_jsxs("button", { onClick: () => setSelectedCategory(category.id), className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category.id
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'}`, children: [category.name, _jsxs("span", { className: "ml-2 text-xs opacity-75", children: ["(", category.count, ")"] })] }, category.id))) }) }) }), _jsx("section", { className: "px-6 py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4 text-slate-900 dark:text-slate-100", children: "Upcoming Events" }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: "Don't miss these exciting opportunities to learn and connect" })] }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredEvents.map((event, index) => (_jsx(motion.div, { variants: itemVariants, children: _jsxs(Card, { className: `glass card-hover h-full ${event.featured ? 'ring-2 ring-blue-500/20' : ''}`, children: [event.featured && (_jsx("div", { className: "absolute -top-2 -right-2 z-10", children: _jsx(Badge, { className: "bg-yellow-500 text-white", children: "Featured" }) })), _jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsx(Badge, { className: `text-xs ${getTypeColor(event.type)}`, children: event.type }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-4 h-4 text-yellow-500 fill-current" }), _jsx("span", { className: "text-sm font-medium", children: event.rating })] })] }), _jsx(CardTitle, { className: "text-lg leading-tight", children: event.title }), _jsxs("div", { className: "space-y-2 text-sm text-slate-600 dark:text-slate-400", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "w-4 h-4" }), _jsx("span", { children: formatDate(event.date) })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-4 h-4" }), _jsx("span", { children: event.time })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "w-4 h-4" }), _jsx("span", { children: event.location })] })] })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 line-clamp-2", children: event.description }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs(Avatar, { className: "w-10 h-10", children: [_jsx(AvatarImage, { src: event.speaker.avatar, alt: event.speaker.name }), _jsx(AvatarFallback, { children: event.speaker.name.split(' ').map(n => n[0]).join('') })] }), _jsxs("div", { children: [_jsx("div", { className: "text-sm font-medium text-slate-900 dark:text-slate-100", children: event.speaker.name }), _jsx("div", { className: "text-xs text-slate-600 dark:text-slate-400", children: event.speaker.role })] })] }), _jsxs("div", { className: "flex flex-wrap gap-1", children: [event.topics.slice(0, 2).map((topic, topicIndex) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: topic }, topicIndex))), event.topics.length > 2 && (_jsxs(Badge, { variant: "outline", className: "text-xs", children: ["+", event.topics.length - 2, " more"] }))] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsxs("span", { className: "text-slate-600 dark:text-slate-400", children: [event.currentAttendees, "/", event.maxAttendees, " attendees"] }), _jsx("span", { className: `font-medium ${getAvailabilityStatus(event.currentAttendees, event.maxAttendees).color}`, children: getAvailabilityStatus(event.currentAttendees, event.maxAttendees).text })] }), _jsx("div", { className: "w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2", children: _jsx("div", { className: "bg-blue-600 h-2 rounded-full transition-all duration-300", style: { width: `${(event.currentAttendees / event.maxAttendees) * 100}%` } }) })] }), _jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Badge, { className: `text-xs ${getLevelColor(event.level)}`, children: event.level }), _jsx("span", { className: "text-sm font-semibold text-slate-900 dark:text-slate-100", children: event.price })] }), _jsx(Button, { size: "sm", className: "gradient-bg-blue text-white hover:opacity-90", children: "Register" })] })] })] }) }, event.id))) }), filteredEvents.length === 0 && (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-center py-12", children: [_jsx(Calendar, { className: "w-16 h-16 text-slate-300 mx-auto mb-4" }), _jsx("h3", { className: "text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "No events in this category" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: "Check back soon for new events or try a different category." })] }))] }) }), _jsx("section", { className: "px-6 py-20 bg-slate-50 dark:bg-slate-900/50", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4 text-slate-900 dark:text-slate-100", children: "Past Events" }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400", children: "Catch up on what you missed with recordings and resources" })] }), _jsx("div", { className: "space-y-4", children: pastEvents.map((event, index) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, children: _jsx(Card, { className: "glass card-hover", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: event.title }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400", children: [_jsx("span", { children: event.date }), _jsx("span", { children: "\u2022" }), _jsxs("span", { children: [event.attendees, " attendees"] }), _jsx("span", { children: "\u2022" }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-4 h-4 text-yellow-500 fill-current" }), _jsx("span", { children: event.rating })] })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [event.recording && (_jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: [_jsx(Video, { className: "w-3 h-3 mr-1" }), "Recording Available"] })), _jsx(Button, { size: "sm", variant: "outline", children: "View Details" })] })] }) }) }) }, index))) }), _jsx("div", { className: "text-center mt-8", children: _jsxs(Button, { variant: "outline", className: "border-blue-300 text-blue-600 hover:bg-blue-50", children: ["View All Past Events", _jsx(ArrowRight, { className: "w-4 h-4 ml-2" })] }) })] }) }), _jsx("section", { className: "px-6 py-20", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, children: _jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-12", children: [_jsx(Trophy, { className: "w-12 h-12 text-blue-600 mx-auto mb-4" }), _jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Want to Host an Event?" }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto", children: "Share your expertise with our global community. We support speakers with promotion, technical setup, and more." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { onClick: () => navigate('submit-idea'), className: "h-12 px-8 gradient-bg-blue text-white hover:opacity-90", children: "Propose an Event" }), _jsx(Button, { onClick: () => navigate('contact'), variant: "outline", className: "h-12 px-8 border-blue-300 text-blue-600 hover:bg-blue-50", children: "Speaker Guidelines" })] })] }) }) }) })] }));
}
//# sourceMappingURL=EventsWorkshopsPage.js.map