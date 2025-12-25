// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Globe, ChevronDown, Briefcase, Car, Users, ArrowRight, ShieldCheck, User } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLangOpen(false);
  };

  const toggleLang = () => {
    setIsLangOpen(!isLangOpen);
    setIsMenuOpen(false);
  };

  const handleLangClickMobile = () => {
    if (window.innerWidth < 768) {
      toggleLang();
    } else {
      toggleLang();
    }
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsLangOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[1px] z-50 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
        <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-90 blur-[1px]"></div>
        <div className="absolute top-0 left-1/3 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-60 blur-[2px]"></div>
      </div>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-3" 
            : "bg-transparent py-4" 
        }`}
      >
        <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80 animate-pulse"></div>
          <div className="absolute top-0 left-[-50%] w-[200%] h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 blur-[1px] animate-shine" 
               style={{ animation: 'shine 3s infinite linear' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-12"> 
          
          {/* LOGO (INTACTA) */}
          <Link href="/" className="relative z-10 group block -my-8"> 
            <Image 
              src="/logo.png" 
              alt="Logo MK Dev" 
              width={300}
              height={120} 
              className="object-contain h-27 md:h-35 w-auto transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]" 
              priority 
            />
            <div className="absolute -inset-4 bg-blue-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {/* Link Sobre */}
            <Link href="/sobre" className="text-gray-300 hover:text-white text-sm font-medium transition-colors uppercase tracking-wider relative group">
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Links Atualizados com '/' antes do # */}
            <Link href="/#servicos" className="text-gray-300 hover:text-white text-sm font-medium transition-colors uppercase tracking-wider relative group">
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#projetos" className="text-gray-300 hover:text-white text-sm font-medium transition-colors uppercase tracking-wider relative group">
              Projetos
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#planos" className="text-gray-300 hover:text-white text-sm font-medium transition-colors uppercase tracking-wider relative group">
              Planos
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Dropdown Idioma Desktop */}
            <div className="relative">
              <button 
                onClick={toggleLang}
                className="text-gray-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wider cursor-pointer flex items-center gap-1 group relative"
              >
                <div className="flex items-center gap-1 relative z-10">
                  <Globe className="h-4 w-4 text-blue-600 group-hover:text-blue-500 transition-colors" />
                  Idioma (PT)
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${isLangOpen ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-white'}`} />
                <div className="absolute -inset-2 bg-blue-600/5 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-4 w-56 bg-gradient-to-b from-neutral-900 to-black rounded-xl shadow-2xl border border-neutral-800 overflow-hidden animate-in fade-in zoom-in duration-200">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  
                  <div className="p-3 border-b border-neutral-800 bg-gradient-to-r from-blue-900/10 to-transparent relative">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span className="text-white text-sm font-bold">Selecione o Idioma</span>
                    </div>
                  </div>
                  
                  <div className="p-1 space-y-1">
                    <button 
                      onClick={() => setIsLangOpen(false)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 hover:bg-neutral-800/70 hover:border-blue-600/20 hover:border relative group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🇧🇷</span>
                        <div className="text-left">
                          <div className="font-medium text-white">Português</div>
                          <div className="text-xs text-gray-400">Brasil</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></div>
                        <span className="text-blue-500 text-xs font-bold">ATIVO</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </button>

                    <button 
                      onClick={() => setIsLangOpen(false)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 hover:bg-neutral-800/70 hover:border-blue-600/20 hover:border relative group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🇺🇸</span>
                        <div className="text-left">
                          <div className="font-medium text-white">English</div>
                          <div className="text-xs text-gray-400">United States</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </button>

                    <button 
                      onClick={() => setIsLangOpen(false)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 hover:bg-neutral-800/70 hover:border-blue-600/20 hover:border relative group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🇪🇸</span>
                        <div className="text-left">
                          <div className="font-medium text-white">Español</div>
                          <div className="text-xs text-gray-400">España</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </button>
                  </div>

                  <div className="p-3 border-t border-neutral-800 bg-black/50">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Idioma atual:</span>
                      <span className="text-blue-500 font-bold">PT</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://wa.me/+8108084138770"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 text-sm shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Orçamento</span>
              <div className="absolute -inset-1 bg-blue-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </a>
          </div>

          {/* ÍCONES MOBILE */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={handleLangClickMobile}
              className={`transition-colors p-2 ${isLangOpen ? 'text-blue-600' : 'text-white hover:text-blue-600'}`}
            >
              <Globe className="h-6 w-6" />
            </button>
            <button 
              onClick={toggleMenu}
              className={`transition-colors p-2 ${isMenuOpen ? 'text-blue-600' : 'text-white hover:text-blue-600'}`}
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-black via-neutral-950 to-black border-t border-neutral-800 absolute w-full left-0 z-50 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-5 duration-200">
            {/* Linha decorativa azul */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mb-4"></div>
            
            <div className="flex flex-col h-full px-4">
              {/* Menu Header */}
              <div className="py-6 border-b border-neutral-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
                  <h3 className="text-white font-bold text-xl tracking-wider">Menu de Navegação</h3>
                </div>
                <p className="text-gray-400 text-sm pl-4">Explore todas as seções do site</p>
              </div>
              
              {/* Menu Items */}
              <div className="py-6 space-y-2">
                <Link 
                  href="/sobre" 
                  onClick={closeAllMenus}
                  className="group flex items-center justify-between bg-neutral-900/50 hover:bg-neutral-800/70 p-4 rounded-xl border border-neutral-800 hover:border-blue-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-900/20 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <User className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="block font-bold text-white text-lg group-hover:text-blue-500 transition-colors">
                        Sobre
                      </span>
                      <span className="text-gray-400 text-sm">Quem somos</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </Link>

                <Link 
                  href="/#servicos" 
                  onClick={closeAllMenus}
                  className="group flex items-center justify-between bg-neutral-900/50 hover:bg-neutral-800/70 p-4 rounded-xl border border-neutral-800 hover:border-blue-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-900/20 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <Briefcase className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="block font-bold text-white text-lg group-hover:text-blue-500 transition-colors">
                        Serviços
                      </span>
                      <span className="text-gray-400 text-sm">O que oferecemos</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </Link>

                <Link 
                  href="/#projetos" 
                  onClick={closeAllMenus}
                  className="group flex items-center justify-between bg-neutral-900/50 hover:bg-neutral-800/70 p-4 rounded-xl border border-neutral-800 hover:border-blue-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-900/20 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <Car className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="block font-bold text-white text-lg group-hover:text-blue-500 transition-colors">
                        Projetos
                      </span>
                      <span className="text-gray-400 text-sm">Nosso portfólio</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </Link>

                <Link 
                  href="/#planos" 
                  onClick={closeAllMenus}
                  className="group flex items-center justify-between bg-neutral-900/50 hover:bg-neutral-800/70 p-4 rounded-xl border border-neutral-800 hover:border-blue-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-900/20 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <Users className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="block font-bold text-white text-lg group-hover:text-blue-500 transition-colors">
                        Planos
                      </span>
                      <span className="text-gray-400 text-sm">Opções de contratação</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
              
              {/* Contact CTA */}
              <div className="mt-auto py-6 border-t border-neutral-800">
                <div className="bg-gradient-to-r from-blue-600/10 to-blue-900/10 p-6 rounded-2xl border border-blue-600/30 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
                    <h4 className="text-white font-bold text-lg">Solicitar Orçamento</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-6">
                    Entre em contato agora mesmo para um orçamento personalizado.
                  </p>
                  <a 
                    href="https://wa.me/+8108084138770" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={closeAllMenus}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-900/30"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Orçamento via WhatsApp</span>
                  </a>
                </div>
                
                {/* Branding */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                    <span>MK CODE - Soluções Digitais Personalizadas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MENU IDIOMA MOBILE (TELA CHEIA SEPARADA) */}
        {isLangOpen && (
          <div className="md:hidden bg-gradient-to-b from-black via-neutral-950 to-black border-t border-neutral-800 absolute w-full left-0 z-50 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-5 duration-200">
            {/* Linha decorativa azul */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mb-4"></div>
            
            <div className="flex flex-col h-full px-4">
              {/* Language Header */}
              <div className="py-6 border-b border-neutral-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
                  <h3 className="text-white font-bold text-xl tracking-wider">Selecionar Idioma</h3>
                </div>
                <p className="text-gray-400 text-sm pl-4">Escolha o idioma de sua preferência</p>
              </div>
              
              {/* Language Options */}
              <div className="py-6 space-y-3">
                <button 
                  onClick={() => setIsLangOpen(false)}
                  className="group w-full flex items-center justify-between bg-neutral-900/50 hover:bg-neutral-800/70 p-4 rounded-xl border border-neutral-800 hover:border-blue-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">🇧🇷</div>
                    <div className="text-left">
                      <span className="block font-bold text-white text-lg group-hover:text-blue-500 transition-colors">Português</span>
                      <span className="text-gray-400 text-sm">Brasil</span>
                    </div>
                  </div>
                  <div className="h-3 w-3 bg-blue-600 rounded-full animate-pulse"></div>
                </button>

                <button 
                  onClick={() => setIsLangOpen(false)}
                  className="group w-full flex items-center justify-between bg-neutral-900/50 hover:bg-neutral-800/70 p-4 rounded-xl border border-neutral-800 hover:border-blue-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">🇺🇸</div>
                    <div className="text-left">
                      <span className="block font-bold text-white text-lg group-hover:text-blue-500 transition-colors">English</span>
                      <span className="text-gray-400 text-sm">United States</span>
                    </div>
                  </div>
                </button>

                <button 
                  onClick={() => setIsLangOpen(false)}
                  className="group w-full flex items-center justify-between bg-neutral-900/50 hover:bg-neutral-800/70 p-4 rounded-xl border border-neutral-800 hover:border-blue-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">🇪🇸</div>
                    <div className="text-left">
                      <span className="block font-bold text-white text-lg group-hover:text-blue-500 transition-colors">Español</span>
                      <span className="text-gray-400 text-sm">España</span>
                    </div>
                  </div>
                </button>
              </div>
              
              {/* Footer */}
              <div className="mt-auto py-6 border-t border-neutral-800 text-center">
                <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
                  <Globe className="h-4 w-4 text-blue-600" />
                  <span>Idioma atual: PT</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine { animation: shine 3s infinite linear; }
      `}</style>
    </>
  );
}