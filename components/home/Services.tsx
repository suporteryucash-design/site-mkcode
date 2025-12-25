// src/components/home/Services.tsx
"use client";

import { 
  Globe, 
  Bot, 
  Zap, 
  Layout, 
  Database, 
  Code2, 
  ArrowRight,
  Cpu,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Desenvolvimento Web",
    description: "Sites institucionais e Landing Pages. Design focado em conversão e autoridade.",
    features: ["Next.js & React", "SEO Otimizado", "Responsivo (Mobile)", "Alta Performance"],
    color: "text-blue-400",
    gradient: "from-blue-500 to-cyan-500",
    shadow: "group-hover:shadow-blue-500/10",
    border: "group-hover:border-blue-500/30"
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Automação & Bots",
    description: "Robôs inteligentes para realizar tarefas repetitivas. Economize tempo e evite erros.",
    features: ["Web Scraping", "Python Scripts", "Coleta de Dados", "Auto-Preenchimento"],
    color: "text-purple-400",
    gradient: "from-purple-500 to-pink-500",
    shadow: "group-hover:shadow-purple-500/10",
    border: "group-hover:border-purple-500/30"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Sistemas & SaaS",
    description: "Plataformas complexas com áreas de membros, painéis administrativos e bancos de dados.",
    features: ["Dashboards", "Gestão de Usuários", "PostgreSQL", "Pagamentos Online"],
    color: "text-emerald-400",
    gradient: "from-emerald-500 to-green-500",
    shadow: "group-hover:shadow-emerald-500/10",
    border: "group-hover:border-emerald-500/30"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Interfaces desenhadas para encantar. Foco total na experiência do usuário final.",
    features: ["Figma", "Prototipagem", "Design System", "Modernidade"],
    color: "text-orange-400",
    gradient: "from-orange-500 to-amber-500",
    shadow: "group-hover:shadow-orange-500/10",
    border: "group-hover:border-orange-500/30"
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Refatoração de Sites",
    description: "Seu site é lento ou antigo? Reescrevo o código para deixá-lo novo e rápido.",
    features: ["Clean Code", "Otimização 100%", "Correção de Bugs", "Tecnologias Atuais"],
    color: "text-rose-400",
    gradient: "from-red-500 to-rose-500",
    shadow: "group-hover:shadow-rose-500/10",
    border: "group-hover:border-rose-500/30"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "APIs & Integrações",
    description: "Conecto seu site ao WhatsApp, planilhas, CRMs e outras ferramentas essenciais.",
    features: ["API Rest", "Webhooks", "Chatbots", "Automação de Fluxo"],
    color: "text-yellow-400",
    gradient: "from-yellow-500 to-orange-500",
    shadow: "group-hover:shadow-yellow-500/10",
    border: "group-hover:border-yellow-500/30"
  }
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 lg:py-32 bg-neutral-950 overflow-hidden">
      
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
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm font-medium">Tech Stack Moderna</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Soluções Digitais <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Sob Medida
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Eu combino design estratégico com automação inteligente (bots) para criar ecossistemas digitais que economizam seu tempo e aumentam seu lucro.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative h-full bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-neutral-800/60 ${service.border} ${service.shadow}`}
            >
              {/* Brilho Interno no Hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Cabeçalho do Card */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <div className="text-white relative z-10">
                      {service.icon}
                    </div>
                  </div>
                  <Sparkles className={`w-5 h-5 ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-8 leading-relaxed h-[60px]">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-8 pt-6 border-t border-white/5">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Link de Ação Elegante */}
                <a 
                  href={`https://wa.me/+8108084138770?text=Olá! Gostaria de saber mais sobre: ${service.title}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all duration-300"
                >
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}>
                    Solicitar Orçamento
                  </span>
                  <ArrowRight className={`w-4 h-4 ${service.color}`} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé da Seção */}
        <div className="mt-20 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20">
            <a 
              href="https://wa.me/+8108084138770"
              target="_blank"
              className="flex items-center gap-3 px-8 py-4 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all duration-300 group"
            >
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                Tem um desafio diferente?
              </span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Fale comigo
              </span>
              <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}