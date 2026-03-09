"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bars3Icon,
    XMarkIcon,
    UserCircleIcon,
    ArrowRightOnRectangleIcon,
    ChevronDownIcon,
    PhoneIcon,
    EnvelopeIcon,
    CheckBadgeIcon,
    DocumentArrowDownIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Products',
        href: '/products',
        dropdown: [
            { name: 'Disposable Surgeon Gowns & Isolation Gowns', href: '/category/surgeon-gowns' },
            { name: 'Disposable Patient Gowns and Patient Wears', href: '/category/patient-wears' },
            { name: 'Disposable Bed Sheets, Covering Sheets and Pillow Covers', href: '/category/bed-sheets' },
            { name: 'Disposable Operation Theatre Sheets', href: '/category/ot-sheets' },
            { name: 'Disposable Sterilization Wrapping Sheets', href: '/category/sterilization-wraps' },
            { name: 'General Disposable Items', href: '/category/general-disposables' },
            { name: 'Specific Customized Disposable Surgical Drape Packs & Kits', href: '/category/customized-packs' },
            { name: 'View Entire Catalog', href: '/products' }
        ]
    },
    { name: 'About Us', href: '/about' },
    { name: 'Quality', href: '/quality' },
    { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, logout, isAuthenticated } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const darkPages = ['/about', '/customization'];
    const isDarkPage = darkPages.includes(pathname);

    const lastScrollY = useRef(0);

    let navTextColor = isScrolled
        ? 'text-slate-600 hover:text-medical-700'
        : (isDarkPage ? 'text-white/90 hover:text-white' : 'text-slate-800 hover:text-medical-700');

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const diff = currentY - lastScrollY.current;

            setIsScrolled(currentY > 40);

            if (diff > 80 && currentY > 300) {
                setIsVisible(false);
                setDropdownOpen(false);
            } else if (diff < -30) {
                setIsVisible(true);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
            {/* Top Bar - Trust & Contact */}
            <div className={`w-full transition-all duration-500 pointer-events-auto bg-slate-900 border-b border-white/10 ${isScrolled ? '-translate-y-full absolute opacity-0' : 'translate-y-0 opacity-100 relative'}`}>
                <div className="mx-auto max-w-7xl px-4 md:px-8 py-2 md:py-2.5 flex justify-center md:justify-between items-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">
                    <div className="hidden md:flex items-center gap-6">
                        <span className="flex items-center gap-2 text-medical-400">
                            <CheckBadgeIcon className="w-4 h-4" /> ISO 13485:2016 Certified
                        </span>
                        <a href="tel:+919820021460" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <PhoneIcon className="w-4 h-4 text-slate-400" /> +91 98200 21460
                        </a>
                    </div>
                    <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-6">
                        <a href="mailto:info@krgmedifabb.com" className="hover:text-white transition-colors flex items-center gap-2">
                            <EnvelopeIcon className="w-4 h-4 text-slate-400" /> info@krgmedifabb.com
                        </a>
                        <Link href={isAuthenticated ? "/procurement" : "/login"} className="flex items-center gap-2 text-medical-400 hover:text-medical-300 transition-colors">
                            <UserCircleIcon className="w-4 h-4" /> {isAuthenticated ? "Portal" : "Client Login"}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className={`px-4 md:px-6 transition-all duration-500 ${isScrolled ? 'pt-4' : 'pt-4'}`}>
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{
                        y: isVisible ? 0 : -120,
                        opacity: isVisible ? 1 : 0,
                    }}
                    style={{ willChange: 'transform, opacity' }}
                    className={`mx-auto max-w-7xl h-[72px] rounded-2xl flex items-center justify-between px-6 pointer-events-auto transition-all duration-500 ${isScrolled
                        ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-slate-200/50'
                        : isDarkPage
                            ? 'bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-lg'
                            : 'bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-sm'
                        }`}
                    aria-label="Global"
                >
                    {/* Logo Section */}
                    <div className="flex shrink-0">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                            <motion.div
                                className="flex flex-col leading-[0.7] items-start"
                                whileHover={{ scale: 1.02 }}
                            >
                                <span className="text-3xl md:text-4xl font-semibold tracking-tighter text-brand-red uppercase font-brand">KRG</span>
                                <span className={`text-[22px] md:text-[28px] font-semibold tracking-tight font-medifabb transition-colors ${!isScrolled && isDarkPage ? 'text-white' : 'text-brand-green'}`}>Medifabb</span>
                            </motion.div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${!isScrolled && isDarkPage ? 'text-white' : 'text-slate-900'}`}
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Desktop Links (Centered Layout) */}
                    <div className="hidden lg:flex lg:gap-x-8 items-center pt-1" onMouseLeave={() => setHoveredLink(null)}>
                        {navigation.map((item) => {
                            const isActive = pathname === item.href || (item.dropdown && pathname.startsWith(item.href));

                            return (
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => {
                                        setHoveredLink(item.name);
                                        if (item.dropdown) setDropdownOpen(true);
                                    }}
                                    onMouseLeave={() => {
                                        if (item.dropdown) setDropdownOpen(false);
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.15em] transition-all px-3 py-2 ${navTextColor}`}
                                    >
                                        <span className="relative z-10">{item.name}</span>
                                        {item.dropdown && (
                                            <ChevronDownIcon className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen && hoveredLink === item.name ? 'rotate-180' : ''}`} />
                                        )}

                                        {/* Hover Pill Background */}
                                        {(hoveredLink === item.name || isActive) && (
                                            <motion.span
                                                layoutId="nav-pill"
                                                className={`absolute inset-0 rounded-lg -z-0 ${isScrolled ? 'bg-slate-100' : isDarkPage ? 'bg-white/10' : 'bg-slate-900/5'}`}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                            />
                                        )}
                                        {/* Active Dot */}
                                        {isActive && (
                                            <motion.span
                                                layoutId="active-dot"
                                                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-medical-500 rounded-full"
                                            />
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.dropdown && (
                                        <AnimatePresence>
                                            {dropdownOpen && hoveredLink === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50"
                                                >
                                                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-2">
                                                        {item.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="block px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-medical-700 hover:bg-slate-50 rounded-xl transition-all"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Section */}
                    <div className="hidden lg:flex shrink-0 items-center">
                        <a
                            href="/pdf/KRG_Medifabb_Catalog.pdf"
                            target="_blank"
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg hover:scale-105 active:scale-95 border ${!isScrolled && isDarkPage
                                ? 'bg-white text-medical-800 border-white hover:bg-slate-100 shadow-white/20'
                                : 'bg-medical-700 text-white border-medical-700 hover:bg-medical-800 shadow-medical-700/20'
                                }`}
                        >
                            <DocumentArrowDownIcon className="w-4 h-4" />
                            Download Catalog
                        </a>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lg:hidden fixed inset-0 z-[200] p-4 pointer-events-auto"
                    >
                        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)}></div>
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative bg-slate-900 border border-white/10 h-full rounded-[2.5rem] p-8 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                    <div className="flex flex-col leading-[0.7] items-start">
                                        <span className="text-3xl font-semibold tracking-tighter text-brand-red uppercase font-brand">KRG</span>
                                        <span className="text-[22px] font-semibold tracking-tight text-white font-medifabb">Medifabb</span>
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

                            <div className="flex flex-col gap-8 overflow-y-auto pb-8">
                                {navigation.map((item, idx) => (
                                    <motion.div key={item.name} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.05 }}>
                                        <Link
                                            href={item.href}
                                            className={`text-2xl font-black uppercase tracking-tight transition-colors ${pathname === item.href ? 'text-medical-400' : 'text-white/70 hover:text-white'}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>

                                        {/* Mobile Submenu render */}
                                        {item.dropdown && (
                                            <div className="mt-4 flex flex-col gap-3 pl-4 border-l-2 border-white/10">
                                                {item.dropdown.map(sub => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="text-white/50 text-sm font-bold uppercase tracking-widest hover:text-medical-400"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto flex flex-col gap-4 pt-4 border-t border-white/10">
                                <a
                                    href="/pdf/KRG_Medifabb_Catalog.pdf"
                                    target="_blank"
                                    className="block w-full text-center py-4 bg-white rounded-2xl text-slate-900 font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <DocumentArrowDownIcon className="w-5 h-5" /> Download Catalog
                                </a>
                                {isAuthenticated && (
                                    <button
                                        onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                                        className="w-full py-4 border border-white/10 rounded-2xl text-white/50 font-black uppercase tracking-widest"
                                    >
                                        Sign Out
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
