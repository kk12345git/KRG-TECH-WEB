import { useComparison } from '../components/ComparisonEngine';
import { ArrowLeftIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const specs = [
    { label: 'Material', key: 'material' },
    { label: 'GSM', key: 'gsm' },
    { label: 'Sterilization', key: 'sterilization' },
    { label: 'MOQ', key: 'moq' },
    { label: 'Customizable', key: 'customizable' },
    { label: 'Sizes', key: 'size' },
];

export default function ComparePage() {
    const { compareList, removeFromCompare, clearCompare } = useComparison();

    if (compareList.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-slate-50 p-8 rounded-full mb-8">
                    <ArrowLeftIcon className="w-12 h-12 text-slate-300" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-tighter">No Products Selected</h1>
                <p className="text-gray-500 mb-8">Add products to your comparison list from the catalog.</p>
                <Link to="/" className="bg-medical-700 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all">Browse Catalog</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-24">
            <SEO
                title="Product Technical Comparison"
                description="Side-by-side technical analysis of surgical disposables. Compare material GSM, sterilization methods, and customization options for informed clinical procurement."
            />
            <div className="bg-slate-900 py-16 text-white overflow-hidden relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-black uppercase tracking-tighter sm:text-5xl">Technical <span className="text-medical-500">Comparison</span></h1>
                        <p className="mt-4 text-slate-400 max-w-md">Detailed side-by-side analysis of clinical specifications to help your procurement decision.</p>
                    </div>
                    <button
                        onClick={clearCompare}
                        className="text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest border-b border-white/20 pb-1"
                    >
                        Clear All
                    </button>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="p-6 text-left text-xs font-black text-slate-400 uppercase tracking-widest bg-gray-50 rounded-tl-3xl">Feature</th>
                            {compareList.map((product) => (
                                <th key={product.id} className="p-6 min-w-[250px] relative group text-left">
                                    <div className="flex flex-col gap-4">
                                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center font-bold text-slate-300">JPG</div>
                                        <div>
                                            <h4 className="font-black text-gray-900 uppercase tracking-tighter leading-tight">{product.name}</h4>
                                            <p className="text-[10px] font-bold text-medical-600 mt-1 uppercase tracking-widest">{product.category}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCompare(product.id)}
                                        className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"
                                    >
                                        <XMarkIcon className="w-5 h-5" />
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {specs.map((spec) => (
                            <tr key={spec.key} className="hover:bg-medical-50/30 transition-colors">
                                <td className="p-6 text-sm font-bold text-gray-900 uppercase tracking-wider bg-gray-50/50 w-64">{spec.label}</td>
                                {compareList.map((product) => (
                                    <td key={`${product.id}-${spec.key}`} className="p-6 text-sm text-gray-600 font-medium">
                                        {spec.key === 'customizable' ? (
                                            product[spec.key] ?
                                                <span className="flex items-center gap-1 text-green-600"><CheckIcon className="w-4 h-4" /> Yes</span> :
                                                <span className="flex items-center gap-1 text-gray-400"><XMarkIcon className="w-4 h-4" /> No</span>
                                        ) : (
                                            <span className="text-gray-900 font-bold">{product[spec.key] || 'N/A'}</span>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        <tr>
                            <td className="p-6 bg-gray-50/50"></td>
                            {compareList.map((product) => (
                                <td key={`cta-${product.id}`} className="p-6">
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="block w-full text-center bg-gray-900 text-white text-xs font-black py-4 rounded-xl hover:bg-medical-700 transition-all uppercase tracking-widest"
                                    >
                                        View Details
                                    </Link>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Advisory Note */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
                <div className="bg-medical-50 p-6 rounded-2xl border border-medical-100 border-dashed">
                    <p className="text-xs text-medical-800 leading-relaxed italic">
                        *All technical specifications are verified according to ISO 13485:2016 standards. For customized specifications not listed here, please contact our clinical specialist.
                    </p>
                </div>
            </div>
        </div>
    );
}
