// src/pages/Index.tsx

import Navbar from "@/components/Navbar"; 
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import EventTypesGrid from "@/components/EventTypesGrid";
// Se eliminó PortfolioSection
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import PricingCards from "@/components/PricingCards";
import FAQSection from "@/components/FAQSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; 

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar /> 
      
      <HeroSection />
      
      <StatsSection />
      
      {/* Esta es la sección que ahora tendrá los enlaces */}
      <EventTypesGrid />
      
      {/* PortfolioSection eliminado de aquí */}
      
      <ProcessSection />
      
      <FeaturesSection />
      
      <PricingCards />
      
      <FAQSection />
      
      <TestimonialsCarousel />
      
      <Footer />

      <WhatsAppButton />
    </main>
  );
};

export default Index;