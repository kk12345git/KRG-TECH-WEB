import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
    Square3Stack3DIcon,
    ShoppingCartIcon,
    ArrowPathIcon,
    DocumentTextIcon,
    ExclamationTriangleIcon,
    ChartBarIcon,
    ClockIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { BatchVerificationTool } from '../components/BatchVerificationTool';

export default function BuyerDashboard() {
    const { user } = useAuth();
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch mock inventory from our backend
        fetch('http://localhost:5000/api/inventory')
            .then(res => res.json())
            .then(data => {
                setInventory(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch inventory', err);
                setLoading(false);
            });
    }, []);

    const stats = [
        { name: 'Active Orders', value: '12', icon: ShoppingCartIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
        { name: 'Quote Requests', value: '5', icon: DocumentTextIcon, color: 'text-medical-600', bg: 'bg-medical-50' },
        { name: 'Monthly Spend', value: '₹4.2L', icon: ChartBarIcon, color: 'text-green-600', bg: 'bg-green-50' },
        { name: 'SLA History', value: '98%', icon: ClockIcon, color: 'text-purple-600', bg: 'bg-purple-50' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24">
            <SEO title="Buyer Dashboard | KRG Medifabb Portal" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-medical-700"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-700">Enterprise Dashboard</span>
                        </div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                            Welcome Back, {user?.name?.split(' ')[0]}
                        </h1>
                        <p className="mt-4 text-slate-500 font-medium italic">
                            Managing procurement for <span className="text-medical-700 font-bold not-italic">Fortis Healthcare Group</span>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-white border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-colors">
                            Manage Team
                        </button>
                        <button className="px-6 py-3 bg-medical-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-medical-800 transition-colors shadow-lg shadow-medical-700/20">
                            New RFQ builder
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.name}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
                        >
                            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.name}</p>
                            <p className="text-3xl font-black text-slate-900 tracking-tighter mt-1">{stat.value}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content: Recent Orders */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                            <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between">
                                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Recent Procurement Orders</h3>
                                <button className="text-[10px] font-black text-medical-700 uppercase tracking-widest">View All</button>
                            </div>
                            <div className="divide-y divide-slate-50">
                                {[1, 2, 3].map((order) => (
                                    <div key={order} className="p-8 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-white transition-colors">
                                                <Square3Stack3DIcon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Order #ORD-2026-00{order}</p>
                                                <p className="text-[10px] font-medium text-slate-400">Placed on Feb {10 - order}, 2026 • 24 Items</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-black text-slate-900">₹84,200</p>
                                            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-widest mt-1">
                                                In Production
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h3 className="text-xs font-black text-medical-400 uppercase tracking-widest mb-6">Contract Pricing</h3>
                                    <p className="text-xl font-medium mb-8 leading-relaxed">You are currently on the <span className="text-medical-400 font-bold">Premium Enterprise Tier</span> with 15% flat discount.</p>
                                    <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-medical-500 pb-1">View Rate Card</button>
                                </div>
                                <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    <ChartBarIcon className="w-48 h-48" />
                                </div>
                            </div>
                            <div className="bg-medical-700 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h3 className="text-xs font-black text-white/50 uppercase tracking-widest mb-6">Need Samples?</h3>
                                    <p className="text-xl font-medium mb-8 leading-relaxed">Request new AAMI Level 4 Gown samples for surgical evaluation.</p>
                                    <button className="bg-white text-medical-700 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">Request Now</button>
                                </div>
                                <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:rotate-12 transition-transform duration-700">
                                    <ArrowPathIcon className="w-32 h-32" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar: Inventory Alerts */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8">
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-2">
                                <ExclamationTriangleIcon className="w-5 h-5 text-amber-500" />
                                Live Inventory Alerts
                            </h3>

                            <div className="space-y-6">
                                {loading ? (
                                    <div className="animate-pulse space-y-4">
                                        {[1, 2, 3].map(i => <div key={i} className="h-12 bg-slate-50 rounded-xl" />)}
                                    </div>
                                ) : (
                                    inventory.map((item) => (
                                        <div key={item.id} className="flex items-start gap-4">
                                            <div className={`mt-1 h-2 w-2 rounded-full shrink-0 ${item.status === 'In Stock' ? 'bg-green-500' :
                                                item.status === 'Low Stock' ? 'bg-amber-500' : 'bg-red-500'
                                                }`} />
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-start mb-1">
                                                    <p className="text-xs font-black text-slate-900 uppercase leading-snug tracking-tight">{item.name}</p>
                                                    <span className="text-[9px] font-medium text-slate-400">SKU: {item.id}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <p className="text-[10px] font-bold text-slate-500 uppercase">{item.status}</p>
                                                    <p className="text-xs font-black text-slate-900">{item.stock} Units</p>
                                                </div>
                                                {item.status !== 'In Stock' && (
                                                    <button className="mt-3 text-[10px] font-black text-medical-700 uppercase tracking-widest hover:text-medical-800">
                                                        Create Pre-order
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
                            <BatchVerificationTool />
                        </div>

                        <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-1">Dedicated Support</h3>
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
                                    alt="Account Manager"
                                    className="w-12 h-12 rounded-xl object-cover grayscale"
                                />
                                <div>
                                    <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Priya Sharma</p>
                                    <p className="text-[10px] font-medium text-slate-400 uppercase">Institutional Sales Head</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <a href="mailto:priya@krgmedifabb.com" className="block w-full text-center py-3 bg-white border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-100 transition-colors">
                                    Email Manager
                                </a>
                                <a href="tel:+919176468297" className="block w-full text-center py-3 bg-medical-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-medical-700/10">
                                    Direct Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
