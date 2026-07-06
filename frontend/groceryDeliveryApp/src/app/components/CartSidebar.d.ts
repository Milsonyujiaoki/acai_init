import { Product } from './ProductCard';
export interface CartItem {
    product: Product;
    quantity: number;
}
interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onUpdateQuantity: (productId: string, quantity: number) => void;
    onRemoveItem: (productId: string) => void;
}
export declare function CartSidebar({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartSidebarProps): any;
export {};
//# sourceMappingURL=CartSidebar.d.ts.map