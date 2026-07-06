import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { DashboardHome } from './components/dashboard/DashboardHome';
import { ResultsManagement } from './components/dashboard/ResultsManagement';
import { CBTManagement } from './components/dashboard/CBTManagement';
import { ResourceManagement } from './components/dashboard/ResourceManagement';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';
export default function App() {
    const [activeTab, setActiveTab] = useState('home');
    // Default authenticated user - no login required
    const user = {
        id: '1',
        name: 'John Adebayo',
        email: 'john.adebayo@school.edu.ng'
    };
    const handleLogout = () => {
        toast.success('Logged out successfully.');
        // In a real app, this would redirect to login
        // For now, just show a toast message
    };
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const renderMainContent = () => {
        switch (activeTab) {
            case 'home':
                return _jsx(DashboardHome, { teacherName: user.name });
            case 'results':
                return _jsx(ResultsManagement, {});
            case 'tests':
                return _jsx(CBTManagement, {});
            case 'resources':
                return _jsx(ResourceManagement, {});
            case 'payment':
                return (_jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: "Payment Management" }), _jsx("p", { className: "text-gray-600 mt-1", children: "Monitor student payments and Remita integration" }), _jsx("div", { className: "mt-8 p-8 text-center border-2 border-dashed border-gray-300 rounded-lg", children: _jsx("p", { className: "text-gray-500", children: "Payment management features coming soon..." }) })] }));
            default:
                return _jsx(DashboardHome, { teacherName: user.name });
        }
    };
    return (_jsxs("div", { className: "h-screen flex bg-gray-50", children: [_jsx(Sidebar, { activeTab: activeTab, onTabChange: handleTabChange, onLogout: handleLogout, teacherName: user.name }), _jsx("div", { className: "flex-1 overflow-auto", children: renderMainContent() }), _jsx(Toaster, { position: "top-right" })] }));
}
//# sourceMappingURL=App.js.map