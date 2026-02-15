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
    // Set date to 2 weeks from now for demo purposes
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    targetDate.setHours(20, 0, 0, 0);

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
    { label: "DÍAS", value: timeLeft.days },
    { label: "HORAS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEG", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4 tracking-tighter">
            FALTAN
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Neon Glow Box */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center hover:bg-slate-800 transition-colors duration-300">
                <div className="text-4xl md:text-6xl font-mono font-bold text-white mb-2 tabular-nums tracking-tighter shadow-cyan-500/50 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                  {unit.value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm font-bold text-cyan-500 tracking-[0.2em]">
                  {unit.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
