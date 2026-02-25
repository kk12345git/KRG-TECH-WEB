"use client";

import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white relative overflow-hidden" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-medical-900/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="mx-auto max-w-7xl px-8 lg:px-16 pt-20 lg:pt-32 pb-16 relative z-10">
                <div className="xl:grid xl:grid-cols-3 xl:gap-24">
                    <div className="space-y-12">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="flex flex-col leading-[0.7] items-start">
                                <span className="text-3xl font-semibold tracking-tighter text-brand-red uppercase font-brand">KRG</span>
                                <span className="text-[22px] font-semibold tracking-tight text-brand-green font-medifabb">Medifabb</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400 max-w-sm italic">
                            Elevating surgical standards through high-performance medical textiles and sterile precision manufacturing.
                        </p>
                    </div>
                    <div className="mt-20 grid grid-cols-2 gap-12 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-12">
                            <div>
                                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-medical-400 mb-8">Solutions</h3>
                                <ul role="list" className="space-y-4">
                                    <li><Link href="/category/general-surgery-drapes" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">General Surgery</Link></li>
                                    <li><Link href="/category/ortho-surgery-drapes" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Ortho Surgery</Link></li>
                                    <li><Link href="/category/gynae-surgery-drapes" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Gynae Surgery</Link></li>
                                    <li><Link href="/customization" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Custom Packs</Link></li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-medical-400 mb-8">Ecosystem</h3>
                                <ul role="list" className="space-y-4">
                                    <li><Link href="/support" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Help Center</Link></li>
                                    <li><Link href="/academy" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Academy</Link></li>
                                    <li><Link href="/careers" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Life at KRG</Link></li>
                                    <li><Link href="/quality" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Quality Labs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1">
                            <div>
                                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-medical-400 mb-8">Contact</h3>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Global H.Q.</p>
                                        <p className="text-[10px] font-black text-white leading-relaxed uppercase">No.50, Shanthi Nagar, Korattur,<br />Chennai - 600 050, TN, INDIA</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Direct Line</p>
                                        <p className="text-[10px] font-black text-white uppercase">+91 91764 68297</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} KRG MEDIFABB PVT LTD. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-[9px] font-black text-slate-600 hover:text-white uppercase tracking-widest">Privacy Protocol</Link>
                        <Link href="/terms" className="text-[9px] font-black text-slate-600 hover:text-white uppercase tracking-widest">Global Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
