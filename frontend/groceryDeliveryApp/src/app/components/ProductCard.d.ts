export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    rating: number;
    reviews: number;
    unit: string;
    inStock: boolean;
    organic?: boolean;
}
interface ProductCardProps {
    product: Product;
    cartQuantity: number;
    onAddToCart: (product: Product) => void;
    onRemoveFromCart: (productId: string) => void;
}
export declare function ProductCard({ product, cartQuantity, onAddToCart, onRemoveFromCart }: ProductCardProps): any;
export {};
//# sourceMappingURL=ProductCard.d.ts.map