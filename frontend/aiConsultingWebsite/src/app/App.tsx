"use client";

import { useEffect, useRef, useMemo, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { DarkModeProvider } from "./components/DarkModeProvider";
import { LanguageProvider } from "./components/LanguageProvider";
import { ToastProvider } from "./components/ToastProvider";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SEOHead } from "./components/SEOHead";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LiveChatWidget } from "./components/LiveChatWidget";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { LoadingScreen } from "./components/LoadingScreen";

// Core sections - loaded immediately
import { ProblemSection } from "./components/ProblemSection";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { WhyDelibixSection } from "./components/WhyDelibixSection";
import { ToolsSection } from "./components/ToolsSection";
import { ContactSection } from "./components/ContactSection";

// FIXED: Named imports instead of default imports - MATCHES COMPONENT EXPORTS!
// Core Pages
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { SearchPage } from "./components/SearchPage";
import { SitemapPage } from "./components/SitemapPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { ServerErrorPage } from "./components/ServerErrorPage";
import { MaintenancePage } from "./components/MaintenancePage";
import { DevelopmentJourneyPage } from "./components/DevelopmentJourneyPage";

// Business Pages
import { PricingPage } from "./components/PricingPage";
import { ServicesPage } from "./components/ServicesPage";
import { TeamPage } from "./components/TeamPage";
import { CareersPage } from "./components/CareersPage";
import { BrandingPage } from "./components/BrandingPage";
import { InvestorsPage } from "./components/InvestorsPage";
import { CareerPathsPage } from "./components/CareerPathsPage";
import { ClientJourneyPage } from "./components/ClientJourneyPage";
import { ClientTestimonialsPage } from "./components/ClientTestimonialsPage";
import { TransformationStoriesPage } from "./components/TransformationStoriesPage";
import { ROIShowcasePage } from "./components/ROIShowcasePage";

// Auth Pages
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { ForgotPasswordPage } from "./components/ForgotPasswordPage";
import { AccountDashboardPage } from "./components/AccountDashboardPage";
import { NotificationsPage } from "./components/NotificationsPage";

// AI Tools Pages
import { AIPlaygroundPage } from "./components/AIPlaygroundPage";
import { AIROICalculatorPage } from "./components/AIROICalculatorPage";
import { AIReadinessChecklistPage } from "./components/AIReadinessChecklistPage";
import { StrategyTemplatePage } from "./components/StrategyTemplatePage";
import { AGIPage } from "./components/AGIPage";
import { ExperimentsPage } from "./components/ExperimentsPage";
import { CostCalculatorPage } from "./components/CostCalculatorPage";
import { DigitalReadinessPage } from "./components/DigitalReadinessPage";
import { DigitalTransformationPlannerPage } from "./components/DigitalTransformationPlannerPage";
import { ComplianceCheckerPage } from "./components/ComplianceCheckerPage";
import { RiskAssessmentPage } from "./components/RiskAssessmentPage";
import { SkillAssessmentPage } from "./components/SkillAssessmentPage";
import { TimelineEstimatorPage } from "./components/TimelineEstimatorPage";
import { ResourcePlannerPage } from "./components/ResourcePlannerPage";
import { CompetitorAnalysisPage } from "./components/CompetitorAnalysisPage";
import { DigitalBenchmarksPage } from "./components/DigitalBenchmarksPage";

// Industry Pages
import { HealthcareDigitalPage } from "./components/HealthcareDigitalPage";
import { FinanceDigitalPage } from "./components/FinanceDigitalPage";
import { ManufacturingDigitalPage } from "./components/ManufacturingDigitalPage";
import { RetailDigitalPage } from "./components/RetailDigitalPage";
import { EducationDigitalPage } from "./components/EducationDigitalPage";
import { GovernmentDigitalPage } from "./components/GovernmentDigitalPage";
import { SMEDigitalPage } from "./components/SMEDigitalPage";
import { StartupDigitalPage } from "./components/StartupDigitalPage";
import { AgricultureDigitalPage } from "./components/AgricultureDigitalPage";

// Consulting Pages
import { DigitalStrategyPage } from "./components/DigitalStrategyPage";
import { BusinessProcessPage } from "./components/BusinessProcessPage";
import { TechStackConsultingPage } from "./components/TechStackConsultingPage";
import { DataStrategyPage } from "./components/DataStrategyPage";
import { DigitalWorkforcePage } from "./components/DigitalWorkforcePage";
import { CyberSecurityConsultingPage } from "./components/CyberSecurityConsultingPage";
import { CloudTransformationPage } from "./components/CloudTransformationPage";
import { AutomationConsultingPage } from "./components/AutomationConsultingPage";
import { BusinessIntelligencePage } from "./components/BusinessIntelligencePage";
import { AIConsultingToolsPage } from "./components/AIConsultingToolsPage";
import { ConsultingFrameworksPage } from "./components/ConsultingFrameworksPage";
import { ConsultingMethodologyPage } from "./components/ConsultingMethodologyPage";
import { ChangeManagementPage } from "./components/ChangeManagementPage";
import { ProjectManagementPage } from "./components/ProjectManagementPage";
import { ImplementationTimelinePage } from "./components/ImplementationTimelinePage";
import { PostImplementationPage } from "./components/PostImplementationPage";

// Platform Pages
import { DigitalMaturityPage } from "./components/DigitalMaturityPage";
import { BusinessTransformationPage } from "./components/BusinessTransformationPage";
import { TechStackAnalyzerPage } from "./components/TechStackAnalyzerPage";
import { ROIDashboardPage } from "./components/ROIDashboardPage";
import { ProcessOptimizerPage } from "./components/ProcessOptimizerPage";
import { APIExchangePage } from "./components/APIExchangePage";
import { DigitalMarketplacePage } from "./components/DigitalMarketplacePage";
import { IntegrationHubPage } from "./components/IntegrationHubPage";
import { InnovationLabPage } from "./components/InnovationLabPage";
import { TechRadarPage } from "./components/TechRadarPage";
import { VendorEcosystemPage } from "./components/VendorEcosystemPage";

