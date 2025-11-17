import SEOHead from "@/components/SEOHead";
import BackButton from "@/components/BackButton";
import { Users, Target, Heart, Zap, TrendingUp, MessageSquare } from "lucide-react";

const team = [
  {
    name: "Marlon Bento",
    role: "CEO & Fundador",
    bio: "Especialista em automação e inteligência artificial aplicada a negócios. Mais de 10 anos de experiência em transformação digital.",
    photo: "/placeholder.svg",
  },
  {
    name: "Ana Silva",
    role: "CTO",
    bio: "Arquiteta de software com foco em soluções escaláveis. Lidera a equipe técnica com expertise em cloud computing e microserviços.",
    photo: "/placeholder.svg",
  },
  {
    name: "Carlos Mendes",
    role: "Head de Produto",
    bio: "Product Manager com vasta experiência em SaaS B2B. Responsável pela estratégia de produto e experiência do usuário.",
    photo: "/placeholder.svg",
  },
];

const values = [
  { icon: Zap, title: "Inovação", desc: "Buscamos sempre as melhores tecnologias para entregar soluções de ponta" },
  { icon: Heart, title: "Empatia", desc: "Colocamos o cliente no centro de tudo que fazemos" },
  { icon: Target, title: "Resultados", desc: "Focamos em entregar valor real e mensurável para nossos clientes" },
  { icon: Users, title: "Transparência", desc: "Comunicação clara e honesta em todas as relações" }
];

const achievements = [
  { number: "500+", label: "Clientes Atendidos" },
  { number: "2M+", label: "Mensagens Processadas" },
  { number: "98%", label: "Satisfação dos Clientes" },
  { number: "<2min", label: "Tempo Médio de Resposta" }
];

const Team = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Quem Somos | humind.ia"
        description="Conheça a equipe humind.ia: especialistas em automação de atendimento com WhatsApp e IA. Nossa missão é transformar a comunicação empresarial."
        url="/quem-somos"
      />
      
      {/* História */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <BackButton />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quem Somos</h1>
          
          <div className="max-w-4xl mb-16">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              Nossa História
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A humind.ia nasceu da necessidade de tornar o atendimento ao cliente mais eficiente e humano ao mesmo tempo. 
              Percebemos que muitas empresas perdiam oportunidades por não conseguirem responder seus clientes de forma rápida e personalizada.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Fundada em 2023, combinamos inteligência artificial de ponta com a praticidade do WhatsApp para criar uma plataforma 
              que automatiza o atendimento sem perder o toque humano. Hoje, ajudamos centenas de empresas a melhorarem seus resultados 
              através de uma comunicação mais inteligente e eficaz.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nossa missão é democratizar o acesso à tecnologia de IA conversacional, permitindo que empresas de todos os tamanhos 
              ofereçam um atendimento de classe mundial.
            </p>
          </div>

          {/* Valores */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <div key={i} className="p-6 rounded-xl border border-border bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <value.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conquistas */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Nossas Conquistas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, i) => (
                <div key={i} className="text-center p-6 rounded-xl border border-border bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipe */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Nossa Equipe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div key={i} className="text-center p-6 rounded-xl border border-border bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                  />
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
