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
import { Progress } from '../ui/progress';
import { Upload, FileText, Video, Image, Download, Eye, Trash2, Search, Filter, CheckCircle, AlertCircle, Clock } from 'lucide-react';
export function ResourceManagement() {
    const [uploadTab, setUploadTab] = useState('single');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('idle');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [filterSubject, setFilterSubject] = useState('all');
    const [resourceDetails, setResourceDetails] = useState({
        title: '',
        description: '',
        subject: '',
        class: '',
        type: 'pdf',
        accessLevel: 'free'
    });
    // Mock data
    const classes = ['JSS 1A', 'JSS 1B', 'JSS 2A', 'JSS 2B', 'JSS 3A', 'SSS 1A', 'SSS 2A', 'SSS 3A'];
    const subjects = ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology', 'Geography'];
    const resources = [
        {
            id: 1,
            title: 'Quadratic Equations - Past Questions',
            type: 'pdf',
            subject: 'Mathematics',
            class: 'SSS 2A',
            uploadDate: '2023-12-10',
            size: '2.4 MB',
            downloads: 45,
            status: 'available',
            description: 'Collection of past questions on quadratic equations'
        },
        {
            id: 2,
            title: 'Photosynthesis Experiment Video',
            type: 'video',
            subject: 'Biology',
            class: 'JSS 3A',
            uploadDate: '2023-12-09',
            size: '125 MB',
            downloads: 32,
            status: 'processing',
            description: 'Step-by-step photosynthesis experiment demonstration'
        },
        {
            id: 3,
            title: 'Chemical Bonding Diagrams',
            type: 'image',
            subject: 'Chemistry',
            class: 'SSS 1A',
            uploadDate: '2023-12-08',
            size: '856 KB',
            downloads: 28,
            status: 'available',
            description: 'Visual diagrams showing different types of chemical bonds'
        },
        {
            id: 4,
            title: 'Grammar Rules Handbook',
            type: 'pdf',
            subject: 'English Language',
            class: 'JSS 2B',
            uploadDate: '2023-12-07',
            size: '1.8 MB',
            downloads: 67,
            status: 'available',
            description: 'Comprehensive guide to English grammar rules'
        }
    ];
    const handleFileUpload = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            // Validate file size (max 10MB for PDFs, 100MB for videos)
            const maxSize = resourceDetails.type === 'video' ? 100 * 1024 * 1024 : 10 * 1024 * 1024;
            if (file.size > maxSize) {
                setUploadStatus('error');
                return;
            }
            setIsUploading(true);
            setUploadStatus('uploading');
            // Simulate upload progress
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                setUploadProgress(progress);
                if (progress >= 100) {
                    clearInterval(interval);
                    setIsUploading(false);
                    setUploadStatus('success');
                    setUploadProgress(0);
                }
            }, 200);
        }
    };
    const handleBulkUpload = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            // Handle multiple file upload logic
            console.log(`Uploading ${files.length} files`);
        }
    };
    const filteredResources = resources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === 'all' || resource.type === filterType;
        const matchesSubject = filterSubject === 'all' || resource.subject === filterSubject;
        return matchesSearch && matchesType && matchesSubject;
    });
    const getResourceIcon = (type) => {
        switch (type) {
            case 'pdf':
            case 'document':
                return _jsx(FileText, { className: "w-4 h-4" });
            case 'video':
                return _jsx(Video, { className: "w-4 h-4" });
            case 'image':
                return _jsx(Image, { className: "w-4 h-4" });
            default:
                return _jsx(FileText, { className: "w-4 h-4" });
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'available': return 'default';
            case 'processing': return 'secondary';
            case 'error': return 'destructive';
            default: return 'secondary';
        }
    };
    const getStatusIcon = (status) => {
        switch (status) {
            case 'available': return _jsx(CheckCircle, { className: "w-4 h-4" });
            case 'processing': return _jsx(Clock, { className: "w-4 h-4" });
            case 'error': return _jsx(AlertCircle, { className: "w-4 h-4" });
            default: return _jsx(Clock, { className: "w-4 h-4" });
        }
    };
    return (_jsxs("div", { className: "p-6 space-y-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: "Resource Management" }), _jsx("p", { className: "text-gray-600 mt-1", children: "Upload and manage academic resources for your students" })] }), _jsxs(Tabs, { value: uploadTab, onValueChange: setUploadTab, children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "single", children: "Upload Resource" }), _jsx(TabsTrigger, { value: "bulk", children: "Bulk Upload" }), _jsx(TabsTrigger, { value: "manage", children: "Manage Resources" })] }), _jsx(TabsContent, { value: "single", className: "space-y-6", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Upload, { className: "w-5 h-5" }), "Upload New Resource"] }), _jsx(CardDescription, { children: "Upload PDFs, videos, images, and other educational materials for your students" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "title", children: "Resource Title" }), _jsx(Input, { id: "title", value: resourceDetails.title, onChange: (e) => setResourceDetails({ ...resourceDetails, title: e.target.value }), placeholder: "e.g., Quadratic Equations - Past Questions" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "type", children: "Resource Type" }), _jsxs(Select, { value: resourceDetails.type, onValueChange: (value) => setResourceDetails({ ...resourceDetails, type: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "pdf", children: "PDF Document" }), _jsx(SelectItem, { value: "video", children: "Video" }), _jsx(SelectItem, { value: "image", children: "Image/Diagram" }), _jsx(SelectItem, { value: "document", children: "Other Document" })] })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "subject", children: "Subject" }), _jsxs(Select, { value: resourceDetails.subject, onValueChange: (value) => setResourceDetails({ ...resourceDetails, subject: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose a subject" }) }), _jsx(SelectContent, { children: subjects.map(subject => (_jsx(SelectItem, { value: subject, children: subject }, subject))) })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "class", children: "Target Class" }), _jsxs(Select, { value: resourceDetails.class, onValueChange: (value) => setResourceDetails({ ...resourceDetails, class: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose a class" }) }), _jsx(SelectContent, { children: classes.map(cls => (_jsx(SelectItem, { value: cls, children: cls }, cls))) })] })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "description", children: "Description" }), _jsx(Textarea, { id: "description", value: resourceDetails.description, onChange: (e) => setResourceDetails({ ...resourceDetails, description: e.target.value }), placeholder: "Provide a brief description of this resource...", rows: 3 })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "accessLevel", children: "Access Level" }), _jsxs(Select, { value: resourceDetails.accessLevel, onValueChange: (value) => setResourceDetails({ ...resourceDetails, accessLevel: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "free", children: "Free Access" }), _jsx(SelectItem, { value: "paid", children: "Paid Access" }), _jsx(SelectItem, { value: "premium", children: "Premium Only" })] })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "file", children: "Upload File" }), _jsx("div", { className: "mt-2", children: _jsx("input", { type: "file", accept: resourceDetails.type === 'video' ? '.mp4,.avi,.mov' : resourceDetails.type === 'image' ? '.jpg,.jpeg,.png,.gif' : '.pdf,.doc,.docx', onChange: handleFileUpload, className: "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" }) }), _jsx("p", { className: "text-sm text-gray-500 mt-1", children: resourceDetails.type === 'video'
                                                        ? 'Accepted formats: MP4, AVI, MOV. Maximum size: 100MB.'
                                                        : resourceDetails.type === 'image'
                                                            ? 'Accepted formats: JPG, PNG, GIF. Maximum size: 10MB.'
                                                            : 'Accepted formats: PDF, DOC, DOCX. Maximum size: 10MB.' })] }), isUploading && (_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { children: "Uploading..." }), _jsxs("span", { children: [uploadProgress, "%"] })] }), _jsx(Progress, { value: uploadProgress, className: "h-2" })] })), uploadStatus === 'success' && (_jsxs(Alert, { children: [_jsx(CheckCircle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: "Resource uploaded successfully! It's now available for students to access." })] })), uploadStatus === 'error' && (_jsxs(Alert, { variant: "destructive", children: [_jsx(AlertCircle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: "Upload failed. Ensure file is valid and under the size limit." })] })), _jsx(Button, { className: "w-full", disabled: !resourceDetails.title || !resourceDetails.subject || !resourceDetails.class || isUploading, children: isUploading ? 'Uploading...' : 'Upload Resource' })] })] }) }), _jsx(TabsContent, { value: "bulk", className: "space-y-6", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Upload, { className: "w-5 h-5" }), "Bulk Upload"] }), _jsx(CardDescription, { children: "Upload multiple resources at once. Ensure all files follow the naming convention: Subject_Class_Title.extension" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "bulkFiles", children: "Select Multiple Files" }), _jsx("div", { className: "mt-2", children: _jsx("input", { type: "file", multiple: true, onChange: handleBulkUpload, className: "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" }) }), _jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Select up to 10 files. Each file should be under 10MB for documents or 100MB for videos." })] }), _jsxs(Alert, { children: [_jsx(AlertCircle, { className: "h-4 w-4" }), _jsx(AlertDescription, { children: _jsxs("div", { children: [_jsx("p", { className: "font-medium mb-2", children: "Naming Convention:" }), _jsxs("ul", { className: "text-sm space-y-1 list-disc list-inside", children: [_jsx("li", { children: "Mathematics_JSS1A_Algebra.pdf" }), _jsx("li", { children: "Physics_SSS2A_Mechanics_Video.mp4" }), _jsx("li", { children: "Biology_JSS3A_Photosynthesis_Diagram.png" })] })] }) })] }), _jsx(Button, { className: "w-full", children: "Process Bulk Upload" })] })] }) }), _jsxs(TabsContent, { value: "manage", className: "space-y-6", children: [_jsx(Card, { children: _jsx(CardContent, { className: "pt-6", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsx("div", { className: "flex-1", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" }), _jsx(Input, { placeholder: "Search resources...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10" })] }) }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Select, { value: filterType, onValueChange: setFilterType, children: [_jsx(SelectTrigger, { className: "w-32", children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Types" }), _jsx(SelectItem, { value: "pdf", children: "PDFs" }), _jsx(SelectItem, { value: "video", children: "Videos" }), _jsx(SelectItem, { value: "image", children: "Images" })] })] }), _jsxs(Select, { value: filterSubject, onValueChange: setFilterSubject, children: [_jsx(SelectTrigger, { className: "w-40", children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Subjects" }), subjects.map(subject => (_jsx(SelectItem, { value: subject, children: subject }, subject)))] })] })] })] }) }) }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { children: ["Your Resources (", filteredResources.length, ")"] }), _jsx(CardDescription, { children: "Manage your uploaded academic resources" })] }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Resource" }), _jsx(TableHead, { children: "Type" }), _jsx(TableHead, { children: "Subject" }), _jsx(TableHead, { children: "Class" }), _jsx(TableHead, { children: "Size" }), _jsx(TableHead, { children: "Downloads" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Actions" })] }) }), _jsx(TableBody, { children: filteredResources.map((resource) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: resource.title }), _jsx("p", { className: "text-sm text-gray-500", children: resource.description })] }) }), _jsx(TableCell, { children: _jsxs("div", { className: "flex items-center gap-2", children: [getResourceIcon(resource.type), _jsx("span", { className: "capitalize", children: resource.type })] }) }), _jsx(TableCell, { children: resource.subject }), _jsx(TableCell, { children: resource.class }), _jsx(TableCell, { children: resource.size }), _jsx(TableCell, { children: resource.downloads }), _jsx(TableCell, { children: _jsxs(Badge, { variant: getStatusColor(resource.status), className: "flex items-center gap-1 w-fit", children: [getStatusIcon(resource.status), _jsx("span", { className: "capitalize", children: resource.status })] }) }), _jsx(TableCell, { children: _jsxs("div", { className: "flex gap-1", children: [_jsx(Button, { variant: "ghost", size: "sm", title: "Preview", children: _jsx(Eye, { className: "w-4 h-4" }) }), _jsx(Button, { variant: "ghost", size: "sm", title: "Download", children: _jsx(Download, { className: "w-4 h-4" }) }), _jsx(Button, { variant: "ghost", size: "sm", title: "Delete", children: _jsx(Trash2, { className: "w-4 h-4" }) })] }) })] }, resource.id))) })] }) })] })] })] })] }));
}
//# sourceMappingURL=ResourceManagement.js.map