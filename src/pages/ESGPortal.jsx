import { motion } from 'framer-motion';
import { LeafIcon, RecycleIcon, SunIcon, GlobeIcon, DropletsIcon } from 'lucide-react';
import SEO from '../components/SEO';

const initiatives = [
    {
        title: 'Bio-Safe Polymers',
        desc: 'Transitioning to phthalate-free and low-polymeric residue materials for all surgical drapes.',
        icon: LeafIcon,
        metric: '100%',
        metricLabel: 'Phthalate Free'
    },
    {
        title: 'Zero-Waste Cutting',
        desc: 'AI-optimized pattern nesting reduces fabric scrap by 24% during the conversion process.',
        icon: RecycleIcon,
        metric: '24%',
        metricLabel: 'Waste Reduced'
    },
    {
        title: 'Renewable Power',
        desc: 'Our Chennai facility aims to operate on 40% solar power by the end of 2026.',
        icon: SunIcon,
        metric: '40%',
        metricLabel: 'Solar Energy Target'
    }
];

export default function ESGPortal() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="ESG & Sustainability Commitment"
                description="Healthcare that cares for the planet. KRG Medifabb's commitment to zero-waste manufacturing, bio-safe polymers, and renewable energy."
            />
            <div className="bg-green-950 py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h2 className="text-green-400 font-bold uppercase tracking-widest text-sm mb-4">Corporate Responsibility</h2>
                        <h1 className="text-5xl font-black sm:text-7xl tracking-tighter uppercase mb-6 leading-none">Healthy Planet, <br /><span className="text-green-500">Healthy Patients</span></h1>
                        <p className="text-xl text-green-100/60 leading-relaxed max-w-xl">
                            As a medical manufacturer, we believe clinical excellence and environmental stewardship must go hand-in-hand.
                        </p>
                    </div>
                </div>
            </div>

            {/* Initiatives */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {initiatives.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="p-8 rounded-3xl border border-gray-100 hover:border-green-200 transition-all hover:shadow-xl hover:shadow-green-900/5 group"
                        >
                            <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">{item.desc}</p>
                            <div className="pt-6 border-t border-gray-50">
                                <p className="text-3xl font-black text-green-700">{item.metric}</p>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.metricLabel}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Sustainability Timeline */}
            <div className="bg-slate-50 py-24 border-y border-gray-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
                                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                                alt="Sustainable Energy"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                <GlobeIcon className="w-4 h-4" /> Global Compact
                            </div>
                            <h3 className="text-4xl font-black text-gray-900 tracking-tighter uppercase">Our 2030 Vision</h3>
                            <p className="text-gray-600 text-lg">
                                By 2030, KRG Medifabb aims to achieve **Net Zero** in our primary manufacturing clusters. We are actively investing in water recycling systems and biodegradable packaging prototypes for non-sterile drapes.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div>
                                    <div className="flex items-center gap-2 text-green-700 font-bold mb-2">
                                        <DropletsIcon className="w-5 h-5" /> Water Recycled
                                    </div>
                                    <p className="text-sm text-gray-500">90% of cooling water in our extrusion processes is captured and reused.</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-green-700 font-bold mb-2">
                                        <RecycleIcon className="w-5 h-5" /> Packaging
                                    </div>
                                    <p className="text-sm text-gray-500">100% recyclable outer cardboard used for all export consignments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="py-24 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Interested in our full ESG report?</h3>
                <button className="bg-green-700 text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all uppercase tracking-widest text-sm">
                    Download ESG Impact PDF
                </button>
            </div>
        </div>
    );
}
