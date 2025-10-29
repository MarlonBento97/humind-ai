import { Radio, Brain, UserCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Radio,
      title: "Capta & entende",
      description: "Identifica intenÃ§Ã£o, urgÃªncia e canal do cliente em tempo real",
    },
    {
      icon: Brain,
      title: "Resolve & registra",
      description: "Responde, consulta dados e salva histÃ³rico de forma inteligente",
    },
    {
      icon: UserCheck,
      title: "Encaminha & agenda",
      description: "Passa para humano certo ou agenda automaticamente quando necessÃ¡rio",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            TrÃªs etapas simples para revolucionar seu atendimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                
                <Icon className="w-14 h-14 mb-6 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

