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
    title: "Sites que Convertem", // Título focado em resultado
    description: "Crio páginas que não são apenas bonitas, mas desenhadas estrategicamente para transformar visitantes em novos contatos no seu WhatsApp.",
    features: ["Design Exclusivo", "Foco em Vendas", "Totalmente Mobile", "SEO para o Japão"],
    color: "text-blue-400",
    gradient: "from-blue-500 to-cyan-500",
    shadow: "group-hover:shadow-blue-500/10",
    border: "group-hover:border-blue-500/30"
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Automação de Processos", // Foco em poupar tempo do cliente
    description: "Cansado de tarefas repetitivas? Desenvolvo robôs e ferramentas que fazem o trabalho chato por você, eliminando erros e sobrando mais tempo.",
    features: ["Integração WhatsApp", "Robôs de Dados", "Planilhas Inteligentes", "Avisos Automáticos"],
    color: "text-purple-400",
    gradient: "from-purple-500 to-pink-500",
    shadow: "group-hover:shadow-purple-500/10",
    border: "group-hover:border-purple-500/30"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Sistemas Customizados", // Mostra que você constrói ferramentas sérias
    description: "Precisa de algo mais complexo? Desenvolvo plataformas com área de membros, painéis administrativos e gestão de clientes sob medida.",
    features: ["Painéis de Gestão", "Bancos de Dados", "Sistemas Financeiros", "Acessos Seguros"],
    color: "text-emerald-400",
    gradient: "from-emerald-500 to-green-500",
    shadow: "group-hover:shadow-emerald-500/10",
    border: "group-hover:border-emerald-500/30"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Design de Interface (UI)", // Linguagem mais profissional
    description: "Dou vida à sua marca com layouts modernos e intuitivos, focando na melhor experiência para quem usa seu site ou sistema.",
    features: ["Protótipos no Figma", "Identidade Visual", "User Experience", "Visual Moderno"],
    color: "text-orange-400",
    gradient: "from-orange-500 to-amber-500",
    shadow: "group-hover:shadow-orange-500/10",
    border: "group-hover:border-orange-500/30"
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Upgrade & Manutenção", // Focado em resolver um problema existente
    description: "Seu site atual está lento ou antigo? Eu refaço o código para deixá-lo ultra-rápido, seguro e atualizado com as tecnologias de 2026.",
    features: ["Otimização de Velocidade", "Correção de Erros", "Atualização Tecnológica", "Segurança Reforçada"],
    color: "text-rose-400",
    gradient: "from-red-500 to-rose-500",
    shadow: "group-hover:shadow-rose-500/10",
    border: "group-hover:border-rose-500/30"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Integrações Inteligentes", // Mostra conectividade
    description: "Conecto seu site com as ferramentas que você já usa: Google Sheets, CRMs, Meios de Pagamento e APIs de terceiros.",
    features: ["Pagamentos Online", "Webhooks", "Sincronização de Dados", "Conexão com Apps"],
    color: "text-yellow-400",
    gradient: "from-yellow-500 to-orange-500",
    shadow: "group-hover:shadow-yellow-500/10",
    border: "group-hover:border-yellow-500/30"
  }
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 lg:py-32 bg-neutral-950 overflow-hidden">
      
      {/* --- EFEITOS DE FUNDO --- */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm font-medium">Como posso te ajudar</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Soluções Digitais <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Para o seu Negócio
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Misturo design estratégico, código de alta performance e automação inteligente para criar ferramentas que trabalham por você 24 horas por dia.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative h-full bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-neutral-800/60 ${service.border} ${service.shadow}`}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

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
                
                <div className="space-y-3 mb-8 pt-6 border-t border-white/5">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <a 
                  href={`https://wa.me/+8108084138770?text=Olá! Gostaria de conversar sobre: ${service.title}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all duration-300"
                >
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}>
                    Quero saber mais
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
                Tem uma necessidade específica?
              </span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Fale diretamente comigo
              </span>
              <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}