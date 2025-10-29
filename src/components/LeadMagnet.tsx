import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    try {
      const webhook = import.meta.env.VITE_LEAD_WEBHOOK_URL;
      if (webhook) {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "lead_magnet", ts: Date.now() }),
        });
      } else {
        // Placeholder: integrate com CRM/ESP/GTM
        localStorage.setItem("lead_magnet_email", email);
      }
      trackEvent("lead_magnet_submit", { category: "lead", label: "ebook" });
      setSent(true);
    } catch (_) {}
  };

  return (
    <section className="py-24 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">E-book gratuito</h2>
          <p className="text-muted-foreground mb-8">Checklist prático: como usar WhatsApp + IA para agendar serviços</p>
          {sent ? (
            <div className="p-6 rounded-xl border border-border bg-card" style={{boxShadow:'var(--shadow-card)'}}>
              <p className="mb-2">Obrigado! Enviamos o material para: <span className="font-medium">{email}</span></p>
              <p className="text-sm text-muted-foreground">Confira sua caixa de entrada e a pasta de spam.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Input
                type="email"
                placeholder="seu@email.com"
                aria-label="E-mail para receber o e-book"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-md"
                required
              />
              <Button type="submit" variant="hero" className="min-w-[180px]">Baixar e-book</Button>
            </form>
          )}
          <p className="text-xs text-muted-foreground mt-3">Sem spam. Você pode descadastrar a qualquer momento.</p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
