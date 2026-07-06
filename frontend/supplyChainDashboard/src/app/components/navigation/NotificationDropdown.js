import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Bell } from 'lucide-react';
import { notifications } from '../data/navigationData';
import { getNotificationIcon } from '../utils/navigationUtils';
export function NotificationDropdown({ onNotificationClick }) {
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [unreadCount, setUnreadCount] = useState(notifications.filter(n => n.unread).length);
    const handleNotificationClick = (notificationId) => {
        const notification = notifications.find(n => n.id === notificationId);
        if (notification && notification.unread) {
            notification.unread = false;
            setUnreadCount(prev => Math.max(0, prev - 1));
        }
        onNotificationClick?.(notificationId);
    };
    const markAllAsRead = () => {
        notifications.forEach(n => n.unread = false);
        setUnreadCount(0);
    };
    return (_jsxs(Popover, { open: notificationsOpen, onOpenChange: setNotificationsOpen, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "ghost", size: "sm", className: "relative hover:bg-accent hover:text-accent-foreground transition-colors", children: [_jsx(Bell, { className: "h-5 w-5" }), unreadCount > 0 && (_jsx(Badge, { className: "absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-destructive text-destructive-foreground text-xs animate-pulse", children: unreadCount }))] }) }), _jsxs(PopoverContent, { className: "w-96 p-0 bg-popover border-border", align: "end", children: [_jsx("div", { className: "p-4 border-b border-border", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "font-semibold text-foreground", children: "Notifications" }), _jsx(Button, { variant: "ghost", size: "sm", onClick: markAllAsRead, className: "text-xs hover:bg-accent hover:text-accent-foreground", children: "Mark all read" })] }) }), _jsx("div", { className: "max-h-96 overflow-y-auto", children: notifications.map((notification) => (_jsx("div", { className: `p-4 border-b border-border/50 hover:bg-accent/50 cursor-pointer transition-colors ${notification.unread ? 'bg-accent/20' : ''}`, onClick: () => handleNotificationClick(notification.id), children: _jsxs("div", { className: "flex items-start gap-3", children: [getNotificationIcon(notification.type), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-center justify-between mb-1", children: [_jsx("h4", { className: "font-medium text-foreground text-sm", children: notification.title }), notification.unread && (_jsx("div", { className: "h-2 w-2 bg-blue-500 rounded-full flex-shrink-0" }))] }), _jsx("p", { className: "text-xs text-muted-foreground mb-2", children: notification.description }), _jsx("p", { className: "text-xs text-muted-foreground", children: notification.time })] })] }) }, notification.id))) }), _jsx("div", { className: "p-3 border-t border-border", children: _jsx(Button, { variant: "ghost", size: "sm", className: "w-full text-xs", children: "View all notifications" }) })] })] }));
}
//# sourceMappingURL=NotificationDropdown.js.map