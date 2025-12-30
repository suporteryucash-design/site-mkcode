// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mkcodesolutions.com"),
  title: {
    default: "MK Code Solutions | Desenvolvimento Web & Automação",
    template: "%s | MK Code Solutions",
  },
  description: "Transforme seu negócio com tecnologia de ponta. Desenvolvimento de sites de alta performance, sistemas SaaS, lojas virtuais e automação de processos.",
  
  // --- ADICIONADO AQUI ---
  verification: {
    google: "E96eYPC4qKkdGXtpD5nXPF_4HJaa4lufIob3H9c0uok",
  },
  // -----------------------

  keywords: ["Desenvolvimento Web", "SaaS", "Automação", "Next.js", "Sites Profissionais", "MK Code Solutions"],
  authors: [{ name: "Murilo Kenji" }],
  openGraph: {
    title: "MK Code Solutions | Desenvolvimento Web & Automação",
    description: "Sites de alta performance e soluções digitais sob medida.",
    url: "https://www.mkcodesolutions.com",
    siteName: "MK Code Solutions",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}