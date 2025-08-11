
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import step1Img from "@/assets/step1-sent.webp";
import step2Img from "@/assets/step2-reference.webp";
import step3Img from "@/assets/step3-final.webp";

export function ProcessShowcaseSection() {
  const steps = [
    {
      image: step1Img,
      label: "FOTO ENVIADA",
      alt: "Foto original enviada pelo cliente"
    },
    {
      image: step2Img,
      label: "FOTO REFERÊNCIA",
      alt: "Foto de referência para estilo"
    },
    {
      image: step3Img,
      label: "FOTO FINAL",
      alt: "Resultado final com IA"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold px-2">
            <span className="text-primary">SIMPLES, PRÁTICO</span> E DO SEU JEITO!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center fade-in px-4 md:px-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-4 md:mb-6 group">
                <div className="aspect-[9/16] overflow-hidden rounded-lg shadow-card border border-card-border max-w-xs mx-auto md:max-w-none">
                  <OptimizedImage
                    src={step.image}
                    alt={step.alt}
                    className="group-hover:scale-110 transition-transform duration-500"
                    aspectRatio="9/16"
                  />
                </div>
                
                {/* Arrow to next step - hidden on mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <svg 
                        className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-gradient-card rounded-lg py-2 md:py-3 px-3 md:px-4 border border-card-border max-w-xs mx-auto md:max-w-none">
                <p className="font-bold text-accent text-xs md:text-sm tracking-wider">
                  {step.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16 fade-in px-4">
          <a href="#pricing" className="inline-block">
            <button className="bg-primary text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary-hover hover:shadow-glow hover:-translate-y-0.5 hover:scale-105 h-12 md:h-14 rounded-lg px-6 md:px-10 text-base md:text-lg transition-all duration-300 w-full max-w-xs md:w-auto">
              Quero Ver Meu Resultado
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
