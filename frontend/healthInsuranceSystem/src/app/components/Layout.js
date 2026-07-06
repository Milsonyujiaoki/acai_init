import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
export function Layout({ children, currentScreen, onScreenChange }) {
    const navigationItems = [
        { id: 'dashboard', label: 'Claims Dashboard', icon: '📊' },
        { id: 'new-claim', label: 'File New Claim', icon: '📝' },
        { id: 'tracker', label: 'Track Claims', icon: '🔍' },
    ];
    return (_jsxs("div", { className: "min-h-screen bg-slate-50", children: [_jsx("header", { className: "bg-white border-b border-slate-200 px-6 py-4", children: _jsxs("div", { className: "flex items-center justify-between max-w-7xl mx-auto", children: [_jsx("div", { className: "flex items-center space-x-4", children: _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center", children: _jsx("span", { className: "text-white font-semibold", children: "H+" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-xl font-semibold text-slate-900", children: "Health Plus" }), _jsx("p", { className: "text-sm text-slate-600", children: "Claims Management System" })] })] }) }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("span", { className: "text-sm text-slate-600", children: "John Doe" }), _jsx("div", { className: "w-8 h-8 bg-slate-300 rounded-full" })] })] }) }), _jsxs("div", { className: "max-w-7xl mx-auto px-6 py-6", children: [_jsx("nav", { className: "mb-6", children: _jsx("div", { className: "flex space-x-1 bg-white rounded-lg p-1 border border-slate-200", children: navigationItems.map((item) => (_jsxs(Button, { variant: currentScreen === item.id ? "default" : "ghost", onClick: () => onScreenChange(item.id), className: cn("flex items-center space-x-2 px-4 py-2 rounded-md transition-all", currentScreen === item.id
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"), children: [_jsx("span", { children: item.icon }), _jsx("span", { children: item.label })] }, item.id))) }) }), _jsx("main", { children: children })] })] }));
}
//# sourceMappingURL=Layout.js.map