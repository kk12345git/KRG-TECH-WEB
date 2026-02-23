import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Bars3Icon, XMarkIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

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
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [hoveredLink, setHoveredLink] = useState(null);
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setIsScrolled(latest > 20);
    });

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 py-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: isVisible ? 0 : -100,
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.95
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className={`mx-auto max-w-7xl h-16 rounded-2xl flex items-center justify-between px-6 pointer-events-auto transition-all duration-500 ${isScrolled
                        ? 'glass-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20'
                        : 'bg-transparent'
                    }`}
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                        <motion.div
                            className="flex flex-col leading-[0.7] items-start"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="text-3xl md:text-4xl font-semibold tracking-tighter text-brand-red uppercase font-brand">KRG</span>
                            <span className="text-[22px] md:text-[28px] font-semibold tracking-tight text-brand-green font-medifabb">Medifabb</span>
                        </motion.div>
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${isScrolled ? 'text-slate-700' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-8 items-center pt-1" onMouseLeave={() => setHoveredLink(null)}>
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                onMouseEnter={() => setHoveredLink(item.name)}
                                className={`text-[10px] font-black uppercase tracking-widest transition-all relative px-3 py-2 group ${isScrolled ? 'text-slate-600' : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                <span className="relative z-10">{item.name}</span>
                                {(hoveredLink === item.name || isActive) && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className={`absolute inset-0 rounded-lg -z-0 ${isScrolled ? 'bg-slate-100' : 'bg-white/10'
                                            }`}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {isActive && (
                                    <motion.span
                                        layoutId="active-dot"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-medical-500 rounded-full"
                                    />
                                )}
                            </Link>
                        );
                    })}

                    <div className="h-4 w-px bg-gray-200/50 mx-2"></div>

                    {isAuthenticated ? (
                        <Link
                            to="/procurement"
                            className="text-[10px] font-black uppercase tracking-widest text-medical-700 flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                            <UserCircleIcon className="w-5 h-5" />
                            Portal
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className={`text-[10px] font-black uppercase tracking-widest transition-colors ${isScrolled ? 'text-slate-400 hover:text-medical-700' : 'text-white/40 hover:text-white'
                                }`}
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
                        className="hot-cta bg-medical-700 px-6 py-2.5 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-medical-900 shadow-lg shadow-medical-700/20 transition-all hover:ring-2 hover:ring-medical-400/50 hover:scale-105 active:scale-95"
                    >
                        Get Quote
                    </Link>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lg:hidden fixed inset-0 z-[200] p-4 pointer-events-auto"
                    >
                        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)}></div>
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative glass-dark h-full rounded-[2.5rem] p-8 flex flex-col border border-white/10"
                        >
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
                            <div className="flex flex-col gap-8">
                                {navigation.map((item, idx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            to={item.href}
                                            className={`text-3xl font-black transition-colors ${location.pathname === item.href ? 'text-medical-400' : 'text-white/70 hover:text-white'
                                                }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: navigation.length * 0.05 }}
                                >
                                    <Link
                                        to={isAuthenticated ? "/procurement" : "/login"}
                                        className="text-3xl font-black text-medical-400 hover:text-medical-300 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {isAuthenticated ? "Buyer Portal" : "Client login"}
                                    </Link>
                                </motion.div>
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
                                    className="block w-full text-center py-5 bg-medical-600 rounded-2xl text-white font-black uppercase tracking-widest shadow-xl active:scale-95 transition-transform"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Get Bulk Quote
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

