import { Instagram, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContentSection = () => {
  // Instagram videos data with thumbnails
  const reels = [
    {
      id: 1,
      title: "Você, empresário, sabe se o regime tributário que sua empresa utiliza é realmente o mais vantajoso?",
      thumbnail: "/lovable-uploads/regime-tributario.jpg",
      instagramUrl: "https://www.instagram.com/reel/DN5YdVvAHX1/"
    },
    {
      id: 2,
      title: "Regularizar o MEI é mais simples do que você imagina!",
      thumbnail: "/lovable-uploads/regularizar-mei.jpg",
      instagramUrl: "https://www.instagram.com/reel/DNI3L2CgoOt/"
    },
    {
      id: 3,
      title: "Esses 3 erros financeiros podem estar sabotando seu negócio (e você nem percebeu)",
      thumbnail: "/lovable-uploads/erros-financeiros.jpg",
      instagramUrl: "https://www.instagram.com/reel/DMwUjVIAeee/"
    },
    {
      id: 4,
      title: "Sou Anderson Carvalho, contador consultivo e especialista tributário com mais de 20 anos de experiência ajudando empreendedores a estruturar",
      thumbnail: "/lovable-uploads/anderson-carvalho.jpg",
      instagramUrl: "https://www.instagram.com/reel/DMl5pVygtpK/"
    },
    {
      id: 5,
      title: "Esqueceu de declarar o Imposto de renda ou caiu na malha fina? calma, isso tem solução e quanto antes você agir, melhor",
      thumbnail: "/lovable-uploads/imposto-de-renda.jpg",
      instagramUrl: "https://www.instagram.com/reel/DMTxL0TAPhN/"
    }
  ];

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Instagram className="w-6 h-6 text-gold" />
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Conteúdo Educativo</span>
            <Instagram className="w-6 h-6 text-gold" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Dicas valiosas no Instagram
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe nosso conteúdo exclusivo com dicas práticas para otimizar 
            sua gestão empresarial e estratégias tributárias.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reels.map((reel) => (
            <div 
              key={reel.id}
              className="group bg-white rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105"
              onClick={() => handleVideoClick(reel.instagramUrl)}
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                </div>

                {/* Instagram Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-primary line-clamp-3 mb-2 group-hover:text-gold transition-colors">
                  {reel.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Clique para assistir no Instagram
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-elegant p-8 md:p-12 text-center">
            <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Instagram className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-primary mb-4">
              Siga-nos no Instagram
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Não perca nenhuma dica! Siga nosso Instagram para receber conteúdo 
              exclusivo sobre contabilidade, gestão empresarial e estratégias tributárias.
            </p>
            
            <Button 
              variant="cta"
              onClick={() => window.open('https://www.instagram.com/acs_contabilidade_e_gestao', '_blank')}
              className="shadow-gold hover:shadow-elegant"
            >
              <Instagram className="w-6 h-6 mr-2" />
              Seguir @acs_contabilidade_e_gestao
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;