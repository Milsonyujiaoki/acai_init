"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ShoppingCart, Search, Filter, Grid3X3, List, Heart, Star, Plus, Minus, X, ArrowRight, Package, Truck, Shield, RotateCcw, CreditCard, Users, Mail, Phone, Eye, Share2, Tag, Zap, Brain, Cpu, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ImageWithFallback } from './figma/ImageWithFallback';
export function MerchandiseStorePage({ navigate }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showCart, setShowCart] = useState(false);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    // Sample products data
    const products = [
        {
            id: '1',
            name: 'Delibix AI Neural Network T-Shirt',
            description: 'Premium cotton t-shirt featuring an elegant neural network design representing the future of AI.',
            price: 29.99,
            originalPrice: 39.99,
            category: 'apparel',
            tags: ['cotton', 'unisex', 'ai-design', 'neural-network'],
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
            rating: 4.8,
            reviews: 124,
            inStock: true,
            featured: true,
            isNew: false,
            colors: ['black', 'white', 'navy', 'gray'],
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        {
            id: '2',
            name: 'Smart AI Mug with Temperature Display',
            description: 'Intelligent coffee mug that displays temperature and changes color based on heat.',
            price: 24.99,
            category: 'accessories',
            tags: ['smart', 'temperature', 'ceramic', 'tech'],
            image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop',
            rating: 4.6,
            reviews: 89,
            inStock: true,
            featured: true,
            isNew: true,
            colors: ['black', 'white']
        },
        {
            id: '3',
            name: 'Delibix Quantum Computing Hoodie',
            description: 'Comfortable hoodie with quantum circuit patterns and Delibix branding.',
            price: 59.99,
            originalPrice: 79.99,
            category: 'apparel',
            tags: ['hoodie', 'quantum', 'warm', 'winter'],
            image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
            rating: 4.9,
            reviews: 156,
            inStock: true,
            featured: false,
            isNew: false,
            colors: ['black', 'gray', 'navy'],
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        {
            id: '4',
            name: 'AI Assistant Wireless Charger',
            description: 'Sleek wireless charger with AI voice assistant integration and LED indicators.',
            price: 49.99,
            category: 'tech',
            tags: ['wireless', 'charging', 'ai-assistant', 'led'],
            image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop',
            rating: 4.7,
            reviews: 203,
            inStock: false,
            featured: true,
            isNew: true
        },
        {
            id: '5',
            name: 'Machine Learning Notebook',
            description: 'Professional notebook designed for data scientists with graph paper and ML templates.',
            price: 19.99,
            category: 'stationery',
            tags: ['notebook', 'data-science', 'graphs', 'templates'],
            image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
            rating: 4.5,
            reviews: 67,
            inStock: true,
            featured: false,
            isNew: false
        },
        {
            id: '6',
            name: 'Delibix Backpack with USB Charging',
            description: 'Modern backpack with built-in USB charging port and laptop compartment.',
            price: 89.99,
            originalPrice: 119.99,
            category: 'accessories',
            tags: ['backpack', 'usb', 'laptop', 'travel'],
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
            rating: 4.8,
            reviews: 142,
            inStock: true,
            featured: true,
            isNew: false,
            colors: ['black', 'gray', 'blue']
        },
        {
            id: '7',
            name: 'AI Brain Enamel Pin Set',
            description: 'Collectible enamel pin set featuring AI brain designs and neural pathways.',
            price: 12.99,
            category: 'accessories',
            tags: ['pins', 'collectible', 'enamel', 'brain'],
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
            rating: 4.4,
            reviews: 78,
            inStock: true,
            featured: false,
            isNew: true
        },
        {
            id: '8',
            name: 'Quantum Algorithm Poster Set',
            description: 'Beautiful poster set showcasing famous AI and quantum algorithms.',
            price: 34.99,
            category: 'stationery',
            tags: ['posters', 'algorithms', 'educational', 'wall-art'],
            image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop',
            rating: 4.6,
            reviews: 91,
            inStock: true,
            featured: false,
            isNew: false
        }
    ];
    const categories = [
        { id: 'all', name: 'All Products', icon: Grid3X3 },
        { id: 'apparel', name: 'Apparel', icon: Users },
        { id: 'accessories', name: 'Accessories', icon: Package },
        { id: 'tech', name: 'Tech', icon: Cpu },
        { id: 'stationery', name: 'Stationery', icon: Lightbulb }
    ];
    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        // Sort products
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                break;
            case 'featured':
            default:
                filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                break;
        }
        return filtered;
    }, [products, searchQuery, selectedCategory, sortBy]);
    const addToCart = (productId, quantity = 1, color, size) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.productId === productId &&
                item.selectedColor === color &&
                item.selectedSize === size);
            if (existingItem) {
                return prev.map(item => item.productId === productId &&
                    item.selectedColor === color &&
                    item.selectedSize === size
                    ? { ...item, quantity: item.quantity + quantity }
                    : item);
            }
            else {
                return [...prev, { productId, quantity, selectedColor: color, selectedSize: size }];
            }
        });
    };
    const removeFromCart = (productId, color, size) => {
        setCartItems(prev => prev.filter(item => !(item.productId === productId &&
            item.selectedColor === color &&
            item.selectedSize === size)));
    };
    const updateCartQuantity = (productId, quantity, color, size) => {
        if (quantity <= 0) {
            removeFromCart(productId, color, size);
        }
        else {
            setCartItems(prev => prev.map(item => item.productId === productId &&
                item.selectedColor === color &&
                item.selectedSize === size
                ? { ...item, quantity }
                : item));
        }
    };
    const toggleWishlist = (productId) => {
        setWishlist(prev => prev.includes(productId)
            ? prev.filter(id => id !== productId)
            : [...prev, productId]);
    };
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => {
            const product = products.find(p => p.id === item.productId);
            return total + (product?.price || 0) * item.quantity;
        }, 0);
    };
    const getCartItemCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };
    const ProductCard = ({ product }) => (_jsxs(motion.div, { className: "glass card-hover rounded-2xl overflow-hidden", variants: itemVariants, whileHover: { y: -4 }, children: [_jsxs("div", { className: "relative", children: [_jsx(ImageWithFallback, { src: product.image, alt: product.name, className: "w-full h-48 object-cover" }), _jsxs("div", { className: "absolute top-3 left-3 flex gap-2", children: [product.isNew && (_jsx(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: "New" })), product.featured && (_jsx(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", children: "Featured" })), product.originalPrice && (_jsx(Badge, { className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300", children: "Sale" }))] }), _jsxs("div", { className: "absolute top-3 right-3 flex gap-2", children: [_jsx(Button, { size: "sm", variant: "outline", className: "w-8 h-8 p-0 glass-secondary", onClick: () => toggleWishlist(product.id), children: _jsx(Heart, { className: `w-4 h-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}` }) }), _jsx(Button, { size: "sm", variant: "outline", className: "w-8 h-8 p-0 glass-secondary", onClick: () => setSelectedProduct(product), children: _jsx(Eye, { className: "w-4 h-4" }) })] }), !product.inStock && (_jsx("div", { className: "absolute inset-0 bg-black/50 flex items-center justify-center", children: _jsx(Badge, { className: "bg-red-600 text-white", children: "Out of Stock" }) }))] }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2", children: product.name }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2", children: product.description }), _jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: `w-3 h-3 ${i < Math.floor(product.rating)
                                        ? 'text-yellow-400 fill-yellow-400'
                                        : 'text-gray-300'}` }, i))) }), _jsxs("span", { className: "text-xs text-slate-500", children: ["(", product.reviews, ")"] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: "text-lg font-bold text-slate-900 dark:text-slate-100", children: ["$", product.price] }), product.originalPrice && (_jsxs("span", { className: "text-sm text-slate-500 line-through", children: ["$", product.originalPrice] }))] }), _jsxs(Button, { size: "sm", className: "gradient-bg-blue text-white hover:opacity-90", onClick: () => addToCart(product.id), disabled: !product.inStock, children: [_jsx(ShoppingCart, { className: "w-4 h-4 mr-1" }), "Add"] })] }), product.colors && product.colors.length > 0 && (_jsxs("div", { className: "flex items-center gap-1 mt-3", children: [product.colors.slice(0, 4).map((color) => (_jsx("div", { className: `w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-600 ${color === 'black' ? 'bg-black' :
                                    color === 'white' ? 'bg-white' :
                                        color === 'navy' ? 'bg-blue-900' :
                                            color === 'gray' ? 'bg-gray-500' :
                                                color === 'blue' ? 'bg-blue-500' :
                                                    'bg-gray-400'}`, title: color }, color))), product.colors.length > 4 && (_jsxs("span", { className: "text-xs text-slate-500", children: ["+", product.colors.length - 4] }))] }))] })] }));
    const ProductModal = () => {
        const [selectedColor, setSelectedColor] = useState(selectedProduct?.colors?.[0] || '');
        const [selectedSize, setSelectedSize] = useState(selectedProduct?.sizes?.[0] || '');
        const [quantity, setQuantity] = useState(1);
        if (!selectedProduct)
            return null;
        return (_jsx(Dialog, { open: !!selectedProduct, onOpenChange: () => setSelectedProduct(null), children: _jsxs(DialogContent, { className: "max-w-4xl max-h-[90vh] overflow-y-auto", children: [_jsx(DialogHeader, { children: _jsx(DialogTitle, { children: selectedProduct.name }) }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsx("div", { children: _jsx(ImageWithFallback, { src: selectedProduct.image, alt: selectedProduct.name, className: "w-full h-96 object-cover rounded-xl" }) }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [selectedProduct.isNew && (_jsx(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", children: "New" })), selectedProduct.featured && (_jsx(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", children: "Featured" }))] }), _jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: `w-4 h-4 ${i < Math.floor(selectedProduct.rating)
                                                                ? 'text-yellow-400 fill-yellow-400'
                                                                : 'text-gray-300'}` }, i))) }), _jsxs("span", { className: "text-sm text-slate-500", children: ["(", selectedProduct.reviews, " reviews)"] })] }), _jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsxs("span", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: ["$", selectedProduct.price] }), selectedProduct.originalPrice && (_jsxs("span", { className: "text-lg text-slate-500 line-through", children: ["$", selectedProduct.originalPrice] }))] })] }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: selectedProduct.description }), selectedProduct.colors && selectedProduct.colors.length > 0 && (_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2", children: "Color" }), _jsx("div", { className: "flex gap-2", children: selectedProduct.colors.map((color) => (_jsx("button", { onClick: () => setSelectedColor(color), className: `w-8 h-8 rounded-full border-2 ${selectedColor === color
                                                        ? 'border-blue-500 ring-2 ring-blue-200'
                                                        : 'border-slate-300 dark:border-slate-600'} ${color === 'black' ? 'bg-black' :
                                                        color === 'white' ? 'bg-white' :
                                                            color === 'navy' ? 'bg-blue-900' :
                                                                color === 'gray' ? 'bg-gray-500' :
                                                                    color === 'blue' ? 'bg-blue-500' :
                                                                        'bg-gray-400'}`, title: color }, color))) })] })), selectedProduct.sizes && selectedProduct.sizes.length > 0 && (_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2", children: "Size" }), _jsx("div", { className: "flex gap-2", children: selectedProduct.sizes.map((size) => (_jsx("button", { onClick: () => setSelectedSize(size), className: `px-3 py-1 rounded border ${selectedSize === size
                                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                                                        : 'border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'}`, children: size }, size))) })] })), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2", children: "Quantity" }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Button, { size: "sm", variant: "outline", onClick: () => setQuantity(Math.max(1, quantity - 1)), children: _jsx(Minus, { className: "w-4 h-4" }) }), _jsx("span", { className: "w-12 text-center", children: quantity }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => setQuantity(quantity + 1), children: _jsx(Plus, { className: "w-4 h-4" }) })] })] }), _jsxs("div", { className: "flex gap-3", children: [_jsxs(Button, { className: "flex-1 gradient-bg-blue text-white hover:opacity-90", onClick: () => {
                                                    addToCart(selectedProduct.id, quantity, selectedColor, selectedSize);
                                                    setSelectedProduct(null);
                                                }, disabled: !selectedProduct.inStock, children: [_jsx(ShoppingCart, { className: "w-4 h-4 mr-2" }), "Add to Cart"] }), _jsx(Button, { variant: "outline", onClick: () => toggleWishlist(selectedProduct.id), children: _jsx(Heart, { className: `w-4 h-4 ${wishlist.includes(selectedProduct.id) ? 'fill-red-500 text-red-500' : ''}` }) })] }), _jsx("div", { className: "flex flex-wrap gap-2", children: selectedProduct.tags.map((tag) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: tag }, tag))) })] })] })] }) }));
    };
    const CartModal = () => (_jsx(Dialog, { open: showCart, onOpenChange: setShowCart, children: _jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh]", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { children: ["Shopping Cart (", getCartItemCount(), " items)"] }) }), _jsx("div", { className: "space-y-4 max-h-96 overflow-y-auto", children: cartItems.length === 0 ? (_jsxs("div", { className: "text-center py-8", children: [_jsx(ShoppingCart, { className: "w-12 h-12 text-slate-400 mx-auto mb-4" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: "Your cart is empty" }), _jsx(Button, { onClick: () => setShowCart(false), className: "mt-4 gradient-bg-blue text-white hover:opacity-90", children: "Continue Shopping" })] })) : (cartItems.map((item) => {
                        const product = products.find(p => p.id === item.productId);
                        if (!product)
                            return null;
                        return (_jsxs("div", { className: "flex items-center gap-4 p-4 glass-secondary rounded-xl", children: [_jsx(ImageWithFallback, { src: product.image, alt: product.name, className: "w-16 h-16 object-cover rounded-lg" }), _jsxs("div", { className: "flex-1", children: [_jsx("h4", { className: "font-medium text-slate-900 dark:text-slate-100", children: product.name }), _jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: [item.selectedColor && _jsxs("span", { children: ["Color: ", item.selectedColor] }), item.selectedColor && item.selectedSize && _jsx("span", { children: " \u2022 " }), item.selectedSize && _jsxs("span", { children: ["Size: ", item.selectedSize] })] }), _jsxs("div", { className: "font-bold text-slate-900 dark:text-slate-100", children: ["$", product.price] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { size: "sm", variant: "outline", onClick: () => updateCartQuantity(item.productId, item.quantity - 1, item.selectedColor, item.selectedSize), children: _jsx(Minus, { className: "w-3 h-3" }) }), _jsx("span", { className: "w-8 text-center", children: item.quantity }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => updateCartQuantity(item.productId, item.quantity + 1, item.selectedColor, item.selectedSize), children: _jsx(Plus, { className: "w-3 h-3" }) })] }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => removeFromCart(item.productId, item.selectedColor, item.selectedSize), children: _jsx(X, { className: "w-4 h-4" }) })] }, `${item.productId}-${item.selectedColor}-${item.selectedSize}`));
                    })) }), cartItems.length > 0 && (_jsxs("div", { className: "border-t pt-4", children: [_jsx("div", { className: "flex justify-between items-center mb-4", children: _jsxs("span", { className: "text-lg font-bold text-slate-900 dark:text-slate-100", children: ["Total: $", getCartTotal().toFixed(2)] }) }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { variant: "outline", onClick: () => setShowCart(false), className: "flex-1", children: "Continue Shopping" }), _jsxs(Button, { className: "flex-1 gradient-bg-blue text-white hover:opacity-90", onClick: () => navigate('contact'), children: [_jsx(CreditCard, { className: "w-4 h-4 mr-2" }), "Checkout"] })] })] }))] }) }));
    return (_jsxs("div", { className: "min-h-screen", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => (_jsx(motion.div, { className: "absolute text-blue-500", style: {
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }, animate: {
                                        scale: [0.5, 1, 0.5],
                                        opacity: [0, 0.3, 0],
                                        rotate: [0, 180, 360]
                                    }, transition: {
                                        duration: 8,
                                        repeat: Infinity,
                                        delay: i * 0.5
                                    }, children: i % 4 === 0 ? _jsx(ShoppingCart, { className: "w-8 h-8" }) :
                                        i % 4 === 1 ? _jsx(Package, { className: "w-8 h-8" }) :
                                            i % 4 === 2 ? _jsx(Zap, { className: "w-8 h-8" }) :
                                                _jsx(Brain, { className: "w-8 h-8" }) }, i))) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(ShoppingCart, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Premium AI Merchandise" }), _jsx(Package, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: [_jsx("span", { className: "gradient-text-blue", children: "Delibix" }), " Store"] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Premium AI-themed merchandise and tech accessories. Show your passion for artificial intelligence with our exclusive collection." })] }), _jsx(motion.div, { className: "flex flex-wrap justify-center gap-8 pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [
                                        { icon: Truck, text: 'Free shipping' },
                                        { icon: Shield, text: 'Secure payment' },
                                        { icon: RotateCcw, text: 'Easy returns' },
                                        { icon: Users, text: '24/7 support' }
                                    ].map((item, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(item.icon, { className: "w-5 h-5 text-blue-500" }), _jsx("span", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: item.text })] }, index))) }), _jsxs(motion.div, { className: "pt-8 flex flex-col sm:flex-row gap-4 justify-center", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsxs(Button, { onClick: () => setShowCart(true), className: "h-14 px-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg relative", children: [_jsx(ShoppingCart, { className: "w-5 h-5 mr-2" }), "View Cart", getCartItemCount() > 0 && (_jsx(Badge, { className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full", children: getCartItemCount() }))] }), _jsxs(Button, { onClick: () => navigate('contact'), variant: "outline", className: "h-14 px-8 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Bulk Orders"] })] })] }) })] }), _jsx("section", { className: "px-6 py-16", children: _jsx("div", { className: "max-w-6xl mx-auto", children: _jsx("div", { className: "grid md:grid-cols-4 gap-6", children: [
                            { icon: Truck, title: 'Free Shipping', description: 'On orders over $50' },
                            { icon: RotateCcw, title: 'Easy Returns', description: '30-day return policy' },
                            { icon: Shield, title: 'Secure Payment', description: 'Protected transactions' },
                            { icon: Users, title: 'Customer Support', description: '24/7 assistance' }
                        ].map((feature, index) => (_jsxs(motion.div, { className: "glass text-center p-6 rounded-2xl card-hover", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, children: [_jsx(feature.icon, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" }), _jsx("h3", { className: "font-semibold text-slate-900 dark:text-slate-100 mb-2", children: feature.title }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: feature.description })] }, feature.title))) }) }) }), _jsx("section", { className: "px-6 pb-20", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("div", { className: "mb-8", children: _jsx("div", { className: "glass p-6 rounded-2xl", children: _jsxs("div", { className: "flex flex-col lg:flex-row gap-4 items-center justify-between", children: [_jsxs("div", { className: "flex flex-col sm:flex-row gap-4 flex-1", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" }), _jsx(Input, { placeholder: "Search products...", className: "pl-10 glass-secondary", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) })] }), _jsxs(Select, { value: selectedCategory, onValueChange: setSelectedCategory, children: [_jsx(SelectTrigger, { className: "w-48 glass-secondary", children: _jsx(SelectValue, { placeholder: "Category" }) }), _jsx(SelectContent, { children: categories.map((category) => (_jsx(SelectItem, { value: category.id, children: category.name }, category.id))) })] }), _jsxs(Select, { value: sortBy, onValueChange: setSortBy, children: [_jsx(SelectTrigger, { className: "w-48 glass-secondary", children: _jsx(SelectValue, { placeholder: "Sort by" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "featured", children: "Featured" }), _jsx(SelectItem, { value: "newest", children: "Newest" }), _jsx(SelectItem, { value: "price-low", children: "Price: Low to High" }), _jsx(SelectItem, { value: "price-high", children: "Price: High to Low" }), _jsx(SelectItem, { value: "rating", children: "Highest Rated" })] })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: viewMode === 'grid' ? 'default' : 'outline', size: "sm", onClick: () => setViewMode('grid'), children: _jsx(Grid3X3, { className: "w-4 h-4" }) }), _jsx(Button, { variant: viewMode === 'list' ? 'default' : 'outline', size: "sm", onClick: () => setViewMode('list'), children: _jsx(List, { className: "w-4 h-4" }) })] })] }) }) }), _jsx("div", { className: "mb-8", children: _jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((category) => (_jsxs(Button, { variant: selectedCategory === category.id ? 'default' : 'outline', onClick: () => setSelectedCategory(category.id), className: "flex items-center gap-2", children: [_jsx(category.icon, { className: "w-4 h-4" }), category.name] }, category.id))) }) }), _jsx(motion.div, { className: `grid gap-6 ${viewMode === 'grid'
                                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                                : 'grid-cols-1'}`, variants: containerVariants, initial: "hidden", animate: "visible", children: filteredProducts.map((product) => (_jsx(ProductCard, { product: product }, product.id))) }), filteredProducts.length === 0 && (_jsxs("div", { className: "text-center py-16", children: [_jsx(Package, { className: "w-16 h-16 text-slate-400 mx-auto mb-4" }), _jsx("h3", { className: "text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2", children: "No products found" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: "Try adjusting your search or filter criteria" })] }))] }) }), _jsx("section", { className: "px-6 pb-20", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx(Card, { className: "glass", children: _jsxs(CardContent, { className: "p-8 text-center", children: [_jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4", children: "Need Custom Merchandise?" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto", children: "Looking for bulk orders or custom branded merchandise for your company? Our team can help create personalized AI-themed products." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('contact'), className: "gradient-bg-blue text-white hover:opacity-90", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Contact Sales Team"] }), _jsxs(Button, { onClick: () => navigate('support'), variant: "outline", className: "border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20", children: [_jsx(Phone, { className: "w-4 h-4 mr-2" }), "Get Support"] })] }), _jsx("div", { className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700", children: _jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["Email: ", _jsx("span", { className: "font-medium text-blue-600 dark:text-blue-400", children: "store@delibix.com" }), " \u2022 Phone: ", _jsx("span", { className: "font-medium text-blue-600 dark:text-blue-400", children: "+62-XXX-XXXX-XXXX" })] }) })] }) }) }) }), _jsx(ProductModal, {}), _jsx(CartModal, {})] }));
}
//# sourceMappingURL=MerchandiseStorePage.js.map