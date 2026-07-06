import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon, Upload, X, FileText, Save, Send } from "lucide-react";
import { format } from "date-fns";
import { cn } from "./ui/utils";
export function NewClaimForm({ onShowPreAuth, onBack }) {
    const [formData, setFormData] = useState({
        // Patient Details
        patientName: '',
        age: '',
        gender: '',
        insuranceId: '',
        // Treatment Details  
        treatmentDate: undefined,
        diagnosis: '',
        hospitalName: '',
        // Claim Type
        claimType: '',
    });
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isDragOver, setIsDragOver] = useState(false);
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    const handleFileUpload = (files) => {
        if (files) {
            const newFiles = Array.from(files);
            setUploadedFiles(prev => [...prev, ...newFiles]);
        }
    };
    const removeFile = (index) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };
    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        handleFileUpload(e.dataTransfer.files);
    };
    const handleSubmit = (isDraft = false) => {
        if (formData.claimType === 'pre-authorization') {
            onShowPreAuth();
        }
        else {
            // Handle reimbursement submission
            alert(isDraft ? 'Claim saved as draft!' : 'Claim submitted successfully!');
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-semibold text-slate-900", children: "File New Claim" }), _jsx("p", { className: "text-slate-600 mt-1", children: "Complete all sections to submit your claim" })] }), _jsx(Button, { variant: "outline", onClick: onBack, children: "\u2190 Back to Dashboard" })] }), _jsxs("form", { className: "space-y-6", children: [_jsxs(Card, { className: "bg-white border border-slate-200 rounded-xl shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg text-slate-900", children: "Patient Details" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "patientName", children: "Full Name *" }), _jsx(Input, { id: "patientName", placeholder: "Enter patient's full name", value: formData.patientName, onChange: (e) => handleInputChange('patientName', e.target.value) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "age", children: "Age *" }), _jsx(Input, { id: "age", type: "number", placeholder: "Age", value: formData.age, onChange: (e) => handleInputChange('age', e.target.value) })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Gender *" }), _jsxs(Select, { value: formData.gender, onValueChange: (value) => handleInputChange('gender', value), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select gender" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "male", children: "Male" }), _jsx(SelectItem, { value: "female", children: "Female" }), _jsx(SelectItem, { value: "other", children: "Other" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "insuranceId", children: "Insurance ID *" }), _jsx(Input, { id: "insuranceId", placeholder: "Enter insurance ID", value: formData.insuranceId, onChange: (e) => handleInputChange('insuranceId', e.target.value) })] })] })] })] }), _jsxs(Card, { className: "bg-white border border-slate-200 rounded-xl shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg text-slate-900", children: "Treatment Details" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Treatment Date *" }), _jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: cn("w-full justify-start text-left font-normal", !formData.treatmentDate && "text-muted-foreground"), children: [_jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }), formData.treatmentDate ? format(formData.treatmentDate, "PPP") : "Pick a date"] }) }), _jsx(PopoverContent, { className: "w-auto p-0", children: _jsx(Calendar, { mode: "single", selected: formData.treatmentDate, onSelect: (date) => handleInputChange('treatmentDate', date), initialFocus: true }) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "hospitalName", children: "Hospital/Clinic Name *" }), _jsx(Input, { id: "hospitalName", placeholder: "Enter hospital or clinic name", value: formData.hospitalName, onChange: (e) => handleInputChange('hospitalName', e.target.value) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "diagnosis", children: "Diagnosis *" }), _jsx(Textarea, { id: "diagnosis", placeholder: "Enter diagnosis details", rows: 3, value: formData.diagnosis, onChange: (e) => handleInputChange('diagnosis', e.target.value) })] })] })] }), _jsxs(Card, { className: "bg-white border border-slate-200 rounded-xl shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg text-slate-900", children: "Claim Type" }) }), _jsx(CardContent, { children: _jsxs(RadioGroup, { value: formData.claimType, onValueChange: (value) => handleInputChange('claimType', value), className: "space-y-4", children: [_jsxs("div", { className: "flex items-start space-x-3 p-4 border border-slate-200 rounded-lg", children: [_jsx(RadioGroupItem, { value: "pre-authorization", id: "pre-auth", className: "mt-1" }), _jsxs("div", { className: "space-y-1 flex-1", children: [_jsx(Label, { htmlFor: "pre-auth", className: "cursor-pointer", children: "Pre-Authorization" }), _jsx("p", { className: "text-sm text-slate-600", children: "Request approval for planned medical treatment before it occurs" })] })] }), _jsxs("div", { className: "flex items-start space-x-3 p-4 border border-slate-200 rounded-lg", children: [_jsx(RadioGroupItem, { value: "reimbursement", id: "reimbursement", className: "mt-1" }), _jsxs("div", { className: "space-y-1 flex-1", children: [_jsx(Label, { htmlFor: "reimbursement", className: "cursor-pointer", children: "Reimbursement" }), _jsx("p", { className: "text-sm text-slate-600", children: "Request payment for medical expenses already incurred" })] })] })] }) })] }), _jsxs(Card, { className: "bg-white border border-slate-200 rounded-xl shadow-sm", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-lg text-slate-900", children: "Supporting Documents" }), _jsx("p", { className: "text-sm text-slate-600", children: "Upload medical reports, bills, prescriptions, and other relevant documents" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: cn("border-2 border-dashed rounded-lg p-8 text-center transition-colors", isDragOver
                                            ? "border-blue-500 bg-blue-50"
                                            : "border-slate-300 hover:border-slate-400"), onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, children: [_jsx(Upload, { className: "mx-auto h-12 w-12 text-slate-400 mb-4" }), _jsxs("div", { className: "space-y-2", children: [_jsx("p", { className: "text-lg font-medium text-slate-700", children: "Drag and drop files here" }), _jsx("p", { className: "text-sm text-slate-500", children: "or click to browse from your computer" }), _jsx("input", { type: "file", multiple: true, accept: ".pdf,.jpg,.jpeg,.png,.doc,.docx", onChange: (e) => handleFileUpload(e.target.files), className: "hidden", id: "file-upload" }), _jsx(Button, { type: "button", variant: "outline", onClick: () => document.getElementById('file-upload')?.click(), className: "mt-4", children: "Browse Files" })] }), _jsx("p", { className: "text-xs text-slate-400 mt-4", children: "Supported formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB per file)" })] }), uploadedFiles.length > 0 && (_jsxs("div", { className: "space-y-2", children: [_jsxs("h4", { className: "font-medium text-slate-700", children: ["Uploaded Files (", uploadedFiles.length, ")"] }), _jsx("div", { className: "space-y-2", children: uploadedFiles.map((file, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(FileText, { className: "h-5 w-5 text-blue-500" }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-slate-700", children: file.name }), _jsxs("p", { className: "text-xs text-slate-500", children: [(file.size / 1024 / 1024).toFixed(2), " MB"] })] })] }), _jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => removeFile(index), className: "text-slate-400 hover:text-red-500", children: _jsx(X, { className: "h-4 w-4" }) })] }, index))) })] }))] })] }), _jsxs("div", { className: "flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4", children: [_jsxs(Button, { type: "button", variant: "outline", onClick: () => handleSubmit(true), className: "flex items-center space-x-2", children: [_jsx(Save, { className: "h-4 w-4" }), _jsx("span", { children: "Save as Draft" })] }), _jsxs(Button, { type: "button", onClick: () => handleSubmit(false), className: "flex items-center space-x-2 bg-blue-600 hover:bg-blue-700", disabled: !formData.patientName || !formData.claimType, children: [_jsx(Send, { className: "h-4 w-4" }), _jsx("span", { children: "Submit Claim" })] })] })] })] }));
}
//# sourceMappingURL=NewClaimForm.js.map