
import { Check } from "lucide-react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import advantagesImg from "@/assets/advantages-image.webp";

export function AdvantagesSection() {
  const advantages = [
    "Visual profissional com baixo custo",
    "Entrega imediata",
    "Não precisa sair de casa",
    "Sem estúdio ou roupas alugadas",
    "Vários estilos num só ensaio",
    "Realismo e fidelidade ao seu rosto",
    "Fotos em altíssima resolução (4K)"
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-2">
            AINDA ESTÁ COM <span className="text-primary">DÚVIDAS?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground px-2">
            VANTAGENS REAIS DE QUEM ESCOLHE O ENSAIO POR I.A.:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Advantages List */}
          <div className="space-y-4 md:space-y-6 fade-in order-2 lg:order-1">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-card rounded-lg border border-card-border hover:shadow-card transition-all duration-300 mx-4 md:mx-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-6 h-6 md:w-8 md:h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 md:w-5 md:h-5 text-accent-foreground" />
                </div>
                <p className="text-foreground font-medium text-sm md:text-lg">
                  {advantage}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="slide-up order-1 lg:order-2">
            <div className="relative max-w-sm mx-auto lg:max-w-none px-4 sm:px-0">
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-premium">
                <OptimizedImage
                  src={advantagesImg}
                  alt="Foto profissional em preto e branco"
                  className="hover:scale-105 transition-transform duration-500"
                  aspectRatio="3/4"
                />
              </div>
              
              {/* Floating badge - mobile safe positioning */}
              <div className="absolute top-0 right-0 sm:-top-2 sm:-right-2 lg:-top-4 lg:-right-4 bg-accent text-accent-foreground px-2 py-1 md:px-4 md:py-2 rounded-full font-semibold shadow-lg text-xs md:text-sm">
                Qualidade Premium
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16 fade-in px-4">
          <a href="#pricing" className="inline-block">
            <button className="bg-primary text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary-hover hover:shadow-glow hover:-translate-y-0.5 hover:scale-105 h-12 md:h-14 rounded-lg px-6 md:px-10 text-base md:text-lg transition-all duration-300 w-full max-w-xs md:w-auto">
              Aproveitar Essas Vantagens
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
