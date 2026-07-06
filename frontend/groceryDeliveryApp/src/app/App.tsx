import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { FeaturedSection } from './components/FeaturedSection';
import { ProductGrid } from './components/ProductGrid';
import { CartSidebar, CartItem } from './components/CartSidebar';
import { Product } from './components/ProductCard';

const categories = [
  { id: 'fruits', name: 'Fruits', icon: '🍎' },
  { id: 'vegetables', name: 'Vegetables', icon: '🥕' },
  { id: 'dairy', name: 'Dairy', icon: '🥛' },
  { id: 'meat', name: 'Meat & Seafood', icon: '🥩' },
  { id: 'bakery', name: 'Bakery', icon: '🍞' },
  { id: 'snacks', name: 'Snacks', icon: '🍿' }
];

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    price: 2.99,
    originalPrice: 3.49,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop',
    category: 'fruits',
    rating: 4.8,
    reviews: 234,
    unit: 'bunch',
    inStock: true,
    organic: true
  },
  {
    id: '2',
    name: 'Fresh Strawberries',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=200&fit=crop',
    category: 'fruits',
    rating: 4.9,
    reviews: 189,
    unit: 'lb',
    inStock: true,
    organic: true
  },
  {
    id: '3',
    name: 'Organic Carrots',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=200&fit=crop',
    category: 'vegetables',
    rating: 4.7,
    reviews: 156,
    unit: 'bag',
    inStock: true,
    organic: true
  },
  {
    id: '4',
    name: 'Whole Milk',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop',
    category: 'dairy',
    rating: 4.6,
    reviews: 98,
    unit: 'gallon',
    inStock: true
  },
  {
    id: '5',
    name: 'Fresh Ground Beef',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1588347818107-3ca3ce1d79c4?w=300&h=200&fit=crop',
    category: 'meat',
    rating: 4.8,
    reviews: 145,
    unit: 'lb',
    inStock: true
  },
  {
    id: '6',
    name: 'Sourdough Bread',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop',
    category: 'bakery',
    rating: 4.9,
    reviews: 203,
    unit: 'loaf',
    inStock: true
  },
  {
    id: '7',
    name: 'Organic Apples',
    price: 3.99,
    originalPrice: 4.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=200&fit=crop',
    category: 'fruits',
    rating: 4.7,
    reviews: 167,
    unit: 'bag',
    inStock: true,
    organic: true
  },
  {
    id: '8',
    name: 'Greek Yogurt',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1571212515416-42c1b41f0c48?w=300&h=200&fit=crop',
    category: 'dairy',
    rating: 4.8,
    reviews: 221,
    unit: 'container',
    inStock: true
  },
  {
    id: '9',
    name: 'Mixed Nuts',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=300&h=200&fit=crop',
    category: 'snacks',
    rating: 4.6,
    reviews: 89,
    unit: 'bag',
    inStock: true
  },
  {
    id: '10',
    name: 'Broccoli Crown',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&h=200&fit=crop',
    category: 'vegetables',
    rating: 4.5,
    reviews: 134,
    unit: 'head',
    inStock: true
  },
  {
    id: '11',
    name: 'Salmon Fillet',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop',
    category: 'meat',
    rating: 4.9,
    reviews: 178,
    unit: 'lb',
    inStock: true
  },
  {
    id: '12',
    name: 'Croissants',
    price: 6.49,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=200&fit=crop',
    category: 'bakery',
    rating: 4.7,
    reviews: 156,
    unit: '6-pack',
    inStock: true
  }
];

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product) => {
    setCartItems(current => {
      const existingItem = current.find(item => item.product.id === product.id);
      if (existingItem) {
        return current.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...current, { product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(current => {
      const existingItem = current.find(item => item.product.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return current.map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return current.filter(item => item.product.id !== productId);
      }
    });
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(current => current.filter(item => item.product.id !== productId));
    } else {
      setCartItems(current =>
        current.map(item =>
          item.product.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems(current => current.filter(item => item.product.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {activeCategory === 'all' && !searchQuery && <FeaturedSection />}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl mb-2">
            {searchQuery 
              ? `Search results for "${searchQuery}"` 
              : activeCategory === 'all' 
                ? 'All Products' 
                : `${categories.find(c => c.id === activeCategory)?.name || ''}`
            }
          </h2>
          <p className="text-gray-600">{filteredProducts.length} products found</p>
        </div>

        <ProductGrid
          products={filteredProducts}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
        />
      </main>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
      />
    </div>
  );
}