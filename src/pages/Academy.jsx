import React from 'react';
import { motion } from 'framer-motion';
import {
    AcademicCapIcon,
    VideoCameraIcon,
    DocumentTextIcon,
    InboxArrowDownIcon
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import { ProcedureLibrary } from '../components/ProcedureLibrary';

export default function Academy() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="KRG Academy | Surgical Training & Procedure Library"
                description="Access specialized surgical training videos, draping procedure guides, and technical clinical documentation from KRG Medifabb."
            />

            {/* Hero Section */}
            <div className="bg-slate-900 py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-medical-900/50 to-transparent"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <AcademicCapIcon className="w-6 h-6 text-medical-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-400">Clinical Education</span>
                        </div>
                        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                            KRG <br /><span className="text-medical-500">Academy</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed italic border-l-2 border-medical-500 pl-8">
                            "Standardizing surgical excellence through precision training and technical documentation."
                        </p>
                    </div>
                </div>

                {/* Background Grid Accent */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.1">
                        <path d="M0,0 L100,100 M0,100 L100,0 M50,0 L50,100 M0,50 L100,50" />
                    </svg>
                </div>
            </div>

            <main className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    {[
                        { icon: VideoCameraIcon, title: 'Procedure Videos', desc: 'High-definition draping and preparation guides for specialized surgery.' },
                        { icon: DocumentTextIcon, title: 'Technical Guides', desc: 'Detailed PDF manuals for AAMI Level 4 sterile boundaries.' },
                        { icon: InboxArrowDownIcon, title: 'Training Kits', desc: 'Request physical training kits for surgical nurse education.' }
                    ].map((feature, i) => (
                        <div key={i} className="flex gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-medical-50 flex items-center justify-center text-medical-700 shrink-0">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Library Section */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Procedure Library</h2>
                            <p className="text-slate-500 text-lg">Select a surgical specialty to view technical preparation and draping protocols.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-6 py-2 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-medical-700 hover:text-white transition-all">All Procedures</button>
                            <button className="px-6 py-2 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-medical-700 hover:text-white transition-all">Orthopedic</button>
                            <button className="px-6 py-2 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-medical-700 hover:text-white transition-all">Cardiac</button>
                        </div>
                    </div>

                    <ProcedureLibrary />
                </div>

                {/* Certification Banner */}
                <div className="bg-medical-700 rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden">
                    <div className="relative z-10 lg:flex items-center gap-20">
                        <div className="lg:w-2/3">
                            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                                Earn Digital <br />Certifications
                            </h2>
                            <p className="text-xl text-white/70 mb-12 leading-relaxed">
                                Complete our procedural training modules to earn KRG Certified Clinical Specialist badges for your procurement and surgical teams.
                            </p>
                            <button className="bg-white text-medical-700 px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-slate-100 transition-all shadow-2xl">
                                Register for Academy
                            </button>
                        </div>
                        <div className="lg:w-1/3 mt-12 lg:mt-0 flex justify-center">
                            <AcademicCapIcon className="w-64 h-64 text-white/10" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
