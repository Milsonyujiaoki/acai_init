interface AnalyticsData {
    deviceId: string;
    timestamp: string;
    kvah: number;
    billing: number;
    kva: number;
    kw: number;
    kwh: number;
    pf: number;
    kvarh_lag: number;
    kvarh_lead: number;
    co2_emissions: number;
}
interface SummaryReportTableProps {
    data: AnalyticsData[];
    deviceName: string;
}
export declare function SummaryReportTable({ data, deviceName }: SummaryReportTableProps): any;
export {};
//# sourceMappingURL=SummaryReportTable.d.ts.map