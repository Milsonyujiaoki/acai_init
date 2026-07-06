import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Clock } from 'lucide-react';
export function AppointmentCard({ appointment, onClick }) {
    const formatTime = (hour) => {
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        return `${displayHour}:00 ${period}`;
    };
    const timeRange = `${formatTime(appointment.startHour)} - ${formatTime(appointment.endHour)}`;
    return (_jsx("div", { onClick: onClick, className: `${appointment.color} rounded-lg p-2 cursor-pointer hover:opacity-90 transition-opacity shadow-sm text-white text-xs`, children: _jsxs("div", { className: "space-y-1", children: [_jsx("div", { className: "truncate", children: _jsx("span", { className: "block truncate", children: appointment.teacherName }) }), _jsx("div", { className: "truncate", children: _jsx("span", { className: "block truncate opacity-90", children: appointment.studentName }) }), _jsxs("div", { className: "flex items-center space-x-1 opacity-80", children: [_jsx(Clock, { className: "h-3 w-3" }), _jsx("span", { className: "text-xs", children: timeRange })] })] }) }));
}
//# sourceMappingURL=AppointmentCard.js.map