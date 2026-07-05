import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Architecture background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
              Supernova
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed">
              Creating exceptional architectural experiences that transform spaces and inspire communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-md hover:bg-gray-100 transition-colors">
                Explore Projects
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-black transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}