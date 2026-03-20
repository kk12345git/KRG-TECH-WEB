"use client";

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, CheckBadgeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import SEO from '@/components/SEO';
import { submitLeads } from '@/lib/actions'; // Reusing existing leads action if suitable or will create booking specific

export default function BookingPage() {
    const { cartItems, cartCount, clearCart } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        hospital: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const bookingData = {
                ...formData,
                items: cartItems.map(item => ({
                    id: item.id,
                    name: item.title,
                    quantity: item.quantity
                })),
                type: 'BOOKING_INQUIRY'
            };

            const result = await submitLeads(bookingData);
            
            if (result && result.success) {
                setIsSuccess(true);
                clearCart();
            } else {
                alert("Submission failed. Please check your details and try again.");
            }
        } catch (error) {
            console.error("Booking submission failed", error);
            alert("Submission failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (cartCount === 0 && !isSuccess) {
        return (
            <div className="min-h-screen bg-white pt-48 pb-24 text-center px-6">
                <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 text-slate-900 leading-none">Your Selection is Empty</h1>
                <p className="text-slate-500 mb-12 max-w-md mx-auto italic">Browse our clinical catalog to add items for procurement booking.</p>
                <Link href="/products" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-medical-700 hover:scale-105 transition-transform">
                    <ArrowLeftIcon className="w-4 h-4" /> Go to Catalog
                </Link>
            </div>
        );
    }

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-white pt-48 pb-24 text-center px-6">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-100">
                    <CheckBadgeIcon className="w-10 h-10" />
                </div>
                <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 text-slate-900 leading-[0.85]">Booking Inquiry Received</h1>
                <p className="text-slate-500 mb-16 max-w-2xl mx-auto italic text-lg leading-relaxed">
                    Thank you for your interest. Our institutional relations team will contact you within 24 clinical hours to finalize specifications and procurement terms.
                </p>
                <div className="flex justify-center gap-8">
                    <Link href="/" className="text-xs font-black uppercase tracking-widest text-medical-700 hover:tracking-[0.2em] transition-all">Back to Home</Link>
                    <Link href="/products" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-all">Continue Browsing</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-48 pb-32">
            <SEO title="Confirm Booking Selection" />
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    
                    {/* Left: Summary */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="h-px w-10 bg-medical-700"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-700">Institutional Procurement</span>
                        </div>
                        <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-slate-900 uppercase leading-[0.85] mb-12">Confirm Selection</h1>
                        
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex gap-8 items-center shadow-sm">
                                    <div className="w-24 h-24 bg-slate-50 rounded-2xl overflow-hidden shrink-0 border border-slate-50">
                                        <Image src={item.image} alt={item.title} width={96} height={96} className="object-cover h-full w-full" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-black uppercase tracking-tight mb-2 leading-none">{item.title}</h3>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4 italic leading-none">{item.material}</p>
                                        <div className="inline-flex py-1 px-3 bg-slate-50 rounded-lg text-[10px] font-black uppercase text-slate-600">
                                            Qty: {item.quantity} Units
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 sticky top-48">
                        <h2 className="text-2xl font-black uppercase tracking-tighter mb-10 leading-none">Institutional Details</h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                                    <input 
                                        required
                                        type="text" 
                                        className="w-full h-16 bg-slate-50 rounded-2xl px-6 border-transparent focus:ring-medical-700 focus:border-medical-700 transition-all font-bold text-slate-900"
                                        placeholder="Dr. John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Inquiry Phone</label>
                                    <input 
                                        required
                                        type="tel" 
                                        className="w-full h-16 bg-slate-50 rounded-2xl px-6 border-transparent focus:ring-medical-700 focus:border-medical-700 transition-all font-bold text-slate-900"
                                        placeholder="+91 XXX XXX XXXX"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Institutional Email</label>
                                <input 
                                    required
                                    type="email" 
                                    className="w-full h-16 bg-slate-50 rounded-2xl px-6 border-transparent focus:ring-medical-700 focus:border-medical-700 transition-all font-bold text-slate-900"
                                    placeholder="procurement@hospital.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Hospital / Institution Name</label>
                                <input 
                                    required
                                    type="text" 
                                    className="w-full h-16 bg-slate-50 rounded-2xl px-6 border-transparent focus:ring-medical-700 focus:border-medical-700 transition-all font-bold text-slate-900"
                                    placeholder="MediCare Multi-Specialty"
                                    value={formData.hospital}
                                    onChange={(e) => setFormData({...formData, hospital: e.target.value})}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Technical Requirements (Optional)</label>
                                <textarea 
                                    rows={4}
                                    className="w-full bg-slate-50 rounded-3xl px-6 py-6 border-transparent focus:ring-medical-700 focus:border-medical-700 transition-all font-bold text-slate-900 resize-none"
                                    placeholder="Mention specific GSM, size variants or customization needs..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>

                            <button 
                                disabled={isSubmitting}
                                type="submit"
                                className={`w-full h-24 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs transition-all shadow-xl flex items-center justify-center gap-4 ${isSubmitting ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-medical-700 text-white hover:bg-medical-900 shadow-medical-700/20'}`}
                            >
                                {isSubmitting ? 'Processing Audit...' : (
                                    <>
                                        Submit Procurement Booking
                                        <PaperAirplaneIcon className="w-5 h-5 -rotate-45" />
                                    </>
                                )}
                            </button>
                            
                            <p className="text-center text-[9px] font-black uppercase tracking-widest text-slate-300 leading-relaxed italic px-8">
                                Submitting this form creates a clinical lead. KRG Medifabb SLA ensures rapid response and technical feasibility assessment.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
