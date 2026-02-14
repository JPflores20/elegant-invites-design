import { MessageCircle } from "lucide-react";

// Placeholder WhatsApp number - replace with actual number
const WHATSAPP_NUMBER = "521234567890";
const WHATSAPP_MESSAGE = "¡Hola! Confirmo mi asistencia a la graduación de Ingeniería de Software, Generación 2022-2026. 🎓";

const WhatsAppRSVP = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 group"
        aria-label="Confirmar asistencia por WhatsApp"
      >
        <div className="relative">
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
          
          {/* Button */}
          <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors hover:scale-110 transform duration-200">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-primary text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
            Confirmar asistencia
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-primary rotate-45" />
          </div>
        </div>
      </a>
      
      {/* RSVP Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gold mb-6">
            Confirma tu Asistencia
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-8">
            Nos encantaría contar contigo en este día tan especial
          </p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-green-500/25"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Confirmar por WhatsApp</span>
          </a>
          
          <p className="text-muted-foreground/60 text-xs mt-6">
            Por favor confirma antes del 1 de Junio de 2026
          </p>
        </div>
      </section>
    </>
  );
};

export default WhatsAppRSVP;
