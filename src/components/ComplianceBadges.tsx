import { ShieldCheck, MessageSquare } from "lucide-react";

const ComplianceBadges = () => {
  const items = [
    { icon: MessageSquare, label: "Atendimento via API oficial WhatsApp" },
    { icon: ShieldCheck, label: "LGPD Ready" },
    { icon: ShieldCheck, label: "Criptografia em trânsito (TLS)" },
  ];

  return (
    <section className="py-14 bg-card/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div key={idx} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card" style={{boxShadow:'var(--shadow-card)'}}>
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{it.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComplianceBadges;

