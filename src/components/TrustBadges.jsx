import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

export function TrustBadges() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const badges = [
        { icon: '🏆', label: 'ISO 13485:2016', sublabel: 'Certified' },
        { icon: '🌍', label: '500+', sublabel: 'Hospitals Served' },
        { icon: '✓', label: 'CE Marked', sublabel: 'EU Compliant' },
        { icon: '⚡', label: '2-3 Days', sublabel: 'Fast Delivery' },
        { icon: '🔒', label: '100%', sublabel: 'Sterility Assured' },
        { icon: '♻️', label: 'Eco-Friendly', sublabel: 'Manufacturing' }
    ];

    return (
        <div ref={ref} className="py-12 bg-slate-50/50 border-y border-slate-100">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={badge.label}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-4 bg-white rounded-2xl border border-slate-100 hover:border-medical-200 hover:shadow-md transition-all"
                        >
                            <div className="text-3xl mb-2">{badge.icon}</div>
                            <p className="font-black text-slate-900 text-sm uppercase tracking-tight">{badge.label}</p>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{badge.sublabel}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function AnimatedCounter({ end, duration = 2, suffix = '' }) {
    const [ref, inView] = useInView({
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
        <span ref={ref}>
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
