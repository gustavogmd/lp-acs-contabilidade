import { Target, Heart, Lightbulb, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MissionSection = () => {
  const values = [
    {
      icon: Eye,
      title: "Transparência",
      description: "Comunicação clara e honesta em todos os processos e relacionamentos."
    },
    {
      icon: Heart,
      title: "Proximidade",
      description: "Atendimento personalizado e relacionamento próximo com cada cliente."
    },
    {
      icon: Target,
      title: "Estratégia",
      description: "Visão estratégica que transforma números em decisões inteligentes."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Uso de tecnologia moderna para otimizar processos e resultados."
    },
    {
      icon: Shield,
      title: "Compromisso",
      description: "Dedicação total ao sucesso e crescimento dos nossos clientes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Mission */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Nossa Missão</span>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Transformar a contabilidade em uma ferramenta estratégica
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ajudamos empresas a crescerem de forma sustentável, com segurança, 
              eficiência e inteligência na gestão de seus recursos. Nossa missão é 
              ser o parceiro estratégico que sua empresa precisa para alcançar seus objetivos.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Valores
            </h3>
            <p className="text-lg text-muted-foreground">
              Os princípios que guiam nossa atuação e definem nossa identidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-500 border-primary/10 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-primary mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-white rounded-3xl shadow-elegant p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <TrendingUp className="w-5 h-5 text-gold" />
                <span className="text-gold font-semibold uppercase tracking-wider text-sm">Nossa Visão</span>
              </div>
              
              <h3 className="text-3xl font-bold text-primary mb-6">
                Ser referência em contabilidade estratégica
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Queremos ser reconhecidos como a principal referência em contabilidade 
                estratégica no Brasil, transformando a forma como as empresas enxergam 
                e utilizam a contabilidade em seus processos de crescimento.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-primary">Inovação contínua</strong> em processos e tecnologia
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-primary">Crescimento sustentável</strong> junto aos nossos clientes
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong className="text-primary">Excelência operacional</strong> em todos os serviços
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 gradient-gold rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-primary to-primary-dark p-8 rounded-3xl text-white">
                <div className="text-6xl font-bold mb-4 opacity-20">"</div>
                <blockquote className="text-xl font-medium leading-relaxed -mt-12 pl-8">
                  Nossa paixão é ver nossos clientes crescerem e alcançarem seus sonhos. 
                  Cada número, cada análise, cada consultoria tem um propósito: 
                  transformar seu negócio em uma história de sucesso.
                </blockquote>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="font-semibold">Equipe ACS</div>
                  <div className="text-sm opacity-80">Contabilidade & Gestão Empresarial</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Fix the Eye import
import { Eye } from "lucide-react";

export default MissionSection;