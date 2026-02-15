import Hero from "@/components/party/Hero";
import Countdown from "@/components/party/Countdown";
import Location from "@/components/party/Location";
import Itinerary from "@/components/party/Itinerary";
import RSVP from "@/components/party/RSVP";
import Footer from "@/components/party/Footer";
import SEO from "@/components/SEO";

const PartyInvite = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-50 selection:bg-purple-500/30">
      <SEO 
        title="Neon Night Party" 
        description="Estás invitado a la mejor fiesta del año." 
      />
      
      <Hero />
      <Countdown />
      <Location />
      <Itinerary />
      <RSVP />
      <Footer />
    </div>
  );
};

export default PartyInvite;
