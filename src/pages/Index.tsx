// src/pages/Index.tsx

import Navbar from "@/components/Navbar"; 
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import EventTypesGrid from "@/components/EventTypesGrid";
import PortfolioSection from "@/components/PortfolioSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import PricingCards from "@/components/PricingCards";
import FAQSection from "@/components/FAQSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
// 1. Importar el botón de WhatsApp
import WhatsAppButton from "@/components/WhatsAppButton"; 

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar /> 
      
      <HeroSection />
      
      <StatsSection />
      
      <EventTypesGrid />
      
      <PortfolioSection />
      
      <ProcessSection />
      
      <FeaturesSection />
      
      <PricingCards />
      
      <FAQSection />
      
      <TestimonialsCarousel />
      
      <Footer />

      {/* 2. Añadir el botón aquí al final */}
      <WhatsAppButton />
    </main>
  );
};

export default Index;