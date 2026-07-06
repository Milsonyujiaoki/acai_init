import { CartItem } from '../App';
interface ShoppingCartProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onRemoveItem: (productId: string) => void;
    onUpdateQuantity: (productId: string, quantity: number) => void;
    total: number;
}
export declare function ShoppingCart({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity, total, }: ShoppingCartProps): any;
export {};
//# sourceMappingURL=ShoppingCart.d.ts.map