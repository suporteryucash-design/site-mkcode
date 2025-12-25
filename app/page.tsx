// app/page.tsx (versão sem comparação com concorrência)
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

import Process from "@/components/home/Process";
import Portfolio from "@/components/home/Portfolio";
import Pricing from "@/components/home/Pricing";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <Navbar />
      <Hero />
      
      <Process />
      <Portfolio />
      <Pricing />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}