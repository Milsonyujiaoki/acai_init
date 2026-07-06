import { ReactNode } from "react";
interface Toast {
    id: string;
    title?: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info' | 'loading';
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
    persistent?: boolean;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}
export declare function ToastProvider({ children }: {
    children: ReactNode;
}): any;
export declare function useToast(): any;
export declare const toast: {
    success: (message: string, options?: Partial<Toast>) => void;
    error: (message: string, options?: Partial<Toast>) => void;
    warning: (message: string, options?: Partial<Toast>) => void;
    info: (message: string, options?: Partial<Toast>) => void;
    loading: (message: string, options?: Partial<Toast>) => void;
};
export declare const commonToasts: {
    loginSuccess: () => void;
    loginError: () => void;
    logoutSuccess: () => void;
    signupSuccess: () => void;
    passwordResetSent: () => void;
    profileUpdated: () => void;
    passwordChanged: () => void;
    addedToCart: (item: string) => void;
    removedFromCart: (item: string) => void;
    orderPlaced: () => void;
    paymentSuccess: () => void;
    paymentError: () => void;
    notificationRead: () => void;
    allNotificationsRead: () => void;
    fileUploaded: (filename: string) => void;
    fileUploadError: () => void;
    fileDownloaded: (filename: string) => void;
    formSubmitted: () => void;
    formError: () => void;
    dataSaved: () => void;
    dataDeleted: () => void;
    dataError: () => void;
    connectionError: () => void;
    serverError: () => void;
    maintenanceMode: () => void;
    newFeature: (feature: string) => void;
    subscriptionUpgraded: () => void;
    subscriptionCancelled: () => void;
    billingUpdated: () => void;
    userCreated: () => void;
    userDeleted: () => void;
    settingsUpdated: () => void;
    analysisComplete: () => void;
    reportGenerated: () => void;
    aiInsightReady: () => void;
};
export {};
//# sourceMappingURL=ToastProvider.d.ts.map