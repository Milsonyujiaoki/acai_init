import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { MonthCalendar } from './components/MonthCalendar';
export default function App() {
    const year = 2026;
    const months = Array.from({ length: 12 }, (_, i) => i);
    // Store todos by date key (YYYY-MM-DD)
    const [todos, setTodos] = useState({});
    const handleUpdateTodos = (date, items) => {
        setTodos(prev => ({
            ...prev,
            [date]: items
        }));
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-50 py-8 px-4", children: _jsxs("div", { className: "max-w-[1920px] mx-auto", children: [_jsx("h1", { className: "text-center mb-2", children: "2026 Calendar" }), _jsx("p", { className: "text-center text-gray-600 mb-8", children: "Week starts on Monday \u2022 Click any day to add your plan" }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6", children: months.map((month) => (_jsx(MonthCalendar, { month: month, year: year, todos: todos, onUpdateTodos: handleUpdateTodos }, month))) })] }) }));
}
//# sourceMappingURL=App.js.map