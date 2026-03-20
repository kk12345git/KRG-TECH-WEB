"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ClockIcon, ShieldCheckIcon, BeakerIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/SEO';

const caseStudies = [
    {
        id: 1,
        hospital: 'Apollo Specialty Hospitals',
        location: 'Chennai, India',
        title: 'Reducing SSI Rates in Orthopedic Surgery',
        metric: '22% Reduction',
        metricLabel: 'Infection Rate',
        description: 'By transitioning to KRG customized reinforced orthopedic packs, the surgical team significantly reduced setup time and improved fluid management, leading to a measurable drop in SSIs.',
        category: 'Surgical Efficiency',
        icon: ShieldCheckIcon,
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        hospital: 'Global Health Network',
        location: 'Dubai, UAE',
        title: 'Optimizing OR Turnover with Custom Packs',
        metric: '18 Min Save',
        metricLabel: 'Per Procedure',
        description: 'A study across 5 departments showed that KRG "Ready-to-use" packs eliminated the need for individual component peeling, saving an average of 18 minutes per surgery setup.',
        category: 'Operational Cost',
        icon: ClockIcon,
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        hospital: 'St. Mary’s Medical Center',
        location: 'London, UK',
        title: 'Sustainability in Disposable Management',
        metric: '30% Less',
        metricLabel: 'Material Waste',
        description: 'KRG’s bespoke pack design removed 4 unnecessary components from their standard lap-pack, reducing clinical waste volume by 30% annually.',
        category: 'Sustainability',
        icon: BeakerIcon,
        image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800'
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="bg-white min-h-screen pt-32">
            <SEO
                title="Clinical Case Studies | Surgical Outcomes & OR Efficiency"
                description="Real-world hospital outcomes and success stories with KRG Medifabb surgical disposables. Documented infection rate reduction and OR efficiency."
            />
            {/* Header */}
            <div className="bg-slate-900 py-24 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 h-full">
                        {[...Array(24)].map((_, i) => (
                            <div key={i} className="border-r border-b border-white/20"></div>
                        ))}
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-medical-400"></span>
                            <span className="text-medical-400 font-bold uppercase tracking-widest text-[10px]">Clinical Success</span>
                        </div>
                        <h1 className="text-5xl font-black sm:text-7xl tracking-tighter uppercase mb-6 text-white leading-[0.85]">
                            Clinical <br /><span className="text-medical-400">Outcomes</span>
                        </h1>
                        <p className="text-lg text-slate-300 leading-relaxed font-medium italic border-l-2 border-medical-500 pl-8">
                            "We go beyond supplying products. We partner with hospitals to solve clinical challenges and optimize operational surgical workflows."
                        </p>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 gap-24">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col lg:items-center gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                        >
                            <div className="lg:w-1/2 group relative overflow-hidden rounded-[3rem] shadow-2xl h-[500px]">
                                <Image
                                    src={study.image}
                                    alt={study.hospital}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-sm border border-gray-100">
                                    <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest">{study.category}</p>
                                </div>
                            </div>

                            <div className="lg:w-1/2 space-y-8">
                                <div className="flex items-center gap-3 text-medical-700 font-black uppercase tracking-widest text-[10px]">
                                    <study.icon className="w-5 h-5" />
                                    {study.hospital} | {study.location}
                                </div>
                                <h3 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter leading-none uppercase">{study.title}</h3>
                                <p className="text-xl text-gray-500 leading-relaxed font-medium italic">{study.description}</p>

                                <div className="grid grid-cols-2 gap-10 py-10 border-y border-gray-100">
                                    <div>
                                        <p className="text-5xl font-black text-medical-700 leading-none">{study.metric}</p>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-3">{study.metricLabel}</p>
                                    </div>
                                    <div className="flex flex-col justify-center gap-4">
                                        <Link
                                            href={`/case-studies/${study.id}`}
                                            className="inline-flex items-center text-[10px] font-black text-gray-900 border-b-2 border-medical-500 hover:text-medical-600 transition-all uppercase tracking-widest w-fit pb-1"
                                        >
                                            Read Full Report
                                        </Link>
                                        <Link
                                            href={study.id === 1 ? "/category/ortho-surgery-drapes" : study.id === 2 ? "/category/surgeon-gowns" : "/category/general-surgery-drapes"}
                                            className="text-[10px] font-black text-medical-700 hover:text-medical-900 uppercase tracking-widest flex items-center gap-2"
                                        >
                                            View {study.id === 1 ? "Ortho Packs" : study.id === 2 ? "Surgeon Gowns" : "General Drapes"}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Final CTA Strip */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                <div className="bg-medical-700 rounded-[4rem] p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-medical-700/30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.2)_100%)]"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-white text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">Ready to see <br /><span className="text-medical-200">the same results?</span></h2>
                        <p className="text-medical-100 text-xl mb-12 italic font-medium">Connect with our clinical workflow experts to customize an ROI-focused disposable strategy for your hospital network.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/contact" className="px-12 py-6 bg-white text-medical-700 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-medical-50 transition-all shadow-xl">
                                Request ROI Audit
                            </Link>
                            <Link href="/products" className="px-12 py-6 border-2 border-white/20 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                                Explore Full Catalog
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
