interface EnhancedFilterSectionProps {
    selectedFilterType: "device" | "virtual-group";
    selectedDevice: string;
    selectedDevices: string[];
    dataMode: string;
    selectedDay: string;
    onFilterTypeChange: (type: "device" | "virtual-group") => void;
    onDeviceChange: (deviceId: string) => void;
    onDevicesChange: (deviceIds: string[]) => void;
    onDataModeChange: (mode: string) => void;
    onDayChange: (day: string) => void;
    onApplyFilters: () => void;
}
export declare function EnhancedFilterSection({ selectedFilterType, selectedDevice, selectedDevices, dataMode, selectedDay, onFilterTypeChange, onDeviceChange, onDevicesChange, onDataModeChange, onDayChange, onApplyFilters, }: EnhancedFilterSectionProps): any;
export {};
//# sourceMappingURL=EnhancedFilterSection.d.ts.map