import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FilterSidebar } from './components/FilterSidebar';
import { ProductGrid } from './components/ProductGrid';
import { useProductFilters } from './hooks/useProductFilters';
import { products } from './data/products';
export default function App() {
    const { filters, setFilters, filteredProducts, brandCounts, resetFilters } = useProductFilters(products);
    return (_jsxs("div", { className: "min-h-screen bg-background flex", children: [_jsx(FilterSidebar, { filters: filters, onFiltersChange: setFilters, brandCounts: brandCounts, onResetFilters: resetFilters }), _jsx(ProductGrid, { products: filteredProducts })] }));
}
//# sourceMappingURL=App.js.map