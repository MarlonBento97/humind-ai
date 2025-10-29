import { ShoppingBag, Stethoscope, Wrench, Home, UtensilsCrossed, Briefcase } from "lucide-react";
import Tilt from "@/components/effects/Tilt";

const UseCases = () => {
  const cases = [
    {
      icon: ShoppingBag,
      title: "Loja online",
      description: "Dúvidas de tamanho/entrega, status de pedido, ofertas personalizadas",
    },
    {
      icon: Stethoscope,
      title: "Clínica/Saúde",
      description: "Pré-triagem, agendamento de consultas, lembretes automáticos",
    },
    {
      icon: Wrench,
      title: "Oficina/Autopeças",
      description: "Triagem do veículo, orçamento rápido, disponibilidade de peças",
    },
    {
      icon: Home,
      title: "Imobiliária",
      description: "Filtragem de imóveis, agendamento de visitas, envio de catálogos",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurante",
      description: "Reservas, pedidos via WhatsApp, coleta de feedback",
    },
    {
      icon: Briefcase,
      title: "B2B/Serviços",
      description: "Qualificação de leads, envio de propostas, follow-ups inteligentes",
    },
  ];

  return (
    <section id="casos" className="py-24 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Casos de <span className="text-primary">uso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções adaptadas para cada tipo de negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Tilt key={index} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group hover-lift">
                <div className="pointer-events-none" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <Icon className="w-10 h-10 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

