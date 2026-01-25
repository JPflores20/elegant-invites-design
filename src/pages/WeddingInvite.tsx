import HeroSectionInv from "@/components/wedding/HeroSectionInv";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import LocationCards from "@/components/wedding/LocationCards";
import Itinerary from "@/components/wedding/Itinerary";
import DressCode from "@/components/wedding/DressCode";
import Gallery from "@/components/wedding/Gallery";
import GiftsSection from "@/components/wedding/GiftsSection";
import RSVPForm from "@/components/wedding/RSVPForm";
import FooterInv from "@/components/wedding/FooterInv";
import MusicPlayer from "@/components/wedding/MusicPlayer";

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
      
      {/* Footer específico de la invitación */}
      <FooterInv />
    </div>
  );
};

export default WeddingInvite;