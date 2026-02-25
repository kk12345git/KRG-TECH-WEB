"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
    ShieldCheckIcon,
    TruckIcon,
    BeakerIcon,
    UserGroupIcon,
    ArrowRightIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';
import ExportMap from '../../components/ExportMap';
import SEO from '../../components/SEO';
import { TrustBadges } from '../../components/TrustBadges';
import { SustainabilityCalculator } from '../../components/SustainabilityCalculator';
import HospitalLogos from '../../components/HospitalLogos';

const stats = [
    { id: 1, name: 'Years of Experience', value: '10+' },
    { id: 2, name: 'Hospitals Served', value: '500+' },
    { id: 3, name: 'Product SKUs', value: '100+' },
    { id: 4, name: 'Certifications', value: 'ISO & CE' },
];

const categories = [
    {
        name: 'Surgical Drapes & Packs',
        description: 'High-barrier, sterile drapes and customized procedure packs for all surgical specialties.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
        href: '/category/general-surgery-drapes',
    },
    {
        name: 'Disposable Surgeon Gowns',
        description: 'AAMI Level 3 & 4 protection with reinforced zones for maximum clinical safety.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
        href: '/category/surgeon-gowns',
    },
    {
        name: 'Sterilization Wraps',
        description: 'Premium SMS barrier wrapping for high-performance instrument tray sterilization.',
        image: 'https://images.unsplash.com/photo-1583324113626-70df0f43aa2b?auto=format&fit=crop&q=80&w=800',
        href: '/category/wrapping-sheets',
    },
];

