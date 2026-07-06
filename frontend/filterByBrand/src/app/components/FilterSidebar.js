import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FilterState, BrandCount } from '../types/product';
import { priceRanges } from '../data/products';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
export function FilterSidebar({ filters, onFiltersChange, brandCounts, onResetFilters }) {
    const handlePriceRangeChange = (values) => {
        onFiltersChange({
            ...filters,
            priceRange: [values[0], values[1]]
        });
    };
    const handlePredefinedRangeClick = (min, max) => {
        onFiltersChange({
            ...filters,
            priceRange: [min, max]
        });
    };
    const handleBrandToggle = (brand) => {
        const updatedBrands = filters.selectedBrands.includes(brand)
            ? filters.selectedBrands.filter(b => b !== brand)
            : [...filters.selectedBrands, brand];
        onFiltersChange({
            ...filters,
            selectedBrands: updatedBrands
        });
    };
    return (_jsxs("div", { className: "w-80 bg-card border-r p-6 space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h2", { children: "Filters" }), _jsx(Button, { variant: "outline", size: "sm", onClick: onResetFilters, className: "text-sm", children: "Reset Filters" })] }), _jsx(Separator, {}), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { children: "Price Range" }), _jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "px-2", children: _jsx(Slider, { value: filters.priceRange, onValueChange: handlePriceRangeChange, max: 300, min: 0, step: 5, className: "w-full" }) }), _jsxs("div", { className: "flex justify-between text-sm text-muted-foreground", children: [_jsxs("span", { children: ["$", filters.priceRange[0]] }), _jsxs("span", { children: ["$", filters.priceRange[1]] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("p", { className: "text-sm font-medium", children: "Quick Select:" }), _jsx("div", { className: "grid grid-cols-2 gap-2", children: priceRanges.map((range, index) => (_jsx(Button, { variant: "outline", size: "sm", onClick: () => handlePredefinedRangeClick(range.min, range.max), className: "text-xs h-8", children: range.label }, index))) })] })] }), _jsx(Separator, {}), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { children: "Luxury Brands" }), _jsx("div", { className: "space-y-3", children: brandCounts.map((brandCount) => (_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Checkbox, { id: brandCount.brand, checked: filters.selectedBrands.includes(brandCount.brand), onCheckedChange: () => handleBrandToggle(brandCount.brand) }), _jsxs("label", { htmlFor: brandCount.brand, className: "flex-1 text-sm cursor-pointer flex items-center justify-between", children: [_jsx("span", { children: brandCount.brand }), _jsx(Badge, { variant: "secondary", className: "ml-2 text-xs", children: brandCount.count })] })] }, brandCount.brand))) })] })] }));
}
//# sourceMappingURL=FilterSidebar.js.map