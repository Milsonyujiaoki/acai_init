import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ImageWithFallback } from "./figma/ImageWithFallback";
export function TeamSection() {
    const team = [
        {
            name: "Sarah Chen",
            role: "Principal Architect",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Leading architectural innovation with 15+ years of experience in sustainable design."
        },
        {
            name: "Marcus Rodriguez",
            role: "Design Director",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Specializing in contemporary residential and commercial architecture."
        },
        {
            name: "Elena Volkov",
            role: "Interior Designer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Creating beautiful and functional interior spaces that enhance daily life."
        },
        {
            name: "David Park",
            role: "Project Manager",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Ensuring seamless project delivery from concept to completion."
        }
    ];
    return (_jsx("section", { className: "py-20 bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("p", { className: "text-gray-500 text-sm uppercase tracking-wider mb-4", children: "Our Team" }), _jsx("h2", { className: "text-4xl md:text-5xl font-light text-black mb-8 leading-tight", children: "Meet the experts" }), _jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed", children: "Our passionate team of architects, designers, and project managers brings decades of combined experience to every project." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: team.map((member, index) => (_jsxs("div", { className: "text-center group", children: [_jsx("div", { className: "aspect-square mb-6 overflow-hidden rounded-lg", children: _jsx(ImageWithFallback, { src: member.image, alt: member.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }), _jsx("h3", { className: "text-xl font-light text-black mb-2", children: member.name }), _jsx("p", { className: "text-gray-500 mb-4", children: member.role }), _jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: member.bio })] }, index))) })] }) }));
}
//# sourceMappingURL=TeamSection.js.map