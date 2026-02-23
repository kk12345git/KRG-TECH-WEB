import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import {
    UserGroupIcon,
    BeakerIcon,
    RocketLaunchIcon,
    HeartIcon,
    ArrowRightIcon,
    BriefcaseIcon,
    AcademicCapIcon,
    ShieldCheckIcon,
    PhoneIcon,
    EnvelopeIcon,
    LinkIcon,
    DocumentTextIcon,
    CheckCircleIcon,
    ArrowPathIcon,
    ArrowLeftIcon,
    CpuChipIcon,
    GlobeAltIcon,
    FireIcon,
    BoltIcon,
    SparklesIcon,
    CommandLineIcon
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import { useState, useEffect } from 'react';

const jobs = [
    {
        id: 1,
        title: 'Medical Textile Engineer',
        dept: 'R&D',
        type: 'Full-Time',
        location: 'Chennai',
        salary: 'Competitive',
        experience: '5+ Years',
        challenge: 'How would you optimize a 3-layer anti-bacterial weave for 50+ wash cycles?',
        impactTags: ['Material Science', 'Sterile Precision', 'Bio-Polymer Innovation']
    },
    {
        id: 2,
        title: 'Quality Assurance Specialist',
        dept: 'Production',
        type: 'Full-Time',
        location: 'Chennai',
        salary: 'Competitive',
        experience: '3+ Years',
        challenge: 'Describe your protocol for an unplanned particulate breach in a Class 100 Cleanroom.',
        impactTags: ['ISO Compliance', 'Zero-Defect Culture', 'Sterile Safety']
    },
    {
        id: 3,
        title: 'Export Sales Manager',
        dept: 'International Business',
        type: 'Full-Time',
        location: 'Remote / Dubai',
        salary: 'Performance Based',
        experience: '7+ Years',
        challenge: 'Identify the top 3 regulatory hurdles for surgical drapes in the MENA market.',
        impactTags: ['Global Trade', 'MENA Markets', 'Institutional Sales']
    },
];

const values = [
    { name: 'Clinical Precision', icon: BeakerIcon, desc: 'We engineer safety, not just fabrics. Every micron matters.' },
    { name: 'Hospital Centric', icon: HeartIcon, desc: 'We breathe the same air as the surgeons we serve.' },
    { name: 'Global Standard', icon: RocketLaunchIcon, desc: 'Export-grade quality is our baseline, not our ceiling.' },
    { name: 'Ethical Growth', icon: ShieldCheckIcon, desc: 'Sustainability and integrity in every sterile unit.' },
];

export default function Careers() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [step, setStep] = useState(1);
    const [isScanning, setIsScanning] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [activePersona, setActivePersona] = useState(null);

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', linkedin: '',
        currentOrg: '', experience: '', challengeResponse: '',
        impact: '', resume: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = async () => {
        setIsScanning(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsScanning(false);
        setStep(prev => prev + 1);
    };

    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate high-tier cloud verification
        await new Promise(resolve => setTimeout(resolve, 3000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const resetForm = () => {
        setSelectedJob(null);
        setStep(1);
        setIsSuccess(false);
        setActivePersona(null);
        setFormData({
            name: '', email: '', phone: '', linkedin: '',
            currentOrg: '', experience: '', challengeResponse: '',
            impact: '', resume: ''
        });
    };

    return (
        <div className="bg-white min-h-screen pt-32">
            <SEO
                title="Careers | Join the Medical Manufacturing Revolution"
                description="Join KRG Medifabb. We are looking for engineers, quality specialists, and global trade experts to redefine sterile clinical environments."
            />

            {/* Hero Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="h-px w-10 bg-medical-700"></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-medical-700">Join the Elite Hub</span>
                    </div>
                    <h1 className="text-6xl sm:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-slate-900">
                        Solve for <br /><span className="text-gradient">Life.</span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-medium">
                        KRG Medifabb isn't a factory; it's a sterile R&D frontier. We solve for the 1% margin that saves lives. Are you disciplined enough to join us?
                    </p>
                </div>
            </div>

            {/* Curiosity Section: The DNA of KRG */}
            <div className="py-32 bg-slate-900 text-white overflow-hidden relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="relative">
                            <h2 className="text-5xl font-black uppercase tracking-tighter text-medical-400 mb-8 italic">The Clinical <br />Dossier</h2>
                            <div className="space-y-12">
                                {[
                                    { icon: CpuChipIcon, title: 'Precision Obsession', desc: 'Our looms operate in 12-hour surgical sync' },
                                    { icon: GlobeAltIcon, title: 'Global Impact Hub', desc: 'Dubai to Chennai: One sterile standard' },
                                    { icon: CommandLineIcon, title: 'Digital QA Flow', desc: 'Every unit tracked via real-time ERP' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-12 h-12 bg-medical-500/10 rounded-xl flex items-center justify-center text-medical-400 border border-medical-500/20 group-hover:bg-medical-500 group-hover:text-white transition-all duration-500">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold uppercase tracking-widest text-[11px] mb-2 text-white">{item.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group cursor-pointer" onClick={() => document.getElementById('positions').scrollIntoView({ behavior: 'smooth' })}>
                            <div className="absolute inset-0 bg-medical-500/20 blur-[100px] rounded-full group-hover:bg-medical-500/40 transition-all"></div>
                            <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-xl relative z-10 hover:border-medical-500/50 transition-all text-center">
                                <SparklesIcon className="w-20 h-20 text-medical-400 mx-auto mb-8 animate-pulse" />
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Discover Your <br />Clinical Frontier</h3>
                                <p className="text-slate-400 mb-10 italic">Identify your role in our sterile revolution.</p>
                                <div className="inline-flex h-14 px-8 bg-medical-600 rounded-2xl items-center justify-center font-black text-xs uppercase tracking-widest hover:bg-medical-400 hover:text-slate-900 transition-all">
                                    Analyze Open Units
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open Positions */}
            <div id="positions" className="py-32 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4 underline decoration-medical-200 decoration-8 underline-offset-4">Sector Vacancies</h2>
                            <p className="text-slate-500 font-medium italic">High-performance roles for outlier candidates.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 max-w-4xl">
                        {jobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-100 hover:border-medical-200 transition-all group relative overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                                    <div className="flex items-center gap-8">
                                        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400 group-hover:text-medical-600 group-hover:bg-medical-50 transition-all duration-700 transform group-hover:rotate-[360deg]">
                                            <BriefcaseIcon className="w-10 h-10" />
                                        </div>
                                        <div>
                                            <div className="flex gap-2 mb-3">
                                                {job.impactTags.map(tag => (
                                                    <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-slate-50 text-slate-400 rounded-md group-hover:bg-medical-50 group-hover:text-medical-600">#{tag}</span>
                                                ))}
                                            </div>
                                            <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">{job.title}</h4>
                                            <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                <span className="flex items-center gap-1.5"><GlobeAltIcon className="w-3 h-3" /> {job.location}</span>
                                                <span className="text-slate-200">/</span>
                                                <span>{job.experience}</span>
                                                <span className="text-slate-200">/</span>
                                                <span className="text-medical-500">{job.salary}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedJob(job)}
                                        className="h-16 px-10 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-medical-700 hover:scale-105 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-slate-900/10"
                                    >
                                        Accept Challenge <BoltIcon className="w-5 h-5 text-medical-400" />
                                    </button>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-medical-500/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-medical-500/10 transition-all duration-700"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Application Section: The Digital Dossier */}
            <AnimatePresence>
                {selectedJob && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-6"
                    >
                        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={resetForm}></div>

                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.95 }}
                            className="bg-white w-full max-w-2xl rounded-[4rem] relative z-10 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[90vh] border border-white/20"
                        >
                            {isScanning && (
                                <div className="absolute inset-0 z-[210] pointer-events-none flex flex-col items-center justify-center bg-white/60 backdrop-blur-md">
                                    <motion.div
                                        animate={{
                                            y: [-100, 400],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="w-full h-1 bg-medical-500 shadow-[0_0_15px_#3b82f6]"
                                    />
                                    <div className="mt-8 flex flex-col items-center">
                                        <ArrowPathIcon className="w-10 h-10 text-medical-600 animate-spin mb-4" />
                                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-900">Synchronizing Credentials</p>
                                    </div>
                                </div>
                            )}

                            {!isSuccess ? (
                                <>
                                    <div className="p-10 md:p-14 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
                                        <div className="space-y-2">
                                            <div className="flex gap-1">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className={`h-1 rounded-full transition-all duration-700 ${step >= i ? 'w-8 bg-medical-500' : 'w-2 bg-slate-200'}`} />
                                                ))}
                                            </div>
                                            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Clinical Dossier</h3>
                                            <p className="text-medical-600 text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                                                Ref: {selectedJob.dept}-{selectedJob.id}00X
                                            </p>
                                        </div>
                                        <button onClick={resetForm} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">✕</button>
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-10 md:p-14 custom-scrollbar">
                                        <form onSubmit={handleSubmit} className="space-y-12">
                                            <AnimatePresence mode="wait">
                                                {step === 1 && (
                                                    <motion.div
                                                        key="step1"
                                                        initial={{ x: 20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        exit={{ x: -20, opacity: 0 }}
                                                        className="space-y-10"
                                                    >
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                                            <div className="space-y-3">
                                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] px-1">Candidate ID (Full Name)</label>
                                                                <input
                                                                    required
                                                                    name="name"
                                                                    value={formData.name}
                                                                    onChange={handleInputChange}
                                                                    className="w-full bg-slate-50 border-0 rounded-2xl p-6 text-sm font-bold focus:ring-2 focus:ring-medical-500 outline-none transition-all"
                                                                    placeholder="Enter Full Legal Name"
                                                                />
                                                            </div>
                                                            <div className="space-y-3">
                                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] px-1">Digital Anchor (Email)</label>
                                                                <input
                                                                    required
                                                                    type="email"
                                                                    name="email"
                                                                    value={formData.email}
                                                                    onChange={handleInputChange}
                                                                    className="w-full bg-slate-50 border-0 rounded-2xl p-6 text-sm font-bold focus:ring-2 focus:ring-medical-500 outline-none transition-all"
                                                                    placeholder="professional@domain.com"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                                            <div className="space-y-3">
                                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] px-1">Communication Channel</label>
                                                                <input
                                                                    required
                                                                    name="phone"
                                                                    value={formData.phone}
                                                                    onChange={handleInputChange}
                                                                    className="w-full bg-slate-50 border-0 rounded-2xl p-6 text-sm font-bold focus:ring-2 focus:ring-medical-500 outline-none transition-all"
                                                                    placeholder="+91 XXXXX XXXXX"
                                                                />
                                                            </div>
                                                            <div className="space-y-3">
                                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] px-1">Talent Network (LinkedIn)</label>
                                                                <input
                                                                    required
                                                                    name="linkedin"
                                                                    value={formData.linkedin}
                                                                    onChange={handleInputChange}
                                                                    className="w-full bg-slate-50 border-0 rounded-2xl p-6 text-sm font-bold focus:ring-2 focus:ring-medical-500 outline-none transition-all"
                                                                    placeholder="linkedin.com/..."
                                                                />
                                                            </div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={nextStep}
                                                            className="w-full h-20 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-[2rem] hover:bg-medical-600 shadow-2xl transition-all flex items-center justify-center gap-4 group"
                                                        >
                                                            Init Phase 02 <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                                        </button>
                                                    </motion.div>
                                                )}

                                                {step === 2 && (
                                                    <motion.div
                                                        key="step2"
                                                        initial={{ x: 20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        exit={{ x: -20, opacity: 0 }}
                                                        className="space-y-10"
                                                    >
                                                        <div className="bg-medical-50 border border-medical-100 p-8 rounded-3xl text-left">
                                                            <h4 className="text-[10px] font-black text-medical-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                                <BoltIcon className="w-4 h-4" /> The Sector Challenge
                                                            </h4>
                                                            <p className="text-medical-900 font-bold leading-relaxed italic mb-8">
                                                                "{selectedJob.challenge}"
                                                            </p>
                                                            <textarea
                                                                required
                                                                name="challengeResponse"
                                                                value={formData.challengeResponse}
                                                                onChange={handleInputChange}
                                                                rows={4}
                                                                className="w-full bg-white border-2 border-medical-200 rounded-2xl p-6 text-sm font-bold focus:border-medical-500 outline-none transition-all resize-none shadow-inner"
                                                                placeholder="Execute your response..."
                                                            />
                                                        </div>
                                                        <div className="flex gap-4">
                                                            <button
                                                                type="button"
                                                                onClick={prevStep}
                                                                className="px-10 h-20 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
                                                            >
                                                                Recalibrate
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={nextStep}
                                                                className="flex-1 h-20 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-[2rem] hover:bg-medical-600 shadow-2xl transition-all flex items-center justify-center gap-4 group"
                                                            >
                                                                Lock Response <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {step === 3 && (
                                                    <motion.div
                                                        key="step3"
                                                        initial={{ x: 20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        exit={{ x: -20, opacity: 0 }}
                                                        className="space-y-10"
                                                    >
                                                        <div className="space-y-8 text-left">
                                                            <div>
                                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] px-1 mb-6 block">Select Impact Persona</label>
                                                                <div className="grid grid-cols-2 gap-4">
                                                                    {[
                                                                        { id: 'innovator', label: 'The Innovator', icon: FireIcon, desc: 'Driving sub-micron textile breakthroughs' },
                                                                        { id: 'guardian', label: 'The Guardian', icon: ShieldCheckIcon, desc: 'Upholding relentless sterile quality' },
                                                                        { id: 'architect', label: 'The Architect', icon: RocketLaunchIcon, desc: 'Building global medical supply chains' },
                                                                        { id: 'empath', label: 'The Empath', icon: HeartIcon, desc: 'Bridging technology and hospital care' }
                                                                    ].map(p => (
                                                                        <button
                                                                            key={p.id}
                                                                            type="button"
                                                                            onClick={() => setActivePersona(p.id)}
                                                                            className={`p-6 rounded-3xl border-2 text-left transition-all relative overflow-hidden group ${activePersona === p.id ? 'border-medical-500 bg-medical-50/50' : 'border-slate-50 bg-slate-50/30 hover:border-slate-200'}`}
                                                                        >
                                                                            <p.icon className={`w-8 h-8 mb-4 ${activePersona === p.id ? 'text-medical-600' : 'text-slate-300'}`} />
                                                                            <h5 className={`text-xs font-black uppercase tracking-widest mb-2 ${activePersona === p.id ? 'text-medical-900' : 'text-slate-900'}`}>{p.label}</h5>
                                                                            <p className="text-[10px] text-slate-400 font-medium leading-tight">{p.desc}</p>
                                                                            {activePersona === p.id && <div className="absolute top-0 right-0 p-3"><CheckCircleIcon className="w-5 h-5 text-medical-600" /></div>}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className="space-y-3">
                                                                <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] px-1">CV Transmission (Secure URL)</label>
                                                                <input
                                                                    required
                                                                    type="url"
                                                                    name="resume"
                                                                    value={formData.resume}
                                                                    onChange={handleInputChange}
                                                                    className="w-full bg-slate-50 border-0 rounded-2xl p-6 text-sm font-bold focus:ring-2 focus:ring-medical-500 outline-none transition-all"
                                                                    placeholder="Drive / Portfolio / Dropbox"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-4">
                                                            <button
                                                                type="button"
                                                                onClick={prevStep}
                                                                className="px-10 h-20 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
                                                            >
                                                                Back
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                disabled={isSubmitting || !activePersona}
                                                                className="flex-1 h-20 bg-medical-700 text-white font-black text-xs uppercase tracking-[0.3em] rounded-[2rem] hover:bg-medical-900 shadow-2xl shadow-medical-700/30 transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                                                            >
                                                                {isSubmitting ? (
                                                                    <>Verifying Dossier <ArrowPathIcon className="w-6 h-6 animate-spin" /></>
                                                                ) : (
                                                                    <>Final Submission <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></>
                                                                )}
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </form>
                                    </div>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-14 text-center space-y-10"
                                >
                                    <div className="relative inline-block">
                                        <div className="absolute inset-0 bg-medical-500 blur-[80px] opacity-20 animate-pulse"></div>
                                        <div className="w-40 h-40 bg-medical-50 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-white shadow-xl">
                                            <CheckCircleIcon className="w-20 h-20 text-medical-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">Transmission <br />Success</h3>
                                        <p className="text-slate-500 italic max-w-sm mx-auto font-medium">Your clinical profile has been hashed and queued for peer review. Our hub lead will reach out within 72 clinical hours.</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="h-1 bg-medical-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
                                        ))}
                                    </div>
                                    <button
                                        onClick={resetForm}
                                        className="h-16 px-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 border-2 border-slate-900 rounded-2xl hover:bg-slate-900 hover:text-white transition-all active:scale-95"
                                    >
                                        Secure Exit
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Career CTA */}
            <div className="py-32 px-6">
                <div className="mx-auto max-w-7xl bg-medical-50 rounded-[5rem] p-16 lg:p-32 relative overflow-hidden border border-medical-100 group">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-medical-200/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-medical-200/40 transition-all duration-1000"></div>
                    <div className="max-w-2xl relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-medical-700 mb-8 block">Spontaneous Talent</span>
                        <h2 className="text-5xl sm:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85] mb-8">
                            Unlisted <br />
                            <span className="text-gradient">Potential?</span>
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12 italic">
                            For candidates who operate beyond sectoral labels. We hire outliers regardless of vacancy.
                        </p>
                        <a href="mailto:hr@krgmedifabb.com" className="inline-flex h-16 px-12 bg-slate-900 text-white rounded-2xl items-center justify-center font-black text-xs uppercase tracking-widest hover:bg-medical-700 hover:translate-y-[-4px] active:translate-y-0 transition-all shadow-xl shadow-slate-900/10">
                            Transmit Open Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
