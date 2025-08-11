import professionalImg from "@/assets/professional.webp";
import entrepreneurImg from "@/assets/entrepreneur.webp";
import commonPersonImg from "@/assets/common-person.webp";

export function TargetAudienceSection() {
  const audiences = [
    {
      title: "Profissionais",
      description: "Que buscam melhorar sua imagem no ambiente digital e transmitir mais autoridade com fotos alinhadas ao seu posicionamento.",
      image: professionalImg,
      alt: "Profissional executivo"
    },
    {
      title: "Empreendedores que precisam de agilidade e qualidade",
      description: "Que buscam construir uma presença forte e profissional, com fotografias que valorizam sua imagem pessoal e reforçam a confiança no que você oferece.",
      image: entrepreneurImg,
      alt: "Empreendedor profissional"
    },
    {
      title: "Pessoas comuns buscando autoestima e estilo visual",
      description: "Redescubra a sua beleza e expresse sua personalidade em imagens únicas criadas com Inteligência Artificial. Mesmo sem experiência como modelo, você pode ter fotos dignas de capa de revista — autênticas, sofisticadas e do jeitinho que você sempre sonhou.",
      image: commonPersonImg,
      alt: "Pessoa comum estilizada"
    }
  ];

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O Ensaio por I.A. é <span className="text-primary">Ideal Para:</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Você não precisa ser modelo pra ter fotos poderosas. Nosso ensaio atende:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="bg-gradient-card rounded-lg p-6 border border-card-border hover:shadow-premium transition-all duration-300 hover:-translate-y-2 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[9/16] mb-6 overflow-hidden rounded-lg">
                <img
                  src={audience.image}
                  alt={audience.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <a href="#pricing" className="inline-block">
            <button className="bg-primary text-primary-foreground font-semibold text-base hover:bg-primary-hover hover:shadow-glow hover:-translate-y-0.5 hover:scale-105 h-14 rounded-lg px-10 text-lg transition-all duration-300">
              Descubra Seu Pacote Ideal
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}