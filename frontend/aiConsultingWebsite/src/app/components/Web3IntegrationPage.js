"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Globe, Shield, Coins, Network, Database, Users, TrendingUp, BarChart3, Target, Brain, Zap, Lock, Settings, Layers, Award, CheckCircle2, ArrowRight, Star, Clock, DollarSign, Activity, Lightbulb, Rocket, MessageSquare, Calendar, FileText, Download, Play, Code } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
export function Web3IntegrationPage({ navigate }) {
    const [selectedSolutionId, setSelectedSolutionId] = useState("defi-integration");
    const web3Solutions = [
        {
            id: "defi-integration",
            title: "DeFi Integration",
            description: "Decentralized finance solutions for modern businesses",
            icon: Coins,
            applications: [
                "Automated payments",
                "Yield farming strategies",
                "Liquidity pool management",
                "Cross-chain swaps",
                "Staking protocols",
                "Lending platforms"
            ],
            technologies: ["Smart contracts", "AMMs", "Yield protocols", "Cross-chain bridges"],
            maturity: "Production Ready",
            complexity: "High",
            roi: "200-400%",
            timeline: "12-20 weeks"
        },
        {
            id: "nft-marketplace",
            title: "NFT Marketplace",
            description: "Custom NFT platforms and digital asset management",
            icon: Award,
            applications: [
                "Digital asset creation",
                "Marketplace development",
                "Royalty management",
                "Metadata storage",
                "Community features",
                "Analytics dashboard"
            ],
            technologies: ["ERC-721", "IPFS", "Marketplace contracts", "Layer 2 scaling"],
            maturity: "Production Ready",
            complexity: "Medium",
            roi: "150-300%",
            timeline: "8-16 weeks"
        },
        {
            id: "dao-governance",
            title: "DAO Governance",
            description: "Decentralized autonomous organization frameworks",
            icon: Users,
            applications: [
                "Voting mechanisms",
                "Proposal systems",
                "Treasury management",
                "Member onboarding",
                "Governance tokens",
                "Delegation systems"
            ],
            technologies: ["Governance contracts", "Multi-sig wallets", "Snapshot", "Aragon"],
            maturity: "Emerging",
            complexity: "High",
            roi: "180-350%",
            timeline: "16-24 weeks"
        },
        {
            id: "tokenization",
            title: "Asset Tokenization",
            description: "Real-world asset tokenization and management",
            icon: Database,
            applications: [
                "Real estate tokens",
                "Commodity tokenization",
                "Securities digitization",
                "Fractional ownership",
                "Compliance automation",
                "Trading platforms"
            ],
            technologies: ["Security tokens", "Compliance protocols", "Oracle networks", "Legal frameworks"],
            maturity: "Developing",
            complexity: "Very High",
            roi: "300-500%",
            timeline: "20-32 weeks"
        }
    ];
    const web3Architecture = [
        {
            layer: "Frontend Layer",
            description: "User interfaces and Web3 wallet integration",
            components: [
                "React/Vue.js apps",
                "Wallet connectors",
                "dApp browsers",
                "Mobile wallets",
                "Web3 libraries",
                "UI components"
            ],
            technologies: ["Web3.js", "Ethers.js", "WalletConnect", "MetaMask", "Rainbow Kit"]
        },
        {
            layer: "Application Layer",
            description: "Business logic and smart contract interactions",
            components: [
                "Smart contracts",
                "Business logic",
                "API gateways",
                "State management",
                "Event listeners",
                "Transaction management"
            ],
            technologies: ["Solidity", "Hardhat", "OpenZeppelin", "Chainlink", "The Graph"]
        },
        {
            layer: "Protocol Layer",
            description: "Blockchain protocols and consensus mechanisms",
            components: [
                "Consensus algorithms",
                "Virtual machines",
                "Transaction pools",
                "Block validation",
                "Network nodes",
                "P2P networking"
            ],
            technologies: ["Ethereum", "Polygon", "Arbitrum", "Optimism", "Avalanche"]
        },
        {
            layer: "Infrastructure Layer",
            description: "Node infrastructure and network connectivity",
            components: [
                "RPC nodes",
                "IPFS storage",
                "Indexing services",
                "Oracle networks",
                "Bridge protocols",
                "Monitoring tools"
            ],
            technologies: ["Infura", "Alchemy", "IPFS", "Chainlink", "Gelato", "Tenderly"]
        }
    ];
    const implementationPhases = [
        {
            phase: "Strategy & Planning",
            duration: "3-4 weeks",
            activities: [
                "Web3 strategy development",
                "Blockchain selection",
                "Tokenomics design",
                "Compliance assessment",
                "Technical architecture",
                "Risk evaluation"
            ],
            deliverables: [
                "Web3 strategy document",
                "Technical architecture",
                "Tokenomics model",
                "Compliance framework"
            ]
        },
        {
            phase: "Smart Contract Development",
            duration: "6-10 weeks",
            activities: [
                "Contract development",
                "Security auditing",
                "Testing protocols",
                "Gas optimization",
                "Deployment scripts",
                "Verification processes"
            ],
            deliverables: [
                "Audited smart contracts",
                "Test suites",
                "Deployment documentation",
                "Security reports"
            ]
        },
        {
            phase: "Frontend Integration",
            duration: "4-8 weeks",
            activities: [
                "Web3 integration",
                "Wallet connectivity",
                "User interface",
                "Transaction flows",
                "Error handling",
                "Performance optimization"
            ],
            deliverables: [
                "Web3 application",
                "Wallet integrations",
                "User documentation",
                "Testing reports"
            ]
        },
        {
            phase: "Launch & Governance",
            duration: "2-4 weeks",
            activities: [
                "Mainnet deployment",
                "Governance setup",
                "Community onboarding",
                "Monitoring implementation",
                "Support systems",
                "Continuous optimization"
            ],
            deliverables: [
                "Live Web3 platform",
                "Governance framework",
                "Community guidelines",
                "Monitoring dashboards"
            ]
        }
    ];
    const web3Metrics = [
        { label: "TVL Managed", value: "$2.5B+", icon: DollarSign },
        { label: "Smart Contracts", value: "500+", icon: Code },
        { label: "Security Audits", value: "100%", icon: Shield },
        { label: "Gas Optimization", value: "60%", icon: Zap },
        { label: "Uptime", value: "99.9%", icon: Activity },
        { label: "Transactions", value: "10M+", icon: TrendingUp }
    ];
    const useCases = [
        {
            title: "DeFi Yield Platform",
            industry: "Financial Services",
            challenge: "Traditional banking yields below inflation rates",
            solution: "Automated DeFi yield farming with risk management",
            results: ["15-25% annual yields", "Automated rebalancing", "Risk-adjusted returns"],
            timeline: "16 weeks",
            client: "Digital Asset Manager"
        },
        {
            title: "NFT Art Marketplace",
            industry: "Creative Arts",
            challenge: "Artists need direct monetization without intermediaries",
            solution: "Custom NFT marketplace with creator royalties",
            results: ["Zero platform fees", "Automated royalties", "Creator community"],
            timeline: "12 weeks",
            client: "Digital Art Collective"
        },
        {
            title: "Real Estate Tokenization",
            industry: "Real Estate",
            challenge: "Illiquid real estate investments with high barriers",
            solution: "Fractional ownership through security tokens",
            results: ["24/7 trading", "Fractional ownership", "Global accessibility"],
            timeline: "24 weeks",
            client: "Property Investment Fund"
        }
    ];
    const selectedSolutionData = web3Solutions.find(sol => sol.id === selectedSolutionId);
    const getMaturityColor = (maturity) => {
        switch (maturity) {
            case "Production Ready": return "text-green-600 bg-green-100 dark:bg-green-900/30";
            case "Emerging": return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30";
            case "Developing": return "text-blue-600 bg-blue-100 dark:bg-blue-900/30";
            default: return "text-gray-600 bg-gray-100 dark:bg-gray-800";
        }
    };
    const getComplexityColor = (complexity) => {
        switch (complexity) {
            case "Very High": return "text-red-600 bg-red-100 dark:bg-red-900/30";
            case "High": return "text-orange-600 bg-orange-100 dark:bg-orange-900/30";
            case "Medium": return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30";
            case "Low": return "text-green-600 bg-green-100 dark:bg-green-900/30";
            default: return "text-gray-600 bg-gray-100 dark:bg-gray-800";
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 prevent-overflow-x", children: [_jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-purple-100/40 dark:from-purple-950/20 dark:via-blue-950/10 dark:to-purple-900/20" }), _jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(rgba(139,69,244,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.05)_1px,transparent_1px)]" }), _jsx("div", { className: "absolute top-20 left-10 w-32 h-32 bg-purple-200/30 dark:bg-purple-600/20 rounded-full blur-xl float" }), _jsx("div", { className: "absolute top-32 right-20 w-24 h-24 bg-blue-300/40 dark:bg-blue-500/30 rounded-full blur-lg float-delayed" }), _jsx("div", { className: "absolute bottom-32 left-1/4 w-20 h-20 bg-purple-400/35 dark:bg-purple-400/25 rounded-full blur-md float-delayed-2" }), _jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5", children: _jsxs("div", { className: "relative w-64 h-64", children: [[...Array(6)].map((_, i) => (_jsx("div", { className: "absolute w-8 h-6 bg-purple-400 rounded animate-pulse", style: {
                                                top: `${20 + (i % 3) * 25}%`,
                                                left: `${20 + Math.floor(i / 3) * 30}%`,
                                                animationDelay: `${i * 0.5}s`,
                                                animationDuration: '3s'
                                            } }, i))), _jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-20 bg-blue-500 animate-pulse" })] }) })] }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: _jsxs("div", { className: "text-center", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-12", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "glass p-4 rounded-2xl glow-blue-light dust-container", children: [_jsx(Globe, { className: "w-12 h-12 text-purple-600 dark:text-purple-400" }), _jsx("div", { className: "dust-particle dust-particle-blue dust-particle-1" }), _jsx("div", { className: "dust-particle dust-particle-light dust-particle-2" }), _jsx("div", { className: "dust-particle dust-particle-white dust-particle-3" })] }) }), _jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text-blue", children: "Web3" }), ' ', _jsx("span", { className: "text-purple-600", children: "Integration" }), ' ', _jsx("span", { className: "gradient-text-blue-light", children: "Solutions" })] }), _jsx("p", { className: "text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-8 leading-relaxed", children: "Transform your business with blockchain technology, smart contracts, and decentralized applications. Build the future of digital commerce and finance." }), _jsxs("div", { className: "flex justify-center flex-wrap gap-4 mb-8", children: [_jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2", children: [_jsx(Code, { className: "w-4 h-4 mr-2" }), "Smart Contracts"] }), _jsxs(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2", children: [_jsx(Coins, { className: "w-4 h-4 mr-2" }), "DeFi Solutions"] }), _jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-4 py-2", children: [_jsx(Award, { className: "w-4 h-4 mr-2" }), "NFT Platforms"] }), _jsxs(Badge, { className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 px-4 py-2", children: [_jsx(Users, { className: "w-4 h-4 mr-2" }), "DAO Governance"] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-8", children: web3Metrics.map((metric, index) => {
                                                const Icon = metric.icon;
                                                return (_jsxs("div", { className: "glass-blue-light p-4 rounded-xl text-center", children: [_jsx(Icon, { className: "w-6 h-6 text-purple-600 mx-auto mb-2" }), _jsx("div", { className: "text-lg font-bold text-purple-600", children: metric.value }), _jsx("div", { className: "text-xs text-foreground-muted", children: metric.label })] }, index));
                                            }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(Rocket, { className: "w-5 h-5 mr-2" }), "Start Web3 Project"] }), _jsxs(Button, { onClick: () => navigate('contact'), variant: "outline", size: "lg", className: "glass-blue-light border-blue-200 dark:border-blue-700 hover:glass-blue transition-all duration-300 px-8 py-6 text-lg button-hover", children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "Web3 Consultation"] })] })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs(Tabs, { defaultValue: "solutions", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 glass", children: [_jsx(TabsTrigger, { value: "solutions", children: "Web3 Solutions" }), _jsx(TabsTrigger, { value: "architecture", children: "Architecture" }), _jsx(TabsTrigger, { value: "implementation", children: "Implementation" }), _jsx(TabsTrigger, { value: "case-studies", children: "Case Studies" })] }), _jsx(TabsContent, { value: "solutions", className: "space-y-8 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Brain, { className: "w-6 h-6 text-purple-600" }), "Blockchain & Web3 Solutions"] }), _jsx(CardDescription, { children: "Comprehensive decentralized solutions for modern businesses" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: web3Solutions.map((solution, index) => {
                                                        const Icon = solution.icon;
                                                        const isSelected = solution.id === selectedSolutionId;
                                                        return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: `cursor-pointer ${isSelected ? 'ring-2 ring-purple-500' : ''}`, onClick: () => setSelectedSolutionId(solution.id), children: _jsx(Card, { className: `glass h-full card-hover ${isSelected ? 'bg-purple-50/50 dark:bg-purple-950/30' : ''}`, children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl", children: _jsx(Icon, { className: "w-8 h-8 text-purple-600 dark:text-purple-400" }) }) }), _jsx("h3", { className: "font-semibold text-lg mb-2", children: solution.title }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: solution.description }), _jsxs("div", { className: "space-y-2", children: [_jsx(Badge, { className: getMaturityColor(solution.maturity), children: solution.maturity }), _jsxs("div", { className: "text-xs text-foreground-muted", children: ["ROI: ", solution.roi] })] })] }) }) }, solution.id));
                                                    }) }), selectedSolutionData && (_jsxs(Card, { className: "glass bg-purple-50/50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-700", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "text-purple-700 dark:text-purple-300", children: [selectedSolutionData.title, " - Implementation Details"] }), _jsx(CardDescription, { children: "Applications, technologies, and development approach" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Key Applications:" }), _jsx("div", { className: "space-y-2", children: selectedSolutionData.applications.map((app, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }), _jsx("span", { className: "text-sm", children: app })] }, index))) })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Technologies:" }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: selectedSolutionData.technologies.map((tech, index) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: tech }, index))) }), _jsxs("div", { className: "pt-4 border-t border-purple-200 dark:border-purple-700", children: [_jsx("div", { className: "text-sm font-medium mb-1", children: "Complexity Level:" }), _jsx(Badge, { className: getComplexityColor(selectedSolutionData.complexity), children: selectedSolutionData.complexity })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-semibold", children: "Project Details:" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "glass-blue-light p-3 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium", children: "Expected ROI:" }), _jsx("div", { className: "text-lg font-bold text-purple-600", children: selectedSolutionData.roi })] }), _jsxs("div", { className: "glass-blue-light p-3 rounded-lg", children: [_jsx("div", { className: "text-sm font-medium", children: "Timeline:" }), _jsx("div", { className: "text-lg font-bold text-blue-600", children: selectedSolutionData.timeline })] })] }), _jsxs(Button, { className: "w-full", onClick: () => navigate('demo-request'), children: [_jsx(Play, { className: "w-4 h-4 mr-2" }), "Request Demo"] })] })] }) })] }))] })] }) }), _jsxs(TabsContent, { value: "architecture", className: "space-y-6 mt-8", children: [_jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Layers, { className: "w-6 h-6 text-purple-600" }), "Web3 Technology Stack"] }), _jsx(CardDescription, { children: "Four-layer architecture for decentralized applications" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-8", children: web3Architecture.map((layer, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "relative", children: [index < web3Architecture.length - 1 && (_jsx("div", { className: "absolute left-6 top-16 w-0.5 h-24 bg-purple-200 dark:bg-purple-700" })), _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex-shrink-0", children: _jsx("div", { className: "w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: index + 1 }) }), _jsxs("div", { className: "flex-grow", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: layer.layer }), _jsx("p", { className: "text-foreground-muted mb-4", children: layer.description }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Components:" }), _jsx("div", { className: "grid grid-cols-2 gap-2", children: layer.components.map((component, compIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("div", { className: "w-2 h-2 bg-purple-400 rounded-full" }), _jsx("span", { children: component })] }, compIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Technologies:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: layer.technologies.map((tech, techIndex) => (_jsx(Badge, { variant: "outline", className: "text-xs", children: tech }, techIndex))) })] })] })] })] })] }, index))) }) })] }), _jsxs(Card, { className: "glass w-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Supported Blockchain Networks" }), _jsx(CardDescription, { children: "Multi-chain deployment capabilities" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(Network, { className: "w-12 h-12 text-blue-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Ethereum Ecosystem" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "Layer 1 and Layer 2 solutions" }), _jsxs("div", { className: "flex flex-wrap gap-1 justify-center", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: "Ethereum" }), _jsx(Badge, { variant: "outline", className: "text-xs", children: "Polygon" }), _jsx(Badge, { variant: "outline", className: "text-xs", children: "Arbitrum" })] })] }), _jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(Shield, { className: "w-12 h-12 text-green-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Enterprise Chains" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "High-performance business networks" }), _jsxs("div", { className: "flex flex-wrap gap-1 justify-center", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: "Avalanche" }), _jsx(Badge, { variant: "outline", className: "text-xs", children: "BSC" }), _jsx(Badge, { variant: "outline", className: "text-xs", children: "Solana" })] })] }), _jsxs("div", { className: "text-center p-6 glass-blue-light rounded-lg", children: [_jsx(Lock, { className: "w-12 h-12 text-purple-600 mx-auto mb-4" }), _jsx("h3", { className: "font-semibold mb-2", children: "Private Networks" }), _jsx("p", { className: "text-sm text-foreground-muted mb-4", children: "Custom enterprise blockchains" }), _jsxs("div", { className: "flex flex-wrap gap-1 justify-center", children: [_jsx(Badge, { variant: "outline", className: "text-xs", children: "Hyperledger" }), _jsx(Badge, { variant: "outline", className: "text-xs", children: "Quorum" }), _jsx(Badge, { variant: "outline", className: "text-xs", children: "Besu" })] })] })] }) })] })] }), _jsx(TabsContent, { value: "implementation", className: "space-y-6 mt-8", children: _jsxs(Card, { className: "glass-heavy w-full", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Settings, { className: "w-6 h-6 text-purple-600" }), "Web3 Implementation Process"] }), _jsx(CardDescription, { children: "Structured approach to blockchain development" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-8", children: implementationPhases.map((phase, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, className: "relative", children: [index < implementationPhases.length - 1 && (_jsx("div", { className: "absolute left-6 top-16 w-0.5 h-32 bg-purple-200 dark:bg-purple-700" })), _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex-shrink-0", children: _jsx("div", { className: "w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: index + 1 }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("h3", { className: "text-xl font-semibold", children: phase.phase }), _jsx(Badge, { variant: "outline", children: phase.duration })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Key Activities:" }), _jsx("div", { className: "space-y-2", children: phase.activities.map((activity, actIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(ArrowRight, { className: "w-3 h-3 text-purple-600" }), _jsx("span", { children: activity })] }, actIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-3", children: "Deliverables:" }), _jsx("div", { className: "space-y-2", children: phase.deliverables.map((deliverable, delIndex) => (_jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx(CheckCircle2, { className: "w-3 h-3 text-green-600" }), _jsx("span", { children: deliverable })] }, delIndex))) })] })] })] })] })] }, index))) }) })] }) }), _jsxs(TabsContent, { value: "case-studies", className: "space-y-6 mt-8", children: [_jsx("div", { className: "space-y-6", children: useCases.map((useCase, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsx(Card, { className: "glass-heavy", children: _jsx(CardContent, { className: "p-6", children: _jsx("div", { className: "flex items-start justify-between mb-4", children: _jsxs("div", { className: "flex-grow", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: useCase.title }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-foreground-muted mb-4", children: [_jsxs("span", { children: ["\uD83C\uDFE2 ", useCase.industry] }), _jsxs("span", { children: ["\u23F1\uFE0F ", useCase.timeline] }), _jsxs("span", { children: ["\uD83D\uDC64 ", useCase.client] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-2", children: "Challenge:" }), _jsx("p", { className: "text-foreground-muted", children: useCase.challenge })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-2", children: "Solution:" }), _jsx("p", { className: "text-foreground-muted", children: useCase.solution })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-2", children: "Results:" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: useCase.results.map((result, resultIndex) => (_jsx("div", { className: "bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg text-center", children: _jsx("div", { className: "text-purple-600 dark:text-purple-400 font-semibold", children: result }) }, resultIndex))) })] })] })] }) }) }) }) }, index))) }), _jsx(Card, { className: "glass text-center", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Ready to Enter Web3?" }), _jsx("p", { className: "text-foreground-muted mb-6", children: "Join the decentralized revolution with blockchain solutions that transform how you do business." }), _jsxs("div", { className: "flex gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('success-stories'), children: [_jsx(FileText, { className: "w-4 h-4 mr-2" }), "More Case Studies"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('demo-request'), children: [_jsx(Calendar, { className: "w-4 h-4 mr-2" }), "Schedule Demo"] })] })] }) })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "mt-16", children: _jsx(Card, { className: "glass w-full bg-gradient-to-r from-purple-50/50 via-blue-50/50 to-purple-50/50 dark:from-purple-950/30 dark:via-blue-950/30 dark:to-purple-950/30", children: _jsx(CardContent, { className: "p-12", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Build the Decentralized Future" }), _jsx("p", { className: "text-lg text-foreground-muted mb-8", children: "Transform your business with blockchain technology, smart contracts, and Web3 innovation. Join the decentralized economy today." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { onClick: () => navigate('demo-request'), size: "lg", className: "gradient-bg-blue text-white hover:gradient-bg-blue-light transition-all duration-300 px-8 py-4", children: [_jsx(Globe, { className: "w-5 h-5 mr-2" }), "Launch Web3 Project"] }), _jsxs(Button, { variant: "outline", onClick: () => navigate('contact'), size: "lg", className: "px-8 py-4", children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "Blockchain Consultation"] })] })] }) }) }) })] })] }));
}
//# sourceMappingURL=Web3IntegrationPage.js.map