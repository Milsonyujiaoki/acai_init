import type { TodoItem } from '../App';
interface MonthCalendarProps {
    month: number;
    year: number;
    todos: Record<string, TodoItem[]>;
    onUpdateTodos: (date: string, items: TodoItem[]) => void;
}
export declare function MonthCalendar({ month, year, todos, onUpdateTodos }: MonthCalendarProps): any;
export {};
//# sourceMappingURL=MonthCalendar.d.ts.map