// Technology Pages
import { MetaverseConsultingPage } from "./components/MetaverseConsultingPage";
import { IoTEcosystemPage } from "./components/IoTEcosystemPage";
import { EdgeComputingPage } from "./components/EdgeComputingPage";
import { QuantumComputingPage } from "./components/QuantumComputingPage";
import { Web3IntegrationPage } from "./components/Web3IntegrationPage";
import { AIEthicsCheckerPage } from "./components/AIEthicsCheckerPage";
import { AIResearchCenterPage } from "./components/AIResearchCenterPage";
import { DataGovernancePage } from "./components/DataGovernancePage";

// Academy Pages
import { DelibixAcademyPage } from "./components/DelibixAcademyPage";
import { InstructorPortalPage } from "./components/InstructorPortalPage";
import { ExamCenterPage } from "./components/ExamCenterPage";
import { ClientOnboardingPage } from "./components/ClientOnboardingPage";
import { EnterprisePortalPage } from "./components/EnterprisePortalPage";

// Regional Pages
import { SoutheastAsiaPage } from "./components/SoutheastAsiaPage";
import { IndonesiaDigitalPage } from "./components/IndonesiaDigitalPage";
import { SingaporeHubPage } from "./components/SingaporeHubPage";
import { MalaysiaHubPage } from "./components/MalaysiaHubPage";
import { ThailandHubPage } from "./components/ThailandHubPage";
import { VietnamHubPage } from "./components/VietnamHubPage";
import { AsiaPacificPage } from "./components/AsiaPacificPage";
import { GlobalDeliveryPage } from "./components/GlobalDeliveryPage";

// Resource Pages
import { BlogPage } from "./components/BlogPage";
import { CommunityPage } from "./components/CommunityPage";
import { DocumentationPage } from "./components/DocumentationPage";
import { EventsWorkshopsPage } from "./components/EventsWorkshopsPage";
import { FAQPage } from "./components/FAQPage";
import { HelpCenterPage } from "./components/HelpCenterPage";
import { SupportPage } from "./components/SupportPage";
import { CommunityForumPage } from "./components/CommunityForumPage";
import { KnowledgeBasePage } from "./components/KnowledgeBasePage";
import { WhitepapersPage } from "./components/WhitepapersPage";
import { GlossaryPage } from "./components/GlossaryPage";
import { BestPracticesPage } from "./components/BestPracticesPage";
import { TemplateLibraryPage } from "./components/TemplateLibraryPage";
import { ToolsDirectoryPage } from "./components/ToolsDirectoryPage";
import { MarketResearchPage } from "./components/MarketResearchPage";
import { FutureOfDigitalPage } from "./components/FutureOfDigitalPage";
import { WebinarArchivePage } from "./components/WebinarArchivePage";

// Business Development Pages
import { NewsletterPage } from "./components/NewsletterPage";
import { SubmitIdeaPage } from "./components/SubmitIdeaPage";
import { AffiliatePage } from "./components/AffiliatePage";
import { DemoRequestPage } from "./components/DemoRequestPage";
import { EnterpriseSolutionsPage } from "./components/EnterpriseSolutionsPage";
import { SuccessStoriesPage } from "./components/SuccessStoriesPage";
import { DeveloperPortalPage } from "./components/DeveloperPortalPage";
import { TrainingCertificationPage } from "./components/TrainingCertificationPage";
import { CertificationProgramPage } from "./components/CertificationProgramPage";
import { CourseCatalogPage } from "./components/CourseCatalogPage";
import { DigitalUniversityPage } from "./components/DigitalUniversityPage";

// Media Pages
import { PressReleasesPage } from "./components/PressReleasesPage";
import { MediaCoveragePage } from "./components/MediaCoveragePage";
import { PressMediaKitPage } from "./components/PressMediaKitPage";

// Legal Pages
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { TermsServicePage } from "./components/TermsServicePage";
import { SecurityPage } from "./components/SecurityPage";
import { CookiesPolicyPage } from "./components/CookiesPolicyPage";
import { EthicsTransparencyPage } from "./components/EthicsTransparencyPage";

// Admin Pages
import { AdminDashboardPage } from "./components/AdminDashboardPage";
import { AdvancedAnalyticsDashboard } from "./components/AdvancedAnalyticsDashboard";
import { ShoppingCartPage } from "./components/ShoppingCartPage";
import { MerchandiseStorePage } from "./components/MerchandiseStorePage";
import { SystemStatusPage } from "./components/SystemStatusPage";
import { DigitalResearchPage } from "./components/DigitalResearchPage";

// Partners Pages
import { ClientsPage } from "./components/ClientsPage";
import { PartnersPage } from "./components/PartnersPage";
import { ChannelPartnersPage } from "./components/ChannelPartnersPage";
import { ConsultingPartnersPage } from "./components/ConsultingPartnersPage";
import { ImplementationPartnersPage } from "./components/ImplementationPartnersPage";
import { TechnologyPartnersPage } from "./components/TechnologyPartnersPage";
import { UniversityPartnersPage } from "./components/UniversityPartnersPage";

