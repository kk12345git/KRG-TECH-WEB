import { useState, Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Simplified modal without @headlessui/react
export function QuickViewModal({ product, isOpen, onClose, addToCompare }) {
    if (!product || !isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] overflow-y-auto" onClick={onClose}>
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

            <div className="flex min-h-full items-center justify-center p-4">
                <div
                    className="relative w-full max-w-4xl transform overflow-hidden rounded-3xl bg-white p-8 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="absolute right-8 top-8">
                        <button
                            onClick={onClose}
                            className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Product Image */}
                        <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden">
                            <img
                                src={product.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600'}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Product Info */}
                        <div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">
                                {product.name}
                            </h3>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-medical-50 text-medical-700 rounded-lg text-xs font-bold uppercase">
                                    {product.sterilization}
                                </span>
                                {product.customizable && (
                                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-bold uppercase">
                                        Customizable
                                    </span>
                                )}
                            </div>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Specs */}
                            <div className="border-t border-slate-100 pt-6 mb-6">
                                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4">Key Specifications</h4>
                                <dl className="space-y-3">
                                    <div className="flex justify-between">
                                        <dt className="text-sm text-slate-500">Material</dt>
                                        <dd className="text-sm font-bold text-slate-900">{product.material}</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-sm text-slate-500">Size</dt>
                                        <dd className="text-sm font-bold text-slate-900">{product.size}</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-sm text-slate-500">MOQ</dt>
                                        <dd className="text-sm font-bold text-slate-900">{product.moq}</dd>
                                    </div>
                                </dl>
                            </div>

                            {/* Features */}
                            {product.features && product.features.length > 0 && (
                                <div className="mb-6">
                                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">Key Features</h4>
                                    <ul className="space-y-2">
                                        {product.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                                <span className="text-medical-700 mt-1">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex gap-3">
                                <Link
                                    href={`/product/${product.id}`}
                                    className="flex-1 text-center bg-medical-700 text-white py-3 rounded-xl font-bold hover:bg-medical-900 transition-colors"
                                    onClick={onClose}
                                >
                                    View Full Details
                                </Link>
                                <button
                                    onClick={() => {
                                        addToCompare(product);
                                        onClose();
                                    }}
                                    className="px-6 py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors"
                                >
                                    Compare
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
