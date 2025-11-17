import SEOHead from "@/components/SEOHead";
import BackButton from "@/components/BackButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Suporte = () => {
  const faqs = [
    // Geral
    { q: "Como falo com o suporte?", a: "Envie um e-mail para marlon.bento@humindia.com.br ou fale pelo WhatsApp (47) 999367017." },
    { q: "Quanto custa o humind.ia?", a: "Temos planos flexíveis que se adaptam ao tamanho do seu negócio. Entre em contato para receber uma proposta personalizada." },
    { q: "Como funciona o período de teste?", a: "Oferecemos um período de teste gratuito para você experimentar todas as funcionalidades da plataforma antes de assinar." },
    { q: "Posso cancelar a qualquer momento?", a: "Sim! Você pode cancelar seu plano a qualquer momento, sem multas ou taxas de cancelamento." },
    { q: "Quais formas de pagamento são aceitas?", a: "Aceitamos cartão de crédito, boleto bancário e PIX. Para planos anuais, oferecemos descontos especiais." },
    
    // Técnico
    { q: "Preciso ter conhecimento técnico para usar?", a: "Não! Nossa plataforma foi desenvolvida para ser intuitiva e fácil de usar, mesmo para quem não tem conhecimento técnico." },
    { q: "Quanto tempo leva para implementar?", a: "A implementação básica leva de 1 a 3 dias. Integrações mais complexas podem levar até uma semana, dependendo do escopo." },
    { q: "Vocês oferecem treinamento?", a: "Sim! Oferecemos treinamento completo para sua equipe, incluindo materiais de apoio e sessões ao vivo." },
    { q: "Como funciona o suporte técnico?", a: "Oferecemos suporte via email e WhatsApp durante horário comercial, com SLA de resposta de até 4 horas úteis." },
    
    // Integrações
    { q: "Integra com quais ferramentas?", a: "WhatsApp oficial (Meta), Google Agenda, n8n, Supabase, além de provedores como Twilio, 360Dialog e Zenvia." },
    { q: "Como conectar minha conta do WhatsApp Business?", a: "Basta ter uma conta WhatsApp Business API aprovada. Nossa equipe auxilia todo o processo de conexão." },
    { q: "Posso integrar com meu CRM?", a: "Sim! Integramos com os principais CRMs do mercado via API ou através do n8n para automações personalizadas." },
    { q: "Funciona com Google Calendar?", a: "Sim! A integração com Google Calendar permite agendamentos automáticos e sincronização de compromissos." },
    { q: "Suporta múltiplos atendentes?", a: "Sim! Você pode ter quantos atendentes precisar, com controles de permissão e distribuição de conversas." },
    
    // Segurança/LGPD
    { q: "Como funciona a LGPD?", a: "Implementamos consentimento explícito, opt-out facilitado e todas as boas práticas LGPD. Veja nossa Política de Privacidade para mais detalhes." },
    { q: "Os dados dos clientes ficam seguros?", a: "Sim! Utilizamos criptografia de ponta a ponta, servidores seguros e backup automático. Seus dados estão protegidos." },
    { q: "Vocês têm certificações de segurança?", a: "Seguimos as melhores práticas de segurança da informação e estamos em conformidade com LGPD e normas internacionais." },
    { q: "Onde os dados são armazenados?", a: "Os dados são armazenados em servidores seguros na nuvem, com redundância e backup automático diário." },
    
    // Funcionalidades
    { q: "Quantas mensagens posso enviar?", a: "Depende do seu plano. Temos desde planos básicos até planos enterprise com mensagens ilimitadas." },
    { q: "Tem limite de contatos?", a: "Não! Você pode ter quantos contatos precisar em sua base, sem limites adicionais." },
    { q: "Funciona com chatbot?", a: "Sim! Temos IA integrada para respostas automáticas inteligentes, com possibilidade de transferência para atendimento humano." },
    { q: "Posso personalizar as respostas automáticas?", a: "Totalmente! Você pode criar fluxos personalizados, respostas automáticas e configurar a IA conforme suas necessidades." },
  ];

  return (
    <main className="min-h-screen">
      <SEOHead 
        title="Suporte | humind.ia" 
        description="Central de ajuda humind.ia: perguntas frequentes sobre preços, integração, segurança, LGPD e suporte técnico." 
        url="/suporte" 
        schema={[{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(f => ({"@type":"Question", name: f.q, acceptedAnswer: {"@type":"Answer", text: f.a}}))
        }]} 
      />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <BackButton />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Suporte</h1>
          <p className="text-muted-foreground mb-10 max-w-2xl">Encontre respostas rápidas sobre preços, integrações, segurança e funcionalidades da plataforma.</p>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`i-${i}`} className="border border-border rounded-xl bg-card px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-lg">{f.q}</span>
                  </AccordionTrigger>
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
