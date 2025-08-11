import { Button } from "@/components/ui/button";
import { Check, Crown, Zap } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Solo",
      badge: "MAIS ESCOLHIDO",
      icon: Zap,
      price: "R$ 29,97",
      features: [
        "5 fotos 4K",
        "Até 3 estilos",
        "1 revisão",
        "Entrega: IMEDIATA"
      ],
      buttonText: "Começar Agora",
      popular: true
    },
    {
      name: "Boost",
      badge: "RECOMENDADO",
      icon: Crown,
      price: "R$ 89,97",
      features: [
        "8 fotos 4K",
        "Até 4 estilos",
        "Direção visual",
        "1 revisão",
        "Entrega: IMEDIATA"
      ],
      buttonText: "Quero Este",
      popular: false
    },
    {
      name: "Supreme",
      badge: "",
      icon: Crown,
      price: "R$ 149,97",
      features: [
        "15 fotos 4K",
        "Até 7 estilos",
        "Direção individual",
        "Tratamento de pele",
        "Upscaler premium",
        "1 revisão",
        "Entrega: IMEDIATA"
      ],
      buttonText: "Ir de Supreme",
      popular: false
    }
  ];

  const handlePlanClick = (planName: string) => {
    // Track do UTMify
    if (typeof (window as any).utmify !== "undefined" && (window as any).utmify.track) {
      (window as any).utmify.track('IC');
    }
    
    // URLs do WhatsApp para cada plano
    const whatsappUrls = {
      "Solo": "https://wa.me/5513981913127?text=Quero%20o%20PLANO%20SOLO!&utm_source=site&utm_medium=botao&utm_campaign=plano_solo",
      "Boost": "https://wa.me/5513981913127?text=Quero%20o%20PLANO%20BOOST!&utm_source=site&utm_medium=botao&utm_campaign=plano_boost",
      "Supreme": "https://wa.me/5513981913127?text=Quero%20o%20PLANO%20SUPREME!&utm_source=site&utm_medium=botao&utm_campaign=plano_supreme"
    };
    
    const url = whatsappUrls[planName as keyof typeof whatsappUrls];
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="pricing" className="py-20 bg-background-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">Planos e Pacotes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha o plano ideal para suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-gradient-card rounded-lg p-8 border transition-all duration-300 hover:shadow-premium hover:-translate-y-2 fade-in ${
                plan.popular 
                  ? 'border-primary shadow-glow scale-105' 
                  : 'border-card-border'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                  plan.popular ? 'bg-primary' : 'bg-accent'
                }`}>
                  <plan.icon className={`w-8 h-8 ${
                    plan.popular ? 'text-primary-foreground' : 'text-accent-foreground'
                  }`} />
                </div>
              </div>

              {/* Plan Name & Price */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Plano {plan.name}
                </h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "hero" : "cta"}
                size="lg"
                className="w-full"
                onClick={() => handlePlanClick(plan.name)}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}