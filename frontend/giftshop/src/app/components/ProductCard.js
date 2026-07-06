import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Product } from '@/App';
export function ProductCard({ product, onAddToCart }) {
    return (_jsxs(Card, { className: "group hover:shadow-lg transition-shadow", children: [_jsxs(CardContent, { className: "p-0", children: [_jsxs("div", { className: "relative overflow-hidden rounded-t-lg", children: [_jsx(ImageWithFallback, { src: product.image, alt: product.name, className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" }), !product.inStock && (_jsx(Badge, { variant: "destructive", className: "absolute top-2 left-2", children: "Out of Stock" }))] }), _jsxs("div", { className: "p-4 space-y-2", children: [_jsx("h3", { className: "font-medium line-clamp-2", children: product.name }), _jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: product.description }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: `h-3 w-3 ${i < Math.floor(product.rating)
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-300'}` }, i))) }), _jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: ["(", product.rating, ")"] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "text-lg font-medium", children: ["$", product.price.toFixed(2)] }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: product.category })] })] })] }), _jsx(CardFooter, { className: "p-4 pt-0", children: _jsxs(Button, { onClick: () => onAddToCart(product), disabled: !product.inStock, className: "w-full", size: "sm", children: [_jsx(ShoppingCart, { className: "h-4 w-4 mr-2" }), product.inStock ? 'Add to Cart' : 'Out of Stock'] }) })] }));
}
//# sourceMappingURL=ProductCard.js.map