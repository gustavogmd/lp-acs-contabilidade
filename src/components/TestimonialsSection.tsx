import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Save Tecnologia Ltda",
      company: "Save Tecnologia Ltda",
      role: "",
      content: "Empresa estava com situação lastimável. Contador anterior deixou impostos pendentes e sem baixa. A ACS Contabilidade resolveu tudo: baixou empresa antiga, regularizou nova e mudança de endereço. Durmo tranquila agora!",
      rating: 5,
      photo: "ST"
    },
    {
      id: 2,
      name: "Karine Santos",
      company: "Karine Santos",
      role: "",
      content: "Venho aqui expressar minha satisfação e alegria em ter essa equipe tão dedicada e profissional caminhando ao meu lado. Sempre muito solícitos e corretos. Um apoio especial e uma parceria ímpar. Muito obrigada pelo serviço de excelência!",
      rating: 5,
      photo: "KS"
    },
    {
      id: 3,
      name: "Paula Cristine Pimentel",
      company: "Paula Cristine Pimentel",
      role: "",
      content: "Minha experiência com o escritório tem sido excelente. Sempre recebo um atendimento ágil, atencioso e com total segurança nas informações. Recomendo muito!",
      rating: 5,
      photo: "PP"
    },
    {
      id: 4,
      name: "PivotaAI",
      company: "PivotaAI",
      role: "",
      content: "A minha experiência com a ACS Contabilidade foi excelente, estava com problemas com dívidas no meu CNPJ e eles me ajudaram a resolver super rápido, e me ajudaram a planejar com mais eficiência as estratégias tributárias da minha empresa. super recomendo.",
      rating: 5,
      photo: "PA"
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
                          {testimonial.role && (
                            <div className="text-gold font-medium">
                              {testimonial.role}
                            </div>
                          )}
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
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">100%</div>
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