"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBagIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function ProductCard({ product }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group relative bg-white border border-slate-100 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-medical-700/5 select-none"
        >
            <div className="aspect-square relative overflow-hidden bg-slate-50">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Actions */}
                <div className="absolute inset-x-0 bottom-4 px-4 flex gap-2 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <Link
                        href={`/products/${product.id}`}
                        className="flex-1 bg-white/90 backdrop-blur-md h-12 rounded-xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 hover:bg-white transition-colors"
                    >
                        <EyeIcon className="w-4 h-4" />
                        View Detail
                    </Link>
                    <button className="w-12 h-12 bg-medical-700 rounded-xl flex items-center justify-center text-white hover:bg-medical-900 transition-colors">
                        <ShoppingBagIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-medical-600 bg-medical-50 px-2.5 py-1 rounded-full">
                        {product.category.replace(/-/g, ' ')}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        MOQ: {product.moq}
                    </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 leading-tight mb-2 group-hover:text-medical-700 transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {product.description}
                </p>
            </div>
        </motion.div>
    );
}
