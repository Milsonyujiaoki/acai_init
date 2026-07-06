"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Bot, Brain, Eye, MessageSquare, Code, Zap, Play, RefreshCw, Download, Copy, Check, Wand2, Image, Mic, Video, BarChart3, Settings, Info, ArrowRight, Star, Clock, Users, TrendingUp, Sparkles, Cpu, Database, Network, Cloud, Lock, Shield, Rocket, Heart, Target, Award, Globe, FileText, Search, Lightbulb, Palette, Monitor, Smartphone, Package, GitBranch, Terminal, Activity, Layers, Command, Send, StopCircle } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
export function AIPlaygroundPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('text-ai');
    const [isProcessing, setIsProcessing] = useState(false);
    const [copiedCode, setCopiedCode] = useState(null);
    // AI Tool Categories
    const categories = [
        { id: 'text-ai', name: 'Text AI', icon: MessageSquare, description: 'Natural language processing tools' },
        { id: 'vision-ai', name: 'Vision AI', icon: Eye, description: 'Computer vision and image analysis' },
        { id: 'voice-ai', name: 'Voice AI', icon: Mic, description: 'Speech and audio processing' },
        { id: 'data-ai', name: 'Data AI', icon: BarChart3, description: 'Analytics and insights' },
        { id: 'code-ai', name: 'Code AI', icon: Code, description: 'AI-powered development tools' }
    ];
    // AI Tools Database
    const aiTools = {
        'text-ai': [
            {
                id: 'chatbot',
                name: 'AI Chatbot',
                description: 'Conversational AI that understands context and provides intelligent responses',
                status: 'live',
                complexity: 'Beginner',
                icon: Bot,
                tags: ['NLP', 'Conversation', 'GPT'],
                demoType: 'chat'
            },
            {
                id: 'text-summarizer',
                name: 'Text Summarizer',
                description: 'Automatically summarize long texts into concise, meaningful summaries',
                status: 'live',
                complexity: 'Intermediate',
                icon: FileText,
                tags: ['Summarization', 'NLP', 'Analysis'],
                demoType: 'text-input'
            },
            {
                id: 'sentiment-analyzer',
                name: 'Sentiment Analyzer',
                description: 'Analyze emotions and sentiment in text with detailed insights',
                status: 'beta',
                complexity: 'Beginner',
                icon: Heart,
                tags: ['Sentiment', 'Emotion', 'Analysis'],
                demoType: 'text-input'
            },
            {
                id: 'language-translator',
                name: 'Language Translator',
                description: 'Translate text between 100+ languages with high accuracy',
                status: 'live',
                complexity: 'Beginner',
                icon: Globe,
                tags: ['Translation', 'Multilingual', 'NLP'],
                demoType: 'text-input'
            }
        ],
        'vision-ai': [
            {
                id: 'object-detection',
                name: 'Object Detection',
                description: 'Identify and locate objects in images with bounding boxes',
                status: 'live',
                complexity: 'Intermediate',
                icon: Eye,
                tags: ['Detection', 'Computer Vision', 'YOLO'],
                demoType: 'image-upload'
            },
            {
                id: 'image-classifier',
                name: 'Image Classifier',
                description: 'Classify images into thousands of categories with confidence scores',
                status: 'live',
                complexity: 'Beginner',
                icon: Image,
                tags: ['Classification', 'CNN', 'Recognition'],
                demoType: 'image-upload'
            },
            {
                id: 'face-analyzer',
                name: 'Face Analyzer',
                description: 'Detect faces and analyze emotions, age, and facial features',
                status: 'beta',
                complexity: 'Advanced',
                icon: Users,
                tags: ['Face Detection', 'Emotion', 'Biometrics'],
                demoType: 'image-upload'
            }
        ],
        'voice-ai': [
            {
                id: 'speech-to-text',
                name: 'Speech to Text',
                description: 'Convert spoken words into accurate text transcriptions',
                status: 'live',
                complexity: 'Beginner',
                icon: Mic,
                tags: ['STT', 'Transcription', 'Audio'],
                demoType: 'audio-input'
            },
            {
                id: 'voice-cloning',
                name: 'Voice Cloning',
                description: 'Create synthetic speech that mimics specific voices',
                status: 'coming-soon',
                complexity: 'Advanced',
                icon: Video,
                tags: ['TTS', 'Voice Synthesis', 'Cloning'],
                demoType: 'audio-input'
            }
        ],
        'data-ai': [
            {
                id: 'predictive-analytics',
                name: 'Predictive Analytics',
                description: 'Forecast trends and patterns from your data',
                status: 'live',
                complexity: 'Advanced',
                icon: TrendingUp,
                tags: ['Prediction', 'ML', 'Analytics'],
                demoType: 'data-upload'
            },
            {
                id: 'anomaly-detection',
                name: 'Anomaly Detection',
                description: 'Identify unusual patterns and outliers in datasets',
                status: 'beta',
                complexity: 'Intermediate',
                icon: Target,
                tags: ['Anomaly', 'Detection', 'Monitoring'],
                demoType: 'data-upload'
            }
        ],
        'code-ai': [
            {
                id: 'code-generator',
                name: 'Code Generator',
                description: 'Generate code from natural language descriptions',
                status: 'live',
                complexity: 'Intermediate',
                icon: Code,
                tags: ['Codegen', 'Programming', 'AI'],
                demoType: 'code-input'
            },
            {
                id: 'code-reviewer',
                name: 'Code Reviewer',
                description: 'Automated code review with suggestions and improvements',
                status: 'beta',
                complexity: 'Advanced',
                icon: GitBranch,
                tags: ['Review', 'Quality', 'Analysis'],
                demoType: 'code-input'
            }
        ]
    };
    // Demo States
    const [chatMessages, setChatMessages] = useState([
        { role: 'assistant', content: 'Hello! I\'m your AI assistant. How can I help you today?' }
    ]);
    const [chatInput, setChatInput] = useState('');
    const [textInput, setTextInput] = useState('');
    const [codeInput, setCodeInput] = useState('');
    const [results, setResults] = useState(null);
    // Mock AI Processing
    const processAIRequest = async (toolId, input) => {
        setIsProcessing(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Mock responses based on tool type
        const mockResponses = {
            'chatbot': {
                role: 'assistant',
                content: `That's a great question! Based on my analysis, I can help you with that. Here are some insights: ${input.slice(0, 100)}...`
            },
            'text-summarizer': {
                summary: `Here's a concise summary of your text: ${input.slice(0, 80)}... The main points include advanced AI capabilities, user-friendly interface, and scalable solutions.`,
                wordCount: { original: input.length, summary: 45 },
                keyPhrases: ['AI technology', 'machine learning', 'data analysis', 'automation']
            },
            'sentiment-analyzer': {
                sentiment: 'Positive',
                confidence: 0.87,
                emotions: { joy: 0.65, trust: 0.72, anticipation: 0.58 },
                breakdown: { positive: 78, neutral: 15, negative: 7 }
            },
            'language-translator': {
                translatedText: 'Hola, ¿cómo estás? Este es un ejemplo de traducción usando IA.',
                detectedLanguage: 'English',
                targetLanguage: 'Spanish',
                confidence: 0.95
            },
            'code-generator': {
                generatedCode: `// Generated Python function based on your description
def analyze_data(data):
    """
    Analyzes the provided data and returns insights
    """
    import pandas as pd
    import numpy as np
    
    df = pd.DataFrame(data)
    summary = {
        'mean': df.mean(),
        'std': df.std(),
        'count': len(df)
    }
    
    return summary`,
                language: 'Python',
                explanation: 'This function creates a data analysis pipeline with statistical summary calculations.'
            }
        };
        const response = mockResponses[toolId] || { result: 'Processing completed successfully!' };
        setResults(response);
        setIsProcessing(false);
    };
    // Chat Handler
    const handleSendMessage = async () => {
        if (!chatInput.trim())
            return;
        const newMessage = { role: 'user', content: chatInput };
        setChatMessages(prev => [...prev, newMessage]);
        setChatInput('');
        const response = await processAIRequest('chatbot', chatInput);
        setChatMessages(prev => [...prev, response]);
    };
    // Copy Code Function
    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(null), 2000);
    };
    // Get status badge
    const getStatusBadge = (status) => {
        const statusConfig = {
            'live': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', text: 'Live' },
            'beta': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300', text: 'Beta' },
            'coming-soon': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', text: 'Soon' }
        };
        const config = statusConfig[status];
        return (_jsx(Badge, { className: config.color, children: config.text }));
    };
    // Get complexity badge color
    const getComplexityColor = (complexity) => {
        const colors = {
            'Beginner': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
            'Intermediate': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
            'Advanced': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
        };
        return colors[complexity] || colors.Beginner;
    };
    // Demo Component Renderer
    const renderDemo = (tool) => {
        if (tool.status === 'coming-soon') {
            return (_jsxs("div", { className: "text-center py-8", children: [_jsx(Clock, { className: "w-12 h-12 mx-auto mb-4 text-blue-500" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: "This tool is coming soon!" })] }));
        }
        switch (tool.demoType) {
            case 'chat':
                return (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "h-80 overflow-y-auto border rounded-lg p-4 bg-slate-50 dark:bg-slate-800", children: [chatMessages.map((message, index) => (_jsx("div", { className: `mb-3 ${message.role === 'user' ? 'text-right' : 'text-left'}`, children: _jsx("div", { className: `inline-block max-w-xs px-4 py-2 rounded-lg ${message.role === 'user'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100'}`, children: message.content }) }, index))), isProcessing && (_jsx("div", { className: "text-left", children: _jsx("div", { className: "inline-block px-4 py-2 rounded-lg bg-white dark:bg-slate-700", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }), _jsx("span", { children: "AI is thinking..." })] }) }) }))] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { value: chatInput, onChange: (e) => setChatInput(e.target.value), placeholder: "Type your message...", onKeyPress: (e) => e.key === 'Enter' && handleSendMessage(), className: "flex-1" }), _jsx(Button, { onClick: handleSendMessage, disabled: isProcessing || !chatInput.trim(), children: _jsx(Send, { className: "w-4 h-4" }) })] })] }));
            case 'text-input':
                return (_jsxs("div", { className: "space-y-4", children: [_jsx(Textarea, { value: textInput, onChange: (e) => setTextInput(e.target.value), placeholder: "Enter your text here...", className: "min-h-32" }), _jsx(Button, { onClick: () => processAIRequest(tool.id, textInput), disabled: isProcessing || !textInput.trim(), className: "w-full", children: isProcessing ? (_jsxs(_Fragment, { children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2 animate-spin" }), "Processing..."] })) : (_jsxs(_Fragment, { children: [_jsx(Play, { className: "w-4 h-4 mr-2" }), "Analyze Text"] })) }), results && (_jsxs(Card, { className: "p-4 mt-4", children: [_jsx("h4", { className: "font-semibold mb-3", children: "Results:" }), _jsxs("div", { className: "space-y-2 text-sm", children: [results.summary && _jsxs("p", { children: [_jsx("strong", { children: "Summary:" }), " ", results.summary] }), results.sentiment && _jsxs("p", { children: [_jsx("strong", { children: "Sentiment:" }), " ", results.sentiment, " (", (results.confidence * 100).toFixed(1), "% confidence)"] }), results.translatedText && _jsxs("p", { children: [_jsx("strong", { children: "Translation:" }), " ", results.translatedText] }), results.keyPhrases && (_jsxs("div", { children: [_jsx("strong", { children: "Key Phrases:" }), _jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: results.keyPhrases.map((phrase, i) => (_jsx(Badge, { variant: "secondary", children: phrase }, i))) })] }))] })] }))] }));
            case 'code-input':
                return (_jsxs("div", { className: "space-y-4", children: [_jsx(Textarea, { value: codeInput, onChange: (e) => setCodeInput(e.target.value), placeholder: "Describe the code you want to generate...", className: "min-h-32 font-mono text-sm" }), _jsx(Button, { onClick: () => processAIRequest(tool.id, codeInput), disabled: isProcessing || !codeInput.trim(), className: "w-full", children: isProcessing ? (_jsxs(_Fragment, { children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2 animate-spin" }), "Generating..."] })) : (_jsxs(_Fragment, { children: [_jsx(Code, { className: "w-4 h-4 mr-2" }), "Generate Code"] })) }), results && results.generatedCode && (_jsxs(Card, { className: "p-4 mt-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsxs("h4", { className: "font-semibold", children: ["Generated Code (", results.language, "):"] }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => copyToClipboard(results.generatedCode, 'generated-code'), children: copiedCode === 'generated-code' ? (_jsx(Check, { className: "w-4 h-4" })) : (_jsx(Copy, { className: "w-4 h-4" })) })] }), _jsx("pre", { className: "bg-slate-100 dark:bg-slate-800 p-3 rounded text-sm overflow-x-auto", children: _jsx("code", { children: results.generatedCode }) }), results.explanation && (_jsxs("p", { className: "text-sm text-slate-600 dark:text-slate-400 mt-2", children: [_jsx("strong", { children: "Explanation:" }), " ", results.explanation] }))] }))] }));
            case 'image-upload':
                return (_jsxs("div", { className: "text-center py-12 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg", children: [_jsx(Image, { className: "w-16 h-16 mx-auto mb-4 text-slate-400" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4", children: "Upload an image to analyze" }), _jsxs(Button, { variant: "outline", children: [_jsx(Upload, { className: "w-4 h-4 mr-2" }), "Upload Image"] })] }));
            case 'audio-input':
                return (_jsxs("div", { className: "text-center py-12 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg", children: [_jsx(Mic, { className: "w-16 h-16 mx-auto mb-4 text-slate-400" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4", children: "Record or upload audio" }), _jsxs("div", { className: "flex gap-2 justify-center", children: [_jsxs(Button, { variant: "outline", children: [_jsx(Mic, { className: "w-4 h-4 mr-2" }), "Record"] }), _jsxs(Button, { variant: "outline", children: [_jsx(Upload, { className: "w-4 h-4 mr-2" }), "Upload"] })] })] }));
            case 'data-upload':
                return (_jsxs("div", { className: "text-center py-12 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg", children: [_jsx(Database, { className: "w-16 h-16 mx-auto mb-4 text-slate-400" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4", children: "Upload your dataset (CSV, JSON)" }), _jsxs(Button, { variant: "outline", children: [_jsx(Upload, { className: "w-4 h-4 mr-2" }), "Upload Data"] })] }));
            default:
                return (_jsxs("div", { className: "text-center py-8", children: [_jsx(Settings, { className: "w-12 h-12 mx-auto mb-4 text-slate-400" }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: "Demo interface coming soon" })] }));
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("section", { className: "relative pt-32 pb-20 px-6 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/30 dark:to-slate-900/50" }), _jsx("div", { className: "relative max-w-7xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsxs(Badge, { className: "mb-6 px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", children: [_jsx(Zap, { className: "w-4 h-4 mr-2" }), "Interactive AI Demonstrations"] }), _jsxs("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-slate-100", children: ["AI ", _jsx("span", { className: "gradient-text-blue", children: "Playground" })] }), _jsx("p", { className: "text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed", children: "Experience the power of artificial intelligence through hands-on demos and interactive tools. Test, explore, and learn how AI can transform your workflows." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", className: "gradient-bg-blue text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300", onClick: () => {
                                                const element = document.getElementById('ai-tools');
                                                if (element)
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                            }, children: [_jsx(Play, { className: "w-5 h-5 mr-2" }), "Start Exploring"] }), _jsxs(Button, { variant: "outline", size: "lg", className: "px-8 py-6 text-lg rounded-2xl backdrop-blur-xl", onClick: () => navigate && navigate('documentation'), children: [_jsx(FileText, { className: "w-5 h-5 mr-2" }), "View Documentation"] })] })] }) })] }), _jsx("section", { className: "py-16 px-6", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: [
                            {
                                icon: Rocket,
                                title: 'Instant Testing',
                                description: 'Test AI models immediately without setup or configuration'
                            },
                            {
                                icon: Brain,
                                title: 'Multiple AI Types',
                                description: 'Explore text, vision, voice, and data AI in one platform'
                            },
                            {
                                icon: Code,
                                title: 'Code Examples',
                                description: 'Get implementation code for all demonstrations'
                            }
                        ].map((feature, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, children: _jsxs(Card, { className: `p-6 text-center h-full ${isDark
                                    ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50'
                                    : 'bg-white/50 border-blue-100 hover:bg-blue-50/50'} transition-all duration-300 hover:shadow-lg backdrop-blur-xl`, children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${isDark ? 'bg-blue-900/30' : 'bg-blue-100'}`, children: _jsx(feature.icon, { className: `w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}` }) }), _jsx("h3", { className: "text-xl font-bold mb-3 text-slate-900 dark:text-slate-100", children: feature.title }), _jsx("p", { className: "text-slate-600 dark:text-slate-400", children: feature.description })] }) }, index))) }) }) }), _jsx("section", { id: "ai-tools", className: "py-20 px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100", children: ["Explore ", _jsx("span", { className: "gradient-text-blue", children: "AI Tools" })] }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto", children: "Interactive demonstrations of cutting-edge AI technologies. Try them out and see the code behind each tool." })] }), _jsx("div", { className: "flex flex-wrap gap-2 justify-center mb-8", children: categories.map((category) => (_jsxs(motion.button, { onClick: () => setActiveCategory(category.id), className: `flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'gradient-bg-blue text-white shadow-lg'
                                    : isDark
                                        ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                                        : 'bg-white/50 text-slate-700 hover:bg-blue-50/50 border border-blue-100'}`, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx(category.icon, { className: "w-5 h-5" }), category.name] }, category.id))) }), _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: aiTools[activeCategory]?.map((tool, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, children: _jsx(Card, { className: `h-full ${isDark
                                            ? 'bg-slate-800/50 border-slate-700'
                                            : 'bg-white/50 border-blue-100'} backdrop-blur-xl`, children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: `p-3 rounded-2xl ${isDark ? 'bg-blue-900/30' : 'bg-blue-100'}`, children: _jsx(tool.icon, { className: `w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}` }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-slate-100", children: tool.name }), _jsx("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: tool.description })] })] }), getStatusBadge(tool.status)] }), _jsxs("div", { className: "flex items-center gap-4 mb-6", children: [_jsx(Badge, { className: getComplexityColor(tool.complexity), children: tool.complexity }), _jsx("div", { className: "flex flex-wrap gap-1", children: tool.tags.map((tag, i) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, i))) })] }), _jsx("div", { className: "bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4", children: renderDemo(tool) })] }) }) }, tool.id))) }, activeCategory) })] }) }), _jsx("section", { className: "py-20 px-6 bg-gradient-to-br from-blue-50/30 to-blue-100/20 dark:from-blue-950/20 dark:to-slate-900/30", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100", children: ["Integration ", _jsx("span", { className: "gradient-text-blue", children: "Examples" })] }), _jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto", children: "See how to integrate these AI tools into your applications with real code examples" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [_jsx(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: _jsxs(Card, { className: `p-6 ${isDark
                                            ? 'bg-slate-800/50 border-slate-700'
                                            : 'bg-white/50 border-blue-100'} backdrop-blur-xl`, children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "text-lg font-bold text-slate-900 dark:text-slate-100", children: "Python Integration" }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => copyToClipboard(`import requests

# Delibix AI API Example
def analyze_text(text):
    response = requests.post(
        'https://api.delibix.com/ai/analyze',
        headers={'Authorization': 'Bearer YOUR_API_KEY'},
        json={'text': text, 'model': 'sentiment-v2'}
    )
    return response.json()

# Usage
result = analyze_text("This product is amazing!")
print(f"Sentiment: {result['sentiment']}")`, 'python-code'), children: copiedCode === 'python-code' ? (_jsx(Check, { className: "w-4 h-4" })) : (_jsx(Copy, { className: "w-4 h-4" })) })] }), _jsx("pre", { className: "bg-slate-100 dark:bg-slate-900 p-4 rounded text-sm overflow-x-auto", children: _jsx("code", { children: `import requests

# Delibix AI API Example
def analyze_text(text):
    response = requests.post(
        'https://api.delibix.com/ai/analyze',
        headers={'Authorization': 'Bearer YOUR_API_KEY'},
        json={'text': text, 'model': 'sentiment-v2'}
    )
    return response.json()

# Usage
result = analyze_text("This product is amazing!")
print(f"Sentiment: {result['sentiment']}")` }) })] }) }), _jsx(motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: _jsxs(Card, { className: `p-6 ${isDark
                                            ? 'bg-slate-800/50 border-slate-700'
                                            : 'bg-white/50 border-blue-100'} backdrop-blur-xl`, children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "text-lg font-bold text-slate-900 dark:text-slate-100", children: "JavaScript Integration" }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => copyToClipboard(`// Delibix AI SDK
import { DelibixAI } from '@delibix/ai-sdk';

const ai = new DelibixAI({
  apiKey: 'YOUR_API_KEY'
});

// Analyze sentiment
async function analyzeSentiment(text) {
  try {
    const result = await ai.text.analyzeSentiment({
      text: text,
      model: 'sentiment-v2'
    });
    
    console.log('Sentiment:', result.sentiment);
    console.log('Confidence:', result.confidence);
    
    return result;
  } catch (error) {
    console.error('Analysis failed:', error);
  }
}`, 'js-code'), children: copiedCode === 'js-code' ? (_jsx(Check, { className: "w-4 h-4" })) : (_jsx(Copy, { className: "w-4 h-4" })) })] }), _jsx("pre", { className: "bg-slate-100 dark:bg-slate-900 p-4 rounded text-sm overflow-x-auto", children: _jsx("code", { children: `// Delibix AI SDK
import { DelibixAI } from '@delibix/ai-sdk';

const ai = new DelibixAI({
  apiKey: 'YOUR_API_KEY'
});

// Analyze sentiment
async function analyzeSentiment(text) {
  try {
    const result = await ai.text.analyzeSentiment({
      text: text,
      model: 'sentiment-v2'
    });
    
    console.log('Sentiment:', result.sentiment);
    console.log('Confidence:', result.confidence);
    
    return result;
  } catch (error) {
    console.error('Analysis failed:', error);
  }
}` }) })] }) })] })] }) }), _jsx("section", { className: "py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Ready to Build with AI?" }), _jsx("p", { className: "text-xl mb-8 text-blue-100", children: "Get API access and start integrating these powerful AI tools into your applications today." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", variant: "secondary", className: "px-8 py-6 text-lg rounded-2xl bg-white text-blue-600 hover:bg-blue-50", onClick: () => navigate && navigate('contact'), children: [_jsx(Rocket, { className: "w-5 h-5 mr-2" }), "Get API Access"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "px-8 py-6 text-lg rounded-2xl border-white text-white hover:bg-white/10", onClick: () => navigate && navigate('documentation'), children: [_jsx(FileText, { className: "w-5 h-5 mr-2" }), "View Documentation"] })] }), _jsxs("div", { className: "flex items-center justify-center gap-8 mt-12 text-blue-100", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Check, { className: "w-5 h-5" }), _jsx("span", { children: "Free Testing" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Check, { className: "w-5 h-5" }), _jsx("span", { children: "No Setup Required" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Check, { className: "w-5 h-5" }), _jsx("span", { children: "Enterprise Ready" })] })] })] }) }) })] }));
}
//# sourceMappingURL=AIPlaygroundPage.js.map