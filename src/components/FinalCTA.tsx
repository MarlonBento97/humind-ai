import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const FinalCTA = () => {
  const whatsappNumber = "SEUNUMERO";
  const whatsappMessage = encodeURIComponent("Quero dar escala ao meu atendimento com humind.ia");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const calendlyUrl = "https://calendly.com/your-link";

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Pronto para dar escala ao seu{" "}
            <span className="text-primary glow-text">atendimento?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Converse com nosso time ou agende uma demonstração de 15 minutos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="min-w-[240px]"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open(calendlyUrl, '_blank')}
              className="min-w-[240px]"
            >
              <Calendar className="w-5 h-5" />
              Ver demonstração de 15 min
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
