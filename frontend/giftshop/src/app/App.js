import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ShoppingCart } from './components/ShoppingCart';
import { Footer } from './components/Footer';
export default function App() {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const addToCart = (product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item => item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };
    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };
    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCartItems(prev => prev.map(item => item.id === productId ? { ...item, quantity } : item));
    };
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(Header, { cartItemCount: cartItemCount, onCartClick: () => setIsCartOpen(true), searchQuery: searchQuery, onSearchChange: setSearchQuery, selectedCategory: selectedCategory, onCategoryChange: setSelectedCategory }), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(ProductGrid, { onAddToCart: addToCart, selectedCategory: selectedCategory, searchQuery: searchQuery })] }), _jsx(Footer, {}), _jsx(ShoppingCart, { isOpen: isCartOpen, onClose: () => setIsCartOpen(false), items: cartItems, onRemoveItem: removeFromCart, onUpdateQuantity: updateQuantity, total: cartTotal })] }));
}
//# sourceMappingURL=App.js.map