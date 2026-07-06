import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Trash2, Minus, Plus } from "lucide-react";
import { CartItemType } from "./CartPage";
import { ImageWithFallback } from './figma/ImageWithFallback';
export function CartItem({ item, onUpdateQuantity, onRemove }) {
    const handleQuantityChange = (change) => {
        const newQuantity = Math.max(0, item.quantity + change);
        onUpdateQuantity(item.id, newQuantity);
    };
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        if (value >= 0) {
            onUpdateQuantity(item.id, value);
        }
    };
    return (_jsxs("div", { className: "flex gap-4 py-4", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-muted", children: _jsx(ImageWithFallback, { src: item.imageUrl, alt: item.title, className: "w-full h-full object-cover" }) }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex flex-col md:flex-row md:justify-between gap-2", children: [_jsxs("div", { className: "flex-grow", children: [_jsx("h3", { className: "font-medium", children: item.title }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["by ", item.artist] }), _jsxs("div", { className: "flex flex-col sm:flex-row sm:gap-4 text-sm text-muted-foreground mt-1", children: [_jsx("span", { children: item.size }), _jsx("span", { children: item.medium })] })] }), _jsxs("div", { className: "text-right", children: [_jsxs("p", { className: "font-medium", children: ["$", item.price.toFixed(2)] }), item.quantity > 1 && (_jsxs("p", { className: "text-sm text-muted-foreground", children: ["$", (item.price * item.quantity).toFixed(2), " total"] }))] })] }), _jsxs("div", { className: "flex items-center justify-between mt-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => handleQuantityChange(-1), disabled: item.quantity <= 1, className: "h-8 w-8 p-0", children: _jsx(Minus, { className: "h-3 w-3" }) }), _jsx(Input, { type: "number", value: item.quantity, onChange: handleInputChange, className: "w-16 h-8 text-center", min: "0" }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => handleQuantityChange(1), className: "h-8 w-8 p-0", children: _jsx(Plus, { className: "h-3 w-3" }) })] }), _jsxs(Button, { variant: "ghost", size: "sm", onClick: () => onRemove(item.id), className: "text-destructive hover:text-destructive hover:bg-destructive/10 h-8", children: [_jsx(Trash2, { className: "h-4 w-4 mr-1" }), "Remove"] })] })] })] }));
}
//# sourceMappingURL=CartItem.js.map