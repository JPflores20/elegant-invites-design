import HeroSectionXv from "@/components/xv-red/HeroSectionXv";
import CountdownTimerXv from "@/components/xv-red/CountdownTimerXv";
import RSVPLogin from "@/components/xv-red/RSVPLogin";
import DressCodeXv from "@/components/xv-red/DressCodeXv";
import MusicPlayerXv from "@/components/xv-red/MusicPlayerXv";
import LocationCardsXv from "@/components/xv-red/LocationCardsXv";
import ItineraryXv from "@/components/xv-red/ItineraryXv";
import GiftsSectionXv from "@/components/xv-red/GiftsSectionXv";
import { Sparkles, Heart } from "lucide-react";

import SEO from "@/components/SEO";

const XvInviteRed = () => {
  return (
    // CAMBIO: Fondo degradado vibrante (Rojo a Vino) en lugar de negro
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#b91c1c] via-[#7f1d1d] to-[#450a0a] font-sans selection:bg-red-300 selection:text-red-900 overflow-x-hidden text-white">
      <SEO 
        title="Mis XV Años - Valentina" 
        description="Te invito a celebrar mis 15 años. ¡No faltes a esta noche mágica!" 
      />
      <MusicPlayerXv />
      <HeroSectionXv />
      
      {/* SECCIÓN INTRO */}
      <section className="py-28 px-6 text-center relative">
        {/* Luz de fondo para dar brillo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-500/30 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
            <Sparkles className="w-10 h-10 text-yellow-200 mx-auto mb-8 animate-pulse opacity-90" />
            <p className="font-serif text-3xl md:text-5xl text-white leading-relaxed italic drop-shadow-md">
            "Hay momentos inolvidables que se atesoran en el corazón para siempre, por eso quiero que compartas conmigo esta noche mágica."
            </p>
            
            <div className="mt-16 flex flex-col md:flex-row justify-center gap-12 text-sm tracking-[0.2em] uppercase text-red-100">
            <div className="flex flex-col items-center">
                <Heart className="w-6 h-6 text-red-300 mb-4 fill-red-300/20" />
                <p className="font-bold text-white mb-1 text-lg">Mis Padres</p>
                <p className="font-light text-red-50">Roberto & Ana</p>
            </div>
            <div className="flex flex-col items-center">
                <Heart className="w-6 h-6 text-red-300 mb-4 fill-red-300/20" />
                <p className="font-bold text-white mb-1 text-lg">Mis Padrinos</p>
                <p className="font-light text-red-50">Carlos & Sofia</p>
            </div>
            </div>
        </div>
      </section>

      {/* Separador brillante */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-red-300/50 to-transparent"></div>

      <CountdownTimerXv />
      <LocationCardsXv />
      <ItineraryXv />
      <DressCodeXv />
      <GiftsSectionXv />
      <RSVPLogin />

      <footer className="py-16 bg-[#450a0a] text-center text-red-200/50 text-sm border-t border-red-800/30 relative">
        <p className="uppercase tracking-[0.4em] mb-3 font-medium text-white/70">Valentina • XV Años</p>
        <p>© 2026 StellarDay Design</p>
      </footer>
    </div>
  );
};

export default XvInviteRed;