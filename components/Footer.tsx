"use client";

import Link from "next/link";
import { AtSign, Mail, MapPin, Gamepad2, BookOpen, Users, School } from "lucide-react";

const navigationLinks = [
  { name: "Início", href: "/" },
  { name: "Equipe", href: "/equipe" },
  { name: "Participe", href: "/participar" },
  { name: "Contato", href: "/contato" },
];

const exploreLinks = [
  { name: "Sobre o Projeto", href: "/#sobre" },
  { name: "Nossos Pilares", href: "/#pilares" },
  { name: "Oficinas", href: "/#oficinas" },
  { name: "Galeria", href: "/#galeria" },
];

const resourceLinks = [
  { name: "Jogos Educativos", href: "/jogos-educativos", icon: Gamepad2 },
  { name: "eBook Gratuito", href: "/ebook", icon: BookOpen },
  { name: "Para Escolas", href: "/participar", icon: School },
  { name: "Nossa Equipe", href: "/equipe", icon: Users },
];

const CONTACT_EMAIL = "leonardo.almeida@ufrn.br";

export const Footer = () => {
  return (
    <footer className="bg-white pt-0 pb-10 relative border-t border-border-light" id="contato">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">

          {/* Col 1: Logo */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <img src="/images/logo.png" alt="Cometa Nordestino" className="w-10 h-10 object-contain shrink-0" />
              <span className="text-brand-blue font-space-grotesk font-bold text-lg tracking-tight whitespace-nowrap">
                Cometa Nordestino
              </span>
            </Link>
            <p className="font-inter text-text-secondary text-sm leading-relaxed max-w-xs">
              Democratizando o acesso à astronomia e astronáutica nas escolas públicas do Nordeste brasileiro.
            </p>
          </div>

          {/* Col 2: Navegação */}
          <div>
            <h4 className="font-space-grotesk font-bold text-brand-blue mb-6 text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-inter text-text-secondary text-sm hover:text-brand-blue transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Explore */}
          <div>
            <h4 className="font-space-grotesk font-bold text-brand-blue mb-6 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-inter text-text-secondary text-sm hover:text-brand-blue transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Recursos e contato */}
          <div>
            <h4 className="font-space-grotesk font-bold text-brand-blue mb-6 text-sm uppercase tracking-wider">Materiais</h4>
            <ul className="flex flex-col gap-3 mb-8">
              {resourceLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-inter text-text-secondary text-sm hover:text-brand-blue transition-colors inline-flex items-center gap-2 group"
                    >
                      <Icon size={13} className="text-brand-accent opacity-70 group-hover:opacity-100" />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <Mail className="text-brand-accent shrink-0 mt-0.5" size={14} />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-inter text-text-secondary text-xs hover:text-brand-blue transition-colors break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="text-brand-accent shrink-0 mt-0.5" size={14} />
                <span className="font-inter text-text-secondary text-xs leading-relaxed">
                  UFRN — Escola de Ciências e Tecnologia<br />Natal, RN — Brasil
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Redes Sociais */}
          <div>
            <h4 className="font-space-grotesk font-bold text-brand-blue mb-6 text-sm uppercase tracking-wider">Acompanhe</h4>
            <p className="font-inter text-text-secondary text-sm leading-relaxed mb-4">
              Fotos, bastidores e novidades das nossas missões pelo Nordeste.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cometanordestino/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Cometa Nordestino"
                className="w-10 h-10 rounded-lg bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue/70 hover:text-white hover:bg-brand-blue transition-all duration-200"
              >
                <AtSign size={18} />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Enviar e-mail para o Cometa Nordestino"
                className="w-10 h-10 rounded-lg bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue/70 hover:text-white hover:bg-brand-blue transition-all duration-200"
              >
                <Mail size={18} />
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
