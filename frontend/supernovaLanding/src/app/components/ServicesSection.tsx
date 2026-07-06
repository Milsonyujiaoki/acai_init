import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServicesSection() {
  const services = [
    {
      title: "Residential Design",
      description: "Custom homes that reflect your lifestyle and personality, designed with attention to every detail.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Commercial Architecture",
      description: "Innovative commercial spaces that enhance productivity and create memorable experiences.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Interior Design",
      description: "Complete interior solutions that transform spaces into functional works of art.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-light text-black mb-8 leading-tight">
            What we do
          </h2>
        </div>
        
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-light text-black mb-6">{service.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>
                <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
              <div className={`aspect-[4/3] relative overflow-hidden rounded-lg ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <ImageWithFallback 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}