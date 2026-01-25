import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimerXv = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-10-24") - +new Date();
    if (difference < 0) return { días: 0, horas: 0, min: 0, seg: 0 };
    return {
      días: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      min: Math.floor((difference / 1000 / 60) % 60),
      seg: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Fondo claro con decoración sutil roja
    <section className="py-20 bg-[#fffafa] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-50/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-4xl font-serif text-red-900 mb-12 italic drop-shadow-sm">
            La cuenta regresiva ha comenzado
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col items-center group">
                {/* Cajas de números: Fondo blanco con borde y sombra roja */}
                <div className="w-full aspect-square md:w-32 md:h-32 bg-white border-2 border-red-100 rounded-2xl shadow-[0_10px_30px_-10px_rgba(220,38,38,0.2)] flex items-center justify-center mb-4 relative overflow-hidden group-hover:scale-105 group-hover:border-red-300 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Números en rojo intenso */}
                  <span className="text-4xl md:text-6xl font-bold text-red-950 font-serif relative z-10">
                    {String(value).padStart(2, '0')}
                  </span>
                </div>
                {/* Etiquetas en rojo apagado */}
                <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-red-800/60 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimerXv;