import { FilterState, BrandCount } from '../types/product';
interface FilterSidebarProps {
    filters: FilterState;
    onFiltersChange: (filters: FilterState) => void;
    brandCounts: BrandCount[];
    onResetFilters: () => void;
}
export declare function FilterSidebar({ filters, onFiltersChange, brandCounts, onResetFilters }: FilterSidebarProps): any;
export {};
//# sourceMappingURL=FilterSidebar.d.ts.map