export default function Home() {
    return (
        <div className="bg-white overflow-hidden">
            <SEO
                title="Global Medical Disposable & Surgical Pack Manufacturer"
                description="KRG Medifabb is an ISO 13485:2016 certified manufacturer of premium surgical drapes, customized packs, and medical disposables. Serving global hospital networks with clinical excellence."
            />
            {/* Minimalist Hero Section */}
            <div className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 bg-white flex items-center">

                <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
                    <div className="lg:flex lg:items-center lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-3xl"
                        >
                            <div className="flex items-center gap-3 mb-10">
                                <span className="h-0.5 w-12 bg-medical-700"></span>
                                <span className="text-[12px] font-black uppercase tracking-[0.5em] text-medical-700">Enterprise Standard 2026</span>
                            </div>
                            <h1 className="text-4xl sm:text-7xl lg:text-9xl font-black text-slate-900 leading-[0.85] uppercase tracking-tighter mb-10">
                                Clinical <br />
                                <span className="text-gradient">Authority.</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-slate-500 leading-relaxed mb-16 max-w-xl font-light">
                                Engineering the future of sterile surgery with high-performance medical textiles and precision-grade disposables.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-8">
                                <Link
                                    href="/products"
                                    className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-medical-700 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all hover:scale-105 active:scale-95 text-center"
                                >
                                    Explore Catalog
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 hover:text-medical-700 transition-colors flex items-center gap-3 group"
                                >
                                    Direct Inquiry <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                </Link>
                            </div>
                        </motion.div>

                        <div className="mt-20 lg:mt-0 relative z-20 flex-shrink-0">
                            <div className="relative group w-full lg:w-[32rem]">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-medical-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative w-full lg:w-[32rem] h-[22rem] lg:h-[26rem] rounded-[2rem] overflow-hidden shadow-2xl z-10">
                                    <Image
                                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
                                        alt="Medical manufacturing facility"
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[2rem] hidden xl:block z-30">
                                    <div className="flex items-center gap-6">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-lg">
                                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="HOD" />
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="text-2xl font-black text-slate-900">500+</p>
                                            <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Trusted Hospitals</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Badges */}
            <TrustBadges />

            {/* Minimal Stats */}
            <div className="py-20 bg-slate-50/50 border-y border-slate-100">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
                        {stats.map((stat) => (
                            <div key={stat.id} className="text-center lg:border-r border-slate-200 last:border-0">
                                <p className="text-4xl font-black text-slate-900 mb-2">{stat.value}</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sustainability Impact Section */}
            <div className="py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16">
                        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase mb-6">Environmental <span className="text-green-600">Impact</span></h2>
                        <p className="text-slate-500 text-lg max-w-2xl">High-compliance manufacturing with a lower footprint. Calculate your facility's environmental savings by switching to KRG Standard.</p>
                    </div>
                    <SustainabilityCalculator />
                </div>
            </div>

            {/* AI-Powered Procedure Selector */}
            <div className="py-32 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="lg:flex lg:items-center lg:gap-24">
                        <div className="lg:w-1/3 mb-16 lg:mb-0">
                            <div className="flex items-center gap-3 mb-6">
                                <SparklesIcon className="w-6 h-6 text-medical-700" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-700">Procurement Guide</span>
                            </div>
                            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
                                Smart <br /><span className="text-medical-700">Surgical</span> <br />Selection
                            </h2>
                            <p className="text-slate-500 text-lg mb-12">Identify the ideal procedure-specific packs for your facility's orthopedic and cardiac surgical requirements.</p>

                            <div className="space-y-4">
                                {['Orthopedic Surgery', 'Cardiovascular', 'General Laparotomy', 'Gynecology'].map((specialty) => (
                                    <button
                                        key={specialty}
                                        className="w-full text-left px-6 py-4 rounded-2xl bg-white border border-slate-100 text-sm font-black uppercase tracking-widest text-slate-400 hover:border-medical-700 hover:text-medical-700 transition-all flex justify-between items-center group"
                                    >
                                        {specialty}
                                        <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl shadow-medical-700/5 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-medical-50 rounded-bl-[4rem] -translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-medical-700 text-white rounded-2xl flex items-center justify-center mb-8">
                                            <SparklesIcon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Ortho Procedure Pack</h3>
                                        <p className="text-sm text-slate-500 mb-8 leading-relaxed italic">"Optimized for major bone surgery. High-durability reinforced drapes with integrated collection."</p>
                                        <ul className="space-y-3 mb-10">
                                            <li className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                <div className="w-1 h-1 bg-medical-500 rounded-full" /> 5x AAMI Level 4 Gowns
                                            </li>
                                            <li className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                <div className="w-1 h-1 bg-medical-500 rounded-full" /> Knee O / Hip U Drape
                                            </li>
                                            <li className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                <div className="w-1 h-1 bg-medical-500 rounded-full" /> Enhanced Fluid Pouch
                                            </li>
                                        </ul>
                                        <button className="text-xs font-black uppercase tracking-[0.2em] text-medical-700 border-b-2 border-medical-100 pb-1">View Preparation Range</button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-8">
                                    <div className="bg-slate-900 p-8 rounded-[3rem] text-white flex-grow">
                                        <h4 className="text-xs font-black text-medical-400 uppercase tracking-[0.3em] mb-4">Technical Advantage</h4>
                                        <p className="text-xl font-medium leading-relaxed mb-8">AI-optimized packs reduce surgical prep time by up to <span className="text-medical-400 font-black">22%</span>.</p>
                                        <Link href="/quality" className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors">Read Clinical Study</Link>
                                    </div>
                                    <div className="bg-medical-50 p-8 rounded-[3rem] border border-medical-100">
                                        <p className="text-[10px] font-black text-medical-700 uppercase tracking-widest mb-4">Request Trial</p>
                                        <p className="text-sm font-bold text-slate-900 leading-tight mb-6">Get a sample of the AI-recommended kit for your facility.</p>
                                        <Link href="/contact" className="inline-block px-6 py-3 bg-medical-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Request Sample</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bento Categories Grid */}
            <div className="py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-xl"
                        >
                            <h2 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">Clinical <br /><span className="text-medical-700">Specialties</span></h2>
                            <p className="text-slate-500 text-xl font-light">Engineered for surgical excellence and uncompromising safety across every medical discipline.</p>
                        </motion.div>
                        <Link href="/products" className="text-xs font-black uppercase tracking-widest text-medical-700 border-b-2 border-medical-100 pb-2 hover:border-medical-700 transition-all flex items-center gap-2 group whitespace-nowrap">
                            Full Capability Catalog <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 md:h-[800px]">
                        {/* Major Card: Surgical Drapes */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bento-item md:col-span-4 md:row-span-1 group min-h-[350px]"
                        >
                            <Link href="/category/general-surgery-drapes" className="h-full flex flex-col">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    alt="Surgical Drapes"
                                />
                                <div className="relative z-20 mt-auto p-4">
                                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Surgical Drapes</h3>
                                    <p className="text-white/80 text-sm max-w-md">Precision-engineered procedure packs for high-complexity surgical environments.</p>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Side Card: Surgeon Gowns */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bento-item md:col-span-2 md:row-span-1 group bg-slate-900 border-none min-h-[350px]"
                        >
                            <Link href="/category/surgeon-gowns" className="h-full flex flex-col justify-between">
                                <div className="elite-glow"></div>
                                <div className="relative z-20">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                        <ShieldCheckIcon className="w-6 h-6 text-medical-400" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Clinical Apparel</h3>
                                    <p className="text-slate-400 text-xs tracking-widest uppercase">AAMI Level 3 & 4 Protection</p>
                                </div>
                                <div className="relative z-20 mt-8">
                                    <img
                                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400"
                                        className="w-full h-32 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all"
                                        alt="Gowns"
                                    />
                                </div>
                            </Link>
                        </motion.div>

                        {/* Mid Card: Wraps */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bento-item md:col-span-3 md:row-span-1 group min-h-[350px]"
                        >
                            <Link href="/category/wrapping-sheets" className="h-full flex flex-col md:flex-row md:items-center gap-8">
                                <div className="md:w-1/2">
                                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">Sterile Wraps</h3>
                                    <p className="text-slate-500 text-sm">High-performance SMS barrier technology for tray protection.</p>
                                </div>
                                <div className="md:w-1/2 h-48 md:h-full py-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1583324113626-70df0f43aa2b?auto=format&fit=crop&q=80&w=400"
                                        className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
                                        alt="Wraps"
                                    />
                                </div>
                            </Link>
                        </motion.div>

                        {/* Last Card: Sustainability */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bento-item md:col-span-3 md:row-span-1 group bg-medical-50 border-medical-100"
                        >
                            <Link href="/quality" className="h-full flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="px-4 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-medical-700 shadow-sm">Certified Manufacturing</div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                                <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-6">Uncompromising <br /><span className="text-medical-700">Sterility.</span></h3>
                                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-medical-700 transition-colors">
                                    Audit our Cleanrooms <ArrowRightIcon className="w-4 h-4" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Why KRG - High Aesthetic Layout */}
            <div className="py-24 md:py-48 bg-slate-900 rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-6 mb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-medical-900 rounded-full blur-[200px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[150px] opacity-10 -translate-x-1/2"></div>

                <div className="mx-auto max-w-7xl px-8 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <span className="h-0.5 w-12 bg-medical-400"></span>
                                <span className="text-[12px] font-black uppercase tracking-[0.6em] text-medical-400">The KRG Standard</span>
                            </div>
                            <h2 className="text-5xl lg:text-9xl font-black text-white uppercase tracking-tighter mb-12 leading-[0.85]">
                                Engineered <br />
                                <span className="text-medical-400">Sterility.</span>
                            </h2>
                            <div className="space-y-12">
                                <div className="flex flex-col sm:flex-row gap-8 group">
                                    <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-medical-400/20 group-hover:border-medical-400/50 transition-all duration-500">
                                        <ShieldCheckIcon className="w-8 h-8 text-medical-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-3">Cleanroom Precision</h4>
                                        <p className="text-slate-400 text-lg leading-relaxed font-light">Class 100,000 ISO-certified manufacturing environments ensuring absolute zero-contamination.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-8 group">
                                    <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-medical-400/20 group-hover:border-medical-400/50 transition-all duration-500">
                                        <BeakerIcon className="w-8 h-8 text-medical-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-3">Material Innovation</h4>
                                        <p className="text-slate-400 text-lg leading-relaxed font-light">Advanced SMS trilaminate fabrics providing AAMI Level 4 fluid barrier and peak breathability.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 w-full relative z-20"
                        >
                            <div className="relative p-4">
                                <div className="absolute inset-0 bg-gradient-to-tr from-medical-500/20 to-transparent blur-3xl opacity-50"></div>
                                <Image
                                    src="https://images.unsplash.com/photo-1576091160550-2173bdd99602?auto=format&fit=crop&q=80&w=1200"
                                    alt="Medical precision"
                                    width={1200}
                                    height={800}
                                    className="w-full rounded-[3rem] md:rounded-[4rem] shadow-4xl relative z-10"
                                />
                                <div className="relative mt-8 md:mt-0 md:absolute md:-bottom-12 md:-right-12 bg-slate-900 md:glass-dark py-8 md:py-12 px-10 md:px-14 rounded-3xl md:rounded-[3.5rem] z-30 shadow-2xl">
                                    <p className="text-5xl md:text-6xl font-black text-white mb-2 leading-none">100%</p>
                                    <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-medical-400">Sterility Assurance</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Quick Enquiry Strip */}
            <div className="py-20 bg-medical-700 relative overflow-hidden mb-32">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.2)_100%)]"></div>
                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="text-center lg:text-left">
                            <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter mb-4">Urgent Procurement Need?</h3>
                            <p className="text-medical-100 text-lg font-bold uppercase tracking-widest leading-none">Get a response within 2 working hours.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="https://wa.me/919176468297" className="px-10 py-5 bg-white text-medical-700 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl">
                                WhatsApp Sales
                            </a>
                            <Link href="/contact" className="px-10 py-5 bg-medical-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform border border-white/10">
                                Request Bulk Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hospital Partners */}
            <HospitalLogos />

            {/* Call to Action */}
            <div className="pb-48 pt-10 text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-5xl sm:text-8xl font-black tracking-tighter uppercase mb-12">
                        Build your <br /><span className="text-medical-700 underline decoration-medical-200 underline-offset-[20px]">Enterprise Order.</span>
                    </h2>
                    <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto italic leading-relaxed">
                        Join 500+ global hospitals sourcing high-compliance disposables directly from our manufacturing hubs.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Link
                            href="/procurement"
                            className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl"
                        >
                            Start Procurement Flow
                        </Link>
                        <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-medical-700 hover:scale-110 transition-transform">
                            Speak to Specialist
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
