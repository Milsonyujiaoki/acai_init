"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useContext, useEffect, useState } from 'react';
const DarkModeContext = createContext(undefined);
export function DarkModeProvider({ children }) {
    const [theme, setTheme] = useState('system');
    const [isDark, setIsDark] = useState(false);
    // Check system preference
    const getSystemTheme = () => {
        if (typeof window !== 'undefined') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    };
    // Update isDark based on current theme
    const updateIsDark = (currentTheme) => {
        if (currentTheme === 'system') {
            setIsDark(getSystemTheme() === 'dark');
        }
        else {
            setIsDark(currentTheme === 'dark');
        }
    };
    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
            setTheme(savedTheme);
            updateIsDark(savedTheme);
        }
        else {
            // Default to system preference
            setTheme('system');
            updateIsDark('system');
        }
    }, []);
    // Listen for system theme changes
    useEffect(() => {
        if (theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = (e) => {
                setIsDark(e.matches);
            };
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        }
    }, [theme]);
    // Apply theme to document
    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        }
        else {
            root.classList.remove('dark');
        }
    }, [isDark]);
    // Handle theme change
    const handleSetTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        updateIsDark(newTheme);
    };
    return (_jsx(DarkModeContext.Provider, { value: {
            theme,
            setTheme: handleSetTheme,
            isDark,
        }, children: children }));
}
export function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
}
//# sourceMappingURL=DarkModeProvider.js.map