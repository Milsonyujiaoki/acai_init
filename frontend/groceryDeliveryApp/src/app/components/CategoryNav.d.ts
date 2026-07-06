interface Category {
    id: string;
    name: string;
    icon: string;
}
interface CategoryNavProps {
    categories: Category[];
    activeCategory: string;
    onCategoryChange: (categoryId: string) => void;
}
export declare function CategoryNav({ categories, activeCategory, onCategoryChange }: CategoryNavProps): any;
export {};
//# sourceMappingURL=CategoryNav.d.ts.map