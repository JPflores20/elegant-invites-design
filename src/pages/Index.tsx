// src/pages/Index.tsx

import Navbar from "@/components/Navbar"; // <--- 1. Importar el componente
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

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* 2. Agregar el componente Navbar aquí, al principio */}
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
    </main>
  );
};

export default Index;