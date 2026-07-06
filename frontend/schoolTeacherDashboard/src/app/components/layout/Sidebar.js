import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../ui/utils';
import { Button } from '../ui/button';
import { Home, FileText, ClipboardList, BookOpen, CreditCard, LogOut, Monitor } from 'lucide-react';
const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'results', label: 'Results', icon: FileText },
    { id: 'tests', label: 'Tests', icon: ClipboardList },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'payment', label: 'Payment', icon: CreditCard },
];
export function Sidebar({ activeTab, onTabChange, onLogout, teacherName }) {
    return (_jsxs("div", { className: "w-64 bg-slate-900 text-white flex flex-col h-full", children: [_jsx("div", { className: "p-6 border-b border-slate-700", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 bg-white rounded-full flex items-center justify-center", children: _jsx(Monitor, { className: "w-4 h-4 text-slate-900" }) }), _jsxs("div", { children: [_jsx("h1", { className: "font-semibold", children: "EduPortal" }), _jsx("p", { className: "text-sm text-slate-400", children: "Academic Platform" })] })] }) }), _jsx("nav", { className: "flex-1 p-4", children: _jsx("ul", { className: "space-y-2", children: navigation.map((item) => {
                        const Icon = item.icon;
                        return (_jsx("li", { children: _jsxs(Button, { variant: "ghost", className: cn("w-full justify-start gap-3 h-10 text-slate-300 hover:text-white hover:bg-slate-800", activeTab === item.id && "bg-slate-800 text-white"), onClick: () => onTabChange(item.id), children: [_jsx(Icon, { className: "w-4 h-4" }), item.label] }) }, item.id));
                    }) }) }), _jsxs("div", { className: "p-4 border-t border-slate-700", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsx("div", { className: "w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-sm font-semibold", children: teacherName.split(' ').map(n => n[0]).join('').toUpperCase() }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "text-sm font-medium truncate", children: teacherName }), _jsx("p", { className: "text-xs text-slate-400", children: "Teacher" })] })] }), _jsxs(Button, { variant: "ghost", className: "w-full justify-start gap-3 h-10 text-slate-300 hover:text-white hover:bg-slate-800", onClick: onLogout, children: [_jsx(LogOut, { className: "w-4 h-4" }), "Logout"] })] })] }));
}
//# sourceMappingURL=Sidebar.js.map