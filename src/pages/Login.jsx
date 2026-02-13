import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldCheckIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, loading } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
            navigate('/procurement');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pt-32">
            <SEO title="Secure Login | KRG Medifabb B2B" />

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-medical-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-medical-700/20">
                        <ShieldCheckIcon className="w-10 h-10" />
                    </div>
                </div>
                <h2 className="mt-6 text-center text-5xl font-semibold text-brand-red tracking-tighter uppercase font-brand">
                    KRG <br />
                    <span className="text-brand-green text-4xl font-semibold tracking-tight font-medifabb">Medifabb</span>
                </h2>
                <p className="mt-6 text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">
                    Secure B2B Portal
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white py-12 px-10 shadow-2xl rounded-[3rem] border border-slate-100 mx-4 sm:mx-0"
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50 border border-red-100 text-red-600 text-[10px] font-black uppercase tracking-widest p-4 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 px-1">
                                Corporate Email
                            </label>
                            <div className="relative">
                                <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-100 bg-slate-50 text-sm font-bold focus:ring-2 focus:ring-medical-500 outline-none transition-all"
                                    placeholder="manager@hospital.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 px-1">
                                Password
                            </label>
                            <div className="relative">
                                <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-100 bg-slate-50 text-sm font-bold focus:ring-2 focus:ring-medical-500 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-1">
                            <div className="flex items-center">
                                <input type="checkbox" className="h-4 w-4 text-medical-600 focus:ring-medical-500 border-slate-300 rounded" />
                                <label className="ml-2 block text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                    Remember Me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="text-[9px] font-black text-medical-700 uppercase tracking-widest hover:text-medical-600">
                                    Forgot?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex justify-center py-5 px-4 rounded-2xl shadow-xl shadow-medical-700/20 text-xs font-black uppercase tracking-widest text-white bg-medical-700 hover:bg-medical-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medical-500 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Authorizing...' : 'Enter Portal'}
                        </button>
                    </form>

                    <div className="mt-10 pt-10 border-t border-slate-50 text-center">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">
                            New Hospital Client?
                        </p>
                        <Link to="/contact" className="text-[10px] font-black text-medical-700 hover:text-medical-800 uppercase tracking-[0.2em]">
                            Request Corporate Access
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
