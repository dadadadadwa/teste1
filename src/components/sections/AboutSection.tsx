
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import matteoImg from "@/assets/matteo-enzo.webp";

export function AboutSection() {
  return (
    <section className="py-12 md:py-20 bg-background-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold px-2">
            Quem tá por trás disso <span className="text-primary">tudo?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="slide-up order-1 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:max-w-md px-4 sm:px-0">
              <div className="aspect-[9/16] overflow-hidden rounded-lg shadow-premium">
                <OptimizedImage
                  src={matteoImg}
                  alt="Matteo Enzo - Designer visual especialista em IA"
                  className="hover:scale-105 transition-transform duration-500"
                  aspectRatio="9/16"
                />
              </div>
              
              {/* Floating badge - mobile safe positioning */}
              <div className="absolute bottom-0 right-0 sm:-bottom-2 sm:-right-2 lg:-bottom-4 lg:-right-4 bg-accent text-accent-foreground px-2 py-1 md:px-4 md:py-2 rounded-full font-semibold shadow-lg text-xs md:text-sm">
                Expert em IA
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="fade-in order-2 lg:order-2 px-4 lg:px-0">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Matteo Enzo
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                "Sou o <span className="text-primary font-semibold">Matteo Enzo</span> — designer visual com especialidade em inteligência artificial. 
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Esse projeto nasceu da revolta com os preços altos de estúdio e a demora de entrega. 
                Decidi criar um processo onde qualquer pessoa possa ter fotos profissionais, com rapidez, 
                sem sair de casa, e com resultado de outro nível."
              </p>
              
              <div className="flex items-center gap-3 md:gap-4 pt-2 md:pt-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-base md:text-lg">M</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm md:text-base">Designer Visual & IA Specialist</p>
                  <p className="text-muted-foreground text-xs md:text-sm">+3 anos transformando pessoas com tecnologia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16 fade-in px-4">
          <a href="#pricing" className="inline-block">
            <button className="bg-primary text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary-hover hover:shadow-glow hover:-translate-y-0.5 hover:scale-105 h-12 md:h-14 rounded-lg px-6 md:px-10 text-base md:text-lg transition-all duration-300 w-full max-w-xs md:w-auto">
              Confiar no Especialista
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
