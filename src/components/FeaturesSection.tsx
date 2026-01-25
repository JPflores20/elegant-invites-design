import { MapPin, Calendar, Clock, UserCheck, Camera } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Ubicación GPS",
    description: "Integración directa con Google Maps y Waze para que tus invitados lleguen sin problemas",
  },
  {
    icon: Calendar,
    title: "Agendar Fecha",
    description: "Botón para agregar el evento a Google Calendar o iCal con un solo clic",
  },
  {
    icon: Clock,
    title: "Cuenta Regresiva",
    description: "Contador elegante de días, horas y minutos hasta el gran momento",
  },
  {
    icon: UserCheck,
    title: "Confirmación de Asistencia",
    description: "Formulario de RSVP integrado para gestionar tu lista de invitados fácilmente",
  },
  {
    icon: Camera,
    title: "Galería de Fotos",
    description: "Espacio dedicado para mostrar tu sesión fotográfica pre-evento",
  },
];

const FeaturesSection = () => {
  return (
    <section id="caracteristicas" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            ¿Por qué elegir{" "}
            <span className="text-gradient-gold">nuestras invitaciones?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada invitación incluye funciones interactivas que harán la experiencia de tus invitados inolvidable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative element */}
        <div className="mt-16 flex justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="h-px w-16 bg-border" />
            <span className="text-sm italic">Innovación y elegancia en cada detalle</span>
            <div className="h-px w-16 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;