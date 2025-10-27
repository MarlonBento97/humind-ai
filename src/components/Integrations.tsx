const Integrations = () => {
  const integrations = [
    "WhatsApp Business API",
    "n8n",
    "Supabase",
    "Google Agenda",
    "OpenAI",
    "Anthropic",
    "Mistral",
    "Twilio",
    "360Dialog",
    "Zenvia",
    "Gmail",
    "Google Sheets",
    "Google Drive",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Conecta onde o seu time já está
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Integração nativa com as ferramentas que você já usa
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 text-center"
              >
                <div className="font-semibold text-sm text-foreground">
                  {integration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
