import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
    PlayIcon,
    AcademicCapIcon,
    CheckCircleIcon,
    BookOpenIcon,
    ChevronRightIcon,
    ListBulletIcon
} from '@heroicons/react/24/outline';

const PROCEDURES = [
    {
        id: 'ortho-knee',
        title: 'Total Knee Arthroplasty',
        category: 'Orthopedic',
        duration: '12:45',
        difficulty: 'Advanced',
        products: ['KRG Ortho-Pack Elite', 'Heavy-Duty SMS Gown', 'U-Drape Premium'],
        thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
        description: 'Step-by-step guide to sterile field preparation and draping for total knee replacement using KRG specialty packs.'
    },
    {
        id: 'cardio-bypass',
        title: 'CABG - Cardiac Draping',
        category: 'Cardiovascular',
        duration: '15:20',
        difficulty: 'Specialized',
        products: ['Cardiac Kit V2', 'Reinforced Mayo Cover', 'Fluid Collection Bag'],
        thumbnail: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
        description: 'Advanced draping techniques for open-heart surgery, focusing on fluid management and antimicrobial barrier integrity.'
    },
    {
        id: 'gen-laparoscopy',
        title: 'Laparoscopic Cholecystectomy',
        category: 'General Surgery',
        duration: '08:15',
        difficulty: 'Intermediate',
        products: ['Universal Laparoscopy Kit', 'Light Handle Covers'],
        thumbnail: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800',
        description: 'Standardized sterile setup for laparoscopic procedures, featuring integrated camera covers and scope drapes.'
    }
];

export function ProcedureLibrary() {
    const [selectedProcedure, setSelectedProcedure] = useState(null);

    return (
        <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {PROCEDURES.map((procedure) => (
                    <motion.div
                        key={procedure.id}
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={procedure.thumbnail}
                                alt={procedure.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <button
                                    onClick={() => setSelectedProcedure(procedure)}
                                    className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-medical-700 scale-90 group-hover:scale-100 transition-transform shadow-2xl"
                                >
                                    <PlayIcon className="w-8 h-8 ml-1" />
                                </button>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                <span className="px-3 py-1 bg-black/60 backdrop-blur text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                                    {procedure.category}
                                </span>
                                <span className="text-white text-[10px] font-black uppercase tracking-widest drop-shadow-lg">
                                    {procedure.duration}
                                </span>
                            </div>
                        </div>

                        <div className="p-8">
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4 group-hover:text-medical-700 transition-colors">
                                {procedure.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
                                {procedure.description}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                <div className="flex items-center gap-2">
                                    <AcademicCapIcon className="w-4 h-4 text-medical-500" />
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{procedure.difficulty}</span>
                                </div>
                                <button
                                    onClick={() => setSelectedProcedure(procedure)}
                                    className="text-[10px] font-black text-medical-700 uppercase tracking-widest flex items-center gap-1 group/btn"
                                >
                                    View Details <ChevronRightIcon className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProcedure && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-6 lg:p-12 pointer-events-auto"
                    >
                        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl" onClick={() => setSelectedProcedure(null)}></div>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white w-full max-w-6xl rounded-[3rem] overflow-hidden relative shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
                        >
                            <div className="lg:w-2/3 bg-slate-100 aspect-video flex items-center justify-center relative">
                                <div className="text-center group cursor-pointer">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-medical-700 mx-auto mb-6 shadow-xl">
                                        <PlayIcon className="w-12 h-12 ml-1" />
                                    </div>
                                    <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-medical-700">Initialize Video Stream</p>
                                </div>
                                <button
                                    className="absolute top-8 left-8 p-3 bg-white/20 backdrop-blur text-white hover:bg-white hover:text-slate-900 rounded-full transition-all"
                                    onClick={() => setSelectedProcedure(null)}
                                >
                                    <ChevronRightIcon className="w-6 h-6 rotate-180" />
                                </button>
                            </div>

                            <div className="lg:w-1/3 p-6 lg:p-12 overflow-y-auto">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-2 py-0.5 rounded bg-medical-500 text-white text-[8px] font-black uppercase tracking-[0.2em]">{selectedProcedure.category}</span>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{selectedProcedure.duration}</span>
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none">
                                    {selectedProcedure.title}
                                </h2>
                                <p className="text-slate-500 text-sm leading-relaxed mb-10 italic">
                                    {selectedProcedure.description}
                                </p>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <ListBulletIcon className="w-4 h-4" /> Essential Products
                                        </h4>
                                        <ul className="space-y-3">
                                            {selectedProcedure.products.map(p => (
                                                <li key={p} className="flex items-center gap-3 text-sm font-bold text-slate-900">
                                                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-8 border-t border-slate-100">
                                        <button className="w-full py-4 bg-medical-700 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-medical-900 transition-all shadow-xl shadow-medical-700/20 mb-4">
                                            Download Procedure Guide (PDF)
                                        </button>
                                        <button className="w-full py-4 border border-slate-200 text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
                                            Request Full Technical Trial
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
