import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { X, Plus, ArrowLeft, Send } from "lucide-react";
export function PreAuthorizationForm({ onBack, onSubmit }) {
    const [formData, setFormData] = useState({
        doctorName: '',
        registrationId: '',
        specialization: '',
        estimatedCost: '',
        diagnosisNotes: [],
    });
    const [currentNote, setCurrentNote] = useState('');
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    const addDiagnosisNote = () => {
        if (currentNote.trim()) {
            setFormData(prev => ({
                ...prev,
                diagnosisNotes: [...prev.diagnosisNotes, currentNote.trim()]
            }));
            setCurrentNote('');
        }
    };
    const removeDiagnosisNote = (index) => {
        setFormData(prev => ({
            ...prev,
            diagnosisNotes: prev.diagnosisNotes.filter((_, i) => i !== index)
        }));
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addDiagnosisNote();
        }
    };
    const handleSubmit = () => {
        // Validate required fields
        if (!formData.doctorName || !formData.registrationId || !formData.specialization || !formData.estimatedCost) {
            alert('Please fill in all required fields');
            return;
        }
        onSubmit();
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-semibold text-slate-900", children: "Pre-Authorization Details" }), _jsx("p", { className: "text-slate-600 mt-1", children: "Additional information required for pre-authorization requests" })] }), _jsxs(Button, { variant: "outline", onClick: onBack, className: "flex items-center space-x-2", children: [_jsx(ArrowLeft, { className: "h-4 w-4" }), _jsx("span", { children: "Back to Claim Form" })] })] }), _jsx(Card, { className: "bg-blue-50 border border-blue-200 rounded-xl", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", children: _jsx("span", { className: "text-white text-xs font-medium", children: "\u2139" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-blue-900 mb-1", children: "Pre-Authorization Required" }), _jsx("p", { className: "text-sm text-blue-700", children: "This request will be reviewed by our medical team within 48-72 hours. You will receive a notification once the decision is made." })] })] }) }) }), _jsxs("form", { className: "space-y-6", children: [_jsxs(Card, { className: "bg-white border border-slate-200 rounded-xl shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg text-slate-900", children: "Doctor Details" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "doctorName", children: "Doctor Name *" }), _jsx(Input, { id: "doctorName", placeholder: "Dr. John Smith", value: formData.doctorName, onChange: (e) => handleInputChange('doctorName', e.target.value) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "registrationId", children: "Medical Registration ID *" }), _jsx(Input, { id: "registrationId", placeholder: "MR123456789", value: formData.registrationId, onChange: (e) => handleInputChange('registrationId', e.target.value) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "specialization", children: "Specialization *" }), _jsx(Input, { id: "specialization", placeholder: "e.g., Cardiology, Orthopedics, Neurology", value: formData.specialization, onChange: (e) => handleInputChange('specialization', e.target.value) })] })] })] }), _jsxs(Card, { className: "bg-white border border-slate-200 rounded-xl shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg text-slate-900", children: "Treatment Cost" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "estimatedCost", children: "Estimated Cost *" }), _jsxs("div", { className: "relative", children: [_jsx("span", { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500", children: "$" }), _jsx(Input, { id: "estimatedCost", type: "number", placeholder: "0.00", value: formData.estimatedCost, onChange: (e) => handleInputChange('estimatedCost', e.target.value), className: "pl-8" })] }), _jsx("p", { className: "text-sm text-slate-600", children: "Enter the total estimated cost for the proposed treatment" })] }) })] }), _jsxs(Card, { className: "bg-white border border-slate-200 rounded-xl shadow-sm", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-lg text-slate-900", children: "Diagnosis Notes" }), _jsx("p", { className: "text-sm text-slate-600", children: "Add specific diagnosis codes, symptoms, or treatment notes" })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex space-x-2", children: [_jsx(Input, { placeholder: "Enter diagnosis note, ICD code, or symptom", value: currentNote, onChange: (e) => setCurrentNote(e.target.value), onKeyPress: handleKeyPress, className: "flex-1" }), _jsxs(Button, { type: "button", onClick: addDiagnosisNote, disabled: !currentNote.trim(), className: "flex items-center space-x-1 bg-blue-600 hover:bg-blue-700", children: [_jsx(Plus, { className: "h-4 w-4" }), _jsx("span", { children: "Add" })] })] }), formData.diagnosisNotes.length > 0 && (_jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { children: ["Added Notes (", formData.diagnosisNotes.length, ")"] }), _jsx("div", { className: "flex flex-wrap gap-2", children: formData.diagnosisNotes.map((note, index) => (_jsxs(Badge, { variant: "secondary", className: "bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 flex items-center space-x-2", children: [_jsx("span", { children: note }), _jsx("button", { type: "button", onClick: () => removeDiagnosisNote(index), className: "text-slate-400 hover:text-red-500 ml-2", children: _jsx(X, { className: "h-3 w-3" }) })] }, index))) })] })), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { className: "text-sm", children: "Common Diagnosis Codes" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-2", children: [
                                                    'I10 - Essential Hypertension',
                                                    'E11.9 - Type 2 Diabetes',
                                                    'M25.511 - Pain in right shoulder',
                                                    'Z51.11 - Chemotherapy',
                                                    'S72.001A - Fracture of femur',
                                                    'F32.9 - Depression',
                                                ].map((code) => (_jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => {
                                                        setCurrentNote(code);
                                                        addDiagnosisNote();
                                                    }, className: "text-xs text-left justify-start h-auto py-2 px-3", children: code }, code))) })] })] })] }), _jsxs(Card, { className: "bg-white border border-slate-200 rounded-xl shadow-sm", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg text-slate-900", children: "Additional Information" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "additionalInfo", children: "Additional Comments (Optional)" }), _jsx(Textarea, { id: "additionalInfo", placeholder: "Any additional information that might help with the pre-authorization process", rows: 4 })] }) })] }), _jsxs("div", { className: "flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4", children: [_jsxs(Button, { type: "button", variant: "outline", onClick: onBack, className: "flex items-center space-x-2", children: [_jsx(ArrowLeft, { className: "h-4 w-4" }), _jsx("span", { children: "Back to Claim Form" })] }), _jsxs(Button, { type: "button", onClick: handleSubmit, className: "flex items-center space-x-2 bg-blue-600 hover:bg-blue-700", children: [_jsx(Send, { className: "h-4 w-4" }), _jsx("span", { children: "Submit Pre-Authorization Request" })] })] })] })] }));
}
//# sourceMappingURL=PreAuthorizationForm.js.map