// Enhanced SEO Configuration with comprehensive coverage
const seoConfig = {
  home: {
    title: "Delibix - AI-Native Digital Consulting | Transform Your Business with AI",
    description: "Leading AI consulting company in Yogyakarta, Indonesia. We help businesses accelerate digital transformation, implement AI solutions, and achieve sustainable growth. Expert AI consulting services.",
    keywords: ['AI consulting', 'digital transformation', 'artificial intelligence', 'business automation', 'Indonesia AI company', 'Yogyakarta consulting', 'Southeast Asia digital transformation'],
    canonicalUrl: '/',
    schemaType: 'Organization' as const,
    ogImage: '/images/og/delibix-home.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Delibix",
      "url": "https://delibix.com",
      "logo": "https://delibix.com/logo.png",
      "description": "AI-Native Digital Consulting company helping businesses transform through artificial intelligence and digital innovation.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Yogyakarta",
        "addressCountry": "ID"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+62-857-7002-4933",
        "contactType": "customer service",
        "areaServed": "ID",
        "availableLanguage": ["en", "id"]
      }
    }
  },
  // Development Journey Page SEO
  'development-journey': {
    title: "Development Journey - Building Delibix Website | Behind the Scenes",
    description: "Explore the complete development journey of Delibix website. From initial concept to production-ready platform - a story of collaboration, innovation, and technical excellence.",
    keywords: ['development journey', 'website development process', 'collaboration story', 'technical achievements', 'Delibix development', 'web development timeline'],
    canonicalUrl: '/development-journey',
    schemaType: 'WebPage' as const,
    ogImage: '/images/og/delibix-journey.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Delibix Development Journey",
      "description": "Complete story of building Delibix website - from concept to production",
      "about": {
        "@type": "SoftwareApplication",
        "name": "Delibix Website",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser"
      }
    }
  },
  // Technology Pages SEO
  'metaverse-consulting': {
    title: "Metaverse Consulting - Virtual World Business Solutions | Delibix",
    description: "Build immersive virtual worlds and AI-powered metaverse experiences. Transform your business with cutting-edge metaverse technologies and virtual commerce solutions.",
    keywords: ['metaverse consulting', 'virtual reality business', 'VR solutions', 'virtual commerce', 'immersive experiences'],
    canonicalUrl: '/metaverse-consulting',
    schemaType: 'Service' as const,
    ogImage: '/images/og/delibix-metaverse.jpg'
  },
  'iot-ecosystem': {
    title: "IoT Ecosystem Platform - Connected Device Solutions | Delibix",
    description: "Build intelligent connected systems with AI-powered IoT solutions. Transform operations with real-time data, predictive analytics, and automated decision making.",
    keywords: ['IoT ecosystem', 'Internet of Things', 'connected devices', 'IoT platform', 'smart sensors'],
    canonicalUrl: '/iot-ecosystem',
    schemaType: 'Service' as const,
    ogImage: '/images/og/delibix-iot.jpg'
  },
  'edge-computing': {
    title: "Edge Computing AI - Ultra-Low Latency Processing | Delibix",
    description: "Deploy AI at the edge for real-time decision making. Ultra-low latency processing, enhanced privacy, and intelligent systems that process data locally.",
    keywords: ['edge computing', 'edge AI', 'real-time processing', 'low latency AI', 'distributed computing'],
    canonicalUrl: '/edge-computing',
    schemaType: 'Service' as const,
    ogImage: '/images/og/delibix-edge.jpg'
  },
  // Academy Pages SEO
  'delibix-academy': {
    title: "Delibix Academy - AI Education & Certification Platform",
    description: "Master AI and digital transformation with industry-expert courses, hands-on projects, and recognized certifications. Learn from the best in AI consulting.",
    keywords: ['AI education', 'digital transformation training', 'AI certification', 'online learning', 'professional development'],
    canonicalUrl: '/delibix-academy',
    schemaType: 'EducationalOrganization' as const,
    ogImage: '/images/og/delibix-academy.jpg'
  },
  'instructor-portal': {
    title: "Instructor Portal - Teach AI & Digital Innovation | Delibix Academy",
    description: "Join our expert instructor community. Share your AI expertise, manage courses, track student progress, and grow your teaching impact at Delibix Academy.",
    keywords: ['AI instructor', 'online teaching', 'course creation', 'instructor portal', 'education platform'],
    canonicalUrl: '/instructor-portal',
    schemaType: 'WebPage' as const,
    ogImage: '/images/og/delibix-instructor.jpg'
  },
  'exam-center': {
    title: "Exam Center - AI Certification Exams | Delibix Academy",
    description: "Validate your AI expertise with industry-recognized certifications. Take secure proctored exams, track progress, and earn credentials that advance your career.",
    keywords: ['AI certification', 'online exams', 'professional certification', 'exam center', 'skill validation'],
    canonicalUrl: '/exam-center',
    schemaType: 'WebPage' as const,
    ogImage: '/images/og/delibix-exams.jpg'
  },
  // Enterprise Pages SEO
  'client-onboarding': {
    title: "Client Onboarding - Seamless Project Initiation | Delibix",
    description: "Streamlined onboarding process for new clients. From initial consultation to project kickoff, we ensure smooth transition to digital transformation success.",
    keywords: ['client onboarding', 'project initiation', 'consultation process', 'client success', 'digital transformation'],
    canonicalUrl: '/client-onboarding',
    schemaType: 'Service' as const,
    ogImage: '/images/og/delibix-onboarding.jpg'
  },
  'enterprise-portal': {
    title: "Enterprise Portal - Advanced Business Solutions | Delibix",
    description: "Comprehensive enterprise portal for large-scale digital transformation. Advanced AI solutions, dedicated support, and enterprise-grade security.",
    keywords: ['enterprise portal', 'enterprise AI', 'large scale transformation', 'business solutions', 'enterprise consulting'],
    canonicalUrl: '/enterprise-portal',
    schemaType: 'Service' as const,
    ogImage: '/images/og/delibix-enterprise.jpg'
  },
  // Additional key pages
  search: {
    title: "Search - Find AI Solutions & Resources | Delibix",
    description: "Search through our comprehensive library of AI consulting resources, services, tools, and knowledge base. Find exactly what you need for your digital transformation journey.",
    keywords: ['search', 'AI resources', 'find solutions', 'knowledge base', 'AI tools', 'consulting resources'],
    canonicalUrl: '/search',
    schemaType: 'WebPage' as const,
    ogImage: '/images/og/delibix-search.jpg'
  },
  about: {
    title: "About Delibix - AI-Native Digital Consulting Experts",
    description: "Learn about Delibix, Indonesia's premier AI consulting firm. Our mission, vision, and team of experts helping businesses transform through artificial intelligence and digital innovation.",
    keywords: ['about delibix', 'AI consulting team', 'Indonesia digital experts', 'company mission', 'AI consulting history'],
    canonicalUrl: '/about',
    schemaType: 'Organization' as const,
    ogImage: '/images/og/delibix-about.jpg'
  },
  services: {
    title: "AI Consulting Services - Digital Transformation Solutions | Delibix",
    description: "Comprehensive AI consulting services including digital strategy, business automation, machine learning implementation, and enterprise AI solutions. Transform your business with our expert team.",
    keywords: ['AI consulting services', 'digital transformation services', 'business automation', 'machine learning consulting', 'enterprise AI solutions'],
    canonicalUrl: '/services',
    schemaType: 'Service' as const,
    serviceName: 'AI Consulting Services',
    serviceType: 'Business Consulting',
    ogImage: '/images/og/delibix-services.jpg'
  },
  pricing: {
    title: "AI Consulting Pricing - Transparent & Flexible Plans | Delibix",
    description: "Explore our transparent pricing for AI consulting services. Flexible engagement models from strategy sprints to full transformation programs. Get started with your AI journey today.",
    keywords: ['AI consulting pricing', 'digital transformation cost', 'consulting rates', 'AI project pricing', 'engagement models'],
    canonicalUrl: '/pricing',
    schemaType: 'Service' as const,
    ogImage: '/images/og/delibix-pricing.jpg'
  },
  contact: {
    title: "Contact Delibix - Get Your Free AI Consultation | Yogyakarta",
    description: "Contact Delibix for your free AI consultation. Located in Yogyakarta, Indonesia. Multiple ways to connect - phone, email, WhatsApp, or visit our office. Start your AI transformation today.",
    keywords: ['contact delibix', 'AI consultation', 'Yogyakarta office', 'free consultation', 'AI consulting contact'],
    canonicalUrl: '/contact',
    schemaType: 'LocalBusiness' as const,
    ogImage: '/images/og/delibix-contact.jpg'
  },
  // AI Tools SEO
  'ai-playground': {
    title: "AI Playground - Experiment with AI Tools | Delibix",
    description: "Explore and experiment with cutting-edge AI tools in our interactive playground. Test AI capabilities, learn about implementation, and discover how AI can transform your business.",
    keywords: ['AI playground', 'AI tools', 'AI experiments', 'machine learning tools', 'AI testing platform'],
    canonicalUrl: '/ai-playground',
    schemaType: 'WebPage' as const,
    ogImage: '/images/og/delibix-ai-playground.jpg'
  },
  'ai-roi-calculator': {
    title: "AI ROI Calculator - Calculate Your AI Investment Returns | Delibix",
    description: "Free AI ROI calculator to estimate the return on investment for your AI initiatives. Comprehensive cost-benefit analysis, timeline estimation, and risk assessment for AI projects.",
    keywords: ['AI ROI calculator', 'AI investment returns', 'AI cost benefit analysis', 'AI project calculator', 'AI implementation cost'],
    canonicalUrl: '/ai-roi-calculator',
    schemaType: 'WebPage' as const,
    ogImage: '/images/og/delibix-roi-calculator.jpg'
  }
};

