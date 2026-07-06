import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { Card } from './ui/card';
const COLORS = [
    '#3b82f6', // blue
    '#8b5cf6', // violet
    '#ec4899', // pink
    '#f59e0b', // amber
    '#10b981', // emerald
    '#6366f1', // indigo
    '#f97316', // orange
    '#06b6d4', // cyan
];
const MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
const getInitialFeatures = () => [
    {
        id: '1',
        name: 'User Authentication & Onboarding',
        startDate: new Date(2025, 0, 1),
        endDate: new Date(2025, 2, 1),
        color: COLORS[0],
    },
    {
        id: '2',
        name: 'Core Platform Infrastructure',
        startDate: new Date(2025, 1, 1),
        endDate: new Date(2025, 4, 15),
        color: COLORS[1],
    },
    {
        id: '3',
        name: 'Mobile App Development',
        startDate: new Date(2025, 3, 1),
        endDate: new Date(2025, 7, 1),
        color: COLORS[2],
    },
    {
        id: '4',
        name: 'AI Integration & Analytics',
        startDate: new Date(2025, 5, 1),
        endDate: new Date(2025, 9, 15),
        color: COLORS[3],
    },
    {
        id: '5',
        name: 'Enterprise Features',
        startDate: new Date(2025, 8, 1),
        endDate: new Date(2025, 11, 31),
        color: COLORS[4],
    },
];
export function GanttChart() {
    const [features, setFeatures] = useState(getInitialFeatures());
    const [draggedFeature, setDraggedFeature] = useState(null);
    const [dragMode, setDragMode] = useState(null);
    const [dragStartX, setDragStartX] = useState(0);
    const [originalDates, setOriginalDates] = useState(null);
    const timelineRef = useRef(null);
    const yearStart = new Date(2025, 0, 1);
    const yearEnd = new Date(2025, 11, 31);
    const totalDays = 365; // 2025 is not a leap year
    const getPositionFromDate = (date) => {
        const dayOfYear = Math.floor((date.getTime() - yearStart.getTime()) / (1000 * 60 * 60 * 24));
        return (dayOfYear / totalDays) * 100;
    };
    const getDateFromPosition = (percentage) => {
        const days = Math.floor((percentage / 100) * totalDays);
        const date = new Date(yearStart);
        date.setDate(date.getDate() + days);
        return date;
    };
    const handleMouseDown = (e, featureId, mode) => {
        e.preventDefault();
        const feature = features.find(f => f.id === featureId);
        if (!feature)
            return;
        setDraggedFeature(featureId);
        setDragMode(mode);
        setDragStartX(e.clientX);
        setOriginalDates({ start: feature.startDate, end: feature.endDate });
    };
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!draggedFeature || !dragMode || !timelineRef.current || !originalDates)
                return;
            const rect = timelineRef.current.getBoundingClientRect();
            const deltaX = e.clientX - dragStartX;
            const deltaPercentage = (deltaX / rect.width) * 100;
            const deltaDays = Math.round((deltaPercentage / 100) * totalDays);
            setFeatures(prev => prev.map(feature => {
                if (feature.id !== draggedFeature)
                    return feature;
                if (dragMode === 'move') {
                    const newStart = new Date(originalDates.start);
                    newStart.setDate(newStart.getDate() + deltaDays);
                    const newEnd = new Date(originalDates.end);
                    newEnd.setDate(newEnd.getDate() + deltaDays);
                    // Constrain to year bounds
                    if (newStart < yearStart || newEnd > yearEnd)
                        return feature;
                    return { ...feature, startDate: newStart, endDate: newEnd };
                }
                else if (dragMode === 'resize-start') {
                    const newStart = new Date(originalDates.start);
                    newStart.setDate(newStart.getDate() + deltaDays);
                    // Ensure start is before end and within bounds
                    if (newStart >= feature.endDate || newStart < yearStart)
                        return feature;
                    return { ...feature, startDate: newStart };
                }
                else if (dragMode === 'resize-end') {
                    const newEnd = new Date(originalDates.end);
                    newEnd.setDate(newEnd.getDate() + deltaDays);
                    // Ensure end is after start and within bounds
                    if (newEnd <= feature.startDate || newEnd > yearEnd)
                        return feature;
                    return { ...feature, endDate: newEnd };
                }
                return feature;
            }));
        };
        const handleMouseUp = () => {
            setDraggedFeature(null);
            setDragMode(null);
            setOriginalDates(null);
        };
        if (draggedFeature) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [draggedFeature, dragMode, dragStartX, originalDates, totalDays, yearStart, yearEnd]);
    const addFeature = () => {
        const newFeature = {
            id: Date.now().toString(),
            name: 'New Feature',
            startDate: new Date(2025, 0, 1),
            endDate: new Date(2025, 2, 1),
            color: COLORS[features.length % COLORS.length],
        };
        setFeatures([...features, newFeature]);
    };
    const removeFeature = (id) => {
        setFeatures(features.filter(f => f.id !== id));
    };
    const updateFeatureName = (id, name) => {
        setFeatures(prev => prev.map(f => f.id === id ? { ...f, name } : f));
    };
    const formatDate = (date) => {
        return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
    };
    const getMonthPositions = () => {
        return MONTHS.map((month, index) => {
            const monthStart = new Date(2025, index, 1);
            const position = getPositionFromDate(monthStart);
            return { month, position };
        });
    };
    return (_jsx(Card, { className: "p-6", children: _jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "relative h-12 border-b border-slate-200", children: _jsx("div", { className: "relative h-full", ref: timelineRef, children: getMonthPositions().map(({ month, position }) => (_jsx("div", { className: "absolute top-0 h-full border-l border-slate-200", style: { left: `${position}%` }, children: _jsx("span", { className: "text-slate-600 ml-2", children: month }) }, month))) }) }), _jsx("div", { className: "space-y-3", children: features.map((feature) => {
                        const startPos = getPositionFromDate(feature.startDate);
                        const endPos = getPositionFromDate(feature.endDate);
                        const width = endPos - startPos;
                        return (_jsxs("div", { className: "relative h-10", children: [_jsx("div", { className: "absolute inset-0", children: getMonthPositions().map(({ position }, idx) => (_jsx("div", { className: "absolute top-0 bottom-0 border-l border-slate-100", style: { left: `${position}%` } }, idx))) }), _jsxs("div", { className: "absolute top-1 bottom-1 rounded cursor-move hover:opacity-90 transition-opacity group", style: {
                                        left: `${startPos}%`,
                                        width: `${width}%`,
                                        backgroundColor: feature.color,
                                    }, onMouseDown: (e) => handleMouseDown(e, feature.id, 'move'), children: [_jsx("div", { className: "absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize hover:bg-black/20", onMouseDown: (e) => {
                                                e.stopPropagation();
                                                handleMouseDown(e, feature.id, 'resize-start');
                                            } }), _jsx("div", { className: "absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize hover:bg-black/20", onMouseDown: (e) => {
                                                e.stopPropagation();
                                                handleMouseDown(e, feature.id, 'resize-end');
                                            } }), _jsxs("div", { className: "px-2 py-1 text-white text-sm truncate flex items-center gap-1 h-full", children: [_jsx(GripVertical, { className: "size-3 opacity-0 group-hover:opacity-100 flex-shrink-0" }), _jsx("span", { className: "truncate", children: feature.name })] })] })] }, feature.id));
                    }) }), _jsxs("div", { className: "border-t border-slate-200 pt-6 mt-8", children: [_jsx("h3", { className: "text-slate-700 mb-4", children: "Features" }), _jsx("div", { className: "space-y-3", children: features.map((feature) => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-4 h-4 rounded flex-shrink-0", style: { backgroundColor: feature.color } }), _jsx(Input, { value: feature.name, onChange: (e) => updateFeatureName(feature.id, e.target.value), className: "flex-1" }), _jsxs("div", { className: "w-48 flex-shrink-0 text-sm text-slate-600", children: [formatDate(feature.startDate), " - ", formatDate(feature.endDate)] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => removeFeature(feature.id), className: "flex-shrink-0", children: _jsx(Trash2, { className: "size-4 text-slate-400 hover:text-red-500" }) })] }, feature.id))) })] }), features.length < 8 && (_jsxs(Button, { variant: "outline", onClick: addFeature, className: "w-full", children: [_jsx(Plus, { className: "size-4 mr-2" }), "Add Feature"] }))] }) }));
}
//# sourceMappingURL=GanttChart.js.map