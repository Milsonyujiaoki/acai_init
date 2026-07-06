import { Plus, Minus, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

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

export function ProductCard({ product, cartQuantity, onAddToCart, onRemoveFromCart }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="relative mb-3">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-32 object-cover rounded-lg"
          />
          {product.organic && (
            <Badge className="absolute top-2 left-2 bg-green-100 text-green-800">
              Organic
            </Badge>
          )}
          {product.originalPrice && (
            <Badge className="absolute top-2 right-2 bg-red-100 text-red-800">
              Sale
            </Badge>
          )}
        </div>

        <h3 className="mb-2 line-clamp-2">{product.name}</h3>

        <div className="flex items-center mb-2 text-sm text-gray-600">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
          <span>{product.rating}</span>
          <span className="mx-1">•</span>
          <span>{product.reviews} reviews</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-sm text-gray-500">per {product.unit}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {cartQuantity === 0 ? (
            <Button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className="w-full bg-green-600 hover:bg-green-700"
              size="sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          ) : (
            <div className="flex items-center justify-center space-x-3 w-full">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onRemoveFromCart(product.id)}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="font-medium min-w-[20px] text-center">{cartQuantity}</span>
              <Button
                size="sm"
                onClick={() => onAddToCart(product)}
                className="h-8 w-8 p-0 bg-green-600 hover:bg-green-700"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}