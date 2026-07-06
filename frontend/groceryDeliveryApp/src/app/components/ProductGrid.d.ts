import { Product } from './ProductCard';
import { CartItem } from './CartSidebar';
interface ProductGridProps {
    products: Product[];
    cartItems: CartItem[];
    onAddToCart: (product: Product) => void;
    onRemoveFromCart: (productId: string) => void;
}
export declare function ProductGrid({ products, cartItems, onAddToCart, onRemoveFromCart }: ProductGridProps): any;
export {};
//# sourceMappingURL=ProductGrid.d.ts.map