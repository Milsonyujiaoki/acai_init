export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    image: string;
    category: string;
    description: string;
}
export interface FilterState {
    priceRange: [number, number];
    selectedBrands: string[];
}
export interface BrandCount {
    brand: string;
    count: number;
}
//# sourceMappingURL=product.d.ts.map