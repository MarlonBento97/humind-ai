import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Ã‰ WhatsApp oficial?",
      answer: "Sim, trabalhamos via provedores homologados pelo WhatsApp (360Dialog, Zenvia e Twilio), garantindo seguranÃ§a e conformidade total.",
    },
    {
      question: "A IA pode errar?",
      answer: "Como qualquer sistema inteligente, pode haver situaÃ§Ãµes imprevistas. Por isso implementamos regras de fallback e handoff humano automÃ¡tico para garantir sempre a melhor experiÃªncia.",
    },
    {
      question: "DÃ¡ para usar minha base de conteÃºdo?",
      answer: "Sim! VocÃª pode integrar FAQs, PDFs, documentos e dados do seu Supabase ou Google Sheets para alimentar a base de conhecimento.",
    },
    {
      question: "Agenda automÃ¡tico funciona?",
      answer: "Sim, integramos com Google Agenda e Calendly, incluindo confirmaÃ§Ã£o automÃ¡tica e lembretes para reduzir ausÃªncias.",
    },
    {
      question: "Funciona sem programador?",
      answer: "Para o bÃ¡sico sim, Ã© plug and play. Para integraÃ§Ãµes avanÃ§adas, fornecemos documentaÃ§Ã£o completa e suporte tÃ©cnico.",
    },
    {
      question: "Quantos atendentes humanos posso ter?",
      answer: "Nos planos Pro e Enterprise nÃ£o hÃ¡ limite de atendentes humanos que podem receber transferÃªncias do bot.",
    },
    {
      question: "Como funciona em relaÃ§Ã£o Ã  LGPD?",
      answer: "Logs sÃ£o opcionais, implementamos consentimento ativo, opt-out facilitado e todas as melhores prÃ¡ticas de seguranÃ§a de dados.",
    },
    {
      question: "Em quanto tempo vou ao ar?",
      answer: "O MVP bÃ¡sico fica pronto em 5-10 dias na maioria dos cenÃ¡rios. IntegraÃ§Ãµes complexas podem levar um pouco mais.",
    },
  ];

  return (
    <section className="py-24 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dÃºvidas sobre o humind.ia
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl bg-card px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

