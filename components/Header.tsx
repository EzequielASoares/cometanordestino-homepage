"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Equipe", href: "/equipe" },
  { name: "Jogos Educativos", href: "/jogos-educativos" },
  { name: "eBook", href: "/ebook" },
  { name: "Contato", href: "/contato" },
  { name: "Participe", href: "/participar" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (href: string) => {
    if (href.startsWith("/")) return href;
    if (href === "#") return isHome ? "#" : "/";
    return isHome ? href : `/${href}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border-light shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href={isHome ? "#" : "/"} className="flex items-center gap-2.5">
          <img src="/images/logo.png" alt="Cometa Nordestino" className="h-10 w-10 object-contain" />
          <span
            className={`font-space-grotesk font-bold text-xl tracking-tight transition-colors ${
              scrolled ? "text-brand-blue" : "text-white"
            }`}
          >
            Cometa Nordestino
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={getHref(link.href)}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? scrolled
                    ? "text-brand-blue font-semibold"
                    : "text-brand-accent font-semibold"
                  : scrolled
                    ? "text-text-secondary hover:text-brand-blue"
                    : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>



        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden transition-colors ${scrolled ? "text-brand-blue" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-border-light overflow-hidden"
          >
            <nav className="flex flex-col items-center py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={getHref(link.href)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === link.href
                      ? "text-brand-blue font-semibold"
                      : "text-text-secondary hover:text-brand-blue"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
