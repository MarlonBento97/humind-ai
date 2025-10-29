import { Heart, GitBranch, Calendar, MessageSquare, Database, Users } from "lucide-react";
import Tilt from "@/components/effects/Tilt";

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Atendimento humanizado",
      description: "Tom da sua marca, sem robôzice. Respostas naturais e empáticas.",
    },
    {
      icon: GitBranch,
      title: "Triage inteligente",
      description: "Novo cliente, suporte, orçamento ou agendamento — roteamento perfeito.",
    },
    {
      icon: Calendar,
      title: "Agendamento automático",
      description: "Google Agenda e Calendly integrados com confirmação automática.",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp oficial",
      description: "API homologada via Zenvia, 360Dialog ou Twilio.",
    },
    {
      icon: Database,
      title: "Base de conhecimento",
      description: "FAQs, documentos e integrações com Supabase prontas para uso.",
    },
    {
      icon: Users,
      title: "Handoff com contexto",
      description: "Quando precisa, entra o humano com todo o histórico da conversa.",
    },
  ];

  return (
    <section id="recursos" className="py-24 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Recursos que fazem a <span className="text-primary">diferença</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para atendimento de alto nível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Tilt key={index} className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group hover-lift" >
                <div className="pointer-events-none" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

