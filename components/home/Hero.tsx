// src/components/home/Hero.tsx
"use client";

import { ArrowRight, Code2, Globe, Zap, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-neutral-950 border-b border-white/5">
      {/* LUZ DE FUNDO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* AVISO PEQUENO (Badge) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Disponível para novos projetos
        </div>

        {/* TÍTULO PRINCIPAL */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Seu Negócio Precisa de um <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Site Profissional
          </span>
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Desenvolvedor especializado em criar sites modernos, rápidos e otimizados para converter visitantes em clientes.
          <span className="text-blue-400 block mt-2 font-semibold">
            Do site simples ao sistema complexo.
          </span>
        </p>

        {/* DESTAQUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Code2 className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold">Sites Modernos</div>
              <div className="text-gray-400 text-sm">Design responsivo e otimizado</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Zap className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold">Alta Performance</div>
              <div className="text-gray-400 text-sm">Carregamento ultrarrápido</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Globe className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-left">
              <div className="text-white font-bold">SEO Otimizado</div>
              <div className="text-gray-400 text-sm">Apareça no Google</div>
            </div>
          </div>
        </div>

        {/* BOTÕES */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="https://wa.me/+8108084138770?text=Olá! Quero um site profissional para meu negócio." 
            target="_blank"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.4)]"
          >
            Quero um Orçamento
            <ArrowRight size={20} />
          </a>
          <a 
            href="#projetos" 
            className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all"
          >
            Ver Meus Projetos
          </a>
        </div>

        {/* VANTAGENS RÁPIDAS */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-blue-500" />
            Design Moderno
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-blue-500" />
            Otimizado para SEO
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-blue-500" />
            Responsivo (Mobile)
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-blue-500" />
            Integração com Redes Sociais
          </div>
        </div>
      </div>
    </section>
  );
}