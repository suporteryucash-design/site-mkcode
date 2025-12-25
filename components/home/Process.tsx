// src/components/home/Process.tsx
"use client";

import { MessageSquare, Palette, Code, Rocket, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Briefing & Ideias",
    description: "Reunião inicial para entender sua visão, público-alvo e objetivos do negócio.",
    duration: "1-2 dias",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design & UX",
    description: "Criação do visual e protótipo. Você aprova cada detalhe antes de eu programar.",
    duration: "3-5 dias",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Desenvolvimento",
    description: "Transformo o design em código real, rápido e otimizado para o Google.",
    duration: "1-3 semanas",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Entrega & Lançamento",
    description: "Configuração do domínio, hospedagem e testes finais. Seu site vai para o ar!",
    duration: "1-2 dias",
    color: "from-orange-500 to-yellow-500"
  }
];

export default function Process() {
  return (
    <section className="relative py-20 lg:py-32 bg-neutral-950 overflow-hidden">
      
      {/* --- EFEITOS DE FUNDO (Padronizado) --- */}
      
      {/* 1. A LUZ DE DIVISÓRIA (Linha superior brilhante) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      {/* 2. Orbs de luz (Blur nos cantos) */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-300 text-sm font-medium">Metodologia Ágil</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Do Conceito ao <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Lançamento
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Um processo organizado e transparente. Você acompanha cada etapa e nada é feito sem sua aprovação.
          </p>
        </div>

        {/* Grid de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              
              {/* Card */}
              <div className="h-full bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                
                {/* Número Gigante no Fundo */}
                <div className="absolute -bottom-4 -right-4 text-9xl font-bold text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors duration-500">
                  0{index + 1}
                </div>

                {/* Ícone com Glow */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-[1px] mb-6 shadow-lg shadow-purple-500/10 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full rounded-2xl bg-neutral-900 flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed relative z-10 border-b border-white/5 pb-6">
                  {step.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-medium relative z-10">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                  <span className="text-gray-300">Tempo médio: <span className="text-white">{step.duration}</span></span>
                </div>
              </div>

              {/* Conector (Seta) entre cards - Apenas Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 text-white/10">
                  <ChevronRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Garantia de Satisfação */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-teal-500/30">
            <div className="bg-neutral-900 rounded-[23px] p-8 md:p-10 relative overflow-hidden">
              {/* Efeito de brilho no fundo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -z-10"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Garantia de Segurança</h3>
                  <p className="text-gray-400">
                    O pagamento é dividido em etapas para sua segurança. Você paga 50% para iniciar e os outros 50% <span className="text-white font-bold">apenas quando o site estiver pronto</span> e aprovado por você.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}