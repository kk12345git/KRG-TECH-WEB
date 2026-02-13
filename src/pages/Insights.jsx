import { motion } from 'framer-motion';
import { BookOpenIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import { SupplyChainMap } from '../components/SupplyChainMap';

const articles = [
    {
        id: 1,
        title: 'The Evolution of Non-Woven SMS Fabrics in Modern Surgery',
        excerpt: 'How multi-layered spunbond-meltblown-spunbond fabrics are redefining barrier protection standards in Level 4 AAMI environments.',
        author: 'Dr. Sarah Chen',
        date: 'Feb 05, 2026',
        readTime: '8 min',
        category: 'Material Science',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        title: 'Optimizing Sterile Supply Chains for Hospital Networks',
        excerpt: 'A comprehensive guide on mitigating stock-outs through localized manufacturing and multi-departmental inventory consolidation.',
        author: 'Rajesh Kumar',
        date: 'Jan 28, 2026',
        readTime: '12 min',
        category: 'Supply Chain',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        title: 'Sustainable Sterilization: The Future of ETO-Free Processing',
        excerpt: 'Exploring emerging technologies in medical disposable sterilization that minimize environmental footprint without compromising safety.',
        author: 'Elena Rossi',
        date: 'Jan 15, 2026',
        readTime: '6 min',
        category: 'Sustainability',
        image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800'
    }
];



export default function Insights() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Medical Insights & Whitepapers"
                description="Stay informed with technical whitepapers and industry reports on medical fabric engineering, clinical barrier standards, and sterile supply chains."
            />
            <div className="bg-slate-900 py-24 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h2 className="text-medical-400 font-bold uppercase tracking-widest text-sm mb-4">Corporate Knowledge</h2>
                        <h1 className="text-5xl font-black tracking-tighter uppercase sm:text-7xl">Medical <br /><span className="text-medical-500">Insights</span></h1>
                        <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                            Technical whitepapers, industry reports, and leadership thoughts on the future of medical manufacturing.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {articles.map((article) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="group flex flex-col items-start"
                        >
                            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100 mb-8">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900">
                                    {article.category}
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                <span className="flex items-center gap-1"><ClockIcon className="w-4 h-4" /> {article.readTime}</span>
                                <span>•</span>
                                <span>{article.date}</span>
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 leading-tight group-hover:text-medical-700 transition-colors uppercase tracking-tight mb-4">
                                {article.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                {article.excerpt}
                            </p>
                            <button className="flex items-center gap-2 text-sm font-black text-gray-900 uppercase tracking-widest border-b-2 border-medical-200 pb-1 group-hover:border-medical-500 transition-all">
                                Read Whitepaper <ArrowRightIcon className="w-4 h-4" />
                            </button>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Global Supply Chain Transparency */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-32">
                <SupplyChainMap />
            </div>

            {/* Newsletter */}
            <div className="bg-medical-50 py-24 border-y border-medical-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">Stay Ahead of Clinical Standards</h2>
                    <p className="text-gray-500 mb-10 max-w-md mx-auto">Get monthly technical updates on medical fabric engineering and global compliance direct to your procurement office.</p>
                    <div className="max-w-md mx-auto flex gap-4">
                        <input type="email" placeholder="professional@hospital.com" className="flex-grow p-4 rounded-xl border-0 ring-1 ring-gray-200 focus:ring-2 focus:ring-medical-500" />
                        <button className="bg-medical-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-medical-900 transition-all">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
