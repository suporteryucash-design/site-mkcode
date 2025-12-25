// src/components/home/Contact.tsx
"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle, MessageSquare, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="relative py-20 lg:py-32 bg-neutral-950 overflow-hidden">
      
      {/* --- EFEITOS DE FUNDO IGUAIS AO PRICING --- */}
      
      {/* 1. A LUZ DE DIVISÓRIA (Linha superior brilhante) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      {/* 2. Orbs de luz (Blur) */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm font-medium">Contato Direto</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos Tirar sua Ideia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Do Papel?
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Seja para um orçamento sem compromisso ou apenas para tirar dúvidas. Estou pronto para ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Coluna da Esquerda: Informações e Processo */}
          <div className="space-y-12">
            
            {/* Cards de Contato Rápido */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://wa.me/+8108084138770"
                target="_blank"
                className="group p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-bold mb-1">WhatsApp</h3>
                <p className="text-gray-400 text-sm mb-3">Resposta rápida</p>
                
              </a>

              <div className="group p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-bold mb-1">Email</h3>
                <p className="text-gray-400 text-sm mb-3">contato@mkdev.com</p>
                <span className="text-purple-400 text-sm flex items-center gap-1">
                  Respondo em 24h
                </span>
              </div>
            </div>

            {/* Linha do Tempo do Processo */}
            <div className="p-8 rounded-3xl bg-neutral-900/30 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-8">Como funciona o trabalho?</h3>
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-500/50 before:to-purple-500/50 before:content-['']">
                
                {[
                  { title: "Briefing", desc: "Entendo seu objetivo e necessidades." },
                  { title: "Proposta", desc: "Envio orçamento e cronograma detalhado." },
                  { title: "Criação", desc: "Desenvolvimento do design e código." },
                  { title: "Entrega", desc: "Seu site no ar com treinamento incluso." }
                ].map((step, i) => (
                  <div key={i} className="relative flex items-start gap-6 group">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                      <span className="text-sm font-bold text-gray-400 group-hover:text-blue-400">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Coluna da Direita: Formulário */}
          <div className="relative">
            {/* Brilho de fundo do formulário */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl -z-10"></div>
            
            <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Mensagem Enviada!</h3>
                  <p className="text-gray-400 max-w-xs mx-auto">
                    Recebi seu contato. Em breve retornarei com uma resposta para o seu email.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Envie um Email</h3>
                    <p className="text-gray-400 text-sm">Preencha os campos abaixo para iniciar seu projeto.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 ml-1">Nome</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Telefone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(00) 00000-0000"
                          className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 ml-1">Mensagem</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Conte um pouco sobre sua ideia..."
                        className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}