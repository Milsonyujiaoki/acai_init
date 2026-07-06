import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircle2, Download, ArrowLeft, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
export function PaymentSuccess() {
    const transactionDetails = {
        amount: '$149.99',
        transactionId: 'TXN-789123456',
        paymentMethod: '**** 4242',
        date: 'Dec 15, 2024',
        merchant: 'TechStore Pro',
        email: 'customer@example.com'
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-4", children: _jsx(Card, { className: "w-full max-w-md mx-auto", children: _jsxs(CardContent, { className: "p-8 text-center space-y-6", children: [_jsx("div", { className: "flex justify-center", children: _jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center", children: _jsx(CheckCircle2, { className: "w-8 h-8 text-green-600" }) }) }), _jsxs("div", { className: "space-y-2", children: [_jsx("h1", { className: "text-green-600", children: "Payment Successful!" }), _jsx("p", { className: "text-muted-foreground", children: "Your payment has been processed successfully. You will receive a confirmation email shortly." })] }), _jsxs("div", { className: "bg-muted/50 rounded-lg p-4 space-y-3", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-muted-foreground", children: "Amount" }), _jsx("span", { className: "text-lg", children: transactionDetails.amount })] }), _jsx(Separator, {}), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-muted-foreground", children: "Transaction ID" }), _jsx(Badge, { variant: "outline", className: "text-xs", children: transactionDetails.transactionId })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-muted-foreground", children: "Payment Method" }), _jsx("span", { children: transactionDetails.paymentMethod })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-muted-foreground", children: "Date" }), _jsx("span", { children: transactionDetails.date })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-muted-foreground", children: "Merchant" }), _jsx("span", { children: transactionDetails.merchant })] })] }), _jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-muted-foreground bg-blue-50 p-3 rounded-lg", children: [_jsx(Mail, { className: "w-4 h-4" }), _jsxs("span", { children: ["Receipt sent to ", transactionDetails.email] })] }), _jsxs("div", { className: "space-y-3 pt-4", children: [_jsxs(Button, { className: "w-full", size: "lg", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Download Receipt"] }), _jsxs(Button, { variant: "outline", className: "w-full", size: "lg", children: [_jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), "Return to Store"] })] }), _jsx("p", { className: "text-xs text-muted-foreground pt-4", children: "Need help? Contact our support team at support@techstore.com" })] }) }) }));
}
//# sourceMappingURL=PaymentSuccess.js.map