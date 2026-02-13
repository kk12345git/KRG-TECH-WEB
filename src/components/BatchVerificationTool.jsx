import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckBadgeIcon,
    ShieldCheckIcon,
    MagnifyingGlassIcon,
    QrCodeIcon,
    CalendarIcon,
    BeakerIcon
} from '@heroicons/react/24/outline';

export function BatchVerificationTool() {
    const [batchNumber, setBatchNumber] = useState('');
    const [result, setResult] = useState(null);
    const [isVerifying, setIsVerifying] = useState(false);

    const handleVerify = (e) => {
        e.preventDefault();
        if (!batchNumber) return;

        setIsVerifying(true);
        // Simulate Blockchain/DB lookup
        setTimeout(() => {
            setResult({
                id: batchNumber,
                status: 'AUTHENTIC',
                sterilizationDate: 'Jan 24, 2026',
                expiryDate: 'Jan 24, 2029',
                qualityScore: '99.8%',
                labTech: 'Dr. A. Rao',
                certifications: ['ISO 13485', 'CE 2460', 'GMP']
            });
            setIsVerifying(false);
        }, 1500);
    };

    return (
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-medical-50 rounded-bl-[4rem] -translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <ShieldCheckIcon className="w-6 h-6 text-medical-700" />
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">KRG Trust™ Batch Verification</h3>
                </div>

                <form onSubmit={handleVerify} className="space-y-6 mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            value={batchNumber}
                            onChange={(e) => setBatchNumber(e.target.value.toUpperCase())}
                            placeholder="ENTER BATCH (E.G. KRG-2026-X1)"
                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-0 ring-1 ring-slate-100 focus:ring-2 focus:ring-medical-500 text-sm font-black tracking-widest uppercase transition-all"
                        />
                        <MagnifyingGlassIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 font-bold" />
                    </div>
                    <button
                        disabled={isVerifying}
                        className="w-full py-4 bg-medical-700 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-medical-900 transition-all shadow-xl shadow-medical-700/20 active:scale-95 disabled:opacity-50"
                    >
                        {isVerifying ? 'Verifying Blockchain Hashes...' : 'Verify Authenticity'}
                    </button>
                </form>

                <AnimatePresence mode="wait">
                    {result && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="p-6 rounded-2xl bg-green-50 border border-green-100"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <CheckBadgeIcon className="w-6 h-6 text-green-600" />
                                <span className="text-xs font-black text-green-700 uppercase tracking-widest">Batch Verified Authentic</span>
                            </div>

                            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                                <div>
                                    <p className="text-[8px] font-black text-green-600/60 uppercase tracking-widest mb-1 flex items-center gap-1">
                                        <CalendarIcon className="w-3 h-3" /> Sterilization
                                    </p>
                                    <p className="text-[10px] font-black text-green-800 uppercase">{result.sterilizationDate}</p>
                                </div>
                                <div>
                                    <p className="text-[8px] font-black text-green-600/60 uppercase tracking-widest mb-1 flex items-center gap-1">
                                        <CheckBadgeIcon className="w-3 h-3" /> Quality Score
                                    </p>
                                    <p className="text-[10px] font-black text-green-800 uppercase">{result.qualityScore}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-[8px] font-black text-green-600/60 uppercase tracking-widest mb-1 flex items-center gap-1">
                                        <ShieldCheckIcon className="w-3 h-3" /> Compliance
                                    </p>
                                    <div className="flex gap-2">
                                        {result.certifications.map(c => (
                                            <span key={c} className="text-[7px] font-black bg-white/50 px-2 py-1 rounded border border-green-200 text-green-700">{c}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-6 py-3 border border-green-200 rounded-xl text-[8px] font-black uppercase tracking-widest text-green-600 hover:bg-white transition-all">
                                Download Full Lab Report
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {!result && !isVerifying && (
                    <div className="p-8 text-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                        <QrCodeIcon className="w-10 h-10 text-slate-200 mx-auto mb-4" />
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                            Scan physical batch QR or enter ID <br />to verify clinical clearance.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
