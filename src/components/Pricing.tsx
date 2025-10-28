import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Start",
      subtitle: "Para começar bem",
      price: "R$ 490/mês",
      features: [
        "1 canal WhatsApp",
        "Base de respostas + 200 intents",
        "Agendamentos básicos",
        "Suporte assíncrono",
      ],
    },
    {
      name: "Pro",
      subtitle: "Crescimento previsível",
      price: "R$ 1.490/mês",
      featured: true,
      features: [
        "Tudo do Start",
        "3 canais + roteamento",
        "Handoff humano + integrações n8n",
        "Relatórios e métricas",
      ],
    },
    {
      name: "Enterprise",
      subtitle: "Sob medida",
      price: "Sob consulta",
      features: [
        "Multi-times e SLAs",
        "Segurança e auditoria",
        "Onboarding dedicado",
        "Preço sob proposta",
      ],
    },
  ];

  const handleCheckout = () => {
    window.open('https://w.app/humindia', '_blank');
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Planos e <span className="text-primary">preços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border ${
                plan.featured 
                  ? 'border-primary bg-card/80 backdrop-blur-sm scale-105' 
                  : 'border-border bg-card/50'
              } transition-all duration-300 hover:border-primary/50`}
              style={{ 
                boxShadow: plan.featured 
                  ? '0 0 40px hsl(var(--primary) / 0.2)' 
                  : 'var(--shadow-card)' 
              }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

                  <Button
                    variant={plan.featured ? "hero" : "secondary"}
                    size="lg"
                    className="w-full"
                    onClick={handleCheckout}
                  >
                    Começar agora
                  </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
