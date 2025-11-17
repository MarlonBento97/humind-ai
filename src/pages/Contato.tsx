import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import BackButton from "@/components/BackButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Basic validation
      if (!formData.name.trim() || formData.name.length > 100) {
        throw new Error("Nome inválido");
      }
      if (!formData.email.trim() || !formData.email.includes("@") || formData.email.length > 255) {
        throw new Error("Email inválido");
      }
      if (!formData.message.trim() || formData.message.length > 1000) {
        throw new Error("Mensagem inválida");
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Erro ao enviar email");
      }

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornaremos em breve.",
      });

      // Clear form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        title: "Erro ao enviar",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const whatsappLink = `https://wa.me/5547999367017`;

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
            contactPoint: [{ "@type": "ContactPoint", email: "marlon.bento@humindia.com.br", contactType: "customer support" }]
          }
        }]}
      />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <BackButton />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contato</h1>
          <p className="text-muted-foreground mb-10 max-w-2xl">Tire dúvidas, peça uma proposta ou fale com nosso time.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-border bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="grid gap-4">
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome" 
                  aria-label="Seu nome" 
                  required 
                  maxLength={100}
                  disabled={loading}
                />
                <Input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu e-mail" 
                  aria-label="Seu e-mail" 
                  required 
                  maxLength={255}
                  disabled={loading}
                />
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto" 
                  aria-label="Assunto"
                  maxLength={200}
                  disabled={loading}
                />
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mensagem" 
                  aria-label="Mensagem" 
                  rows={5} 
                  required
                  maxLength={1000}
                  disabled={loading}
                />
                <Button type="submit" variant="hero" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar"}
                </Button>
              </div>
            </form>
            <div className="p-6 rounded-xl border border-border bg-card" style={{ boxShadow: 'var(--shadow-card)' }}>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" /> 
                  <a href="mailto:marlon.bento@humindia.com.br" className="hover:text-primary transition-colors">
                    marlon.bento@humindia.com.br
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" /> 
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    (47) 999367017
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> São Paulo, SP — Brasil
                </li>
              </ul>
              <div className="mt-6 text-xs text-muted-foreground">
                Ao enviar, você concorda com nossa <a className="text-primary hover:underline" href="/privacidade">Política de Privacidade</a>.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
