"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Shield, CheckCircle, AlertCircle, Loader2, Star, Github, Chrome, Apple, Smartphone } from "lucide-react";
import { useDarkMode } from "./DarkModeProvider";
import { useLanguage } from "./LanguageProvider";
import { LoadingSpinner } from "./LoadingSpinner";
export function LoginPage({ navigate }) {
    const { isDark } = useDarkMode();
    const { t, isRTL } = useLanguage();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [loginMethod, setLoginMethod] = useState('email');
    // Handle form input changes
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };
    // Validate form
    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // Handle login submission
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateForm())
            return;
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            // Mock successful login
            console.log('Login successful:', formData);
            // Navigate to dashboard or previous page
            navigate?.('account-dashboard');
        }
        catch (error) {
            setErrors({ submit: 'Login failed. Please check your credentials and try again.' });
        }
        finally {
            setIsLoading(false);
        }
    };
    // Handle social login
    const handleSocialLogin = async (provider) => {
        setIsLoading(true);
        try {
            // Simulate social login
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log(`${provider} login initiated`);
            navigate?.('account-dashboard');
        }
        catch (error) {
            setErrors({ submit: `${provider} login failed. Please try again.` });
        }
        finally {
            setIsLoading(false);
        }
    };
    const socialProviders = [
        {
            name: 'Google',
            icon: Chrome,
            color: 'bg-red-500 hover:bg-red-600',
            action: () => handleSocialLogin('Google')
        },
        {
            name: 'GitHub',
            icon: Github,
            color: 'bg-gray-800 hover:bg-gray-900',
            action: () => handleSocialLogin('GitHub')
        },
        {
            name: 'Apple',
            icon: Apple,
            color: 'bg-black hover:bg-gray-900',
            action: () => handleSocialLogin('Apple')
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-background flex items-center justify-center p-6", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background" }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "relative z-10 w-full max-w-md", children: _jsxs(Card, { className: "glass-heavy border-blue-200 dark:border-blue-800/50", children: [_jsxs(CardHeader, { className: "text-center space-y-4", children: [_jsx(motion.div, { initial: { scale: 0 }, animate: { scale: 1 }, transition: { delay: 0.2, type: "spring", stiffness: 200 }, className: "mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center", children: _jsx(Shield, { className: "w-8 h-8 text-white" }) }), _jsxs("div", { children: [_jsx(CardTitle, { className: "text-2xl font-bold text-slate-900 dark:text-slate-100", children: "Welcome Back" }), _jsx(CardDescription, { className: "text-slate-600 dark:text-slate-400 mt-2", children: "Sign in to your Delibix account to access advanced AI consulting tools and insights" })] }), _jsx("div", { className: "flex items-center justify-center gap-2", children: _jsxs(Badge, { variant: "outline", className: "text-xs", children: [_jsx(Star, { className: "w-3 h-3 mr-1 text-amber-500" }), "Trusted by 10,000+ businesses"] }) })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "flex rounded-lg bg-slate-100 dark:bg-slate-800 p-1", children: [_jsxs("button", { type: "button", onClick: () => setLoginMethod('email'), className: `flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${loginMethod === 'email'
                                                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'}`, children: [_jsx(Mail, { className: "w-4 h-4 inline mr-2" }), "Email"] }), _jsxs("button", { type: "button", onClick: () => setLoginMethod('sso'), className: `flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${loginMethod === 'sso'
                                                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'}`, children: [_jsx(Smartphone, { className: "w-4 h-4 inline mr-2" }), "SSO"] })] }), loginMethod === 'email' && (_jsxs(motion.form, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.3 }, onSubmit: handleLogin, className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", className: "text-sm font-medium", children: "Email Address" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" }), _jsx(Input, { id: "email", type: "email", placeholder: "your@email.com", value: formData.email, onChange: (e) => handleInputChange('email', e.target.value), className: `pl-10 ${errors.email ? 'border-red-500' : ''}`, disabled: isLoading })] }), errors.email && (_jsxs(motion.p, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "text-red-500 text-xs flex items-center gap-1", children: [_jsx(AlertCircle, { className: "w-3 h-3" }), errors.email] }))] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "password", className: "text-sm font-medium", children: "Password" }), _jsxs("div", { className: "relative", children: [_jsx(Lock, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" }), _jsx(Input, { id: "password", type: showPassword ? "text" : "password", placeholder: "Enter your password", value: formData.password, onChange: (e) => handleInputChange('password', e.target.value), className: `pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`, disabled: isLoading }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors", disabled: isLoading, children: showPassword ? _jsx(EyeOff, { className: "w-4 h-4" }) : _jsx(Eye, { className: "w-4 h-4" }) })] }), errors.password && (_jsxs(motion.p, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "text-red-500 text-xs flex items-center gap-1", children: [_jsx(AlertCircle, { className: "w-3 h-3" }), errors.password] }))] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "remember", checked: formData.rememberMe, onCheckedChange: (checked) => handleInputChange('rememberMe', checked), disabled: isLoading }), _jsx(Label, { htmlFor: "remember", className: "text-sm text-slate-600 dark:text-slate-400", children: "Remember me" })] }), _jsx("button", { type: "button", onClick: () => navigate?.('forgot-password'), className: "text-sm text-blue-600 dark:text-blue-400 hover:underline", disabled: isLoading, children: "Forgot password?" })] }), errors.submit && (_jsx(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3", children: _jsxs("p", { className: "text-red-600 dark:text-red-400 text-sm flex items-center gap-2", children: [_jsx(AlertCircle, { className: "w-4 h-4" }), errors.submit] }) })), _jsxs(Button, { type: "submit", className: "w-full gradient-bg-blue text-white py-6 text-lg font-semibold rounded-xl", disabled: isLoading, children: [isLoading ? (_jsx(LoadingSpinner, { size: "sm", className: "mr-2" })) : (_jsx(ArrowRight, { className: "w-5 h-5 mr-2" })), isLoading ? 'Signing In...' : 'Sign In'] })] })), loginMethod === 'sso' && (_jsx(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.3 }, className: "space-y-3", children: socialProviders.map((provider) => (_jsxs(Button, { onClick: provider.action, disabled: isLoading, className: `w-full ${provider.color} text-white py-6 text-lg font-semibold rounded-xl transition-all duration-200`, children: [isLoading ? (_jsx(LoadingSpinner, { size: "sm", className: "mr-2" })) : (_jsx(provider.icon, { className: "w-5 h-5 mr-2" })), "Continue with ", provider.name] }, provider.name))) })), _jsx("div", { className: "text-center pt-4 border-t border-slate-200 dark:border-slate-700", children: _jsxs("p", { className: "text-slate-600 dark:text-slate-400 text-sm", children: ["Don't have an account?", ' ', _jsx("button", { onClick: () => navigate?.('signup'), className: "text-blue-600 dark:text-blue-400 hover:underline font-medium", disabled: isLoading, children: "Sign up for free" })] }) }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5 }, className: "text-center text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3", children: [_jsx(Shield, { className: "w-4 h-4 mx-auto mb-1 text-blue-500" }), _jsx("p", { children: "Your data is protected with enterprise-grade security" })] })] })] }) })] }));
}
//# sourceMappingURL=LoginPage.js.map