import HeroSectionXv from "@/components/xv-red/HeroSectionXv";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import RSVPLogin from "@/components/xv-red/RSVPLogin";
import LocationCards from "@/components/wedding/LocationCards";
import Itinerary from "@/components/wedding/Itinerary";
import GiftsSection from "@/components/wedding/GiftsSection";
import DressCode from "@/components/wedding/DressCode";
// CAMBIO IMPORTANTE: Importamos el nuevo reproductor
import MusicPlayerXv from "@/components/xv-red/MusicPlayerXv"; 

const XvInviteRed = () => {
  return (
    <div 
      className="min-h-screen bg-[#fffafa] font-sans text-slate-800"
      style={
        {
          "--primary": "350 80% 50%",
          "--primary-foreground": "0 0% 100%",
          "--foreground": "350 40% 20%",
          "--muted": "350 20% 96%",
        } as React.CSSProperties
      }
    >
      {/* Usamos el nuevo reproductor aquí */}
      <MusicPlayerXv />
      
      <HeroSectionXv />
      
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <p className="font-serif text-2xl md:text-4xl text-red-900 leading-relaxed italic">
          "Hay momentos inolvidables que se atesoran en el corazón para siempre, por eso quiero que compartas conmigo este día tan especial."
        </p>
        <div className="mt-12 flex justify-center gap-12 text-sm tracking-widest uppercase text-red-800/60">
          <div>
            <p className="font-bold text-red-900 mb-2">Mis Padres</p>
            <p>Roberto & Ana</p>
          </div>
          <div>
            <p className="font-bold text-red-900 mb-2">Mis Padrinos</p>
            <p>Carlos & Sofia</p>
          </div>
        </div>
      </section>

      <CountdownTimer />
      <LocationCards />
      <Itinerary />
      <DressCode />
      <GiftsSection />
      <RSVPLogin />

      <footer className="py-12 bg-red-950 text-center text-red-200/30 text-xs">
        <p className="uppercase tracking-[0.3em] mb-2">Valentina • XV Años</p>
        <p>© 2026 StellarDay Design</p>
      </footer>
    </div>
  );
};

export default XvInviteRed;