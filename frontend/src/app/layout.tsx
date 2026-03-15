import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portail Étudiant IAI Mbalmayo",
  description:
    "Portail officiel de l’Institut Africain d’Informatique - Centre de Mbalmayo : actualités, ressources, événements et contact.",
  openGraph: {
    title: "Portail Étudiant IAI Mbalmayo",
    description:
      "Retrouvez les actualités, l’espace académique, les événements et les ressources pour les étudiants de l’IAI Mbalmayo.",
    siteName: "IAI Mbalmayo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#031b34] font-sans text-white antialiased`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-6rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
