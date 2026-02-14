import { SparklesCore } from "@/components/ui/sparkles";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-primary to-primary/95 text-white">
      
      {/* 1. Fondo con Brillos Dorados */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFD700" // Color Dorado
          speed={0.5}
        />
      </div>

      {/* Contenido Principal Centrado */}
      <div className="relative z-10 container px-4 mx-auto text-center space-y-8 animate-fade-up">
        
        {/* Icono animado */}
        <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-sm border border-gold/30 mb-4 animate-float">
          <GraduationCap className="w-12 h-12 text-gold" />
        </div>

        <div className="space-y-4">
          <p className="text-lg md:text-xl text-gold/80 tracking-[0.2em] uppercase font-light">
            Invitación de Graduación
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display">
            Ingeniería de <br className="md:hidden" />
            {/* 2. Efecto de Destello en "Software" */}
            <span className="inline-flex animate-shimmer bg-[linear-gradient(110deg,#d4af37,45%,#fff,55%,#d4af37)] bg-[length:200%_100%] bg-clip-text text-transparent">
              Software
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto">
            Generación 2022 - 2026
          </p>
        </div>

        {/* Separador visual */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto opacity-50" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
          <div className="glass-card p-6 rounded-xl flex items-center justify-center gap-4 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
            <Calendar className="w-6 h-6 text-gold" />
            <div className="text-left">
              <p className="text-sm text-gray-300 uppercase tracking-wider">Fecha</p>
              <p className="text-lg font-semibold">18 de Mayo, 2026</p>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl flex items-center justify-center gap-4 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
            <MapPin className="w-6 h-6 text-gold" />
            <div className="text-left">
              <p className="text-sm text-gray-300 uppercase tracking-wider">Lugar</p>
              <p className="text-lg font-semibold">Foyer Teatro Calderón</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Degradado inferior para suavizar la transición */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default Hero;