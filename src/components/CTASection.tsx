import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Pronto para crescer com 
              <span className="text-gold"> segurança e inteligência?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Transforme sua contabilidade em uma ferramenta estratégica de crescimento. 
              Fale agora com nossos especialistas e descubra como podemos acelerar seus resultados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="gold" size="lg" className="group text-lg px-8 py-4">
                Fale com um Especialista
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group hover:bg-white/20 transition-all duration-300">
                <Phone className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-semibold mb-1">Ligue Agora</div>
                <div className="text-sm opacity-90">(11) 9999-9999</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group hover:bg-white/20 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-semibold mb-1">WhatsApp</div>
                <div className="text-sm opacity-90">Resposta imediata</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group hover:bg-white/20 transition-all duration-300">
                <Mail className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-semibold mb-1">E-mail</div>
                <div className="text-sm opacity-90">contato@acscontabilidade.com</div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold">Garantia de Satisfação</h3>
            </div>
            
            <p className="text-lg opacity-90 mb-6">
              Primeira consulta gratuita para entendermos suas necessidades 
              e apresentarmos as melhores soluções para seu negócio.
            </p>

            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2 justify-center">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center space-x-2 justify-center">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>100% personalizado</span>
              </div>
              <div className="flex items-center space-x-2 justify-center">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Resposta em 24h</span>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-gold/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
              <span className="text-gold font-semibold">
                Vagas limitadas para novos clientes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default CTASection;