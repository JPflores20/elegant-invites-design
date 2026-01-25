import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimerXv = () => {
  const calculateTimeLeft = () => {
    // FECHA OBJETIVO: Puedes cambiarla aquí
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
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-4xl font-serif text-red-950 mb-12 italic">
            La cuenta regresiva ha comenzado
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col items-center group">
                <div className="w-full aspect-square md:w-32 md:h-32 bg-white border border-red-100 rounded-full shadow-xl flex items-center justify-center mb-3 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-50" />
                  <span className="text-3xl md:text-5xl font-bold text-red-900 font-serif relative z-10">
                    {String(value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-red-800/60 font-medium">
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