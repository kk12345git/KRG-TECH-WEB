"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ShoppingBagIcon, TrashIcon, MinusIcon, PlusIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartDrawer() {
    const { 
        cartItems, 
        removeFromCart, 
        updateQuantity, 
        isCartOpen, 
        setIsCartOpen,
        cartCount 
    } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[200]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[201] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShoppingBagIcon className="w-6 h-6 text-medical-700" />
                                <h2 className="text-xl font-black uppercase tracking-tighter">Selection ({cartCount})</h2>
                            </div>
                            <button 
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-slate-50 rounded-xl transition-colors"
                            >
                                <XMarkIcon className="w-6 h-6 text-slate-400" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-8">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                    <ShoppingBagIcon className="w-16 h-16 mb-4" />
                                    <p className="text-sm font-black uppercase tracking-widest">Your selection is empty</p>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-6 group">
                                        <div className="w-24 h-24 rounded-2xl bg-slate-50 overflow-hidden relative shrink-0 border border-slate-100">
                                            <Image 
                                                src={item.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=200'} 
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h4 className="text-[10px] font-black uppercase tracking-tight mb-1 text-slate-900 line-clamp-1">{item.title}</h4>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.material}</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 bg-slate-50 p-1 rounded-lg">
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-white rounded-md transition-colors"
                                                    >
                                                        <MinusIcon className="w-3 h-3 text-slate-400" />
                                                    </button>
                                                    <span className="text-xs font-black w-4 text-center">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-white rounded-md transition-colors"
                                                    >
                                                        <PlusIcon className="w-3 h-3 text-slate-400" />
                                                    </button>
                                                </div>
                                                <button 
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                                                >
                                                    <TrashIcon className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-8 bg-slate-50 border-t border-slate-100 italic space-y-6">
                                <div className="text-center">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Institutional Procurement</p>
                                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Proceeding will create a booking inquiry for these specific CLINICAL-GRADE medical supplies.</p>
                                </div>
                                <Link 
                                    href="/booking" 
                                    onClick={() => setIsCartOpen(false)}
                                    className="w-full bg-medical-700 text-white py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-medical-700/20 hover:bg-medical-900 transition-all flex items-center justify-center gap-3"
                                >
                                    Proceed to Booking Selection
                                    <ArrowRightIcon className="w-4 h-4" />
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
