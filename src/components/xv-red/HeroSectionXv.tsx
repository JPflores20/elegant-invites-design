import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const HeroSectionXv = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* IMAGEN DE FONDO: Chica con vestido de gala/rojo */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
        {/* OVERLAY ROJO INTENSO: Esto da el color base a la portada */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/70 via-red-900/50 to-red-950/90" />
      </div>

      <div className="container relative z-10 text-center px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-red-200/30 bg-red-950/40 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-red-200" />
            <span className="text-red-100 tracking-[0.3em] uppercase text-xs font-bold">
              Save the Date
            </span>
          </div>

          {/* Nombre */}
          <h1 className="font-serif text-7xl md:text-9xl text-white tracking-tighter drop-shadow-2xl">
            Valentina
          </h1>

          {/* Separador y texto */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
            <span className="font-light tracking-[0.5em] text-lg md:text-2xl text-red-100/90 uppercase">
              Mis XV Años
            </span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
          </div>

          <p className="pt-4 text-xl md:text-2xl text-red-200 font-serif italic">
            Sábado 24 . Octubre . 2026
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default HeroSectionXv;