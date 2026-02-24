import { Outfit, Space_Grotesk, Lexend } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-brand",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-medifabb",
  subsets: ["latin"],
});

export const metadata = {
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
        className={`${outfit.variable} ${spaceGrotesk.variable} ${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
