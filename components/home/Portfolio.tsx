// src/components/home/Portfolio.tsx
"use client";

import { ExternalLink, Store, Briefcase, CheckCircle2, Zap, Sparkles, GraduationCap } from "lucide-react";

const projects = [
  {
    title: "E.WUS English",
    description: "Plataforma educacional para ensino de inglês com metodologia personalizada, alta performance e SEO otimizado.",
    type: "Educação Online",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-pink-600 to-rose-600",
    gradient: "from-pink-500/20 to-rose-500/20",
    link: "https://e-wus.com",
    image: "/images/portfolio/ewus.jpg", // Lembre-se de salvar um print do site com esse nome na pasta
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "SEO Avançado"],
    metrics: [
      { label: "SEO", value: "100%" },
      { label: "Performance", value: "Instantânea" },
      { label: "Design", value: "Clean" }
    ]
  },
  {
    title: "Hardstyle Custom",
    description: "Loja de carros personalizada de acordo com o gosto do cliente, com sistema de multi-idioma.",
    type: "Loja de Carros",
    icon: <Store className="w-6 h-6" />,
    color: "from-blue-600 to-cyan-600",
    gradient: "from-blue-500/20 to-cyan-500/20",
    link: "https://www.hardstylecustom.com",
    image: "/images/portfolio/banner1.jpg",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Contentful CMS"],
    metrics: [
      { label: "Vendas", value: "+40%" },
      { label: "Performance", value: "0.8s" },
      { label: "SEO Score", value: "98/100" }
    ]
  },
  {
    title: "RyuBook SaaS",
    description: "Plataforma de agendamentos e gestão para profissionais. Sistema multi-idioma com dashboard financeiro.",
    type: "Plataforma SaaS",
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-purple-600 to-pink-600",
    gradient: "from-purple-500/20 to-pink-500/20",
    link: "https://www.ryubook.com",
    image: "/images/portfolio/banner2.jpg",
    tech: ["Next.js 15", "Stripe", "Prisma ORM", "NextAuth", "Pusher Realtime", "Tailwind v4"],
    metrics: [
      { label: "Status", value: "Validado" },
      { label: "Idiomas", value: "4" },
      { label: "Users", value: "Ativos" }
    ]
  },
  {
    title: "Estética Inovar",
    description: "Website institucional de alto padrão para clínica de estética. Design minimalista focado na experiência do usuário.",
    type: "Beleza & Estética",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-rose-500 to-orange-400",
    gradient: "from-rose-500/20 to-orange-500/20",
    link: "https://www.esteticainovar.com",
    image: "/images/portfolio/banner3.jpg",
    tech: ["Next.js 16", "React 19", "Tailwind v4", "Framer Motion", "TypeScript"],
    metrics: [
      { label: "Design", value: "Premium" },
      { label: "Retenção", value: "Alta" },
      { label: "Mobile", value: "100%" }
    ]
  }
];

export default function Portfolio() {
  return (
    <section id="projetos" className="relative py-20 lg:py-32 bg-neutral-950 overflow-hidden">
      
      {/* --- EFEITOS DE FUNDO --- */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] flex flex-col h-full"
            >
              {/* Brilho Superior no Hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="p-8 md:p-10 flex flex-col h-full">
                {/* Header do Card */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-blue-400 mb-1">{project.type}</div>
                      <h3 className="text-2xl font-bold text-white leading-tight h-[3.5rem] flex items-center">{project.title}</h3>
                    </div>
                  </div>
                </div>

                {/* --- ÁREA DA MINI FOTO --- */}
                <div className="w-full h-48 mb-6 rounded-xl overflow-hidden border border-white/5 relative bg-neutral-900 shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-30 z-10 pointer-events-none`} />
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                
                {/* Descrição Centralizada */}
                <div className="min-h-[80px] flex items-center justify-center mb-0">
                  <p className="text-gray-400 text-lg leading-relaxed text-center">
                    {project.description}
                  </p>
                </div>

                {/* DIVIDER CENTRALIZADO */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8 shrink-0"></div>
                
                {/* Tech Stack Centralizado */}
                <div className="mb-8 text-center min-h-[60px]">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">Tecnologias</p>
                  <div className="flex flex-wrap justify-center gap-2">
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
                <div className="grid grid-cols-3 gap-2 mb-8 bg-black/20 rounded-2xl p-3 border border-white/5 mt-auto">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col items-center justify-center text-center">
                      <div className="text-white font-bold mb-1 text-sm md:text-base whitespace-nowrap">
                        {metric.value}
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* --- AÇÕES (BOTOES) --- */}
                <div className="flex flex-col gap-3">
                  {/* Botão Acessar Site (EM CIMA) */}
                  {project.link !== "#" && (
                    <a 
                      href={project.link}
                      target="_blank"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-gray-200 border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300 w-full group/btn"
                    >
                      Acessar Site
                      <ExternalLink size={16} className="text-gray-400 group-hover/btn:text-white transition-colors" />
                    </a>
                  )}

                  {/* Botão Quero um Igual (EM BAIXO) */}
                  <a 
                    href={`https://wa.me/+8108084138770?text=Gostei do projeto ${project.title}, quero um similar!`}
                    target="_blank"
                    className={`flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r ${project.color} hover:shadow-lg hover:brightness-110 w-full`}
                  >
                    Quero um Igual
                  </a>
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