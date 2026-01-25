import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const isAutoScroll = searchParams.get("autoScroll") === "true";

  useEffect(() => {
    if (!isAutoScroll) return;

    let animationFrameId: number;
    // Velocidad rápida para el demo
    const scrollSpeed = 4.0; 

    const scroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        window.scrollTo(0, 0);
      } else {
        window.scrollBy(0, scrollSpeed);
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    const timeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll);
    }, 500);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeout);
    };
  }, [isAutoScroll]);

  return (
    <div 
      className={`min-h-screen bg-background font-sans text-foreground overflow-x-hidden ${
        isAutoScroll ? "overflow-hidden pointer-events-none select-none" : ""
      }`}
    >
      {!isAutoScroll && <MusicPlayer />}
      
      <HeroSectionInv />
      <CountdownTimer />
      <LocationCards />
      <Itinerary />
      <DressCode />
      <Gallery />
      <GiftsSection />
      <RSVPForm />
      
      <FooterInv />
    </div>
  );
};

export default WeddingInvite;