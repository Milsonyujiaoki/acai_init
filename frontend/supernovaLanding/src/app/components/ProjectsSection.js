import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
export function ProjectsSection() {
    const projects = [
        {
            title: "Modern Office Complex",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Luxury Residential Tower",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Shopping Center",
            category: "Retail",
            image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Infrastructure Bridge",
            category: "Infrastructure",
            image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Custom Family Home",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Industrial Facility",
            category: "Industrial",
            image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];
    return (_jsx("section", { id: "projects", className: "py-20 bg-gray-50", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-light text-black mb-6", children: "Featured Projects" }), _jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Explore our portfolio of successful construction projects across different sectors." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", children: projects.map((project, index) => (_jsxs("div", { className: "group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: [_jsx("div", { className: "aspect-[4/3] overflow-hidden", children: _jsx(ImageWithFallback, { src: project.image, alt: project.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }) }), _jsxs("div", { className: "p-6", children: [_jsx("div", { className: "text-sm text-gray-500 mb-2", children: project.category }), _jsx("h3", { className: "text-lg font-medium text-black", children: project.title })] })] }, index))) }), _jsx("div", { className: "text-center", children: _jsx(Button, { className: "bg-black text-white hover:bg-gray-800 px-8", children: "View All Projects" }) })] }) }));
}
//# sourceMappingURL=ProjectsSection.js.map