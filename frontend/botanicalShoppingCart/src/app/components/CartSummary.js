import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Truck, Shield, CreditCard, Tag, X, Check } from "lucide-react";
export function CartSummary({ subtotal, promoDiscount, appliedPromo, tax, shipping, total, itemCount, promoCode, onPromoCodeChange, onApplyPromoCode, onRemovePromoCode }) {
    const [promoError, setPromoError] = useState('');
    const [promoSuccess, setPromoSuccess] = useState(false);
    const freeShippingThreshold = 200;
    const remainingForFreeShipping = freeShippingThreshold - (subtotal - promoDiscount);
    const handleApplyPromo = () => {
        if (!promoCode.trim()) {
            setPromoError('Please enter a promo code');
            return;
        }
        const success = onApplyPromoCode(promoCode);
        if (success) {
            setPromoError('');
            setPromoSuccess(true);
            setTimeout(() => setPromoSuccess(false), 3000);
        }
        else {
            setPromoError('Invalid promo code');
            setPromoSuccess(false);
        }
    };
    const handleRemovePromo = () => {
        onRemovePromoCode();
        setPromoError('');
        setPromoSuccess(false);
    };
    const handlePromoCodeChange = (value) => {
        onPromoCodeChange(value);
        setPromoError('');
        setPromoSuccess(false);
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Tag, { className: "h-5 w-5" }), "Promo Code"] }) }), _jsx(CardContent, { children: appliedPromo ? (_jsx("div", { className: "space-y-3", children: _jsxs("div", { className: "flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Check, { className: "h-4 w-4 text-green-600" }), _jsx("span", { className: "font-medium text-green-700 dark:text-green-400", children: appliedPromo.code }), _jsxs("span", { className: "text-sm text-green-600 dark:text-green-500", children: ["(", (appliedPromo.discount * 100).toFixed(0), "% off)"] })] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: handleRemovePromo, className: "h-6 w-6 p-0 text-green-600 hover:text-green-700 hover:bg-green-100 dark:hover:bg-green-900/20", children: _jsx(X, { className: "h-3 w-3" }) })] }) })) : (_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx("div", { className: "flex-grow", children: _jsx(Input, { placeholder: "Enter promo code", value: promoCode, onChange: (e) => handlePromoCodeChange(e.target.value), onKeyDown: (e) => e.key === 'Enter' && handleApplyPromo(), className: promoError ? "border-destructive" : "" }) }), _jsx(Button, { variant: "outline", onClick: handleApplyPromo, disabled: !promoCode.trim(), children: "Apply" })] }), promoError && (_jsx("p", { className: "text-sm text-destructive", children: promoError })), promoSuccess && (_jsxs("p", { className: "text-sm text-green-600 dark:text-green-400 flex items-center gap-1", children: [_jsx(Check, { className: "h-3 w-3" }), "Promo code applied successfully!"] })), _jsx("div", { className: "text-xs text-muted-foreground", children: _jsx("p", { children: "Try: BOTANICAL10, SPRING15, or FIRST20" }) })] })) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Order Summary" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between", children: [_jsxs("span", { children: ["Subtotal (", itemCount, " items)"] }), _jsxs("span", { children: ["$", subtotal.toFixed(2)] })] }), appliedPromo && promoDiscount > 0 && (_jsxs("div", { className: "flex justify-between text-green-600 dark:text-green-400", children: [_jsxs("span", { children: ["Discount (", appliedPromo.code, ")"] }), _jsxs("span", { children: ["-$", promoDiscount.toFixed(2)] })] })), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Tax" }), _jsxs("span", { children: ["$", tax.toFixed(2)] })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: "Shipping" }), _jsx("div", { className: "text-right", children: shipping === 0 ? (_jsx(Badge, { variant: "secondary", className: "text-xs", children: "Free" })) : (_jsxs("span", { children: ["$", shipping.toFixed(2)] })) })] }), remainingForFreeShipping > 0 && shipping > 0 && (_jsx("div", { className: "bg-muted/50 p-3 rounded-lg", children: _jsxs("p", { className: "text-sm", children: ["Add ", _jsxs("span", { className: "font-medium", children: ["$", remainingForFreeShipping.toFixed(2)] }), " more for free shipping!"] }) })), _jsx(Separator, {}), _jsxs("div", { className: "flex justify-between font-medium text-lg", children: [_jsx("span", { children: "Total" }), _jsxs("span", { children: ["$", total.toFixed(2)] })] }), _jsxs(Button, { className: "w-full", size: "lg", children: [_jsx(CreditCard, { className: "mr-2 h-4 w-4" }), "Proceed to Checkout"] })] })] }), _jsx(Card, { children: _jsx(CardContent, { className: "pt-6", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Truck, { className: "h-5 w-5 text-muted-foreground" }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium", children: "Free Shipping" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "On orders over $200" })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Shield, { className: "h-5 w-5 text-muted-foreground" }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium", children: "Secure Packaging" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Art safely packed & insured" })] })] })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "pt-6", children: _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "\"Each piece is carefully created with love and attention to botanical detail.\"" }), _jsx("p", { className: "text-xs font-medium", children: "\u2014 Elena, Botanical Artist" })] }) }) })] }));
}
//# sourceMappingURL=CartSummary.js.map