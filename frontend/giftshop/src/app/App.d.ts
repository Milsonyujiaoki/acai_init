export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    rating: number;
    inStock: boolean;
}
export interface CartItem extends Product {
    quantity: number;
}
export default function App(): any;
//# sourceMappingURL=App.d.ts.map