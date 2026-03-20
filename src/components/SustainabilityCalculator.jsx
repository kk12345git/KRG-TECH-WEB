"use client";

import { useState, useEffect } from 'react';
import { Leaf, Info, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function SustainabilityCalculator() {
    const [useCase, setUseCase] = useState('general');
    const [annualPacks, setAnnualPacks] = useState(10000);
    const [isCalculating, setIsCalculating] = useState(false);
    const [results, setResults] = useState(null);

    const calculateImpact = () => {
        setIsCalculating(true);
        // Simulate complex calculation
        setTimeout(() => {
            const plasticSaved = annualPacks * 0.12; // 120g saved per pack vs traditional
            const carbonReduced = annualPacks * 0.85; // 850g CO2 reduced per pack
            const waterSaved = annualPacks * 5.2; // 5.2L water saved in manufacturing

            setResults({
                plastic: plasticSaved.toLocaleString(),
                carbon: carbonReduced.toLocaleString(),
                water: waterSaved.toLocaleString(),
                treesEquivalent: Math.floor(carbonReduced / 22).toLocaleString() // 1 tree absorbs ~22kg/year
            });
            setIsCalculating(false);
        }, 800);
    };

    return (
        <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-6 lg:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/30 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-green-100 rounded-2xl">
                        <Leaf className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 leading-none">Sustainability Impact</h3>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Impact Estimator</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Controls */}
                    <div className="space-y-8">
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                                Procedure Category <Info className="w-3 h-3" />
                            </label>
                            <select
                                value={useCase}
                                onChange={(e) => setUseCase(e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 font-bold text-slate-900 focus:ring-2 focus:ring-green-500 outline-none transition-all shadow-sm"
                            >
                                <option value="general">General Surgery Packs</option>
                                <option value="ortho">Orthopedic Specialized Packs</option>
                                <option value="cardio">Cardiovascular Precision Packs</option>
                                <option value="obgyn">OB/GYN Delivery Sets</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                                Annual Pack Consumption: <span className="text-slate-900">{annualPacks.toLocaleString()}</span>
                            </label>
                            <input
                                type="range"
                                min="1000"
                                max="100000"
                                step="1000"
                                value={annualPacks}
                                onChange={(e) => setAnnualPacks(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                            />
                            <div className="flex justify-between mt-2 text-[10px] font-black uppercase tracking-widest text-slate-300">
                                <span>1,000</span>
                                <span>100,000</span>
                            </div>
                        </div>

                        <button
                            onClick={calculateImpact}
                            disabled={isCalculating}
                            className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-800 transition-all shadow-2xl flex items-center justify-center gap-3"
                        >
                            {isCalculating ? (
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : 'Calculate ESG Impact'}
                        </button>
                    </div>

                    {/* Results Area */}
                    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                        <AnimatePresence mode="wait">
                            {!results ? (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center"
                                >
                                    <p className="text-slate-400 text-sm italic">Input your facility's consumption metrics to see your environmental footprint reduction with KRG Standard packs.</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="space-y-8"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-green-700 mb-1">Plastic Reduction</p>
                                            <p className="text-2xl font-black text-slate-900">{results.plastic} <span className="text-xs">kg/yr</span></p>
                                        </div>
                                        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-blue-700 mb-1">Water Saved</p>
                                            <p className="text-2xl font-black text-slate-900">{results.water} <span className="text-xs">L/yr</span></p>
                                        </div>
                                    </div>

                                    <div className="p-8 bg-slate-900 rounded-[1.5rem] text-white relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-20">
                                            <Leaf className="w-12 h-12" />
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Total Carbon Reduction</p>
                                        <p className="text-4xl font-black tracking-tighter mb-4">{results.carbon} <span className="text-sm font-bold uppercase tracking-widest text-green-400">kg CO2e</span></p>
                                        <div className="h-1 bg-white/10 w-full rounded-full mb-4">
                                            <div className="h-full bg-green-400 rounded-full w-3/4"></div>
                                        </div>
                                        <p className="text-xs font-bold text-slate-400">Equivalent to planting <span className="text-white">{results.treesEquivalent}</span> mature trees every single year.</p>
                                    </div>

                                    <button className="w-full flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors">
                                        <Download className="w-3 h-3" /> Download ESG Impact Report (.PDF)
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
