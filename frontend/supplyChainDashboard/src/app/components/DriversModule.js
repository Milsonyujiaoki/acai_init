import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Search, Filter, Phone, Mail, MapPin, Star, TrendingUp, Clock, CheckCircle, AlertCircle, Calendar, Award, FileText } from 'lucide-react';
const driversData = [
    {
        id: 'D001',
        name: 'Michael Johnson',
        photo: 'https://images.unsplash.com/photo-1718434137166-b3cb7d944b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcml2ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTU1ODMxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        phone: '+1 (555) 234-5678',
        email: 'michael.johnson@company.com',
        license: 'CDL-A #987654321',
        experience: '8 years',
        rating: 4.8,
        status: 'Available',
        location: 'New York, NY',
        vehicleAssigned: 'TRK-001',
        completedTrips: 342,
        totalDistance: '125,400 mi',
        onTimeDelivery: 96,
        safetyScore: 98,
        earnings: '$8,450',
        joinDate: '2016-03-15',
        licenseExpiry: '2026-03-15',
        medicalCert: '2025-06-20',
        emergencyContact: 'Sarah Johnson - (555) 234-5679'
    },
    {
        id: 'D002',
        name: 'Sarah Wilson',
        photo: 'https://images.unsplash.com/photo-1622175691858-a4deb912838e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB0cnVjayUyMGRyaXZlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1ODMxODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        phone: '+1 (555) 345-6789',
        email: 'sarah.wilson@company.com',
        license: 'CDL-A #876543210',
        experience: '5 years',
        rating: 4.9,
        status: 'On Trip',
        location: 'Los Angeles, CA',
        vehicleAssigned: 'AIR-205',
        completedTrips: 198,
        totalDistance: '89,200 mi',
        onTimeDelivery: 98,
        safetyScore: 100,
        earnings: '$7,890',
        joinDate: '2019-01-20',
        licenseExpiry: '2027-01-20',
        medicalCert: '2025-08-15',
        emergencyContact: 'David Wilson - (555) 345-6790'
    },
    {
        id: 'D003',
        name: 'David Chen',
        photo: 'https://images.unsplash.com/photo-1710242078536-fe62a305a86c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGRyaXZlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1ODMxODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        phone: '+1 (555) 456-7890',
        email: 'david.chen@company.com',
        license: 'CDL-B #765432109',
        experience: '12 years',
        rating: 4.7,
        status: 'Maintenance',
        location: 'Chicago, IL',
        vehicleAssigned: 'SEA-102',
        completedTrips: 567,
        totalDistance: '203,800 mi',
        onTimeDelivery: 94,
        safetyScore: 96,
        earnings: '$9,120',
        joinDate: '2012-08-10',
        licenseExpiry: '2025-08-10',
        medicalCert: '2025-04-12',
        emergencyContact: 'Linda Chen - (555) 456-7891'
    },
    {
        id: 'D004',
        name: 'Lisa Brown',
        photo: 'https://images.unsplash.com/photo-1659353740059-5554fb2ac89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMGRyaXZlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1ODMxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        phone: '+1 (555) 567-8901',
        email: 'lisa.brown@company.com',
        license: 'CDL-A #654321098',
        experience: '6 years',
        rating: 4.6,
        status: 'Available',
        location: 'Miami, FL',
        vehicleAssigned: 'TRK-089',
        completedTrips: 289,
        totalDistance: '98,600 mi',
        onTimeDelivery: 92,
        safetyScore: 94,
        earnings: '$7,650',
        joinDate: '2018-05-12',
        licenseExpiry: '2026-05-12',
        medicalCert: '2025-11-08',
        emergencyContact: 'Robert Brown - (555) 567-8902'
    }
];
const getStatusColor = (status) => {
    switch (status) {
        case 'Available': return 'bg-green-100 text-green-800';
        case 'On Trip': return 'bg-blue-100 text-blue-800';
        case 'Maintenance': return 'bg-orange-100 text-orange-800';
        case 'Off Duty': return 'bg-gray-100 text-gray-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};
export function DriversModule() {
    const [selectedDriver, setSelectedDriver] = useState(driversData[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredDrivers = driversData.filter(driver => driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        driver.id.toLowerCase().includes(searchTerm.toLowerCase()));
    return (_jsxs("div", { className: "p-6 space-y-6 bg-gray-50 min-h-screen", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Users, { className: "h-6 w-6 text-blue-600" }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: "Drivers Management" }), _jsx("p", { className: "text-gray-600", children: "Manage driver profiles, performance, and assignments" })] })] }), _jsx(Button, { className: "bg-blue-600 hover:bg-blue-700", children: "Add New Driver" })] }), _jsx(Card, { className: "border-0 shadow-sm", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex gap-4", children: [_jsxs("div", { className: "flex-1 relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }), _jsx(Input, { placeholder: "Search drivers by name or ID...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10" })] }), _jsxs(Button, { variant: "outline", className: "flex items-center gap-2", children: [_jsx(Filter, { className: "h-4 w-4" }), "Filters"] })] }) }) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: [_jsx("div", { className: "space-y-4", children: filteredDrivers.map((driver) => (_jsx(Card, { className: `cursor-pointer transition-all border-0 shadow-sm hover:shadow-md ${selectedDriver.id === driver.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'bg-white'}`, onClick: () => setSelectedDriver(driver), children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(ImageWithFallback, { src: driver.photo, alt: driver.name, className: "w-12 h-12 rounded-full object-cover" }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-medium text-gray-900", children: driver.name }), _jsx("p", { className: "text-sm text-gray-500", children: driver.id }), _jsxs("div", { className: "flex items-center gap-2 mt-1", children: [_jsx(Badge, { className: getStatusColor(driver.status), children: driver.status }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "h-3 w-3 text-yellow-400 fill-current" }), _jsx("span", { className: "text-xs text-gray-600", children: driver.rating })] })] })] })] }) }) }, driver.id))) }), _jsx("div", { className: "lg:col-span-3", children: _jsxs(Card, { className: "border-0 shadow-sm", children: [_jsx(CardHeader, { className: "pb-4", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(ImageWithFallback, { src: selectedDriver.photo, alt: selectedDriver.name, className: "w-16 h-16 rounded-full object-cover" }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(CardTitle, { className: "text-xl", children: selectedDriver.name }), _jsxs("p", { className: "text-gray-600", children: [selectedDriver.id, " \u2022 ", selectedDriver.experience, " experience"] })] }), _jsx(Badge, { className: getStatusColor(selectedDriver.status), children: selectedDriver.status })] }), _jsxs("div", { className: "flex items-center gap-4 mt-2", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Star, { className: "h-4 w-4 text-yellow-400 fill-current" }), _jsx("span", { className: "font-medium", children: selectedDriver.rating })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(MapPin, { className: "h-4 w-4 text-gray-400" }), _jsx("span", { className: "text-sm text-gray-600", children: selectedDriver.location })] })] })] })] }) }), _jsx(CardContent, { children: _jsxs(Tabs, { defaultValue: "overview", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [_jsx(TabsTrigger, { value: "overview", children: "Overview" }), _jsx(TabsTrigger, { value: "performance", children: "Performance" }), _jsx(TabsTrigger, { value: "documents", children: "Documents" }), _jsx(TabsTrigger, { value: "history", children: "History" })] }), _jsx(TabsContent, { value: "overview", className: "mt-6", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-medium text-gray-900", children: "Contact Information" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Phone, { className: "h-4 w-4 text-gray-400" }), _jsx("span", { className: "text-gray-700", children: selectedDriver.phone })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Mail, { className: "h-4 w-4 text-gray-400" }), _jsx("span", { className: "text-gray-700", children: selectedDriver.email })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(MapPin, { className: "h-4 w-4 text-gray-400" }), _jsx("span", { className: "text-gray-700", children: selectedDriver.location })] })] }), _jsx("h3", { className: "font-medium text-gray-900 mt-6", children: "License & Certification" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-medium", children: "License:" }), " ", selectedDriver.license] }), _jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-medium", children: "Expiry:" }), " ", selectedDriver.licenseExpiry] }), _jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-medium", children: "Medical Cert:" }), " ", selectedDriver.medicalCert] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-medium text-gray-900", children: "Assignment" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-medium", children: "Vehicle:" }), " ", selectedDriver.vehicleAssigned] }), _jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-medium", children: "Join Date:" }), " ", selectedDriver.joinDate] }), _jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-medium", children: "Emergency Contact:" }), " ", selectedDriver.emergencyContact] })] }), _jsx("h3", { className: "font-medium text-gray-900 mt-6", children: "Quick Stats" }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-gray-600", children: "Total Trips" }), _jsx("p", { className: "text-lg font-semibold", children: selectedDriver.completedTrips })] }), _jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-gray-600", children: "Distance" }), _jsx("p", { className: "text-lg font-semibold", children: selectedDriver.totalDistance })] }), _jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-gray-600", children: "Earnings" }), _jsx("p", { className: "text-lg font-semibold text-green-600", children: selectedDriver.earnings })] }), _jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [_jsx("p", { className: "text-sm text-gray-600", children: "Rating" }), _jsxs("p", { className: "text-lg font-semibold", children: [selectedDriver.rating, "/5.0"] })] })] })] })] }) }), _jsx(TabsContent, { value: "performance", className: "mt-6", children: _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs(Card, { className: "p-4 bg-green-50 border-green-200", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(CheckCircle, { className: "h-5 w-5 text-green-600" }), _jsx("span", { className: "font-medium text-green-800", children: "On-Time Delivery" })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between", children: [_jsxs("span", { className: "text-2xl font-bold text-green-700", children: [selectedDriver.onTimeDelivery, "%"] }), _jsx(TrendingUp, { className: "h-4 w-4 text-green-600" })] }), _jsx(Progress, { value: selectedDriver.onTimeDelivery, className: "h-2" })] })] }), _jsxs(Card, { className: "p-4 bg-blue-50 border-blue-200", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Award, { className: "h-5 w-5 text-blue-600" }), _jsx("span", { className: "font-medium text-blue-800", children: "Safety Score" })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between", children: [_jsxs("span", { className: "text-2xl font-bold text-blue-700", children: [selectedDriver.safetyScore, "%"] }), _jsx(TrendingUp, { className: "h-4 w-4 text-blue-600" })] }), _jsx(Progress, { value: selectedDriver.safetyScore, className: "h-2" })] })] }), _jsxs(Card, { className: "p-4 bg-purple-50 border-purple-200", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Star, { className: "h-5 w-5 text-purple-600" }), _jsx("span", { className: "font-medium text-purple-800", children: "Customer Rating" })] }), _jsx("div", { className: "space-y-2", children: _jsxs("div", { className: "flex justify-between", children: [_jsxs("span", { className: "text-2xl font-bold text-purple-700", children: [selectedDriver.rating, "/5.0"] }), _jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: `h-3 w-3 ${i < Math.floor(selectedDriver.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}` }, i))) })] }) })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs(Card, { className: "p-4", children: [_jsx("h4", { className: "font-medium text-gray-900 mb-4", children: "Performance Trends" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-sm text-gray-600", children: "This Month" }), _jsx("span", { className: "text-sm font-medium", children: "18 trips completed" })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-sm text-gray-600", children: "Average Trip Time" }), _jsx("span", { className: "text-sm font-medium", children: "4.2 hours" })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-sm text-gray-600", children: "Fuel Efficiency" }), _jsx("span", { className: "text-sm font-medium", children: "8.2 MPG" })] })] })] }), _jsxs(Card, { className: "p-4", children: [_jsx("h4", { className: "font-medium text-gray-900 mb-4", children: "Achievements" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Award, { className: "h-4 w-4 text-yellow-500" }), _jsx("span", { className: "text-sm", children: "Safe Driver Award 2023" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Award, { className: "h-4 w-4 text-blue-500" }), _jsx("span", { className: "text-sm", children: "100+ Trips Milestone" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Award, { className: "h-4 w-4 text-green-500" }), _jsx("span", { className: "text-sm", children: "On-Time Delivery Champion" })] })] })] })] })] }) }), _jsx(TabsContent, { value: "documents", className: "mt-6", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "font-medium text-gray-900", children: "Driver Documents" }), _jsx(Button, { variant: "outline", size: "sm", children: "Upload Document" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                                                { name: 'Driver License', status: 'Valid', expiry: selectedDriver.licenseExpiry, type: 'CDL-A' },
                                                                { name: 'Medical Certificate', status: 'Valid', expiry: selectedDriver.medicalCert, type: 'DOT Physical' },
                                                                { name: 'Background Check', status: 'Valid', expiry: '2024-12-31', type: 'MVR Report' },
                                                                { name: 'Insurance Certificate', status: 'Valid', expiry: '2024-08-15', type: 'Commercial' },
                                                            ].map((doc, index) => (_jsxs(Card, { className: "p-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FileText, { className: "h-4 w-4 text-gray-400" }), _jsx("span", { className: "font-medium text-gray-900", children: doc.name })] }), _jsx(Badge, { className: doc.status === 'Valid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', children: doc.status })] }), _jsxs("p", { className: "text-sm text-gray-600", children: ["Type: ", doc.type] }), _jsxs("p", { className: "text-sm text-gray-600", children: ["Expires: ", doc.expiry] }), _jsxs("div", { className: "mt-3 flex gap-2", children: [_jsx(Button, { size: "sm", variant: "outline", className: "text-xs", children: "View" }), _jsx(Button, { size: "sm", variant: "outline", className: "text-xs", children: "Download" })] })] }, index))) })] }) }), _jsx(TabsContent, { value: "history", className: "mt-6", children: _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-medium text-gray-900", children: "Recent Trip History" }), _jsx("div", { className: "space-y-3", children: [
                                                                { id: 'TR001', route: 'New York → Boston', date: '2024-01-10', status: 'Completed', revenue: '$2,450' },
                                                                { id: 'TR005', route: 'Boston → Philadelphia', date: '2024-01-08', status: 'Completed', revenue: '$1,890' },
                                                                { id: 'TR009', route: 'New York → Albany', date: '2024-01-06', status: 'Completed', revenue: '$1,320' },
                                                                { id: 'TR012', route: 'Albany → Buffalo', date: '2024-01-04', status: 'Completed', revenue: '$2,100' },
                                                            ].map((trip, index) => (_jsx(Card, { className: "p-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium text-gray-900", children: trip.id }), _jsx("p", { className: "text-sm text-gray-600", children: trip.route }), _jsx("p", { className: "text-xs text-gray-500", children: trip.date })] }), _jsxs("div", { className: "text-right", children: [_jsx(Badge, { className: "bg-green-100 text-green-800 mb-1", children: trip.status }), _jsx("p", { className: "text-sm font-medium text-green-600", children: trip.revenue })] })] }) }, index))) })] }) })] }) })] }) })] })] }));
}
//# sourceMappingURL=DriversModule.js.map