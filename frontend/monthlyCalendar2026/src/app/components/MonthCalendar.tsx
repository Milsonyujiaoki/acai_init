import { useState } from 'react';
import { SimpleDialog } from './SimpleDialog';
import type { TodoItem } from '../App';

interface MonthCalendarProps {
  month: number;
  year: number;
  todos: Record<string, TodoItem[]>;
  onUpdateTodos: (date: string, items: TodoItem[]) => void;
}

export function MonthCalendar({ month, year, todos, onUpdateTodos }: MonthCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentTodos, setCurrentTodos] = useState<TodoItem[]>([]);
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
  
  const handleDayClick = (day: number) => {
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
      const newTodo: TodoItem = {
        id: Date.now().toString(),
        text: newTodoText.trim(),
        done: false
      };
      setCurrentTodos([...currentTodos, newTodo]);
      setNewTodoText('');
    }
  };
  
  const handleToggleTodo = (id: string) => {
    setCurrentTodos(currentTodos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };
  
  const handleDeleteTodo = (id: string) => {
    setCurrentTodos(currentTodos.filter(todo => todo.id !== id));
  };
  
  const handleToggleTodoInCell = (day: number, id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayTodos = todos[dateKey] || [];
    const updatedTodos = dayTodos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    onUpdateTodos(dateKey, updatedTodos);
  };
  
  const getDateKey = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };
  
  const isWeekend = (index: number) => {
    // Saturday is column 5, Sunday is column 6 (0-indexed)
    const dayOfWeek = index % 7;
    return dayOfWeek === 5 || dayOfWeek === 6;
  };
  
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-center">{monthNames[month]}</h3>
        </div>
        
        <div className="p-3">
          {/* Day names header */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {dayNames.map((day, idx) => (
              <div 
                key={day} 
                className={`text-center text-sm py-1 ${
                  idx === 5 || idx === 6 ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => (
              <div
                key={index}
                className="aspect-square flex flex-col"
              >
                {day ? (
                  <button
                    onClick={() => handleDayClick(day)}
                    className={`w-full h-full flex flex-col border rounded hover:border-blue-300 transition-colors text-left p-2 group ${
                      isWeekend(index)
                        ? 'bg-blue-50 border-blue-100 hover:bg-blue-100'
                        : 'bg-white border-gray-200 hover:bg-blue-50/30'
                    }`}
                  >
                    <div className={`text-sm mb-1 group-hover:text-blue-600 ${
                      isWeekend(index) ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                      {day}
                    </div>
                    <div className="flex-1 text-xs overflow-hidden space-y-0.5">
                      {todos[getDateKey(day)]?.map((todo) => (
                        <div key={todo.id} className="flex items-start gap-1">
                          <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={(e) => handleToggleTodoInCell(day, todo.id, e as any)}
                            onClick={(e) => e.stopPropagation()}
                            className="mt-0.5 flex-shrink-0 cursor-pointer"
                          />
                          <span className={`line-clamp-1 break-words ${
                            todo.done ? 'line-through text-gray-400' : 'text-gray-700'
                          }`}>
                            {todo.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </button>
                ) : (
                  <div className="w-full h-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Edit dialog */}
      <SimpleDialog
        open={selectedDate !== null}
        onOpenChange={(open) => !open && setSelectedDate(null)}
        title={selectedDate ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric' 
        }) : ''}
      >
        <div className="space-y-4">
          {/* Todo list */}
          <div className="space-y-2 max-h-[300px] overflow-y-auto">
            {currentTodos.map((todo) => (
              <div key={todo.id} className="flex items-start gap-2 p-2 border border-gray-200 rounded hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="mt-1 flex-shrink-0 cursor-pointer"
                />
                <span className={`flex-1 break-words ${
                  todo.done ? 'line-through text-gray-400' : 'text-gray-700'
                }`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 text-sm flex-shrink-0"
                >
                  Delete
                </button>
              </div>
            ))}
            {currentTodos.length === 0 && (
              <p className="text-gray-400 text-center py-4">No tasks yet. Add one below!</p>
            )}
          </div>
          
          {/* Add new todo */}
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
              placeholder="Add a new task..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleAddTodo}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Add
            </button>
          </div>
          
          {/* Action buttons */}
          <div className="flex justify-end gap-2 pt-2 border-t">
            <button
              onClick={() => setSelectedDate(null)}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </SimpleDialog>
    </>
  );
}
