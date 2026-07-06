import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Alert, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Switch } from '../ui/switch';
import { Plus, Clock, Users, Settings, Play, Pause, Edit, Trash2, AlertCircle, CheckCircle, Calendar } from 'lucide-react';
export function CBTManagement() {
    const [activeTab, setActiveTab] = useState('create');
    const [testDetails, setTestDetails] = useState({
        title: '',
        subject: '',
        class: '',
        duration: 60,
        instructions: '',
        shuffleQuestions: true,
        showResults: true,
        allowRetakes: false,
        scheduledDate: '',
        scheduledTime: ''
    });
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: '',
            options: ['', '', '', ''],
            correctAnswer: 0,
            points: 1
        }
    ]);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    // Mock data
    const classes = ['JSS 1A', 'JSS 1B', 'JSS 2A', 'JSS 2B', 'JSS 3A', 'SSS 1A', 'SSS 2A', 'SSS 3A'];
    const subjects = ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology', 'Geography'];
    const existingTests = [
        {
            id: 1,
            title: 'Mathematics Mid-Term Test',
            subject: 'Mathematics',
            class: 'JSS 1A',
            duration: 60,
            totalQuestions: 20,
            totalPoints: 20,
            status: 'scheduled',
            scheduledDate: '2023-12-20',
            attemptedBy: 0
        },
        {
            id: 2,
            title: 'English Language Quiz',
            subject: 'English Language',
            class: 'JSS 2B',
            duration: 45,
            totalQuestions: 15,
            totalPoints: 15,
            status: 'active',
            scheduledDate: '2023-12-15',
            attemptedBy: 12
        },
        {
            id: 3,
            title: 'Physics Chapter 1 Test',
            subject: 'Physics',
            class: 'SSS 1A',
            duration: 90,
            totalQuestions: 25,
            totalPoints: 30,
            status: 'completed',
            scheduledDate: '2023-12-10',
            attemptedBy: 25
        }
    ];
    const addQuestion = () => {
        setQuestions([...questions, {
                id: Date.now(),
                question: '',
                options: ['', '', '', ''],
                correctAnswer: 0,
                points: 1
            }]);
    };
    const updateQuestion = (id, field, value) => {
        setQuestions(questions.map(q => q.id === id ? { ...q, [field]: value } : q));
    };
    const updateQuestionOption = (questionId, optionIndex, value) => {
        setQuestions(questions.map(q => q.id === questionId
            ? { ...q, options: q.options.map((opt, idx) => idx === optionIndex ? value : opt) }
            : q));
    };
    const removeQuestion = (id) => {
        if (questions.length > 1) {
            setQuestions(questions.filter(q => q.id !== id));
        }
    };
    const handleSaveTest = () => {
        setShowConfirmDialog(true);
    };
    const handlePublishTest = () => {
        // Save and publish logic here
        setShowConfirmDialog(false);
        // Show success message
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'draft': return 'secondary';
            case 'scheduled': return 'default';
            case 'active': return 'default';
            case 'completed': return 'secondary';
            default: return 'secondary';
        }
    };
    const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
    return (_jsxs("div", { className: "p-6 space-y-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: "CBT Management" }), _jsx("p", { className: "text-gray-600 mt-1", children: "Create and schedule computer-based tests for your students" })] }), _jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "create", children: "Create Test" }), _jsx(TabsTrigger, { value: "manage", children: "Manage Tests" })] }), _jsxs(TabsContent, { value: "create", className: "space-y-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Settings, { className: "w-5 h-5" }), "Test Details"] }), _jsx(CardDescription, { children: "Configure basic test information and settings" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "title", children: "Test Title" }), _jsx(Input, { id: "title", value: testDetails.title, onChange: (e) => setTestDetails({ ...testDetails, title: e.target.value }), placeholder: "e.g., Mathematics Mid-Term Test" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "duration", children: "Duration (minutes)" }), _jsx(Input, { id: "duration", type: "number", min: "1", value: testDetails.duration, onChange: (e) => setTestDetails({ ...testDetails, duration: parseInt(e.target.value) }) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "class", children: "Select Class" }), _jsxs(Select, { value: testDetails.class, onValueChange: (value) => setTestDetails({ ...testDetails, class: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose a class" }) }), _jsx(SelectContent, { children: classes.map(cls => (_jsx(SelectItem, { value: cls, children: cls }, cls))) })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "subject", children: "Select Subject" }), _jsxs(Select, { value: testDetails.subject, onValueChange: (value) => setTestDetails({ ...testDetails, subject: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose a subject" }) }), _jsx(SelectContent, { children: subjects.map(subject => (_jsx(SelectItem, { value: subject, children: subject }, subject))) })] })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "instructions", children: "Test Instructions" }), _jsx(Textarea, { id: "instructions", value: testDetails.instructions, onChange: (e) => setTestDetails({ ...testDetails, instructions: e.target.value }), placeholder: "Enter instructions for students...", rows: 3 })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "scheduledDate", children: "Scheduled Date" }), _jsx(Input, { id: "scheduledDate", type: "date", value: testDetails.scheduledDate, onChange: (e) => setTestDetails({ ...testDetails, scheduledDate: e.target.value }) })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "scheduledTime", children: "Scheduled Time" }), _jsx(Input, { id: "scheduledTime", type: "time", value: testDetails.scheduledTime, onChange: (e) => setTestDetails({ ...testDetails, scheduledTime: e.target.value }) })] })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "shuffleQuestions", children: "Shuffle Questions" }), _jsx("p", { className: "text-sm text-gray-500", children: "Randomize question order for each student" })] }), _jsx(Switch, { id: "shuffleQuestions", checked: testDetails.shuffleQuestions, onCheckedChange: (checked) => setTestDetails({ ...testDetails, shuffleQuestions: checked }) })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "showResults", children: "Show Results Immediately" }), _jsx("p", { className: "text-sm text-gray-500", children: "Students see results after completion" })] }), _jsx(Switch, { id: "showResults", checked: testDetails.showResults, onCheckedChange: (checked) => setTestDetails({ ...testDetails, showResults: checked }) })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "allowRetakes", children: "Allow Retakes" }), _jsx("p", { className: "text-sm text-gray-500", children: "Students can retake the test" })] }), _jsx(Switch, { id: "allowRetakes", checked: testDetails.allowRetakes, onCheckedChange: (checked) => setTestDetails({ ...testDetails, allowRetakes: checked }) })] })] })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Plus, { className: "w-5 h-5" }), "Questions (", questions.length, ")"] }), _jsxs("div", { className: "text-sm text-gray-500", children: ["Total Points: ", totalPoints] })] }), _jsx(CardDescription, { children: "Add multiple-choice questions for your test" })] }), _jsxs(CardContent, { className: "space-y-6", children: [questions.map((question, index) => (_jsxs("div", { className: "border rounded-lg p-4 space-y-4", children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("h4", { className: "font-medium", children: ["Question ", index + 1] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Label, { htmlFor: `points-${question.id}`, className: "text-sm", children: "Points:" }), _jsx(Input, { id: `points-${question.id}`, type: "number", min: "1", value: question.points, onChange: (e) => updateQuestion(question.id, 'points', parseInt(e.target.value)), className: "w-16" })] }), questions.length > 1 && (_jsx(Button, { variant: "ghost", size: "sm", onClick: () => removeQuestion(question.id), children: _jsx(Trash2, { className: "w-4 h-4" }) }))] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: `question-${question.id}`, children: "Question" }), _jsx(Textarea, { id: `question-${question.id}`, value: question.question, onChange: (e) => updateQuestion(question.id, 'question', e.target.value), placeholder: "Enter your question here...", rows: 2 })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Answer Options" }), question.options.map((option, optionIndex) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("input", { type: "radio", name: `correct-${question.id}`, checked: question.correctAnswer === optionIndex, onChange: () => updateQuestion(question.id, 'correctAnswer', optionIndex), className: "w-4 h-4" }), _jsxs("span", { className: "w-6 text-sm font-medium", children: [String.fromCharCode(65 + optionIndex), "."] }), _jsx(Input, { value: option, onChange: (e) => updateQuestionOption(question.id, optionIndex, e.target.value), placeholder: `Option ${String.fromCharCode(65 + optionIndex)}`, className: "flex-1" })] }, optionIndex))), _jsx("p", { className: "text-sm text-gray-500", children: "Select the radio button next to the correct answer" })] })] }, question.id))), _jsxs(Button, { onClick: addQuestion, variant: "outline", className: "w-full flex items-center gap-2", children: [_jsx(Plus, { className: "w-4 h-4" }), "Add Question"] })] })] }), _jsx(Card, { children: _jsx(CardContent, { className: "pt-6", children: _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "outline", children: "Save as Draft" }), _jsxs(Button, { onClick: handleSaveTest, className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "w-4 h-4" }), "Schedule Test"] })] }) }) }), showConfirmDialog && (_jsxs(Alert, { children: [_jsx(AlertCircle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: _jsxs("div", { className: "space-y-4", children: [_jsx("p", { children: "Do you want to make this test live? Students will be able to access it at the scheduled time." }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { onClick: handlePublishTest, size: "sm", children: "Yes, Make Live" }), _jsx(Button, { onClick: () => setShowConfirmDialog(false), variant: "outline", size: "sm", children: "Cancel" })] })] }) })] }))] }), _jsx(TabsContent, { value: "manage", className: "space-y-6", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-5 h-5" }), "Existing Tests"] }), _jsx(CardDescription, { children: "Manage your scheduled and active CBT tests" })] }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Test Title" }), _jsx(TableHead, { children: "Subject" }), _jsx(TableHead, { children: "Class" }), _jsx(TableHead, { children: "Duration" }), _jsx(TableHead, { children: "Questions" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Attempted" }), _jsx(TableHead, { children: "Actions" })] }) }), _jsx(TableBody, { children: existingTests.map((test) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: test.title }), _jsx(TableCell, { children: test.subject }), _jsx(TableCell, { children: test.class }), _jsxs(TableCell, { children: [test.duration, "m"] }), _jsx(TableCell, { children: test.totalQuestions }), _jsx(TableCell, { children: _jsx(Badge, { variant: getStatusColor(test.status), children: test.status }) }), _jsxs(TableCell, { children: [test.attemptedBy, "/", test.status === 'completed' ? '25' : '-'] }), _jsx(TableCell, { children: _jsxs("div", { className: "flex gap-1", children: [_jsx(Button, { variant: "ghost", size: "sm", children: _jsx(Edit, { className: "w-4 h-4" }) }), test.status === 'active' && (_jsx(Button, { variant: "ghost", size: "sm", children: _jsx(Pause, { className: "w-4 h-4" }) })), test.status === 'scheduled' && (_jsx(Button, { variant: "ghost", size: "sm", children: _jsx(Play, { className: "w-4 h-4" }) }))] }) })] }, test.id))) })] }) })] }) })] })] }));
}
//# sourceMappingURL=CBTManagement.js.map