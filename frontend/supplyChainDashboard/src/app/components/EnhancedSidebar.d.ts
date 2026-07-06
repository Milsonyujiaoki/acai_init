interface SidebarProps {
    collapsed: boolean;
    onCollapse: () => void;
    activeModule: string;
    onModuleChange: (module: string) => void;
    onOpenRouteOptimization?: () => void;
    onOpenAnalytics?: () => void;
    onOpenAlerts?: () => void;
    onOpenGenerateReport?: () => void;
}
export declare function EnhancedSidebar({ collapsed, onCollapse, activeModule, onModuleChange, onOpenRouteOptimization, onOpenAnalytics, onOpenAlerts, onOpenGenerateReport }: SidebarProps): any;
export {};
//# sourceMappingURL=EnhancedSidebar.d.ts.map