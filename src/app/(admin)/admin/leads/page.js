"use client";

import { useState } from 'react';
import leadsData from '@/data/leads.json';
import { motion } from 'framer-motion';
import {
    MailIcon,
    Building2Icon,
    CalendarIcon,
    ClockIcon,
    CheckCircle2Icon,
    XCircleIcon,
    SearchIcon,
    FilterIcon,
    ChevronRightIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LeadManagerPage() {
    const [leads, setLeads] = useState(leadsData);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLeads = leads.filter(lead =>
        lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusStyles = (status) => {
        switch (status) {
            case 'new': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'pending': return 'bg-amber-100 text-amber-700 border-amber-200';
            case 'contacted': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
            default: return 'bg-slate-100 text-slate-700 border-slate-200';
        }
    };

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">
                        Lead <span className="text-medical-600">Manager</span>
                    </h1>
                    <p className="text-slate-500">Processing clinical procurement enquiries from KRG Assist AI.</p>
                </div>

                <div className="flex gap-4">
                    <div className="relative">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search leads..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-medical-500 outline-none w-64 shadow-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Representative</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Organization</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Specialty</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Intensity</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredLeads.map((lead, i) => (
                                <motion.tr
                                    key={lead.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:bg-slate-50/30 transition-colors group"
                                >
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-medical-50 flex items-center justify-center text-medical-700 font-black text-xs">
                                                {lead.fullName.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 leading-none mb-1">{lead.fullName}</p>
                                                <p className="text-[10px] text-slate-400 font-medium">{lead.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-bold text-slate-600 uppercase tracking-tight">{lead.organization}</td>
                                    <td className="px-8 py-6">
                                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-500">
                                            {lead.specialty}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-black text-medical-700 italic">{lead.volume}</td>
                                    <td className="px-8 py-6">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                                            getStatusStyles(lead.status)
                                        )}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2 hover:bg-white hover:shadow-md rounded-lg transition-all text-slate-400 hover:text-medical-600">
                                            <ChevronRightIcon className="w-5 h-5" />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Empty State */}
            {filteredLeads.length === 0 && (
                <div className="py-24 text-center border-2 border-dashed border-slate-100 rounded-[3rem]">
                    <SearchIcon className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No leads found matching your search</p>
                </div>
            )}
        </div>
    );
}
