import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    DocumentArrowDownIcon,
    BeakerIcon,
    CalculatorIcon,
    ShieldCheckIcon,
    LinkIcon,
    ArrowRightIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import { useB2BAnalytics } from '../hooks/useB2BAnalytics';

const resources = [
    { name: 'ISO 13485:2016 Certificate', type: 'PDF', size: '1.2 MB', category: 'Compliance' },
    { name: 'Technical Datasheet - Surgical Drapes', type: 'PDF', size: '2.4 MB', category: 'Specs' },
    { name: 'Product Catalog 2026 (Global)', type: 'PDF', size: '8.5 MB', category: 'Catalog' },
    { name: 'Sterilization Validation Report', type: 'PDF', size: '1.1 MB', category: 'Quality' },
];

export default function B2BPortal() {
    const [activeTab, setActiveTab] = useState('samples');
    const { trackLead } = useB2BAnalytics();

    const tabs = [
        { id: 'samples', label: 'Sample Request', icon: BeakerIcon },
        { id: 'quote', label: 'Instant Quote', icon: CalculatorIcon },
        { id: 'resources', label: 'Resource Library', icon: DocumentArrowDownIcon },
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-32">
            <SEO
                title="Procurement Gateway | KRG Medifabb"
                description="Institutional B2B portal for surgical disposables. Request samples, generate quotes, and download technical certifications."
            />

            {/* Premium Header Section */}
            <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32 mb-12">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-brand-green/10"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/5 blur-[120px] rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                            <ShieldCheckIcon className="w-4 h-4 text-brand-green" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Secured B2B Access</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tighter text-white uppercase leading-[0.9] font-brand">
                            Procurement <br />
                            <span className="text-brand-green font-medifabb normal-case">Gateway</span>
                        </h1>
                        <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                            Elite clinical tools for hospital purchase managers and global medical distributors.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Modern Pill Navigation */}
                <div className="flex justify-center mb-16">
                    <div className="flex p-1.5 bg-white rounded-2xl shadow-sm border border-slate-100 backdrop-blur-xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'text-white' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <span className="relative z-10">{tab.label}</span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-slate-900 rounded-xl shadow-lg shadow-slate-900/10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Main Workspace */}
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            >
                                {activeTab === 'samples' && (
                                    <div className="space-y-8">
                                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="h-12 w-12 bg-medical-50 rounded-xl flex items-center justify-center text-medical-700">
                                                    <BeakerIcon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Clinical Evaluation</h3>
                                                    <p className="text-sm text-slate-400 font-medium">Request physical samples for surgical trial.</p>
                                                </div>
                                            </div>

                                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Facility Name</label>
                                                        <input type="text" placeholder="Apollo / Fortis / AIIMS" className="w-full bg-slate-50 border-0 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-brand-green outline-none" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Surgical Dept</label>
                                                        <input type="text" placeholder="Operation Theater - IV" className="w-full bg-slate-50 border-0 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-brand-green outline-none" />
                                                    </div>
                                                </div>
                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Sample Type</label>
                                                        <div className="grid grid-cols-1 gap-3">
                                                            {['Standard Gowns', 'Surgical Drapes', 'Sterile Packs'].map(item => (
                                                                <label key={item} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                                                                    <input type="checkbox" className="w-4 h-4 text-brand-green rounded-full border-slate-200 focus:ring-brand-green" />
                                                                    <span className="text-xs font-bold text-slate-600">{item}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-2">
                                                    <button className="w-full bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-slate-800 shadow-xl transition-all flex items-center justify-center gap-3">
                                                        Submit Sample Request <ArrowRightIcon className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'quote' && (
                                    <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm text-center">
                                        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl mx-auto flex items-center justify-center mb-8">
                                            <CalculatorIcon className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Instant B2B Quote</h3>
                                        <p className="text-slate-400 font-medium mb-12 max-w-sm mx-auto">Generate a custom procurement quote with volume-based pricing in real-time.</p>
                                        <button className="px-10 py-5 bg-brand-green text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-green/20">
                                            Open Quote Engine
                                        </button>
                                    </div>
                                )}

                                {activeTab === 'resources' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {resources.map((res) => (
                                            <div key={res.name} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between hover:border-brand-green/30 transition-all group">
                                                <div className="flex justify-between items-start mb-8">
                                                    <div className="bg-slate-50 p-3 rounded-xl text-slate-400 group-hover:text-brand-green group-hover:bg-brand-green/5 transition-colors">
                                                        <DocumentArrowDownIcon className="w-6 h-6" />
                                                    </div>
                                                    <span className="text-[10px] font-black text-brand-green uppercase tracking-widest px-3 py-1 bg-brand-green/5 rounded-full">{res.category}</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-black text-slate-900 mb-2">{res.name}</h4>
                                                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                        <span>{res.type}</span>
                                                        <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                                                        <span>{res.size}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Elite Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-[60px] rounded-full group-hover:bg-brand-green/20 transition-all"></div>

                            <h4 className="flex items-center gap-3 font-black text-brand-green uppercase text-xs tracking-widest mb-8">
                                <ShieldCheckIcon className="w-5 h-5" /> Secured Access
                            </h4>
                            <p className="text-sm text-slate-400 mb-10 leading-relaxed font-medium">
                                Institutional partners receive priority production scheduling and dedicated account logistics.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-end justify-between border-b border-white/5 pb-4">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Pricing Model</span>
                                    <span className="text-xs font-black text-white uppercase italic">Volume Based</span>
                                </div>
                                <div className="flex items-end justify-between border-b border-white/5 pb-4">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Response SLA</span>
                                    <span className="text-xs font-black text-brand-green uppercase tracking-tighter">2-4 Hours</span>
                                </div>
                                <div className="flex items-end justify-between border-b border-white/5 pb-4">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Audit Support</span>
                                    <span className="text-xs font-black text-white uppercase italic">24/7 Access</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 text-center">
                            <div className="w-12 h-12 bg-slate-50 rounded-full mx-auto flex items-center justify-center text-slate-300 mb-6">
                                <ChatBubbleLeftRightIcon className="w-6 h-6" />
                            </div>
                            <h5 className="font-black text-slate-900 mb-2 uppercase text-[10px] tracking-[0.3em]">HOD Support</h5>
                            <p className="text-xs text-slate-400 mb-8 font-medium italic">Direct line for custom industrial tender requirements.</p>
                            <a href="tel:+919176468297" className="block text-2xl font-black text-slate-900 hover:text-brand-red transition-colors font-brand">+91 91764 68297</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
