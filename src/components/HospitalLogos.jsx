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
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-20">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-700 mb-6">Institutional Credibility</h2>
                    <h3 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-[0.9]">Trusted by <br /><span className="text-gradient">Healthcare Giants.</span></h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 items-center">
                    {hospitals.map((hospital, index) => (
                        <motion.div
                            key={hospital.id}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col items-center justify-center text-center group"
                        >
                            <div className="h-12 w-full flex items-center justify-center relative transition-all duration-500 group-hover:scale-110">
                                {/* Stylized Placeholder Logos */}
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-medical-700 transition-colors">
                                    {hospital.name}
                                </span>
                                {/* Subtle Glow on Hover */}
                                <div className="absolute inset-0 bg-medical-500/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 pt-12 border-t border-slate-50 flex flex-col items-center">
                    <p className="text-slate-400 text-sm italic mb-8 max-w-2xl text-center">
                        Serving 500+ premium healthcare facilities across India and global markets with uncompromising sterile standards.
                    </p>
                </div>
            </div>
        </section>
    );
}
