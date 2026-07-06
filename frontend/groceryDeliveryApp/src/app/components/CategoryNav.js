import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from './ui/button';
export function CategoryNav({ categories, activeCategory, onCategoryChange }) {
    return (_jsx("nav", { className: "bg-white border-b border-gray-200 py-4", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex space-x-2 overflow-x-auto pb-2", children: [_jsx(Button, { variant: activeCategory === 'all' ? 'default' : 'outline', size: "sm", onClick: () => onCategoryChange('all'), className: "whitespace-nowrap", children: "All Products" }), categories.map((category) => (_jsxs(Button, { variant: activeCategory === category.id ? 'default' : 'outline', size: "sm", onClick: () => onCategoryChange(category.id), className: "whitespace-nowrap", children: [_jsx("span", { className: "mr-2", children: category.icon }), category.name] }, category.id)))] }) }) }));
}
//# sourceMappingURL=CategoryNav.js.map