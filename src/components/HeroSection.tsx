import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
// Using uploaded CEO portrait

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="hero-text">Mais que contabilidade:</span>
                <br />
                <span className="text-primary">Estratégia e gestão</span> para fazer sua empresa crescer.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A ACS nasceu para ser diferente: unimos uma equipe com <strong className="text-primary">+ de 20 anos de experiência</strong> em contabilidade com uma visão moderna de gestão empresarial. Nosso objetivo é transformar números em decisões estratégicas que reduzem custos, aumentam resultados e dão mais segurança ao seu negócio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group">
                Fale com um especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação dos clientes</div>
              </div>
            </div>
          </div>

          {/* CEO Image with Quote */}
          <div className={`relative ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -inset-4 gradient-hero rounded-3xl opacity-20 blur-xl"></div>
              
              {/* CEO Portrait */}
              <div className="relative">
                <img
                  src="/lovable-uploads/bd02df87-abf8-48d4-bf6b-ef07688d2924.png"
                  alt="Andersom Carvalho, CEO da ACS Contabilidade"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-elegant scale-on-hover"
                />
                
                {/* Quote Overlay */}
                <div className="absolute -bottom-8 -left-4 md:-left-8 lg:-bottom-12 lg:-left-8 bg-white p-6 rounded-2xl shadow-gold max-w-sm animate-float">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-xl">"</span>
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-lg leading-tight">
                        "A contabilidade não é apenas números: é estratégia para crescer."
                      </p>
                      <div className="mt-2 text-sm text-muted-foreground">
                        Anderson Carvalho, CEO, ACS Contabilidade
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
