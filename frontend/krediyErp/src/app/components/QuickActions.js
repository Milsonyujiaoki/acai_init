import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Plus, FileText, Users, Package, ShoppingCart, Calculator } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
const quickActions = [
    { icon: Plus, label: "New Order", color: "bg-blue-500" },
    { icon: FileText, label: "Create Invoice", color: "bg-green-500" },
    { icon: Users, label: "Add Customer", color: "bg-purple-500" },
    { icon: Package, label: "Add Product", color: "bg-orange-500" },
    { icon: ShoppingCart, label: "Process Return", color: "bg-red-500" },
    { icon: Calculator, label: "Generate Report", color: "bg-indigo-500" },
];
export function QuickActions() {
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Quick Actions" }) }), _jsx(CardContent, { className: "space-y-3", children: quickActions.map((action, index) => (_jsxs(Button, { variant: "outline", className: "w-full justify-start gap-3 h-auto py-3", children: [_jsx("div", { className: `p-2 rounded-md ${action.color} text-white`, children: _jsx(action.icon, { className: "w-4 h-4" }) }), action.label] }, index))) })] }));
}
//# sourceMappingURL=QuickActions.js.map