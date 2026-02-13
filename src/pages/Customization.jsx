import { Link } from 'react-router-dom';
import {
    PencilSquareIcon,
    BeakerIcon,
    GlobeAltIcon,
    SparklesIcon,
    CheckBadgeIcon
} from '@heroicons/react/24/outline';
import ProductExploder from '../components/ProductExploder';
import SEO from '../components/SEO';

const steps = [
    {
        name: 'Define Requirements',
        description: 'Select your fabric (SMS, Spunlace, PP), GSM, and specialized components for your procedure packs.',
        icon: PencilSquareIcon,
    },
    {
        name: 'Prototype & Sample',
        description: 'We develop a trial batch for your clinical evaluation and feedback before bulk production.',
        icon: BeakerIcon,
    },
    {
        name: 'Private Labeling',
        description: 'Hospital branding or distributor-specific packaging with your logos and labels.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Batch Production',
        description: 'High-speed automated manufacturing in a controlled hygienic environment.',
        icon: SparklesIcon,
    },
];

export default function Customization() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Bespoke Surgical Solution Customization"
                description="Custom-engineered surgical drape packs tailored to your hospital's specific clinical needs. From fabric selection to private labeling."
            />
            {/* Hero */}
            <div className="relative py-24 sm:py-32 bg-medical-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-medical-700 to-transparent flex items-center justify-center">
                        {/* Background pattern idea */}
                    </div>
                </div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl uppercase tracking-tighter">
                                Your Vision, Our <span className="text-medical-400">Precision</span>
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-medical-200">
                                Custom-engineered surgical drape packs tailored to the specific needs of your surgeons and hospital workflows.
                            </p>
                            <div className="mt-10">
                                <Link to="/contact" className="bg-medical-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-medical-400 transition-colors">
                                    Discuss Custom Pack Project
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:block relative">
                            <ProductExploder />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-medical-700">The KRG Advantage</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Why Choose Customized Surgical Packs?
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Off-the-shelf drapes often include unnecessary costs or lack critical components. We help you optimize your OR efficiency.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                            {steps.map((step) => (
                                <div key={step.name} className="flex flex-col border border-gray-100 p-8 rounded-2xl hover:bg-medical-50 transition-colors group">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                        <step.icon className="h-10 w-10 text-medical-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="font-bold text-gray-900 mb-2">{step.name}</p>
                                        <p className="flex-auto text-sm">{step.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* Trust Quote */}
            <div className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1">
                            <CheckBadgeIcon className="h-16 w-16 text-medical-600 mb-6" />
                            <h3 className="text-3xl font-bold text-gray-900">100% Clinical Compliance</h3>
                            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                                "Our customization process isn't just about sizes and colors—it's about patient safety. Every custom component we add to a pack undergoes the same rigorous sterilization and quality control as our standard products."
                            </p>
                            <p className="mt-6 font-bold text-medical-700">— Technical Director, KRG Medifabb</p>
                        </div>
                        <div className="flex-1">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                                alt="Quality inspection"
                                className="rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="py-24 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-sans uppercase">Ready to get your first custom sample?</h3>
                <Link to="/contact" className="inline-block bg-medical-700 text-white px-10 py-4 rounded-md font-bold hover:shadow-xl transition-all">
                    Start Consultation
                </Link>
            </div>
        </div>
    );
}
