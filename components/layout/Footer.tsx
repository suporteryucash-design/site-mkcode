// src/components/layout/Footer.tsx
"use client";

import { Code2, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-white/5 relative">
      
      {/* --- LUZ PULSANTE E BRILHO (Copiado do Navbar) --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80 animate-pulse"></div>
        <div className="absolute top-0 left-[-50%] w-[200%] h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 blur-[1px] animate-shine" 
             style={{ animation: 'shine 3s infinite linear' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            
            {/* LOGO MK CODE (Versão Footer - Maior) */}
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center gap-3 group">
                {/* Ícone */}
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                
                {/* Texto */}
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white leading-none">
                    MK <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Code</span>
                  </span>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 font-bold group-hover:text-blue-400 transition-colors">
                    Solutions
                  </span>
                </div>
              </Link>
            </div>

            <p className="text-gray-400 max-w-md">
              Transformo ideias em sites profissionais que geram resultados. Especializado em desenvolvimento web moderno e eficiente.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#servicos" className="text-gray-400 hover:text-blue-400 transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="text-gray-400 hover:text-blue-400 transition-colors">Projetos</a></li>
              <li><a href="#planos" className="text-gray-400 hover:text-blue-400 transition-colors">Planos</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/seuusuario" target="_blank" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/in/seuusuario" target="_blank" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-blue-600 transition-all hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/seuusuario" target="_blank" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-gray-700 transition-all hover:-translate-y-1">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} MK Code. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Desenvolvido com <span className="text-blue-500">Next.js</span> e <span className="text-cyan-500">Tailwind CSS</span>
          </p>
        </div>
      </div>

      {/* Animação do Shine (Necessário para o efeito funcionar) */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine { animation: shine 3s infinite linear; }
      `}</style>
    </footer>
  );
}