import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Plan Básico",
    price: "$499",
    currency: "MXN",
    description: "Perfecto para comenzar",
    features: [
      "Invitación en imagen HD",
      "Diseño personalizado",
      "Links de ubicación",
      "Entrega en 48 horas",
    ],
    highlighted: false,
    whatsappMessage: "Hola, me interesa el Plan Básico de invitaciones digitales",
  },
  {
    name: "Plan Interactivo",
    price: "$899",
    currency: "MXN",
    description: "El más popular",
    features: [
      "Sitio web dedicado",
      "Contador regresivo",
      "Botón 'Agregar a Calendario'",
      "Mapa con GPS integrado",
      "Música de fondo",
      "Diseño responsivo",
    ],
    highlighted: true,
    whatsappMessage: "Hola, me interesa el Plan Interactivo de invitaciones digitales",
  },
  {
    name: "Plan Premium",
    price: "$1,499",
    currency: "MXN",
    description: "La experiencia completa",
    features: [
      "Todo lo del Plan Interactivo",
      "Sistema de confirmación (RSVP)",
      "Galería de fotos ilimitada",
      "Sección de Mesa de Regalos",
      "Código de vestimenta visual",
      "Soporte prioritario",
    ],
    highlighted: false,
    whatsappMessage: "Hola, me interesa el Plan Premium de invitaciones digitales",
  },
];

const PricingCards = () => {
  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/5215512345678?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Planes diseñados para{" "}
            <span className="text-gradient-gold">cada presupuesto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen diseño personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover-lift ${
                plan.highlighted
                  ? "glass-card border-2 border-primary scale-105 md:scale-110 z-10"
                  : "bg-card/70 backdrop-blur-sm border border-border"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gold-gradient text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Recomendado
                  </div>
                </div>
              )}

              <div className="text-center space-y-4 mb-8">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <div>
                  <span className="text-4xl md:text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.currency}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.highlighted ? "bg-primary" : "bg-primary/20"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full py-6 rounded-xl text-base font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? "gold-gradient text-primary-foreground hover:opacity-90 shadow-lg"
                    : "bg-foreground/5 text-foreground hover:bg-foreground/10 border border-border"
                }`}
              >
                <a
                  href={createWhatsAppLink(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Elegir Plan
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12">
          ¿Tienes dudas? <a href="https://wa.me/5215512345678?text=Hola%2C%20tengo%20dudas%20sobre%20los%20planes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Contáctanos</a> y te asesoramos sin compromiso.
        </p>
      </div>
    </section>
  );
};

export default PricingCards;
