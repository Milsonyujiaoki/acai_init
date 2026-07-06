interface Breadcrumb {
    label: string;
    href: string;
}
interface BreadcrumbNavigationProps {
    breadcrumbs: Breadcrumb[];
    navigate: (page: string) => void;
}
export declare function BreadcrumbNavigation({ breadcrumbs, navigate }: BreadcrumbNavigationProps): any;
export {};
//# sourceMappingURL=BreadcrumbNavigation.d.ts.map