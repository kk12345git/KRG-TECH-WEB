import { motion } from 'framer-motion';
import { QuestionMarkCircleIcon, PhoneIcon, EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';

const faqs = [
    {
        q: 'How do I request a custom sterilization validation report?',
        a: 'Registered procurement partners can download batch-specific sterilization indicator reports via the B2B Portal or request a physical copy from our Quality Assurance department.'
    },
    {
        q: 'What is the standard lead time for bespoke surgical packs?',
        a: 'For first-time bespoke designs, allow 14 days for pattern validation and sampling. Repeating orders typically maintain a 7-day manufacturing lead time.'
    },
    {
        q: 'Are KRG products compatible with ETO and Gamma sterilization?',
        a: 'Most of our woven-replacement fabrics are compatible with both. However, specific reinforcement plastics may vary. Refer to the product datasheet for the validated sterilization method.'
    }
];

export default function Support() {
    return (
        <div className="bg-white min-h-screen pb-24">
            <SEO
                title="Clinical & Technical Support"
                description="Get expert assistance with medical fabric specifications, ISO compliance, and surgical pack customization. Browse technical FAQs and contact our liaison team."
            />
            {/* Header */}
            <div className="bg-medical-700 py-24 text-white text-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-5xl font-black uppercase tracking-tighter">Clinical & Technical <span className="opacity-50">Support</span></h1>
                    <p className="mt-4 text-medical-100 max-w-2xl mx-auto">Access technical documentation, clinical FAQs, and direct lines to our medical engineering team.</p>
                </div>
            </div>

            {/* Help Grid */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Technical FAQ', desc: 'Browse our technical database.', icon: QuestionMarkCircleIcon },
                        { title: 'Resource Hub', desc: 'ISO certs & Product datasheets.', icon: DocumentTextIcon },
                        { title: 'Clinical Liaison', desc: 'Talk to a medical specialist.', icon: PhoneIcon },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center hover:border-medical-200 transition-all">
                            <div className="mx-auto bg-medical-50 w-16 h-16 rounded-2xl flex items-center justify-center text-medical-700 mb-6">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-12 text-center">Technical Hub FAQ</h2>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-gray-100 pb-8">
                            <h4 className="text-lg font-bold text-gray-900 mb-4">{faq.q}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final Contact CTA */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="bg-slate-900 rounded-[3rem] p-12 text-center overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-4 h-full">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="border-r border-b border-white/20"></div>
                            ))}
                        </div>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Still need clinical assistance?</h3>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                            <button className="flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-medical-400 transition-all">
                                <EnvelopeIcon className="w-4 h-4" /> Email Technical Team
                            </button>
                            <button className="flex items-center gap-2 bg-medical-600 text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-medical-500 transition-all">
                                <PhoneIcon className="w-4 h-4" /> Call B2B Desk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
