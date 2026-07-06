import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Calendar, Clock, User, Link, Trash2, Edit } from 'lucide-react';
export function AppointmentModal({ appointment, teachers, isOpen, onClose, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedAppointment, setEditedAppointment] = useState(appointment);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const hours = Array.from({ length: 14 }, (_, i) => i + 8);
    const formatTime = (hour) => {
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        return `${displayHour}:00 ${period}`;
    };
    const handleSave = () => {
        const teacher = teachers.find(t => t.id === editedAppointment.teacherId);
        const updatedAppointment = {
            ...editedAppointment,
            teacherName: teacher?.name || editedAppointment.teacherName,
            color: teacher?.color || editedAppointment.color
        };
        onUpdate(updatedAppointment);
        setIsEditing(false);
    };
    const handleCancel = () => {
        setEditedAppointment(appointment);
        setIsEditing(false);
    };
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this appointment?')) {
            onDelete(appointment.id);
        }
    };
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "max-w-md", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { className: "flex items-center space-x-2", children: [_jsx(Calendar, { className: "h-5 w-5" }), _jsx("span", { children: "Appointment Details" })] }) }), _jsx("div", { className: "space-y-4", children: !isEditing ? (_jsxs(_Fragment, { children: [_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: `w-4 h-4 ${appointment.color} rounded-full` }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: "Teacher" }), _jsx("p", { className: "text-gray-900", children: appointment.teacherName })] })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(User, { className: "h-4 w-4 text-gray-400" }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: "Student" }), _jsx("p", { className: "text-gray-900", children: appointment.studentName })] })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Clock, { className: "h-4 w-4 text-gray-400" }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: "Time" }), _jsxs("p", { className: "text-gray-900", children: [days[appointment.day], ", ", formatTime(appointment.startHour), " - ", formatTime(appointment.endHour)] })] })] }), appointment.zoomLink && (_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Link, { className: "h-4 w-4 text-gray-400" }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: "Zoom Link" }), _jsx("a", { href: appointment.zoomLink, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:text-blue-800 text-sm underline", children: "Join Meeting" })] })] })), appointment.notes && (_jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600 mb-1", children: "Notes" }), _jsx("p", { className: "text-gray-900 text-sm bg-gray-50 p-2 rounded", children: appointment.notes })] }))] }), _jsxs("div", { className: "flex space-x-2 pt-4 border-t", children: [_jsxs(Button, { onClick: () => setIsEditing(true), variant: "outline", className: "flex-1", children: [_jsx(Edit, { className: "h-4 w-4 mr-2" }), "Edit"] }), _jsxs(Button, { onClick: handleDelete, variant: "destructive", className: "flex-1", children: [_jsx(Trash2, { className: "h-4 w-4 mr-2" }), "Delete"] })] })] })) : (_jsxs(_Fragment, { children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { children: "Teacher" }), _jsxs(Select, { value: editedAppointment.teacherId.toString(), onValueChange: (value) => setEditedAppointment({
                                                    ...editedAppointment,
                                                    teacherId: parseInt(value)
                                                }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsx(SelectContent, { children: teachers.map((teacher) => (_jsx(SelectItem, { value: teacher.id.toString(), children: teacher.name }, teacher.id))) })] })] }), _jsxs("div", { children: [_jsx(Label, { children: "Student Name" }), _jsx(Input, { value: editedAppointment.studentName, onChange: (e) => setEditedAppointment({
                                                    ...editedAppointment,
                                                    studentName: e.target.value
                                                }) })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { children: "Day" }), _jsxs(Select, { value: editedAppointment.day.toString(), onValueChange: (value) => setEditedAppointment({
                                                            ...editedAppointment,
                                                            day: parseInt(value)
                                                        }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsx(SelectContent, { children: days.map((day, index) => (_jsx(SelectItem, { value: index.toString(), children: day }, index))) })] })] }), _jsxs("div", { children: [_jsx(Label, { children: "Start Time" }), _jsxs(Select, { value: editedAppointment.startHour.toString(), onValueChange: (value) => setEditedAppointment({
                                                            ...editedAppointment,
                                                            startHour: parseInt(value)
                                                        }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsx(SelectContent, { children: hours.map((hour) => (_jsx(SelectItem, { value: hour.toString(), children: formatTime(hour) }, hour))) })] })] })] }), _jsxs("div", { children: [_jsx(Label, { children: "End Time" }), _jsxs(Select, { value: editedAppointment.endHour.toString(), onValueChange: (value) => setEditedAppointment({
                                                    ...editedAppointment,
                                                    endHour: parseInt(value)
                                                }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsx(SelectContent, { children: hours.map((hour) => (_jsx(SelectItem, { value: hour.toString(), children: formatTime(hour) }, hour))) })] })] }), _jsxs("div", { children: [_jsx(Label, { children: "Zoom Link" }), _jsx(Input, { value: editedAppointment.zoomLink, onChange: (e) => setEditedAppointment({
                                                    ...editedAppointment,
                                                    zoomLink: e.target.value
                                                }), placeholder: "https://zoom.us/j/..." })] }), _jsxs("div", { children: [_jsx(Label, { children: "Notes" }), _jsx(Textarea, { value: editedAppointment.notes, onChange: (e) => setEditedAppointment({
                                                    ...editedAppointment,
                                                    notes: e.target.value
                                                }), placeholder: "Additional notes...", rows: 3 })] })] }), _jsxs("div", { className: "flex space-x-2 pt-4 border-t", children: [_jsx(Button, { onClick: handleCancel, variant: "outline", className: "flex-1", children: "Cancel" }), _jsx(Button, { onClick: handleSave, className: "flex-1", children: "Save Changes" })] })] })) })] }) }));
}
//# sourceMappingURL=AppointmentModal.js.map