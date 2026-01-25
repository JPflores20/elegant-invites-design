import HeroSectionInv from "@/components/wedding/HeroSectionInv";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import LocationCards from "@/components/wedding/LocationCards";
import Itinerary from "@/components/wedding/Itinerary";
import GiftsSection from "@/components/wedding/GiftsSection";
import DressCode from "@/components/wedding/DressCode";
import RSVPForm from "@/components/wedding/RSVPForm";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import FooterInv from "@/components/wedding/FooterInv";
import Gallery from "@/components/wedding/Gallery"; // <--- IMPORTADO
import DecorativeFloral from "@/components/wedding/DecorativeFloral";

const WeddingInvite = () => {
  return (
    <div 
      className="min-h-screen font-sans relative overflow-x-hidden selection:bg-[#D7C4BB] selection:text-[#4A3B32]"
      style={{
        "--background": "40 30% 94%", 
        "--foreground": "25 20% 30%",
        "--card": "40 30% 97%", 
        "--card-foreground": "25 20% 30%",
        "--muted": "35 25% 88%",
        "--muted-foreground": "25 10% 50%",
        "--primary": "30 40% 50%", 
        "--primary-foreground": "0 0% 100%",
        "--border": "35 25% 85%",
        "--ring": "30 40% 50%",
      } as React.CSSProperties}
    >
      {/* Textura de papel de fondo */}
      <div className="fixed inset-0 opacity-40 pointer-events-none z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")` }} 
      />
      
      <div className="relative z-10 bg-background/40">
        <MusicPlayer />
        
        {/* PORTADA */}
        <div className="relative">
            <DecorativeFloral position="top-left" className="top-0 left-0 w-48 h-48 md:w-80 md:h-80 opacity-80" />
            <DecorativeFloral position="top-right" className="top-0 right-0 w-48 h-48 md:w-80 md:h-80 opacity-80" />
            <HeroSectionInv />
        </div>
        
        <CountdownTimer />

        <DecorativeFloral position="divider" />
        
        <div className="relative">
          <DecorativeFloral position="bottom-left" className="top-20 -left-16 opacity-40 w-64 h-64 md:w-96 md:h-96" />
          <LocationCards />
        </div>

        <Itinerary />
        
        {/* --- GALERÍA RESTAURADA AQUÍ --- */}
        <DecorativeFloral position="divider" />
        <div className="relative py-12">
           <Gallery />
        </div>
        {/* -------------------------------- */}
        
        <DecorativeFloral position="divider" />

        <div className="relative">
           <DecorativeFloral position="top-right" className="-top-10 -right-16 opacity-40 w-64 h-64 md:w-96 md:h-96" />
           <DressCode />
           <GiftsSection />
        </div>
        
        <RSVPForm />
        
        <div className="relative overflow-hidden">
            <DecorativeFloral position="bottom-right" className="-bottom-10 -right-10 opacity-30 w-40 h-40" />
            <DecorativeFloral position="bottom-left" className="-bottom-10 -left-10 opacity-30 w-40 h-40" />
            <FooterInv />
        </div>
      </div>
    </div>
  );
};

export default WeddingInvite;