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
    <section className="py-24 px-4 bg-[#0f0404]">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl text-white mb-16 drop-shadow-md"
        >
          Itinerario
        </motion.h2>

        <div className="relative border-l border-red-900/30 ml-4 md:ml-auto md:mx-auto space-y-12">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 flex flex-col md:items-center"
            >
              {/* Punto de tiempo */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
              
              <div className="bg-[#1c0808] border border-red-900/30 p-6 rounded-2xl md:w-full md:max-w-md hover:border-red-700/50 transition-colors">
                <span className="text-3xl mb-3 block">{event.icon}</span>
                <h3 className="text-xl font-bold text-red-50 mb-1">{event.title}</h3>
                <p className="text-red-400 font-serif text-lg">{event.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItineraryXv;