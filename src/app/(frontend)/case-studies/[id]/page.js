"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ChevronLeftIcon,
    ArrowDownTrayIcon,
    ShieldCheckIcon,
    ChartBarIcon,
    CurrencyDollarIcon,
    AcademicCapIcon,
    BeakerIcon,
    ListBulletIcon,
    ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import reports from '@/data/caseReports.json';
import SEO from '@/components/SEO';
import { useParams } from 'next/navigation';

export default function CaseStudyDetailPage() {
    const params = useParams();
    const id = params?.id;
    const report = reports.find(r => r.id === parseInt(id));

    if (!report) {
        return (
            <div className="min-h-screen py-48 text-center uppercase font-black text-slate-300">
                Report Not Found
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-32 pb-32">
            <SEO
                title={`${report.title} | Clinical Technical Report`}
                description={`Deep-dive clinical benchmarks and protocol analysis for ${report.title}. Documented by KRG Medifabb.`}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Navigation */}
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-medical-600 transition-colors mb-12">
                    <ChevronLeftIcon className="w-4 h-4" /> Back to Case Studies
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                    {/* Main Content: Technical Report Style */}
                    <div className="lg:col-span-2 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6 font-brand">
                                <span className="w-1.5 h-1.5 rounded-full bg-medical-500 animate-pulse"></span>
                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Clinical Verification Active</span>
                            </div>
                            <h2 className="text-medical-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{report.hospital} | {report.location}</h2>
                            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 uppercase leading-[0.85] mb-10">
                                {report.title}
                            </h1>
                            <div className="h-2 w-24 bg-medical-500 mb-12"></div>

                            <section className="space-y-6">
                                <h3 className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4">
                                    <AcademicCapIcon className="w-5 h-5 text-medical-600" /> Clinical Objective
                                </h3>
                                <p className="text-xl text-slate-600 leading-relaxed font-medium italic border-l-4 border-medical-500 pl-8 ml-2">
                                    "{report.objective}"
                                </p>
                            </section>
                        </motion.div>

                        {/* Comparative Matrix */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden"
                        >
                            <div className="p-10 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                                <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">Comparative Technical Matrix</h3>
                                <BeakerIcon className="w-6 h-6 text-medical-600" />
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50/50">
                                            <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Technical Feature</th>
                                            <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Current Standard</th>
                                            <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-medical-600">KRG Optimization</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {report.benchmarks.map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                                                <td className="px-10 py-8 text-sm font-black text-slate-900 uppercase tracking-tight">{row.feature}</td>
                                                <td className="px-10 py-8 text-sm font-medium text-slate-400 italic">{row.standard}</td>
                                                <td className="px-10 py-8 text-sm font-black text-medical-600 uppercase tracking-tight">{row.krg}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Protocol Roadmap */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-12"
                        >
                            <h3 className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4">
                                <ListBulletIcon className="w-5 h-5 text-medical-600" /> Implementation Protocol
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                                {report.protocol.map((step, i) => (
                                    <div key={i} className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-medical-500 transition-all duration-500 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-6 font-black text-slate-200/50 text-8xl italic group-hover:text-medical-500/10 transition-colors leading-none">{i + 1}</div>
                                        <div className="relative z-10">
                                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">{step.step}</h4>
                                            <p className="text-xs text-slate-500 font-medium leading-relaxed italic">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Outcomes */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-10"
                        >
                            <h3 className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4">
                                <ShieldCheckIcon className="w-5 h-5 text-medical-600" /> Documented Outcomes
                            </h3>
                            <ul className="grid grid-cols-1 gap-6">
                                {report.outcomes.map((outcome, i) => (
                                    <li key={i} className="flex gap-6 items-start group">
                                        <div className="w-8 h-8 rounded-2xl bg-slate-900 text-white flex-none flex items-center justify-center text-xs font-black group-hover:bg-medical-700 transition-colors shadow-lg">
                                            {i + 1}
                                        </div>
                                        <p className="text-slate-600 font-bold leading-relaxed text-lg italic">{outcome}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Technical Sidebar */}
                    <aside className="space-y-10 lg:sticky lg:top-32">
                        {/* Metrics Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-slate-950 rounded-[3rem] p-12 text-white relative overflow-hidden border border-white/5 shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-medical-500/10 blur-[80px] rounded-full"></div>
                            <h4 className="flex items-center gap-3 font-black text-medical-400 uppercase text-[10px] tracking-widest mb-12">
                                <ChartBarIcon className="w-6 h-6" /> Benchmark Summary
                            </h4>

                            <div className="space-y-12">
                                {report.metrics.map((m) => (
                                    <div key={m.label} className="group">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">{m.label}</p>
                                        <div className="flex items-end gap-3">
                                            <span className={`text-6xl font-black tracking-tighter leading-none ${m.color === 'brand-green' ? 'text-medical-400' : m.color === 'brand-red' ? 'text-medical-500' : 'text-white'}`}>
                                                {m.val}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ROI Analysis Card */}
                        <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                            <h4 className="flex items-center gap-3 font-black text-slate-900 uppercase text-[10px] tracking-widest mb-10 border-b border-slate-50 pb-6">
                                <CurrencyDollarIcon className="w-6 h-6 text-medical-600" /> Operational ROI
                            </h4>
                            <div className="space-y-8 mb-12">
                                <div className="flex justify-between items-end border-b border-slate-50 pb-6">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Annual Save</span>
                                    <span className="text-2xl font-black text-slate-900">{report.roiAnalysis.annualSavings}</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-slate-50 pb-6">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Payback</span>
                                    <span className="text-2xl font-black text-medical-600">{report.roiAnalysis.paybackPeriod}</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gain</span>
                                    <div className="flex items-center gap-2">
                                        <ArrowTrendingUpIcon className="w-5 h-5 text-medical-500" />
                                        <span className="text-2xl font-black text-slate-900">{report.roiAnalysis.efficiencyGain}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full flex items-center justify-center gap-3 py-6 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-medical-700 transition-all shadow-xl shadow-slate-200">
                                <ArrowDownTrayIcon className="w-5 h-5" /> Export Methodology
                            </button>
                        </div>

                        {/* Bottom CTA */}
                        <Link
                            href={`/category/${report.categoryId}`}
                            className="block p-12 bg-medical-700 text-white rounded-[3.5rem] text-center shadow-2xl shadow-medical-700/20 hover:scale-[1.02] transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 opacity-60">Study Product</p>
                            <span className="text-xl font-black uppercase tracking-tight block relative z-10 leading-none">Explore Clinical Packs</span>
                        </Link>
                    </aside>
                </div>
            </div>
        </div>
    );
}
