import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advantage Imaging & Research Institute | Expert Radiology Services Chennai",
  description: "Expert radiology services at affordable costs in Chennai. State-of-the-art 160 slice CT, 1.5T MRI, Digital X-ray & Ultrasound. 30+ years experience. Book your appointment today.",
  keywords: "radiology, CT scan, MRI, X-ray, ultrasound, Chennai, Mylapore, diagnostic imaging, medical imaging",
  authors: [{ name: "Advantage Imaging & Research Institute" }],
  openGraph: {
    title: "Advantage Imaging & Research Institute",
    description: "Expert radiology services at affordable costs in Chennai",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
