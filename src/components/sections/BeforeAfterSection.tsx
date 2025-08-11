
import { ImageSlider } from "@/components/ui/image-slider";
import beforeAfter1 from "@/assets/before-after-1.webp";
import beforeAfter2 from "@/assets/before-after-2.webp";

export function BeforeAfterSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-2">
            <span className="text-primary">Antes e Depois</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground px-4">
            Veja a transformação real dos nossos clientes
          </p>
        </div>

        <div className="max-w-sm md:max-w-md mx-auto">
          <div className="space-y-6 md:space-y-8">
            <div className="fade-in px-4 md:px-0">
              <ImageSlider
                beforeImage={beforeAfter1}
                afterImage={beforeAfter2}
                beforeAlt="Foto original"
                afterAlt="Foto profissional"
                className="aspect-[9/16] shadow-premium rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12 fade-in px-4">
          <p className="text-base md:text-lg text-muted-foreground italic mb-6 md:mb-8">
            "Arraste para ver a transformação completa"
          </p>
          <a href="#pricing" className="inline-block">
            <button className="bg-primary text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary-hover hover:shadow-glow hover:-translate-y-0.5 hover:scale-105 h-12 md:h-14 rounded-lg px-6 md:px-10 text-base md:text-lg transition-all duration-300 w-full max-w-xs md:w-auto">
              Quero Minha Transformação
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
