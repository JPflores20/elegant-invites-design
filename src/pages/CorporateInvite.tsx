import Hero from "@/components/corporate/Hero";
import Countdown from "@/components/corporate/Countdown";
import Location from "@/components/corporate/Location";
import Agenda from "@/components/corporate/Agenda";
import DressCode from "@/components/corporate/DressCode";
import RSVP from "@/components/corporate/RSVP";
import Footer from "@/components/party/Footer"; // Reusing Footer for now, or could make a corporate one
import SEO from "@/components/SEO";

const CorporateInvite = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      <SEO 
        title="Innovación & Liderazgo 2026 - Invitación Corporativa" 
        description="Únase a nosotros para nuestro evento anual de innovación y liderazgo." 
      />
      
      <Hero />
      <Countdown />
      <Location />
      <Agenda />
      <DressCode />
      <RSVP />
      {/* TODO: Add Corporate Footer if needed, using Party Footer as placeholder or simple one */}
      <footer className="bg-slate-950 py-12 text-center text-slate-400 text-sm border-t border-slate-900">
        <div className="container mx-auto">
          <p>© 2026 StellarDay Corp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default CorporateInvite;
