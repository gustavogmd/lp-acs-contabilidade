import { useEffect, useRef } from "react";
import { Calculator, TrendingUp, Building, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Calculator,
      title: "Contabilidade Completa",
      description: "Escrituração fiscal, contábil e trabalhista com precisão e agilidade. Mantemos sua empresa em conformidade com todas as obrigações legais.",
      features: ["Escrituração fiscal", "Balancetes mensais", "Demonstrações contábeis", "Obrigações acessórias"]
    },
    {
      icon: TrendingUp,
      title: "Planejamento Tributário",
      description: "Estratégias inteligentes para reduzir a carga tributária de forma legal, aumentando a rentabilidade do seu negócio.",
      features: ["Análise tributária", "Revisão de regime", "Recuperação de créditos", "Elisão fiscal"]
    },
    {
      icon: Building,
      title: "Gestão Empresarial",
      description: "Consultoria em gestão para otimizar processos, controlar custos e melhorar a performance operacional da sua empresa.",
      features: ["Controle de custos", "Fluxo de caixa", "Indicadores de performance", "Análise gerencial"]
    },
    {
      icon: Users,
      title: "Consultoria Estratégica",
      description: "Orientação especializada para tomada de decisões estratégicas, expansão de negócios e planejamento de crescimento.",
      features: ["Planejamento estratégico", "Análise de viabilidade", "Consultoria financeira", "Suporte à decisão"]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em contabilidade e gestão empresarial, 
            desenvolvidas para impulsionar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card fade-in-up hover:shadow-elegant transition-all duration-500 group border-primary/10"
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-soft">
            <div className="text-primary font-semibold">
              Precisa de uma solução personalizada?
            </div>
            <div className="w-px h-8 bg-border"></div>
            <button 
              className="text-gold font-semibold hover:text-gold-dark transition-colors animated-underline"
              onClick={() => window.open('https://wa.me/5521981421713?text=Ol%C3%A1%2C%20te%20encontrei%20no%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20de%20contabilidade.', '_blank')}
            >
              Fale conosco →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;