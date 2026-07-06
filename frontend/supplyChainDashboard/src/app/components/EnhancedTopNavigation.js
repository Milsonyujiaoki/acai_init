import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { useTheme } from './ThemeProvider';
import { SearchCommand } from './navigation/SearchCommand';
import { NotificationDropdown } from './navigation/NotificationDropdown';
import { UserProfileDropdown } from './navigation/UserProfileDropdown';
import { Menu, Sun, Moon, Truck } from 'lucide-react';
export function EnhancedTopNavigation({ onMenuClick, onOpenUserProfile }) {
    const { theme, toggleTheme } = useTheme();
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);
    const handleSearchItemSelect = (item) => {
        // Handle navigation to the selected item
        console.log('Navigate to:', item);
    };
    const handleNotificationClick = (notificationId) => {
        // Handle notification click
        console.log('Notification clicked:', notificationId);
    };
    return (_jsxs("header", { className: "h-16 bg-card border-b border-border flex items-center justify-between px-6 shadow-sm", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: onMenuClick, className: "hover:bg-accent hover:text-accent-foreground transition-colors", children: _jsx(Menu, { className: "h-5 w-5" }) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm", children: _jsx(Truck, { className: "h-5 w-5 text-white" }) }), _jsxs("div", { children: [_jsx("h1", { className: "font-semibold text-foreground", children: "TranSphere" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Supply Chain Platform" })] })] })] }), _jsx(SearchCommand, { onItemSelect: handleSearchItemSelect }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "hidden md:block text-sm text-muted-foreground", children: currentTime.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true
                        }) }), _jsxs("div", { className: "flex items-center gap-2 bg-muted/50 rounded-lg p-1", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: toggleTheme, className: `h-8 w-8 p-0 transition-all ${theme === 'light' ? 'bg-background shadow-sm' : ''}`, children: _jsx(Sun, { className: "h-4 w-4" }) }), _jsx(Button, { variant: "ghost", size: "sm", onClick: toggleTheme, className: `h-8 w-8 p-0 transition-all ${theme === 'dark' ? 'bg-background shadow-sm' : ''}`, children: _jsx(Moon, { className: "h-4 w-4" }) })] }), _jsx(NotificationDropdown, { onNotificationClick: handleNotificationClick }), _jsx(UserProfileDropdown, { onOpenProfile: onOpenUserProfile })] })] }));
}
//# sourceMappingURL=EnhancedTopNavigation.js.map