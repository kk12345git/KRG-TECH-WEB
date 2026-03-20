"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBagIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/SEO';

export default function ProcurementPage() {
    return (
        <div className="bg-white min-h-screen pt-32">
            <SEO
                title="Procurement | KRG Medifabb"
                description="Streamlined bulk ordering for hospitals and distributors. ISO 13485:2016 certified medical manufacturing supply chain."
            />
            
            {/* Hero Section */}
            <div className="bg-slate-900 py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                            Enterprise <br /><span className="text-medical-500">Procurement</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed italic">
                            High-compliance medical disposables at direct manufacturer logistics speed.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 bg-medical-50 rounded-3xl border border-medical-100">
                                    <ShieldCheckIcon className="w-8 h-8 text-medical-600 mb-4" />
                                    <h4 className="font-black text-slate-900 uppercase tracking-tight mb-2">ISO 13485:2016</h4>
                                    <p className="text-xs text-slate-500">Certified global supply chain standards.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 p-8 transform lg:translate-y-8">
                                    <TruckIcon className="w-8 h-8 text-slate-900 mb-4" />
                                    <h4 className="font-black text-slate-900 uppercase tracking-tight mb-2">Global Logistics</h4>
                                    <p className="text-xs text-slate-500">Direct factory delivery to ports worldwide.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-none">Streamlined <br /><span className="text-medical-700">Bulk Ordering.</span></h2>
                            <p className="text-xl text-slate-500 leading-relaxed mb-12 italic">
                                Streamlined bulk ordering for hospitals and distributors. ISO 13485:2016 certified supply chain with direct factory pricing. Join our network of over 500 healthcare partners sourcing high-compliance clinical products.
                            </p>
                            
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-medical-700 transition-all shadow-2xl group"
                            >
                                Start Enterprise Enquiry <ShoppingBagIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
