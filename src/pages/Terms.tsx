import SEOHead from "@/components/SEOHead";

const Terms = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Termos de Uso | humind.ia"
        description="Termos e condições do serviço humind.ia."
        url="/termos"
      />
      <section className="py-24">
        <div className="container mx-auto px-4 prose prose-invert">
          <h1>Termos de Uso</h1>
          <p>Ao utilizar o humind.ia, você concorda com estes termos. Leia com atenção.</p>
          <h2>Uso do serviço</h2>
          <p>O serviço deve ser utilizado conforme leis vigentes e políticas do WhatsApp.</p>
          <h2>Responsabilidade</h2>
          <p>Fornecemos o serviço “como está”. Não nos responsabilizamos por indisponibilidades de provedores terceiros.</p>
          <h2>Pagamentos</h2>
          <p>Planos, valores e cobrança são informados em proposta comercial ou página de preços.</p>
          <h2>Rescisão</h2>
          <p>Podemos suspender o acesso em casos de violações ou inadimplência.</p>
        </div>
      </section>
    </main>
  );
};

export default Terms;

