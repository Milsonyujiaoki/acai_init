import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Dashboard } from "./Dashboard";
import { Analytics } from "./Analytics";
const Configuration = () => (_jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-3xl mb-4", children: "Configuration" }), _jsx("p", { className: "text-muted-foreground", children: "System configuration and device management coming soon..." })] }));
const Reports = () => (_jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-3xl mb-4", children: "Reports" }), _jsx("p", { className: "text-muted-foreground", children: "Generate and export energy reports coming soon..." })] }));
const Settings = () => (_jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-3xl mb-4", children: "Settings & Profile" }), _jsx("p", { className: "text-muted-foreground", children: "User preferences and profile settings coming soon..." })] }));
export function Layout() {
    const [currentPage, setCurrentPage] = useState("dashboard");
    const renderContent = () => {
        switch (currentPage) {
            case "dashboard":
                return _jsx(Dashboard, {});
            case "analytics":
                return _jsx(Analytics, {});
            case "configuration":
                return _jsx(Configuration, {});
            case "reports":
                return _jsx(Reports, {});
            case "settings":
                return _jsx(Settings, {});
            default:
                return _jsx(Dashboard, {});
        }
    };
    return (_jsxs("div", { className: "flex h-screen bg-background", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(Sidebar, { currentPage: currentPage, onPageChange: setCurrentPage }) }), _jsx("main", { className: "flex-1 overflow-auto", children: renderContent() })] }));
}
//# sourceMappingURL=Layout.js.map