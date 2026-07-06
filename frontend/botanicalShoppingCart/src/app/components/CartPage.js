import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { ShoppingBag, ArrowLeft, MessageSquare } from "lucide-react";
export function CartPage() {
    const [cartItems, setCartItems] = useState([
        {
            id: "1",
            title: "Monstera Deliciosa Study",
            artist: "Elena Botanical",
            price: 85.00,
            quantity: 1,
            imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
            size: "8\" x 10\"",
            medium: "Watercolor on Paper"
        },
        {
            id: "2",
            title: "Eucalyptus Branch",
            artist: "Elena Botanical",
            price: 75.00,
            quantity: 2,
            imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
            size: "11\" x 14\"",
            medium: "Gouache on Paper"
        },
        {
            id: "3",
            title: "Fern Collection",
            artist: "Elena Botanical",
            price: 120.00,
            quantity: 1,
            imageUrl: "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=400&h=400&fit=crop",
            size: "16\" x 20\"",
            medium: "Mixed Media"
        }
    ]);
    const [orderNotes, setOrderNotes] = useState('');
    const [promoCode, setPromoCode] = useState('');
    const [appliedPromo, setAppliedPromo] = useState(null);
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity === 0) {
            removeItem(id);
            return;
        }
        setCartItems(items => items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    };
    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };
    const applyPromoCode = (code) => {
        // Mock promo code validation - in real app this would be an API call
        const promoCodes = {
            'BOTANICAL10': 0.10, // 10% off
            'SPRING15': 0.15, // 15% off
            'FIRST20': 0.20, // 20% off
        };
        const discount = promoCodes[code.toUpperCase()];
        if (discount) {
            setAppliedPromo({ code: code.toUpperCase(), discount });
            return true;
        }
        return false;
    };
    const removePromoCode = () => {
        setAppliedPromo(null);
        setPromoCode('');
    };
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const promoDiscount = appliedPromo ? subtotal * appliedPromo.discount : 0;
    const discountedSubtotal = subtotal - promoDiscount;
    const tax = discountedSubtotal * 0.08; // 8% tax
    const shipping = cartItems.length > 0 ? 15.00 : 0;
    const total = discountedSubtotal + tax + shipping;
    if (cartItems.length === 0) {
        return (_jsx("div", { className: "min-h-screen bg-background", children: _jsx("div", { className: "container mx-auto px-4 py-8", children: _jsxs("div", { className: "max-w-2xl mx-auto", children: [_jsxs(Button, { variant: "ghost", className: "mb-6", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Continue Shopping"] }), _jsx(Card, { children: _jsxs(CardContent, { className: "flex flex-col items-center justify-center py-16", children: [_jsx(ShoppingBag, { className: "h-16 w-16 text-muted-foreground mb-4" }), _jsx("h2", { className: "mb-2", children: "Your cart is empty" }), _jsx("p", { className: "text-muted-foreground text-center mb-6", children: "Discover beautiful botanical artwork to add to your collection" }), _jsx(Button, { children: "Browse Artwork" })] }) })] }) }) }));
    }
    return (_jsx("div", { className: "min-h-screen bg-background", children: _jsx("div", { className: "container mx-auto px-4 py-8", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs(Button, { variant: "ghost", className: "mb-6", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Continue Shopping"] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsxs("div", { className: "lg:col-span-2 space-y-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(ShoppingBag, { className: "h-5 w-5" }), "Shopping Cart (", cartItems.length, " ", cartItems.length === 1 ? 'item' : 'items', ")"] }) }), _jsx(CardContent, { className: "space-y-4", children: cartItems.map((item, index) => (_jsxs("div", { children: [_jsx(CartItem, { item: item, onUpdateQuantity: updateQuantity, onRemove: removeItem }), index < cartItems.length - 1 && _jsx(Separator, { className: "mt-4" })] }, item.id))) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(MessageSquare, { className: "h-5 w-5" }), "Special Instructions"] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "order-notes", children: "Add a note to your order (optional)" }), _jsx(Textarea, { id: "order-notes", placeholder: "Any special requests, gift messages, or packaging instructions...", value: orderNotes, onChange: (e) => setOrderNotes(e.target.value), className: "min-h-[100px] resize-none" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Examples: \"Please gift wrap this item\", \"This is a gift for my mother\", \"Handle with extra care\"" })] }) })] })] }), _jsx("div", { className: "lg:col-span-1", children: _jsx(CartSummary, { subtotal: subtotal, promoDiscount: promoDiscount, appliedPromo: appliedPromo, tax: tax, shipping: shipping, total: total, itemCount: cartItems.length, promoCode: promoCode, onPromoCodeChange: setPromoCode, onApplyPromoCode: applyPromoCode, onRemovePromoCode: removePromoCode }) })] })] }) }) }));
}
//# sourceMappingURL=CartPage.js.map