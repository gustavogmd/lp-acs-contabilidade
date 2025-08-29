import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      company: "Indústria Silva & Cia",
      role: "Diretora Financeira",
      content: "A ACS transformou completamente nossa gestão financeira. Com o planejamento tributário que eles desenvolveram, conseguimos reduzir 30% dos nossos custos tributários e investir mais no crescimento da empresa.",
      rating: 5,
      photo: "MS"
    },
    {
      id: 2,
      name: "João Santos",
      company: "TechStart Solutions",
      role: "CEO",
      content: "Desde que contratamos a ACS, nossa empresa cresceu 150%. A consultoria estratégica deles foi fundamental para identificarmos oportunidades de mercado que nem sabíamos que existiam.",
      rating: 5,
      photo: "JS"
    },
    {
      id: 3,
      name: "Ana Rodrigues",
      company: "Comércio Rodrigues",
      role: "Proprietária",
      content: "O atendimento personalizado da ACS fez toda a diferença. Eles conhecem nossa empresa como ninguém e sempre estão disponíveis quando precisamos. Recomendo para qualquer empresário.",
      rating: 5,
      photo: "AR"
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      company: "Construções Oliveira",
      role: "Sócio-Diretor",
      content: "A ACS não é apenas nossa contabilidade, são nossos parceiros estratégicos. Graças às análises gerenciais deles, conseguimos otimizar nossos projetos e aumentar significativamente nossa margem de lucro.",
      rating: 5,
      photo: "CO"
    },
    {
      id: 5,
      name: "Fernanda Costa",
      company: "Beauty Center",
      role: "Fundadora",
      content: "Trabalho com a ACS há 5 anos e só tenho elogios. A transparência, a agilidade e principalmente a capacidade de transformar números em estratégias práticas são impressionantes.",
      rating: 5,
      photo: "FC"
    },
    {
      id: 6,
      name: "Roberto Lima",
      company: "Lima Transportes",
      role: "Diretor Geral",
      content: "A modernização que a ACS trouxe para nossa gestão foi incrível. Automatizaram nossos processos e agora temos relatórios em tempo real que nos ajudam a tomar decisões mais rápidas e precisas.",
      rating: 5,
      photo: "RL"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de empresários que transformaram seus negócios 
            com nossa consultoria e serviços especializados.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="bg-white shadow-elegant border-primary/10 mx-4">
                    <CardContent className="p-8 md:p-12 text-center">
                      {/* Quote Icon */}
                      <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                        <Quote className="w-8 h-8 text-primary" />
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {testimonial.photo}
                          </span>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-primary text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-gold font-medium">
                            {testimonial.role}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-elegant border-primary/20 hover:border-primary/40"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-elegant border-primary/20 hover:border-primary/40"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gold scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-primary rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">98%</div>
              <div className="text-xl font-semibold mb-1">Taxa de Satisfação</div>
              <div className="text-primary-foreground/80">dos nossos clientes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">5 anos</div>
              <div className="text-xl font-semibold mb-1">Tempo Médio</div>
              <div className="text-primary-foreground/80">de relacionamento</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">24h</div>
              <div className="text-xl font-semibold mb-1">Tempo de Resposta</div>
              <div className="text-primary-foreground/80">em emergências</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;