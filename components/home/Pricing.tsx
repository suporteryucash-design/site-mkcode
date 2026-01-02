// src/components/home/Pricing.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Check, 
  Sparkles, 
  Zap, 
  Star, 
  TrendingUp, 
  Shield,
  Globe,
  Smartphone,
  Search,
  Palette,
  Rocket,
  ChevronDown
} from "lucide-react";

const plans = [
  {
    name: "Presença Digital",
    price: "¥50,000",
    description: "Ideal para profissionais e pequenos negócios que precisam ser encontrados no Japão.",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    popular: false,
    features: [
      { icon: <Palette className="w-5 h-5" />, text: "Design exclusivo (sem templates)" },
      { icon: <Globe className="w-5 h-5" />, text: "Até 5 páginas (Home, Sobre, etc)" },
      { icon: <Smartphone className="w-5 h-5" />, text: "Perfeito em qualquer celular" },
      { icon: <Search className="w-5 h-5" />, text: "Configuração básica de Google" },
      { icon: <Check className="w-5 h-5" />, text: "Botão direto para seu WhatsApp" },
    ]
  },
  {
    name: "Aceleração de Vendas",
    price: "¥120,000",
    description: "Para quem quer dominar o mercado local e converter visitantes em clientes reais.",
    icon: <Star className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    popular: true,
    features: [
      { icon: <TrendingUp className="w-5 h-5" />, text: "Landing Page focada em vendas" },
      { icon: <Zap className="w-5 h-5" />, text: "Velocidade de carregamento VIP" },
      { icon: <Search className="w-5 h-5" />, text: "SEO Avançado (Apareça no topo)" },
      { icon: <Shield className="w-5 h-5" />, text: "Blog ou Galeria de Projetos" },
      { icon: <Check className="w-5 h-5" />, text: "Integração com Instagram/Facebook" },
      { icon: <Check className="w-5 h-5" />, text: "Suporte prioritário via WhatsApp" },
    ]
  },
  {
    name: "Sistemas & SaaS",
    price: "Sob Consulta",
    description: "Soluções complexas para empresas que precisam automatizar tudo e escalar.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-amber-500 to-orange-600",
    gradient: "bg-gradient-to-r from-amber-500 to-orange-600",
    popular: false,
    features: [
      { icon: <Shield className="w-5 h-5" />, text: "Sistemas com Login e Senha" },
      { icon: <Globe className="w-5 h-5" />, text: "Multi-idioma (Português/Japonês)" },
      { icon: <Check className="w-5 h-5" />, text: "Dashboard de Gestão Interna" },
      { icon: <Check className="w-5 h-5" />, text: "Integração com Bancos de Dados" },
      { icon: <Check className="w-5 h-5" />, text: "Pagamentos Online Integrados" },
    ]
  }
];

export default function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="precos" className="relative py-24 lg:py-32 bg-neutral-950 overflow-hidden">
      {/* Luz de fundo sutil - Corrigido: Removido as barras invertidas extras */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Investimento no seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Futuro Digital
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Não é apenas um site, é uma ferramenta de trabalho. Escolha o nível de presença que seu negócio precisa hoje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-purple-500/50 scale-105 z-20 md:scale-110' : 'z-10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                  Mais Procurado
                </div>
              )}

              <div className="mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-black tracking-tight">{plan.price}</span>
                  {plan.price !== "Sob Consulta" && <span className="text-gray-500 font-medium">/projeto</span>}
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3 text-gray-300">
                    <div className={`p-1 rounded-full bg-white/5 ${plan.popular ? 'text-purple-400' : 'text-blue-400'}`}>
                      {feature.icon}
                    </div>
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/+8108084138770?text=Olá! Gostaria de saber mais sobre o plano: ${plan.name}`}
                target="_blank"
                className={`block w-full text-center py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_30px_rgba(219,39,119,0.4)]' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                Selecionar este
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action Final */}
        <div className="text-center bg-neutral-900/30 border border-white/5 rounded-[3rem] p-12 backdrop-blur-md">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ainda na dúvida de qual <br className="sm:hidden" />
              <span className="text-blue-400 underline decoration-blue-500/30 underline-offset-8">
                é o melhor para você?
              </span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Eu te ajudo a decidir. Me conta o que você precisa e eu te oriento sem compromisso.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/+8108084138770"
              target="_blank"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Me chama no WhatsApp
                <Zap className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}