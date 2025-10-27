import { TrendingUp, Clock, Target } from "lucide-react";

const SocialProof = () => {
  const metrics = [
    {
      icon: Target,
      value: "+95%",
      label: "satisfação",
    },
    {
      icon: Clock,
      value: "-40%",
      label: "tempo médio de resposta",
    },
    {
      icon: TrendingUp,
      value: "+27%",
      label: "conversões no WhatsApp",
    },
  ];

  return (
    <section className="py-20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Confiado por times que valorizam{" "}
          <span className="text-primary">atendimento de verdade</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" strokeWidth={2} />
                <div className="text-4xl font-bold mb-2 text-primary">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
