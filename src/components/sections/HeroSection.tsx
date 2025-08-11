import { Button } from "@/components/ui/button";
import { ImageSlider } from "@/components/ui/image-slider";
import beforePhoto from "@/assets/before-photo.webp";
import afterPhoto from "@/assets/after-photo.webp";

export function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        {/* Mobile: Show elements in order with individual divs for proper spacing */}
        <div className="grid grid-cols-1 gap-8 lg:hidden">
          {/* Text Content - First on mobile */}
          <div className="text-center fade-in">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-gradient">De fotos básicas à</span>
                <br />
                <span className="text-foreground">um ensaio profissional</span>
                <br />
                <span className="text-primary">sem sair de casa!</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Com inteligência artificial e o seu estilo como base, criamos fotografias únicas e profissionais. Esqueça figurinos, estúdios ou longas esperas. Tudo é feito online, com total fidelidade em você com entrega imediata.
              </p>
            </div>
          </div>

          {/* Image Slider - Second on mobile */}
          <div className="slide-up">
            <div className="relative max-w-sm sm:max-w-md mx-auto px-4 sm:px-0">
              <ImageSlider
                beforeImage={beforePhoto}
                afterImage={afterPhoto}
                beforeAlt="Foto original do usuário antes da transformação por IA"
                afterAlt="Foto profissional gerada por inteligência artificial"
                className="aspect-[3/4] w-full shadow-premium rounded-lg"
              />
              
              {/* Floating elements - mobile safe positioning */}
              <div className="absolute top-0 left-0 sm:-top-2 sm:-left-2 bg-accent text-accent-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg z-10">
                <span className="hidden sm:inline">IA Premium</span>
                <span className="sm:hidden">IA</span>
              </div>
              <div className="absolute bottom-0 right-0 sm:-bottom-2 sm:-right-2 bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg z-10">
                <span className="hidden sm:inline">Entrega Imediata</span>
                <span className="sm:hidden">Entrega</span>
              </div>
            </div>
          </div>

          {/* CTA and Stats - Third on mobile */}
          <div className="text-center fade-in">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={scrollToPricing}
                  className="hover-glow"
                >
                  Quero Meu Ensaio Agora
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="font-medium text-accent">+200</span>
                </div>
                <span>pessoas transformadas com I.A.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Two column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text + CTA */}
          <div className="flex flex-col space-y-8 text-left fade-in">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-6xl font-bold leading-tight">
                <span className="text-gradient">De fotos básicas à</span>
                <br />
                <span className="text-foreground">um ensaio profissional</span>
                <br />
                <span className="text-primary">sem sair de casa!</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Com inteligência artificial e o seu estilo como base, criamos fotografias únicas e profissionais. Esqueça figurinos, estúdios ou longas esperas. Tudo é feito online, com total fidelidade em você com entrega imediata.
              </p>
            </div>

            {/* CTA and Stats */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={scrollToPricing}
                  className="hover-glow"
                >
                  Quero Meu Ensaio Agora
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="font-medium text-accent">+200</span>
                </div>
                <span>pessoas transformadas com I.A.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image Slider */}
          <div className="slide-up">
            <div className="relative max-w-md mx-auto">
              <ImageSlider
                beforeImage={beforePhoto}
                afterImage={afterPhoto}
                beforeAlt="Foto original do usuário antes da transformação por IA"
                afterAlt="Foto profissional gerada por inteligência artificial"
                className="aspect-[3/4] w-full shadow-premium rounded-lg"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg z-10">
                IA Premium
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg z-10">
                Entrega Imediata
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}