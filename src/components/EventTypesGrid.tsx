import { Heart, Crown, Cross, PartyPopper, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const eventTypes = [
  {
    icon: Heart,
    title: "Bodas",
    description: "Invitaciones románticas y elegantes para el día más importante",
    whatsappMessage: "Hola, me interesa una invitación digital para mi boda",
  },
  {
    icon: Crown,
    title: "XV Años",
    description: "Diseños mágicos para celebrar esta fecha tan especial",
    whatsappMessage: "Hola, me interesa una invitación digital para XV años",
  },
  {
    icon: Cross,
    title: "Bautizos",
    description: "Invitaciones tiernas y espirituales para bendiciones",
    whatsappMessage: "Hola, me interesa una invitación digital para un bautizo",
  },
  {
    icon: PartyPopper,
    title: "Fiestas Infantiles",
    description: "Diseños divertidos y coloridos para los más pequeños",
    whatsappMessage: "Hola, me interesa una invitación digital para fiesta infantil",
  },
  {
    icon: GraduationCap,
    title: "Graduaciones",
    description: "Celebra los logros académicos con estilo",
    whatsappMessage: "Hola, me interesa una invitación digital para graduación",
  },
  {
    icon: Briefcase,
    title: "Eventos Corporativos",
    description: "Invitaciones profesionales para tu empresa",
    whatsappMessage: "Hola, me interesa una invitación digital para evento corporativo",
  },
];

const EventTypesGrid = () => {
  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/5215512345678?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="designs" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Diseños exclusivos para cada{" "}
            <span className="text-gradient-gold">ocasión</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada evento merece una invitación única. Descubre nuestras colecciones especializadas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {eventTypes.map((event, index) => (
            <a
              key={event.title}
              href={createWhatsAppLink(event.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover-lift bg-card/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <event.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver diseños →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypesGrid;
