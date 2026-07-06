import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { AppointmentCard } from './AppointmentCard';
export function CalendarGrid({ appointments, viewMode, currentWeek, onAppointmentClick }) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const hours = Array.from({ length: 14 }, (_, i) => i + 8); // 8 AM to 9 PM
    const formatHour = (hour) => {
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        return `${displayHour.toString().padStart(2, '0')}:00 ${period}`;
    };
    const getAppointmentsForSlot = (day, hour) => {
        return appointments.filter(apt => apt.day === day &&
            hour >= apt.startHour &&
            hour < apt.endHour);
    };
    if (viewMode === 'daily') {
        // For daily view, show only the current day
        const currentDay = new Date(currentWeek).getDay();
        return (_jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden", children: [_jsxs("div", { className: "grid grid-cols-2 border-b border-gray-200", children: [_jsx("div", { className: "p-4 bg-gray-50", children: _jsx("h2", { className: "text-lg text-gray-900", children: days[currentDay] }) }), _jsx("div", { className: "p-4 bg-gray-50", children: _jsx("h3", { className: "text-sm text-gray-600", children: "Appointments" }) })] }), _jsx("div", { className: "max-h-[calc(100vh-12rem)] overflow-y-auto", children: hours.map((hour) => {
                        const slotAppointments = getAppointmentsForSlot(currentDay, hour);
                        return (_jsxs("div", { className: "grid grid-cols-2 border-b border-gray-100 min-h-[4rem]", children: [_jsx("div", { className: "p-3 bg-gray-50 border-r border-gray-200 flex items-center", children: _jsx("span", { className: "text-sm text-gray-600", children: formatHour(hour) }) }), _jsx("div", { className: "p-2 flex flex-col space-y-1", children: slotAppointments.map((appointment) => (_jsx(AppointmentCard, { appointment: appointment, onClick: () => onAppointmentClick(appointment) }, appointment.id))) })] }, hour));
                    }) })] }));
    }
    // Weekly view
    return (_jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden", children: [_jsxs("div", { className: "grid grid-cols-8 border-b border-gray-200", children: [_jsx("div", { className: "p-4 bg-gray-50 border-r border-gray-200", children: _jsx("span", { className: "text-sm text-gray-600", children: "Time" }) }), days.map((day, index) => (_jsx("div", { className: "p-4 bg-gray-50 border-r border-gray-200 last:border-r-0", children: _jsx("h3", { className: "text-sm text-gray-900", children: day }) }, day)))] }), _jsx("div", { className: "max-h-[calc(100vh-12rem)] overflow-y-auto", children: hours.map((hour) => (_jsxs("div", { className: "grid grid-cols-8 border-b border-gray-100 min-h-[4rem]", children: [_jsx("div", { className: "p-3 bg-gray-50 border-r border-gray-200 flex items-center", children: _jsx("span", { className: "text-sm text-gray-600", children: formatHour(hour) }) }), days.map((_, dayIndex) => {
                            const slotAppointments = getAppointmentsForSlot(dayIndex, hour);
                            return (_jsx("div", { className: "p-2 border-r border-gray-200 last:border-r-0 min-h-[4rem] flex flex-col space-y-1", children: slotAppointments.map((appointment) => (_jsx(AppointmentCard, { appointment: appointment, onClick: () => onAppointmentClick(appointment) }, appointment.id))) }, dayIndex));
                        })] }, hour))) })] }));
}
//# sourceMappingURL=CalendarGrid.js.map