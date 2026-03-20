"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ImageIcon,
    PlusIcon,
    Edit2Icon,
    Trash2Icon,
    EyeIcon,
    LayoutIcon,
    MonitorIcon,
    SmartphoneIcon,
    UploadCloudIcon,
    SearchIcon,
    MoreVerticalIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import initialBanners from '@/data/banners.json';
import { updateBanners } from '@/lib/actions';

export default function BannersPage() {
    const [banners, setBanners] = useState(initialBanners);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const filteredBanners = banners.filter(banner =>
        banner.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        banner.placement.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this banner?')) return;

        const updated = banners.filter(b => b.id !== id);
        setBanners(updated);

        setIsSaving(true);
        const result = await updateBanners(updated);
        setIsSaving(false);

        if (!result.success) {
            alert('Failed to save changes.');
            setBanners(banners); // Rollback
        }
    };

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">
                        Banner <span className="text-medical-600">Media</span>
                    </h1>
                    <p className="text-slate-500">Manage high-fidelity marketing assets and spotlight placements.</p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="relative">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search assets..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-medical-500 outline-none w-64 shadow-sm"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-medical-700 text-white rounded-xl text-sm font-black uppercase tracking-widest hover:bg-medical-800 transition-all shadow-lg shadow-medical-700/20">
                        <UploadCloudIcon className="w-4 h-4" />
                        Upload Asset
                    </button>
                </div>
            </div>

            {/* Banners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredBanners.map((banner, i) => (
                    <motion.div
                        key={banner.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group flex flex-col md:flex-row"
                    >
                        <div className="relative w-full md:w-48 h-48 bg-slate-100 flex-shrink-0">
                            <Image
                                src={banner.preview}
                                alt={banner.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute top-4 left-4">
                                <span className={cn(
                                    "px-2 py-1 rounded-md text-[8px] font-black uppercase tracking-widest text-white shadow-lg",
                                    banner.status === 'active' ? 'bg-emerald-500' : 'bg-slate-500'
                                )}>
                                    {banner.status}
                                </span>
                            </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1">{banner.title}</h3>
                                        <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">{banner.placement}</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <button className="p-2 hover:bg-slate-50 rounded-lg transition-all text-slate-300 hover:text-medical-600">
                                            <Edit2Icon className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(banner.id)}
                                            disabled={isSaving}
                                            className="p-2 hover:bg-slate-50 rounded-lg transition-all text-slate-300 hover:text-red-500 disabled:opacity-50"
                                        >
                                            <Trash2Icon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                                        <LayoutIcon className="w-3 h-3" /> {banner.type}
                                    </span>
                                    <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                                        <MonitorIcon className="w-3 h-3" /> {banner.size}
                                    </span>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-slate-50 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2">
                                <EyeIcon className="w-3.5 h-3.5" /> Preview Live
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {filteredBanners.length === 0 && (
                <div className="py-24 text-center border-2 border-dashed border-slate-100 rounded-[3rem]">
                    <SearchIcon className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No assets found matching your search</p>
                </div>
            )}
        </div>
    );
}
