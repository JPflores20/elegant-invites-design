// src/pages/Index.tsx

import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar"; 
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import EventTypesGrid from "@/components/EventTypesGrid";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import PricingCards from "@/components/PricingCards";
import FAQSection from "@/components/FAQSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; 

// ... imports

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Inicio" 
        description="Invitaciones digitales elegantes y personalizadas para bodas, XV años y bautizos." 
        keywords="invitaciones digitales, bodas, xv años, bautizos, diseño web"
      />
      <Navbar /> 
      
      <HeroSection />
      
      <StatsSection />
      
      {/* Esta es la sección que ahora tendrá los enlaces */}
      <EventTypesGrid />
      
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