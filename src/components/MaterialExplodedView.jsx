import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BeakerIcon, ShieldCheckIcon, DropIcon, CloudIcon } from '@heroicons/react/24/outline';

const LAYERS = [
    {
        id: 's1',
        name: 'Spunbond Polypropylene',
        role: 'Structural Support',
        description: 'High-strength outer layer providing abrasion resistance and structural integrity for surgical environments.',
        color: 'bg-medical-200',
        icon: ShieldCheckIcon
    },
    {
        id: 'm1',
        name: 'Meltblown Filter',
        role: 'Bacterial Barrier',
        description: 'Dense network of micro-fibers that captures pathogens and provides superior fluid resistance.',
        color: 'bg-medical-500',
        icon: BeakerIcon
    },
    {
        id: 's2',
        name: 'Soft Spunbond',
        role: 'Inner Comfort',
        description: 'Ultra-soft hypoallergenic inner layer designed for prolonged surgical procedure comfort.',
        color: 'bg-medical-100',
        icon: CloudIcon
    }
];

export function MaterialExplodedView() {
    const [hoveredLayer, setHoveredLayer] = useState(null);

    return (
        <div className="bg-white rounded-[3rem] p-12 lg:p-20 border border-slate-100 relative overflow-hidden">
            <div className="lg:flex gap-20 items-center">
                <div className="lg:w-1/2 mb-16 lg:mb-0">
                    <div className="flex items-center gap-3 mb-8">
                        <BeakerIcon className="w-6 h-6 text-medical-700" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-700">Material Science</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-[0.9]">
                        SMS <br /><span className="text-medical-700">Multilayer</span> <br />Shield
                    </h2>
                    <p className="text-slate-500 text-lg mb-12 leading-relaxed italic">"Our proprietary SMS fabric combines mechanical strength with an impenetrable micro-filter barrier."</p>

                    <div className="grid grid-cols-1 gap-6">
                        {LAYERS.map((layer) => (
                            <div
                                key={layer.id}
                                onMouseEnter={() => setHoveredLayer(layer.id)}
                                onMouseLeave={() => setHoveredLayer(null)}
                                className={`p-8 rounded-[2rem] border transition-all ${hoveredLayer === layer.id ? 'bg-medical-50 border-medical-200 translate-x-4' : 'bg-slate-50 border-slate-100'}`}
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`p-4 rounded-xl ${layer.color} text-medical-900 shrink-0`}>
                                        <layer.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">{layer.name}</h4>
                                        <p className={`text-[10px] font-black uppercase tracking-widest mb-4 ${hoveredLayer === layer.id ? 'text-medical-700' : 'text-slate-400'}`}>{layer.role}</p>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{layer.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 relative h-[600px] flex items-center justify-center">
                    <div className="relative w-64 h-96 prespective-1000">
                        {LAYERS.map((layer, idx) => (
                            <motion.div
                                key={layer.id}
                                initial={false}
                                animate={{
                                    y: hoveredLayer === layer.id ? (idx - 1) * -80 : (idx - 1) * -40,
                                    rotateX: 45,
                                    rotateZ: -45,
                                    scale: hoveredLayer === layer.id ? 1.05 : 1,
                                    opacity: hoveredLayer && hoveredLayer !== layer.id ? 0.3 : 1
                                }}
                                className={`absolute inset-0 rounded-[2rem] shadow-2xl border-2 border-white/50 ${layer.color} flex items-center justify-center`}
                                style={{ zIndex: 10 - idx }}
                            >
                                <div className="text-white font-black uppercase text-[8px] tracking-[0.3em] rotate-45">{layer.name}</div>
                            </motion.div>
                        ))}

                        {/* Micro-filtration Particles (Simulated) */}
                        <AnimatePresence>
                            {hoveredLayer === 'm1' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 pointer-events-none"
                                >
                                    {[...Array(20)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                                                y: [Math.random() * 300 - 150, Math.random() * 300 - 150],
                                                scale: [0, 1, 0]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                                            className="absolute w-1 h-1 bg-white rounded-full"
                                        />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="absolute bottom-0 right-0 bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl border border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                            <ShieldCheckIcon className="w-6 h-6 text-medical-400" />
                            <span className="text-2xl font-black uppercase tracking-tighter">99.9% Barrier</span>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Pathogen Protection Grade</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
