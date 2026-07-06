import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "./ui/table";
import { ExternalLink, Eye } from "lucide-react";
const recentTransactions = [
    {
        id: "TXN-001",
        type: "Sale",
        customer: "Acme Corp",
        amount: "RM12,340",
        status: "Completed",
        channel: "Website",
        date: "2025-01-15",
        time: "14:32"
    },
    {
        id: "TXN-002",
        type: "Purchase",
        customer: "Tech Solutions",
        amount: "RM8,560",
        status: "Processing",
        channel: "Store",
        date: "2025-01-15",
        time: "13:45"
    },
    {
        id: "TXN-003",
        type: "Sale",
        customer: "Global Industries",
        amount: "RM21,500",
        status: "Shipped",
        channel: "Marketplace",
        date: "2025-01-14",
        time: "16:20"
    },
    {
        id: "TXN-004",
        type: "Return",
        customer: "Local Business",
        amount: "-RM6,950",
        status: "Pending",
        channel: "Store",
        date: "2025-01-14",
        time: "11:15"
    },
    {
        id: "TXN-005",
        type: "Sale",
        customer: "Startup Inc",
        amount: "RM15,800",
        status: "Completed",
        channel: "Website",
        date: "2025-01-13",
        time: "09:30"
    }
];
const integrationActivity = [
    {
        integration: "EasyParcel API",
        action: "Shipment created",
        details: "Order #ORD-1234 shipped",
        status: "success",
        time: "5 min ago"
    },
    {
        integration: "Marketplace Sync",
        action: "Inventory updated",
        details: "245 products synchronized",
        status: "success",
        time: "12 min ago"
    },
    {
        integration: "Payment Gateway",
        action: "Payment failed",
        details: "Transaction #TXN-5678",
        status: "error",
        time: "23 min ago"
    },
    {
        integration: "WMS System",
        action: "Stock adjustment",
        details: "Low stock alerts sent",
        status: "warning",
        time: "1 hour ago"
    }
];
function getStatusBadge(status) {
    const statusColors = {
        Completed: "bg-green-50 text-green-700 border-green-200",
        Processing: "bg-blue-50 text-blue-700 border-blue-200",
        Shipped: "bg-purple-50 text-purple-700 border-purple-200",
        Pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
        success: "bg-green-50 text-green-700 border-green-200",
        error: "bg-red-50 text-red-700 border-red-200",
        warning: "bg-yellow-50 text-yellow-700 border-yellow-200"
    };
    return (_jsx(Badge, { className: `${statusColors[status]} border text-xs font-normal`, children: status.charAt(0).toUpperCase() + status.slice(1) }));
}
function getChannelBadge(channel) {
    return (_jsx(Badge, { variant: "outline", className: "text-xs font-normal", children: channel }));
}
export function RecentActivity() {
    return (_jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [_jsx(CardTitle, { style: { fontFamily: 'Satoshi' }, children: "Recent Transactions" }), _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(ExternalLink, { className: "w-4 h-4 mr-2" }), "View All"] })] }), _jsx(CardContent, { children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { className: "text-xs", children: "Transaction" }), _jsx(TableHead, { className: "text-xs", children: "Customer" }), _jsx(TableHead, { className: "text-xs", children: "Amount" }), _jsx(TableHead, { className: "text-xs", children: "Status" }), _jsx(TableHead, { className: "text-xs", children: "Channel" }), _jsx(TableHead, { className: "text-xs", children: "Date" })] }) }), _jsx(TableBody, { children: recentTransactions.map((transaction) => (_jsxs(TableRow, { className: "hover:bg-muted/50", children: [_jsx(TableCell, { className: "font-medium text-sm", children: transaction.id }), _jsx(TableCell, { className: "text-sm", children: transaction.customer }), _jsx(TableCell, { className: `text-sm font-medium ${transaction.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'}`, children: transaction.amount }), _jsx(TableCell, { children: getStatusBadge(transaction.status) }), _jsx(TableCell, { children: getChannelBadge(transaction.channel) }), _jsxs(TableCell, { className: "text-sm text-muted-foreground", children: [transaction.date, _jsx("br", {}), _jsx("span", { className: "text-xs", children: transaction.time })] })] }, transaction.id))) })] }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [_jsx(CardTitle, { style: { fontFamily: 'Satoshi' }, children: "Integration Activity" }), _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Eye, { className: "w-4 h-4 mr-2" }), "Monitor"] })] }), _jsx(CardContent, { className: "space-y-4", children: integrationActivity.map((activity, index) => (_jsxs("div", { className: "flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors", children: [_jsx("div", { className: `w-2 h-2 rounded-full mt-2 ${activity.status === 'success' ? 'bg-green-500' :
                                        activity.status === 'error' ? 'bg-red-500' : 'bg-yellow-500'}` }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("p", { className: "text-sm font-medium", children: activity.integration }), getStatusBadge(activity.status)] }), _jsx("p", { className: "text-sm text-muted-foreground mt-1", children: activity.action }), _jsx("p", { className: "text-xs text-muted-foreground", children: activity.details }), _jsx("p", { className: "text-xs text-muted-foreground mt-1", children: activity.time })] })] }, index))) })] })] }));
}
//# sourceMappingURL=RecentActivity.js.map