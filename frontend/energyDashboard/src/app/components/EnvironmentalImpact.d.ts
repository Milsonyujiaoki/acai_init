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
interface EnvironmentalImpactProps {
    data: AnalyticsData[];
}
export declare function EnvironmentalImpact({ data }: EnvironmentalImpactProps): any;
export {};
//# sourceMappingURL=EnvironmentalImpact.d.ts.map