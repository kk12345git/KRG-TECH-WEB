import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import {
    ArrowLeftIcon,
    CheckCircleIcon,
    DocumentArrowDownIcon,
} from '@heroicons/react/24/outline';
import SpecPDFGenerator, { TechSpecPrintTemplate } from '../components/SpecPDFGenerator';
import SEO from '../components/SEO';
import { ROICalculator } from '../components/ROICalculator';
import { useRecentlyViewed } from '../hooks/useRecentlyViewed';
import { ProductReviews, ReviewSummary } from '../components/Reviews';

import { Product3DViewer } from '../components/Product3DViewer';
import { CubeIcon, PhotoIcon, ViewColumnsIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { MaterialExplodedView } from '../components/MaterialExplodedView';

export default function ProductDetail({ addToCompare }) {
    const { productId } = useParams();
    const product = productsData.find(p => p.id === productId);
    const { downloadPDF } = SpecPDFGenerator();
    const { items: recentlyViewed, addProduct } = useRecentlyViewed();
    const [is3D, setIs3D] = useState(false);

    useEffect(() => {
        if (product) {
            addProduct(product);
        }
    }, [product]);

    if (!product) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-48 text-center">
                <h1 className="text-4xl font-black mb-6 uppercase">Product not found</h1>
                <Link to="/" className="text-xs font-black uppercase tracking-widest text-medical-700">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-32 pt-32">
            <SEO
                title={`${product.name} | Surgical Excellence`}
                description={`Technical specifications for ${product.name}. Clinical-grade ${product.material} construction with ${product.sterilization} assurance. Manufactured by KRG Medifabb.`}
            >
                {/* Product Schema for SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": product.name,
                        "description": product.description,
                        "image": product.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
                        "sku": `KRG-${product.id.toUpperCase()}`,
                        "brand": {
                            "@type": "Brand",
                            "name": "KRG Medifabb"
                        },
                        "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock",
                            "priceCurrency": "INR"
                        }
                    })}
                </script>
            </SEO>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Link to={`/category/${product.category}`} className="inline-flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-16 hover:text-medical-700 transition-colors">
                    <ArrowLeftIcon className="w-4 h-4" /> Back to Category
                </Link>

                <div className="lg:grid lg:grid-cols-2 lg:gap-x-24">
                    {/* Interaction Center: 2D vs 3D */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-medical-50 blur-3xl opacity-50 rounded-[4rem]"></div>

                        <div className="relative z-10">
                            {is3D ? (
                                <Product3DViewer name={product.name} posterUrl={product.image} />
                            ) : (
                                <div className="aspect-[4/5] w-full rounded-[3rem] bg-slate-50 overflow-hidden border border-slate-100 relative hover-lift transition-all">
                                    <img
                                        src={product.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'}
                                        alt={product.name}
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                    />
                                </div>
                            )}

                            {/* View Switcher */}
                            <div className="absolute top-6 right-6 flex gap-2">
                                <button
                                    onClick={() => setIs3D(false)}
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${!is3D ? 'bg-medical-700 text-white shadow-lg' : 'bg-white text-slate-400 border border-slate-100 hover:text-slate-600'}`}
                                >
                                    <PhotoIcon className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => setIs3D(true)}
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${is3D ? 'bg-medical-700 text-white shadow-lg' : 'bg-white text-slate-400 border border-slate-100 hover:text-slate-600'}`}
                                >
                                    <CubeIcon className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {!is3D && (
                            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-[2rem] z-20 animate-float hidden xl:block">
                                <div className="flex flex-col items-center gap-2">
                                    <CheckCircleIcon className="w-8 h-8 text-medical-600" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sterile Case</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Minimalist Info Column */}
                    <div className="mt-16 lg:mt-0">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-medical-700"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-700">SKU: KRG-{product.id.toUpperCase()}</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-slate-900 uppercase leading-[0.9] mb-8">{product.name}</h1>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <span className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-medical-700">
                                {product.sterilization}
                            </span>
                            {product.customizable && (
                                <span className="px-4 py-2 rounded-xl bg-medical-50 text-[10px] font-black uppercase tracking-widest text-medical-700 shadow-sm shadow-medical-700/5">
                                    Customizable Specification
                                </span>
                            )}
                        </div>

                        <p className="text-xl text-slate-500 italic mb-12 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Material Science Section */}
                        <div className="my-32">
                            <MaterialExplodedView />
                        </div>

                        <div className="glass p-10 rounded-[2.5rem] mb-12 border-slate-100">
                            <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Technical Metrics</h3>
                            <dl className="grid grid-cols-2 gap-x-12 gap-y-10">
                                <div>
                                    <dt className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Fabric Type</dt>
                                    <dd className="text-sm font-black text-slate-900 uppercase tracking-tighter">{product.material}</dd>
                                </div>
                                <div>
                                    <dt className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Standard Size</dt>
                                    <dd className="text-sm font-black text-slate-900 uppercase tracking-tighter">{product.size}</dd>
                                </div>
                                <div>
                                    <dt className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Min. Order</dt>
                                    <dd className="text-sm font-black text-slate-900 uppercase tracking-tighter">{product.moq}</dd>
                                </div>
                                <div>
                                    <dt className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Lead Time</dt>
                                    <dd className="text-sm font-black text-slate-900 uppercase tracking-tighter">7-14 Days</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="space-y-6 mb-12">
                            {product.features?.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-medical-200 group-hover:bg-medical-700 transition-colors"></div>
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{feature}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 mb-12">
                            <Link to="/contact" className="flex-1 bg-slate-900 text-white text-center py-6 rounded-2xl font-black uppercase shadow-2xl hover:bg-slate-800 transition-all tracking-widest text-[10px]">
                                Request Quotation
                            </Link>
                            <button
                                onClick={() => addToCompare(product)}
                                className="flex-1 border border-slate-200 text-slate-900 py-6 rounded-2xl font-black transition-all uppercase tracking-widest text-[10px] hover:bg-slate-50"
                            >
                                Compare Specs
                            </button>
                        </div>

                        <button
                            onClick={() => downloadPDF(product)}
                            className="w-full flex items-center justify-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-300 hover:text-medical-700 transition-colors border-t border-slate-50 pt-8"
                        >
                            <DocumentArrowDownIcon className="w-4 h-4" /> Technical Datasheet (.PDF)
                        </button>
                    </div>
                </div>

                {/* Customer Reviews Section */}
                <div className="mt-32">
                    <ProductReviews productId={product.id} />
                </div>

                {/* ROI Analysis Section */}
                <div className="mt-32">
                    <div className="mb-16">
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Value Analysis</h3>
                        <p className="text-slate-500 uppercase text-[10px] font-black tracking-widest">Clinical Investment & Procurement Efficiency</p>
                    </div>
                    <ROICalculator />
                </div>

                {/* Related Products */}
                <div className="mt-32">
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-12">Related Products</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {productsData
                            .filter(p => p.category === product.category && p.id !== product.id)
                            .slice(0, 3)
                            .map(relatedProduct => (
                                <Link
                                    key={relatedProduct.id}
                                    to={`/product/${relatedProduct.id}`}
                                    className="group border border-slate-100 rounded-2xl p-6 hover:border-medical-200 hover:shadow-lg transition-all"
                                >
                                    <div className="aspect-square bg-slate-50 rounded-xl mb-4 overflow-hidden">
                                        <img
                                            src={relatedProduct.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400'}
                                            alt={relatedProduct.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                        />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-medical-700 transition-colors">
                                        {relatedProduct.name}
                                    </h4>
                                    <p className="text-xs text-slate-500 line-clamp-2">{relatedProduct.description}</p>
                                </Link>
                            ))}
                    </div>
                </div>

                {/* Recently Viewed */}
                {recentlyViewed.length > 1 && (
                    <div className="mt-32 pt-32 border-t border-slate-100">
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-300 mb-12">Continue Browsing</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {recentlyViewed
                                .filter(p => p.id !== product.id)
                                .slice(0, 5)
                                .map(viewedProduct => (
                                    <Link
                                        key={viewedProduct.id}
                                        to={`/product/${viewedProduct.id}`}
                                        className="group"
                                    >
                                        <div className="aspect-square bg-slate-50 rounded-xl mb-4 overflow-hidden border border-slate-100">
                                            <img
                                                src={viewedProduct.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400'}
                                                alt={viewedProduct.name}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100"
                                            />
                                        </div>
                                        <h4 className="text-[10px] font-black uppercase tracking-tight text-slate-500 group-hover:text-medical-700 transition-colors">
                                            {viewedProduct.name}
                                        </h4>
                                    </Link>
                                ))}
                        </div>
                    </div>
                )}
            </div>
            <TechSpecPrintTemplate product={product} />
        </div>
    );
}
