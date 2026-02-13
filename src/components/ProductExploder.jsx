import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';

const hotspots = [
    {
        id: 1,
        top: '25%',
        left: '45%',
        title: 'Reinforced Zone',
        description: 'Double-layered SMS fabric for maximum absorption in high-fluid areas.',
    },
    {
        id: 2,
        top: '60%',
        left: '30%',
        title: 'Adhesive Edge',
        description: 'Biological-grade adhesive ensures zero leakage during surgery.',
    },
    {
        id: 3,
        top: '75%',
        left: '70%',
        title: 'Collection Pouch',
        description: 'Integrated fluid management system with 360-degree drainage.',
    },
];

export default function ProductExploder() {
    const [activeSite, setActiveSite] = useState(null);

    return (
        <div className="relative w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square sm:aspect-video lg:aspect-auto h-[400px] lg:h-[600px] shadow-inner group">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-medical-50 to-white">
                <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
                    alt="Technical Drape"
                    className="w-full h-full object-cover opacity-60 backdrop-blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-medical-900/40 font-black text-6xl uppercase tracking-tighter opacity-10 select-none">Technical Architecture</p>
                </div>
            </div>

            {/* Hotspots */}
            {hotspots.map((spot) => (
                <div
                    key={spot.id}
                    className="absolute"
                    style={{ top: spot.top, left: spot.left }}
                >
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setActiveSite(activeSite === spot.id ? null : spot.id)}
                        className="relative flex items-center justify-center"
                    >
                        <span className="absolute animate-ping inline-flex h-8 w-8 rounded-full bg-medical-500 opacity-75"></span>
                        <div className="relative bg-medical-700 p-2 rounded-full shadow-lg border-2 border-white">
                            <PlusIcon className="w-4 h-4 text-white" />
                        </div>
                    </motion.button>

                    <AnimatePresence>
                        {activeSite === spot.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute z-50 mt-4 w-64 p-4 bg-white rounded-xl shadow-2xl border border-medical-100 -translate-x-1/2 left-1/2"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-gray-900 text-sm">{spot.title}</h4>
                                    <button onClick={() => setActiveSite(null)}>
                                        <XMarkIcon className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                                    </button>
                                </div>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    {spot.description}
                                </p>
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-medical-100 rotate-45"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}

            {/* Control Hint */}
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-gray-200">
                <p className="text-xs font-semibold text-gray-700">Click hotspots to explore technical features</p>
            </div>
        </div>
    );
}
