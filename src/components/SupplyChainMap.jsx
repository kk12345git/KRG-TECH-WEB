import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPinIcon,
    GlobeAsiaAustraliaIcon,
    ShieldCheckIcon,
    TruckIcon,
    BuildingOffice2Icon
} from '@heroicons/react/24/outline';

const HUBS = [
    { id: 'hq', name: 'KRG Global HQ', location: 'India', coordinates: { x: 65, y: 55 }, type: 'Manufacturing' },
    { id: 'me', name: 'Regional Hub', location: 'Middle East', coordinates: { x: 55, y: 50 }, type: 'Distribution' },
    { id: 'eu', name: 'Logistics Center', location: 'Europe', coordinates: { x: 45, y: 40 }, type: 'Distribution' },
    { id: 'sea', name: 'Strategic Hub', location: 'SE Asia', coordinates: { x: 75, y: 65 }, type: 'Logistics' },
];

export function SupplyChainMap() {
    const [activeHub, setActiveHub] = useState(HUBS[0]);

    return (
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 overflow-hidden relative border border-white/5">
            {/* Background World Map SVG (Simplified Stylized) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                    <path d="M10,40 Q30,20 50,40 T90,40 T50,80 Q20,70 10,40" /> {/* Mock landmass */}
                </svg>
            </div>

            <div className="lg:flex gap-20 relative z-10">
                <div className="lg:w-1/3 mb-12 lg:mb-0">
                    <div className="flex items-center gap-3 mb-8">
                        <GlobeAsiaAustraliaIcon className="w-6 h-6 text-medical-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-400">Transparency Portal</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
                        Global <br />Supply <span className="text-medical-400">Chain</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-12 leading-relaxed italic">"From raw polymer to sterile surgical suite. Full traceability across our global manufacturing and logistics network."</p>

                    <div className="space-y-4">
                        {HUBS.map((hub) => (
                            <button
                                key={hub.id}
                                onClick={() => setActiveHub(hub)}
                                className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center justify-between group ${activeHub.id === hub.id ? 'bg-medical-700/20 border-medical-500 text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'}`}
                            >
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-50">{hub.location}</p>
                                    <p className="text-sm font-black uppercase tracking-tight">{hub.name}</p>
                                </div>
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${activeHub.id === hub.id ? 'bg-medical-500 text-white' : 'bg-white/5 text-slate-500 group-hover:text-white'}`}>
                                    <BuildingOffice2Icon className="w-4 h-4" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lg:w-2/3 relative min-h-[500px] flex items-center justify-center bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden">
                    {/* Stylized Node Network */}
                    <div className="absolute inset-0 p-12">
                        <div className="relative w-full h-full">
                            {HUBS.map((hub) => (
                                <motion.button
                                    key={hub.id}
                                    initial={false}
                                    animate={{
                                        scale: activeHub.id === hub.id ? 1.2 : 1,
                                        backgroundColor: activeHub.id === hub.id ? '#0c8de6' : 'rgba(255,255,255,0.2)'
                                    }}
                                    onClick={() => setActiveHub(hub)}
                                    className="absolute w-4 h-4 rounded-full border-2 border-white shadow-lg cursor-pointer z-20"
                                    style={{ top: `${hub.coordinates.y}%`, left: `${hub.coordinates.x}%` }}
                                >
                                    {activeHub.id === hub.id && (
                                        <motion.div
                                            layoutId="pulse"
                                            className="absolute -inset-4 bg-medical-500/30 rounded-full animate-ping"
                                        />
                                    )}
                                </motion.button>
                            ))}

                            {/* Connecting Lines (Mock) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                <line x1="65%" y1="55%" x2="55%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="65%" y1="55%" x2="45%" y2="40%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="65%" y1="55%" x2="75%" y2="65%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                            </svg>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeHub.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute bottom-12 left-12 right-12 glass-dark p-10 rounded-[2.5rem]"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                <div className="md:col-span-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="px-2 py-1 rounded bg-medical-500 text-[8px] font-black uppercase tracking-widest text-white">{activeHub.type}</div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-medical-400">{activeHub.location}</p>
                                    </div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">{activeHub.name}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed max-w-md">Our {activeHub.location} facility is certified with ISO 13485:2016 and features Class 8 cleanrooms for advanced medical textile fabrication.</p>
                                </div>
                                <div className="flex flex-col justify-end gap-6">
                                    <div className="flex items-center gap-4">
                                        <ShieldCheckIcon className="w-5 h-5 text-green-500" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Quality Verified</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <TruckIcon className="w-5 h-5 text-medical-400" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Direct Logistics</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
