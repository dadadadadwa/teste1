
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import guaranteeImg from "@/assets/guarantee.webp";

export function GuaranteeSection() {
  return (
    <section className="py-12 md:py-20 bg-background-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="fade-in order-2 lg:order-1 px-4 lg:px-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              <span className="text-primary">Garantia</span> e Revisão
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Você tem uma <span className="text-primary font-semibold">revisão gratuita incluída</span>. 
                Se não gostar, ajustamos.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                E se ainda assim não ficar satisfeito, temos uma política de retrabalho justa.
              </p>
              
              <div className="bg-gradient-card rounded-lg p-4 md:p-6 border border-card-border">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base md:text-lg">Satisfação Garantida</h3>
                    <p className="text-muted-foreground text-sm md:text-base">Ou seu dinheiro de volta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="slide-up order-1 lg:order-2">
            <div className="relative max-w-sm mx-auto lg:max-w-md px-4 sm:px-0">
              <div className="aspect-square overflow-hidden rounded-lg shadow-premium">
                <OptimizedImage
                  src={guaranteeImg}
                  alt="Garantia de satisfação"
                  className="hover:scale-105 transition-transform duration-500"
                  aspectRatio="1/1"
                />
              </div>
              
              {/* Floating badge - mobile safe positioning */}
              <div className="absolute top-0 right-0 sm:-top-2 sm:-right-2 lg:-top-4 lg:-right-4 bg-primary text-primary-foreground px-2 py-1 md:px-4 md:py-2 rounded-full font-semibold shadow-lg text-xs md:text-sm">
                100% Garantido
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16 fade-in px-4">
          <a href="#pricing" className="inline-block">
            <button className="bg-primary text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary-hover hover:shadow-glow hover:-translate-y-0.5 hover:scale-105 h-12 md:h-14 rounded-lg px-6 md:px-10 text-base md:text-lg transition-all duration-300 w-full max-w-xs md:w-auto">
              Começar Sem Riscos
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
