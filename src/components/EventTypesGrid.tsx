import { Heart, Crown, Baby, GraduationCap, PartyPopper, Briefcase, MousePointerClick } from "lucide-react";

const events = [
  { 
    icon: Heart, 
    title: "Bodas", 
    desc: "Elegancia y romance", 
    color: "from-pink-500/20 to-rose-500/20",
    link: "/invitacion-boda" 
  },
  { 
    icon: Crown, 
    title: "XV Años", 
    desc: "Momentos mágicos", 
    color: "from-purple-500/20 to-pink-500/20",
    link: "/xv-valentina" 
  },
  { 
    icon: Baby, 
    title: "Bautizos", 
    desc: "Ternura inolvidable", 
    color: "from-blue-400/20 to-cyan-400/20" 
  },
  { 
    icon: GraduationCap, 
    title: "Graduaciones", 
    desc: "Logros para celebrar", 
    color: "from-emerald-500/20 to-teal-500/20" 
  },
  { 
    icon: PartyPopper, 
    title: "Fiestas", 
    desc: "Diversión total", 
    color: "from-orange-400/20 to-red-400/20" 
  },
  { 
    icon: Briefcase, 
    title: "Corporativos", 
    desc: "Imagen profesional", 
    color: "from-slate-500/20 to-gray-500/20" 
  },
];

const EventTypesGrid = () => {
  return (
    <section id="designs" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Diseños para cada <span className="text-gradient-gold">ocasión especial</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personalizamos cada detalle para que coincida con la temática de tu evento.
          </p>
          
          {/* --- LEYENDA AÑADIDA AQUÍ --- */}
          <div className="flex items-center justify-center gap-2 text-primary font-medium animate-pulse mt-4 bg-primary/5 inline-block px-4 py-2 rounded-full">
            <MousePointerClick className="w-4 h-4" />
            <span className="text-sm md:text-base">
              Haz clic sobre el tema de tu interés para abrir una invitación de ejemplo
            </span>
          </div>
          {/* --------------------------- */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, index) => {
            // Renderizamos condicionalmente: Si tiene link es un enlace, si no es un div normal
            const CardContent = (
              <div 
                className={`group relative p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 ${
                  event.link ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-secondary/50 group-hover:bg-white/80 transition-colors duration-300 shadow-sm">
                    <event.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      {event.desc}
                    </p>
                  </div>
                  
                  {event.link && (
                    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-primary uppercase tracking-widest">
                      Ver Ejemplo &rarr;
                    </div>
                  )}
                </div>
              </div>
            );

            return event.link ? (
              <a 
                key={index} 
                href={event.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <div key={index}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventTypesGrid;