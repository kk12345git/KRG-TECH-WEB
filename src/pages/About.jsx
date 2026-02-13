import { motion } from 'framer-motion';
import { ShieldCheckIcon, BeakerIcon, GlobeAsiaAustraliaIcon, TrophyIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';

const stats = [
    { label: 'Founded', value: '2012' },
    { label: 'Markets', value: '50+' },
    { label: 'Sterile Units', value: '15+' },
    { label: 'Quality Certs', value: 'ISO 13485' },
];

const values = [
    {
        title: 'Clinical Precision',
        desc: 'Every fiber and every fold is engineered to meet the highest standards of sterile integrity.',
        icon: BeakerIcon
    },
    {
        title: 'Global Trust',
        desc: 'Partnering with premium hospital networks across Europe, MENA, and Asia-Pacific.',
        icon: GlobeAsiaAustraliaIcon
    },
    {
        title: 'Quality Absolute',
        desc: 'Our manufacturing lines operate under rigorous ISO and WHO-GMP compliance protocols.',
        icon: ShieldCheckIcon
    },
    {
        title: 'Innovation Lead',
        desc: 'Pioneering new SMS fabric blends that offer superior barrier protection and surgeon comfort.',
        icon: TrophyIcon
    }
];

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="About Us"
                description="Learn about KRG Medifabb's journey from a local manufacturer to a global leader in surgical disposables and sterile medical textiles."
            />

            {/* Hero Section */}
            <div className="bg-slate-900 py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 h-full">
                        {[...Array(24)].map((_, i) => (
                            <div key={i} className="border-r border-b border-white/20"></div>
                        ))}
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-8 lg:px-16 relative z-10">
                    <motion.div
                        className="max-w-3xl"
                    >
                        <h2 className="text-medical-400 font-bold uppercase tracking-widest text-sm mb-6">Our Legacy</h2>
                        <h1 className="text-5xl font-black sm:text-7xl tracking-tighter uppercase mb-8 leading-[0.9]">
                            Defining the <br /><span className="text-medical-500 text-gradient">Sterile Standard.</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                            Founded in 2012, KRG Medifabb has evolved from a specialized textile unit into a global powerhouse for surgical disposables.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Stats */}
            <div className="mx-auto max-w-7xl px-8 lg:px-16 -mt-16 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-white p-8 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 text-center"
                        >
                            <p className="text-3xl font-black text-medical-700 mb-1">{stat.value}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mission Section */}
            <div className="mx-auto max-w-7xl px-8 lg:px-16 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="bg-medical-50 p-12 rounded-[3.5rem] border border-medical-100 relative">
                            <div className="absolute -top-6 -left-6 bg-medical-700 text-white w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl shadow-medical-700/30">M</div>
                            <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-6">Our Mission</h3>
                            <p className="text-lg text-slate-600 leading-relaxed italic">
                                "To empower clinical teams worldwide with high-performance disposables that ensure absolute safety, enabling them to focus on what matters most—saving lives."
                            </p>
                        </div>
                        <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white relative">
                            <div className="absolute -top-6 -right-6 bg-medical-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl shadow-medical-500/30">V</div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Our Vision</h3>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                To become the world's most trusted partner for customized surgical packs, driving innovation in medical fabric science for a safer tomorrow.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-slate-50 hover:border-medical-100 transition-all hover:shadow-xl hover:shadow-medical-900/5">
                                <value.icon className="w-10 h-10 text-medical-600 mb-6" />
                                <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4">{value.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Global Reach */}
            <div className="bg-slate-50 py-32 border-y border-gray-100">
                <div className="mx-auto max-w-7xl px-8 lg:px-16 text-center">
                    <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-8">A Global Legacy in Motion</h2>
                    <p className="max-w-2xl mx-auto text-slate-500 leading-relaxed mb-16">
                        From our state-of-the-art manufacturing hub in India, we ship to over 50 countries, maintaining 100% sterile compliance every single time.
                    </p>
                    <div className="aspect-video bg-slate-200 rounded-[3rem] overflow-hidden relative shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1581578731522-aa2e3347ca3e?auto=format&fit=crop&q=80&w=1200"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            alt="Manufacturing Excellence"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <div className="absolute bottom-12 left-12 text-left">
                            <p className="text-white text-3xl font-black uppercase tracking-tighter">Manufactured for <br />the Future.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
