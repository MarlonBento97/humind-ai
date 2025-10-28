import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const Hero = () => {
  const whatsappUrl = "https://wa.me/send?phone=5547999367017&text=Ol%C3%A1+gostaria+de+saber+mais+sobres+os+Planos+de+agentes+de+I.A";
  const calendlyUrl = "https://calendly.com/your-link";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI-themed animated background */}
      <div className="absolute inset-0 bg-background">
        {/* Neural network grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 163, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 163, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Animated scan line */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-grid-scan" />
        </div>
        
        {/* Glowing gradient orbs */}
        <div className="absolute inset-0" style={{ background: 'var(--gradient-glow)' }} />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-particle-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/70 rounded-full animate-particle-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary/50 rounded-full animate-particle-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary/80 rounded-full animate-particle-float" style={{ animationDelay: '6s' }} />
        
        {/* Data flow lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-data-flow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-data-flow" style={{ animationDelay: '3s' }} />
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
              asChild
              className="min-w-[240px]"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Testar no WhatsApp
              </a>
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              asChild
              className="min-w-[240px]"
            >
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                Agendar demonstração
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Integração em dias, não meses
          </p>
        </div>
      </div>

      {/* Decorative gradient orbs with AI theme */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-[80px] pointer-events-none animate-float" />
    </section>
  );
};

export default Hero;
