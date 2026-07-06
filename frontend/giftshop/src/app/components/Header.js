import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search, ShoppingCart, Gift, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
const categories = [
    { id: 'all', name: 'All Gifts' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'anniversary', name: 'Anniversary' },
    { id: 'holiday', name: 'Holiday' },
    { id: 'personalized', name: 'Personalized' },
    { id: 'jewelry', name: 'Jewelry' },
    { id: 'home', name: 'Home & Decor' },
];
export function Header({ cartItemCount, onCartClick, searchQuery, onSearchChange, selectedCategory, onCategoryChange }) {
    return (_jsx("header", { className: "border-b bg-white sticky top-0 z-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "flex items-center justify-between py-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Gift, { className: "h-8 w-8 text-primary" }), _jsx("h1", { className: "text-xl font-medium", children: "GiftHub" })] }), _jsxs("div", { className: "hidden md:flex items-center relative flex-1 max-w-md mx-8", children: [_jsx(Search, { className: "absolute left-3 h-4 w-4 text-muted-foreground" }), _jsx(Input, { placeholder: "Search for gifts...", value: searchQuery, onChange: (e) => onSearchChange(e.target.value), className: "pl-10" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs(Button, { variant: "outline", size: "sm", onClick: onCartClick, className: "relative", children: [_jsx(ShoppingCart, { className: "h-4 w-4" }), cartItemCount > 0 && (_jsx(Badge, { variant: "destructive", className: "absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs", children: cartItemCount }))] }), _jsxs(Sheet, { children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", size: "sm", className: "md:hidden", children: _jsx(Menu, { className: "h-4 w-4" }) }) }), _jsx(SheetContent, { children: _jsxs("div", { className: "flex flex-col gap-4 mt-8", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" }), _jsx(Input, { placeholder: "Search for gifts...", value: searchQuery, onChange: (e) => onSearchChange(e.target.value), className: "pl-10" })] }), _jsx("div", { className: "flex flex-col gap-2", children: categories.map((category) => (_jsx(Button, { variant: selectedCategory === category.id ? "default" : "ghost", onClick: () => onCategoryChange(category.id), className: "justify-start", children: category.name }, category.id))) })] }) })] })] })] }), _jsx("nav", { className: "hidden md:block border-t py-3", children: _jsx("div", { className: "flex gap-6", children: categories.map((category) => (_jsx(Button, { variant: selectedCategory === category.id ? "default" : "ghost", size: "sm", onClick: () => onCategoryChange(category.id), children: category.name }, category.id))) }) }), _jsx("div", { className: "md:hidden pb-4", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" }), _jsx(Input, { placeholder: "Search for gifts...", value: searchQuery, onChange: (e) => onSearchChange(e.target.value), className: "pl-10" })] }) })] }) }));
}
//# sourceMappingURL=Header.js.map