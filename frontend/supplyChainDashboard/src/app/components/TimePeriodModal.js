import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
const timePeriods = [
    { value: '7d', label: 'Last 7 days', description: 'Past week data' },
    { value: '30d', label: 'Last 1 month', description: 'Past 30 days data' },
    { value: '3m', label: 'Last 3 months', description: 'Quarterly data' },
    { value: '6m', label: 'Last 6 months', description: 'Semi-annual data' },
    { value: '1y', label: 'Last 1 year', description: 'Annual data' },
    { value: 'ytd', label: 'Year to date', description: 'From Jan 1 to now' },
    { value: 'custom', label: 'Custom range', description: 'Select specific dates' }
];
export function TimePeriodModal({ isOpen, onClose, onSelect, currentPeriod = '7d' }) {
    const [selectedPeriod, setSelectedPeriod] = useState(currentPeriod);
    const handleSelect = () => {
        onSelect(selectedPeriod);
        onClose();
    };
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "sm:max-w-md", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "h-5 w-5 text-blue-600" }), "Select Time Period"] }) }), _jsx("div", { className: "space-y-3 py-4", children: timePeriods.map((period) => (_jsx("div", { className: `p-3 rounded-lg border cursor-pointer transition-all hover:bg-accent/50 ${selectedPeriod === period.value
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                            : 'border-border'}`, onClick: () => setSelectedPeriod(period.value), children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-medium", children: period.label }), selectedPeriod === period.value && (_jsx(Badge, { variant: "default", className: "text-xs", children: "Selected" }))] }), _jsx("p", { className: "text-sm text-muted-foreground mt-1", children: period.description })] }), _jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground" })] }) }, period.value))) }), _jsxs("div", { className: "flex gap-2 pt-4", children: [_jsx(Button, { variant: "outline", onClick: onClose, className: "flex-1", children: "Cancel" }), _jsx(Button, { onClick: handleSelect, className: "flex-1", children: "Apply Period" })] })] }) }));
}
//# sourceMappingURL=TimePeriodModal.js.map