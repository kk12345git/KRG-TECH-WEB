import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
// import logo from '../assets/logo.png';

const navigation = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Customization', href: '/customization' },
    { name: 'Quality', href: '/quality' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Academy', href: '/academy' },
    { name: 'Careers', href: '/careers' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 pointer-events-none">
            <nav className="mx-auto max-w-7xl glass h-16 rounded-2xl flex items-center justify-between px-6 pointer-events-auto" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                        <div className="flex flex-col leading-[0.7] items-start">
                            <span className="text-4xl font-semibold tracking-tighter text-brand-red uppercase font-brand">KRG</span>
                            <span className="text-[28px] font-semibold tracking-tight text-brand-green font-medifabb">Medifabb</span>
                        </div>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-10 items-center">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-medical-700 transition-all relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-700 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}

                    <div className="h-4 w-px bg-gray-200 mx-2"></div>

                    {isAuthenticated ? (
                        <Link
                            to="/procurement"
                            className="text-[10px] font-black uppercase tracking-widest text-medical-700 flex items-center gap-2"
                        >
                            <UserCircleIcon className="w-5 h-5" />
                            Portal
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-medical-700 transition-colors"
                        >
                            Client Login
                        </Link>
                    )}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
                    {isAuthenticated && (
                        <button
                            onClick={handleLogout}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            title="Sign Out"
                        >
                            <ArrowRightOnRectangleIcon className="w-5 h-5" />
                        </button>
                    )}
                    <Link
                        to="/contact"
                        className="hot-cta animate-pulse-glow bg-medical-700 px-6 py-2.5 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-medical-900 shadow-lg shadow-medical-700/20 transition-all hover:scale-105 active:scale-95"
                    >
                        Get Quote
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[200] p-6 pointer-events-auto">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
                    <div className="relative glass-dark h-full rounded-3xl p-8 flex flex-col">
                        <div className="flex items-center justify-between mb-12">
                            <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                <div className="flex flex-col leading-[0.7] items-start">
                                    <span className="text-3xl font-semibold tracking-tighter text-brand-red uppercase font-brand">KRG</span>
                                    <span className="text-[22px] font-semibold tracking-tight text-brand-green font-medifabb">Medifabb</span>
                                </div>
                            </Link>
                            <button
                                type="button"
                                className="p-2 text-white/50 hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <XMarkIcon className="h-8 w-8" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-2xl font-black text-white/70 hover:text-white transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                to={isAuthenticated ? "/procurement" : "/login"}
                                className="text-2xl font-black text-medical-400 hover:text-medical-300 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {isAuthenticated ? "Buyer Portal" : "Client login"}
                            </Link>
                        </div>
                        <div className="mt-auto flex flex-col gap-4">
                            {isAuthenticated && (
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setMobileMenuOpen(false);
                                    }}
                                    className="w-full py-5 border border-white/10 rounded-2xl text-white/50 font-black uppercase tracking-widest"
                                >
                                    Sign Out
                                </button>
                            )}
                            <Link
                                to="/contact"
                                className="block w-full text-center py-5 bg-medical-500 rounded-2xl text-white font-black uppercase tracking-widest shadow-xl"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Bulk Quote
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
