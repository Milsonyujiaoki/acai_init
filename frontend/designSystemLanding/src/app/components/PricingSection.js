import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";
const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "Perfect for small teams and personal projects",
        features: [
            "Up to 3 team members",
            "Basic design tokens",
            "Component library",
            "Community support",
            "Basic documentation"
        ],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Pro",
        price: "$29",
        description: "Best for growing teams and organizations",
        features: [
            "Up to 25 team members",
            "Advanced design tokens",
            "Full component library",
            "Team collaboration tools",
            "Version control",
            "Priority support",
            "Usage analytics"
        ],
        cta: "Start Free Trial",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations with advanced needs",
        features: [
            "Unlimited team members",
            "Enterprise security",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom training",
            "White-label options"
        ],
        cta: "Contact Sales",
        popular: false
    }
];
export function PricingSection() {
    return (_jsx("section", { id: "pricing", className: "py-20", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4", children: "Simple, transparent pricing" }), _jsx("p", { className: "max-w-2xl mx-auto text-lg text-muted-foreground", children: "Choose the plan that fits your team size and needs. Start free and scale as you grow." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: plans.map((plan, index) => (_jsxs(Card, { className: `relative ${plan.popular ? 'border-primary shadow-lg' : ''}`, children: [plan.popular && (_jsx(Badge, { className: "absolute -top-3 left-1/2 transform -translate-x-1/2", children: "Most Popular" })), _jsxs(CardHeader, { className: "text-center pb-8", children: [_jsx(CardTitle, { className: "text-xl mb-2", children: plan.name }), _jsxs("div", { className: "mb-2", children: [_jsx("span", { className: "text-3xl font-bold", children: plan.price }), plan.price !== "Free" && plan.price !== "Custom" && (_jsx("span", { className: "text-muted-foreground", children: "/month" }))] }), _jsx(CardDescription, { children: plan.description })] }), _jsxs(CardContent, { children: [_jsx("ul", { className: "space-y-3 mb-8", children: plan.features.map((feature, featureIndex) => (_jsxs("li", { className: "flex items-center", children: [_jsx(Check, { className: "h-4 w-4 text-green-500 mr-3 flex-shrink-0" }), _jsx("span", { className: "text-sm", children: feature })] }, featureIndex))) }), _jsx(Button, { className: "w-full", variant: plan.popular ? "default" : "outline", children: plan.cta })] })] }, index))) })] }) }));
}
//# sourceMappingURL=PricingSection.js.map