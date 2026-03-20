"use client";

import { motion } from 'framer-motion';
import { AcademicCapIcon, BookOpenIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/SEO';

export default function AcademyPage() {
    return (
        <div className="bg-white min-h-screen pt-32">
            <SEO
                title="KRG Academy | KRG Medifabb"
                description="Clinical training resources, product usage guides, and sterilization protocol documentation for healthcare professionals."
            />
            
            {/* Hero Section */}
            <div className="bg-medical-900 py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-medical-800 to-transparent opacity-50"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="w-20 h-20 bg-medical-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-medical-500/30">
                            <AcademicCapIcon className="w-10 h-10 text-medical-400" />
                        </div>
                        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                            KRG <br /><span className="text-medical-500">Academy</span>
                        </h1>
                        <div className="inline-flex items-center gap-4 bg-medical-500 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            Launching Soon
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-24 md:py-32 bg-slate-50">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Clinical Excellence Through Education</h2>
                        <p className="text-xl text-slate-500 leading-relaxed italic max-w-2xl mx-auto">
                            Clinical training resources, product usage guides, and sterilization protocol documentation. We are building a comprehensive knowledge hub for surgical precision.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 text-left">
                                <div className="w-12 h-12 rounded-xl bg-medical-50 flex items-center justify-center text-medical-700 shrink-0">
                                    <VideoCameraIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 uppercase tracking-tight mb-2">Usage Guides</h4>
                                    <p className="text-sm text-slate-400">Step-by-step video tutorials for specialized surgical drapes.</p>
                                </div>
                            </div>
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 text-left">
                                <div className="w-12 h-12 rounded-xl bg-medical-50 flex items-center justify-center text-medical-700 shrink-0">
                                    <BookOpenIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 uppercase tracking-tight mb-2">Protocols</h4>
                                    <p className="text-sm text-slate-400">Validated sterilization and handling documentation for OR safety.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
