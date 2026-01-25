import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CountdownTimerXv = () => {
  const calculateTimeLeft = () => {
    // FECHA: 24 Octubre 2026
    const difference = +new Date("2026-10-24T17:00:00") - +new Date();
    
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

  // Enlace para Google Calendar
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=XV+Años+de+Valentina&dates=20261024T170000/20261025T020000&details=¡Te+espero+para+celebrar+juntos+este+gran+día!&location=Zacatecas,+Zac.`;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-16 italic drop-shadow-lg">
            La cuenta regresiva ha comenzado
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto mb-16">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col items-center group">
                {/* Caja estilo cristal */}
                <div className="w-full aspect-square md:w-36 md:h-36 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center justify-center mb-4 relative overflow-hidden group-hover:bg-white/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent" />
                  <span className="text-4xl md:text-6xl font-bold text-white font-serif relative z-10 drop-shadow-md">
                    {String(value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-red-100 font-bold">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* BOTÓN RESTAURADO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-white text-red-900 hover:bg-red-50 font-bold rounded-full px-8 py-6 text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105 transition-all group border-2 border-transparent hover:border-red-200"
              onClick={() => window.open(googleCalendarUrl, "_blank")}
            >
              <CalendarHeart className="mr-2 w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
              Agendar en Calendario
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimerXv;