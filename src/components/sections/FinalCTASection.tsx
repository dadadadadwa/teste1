
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <div className="fade-in">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
            Preparado pra se ver com <span className="text-gradient">outros olhos?</span>
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Crie seu ensaio agora e receba imediatamente com realismo, estilo e autoridade.
          </p>

          <div className="px-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToPricing}
              className="hover-glow mb-6 md:mb-8 w-full max-w-xs md:w-auto"
            >
              Quero Meu Ensaio Agora
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Entrega imediata</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Satisfação garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Revisão incluída</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
