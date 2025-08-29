import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">ACS</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">ACS Contabilidade</div>
                <div className="text-sm text-primary-foreground/80 -mt-1">
                  Contabilidade & Gestão Empresarial
                </div>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 leading-relaxed mb-6 max-w-md">
              Transformamos números em estratégias de crescimento. Com mais de 20 anos 
              de experiência, somos seu parceiro estratégico para o sucesso empresarial.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-primary-foreground/90">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-primary-foreground/90">contato@acscontabilidade.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-primary-foreground/90">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/90 hover:text-gold transition-colors animated-underline">
                  Contabilidade Completa
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/90 hover:text-gold transition-colors animated-underline">
                  Planejamento Tributário
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/90 hover:text-gold transition-colors animated-underline">
                  Gestão Empresarial
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/90 hover:text-gold transition-colors animated-underline">
                  Consultoria Estratégica
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors animated-underline">
                  Abertura de Empresas
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/90 hover:text-gold transition-colors animated-underline">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/90 hover:text-gold transition-colors animated-underline">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#differentials" className="text-primary-foreground/90 hover:text-gold transition-colors animated-underline">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/90 hover:text-gold transition-colors animated-underline">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors animated-underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-light/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} ACS Contabilidade & Gestão Empresarial. Todos os direitos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center hover:bg-gold transition-colors group"
              >
                <Instagram className="w-5 h-5 text-primary-foreground/80 group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center hover:bg-gold transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground/80 group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center hover:bg-gold transition-colors group"
              >
                <Facebook className="w-5 h-5 text-primary-foreground/80 group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center hover:bg-gold transition-colors group"
              >
                <Youtube className="w-5 h-5 text-primary-foreground/80 group-hover:text-primary" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;