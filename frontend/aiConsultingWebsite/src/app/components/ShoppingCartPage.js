"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, Truck, Gift, Tag, Percent, Shield, Star, ArrowRight, ArrowLeft, Package, MapPin, Clock, Check, AlertCircle, Info, Heart, Share2, RefreshCw, ShoppingBag, X } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
import { LoadingSpinner } from "./LoadingSpinner";
import { SEOHead } from "./SEOHead";
export function ShoppingCartPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, language } = useLanguage();
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedShipping, setSelectedShipping] = useState('standard');
    const [promoCode, setPromoCode] = useState('');
    const [appliedPromo, setAppliedPromo] = useState(null);
    const [isApplyingPromo, setIsApplyingPromo] = useState(false);
    const [promoError, setPromoError] = useState('');
    const [showCheckout, setShowCheckout] = useState(false);
    // Mock data - in production, this would come from API
    useEffect(() => {
        const loadCartItems = async () => {
            setIsLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            const mockCartItems = [
                {
                    id: '1',
                    name: 'Delibix AI Consulting T-Shirt',
                    description: 'Premium cotton t-shirt with Delibix AI logo. Comfortable fit perfect for tech professionals.',
                    price: 29.99,
                    originalPrice: 34.99,
                    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
                    category: 'Apparel',
                    size: 'Large',
                    color: 'Navy Blue',
                    quantity: 2,
                    inStock: true,
                    maxQuantity: 10,
                    rating: 4.8,
                    reviews: 124
                },
                {
                    id: '2',
                    name: 'Digital Transformation Mug',
                    description: 'Ceramic coffee mug with inspirational quotes about digital transformation. Dishwasher safe.',
                    price: 19.99,
                    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop',
                    category: 'Accessories',
                    quantity: 1,
                    inStock: true,
                    maxQuantity: 5,
                    rating: 4.6,
                    reviews: 89
                },
                {
                    id: '3',
                    name: 'AI Strategy Guidebook',
                    description: 'Comprehensive guidebook covering AI implementation strategies for businesses. 250+ pages of expert insights.',
                    price: 49.99,
                    originalPrice: 59.99,
                    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=300&fit=crop',
                    category: 'Books',
                    quantity: 1,
                    inStock: true,
                    maxQuantity: 3,
                    rating: 4.9,
                    reviews: 67
                },
                {
                    id: '4',
                    name: 'Delibix Laptop Sticker Pack',
                    description: 'Set of 12 premium vinyl stickers featuring AI and tech-themed designs. Weather resistant.',
                    price: 12.99,
                    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=300&fit=crop',
                    category: 'Accessories',
                    quantity: 3,
                    inStock: false,
                    maxQuantity: 0,
                    rating: 4.4,
                    reviews: 156
                }
            ];
            setCartItems(mockCartItems);
            setIsLoading(false);
        };
        loadCartItems();
    }, []);
    // Shipping options
    const shippingOptions = [
        {
            id: 'standard',
            name: 'Standard Shipping',
            description: 'Free shipping on orders over $75',
            price: 0,
            estimatedDays: '5-7 business days',
            icon: Package
        },
        {
            id: 'express',
            name: 'Express Shipping',
            description: 'Faster delivery for urgent orders',
            price: 9.99,
            estimatedDays: '2-3 business days',
            icon: Truck
        },
        {
            id: 'overnight',
            name: 'Overnight Shipping',
            description: 'Next business day delivery',
            price: 24.99,
            estimatedDays: '1 business day',
            icon: Clock
        }
    ];
    // Available promo codes
    const promoCodes = [
        { code: 'WELCOME10', discount: 10, type: 'percentage' },
        { code: 'SAVE20', discount: 20, type: 'fixed', minOrder: 100 },
        { code: 'NEWCLIENT', discount: 15, type: 'percentage', minOrder: 50 }
    ];
    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const selectedShippingOption = shippingOptions.find(option => option.id === selectedShipping);
    const shippingCost = subtotal >= 75 && selectedShipping === 'standard' ? 0 : (selectedShippingOption?.price || 0);
    const promoDiscount = appliedPromo ?
        (appliedPromo.type === 'percentage' ? subtotal * (appliedPromo.discount / 100) : appliedPromo.discount) : 0;
    const tax = (subtotal - promoDiscount) * 0.08; // 8% tax
    const total = subtotal + shippingCost + tax - promoDiscount;
    // Update item quantity
    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity < 0)
            return;
        setCartItems(prev => prev.map(item => item.id === itemId
            ? { ...item, quantity: Math.min(newQuantity, item.maxQuantity) }
            : item).filter(item => item.quantity > 0));
    };
    // Remove item from cart
    const removeItem = (itemId) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    };
    // Apply promo code
    const applyPromoCode = async () => {
        if (!promoCode.trim())
            return;
        setIsApplyingPromo(true);
        setPromoError('');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        const validPromo = promoCodes.find(promo => promo.code.toLowerCase() === promoCode.toLowerCase() &&
            (!promo.minOrder || subtotal >= promo.minOrder));
        if (validPromo) {
            setAppliedPromo(validPromo);
            setPromoCode('');
        }
        else {
            const existingPromo = promoCodes.find(promo => promo.code.toLowerCase() === promoCode.toLowerCase());
            if (existingPromo && existingPromo.minOrder && subtotal < existingPromo.minOrder) {
                setPromoError(`Minimum order of $${existingPromo.minOrder} required for this promo code.`);
            }
            else {
                setPromoError('Invalid promo code. Please check and try again.');
            }
        }
        setIsApplyingPromo(false);
    };
    // Remove promo code
    const removePromoCode = () => {
        setAppliedPromo(null);
        setPromoError('');
    };
    // Continue shopping
    const continueShopping = () => {
        navigate?.('merchandise-store');
    };
    if (isLoading) {
        return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEOHead, { title: "Shopping Cart - Delibix", description: "Review your items and complete your purchase of Delibix merchandise and resources." }), _jsx("div", { className: "flex items-center justify-center min-h-screen", children: _jsx(LoadingSpinner, { size: "lg", variant: "delibix", text: "Loading your cart..." }) })] }));
    }
    if (cartItems.length === 0) {
        return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEOHead, { title: "Shopping Cart - Delibix", description: "Your shopping cart is empty. Browse our merchandise and resources to add items." }), _jsx("div", { className: "border-b border-slate-200 dark:border-slate-700 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: _jsx("div", { className: "max-w-7xl mx-auto px-6 py-8", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center", children: _jsx(ShoppingCart, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: "Shopping Cart" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mt-1", children: "Your cart is currently empty" })] })] }), _jsxs(Button, { onClick: continueShopping, className: "gradient-bg-blue text-white", children: [_jsx(ShoppingBag, { className: "w-4 h-4 mr-2" }), "Continue Shopping"] })] }) }) }), _jsx("div", { className: "max-w-4xl mx-auto px-6 py-16", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-center", children: _jsx(Card, { className: "glass-heavy max-w-md mx-auto", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("div", { className: "w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx(ShoppingCart, { className: "w-12 h-12 text-slate-400" }) }), _jsx("h2", { className: "text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3", children: "Your cart is empty" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-6", children: "Looks like you haven't added any items to your cart yet. Browse our merchandise and resources to get started." }), _jsxs(Button, { onClick: continueShopping, className: "w-full gradient-bg-blue text-white", children: [_jsx(ShoppingBag, { className: "w-4 h-4 mr-2" }), "Browse Merchandise"] })] }) }) }) })] }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEOHead, { title: "Shopping Cart - Delibix", description: "Review your items and complete your purchase of Delibix merchandise and resources." }), _jsx("div", { className: "border-b border-slate-200 dark:border-slate-700 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: _jsx("div", { className: "max-w-7xl mx-auto px-6 py-8", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center", children: _jsx(ShoppingCart, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: "Shopping Cart" }), _jsxs("p", { className: "text-slate-600 dark:text-slate-400 mt-1", children: [cartItems.length, " ", cartItems.length === 1 ? 'item' : 'items', " in your cart"] }), _jsxs("div", { className: "flex items-center space-x-4 mt-2", children: [_jsxs(Badge, { variant: "outline", className: "text-xs", children: ["Subtotal: $", subtotal.toFixed(2)] }), subtotal >= 75 && (_jsx(Badge, { variant: "default", className: "text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300", children: "Free Shipping Eligible" }))] })] })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsxs(Button, { variant: "outline", onClick: continueShopping, children: [_jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), "Continue Shopping"] }), _jsxs(Button, { onClick: () => setShowCheckout(true), className: "gradient-bg-blue text-white", disabled: cartItems.some(item => !item.inStock), children: [_jsx(CreditCard, { className: "w-4 h-4 mr-2" }), "Checkout"] })] })] }) }) }), _jsx("div", { className: "max-w-7xl mx-auto px-6 py-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: _jsxs(Card, { className: "glass-heavy", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Package, { className: "w-5 h-5 text-blue-500" }), "Cart Items"] }), _jsx(CardDescription, { children: "Review and modify your selected items" })] }), _jsx(CardContent, { className: "space-y-4", children: _jsx(AnimatePresence, { children: cartItems.map((item, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, x: -20 }, transition: { duration: 0.3, delay: index * 0.1 }, className: `p-4 border border-slate-200 dark:border-slate-700 rounded-lg ${!item.inStock ? 'bg-red-50 dark:bg-red-900/10' : 'bg-slate-50 dark:bg-slate-800/50'}`, children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "w-20 h-20 rounded-lg overflow-hidden flex-shrink-0", children: _jsx("img", { src: item.image, alt: item.name, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-start justify-between gap-4", children: [_jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-1", children: item.name }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2 line-clamp-2", children: item.description }), _jsxs("div", { className: "flex items-center gap-4 mb-2", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: item.category }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "w-3 h-3 text-amber-500 fill-current" }), _jsxs("span", { className: "text-xs text-slate-600 dark:text-slate-400", children: [item.rating, " (", item.reviews, ")"] })] })] }), (item.size || item.color) && (_jsxs("div", { className: "flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mb-2", children: [item.size && _jsxs("span", { children: ["Size: ", item.size] }), item.color && _jsxs("span", { children: ["Color: ", item.color] })] })), !item.inStock && (_jsxs("div", { className: "flex items-center gap-2 text-red-600 dark:text-red-400 text-sm mb-2", children: [_jsx(AlertCircle, { className: "w-4 h-4" }), "Out of Stock"] }))] }), _jsx("div", { className: "flex items-center gap-2 flex-shrink-0", children: _jsx(Button, { size: "sm", variant: "ghost", className: "text-slate-500 hover:text-red-600 dark:hover:text-red-400", onClick: () => removeItem(item.id), children: _jsx(Trash2, { className: "w-4 h-4" }) }) })] }), _jsxs("div", { className: "flex items-center justify-between mt-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: "font-semibold text-slate-900 dark:text-slate-100", children: ["$", item.price.toFixed(2)] }), item.originalPrice && (_jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400 line-through", children: ["$", item.originalPrice.toFixed(2)] }))] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "flex items-center border border-slate-200 dark:border-slate-700 rounded-lg", children: [_jsx(Button, { size: "sm", variant: "ghost", onClick: () => updateQuantity(item.id, item.quantity - 1), disabled: item.quantity <= 1 || !item.inStock, className: "h-8 w-8 p-0", children: _jsx(Minus, { className: "w-3 h-3" }) }), _jsx("span", { className: "px-3 py-1 text-sm font-medium min-w-[40px] text-center", children: item.quantity }), _jsx(Button, { size: "sm", variant: "ghost", onClick: () => updateQuantity(item.id, item.quantity + 1), disabled: item.quantity >= item.maxQuantity || !item.inStock, className: "h-8 w-8 p-0", children: _jsx(Plus, { className: "w-3 h-3" }) })] }), _jsxs("span", { className: "text-sm font-medium text-slate-900 dark:text-slate-100 min-w-[60px] text-right", children: ["$", (item.price * item.quantity).toFixed(2)] })] })] })] })] }) }, item.id))) }) })] }) }), _jsx("div", { className: "lg:col-span-1", children: _jsxs("div", { className: "sticky top-8 space-y-6", children: [_jsxs(Card, { className: "glass-secondary", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [_jsx(Tag, { className: "w-5 h-5 text-blue-500" }), "Promo Code"] }) }), _jsx(CardContent, { className: "space-y-4", children: !appliedPromo ? (_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { placeholder: "Enter promo code", value: promoCode, onChange: (e) => {
                                                                        setPromoCode(e.target.value);
                                                                        setPromoError('');
                                                                    }, className: "flex-1" }), _jsx(Button, { onClick: applyPromoCode, disabled: !promoCode.trim() || isApplyingPromo, size: "sm", children: isApplyingPromo ? (_jsx(LoadingSpinner, { size: "sm" })) : ('Apply') })] }), promoError && (_jsxs("p", { className: "text-red-600 dark:text-red-400 text-xs flex items-center gap-1", children: [_jsx(AlertCircle, { className: "w-3 h-3" }), promoError] })), _jsx("div", { className: "text-xs text-slate-600 dark:text-slate-400", children: "Available codes: WELCOME10, SAVE20, NEWCLIENT" })] })) : (_jsxs("div", { className: "flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Check, { className: "w-4 h-4 text-green-600 dark:text-green-400" }), _jsx("span", { className: "text-sm font-medium text-green-900 dark:text-green-100", children: appliedPromo.code })] }), _jsx(Button, { size: "sm", variant: "ghost", onClick: removePromoCode, className: "text-green-700 dark:text-green-300 hover:text-red-600 dark:hover:text-red-400", children: _jsx(X, { className: "w-4 h-4" }) })] })) })] }), _jsxs(Card, { className: "glass-secondary", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [_jsx(Truck, { className: "w-5 h-5 text-blue-500" }), "Shipping"] }) }), _jsx(CardContent, { className: "space-y-3", children: shippingOptions.map((option) => (_jsxs("div", { className: `p-3 border rounded-lg cursor-pointer transition-all duration-200 ${selectedShipping === option.id
                                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                                        : 'border-slate-200 dark:border-slate-700 hover:border-blue-300'}`, onClick: () => setSelectedShipping(option.id), children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(option.icon, { className: "w-4 h-4 text-blue-500" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-sm text-slate-900 dark:text-slate-100", children: option.name }), _jsx("p", { className: "text-xs text-slate-600 dark:text-slate-400", children: option.estimatedDays })] })] }), _jsx("div", { className: "text-right", children: _jsx("p", { className: "font-medium text-sm text-slate-900 dark:text-slate-100", children: option.price === 0 && subtotal >= 75 ? 'Free' : `$${option.price.toFixed(2)}` }) })] }), _jsx("p", { className: "text-xs text-slate-600 dark:text-slate-400 mt-1 ml-7", children: option.description })] }, option.id))) })] }), _jsxs(Card, { className: "glass-heavy", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg", children: "Order Summary" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-slate-600 dark:text-slate-400", children: "Subtotal" }), _jsxs("span", { className: "font-medium text-slate-900 dark:text-slate-100", children: ["$", subtotal.toFixed(2)] })] }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-slate-600 dark:text-slate-400", children: "Shipping" }), _jsx("span", { className: "font-medium text-slate-900 dark:text-slate-100", children: shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}` })] }), appliedPromo && (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsxs("span", { className: "text-green-600 dark:text-green-400", children: ["Discount (", appliedPromo.code, ")"] }), _jsxs("span", { className: "font-medium text-green-600 dark:text-green-400", children: ["-$", promoDiscount.toFixed(2)] })] })), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-slate-600 dark:text-slate-400", children: "Tax" }), _jsxs("span", { className: "font-medium text-slate-900 dark:text-slate-100", children: ["$", tax.toFixed(2)] })] }), _jsx(Separator, {}), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "font-semibold text-slate-900 dark:text-slate-100", children: "Total" }), _jsxs("span", { className: "font-bold text-xl text-slate-900 dark:text-slate-100", children: ["$", total.toFixed(2)] })] })] }), _jsxs("div", { className: "space-y-3 pt-4", children: [_jsxs(Button, { className: "w-full gradient-bg-blue text-white py-6", onClick: () => setShowCheckout(true), disabled: cartItems.some(item => !item.inStock), children: [_jsx(CreditCard, { className: "w-5 h-5 mr-2" }), "Proceed to Checkout"] }), _jsxs("div", { className: "flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-400", children: [_jsx(Shield, { className: "w-3 h-3" }), "Secure checkout with SSL encryption"] })] })] })] }), _jsx(Card, { className: "glass-secondary", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(Truck, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { className: "text-slate-600 dark:text-slate-400", children: "Free shipping on orders over $75" })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(RefreshCw, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { className: "text-slate-600 dark:text-slate-400", children: "30-day return policy" })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(Shield, { className: "w-4 h-4 text-blue-500" }), _jsx("span", { className: "text-slate-600 dark:text-slate-400", children: "Secure payment processing" })] })] }) }) })] }) })] }) }), showCheckout && (_jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50", children: _jsx(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "bg-background rounded-2xl p-6 max-w-md w-full", children: _jsxs("div", { className: "text-center", children: [_jsx(CreditCard, { className: "w-12 h-12 text-blue-500 mx-auto mb-4" }), _jsx("h3", { className: "text-lg font-semibold mb-2", children: "Checkout" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-6", children: "Checkout functionality would be implemented here with payment processing, billing information, and order confirmation." }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { variant: "outline", onClick: () => setShowCheckout(false), className: "flex-1", children: "Close" }), _jsx(Button, { className: "flex-1 gradient-bg-blue text-white", children: "Continue" })] })] }) }) }))] }));
}
//# sourceMappingURL=ShoppingCartPage.js.map