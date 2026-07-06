import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Checkbox } from './ui/checkbox';
import { Package, MapPin, Calendar as CalendarIcon, User, Truck, DollarSign, Clock, AlertTriangle, Plus, Minus, Save, X } from 'lucide-react';
import { format } from 'date-fns';
const availableDrivers = [
    { id: 'DRV001', name: 'Michael Johnson', status: 'Available', rating: 4.8 },
    { id: 'DRV002', name: 'Sarah Wilson', status: 'Available', rating: 4.9 },
    { id: 'DRV003', name: 'Carlos Rodriguez', status: 'Available', rating: 4.7 },
    { id: 'DRV004', name: 'Lisa Chen', status: 'Available', rating: 4.6 }
];
const availableVehicles = [
    { id: 'TRK001', name: 'Volvo VNL 860', type: 'Truck', capacity: '15,000 lbs', status: 'Available' },
    { id: 'VAN205', name: 'Ford Transit', type: 'Van', capacity: '8,500 lbs', status: 'Available' },
    { id: 'AIR102', name: 'Boeing 747 Cargo', type: 'Aircraft', capacity: '45,000 lbs', status: 'Available' },
    { id: 'SEA301', name: 'Container Ship', type: 'Ship', capacity: '125,000 lbs', status: 'Available' }
];
const customerOptions = [
    { id: 'CUST001', name: 'Acme Corporation', type: 'Premium' },
    { id: 'CUST002', name: 'Global Exports Ltd', type: 'Standard' },
    { id: 'CUST003', name: 'TechFlow Industries', type: 'Premium' },
    { id: 'CUST004', name: 'MedSupply Inc', type: 'Enterprise' }
];
export function CreateTripModal({ isOpen, onClose }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [pickupDate, setPickupDate] = useState();
    const [deliveryDate, setDeliveryDate] = useState();
    const [tripData, setTripData] = useState({
        customer: '',
        origin: '',
        destination: '',
        distance: '',
        estimatedDuration: '',
        transportMode: '',
        priority: 'Medium',
        assignedDriver: '',
        assignedVehicle: '',
        cargo: {
            type: '',
            weight: '',
            dimensions: '',
            value: '',
            specialRequirements: []
        },
        pricing: {
            baseRate: '',
            fuelSurcharge: '',
            additionalFees: '',
            totalEstimate: ''
        }
    });
    const specialRequirements = [
        'Temperature Control',
        'Fragile Handling',
        'Hazardous Materials',
        'Express Delivery',
        'White Glove Service',
        'Insurance Required'
    ];
    const handleSpecialRequirementChange = (requirement, checked) => {
        setTripData(prev => ({
            ...prev,
            cargo: {
                ...prev.cargo,
                specialRequirements: checked
                    ? [...prev.cargo.specialRequirements, requirement]
                    : prev.cargo.specialRequirements.filter(req => req !== requirement)
            }
        }));
    };
    const calculateEstimate = () => {
        const baseRate = parseFloat(tripData.pricing.baseRate) || 0;
        const fuelSurcharge = parseFloat(tripData.pricing.fuelSurcharge) || 0;
        const additionalFees = parseFloat(tripData.pricing.additionalFees) || 0;
        const total = baseRate + fuelSurcharge + additionalFees;
        setTripData(prev => ({
            ...prev,
            pricing: {
                ...prev.pricing,
                totalEstimate: total.toFixed(2)
            }
        }));
    };
    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            onClose();
            // Show success message
            alert('Trip created successfully! Trip ID: TR-2024-' + Math.floor(Math.random() * 1000));
        }, 2000);
    };
    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "max-w-4xl max-h-[90vh] overflow-y-auto", children: [_jsx(DialogHeader, { children: _jsxs(DialogTitle, { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Package, { className: "h-6 w-6 text-blue-600" }), "Create New Trip"] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, children: _jsx(X, { className: "h-4 w-4" }) })] }) }), _jsx("div", { className: "flex items-center justify-between mb-6", children: [1, 2, 3, 4].map((step) => (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${step <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`, children: step }), step < 4 && (_jsx("div", { className: `w-16 h-1 mx-2 ${step < currentStep ? 'bg-blue-600' : 'bg-gray-200'}` }))] }, step))) }), _jsxs("div", { className: "space-y-6", children: [currentStep === 1 && (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "h-5 w-5" }), "Trip Details"] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "customer", children: "Customer" }), _jsxs(Select, { value: tripData.customer, onValueChange: (value) => setTripData({ ...tripData, customer: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select customer" }) }), _jsx(SelectContent, { children: customerOptions.map(customer => (_jsx(SelectItem, { value: customer.id, children: _jsxs("div", { className: "flex items-center justify-between w-full", children: [_jsx("span", { children: customer.name }), _jsx(Badge, { variant: "outline", className: "ml-2", children: customer.type })] }) }, customer.id))) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "priority", children: "Priority Level" }), _jsxs(Select, { value: tripData.priority, onValueChange: (value) => setTripData({ ...tripData, priority: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "Low", children: "Low Priority" }), _jsx(SelectItem, { value: "Medium", children: "Medium Priority" }), _jsx(SelectItem, { value: "High", children: "High Priority" }), _jsx(SelectItem, { value: "Urgent", children: "Urgent" })] })] })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "origin", children: "Origin Address" }), _jsx(Input, { id: "origin", placeholder: "Enter pickup location", value: tripData.origin, onChange: (e) => setTripData({ ...tripData, origin: e.target.value }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "destination", children: "Destination Address" }), _jsx(Input, { id: "destination", placeholder: "Enter delivery location", value: tripData.destination, onChange: (e) => setTripData({ ...tripData, destination: e.target.value }) })] })] }), _jsxs("div", { className: "grid grid-cols-3 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "distance", children: "Distance" }), _jsx(Input, { id: "distance", placeholder: "e.g., 250 miles", value: tripData.distance, onChange: (e) => setTripData({ ...tripData, distance: e.target.value }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "duration", children: "Estimated Duration" }), _jsx(Input, { id: "duration", placeholder: "e.g., 4h 30m", value: tripData.estimatedDuration, onChange: (e) => setTripData({ ...tripData, estimatedDuration: e.target.value }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "mode", children: "Transport Mode" }), _jsxs(Select, { value: tripData.transportMode, onValueChange: (value) => setTripData({ ...tripData, transportMode: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select mode" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "road", children: "Road Transport" }), _jsx(SelectItem, { value: "air", children: "Air Transport" }), _jsx(SelectItem, { value: "sea", children: "Sea Transport" }), _jsx(SelectItem, { value: "rail", children: "Rail Transport" })] })] })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Pickup Date" }), _jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: "w-full justify-start text-left font-normal", children: [_jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }), pickupDate ? format(pickupDate, "PPP") : "Select pickup date"] }) }), _jsx(PopoverContent, { className: "w-auto p-0", children: _jsx(Calendar, { mode: "single", selected: pickupDate, onSelect: setPickupDate, initialFocus: true }) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Delivery Date" }), _jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: "w-full justify-start text-left font-normal", children: [_jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }), deliveryDate ? format(deliveryDate, "PPP") : "Select delivery date"] }) }), _jsx(PopoverContent, { className: "w-auto p-0", children: _jsx(Calendar, { mode: "single", selected: deliveryDate, onSelect: setDeliveryDate, initialFocus: true }) })] })] })] })] })] })), currentStep === 2 && (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Package, { className: "h-5 w-5" }), "Cargo Information"] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "cargoType", children: "Cargo Type" }), _jsx(Input, { id: "cargoType", placeholder: "e.g., Electronics, Medical Supplies", value: tripData.cargo.type, onChange: (e) => setTripData({ ...tripData, cargo: { ...tripData.cargo, type: e.target.value } }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "cargoValue", children: "Cargo Value ($)" }), _jsx(Input, { id: "cargoValue", placeholder: "e.g., 125000", value: tripData.cargo.value, onChange: (e) => setTripData({ ...tripData, cargo: { ...tripData.cargo, value: e.target.value } }) })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "weight", children: "Weight" }), _jsx(Input, { id: "weight", placeholder: "e.g., 15,000 lbs", value: tripData.cargo.weight, onChange: (e) => setTripData({ ...tripData, cargo: { ...tripData.cargo, weight: e.target.value } }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "dimensions", children: "Dimensions" }), _jsx(Input, { id: "dimensions", placeholder: "e.g., 8x6x6 ft", value: tripData.cargo.dimensions, onChange: (e) => setTripData({ ...tripData, cargo: { ...tripData.cargo, dimensions: e.target.value } }) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { children: "Special Requirements" }), _jsx("div", { className: "grid grid-cols-2 gap-2", children: specialRequirements.map((requirement) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: requirement, checked: tripData.cargo.specialRequirements.includes(requirement), onCheckedChange: (checked) => handleSpecialRequirementChange(requirement, checked) }), _jsx(Label, { htmlFor: requirement, className: "text-sm", children: requirement })] }, requirement))) })] })] })] })), currentStep === 3 && (_jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(User, { className: "h-5 w-5" }), "Assign Driver"] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-3", children: availableDrivers.map((driver) => (_jsx("div", { className: `p-3 border rounded-lg cursor-pointer transition-colors ${tripData.assignedDriver === driver.id
                                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                                                        : 'hover:bg-accent'}`, onClick: () => setTripData({ ...tripData, assignedDriver: driver.id }), children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium", children: driver.name }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["ID: ", driver.id] })] }), _jsxs("div", { className: "text-right", children: [_jsx(Badge, { variant: "outline", className: "mb-1", children: driver.status }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Rating: ", driver.rating, "/5"] })] })] }) }, driver.id))) }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Truck, { className: "h-5 w-5" }), "Assign Vehicle"] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-3", children: availableVehicles.map((vehicle) => (_jsx("div", { className: `p-3 border rounded-lg cursor-pointer transition-colors ${tripData.assignedVehicle === vehicle.id
                                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                                                        : 'hover:bg-accent'}`, onClick: () => setTripData({ ...tripData, assignedVehicle: vehicle.id }), children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium", children: vehicle.name }), _jsxs("p", { className: "text-sm text-muted-foreground", children: [vehicle.type, " \u2022 ", vehicle.id] })] }), _jsxs("div", { className: "text-right", children: [_jsx(Badge, { variant: "outline", className: "mb-1", children: vehicle.status }), _jsx("p", { className: "text-sm text-muted-foreground", children: vehicle.capacity })] })] }) }, vehicle.id))) }) })] })] })), currentStep === 4 && (_jsxs("div", { className: "space-y-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(DollarSign, { className: "h-5 w-5" }), "Pricing Calculation"] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "baseRate", children: "Base Rate ($)" }), _jsx(Input, { id: "baseRate", type: "number", placeholder: "2500", value: tripData.pricing.baseRate, onChange: (e) => setTripData({ ...tripData, pricing: { ...tripData.pricing, baseRate: e.target.value } }), onBlur: calculateEstimate })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "fuelSurcharge", children: "Fuel Surcharge ($)" }), _jsx(Input, { id: "fuelSurcharge", type: "number", placeholder: "375", value: tripData.pricing.fuelSurcharge, onChange: (e) => setTripData({ ...tripData, pricing: { ...tripData.pricing, fuelSurcharge: e.target.value } }), onBlur: calculateEstimate })] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "additionalFees", children: "Additional Fees ($)" }), _jsx(Input, { id: "additionalFees", type: "number", placeholder: "125", value: tripData.pricing.additionalFees, onChange: (e) => setTripData({ ...tripData, pricing: { ...tripData.pricing, additionalFees: e.target.value } }), onBlur: calculateEstimate })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "totalEstimate", children: "Total Estimate ($)" }), _jsx(Input, { id: "totalEstimate", value: tripData.pricing.totalEstimate, disabled: true, className: "font-semibold bg-muted" })] })] })] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Trip Summary" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium text-sm text-muted-foreground", children: "Route" }), _jsxs("p", { className: "font-medium", children: [tripData.origin, " \u2192 ", tripData.destination] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-sm text-muted-foreground", children: "Distance & Duration" }), _jsxs("p", { className: "font-medium", children: [tripData.distance, " \u2022 ", tripData.estimatedDuration] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-sm text-muted-foreground", children: "Transport Mode" }), _jsx(Badge, { variant: "outline", className: "capitalize", children: tripData.transportMode })] })] }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium text-sm text-muted-foreground", children: "Cargo" }), _jsxs("p", { className: "font-medium", children: [tripData.cargo.type, " \u2022 ", tripData.cargo.weight] })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-sm text-muted-foreground", children: "Priority" }), _jsx(Badge, { className: tripData.priority === 'Urgent' ? 'bg-red-100 text-red-800' :
                                                                            tripData.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                                                                                tripData.priority === 'Medium' ? 'bg-blue-100 text-blue-800' :
                                                                                    'bg-green-100 text-green-800', children: tripData.priority })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-sm text-muted-foreground", children: "Total Cost" }), _jsxs("p", { className: "font-bold text-lg text-green-600", children: ["$", tripData.pricing.totalEstimate] })] })] })] }) })] })] })), _jsxs("div", { className: "flex justify-between", children: [_jsx(Button, { variant: "outline", onClick: prevStep, disabled: currentStep === 1, children: "Previous" }), _jsx("div", { className: "flex gap-2", children: currentStep < 4 ? (_jsx(Button, { onClick: nextStep, children: "Next Step" })) : (_jsx(Button, { onClick: handleSubmit, disabled: isSubmitting, children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent mr-2" }), "Creating Trip..."] })) : (_jsxs(_Fragment, { children: [_jsx(Save, { className: "h-4 w-4 mr-1" }), "Create Trip"] })) })) })] })] })] }) }));
}
//# sourceMappingURL=CreateTripModal.js.map