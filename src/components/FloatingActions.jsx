"use client";

import { useState, useEffect } from 'react';
import { MessageSquare, Phone, Mail, X, ArrowUp } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

export function FloatingActions() {
    const [isOpen, setIsOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const actions = [
        { icon: Phone, label: 'Emergency Support', href: 'tel:+919176468297', color: 'bg-green-600' },
        { icon: Mail, label: 'Bulk Quote Inquiry', href: 'mailto:director@krgmedifabb.com', color: 'bg-blue-600' },
        { icon: MessageSquare, label: 'Chat with Specialist', onClick: () => alert('Live support coming soon!'), color: 'bg-medical-600' },
    ];

    return (
        <div className="fixed bottom-8 right-8 z-[500] flex flex-col items-end gap-4">
            {/* Scroll Top */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-white text-slate-900 rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-100"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Action Menu */}
            <div className="relative">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            className="absolute bottom-16 right-0 mb-4 flex flex-col items-end gap-3 min-w-[200px]"
                        >
                            {actions.map((action, idx) => (
                                <motion.a
                                    key={idx}
                                    href={action.href}
                                    onClick={action.onClick}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <span className="bg-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-slate-900 shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {action.label}
                                    </span>
                                    <div className={`p-4 ${action.color} text-white rounded-2xl shadow-2xl hover:scale-110 transition-transform`}>
                                        <action.icon className="w-6 h-6" />
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-16 h-16 rounded-[2rem] shadow-[0_20px_50px_rgba(0,85,164,0.3)] flex items-center justify-center transition-all duration-500 overflow-hidden ${isOpen ? 'bg-slate-900 rotate-90' : 'bg-medical-700'
                        }`}
                >
                    {isOpen ? (
                        <X className="w-8 h-8 text-white" />
                    ) : (
                        <MessageSquare className="w-8 h-8 text-white" />
                    )}
                </button>
            </div>
        </div>
    );
}
