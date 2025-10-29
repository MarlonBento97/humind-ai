import { TrendingUp, Clock, Target } from "lucide-react";

const SocialProof = () => {
  const metrics = [
    {
      icon: Target,
      value: "+95%",
      label: "satisfaÃ§Ã£o",
    },
    {
      icon: Clock,
      value: "-40%",
      label: "tempo mÃ©dio de resposta",
    },
    {
      icon: TrendingUp,
      value: "+27%",
      label: "conversÃµes no WhatsApp",
    },
  ];

  return (
    <section className="py-20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Confiado por times que valorizam <span className="text-primary">atendimento de verdade</span>
        </h2>

        {/* Logo bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-80 mb-12">
          {['Acme','Globex','Umbrella','Initech','Hooli'].map((brand) => (
            <div key={brand} className="text-sm md:text-base text-muted-foreground px-3 py-1 border border-border rounded-md bg-background/60">
              {brand}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 gradient-border"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" strokeWidth={2} />
                <div className="text-4xl font-bold mb-2 text-primary">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Highlight testimonial */}
        <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl border border-border bg-card/70">
          <p className="text-lg md:text-xl leading-relaxed">â€œEm poucas semanas, reduzimos o tempo mÃ©dio de resposta e aumentamos as conversÃµes no WhatsApp. A experiÃªncia do cliente melhorou muito.â€</p>
          <div className="mt-4 text-sm text-muted-foreground">â€” Ana Souza, Gerente de CX</div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

