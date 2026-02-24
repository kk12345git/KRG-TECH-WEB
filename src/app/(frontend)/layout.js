import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { KRGAssist } from "@/components/KRGAssist";

export default function FrontendLayout({ children }) {
    return (
        <AuthProvider>
            <div className="relative flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
                <KRGAssist />
            </div>
        </AuthProvider>
    );
}
