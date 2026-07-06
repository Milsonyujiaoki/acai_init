import { FilterSidebar } from './components/FilterSidebar';
import { ProductGrid } from './components/ProductGrid';
import { useProductFilters } from './hooks/useProductFilters';
import { products } from './data/products';

export default function App() {
  const {
    filters,
    setFilters,
    filteredProducts,
    brandCounts,
    resetFilters
  } = useProductFilters(products);

  return (
    <div className="min-h-screen bg-background flex">
      <FilterSidebar
        filters={filters}
        onFiltersChange={setFilters}
        brandCounts={brandCounts}
        onResetFilters={resetFilters}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}