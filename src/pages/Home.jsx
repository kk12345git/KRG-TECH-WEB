import { Link } from 'react-router-dom';
import {
    ShieldCheckIcon,
    TruckIcon,
    BeakerIcon,
    UserGroupIcon,
    ArrowRightIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';
import ExportMap from '../components/ExportMap';
import SEO from '../components/SEO';
import { TrustBadges } from '../components/TrustBadges';
import { SustainabilityCalculator } from '../components/SustainabilityCalculator';
import HospitalLogos from '../components/HospitalLogos';

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
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-medical-50 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-medical-100 rounded-full blur-[100px] opacity-40 translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="lg:flex lg:items-center lg:gap-24">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="h-px w-10 bg-medical-700"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-700">ISO 13485:2016 Certified</span>
                            </div>
                            <h1 className="text-6xl sm:text-8xl font-black text-slate-900 leading-[0.9] uppercase tracking-tighter mb-8">
                                Clinical <br />
                                <span className="text-gradient">Precision.</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-12 max-w-lg">
                                High-performance surgical disposables manufactured in state-of-the-art cleanrooms. Excellence in medical textiles for global healthcare.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Link
                                    to="/products"
                                    className="w-full sm:w-auto px-10 py-5 bg-medical-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-medical-900 shadow-2xl shadow-medical-700/20 transition-all hover:scale-105 active:scale-95"
                                >
                                    Explore Catalog
                                </Link>
                                <Link
                                    to="/contact"
                                    className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-medical-700 transition-colors flex items-center gap-2 group"
                                >
                                    Direct Inquiry <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                        <div className="mt-20 lg:mt-0 relative">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-medical-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
                                    alt="Medical manufacturing facility"
                                    className="w-full lg:w-[32rem] rounded-[2rem] shadow-2xl relative z-10 animate-float"
                                />
                                <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[2rem] animate-float [animation-delay:1s] hidden xl:block">
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
                                        <Link to="/quality" className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors">Read Clinical Study</Link>
                                    </div>
                                    <div className="bg-medical-50 p-8 rounded-[3rem] border border-medical-100">
                                        <p className="text-[10px] font-black text-medical-700 uppercase tracking-widest mb-4">Request Trial</p>
                                        <p className="text-sm font-bold text-slate-900 leading-tight mb-6">Get a sample of the AI-recommended kit for your facility.</p>
                                        <Link to="/contact" className="inline-block px-6 py-3 bg-medical-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Request Sample</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aesthetic Categories Grid */}
            <div className="py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
                        <div className="max-w-xl">
                            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase mb-6">Core <span className="text-medical-700">Sectors</span></h2>
                            <p className="text-slate-500 text-lg">Engineered for surgical excellence and uncompromising safety.</p>
                        </div>
                        <Link to="/products" className="text-xs font-black uppercase tracking-widest text-medical-700 border-b-2 border-medical-100 pb-1 hover:border-medical-700 transition-all">
                            View All Categories
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {categories.map((category) => (
                            <Link
                                key={category.name}
                                to={category.href}
                                className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-10 hover-lift flex flex-col items-start"
                            >
                                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-10 bg-slate-100">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-medical-700 transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-10">
                                    {category.description}
                                </p>
                                <div className="mt-auto w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-medical-700 group-hover:border-medical-700 transition-all">
                                    <ArrowRightIcon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why KRG - High Aesthetic Layout */}
            <div className="py-32 bg-slate-900 rounded-[4rem] mx-6 mb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-medical-900 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

                <div className="mx-auto max-w-7xl px-8 lg:px-16 lg:flex items-center gap-24 relative z-10">
                    <div className="lg:w-1/2 mb-20 lg:mb-0">
                        <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-10">
                            The <span className="text-medical-400">KRG</span> <br />Standard
                        </h2>
                        <div className="grid grid-cols-1 gap-10">
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheckIcon className="w-7 h-7 text-medical-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-white uppercase mb-2">Military-Grade Hygiene</h4>
                                    <p className="text-slate-400 leading-relaxed">Advanced ETO sterilization and Class 100,000 cleanroom manufacturing.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <BeakerIcon className="w-7 h-7 text-medical-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-white uppercase mb-2">Technical Textures</h4>
                                    <p className="text-slate-400 leading-relaxed">Multi-layer SMS and Spunlace fabrics engineered for fluid repellency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative group">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173bdd99602?auto=format&fit=crop&q=80&w=800"
                                alt="Medical precision"
                                className="w-full rounded-[3rem] shadow-4xl grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute -bottom-10 right-10 glass-dark py-10 px-12 rounded-[2.5rem]">
                                <p className="text-4xl font-black text-white mb-1">100%</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-medical-400">Sterility Assurance</p>
                            </div>
                        </div>
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
                            <Link to="/contact" className="px-10 py-5 bg-medical-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform border border-white/10">
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
                            to="/procurement"
                            className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl"
                        >
                            Start Procurement Flow
                        </Link>
                        <Link to="/contact" className="text-xs font-black uppercase tracking-widest text-medical-700 hover:scale-110 transition-transform">
                            Speak to Specialist
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
