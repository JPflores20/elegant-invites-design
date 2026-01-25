import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSectionInv = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* IMAGEN ORIGINAL SIN FILTROS RAROS */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
        {/* Solo un degradado suave abajo para conectar con el beige, sin tapar la foto */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--background))]" />
      </div>

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex justify-center">
             <div className="h-16 w-px bg-[#4A3B32] opacity-60 mb-4"></div>
          </div>

          <p className="text-sm md:text-lg tracking-[0.4em] text-[#4A3B32] uppercase font-bold drop-shadow-sm">
            Nuestra Boda
          </p>
          
          {/* Nombres en Café Oscuro para que resalten sobre la nieve/cielo */}
          <div className="space-y-4 py-4">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-[#4A3B32] tracking-tight drop-shadow-md">
              Isabella
            </h1>
            <div className="flex items-center justify-center gap-6">
                <div className="h-px w-12 bg-[#4A3B32] opacity-50"></div>
                <span className="font-serif text-3xl md:text-5xl text-[#6D5A43] italic">&</span>
                <div className="h-px w-12 bg-[#4A3B32] opacity-50"></div>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-[#4A3B32] tracking-tight drop-shadow-md">
              Alejandro
            </h1>
          </div>

          <div className="pt-8">
            <p className="text-xl md:text-3xl text-[#4A3B32] font-serif italic font-medium">
              Sábado 24 de Octubre, 2026
            </p>
            <p className="text-sm tracking-widest text-[#6D5A43] mt-2 uppercase font-bold">
              Zacatecas, México
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#4A3B32]"
      >
        <ChevronDown className="w-10 h-10 drop-shadow-md" />
      </motion.div>
    </section>
  );
};

export default HeroSectionInv;