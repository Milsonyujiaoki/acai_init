import { CartItemType } from "./CartPage";
interface CartItemProps {
    item: CartItemType;
    onUpdateQuantity: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}
export declare function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps): any;
export {};
//# sourceMappingURL=CartItem.d.ts.map