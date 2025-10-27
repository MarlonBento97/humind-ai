import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "É WhatsApp oficial?",
      answer: "Sim, trabalhamos via provedores homologados pelo WhatsApp (360Dialog, Zenvia e Twilio), garantindo segurança e conformidade total.",
    },
    {
      question: "A IA pode errar?",
      answer: "Como qualquer sistema inteligente, pode haver situações imprevistas. Por isso implementamos regras de fallback e handoff humano automático para garantir sempre a melhor experiência.",
    },
    {
      question: "Dá para usar minha base de conteúdo?",
      answer: "Sim! Você pode integrar FAQs, PDFs, documentos e dados do seu Supabase ou Google Sheets para alimentar a base de conhecimento.",
    },
    {
      question: "Agenda automático funciona?",
      answer: "Sim, integramos com Google Agenda e Calendly, incluindo confirmação automática e lembretes para reduzir ausências.",
    },
    {
      question: "Funciona sem programador?",
      answer: "Para o básico sim, é plug and play. Para integrações avançadas, fornecemos documentação completa e suporte técnico.",
    },
    {
      question: "Quantos atendentes humanos posso ter?",
      answer: "Nos planos Pro e Enterprise não há limite de atendentes humanos que podem receber transferências do bot.",
    },
    {
      question: "Como funciona em relação à LGPD?",
      answer: "Logs são opcionais, implementamos consentimento ativo, opt-out facilitado e todas as melhores práticas de segurança de dados.",
    },
    {
      question: "Em quanto tempo vou ao ar?",
      answer: "O MVP básico fica pronto em 5-10 dias na maioria dos cenários. Integrações complexas podem levar um pouco mais.",
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
            Tire suas dúvidas sobre o humind.ia
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
