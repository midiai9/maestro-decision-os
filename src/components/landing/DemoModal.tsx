import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

export function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    fd.forEach((v, k) => params.append(k, String(v)));
    const subject = encodeURIComponent("Demo Estratégica · Maestro AI OS");
    const body = encodeURIComponent(
      `Nome: ${fd.get("nome")}\nE-mail: ${fd.get("email")}\nEmpresa: ${fd.get("empresa")}\nCargo: ${fd.get("cargo")}\nTelefone: ${fd.get("telefone") || "-"}\n\nMensagem:\n${fd.get("mensagem") || "-"}`,
    );
    window.location.href = `mailto:elcio@aodigital.com.br?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "oklch(0 0 0 / 0.65)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="surface-card w-full max-w-lg p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="tag-pill mb-3">Demo Estratégica</p>
                <h3 className="text-2xl font-display text-white">Vamos conversar</h3>
                <p className="text-sm text-offwhite mt-1 opacity-80">
                  30 minutos · sem compromisso · NDA disponível
                </p>
              </div>
              <button
                aria-label="Fechar"
                onClick={onClose}
                className="text-white/60 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            {sent ? (
              <div className="py-10 text-center">
                <p className="text-white text-lg mb-2">Obrigado.</p>
                <p className="text-offwhite text-sm opacity-80">
                  Abrimos seu cliente de e-mail para concluir o envio. Responderemos em até 24h úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {[
                  { name: "nome", label: "Nome", required: true },
                  { name: "email", label: "E-mail corporativo", type: "email", required: true },
                  { name: "empresa", label: "Empresa", required: true },
                  { name: "cargo", label: "Cargo", required: true },
                  { name: "telefone", label: "Telefone (opcional)" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="text-xs uppercase tracking-widest text-offwhite/70 font-semibold">
                      {f.label}
                    </label>
                    <input
                      name={f.name}
                      type={f.type || "text"}
                      required={f.required}
                      className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white outline-none focus:border-brand-purple-light"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs uppercase tracking-widest text-offwhite/70 font-semibold">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    name="mensagem"
                    rows={3}
                    className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white outline-none focus:border-brand-purple-light"
                  />
                </div>
                <button type="submit" className="btn-primary-light w-full justify-center mt-2">
                  Solicitar contato <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
