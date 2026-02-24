import AdminSidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            <AdminSidebar />
            <main className="flex-1 ml-64 p-12">
                {children}
            </main>
        </div>
    );
}
