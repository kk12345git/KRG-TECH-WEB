import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export function FAQSection({ faqs }) {
    const defaultFAQs = faqs || [
        {
            question: 'What certifications do your products have?',
            answer: 'All our products are manufactured in ISO 13485:2016 certified facilities and carry CE marking for European markets. We also maintain ISO 9001:2015 for quality management.'
        },
        {
            question: 'What is the minimum order quantity (MOQ)?',
            answer: 'MOQ varies by product. Surgical drape packs typically have MOQ of 150-250 packs, while gowns start at 300-500 units. Contact us for custom requirements.'
        },
        {
            question: 'Do you offer customization services?',
            answer: 'Yes! We offer full customization including custom sizes, materials, branding, and pack configurations. Most of our products are marked as customizable.'
        },
        {
            question: 'What is the typical lead time for orders?',
            answer: 'Standard products: 7-14 days. Custom orders: 21-30 days. Urgent orders can be expedited with prior arrangement.'
        },
        {
            question: 'Do you ship internationally?',
            answer: 'Yes, we serve hospitals and distributors globally. We have experience shipping to Middle East, Southeast Asia, Africa, and European markets.'
        },
        {
            question: 'What sterilization methods are compatible?',
            answer: 'Our products are compatible with ETO (Ethylene Oxide) and Steam sterilization. Specific compatibility is listed on each product page.'
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-4xl px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-500">Quick answers to common inquiries</p>
                </div>

                <div className="space-y-4">
                    {defaultFAQs.map((faq, index) => (
                        <div key={index} className="border border-slate-100 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-slate-900 pr-8">{faq.question}</span>
                                <ChevronDownIcon
                                    className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${openIndex === index ? 'transform rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-6 pb-6"
                                    >
                                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center p-8 bg-slate-50 rounded-2xl">
                    <p className="text-slate-600 mb-4">Still have questions?</p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-medical-700 text-white rounded-xl font-bold hover:bg-medical-900 transition-colors"
                    >
                        Contact Our Team
                    </a>
                </div>
            </div>
        </div>
    );
}

export function FAQSchema({ faqs }) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(schemaData)}
        </script>
    );
}
