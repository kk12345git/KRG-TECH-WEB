"use client";

import { motion } from 'framer-motion';
import { PhoneIcon, ChatBubbleLeftRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/SEO';

export default function SupportPage() {
    return (
        <div className="bg-white min-h-screen pt-32">
            <SEO
                title="Help Center | KRG Medifabb"
                description="For product queries, order support, or technical assistance, contact KRG Medifabb directly. We respond within 2 working hours."
            />
            
            {/* Hero Section */}
            <div className="bg-slate-900 py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-medical-900/50 to-transparent"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                            Help <br /><span className="text-medical-500">Center</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed italic">
                            Dedicated clinical and technical support for healthcare institutions worldwide.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-24 md:py-32">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-medical-50 rounded-[3rem] p-12 md:p-20 border border-medical-100 text-center"
                    >
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Contact Our Support Desk</h2>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                            For product queries, order support, or technical assistance, contact us directly at <span className="text-medical-700 font-bold">krgmedifabb@gmail.com</span> or WhatsApp <span className="text-medical-700 font-bold">+91 9176468297</span>. 
                            <br /><br />
                            <span className="text-sm font-black uppercase tracking-widest text-medical-600">Response within 2 working hours.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a 
                                href="https://wa.me/919176468297" 
                                className="w-full sm:w-auto px-12 py-6 bg-green-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl flex items-center justify-center gap-3"
                            >
                                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
                            </a>
                            <a 
                                href="mailto:krgmedifabb@gmail.com" 
                                className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3"
                            >
                                <EnvelopeIcon className="w-5 h-5" /> Email Enquiry
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
