"use client";

import { Camera, MessageCircle, Video, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white pt-0 pb-10 relative border-t border-border-light" id="contato">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Col 1: Logo */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <img src="/images/logo.png" alt="Cometa Nordestino" className="w-10 h-10 object-contain" />
              <span className="text-brand-blue font-space-grotesk font-bold text-xl tracking-tight">
                Cometa Nordestino
              </span>
            </div>
            <p className="font-inter text-text-secondary text-sm leading-relaxed max-w-xs">
              Democratizando o acesso à astronomia e astronáutica nas escolas públicas do Nordeste brasileiro.
            </p>
          </div>

          {/* Col 2: Links */}
          <div>
            <h4 className="font-space-grotesk font-bold text-brand-blue mb-6 text-sm uppercase tracking-wider">Links Rápidos</h4>
            <ul className="flex flex-col gap-3">
              {["Início", "Sobre o Projeto", "Nossos Pilares", "Oficinas", "Galeria"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-inter text-text-secondary text-sm hover:text-brand-blue transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contato */}
          <div>
            <h4 className="font-space-grotesk font-bold text-brand-blue mb-6 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="text-brand-accent shrink-0 mt-0.5" size={16} />
                <span className="font-inter text-text-secondary text-sm">contato@cometanordestino.edu.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-accent shrink-0 mt-0.5" size={16} />
                <span className="font-inter text-text-secondary text-sm">
                  UFRN - Escola de Ciências e Tecnologia<br />Natal, RN - Brasil
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Redes Sociais */}
          <div>
            <h4 className="font-space-grotesk font-bold text-brand-blue mb-6 text-sm uppercase tracking-wider">Acompanhe</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue/70 hover:text-white hover:bg-brand-blue transition-all duration-200">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue/70 hover:text-white hover:bg-brand-blue transition-all duration-200">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue/70 hover:text-white hover:bg-brand-blue transition-all duration-200">
                <Video size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-inter text-text-muted text-xs">
            Desenvolvido por Ezequiel Junior e Elaine Oliveira · Colaboração: Alanna Costa · Supervisão: Prof. Leonardo Almeida
          </p>
          <p className="font-inter text-text-muted text-xs">
            © {new Date().getFullYear()} Cometa Nordestino — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
