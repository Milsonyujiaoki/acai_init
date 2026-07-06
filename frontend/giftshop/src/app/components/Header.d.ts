interface HeaderProps {
    cartItemCount: number;
    onCartClick: () => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}
export declare function Header({ cartItemCount, onCartClick, searchQuery, onSearchChange, selectedCategory, onCategoryChange }: HeaderProps): any;
export {};
//# sourceMappingURL=Header.d.ts.map