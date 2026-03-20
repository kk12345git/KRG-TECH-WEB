"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ShoppingCartIcon,
    SearchIcon,
    FilterIcon,
    ChevronRightIcon,
    ClockIcon,
    CheckCircle2Icon,
    TruckIcon,
    FileTextIcon,
    MoreVerticalIcon,
    AlertCircleIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const initialOrders = [
    { id: 'ORD-7742', hospital: 'Apollo Specialty Hospitals', date: '2026-02-25', total: '₹4,25,000', items: 12, status: 'processing', priority: 'high' },
    { id: 'ORD-7741', hospital: 'Global Health Network', date: '2026-02-24', total: '₹1,12,000', items: 5, status: 'shipped', priority: 'normal' },
    { id: 'ORD-7740', hospital: 'MIOT International', date: '2026-02-24', total: '₹8,90,000', items: 25, status: 'delivered', priority: 'emergency' },
    { id: 'ORD-7739', hospital: 'Kauvery Hospital', date: '2026-02-23', total: '₹2,45,000', items: 8, status: 'pending', priority: 'normal' },
    { id: 'ORD-7738', hospital: 'Rela Hospital', date: '2026-02-22', total: '₹6,15,000', items: 18, status: 'cancelled', priority: 'normal' },
    { id: 'ORD-7737', hospital: 'MMM Madras', date: '2026-02-22', total: '₹3,20,000', items: 10, status: 'shipped', priority: 'high' },
];

export default function OrdersPage() {
    const [orders, setOrders] = useState(initialOrders);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredOrders = orders.filter(order =>
        order.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusStyles = (status) => {
        switch (status) {
            case 'delivered': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
            case 'shipped': return 'bg-blue-50 text-blue-700 border-blue-100';
            case 'processing': return 'bg-amber-50 text-amber-700 border-amber-100';
            case 'pending': return 'bg-slate-50 text-slate-400 border-slate-100';
            case 'cancelled': return 'bg-red-50 text-red-700 border-red-100';
            default: return 'bg-slate-50 text-slate-400 border-slate-100';
        }
    };

    const getPriorityStyles = (priority) => {
        switch (priority) {
            case 'emergency': return 'text-red-600';
            case 'high': return 'text-amber-600';
            default: return 'text-slate-400';
        }
    };

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">
                        Institutional <span className="text-medical-600">Orders</span>
                    </h1>
                    <p className="text-slate-500">Track and manage procurement fulfillment for hospital networks.</p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="relative">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search order ID or hospital..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-medical-500 outline-none w-64 shadow-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Order Details</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Hospital/Organization</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Items/Scale</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Total Value</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredOrders.map((order, i) => (
                                <motion.tr
                                    key={order.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:bg-slate-50/30 transition-colors group"
                                >
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-medical-50 group-hover:text-medical-700 transition-colors">
                                                <ShoppingCartIcon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 leading-none mb-1">{order.id}</p>
                                                <p className="text-[10px] text-slate-400 font-medium">Placed: {order.date}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">{order.hospital}</p>
                                            {order.priority !== 'normal' && (
                                                <AlertCircleIcon className={cn("w-3 h-3", getPriorityStyles(order.priority))} />
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-black text-slate-400 uppercase tracking-widest">{order.items} SKU Layers</td>
                                    <td className="px-8 py-6 text-sm font-black text-slate-900">{order.total}</td>
                                    <td className="px-8 py-6">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                                            getStatusStyles(order.status)
                                        )}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 hover:bg-white hover:shadow-md rounded-lg transition-all text-slate-400 hover:text-medical-600">
                                                <FileTextIcon className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 hover:bg-white hover:shadow-md rounded-lg transition-all text-slate-400 hover:text-medical-600">
                                                <TruckIcon className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {filteredOrders.length === 0 && (
                <div className="py-24 text-center border-2 border-dashed border-slate-100 rounded-[3rem]">
                    <SearchIcon className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No orders found matching your search</p>
                </div>
            )}
        </div>
    );
}
