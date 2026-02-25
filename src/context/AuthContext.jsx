"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check for existing session in localStorage
        const savedUser = localStorage.getItem('krg_user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                console.error('Failed to parse saved user', e);
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        setLoading(true);
        setError(null);

        // HARDCODED ADMIN BYPASS
        if (email === 'krgmedifabb@admin.com' && password === 'admin123') {
            const adminUser = {
                id: 'admin_001',
                name: 'KRG Administrator',
                email: 'krgmedifabb@admin.com',
                role: 'admin'
            };
            setUser(adminUser);
            localStorage.setItem('krg_user', JSON.stringify(adminUser));
            localStorage.setItem('krg_token', 'admin_secret_token_2026');
            setLoading(false);
            return true;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                const userWithRole = { ...data.user, role: data.user.role || 'client' };
                setUser(userWithRole);
                localStorage.setItem('krg_user', JSON.stringify(userWithRole));
                localStorage.setItem('krg_token', data.token);
                return true;
            } else {
                setError(data.message);
                return false;
            }
        } catch (err) {
            setError('Connection to security server failed');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('krg_user');
        localStorage.removeItem('krg_token');
    };

    const value = {
        user,
        loading,
        error,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
