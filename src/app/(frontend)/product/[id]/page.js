"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import productsData from '@/data/products.json';
import {
    ArrowLeftIcon,
    CheckCircleIcon,
    DocumentArrowDownIcon,
    CubeIcon,
    PhotoIcon
} from '@heroicons/react/24/outline';
import SpecPDFGenerator, { TechSpecPrintTemplate } from '@/components/SpecPDFGenerator';
import SEO from '@/components/SEO';
import { ROICalculator } from '@/components/ROICalculator';
import { ProductReviews } from '@/components/Reviews';
import { Product3DViewer } from '@/components/Product3DViewer';
import { MaterialExplodedView } from '@/components/MaterialExplodedView';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
    const params = useParams();
    const productId = params?.id;
    const product = productsData.find(p => p.id === productId);
    const { downloadPDF } = SpecPDFGenerator();
    const [is3D, setIs3D] = useState(false);

    if (!product) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-48 text-center pt-32">
                <h1 className="text-4xl font-black mb-6 uppercase">Product not found</h1>
                <Link href="/products" className="text-xs font-black uppercase tracking-widest text-medical-700">Explore Catalog</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-32 pt-32">
            <SEO
                title={`${product.name} | KRG Technical Specification`}
                description={`Technical specifications for ${product.name}. Clinical-grade ${product.material} construction. Manufactured by KRG Medifabb.`}
            />

            <TechSpecPrintTemplate product={product} />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Link href={`/category/${product.category}`} className="inline-flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-16 hover:text-medical-700 transition-colors">
                    <ArrowLeftIcon className="w-4 h-4" /> Back to Category
                </Link>

                <div className="lg:grid lg:grid-cols-2 lg:gap-x-24">
                    {/* Interaction Center: 2D vs 3D */}
                    <div className="relative group">
                        <div className="absolute -inset-10 bg-medical-50 blur-[100px] opacity-40 rounded-full"></div>

                        <div className="relative z-10">
                            {is3D ? (
                                <Product3DViewer name={product.name} posterUrl={product.image} />
                            ) : (
                                <div className="aspect-[4/5] w-full rounded-[4rem] bg-slate-50 overflow-hidden border border-slate-100 relative shadow-2xl">
                                    <Image
                                        src={product.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'}
                                        alt={product.name}
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                    />
                                </div>
                            )}

                            {/* View Switcher */}
                            <div className="absolute top-8 right-8 flex gap-3">
                                <button
                                    onClick={() => setIs3D(false)}
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${!is3D ? 'bg-medical-700 text-white shadow-xl' : 'bg-white/80 backdrop-blur-md text-slate-400 border border-slate-200 hover:text-slate-600'}`}
                                >
                                    <PhotoIcon className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => setIs3D(true)}
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${is3D ? 'bg-medical-700 text-white shadow-xl' : 'bg-white/80 backdrop-blur-md text-slate-400 border border-slate-200 hover:text-slate-600'}`}
                                >
                                    <CubeIcon className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {!is3D && (
                            <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-xl p-8 rounded-[2.5rem] z-20 shadow-2xl border border-slate-100 hidden xl:block animate-bounce-slow">
                                <div className="flex flex-col items-center gap-3">
                                    <CheckCircleIcon className="w-10 h-10 text-medical-600" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Sterile Case Verified</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Minimalist Info Column */}
                    <div className="mt-16 lg:mt-0">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="h-px w-10 bg-medical-700"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-700">Ref: KRG-{product.id.toUpperCase()}</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 uppercase leading-[0.85] mb-10">{product.name}</h1>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <span className="px-6 py-2 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                                {product.sterilization}
                            </span>
                            {product.customizable && (
                                <span className="px-6 py-2 rounded-xl bg-medical-50 text-[10px] font-black uppercase tracking-widest text-medical-700 border border-medical-100 italic">
                                    Bespoke Engineering Available
                                </span>
                            )}
                        </div>

                        <p className="text-2xl text-slate-500 italic mb-16 leading-relaxed border-l-4 border-medical-500 pl-10 font-medium">
                            "{product.description}"
                        </p>

                        <div className="bg-slate-50 p-12 rounded-[3.5rem] mb-16 border border-slate-100 shadow-inner">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10">Clinical Intelligence Matrix</h3>
                            <dl className="grid grid-cols-2 gap-x-16 gap-y-12">
                                <div>
                                    <dt className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 italic">Composite Textile</dt>
                                    <dd className="text-lg font-black text-slate-900 uppercase tracking-tight leading-none">{product.material}</dd>
                                </div>
                                <div>
                                    <dt className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 italic">Operational Size</dt>
                                    <dd className="text-lg font-black text-slate-900 uppercase tracking-tight leading-none">{product.size}</dd>
                                </div>
                                <div>
                                    <dt className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 italic">Institutional MOQ</dt>
                                    <dd className="text-lg font-black text-slate-900 uppercase tracking-tight leading-none">{product.moq}</dd>
                                </div>
                                <div>
                                    <dt className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 italic">Lead Velocity</dt>
                                    <dd className="text-lg font-black text-slate-900 uppercase tracking-tight leading-none">7-14 Clinical Days</dd>
                                </div>
                            </dl>
                        </div>

                        {/* Material Science Section */}
                        <div className="my-24">
                            <MaterialExplodedView />
                        </div>

                        <div className="space-y-6 mb-16">
                            {product.features?.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-6 group">
                                    <div className="w-2 h-2 rounded-full bg-medical-200 group-hover:bg-medical-600 transition-colors shadow-sm"></div>
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors leading-none">{feature}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8 mb-16">
                            <Link href="/contact" className="flex-1 bg-slate-900 text-white text-center py-8 rounded-[2rem] font-black uppercase shadow-2xl hover:bg-medical-700 transition-all tracking-[0.3em] text-[11px] leading-none">
                                Request Quote
                            </Link>
                            <button
                                className="flex-1 border-2 border-slate-100 text-slate-900 py-8 rounded-[2rem] font-black transition-all uppercase tracking-[0.3em] text-[11px] hover:bg-slate-50 leading-none"
                            >
                                Technical Comp
                            </button>
                        </div>

                        <button
                            onClick={() => downloadPDF(product)}
                            className="w-full flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 hover:text-medical-600 transition-colors pt-12 border-t border-slate-50 italic"
                        >
                            <DocumentArrowDownIcon className="w-5 h-5" /> Download Technical Datasheet (SLA Protected)
                        </button>
                    </div>
                </div>

                {/* ROI Analysis Section */}
                <div className="mt-48 pt-32 border-t border-slate-50">
                    <div className="mb-20">
                        <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4 leading-none text-slate-900">Value Infrastructure</h3>
                        <p className="text-medical-600 text-[10px] font-black uppercase tracking-[0.5em] italic">Clinical Investment & Procurement Efficiency Metrics</p>
                    </div>
                    <ROICalculator />
                </div>

                {/* Customer Reviews Section */}
                <div className="mt-48">
                    <ProductReviews productId={product.id} />
                </div>

                {/* Related Products */}
                <div className="mt-48">
                    <h3 className="text-4xl font-black uppercase tracking-tighter mb-16 leading-none">Related Clinical Solutions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {productsData
                            .filter(p => p.category === product.category && p.id !== product.id)
                            .slice(0, 3)
                            .map(relatedProduct => (
                                <Link
                                    key={relatedProduct.id}
                                    href={`/product/${relatedProduct.id}`}
                                    className="group bg-slate-50 rounded-[3rem] p-10 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="aspect-square bg-white rounded-[2rem] mb-8 overflow-hidden border border-slate-100 shadow-inner relative">
                                        <Image
                                            src={relatedProduct.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400'}
                                            alt={relatedProduct.name}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900 mb-4 group-hover:text-medical-600 transition-colors uppercase tracking-tight leading-none">
                                        {relatedProduct.name}
                                    </h4>
                                    <p className="text-[11px] text-slate-500 italic leading-relaxed line-clamp-2">{relatedProduct.description}</p>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
