// src/components/layout/WhatsAppFloat.tsx
"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/+8108084138770"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Balão de texto */}
        <div className="absolute -top-12 -left-32 bg-white text-black px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Fale comigo no WhatsApp!
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-l-white border-transparent"></div>
        </div>
        
        {/* Botão principal */}
        <div className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 group-hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]">
          <MessageCircle size={28} />
        </div>
        
        {/* Badge animado */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          !
        </div>
      </div>
    </a>
  );
}