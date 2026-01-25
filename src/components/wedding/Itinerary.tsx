import { Clock, Music, Utensils, Camera, PartyPopper, Church, Sparkles } from "lucide-react";

const events = [
  {
    time: "5:00 PM",
    title: "Ceremonia Religiosa",
    description: "Parroquia de Nuestra Señora",
    icon: Church,
  },
  {
    time: "7:00 PM",
    title: "Recepción",
    description: "Coctel de bienvenida",
    icon: Sparkles,
  },
  {
    time: "8:00 PM",
    title: "El Gran Vals",
    description: "Primer baile con papá",
    icon: Music,
  },
  {
    time: "9:00 PM",
    title: "Cena",
    description: "Banquete gourmet",
    icon: Utensils,
  },
  {
    time: "11:00 PM",
    title: "Fiesta",
    description: "¡Música y baile!",
    icon: PartyPopper,
  },
];

const Itinerary = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.2em] text-sm text-muted-foreground mb-2 block animate-fade-up">Agenda del día</span>
          <h2 className="text-5xl md:text-6xl text-primary font-script animate-fade-up" style={{ animationDelay: "100ms" }}>
            Nuestro Itinerario
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Línea Central Dorada y Punteada */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px border-l-2 border-primary/30 border-dashed md:-ml-px h-full"></div>

          <div className="space-y-16">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <div 
                  key={index} 
                  className={`relative flex items-center md:justify-between group ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icono Central Brillante */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-background border border-primary/20 shadow-[0_0_15px_rgba(255,215,0,0.2)] flex items-center justify-center z-10 md:-translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Tarjeta de Contenido */}
                  <div className={`ml-20 md:ml-0 md:w-[42%] ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    <div className="hover:bg-white/5 transition-colors duration-500 rounded-xl p-4 -m-4">
                      <span className="inline-block text-2xl font-script text-primary mb-1">
                        {event.time}
                      </span>
                      <h3 className="text-xl font-serif text-foreground tracking-wide uppercase text-sm font-bold mb-1">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground font-light text-sm italic">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Decoración final */}
          <div className="flex justify-center mt-12">
             <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;