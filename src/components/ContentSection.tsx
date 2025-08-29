import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight, Instagram } from "lucide-react";

const ContentSection = () => {
  const [currentReel, setCurrentReel] = useState(0);

  // Mock data for Instagram reels (vertical format)
  const reels = [
    {
      id: 1,
      title: "5 Dicas para Reduzir Impostos",
      description: "Estratégias legais para otimizar sua carga tributária",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80",
      duration: "1:45",
      views: "12K"
    },
    {
      id: 2,
      title: "Gestão de Fluxo de Caixa",
      description: "Como organizar as finanças da sua empresa",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80",
      duration: "2:12",
      views: "8.5K"
    },
    {
      id: 3,
      title: "Planejamento Estratégico",
      description: "Defina metas claras para o crescimento",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80",
      duration: "1:58",
      views: "15K"
    },
    {
      id: 4,
      title: "Indicadores Financeiros",
      description: "KPIs essenciais para monitorar seu negócio",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80",
      duration: "2:30",
      views: "9.2K"
    },
    {
      id: 5,
      title: "Erros Comuns na Contabilidade",
      description: "Evite esses problemas na sua empresa",
      thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80",
      duration: "1:33",
      views: "11K"
    },
    {
      id: 6,
      title: "Regime Tributário Ideal",
      description: "Simples, Lucro Presumido ou Real?",
      thumbnail: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80",
      duration: "2:45",
      views: "18K"
    }
  ];

  const nextReel = () => {
    setCurrentReel((prev) => (prev + 1) % Math.ceil(reels.length / 3));
  };

  const prevReel = () => {
    setCurrentReel((prev) => (prev - 1 + Math.ceil(reels.length / 3)) % Math.ceil(reels.length / 3));
  };

  useEffect(() => {
    const timer = setInterval(nextReel, 4000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleReels = () => {
    const startIndex = currentReel * 3;
    return reels.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Instagram className="w-6 h-6 text-gold" />
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Conteúdo Exclusivo</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Dicas e Insights Estratégicos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe nossos conteúdos no Instagram com dicas práticas, 
            insights estratégicos e orientações para o crescimento do seu negócio.
          </p>
        </div>

        {/* Reels Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {getVisibleReels().map((reel) => (
              <Card 
                key={reel.id} 
                className="group hover:shadow-elegant transition-all duration-500 overflow-hidden border-primary/10"
              >
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 group-hover:scale-110 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </Button>
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-white text-xs font-medium">{reel.duration}</span>
                  </div>
                  
                  {/* Views */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-white text-xs font-medium">{reel.views} views</span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold text-primary mb-2 group-hover:text-gold transition-colors">
                    {reel.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reel.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevReel}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-elegant border-primary/20 hover:border-primary/40"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextReel}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-elegant border-primary/20 hover:border-primary/40"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(reels.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReel(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReel 
                  ? 'bg-gold scale-125' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-soft p-8 max-w-2xl mx-auto">
            <Instagram className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">
              Siga nosso Instagram
            </h3>
            <p className="text-muted-foreground mb-6">
              Receba diariamente dicas exclusivas sobre contabilidade, 
              gestão empresarial e estratégias de crescimento.
            </p>
            <Button variant="hero" size="lg" className="group">
              @acscontabilidade
              <Instagram className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;