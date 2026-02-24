"use client";

import { motion } from 'framer-motion';
import {
    PlusIcon,
    SearchIcon,
    FilterIcon,
    PencilIcon,
    Trash2Icon,
    ExternalLinkIcon,
    XIcon,
    CheckIcon
} from 'lucide-react';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';

export default function AdminProductsPage() {
    const [products, setProducts] = useState(productsData);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const filteredProducts = useMemo(() => {
        return products.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.id.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);

    const handleOpenModal = (product = null) => {
        setEditingProduct(product || {
            id: '',
            name: '',
            category: categoriesData[0]?.id || '',
            material: '',
            size: '',
            sterilization: 'Sterile (ETO)',
            description: '',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600'
        });
        setIsModalOpen(true);
    };

    const handleSave = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        if (editingProduct?.id && products.some(p => p.id === editingProduct.id)) {
            setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...data } : p));
        } else {
            setProducts([{ ...data, id: data.id || `prod-${Date.now()}` }, ...products]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-1">
                        Product <span className="text-medical-600">Archive</span>
                    </h1>
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Storefront Inventory Management</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-medical-700 hover:bg-medical-900 text-white px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all flex items-center gap-2 shadow-xl shadow-medical-700/20 active:scale-95"
                >
                    <PlusIcon className="w-5 h-5" />
                    Add New Product
                </button>
            </div>

            {/* Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 relative w-full">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search products by name or category..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-50 border-none rounded-xl pl-12 pr-4 h-12 text-sm focus:ring-2 focus:ring-medical-500/20 transition-all font-medium"
                    />
                </div>
            </div>

            {/* Product Table */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100">
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Product Entry</th>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Specification</th>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Logistics</th>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filteredProducts.map((product) => (
                            <motion.tr
                                key={product.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="hover:bg-slate-50/50 transition-colors group"
                            >
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-black text-slate-900 uppercase tracking-tight leading-none mb-1">
                                                {product.name}
                                            </div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID: {product.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold text-slate-700">{product.material}</span>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-medical-600 italic">
                                            {product.sterilization}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">MOQ: {product.moq}</span>
                                        <span className="text-xs font-bold text-slate-900">{product.size}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => handleOpenModal(product)}
                                            className="p-2.5 rounded-lg text-slate-400 hover:text-medical-600 hover:bg-medical-50 transition-all"
                                        >
                                            <PencilIcon className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="p-2.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
                                        >
                                            <Trash2Icon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* CRUD Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setIsModalOpen(false)}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
                    ></motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100"
                    >
                        <form onSubmit={handleSave} className="p-10 md:p-14">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                                        {editingProduct?.id ? 'Modify Product' : 'New Product Entry'}
                                    </h2>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">KRG Institutional Database</p>
                                </div>
                                <button type="button" onClick={() => setIsModalOpen(false)} className="p-3 text-slate-400 hover:text-slate-900 transition-colors">
                                    <XIcon className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 italic">Technical Name</label>
                                        <input
                                            name="name"
                                            defaultValue={editingProduct?.name}
                                            required
                                            className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-medical-500/50 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 italic">Composite Material</label>
                                        <input
                                            name="material"
                                            defaultValue={editingProduct?.material}
                                            required
                                            className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-medical-500/50 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 italic">Sterilization Protocol</label>
                                        <select
                                            name="sterilization"
                                            defaultValue={editingProduct?.sterilization}
                                            className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-medical-500/50 outline-none"
                                        >
                                            <option>Sterile (ETO)</option>
                                            <option>Non-Sterile</option>
                                            <option>Gamma Sterile</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 italic">Unique Entry ID</label>
                                        <input
                                            name="id"
                                            defaultValue={editingProduct?.id}
                                            required
                                            readOnly={editingProduct?.id !== ''}
                                            className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-medical-500/50 outline-none read-only:opacity-50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 italic">Institutional MOQ</label>
                                        <input
                                            name="moq"
                                            defaultValue={editingProduct?.moq}
                                            required
                                            className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-medical-500/50 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 italic">Operational Size</label>
                                        <input
                                            name="size"
                                            defaultValue={editingProduct?.size}
                                            required
                                            className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-medical-500/50 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-medical-700 text-white font-black py-5 rounded-2xl uppercase tracking-[0.3em] text-xs hover:bg-medical-900 transition-all shadow-xl shadow-medical-700/20 active:scale-95 flex items-center justify-center gap-2">
                                <CheckIcon className="w-5 h-5" />
                                Commit to Database
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </div>
    );
}

import { cn } from '@/lib/utils';
