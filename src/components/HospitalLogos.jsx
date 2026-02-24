"use client";

import React from 'react';

import { motion } from 'framer-motion';

const hospitals = [
    { name: 'Chettinad Health City', id: 'chettinad' },
    { name: 'Madras Medical Mission', id: 'mmm' },
    { name: 'Kauvery Hospital', id: 'kauvery' },
    { name: 'ARC Fertility', id: 'arc' },
    { name: 'Dr. Agarwals Eye Hospital', id: 'agarwals' },
    { name: 'Sree Renga Hospital', id: 'renga' },
    { name: 'SKS Hospital', id: 'sks' },
    { name: 'Narbhavi Hospitals', id: 'narbhavi' },
    { name: 'Sundaram Medical Foundation', id: 'smf' },
    { name: 'IdeaRx', id: 'idearx' },
    { name: 'Parvathy Hospital', id: 'parvathy' },
    { name: 'Sugam Hospital', id: 'sugam' },
    { name: 'Deepam Hospitals', id: 'deepam' },
    { name: 'MIOT International', id: 'miot' },
    { name: 'Rela Hospital', id: 'rela' },
    { name: 'Bharath Hospitals', id: 'bharath' },
    { name: 'Frontier Lifeline', id: 'frontier' },
    { name: 'Sudar Hospitals', id: 'sudar' }
];

export default function HospitalLogos() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="text-center mb-16 px-6">
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-medical-700 mb-6">Institutional Credibility</h2>
                <h3 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-none">
                    Trusted by <br /><span className="text-gradient">Clinical Giants.</span>
                </h3>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
                    {[...hospitals, ...hospitals].map((hospital, index) => (
                        <div key={`${hospital.id}-${index}`} className="mx-12 flex flex-col items-center">
                            <span className="text-sm font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-medical-700 transition-colors duration-500">
                                {hospital.name}
                            </span>
                            <div className="h-0.5 w-0 bg-medical-500 mt-2 transition-all duration-500 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 mt-20 text-center">
                <p className="text-slate-400 text-sm font-light italic max-w-2xl mx-auto">
                    Partnering with <span className="text-slate-900 font-bold">500+ premium healthcare facilities</span> to standardise sterile safety protocols across global surgery hubs.
                </p>
            </div>
        </section>
    );
}
