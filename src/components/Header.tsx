import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Diferenciais", href: "#differentials" },
    { name: "Sobre", href: "#about" },
    { name: "Depoimentos", href: "#testimonials" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/90 shadow-elegant backdrop-blur-lg' 
          : 'bg-primary/70 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/18881e3a-b23a-435f-8a76-df6731879bfe.png"
              alt="ACS Contabilidade & Gestão Empresarial"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gold transition-colors duration-300 font-medium animated-underline"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="yellow" 
              size="lg"
              onClick={() => window.open('https://wa.me/5521981421713?text=Ol%C3%A1%2C%20te%20encontrei%20no%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20de%20contabilidade.', '_blank')}
            >
              Entre em Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/20 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-lg border-t border-white/20">
            <nav className="flex flex-col space-y-4 p-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-gold transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="yellow" 
                size="lg" 
                className="mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://wa.me/5521981421713?text=Ol%C3%A1%2C%20te%20encontrei%20no%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20de%20contabilidade.', '_blank');
                }}
              >
                Entre em Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;