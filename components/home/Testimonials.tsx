// src/components/home/Testimonials.tsx
"use client";

import { Star, Quote, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO - Hardstyle Custom",
    content: "O MK Dev transformou completamente nossa presença online. O site ficou incrível e as vendas aumentaram 40% em 3 meses. Profissionalismo total!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Ana Santos",
    role: "Dona do Restaurante Bella Vista",
    content: "Trabalho impecável! Meu restaurante agora tem reservas online e os clientes amam a experiência. Super recomendo para qualquer comércio.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Dr. Roberto Lima",
    role: "Clínica Saúde Total",
    content: "Site rápido, seguro e muito fácil de atualizar. O sistema de agendamento facilitou muito a gestão da clínica. Excelente suporte pós-venda!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150",
    gradient: "from-emerald-500 to-green-500"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-32 bg-neutral-950 overflow-hidden">
      
      {/* --- EFEITOS DE FUNDO (Igual Pricing/Contact) --- */}
      
      {/* 1. A LUZ DE DIVISÓRIA (Linha superior brilhante) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      {/* 2. Orbs de luz (Blur nos cantos) */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm font-medium">Feedback Real</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quem Contrata, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Recomenda
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A satisfação dos meus clientes é o melhor portfólio. Veja o que dizem sobre a experiência de trabalharmos juntos.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              {/* Efeito de Borda Gradient no Hover */}
              <div className={`absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/10 transition-colors duration-300`}></div>
              
              {/* Aspas Gigantes Decorativas */}
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-16 h-16 text-white" />
              </div>

              {/* Estrelas */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              {/* Texto do Depoimento */}
              <p className="text-gray-300 mb-8 italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              {/* Autor */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="relative">
                  {/* Círculo Colorido em volta da foto */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]`}></div>
                  <div 
                    className="relative w-12 h-12 rounded-full bg-cover bg-center border-2 border-neutral-900"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                </div>
                
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wide font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}