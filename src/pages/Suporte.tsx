import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Suporte = () => {
  const faqs = [
    { q: "Como falo com o suporte?", a: "Envie um e-mail para suporte@humind.ia ou fale pelo WhatsApp do time." },
    { q: "Integra com quais ferramentas?", a: "WhatsApp oficial, Google Agenda, n8n, Supabase, além de provedores como Twilio, 360Dialog e Zenvia." },
    { q: "Como funciona a LGPD?", a: "Implementamos consentimento, opt-out e boas práticas. Veja nossa Política de Privacidade." },
  ];
  return (
    <main className="min-h-screen">
      <SEOHead title="Suporte | humind.ia" description="Central de ajuda: FAQs e canais de suporte." url="/suporte" schema={[{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({"@type":"Question", name: f.q, acceptedAnswer: {"@type":"Answer", text: f.a}}))
      }]} />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Suporte</h1>
          <p className="text-muted-foreground mb-10 max-w-2xl">Encontre respostas rápidas e nossos canais de atendimento.</p>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`i-${i}`} className="border border-border rounded-xl bg-card px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-5"><span className="font-semibold text-lg">{f.q}</span></AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Suporte;
