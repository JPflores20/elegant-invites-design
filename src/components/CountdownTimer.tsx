import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  const targetDate = new Date("2025-03-15T17:00:00").getTime();
  
  const calculateTimeLeft = (): TimeUnit[] => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return [
        { value: 0, label: "Días" },
        { value: 0, label: "Horas" },
        { value: 0, label: "Minutos" },
        { value: 0, label: "Segundos" },
      ];
    }

    return [
      { value: Math.floor(difference / (1000 * 60 * 60 * 24)), label: "Días" },
      { value: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), label: "Horas" },
      { value: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)), label: "Minutos" },
      { value: Math.floor((difference % (1000 * 60)) / 1000), label: "Segundos" },
    ];
  };

  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAddToCalendar = () => {
    const event = {
      title: "XV Años de Isabella María",
      start: "20250315T170000",
      end: "20250316T010000",
      location: "Salón Los Jardines, Ciudad de México",
      details: "¡Te esperamos para celebrar mis XV años!"
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.details)}`;
    
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl gold-text mb-2">
            Faltan
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {timeLeft.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="bg-muted/50 rounded-xl p-4 md:p-6 gold-border">
                    <span className="font-display text-3xl md:text-5xl lg:text-6xl gold-text">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <p className="font-elegant text-sm md:text-base text-muted-foreground mt-3 tracking-wider uppercase">
                  {unit.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 text-center"
          >
            <Button
              onClick={handleAddToCalendar}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body px-8 py-6 text-base hover-glow"
            >
              <CalendarPlus className="mr-2 h-5 w-5" />
              Agregar al Calendario
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;