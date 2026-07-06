import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { SimpleDialog } from './SimpleDialog';
export function MonthCalendar({ month, year, todos, onUpdateTodos }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentTodos, setCurrentTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState('');
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    // Get first day of month (0 = Sunday, 1 = Monday, etc.)
    const firstDay = new Date(year, month, 1).getDay();
    // Convert to Monday-based (0 = Monday, 6 = Sunday)
    const firstDayMonday = firstDay === 0 ? 6 : firstDay - 1;
    // Get number of days in month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // Create array of day numbers
    const days = [];
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDayMonday; i++) {
        days.push(null);
    }
    // Add day numbers
    for (let day = 1; day <= daysInMonth; day++) {
        days.push(day);
    }
    const handleDayClick = (day) => {
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        setSelectedDate(dateKey);
        setCurrentTodos(todos[dateKey] || []);
        setNewTodoText('');
    };
    const handleSave = () => {
        if (selectedDate) {
            onUpdateTodos(selectedDate, currentTodos);
            setSelectedDate(null);
        }
    };
    const handleAddTodo = () => {
        if (newTodoText.trim()) {
            const newTodo = {
                id: Date.now().toString(),
                text: newTodoText.trim(),
                done: false
            };
            setCurrentTodos([...currentTodos, newTodo]);
            setNewTodoText('');
        }
    };
    const handleToggleTodo = (id) => {
        setCurrentTodos(currentTodos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
    };
    const handleDeleteTodo = (id) => {
        setCurrentTodos(currentTodos.filter(todo => todo.id !== id));
    };
    const handleToggleTodoInCell = (day, id, e) => {
        e.stopPropagation();
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayTodos = todos[dateKey] || [];
        const updatedTodos = dayTodos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
        onUpdateTodos(dateKey, updatedTodos);
    };
    const getDateKey = (day) => {
        return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    };
    const isWeekend = (index) => {
        // Saturday is column 5, Sunday is column 6 (0-indexed)
        const dayOfWeek = index % 7;
        return dayOfWeek === 5 || dayOfWeek === 6;
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden", children: [_jsx("div", { className: "p-4 border-b border-gray-200 bg-gray-50", children: _jsx("h3", { className: "text-center", children: monthNames[month] }) }), _jsxs("div", { className: "p-3", children: [_jsx("div", { className: "grid grid-cols-7 gap-2 mb-2", children: dayNames.map((day, idx) => (_jsx("div", { className: `text-center text-sm py-1 ${idx === 5 || idx === 6 ? 'text-blue-600' : 'text-gray-600'}`, children: day }, day))) }), _jsx("div", { className: "grid grid-cols-7 gap-2", children: days.map((day, index) => (_jsx("div", { className: "aspect-square flex flex-col", children: day ? (_jsxs("button", { onClick: () => handleDayClick(day), className: `w-full h-full flex flex-col border rounded hover:border-blue-300 transition-colors text-left p-2 group ${isWeekend(index)
                                            ? 'bg-blue-50 border-blue-100 hover:bg-blue-100'
                                            : 'bg-white border-gray-200 hover:bg-blue-50/30'}`, children: [_jsx("div", { className: `text-sm mb-1 group-hover:text-blue-600 ${isWeekend(index) ? 'text-blue-700' : 'text-gray-700'}`, children: day }), _jsx("div", { className: "flex-1 text-xs overflow-hidden space-y-0.5", children: todos[getDateKey(day)]?.map((todo) => (_jsxs("div", { className: "flex items-start gap-1", children: [_jsx("input", { type: "checkbox", checked: todo.done, onChange: (e) => handleToggleTodoInCell(day, todo.id, e), onClick: (e) => e.stopPropagation(), className: "mt-0.5 flex-shrink-0 cursor-pointer" }), _jsx("span", { className: `line-clamp-1 break-words ${todo.done ? 'line-through text-gray-400' : 'text-gray-700'}`, children: todo.text })] }, todo.id))) })] })) : (_jsx("div", { className: "w-full h-full" })) }, index))) })] })] }), _jsx(SimpleDialog, { open: selectedDate !== null, onOpenChange: (open) => !open && setSelectedDate(null), title: selectedDate ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }) : '', children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2 max-h-[300px] overflow-y-auto", children: [currentTodos.map((todo) => (_jsxs("div", { className: "flex items-start gap-2 p-2 border border-gray-200 rounded hover:bg-gray-50", children: [_jsx("input", { type: "checkbox", checked: todo.done, onChange: () => handleToggleTodo(todo.id), className: "mt-1 flex-shrink-0 cursor-pointer" }), _jsx("span", { className: `flex-1 break-words ${todo.done ? 'line-through text-gray-400' : 'text-gray-700'}`, children: todo.text }), _jsx("button", { onClick: () => handleDeleteTodo(todo.id), className: "text-red-500 hover:text-red-700 text-sm flex-shrink-0", children: "Delete" })] }, todo.id))), currentTodos.length === 0 && (_jsx("p", { className: "text-gray-400 text-center py-4", children: "No tasks yet. Add one below!" }))] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "text", value: newTodoText, onChange: (e) => setNewTodoText(e.target.value), onKeyDown: (e) => e.key === 'Enter' && handleAddTodo(), placeholder: "Add a new task...", className: "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" }), _jsx("button", { onClick: handleAddTodo, className: "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors", children: "Add" })] }), _jsxs("div", { className: "flex justify-end gap-2 pt-2 border-t", children: [_jsx("button", { onClick: () => setSelectedDate(null), className: "px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors", children: "Cancel" }), _jsx("button", { onClick: handleSave, className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors", children: "Save" })] })] }) })] }));
}
//# sourceMappingURL=MonthCalendar.js.map