"use client";

import { useState } from 'react';
import { XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export function NewsletterSignup({ inline = false }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    if (inline) {
        return (
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === 'loading'}
                    className="flex-1 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none"
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-6 py-2 bg-medical-700 text-white rounded-lg font-bold hover:bg-medical-900 transition-colors disabled:opacity-50"
                >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>
        );
    }

    return (
        <div className="bg-gradient-to-br from-medical-700 to-medical-900 rounded-3xl p-12 text-white">
            <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Stay Updated</h3>
                <p className="text-medical-100 mb-8">
                    Get the latest updates on new products, industry insights, and exclusive offers for healthcare professionals.
                </p>

                {status === 'success' ? (
                    <div className="flex items-center justify-center gap-3 p-6 bg-green-500/20 border border-green-400 rounded-2xl">
                        <CheckCircleIcon className="w-6 h-6 text-green-400" />
                        <span className="font-bold">Thank you for subscribing!</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your work email"
                            required
                            disabled={status === 'loading'}
                            className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/40 focus:border-transparent outline-none"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="px-8 py-4 bg-white text-medical-700 rounded-xl font-black hover:bg-medical-50 transition-colors disabled:opacity-50 uppercase tracking-wider text-sm"
                        >
                            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                )}

                <p className="text-xs text-medical-200 mt-4">
                    We respect your privacy. Unsubscribe anytime.
                </p>
            </div>
        </div>
    );
}
