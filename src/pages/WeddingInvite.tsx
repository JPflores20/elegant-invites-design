import HeroSectionInv from "@/components/HeroSectionInv";
import CountdownTimer from "@/components/CountdownTimer";
import LocationCards from "@/components/LocationCards";
import Itinerary from "@/components/Itinerary";
import DressCode from "@/components/DressCode";
import Gallery from "@/components/Gallery";
import GiftsSection from "@/components/GiftsSection";
import RSVPForm from "@/components/RSVPForm";
import FooterInv from "@/components/FooterInv";
import MusicPlayer from "@/components/MusicPlayer";

const WeddingInvite = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Reproductor de música flotante */}
      <MusicPlayer />
      
      {/* Secciones de la invitación */}
      <HeroSectionInv />
      <CountdownTimer />
      <LocationCards />
      <Itinerary />
      <DressCode />
      <Gallery />
      <GiftsSection />
      <RSVPForm />
      
      {/* Footer específico de la invitación (renombrado para no chocar con el principal) */}
      <FooterInv />
    </div>
  );
};

export default WeddingInvite;