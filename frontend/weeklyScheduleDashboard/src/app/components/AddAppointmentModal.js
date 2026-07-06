import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Plus } from 'lucide-react';
export function AddAppointmentModal({ teachers, isOpen, onClose, onAdd }) {
    const [newAppointment, setNewAppointment] = useState({
        teacherId: '',
        studentName: '',
        day: '',
        startHour: '',
        endHour: '',
        notes: '',
        zoomLink: ''
    });
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const hours = Array.from({ length: 14 }, (_, i) => i + 8);
    const formatTime = (hour) => {
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        return `${displayHour}:00 ${period}`;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newAppointment.teacherId || !newAppointment.studentName || !newAppointment.day ||
            !newAppointment.startHour || !newAppointment.endHour) {
            alert('Please fill in all required fields');
            return;
        }
        if (parseInt(newAppointment.startHour) >= parseInt(newAppointment.endHour)) {
            alert('End time must be after start time');
            return;
        }
        const teacher = teachers.find(t => t.id === parseInt(newAppointment.teacherId));
        onAdd({
            teacherId: parseInt(newAppointment.teacherId),
            teacherName: teacher?.name || '',
            studentName: newAppointment.studentName,
            day: parseInt(newAppointment.day),
            startHour: parseInt(newAppointment.startHour),
            endHour: parseInt(newAppointment.endHour),
            notes: newAppointment.notes,
            zoomLink: newAppointment.zoomLink
        });
        // Reset form
        setNewAppointment({
            teacherId: '',
            studentName: '',
            day: '',
            startHour: '',
            endHour: '',
            notes: '',
            zoomLink: ''
        });
        onClose();
    };
    const handleCancel = () => {
        setNewAppointment({
            teacherId: '',
            studentName: '',
            day: '',
            startHour: '',
            endHour: '',
            notes: '',
            zoomLink: ''
        });
        onClose();
    };
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "max-w-md", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { className: "flex items-center space-x-2", children: [_jsx(Plus, { className: "h-5 w-5" }), _jsx("span", { children: "Add New Appointment" })] }) }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { children: "Teacher *" }), _jsxs(Select, { value: newAppointment.teacherId, onValueChange: (value) => setNewAppointment({
                                        ...newAppointment,
                                        teacherId: value
                                    }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select a teacher" }) }), _jsx(SelectContent, { children: teachers.map((teacher) => (_jsx(SelectItem, { value: teacher.id.toString(), children: _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: `w-3 h-3 ${teacher.color} rounded-full` }), _jsx("span", { children: teacher.name })] }) }, teacher.id))) })] })] }), _jsxs("div", { children: [_jsx(Label, { children: "Student Name *" }), _jsx(Input, { value: newAppointment.studentName, onChange: (e) => setNewAppointment({
                                        ...newAppointment,
                                        studentName: e.target.value
                                    }), placeholder: "Enter student name", required: true })] }), _jsxs("div", { children: [_jsx(Label, { children: "Day *" }), _jsxs(Select, { value: newAppointment.day, onValueChange: (value) => setNewAppointment({
                                        ...newAppointment,
                                        day: value
                                    }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select a day" }) }), _jsx(SelectContent, { children: days.map((day, index) => (_jsx(SelectItem, { value: index.toString(), children: day }, index))) })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { children: "Start Time *" }), _jsxs(Select, { value: newAppointment.startHour, onValueChange: (value) => setNewAppointment({
                                                ...newAppointment,
                                                startHour: value
                                            }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Start" }) }), _jsx(SelectContent, { children: hours.map((hour) => (_jsx(SelectItem, { value: hour.toString(), children: formatTime(hour) }, hour))) })] })] }), _jsxs("div", { children: [_jsx(Label, { children: "End Time *" }), _jsxs(Select, { value: newAppointment.endHour, onValueChange: (value) => setNewAppointment({
                                                ...newAppointment,
                                                endHour: value
                                            }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "End" }) }), _jsx(SelectContent, { children: hours.map((hour) => (_jsx(SelectItem, { value: hour.toString(), children: formatTime(hour) }, hour))) })] })] })] }), _jsxs("div", { children: [_jsx(Label, { children: "Zoom Link" }), _jsx(Input, { value: newAppointment.zoomLink, onChange: (e) => setNewAppointment({
                                        ...newAppointment,
                                        zoomLink: e.target.value
                                    }), placeholder: "https://zoom.us/j/..." })] }), _jsxs("div", { children: [_jsx(Label, { children: "Notes" }), _jsx(Textarea, { value: newAppointment.notes, onChange: (e) => setNewAppointment({
                                        ...newAppointment,
                                        notes: e.target.value
                                    }), placeholder: "Additional notes or subject details...", rows: 3 })] }), _jsxs("div", { className: "flex space-x-2 pt-4 border-t", children: [_jsx(Button, { type: "button", onClick: handleCancel, variant: "outline", className: "flex-1", children: "Cancel" }), _jsx(Button, { type: "submit", className: "flex-1 bg-blue-600 hover:bg-blue-700", children: "Add Appointment" })] })] })] }) }));
}
//# sourceMappingURL=AddAppointmentModal.js.map