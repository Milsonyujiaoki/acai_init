interface Breadcrumb {
    label: string;
    href: string;
}
interface SEOHeadProps {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
    ogImage?: string;
    schemaType?: 'WebPage' | 'Organization' | 'Service' | 'LocalBusiness' | 'FAQ';
    serviceName?: string;
    serviceType?: string;
    modifiedDate?: string;
    breadcrumbs?: Breadcrumb[];
    noIndex?: boolean;
    structuredData?: any;
}
export declare function SEOHead({ title, description, keywords, canonicalUrl, ogImage, schemaType, serviceName, serviceType, modifiedDate, breadcrumbs, noIndex, structuredData }: SEOHeadProps): null;
export {};
//# sourceMappingURL=SEOHead.d.ts.map