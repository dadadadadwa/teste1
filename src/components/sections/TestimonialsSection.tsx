
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Nunca imaginei que fotos virassem isso. Inacreditável.",
      name: "Marina",
      role: "Analista de Marketing",
      image: testimonial1
    },
    {
      quote: "Usei pra portfólio e redes. As pessoas acham que fiz em estúdio.",
      name: "Leandro",
      role: "Desenvolvedor",
      image: testimonial2
    },
    {
      quote: "Amei. Com certeza volto pra mais.",
      name: "Talita",
      role: "Maquiadora",
      image: testimonial3
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-2">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-card rounded-lg p-4 md:p-6 border border-card-border shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2 fade-in mx-4 md:mx-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote */}
              <div className="mb-4 md:mb-6">
                <div className="text-3xl md:text-4xl text-primary mb-3 md:mb-4">"</div>
                <p className="text-base md:text-lg text-foreground leading-relaxed italic">
                  {testimonial.quote}
                </p>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full flex-shrink-0">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16 fade-in px-4">
          <a href="#pricing" className="inline-block">
            <button className="bg-primary text-primary-foreground font-semibold text-sm md:text-base hover:bg-primary-hover hover:shadow-glow hover:-translate-y-0.5 hover:scale-105 h-12 md:h-14 rounded-lg px-6 md:px-10 text-base md:text-lg transition-all duration-300 w-full max-w-xs md:w-auto">
              Ser o Próximo Satisfeito
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
