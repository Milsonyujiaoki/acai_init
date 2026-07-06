interface LocalBusinessSchema {
    "@type": "LocalBusiness";
    name: string;
    description: string;
    url: string;
    telephone: string;
    email?: string;
    address: {
        "@type": "PostalAddress";
        streetAddress: string;
        addressLocality: string;
        addressRegion?: string;
        postalCode: string;
        addressCountry: string;
    };
    geo: {
        "@type": "GeoCoordinates";
        latitude: string;
        longitude: string;
    };
    openingHours: string[];
    priceRange?: string;
    paymentAccepted?: string[];
    currenciesAccepted?: string;
    areaServed?: string[];
    serviceArea?: {
        "@type": "GeoCircle";
        geoMidpoint: {
            "@type": "GeoCoordinates";
            latitude: string;
            longitude: string;
        };
        geoRadius: string;
    };
    logo?: string;
    image?: string[];
    sameAs?: string[];
    foundingDate?: string;
    numberOfEmployees?: string;
    slogan?: string;
}
interface ServiceSchema {
    "@type": "Service";
    name: string;
    description: string;
    provider: {
        "@type": "Organization";
        name: string;
        url: string;
    };
    serviceType: string;
    category?: string;
    audience?: {
        "@type": "BusinessAudience";
        audienceType: string;
    };
    areaServed?: string[];
    hasOfferCatalog?: {
        "@type": "OfferCatalog";
        name: string;
        itemListElement: Array<{
            "@type": "Offer";
            itemOffered: {
                "@type": "Service";
                name: string;
                description: string;
            };
        }>;
    };
    offers?: {
        "@type": "Offer";
        price?: string;
        priceCurrency?: string;
        priceRange?: string;
        availability?: string;
        validFrom?: string;
        validThrough?: string;
    };
}
interface FAQSchema {
    "@type": "FAQPage";
    mainEntity: Array<{
        "@type": "Question";
        name: string;
        acceptedAnswer: {
            "@type": "Answer";
            text: string;
        };
    }>;
}
interface BreadcrumbSchema {
    "@type": "BreadcrumbList";
    itemListElement: Array<{
        "@type": "ListItem";
        position: number;
        name: string;
        item?: string;
    }>;
}
interface WebPageSchema {
    "@type": "WebPage";
    name: string;
    description: string;
    url: string;
    inLanguage: string;
    isPartOf: {
        "@type": "WebSite";
        name: string;
        url: string;
    };
    about?: {
        "@type": "Thing";
        name: string;
    };
    breadcrumb?: BreadcrumbSchema;
    mainEntity?: any;
    author?: {
        "@type": "Organization";
        name: string;
        url: string;
    };
    publisher?: {
        "@type": "Organization";
        name: string;
        logo: {
            "@type": "ImageObject";
            url: string;
        };
    };
    datePublished?: string;
    dateModified?: string;
    keywords?: string[];
}
interface ArticleSchema {
    "@type": "Article";
    headline: string;
    description: string;
    image?: string[];
    author: {
        "@type": "Organization" | "Person";
        name: string;
        url?: string;
    };
    publisher: {
        "@type": "Organization";
        name: string;
        logo: {
            "@type": "ImageObject";
            url: string;
        };
    };
    datePublished: string;
    dateModified: string;
    mainEntityOfPage: {
        "@type": "WebPage";
        "@id": string;
    };
    articleSection?: string;
    wordCount?: number;
    timeRequired?: string;
    keywords?: string[];
    about?: Array<{
        "@type": "Thing";
        name: string;
    }>;
}
interface OrganizationSchema {
    "@type": "Organization";
    name: string;
    description: string;
    url: string;
    logo: string;
    image?: string[];
    address: {
        "@type": "PostalAddress";
        streetAddress: string;
        addressLocality: string;
        addressRegion?: string;
        postalCode: string;
        addressCountry: string;
    };
    contactPoint: {
        "@type": "ContactPoint";
        telephone: string;
        contactType: string;
        availableLanguage: string[];
        email?: string;
    };
    sameAs: string[];
    foundingDate: string;
    foundingLocation: string;
    numberOfEmployees: string;
    industry: string;
    slogan: string;
    knowsAbout?: string[];
    memberOf?: Array<{
        "@type": "Organization";
        name: string;
    }>;
    award?: string[];
    parentOrganization?: {
        "@type": "Organization";
        name: string;
    };
    subOrganization?: Array<{
        "@type": "Organization";
        name: string;
    }>;
}
type StructuredDataSchema = LocalBusinessSchema | ServiceSchema | FAQSchema | BreadcrumbSchema | WebPageSchema | ArticleSchema | OrganizationSchema;
interface StructuredDataProps {
    schema: StructuredDataSchema | StructuredDataSchema[];
    id?: string;
}
export declare function StructuredData({ schema, id }: StructuredDataProps): null;
export declare const DelibixOrganizationSchema: OrganizationSchema;
export declare const DelibixLocalBusinessSchema: LocalBusinessSchema;
export declare function createServiceSchema(serviceName: string, serviceDescription: string, serviceType: string, category?: string, offers?: ServiceSchema['offers']): ServiceSchema;
export declare function createFAQSchema(faqs: Array<{
    question: string;
    answer: string;
}>): FAQSchema;
export declare function createBreadcrumbSchema(breadcrumbs: Array<{
    name: string;
    url?: string;
}>): BreadcrumbSchema;
export declare function createArticleSchema(title: string, description: string, url: string, publishedDate: string, modifiedDate: string, author?: string, image?: string[], section?: string, wordCount?: number, readingTime?: string): ArticleSchema;
export {};
//# sourceMappingURL=StructuredData.d.ts.map