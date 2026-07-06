import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { EnhancedTopNavigation } from './components/EnhancedTopNavigation';
import { EnhancedSidebar } from './components/EnhancedSidebar';
import { EnhancedDashboard } from './components/EnhancedDashboard';
import { DriversModule } from './components/DriversModule';
import { VehiclesModule } from './components/VehiclesModule';
import { TransportsModule } from './components/TransportsModule';
import { RoutesModule } from './components/RoutesModule';
import { RevenueModule } from './components/RevenueModule';
import { SettingsModule } from './components/SettingsModule';
import { LogsModule } from './components/LogsModule';
// Modal Components
import { UserProfileModal } from './components/UserProfileModal';
import { CreateTripModal } from './components/CreateTripModal';
import { RouteOptimizationModal, AnalyticsModal, AlertsModal, GenerateReportModal } from './components/QuickActionModals';
export default function App() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeModule, setActiveModule] = useState('dashboard');
    // Modal States
    const [userProfileOpen, setUserProfileOpen] = useState(false);
    const [createTripOpen, setCreateTripOpen] = useState(false);
    const [routeOptimizationOpen, setRouteOptimizationOpen] = useState(false);
    const [analyticsOpen, setAnalyticsOpen] = useState(false);
    const [alertsOpen, setAlertsOpen] = useState(false);
    const [generateReportOpen, setGenerateReportOpen] = useState(false);
    // Global action handlers that can be called from any component
    const globalActions = {
        openUserProfile: () => setUserProfileOpen(true),
        openCreateTrip: () => setCreateTripOpen(true),
        openRouteOptimization: () => setRouteOptimizationOpen(true),
        openAnalytics: () => setAnalyticsOpen(true),
        openAlerts: () => setAlertsOpen(true),
        openGenerateReport: () => setGenerateReportOpen(true),
        navigateToModule: (module) => setActiveModule(module)
    };
    const renderContent = () => {
        const commonProps = {
            onOpenCreateTrip: globalActions.openCreateTrip,
            onOpenRouteOptimization: globalActions.openRouteOptimization,
            onOpenAnalytics: globalActions.openAnalytics,
            onOpenAlerts: globalActions.openAlerts,
            onOpenGenerateReport: globalActions.openGenerateReport,
            onNavigateToModule: globalActions.navigateToModule
        };
        switch (activeModule) {
            case 'dashboard':
                return _jsx(EnhancedDashboard, { ...commonProps });
            case 'transports':
                return _jsx(TransportsModule, { ...commonProps });
            case 'vehicles':
                return _jsx(VehiclesModule, { ...commonProps });
            case 'drivers':
                return _jsx(DriversModule, { ...commonProps });
            case 'routes':
                return _jsx(RoutesModule, { ...commonProps });
            case 'revenue':
                return _jsx(RevenueModule, { ...commonProps });
            case 'logs':
                return _jsx(LogsModule, { ...commonProps });
            case 'settings':
                return _jsx(SettingsModule, { ...commonProps });
            default:
                return _jsx(EnhancedDashboard, { ...commonProps });
        }
    };
    return (_jsx(ThemeProvider, { children: _jsxs("div", { className: "h-screen flex flex-col bg-background transition-colors", children: [_jsx(EnhancedTopNavigation, { onMenuClick: () => setSidebarCollapsed(!sidebarCollapsed), onOpenUserProfile: globalActions.openUserProfile }), _jsxs("div", { className: "flex flex-1 overflow-hidden", children: [_jsx(EnhancedSidebar, { collapsed: sidebarCollapsed, onCollapse: () => setSidebarCollapsed(!sidebarCollapsed), activeModule: activeModule, onModuleChange: setActiveModule, onOpenRouteOptimization: globalActions.openRouteOptimization, onOpenAnalytics: globalActions.openAnalytics, onOpenAlerts: globalActions.openAlerts, onOpenGenerateReport: globalActions.openGenerateReport }), _jsx("main", { className: "flex-1 overflow-auto bg-background", children: _jsx("div", { className: "min-h-full", children: renderContent() }) })] }), _jsx(UserProfileModal, { isOpen: userProfileOpen, onClose: () => setUserProfileOpen(false) }), _jsx(CreateTripModal, { isOpen: createTripOpen, onClose: () => setCreateTripOpen(false) }), _jsx(RouteOptimizationModal, { isOpen: routeOptimizationOpen, onClose: () => setRouteOptimizationOpen(false) }), _jsx(AnalyticsModal, { isOpen: analyticsOpen, onClose: () => setAnalyticsOpen(false) }), _jsx(AlertsModal, { isOpen: alertsOpen, onClose: () => setAlertsOpen(false) }), _jsx(GenerateReportModal, { isOpen: generateReportOpen, onClose: () => setGenerateReportOpen(false) })] }) }));
}
//# sourceMappingURL=App.js.map