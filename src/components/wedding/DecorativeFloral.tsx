import { motion } from "framer-motion";

interface DecorativeFloralProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "divider";
  className?: string;
}

const DecorativeFloral = ({ position, className = "" }: DecorativeFloralProps) => {
  // Configuración de posición y rotación inicial
  const variants = {
    "top-left": { rotate: 0, x: -30, y: -30 },
    "top-right": { rotate: 90, x: 30, y: -30 },
    "bottom-right": { rotate: 180, x: 30, y: 30 },
    "bottom-left": { rotate: 270, x: -30, y: 30 },
    "divider": { rotate: 0, x: 0, y: 0, scale: 0.8 },
  };

  const initial = variants[position];

  // Diseño SVG de una rama floral elegante y orgánica
  const floralPath = "M140,20 c-10,20 -30,30 -50,30 c-15,0 -25,-10 -30,-20 c-5,-10 -5,-20 0,-30 M10,140 c20,-10 30,-30 30,-50 c0,-15 -10,-25 -20,-30 M90,60 c5,10 15,15 25,10 c10,-5 10,-20 0,-25 M60,90 c10,5 15,15 10,25 c-5,10 -20,10 -25,0 M130,10 c-20,30 -50,40 -70,30 M10,130 c30,-20 40,-50 30,-70 M100,100 c5,5 15,5 20,0 M50,50 c5,5 15,5 20,0";

  // Si es un divisor (separador de secciones)
  if (position === "divider") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`flex justify-center items-center py-16 opacity-40 ${className}`}
      >
         <svg width="300" height="50" viewBox="0 0 300 50" className="text-[#8B7355] fill-none stroke-current" strokeWidth="1.2">
             <path d="M0,25 Q75,5 150,25 T300,25" />
             <circle cx="150" cy="25" r="4" fill="currentColor" />
             <circle cx="75" cy="15" r="2" fill="currentColor" />
             <circle cx="225" cy="35" r="2" fill="currentColor" />
         </svg>
      </motion.div>
    );
  }

  // Si es una esquina floral
  return (
    <motion.div
      initial={{ opacity: 0, ...initial }}
      whileInView={{ 
        opacity: 0.6, 
        x: 0, 
        y: 0,
      }}
      animate={{
        // Efecto de "respiración" sutil (se agranda y achica muy lentamente)
        scale: [1, 1.05, 1],
      }}
      transition={{ 
        opacity: { duration: 1.5 },
        x: { duration: 1.2 },
        y: { duration: 1.2 },
        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
      }}
      className={`absolute z-0 pointer-events-none text-[#A69076] mix-blend-multiply ${className}`}
    >
      <svg width="250" height="250" viewBox="0 0 150 150" className="fill-none stroke-current w-full h-full" strokeWidth="1">
        <path d={floralPath} />
        {/* Detalles extra de hojas */}
        <path d="M120,40 Q130,60 110,70" strokeOpacity="0.5" />
        <path d="M40,120 Q60,130 70,110" strokeOpacity="0.5" />
        <circle cx="125" cy="25" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="25" cy="125" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    </motion.div>
  );
};

export default DecorativeFloral;