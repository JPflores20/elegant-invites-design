import HeroSection from "@/components/HeroSection";
import EventTypesGrid from "@/components/EventTypesGrid";
import FeaturesSection from "@/components/FeaturesSection";
import PricingCards from "@/components/PricingCards";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventTypesGrid />
      <FeaturesSection />
      <PricingCards />
      <TestimonialsCarousel />
      <Footer />
    </main>
  );
};

export default Index;
