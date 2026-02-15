import { motion } from "framer-motion";
import { Music, GlassWater, Flame, Sparkles } from "lucide-react";

const events = [
  {
    time: "20:00",
    title: "Recepción & Drinks",
    description: "Comenzamos la noche con cócteles de bienvenida y música chill out.",
    icon: GlassWater,
    color: "cyan",
  },
  {
    time: "22:00",
    title: "Apertura de Pista",
    description: "El DJ inicia con los mejores beats. ¡Nadie se queda sentado!",
    icon: Music,
    color: "purple",
  },
  {
    time: "00:00",
    title: "Show de Luces",
    description: "Un espectáculo visual impresionante para celebrar la medianoche.",
    icon: Sparkles,
    color: "pink",
  },
  {
    time: "02:00",
    title: "After Party",
    description: "Para los que aguantan hasta el final. Tacos y más música.",
    icon: Flame,
    color: "orange",
  },
];

const Itinerary = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Neon Lines */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            ITINERARIO
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            El plan para una noche épica. No llegues tarde.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-2">
                <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-${event.color}-400 to-${event.color}-600 tracking-tighter`}>
                  {event.time}
                </div>
                <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                <p className="text-slate-400">{event.description}</p>
              </div>

              {/* Icon Node */}
              <div className="relative flex-shrink-0">
                <div className={`w-16 h-16 rounded-full bg-slate-900 border-2 border-${event.color}-500 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover:scale-110 transition-transform duration-300`}>
                  <event.icon className={`w-8 h-8 text-${event.color}-400 group-hover:text-white transition-colors duration-300`} />
                </div>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-${event.color}-500/20 rounded-full blur-xl -z-10 animate-pulse`}></div>
              </div>

              {/* Spacer for zig-zag layout desktop */}
              <div className="hidden md:block flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
