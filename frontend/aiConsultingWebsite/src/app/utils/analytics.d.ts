interface AnalyticsEvent {
    name: string;
    category: string;
    label?: string;
    value?: number;
    custom_parameters?: Record<string, any>;
}
interface ConversionEvent {
    event_name: string;
    currency?: string;
    value?: number;
    items?: Array<{
        item_id: string;
        item_name: string;
        category: string;
        price?: number;
        quantity?: number;
    }>;
}
declare class Analytics {
    private isInitialized;
    private gtag;
    constructor();
    private initialize;
    trackPageView(page_path: string, page_title: string): void;
    trackEvent({ name, category, label, value, custom_parameters }: AnalyticsEvent): void;
    trackConsultationRequest(consultationType: string, industry: string): void;
    trackDemoBooking(demoType: string, scheduledDate: string): void;
    trackToolUsage(toolName: string, action: string): void;
    trackDownload(resourceType: string, resourceName: string): void;
    trackFormInteraction(formType: string, action: string, fieldName?: string): void;
    trackScrollDepth(percentage: number): void;
    trackTimeOnPage(timeInSeconds: number): void;
    trackSearchQuery(query: string, resultsCount: number): void;
    trackChatInteraction(action: string, message?: string): void;
    trackNewsletterSignup(source: string): void;
    trackPricingViewed(plan: string): void;
    trackConversion(conversion: ConversionEvent): void;
    identifyUser(userId: string, properties?: Record<string, any>): void;
    setUserProperties(properties: Record<string, any>): void;
    private isReady;
    private getUserType;
    private getContentGroup;
    private getTimeBucket;
}
export declare const analytics: Analytics;
export declare const trackWebVitals: () => void;
export declare const initializeScrollTracking: () => void;
export declare const trackError: (error: Error, errorInfo?: any) => void;
export {};
//# sourceMappingURL=analytics.d.ts.map