// Default SEO for pages not explicitly configured
const getDefaultSEO = (page: string) => ({
  title: `${page.charAt(0).toUpperCase() + page.slice(1).replace(/-/g, ' ')} | Delibix`,
  description: `Explore our ${page.replace(/-/g, ' ')} solutions and services. Delibix helps businesses transform through AI and digital innovation.`,
  keywords: [page.replace(/-/g, ' '), 'AI consulting', 'digital transformation', 'Delibix'],
  canonicalUrl: `/${page}`,
  schemaType: 'WebPage' as const,
  ogImage: '/images/og/delibix-default.jpg'
});

// FIXED: Valid pages list for proper routing - ADDED development-journey
const validPages = [
  'home',
  // Core pages
  'about', 'contact', 'search', 'sitemap', '404', '500', 'maintenance', 'development-journey',
  // Business pages
  'pricing', 'services', 'team', 'careers', 'branding', 'investors', 'career-paths', 
  'client-journey', 'client-testimonials', 'transformation-stories', 'roi-showcase',
  // Auth pages
  'login', 'signup', 'forgot-password', 'account-dashboard', 'notifications',
  // AI Tools pages
  'ai-playground', 'ai-roi-calculator', 'ai-readiness-checklist', 'strategy-template', 
  'agi', 'experiments', 'cost-calculator', 'digital-readiness', 'digital-transformation-planner',
  'compliance-checker', 'risk-assessment', 'skill-assessment', 'timeline-estimator', 
  'resource-planner', 'competitor-analysis', 'digital-benchmarks',
  // Industry pages
  'healthcare-digital', 'finance-digital', 'manufacturing-digital', 'retail-digital', 
  'education-digital', 'government-digital', 'sme-digital', 'startup-digital', 'agriculture-digital',
  // Consulting pages
  'digital-strategy', 'business-process', 'tech-stack-consulting', 'data-strategy', 
  'digital-workforce', 'cybersecurity-consulting', 'cloud-transformation', 'automation-consulting',
  'business-intelligence', 'ai-consulting-tools', 'consulting-frameworks', 'consulting-methodology',
  'change-management', 'project-management', 'implementation-timeline', 'post-implementation',
  // Platform pages
  'digital-maturity', 'business-transformation', 'tech-stack-analyzer', 'roi-dashboard', 
  'process-optimizer', 'api-exchange', 'digital-marketplace', 'integration-hub', 'innovation-lab',
  'tech-radar', 'vendor-ecosystem',
  // Technology pages
  'metaverse-consulting', 'iot-ecosystem', 'edge-computing', 'quantum-computing', 
  'web3-integration', 'ai-ethics-checker', 'ai-research-center', 'data-governance',
  // Academy pages
  'delibix-academy', 'instructor-portal', 'exam-center', 'client-onboarding', 'enterprise-portal',
  // Regional pages
  'southeast-asia', 'indonesia-digital', 'singapore-hub', 'malaysia-hub', 'thailand-hub', 
  'vietnam-hub', 'asia-pacific', 'global-delivery',
  // Resource pages
  'blog', 'community', 'documentation', 'events-workshops', 'faq', 'help-center', 'support',
  'community-forum', 'knowledge-base', 'whitepapers', 'glossary', 'best-practices', 
  'template-library', 'tools-directory', 'market-research', 'future-of-digital', 'webinar-archive',
  // Business development pages
  'newsletter', 'submit-idea', 'affiliate', 'demo-request', 'enterprise-solutions', 
  'success-stories', 'developer-portal', 'training-certification', 'certification-program', 
  'course-catalog', 'digital-university',
  // Media pages
  'press-releases', 'media-coverage', 'press-media-kit',
  // Legal pages
  'privacy-policy', 'terms-service', 'security', 'cookies-policy', 'ethics-transparency',
  // Admin pages
  'admin-dashboard', 'advanced-analytics', 'shopping-cart', 'merchandise-store', 
  'system-status', 'digital-research',
  // Partners pages
  'clients', 'partners', 'channel-partners', 'consulting-partners', 'implementation-partners', 
  'technology-partners', 'university-partners'
];

