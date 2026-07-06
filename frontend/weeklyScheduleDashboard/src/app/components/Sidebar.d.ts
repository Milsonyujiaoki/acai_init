interface Teacher {
    id: number;
    name: string;
    status: 'available' | 'busy' | 'partially';
    color: string;
}
interface SidebarProps {
    teachers: Teacher[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}
export declare function Sidebar({ teachers, searchQuery, setSearchQuery }: SidebarProps): any;
export {};
//# sourceMappingURL=Sidebar.d.ts.map