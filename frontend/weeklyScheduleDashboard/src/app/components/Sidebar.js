import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Input } from './ui/input';
import { Search, User } from 'lucide-react';
export function Sidebar({ teachers, searchQuery, setSearchQuery }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'available':
                return 'bg-green-500';
            case 'busy':
                return 'bg-red-500';
            case 'partially':
                return 'bg-yellow-500';
            default:
                return 'bg-gray-500';
        }
    };
    const getStatusText = (status) => {
        switch (status) {
            case 'available':
                return 'Available';
            case 'busy':
                return 'Busy';
            case 'partially':
                return 'Partially Available';
            default:
                return 'Unknown';
        }
    };
    return (_jsxs("div", { className: "w-80 bg-white border-r border-gray-200 flex flex-col", children: [_jsx("div", { className: "p-4 border-b border-gray-200", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" }), _jsx(Input, { type: "text", placeholder: "Search teachers or students...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-10" })] }) }), _jsxs("div", { className: "flex-1 overflow-y-auto", children: [_jsxs("div", { className: "p-4", children: [_jsxs("h3", { className: "text-sm text-gray-500 uppercase tracking-wide mb-3", children: ["Teachers (", teachers.length, ")"] }), _jsx("div", { className: "space-y-2", children: teachers.map((teacher) => (_jsx("div", { className: "flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors", children: _jsxs("div", { className: "flex items-center space-x-3 flex-1", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: `w-10 h-10 ${teacher.color} rounded-full flex items-center justify-center`, children: _jsx(User, { className: "h-5 w-5 text-white" }) }), _jsx("div", { className: `absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(teacher.status)} rounded-full border-2 border-white`, title: getStatusText(teacher.status) })] }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "text-sm text-gray-900 truncate", children: teacher.name }), _jsx("p", { className: "text-xs text-gray-500", children: getStatusText(teacher.status) })] })] }) }, teacher.id))) })] }), _jsx("div", { className: "p-4 border-t border-gray-200 bg-gray-50", children: _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "text-xs text-gray-500 uppercase tracking-wide", children: "Status Legend" }), _jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-3 h-3 bg-green-500 rounded-full" }), _jsx("span", { className: "text-xs text-gray-600", children: "Available" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-3 h-3 bg-yellow-500 rounded-full" }), _jsx("span", { className: "text-xs text-gray-600", children: "Partially Available" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-3 h-3 bg-red-500 rounded-full" }), _jsx("span", { className: "text-xs text-gray-600", children: "Busy" })] })] })] }) })] })] }));
}
//# sourceMappingURL=Sidebar.js.map