import { motion } from "framer-motion";

const ItineraryXv = () => {
  const events = [
    { time: "5:00 PM", title: "Misa de Acción de Gracias", icon: "⛪" },
    { time: "7:00 PM", title: "Cóctel de Bienvenida", icon: "🥂" },
    { time: "8:00 PM", title: "Entrada Triunfal", icon: "✨" },
    { time: "9:00 PM", title: "Vals con Papá", icon: "💃" },
    { time: "10:00 PM", title: "Cena & Baile", icon: "🍽️" },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-6xl text-white mb-20 drop-shadow-md"
        >
          Itinerario
        </motion.h2>

        <div className="relative border-l-2 border-red-300/30 ml-4 md:ml-auto md:mx-auto space-y-16">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10 md:pl-0 flex flex-col md:items-center"
            >
              {/* Punto de tiempo brillante */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-1 w-5 h-5 rounded-full bg-red-500 border-4 border-red-900 shadow-[0_0_15px_rgba(239,68,68,0.8)] z-10" />
              
              <div className="md:w-full md:max-w-md group cursor-default">
                <span className="text-4xl mb-4 block filter drop-shadow-md group-hover:scale-110 transition-transform duration-300">{event.icon}</span>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">{event.title}</h3>
                <div className="inline-block bg-red-900/40 px-4 py-1 rounded-full border border-red-500/30">
                    <p className="text-red-200 font-mono text-lg">{event.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItineraryXv;