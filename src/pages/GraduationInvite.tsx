import { Suspense, lazy } from "react";
import Hero from "@/components/graduation/Hero";
import Countdown from "@/components/graduation/Countdown";
import LocationCards from "@/components/graduation/LocationCards";
import Itinerary from "@/components/graduation/Itinerary";
import DressCode from "@/components/graduation/DressCode";
import WhatsAppRSVP from "@/components/graduation/WhatsAppRSVP";
import Mentors from "@/components/graduation/Mentors";
import Accommodation from "@/components/graduation/Accommodation";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";

// Lazy load heavy components
const GiftSection = lazy(() => import("@/components/graduation/GiftSection"));
const PhotoGallery = lazy(() => import("@/components/graduation/PhotoGallery"));
const MusicPlayer = lazy(() => import("@/components/graduation/MusicPlayer"));

const LoadingFallback = () => (
  <div className="w-full h-40 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
  </div>
);

const GraduationInvite = () => {
  return (
    // AQUÍ ESTÁ EL CAMBIO IMPORTANTE: Agregamos "uaz-theme"
    <div className="min-h-screen bg-background font-sans relative uaz-theme">
      {/* Hero Section */}
      <div className="relative">
        <Hero />
        <SectionDivider position="bottom" variant="wave" fill="fill-background" />
      </div>
      
      {/* Countdown Timer */}
      <ScrollReveal>
        <div className="relative pt-12">
          <Countdown />
        </div>
      </ScrollReveal>
      
      {/* LocationCards */}
      <ScrollReveal>
        <LocationCards />
      </ScrollReveal>

      {/* Sugerencias de Hospedaje */}
      <ScrollReveal>
        <Accommodation />
      </ScrollReveal>
      
      {/* Event Itinerary */}
      <ScrollReveal>
        <div className="relative">
          <SectionDivider position="top" variant="slant" fill="fill-background" />
          <Itinerary />
          <SectionDivider position="bottom" variant="wave" fill="fill-background" />
        </div>
      </ScrollReveal>
      
      {/* Dress Code */}
      <ScrollReveal>
        <DressCode />
      </ScrollReveal>

      {/* Mentores */}
      <ScrollReveal>
        <div className="relative">
          <SectionDivider position="top" variant="curve" fill="fill-white/5" />
          <Mentors />
        </div>
      </ScrollReveal>
      
      {/* Gift Registry */}
      <Suspense fallback={<LoadingFallback />}>
        <ScrollReveal>
          <GiftSection />
        </ScrollReveal>
      </Suspense>
      
      {/* Photo Gallery */}
      <Suspense fallback={<LoadingFallback />}>
        <ScrollReveal>
          <PhotoGallery />
        </ScrollReveal>
      </Suspense>
      
      {/* RSVP Section */}
      <ScrollReveal>
        <WhatsAppRSVP />
      </ScrollReveal>
      
      {/* Music Player - Floating */}
      <Suspense fallback={null}>
        <MusicPlayer />
      </Suspense>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center gradient-navy">
        <p className="text-white/50 text-sm">
          Con cariño, Generación 2022-2026
        </p>
        <p className="text-gold/70 text-xs mt-2">
          Ingeniería de Software — UAZ
        </p>
      </footer>
    </div>
  );
};

export default GraduationInvite;