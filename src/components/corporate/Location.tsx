import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Sede del Evento</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Centro de Convenciones</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Address Card */}
          <div className="bg-white p-8 shadow-lg border-t-4 border-blue-600">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Dirección</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Av. Paseo de la Reforma 505,<br />
              Cuauhtémoc, 06500<br />
              Ciudad de México, CDMX
            </p>
            <Button 
              variant="outline" 
              className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              asChild
            >
              <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer">
                <Navigation className="w-4 h-4 mr-2" />
                Cómo llegar
              </a>
            </Button>
          </div>

          {/* Map (Spans 2 columns) */}
          <div className="lg:col-span-2 h-[400px] bg-slate-200 rounded-none shadow-inner relative overflow-hidden group">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.536762264906!2d-99.16869402476532!3d19.43260768184666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8cac4c99555%3A0x6b77207624c9405c!2sPalacio%20de%20Bellas%20Artes!5e0!3m2!1sen!2smx!4v1709669677382!5m2!1sen!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(100%)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:filter-none transition-all duration-500"
            ></iframe>
            
            {/* Overlay Title */}
            <div className="absolute top-0 left-0 bg-white/90 px-6 py-3 font-bold text-slate-900 text-sm shadow-sm">
                MAPA INTERACTIVO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
