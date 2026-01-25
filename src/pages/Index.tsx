import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection"; // Importar
import EventTypesGrid from "@/components/EventTypesGrid";
import PortfolioSection from "@/components/PortfolioSection"; // Importar
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import PricingCards from "@/components/PricingCards";
import FAQSection from "@/components/FAQSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Las estadísticas justo después del Hero dan mucha autoridad */}
      <StatsSection />
      
      <EventTypesGrid />
      
      {/* Mostrar ejemplos antes de explicar el proceso ayuda a enganchar */}
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