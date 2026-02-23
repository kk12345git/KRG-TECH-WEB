import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    CheckBadgeIcon,
    GlobeAsiaAustraliaIcon,
    TruckIcon,
    ShieldCheckIcon,
    BeakerIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';

// Simplified intersection observer hook
function useInView(options = {}) {
    const [ref, setRef] = useState(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (options.triggerOnce) {
                        observer.disconnect();
                    }
                }
            },
            { threshold: options.threshold || 0.1 }
        );

        observer.observe(ref);

        return () => observer.disconnect();
    }, [ref, options.threshold, options.triggerOnce]);

    return [setRef, inView];
}

const badges = [
    { icon: <CheckBadgeIcon className="w-8 h-8" />, label: 'ISO 13485:2016', sublabel: 'Certified Excellence' },
    { icon: <GlobeAsiaAustraliaIcon className="w-8 h-8" />, label: '500+ Hubs', sublabel: 'Global Network' },
    { icon: <SparklesIcon className="w-8 h-8" />, label: 'CE Marked', sublabel: 'EU MDR Compliant' },
    { icon: <TruckIcon className="w-8 h-8" />, label: 'Clinical Logic', sublabel: '2-3 Day Fulfillment' },
    { icon: <ShieldCheckIcon className="w-8 h-8" />, label: '100% Sterile', sublabel: 'ETO Validated' },
    { icon: <BeakerIcon className="w-8 h-8" />, label: 'SMS Barrier', sublabel: 'Level 4 Tech' }
];

export function TrustBadges() {
    return (
        <div className="py-20 bg-white border-y border-slate-100">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={badge.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-400 group-hover:text-medical-700 group-hover:bg-medical-50 transition-all duration-500">
                                {badge.icon}
                            </div>
                            <p className="font-black text-slate-900 text-xs uppercase tracking-[0.2em] mb-1">{badge.label}</p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">{badge.sublabel}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function AnimatedCounter({ end, duration = 2, suffix = '' }) {
    const [setRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let startTime;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [inView, end, duration]);

    return (
        <span ref={setRef}>
            {count}{suffix}
        </span>
    );
}

export function CertificationBadge({ certification }) {
    const certData = {
        'ISO13485': {
            name: 'ISO 13485:2016',
            color: 'medical',
            icon: '🏅'
        },
        'CE': {
            name: 'CE Certified',
            color: 'blue',
            icon: '✓'
        },
        'ISO9001': {
            name: 'ISO 9001:2015',
            color: 'green',
            icon: '⚡'
        }
    };

    const cert = certData[certification];
    if (!cert) return null;

    return (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${cert.color}-50 border border-${cert.color}-200`}>
            <span className="text-lg">{cert.icon}</span>
            <span className={`text-xs font-black uppercase tracking-wider text-${cert.color}-700`}>{cert.name}</span>
        </div>
    );
}
