import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { BookOpen, Users, Upload, ClipboardList, Calendar, TrendingUp, Clock, FileText, Video, Image, CheckCircle, AlertCircle, Plus } from 'lucide-react';
export function DashboardHome({ teacherName }) {
    // Mock data - in real app this would come from API
    const teacherStats = {
        totalClasses: 4,
        totalStudents: 156,
        resourcesUploaded: 23,
        activeCBTs: 3
    };
    const teacherClasses = [
        {
            name: 'Primary 4A',
            subject: 'Mathematics',
            students: 32,
            nextClass: '2023-12-15 09:00',
            recentActivity: 'Uploaded Chapter 5 exercises'
        },
        {
            name: 'Primary 4B',
            subject: 'Mathematics',
            students: 28,
            nextClass: '2023-12-15 10:30',
            recentActivity: 'Created CBT test for fractions'
        },
        {
            name: 'Primary 5A',
            subject: 'Mathematics',
            students: 35,
            nextClass: '2023-12-15 11:30',
            recentActivity: 'Uploaded homework results'
        },
        {
            name: 'Primary 5B',
            subject: 'Mathematics',
            students: 31,
            nextClass: '2023-12-15 14:00',
            recentActivity: 'Assigned continuous assessment'
        }
    ];
    const recentActivities = [
        {
            type: 'resource_upload',
            title: 'Uploaded "Quadratic Equations - Past Questions"',
            time: '2 hours ago',
            class: 'Primary 5A'
        },
        {
            type: 'cbt_created',
            title: 'Created CBT test "Fractions and Decimals"',
            time: '4 hours ago',
            class: 'Primary 4B'
        },
        {
            type: 'results_uploaded',
            title: 'Uploaded results for Mathematics test',
            time: '1 day ago',
            class: 'Primary 4A'
        },
        {
            type: 'assessment_assigned',
            title: 'Assigned continuous assessment',
            time: '2 days ago',
            class: 'Primary 5B'
        }
    ];
    const pendingTasks = [
        {
            task: 'Review and approve CBT test for Primary 4A',
            priority: 'high',
            dueDate: '2023-12-15'
        },
        {
            task: 'Upload results for Primary 5A Mathematics test',
            priority: 'medium',
            dueDate: '2023-12-16'
        },
        {
            task: 'Create continuous assessment for Primary 4B',
            priority: 'medium',
            dueDate: '2023-12-17'
        }
    ];
    const resourceStats = {
        totalResources: 23,
        pdfs: 15,
        videos: 5,
        images: 3,
        totalDownloads: 234
    };
    const getActivityIcon = (type) => {
        switch (type) {
            case 'resource_upload':
                return _jsx(Upload, { className: "w-4 h-4 text-blue-500" });
            case 'cbt_created':
                return _jsx(ClipboardList, { className: "w-4 h-4 text-green-500" });
            case 'results_uploaded':
                return _jsx(FileText, { className: "w-4 h-4 text-purple-500" });
            case 'assessment_assigned':
                return _jsx(CheckCircle, { className: "w-4 h-4 text-orange-500" });
            default:
                return _jsx(Clock, { className: "w-4 h-4 text-gray-500" });
        }
    };
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high': return 'destructive';
            case 'medium': return 'secondary';
            case 'low': return 'outline';
            default: return 'secondary';
        }
    };
    return (_jsxs("div", { className: "p-6 space-y-6", children: [_jsxs("div", { children: [_jsxs("h1", { className: "text-2xl font-semibold text-gray-900", children: ["Welcome back, ", teacherName, "!"] }), _jsx("p", { className: "text-gray-600 mt-1", children: "Here's your teaching overview and recent activities." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [_jsx(Card, { children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: "Classes Teaching" }), _jsx("p", { className: "text-2xl font-semibold text-gray-900", children: teacherStats.totalClasses })] }), _jsx("div", { className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center", children: _jsx(BookOpen, { className: "w-6 h-6 text-blue-600" }) })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: "Total Students" }), _jsx("p", { className: "text-2xl font-semibold text-gray-900", children: teacherStats.totalStudents })] }), _jsx("div", { className: "w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center", children: _jsx(Users, { className: "w-6 h-6 text-green-600" }) })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: "Resources Uploaded" }), _jsx("p", { className: "text-2xl font-semibold text-gray-900", children: teacherStats.resourcesUploaded })] }), _jsx("div", { className: "w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center", children: _jsx(Upload, { className: "w-6 h-6 text-purple-600" }) })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: "Active CBT Tests" }), _jsx("p", { className: "text-2xl font-semibold text-gray-900", children: teacherStats.activeCBTs })] }), _jsx("div", { className: "w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center", children: _jsx(ClipboardList, { className: "w-6 h-6 text-orange-600" }) })] }) }) })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(BookOpen, { className: "w-5 h-5" }), "Your Classes"] }), _jsx("p", { className: "text-sm text-gray-600", children: "Classes you're currently teaching" })] }), _jsx(CardContent, { className: "space-y-4", children: teacherClasses.map((classItem, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50", children: [_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-2 mb-1", children: [_jsx("h4", { className: "font-medium", children: classItem.name }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: classItem.subject })] }), _jsxs("p", { className: "text-sm text-gray-600 mb-1", children: [classItem.students, " students"] }), _jsx("p", { className: "text-xs text-gray-500", children: classItem.recentActivity })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-sm font-medium", children: "Next class" }), _jsx("p", { className: "text-xs text-gray-600", children: new Date(classItem.nextClass).toLocaleDateString() }), _jsx("p", { className: "text-xs text-gray-600", children: new Date(classItem.nextClass).toLocaleTimeString() })] })] }, index))) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Plus, { className: "w-5 h-5" }), "Quick Actions"] }), _jsx("p", { className: "text-sm text-gray-600", children: "Common tasks you can do quickly" })] }), _jsxs(CardContent, { className: "space-y-3", children: [_jsxs(Button, { variant: "outline", className: "w-full justify-start gap-2", children: [_jsx(Upload, { className: "w-4 h-4" }), "Upload Student Results"] }), _jsxs(Button, { variant: "outline", className: "w-full justify-start gap-2", children: [_jsx(ClipboardList, { className: "w-4 h-4" }), "Create CBT Test"] }), _jsxs(Button, { variant: "outline", className: "w-full justify-start gap-2", children: [_jsx(FileText, { className: "w-4 h-4" }), "Upload Learning Resource"] }), _jsxs(Button, { variant: "outline", className: "w-full justify-start gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4" }), "Assign Continuous Assessment"] }), _jsxs(Button, { variant: "outline", className: "w-full justify-start gap-2", children: [_jsx(Calendar, { className: "w-4 h-4" }), "View Class Schedule"] })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-5 h-5" }), "Recent Activities"] }), _jsx("p", { className: "text-sm text-gray-600", children: "Your recent teaching activities" })] }), _jsx(CardContent, { className: "space-y-3", children: recentActivities.map((activity, index) => (_jsxs("div", { className: "flex items-start gap-3 p-3 border rounded-lg", children: [_jsx("div", { className: "mt-1", children: getActivityIcon(activity.type) }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-sm font-medium", children: activity.title }), _jsxs("div", { className: "flex items-center gap-2 mt-1", children: [_jsx("p", { className: "text-xs text-gray-500", children: activity.time }), _jsx("span", { className: "text-xs text-gray-400", children: "\u2022" }), _jsx("p", { className: "text-xs text-gray-500", children: activity.class })] })] })] }, index))) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(AlertCircle, { className: "w-5 h-5" }), "Pending Tasks"] }), _jsx("p", { className: "text-sm text-gray-600", children: "Tasks that need your attention" })] }), _jsx(CardContent, { className: "space-y-3", children: pendingTasks.map((task, index) => (_jsxs("div", { className: "flex items-start justify-between p-3 border rounded-lg", children: [_jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-sm font-medium", children: task.task }), _jsxs("p", { className: "text-xs text-gray-500 mt-1", children: ["Due: ", new Date(task.dueDate).toLocaleDateString()] })] }), _jsx(Badge, { variant: getPriorityColor(task.priority), className: "text-xs", children: task.priority })] }, index))) })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-5 h-5" }), "Your Teaching Resources"] }), _jsx("p", { className: "text-sm text-gray-600", children: "Overview of resources you've uploaded" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2", children: _jsx(FileText, { className: "w-6 h-6 text-blue-600" }) }), _jsx("p", { className: "text-lg font-semibold", children: resourceStats.totalResources }), _jsx("p", { className: "text-sm text-gray-600", children: "Total Resources" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2", children: _jsx(FileText, { className: "w-6 h-6 text-red-600" }) }), _jsx("p", { className: "text-lg font-semibold", children: resourceStats.pdfs }), _jsx("p", { className: "text-sm text-gray-600", children: "PDFs" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2", children: _jsx(Video, { className: "w-6 h-6 text-green-600" }) }), _jsx("p", { className: "text-lg font-semibold", children: resourceStats.videos }), _jsx("p", { className: "text-sm text-gray-600", children: "Videos" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2", children: _jsx(Image, { className: "w-6 h-6 text-purple-600" }) }), _jsx("p", { className: "text-lg font-semibold", children: resourceStats.images }), _jsx("p", { className: "text-sm text-gray-600", children: "Images" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2", children: _jsx(TrendingUp, { className: "w-6 h-6 text-orange-600" }) }), _jsx("p", { className: "text-lg font-semibold", children: resourceStats.totalDownloads }), _jsx("p", { className: "text-sm text-gray-600", children: "Downloads" })] })] }) })] })] }));
}
//# sourceMappingURL=DashboardHome.js.map