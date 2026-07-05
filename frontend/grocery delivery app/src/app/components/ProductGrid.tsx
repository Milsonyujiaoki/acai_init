import { ProductCard, Product } from './ProductCard';
import { CartItem } from './CartSidebar';

interface ProductGridProps {
  products: Product[];
  cartItems: CartItem[];
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: string) => void;
}

export function ProductGrid({ products, cartItems, onAddToCart, onRemoveFromCart }: ProductGridProps) {
  const getCartQuantity = (productId: string) => {
    const cartItem = cartItems.find(item => item.product.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg mb-2">No products found</h3>
        <p className="text-gray-500">Try searching for something else or browse different categories</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cartQuantity={getCartQuantity(product.id)}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  );
}