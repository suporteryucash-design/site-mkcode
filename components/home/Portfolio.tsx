// src/components/home/Portfolio.tsx
"use client";

import { ExternalLink, Store, Briefcase, ArrowUpRight, CheckCircle2, Zap } from "lucide-react";

const projects = [
  {
    title: "Hardstyle Custom",
    description: "E-commerce completo para loja de carros personalizados. Catálogo dinâmico, sistema de orçamentos e checkout integrado.",
    type: "E-commerce & Branding",
    icon: <Store className="w-6 h-6" />,
    color: "from-blue-600 to-cyan-600",
    gradient: "from-blue-500/20 to-cyan-500/20",
    link: "https://www.hardstylecustom.com",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO Avançado"],
    metrics: [
      { label: "Vendas", value: "+40%" },
      { label: "Performance", value: "0.8s" },
      { label: "SEO Score", value: "98/100" }
    ]
  },
  {
    title: "RyuBook SaaS",
    description: "Plataforma de agendamentos e gestão para profissionais. Sistema multi-idioma com dashboard financeiro e pagamentos via Stripe.",
    type: "Plataforma SaaS",
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-purple-600 to-pink-600",
    gradient: "from-purple-500/20 to-pink-500/20",
    link: "https://www.ryubook.com",
    tech: ["Next.js 14", "Stripe", "PostgreSQL", "TypeScript"],
    metrics: [
      { label: "Status", value: "Validado" },
      { label: "Idiomas", value: "4 Suportados" },
      { label: "Users", value: "Em crescimento" }
    ]
  }
];

export default function Portfolio() {
  return (
    <section id="projetos" className="relative py-20 lg:py-32 bg-neutral-950 overflow-hidden">
      
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
            <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-300 text-sm font-medium">Cases de Sucesso</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Geram Resultados
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Não é apenas código. É estratégia, design e performance combinados para criar experiências digitais únicas.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
            >
              {/* Brilho Superior no Hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="p-8 md:p-10">
                {/* Header do Card */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-blue-400 mb-1">{project.type}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>

                  {project.link !== "#" && (
                    <a 
                      href={project.link}
                      target="_blank"
                      className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-gray-400 text-lg mb-8 leading-relaxed border-b border-white/5 pb-8">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-8">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">Tecnologias</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-white/[0.03] border border-white/5 text-gray-300 rounded-lg text-sm hover:bg-white/10 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8 bg-black/20 rounded-2xl p-4 border border-white/5">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-white font-bold mb-1">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Ações */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/+8108084138770?text=Gostei do projeto ${project.title}, quero um similar!`}
                    target="_blank"
                    className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r ${project.color} hover:shadow-lg hover:brightness-110`}
                  >
                    Quero um Igual
                  </a>
                  {project.link !== "#" && (
                    <a 
                      href={project.link}
                      target="_blank"
                      className="sm:hidden flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all"
                    >
                      Ver Site Online
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Final */}
        <div className="text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-blue-500/50 to-purple-500/50">
            <a 
              href="https://wa.me/+8108084138770"
              target="_blank"
              className="block px-8 py-3 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors"
            >
              <span className="flex items-center gap-2 text-gray-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Quero um site personalizado para meu negócio
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}