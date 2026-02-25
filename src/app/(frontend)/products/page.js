"use client";

import Link from 'next/link';
import Image from 'next/image';
import categoriesData from '@/data/categories.json';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/SEO';

export default function ProductsPage() {
    return (
        <div className="bg-white min-h-screen pt-32">
            <SEO
                title="B2B Product Range"
                description="Explore our clinical-grade disposable catalog. High-performance surgeon gowns, patient apparel, bed covering, and sterile wrapping sheets for global healthcare."
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-2xl mb-24">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-10 bg-medical-700"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-700">Clinical Excellence</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
                        Global <br /><span className="text-gradient">Catalog.</span>
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        Every product in our portfolio is engineered for sterile perfection and hospital-wide efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-32">
                    {categoriesData.map((category) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-start"
                        >
                            <Link
                                href={`/category/${category.id}`}
                                className="w-full aspect-[16/11] rounded-[2.5rem] overflow-hidden bg-slate-100 mb-8 border border-slate-100 relative shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <Image
                                    src={category.image || "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Explore Category</span>
                                </div>
                            </Link>
                            <div className="px-2">
                                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4 group-hover:text-medical-700 transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {category.description}
                                </p>
                                <Link
                                    href={`/category/${category.id}`}
                                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-medical-700 hover:gap-4 transition-all"
                                >
                                    View Range <ArrowRightIcon className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Custom Pack CTA */}
                <div className="bg-slate-50 rounded-[3rem] p-16 lg:p-24 mb-32 relative overflow-hidden text-center">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-medical-200/20 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6 underline decoration-medical-200 underline-offset-[16px]">Bespoke Kits.</h2>
                        <p className="text-slate-500 mb-12 max-w-xl mx-auto italic text-lg leading-relaxed">Tailored configurations for specialized surgical protocols. We manufacture your vision.</p>
                        <Link href="/customization" className="px-12 py-6 bg-medical-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-medical-900 shadow-2xl shadow-medical-700/20 transition-all hover:scale-105">
                            Configure Solution
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
