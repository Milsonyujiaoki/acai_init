import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { CalendarGrid } from './components/CalendarGrid';
import { AppointmentModal } from './components/AppointmentModal';
import { AddAppointmentModal } from './components/AddAppointmentModal';
// Sample data for teachers
const teachers = [
    { id: 1, name: 'Mr. Ahmed', status: 'available', color: 'bg-blue-500' },
    { id: 2, name: 'Ms. Sarah', status: 'busy', color: 'bg-green-500' },
    { id: 3, name: 'Dr. Hassan', status: 'partially', color: 'bg-purple-500' },
    { id: 4, name: 'Ms. Fatima', status: 'available', color: 'bg-orange-500' },
    { id: 5, name: 'Mr. Omar', status: 'busy', color: 'bg-red-500' },
];
// Sample appointments data
const initialAppointments = [
    {
        id: 1,
        teacherId: 1,
        teacherName: 'Mr. Ahmed',
        studentName: 'Ali Hassan',
        day: 1, // Monday
        startHour: 10,
        endHour: 11,
        notes: 'Mathematics - Algebra review',
        zoomLink: 'https://zoom.us/j/123456789',
        color: 'bg-blue-500'
    },
    {
        id: 2,
        teacherId: 2,
        teacherName: 'Ms. Sarah',
        studentName: 'Amira Khalil',
        day: 1, // Monday
        startHour: 14,
        endHour: 15,
        notes: 'English - Literature discussion',
        zoomLink: 'https://zoom.us/j/987654321',
        color: 'bg-green-500'
    },
    {
        id: 3,
        teacherId: 3,
        teacherName: 'Dr. Hassan',
        studentName: 'Mohamed Ali',
        day: 2, // Tuesday
        startHour: 9,
        endHour: 10,
        notes: 'Physics - Mechanics',
        zoomLink: 'https://zoom.us/j/456789123',
        color: 'bg-purple-500'
    },
    {
        id: 4,
        teacherId: 1,
        teacherName: 'Mr. Ahmed',
        studentName: 'Layla Ahmed',
        day: 3, // Wednesday
        startHour: 11,
        endHour: 12,
        notes: 'Mathematics - Calculus',
        zoomLink: 'https://zoom.us/j/789123456',
        color: 'bg-blue-500'
    },
    {
        id: 5,
        teacherId: 4,
        teacherName: 'Ms. Fatima',
        studentName: 'Yusuf Hassan',
        day: 4, // Thursday
        startHour: 16,
        endHour: 17,
        notes: 'Chemistry - Organic compounds',
        zoomLink: 'https://zoom.us/j/321654987',
        color: 'bg-orange-500'
    },
];
export default function App() {
    const [appointments, setAppointments] = useState(initialAppointments);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState('weekly');
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const [searchQuery, setSearchQuery] = useState('');
    const handleAppointmentClick = (appointment) => {
        setSelectedAppointment(appointment);
        setIsAppointmentModalOpen(true);
    };
    const handleAddAppointment = (newAppointment) => {
        const appointment = {
            ...newAppointment,
            id: appointments.length + 1,
            color: teachers.find(t => t.id === newAppointment.teacherId)?.color || 'bg-gray-500'
        };
        setAppointments([...appointments, appointment]);
    };
    const handleUpdateAppointment = (updatedAppointment) => {
        setAppointments(appointments.map(apt => apt.id === updatedAppointment.id ? updatedAppointment : apt));
    };
    const handleDeleteAppointment = (appointmentId) => {
        setAppointments(appointments.filter(apt => apt.id !== appointmentId));
        setIsAppointmentModalOpen(false);
    };
    const filteredTeachers = teachers.filter(teacher => teacher.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const filteredAppointments = appointments.filter(appointment => appointment.teacherName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        appointment.studentName.toLowerCase().includes(searchQuery.toLowerCase()));
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(Header, { viewMode: viewMode, setViewMode: setViewMode, currentWeek: currentWeek, setCurrentWeek: setCurrentWeek, onAddAppointment: () => setIsAddModalOpen(true) }), _jsxs("div", { className: "flex h-[calc(100vh-4rem)]", children: [_jsx(Sidebar, { teachers: filteredTeachers, searchQuery: searchQuery, setSearchQuery: setSearchQuery }), _jsx("div", { className: "flex-1 p-6", children: _jsx(CalendarGrid, { appointments: filteredAppointments, viewMode: viewMode, currentWeek: currentWeek, onAppointmentClick: handleAppointmentClick }) })] }), isAppointmentModalOpen && selectedAppointment && (_jsx(AppointmentModal, { appointment: selectedAppointment, teachers: teachers, isOpen: isAppointmentModalOpen, onClose: () => setIsAppointmentModalOpen(false), onUpdate: handleUpdateAppointment, onDelete: handleDeleteAppointment })), isAddModalOpen && (_jsx(AddAppointmentModal, { teachers: teachers, isOpen: isAddModalOpen, onClose: () => setIsAddModalOpen(false), onAdd: handleAddAppointment }))] }));
}
//# sourceMappingURL=App.js.map