import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChatBubbleLeftRightIcon,
    BeakerIcon,
    UserIcon,
    ChevronUpIcon,
    PhoneIcon
} from '@heroicons/react/24/outline';

const ACTIONS = [
    {
        id: 'whatsapp',
        name: 'Quick WhatsApp',
        icon: ChatBubbleLeftRightIcon,
        color: 'bg-green-500',
        href: 'https://wa.me/919176468297',
        description: 'Response in < 2 hrs'
    },
    {
        id: 'sample',
        name: 'Request Sample',
        icon: BeakerIcon,
        color: 'bg-medical-600',
        href: '/contact?type=sample',
        description: 'Free Clinical Trial'
    },
    {
        id: 'consult',
        name: 'Expert Consultation',
        icon: UserIcon,
        color: 'bg-slate-900',
        href: '/contact?type=consultation',
        description: 'Speak to Specialist'
    }
];

export default function FloatingLeadHub() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed bottom-8 left-8 z-[150] flex flex-col items-start gap-4">
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="flex flex-col gap-3 mb-2"
                    >
                        {ACTIONS.map((action) => (
                            <a
                                key={action.id}
                                href={action.href}
                                className="group flex items-center gap-4 transition-all"
                            >
                                <div className={`flex items-center justify-center w-14 h-14 rounded-2xl text-white shadow-xl ${action.color} group-hover:scale-110 transition-transform`}>
                                    <action.icon className="w-7 h-7" />
                                </div>
                                <div className="bg-white/80 backdrop-blur-md border border-slate-100 py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">{action.name}</p>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{action.description}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${isExpanded ? 'bg-slate-900 rotate-180' : 'bg-medical-700'}`}
            >
                {isExpanded ? (
                    <ChevronUpIcon className="w-8 h-8 rotate-180" />
                ) : (
                    <div className="relative">
                        <PhoneIcon className="w-8 h-8" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-ping" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                )}
            </button>
        </div>
    );
}
