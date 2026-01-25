import HeroSectionXv from "@/components/xv-red/HeroSectionXv";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import RSVPLogin from "@/components/xv-red/RSVPLogin";
import LocationCards from "@/components/wedding/LocationCards";
import Itinerary from "@/components/wedding/Itinerary";
import GiftsSection from "@/components/wedding/GiftsSection";
// CAMBIO: Importamos el nuevo Dress Code de XV
import DressCodeXv from "@/components/xv-red/DressCodeXv"; 
import MusicPlayerXv from "@/components/xv-red/MusicPlayerXv"; 
import { Sparkles } from "lucide-react";

const XvInviteRed = () => {
  return (
    // =====================================================================
    // ZONA DE TRANSFORMACIÓN DE COLOR
    // Aquí redefinimos qué significan "fondo", "texto" y "tarjeta" solo para esta página.
    // =====================================================================
    <div 
      className="min-h-screen font-sans relative selection:bg-red-500/30 selection:text-red-100 overflow-hidden"
      style={
        {
          // -- COLORES BASE OSCUROS (Red Velvet Profundo) --
          // El fondo principal ahora es un rojo casi negro
          "--background": "355 45% 10%", 
          // El texto principal es un tono crema/rosado claro para contraste
          "--foreground": "355 20% 90%", 

          // -- TARJETAS Y COMPONENTES REUTILIZADOS --
          // Cuando un componente de boda pida "bg-card" (blanco), ahora será este rojo vino.
          "--card": "355 40% 15%",
          "--card-foreground": "355 20% 90%",
          // Para fondos secundarios (ej. inputs, secciones alternas)
          "--muted": "355 35% 20%",
          "--muted-foreground": "355 20% 70%",

          // -- COLOR DE ACENTO (El rojo vibrante) --
          "--primary": "350 85% 50%", // Rojo intenso
          "--primary-foreground": "0 0% 100%", // Blanco sobre rojo intenso
          
          // Redefinimos bordes para que sean sutiles en la oscuridad
          "--border": "355 40% 25%",
        } as React.CSSProperties
      }
    >
      {/* Textura de fondo global para evitar que se vea plano */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay z-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-red-950 via-transparent to-black opacity-80 pointer-events-none z-0" />

      <div className="relative z-10">
        <MusicPlayerXv />
        
        <HeroSectionXv />
        
        {/* Sección Intro (Con fondo ligeramente distinto para contraste) */}
        <section className="py-32 px-6 text-center relative">
            {/* Un destello de luz roja detrás del texto */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-3xl mx-auto relative">
                <Sparkles className="w-8 h-8 text-red-400 mx-auto mb-8 animate-pulse opacity-60" />
                <p className="font-serif text-3xl md:text-5xl text-red-100 leading-tight italic drop-shadow-lg">
                "Hay momentos inolvidables que se atesoran en el corazón para siempre, por eso quiero que compartas conmigo esta noche mágica."
                </p>
                
                <div className="mt-16 flex flex-col md:flex-row justify-center gap-12 text-sm tracking-[0.2em] uppercase text-red-300/70">
                <div className="flex flex-col items-center">
                    <div className="w-px h-10 bg-gradient-to-b from-red-500 to-transparent mb-4"></div>
                    <p className="font-bold text-red-200 mb-2 text-base">Mis Padres</p>
                    <p className="font-light">Roberto & Ana</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-px h-10 bg-gradient-to-b from-red-500 to-transparent mb-4"></div>
                    <p className="font-bold text-red-200 mb-2 text-base">Mis Padrinos</p>
                    <p className="font-light">Carlos & Sofia</p>
                </div>
                </div>
            </div>
        </section>

        {/* Los componentes de boda (Countdown, Location, Itinerary, Gifts)
           ahora adoptarán automáticamente los colores oscuros definidos arriba.
           Puede que necesites ajustar algún padding si se ven muy pegados.
        */}
        <CountdownTimer />
        
        {/* Un separador visual entre secciones pesadas */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-800/50 to-transparent my-8"></div>
        
        <LocationCards />
        <Itinerary />
        
        {/* CAMBIO: Usamos el nuevo Dress Code */}
        <DressCodeXv />
        
        <GiftsSection />
        <RSVPLogin />

        <footer className="py-16 bg-black/40 text-center text-red-200/30 text-sm border-t border-red-900/30 relative overflow-hidden">
            {/* Luz final en el footer */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-red-800/10 blur-[80px] rounded-full pointer-events-none"></div>
            <p className="uppercase tracking-[0.4em] mb-3 font-medium text-red-200/50">Valentina • XV Años</p>
            <p>© 2026 StellarDay Design</p>
        </footer>
      </div>
    </div>
  );
};

export default XvInviteRed;