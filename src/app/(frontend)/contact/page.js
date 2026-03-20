"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    ChatBubbleLeftRightIcon,
    CheckCircleIcon,
    ArrowRightIcon,
    RectangleStackIcon,
    TruckIcon,
    ArrowPathIcon
} from '@heroicons/react/24/outline';
import SEO from '@/components/SEO';

const STEPS = [
    { id: 1, name: 'Profile' },
    { id: 2, name: 'Requirements' },
    { id: 3, name: 'Logistics' }
];

const SPECIALTIES = [
    { id: 'general', name: 'General Surgery', icon: RectangleStackIcon, desc: 'Laparotomy, Fenestrated, & Universal Packs' },
    { id: 'ortho', name: 'Orthopedic', icon: RectangleStackIcon, desc: 'U-Drapes, O-Drapes, & Extremity Packs' },
    { id: 'gynae', name: 'OB/GYN', icon: RectangleStackIcon, desc: 'Lithotomy, Caesarean, & Underbuttocks' },
    { id: 'ancillary', name: 'Ancillary', icon: TruckIcon, desc: 'Gowns, Sets, & Protective Apparel' },
];

export default function ContactPage() {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, watch, trigger, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            specialty: 'general',
            volume: 'Standard Hospital Monthly'
        }
    });
    const [submitted, setSubmitted] = useState(false);

    const formData = watch();

    const nextStep = async () => {
        let fields = [];
        if (step === 1) fields = ['fullName', 'organization', 'email'];
        if (step === 2) fields = ['specialty'];

        const isValid = await trigger(fields);
        if (isValid) setStep(s => s + 1);
    };

    const prevStep = () => setStep(s => s - 1);

    const onSubmit = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-slate-50 min-h-screen pt-48 pb-24 px-6 text-center flex items-center justify-center">
                <SEO title="Enquiry Received | KRG Medifabb" description="Your enquiry has been received by KRG Medifabb." />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-xl w-full bg-white p-16 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50"
                >
                    <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircleIcon className="w-12 h-12 text-brand-green" />
                    </div>
                    <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 font-brand text-slate-900">Enquiry Captured</h1>
                    <p className="text-slate-400 font-medium mb-10 italic">A specialist will review your requirements and respond within 2-4 clinical hours.</p>
                    <button
                        onClick={() => { setSubmitted(false); setStep(1); }}
                        className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-red transition-all shadow-lg"
                    >
                        New Enquiry Request
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-32">
            <SEO
                title="Quote Engine | B2B Bulk Enquiry"
                description="Interactive clinical procurement engine. Direct factory pricing for hospital networks and global distributors."
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Brand Content Sidebar */}
                    <div className="lg:sticky lg:top-32">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Direct Factory Access</span>
                        </div>
                        <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase leading-[0.9] font-brand mb-8">
                            Bulk Enquiry <br />
                            <span className="text-brand-green font-medifabb normal-case">& Extraction</span>
                        </h2>
                        <p className="text-lg text-slate-500 font-medium mb-12 max-w-lg leading-relaxed italic">
                            Streamlined procurement for high-performance surgical disposables. Direct manufacturing from Chennai to your hospital theater.
                        </p>

                        <div className="space-y-6 mb-12">
                            {[
                                { icon: MapPinIcon, label: 'Origin', val: 'Korattur, Chennai-600050, India' },
                                { icon: PhoneIcon, label: 'Direct Line', val: '+91 91764 68297', link: 'tel:+919176468297' },
                                { icon: EnvelopeIcon, label: 'Email', val: 'director@krgmedifabb.com', link: 'mailto:director@krgmedifabb.com' },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-300 group-hover:text-brand-red border border-slate-100 shadow-sm transition-all duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                                        {item.link ? (
                                            <a href={item.link} className="text-sm font-bold text-slate-900 hover:text-brand-red transition-colors">{item.val}</a>
                                        ) : (
                                            <p className="text-sm font-bold text-slate-900">{item.val}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-brand-green/5 p-8 rounded-[2.5rem] border border-brand-green/10 flex items-center gap-6">
                            <div className="w-16 h-16 bg-brand-green rounded-3xl flex items-center justify-center text-white shadow-lg shadow-brand-green/20">
                                <ChatBubbleLeftRightIcon className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-brand-green uppercase tracking-widest mb-1">WhatsApp Fast-Track</h4>
                                <p className="text-[11px] text-slate-500 font-medium italic mb-4">Response within 2 clinical hours.</p>
                                <a href="https://wa.me/919176468297" className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-brand-green hover:text-brand-green transition-colors pb-1">Open Connection</a>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Form Area */}
                    <div className="relative">
                        <div className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-10 md:p-16 relative overflow-hidden">
                            {/* Step Progress */}
                            <div className="flex justify-between mb-16 relative">
                                <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-100 -z-10"></div>
                                {STEPS.map((s) => (
                                    <div key={s.id} className="flex flex-col items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-500 ${step >= s.id ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-100 text-slate-400'
                                            }`}>
                                            {step > s.id ? <CheckCircleIcon className="w-5 h-5" /> : s.id}
                                        </div>
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${step >= s.id ? 'text-slate-900' : 'text-slate-300'}`}>{s.name}</span>
                                    </div>
                                ))}
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <AnimatePresence mode="wait">
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <div className="space-y-6">
                                                <div>
                                                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Facility Representative</label>
                                                    <input
                                                        {...register("fullName", { required: true })}
                                                        type="text"
                                                        placeholder="Clinical Lead / Procurement Manager"
                                                        className="w-full bg-slate-50 border-0 rounded-2xl p-5 text-sm font-bold focus:ring-2 focus:ring-brand-green outline-none"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Organization Name</label>
                                                    <input
                                                        {...register("organization", { required: true })}
                                                        type="text"
                                                        placeholder="Hospital / Diagnostic Network / Distributor"
                                                        className="w-full bg-slate-50 border-0 rounded-2xl p-5 text-sm font-bold focus:ring-2 focus:ring-brand-green outline-none"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Institutional Email</label>
                                                    <input
                                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                                        type="email"
                                                        placeholder="official@facility.com"
                                                        className="w-full bg-slate-50 border-0 rounded-2xl p-5 text-sm font-bold focus:ring-2 focus:ring-brand-green outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={nextStep}
                                                className="w-full bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-slate-800 shadow-xl transition-all flex items-center justify-center gap-3"
                                            >
                                                Next: Requirement Profile <ArrowRightIcon className="w-4 h-4" />
                                            </button>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-10"
                                        >
                                            <div>
                                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Select Surgical Specialty</label>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {SPECIALTIES.map((spec) => (
                                                        <label key={spec.id} className={`group cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300 relative overflow-hidden ${formData.specialty === spec.id ? 'border-brand-green bg-brand-green/5' : 'border-slate-100 hover:border-slate-200 bg-slate-50'
                                                            }`}>
                                                            <input type="radio" {...register("specialty")} value={spec.id} className="hidden" />
                                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${formData.specialty === spec.id ? 'bg-brand-green text-white' : 'bg-white text-slate-300'
                                                                }`}>
                                                                <spec.icon className="w-5 h-5" />
                                                            </div>
                                                            <h4 className="text-xs font-black text-slate-900 mb-1">{spec.name}</h4>
                                                            <p className="text-[10px] text-slate-400 font-medium italic">{spec.desc}</p>
                                                            {formData.specialty === spec.id && (
                                                                <motion.div layoutId="glow" className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 blur-[40px] rounded-full"></motion.div>
                                                            )}
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <button type="button" onClick={prevStep} className="px-8 py-5 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Back</button>
                                                <button
                                                    type="button"
                                                    onClick={nextStep}
                                                    className="flex-1 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-slate-800 shadow-xl transition-all flex items-center justify-center gap-3"
                                                >
                                                    Next: Logistics <ArrowRightIcon className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <div>
                                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Volume Frequency</label>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {['Single Batch', 'Monthly Contract', 'Annual Tender', 'Spot Purchase'].map(v => (
                                                        <label key={v} className={`p-4 rounded-xl border-2 text-center cursor-pointer transition-all ${formData.volume === v ? 'border-brand-green bg-brand-green/5 text-brand-green' : 'border-slate-50 bg-slate-50 text-slate-400'
                                                            }`}>
                                                            <input type="radio" {...register("volume")} value={v} className="hidden" />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">{v}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Custom Requirements / Notes</label>
                                                <textarea
                                                    {...register("message")}
                                                    rows={4}
                                                    placeholder="e.g. Specialized size requirements, private labeling needs, or specific sterilization preferences..."
                                                    className="w-full bg-slate-50 border-0 rounded-2xl p-5 text-sm font-bold focus:ring-2 focus:ring-brand-green outline-none"
                                                />
                                            </div>

                                            <div className="flex gap-4">
                                                <button type="button" onClick={prevStep} className="px-8 py-5 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Back</button>
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="flex-1 bg-brand-green text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-brand-green/20 transition-all flex items-center justify-center gap-3"
                                                >
                                                    {isSubmitting ? (
                                                        <>Processing SLA... <ArrowPathIcon className="w-4 h-4 animate-spin" /></>
                                                    ) : (
                                                        <>Submit Quote Request <ArrowRightIcon className="w-4 h-4" /></>
                                                    )}
                                                </button>
                                            </div>
                                            <p className="text-[10px] text-slate-400 font-medium text-center italic">Institutional response SLA applied: 2-4 Hours</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
