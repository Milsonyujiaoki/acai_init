import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Palette, Code, Users, Zap, GitBranch, Shield, Smartphone, BarChart3 } from "lucide-react";
const features = [
    {
        icon: Palette,
        title: "Design Tokens",
        description: "Centralized design tokens for colors, typography, spacing, and more. Keep your brand consistent across all platforms.",
        badge: "Core"
    },
    {
        icon: Code,
        title: "Component Library",
        description: "Pre-built, customizable components with comprehensive documentation and code examples.",
        badge: "Core"
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Real-time collaboration tools for designers and developers. Comment, review, and iterate together.",
        badge: "Pro"
    },
    {
        icon: Zap,
        title: "Auto-Generation",
        description: "AI-powered component and token generation from your existing designs. Save hours of manual work.",
        badge: "AI"
    },
    {
        icon: GitBranch,
        title: "Version Control",
        description: "Track changes, manage releases, and maintain multiple versions of your design system.",
        badge: "Pro"
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "SOC 2 compliant with enterprise-grade security features and single sign-on support.",
        badge: "Enterprise"
    },
    {
        icon: Smartphone,
        title: "Multi-Platform",
        description: "Export tokens and components for web, mobile, and native platforms. One source of truth.",
        badge: "Core"
    },
    {
        icon: BarChart3,
        title: "Analytics & Insights",
        description: "Track component usage, adoption metrics, and design system health across your organization.",
        badge: "Pro"
    }
];
export function FeaturesSection() {
    return (_jsx("section", { id: "features", className: "py-20 bg-muted/50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4", children: "Everything you need for design systems" }), _jsx("p", { className: "max-w-2xl mx-auto text-lg text-muted-foreground", children: "From design tokens to component libraries, our platform provides all the tools you need to build and maintain scalable design systems." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: features.map((feature, index) => (_jsxs(Card, { className: "relative", children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx(feature.icon, { className: "h-8 w-8 text-primary" }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: feature.badge })] }), _jsx(CardTitle, { className: "text-lg", children: feature.title })] }), _jsx(CardContent, { children: _jsx(CardDescription, { children: feature.description }) })] }, index))) })] }) }));
}
//# sourceMappingURL=FeaturesSection.js.map