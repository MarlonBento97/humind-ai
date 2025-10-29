import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contato = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Contato | humind.ia"
        description="Fale com a humind.ia: e-mail, telefone e formulário de contato."
        url="/contato"
        schema={[{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contato",
          url: "/contato",
          mainEntity: {
            "@type": "Organization",
            name: "humind.ia",
            contactPoint: [{ "@type": "ContactPoint", email: "contato@humind.ia", contactType: "customer support" }]
          }
        }]}
      />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contato</h1>
          <p className="text-muted-foreground mb-10 max-w-2xl">Tire dúvidas, peça uma proposta ou fale com nosso time.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form className="p-6 rounded-xl border border-border bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="grid gap-4">
                <Input placeholder="Seu nome" aria-label="Seu nome" required />
                <Input type="email" placeholder="Seu e-mail" aria-label="Seu e-mail" required />
                <Input placeholder="Assunto" aria-label="Assunto" />
                <Textarea placeholder="Mensagem" aria-label="Mensagem" rows={5} />
                <Button type="submit" variant="hero">Enviar</Button>
              </div>
            </form>
            <div className="p-6 rounded-xl border border-border bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> contato@humind.ia</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> (11) 99999-9999</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> São Paulo, SP — Brasil</li>
              </ul>
              <div className="mt-6 text-xs text-muted-foreground">Ao enviar, você concorda com nossa <a className="text-primary" href="/privacidade">Política de Privacidade</a>.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
