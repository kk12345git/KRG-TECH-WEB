"use client";

import { useParams } from 'next/navigation';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';
import { ArrowLeftIcon, PlusIcon, EyeIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/SEO';
import { AdvancedSearch } from '@/components/AdvancedSearch';
import { QuickViewModal } from '@/components/QuickViewModal';

export default function CategoryPage() {
    const params = useParams();
    const categoryId = params.id;
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

    const categoryProducts = useMemo(() => {
        return productsData.filter(p => p.category === categoryId);
    }, [categoryId]);

    const category = categoriesData.find(c => c.id === categoryId);

    if (!category) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-48 text-center">
                <h1 className="text-4xl font-black mb-6 uppercase">Category not found</h1>
                <Link href="/" className="text-xs font-black uppercase tracking-widest text-medical-700">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-24 pt-32">
            <SEO
                title={category.name}
                description={`Explore highly-compliant ${category.name} manufactured by KRG Medifabb. Technical specifications and custom packs available for global export.`}
            />
            {/* Minimal Category Header */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
                <Link href="/products" className="inline-flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-10 hover:text-medical-700 transition-colors">
                    <ArrowLeftIcon className="w-4 h-4" /> Back to Catalog
                </Link>
                <div className="lg:flex lg:items-end lg:justify-between gap-24">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-medical-700"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-700">Sector Specifications</span>
                        </div>
                        <h1 className="text-4xl sm:text-7xl font-black tracking-tighter text-slate-900 uppercase leading-[0.9] mb-8">{category.name}</h1>
                        <p className="text-lg text-slate-500 leading-relaxed italic">
                            {category.longDescription || category.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20 p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
                <AdvancedSearch
                    products={categoryProducts}
                    onFilterChange={setFilteredResults}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Minimalist Product Grid */}
                    <div className="flex-grow">
                        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                            {(filteredResults.length > 0 ? filteredResults : categoryProducts).map((product) => (
                                <div
                                    key={product.id}
                                    className="group flex flex-col items-start"
                                >
                                    <div className="aspect-[4/3] w-full rounded-[2.5rem] bg-slate-50 overflow-hidden border border-slate-50 relative shadow-sm transition-all duration-500 hover:shadow-xl">
                                        <Image
                                            src={product.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600'}
                                            alt={product.name}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                            <button
                                                onClick={() => {
                                                    setSelectedProduct(product);
                                                    setIsQuickViewOpen(true);
                                                }}
                                                className="p-4 bg-white rounded-2xl shadow-xl hover:scale-110 transition-transform text-medical-700"
                                            >
                                                <EyeIcon className="w-6 h-6" />
                                            </button>
                                            <Link
                                                href={`/product/${product.id}`}
                                                className="p-4 bg-medical-700 rounded-2xl shadow-xl hover:scale-110 transition-transform text-white"
                                            >
                                                <PlusIcon className="w-6 h-6" />
                                            </Link>
                                        </div>
                                    </div>

                                    <Link href={`/product/${product.id}`} className="w-full mt-8">
                                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-medical-700 transition-colors uppercase tracking-tighter mb-4">
                                            {product.name}
                                        </h3>

                                        <div className="flex gap-4 mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">
                                                {product.sterilization}
                                            </span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">
                                                {product.material}
                                            </span>
                                        </div>

                                        <p className="text-sm text-slate-400 italic mb-8 line-clamp-2 leading-relaxed">
                                            {product.description}
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {filteredResults.length === 0 && categoryProducts.length === 0 && (
                            <div className="text-center py-24 border-2 border-dashed border-slate-100 rounded-[3rem]">
                                <p className="text-slate-300 font-black uppercase tracking-[0.2em]">No products currently listed in this category.</p>
                            </div>
                        )}

                        {filteredResults.length === 0 && categoryProducts.length > 0 && (
                            <div className="text-center py-24 border-2 border-dashed border-slate-100 rounded-[3rem]">
                                <p className="text-slate-300 font-black uppercase tracking-[0.2em]">No matches found for your criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <QuickViewModal
                product={selectedProduct}
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
                addToCompare={() => { }}
            />
        </div>
    );
}
