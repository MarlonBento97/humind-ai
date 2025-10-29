import SEOHead from "@/components/SEOHead";

const team = [
  {
    name: "Marlo",
    role: "Fundador & Produto",
    bio: "Empreendedor, apaixonado por IA aplicada ao atendimento e crescimento.",
    photo: "/placeholder.svg",
  },
  {
    name: "Ana Souza",
    role: "Sucesso do Cliente",
    bio: "Focada em resultados e experiência do cliente de ponta a ponta.",
    photo: "/placeholder.svg",
  },
  {
    name: "João Lima",
    role: "Engenharia",
    bio: "Integrações, dados e confiabilidade para operar em escala.",
    photo: "/placeholder.svg",
  },
];

const Team = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Quem Somos — Equipe | humind.ia"
        description="Conheça a equipe por trás do humind.ia: produto, sucesso do cliente e engenharia."
        url="/quem-somos"
      />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quem Somos</h1>
          <p className="text-muted-foreground max-w-3xl mb-12">
            Nosso time combina tecnologia e empatia para transformar o atendimento via WhatsApp em resultados reais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="p-6 rounded-xl border border-border bg-card" style={{boxShadow:'var(--shadow-card)'}}>
                <img src={m.photo} alt={`Foto de ${m.name}`} className="w-24 h-24 rounded-full object-cover mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold">{m.name}</h3>
                <p className="text-sm text-primary mb-2">{m.role}</p>
                <p className="text-sm text-muted-foreground">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
