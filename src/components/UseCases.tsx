import { ShoppingBag, Stethoscope, Wrench, Home, UtensilsCrossed, Briefcase } from "lucide-react";
import Tilt from "@/components/effects/Tilt";

const UseCases = () => {
  const cases = [
    {
      icon: ShoppingBag,
      title: "Loja online",
      description: "DÃºvidas de tamanho/entrega, status de pedido, ofertas personalizadas",
    },
    {
      icon: Stethoscope,
      title: "ClÃ­nica/SaÃºde",
      description: "PrÃ©-triagem, agendamento de consultas, lembretes automÃ¡ticos",
    },
    {
      icon: Wrench,
      title: "Oficina/AutopeÃ§as",
      description: "Triagem do veÃ­culo, orÃ§amento rÃ¡pido, disponibilidade de peÃ§as",
    },
    {
      icon: Home,
      title: "ImobiliÃ¡ria",
      description: "Filtragem de imÃ³veis, agendamento de visitas, envio de catÃ¡logos",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurante",
      description: "Reservas, pedidos via WhatsApp, coleta de feedback",
    },
    {
      icon: Briefcase,
      title: "B2B/ServiÃ§os",
      description: "QualificaÃ§Ã£o de leads, envio de propostas, follow-ups inteligentes",
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
            SoluÃ§Ãµes adaptadas para cada tipo de negÃ³cio
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

