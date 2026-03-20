"use client";

import { motion } from 'framer-motion';
import { PencilSquareIcon, CheckBadgeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/SEO';

export default function CustomizationPage() {
    return (
        <div className="bg-white min-h-screen pt-32">
            <SEO
                title="Custom Packs | KRG Medifabb"
                description="Bespoke surgical kits tailored to your hospital's exact procedure requirements. Custom manufacturing with clinical precision."
            />
            
            {/* Hero Section */}
            <div className="bg-medical-900 py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-medical-800 to-transparent opacity-50"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                            Bespoke <br /><span className="text-medical-500">Surgical Kits</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed italic">
                            Custom-engineered procedure packs designed for your unique clinical workflow.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-slate-50 rounded-[4rem] p-12 md:p-24 overflow-hidden relative border border-slate-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-none">Tailored to <br /><span className="text-medical-700">Your Specifications.</span></h2>
                                <p className="text-xl text-slate-500 leading-relaxed mb-12 italic">
                                    We manufacture custom surgical drape packs tailored to your hospital's exact procedure requirements. Share your specifications, and we will build your kit from the ground up, ensuring every component meets our rigorous ISO standards.
                                </p>
                                
                                <div className="space-y-6 mb-12">
                                    <div className="flex items-center gap-4 text-slate-700 font-bold uppercase tracking-tight">
                                        <div className="w-8 h-8 rounded-full bg-medical-100 flex items-center justify-center text-medical-700"><CheckBadgeIcon className="w-5 h-5" /></div>
                                        Custom Fabric Selection
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-700 font-bold uppercase tracking-tight">
                                        <div className="w-8 h-8 rounded-full bg-medical-100 flex items-center justify-center text-medical-700"><CheckBadgeIcon className="w-5 h-5" /></div>
                                        Optimized Component Mix
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-700 font-bold uppercase tracking-tight">
                                        <div className="w-8 h-8 rounded-full bg-medical-100 flex items-center justify-center text-medical-700"><CheckBadgeIcon className="w-5 h-5" /></div>
                                        Hospital-Specific ID/Labeling
                                    </div>
                                </div>

                                <a 
                                    href="https://wa.me/919176468297" 
                                    className="inline-flex items-center gap-4 bg-medical-700 text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-medical-600 transition-all shadow-xl"
                                >
                                    <ChatBubbleLeftRightIcon className="w-6 h-6" /> WhatsApp Specifications
                                </a>
                            </div>
                            <div className="relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                                    className="w-full rounded-[3rem] shadow-4xl"
                                    alt="Custom Surgical Pack"
                                />
                                <div className="absolute -bottom-10 -left-10 bg-slate-900 p-8 rounded-3xl text-white shadow-2xl hidden md:block">
                                    <PencilSquareIcon className="w-8 h-8 text-medical-400 mb-4" />
                                    <p className="text-xs font-black uppercase tracking-widest leading-none">Custom Prototype <br />in 48 Hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
