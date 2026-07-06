import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';
import { Filter, RotateCcw, Search } from 'lucide-react';
export function FiltersModal({ isOpen, onClose, onApply }) {
    const [filters, setFilters] = useState({
        search: '',
        status: 'all',
        vehicleType: 'all',
        priority: 'all',
        revenue: { min: '', max: '' },
        distance: { min: '', max: '' },
        drivers: [],
        customers: [],
        includeCompleted: true,
        includeScheduled: true,
        includeInTransit: true
    });
    const handleApply = () => {
        onApply(filters);
        onClose();
    };
    const handleReset = () => {
        setFilters({
            search: '',
            status: 'all',
            vehicleType: 'all',
            priority: 'all',
            revenue: { min: '', max: '' },
            distance: { min: '', max: '' },
            drivers: [],
            customers: [],
            includeCompleted: true,
            includeScheduled: true,
            includeInTransit: true
        });
    };
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "sm:max-w-2xl max-h-[90vh] overflow-y-auto", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { className: "flex items-center gap-2", children: [_jsx(Filter, { className: "h-5 w-5 text-blue-600" }), "Advanced Filters"] }) }), _jsxs("div", { className: "space-y-6 py-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Search" }), _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }), _jsx(Input, { placeholder: "Search by trip ID, customer, route...", value: filters.search, onChange: (e) => setFilters({ ...filters, search: e.target.value }), className: "pl-10" })] })] }), _jsx(Separator, {}), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Trip Status" }), _jsxs(Select, { value: filters.status, onValueChange: (value) => setFilters({ ...filters, status: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select status" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Statuses" }), _jsx(SelectItem, { value: "completed", children: "Completed" }), _jsx(SelectItem, { value: "in-transit", children: "In Transit" }), _jsx(SelectItem, { value: "scheduled", children: "Scheduled" }), _jsx(SelectItem, { value: "loading", children: "Loading" }), _jsx(SelectItem, { value: "cancelled", children: "Cancelled" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Vehicle Type" }), _jsxs(Select, { value: filters.vehicleType, onValueChange: (value) => setFilters({ ...filters, vehicleType: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select vehicle type" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Types" }), _jsx(SelectItem, { value: "road", children: "Road Transport" }), _jsx(SelectItem, { value: "air", children: "Air Transport" }), _jsx(SelectItem, { value: "sea", children: "Sea Transport" }), _jsx(SelectItem, { value: "rail", children: "Rail Transport" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Priority" }), _jsxs(Select, { value: filters.priority, onValueChange: (value) => setFilters({ ...filters, priority: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select priority" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Priorities" }), _jsx(SelectItem, { value: "urgent", children: "Urgent" }), _jsx(SelectItem, { value: "high", children: "High" }), _jsx(SelectItem, { value: "medium", children: "Medium" }), _jsx(SelectItem, { value: "low", children: "Low" })] })] })] })] }), _jsx(Separator, {}), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Revenue Range ($)" }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { placeholder: "Min", value: filters.revenue.min, onChange: (e) => setFilters({
                                                        ...filters,
                                                        revenue: { ...filters.revenue, min: e.target.value }
                                                    }) }), _jsx(Input, { placeholder: "Max", value: filters.revenue.max, onChange: (e) => setFilters({
                                                        ...filters,
                                                        revenue: { ...filters.revenue, max: e.target.value }
                                                    }) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Distance Range (miles)" }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { placeholder: "Min", value: filters.distance.min, onChange: (e) => setFilters({
                                                        ...filters,
                                                        distance: { ...filters.distance, min: e.target.value }
                                                    }) }), _jsx(Input, { placeholder: "Max", value: filters.distance.max, onChange: (e) => setFilters({
                                                        ...filters,
                                                        distance: { ...filters.distance, max: e.target.value }
                                                    }) })] })] })] }), _jsx(Separator, {}), _jsxs("div", { className: "space-y-3", children: [_jsx(Label, { children: "Include Trip Types" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "completed", checked: filters.includeCompleted, onCheckedChange: (checked) => setFilters({ ...filters, includeCompleted: checked }) }), _jsx(Label, { htmlFor: "completed", children: "Completed Trips" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "scheduled", checked: filters.includeScheduled, onCheckedChange: (checked) => setFilters({ ...filters, includeScheduled: checked }) }), _jsx(Label, { htmlFor: "scheduled", children: "Scheduled Trips" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "in-transit", checked: filters.includeInTransit, onCheckedChange: (checked) => setFilters({ ...filters, includeInTransit: checked }) }), _jsx(Label, { htmlFor: "in-transit", children: "In Transit" })] })] })] })] }), _jsxs("div", { className: "flex gap-2 pt-4", children: [_jsxs(Button, { variant: "outline", onClick: handleReset, className: "flex items-center gap-2", children: [_jsx(RotateCcw, { className: "h-4 w-4" }), "Reset"] }), _jsx(Button, { variant: "outline", onClick: onClose, className: "flex-1", children: "Cancel" }), _jsx(Button, { onClick: handleApply, className: "flex-1", children: "Apply Filters" })] })] }) }));
}
//# sourceMappingURL=FiltersModal.js.map