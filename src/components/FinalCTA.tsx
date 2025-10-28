import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const FinalCTA = () => {
  const whatsappUrl = "https://wa.me/5547999367017?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20Planos%20de%20agentes%20de%20I.A";
  const calendlyUrl = "https://calendly.com/your-link";

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* AI-themed background effects */}
      <div className="absolute inset-0">
        {/* Neural grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(0, 163, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 163, 255, 0.15) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-particle-float" />
        <div
          className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-particle-float"
          style={{ animationDelay: "3s" }}
        />

        {/* Data flow line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-data-flow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Pronto para dar escala ao seu <span className="text-primary glow-text">atendimento?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Converse com nosso time ou agende uma demonstração de 15 minutos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="hero" size="lg" asChild className="min-w-[240px]">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild className="min-w-[240px]">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                Ver demonstração de 15 min
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
