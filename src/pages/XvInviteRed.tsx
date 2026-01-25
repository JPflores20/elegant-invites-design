import HeroSectionXv from "@/components/xv-red/HeroSectionXv";
import CountdownTimerXv from "@/components/xv-red/CountdownTimerXv";
import RSVPLogin from "@/components/xv-red/RSVPLogin";
import DressCodeXv from "@/components/xv-red/DressCodeXv";
import MusicPlayerXv from "@/components/xv-red/MusicPlayerXv";
// IMPORTAMOS LOS COMPONENTES NUEVOS Y SEPARADOS
import LocationCardsXv from "@/components/xv-red/LocationCardsXv";
import ItineraryXv from "@/components/xv-red/ItineraryXv";
import GiftsSectionXv from "@/components/xv-red/GiftsSectionXv";
import { Sparkles, Heart } from "lucide-react";

const XvInviteRed = () => {
  return (
    // Fondo base oscuro global
    <div className="min-h-screen bg-[#0a0202] font-sans selection:bg-red-900 selection:text-white overflow-x-hidden">
      <MusicPlayerXv />
      <HeroSectionXv />
      
      {/* SECCIÓN INTRO */}
      <section className="py-28 px-6 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-800/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
            <Sparkles className="w-8 h-8 text-red-500 mx-auto mb-8 animate-pulse opacity-80" />
            <p className="font-serif text-3xl md:text-5xl text-red-50 leading-relaxed italic drop-shadow-lg">
            "Hay momentos inolvidables que se atesoran en el corazón para siempre, por eso quiero que compartas conmigo esta noche mágica."
            </p>
            
            <div className="mt-16 flex flex-col md:flex-row justify-center gap-12 text-sm tracking-[0.2em] uppercase text-red-300/50">
            <div className="flex flex-col items-center">
                <Heart className="w-5 h-5 text-red-600 mb-4" />
                <p className="font-bold text-red-100 mb-1 text-base">Mis Padres</p>
                <p className="font-light text-red-200">Roberto & Ana</p>
            </div>
            <div className="flex flex-col items-center">
                <Heart className="w-5 h-5 text-red-600 mb-4" />
                <p className="font-bold text-red-100 mb-1 text-base">Mis Padrinos</p>
                <p className="font-light text-red-200">Carlos & Sofia</p>
            </div>
            </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>

      <CountdownTimerXv />
      
      {/* COMPONENTES EXCLUSIVOS DE XV (Oscuros por defecto) */}
      <LocationCardsXv />
      <ItineraryXv />
      <DressCodeXv />
      <GiftsSectionXv />
      <RSVPLogin />

      <footer className="py-16 bg-black text-center text-red-200/30 text-sm border-t border-red-900/20 relative">
        <p className="uppercase tracking-[0.4em] mb-3 font-medium text-red-100/40">Valentina • XV Años</p>
        <p>© 2026 StellarDay Design</p>
      </footer>
    </div>
  );
};

export default XvInviteRed;