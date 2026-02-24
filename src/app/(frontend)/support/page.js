"use client";

import { motion } from 'framer-motion';
import { QuestionMarkCircleIcon, PhoneIcon, EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/SEO';

const faqs = [
    {
        q: 'How do I request a custom sterilization validation report?',
        a: 'Registered procurement partners can download batch-specific sterilization indicator reports via the B2B Portal or request a physical copy from our Quality Assurance department.'
    },
    {
        q: 'What is the standard lead time for bespoke surgical packs?',
        a: 'For first-time bespoke designs, allow 14 days for pattern validation and sampling. Repeating orders typically maintain a 7-day manufacturing lead time.'
    },
    {
        q: 'Are KRG products compatible with ETO and Gamma sterilization?',
        a: 'Most of our woven-replacement fabrics are compatible with both. However, specific reinforcement plastics may vary. Refer to the product datasheet for the validated sterilization method.'
    }
];

export default function SupportPage() {
    return (
        <div className="bg-white min-h-screen pb-24 pt-32">
            <SEO
                title="Clinical & Technical Support | KRG Medifabb"
                description="Get expert assistance with medical fabric specifications, ISO compliance, and surgical pack customization. Browse technical FAQs and contact our liaison team."
            />
            {/* Header */}
            <div className="bg-medical-900 py-32 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-medical-800 to-transparent opacity-50"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="h-px w-10 bg-medical-400"></span>
                        <span className="text-medical-400 font-bold uppercase tracking-widest text-[10px]">Technical Hub</span>
                        <span className="h-px w-10 bg-medical-400"></span>
                    </div>
                    <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
                        Clinical <br /><span className="text-medical-500 italic">Support</span>
                    </h1>
                    <p className="mt-8 text-slate-300 text-xl max-w-2xl mx-auto italic font-medium leading-relaxed">
                        Access technical documentation, clinical FAQs, and direct lines to our medical engineering team for seamless OR integration.
                    </p>
                </div>
            </div>

            {/* Help Grid */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-20 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Technical FAQ', desc: 'Browse our extensive technical database and validation protocols.', icon: QuestionMarkCircleIcon },
                        { title: 'Resource Hub', desc: 'Download ISO certifications, TDS, and sterilization validation reports.', icon: DocumentTextIcon },
                        { title: 'Clinical Liaison', desc: 'Direct access to medical specialists for procedural planning.', icon: PhoneIcon },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-50 text-center hover:border-medical-200 transition-all group">
                            <div className="mx-auto bg-medical-50 w-20 h-20 rounded-[2rem] flex items-center justify-center text-medical-700 mb-8 group-hover:bg-medical-700 group-hover:text-white transition-all duration-500">
                                <item.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">{item.title}</h3>
                            <p className="text-gray-500 text-sm italic leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className="mx-auto max-w-4xl px-6 lg:px-8 py-32">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-6xl font-black text-gray-900 uppercase tracking-tighter mb-4 leading-none">Hub Intelligence</h2>
                    <p className="text-medical-600 text-[10px] font-black uppercase tracking-[0.4em]">Frequently Asked Technical Queries</p>
                </div>
                <div className="space-y-12">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                            <h4 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tight flex gap-4">
                                <span className="text-medical-500">Q.</span> {faq.q}
                            </h4>
                            <p className="text-gray-500 text-lg leading-relaxed italic border-l-4 border-medical-200 pl-8 ml-4">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final Contact CTA */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
                <div className="bg-slate-900 rounded-[4rem] p-16 lg:p-24 text-center overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-4 h-full">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="border-r border-b border-white/20"></div>
                            ))}
                        </div>
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h3 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">Still need <br /><span className="text-medical-400">clinical assistance?</span></h3>
                        <p className="text-slate-400 text-xl italic mb-12">Our medical engineering unit is available for bespoke consultation regarding specialized surgical procedures.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
                            <button className="flex items-center gap-4 bg-white text-gray-900 px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-medical-400 hover:text-white transition-all shadow-xl">
                                <EnvelopeIcon className="w-5 h-5" /> Email Technical Team
                            </button>
                            <button className="flex items-center gap-4 bg-medical-700 text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-medical-600 transition-all shadow-xl">
                                <PhoneIcon className="w-5 h-5" /> Call B2B Desk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
