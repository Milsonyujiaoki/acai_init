import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { KPICards } from "./KPICards";
import { IntegrationModules } from "./IntegrationModules";
import { RecentActivity } from "./RecentActivity";
import { SystemStatus } from "./SystemStatus";
export function DashboardContent() {
    return (_jsxs("div", { className: "flex-1 p-6 space-y-6 bg-muted/30", children: [_jsxs("div", { children: [_jsx("h1", { style: { fontFamily: 'Satoshi' }, children: "Dashboard Overview" }), _jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Monitor all of your business operations and integrations from here." })] }), _jsx(KPICards, {}), _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-4 gap-6", children: [_jsx("div", { className: "xl:col-span-3", children: _jsx(IntegrationModules, {}) }), _jsx("div", { className: "space-y-6", children: _jsx(SystemStatus, {}) })] }), _jsx(RecentActivity, {})] }));
}
//# sourceMappingURL=DashboardContent.js.map