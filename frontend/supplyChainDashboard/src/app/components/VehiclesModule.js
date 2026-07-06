import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Car, Search, Filter, MapPin, Fuel, Wrench, FileText, Calendar, AlertTriangle, CheckCircle, Clock, Download, Upload, Eye, TrendingUp, Activity } from 'lucide-react';
const vehiclesData = [
    {
        id: 'TRK-001',
        name: 'Volvo VNL 860',
        image: 'https://images.unsplash.com/photo-1753579167765-d88ba3719f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwdHJ1Y2slMjBmbGVldHxlbnwxfHx8fDE3NTU1ODMyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        type: 'Heavy Truck',
        status: 'Active',
        driver: 'Michael Johnson',
        location: 'New York, NY',
        capacity: '80,000 lbs',
        mileage: '125,400 mi',
        fuelLevel: 78,
        nextMaintenance: '2024-02-15',
        documents: {
            registration: { status: 'Valid', expiry: '2025-12-31', lastUpdated: '2023-12-01' },
            insurance: { status: 'Valid', expiry: '2024-08-15', lastUpdated: '2023-08-01' },
            puc: { status: 'Expired', expiry: '2024-01-10', lastUpdated: '2023-01-10' },
            permit: { status: 'Valid', expiry: '2024-06-30', lastUpdated: '2023-06-01' }
        },
        specifications: {
            make: 'Volvo',
            model: 'VNL 860',
            year: '2019',
            engine: '13L Diesel',
            transmission: 'Automatic',
            vin: '4V4NC9EH1KN123456'
        }
    },
    {
        id: 'VAN-205',
        name: 'Ford Transit',
        image: 'https://images.unsplash.com/photo-1619963596057-6740b0f147e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHZhbiUyMHdoaXRlfGVufDF8fHx8MTc1NTU4MzI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
        type: 'Delivery Van',
        status: 'In Transit',
        driver: 'Sarah Wilson',
        location: 'Los Angeles, CA',
        capacity: '4,600 lbs',
        mileage: '89,200 mi',
        fuelLevel: 42,
        nextMaintenance: '2024-01-25',
        documents: {
            registration: { status: 'Valid', expiry: '2025-10-15', lastUpdated: '2023-10-01' },
            insurance: { status: 'Valid', expiry: '2024-09-20', lastUpdated: '2023-09-01' },
            puc: { status: 'Valid', expiry: '2024-07-12', lastUpdated: '2023-07-01' },
            permit: { status: 'Valid', expiry: '2024-05-18', lastUpdated: '2023-05-01' }
        },
        specifications: {
            make: 'Ford',
            model: 'Transit 350',
            year: '2020',
            engine: '3.5L V6',
            transmission: 'Automatic',
            vin: '1FTBW2CM5LKA12345'
        }
    },
    {
        id: 'TRK-102',
        name: 'Freightliner Cascadia',
        image: 'https://images.unsplash.com/photo-1649372708980-1efce0ffb7bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhjYXJnbyUyMHRydWNrJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc1NTUxNTc5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        type: 'Semi Truck',
        status: 'Maintenance',
        driver: 'David Chen',
        location: 'Chicago, IL',
        capacity: '80,000 lbs',
        mileage: '203,800 mi',
        fuelLevel: 15,
        nextMaintenance: '2024-01-20',
        documents: {
            registration: { status: 'Valid', expiry: '2025-03-22', lastUpdated: '2023-03-01' },
            insurance: { status: 'Valid', expiry: '2024-11-10', lastUpdated: '2023-11-01' },
            puc: { status: 'Valid', expiry: '2024-04-18', lastUpdated: '2023-04-01' },
            permit: { status: 'Expired', expiry: '2024-01-05', lastUpdated: '2023-01-01' }
        },
        specifications: {
            make: 'Freightliner',
            model: 'Cascadia Evolution',
            year: '2018',
            engine: '15L Detroit Diesel',
            transmission: 'Manual',
            vin: '1FUJGHDV1JLHA1234'
        }
    },
    {
        id: 'TRK-089',
        name: 'Peterbilt 579',
        image: 'https://images.unsplash.com/photo-1700423287752-8cf29a6573e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhjb21tZXJjaWFsJTIwdHJ1Y2slMjBmbGVldHxlbnwxfHx8fDE3NTU1ODMyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        type: 'Heavy Truck',
        status: 'Active',
        driver: 'Lisa Brown',
        location: 'Miami, FL',
        capacity: '80,000 lbs',
        mileage: '98,600 mi',
        fuelLevel: 91,
        nextMaintenance: '2024-03-01',
        documents: {
            registration: { status: 'Valid', expiry: '2025-07-14', lastUpdated: '2023-07-01' },
            insurance: { status: 'Valid', expiry: '2024-12-08', lastUpdated: '2023-12-01' },
            puc: { status: 'Valid', expiry: '2024-09-25', lastUpdated: '2023-09-01' },
            permit: { status: 'Valid', expiry: '2024-08-12', lastUpdated: '2023-08-01' }
        },
        specifications: {
            make: 'Peterbilt',
            model: '579 EPIQ',
            year: '2021',
            engine: '13L PACCAR MX-13',
            transmission: 'Automated Manual',
            vin: '1XPWD40X1MD123456'
        }
    }
];
const getStatusColor = (status) => {
    switch (status) {
        case 'Active': return 'bg-green-100 text-green-800';
        case 'In Transit': return 'bg-blue-100 text-blue-800';
        case 'Maintenance': return 'bg-orange-100 text-orange-800';
        case 'Inactive': return 'bg-gray-100 text-gray-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};
const getDocumentStatusColor = (status) => {
    switch (status) {
        case 'Valid': return 'bg-green-100 text-green-800';
        case 'Expired': return 'bg-red-100 text-red-800';
        case 'Expiring Soon': return 'bg-yellow-100 text-yellow-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};
export function VehiclesModule() {
    const [selectedVehicle, setSelectedVehicle] = useState(vehiclesData[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredVehicles = vehiclesData.filter(vehicle => vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.id.toLowerCase().includes(searchTerm.toLowerCase()));
    return (_jsxs("div", { className: "p-6 space-y-6 bg-gray-50 min-h-screen", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Car, { className: "h-6 w-6 text-blue-600" }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: "Fleet Management" }), _jsx("p", { className: "text-gray-600", children: "Manage vehicles, documents, and maintenance schedules" })] })] }), _jsx(Button, { className: "bg-blue-600 hover:bg-blue-700", children: "Add New Vehicle" })] }), _jsx(Card, { className: "border-0 shadow-sm", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex gap-4", children: [_jsxs("div", { className: "flex-1 relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }), _jsx(Input, { placeholder: "Search vehicles by name or ID...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10" })] }), _jsxs(Button, { variant: "outline", className: "flex items-center gap-2", children: [_jsx(Filter, { className: "h-4 w-4" }), "Filters"] })] }) }) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: [_jsx("div", { className: "space-y-4", children: filteredVehicles.map((vehicle) => (_jsx(Card, { className: `cursor-pointer transition-all border-0 shadow-sm hover:shadow-md ${selectedVehicle.id === vehicle.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'bg-white'}`, onClick: () => setSelectedVehicle(vehicle), children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "space-y-3", children: [_jsx(ImageWithFallback, { src: vehicle.image, alt: vehicle.name, className: "w-full h-32 rounded-lg object-cover" }), _jsxs("div", { children: [_jsx("h3", { className: "font-medium text-gray-900", children: vehicle.name }), _jsxs("p", { className: "text-sm text-gray-500", children: [vehicle.id, " \u2022 ", vehicle.type] }), _jsxs("div", { className: "flex items-center justify-between mt-2", children: [_jsx(Badge, { className: getStatusColor(vehicle.status), children: vehicle.status }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Fuel, { className: "h-3 w-3 text-gray-400" }), _jsxs("span", { className: "text-xs text-gray-600", children: [vehicle.fuelLevel, "%"] })] })] })] })] }) }) }, vehicle.id))) }), _jsx("div", { className: "lg:col-span-3", children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { className: "pb-4", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(ImageWithFallback, { src: selectedVehicle.image, alt: selectedVehicle.name, className: "w-20 h-20 rounded-lg object-cover" }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(CardTitle, { className: "text-xl", children: selectedVehicle.name }), _jsxs("p", { className: "text-gray-600", children: [selectedVehicle.id, " \u2022 ", selectedVehicle.type] })] }), _jsx(Badge, { className: getStatusColor(selectedVehicle.status), children: selectedVehicle.status })] }), _jsxs("div", { className: "flex items-center gap-4 mt-2", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(MapPin, { className: "h-4 w-4 text-gray-400" }), _jsx("span", { className: "text-sm text-gray-600", children: selectedVehicle.location })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Activity, { className: "h-4 w-4 text-gray-400" }), _jsx("span", { className: "text-sm text-gray-600", children: selectedVehicle.mileage })] })] })] })] }) }), _jsx(CardContent, { children: _jsxs(Tabs, { defaultValue: "overview", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [_jsx(TabsTrigger, { value: "overview", children: "Overview" }), _jsx(TabsTrigger, { value: "documents", children: "Documents" }), _jsx(TabsTrigger, { value: "maintenance", children: "Maintenance" }), _jsx(TabsTrigger, { value: "history", children: "History" })] }), _jsx(TabsContent, { value: "overview", className: "mt-6", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-medium text-gray-900", children: "Vehicle Information" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Make & Model:" }), _jsxs("span", { className: "font-medium", children: [selectedVehicle.specifications.make, " ", selectedVehicle.specifications.model] })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Year:" }), _jsx("span", { className: "font-medium", children: selectedVehicle.specifications.year })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "VIN:" }), _jsx("span", { className: "font-medium text-sm", children: selectedVehicle.specifications.vin })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Engine:" }), _jsx("span", { className: "font-medium", children: selectedVehicle.specifications.engine })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Transmission:" }), _jsx("span", { className: "font-medium", children: selectedVehicle.specifications.transmission })] })] }), _jsx("h3", { className: "font-medium text-gray-900 mt-6", children: "Assignment" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-medium", children: "Driver:" }), " ", selectedVehicle.driver] }), _jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-medium", children: "Capacity:" }), " ", selectedVehicle.capacity] }), _jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-medium", children: "Current Location:" }), " ", selectedVehicle.location] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-medium text-gray-900", children: "Performance Metrics" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("span", { className: "text-sm text-gray-600", children: "Fuel Level" }), _jsxs("span", { className: "text-sm font-medium", children: [selectedVehicle.fuelLevel, "%"] })] }), _jsx(Progress, { value: selectedVehicle.fuelLevel, className: "h-2" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-gray-600", children: "Total Mileage" }), _jsx("p", { className: "text-lg font-semibold", children: selectedVehicle.mileage })] }), _jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-gray-600", children: "Fuel Efficiency" }), _jsx("p", { className: "text-lg font-semibold", children: "8.2 MPG" })] }), _jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-gray-600", children: "This Month" }), _jsx("p", { className: "text-lg font-semibold", children: "18 Trips" })] }), _jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-gray-600", children: "Revenue" }), _jsx("p", { className: "text-lg font-semibold text-green-600", children: "$12,450" })] })] }), _jsxs("div", { className: "bg-orange-50 p-4 rounded-lg border border-orange-200", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Wrench, { className: "h-4 w-4 text-orange-600" }), _jsx("span", { className: "font-medium text-orange-800", children: "Next Maintenance" })] }), _jsx("p", { className: "text-sm text-orange-700", children: selectedVehicle.nextMaintenance })] })] })] })] }) }), _jsx(TabsContent, { value: "documents", className: "mt-6", children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "font-medium text-gray-900", children: "Vehicle Documents" }), _jsxs(Button, { variant: "outline", size: "sm", className: "flex items-center gap-2", children: [_jsx(Upload, { className: "h-4 w-4" }), "Upload Document"] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs(Card, { className: "p-4 border", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "h-5 w-5 text-blue-600" }), _jsx("span", { className: "font-medium text-gray-900", children: "Vehicle Registration" })] }), _jsx(Badge, { className: getDocumentStatusColor(selectedVehicle.documents.registration.status), children: selectedVehicle.documents.registration.status })] }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("p", { children: [_jsx("span", { className: "text-gray-600", children: "Expires:" }), " ", selectedVehicle.documents.registration.expiry] }), _jsxs("p", { children: [_jsx("span", { className: "text-gray-600", children: "Last Updated:" }), " ", selectedVehicle.documents.registration.lastUpdated] })] }), _jsxs("div", { className: "flex gap-2 mt-4", children: [_jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", children: [_jsx(Eye, { className: "h-3 w-3" }), "View"] }), _jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", children: [_jsx(Download, { className: "h-3 w-3" }), "Download"] })] })] }), _jsxs(Card, { className: "p-4 border", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "h-5 w-5 text-green-600" }), _jsx("span", { className: "font-medium text-gray-900", children: "Insurance Certificate" })] }), _jsx(Badge, { className: getDocumentStatusColor(selectedVehicle.documents.insurance.status), children: selectedVehicle.documents.insurance.status })] }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("p", { children: [_jsx("span", { className: "text-gray-600", children: "Expires:" }), " ", selectedVehicle.documents.insurance.expiry] }), _jsxs("p", { children: [_jsx("span", { className: "text-gray-600", children: "Last Updated:" }), " ", selectedVehicle.documents.insurance.lastUpdated] })] }), _jsxs("div", { className: "flex gap-2 mt-4", children: [_jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", children: [_jsx(Eye, { className: "h-3 w-3" }), "View"] }), _jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", children: [_jsx(Download, { className: "h-3 w-3" }), "Download"] })] })] }), _jsxs(Card, { className: "p-4 border", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "h-5 w-5 text-purple-600" }), _jsx("span", { className: "font-medium text-gray-900", children: "PUC Certificate" })] }), _jsx(Badge, { className: getDocumentStatusColor(selectedVehicle.documents.puc.status), children: selectedVehicle.documents.puc.status })] }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("p", { children: [_jsx("span", { className: "text-gray-600", children: "Expires:" }), " ", selectedVehicle.documents.puc.expiry] }), _jsxs("p", { children: [_jsx("span", { className: "text-gray-600", children: "Last Updated:" }), " ", selectedVehicle.documents.puc.lastUpdated] })] }), _jsxs("div", { className: "flex gap-2 mt-4", children: [_jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", children: [_jsx(Eye, { className: "h-3 w-3" }), "View"] }), _jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", children: [_jsx(Download, { className: "h-3 w-3" }), "Download"] }), selectedVehicle.documents.puc.status === 'Expired' && (_jsx(Button, { size: "sm", className: "bg-red-600 hover:bg-red-700 ml-auto", children: "Renew Now" }))] })] }), _jsxs(Card, { className: "p-4 border", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "h-5 w-5 text-orange-600" }), _jsx("span", { className: "font-medium text-gray-900", children: "Commercial Permit" })] }), _jsx(Badge, { className: getDocumentStatusColor(selectedVehicle.documents.permit.status), children: selectedVehicle.documents.permit.status })] }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("p", { children: [_jsx("span", { className: "text-gray-600", children: "Expires:" }), " ", selectedVehicle.documents.permit.expiry] }), _jsxs("p", { children: [_jsx("span", { className: "text-gray-600", children: "Last Updated:" }), " ", selectedVehicle.documents.permit.lastUpdated] })] }), _jsxs("div", { className: "flex gap-2 mt-4", children: [_jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", children: [_jsx(Eye, { className: "h-3 w-3" }), "View"] }), _jsxs(Button, { size: "sm", variant: "outline", className: "flex items-center gap-1", children: [_jsx(Download, { className: "h-3 w-3" }), "Download"] })] })] })] }), _jsxs(Card, { className: "p-4 bg-red-50 border-red-200", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(AlertTriangle, { className: "h-5 w-5 text-red-600" }), _jsx("span", { className: "font-medium text-red-800", children: "Document Alerts" })] }), _jsxs("div", { className: "space-y-1 text-sm text-red-700", children: [selectedVehicle.documents.puc.status === 'Expired' && (_jsx("p", { children: "\u2022 PUC Certificate has expired and requires immediate renewal" })), selectedVehicle.documents.permit.status === 'Expired' && (_jsx("p", { children: "\u2022 Commercial Permit has expired and requires renewal" })), _jsx("p", { children: "\u2022 Insurance expires in 6 months - consider early renewal" })] })] })] }) }), _jsx(TabsContent, { value: "maintenance", className: "mt-6", children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "font-medium text-gray-900", children: "Maintenance Schedule" }), _jsx(Button, { variant: "outline", size: "sm", children: "Schedule Service" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs(Card, { className: "p-4", children: [_jsx("h4", { className: "font-medium text-gray-900 mb-4", children: "Upcoming Maintenance" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between p-3 bg-orange-50 rounded-lg", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium text-orange-800", children: "Oil Change" }), _jsxs("p", { className: "text-sm text-orange-600", children: ["Due: ", selectedVehicle.nextMaintenance] })] }), _jsx(Clock, { className: "h-4 w-4 text-orange-600" })] }), _jsxs("div", { className: "flex items-center justify-between p-3 bg-blue-50 rounded-lg", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium text-blue-800", children: "Tire Rotation" }), _jsx("p", { className: "text-sm text-blue-600", children: "Due: 2024-02-20" })] }), _jsx(Clock, { className: "h-4 w-4 text-blue-600" })] })] })] }), _jsxs(Card, { className: "p-4", children: [_jsx("h4", { className: "font-medium text-gray-900 mb-4", children: "Recent Maintenance" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between p-3 bg-green-50 rounded-lg", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium text-green-800", children: "Annual Inspection" }), _jsx("p", { className: "text-sm text-green-600", children: "Completed: 2024-01-05" })] }), _jsx(CheckCircle, { className: "h-4 w-4 text-green-600" })] }), _jsxs("div", { className: "flex items-center justify-between p-3 bg-green-50 rounded-lg", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium text-green-800", children: "Brake Service" }), _jsx("p", { className: "text-sm text-green-600", children: "Completed: 2023-12-20" })] }), _jsx(CheckCircle, { className: "h-4 w-4 text-green-600" })] })] })] })] })] }) }), _jsx(TabsContent, { value: "history", className: "mt-6", children: _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-medium text-gray-900", children: "Trip History" }), _jsx("div", { className: "space-y-3", children: [
                                                                { id: 'TR001', route: 'New York → Boston', date: '2024-01-10', driver: 'Michael Johnson', revenue: '$2,450' },
                                                                { id: 'TR005', route: 'Boston → Philadelphia', date: '2024-01-08', driver: 'Michael Johnson', revenue: '$1,890' },
                                                                { id: 'TR009', route: 'New York → Albany', date: '2024-01-06', driver: 'Michael Johnson', revenue: '$1,320' },
                                                                { id: 'TR012', route: 'Albany → Buffalo', date: '2024-01-04', driver: 'Michael Johnson', revenue: '$2,100' },
                                                            ].map((trip, index) => (_jsx(Card, { className: "p-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium text-gray-900", children: trip.id }), _jsx("p", { className: "text-sm text-gray-600", children: trip.route }), _jsxs("p", { className: "text-xs text-gray-500", children: [trip.date, " \u2022 ", trip.driver] })] }), _jsxs("div", { className: "text-right", children: [_jsx(Badge, { className: "bg-green-100 text-green-800 mb-1", children: "Completed" }), _jsx("p", { className: "text-sm font-medium text-green-600", children: trip.revenue })] })] }) }, index))) })] }) })] }) })] }) })] })] }));
}
//# sourceMappingURL=VehiclesModule.js.map