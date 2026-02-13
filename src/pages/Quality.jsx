import {
    CheckBadgeIcon,
    BeakerIcon,
    ShieldCheckIcon,
    AcademicCapIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const certifications = [
    {
        name: 'ISO 13485:2016',
        issuedBy: 'Intertek / TÜV',
        description: 'International quality management system specifically for medical device manufacturing.',
    },
    {
        name: 'CE Certificate',
        issuedBy: 'European Union Compliance',
        description: 'Conformity with health, safety, and environmental protection standards for products sold within the EEA.',
    },
    {
        name: 'ISO 9001:2015',
        issuedBy: 'General Quality Management',
        description: 'Ensures that our products and services consistently meet customer requirements.',
    },
];

export default function Quality() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Quality & Compliance Standards"
                description="ISO 13485:2016 and CE certified medical manufacturing. Explore our cleanroom standards and sterility assurance protocols."
            />
            {/* Header */}
            <div className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl underline decoration-medical-500 underline-offset-8">
                        Quality & Compliance
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-slate-600 max-w-3xl mx-auto">
                        In the medical field, quality isn't just a standard—it's a commitment to patient safety. KRG Medifabb operates under strict international regulatory frameworks.
                    </p>
                </div>
            </div>

            {/* Certifications Grid */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {certifications.map((cert) => (
                            <div key={cert.name} className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-medical-700 p-4 rounded-full mb-6 text-white text-2xl font-bold">
                                    <CheckBadgeIcon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">{cert.name}</h3>
                                <p className="text-sm font-semibold text-medical-600 mt-2 uppercase tracking-widest">{cert.issuedBy}</p>
                                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                    {cert.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Manufacturing Standards */}
            <div className="bg-medical-900 py-24 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">State-of-the-Art Manufacturing</h2>
                            <p className="mt-6 text-lg text-medical-100">
                                Our facility in Chennai is designed for high-efficiency, sterile medical production. We maintain rigorous standards for infection control.
                            </p>
                            <div className="mt-10 space-y-6">
                                <div className="flex gap-4">
                                    <BeakerIcon className="w-8 h-8 text-medical-400" />
                                    <div>
                                        <h4 className="font-bold">Controlled Environment</h4>
                                        <p className="text-sm text-medical-200">Manufacturing takes place in positive pressure environments to minimize particulate contamination.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <ShieldCheckIcon className="w-8 h-8 text-medical-400" />
                                    <div>
                                        <h4 className="font-bold">Sterilization Protocols</h4>
                                        <p className="text-sm text-medical-200">ETO (Ethylene Oxide) sterilization compatible workflows with documented batch traceability.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <AcademicCapIcon className="w-8 h-8 text-medical-400" />
                                    <div>
                                        <h4 className="font-bold">Staff Training</h4>
                                        <p className="text-sm text-medical-200">Regular training for manufacturing staff on hygiene, PPE usage, and quality inspection.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800"
                                alt="Quality control laboratory"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Cleanroom Vision - Phase 2 Additions */}
            <div className="py-24 bg-white overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-medical-700 uppercase tracking-widest mb-2">Manufacturing Transparency</h2>
                        <h3 className="text-4xl font-black text-slate-900 tracking-tight underline decoration-medical-200 decoration-8 underline-offset-4">CLEANROOM VISION</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-24">
                        {[
                            { label: 'Air Changes', value: '25+/Hour', detail: 'HEPA filtered ventilation' },
                            { label: 'Hygiene Protocol', value: 'Level 4', detail: 'Strict gowning mandatory' },
                            { label: 'Material Feed', value: 'Automated', detail: 'Zero-touch handling' },
                            { label: 'Traceability', value: 'Batch-Wise', detail: 'ERP integrated tracking' },
                        ].map((stat, i) => (
                            <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center hover:bg-medical-700 hover:text-white transition-all group">
                                <p className="text-xs font-bold uppercase text-slate-400 group-hover:text-medical-200 mb-2">{stat.label}</p>
                                <p className="text-3xl font-black mb-2">{stat.value}</p>
                                <p className="text-xs font-medium opacity-60">{stat.detail}</p>
                            </div>
                        ))}
                    </div>

                    <div className="relative">
                        <div className="absolute left-8 lg:left-1/2 h-full w-px bg-slate-200 -translate-x-1/2 hidden sm:block"></div>
                        <div className="space-y-12">
                            {[
                                { time: 'Stage 01', title: 'Polymer to Fabric', desc: 'Sourcing clinical-grade SS/SMS polymers with verified barrier properties.' },
                                { time: 'Stage 02', title: 'Precision Conversion', desc: 'Laser-guided cutting and ultrasonic welding in controlled environments.' },
                                { time: 'Stage 03', title: 'ETO Sterilization', desc: '12-hour sterilization cycle with 48-hour aeration for zero residue.' },
                                { time: 'Stage 04', title: 'Pouch Integrity Test', desc: 'Peel-strength and dye-penetration tests for every batch.' },
                            ].map((step, i) => (
                                <div key={i} className={`relative flex flex-col sm:flex-row items-center gap-8 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                                    <div className="flex-1 w-full sm:text-right hidden sm:block">
                                        {i % 2 === 0 && <div className="p-6 bg-white rounded-2xl border border-medical-100 shadow-sm">
                                            <p className="font-bold text-gray-900">{step.title}</p>
                                            <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
                                        </div>}
                                    </div>
                                    <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-medical-700 rounded-full text-white font-black text-xs ring-8 ring-white shadow-xl">
                                        {step.time}
                                    </div>
                                    <div className="flex-1 w-full">
                                        {(i % 2 !== 0 || window.innerWidth < 640) && <div className="p-6 bg-white rounded-2xl border border-medical-100 shadow-sm">
                                            <p className="font-bold text-gray-900">{step.title}</p>
                                            <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
                                        </div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Internal Audit */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-widest mb-12">Quality Workflow</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="p-4 border-r border-gray-100 last:border-0">
                            <span className="block text-4xl font-black text-medical-700 mb-2">01</span>
                            <p className="text-sm font-bold text-gray-900 uppercase">Raw Material Audit</p>
                        </div>
                        <div className="p-4 border-r border-gray-100 last:border-0">
                            <span className="block text-4xl font-black text-medical-700 mb-2">02</span>
                            <p className="text-sm font-bold text-gray-900 uppercase">In-Process Check</p>
                        </div>
                        <div className="p-4 border-r border-gray-100 last:border-0">
                            <span className="block text-4xl font-black text-medical-700 mb-2">03</span>
                            <p className="text-sm font-bold text-gray-900 uppercase">Sterility Testing</p>
                        </div>
                        <div className="p-4 border-r border-gray-100 last:border-0">
                            <span className="block text-4xl font-black text-medical-700 mb-2">04</span>
                            <p className="text-sm font-bold text-gray-900 uppercase">Batch Release</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
