import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
export function PasswordChangeForm({ onPasswordChange, error, isLoading }) {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false
    });
    const [validationErrors, setValidationErrors] = useState([]);
    const validatePassword = (password) => {
        const errors = [];
        if (password.length < 8)
            errors.push('At least 8 characters long');
        if (!/[A-Z]/.test(password))
            errors.push('At least one uppercase letter');
        if (!/[a-z]/.test(password))
            errors.push('At least one lowercase letter');
        if (!/\d/.test(password))
            errors.push('At least one number');
        return errors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validatePassword(newPassword);
        if (errors.length > 0) {
            setValidationErrors(errors);
            return;
        }
        if (newPassword !== confirmPassword) {
            setValidationErrors(['Passwords do not match']);
            return;
        }
        setValidationErrors([]);
        onPasswordChange(currentPassword, newPassword);
    };
    const passwordStrength = newPassword ? validatePassword(newPassword) : [];
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 px-4", children: _jsxs(Card, { className: "w-full max-w-md", children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx("div", { className: "mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4", children: _jsx("span", { className: "text-white font-bold", children: "EP" }) }), _jsx(CardTitle, { children: "Change Password" }), _jsx(CardDescription, { children: "Please change your password to continue. This is required for first-time login." })] }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [error && (_jsx(Alert, { variant: "destructive", children: _jsx(AlertDescription, { children: error }) })), validationErrors.length > 0 && (_jsx(Alert, { variant: "destructive", children: _jsx(AlertDescription, { children: _jsx("ul", { className: "list-disc list-inside space-y-1", children: validationErrors.map((error, index) => (_jsx("li", { children: error }, index))) }) }) })), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "currentPassword", children: "Current Password" }), _jsxs("div", { className: "relative", children: [_jsx(Input, { id: "currentPassword", type: showPasswords.current ? 'text' : 'password', value: currentPassword, onChange: (e) => setCurrentPassword(e.target.value), placeholder: "Enter current password", required: true, disabled: isLoading }), _jsx(Button, { type: "button", variant: "ghost", size: "sm", className: "absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent", onClick: () => setShowPasswords(prev => ({ ...prev, current: !prev.current })), disabled: isLoading, children: showPasswords.current ? _jsx(EyeOff, { className: "h-4 w-4" }) : _jsx(Eye, { className: "h-4 w-4" }) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "newPassword", children: "New Password" }), _jsxs("div", { className: "relative", children: [_jsx(Input, { id: "newPassword", type: showPasswords.new ? 'text' : 'password', value: newPassword, onChange: (e) => setNewPassword(e.target.value), placeholder: "Enter new password", required: true, disabled: isLoading }), _jsx(Button, { type: "button", variant: "ghost", size: "sm", className: "absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent", onClick: () => setShowPasswords(prev => ({ ...prev, new: !prev.new })), disabled: isLoading, children: showPasswords.new ? _jsx(EyeOff, { className: "h-4 w-4" }) : _jsx(Eye, { className: "h-4 w-4" }) })] }), newPassword && (_jsxs("div", { className: "text-sm space-y-1", children: [_jsx("p", { className: "text-muted-foreground", children: "Password requirements:" }), ['At least 8 characters long', 'At least one uppercase letter', 'At least one lowercase letter', 'At least one number'].map((requirement, index) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: `h-3 w-3 ${passwordStrength.includes(requirement) ? 'text-muted-foreground' : 'text-green-500'}` }), _jsx("span", { className: passwordStrength.includes(requirement) ? 'text-muted-foreground' : 'text-green-500', children: requirement })] }, index)))] }))] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "confirmPassword", children: "Confirm New Password" }), _jsxs("div", { className: "relative", children: [_jsx(Input, { id: "confirmPassword", type: showPasswords.confirm ? 'text' : 'password', value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), placeholder: "Confirm new password", required: true, disabled: isLoading }), _jsx(Button, { type: "button", variant: "ghost", size: "sm", className: "absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent", onClick: () => setShowPasswords(prev => ({ ...prev, confirm: !prev.confirm })), disabled: isLoading, children: showPasswords.confirm ? _jsx(EyeOff, { className: "h-4 w-4" }) : _jsx(Eye, { className: "h-4 w-4" }) })] })] }), _jsx(Button, { type: "submit", className: "w-full", disabled: isLoading || passwordStrength.length > 0, children: isLoading ? 'Changing Password...' : 'Change Password' })] }) })] }) }));
}
//# sourceMappingURL=PasswordChangeForm.js.map