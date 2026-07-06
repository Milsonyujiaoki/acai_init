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
interface AnalyticsChartProps {
    data: AnalyticsData[];
    graphType: string;
    deviceName: string;
}
export declare function AnalyticsChart({ data, graphType, deviceName }: AnalyticsChartProps): any;
export {};
//# sourceMappingURL=AnalyticsChart.d.ts.map