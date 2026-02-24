"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboardIcon,
    PackageIcon,
    TagIcon,
    ShoppingCartIcon,
    ImageIcon,
    SettingsIcon,
    LogOutIcon,
    UsersIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const adminNav = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboardIcon },
    { name: 'Products', href: '/admin/products', icon: PackageIcon },
    { name: 'Leads', href: '/admin/leads', icon: UsersIcon },
    { name: 'Categories', href: '/admin/categories', icon: TagIcon },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingCartIcon },
    { name: 'Banners', href: '/admin/banners', icon: ImageIcon },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed inset-y-0 left-0 w-64 bg-slate-900 border-r border-white/5 flex flex-col z-50">
            <div className="p-8">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-black text-white tracking-tighter uppercase">
                        KRG <span className="text-medical-500">Admin</span>
                    </span>
                </Link>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                {adminNav.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                                isActive
                                    ? "bg-medical-700 text-white shadow-lg shadow-medical-700/20"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-6 border-t border-white/5">
                <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-bold text-slate-400 hover:text-red-400 hover:bg-red-500/5 transition-all">
                    <LogOutIcon className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </aside>
    );
}
