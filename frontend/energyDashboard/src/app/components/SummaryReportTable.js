import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Download, FileText, FileSpreadsheet, Calendar, TrendingUp, Zap } from "lucide-react";
export function SummaryReportTable({ data, deviceName }) {
    const [isExporting, setIsExporting] = useState(false);
    // Calculate summary metrics
    const calculateSummary = () => {
        const totalKWH = data.reduce((sum, item) => sum + item.kwh, 0);
        const averageKW = data.reduce((sum, item) => sum + item.kw, 0) / data.length;
        const maxKW = Math.max(...data.map(item => item.kw));
        const totalBilling = data.reduce((sum, item) => sum + item.billing, 0);
        const averagePF = data.reduce((sum, item) => sum + item.pf, 0) / data.length;
        const totalCO2 = data.reduce((sum, item) => sum + item.co2_emissions, 0);
        // Mock data for different time periods
        const todayKWH = totalKWH * 0.3; // 30% of total for "today"
        const yesterdayKWH = totalKWH * 0.25; // 25% for "yesterday"  
        const thisMonthKWH = totalKWH; // Full total for "this month"
        const lastReading = data[data.length - 1];
        return {
            todayKWH,
            yesterdayKWH,
            thisMonthKWH,
            lastReading,
            totalKWH,
            averageKW,
            maxKW,
            totalBilling,
            averagePF,
            totalCO2
        };
    };
    const summary = calculateSummary();
    const reportData = [
        {
            period: "Today",
            kwh: summary.todayKWH,
            billing: summary.todayKWH * 8.5,
            peakKW: summary.maxKW * 0.8,
            avgPF: summary.averagePF,
            co2: summary.todayKWH * 0.82,
            status: "Active",
            icon: Calendar
        },
        {
            period: "Yesterday",
            kwh: summary.yesterdayKWH,
            billing: summary.yesterdayKWH * 8.5,
            peakKW: summary.maxKW * 0.75,
            avgPF: summary.averagePF * 0.95,
            co2: summary.yesterdayKWH * 0.82,
            status: "Completed",
            icon: TrendingUp
        },
        {
            period: "This Month",
            kwh: summary.thisMonthKWH,
            billing: summary.totalBilling,
            peakKW: summary.maxKW,
            avgPF: summary.averagePF,
            co2: summary.totalCO2,
            status: "In Progress",
            icon: Calendar
        },
        {
            period: "Last Reading",
            kwh: summary.lastReading.kwh,
            billing: summary.lastReading.billing,
            peakKW: summary.lastReading.kw,
            avgPF: summary.lastReading.pf,
            co2: summary.lastReading.co2_emissions,
            status: "Live",
            icon: Zap
        }
    ];
    const handleExport = async (format) => {
        setIsExporting(true);
        // Simulate export process
        await new Promise(resolve => setTimeout(resolve, 2000));
        // In a real application, you would generate and download the file here
        console.log(`Exporting ${format.toUpperCase()} report for ${deviceName}`);
        setIsExporting(false);
    };
    const getStatusVariant = (status) => {
        switch (status) {
            case "Active":
            case "Live":
                return "default";
            case "Completed":
                return "secondary";
            case "In Progress":
                return "outline";
            default:
                return "secondary";
        }
    };
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "w-5 h-5 text-primary" }), "Summary Report"] }), _jsxs(CardDescription, { children: ["Aggregated energy metrics for ", deviceName] })] }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", disabled: isExporting, className: "gap-2", children: [_jsx(Download, { className: "w-4 h-4" }), isExporting ? "Exporting..." : "Download Report"] }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsxs(DropdownMenuItem, { onClick: () => handleExport('excel'), className: "gap-2", children: [_jsx(FileSpreadsheet, { className: "w-4 h-4" }), "Export as Excel"] }), _jsxs(DropdownMenuItem, { onClick: () => handleExport('pdf'), className: "gap-2", children: [_jsx(FileText, { className: "w-4 h-4" }), "Export as PDF"] })] })] })] }) }), _jsxs(CardContent, { children: [_jsx("div", { className: "rounded-lg border", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { className: "w-[120px]", children: "Period" }), _jsx(TableHead, { children: "Energy (kWh)" }), _jsx(TableHead, { children: "Billing (\u20B9)" }), _jsx(TableHead, { children: "Peak Demand (kW)" }), _jsx(TableHead, { children: "Avg Power Factor" }), _jsx(TableHead, { children: "CO\u2082 Emissions (kg)" }), _jsx(TableHead, { children: "Status" })] }) }), _jsx(TableBody, { children: reportData.map((row, index) => {
                                        const Icon = row.icon;
                                        return (_jsxs(TableRow, { className: "hover:bg-muted/50", children: [_jsx(TableCell, { className: "font-medium", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Icon, { className: "w-4 h-4 text-muted-foreground" }), row.period] }) }), _jsxs(TableCell, { children: [_jsx("div", { className: "font-medium", children: row.kwh.toFixed(1) }), _jsx("div", { className: "text-xs text-muted-foreground", children: "kWh" })] }), _jsxs(TableCell, { children: [_jsxs("div", { className: "font-medium", children: ["\u20B9", row.billing.toFixed(2)] }), _jsx("div", { className: "text-xs text-muted-foreground", children: "INR" })] }), _jsxs(TableCell, { children: [_jsx("div", { className: "font-medium", children: row.peakKW.toFixed(1) }), _jsx("div", { className: "text-xs text-muted-foreground", children: "kW" })] }), _jsxs(TableCell, { children: [_jsx("div", { className: "font-medium", children: row.avgPF.toFixed(3) }), _jsx("div", { className: "text-xs text-muted-foreground", children: row.avgPF >= 0.95 ? "Excellent" : row.avgPF >= 0.85 ? "Good" : "Poor" })] }), _jsxs(TableCell, { children: [_jsx("div", { className: "font-medium", children: row.co2.toFixed(1) }), _jsx("div", { className: "text-xs text-muted-foreground", children: "kg CO\u2082" })] }), _jsx(TableCell, { children: _jsx(Badge, { variant: getStatusVariant(row.status), children: row.status }) })] }, index));
                                    }) })] }) }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-6", children: [_jsxs("div", { className: "p-4 bg-accent/30 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(TrendingUp, { className: "w-4 h-4 text-primary" }), _jsx("span", { className: "text-sm font-medium", children: "Total Consumption" })] }), _jsx("div", { className: "text-2xl font-bold", children: summary.totalKWH.toFixed(1) }), _jsx("div", { className: "text-sm text-muted-foreground", children: "kWh" })] }), _jsxs("div", { className: "p-4 bg-accent/30 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(FileText, { className: "w-4 h-4 text-chart-3" }), _jsx("span", { className: "text-sm font-medium", children: "Total Billing" })] }), _jsxs("div", { className: "text-2xl font-bold", children: ["\u20B9", summary.totalBilling.toFixed(2)] }), _jsx("div", { className: "text-sm text-muted-foreground", children: "INR" })] }), _jsxs("div", { className: "p-4 bg-accent/30 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Zap, { className: "w-4 h-4 text-chart-2" }), _jsx("span", { className: "text-sm font-medium", children: "Peak Demand" })] }), _jsx("div", { className: "text-2xl font-bold", children: summary.maxKW.toFixed(1) }), _jsx("div", { className: "text-sm text-muted-foreground", children: "kW" })] })] })] })] }));
}
//# sourceMappingURL=SummaryReportTable.js.map