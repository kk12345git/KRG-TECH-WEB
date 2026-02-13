import { useParams, Link } from 'react-router-dom';
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
import reports from '../data/caseReports.json';
import SEO from '../components/SEO';

export default function CaseStudyDetail() {
    const { id } = useParams();
    const report = reports.find(r => r.id === parseInt(id));

    if (!report) return <div className="min-h-screen py-48 text-center uppercase font-black text-slate-300">Report Not Found</div>;

    return (
        <div className="bg-white min-h-screen pt-24 pb-32">
            <SEO title={`${report.title} | Technical Report`} description={`Deep-dive clinical benchmarks and protocol analysis for ${report.title}.`} />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Navigation */}
                <Link to="/case-studies" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-red transition-colors mb-12">
                    <ChevronLeftIcon className="w-4 h-4" /> Back to Case Studies
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                    {/* Main Content: Technical Report Style */}
                    <div className="lg:col-span-2 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Clinical Verification Active</span>
                            </div>
                            <h2 className="text-brand-green font-black uppercase tracking-[0.3em] text-xs mb-4">{report.hospital} | {report.location}</h2>
                            <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-slate-900 uppercase leading-[0.9] font-brand mb-10">
                                {report.title}
                            </h1>
                            <div className="h-2 w-24 bg-brand-red mb-12"></div>

                            <section className="space-y-6">
                                <h3 className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4">
                                    <AcademicCapIcon className="w-5 h-5 text-brand-green" /> Clinical Objective
                                </h3>
                                <p className="text-xl text-slate-600 leading-relaxed font-medium italic">"{report.objective}"</p>
                            </section>
                        </motion.div>

                        {/* Comparative Matrix */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden"
                        >
                            <div className="p-8 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">Comparative Technical Matrix</h3>
                                <BeakerIcon className="w-5 h-5 text-brand-green" />
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50/50">
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Technical Feature</th>
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Current Standard</th>
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-brand-green">KRG Optimization</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {report.benchmarks.map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                                                <td className="px-8 py-6 text-sm font-bold text-slate-900">{row.feature}</td>
                                                <td className="px-8 py-6 text-sm font-medium text-slate-400 italic">{row.standard}</td>
                                                <td className="px-8 py-6 text-sm font-black text-brand-green">{row.krg}</td>
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
                            className="space-y-10"
                        >
                            <h3 className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4">
                                <ListBulletIcon className="w-5 h-5 text-brand-green" /> Implementation Protocol
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                                {report.protocol.map((step, i) => (
                                    <div key={i} className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-brand-red transition-all duration-500 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 font-black text-slate-100 text-6xl italic group-hover:text-brand-red/5 transition-colors">{i + 1}</div>
                                        <div className="relative z-10">
                                            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-3">{step.step}</h4>
                                            <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">{step.desc}</p>
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
                            className="space-y-8"
                        >
                            <h3 className="flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4">
                                <ShieldCheckIcon className="w-5 h-5 text-brand-green" /> Documented Outcomes
                            </h3>
                            <ul className="grid grid-cols-1 gap-6">
                                {report.outcomes.map((outcome, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex-none flex items-center justify-center text-[10px] font-black group-hover:bg-brand-red transition-colors">{i + 1}</div>
                                        <p className="text-slate-700 font-bold leading-relaxed">{outcome}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Technical Sidebar */}
                    <aside className="space-y-8 lg:sticky lg:top-32">
                        {/* Metrics Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-[60px] rounded-full"></div>
                            <h4 className="flex items-center gap-3 font-black text-brand-green uppercase text-[10px] tracking-widest mb-10">
                                <ChartBarIcon className="w-5 h-5" /> Benchmark Summary
                            </h4>

                            <div className="space-y-10">
                                {report.metrics.map((m) => (
                                    <div key={m.label} className="group">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{m.label}</p>
                                        <div className="flex items-end gap-3">
                                            <span className={`text-5xl font-black tracking-tighter leading-none ${m.color === 'brand-green' ? 'text-brand-green' : m.color === 'brand-red' ? 'text-brand-red' : 'text-white'}`}>
                                                {m.val}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ROI Analysis Card */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                            <h4 className="flex items-center gap-3 font-black text-slate-900 uppercase text-[10px] tracking-widest mb-8 border-b border-slate-50 pb-4">
                                <CurrencyDollarIcon className="w-5 h-5 text-brand-red" /> Operational ROI
                            </h4>
                            <div className="space-y-6 mb-10">
                                <div className="flex justify-between items-end border-b border-slate-50 pb-4">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Annual Save</span>
                                    <span className="text-xl font-black text-slate-900">{report.roiAnalysis.annualSavings}</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-slate-50 pb-4">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Payback</span>
                                    <span className="text-xl font-black text-brand-green">{report.roiAnalysis.paybackPeriod}</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gain</span>
                                    <div className="flex items-center gap-2">
                                        <ArrowTrendingUpIcon className="w-4 h-4 text-brand-red" />
                                        <span className="text-xl font-black text-slate-900">{report.roiAnalysis.efficiencyGain}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-red transition-all shadow-lg shadow-slate-200">
                                <ArrowDownTrayIcon className="w-4 h-4" /> Export Methodology
                            </button>
                        </div>

                        {/* Bottom CTA */}
                        <Link
                            to={`/category/${report.categoryId}`}
                            className="block p-10 bg-brand-green text-white rounded-[2.5rem] text-center shadow-xl shadow-brand-green/20 hover:scale-[1.02] transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">Study Product</p>
                            <span className="text-lg font-black uppercase tracking-tight font-brand block relative z-10">Explore Clinical Packs</span>
                        </Link>
                    </aside>
                </div>
            </div>
        </div>
    );
}
