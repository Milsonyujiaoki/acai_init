import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
export function Header({ viewMode, setViewMode, currentWeek, setCurrentWeek, onAddAppointment }) {
    const navigateWeek = (direction) => {
        const newDate = new Date(currentWeek);
        newDate.setDate(newDate.getDate() + (direction * 7));
        setCurrentWeek(newDate);
    };
    const formatWeekRange = (date) => {
        const startOfWeek = new Date(date);
        const dayOfWeek = startOfWeek.getDay();
        startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(endOfWeek.getDate() + 6);
        const options = {
            month: 'short',
            day: 'numeric'
        };
        return `${startOfWeek.toLocaleDateString('en-US', options)} - ${endOfWeek.toLocaleDateString('en-US', options)}, ${endOfWeek.getFullYear()}`;
    };
    return (_jsx("header", { className: "bg-white border-b border-gray-200 px-6 py-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-6", children: [_jsx("h1", { className: "text-2xl text-gray-900", children: "Weekly Class Schedule" }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => navigateWeek(-1), children: _jsx(ChevronLeft, { className: "h-4 w-4" }) }), _jsx("span", { className: "text-sm text-gray-600 min-w-[200px] text-center", children: formatWeekRange(currentWeek) }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => navigateWeek(1), children: _jsx(ChevronRight, { className: "h-4 w-4" }) })] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "flex bg-gray-100 rounded-lg p-1", children: [_jsx(Button, { variant: viewMode === 'weekly' ? 'default' : 'ghost', size: "sm", onClick: () => setViewMode('weekly'), className: "text-sm", children: "Weekly" }), _jsx(Button, { variant: viewMode === 'daily' ? 'default' : 'ghost', size: "sm", onClick: () => setViewMode('daily'), className: "text-sm", children: "Daily" })] }), _jsxs(Button, { onClick: onAddAppointment, className: "bg-blue-600 hover:bg-blue-700 text-white rounded-lg", children: [_jsx(Plus, { className: "h-4 w-4 mr-2" }), "Add New Appointment"] })] })] }) }));
}
//# sourceMappingURL=Header.js.map