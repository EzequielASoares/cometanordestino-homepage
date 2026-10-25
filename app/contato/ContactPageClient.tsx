"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  AtSign,
  Send,
  Copy,
  Check,
  Sparkles,
  Handshake,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CONTACT_EMAIL = "leonardo.almeida@ufrn.br";
const INSTAGRAM_URL = "https://www.instagram.com/cometanordestino/";

const subjects = [
  "Solicitar visita em escola",
  "Quero fazer parte da equipe",
  "Parceria ou colaboração",
  "Dúvida sobre o eBook",
  "Outro assunto",
];

export const ContactPageClient = () => {
  const reveal = useScrollReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    field: "name" | "email" | "subject" | "message",
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
      `Assunto: ${form.subject}`,
      "",
      form.message,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* ── CONTACT SECTION ── */}
      <section className="w-full bg-slate-50/50 py-16 md:py-24 relative z-10 flex-grow">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 items-start">
            {/* ── LEFT: INFO ── */}
            <motion.div {...reveal} className="lg:col-span-2 flex flex-col gap-5">
              <div>
                <span className="font-space-mono text-brand-blue text-xs uppercase tracking-widest font-bold flex items-center gap-1.5 mb-2">
                  <Sparkles size={11} className="text-brand-accent" /> Fale conosco
                </span>
                <h2 className="font-space-grotesk font-bold text-text-primary text-2xl mb-3">
                  Vamos explorar o cosmos juntos
                </h2>
                <p className="font-inter text-text-secondary text-sm md:text-base leading-relaxed">
                  Estamos prontos para receber suas ideias, responder às suas perguntas e
                  cooperar em futuros projetos. Não hesite em nos contatar a qualquer momento.
                </p>
              </div>

              {/* Email card */}
              <div className="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 hover:border-brand-blue/10 hover:shadow-sm transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-brand-blue-pale text-brand-blue flex items-center justify-center shrink-0">
                  <Mail size={19} />
                </div>
                <div className="min-w-0">
                  <p className="font-space-mono text-[10px] text-brand-blue/60 uppercase tracking-widest font-bold mb-1">
                    E-mail
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-inter text-text-primary text-sm font-medium hover:text-brand-blue transition-colors break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copiar e-mail"
                  className="ml-auto shrink-0 w-8 h-8 rounded-lg text-text-muted hover:text-brand-blue hover:bg-brand-blue-pale flex items-center justify-center transition-colors"
                >
                  {copied ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Instagram card */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 hover:border-brand-blue/10 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-accent-light text-brand-accent flex items-center justify-center shrink-0">
                  <AtSign size={19} />
                </div>
                <div>
                  <p className="font-space-mono text-[10px] text-brand-blue/60 uppercase tracking-widest font-bold mb-1">
                    Instagram
                  </p>
                  <p className="font-inter text-text-primary text-sm font-medium">
                    @cometanordestino
                  </p>
                  <p className="font-inter text-text-muted text-xs mt-0.5">
                    Fotos, bastidores e novidades das missões
                  </p>
                </div>
              </a>

              {/* Address card */}
              <div className="bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 hover:border-brand-blue/10 hover:shadow-sm transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-brand-blue-pale text-brand-blue flex items-center justify-center shrink-0">
                  <MapPin size={19} />
                </div>
                <div>
                  <p className="font-space-mono text-[10px] text-brand-blue/60 uppercase tracking-widest font-bold mb-1">
                    Onde estamos
                  </p>
                  <p className="font-inter text-text-primary text-sm font-medium">
                    UFRN — Escola de Ciências e Tecnologia
                  </p>
                  <p className="font-inter text-text-muted text-xs mt-0.5">
                    Natal, Rio Grande do Norte — Brasil
                  </p>
                </div>
              </div>

              {/* Partnerships note */}
              <div className="rounded-2xl bg-brand-blue p-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.18),transparent_60%)] pointer-events-none" />
                <div className="relative z-10 flex items-start gap-3">
                  <Handshake size={19} className="text-brand-accent shrink-0 mt-0.5" />
                  <p className="font-inter text-white/80 text-xs md:text-sm leading-relaxed">
                    <strong className="text-white font-semibold">Escolas, universidades e parceiros:</strong>{" "}
                    escreva para nós contando sua ideia e retornaremos com os próximos passos.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: FORM ── */}
            <motion.div {...reveal} className="lg:col-span-3 w-full">
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-100 rounded-3xl p-6 md:p-9 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue-pale text-brand-blue flex items-center justify-center">
                    <Send size={19} />
                  </div>
                  <div>
                    <h2 className="font-space-grotesk font-bold text-text-primary text-xl">
                      Envie sua mensagem
                    </h2>
                    <p className="font-inter text-text-muted text-xs">
                      Preencha os campos e abriremos seu aplicativo de e-mail.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="flex flex-col gap-1.5">
                      <span className="font-inter text-text-secondary text-xs font-semibold">
                        Seu nome
                      </span>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Como podemos te chamar?"
                        className="w-full rounded-xl border border-border-light bg-surface-alt px-4 py-3 font-inter text-sm text-text-primary placeholder:text-text-muted/70 focus:outline-none focus:border-brand-blue/40 focus:bg-white transition-colors"
                      />
                    </label>

                    <label className="flex flex-col gap-1.5">
                      <span className="font-inter text-text-secondary text-xs font-semibold">
                        Seu e-mail
                      </span>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="voce@exemplo.com"
                        className="w-full rounded-xl border border-border-light bg-surface-alt px-4 py-3 font-inter text-sm text-text-primary placeholder:text-text-muted/70 focus:outline-none focus:border-brand-blue/40 focus:bg-white transition-colors"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="font-inter text-text-secondary text-xs font-semibold">
                      Assunto
                    </span>
                    <select
                      value={form.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className="w-full rounded-xl border border-border-light bg-surface-alt px-4 py-3 font-inter text-sm text-text-primary focus:outline-none focus:border-brand-blue/40 focus:bg-white transition-colors"
                    >
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="font-inter text-text-secondary text-xs font-semibold">
                      Mensagem
                    </span>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Conte um pouco sobre sua escola, instituição ou ideia..."
                      className="w-full rounded-xl border border-border-light bg-surface-alt px-4 py-3 font-inter text-sm text-text-primary placeholder:text-text-muted/70 focus:outline-none focus:border-brand-blue/40 focus:bg-white transition-colors resize-y"
                    />
                  </label>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-light transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    <Send size={17} className="group-hover:translate-x-0.5 transition-transform" />
                    Enviar mensagem
                  </button>

                  {sent && (
                    <p className="flex items-center justify-center gap-2 font-inter text-emerald-700 text-xs text-center">
                      <CheckCircle2 size={14} />
                      Seu aplicativo de e-mail deve abrir em instantes. Se não abrir, escreva
                      direto para {CONTACT_EMAIL}.
                    </p>
                  )}

                  <p className="flex items-center justify-center gap-1.5 font-inter text-text-muted text-[11px] text-center">
                    <BookOpen size={12} />
                    Também respondemos dúvidas sobre o eBook e os jogos educativos.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
