"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SparklesIcon,
    XMarkIcon,
    PaperAirplaneIcon,
    UserIcon,
    BeakerIcon,
    AcademicCapIcon,
    WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import ReactMarkdown from 'react-markdown';

const INITIAL_MESSAGE = {
    id: 'init',
    role: 'bot',
    content: "Hello! I'm **KRG Assist**, your surgical product specialist. How can I help you today? \n\nI can recommend products for specific procedures, check technical AAMI levels, or help with order inquiries.",
    timestamp: new Date()
};

const SUGGESTIONS = [
    { label: 'Recommend for Laparotomy', icon: AcademicCapIcon },
    { label: 'AAMI Level 4 Gowns', icon: BeakerIcon },
    { label: 'Request Wholesale Quote', icon: SparklesIcon },
];

export function KRGAssist() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([INITIAL_MESSAGE]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [leadMode, setLeadMode] = useState(false);
    const [leadForm, setLeadForm] = useState({ name: '', email: '', org: '' });
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping, leadMode]);

    const handleSend = async (text) => {
        const userText = text || input;
        if (!userText.trim()) return;

        const userMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: userText,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            let botResponse = "";
            const lowerText = userText.toLowerCase();

            const leadsTrigger = ['price', 'quote', 'cost', 'buy', 'purchase', 'sample', 'bulk', 'wholesale'];
            const wantsLead = leadsTrigger.some(word => lowerText.includes(word));

            if (wantsLead) {
                setLeadMode(true);
                botResponse = "I'd be happy to arrange a wholesale quote or physical samples for your organization. To get started, I just need a few quick details so our clinical specialist can reach out.";
            } else if (lowerText.includes('laparotomy')) {
                botResponse = "For a **Laparotomy**, I recommend our **KRG Universal Laparotomy Pack**. It includes high-absorbency abdominal drapes with integrated fluid collection pouches and AAMI Level 4 reinforced gowns for maximum protection.";
            } else if (lowerText.includes('aami')) {
                botResponse = "KRG Medifabb offers products ranging from **AAMI Level 1 to 4**. For high-fluid procedures (orthopedic/cardiac), our **Level 4** sterile gowns provide total barrier protection against blood-borne pathogens.";
            } else if (lowerText.includes('order')) {
                botResponse = "You can track your institutional orders in the **Procurement Gateway**. If you have an Order ID, I can pull up the real-time shipping status for you.";
            } else {
                botResponse = "I understand you're interested in our excellence in medical disposables. Could you specify if you need information on **Surgical Drapes**, **Protective Apparel**, or our **Customization Services**?";
            }

            const botMessage = {
                id: (Date.now() + 1).toString(),
                role: 'bot',
                content: botResponse,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleLeadSubmit = async (e) => {
        e.preventDefault();
        setIsTyping(true);
        await new Promise(r => setTimeout(r, 1000));

        const botMessage = {
            id: Date.now().toString(),
            role: 'bot',
            content: `Thank you, **${leadForm.name}**! I've logged your request for **${leadForm.org}**. Our clinical specialist will review your requirements and reach out at **${leadForm.email}** shortly.`,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
        setLeadMode(false);
        setIsTyping(false);
    };

    return (
        <div className="relative z-[200]">
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-24 right-8 z-[200] w-16 h-16 bg-medical-700 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-medical-700/30 hover:scale-110 active:scale-95 transition-all group ${isOpen ? 'scale-0' : 'scale-100'}`}
            >
                <SparklesIcon className="w-8 h-8" />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-8 right-8 z-[200] w-[400px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
                    >
                        <div className="bg-medical-700 p-6 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                    <SparklesIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-black text-xs uppercase tracking-widest text-white">KRG Assist</h3>
                                    <p className="text-[10px] font-bold text-medical-200 uppercase tracking-tighter">AI Surgical Advisor</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>

                        <div
                            ref={scrollRef}
                            className="flex-grow p-6 overflow-y-auto space-y-6 scroll-smooth"
                        >
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-medical-100 text-medical-700' : 'bg-slate-100 text-slate-500'}`}>
                                            {msg.role === 'user' ? <UserIcon className="w-5 h-5" /> : <SparklesIcon className="w-5 h-5" />}
                                        </div>
                                        <div className={`p-4 rounded-2xl text-[13px] leading-relaxed ${msg.role === 'user' ? 'bg-medical-700 text-white rounded-tr-none' : 'bg-slate-50 text-slate-700 rounded-tl-none'}`}>
                                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {leadMode && !isTyping && (
                                <motion.form
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    onSubmit={handleLeadSubmit}
                                    className="bg-slate-900 p-6 rounded-3xl space-y-4 shadow-xl"
                                >
                                    <p className="text-[10px] font-black uppercase tracking-widest text-medical-400 mb-2">Technical Consultation</p>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-white/10 border-0 rounded-xl py-3 px-4 text-white text-xs placeholder:text-white/30 focus:ring-2 focus:ring-medical-500 outline-none transition-all"
                                        value={leadForm.name}
                                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                                    />
                                    <input
                                        required
                                        type="email"
                                        placeholder="Institutional Email"
                                        className="w-full bg-white/10 border-0 rounded-xl py-3 px-4 text-white text-xs placeholder:text-white/30 focus:ring-2 focus:ring-medical-500 outline-none transition-all"
                                        value={leadForm.email}
                                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                                    />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Organization / Hospital"
                                        className="w-full bg-white/10 border-0 rounded-xl py-3 px-4 text-white text-xs placeholder:text-white/30 focus:ring-2 focus:ring-medical-500 outline-none transition-all"
                                        value={leadForm.org}
                                        onChange={(e) => setLeadForm({ ...leadForm, org: e.target.value })}
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-medical-600 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-medical-700 transition-colors shadow-lg shadow-medical-600/20"
                                    >
                                        Request Consultation
                                    </button>
                                </motion.form>
                            )}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="flex gap-3 bg-slate-50 p-4 rounded-2xl rounded-tl-none">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                                            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {messages.length < 3 && (
                            <div className="p-4 bg-slate-50/50 border-t border-slate-50">
                                <div className="flex flex-wrap gap-2">
                                    {SUGGESTIONS.map((s) => (
                                        <button
                                            key={s.label}
                                            onClick={() => handleSend(s.label)}
                                            className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-tight text-slate-500 hover:border-medical-500 hover:text-medical-700 transition-all"
                                        >
                                            <s.icon className="w-3 h-3" />
                                            {s.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="p-4 border-t border-slate-100">
                            <form
                                className="relative"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about procedures or specs..."
                                    className="w-full bg-slate-50 border-0 rounded-2xl py-4 pl-6 pr-14 text-[13px] font-medium focus:ring-2 focus:ring-medical-500 transition-all outline-none"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-medical-700 text-white rounded-xl flex items-center justify-center hover:bg-medical-800 transition-colors shadow-lg shadow-medical-700/20"
                                >
                                    <PaperAirplaneIcon className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
