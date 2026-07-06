import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProductCard, Product } from './ProductCard';
import { CartItem } from './CartSidebar';
export function ProductGrid({ products, cartItems, onAddToCart, onRemoveFromCart }) {
    const getCartQuantity = (productId) => {
        const cartItem = cartItems.find(item => item.product.id === productId);
        return cartItem ? cartItem.quantity : 0;
    };
    if (products.length === 0) {
        return (_jsxs("div", { className: "text-center py-12", children: [_jsx("h3", { className: "text-lg mb-2", children: "No products found" }), _jsx("p", { className: "text-gray-500", children: "Try searching for something else or browse different categories" })] }));
    }
    return (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: products.map((product) => (_jsx(ProductCard, { product: product, cartQuantity: getCartQuantity(product.id), onAddToCart: onAddToCart, onRemoveFromCart: onRemoveFromCart }, product.id))) }));
}
//# sourceMappingURL=ProductGrid.js.map