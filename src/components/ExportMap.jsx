import { motion } from 'framer-motion';
import { GlobeAmericasIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const regions = [
    { name: 'Middle East', status: 'High Volume', certification: 'CE / SFDA' },
    { name: 'Africa', status: 'Standard Exports', certification: 'ISO 13485' },
    { name: 'Europe', status: 'Quality Compliant', certification: 'CE Marking' },
    { name: 'Southeast Asia', status: 'Rapid Growth', certification: 'Regional Registration' },
];

export default function ExportMap() {
    return (
        <div className="bg-slate-900 rounded-3xl p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical-700/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10 lg:flex gap-16 items-center">
                <div className="lg:w-1/2">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">Global Export Authority</h3>
                    <p className="text-slate-400 leading-relaxed mb-8">
                        KRG Medifabb serves 50+ hospital networks across 4 continents. Our logistics department ensures temperature-controlled shipping and seamless customs clearance.
                    </p>

                    <div className="space-y-4">
                        {regions.map((region) => (
                            <motion.div
                                key={region.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <CheckBadgeIcon className="w-5 h-5 text-medical-400" />
                                    <span className="text-white font-bold text-sm tracking-tight">{region.name}</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-medical-500 uppercase">{region.status}</p>
                                    <p className="text-xs text-slate-500">{region.certification}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 mt-12 lg:mt-0 flex flex-col items-center">
                    <div className="relative">
                        <GlobeAmericasIcon className="w-64 h-64 text-medical-700 opacity-20 animate-pulse" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-5xl font-black text-white">50+</p>
                                <p className="text-xs font-bold text-medical-400 uppercase tracking-widest mt-2">Export Markets</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-4 w-full text-center">
                        <div className="p-4 border border-white/10 rounded-lg">
                            <p className="text-xl font-bold text-white">24/7</p>
                            <p className="text-[10px] text-slate-500 uppercase">Logistic Support</p>
                        </div>
                        <div className="p-4 border border-white/10 rounded-lg">
                            <p className="text-xl font-bold text-white">100%</p>
                            <p className="text-[10px] text-slate-500 uppercase">Compliance Score</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
