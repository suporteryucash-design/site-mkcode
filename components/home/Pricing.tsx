// src/components/home/Pricing.tsx
"use client";

import { useState } from "react";
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
    name: "Site Essencial",
    price: "¥50,000",
    description: "Perfeito para começar sua jornada digital no Japão",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    popular: false,
    features: [
      { icon: <Palette className="w-5 h-5" />, text: "Design moderno e responsivo" },
      { icon: <Globe className="w-5 h-5" />, text: "Até 5 páginas personalizadas" },
      { icon: <Smartphone className="w-5 h-5" />, text: "Otimizado para mobile primeiro" },
      { icon: <Search className="w-5 h-5" />, text: "SEO básico otimizado" },
      { icon: <Zap className="w-5 h-5" />, text: "Carregamento ultrarrápido" },
      { icon: <Shield className="w-5 h-5" />, text: "SSL seguro (https)" },
      { icon: <Sparkles className="w-5 h-5" />, text: "Integração WhatsApp direto" },
      { icon: <Check className="w-5 h-5" />, text: "Hospedagem 1 ano + domínio" }
    ],
    cta: "Começar Meu Site",
    delay: "0"
  },
  {
    name: "Site Premium",
    price: "¥120,000",
    description: "Para negócios que querem se destacar online",
    icon: <Star className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    popular: true,
    features: [
      { icon: <Palette className="w-5 h-5" />, text: "Design exclusivo personalizado" },
      { icon: <Globe className="w-5 h-5" />, text: "Até 10 páginas + multi-idioma" },
      { icon: <TrendingUp className="w-5 h-5" />, text: "SEO avançado com analytics" },
      { icon: <Zap className="w-5 h-5" />, text: "Performance máxima otimizada" },
      { icon: <Sparkles className="w-5 h-5" />, text: "Animações e interações" },
      { icon: <Shield className="w-5 h-5" />, text: "Backup semanal automático" },
      { icon: <Search className="w-5 h-5" />, text: "Google Analytics integrado" },
      { icon: <Check className="w-5 h-5" />, text: "Suporte prioritário 90 dias" }
    ],
    cta: "Escolher Premium",
    delay: "100"
  },
  {
    name: "Site Corporativo",
    price: "¥200,000",
    description: "Solução completa para empresas estabelecidas",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-emerald-500 to-green-500",
    gradient: "bg-gradient-to-r from-emerald-500 to-green-500",
    popular: false,
    features: [
      { icon: <Palette className="w-5 h-5" />, text: "Design corporativo premium" },
      { icon: <Globe className="w-5 h-5" />, text: "Páginas ilimitadas + multi-idioma" },
      { icon: <TrendingUp className="w-5 h-5" />, text: "SEO completo + Google Business" },
      { icon: <Zap className="w-5 h-5" />, text: "Arquitetura escalável" },
      { icon: <Sparkles className="w-5 h-5" />, text: "Funcionalidades customizadas" },
      { icon: <Shield className="w-5 h-5" />, text: "Backup diário + segurança" },
      { icon: <Search className="w-5 h-5" />, text: "Dashboard analítico completo" },
      { icon: <Check className="w-5 h-5" />, text: "Suporte 6 meses + manutenção" }
    ],
    cta: "Solução Completa",
    delay: "200"
  }
];

export default function Pricing() {
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null);

  return (
    <section id="planos" className="relative py-20 lg:py-32 bg-neutral-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6 group">
            <Sparkles className="w-4 h-4 text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-blue-400 font-bold text-sm">VALOR TRANSPARENTE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Investimento Claro
            </span>
          </h2>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Preços fixos com tudo incluso. Foco em criar sites{" "}
            <span className="text-blue-400 font-semibold">bonitos</span>,{" "}
            <span className="text-purple-400 font-semibold">rápidos</span> e{" "}
            <span className="text-cyan-400 font-semibold">funcionais</span>.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group animate-fade-in-up`}
              style={{ animationDelay: `${plan.delay}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-500/30">
                    <Star className="w-4 h-4" />
                    MAIS ESCOLHIDO
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative h-full rounded-2xl overflow-hidden border transition-all duration-500 ${
                plan.popular 
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                  : 'border-white/10 hover:border-white/20'
              }`}>
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative p-8 bg-neutral-900/80 backdrop-blur-sm h-full">
                  {/* Plan Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className={`inline-flex p-3 rounded-xl ${plan.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">/ à vista</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-green-400 text-sm font-medium">Preço final completo</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.slice(0, expandedPlan === index ? plan.features.length : 4).map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-3 group/feature"
                      >
                        <div className={`p-2 rounded-lg ${plan.gradient} bg-opacity-20 group-hover/feature:scale-110 transition-transform duration-300`}>
                          <div className="text-white">
                            {feature.icon}
                          </div>
                        </div>
                        <span className="text-gray-300 group-hover/feature:text-white transition-colors">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                    
                    {/* Show More/Less */}
                    {plan.features.length > 4 && (
                      <button
                        onClick={() => setExpandedPlan(expandedPlan === index ? null : index)}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium mt-4"
                      >
                        {expandedPlan === index ? 'Ver menos' : `Ver mais ${plan.features.length - 4} recursos`}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedPlan === index ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <a
                      href={`https://wa.me/+8108084138770?text=Olá! Gostei do plano ${plan.name} (${plan.price})`}
                      target="_blank"
                      className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_40px_rgba(192,132,252,0.4)] hover:scale-[1.02]'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-[1.02]'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Note */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border border-white/5 max-w-2xl mx-auto">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold text-lg mb-2">Desenvolvimento com Propósito</h4>
              <p className="text-gray-400">
                Cada site é criado com atenção aos detalhes, focado em entregar resultados reais para seu negócio.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para ter um site que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                realmente funciona?
              </span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Vamos conversar sobre seu projeto e criar algo incrível juntos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/+8108084138770"
              target="_blank"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Conversar sobre Meu Projeto
                <Zap className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#projetos"
              className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              Ver Projetos Anteriores
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}