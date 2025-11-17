import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">humind.ia</h3>
            <p className="text-sm text-muted-foreground">Conversas que viram negócios. Atendimento humanizado com IA.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#recursos" className="hover:text-primary transition-colors">Recursos</a></li>
              <li><Link to="/integracoes" className="hover:text-primary transition-colors">Integrações</Link></li>
              <li><Link to="/cases" className="hover:text-primary transition-colors">Casos de uso</Link></li>
              <li><Link to="/precos" className="hover:text-primary transition-colors">Preços</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/quem-somos" className="hover:text-primary transition-colors">Sobre nós</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/suporte" className="hover:text-primary transition-colors">Suporte</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contato@humind.ia" className="hover:text-primary transition-colors">marlon.bento@humindia.com.br</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+5511999999999" className="hover:text-primary transition-colors">(11) 99999-9999</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>São Paulo, SP — Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} humind.ia. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link to="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
              <Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;