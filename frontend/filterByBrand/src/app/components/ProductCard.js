import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Product } from '../types/product';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
export function ProductCard({ product }) {
    return (_jsxs(Card, { className: "overflow-hidden hover:shadow-lg transition-shadow", children: [_jsx("div", { className: "aspect-square overflow-hidden", children: _jsx(ImageWithFallback, { src: product.image, alt: product.name, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300" }) }), _jsxs(CardContent, { className: "p-4 space-y-2", children: [_jsx("div", { className: "flex items-start justify-between", children: _jsxs("div", { className: "space-y-1 flex-1", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: product.brand }), _jsx("h3", { className: "font-medium leading-tight", children: product.name }), _jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: product.description })] }) }), _jsxs("div", { className: "flex items-center justify-between pt-2", children: [_jsxs("span", { className: "text-lg font-semibold", children: ["$", product.price] }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: product.category })] })] })] }));
}
//# sourceMappingURL=ProductCard.js.map