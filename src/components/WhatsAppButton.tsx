import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5215512345678?text=Hola%2C%20estoy%20visitando%20su%20sitio%20web"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
        ¡Contáctanos!
      </span>
      <div className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-1">
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </div>
      
      {/* Efecto de onda (ping) */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] -z-10 animate-ping opacity-75" />
    </a>
  );
};

export default WhatsAppButton;