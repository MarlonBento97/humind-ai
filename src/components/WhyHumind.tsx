import { Bot, Handshake, Gauge, MessageSquareHeart, ShieldCheck } from "lucide-react";

const WhyHumind = () => {
  const points = [
    {
      icon: MessageSquareHeart,
      title: "Tom humano, 24/7",
      desc: "Atende com empatia e no tom da sua marca, sem filas e a qualquer hora.",
    },
    {
      icon: Gauge,
      title: "Mais velocidade e escala",
      desc: "Respostas imediatas, triagem automática e handoff quando necessário.",
    },
    {
      icon: Handshake,
      title: "Integra com seu fluxo",
      desc: "Agenda, CRM e base de conhecimento para reduzir retrabalho.",
    },
    {
      icon: ShieldCheck,
      title: "Confiável e seguro",
      desc: "WhatsApp oficial e melhores práticas de privacidade e LGPD.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por que <span className="text-primary">Humind IA?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Vantagens claras em relação ao atendimento manual e soluções genéricas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {points.map((p, i) => {
            const Icon = p.icon || Bot;
            return (
              <div key={i} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all" style={{boxShadow: 'var(--shadow-card)'}}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHumind;

