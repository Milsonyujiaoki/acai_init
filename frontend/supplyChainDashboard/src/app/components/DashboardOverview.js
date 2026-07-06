import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ContextualKPICards } from './ContextualKPICards';
import { WorldVehicleMap } from './WorldVehicleMap';
import { UpcomingBookings } from './UpcomingBookings';
import { RecentTrips } from './RecentTrips';
import { RevenueAnalytics } from './RevenueAnalytics';
export function DashboardOverview() {
    return (_jsxs("div", { className: "p-6 space-y-6 bg-gray-50 min-h-screen", children: [_jsxs("div", { className: "mb-6", children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: "Dashboard Overview" }), _jsx("p", { className: "text-gray-600 mt-1", children: "Monitor your global supply chain operations in real-time" })] }), _jsx(ContextualKPICards, {}), _jsx(WorldVehicleMap, {}), _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-6", children: [_jsx(UpcomingBookings, {}), _jsx(RecentTrips, {})] }), _jsxs("div", { className: "mt-8", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Revenue Analytics" }), _jsx(RevenueAnalytics, {})] })] }));
}
//# sourceMappingURL=DashboardOverview.js.map