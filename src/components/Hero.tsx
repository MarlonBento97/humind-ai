import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const whatsappNumber = "SEUNUMERO"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Quero conhecer o humind.ia 🤖");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const calendlyUrl = "https://calendly.com/your-link"; // Replace with actual Calendly link

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with image and glow */}
      <div className="absolute inset-0 bg-background">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-glow)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo placeholder - replace with actual logo */}
          <div className="inline-block mb-6">
            <h2 className="text-2xl font-bold text-primary glow-text">humind.ia</h2>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Conversas que viram{" "}
            <span className="text-primary glow-text">negócios</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Um chatbot realmente humanizado que atende no WhatsApp, agenda, responde dúvidas e 
            encaminha para o humano certo quando precisa. Rápido, educado e sempre no tom da sua marca.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="min-w-[240px]"
            >
              <MessageCircle className="w-5 h-5" />
              Testar no WhatsApp
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open(calendlyUrl, '_blank')}
              className="min-w-[240px]"
            >
              <Calendar className="w-5 h-5" />
              Agendar demonstração
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Integração em dias, não meses
          </p>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default Hero;