// FIXED: Improved URL parsing with proper error handling
const parseURLPath = (pathname: string): string => {
  try {
    // Remove leading slash and decode URI components
    const cleanPath = decodeURIComponent(pathname).replace(/^\/+/, '').replace(/\/+$/, '');
    
    // Handle root path explicitly
    if (!cleanPath || cleanPath === '' || cleanPath === '/') {
      return 'home';
    }
    
    // Remove query parameters and hash fragments
    const pathWithoutQuery = cleanPath.split('?')[0].split('#')[0];
    
    // Validate against known pages
    if (validPages.includes(pathWithoutQuery)) {
      return pathWithoutQuery;
    }
    
    // Log invalid paths for debugging (only in development)
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      console.warn(`[Delibix Router] Invalid path attempted: "${pathWithoutQuery}"`);
    }
    
    // Return 404 for invalid paths
    return '404';
  } catch (error) {
    console.error('[Delibix Router] Error parsing URL path:', error);
    return 'home'; // Fallback to home on error
  }
};

// ENHANCED: Improved scroll to top functionality
const scrollToTop = (behavior: 'smooth' | 'instant' = 'smooth') => {
  try {
    // Try multiple scroll methods for cross-browser compatibility
    
    // Method 1: Scroll window
    window.scrollTo({ 
      top: 0, 
      left: 0, 
      behavior: behavior 
    });
    
    // Method 2: Scroll document.body (fallback for some browsers)
    if (document.body.scrollTop !== 0) {
      document.body.scrollTop = 0;
    }
    
    // Method 3: Scroll document.documentElement (fallback for Firefox)
    if (document.documentElement.scrollTop !== 0) {
      document.documentElement.scrollTop = 0;
    }
    
    // Method 4: Try to scroll any scrollable container with class 'scroll-container'
    const scrollContainers = document.querySelectorAll('.scroll-container, [data-scroll-container]');
    scrollContainers.forEach(container => {
      if (container.scrollTop !== 0) {
        container.scrollTo({ top: 0, behavior: behavior });
      }
    });
    
  } catch (error) {
    console.warn('[Scroll] Error scrolling to top:', error);
    // Fallback: Force scroll without smooth behavior
    try {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } catch (fallbackError) {
      console.error('[Scroll] Critical error in scroll fallback:', fallbackError);
    }
  }
};

// Custom hook for navigation with enhanced scroll handling
const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isNavigating, setIsNavigating] = useState(false);

  const navigate = useCallback((page: string, options?: { instant?: boolean, skipScroll?: boolean }) => {
    // Validate page before navigation
    const targetPage = validPages.includes(page) ? page : '404';
    
    setIsNavigating(true);
    
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: seoConfig[targetPage as keyof typeof seoConfig]?.title || `${targetPage} | Delibix`,
        page_location: `${window.location.origin}/${targetPage === 'home' ? '' : targetPage}`,
        page_path: targetPage === 'home' ? '/' : `/${targetPage}`
      });
    }

    // Update current page state
    setCurrentPage(targetPage);
    
    // Update URL in browser
    const newURL = targetPage === 'home' ? '/' : `/${targetPage}`;
    if (window.location.pathname !== newURL) {
      window.history.pushState({}, '', newURL);
    }
    
    // ENHANCED: Smart scroll to top with proper timing
    if (!options?.skipScroll) {
      const scrollBehavior = options?.instant ? 'instant' : 'smooth';
      
      // Immediate scroll attempt
      scrollToTop(scrollBehavior);
      
      // Delayed scroll for React state updates (after component renders)
      setTimeout(() => {
        scrollToTop(scrollBehavior);
      }, 50);
      
      // Additional scroll attempt after animations might have started
      setTimeout(() => {
        scrollToTop(scrollBehavior);
      }, 150);
      
      // Final scroll attempt after full page render
      setTimeout(() => {
        scrollToTop(scrollBehavior);
        setIsNavigating(false);
      }, 300);
    } else {
      setIsNavigating(false);
    }
    
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    navigate('search');
    
    // Track search analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'search', {
        search_term: query,
        event_category: 'engagement',
        event_label: 'site_search'
      });
    }
  }, [navigate]);

  return { currentPage, navigate, searchQuery, handleSearch, isNavigating };
};

// Custom hook for SEO with enhanced structured data
const useSEO = (page: string) => {
  return useMemo(() => {
    const config = seoConfig[page as keyof typeof seoConfig] || getDefaultSEO(page);
    return {
      ...config,
      modifiedDate: new Date().toISOString(),
    };
  }, [page]);
};

