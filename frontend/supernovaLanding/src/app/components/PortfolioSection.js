import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ImageWithFallback } from "./figma/ImageWithFallback";
export function PortfolioSection() {
    const projects = [
        {
            title: "Modern Villa",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Corporate Headquarters",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Urban Loft",
            category: "Interior",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Contemporary Office",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Luxury Residence",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Creative Studio",
            category: "Interior",
            image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];
    return (_jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("p", { className: "text-gray-500 text-sm uppercase tracking-wider mb-4", children: "Portfolio" }), _jsx("h2", { className: "text-4xl md:text-5xl font-light text-black mb-8 leading-tight", children: "Featured Projects" }), _jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed", children: "Explore our collection of award-winning projects that showcase our commitment to exceptional design and architectural innovation." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", children: projects.map((project, index) => (_jsxs("div", { className: "group cursor-pointer", children: [_jsx("div", { className: "aspect-[4/3] mb-6 overflow-hidden rounded-lg", children: _jsx(ImageWithFallback, { src: project.image, alt: project.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }), _jsx("div", { className: "text-sm text-gray-500 mb-2", children: project.category }), _jsx("h3", { className: "text-xl font-light text-black group-hover:text-gray-600 transition-colors", children: project.title })] }, index))) }), _jsx("div", { className: "text-center", children: _jsx("button", { className: "bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors", children: "View All Projects" }) })] }) }));
}
//# sourceMappingURL=PortfolioSection.js.map