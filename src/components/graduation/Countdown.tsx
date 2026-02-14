
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
    { value: timeLeft.days, label: "Días", max: 365 },
    { value: timeLeft.hours, label: "Horas", max: 24 },
    { value: timeLeft.minutes, label: "Minutos", max: 60 },
    { value: timeLeft.seconds, label: "Segundos", max: 60 },
  ];

  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gold font-medium mb-3">
          Cuenta Regresiva
        </h2>
        <p className="text-muted-foreground mb-12 text-lg font-light font-display italic">
          Cada segundo nos acerca más al éxito
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 justify-center items-center">
          {timeUnits.map((unit, index) => {
            // Calculate progress percentage for circle
            const radius = 38;
            const circumference = 2 * Math.PI * radius;
            const progress = unit.value / unit.max;
            const dashoffset = circumference - progress * circumference;

            return (
              <div
                key={unit.label}
                className="group flex flex-col items-center justify-center relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Circular Progress Container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                  {/* Background Circle */}
                  <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
                    <circle
                      cx="50%"
                      cy="50%"
                      r={radius + "%"}
                      className="fill-transparent stroke-primary/10 stroke-[3px]"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r={radius + "%"}
                      className="fill-transparent stroke-gold transition-all duration-1000 ease-out stroke-[3px]"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashoffset}
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* Inner Glow Circle */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/20 shadow-inner flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center">
                      <span className="block text-3xl md:text-5xl font-display font-bold text-primary group-hover:text-gold transition-colors duration-300">
                        {String(unit.value).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="mt-4 text-xs md:text-sm uppercase tracking-[0.2em] text-gold/80 font-medium">
                  {unit.label}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Date Display (Elegant Line) */}
        <div className="mt-16 flex items-center justify-center gap-4 opacity-70">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <span className="text-primary font-display italic text-lg">
            15 de Junio, 2026
          </span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
