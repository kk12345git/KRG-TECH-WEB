"use client";

import { motion } from 'framer-motion';
import {
    PackageIcon,
    ShoppingCartIcon,
    TrendingUpIcon,
    AlertCircleIcon,
    ArrowRightIcon
} from 'lucide-react';
import Link from 'next/link';

import productsData from '@/data/products.json';

export default function DashboardPage() {
    const stats = [
        { label: 'Total Products', value: productsData.length.toString(), icon: PackageIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Recent Orders', value: '0', icon: ShoppingCartIcon, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { label: 'Revenue (MTD)', value: '₹0', icon: TrendingUpIcon, color: 'text-medical-600', bg: 'bg-medical-50' },
        { label: 'Active Leads', value: '42', icon: AlertCircleIcon, color: 'text-rose-600', bg: 'bg-rose-50' },
    ];
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">
                    Management <span className="text-medical-600">Hub</span>
                </h1>
                <p className="text-slate-500">Welcome back. Here's what's happening across the KRG platform today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm"
                    >
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", stat.bg, stat.color)}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">Product Catalog</h2>
                        <p className="text-slate-400 mb-8 max-w-sm">Manage entries, categories, and inventory specs for the global storefront.</p>
                        <Link
                            href="/admin/products"
                            className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-all"
                        >
                            Go to Products
                            <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                    <PackageIcon className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                </div>

                <div className="bg-medical-700 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">Active Orders</h2>
                        <p className="text-white/60 mb-8 max-w-sm">Review incoming hospital procurement requests and logistics status.</p>
                        <Link
                            href="/admin/orders"
                            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-all"
                        >
                            View Orders
                            <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                    <ShoppingCartIcon className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                </div>
            </div>
        </div>
    );
}

// Inline helper for CN if not available in this scope (but it is in lib/utils)
import { cn } from '@/lib/utils';
