import { useState } from 'react';
import { TrendingUp, DollarSign, Clock, ShieldCheck, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ROICalculator() {
    const [currentCost, setCurrentCost] = useState(50000);
    const [infectionRate, setInfectionRate] = useState(2.5);
    const [isCalculating, setIsCalculating] = useState(false);
    const [results, setResults] = useState(null);

    const calculateROI = () => {
        setIsCalculating(true);
        setTimeout(() => {
            // Logic: KRG products (premium) reduce infection rate by 40% 
            // and improve prep time efficiency by 15%
            const newInfectionRate = infectionRate * 0.6;
            const infectionsAvoided = (infectionRate - newInfectionRate) * 10; // per 1000 procedures
            const costPerInfection = 15000; // Average cost of SSI (Surgical Site Infection)

            const annualSavingsInfections = infectionsAvoided * costPerInfection;
            const efficiencySavings = currentCost * 0.15;
            const totalSavings = annualSavingsInfections + efficiencySavings;
            const roiPercentage = ((totalSavings - currentCost) / currentCost) * 100;

            setResults({
                savings: totalSavings.toLocaleString(),
                infectionsAvoided: infectionsAvoided.toFixed(1),
                roi: Math.max(0, roiPercentage).toFixed(0),
                paybackMonths: 3
            });
            setIsCalculating(false);
        }, 1000);
    };

    return (
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-medical-50/50 blur-[100px] rounded-full"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                    <div className="p-3 bg-medical-100 rounded-2xl">
                        <TrendingUp className="w-6 h-6 text-medical-700" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 leading-none">Clinical ROI Calculator</h3>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Investment Value Analysis</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Inputs */}
                    <div className="space-y-10">
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex justify-between">
                                Annual Disposable Spend <span>${currentCost.toLocaleString()}</span>
                            </label>
                            <input
                                type="range"
                                min="10000"
                                max="500000"
                                step="5000"
                                value={currentCost}
                                onChange={(e) => setCurrentCost(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-medical-600"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex justify-between">
                                Current SSI Rate (%) <span>{infectionRate}%</span>
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="10"
                                step="0.1"
                                value={infectionRate}
                                onChange={(e) => setInfectionRate(parseFloat(e.target.value))}
                                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-medical-600"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                                <Clock className="w-5 h-5 text-slate-400" />
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">Prep Efficiency</p>
                                    <p className="text-sm font-bold text-slate-900">+15% Optimized</p>
                                </div>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-slate-400" />
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">AAMI Barrier</p>
                                    <p className="text-sm font-bold text-slate-900">Level 4 Standard</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={calculateROI}
                            disabled={isCalculating}
                            className="w-full bg-medical-700 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-medical-800 transition-all shadow-xl shadow-medical-200 flex items-center justify-center gap-3"
                        >
                            {isCalculating ? (
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : 'Analyze Clinical ROI'}
                        </button>
                    </div>

                    {/* Visualization */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            {!results ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-[2rem] border border-dashed border-slate-200">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-slate-300">
                                        <DollarSign className="w-8 h-8" />
                                    </div>
                                    <p className="text-sm font-bold text-slate-400">Simulate infection prevention savings <br />and resource optimization.</p>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-6"
                                >
                                    <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Estimated Annual Savings</p>
                                        <h4 className="text-5xl font-black tracking-tighter text-medical-400 mb-6">${results.savings}</h4>

                                        <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-slate-400 mb-1">SSIs Avoided</p>
                                                <p className="text-xl font-bold">{results.infectionsAvoided} <span className="text-[10px] text-medical-400">Cases/Yr</span></p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Projected ROI</p>
                                                <p className="text-xl font-bold text-green-400">{results.roi}%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-medical-50 rounded-2xl border border-medical-100 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-bold text-slate-900">Payback Period</p>
                                            <p className="text-2xl font-black text-medical-700">{results.paybackMonths} Months</p>
                                        </div>
                                        <div className="h-12 w-[1px] bg-medical-200"></div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black uppercase text-medical-600">Risk Assessment</p>
                                            <p className="text-sm font-bold text-slate-900">Low Risk • High Value</p>
                                        </div>
                                    </div>

                                    {/* Lead Gate for Export */}
                                    <div className="pt-4 border-t border-slate-100">
                                        <p className="text-[10px] font-black uppercase text-slate-400 mb-4 text-center">Unlock Institutional Business Case</p>
                                        <div className="flex gap-2">
                                            <input
                                                type="email"
                                                placeholder="Hospital Email"
                                                className="flex-grow bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs font-medium outline-none focus:ring-2 focus:ring-medical-500 transition-all"
                                            />
                                            <button
                                                onClick={() => alert("Value Case sent to your email! (Mock)")}
                                                className="bg-medical-700 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-medical-800 shadow-lg shadow-medical-700/20"
                                            >
                                                Export PDF
                                            </button>
                                        </div>
                                        <p className="text-[9px] text-slate-400 mt-3 text-center italic">Includes specialized AAMI Level 4 migration strategy.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
