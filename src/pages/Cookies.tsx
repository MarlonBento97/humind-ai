import SEOHead from "@/components/SEOHead";

const Cookies = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Política de Cookies | humind.ia"
        description="Entenda como usamos cookies para analisar uso e melhorar o serviço."
        url="/cookies"
      />
      <section className="py-24">
        <div className="container mx-auto px-4 prose prose-invert">
          <h1>Política de Cookies</h1>
          <p>Utilizamos cookies essenciais e analíticos para oferecer melhor experiência.</p>
          <h2>Tipos de cookies</h2>
          <ul>
            <li>Essenciais: funcionamento do site.</li>
            <li>Analíticos: métricas de uso (GA4).</li>
          </ul>
          <h2>Consentimento</h2>
          <p>Você pode gerenciar preferências no navegador. Implementaremos banner de consentimento.</p>
        </div>
      </section>
    </main>
  );
};

export default Cookies;

