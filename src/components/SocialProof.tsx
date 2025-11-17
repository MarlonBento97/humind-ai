import { TrendingUp, Clock, Target } from "lucide-react";
const SocialProof = () => {
  const metrics = [{
    icon: Target,
    value: "+95%",
    label: "satisfação"
  }, {
    icon: Clock,
    value: "-40%",
    label: "tempo médio de resposta"
  }, {
    icon: TrendingUp,
    value: "+27%",
    label: "conversões no WhatsApp"
  }];
  return <section className="py-20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        

        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
          {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return <div key={index} className="text-center p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 gradient-border" style={{
            boxShadow: 'var(--shadow-card)'
          }}>
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" strokeWidth={2} />
                <div className="text-4xl font-bold mb-2 text-primary">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>;
        })}
        </div>

        <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl border border-border bg-card/70">
          <p className="text-lg md:text-xl leading-relaxed">
            “Em poucas semanas, reduzimos o tempo médio de resposta e aumentamos as conversões no WhatsApp. A experiência
            do cliente melhorou muito.”
          </p>
          <div className="mt-4 text-sm text-muted-foreground">— Ana Souza, Gerente de CX</div>
        </div>
      </div>
    </section>;
};
export default SocialProof;