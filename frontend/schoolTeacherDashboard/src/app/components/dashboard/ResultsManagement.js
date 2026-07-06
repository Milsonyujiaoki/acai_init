import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Alert, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Upload, Download, Plus, Trash2, Save, FileText, AlertCircle, CheckCircle, User, Eye, Calendar } from 'lucide-react';
export function ResultsManagement() {
    const [activeTab, setActiveTab] = useState('csv');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [csvFile, setCsvFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('idle');
    const [manualResults, setManualResults] = useState([
        { id: 1, studentId: '', studentName: '', score: '', grade: '' }
    ]);
    // Student-specific results state
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedTerm, setSelectedTerm] = useState('');
    const [selectedSession, setSelectedSession] = useState('');
    const [studentScores, setStudentScores] = useState([]);
    const [teacherComment, setTeacherComment] = useState('');
    const [showResultPreview, setShowResultPreview] = useState(false);
    // Mock data
    const classes = ['Primary 4A', 'Primary 4B', 'Primary 5A', 'Primary 5B', 'JSS 1A', 'JSS 1B', 'SSS 1A'];
    const subjects = ['Mathematics', 'English Language', 'Basic Science', 'Social Studies', 'Civic Education', 'Computer Science', 'Creative Arts', 'Physical Education'];
    const terms = ['First Term', 'Second Term', 'Third Term'];
    const sessions = ['2023/2024', '2024/2025'];
    // Mock students for Primary 4A
    const students = [
        { id: 'P4A001', name: 'Adebayo Tunde', class: 'Primary 4A' },
        { id: 'P4A002', name: 'Chioma Okafor', class: 'Primary 4A' },
        { id: 'P4A003', name: 'Ibrahim Musa', class: 'Primary 4A' },
        { id: 'P4A004', name: 'Fatima Aliyu', class: 'Primary 4A' },
        { id: 'P4A005', name: 'Emeka Okwu', class: 'Primary 4A' },
    ];
    const recentResults = [
        { class: 'Primary 4A', subject: 'Mathematics', students: 32, uploadDate: '2023-12-10', status: 'published' },
        { class: 'Primary 4B', subject: 'English Language', students: 28, uploadDate: '2023-12-09', status: 'draft' },
        { class: 'Primary 5A', subject: 'Basic Science', students: 25, uploadDate: '2023-12-08', status: 'published' },
    ];
    // Initialize student scores when student is selected
    const initializeStudentScores = (studentId) => {
        if (!studentId)
            return;
        const initialScores = subjects.map(subject => ({
            subject,
            score: '',
            grade: '',
            remark: ''
        }));
        setStudentScores(initialScores);
        setTeacherComment('');
        setShowResultPreview(false);
    };
    const calculateGrade = (score) => {
        const num = parseInt(score);
        if (isNaN(num))
            return '';
        if (num >= 80)
            return 'A';
        if (num >= 70)
            return 'B';
        if (num >= 60)
            return 'C';
        if (num >= 50)
            return 'D';
        if (num >= 40)
            return 'E';
        return 'F';
    };
    const getGradeRemark = (score) => {
        const num = parseInt(score);
        if (isNaN(num))
            return '';
        if (num >= 80)
            return 'Excellent';
        if (num >= 70)
            return 'Very Good';
        if (num >= 60)
            return 'Good';
        if (num >= 50)
            return 'Fair';
        if (num >= 40)
            return 'Pass';
        return 'Fail';
    };
    const updateStudentScore = (subject, field, value) => {
        setStudentScores(prev => prev.map(score => {
            if (score.subject === subject) {
                const updated = { ...score, [field]: value };
                if (field === 'score') {
                    updated.grade = calculateGrade(value);
                    updated.remark = getGradeRemark(value);
                }
                return updated;
            }
            return score;
        }));
    };
    const calculateStudentSummary = () => {
        const validScores = studentScores.filter(s => s.score && !isNaN(parseInt(s.score)));
        const totalScore = validScores.reduce((sum, s) => sum + parseInt(s.score), 0);
        const averageScore = validScores.length > 0 ? totalScore / validScores.length : 0;
        return {
            totalScore,
            averageScore: Math.round(averageScore * 100) / 100,
            totalSubjects: validScores.length
        };
    };
    const handleSaveStudentResult = () => {
        if (!selectedStudent || !selectedClass || !selectedTerm || !selectedSession) {
            alert('Please fill in all required fields');
            return;
        }
        const validScores = studentScores.filter(s => s.score && !isNaN(parseInt(s.score)));
        if (validScores.length === 0) {
            alert('Please enter at least one subject score');
            return;
        }
        // Save logic here
        setUploadStatus('success');
        setTimeout(() => setUploadStatus('idle'), 3000);
    };
    const generateResultPreview = () => {
        const selectedStudentData = students.find(s => s.id === selectedStudent);
        const summary = calculateStudentSummary();
        return {
            studentId: selectedStudent,
            studentName: selectedStudentData?.name || '',
            class: selectedClass,
            term: selectedTerm,
            session: selectedSession,
            scores: studentScores.filter(s => s.score && !isNaN(parseInt(s.score))),
            ...summary,
            position: 5, // Mock position
            teacherComment,
            principalComment: 'Keep up the good work!'
        };
    };
    // CSV upload logic (existing)
    const handleFileUpload = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
                setUploadStatus('error');
                return;
            }
            setCsvFile(file);
            setUploadStatus('idle');
        }
    };
    const handleCsvUpload = async () => {
        if (!csvFile || !selectedClass || !selectedSubject)
            return;
        setUploadStatus('uploading');
        setTimeout(() => {
            setUploadStatus('success');
            setCsvFile(null);
        }, 2000);
    };
    // Manual entry logic (existing)
    const addManualResult = () => {
        setManualResults([...manualResults, {
                id: Date.now(),
                studentId: '',
                studentName: '',
                score: '',
                grade: ''
            }]);
    };
    const removeManualResult = (id) => {
        setManualResults(manualResults.filter(result => result.id !== id));
    };
    const updateManualResult = (id, field, value) => {
        setManualResults(manualResults.map(result => result.id === id ? { ...result, [field]: value } : result));
    };
    return (_jsxs("div", { className: "p-6 space-y-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: "Results Management" }), _jsx("p", { className: "text-gray-600 mt-1", children: "Upload student results by class and subject" })] }), _jsxs(Tabs, { value: activeTab, onValueChange: (value) => setActiveTab(value), children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "csv", children: "CSV Upload" }), _jsx(TabsTrigger, { value: "manual", children: "Manual Entry" }), _jsx(TabsTrigger, { value: "student", children: "Student Results" })] }), _jsx(TabsContent, { value: "csv", className: "space-y-6", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Upload, { className: "w-5 h-5" }), "Upload Results via CSV"] }), _jsx(CardDescription, { children: "Upload student results using a CSV file. Ensure your file includes columns: Student ID, Student Name, Score." })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "class", children: "Select Class" }), _jsxs(Select, { value: selectedClass, onValueChange: setSelectedClass, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose a class" }) }), _jsx(SelectContent, { children: classes.map(cls => (_jsx(SelectItem, { value: cls, children: cls }, cls))) })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "subject", children: "Select Subject" }), _jsxs(Select, { value: selectedSubject, onValueChange: setSelectedSubject, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose a subject" }) }), _jsx(SelectContent, { children: subjects.map(subject => (_jsx(SelectItem, { value: subject, children: subject }, subject))) })] })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "csvFile", children: "Upload CSV File" }), _jsx("div", { className: "mt-2", children: _jsx("input", { type: "file", accept: ".csv", onChange: handleFileUpload, className: "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" }) }), _jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Accepted format: CSV files only. Maximum file size: 10MB." })] }), csvFile && (_jsxs(Alert, { children: [_jsx(FileText, { className: "h-4 w-4" }), _jsxs(AlertDescription, { children: ["File ready: ", csvFile.name, " (", (csvFile.size / 1024).toFixed(1), " KB)"] })] })), uploadStatus === 'error' && (_jsxs(Alert, { variant: "destructive", children: [_jsx(AlertCircle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: "Upload failed. Ensure file is a valid CSV and under 10MB." })] })), uploadStatus === 'success' && (_jsxs(Alert, { children: [_jsx(CheckCircle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: "Results uploaded successfully! Students have been notified." })] })), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { onClick: handleCsvUpload, disabled: !csvFile || !selectedClass || !selectedSubject || uploadStatus === 'uploading', className: "flex items-center gap-2", children: uploadStatus === 'uploading' ? (_jsx(_Fragment, { children: "Uploading..." })) : (_jsxs(_Fragment, { children: [_jsx(Upload, { className: "w-4 h-4" }), "Upload Results"] })) }), _jsxs(Button, { variant: "outline", className: "flex items-center gap-2", children: [_jsx(Download, { className: "w-4 h-4" }), "Download Template"] })] })] })] }) }), _jsx(TabsContent, { value: "manual", className: "space-y-6", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Plus, { className: "w-5 h-5" }), "Manual Entry"] }), _jsx(CardDescription, { children: "Enter student results manually. Grades will be calculated automatically based on scores." })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "class", children: "Select Class" }), _jsxs(Select, { value: selectedClass, onValueChange: setSelectedClass, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose a class" }) }), _jsx(SelectContent, { children: classes.map(cls => (_jsx(SelectItem, { value: cls, children: cls }, cls))) })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "subject", children: "Select Subject" }), _jsxs(Select, { value: selectedSubject, onValueChange: setSelectedSubject, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose a subject" }) }), _jsx(SelectContent, { children: subjects.map(subject => (_jsx(SelectItem, { value: subject, children: subject }, subject))) })] })] })] }), _jsx("div", { className: "border rounded-lg", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Student ID" }), _jsx(TableHead, { children: "Student Name" }), _jsx(TableHead, { children: "Score (0-100)" }), _jsx(TableHead, { children: "Grade" }), _jsx(TableHead, { children: "Action" })] }) }), _jsx(TableBody, { children: manualResults.map((result) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: _jsx(Input, { value: result.studentId, onChange: (e) => updateManualResult(result.id, 'studentId', e.target.value), placeholder: "e.g., P4A001" }) }), _jsx(TableCell, { children: _jsx(Input, { value: result.studentName, onChange: (e) => updateManualResult(result.id, 'studentName', e.target.value), placeholder: "Student full name" }) }), _jsx(TableCell, { children: _jsx(Input, { type: "number", min: "0", max: "100", value: result.score, onChange: (e) => {
                                                                            updateManualResult(result.id, 'score', e.target.value);
                                                                            updateManualResult(result.id, 'grade', calculateGrade(e.target.value));
                                                                        }, placeholder: "0-100" }) }), _jsx(TableCell, { children: _jsx(Badge, { variant: result.score && parseInt(result.score) >= 50 ? 'default' : 'destructive', children: result.score ? calculateGrade(result.score) : '-' }) }), _jsx(TableCell, { children: _jsx(Button, { variant: "ghost", size: "sm", onClick: () => removeManualResult(result.id), children: _jsx(Trash2, { className: "w-4 h-4" }) }) })] }, result.id))) })] }) }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { onClick: addManualResult, variant: "outline", className: "flex items-center gap-2", children: [_jsx(Plus, { className: "w-4 h-4" }), "Add Student"] }), _jsxs(Button, { className: "flex items-center gap-2", disabled: !selectedClass || !selectedSubject, children: [_jsx(Save, { className: "w-4 h-4" }), "Save Results"] })] })] })] }) }), _jsxs(TabsContent, { value: "student", className: "space-y-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(User, { className: "w-5 h-5" }), "Individual Student Results"] }), _jsx(CardDescription, { children: "Input complete results for a specific student across all subjects. Perfect for class teachers managing their students' comprehensive results." })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "studentClass", children: "Select Class" }), _jsxs(Select, { value: selectedClass, onValueChange: (value) => {
                                                                    setSelectedClass(value);
                                                                    setSelectedStudent('');
                                                                    setStudentScores([]);
                                                                }, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose your class" }) }), _jsx(SelectContent, { children: classes.map(cls => (_jsx(SelectItem, { value: cls, children: cls }, cls))) })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "student", children: "Select Student" }), _jsxs(Select, { value: selectedStudent, onValueChange: (value) => {
                                                                    setSelectedStudent(value);
                                                                    initializeStudentScores(value);
                                                                }, disabled: !selectedClass, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose a student" }) }), _jsx(SelectContent, { children: students.map(student => (_jsxs(SelectItem, { value: student.id, children: [student.name, " (", student.id, ")"] }, student.id))) })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "term", children: "Select Term" }), _jsxs(Select, { value: selectedTerm, onValueChange: setSelectedTerm, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose term" }) }), _jsx(SelectContent, { children: terms.map(term => (_jsx(SelectItem, { value: term, children: term }, term))) })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "session", children: "Academic Session" }), _jsxs(Select, { value: selectedSession, onValueChange: setSelectedSession, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose session" }) }), _jsx(SelectContent, { children: sessions.map(session => (_jsx(SelectItem, { value: session, children: session }, session))) })] })] })] }), selectedStudent && studentScores.length > 0 && (_jsxs(_Fragment, { children: [_jsx("div", { className: "border rounded-lg", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Subject" }), _jsx(TableHead, { children: "Score (0-100)" }), _jsx(TableHead, { children: "Grade" }), _jsx(TableHead, { children: "Remark" })] }) }), _jsx(TableBody, { children: studentScores.map((score, index) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: score.subject }), _jsx(TableCell, { children: _jsx(Input, { type: "number", min: "0", max: "100", value: score.score, onChange: (e) => updateStudentScore(score.subject, 'score', e.target.value), placeholder: "0-100", className: "w-20" }) }), _jsx(TableCell, { children: _jsx(Badge, { variant: score.score && parseInt(score.score) >= 50 ? 'default' : 'destructive', className: "w-8 justify-center", children: score.grade || '-' }) }), _jsx(TableCell, { children: _jsx("span", { className: "text-sm text-gray-600", children: score.remark }) })] }, index))) })] }) }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "teacherComment", children: "Teacher's Comment" }), _jsx(Input, { id: "teacherComment", value: teacherComment, onChange: (e) => setTeacherComment(e.target.value), placeholder: "Enter your comment about the student's performance..." })] }), studentScores.some(s => s.score) && (_jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [_jsx("h4", { className: "font-medium mb-2", children: "Result Summary" }), _jsxs("div", { className: "grid grid-cols-3 gap-4 text-sm", children: [_jsxs("div", { children: [_jsx("span", { className: "text-gray-600", children: "Total Score:" }), _jsx("span", { className: "ml-2 font-medium", children: calculateStudentSummary().totalScore })] }), _jsxs("div", { children: [_jsx("span", { className: "text-gray-600", children: "Average:" }), _jsxs("span", { className: "ml-2 font-medium", children: [calculateStudentSummary().averageScore, "%"] })] }), _jsxs("div", { children: [_jsx("span", { className: "text-gray-600", children: "Subjects:" }), _jsx("span", { className: "ml-2 font-medium", children: calculateStudentSummary().totalSubjects })] })] })] })), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { onClick: handleSaveStudentResult, className: "flex items-center gap-2", disabled: !selectedTerm || !selectedSession || !studentScores.some(s => s.score), children: [_jsx(Save, { className: "w-4 h-4" }), "Save Student Result"] }), _jsxs(Button, { variant: "outline", onClick: () => setShowResultPreview(true), className: "flex items-center gap-2", disabled: !studentScores.some(s => s.score), children: [_jsx(Eye, { className: "w-4 h-4" }), "Preview Result Card"] })] }), uploadStatus === 'success' && (_jsxs(Alert, { children: [_jsx(CheckCircle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: "Student result saved successfully! The student can now view their complete result card." })] }))] }))] })] }), showResultPreview && (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center justify-between", children: [_jsx("span", { children: "Student Result Card Preview" }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setShowResultPreview(false), children: "\u00D7" })] }) }), _jsx(CardContent, { children: (() => {
                                            const preview = generateResultPreview();
                                            return (_jsxs("div", { className: "bg-white border-2 border-gray-200 p-6 rounded-lg space-y-4", children: [_jsxs("div", { className: "text-center border-b pb-4", children: [_jsx("h3", { className: "font-bold text-lg", children: "STUDENT RESULT CARD" }), _jsxs("p", { className: "text-sm text-gray-600", children: [preview.session, " Academic Session - ", preview.term] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [_jsxs("div", { children: [_jsx("strong", { children: "Name:" }), " ", preview.studentName] }), _jsxs("div", { children: [_jsx("strong", { children: "Student ID:" }), " ", preview.studentId] }), _jsxs("div", { children: [_jsx("strong", { children: "Class:" }), " ", preview.class] }), _jsxs("div", { children: [_jsx("strong", { children: "Position:" }), " ", preview.position] })] }), _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Subject" }), _jsx(TableHead, { children: "Score" }), _jsx(TableHead, { children: "Grade" }), _jsx(TableHead, { children: "Remark" })] }) }), _jsx(TableBody, { children: preview.scores.map((score, index) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: score.subject }), _jsx(TableCell, { children: score.score }), _jsx(TableCell, { children: _jsx(Badge, { variant: parseInt(score.score) >= 50 ? 'default' : 'destructive', children: score.grade }) }), _jsx(TableCell, { className: "text-sm", children: score.remark })] }, index))) })] }), _jsx("div", { className: "border-t pt-4 space-y-2", children: _jsxs("div", { className: "grid grid-cols-3 gap-4 text-sm", children: [_jsxs("div", { children: [_jsx("strong", { children: "Total Score:" }), " ", preview.totalScore] }), _jsxs("div", { children: [_jsx("strong", { children: "Average:" }), " ", preview.averageScore, "%"] }), _jsxs("div", { children: [_jsx("strong", { children: "No. of Subjects:" }), " ", preview.totalSubjects] })] }) }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { children: [_jsx("strong", { children: "Class Teacher's Comment:" }), " ", preview.teacherComment || 'No comment provided'] }), _jsxs("div", { children: [_jsx("strong", { children: "Principal's Comment:" }), " ", preview.principalComment] })] })] }));
                                        })() })] }))] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Recent Results" }), _jsx(CardDescription, { children: "Previously uploaded results for your classes" })] }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Class" }), _jsx(TableHead, { children: "Subject" }), _jsx(TableHead, { children: "Students" }), _jsx(TableHead, { children: "Upload Date" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Actions" })] }) }), _jsx(TableBody, { children: recentResults.map((result, index) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: result.class }), _jsx(TableCell, { children: result.subject }), _jsx(TableCell, { children: result.students }), _jsx(TableCell, { children: result.uploadDate }), _jsx(TableCell, { children: _jsx(Badge, { variant: result.status === 'published' ? 'default' : 'secondary', children: result.status }) }), _jsx(TableCell, { children: _jsx(Button, { variant: "ghost", size: "sm", children: "View" }) })] }, index))) })] }) })] })] }));
}
//# sourceMappingURL=ResultsManagement.js.map