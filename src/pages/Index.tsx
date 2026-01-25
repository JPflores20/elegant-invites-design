import HeroSection from "@/components/HeroSection";
import EventTypesGrid from "@/components/EventTypesGrid";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection"; // Importar
import PricingCards from "@/components/PricingCards";
import FAQSection from "@/components/FAQSection"; // Importar
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Grid de eventos primero */}
      <EventTypesGrid />
      
      {/* ¿Cómo funciona? Ideal para explicar el proceso antes de vender las características */}
      <ProcessSection />
      
      {/* Características detalladas */}
      <FeaturesSection />
      
      {/* Precios */}
      <PricingCards />
      
      {/* Preguntas frecuentes para eliminar dudas antes de la compra */}
      <FAQSection />
      
      {/* Testimonios para dar confianza final */}
      <TestimonialsCarousel />
      
      <Footer />
    </main>
  );
};

export default Index;