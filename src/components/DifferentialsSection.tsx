import { useEffect, useRef } from "react";
import { Award, Heart, Target, Eye, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DifferentialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.differential-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 150);
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

  const differentials = [
    {
      icon: Award,
      title: "Experiência de +20 anos",
      description: "Nosso CEO e equipe tem mais de duas décadas de expertise em contabilidade e gestão empresarial, com conhecimento profundo do mercado brasileiro.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Heart,
      title: "Atendimento próximo e personalizado",
      description: "Relacionamento direto com nossos especialistas, entendendo as particularidades do seu negócio.",
      color: "text-gold",
      bgColor: "bg-gold/10"
    },
    {
      icon: Target,
      title: "Visão estratégica além da contabilidade",
      description: "Transformamos dados contábeis em insights estratégicos para decisões mais assertivas.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Eye,
      title: "Transparência e confiança",
      description: "Comunicação clara, relatórios detalhados e total transparência em todos os processos.",
      color: "text-gold",
      bgColor: "bg-gold/10"
    },
    {
      icon: Zap,
      title: "Uso de tecnologia moderna",
      description: "Ferramentas avançadas e automação para maior eficiência e precisão nos serviços.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section id="differentials" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Por que escolher a ACS?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossos diferenciais fazem toda a diferença no sucesso do seu negócio. 
            Conheça o que nos torna únicos no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((differential, index) => (
            <Card
              key={index}
              className="differential-card fade-in-up group hover:shadow-elegant transition-all duration-500 border-primary/10 relative overflow-hidden"
            >
              <CardContent className="p-8 relative z-10">
                <div className={`w-16 h-16 ${differential.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <differential.icon className={`w-8 h-8 ${differential.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4">
                  {differential.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {differential.description}
                </p>
              </CardContent>
              
              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform rotate-12 group-hover:rotate-45 transition-transform duration-700">
                <differential.icon className="w-full h-full text-primary" />
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Stats */}
        <div className="bg-white rounded-3xl shadow-elegant p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                20+
              </div>
              <div className="text-gold font-semibold text-lg mb-1">Anos</div>
              <div className="text-sm text-muted-foreground">de experiência no mercado</div>
            </div>
            
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gold font-semibold text-lg mb-1">Satisfação</div>
              <div className="text-sm text-muted-foreground">dos nossos clientes</div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                24h
              </div>
              <div className="text-gold font-semibold text-lg mb-1">Resposta</div>
              <div className="text-sm text-muted-foreground">tempo médio de atendimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;