import HeroSectionXv from "@/components/xv-red/HeroSectionXv";
import CountdownTimerXv from "@/components/xv-red/CountdownTimerXv";
import RSVPLogin from "@/components/xv-red/RSVPLogin";
import DressCodeXv from "@/components/xv-red/DressCodeXv";
import MusicPlayerXv from "@/components/xv-red/MusicPlayerXv";
// Usaremos versiones adaptadas de estos componentes
import LocationCards from "@/components/wedding/LocationCards";
import Itinerary from "@/components/wedding/Itinerary";
import GiftsSection from "@/components/wedding/GiftsSection";
import { Sparkles, Heart } from "lucide-react";

const XvInviteRed = () => {
  return (
    // FONDO BASE CLARO: Un crema rosado elegante que da luz.
    <div className="min-h-screen bg-[#fffafa] font-sans selection:bg-red-200 selection:text-red-900 overflow-x-hidden">
      <MusicPlayerXv />
      <HeroSectionXv />
      
      {/* --- SECCIÓN INTRO (Fondo Claro) --- */}
      <section className="py-24 px-6 text-center relative">
        <div className="max-w-3xl mx-auto relative z-10">
            <Sparkles className="w-6 h-6 text-red-400 mx-auto mb-6 animate-pulse opacity-60" />
            {/* Texto en rojo elegante */}
            <p className="font-serif text-3xl md:text-4xl text-red-900 leading-relaxed italic drop-shadow-sm">
            "Hay momentos inolvidables que se atesoran en el corazón para siempre, por eso quiero que compartas conmigo esta noche mágica."
            </p>
            
            <div className="mt-16 flex flex-col md:flex-row justify-center gap-12 text-sm tracking-[0.2em] uppercase text-red-800/70">
            <div className="flex flex-col items-center group">
                <Heart className="w-4 h-4 text-red-400 mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-red-900 mb-1 text-base">Mis Padres</p>
                <p className="font-light">Roberto & Ana</p>
            </div>
            <div className="flex flex-col items-center group">
                <Heart className="w-4 h-4 text-red-400 mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-red-900 mb-1 text-base">Mis Padrinos</p>
                <p className="font-light">Carlos & Sofia</p>
            </div>
            </div>
        </div>
      </section>

      {/* El contador ya está adaptado a fondo claro */}
      <CountdownTimerXv />
      
      {/* --- SECCIÓN DETALLES DEL EVENTO (Fondo Claro con Acentos Rojos) --- */}
      {/* Envolvemos los componentes de boda en un div que fuerza los colores rojos */}
      <div className="[&_h2]:text-red-900 [&_h3]:text-red-950 [&_p]:text-red-800/80 [&_.text-primary]:text-red-600 [&_button]:text-red-700 [&_button:hover]:bg-red-50">
        <LocationCards />
        <div className="my-12"></div> {/* Espaciador */}
        <Itinerary />
      </div>
      
      {/* --- SECCIÓN DRESS CODE (Fondo Rojo Impactante) --- */}
      {/* Esta sección rompe el ritmo y destaca */}
      <DressCodeXv />
      
      {/* --- SECCIÓN REGALOS (Fondo Claro) --- */}
      <div className="[&_h2]:text-red-900 [&_.text-primary]:text-red-600 [&_svg]:text-red-500 py-12">
        <GiftsSection />
      </div>

      {/* --- SECCIÓN RSVP/LOGIN (Fondo Rojo Final) --- */}
      <RSVPLogin />

      {/* --- FOOTER (Fondo Rojo Oscuro) --- */}
      <footer className="py-12 bg-red-950 text-center text-red-200/40 text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
        <p className="uppercase tracking-[0.4em] mb-3 font-medium text-red-100/60 relative z-10">Valentina • XV Años</p>
        <p className="relative z-10">© 2026 StellarDay Design</p>
      </footer>
    </div>
  );
};

export default XvInviteRed;