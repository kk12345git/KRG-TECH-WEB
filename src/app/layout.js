import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://krgmedifabb.com"),
  title: {
    default: "KRG Medifabb | Clinical Excellence eCommerce",
    template: "%s | KRG Medifabb"
  },
  description: "Global leader in surgical disposables and sterile medical textiles. High-performance manufacture for hospital networks.",
  keywords: ["surgical gowns", "sterile drapes", "medical textiles", "KRG Medifabb", "hospital disposables"],
  authors: [{ name: "KRG Medifabb" }],
  creator: "KRG Medifabb",
  publisher: "KRG Medifabb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "KRG Medifabb | Surgical Disposables",
    description: "Institutional-grade surgical drapes and gowns. Precision manufactured in India for global healthcare.",
    url: "https://krgmedifabb.com",
    siteName: "KRG Medifabb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KRG Medifabb Manufacturing"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KRG Medifabb | Surgical Disposables",
    description: "Global leader in sterile medical textiles.",
    images: ["/og-image.jpg"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
        
        {/* Floating WhatsApp Widget */}
        <a
          href="https://wa.me/919176468297"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl z-[9999] shadow-2xl hover:scale-110 active:scale-95 transition-all"
          title="Chat on WhatsApp"
        >
          💬
        </a>
      </body>
    </html>
  );
}
