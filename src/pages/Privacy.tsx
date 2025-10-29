import SEOHead from "@/components/SEOHead";

const Privacy = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Política de Privacidade | humind.ia"
        description="Como tratamos seus dados pessoais e respeitamos a LGPD."
        url="/privacidade"
      />
      <section className="py-24">
        <div className="container mx-auto px-4 prose prose-invert">
          <h1>Política de Privacidade</h1>
          <p>Valorizamos sua privacidade. Esta política descreve como coletamos, utilizamos e protegemos dados pessoais.</p>
          <h2>Dados coletados</h2>
          <p>Coletamos informações fornecidas por você (por exemplo, contato, e-mail) e dados de uso para melhorar a experiência.</p>
          <h2>Base legal</h2>
          <p>Tratamos dados conforme as bases legais da LGPD, como consentimento e legítimo interesse, quando aplicável.</p>
          <h2>Direitos do titular</h2>
          <p>Você pode solicitar acesso, correção, exclusão e Portabilidade. Entre em contato por <a href="mailto:contato@humind.ia">contato@humind.ia</a>.</p>
          <h2>Segurança</h2>
          <p>Adotamos medidas técnicas e organizacionais para proteger dados contra acesso não autorizado.</p>
          <h2>Contato do DPO</h2>
          <p>E-mail: <a href="mailto:dpo@humind.ia">dpo@humind.ia</a></p>
        </div>
      </section>
    </main>
  );
};

export default Privacy;

