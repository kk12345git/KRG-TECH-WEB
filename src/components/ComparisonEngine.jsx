import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, ScaleIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import productsData from '../data/products.json';

// Simple global-like state using a custom event or a shared hook
// For this standalone demo, we'll use a custom hook approach

export function useComparison() {
    const [compareList, setCompareList] = useState(() => {
        const saved = localStorage.getItem('krg_compare');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('krg_compare', JSON.stringify(compareList));
    }, [compareList]);

    const addToCompare = (product) => {
        if (compareList.length >= 4) return alert('Max 4 products for comparison');
        if (!compareList.find(p => p.id === product.id)) {
            setCompareList([...compareList, product]);
        }
    };

    const removeFromCompare = (productId) => {
        setCompareList(compareList.filter(p => p.id !== productId));
    };

    const clearCompare = () => setCompareList([]);

    return { compareList, addToCompare, removeFromCompare, clearCompare };
}

export default function ComparisonTray({ compareList, removeFromCompare }) {
    const [isOpen, setIsOpen] = useState(true);

    if (compareList.length === 0) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 pointer-events-none">
            <div className="mx-auto max-w-4xl w-full bg-slate-900 shadow-2xl rounded-2xl border border-white/10 overflow-hidden pointer-events-auto transition-all duration-500">
                <div className="flex items-center justify-between p-4 px-6 border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <ScaleIcon className="w-5 h-5 text-medical-400" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Compare Products ({compareList.length}/4)</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            to="/compare"
                            className="bg-medical-600 text-white text-xs font-black px-4 py-2 rounded-lg hover:bg-medical-500 transition-colors uppercase"
                        >
                            Start Comparison
                        </Link>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 hover:text-white">
                            {isOpen ? <ChevronDownIcon className="w-5 h-5" /> : <ChevronUpIcon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-900/50 backdrop-blur-xl">
                        {compareList.map((product) => (
                            <div key={product.id} className="relative group bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                                    <span className="text-[10px] text-slate-500 font-bold">PDF</span>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="text-xs font-bold text-white truncate">{product.name}</p>
                                    <p className="text-[10px] text-slate-500 uppercase">{product.material}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCompare(product.id)}
                                    className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                >
                                    <XMarkIcon className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
