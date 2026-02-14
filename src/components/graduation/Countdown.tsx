import { useEffect, useState } from "react";

// Placeholder graduation date - easily editable
const GRADUATION_DATE = new Date("2026-06-15T10:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = GRADUATION_DATE.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-2">
          Faltan
        </h2>
        <p className="text-muted-foreground mb-8 text-sm md:text-base">
          para el gran día
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="relative overflow-hidden rounded-2xl p-4 md:p-6 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white shadow-xl border border-primary/20 group hover:border-gold/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-gold/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gold Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/10 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative text-4xl md:text-6xl font-display font-bold text-white mb-2 tabular-nums drop-shadow-md group-hover:scale-110 group-hover:text-gold transition-all duration-500">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="relative text-xs md:text-sm uppercase tracking-wider text-gold/80 font-medium">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Date Display */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-gold font-medium text-sm md:text-base">
            15 de Junio, 2026
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
