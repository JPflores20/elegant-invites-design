import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles"; // Ajustado para asegurar compatibilidad

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO (URL y estilos exactos de tu archivo) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay original: Azul Marino Profundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/95" />
        
        {/* Textura de ruido original */}
        <div className="absolute inset-0 bg-noise opacity-[0.05]" />
        
        {/* EFECTO AURORA: Orbes de luz desenfocados para dar profundidad */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-[128px] animate-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[100px] animate-float" />
      </div>

      {/* 2. Partículas (Usando configuración estándar para que se vean) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <SparklesCore
          id="tsparticleshero"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#FFD700" 
          speed={0.5}
        />
      </div>

      {/* 3. Contenido Principal */}
      <div className="container relative z-10 px-4 text-center text-white animate-fade-up">
        
        {/* Badge superior */}
        {/* Badge superior Mejorado */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gold/40 bg-primary/20 backdrop-blur-md mb-8 hover:bg-primary/30 transition-all duration-500 hover:border-gold/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] group cursor-default">
          <GraduationCap className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-500" />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold/90 group-hover:text-gold transition-colors">Clase 2022 - 2026</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-display">
          Ingeniería de <br />
          {/* CORRECCIÓN DEL DESTELLO: Se fuerza el clip-text con estilos en línea */}
          <span className="inline-flex animate-shimmer-text bg-[linear-gradient(110deg,#d4af37,45%,#fff,55%,#d4af37)] bg-[length:250%_100%] bg-clip-text text-transparent">
              Software
            </span>
        </h1>

        <p className="text-xl md:text-3xl text-gray-200 mb-8 font-light max-w-2xl mx-auto font-display italic tracking-wide">
          Universidad Autónoma de Zacatecas
          <br />
          <span className="text-base md:text-lg opacity-80 mt-3 block font-sans font-light tracking-widest uppercase">"Francisco García Salinas"</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-5 py-3 rounded-xl backdrop-blur-sm border border-white/5 hover:border-gold/20 transition-all cursor-default">
            <CalendarDays className="w-5 h-5 text-gold" />
            <span className="font-medium">15 de Julio, 2026</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-5 py-3 rounded-xl backdrop-blur-sm border border-white/5 hover:border-gold/20 transition-all cursor-default">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="font-medium">Zacatecas, Zac.</span>
          </div>
        </div>

        <div className="mt-12">
           <Button 
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold hover:bg-[#B5952F] text-primary font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white/20"
          >
            Confirmar Asistencia
          </Button>
        </div>
      </div>

      {/* Elemento decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;