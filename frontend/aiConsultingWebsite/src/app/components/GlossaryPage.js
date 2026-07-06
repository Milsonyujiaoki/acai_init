"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, Search, ArrowRight, Hash, Filter, Star, Brain, Zap, Target, Settings, Users, TrendingUp, ChevronRight, ExternalLink, Copy, Check, Info, AlertCircle, Lightbulb, Code, Database, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
const categories = [
    {
        id: "machine-learning",
        name: "Machine Learning",
        description: "Core ML concepts, algorithms, and methodologies",
        icon: Brain,
        color: "blue",
        count: 45
    },
    {
        id: "deep-learning",
        name: "Deep Learning",
        description: "Neural networks, architectures, and deep learning concepts",
        icon: Zap,
        color: "purple",
        count: 38
    },
    {
        id: "data-science",
        name: "Data Science",
        description: "Data analysis, statistics, and data processing terms",
        icon: Database,
        color: "green",
        count: 42
    },
    {
        id: "ai-ethics",
        name: "AI Ethics",
        description: "Responsible AI, bias, fairness, and governance",
        icon: Target,
        color: "orange",
        count: 28
    },
    {
        id: "technical-implementation",
        name: "Technical Implementation",
        description: "Development, deployment, and infrastructure terms",
        icon: Settings,
        color: "red",
        count: 35
    },
    {
        id: "business-ai",
        name: "Business & AI",
        description: "ROI, strategy, and business transformation concepts",
        icon: TrendingUp,
        color: "yellow",
        count: 31
    }
];
const featuredTerms = [
    {
        id: "artificial-intelligence",
        term: "Artificial Intelligence (AI)",
        definition: "The simulation of human intelligence in machines that are programmed to think and learn like humans.",
        detailedExplanation: "Artificial Intelligence is a broad field of computer science focused on creating machines capable of performing tasks that typically require human intelligence. This includes learning, reasoning, problem-solving, perception, and language understanding. AI systems can be categorized into narrow AI (designed for specific tasks) and general AI (theoretical human-level intelligence across all domains).",
        category: "Machine Learning",
        difficulty: "beginner",
        synonyms: ["AI", "Machine Intelligence", "Cognitive Computing"],
        relatedTerms: ["Machine Learning", "Deep Learning", "Neural Networks", "Automation"],
        examples: [
            "Virtual assistants like Siri and Alexa",
            "Recommendation systems on Netflix and Amazon",
            "Autonomous vehicles",
            "Medical diagnosis systems"
        ],
        tags: ["ai", "intelligence", "automation", "cognitive"],
        isPopular: true,
        isTrending: true
    },
    {
        id: "machine-learning",
        term: "Machine Learning (ML)",
        definition: "A subset of AI that enables computers to learn and improve from experience without being explicitly programmed.",
        detailedExplanation: "Machine Learning is a method of data analysis that automates analytical model building. It uses algorithms that iteratively learn from data, allowing computers to find hidden insights without being explicitly programmed where to look. ML algorithms build mathematical models based on training data to make predictions or decisions.",
        category: "Machine Learning",
        difficulty: "beginner",
        synonyms: ["ML", "Statistical Learning", "Pattern Recognition"],
        relatedTerms: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Neural Networks"],
        examples: [
            "Email spam detection",
            "Image recognition",
            "Predictive text on smartphones",
            "Fraud detection in banking"
        ],
        tags: ["ml", "learning", "algorithms", "prediction"],
        isPopular: true
    },
    {
        id: "neural-network",
        term: "Neural Network",
        definition: "A computing system inspired by biological neural networks that processes information using interconnected nodes (neurons).",
        detailedExplanation: "Neural networks are computing systems vaguely inspired by the biological neural networks in animal brains. They consist of layers of interconnected nodes (artificial neurons) that process and transmit information. Each connection has a weight that adjusts during learning, and the network learns to recognize patterns and make decisions through training on data.",
        category: "Deep Learning",
        difficulty: "intermediate",
        synonyms: ["Artificial Neural Network", "ANN", "Neural Net"],
        relatedTerms: ["Deep Learning", "Backpropagation", "Activation Function", "Perceptron"],
        examples: [
            "Image classification systems",
            "Natural language processing",
            "Speech recognition",
            "Game-playing AI like AlphaGo"
        ],
        tags: ["neural", "network", "deep-learning", "nodes"],
        isPopular: true
    },
    {
        id: "deep-learning",
        term: "Deep Learning",
        definition: "A subset of machine learning using neural networks with multiple layers to model and understand complex patterns.",
        detailedExplanation: "Deep Learning is a subset of machine learning that uses artificial neural networks with multiple hidden layers (hence 'deep') to model and understand complex patterns in data. These deep networks can automatically discover representations needed for feature detection or classification from raw data, eliminating the need for manual feature engineering.",
        category: "Deep Learning",
        difficulty: "intermediate",
        synonyms: ["Deep Neural Networks", "DNN", "Hierarchical Learning"],
        relatedTerms: ["Convolutional Neural Networks", "Recurrent Neural Networks", "Transformer", "Gradient Descent"],
        examples: [
            "Computer vision applications",
            "Natural language translation",
            "Voice assistants",
            "Medical image analysis"
        ],
        tags: ["deep", "learning", "neural", "layers"],
        isTrending: true
    },
    {
        id: "algorithm",
        term: "Algorithm",
        definition: "A set of rules or instructions given to an AI system to help it learn on its own and make decisions.",
        detailedExplanation: "An algorithm is a finite sequence of well-defined instructions for solving a problem or performing a computation. In AI and machine learning, algorithms are the mathematical procedures that process data to identify patterns, make predictions, or perform specific tasks. Different algorithms are suited for different types of problems and data.",
        category: "Machine Learning",
        difficulty: "beginner",
        synonyms: ["Procedure", "Method", "Process"],
        relatedTerms: ["Model", "Training", "Optimization", "Hyperparameters"],
        examples: [
            "Linear regression for prediction",
            "Decision trees for classification",
            "K-means for clustering",
            "Gradient descent for optimization"
        ],
        tags: ["algorithm", "rules", "instructions", "computation"],
        isPopular: true
    },
    {
        id: "bias",
        term: "Bias (in AI)",
        definition: "Systematic errors or prejudices in AI systems that can lead to unfair or discriminatory outcomes.",
        detailedExplanation: "Bias in AI refers to systematic errors that can occur when algorithms produce results that are systematically prejudiced due to erroneous assumptions in the machine learning process. This can happen due to biased training data, algorithmic design choices, or implementation decisions, leading to unfair treatment of certain groups or individuals.",
        category: "AI Ethics",
        difficulty: "intermediate",
        synonyms: ["Algorithmic Bias", "Model Bias", "Statistical Bias"],
        relatedTerms: ["Fairness", "Explainable AI", "Ethical AI", "Discrimination"],
        examples: [
            "Hiring algorithms favoring certain demographics",
            "Facial recognition performing poorly on darker skin",
            "Credit scoring algorithms with racial bias",
            "Search results showing gender stereotypes"
        ],
        tags: ["bias", "fairness", "ethics", "discrimination"],
        isTrending: true
    }
];
const alphabetSections = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const glossaryStats = [
    { label: "Total Terms", value: "219", change: "+15 this month" },
    { label: "Categories", value: "6", change: "Comprehensive coverage" },
    { label: "Difficulty Levels", value: "3", change: "Beginner to Advanced" },
    { label: "Monthly Views", value: "28K+", change: "+22% growth" }
];
export function GlossaryPage({ navigate }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedDifficulty, setSelectedDifficulty] = useState("all");
    const [selectedLetter, setSelectedLetter] = useState("all");
    const [copiedTerm, setCopiedTerm] = useState(null);
    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'beginner': return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
            case 'intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'advanced': return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
            default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400';
        }
    };
    const copyToClipboard = (text, termId) => {
        navigator.clipboard.writeText(text);
        setCopiedTerm(termId);
        setTimeout(() => setCopiedTerm(null), 2000);
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative py-32 lg:py-40 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-blue-100/40 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-800/30" }), _jsx("div", { className: "absolute inset-0 opacity-5 dark:opacity-10", children: Array.from({ length: 12 }, (_, i) => {
                                    const icons = [BookOpen, Hash, Brain, Lightbulb, Code, Globe];
                                    const IconComponent = icons[i % icons.length];
                                    return (_jsx(motion.div, { className: "absolute", style: {
                                            left: `${15 + (i % 4) * 20}%`,
                                            top: `${15 + Math.floor(i / 4) * 25}%`,
                                        }, animate: {
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, -5, 0],
                                            opacity: [0.3, 0.7, 0.3]
                                        }, transition: {
                                            duration: 6,
                                            repeat: Infinity,
                                            delay: i * 0.4
                                        }, children: _jsx(IconComponent, { className: "w-12 h-12 text-blue-500" }) }, i));
                                }) })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsxs(motion.div, { className: "inline-flex items-center gap-3 glass-secondary rounded-full px-6 py-3 shadow-lg", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 }, children: [_jsx(BookOpen, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }), _jsx("span", { className: "text-sm font-semibold text-blue-600 dark:text-blue-300", children: "219 AI Terms Defined" }), _jsx(Star, { className: "w-4 h-4 text-amber-500" })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-slate-100", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: ["AI ", _jsx("span", { className: "gradient-text-blue", children: "Glossary" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-slate-500 dark:text-slate-400", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: "Comprehensive dictionary of artificial intelligence, machine learning, and data science terms explained in clear, accessible language." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: glossaryStats.map((stat, index) => (_jsxs("div", { className: "glass-heavy rounded-2xl p-6 text-center border-blue-200/50 dark:border-blue-400/20", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold gradient-text-blue mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-slate-600 dark:text-slate-400 mb-2", children: stat.label }), _jsx("div", { className: "text-xs text-foreground-muted", children: stat.change })] }, index))) }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center pt-8", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, children: [_jsx(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300", onClick: () => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' }), children: _jsxs("span", { className: "flex items-center gap-3", children: ["Explore Terms", _jsx(ArrowRight, { className: "w-5 h-5" })] }) }), _jsx(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-xl border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-400/30 dark:text-blue-300 dark:hover:bg-blue-400/10", onClick: () => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' }), children: "Browse Categories" })] })] }) })] }), _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsx(motion.div, { id: "search", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "mb-12", children: _jsx(Card, { className: "glass p-6", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-muted" }), _jsx(Input, { placeholder: "Search AI terms, definitions, or concepts...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-11 text-lg py-6 bg-input-background" })] }), _jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [_jsxs(Select, { value: selectedCategory, onValueChange: setSelectedCategory, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "All Categories" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Categories" }), categories.map((category) => (_jsx(SelectItem, { value: category.id, children: category.name }, category.id)))] })] }), _jsxs(Select, { value: selectedDifficulty, onValueChange: setSelectedDifficulty, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "All Levels" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Levels" }), _jsx(SelectItem, { value: "beginner", children: "Beginner" }), _jsx(SelectItem, { value: "intermediate", children: "Intermediate" }), _jsx(SelectItem, { value: "advanced", children: "Advanced" })] })] }), _jsxs(Select, { value: selectedLetter, onValueChange: setSelectedLetter, children: [_jsx(SelectTrigger, { className: "bg-input-background", children: _jsx(SelectValue, { placeholder: "All Letters" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Letters" }), alphabetSections.map((letter) => (_jsx(SelectItem, { value: letter, children: letter }, letter)))] })] })] })] }) }) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "mb-12", children: _jsx(Card, { className: "glass p-4", children: _jsx("div", { className: "flex flex-wrap justify-center gap-2", children: alphabetSections.map((letter) => (_jsx(Button, { variant: selectedLetter === letter ? "default" : "ghost", size: "sm", onClick: () => setSelectedLetter(letter), className: `w-10 h-10 ${selectedLetter === letter
                                        ? "bg-blue-600 text-white"
                                        : "hover:bg-blue-50 dark:hover:bg-blue-950"}`, children: letter }, letter))) }) }) }), _jsxs(motion.div, { id: "categories", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, className: "mb-16", children: [_jsx("h2", { className: "text-center mb-12", children: "Browse by Category" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: categories.map((category, index) => {
                                    const Icon = category.icon;
                                    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 + index * 0.1 }, children: _jsx(Card, { className: "glass p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: `w-12 h-12 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`, children: _jsx(Icon, { className: `w-6 h-6 text-${category.color}-600 dark:text-${category.color}-400` }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h3", { className: "font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children: category.name }), _jsx("p", { className: "text-sm text-foreground-muted mb-4 line-clamp-2", children: category.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "text-sm font-medium", children: [category.count, " terms"] }), _jsx(ChevronRight, { className: "w-4 h-4 text-foreground-muted group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" })] })] })] }) }) }, category.id));
                                }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "mb-16", children: [_jsxs("div", { className: "flex items-center justify-between mb-8", children: [_jsx("h2", { children: "Essential AI Terms" }), _jsx(Button, { variant: "outline", className: "border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950", children: "View All Terms" })] }), _jsx("div", { className: "space-y-6", children: featuredTerms.map((term, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 + index * 0.1 }, children: _jsxs(Card, { className: "glass p-6 hover:shadow-lg transition-all duration-300", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("h3", { className: "font-semibold text-lg", children: term.term }), term.isPopular && (_jsx(Badge, { className: "text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400", children: "Popular" })), term.isTrending && (_jsx(Badge, { className: "text-xs bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400", children: "Trending" }))] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Badge, { className: getDifficultyColor(term.difficulty), children: term.difficulty }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => copyToClipboard(term.definition, term.id), className: "h-8 w-8 p-0", children: copiedTerm === term.id ? (_jsx(Check, { className: "w-4 h-4 text-green-500" })) : (_jsx(Copy, { className: "w-4 h-4" })) })] })] }), _jsx("p", { className: "text-foreground-muted mb-4 leading-relaxed", children: term.definition }), _jsx("div", { className: "bg-muted/30 rounded-lg p-4 mb-4", children: _jsx("p", { className: "text-sm leading-relaxed", children: term.detailedExplanation }) }), term.examples.length > 0 && (_jsxs("div", { className: "mb-4", children: [_jsxs("h4", { className: "font-medium mb-2 flex items-center gap-2", children: [_jsx(Lightbulb, { className: "w-4 h-4" }), "Examples:"] }), _jsx("ul", { className: "space-y-1", children: term.examples.map((example, i) => (_jsxs("li", { className: "text-sm text-foreground-muted flex items-start gap-2", children: [_jsx("span", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" }), example] }, i))) })] })), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: term.tags.map((tag, tagIndex) => (_jsxs(Badge, { variant: "secondary", className: "text-xs", children: [_jsx(Hash, { className: "w-3 h-3 mr-1" }), tag] }, tagIndex))) }), term.relatedTerms.length > 0 && (_jsxs("div", { className: "pt-4 border-t border-border", children: [_jsx("h4", { className: "font-medium mb-2 text-sm", children: "Related Terms:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: term.relatedTerms.map((relatedTerm, i) => (_jsxs(Button, { variant: "ghost", size: "sm", className: "h-7 text-xs text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950", children: [relatedTerm, _jsx(ExternalLink, { className: "w-3 h-3 ml-1" })] }, i))) })] }))] }) }, term.id))) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5 }, className: "grid md:grid-cols-3 gap-6", children: [_jsxs(Card, { className: "glass p-6 text-center hover:shadow-lg transition-all duration-300", children: [_jsx(Brain, { className: "w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" }), _jsx("h3", { className: "mb-2", children: "Beginner's Guide" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "Start with fundamental AI concepts and build your knowledge progressively." }), _jsx(Button, { variant: "outline", className: "w-full", children: "Start Learning" })] }), _jsxs(Card, { className: "glass p-6 text-center hover:shadow-lg transition-all duration-300", children: [_jsx(AlertCircle, { className: "w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" }), _jsx("h3", { className: "mb-2", children: "Common Misconceptions" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "Clear up misunderstandings about AI and machine learning concepts." }), _jsx(Button, { variant: "outline", className: "w-full", children: "Learn More" })] }), _jsxs(Card, { className: "glass p-6 text-center hover:shadow-lg transition-all duration-300", children: [_jsx(Info, { className: "w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" }), _jsx("h3", { className: "mb-2", children: "Request Definition" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "Can't find a term? Request a new definition to be added to our glossary." }), _jsx(Button, { variant: "outline", className: "w-full", children: "Request Term" })] })] })] })] }));
}
//# sourceMappingURL=GlossaryPage.js.map