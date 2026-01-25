import { useEffect, useState, useRef } from "react";
import { Users, Heart, Calendar, Star } from "lucide-react";

const stats = [
  { icon: Calendar, value: 500, label: "Eventos Realizados", suffix: "+" },
  { icon: Users, value: 45000, label: "Invitados Confirmados", suffix: "+" },
  { icon: Heart, value: 98, label: "Clientes Felices", suffix: "%" },
  { icon: Star, value: 5, label: "Calificación Promedio", suffix: ".0" },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-primary-foreground/80" />
              </div>
              <div className="text-4xl md:text-5xl font-bold font-serif">
                <Counter end={stat.value} duration={2000} isVisible={isVisible} />
                {stat.suffix}
              </div>
              <p className="text-primary-foreground/80 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente auxiliar para la animación de conteo
const Counter = ({ end, duration, isVisible }: { end: number; duration: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Función de "ease-out" para que frene al final
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      
      setCount(Math.floor(end * easeOut));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span>{count}</span>;
};

export default StatsSection;