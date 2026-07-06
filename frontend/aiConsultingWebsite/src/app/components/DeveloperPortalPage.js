"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Code, Terminal, BookOpen, Github, Zap, Cpu, Database, Cloud, Key, Shield, Monitor, Globe, ArrowRight, Star, Download, Copy, Check, ExternalLink, PlayCircle, FileText, Search, Filter, Brain, Bot, Network, Settings, Lightbulb, Target, Users, Award, Activity, TrendingUp, Eye, Calendar, MessageSquare, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
const codeExamples = [
    {
        id: "text-analysis",
        title: "Text Sentiment Analysis",
        description: "Analyze sentiment in text using our AI API",
        language: "Python",
        code: `import requests

api_key = "your_api_key_here"
base_url = "https://api.delibix.com/v1"

def analyze_sentiment(text):
    headers = {"Authorization": f"Bearer {api_key}"}
    payload = {"text": text, "language": "id"}
    
    response = requests.post(f"{base_url}/analyze/sentiment", 
                           headers=headers, json=payload)
    return response.json()

result = analyze_sentiment("Saya sangat senang!")
print(f"Sentiment: {result['sentiment']}")`,
        category: "Text Analysis",
        complexity: "beginner",
        tags: ["sentiment", "nlp"]
    },
    {
        id: "image-classification",
        title: "Image Classification",
        description: "Classify images using computer vision",
        language: "JavaScript",
        code: `const DelibixAI = require('@delibix/ai-sdk');

const client = new DelibixAI({
  apiKey: process.env.DELIBIX_API_KEY
});

async function classifyImage(imageUrl) {
  const result = await client.vision.classify({
    image: imageUrl,
    model: 'general-v3'
  });
  
  return result.predictions;
}

classifyImage('https://example.com/image.jpg')
  .then(predictions => console.log(predictions));`,
        category: "Computer Vision",
        complexity: "intermediate",
        tags: ["image", "classification"]
    }
];
const sdkResources = [
    {
        name: "Python SDK",
        description: "Comprehensive Python library",
        language: "Python",
        version: "v2.1.0",
        icon: Code,
        downloadUrl: "https://pypi.org/project/delibix-ai/",
        documentation: "/docs/python-sdk",
        examples: 45
    },
    {
        name: "JavaScript SDK",
        description: "Modern JS/TS SDK",
        language: "JavaScript",
        version: "v1.8.3",
        icon: Globe,
        downloadUrl: "https://npmjs.com/package/@delibix/ai-sdk",
        documentation: "/docs/js-sdk",
        examples: 32
    }
];
const apiEndpoints = [
    {
        method: "POST",
        endpoint: "/v1/analyze/text",
        description: "Analyze text for sentiment and entities",
        parameters: [
            { name: "text", type: "string", required: true, description: "Text to analyze" },
            { name: "language", type: "string", required: false, description: "Language code" }
        ],
        response: "{ sentiment: string, entities: array, confidence: number }",
        example: `{ "text": "Great product!", "language": "en" }`
    }
];
export function DeveloperPortalPage({ navigate }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("All Languages");
    const [copiedCode, setCopiedCode] = useState(null);
    const copyCode = (code, id) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(null), 2000);
    };
    const getComplexityColor = (complexity) => {
        switch (complexity) {
            case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
            case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, className: "space-y-8", children: [_jsxs("div", { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3", children: [_jsx(Code, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "Developer Portal" })] }), _jsxs("h1", { className: "text-5xl md:text-7xl font-bold", children: ["Build with ", _jsx("span", { className: "gradient-text-blue", children: "AI" })] }), _jsx("p", { className: "text-xl max-w-4xl mx-auto text-foreground-muted", children: "Powerful APIs and SDKs to integrate AI into your applications." }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", children: [
                                        { label: "Developers", value: "10,000+" },
                                        { label: "API Calls", value: "50M+" },
                                        { label: "SDKs", value: "4" },
                                        { label: "Uptime", value: "99.9%" }
                                    ].map((stat, index) => (_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center", children: [_jsx("div", { className: "text-2xl font-bold gradient-text-blue", children: stat.value }), _jsx("div", { className: "text-sm text-foreground-muted", children: stat.label })] }, index))) }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center pt-8", children: [_jsxs(Button, { size: "lg", className: "gradient-bg-blue text-white", children: ["Get API Key ", _jsx(ArrowRight, { className: "w-5 h-5 ml-2" })] }), _jsxs(Button, { variant: "outline", size: "lg", onClick: () => navigate('documentation'), children: [_jsx(BookOpen, { className: "w-5 h-5 mr-2" }), " View Docs"] })] })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsxs(Tabs, { defaultValue: "quickstart", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 mb-12", children: [_jsx(TabsTrigger, { value: "quickstart", children: "Quick Start" }), _jsx(TabsTrigger, { value: "sdks", children: "SDKs" }), _jsx(TabsTrigger, { value: "examples", children: "Examples" }), _jsx(TabsTrigger, { value: "api", children: "API Reference" })] }), _jsx(TabsContent, { value: "quickstart", children: _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "mb-4", children: "Get Started in Minutes" }), _jsx("p", { className: "text-lg text-foreground-muted max-w-3xl mx-auto", children: "Follow these simple steps to start building with Delibix AI." })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
                                                { step: 1, title: "Get API Key", description: "Sign up for free API access", icon: Key },
                                                { step: 2, title: "Install SDK", description: "Choose your language and install", icon: Download },
                                                { step: 3, title: "Start Building", description: "Use examples and documentation", icon: Target }
                                            ].map((item, index) => (_jsxs(Card, { className: "glass p-8 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx(item.icon, { className: "w-8 h-8 text-blue-600 dark:text-blue-400" }) }), _jsx("div", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4", children: item.step }), _jsx("h3", { className: "mb-3", children: item.title }), _jsx("p", { className: "text-foreground-muted", children: item.description })] }, item.step))) })] }) }), _jsx(TabsContent, { value: "sdks", children: _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: sdkResources.map((sdk, index) => (_jsxs(Card, { className: "glass p-8", children: [_jsxs("div", { className: "flex items-center gap-4 mb-6", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center", children: _jsx(sdk.icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }), _jsxs("div", { children: [_jsx("h3", { children: sdk.name }), _jsx("p", { className: "text-sm text-foreground-muted", children: sdk.version })] })] }), _jsx("p", { className: "text-foreground-muted mb-6", children: sdk.description }), _jsxs("div", { className: "flex gap-3", children: [_jsxs(Button, { className: "gradient-bg-blue text-white", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Install"] }), _jsxs(Button, { variant: "outline", children: [_jsx(BookOpen, { className: "w-4 h-4 mr-2" }), "Docs"] })] })] }, index))) }) }), _jsx(TabsContent, { value: "examples", children: _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "flex gap-4 mb-8", children: [_jsx(Input, { placeholder: "Search examples...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "flex-1" }), _jsxs(Select, { value: selectedLanguage, onValueChange: setSelectedLanguage, children: [_jsx(SelectTrigger, { className: "w-48", children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "All Languages", children: "All Languages" }), _jsx(SelectItem, { value: "Python", children: "Python" }), _jsx(SelectItem, { value: "JavaScript", children: "JavaScript" })] })] })] }), _jsx("div", { className: "space-y-6", children: codeExamples.map((example, index) => (_jsxs(Card, { className: "glass p-8", children: [_jsxs("div", { className: "flex justify-between items-start mb-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-2", children: example.title }), _jsx("p", { className: "text-foreground-muted mb-4", children: example.description }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Badge, { variant: "outline", children: example.language }), _jsx(Badge, { className: getComplexityColor(example.complexity), children: example.complexity })] })] }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => copyCode(example.code, example.id), children: copiedCode === example.id ? (_jsx(Check, { className: "w-4 h-4" })) : (_jsx(Copy, { className: "w-4 h-4" })) })] }), _jsx("div", { className: "bg-slate-100 dark:bg-slate-800 rounded-lg p-4", children: _jsx("pre", { className: "text-sm overflow-x-auto", children: _jsx("code", { children: example.code }) }) })] }, example.id))) })] }) }), _jsx(TabsContent, { value: "api", children: _jsx("div", { className: "space-y-6", children: apiEndpoints.map((endpoint, index) => (_jsxs(Card, { className: "glass p-8", children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx(Badge, { className: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400", children: endpoint.method }), _jsx("code", { className: "text-lg font-mono", children: endpoint.endpoint })] }), _jsx("p", { className: "text-foreground-muted mb-6", children: endpoint.description }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "mb-3", children: "Parameters" }), _jsx("div", { className: "space-y-2", children: endpoint.parameters.map((param, idx) => (_jsxs("div", { className: "flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded", children: [_jsx("span", { className: "font-mono text-sm", children: param.name }), _jsx("span", { className: "text-sm text-foreground-muted", children: param.type })] }, idx))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "mb-3", children: "Example Request" }), _jsx("div", { className: "bg-slate-100 dark:bg-slate-800 rounded p-4", children: _jsx("pre", { className: "text-sm", children: _jsx("code", { children: endpoint.example }) }) })] })] })] }, index))) }) })] }), _jsxs(Card, { className: "glass p-8 text-center mt-20", children: [_jsx("h2", { className: "mb-6", children: "Ready to Build Something Amazing?" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8 max-w-2xl mx-auto", children: "Join thousands of developers building the next generation of AI applications." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", className: "gradient-bg-blue text-white", children: [_jsx(Key, { className: "w-5 h-5 mr-2" }), "Get Free API Key"] }), _jsxs(Button, { variant: "outline", size: "lg", children: [_jsx(Github, { className: "w-5 h-5 mr-2" }), "View on GitHub"] })] })] })] })] }));
}
//# sourceMappingURL=DeveloperPortalPage.js.map