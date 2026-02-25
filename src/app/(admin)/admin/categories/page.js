"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    TagIcon,
    PlusIcon,
    SearchIcon,
    Edit2Icon,
    Trash2Icon,
    ChevronRightIcon,
    FolderPlusIcon,
    MoreVerticalIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

import initialCategories from '@/data/categories.json';
import { updateCategories } from '@/lib/actions';

export default function CategoriesPage() {
    const [categories, setCategories] = useState(initialCategories);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const filteredCategories = categories.filter(cat =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this category? This will affect product listings.')) return;

        const updated = categories.filter(cat => cat.id !== id);
        setCategories(updated);

        setIsSaving(true);
        const result = await updateCategories(updated);
        setIsSaving(false);

        if (!result.success) {
            alert('Failed to save changes to the live site.');
            setCategories(categories); // Rollback
        }
    };

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">
                        Category <span className="text-medical-600">Manager</span>
                    </h1>
                    <p className="text-slate-500">Organize and manage the surgical product hierarchy.</p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="relative">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search categories..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-medical-500 outline-none w-64 shadow-sm"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-medical-700 text-white rounded-xl text-sm font-black uppercase tracking-widest hover:bg-medical-800 transition-all shadow-lg shadow-medical-700/20">
                        <FolderPlusIcon className="w-4 h-4" />
                        New Category
                    </button>
                </div>
            </div>

            {/* Categories Table */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Category Name</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">URL Slug</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Products</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Last Modified</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredCategories.map((cat, i) => (
                                <motion.tr
                                    key={cat.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:bg-slate-50/30 transition-colors group"
                                >
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-medical-50 group-hover:text-medical-700 transition-colors">
                                                <TagIcon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 leading-none mb-1">{cat.name}</p>
                                                <p className="text-[10px] text-slate-400 font-medium">Main Hierarchy</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-xs font-mono text-slate-400">/{cat.slug}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-sm font-black text-slate-900">{cat.productCount} Items</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                                            cat.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-slate-50 text-slate-400 border-slate-100'
                                        )}>
                                            {cat.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-xs text-slate-500 font-medium">{cat.lastUpdated}</td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 hover:bg-white hover:shadow-md rounded-lg transition-all text-slate-400 hover:text-medical-600">
                                                <Edit2Icon className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(cat.id)}
                                                disabled={isSaving}
                                                className="p-2 hover:bg-white hover:shadow-md rounded-lg transition-all text-slate-400 hover:text-red-600 disabled:opacity-50"
                                            >
                                                <Trash2Icon className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {filteredCategories.length === 0 && (
                <div className="py-24 text-center border-2 border-dashed border-slate-100 rounded-[3rem]">
                    <SearchIcon className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No categories found matching your search</p>
                </div>
            )}
        </div>
    );
}
