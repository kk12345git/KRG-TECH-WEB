import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { KRGAssist } from "@/components/KRGAssist";
import CartDrawer from "@/components/CartDrawer";

export default function FrontendLayout({ children }) {
    return (
        <AuthProvider>
            <CartProvider>
                <div className="relative flex min-h-screen flex-col">
                    <Navbar />
                    <CartDrawer />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                    <KRGAssist />
                </div>
            </CartProvider>
        </AuthProvider>
    );
}
