import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AppSidebar } from "./components/AppSidebar";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardContent } from "./components/DashboardContent";
import { SidebarProvider } from "./components/ui/sidebar";
export default function App() {
    const [isMinimized, setIsMinimized] = useState(false);
    const handleMinimize = () => {
        setIsMinimized(!isMinimized);
    };
    return (_jsx(SidebarProvider, { children: _jsxs("div", { className: "min-h-screen flex w-full", children: [_jsx(AppSidebar, { onMinimize: handleMinimize }), _jsxs("main", { className: "flex-1 flex flex-col", children: [_jsx(DashboardHeader, { onMinimizeUI: handleMinimize }), _jsx(DashboardContent, {})] })] }) }));
}
//# sourceMappingURL=App.js.map