import { ReactNode } from "react";
export type Language = 'en' | 'zh' | 'hi' | 'es' | 'fr' | 'ar' | 'bn' | 'pt' | 'ru' | 'ur' | 'id' | 'bbc' | 'jv' | 'gaul';
export declare const languages: Record<Language, {
    name: string;
    nativeName: string;
    code: string;
    flag: string;
    rtl?: boolean;
}>;
interface LanguageProviderProps {
    children: ReactNode;
}
export declare function LanguageProvider({ children }: LanguageProviderProps): any;
export declare function useLanguage(): any;
export {};
//# sourceMappingURL=LanguageProvider.d.ts.map