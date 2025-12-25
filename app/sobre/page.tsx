// app/sobre/page.tsx

"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Rocket, Code2, Heart, User, Target, Zap, Shield, Globe, Star, Users as UsersIcon, Clock, CheckSquare, ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";

// Tipo para as partículas
type Particle = {
  left: string;
  top: string;
  delay: string;
  duration: string;
};

export default function SobrePage() {
  // ESTADO PARA AS PARTÍCULAS
  const [particles, setParticles] = useState<Particle[]>([]);

  // GERAR PARTÍCULAS APENAS NO CLIENTE (Evita erro de Hydration)
  useEffect(() => {
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${1 + Math.random() * 2}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <main className="bg-neutral-950 min-h-screen overflow-hidden">
      <Navbar />
      
      {/* BACKGROUND ANIMADO */}
      <div className="fixed inset-0 -z-10">
        {/* Grade de pontos */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Elementos flutuantes animados */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Linhas de conexão */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
        </div>
      </div>
      
      {/* HERO SECTION COM EFEITO PARALLAX */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        {/* Partículas animadas */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-blue-400/30 rounded-full animate-ping"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
                animationDuration: p.duration
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* TAG ELEGANTE */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 backdrop-blur-xl mb-8 group hover:border-blue-500/30 transition-all duration-500">
              <div className="relative">
                <User className="w-5 h-5 text-blue-400" />
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-blue-400 animate-pulse" />
              </div>
              <span className="text-gray-300 text-sm font-semibold tracking-wider">QUEM SOMOS</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* HEADLINE PRINCIPAL */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block">Transformamos</span>
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-gradient-x">
                  Ideias em Realidade
                </span>
                <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-spin-slow" />
              </span>
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                Na <span className="text-white font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">MK Code</span>, não desenvolvemos apenas sites — criamos 
                <span className="text-blue-300 font-medium"> experiências digitais</span> que impulsionam negócios e cativam audiências.
              </p>
            </div>
          </div>

          {/* STATS ELEGANTES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {[
              { icon: Rocket, value: "100%", label: "Performance", color: "blue" },
              { icon: Code2, value: "10+", label: "Projetos", color: "purple" },
              { icon: Clock, value: "24/7", label: "Suporte", color: "emerald" },
              { icon: UsersIcon, value: "∞", label: "Satisfação", color: "pink" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="relative group"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-${stat.color}-900/30 to-transparent border border-${stat.color}-500/20 mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSÃO E MOTIVOS */}
      <section className="relative py-20">
        {/* --- DIVIDER ADICIONADO AQUI --- */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        {/* ------------------------------- */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Target className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300 text-sm font-medium">NOSSA MISSÃO</span>
            </div>

            <h2 className="text-4xl font-bold text-white mb-6">
              Por que escolher a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                MK Code
              </span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Nossa tecnologia é construída para escalar o seu negócio com segurança e performance.
            </p>
          </div>

          {/* GRID DE DIFERENCIAIS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Desempenho Excepcional",
                description: "Cada linha de código é otimizada para velocidade e eficiência, garantindo a melhor experiência do usuário.",
                color: "blue"
              },
              {
                icon: Shield,
                title: "Segurança em Primeiro Lugar",
                description: "Implementamos as melhores práticas de segurança para proteger seus dados e a confiança dos seus clientes.",
                color: "emerald"
              },
              {
                icon: Globe,
                title: "Visão Global",
                description: "Criamos soluções que funcionam perfeitamente em qualquer dispositivo e região do mundo.",
                color: "purple"
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group flex flex-col items-center text-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-blue-500/20 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 cursor-default"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color}-900/30 to-transparent border border-${item.color}-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${item.color}-900/10`}>
                  <item.icon className={`w-8 h-8 text-${item.color}-400`} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE VALORES */}
      <section className="relative py-20">
        {/* Divider existente da seção de valores */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300 text-sm font-medium">NOSSA FILOSOFIA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Valores que nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                definem
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cada projeto é uma oportunidade de superar expectativas e criar algo extraordinário.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckSquare,
                title: "Excelência",
                description: "Compromisso com a mais alta qualidade em cada detalhe.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Heart,
                title: "Paixão",
                description: "Amamos o que fazemos e isso reflete em nossos resultados.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: UsersIcon,
                title: "Parceria",
                description: "Caminhamos juntos com você em cada etapa do processo.",
                gradient: "from-emerald-500 to-green-500"
              },
              {
                icon: Rocket,
                title: "Inovação",
                description: "Sempre um passo à frente com as melhores tecnologias.",
                gradient: "from-orange-500 to-yellow-500"
              }
            ].map((value, i) => (
              <div 
                key={i} 
                className="relative group"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur" 
                      style={{ backgroundImage: `linear-gradient(to bottom right, ${value.gradient.replace('from-', '').replace('to-', '').split(' ')[0]}, ${value.gradient.split(' ')[1]})` }}></div>
                <div className="relative bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-white/20 transition-all duration-500 h-full">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient}/20 to-transparent border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-purple-950/10 to-emerald-950/10"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              
              <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pronto para transformar sua{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                  presença digital
                </span>?
              </h2>
              
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Vamos construir algo incrível juntos. Sua visão, nossa expertise — uma combinação poderosa para o sucesso.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/+8108084138770" 
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105"
                >
                  <span>Iniciar Projeto</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
                
                <a 
                  href="/#servicos" 
                  className="group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                >
                  <span>Ver Serviços</span>
                  <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </div>
              
              <p className="text-gray-500 text-sm mt-8">
                Resposta garantida em até 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </main>
  );
}