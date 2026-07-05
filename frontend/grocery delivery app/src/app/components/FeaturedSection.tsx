import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function FeaturedSection() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="bg-green-100 text-green-800 mb-4">Limited Time Offer</Badge>
            <h2 className="text-3xl font-bold mb-4">Fresh Organic Produce</h2>
            <p className="text-lg text-gray-600 mb-6">
              Get 20% off on all organic fruits and vegetables. Farm fresh, delivered to your door.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Shop Organic
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop"
              alt="Fresh organic produce"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
            <Badge className="absolute top-4 right-4 bg-red-500 text-white text-lg px-3 py-2">
              20% OFF
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}