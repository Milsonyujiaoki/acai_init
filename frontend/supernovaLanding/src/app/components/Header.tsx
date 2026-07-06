import exampleImage from 'figma:asset/c387e7c747d18745266fc5adee185ce78b7c4b0b.png';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-xl font-medium text-black">
            Supernova
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Home</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">About</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Services</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Portfolio</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Contact</a>
          </nav>
          
          <button className="bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}