// Analytics initialization
const initializeAnalytics = () => {
  // Google Analytics 4
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    `;
    document.head.appendChild(script2);
  }
};

// Performance monitoring (web-vitals not installed)
const trackWebVitals = () => {};

export default function App() {
  const { currentPage, navigate, searchQuery, handleSearch, isNavigating } = useNavigation();
  const [isOnline, setIsOnline] = useState(true);
  const [isInstallable, setIsInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  
  // ENHANCED: Loading state management - FIXED: No duplicate declarations
  const [isLoading, setIsLoading] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  // PWA Installation and Offline Detection
  useEffect(() => {
    // Initialize analytics
    initializeAnalytics();
    trackWebVitals();

    // PWA handlers
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Register event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial online status
    setIsOnline(navigator.onLine);

    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // ENHANCED: App initialization with loading state
    const initializeApp = async () => {
      try {
        // Simulate app initialization tasks
        await new Promise(resolve => setTimeout(resolve, 500)); // Initial delay

        // FIXED: Improved URL initialization with proper error handling
        const currentPath = parseURLPath(window.location.pathname);
        console.log(`[Delibix Router] Initializing with path: "${currentPath}"`);
        navigate(currentPath, { instant: true }); // Use instant scroll on initial load

        // Pre-load critical resources
        await Promise.all([
          // Preload fonts
          document.fonts.ready,
          // Simulate other critical resources loading
          new Promise(resolve => setTimeout(resolve, 300))
        ]);

        // Minimum loading time for better UX (prevent flash)
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setIsAppReady(true);
        
        // Small delay before hiding loading screen
        setTimeout(() => {
          setIsLoading(false);
        }, 300);

      } catch (error) {
        console.error('[Delibix] Failed to initialize app, defaulting to home:', error);
        navigate('home', { instant: true });
        setIsAppReady(true);
        setIsLoading(false);
      }
    };

    initializeApp();

    // ENHANCED: Handle browser back/forward navigation with proper scroll
    const handlePopState = () => {
      const newPath = parseURLPath(window.location.pathname);
      navigate(newPath, { instant: false }); // Smooth scroll on browser navigation
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  // Handle loading completion
  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Install PWA
  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      
      // Track installation
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'pwa_install', {
          outcome: outcome,
          event_category: 'engagement'
        });
      }
      
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  // Check if current page should show live chat
  const shouldShowLiveChat = () => {
    const chatPages = [
      'home', 'about', 'services', 'pricing', 'contact', 'demo-request',
      'enterprise-solutions', 'ai-playground', 'ai-roi-calculator', 
      'support', 'help-center', 'faq', 'digital-marketplace', 'innovation-lab',
      'metaverse-consulting', 'iot-ecosystem', 'edge-computing', 'delibix-academy',
      'instructor-portal', 'exam-center', 'client-onboarding', 'enterprise-portal',
      'development-journey'
    ];
    return chatPages.includes(currentPage);
  };

  // Get SEO configuration for current page
  const currentSEO = useSEO(currentPage);
  const showLiveChat = shouldShowLiveChat();

  // FIXED: Simple page rendering - USING NAMED COMPONENTS CORRECTLY!
  const renderCurrentPage = () => {
    switch (currentPage) {
      // Home page - render sections directly
      case 'home':
        return (
          <>
            <ProblemSection />
            <ProcessSection />
            <ServicesSection navigate={navigate} />
            <CaseStudiesSection navigate={navigate} />
            <WhyDelibixSection />
            <ToolsSection navigate={navigate} />
            <ContactSection />
          </>
        );

      // Core pages
      case 'about': return <AboutPage navigate={navigate} />;
      case 'contact': return <ContactPage navigate={navigate} />;
      case 'search': return <SearchPage navigate={navigate} searchQuery={searchQuery} />;
      case 'sitemap': return <SitemapPage navigate={navigate} />;
      case 'development-journey': return <DevelopmentJourneyPage navigate={navigate} />;
      case '404': return <NotFoundPage navigate={navigate} />;
      case '500': return <ServerErrorPage navigate={navigate} />;
      case 'maintenance': return <MaintenancePage navigate={navigate} />;

      // Business pages
      case 'pricing': return <PricingPage navigate={navigate} />;
      case 'services': return <ServicesPage navigate={navigate} />;
      case 'team': return <TeamPage navigate={navigate} />;
      case 'careers': return <CareersPage navigate={navigate} />;
      case 'branding': return <BrandingPage navigate={navigate} />;
      case 'investors': return <InvestorsPage navigate={navigate} />;
      case 'career-paths': return <CareerPathsPage navigate={navigate} />;
      case 'client-journey': return <ClientJourneyPage navigate={navigate} />;
      case 'client-testimonials': return <ClientTestimonialsPage navigate={navigate} />;
      case 'transformation-stories': return <TransformationStoriesPage navigate={navigate} />;
      case 'roi-showcase': return <ROIShowcasePage navigate={navigate} />;

      // Auth pages
      case 'login': return <LoginPage navigate={navigate} />;
      case 'signup': return <SignupPage navigate={navigate} />;
      case 'forgot-password': return <ForgotPasswordPage navigate={navigate} />;
      case 'account-dashboard': return <AccountDashboardPage navigate={navigate} />;
      case 'notifications': return <NotificationsPage navigate={navigate} />;

      // AI Tools pages
      case 'ai-playground': return <AIPlaygroundPage navigate={navigate} />;
      case 'ai-roi-calculator': return <AIROICalculatorPage navigate={navigate} />;
      case 'ai-readiness-checklist': return <AIReadinessChecklistPage navigate={navigate} />;
      case 'strategy-template': return <StrategyTemplatePage navigate={navigate} />;
      case 'agi': return <AGIPage navigate={navigate} />;
      case 'experiments': return <ExperimentsPage navigate={navigate} />;
      case 'cost-calculator': return <CostCalculatorPage navigate={navigate} />;
      case 'digital-readiness': return <DigitalReadinessPage navigate={navigate} />;
      case 'digital-transformation-planner': return <DigitalTransformationPlannerPage navigate={navigate} />;
      case 'compliance-checker': return <ComplianceCheckerPage navigate={navigate} />;
      case 'risk-assessment': return <RiskAssessmentPage navigate={navigate} />;
      case 'skill-assessment': return <SkillAssessmentPage navigate={navigate} />;
      case 'timeline-estimator': return <TimelineEstimatorPage navigate={navigate} />;
      case 'resource-planner': return <ResourcePlannerPage navigate={navigate} />;
      case 'competitor-analysis': return <CompetitorAnalysisPage navigate={navigate} />;
      case 'digital-benchmarks': return <DigitalBenchmarksPage navigate={navigate} />;

      // Industry pages
      case 'healthcare-digital': return <HealthcareDigitalPage navigate={navigate} />;
      case 'finance-digital': return <FinanceDigitalPage navigate={navigate} />;
      case 'manufacturing-digital': return <ManufacturingDigitalPage navigate={navigate} />;
      case 'retail-digital': return <RetailDigitalPage navigate={navigate} />;
      case 'education-digital': return <EducationDigitalPage navigate={navigate} />;
      case 'government-digital': return <GovernmentDigitalPage navigate={navigate} />;
      case 'sme-digital': return <SMEDigitalPage navigate={navigate} />;
      case 'startup-digital': return <StartupDigitalPage navigate={navigate} />;
      case 'agriculture-digital': return <AgricultureDigitalPage navigate={navigate} />;

      // Consulting pages
      case 'digital-strategy': return <DigitalStrategyPage navigate={navigate} />;
      case 'business-process': return <BusinessProcessPage navigate={navigate} />;
      case 'tech-stack-consulting': return <TechStackConsultingPage navigate={navigate} />;
      case 'data-strategy': return <DataStrategyPage navigate={navigate} />;
      case 'digital-workforce': return <DigitalWorkforcePage navigate={navigate} />;
      case 'cybersecurity-consulting': return <CyberSecurityConsultingPage navigate={navigate} />;
      case 'cloud-transformation': return <CloudTransformationPage navigate={navigate} />;
      case 'automation-consulting': return <AutomationConsultingPage navigate={navigate} />;
      case 'business-intelligence': return <BusinessIntelligencePage navigate={navigate} />;
      case 'ai-consulting-tools': return <AIConsultingToolsPage navigate={navigate} />;
      case 'consulting-frameworks': return <ConsultingFrameworksPage navigate={navigate} />;
      case 'consulting-methodology': return <ConsultingMethodologyPage navigate={navigate} />;
      case 'change-management': return <ChangeManagementPage navigate={navigate} />;
      case 'project-management': return <ProjectManagementPage navigate={navigate} />;
      case 'implementation-timeline': return <ImplementationTimelinePage navigate={navigate} />;
      case 'post-implementation': return <PostImplementationPage navigate={navigate} />;

      // Platform pages
      case 'digital-maturity': return <DigitalMaturityPage navigate={navigate} />;
      case 'business-transformation': return <BusinessTransformationPage navigate={navigate} />;
      case 'tech-stack-analyzer': return <TechStackAnalyzerPage navigate={navigate} />;
      case 'roi-dashboard': return <ROIDashboardPage navigate={navigate} />;
      case 'process-optimizer': return <ProcessOptimizerPage navigate={navigate} />;
      case 'api-exchange': return <APIExchangePage navigate={navigate} />;
      case 'digital-marketplace': return <DigitalMarketplacePage navigate={navigate} />;
      case 'integration-hub': return <IntegrationHubPage navigate={navigate} />;
      case 'innovation-lab': return <InnovationLabPage navigate={navigate} />;
      case 'tech-radar': return <TechRadarPage navigate={navigate} />;
      case 'vendor-ecosystem': return <VendorEcosystemPage navigate={navigate} />;

      // Technology pages
      case 'metaverse-consulting': return <MetaverseConsultingPage navigate={navigate} />;
      case 'iot-ecosystem': return <IoTEcosystemPage navigate={navigate} />;
      case 'edge-computing': return <EdgeComputingPage navigate={navigate} />;
      case 'quantum-computing': return <QuantumComputingPage navigate={navigate} />;
      case 'web3-integration': return <Web3IntegrationPage navigate={navigate} />;
      case 'ai-ethics-checker': return <AIEthicsCheckerPage navigate={navigate} />;
      case 'ai-research-center': return <AIResearchCenterPage navigate={navigate} />;
      case 'data-governance': return <DataGovernancePage navigate={navigate} />;

      // Academy pages
      case 'delibix-academy': return <DelibixAcademyPage navigate={navigate} />;
      case 'instructor-portal': return <InstructorPortalPage navigate={navigate} />;
      case 'exam-center': return <ExamCenterPage navigate={navigate} />;
      case 'client-onboarding': return <ClientOnboardingPage navigate={navigate} />;
      case 'enterprise-portal': return <EnterprisePortalPage navigate={navigate} />;

      // Regional pages
      case 'southeast-asia': return <SoutheastAsiaPage navigate={navigate} />;
      case 'indonesia-digital': return <IndonesiaDigitalPage navigate={navigate} />;
      case 'singapore-hub': return <SingaporeHubPage navigate={navigate} />;
      case 'malaysia-hub': return <MalaysiaHubPage navigate={navigate} />;
      case 'thailand-hub': return <ThailandHubPage navigate={navigate} />;
      case 'vietnam-hub': return <VietnamHubPage navigate={navigate} />;
      case 'asia-pacific': return <AsiaPacificPage navigate={navigate} />;
      case 'global-delivery': return <GlobalDeliveryPage navigate={navigate} />;

      // Resource pages
      case 'blog': return <BlogPage navigate={navigate} />;
      case 'community': return <CommunityPage navigate={navigate} />;
      case 'documentation': return <DocumentationPage navigate={navigate} />;
      case 'events-workshops': return <EventsWorkshopsPage navigate={navigate} />;
      case 'faq': return <FAQPage navigate={navigate} />;
      case 'help-center': return <HelpCenterPage navigate={navigate} />;
      case 'support': return <SupportPage navigate={navigate} />;
      case 'community-forum': return <CommunityForumPage navigate={navigate} />;
      case 'knowledge-base': return <KnowledgeBasePage navigate={navigate} />;
      case 'whitepapers': return <WhitepapersPage navigate={navigate} />;
      case 'glossary': return <GlossaryPage navigate={navigate} />;
      case 'best-practices': return <BestPracticesPage navigate={navigate} />;
      case 'template-library': return <TemplateLibraryPage navigate={navigate} />;
      case 'tools-directory': return <ToolsDirectoryPage navigate={navigate} />;
      case 'market-research': return <MarketResearchPage navigate={navigate} />;
      case 'future-of-digital': return <FutureOfDigitalPage navigate={navigate} />;
      case 'webinar-archive': return <WebinarArchivePage navigate={navigate} />;

      // Business development pages
      case 'newsletter': return <NewsletterPage navigate={navigate} />;
      case 'submit-idea': return <SubmitIdeaPage navigate={navigate} />;
      case 'affiliate': return <AffiliatePage navigate={navigate} />;
      case 'demo-request': return <DemoRequestPage navigate={navigate} />;
      case 'enterprise-solutions': return <EnterpriseSolutionsPage navigate={navigate} />;
      case 'success-stories': return <SuccessStoriesPage navigate={navigate} />;
      case 'developer-portal': return <DeveloperPortalPage navigate={navigate} />;
      case 'training-certification': return <TrainingCertificationPage navigate={navigate} />;
      case 'certification-program': return <CertificationProgramPage navigate={navigate} />;
      case 'course-catalog': return <CourseCatalogPage navigate={navigate} />;
      case 'digital-university': return <DigitalUniversityPage navigate={navigate} />;

      // Media pages
      case 'press-releases': return <PressReleasesPage navigate={navigate} />;
      case 'media-coverage': return <MediaCoveragePage navigate={navigate} />;
      case 'press-media-kit': return <PressMediaKitPage navigate={navigate} />;

      // Legal pages
      case 'privacy-policy': return <PrivacyPolicyPage navigate={navigate} />;
      case 'terms-service': return <TermsServicePage navigate={navigate} />;
      case 'security': return <SecurityPage navigate={navigate} />;
      case 'cookies-policy': return <CookiesPolicyPage navigate={navigate} />;
      case 'ethics-transparency': return <EthicsTransparencyPage navigate={navigate} />;

      // Admin pages
      case 'admin-dashboard': return <AdminDashboardPage navigate={navigate} />;
      case 'advanced-analytics': return <AdvancedAnalyticsDashboard navigate={navigate} />;
      case 'shopping-cart': return <ShoppingCartPage navigate={navigate} />;
      case 'merchandise-store': return <MerchandiseStorePage navigate={navigate} />;
      case 'system-status': return <SystemStatusPage navigate={navigate} />;
      case 'digital-research': return <DigitalResearchPage navigate={navigate} />;

      // Partners pages
      case 'clients': return <ClientsPage navigate={navigate} />;
      case 'partners': return <PartnersPage navigate={navigate} />;
      case 'channel-partners': return <ChannelPartnersPage navigate={navigate} />;
      case 'consulting-partners': return <ConsultingPartnersPage navigate={navigate} />;
      case 'implementation-partners': return <ImplementationPartnersPage navigate={navigate} />;
      case 'technology-partners': return <TechnologyPartnersPage navigate={navigate} />;
      case 'university-partners': return <UniversityPartnersPage navigate={navigate} />;

      default:
        return <NotFoundPage navigate={navigate} />;
    }
  };

  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <LanguageProvider>
          <ToastProvider>
            <SEOHead {...currentSEO} />
            
            {/* ENHANCED: Loading Screen */}
            <LoadingScreen 
              isVisible={isLoading}
              onComplete={handleLoadingComplete}
            />

            {/* Main App Content - Only show when app is ready */}
            {isAppReady && (
              <motion.div 
                className="min-h-screen bg-background text-foreground" 
                ref={scrollRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Offline Indicator */}
                {!isOnline && (
                  <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 text-white text-center py-2 text-sm font-medium">
                    You are currently offline. Some features may not be available.
                  </div>
                )}

                {/* PWA Install Banner */}
                {isInstallable && (
                  <div className="fixed top-0 left-0 right-0 z-40 bg-blue-600 text-white p-3">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          📱
                        </div>
                        <div>
                          <p className="font-medium">Install Delibix App</p>
                          <p className="text-xs opacity-90">Get the best experience with our mobile app</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleInstallPWA}
                          className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
                        >
                          Install
                        </button>
                        <button
                          onClick={() => setIsInstallable(false)}
                          className="text-white/80 hover:text-white transition-colors p-2"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <Header 
                  navigate={navigate} 
                  currentPage={currentPage} 
                  onSearch={handleSearch}
                />
                
                <main className="relative" style={{ marginTop: !isOnline || isInstallable ? '60px' : '0' }}>
                  {renderCurrentPage()}
                </main>
                
                <Footer navigate={navigate} />
                
                {/* Live Chat Widget - Show on relevant pages */}
                {showLiveChat && (
                  <LiveChatWidget 
                    position="bottom-right"
                    theme="blue"
                    showRating={true}
                    showTypingIndicator={true}
                    enableFileUpload={true}
                    enableEmoji={true}
                  />
                )}

                {/* ENHANCED: Scroll to Top Button with navigation state awareness */}
                <ScrollToTopButton 
                  showLiveChat={showLiveChat}
                  isNavigating={isNavigating}
                  onScrollToTop={scrollToTop}
                />
              </motion.div>
            )}
          </ToastProvider>
        </LanguageProvider>
      </DarkModeProvider>
    </ErrorBoundary>
  );
}