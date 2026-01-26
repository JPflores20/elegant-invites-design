import { Heart, Crown, Baby, GraduationCap, PartyPopper, Briefcase } from "lucide-react";

const events = [
  { 
    icon: Heart, 
    title: "Bodas", 
    desc: "Elegancia y romance", 
    color: "from-pink-500/20 to-rose-500/20",
    link: "/invitacion-boda" // Enlace añadido
  },
  { 
    icon: Crown, 
    title: "XV Años", 
    desc: "Momentos mágicos", 
    color: "from-purple-500/20 to-pink-500/20",
    link: "/xv-valentina" // Enlace añadido
  },
  { icon: Baby, title: "Bautizos", desc: "Ternura inolvidable", color: "from-blue-400/20 to-cyan-400/20" },
  { icon: GraduationCap, title: "Graduaciones", desc: "Logros para celebrar", color: "from-emerald-500/20 to-teal-500/20" },
  { icon: PartyPopper, title: "Fiestas", desc: "Diversión total", color: "from-orange-400/20 to-red-400/20" },
  { icon: Briefcase, title: "Corporativos", desc: "Imagen profesional", color: "from-slate-500/20 to-gray-500/20" },
];

const EventTypesGrid = () => {
  return (
    <section id="designs" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Diseños para cada <span className="text-gradient-gold">ocasión especial</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Personalizamos cada detalle para que coincida con la temática de tu evento.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {events.map((event, index) => {
            // Contenido interno de la tarjeta
            const CardContent = (
              <>
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-6 md:p-10 flex flex-col items-center text-center space-y-4 z-10">
                  <div className="w-16 h-16 rounded-full bg-background shadow-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <event.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </>
            );

            // Si tiene link, usamos <a>, si no, un div normal
            return event.link ? (
              <a
                key={event.title}
                href={event.link}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl animate-fade-up cursor-pointer block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={event.title}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl animate-fade-up cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventTypesGrid;