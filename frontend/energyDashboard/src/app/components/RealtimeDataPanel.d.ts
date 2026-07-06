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
interface RealtimeDataPanelProps {
    data: AnalyticsData;
}
export declare function RealtimeDataPanel({ data }: RealtimeDataPanelProps): any;
export {};
//# sourceMappingURL=RealtimeDataPanel.d.ts.map