import { 
  ClipboardCheck, 
  Church, 
  GraduationCap, 
  Camera, 
  UtensilsCrossed, 
  Music 
} from "lucide-react";

const events = [
  {
    time: "9:00 AM",
    title: "Registro",
    description: "Llegada y registro de invitados en la Catedral",
    icon: ClipboardCheck,
  },
  {
    time: "10:00 AM",
    title: "Misa de Acción de Gracias",
    description: "Celebración eucarística en la Catedral Basílica",
    icon: Church,
  },
  {
    time: "12:00 PM",
    title: "Ceremonia de Graduación",
    description: "Entrega de títulos y reconocimientos",
    icon: GraduationCap,
  },
  {
    time: "1:30 PM",
    title: "Sesión Fotográfica",
    description: "Fotos grupales e individuales con familia",
    icon: Camera,
  },
  {
    time: "2:30 PM",
    title: "Banquete",
    description: "Comida y brindis en el Salón de Eventos",
    icon: UtensilsCrossed,
  },
  {
    time: "5:00 PM",
    title: "Baile de Graduación",
    description: "Celebración y baile con música en vivo",
    icon: Music,
  },
];

const Itinerary = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gold mb-6">
            Itinerario
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Programa del día
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-primary/20 md:-translate-x-1/2" />
          
          {/* Events */}
          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => (
              <div
                key={event.title}
                className={`relative flex items-start gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-gold rounded-full md:-translate-x-1/2 ring-4 ring-background z-10" />
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card rounded-xl p-4 md:p-6 border border-primary/10 hover:border-gold/20 transition-all duration-300 bg-card">
                    {/* Time */}
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="text-gold font-semibold text-sm">
                        {event.time}
                      </span>
                    </div>
                    
                    {/* Title with Icon */}
                    <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <event.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        {event.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Add to Calendar Button */}
        <div className="mt-12 text-center">
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Graduación+Ingeniería+de+Software+UAZ&dates=20260615T150000Z/20260616T050000Z&details=Acompáñanos+a+celebrar+nuestra+graduación.+Consulta+el+itinerario+completo+en+la+invitación.&location=Zacatecas,+Zac."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/80 hover:bg-secondary text-primary rounded-full transition-all duration-300 border border-primary/20 hover:border-gold/50 group"
          >
            <ClipboardCheck className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
            <span className="font-medium">Agregar a Google Calendar</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
