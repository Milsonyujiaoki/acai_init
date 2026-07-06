import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 leading-tight">
            We design spaces<br />
            that inspire
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of visionary architects and designers create spaces that blend functionality 
            with aesthetics, pushing the boundaries of modern architecture to deliver extraordinary results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Modern interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Architectural detail"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Modern building exterior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="text-4xl font-light text-black mb-4">250+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-black mb-4">15+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-black mb-4">50+</div>
            <p className="text-gray-600">Awards Won</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-black mb-4">100%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}