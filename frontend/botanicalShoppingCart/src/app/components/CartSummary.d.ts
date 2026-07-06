interface CartSummaryProps {
    subtotal: number;
    promoDiscount: number;
    appliedPromo: {
        code: string;
        discount: number;
    } | null;
    tax: number;
    shipping: number;
    total: number;
    itemCount: number;
    promoCode: string;
    onPromoCodeChange: (code: string) => void;
    onApplyPromoCode: (code: string) => boolean;
    onRemovePromoCode: () => void;
}
export declare function CartSummary({ subtotal, promoDiscount, appliedPromo, tax, shipping, total, itemCount, promoCode, onPromoCodeChange, onApplyPromoCode, onRemovePromoCode }: CartSummaryProps): any;
export {};
//# sourceMappingURL=CartSummary.d.ts.map