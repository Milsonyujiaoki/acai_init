import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-8 leading-tight">
              Let's create something<br />
              extraordinary together
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Ready to transform your space? Get in touch with our team to discuss 
              your project and discover how we can bring your vision to life.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-medium text-black mb-1">Visit Our Studio</h4>
                  <p className="text-gray-600">123 Design Avenue<br />Architecture District, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-medium text-black mb-1">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567<br />Mon - Fri, 9am - 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-medium text-black mb-1">Email Us</h4>
                  <p className="text-gray-600">hello@supernova.design<br />info@supernova.design</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-light text-black mb-8">Start Your Project</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">First Name</label>
                  <input 
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/10"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                  <input 
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/10"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Project Type</label>
                <select className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/10">
                  <option>Select project type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Interior Design</option>
                  <option>Consultation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}