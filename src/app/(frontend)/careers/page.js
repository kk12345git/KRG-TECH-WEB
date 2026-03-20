"use client";

import { motion } from 'framer-motion';
import { RocketLaunchIcon, HeartIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/SEO';

export default function CareersPage() {
    return (
        <div className="bg-white min-h-screen pt-32">
            <SEO
                title="Careers | KRG Medifabb"
                description="Join KRG Medifabb. We are looking for passionate professionals in medical manufacturing, quality, and sales."
            />
            
            {/* Hero Section */}
            <div className="bg-slate-900 py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-medical-900/40 to-transparent"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                            Life at <br /><span className="text-medical-400">KRG Medifabb</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed italic max-w-xl">
                            Join a team dedicated to manufacturing excellence and global patient safety.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-none">Join the <br /><span className="text-medical-700">Clinical Revolution.</span></h2>
                            <p className="text-xl text-slate-500 leading-relaxed mb-12 italic">
                                We are always looking for passionate professionals in manufacturing, quality control, and sales. If you have the discipline to maintain ISO standards and the passion to grow, we want to hear from you.
                            </p>
                            
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-medical-50 flex items-center justify-center text-medical-700 shrink-0">
                                        <RocketLaunchIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 uppercase tracking-tight mb-1">Scale with Us</h4>
                                        <p className="text-sm text-slate-400">Opportunity to work with global healthcare exports.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-medical-50 flex items-center justify-center text-medical-700 shrink-0">
                                        <HeartIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 uppercase tracking-tight mb-1">Impact First</h4>
                                        <p className="text-sm text-slate-400">Your work directly ensures surgeon safety and patient care.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 p-10 bg-slate-900 rounded-[2.5rem] text-white">
                                <h4 className="text-lg font-black uppercase mb-4 tracking-tight text-medical-400">Ready to Apply?</h4>
                                <p className="text-slate-400 text-sm mb-8">Send your resume and profile to our HR desk:</p>
                                <a href="mailto:krgmedifabb@gmail.com" className="text-2xl font-black hover:text-medical-400 transition-colors">
                                    krgmedifabb@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-medical-200 blur-[100px] opacity-20 -z-10"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                                className="w-full rounded-[3rem] shadow-4xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700"
                                alt="Careers at KRG"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
