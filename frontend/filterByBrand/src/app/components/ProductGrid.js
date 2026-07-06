import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';
export function ProductGrid({ products }) {
    if (products.length === 0) {
        return (_jsx("div", { className: "flex-1 flex items-center justify-center min-h-96", children: _jsxs("div", { className: "text-center space-y-4", children: [_jsx("div", { className: "text-6xl", children: "\uD83D\uDE14" }), _jsx("h2", { className: "text-xl font-medium", children: "No items match your filters" }), _jsx("p", { className: "text-muted-foreground", children: "Try adjusting your price range or selecting different brands" })] }) }));
    }
    return (_jsxs("div", { className: "flex-1 p-6", children: [_jsxs("div", { className: "mb-6", children: [_jsx("h1", { className: "text-2xl font-semibold mb-2", children: "Luxury Beauty Products" }), _jsxs("p", { className: "text-muted-foreground", children: ["Showing ", products.length, " product", products.length !== 1 ? 's' : ''] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: products.map((product) => (_jsx(ProductCard, { product: product }, product.id))) })] }));
}
//# sourceMappingURL=ProductGrid.js.map