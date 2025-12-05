import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best CT Scan & MRI Center in Chennai | Advantage Imaging Mylapore",
  description: "Best radiology center in Chennai offering CT scan, MRI scan, ultrasound & X-ray services. Advanced 1.5T wide-bore MRI & 160-slice CT. Expert and experienced radiologist with 30+ years experience. Located in Mylapore. Book your scan today.",
  keywords: "best CT scan Chennai, MRI scan near me, best radiology center Chennai, MRI center Mylapore, CT scan center Chennai, diagnostic imaging Chennai, radiology services Chennai, wide bore MRI Chennai, scan center near me",
  authors: [{ name: "Advantage Imaging & Research Institute" }],
  openGraph: {
    title: "Best CT Scan & MRI Center in Chennai | Advantage Imaging",
    description: "Best radiology center in Chennai with advanced 1.5T wide-bore MRI & 160-slice CT. Expert radiology services at affordable costs in Mylapore.",
    type: "website",
    locale: "en_IN",
    siteName: "Advantage Imaging & Research Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best CT Scan & MRI Center in Chennai | Advantage Imaging",
    description: "Best radiology center in Chennai with advanced 1.5T wide-bore MRI & 160-slice CT. Located in Mylapore.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://advantageimaging.org",
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
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Advantage Imaging & Research Institute",
              "image": "https://advantageimaging.org/images/logo/logo.png",
              "url": "https://advantageimaging.org",
              "telephone": "+91-7305310444",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No. 178, Royapettah High Road",
                "addressLocality": "Mylapore, Chennai",
                "postalCode": "600004",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "description": "By Appointment Only"
                }
              ],
              "priceRange": "$$",
              "medicalSpecialty": "Radiology"
            })
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
