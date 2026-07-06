import { useState } from 'react';
import { MonthCalendar } from './components/MonthCalendar';

export interface TodoItem {
  id: string;
  text: string;
  done: boolean;
}

export default function App() {
  const year = 2026;
  const months = Array.from({ length: 12 }, (_, i) => i);
  
  // Store todos by date key (YYYY-MM-DD)
  const [todos, setTodos] = useState<Record<string, TodoItem[]>>({});
  
  const handleUpdateTodos = (date: string, items: TodoItem[]) => {
    setTodos(prev => ({
      ...prev,
      [date]: items
    }));
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-[1920px] mx-auto">
        <h1 className="text-center mb-2">2026 Calendar</h1>
        <p className="text-center text-gray-600 mb-8">Week starts on Monday • Click any day to add your plan</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          {months.map((month) => (
            <MonthCalendar 
              key={month} 
              month={month} 
              year={year}
              todos={todos}
              onUpdateTodos={handleUpdateTodos}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
