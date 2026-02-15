import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set date to Nov 15, 2026
    const targetDate = new Date("2026-11-15T09:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              La cuenta regresiva ha comenzado
            </h2>
            <p className="text-slate-500 text-lg">
              Prepárese para el evento más importante del año. Asegure su lugar y sea parte del futuro de la industria.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {timeUnits.map((unit, index) => (
              <div key={unit.label} className="text-center">
                <div className="text-4xl md:text-5xl font-light text-blue-600 mb-2 font-mono">
                  {unit.value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
