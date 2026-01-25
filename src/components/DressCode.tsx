import { Shirt, Sparkles, Ban } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// --- CONFIGURACIÓN DE COLORES ---
// Solo mostramos los que NO se pueden usar
const reservedColors = [
  { 
    name: "Rosa Gold (Exclusivo Quinceañera)", 
    hex: "#fda4af", 
    gradient: "linear-gradient(135deg, #fecdd3 0%, #fb7185 100%)" 
  },
  { 
    name: "Blanco (Reservado)", 
    hex: "#ffffff" 
  },
];
// ------------------------------------

const DressCode = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="dresscode">
      {/* Fondo con destellos sutiles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-16 animate-fade-up">
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-4 opacity-80" />
          <h2 className="text-5xl md:text-6xl font-script gold-text mb-4">
            Código de Vestimenta
          </h2>
          <div className="inline-block px-6 py-2 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
            <p className="text-xl text-foreground tracking-[0.2em] uppercase font-serif font-semibold">
              Etiqueta Rigurosa
            </p>
          </div>
        </div>

        {/* Tarjetas de Ejemplo Visual (Damas / Caballeros) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {/* Tarjeta Damas */}
          <div className="glass-card p-8 text-center relative group hover:-translate-y-2 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20 group-hover:border-primary/50 transition-colors">
                {/* Icono estilizado para vestido */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary"><path d="M9.5 2c-.7 0-1.3.5-1.5 1.2L7 8h10l-1-4.8c-.2-.7-.8-1.2-1.5-1.2h-5Z"/><path d="M7 8v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8"/><path d="M15 10v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V10"/><path d="M9 22h6"/></svg>
            </div>
            <h3 className="text-2xl font-serif text-foreground mb-3">Damas</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
              Vestido largo de noche. <br/>
              <span className="italic opacity-80">Nos reservamos el derecho de admisión a vestidos cortos o casuales.</span>
            </p>
          </div>

          {/* Tarjeta Caballeros */}
          <div className="glass-card p-8 text-center relative group hover:-translate-y-2 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20 group-hover:border-primary/50 transition-colors">
              <Shirt className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-foreground mb-3">Caballeros</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
              Traje formal completo (Saco y corbata obligatorios). <br/>
              <span className="italic opacity-80">Guayaberas o mezclilla no permitidas.</span>
            </p>
          </div>
        </div>

        {/* --- SECCIÓN DE COLORES RESERVADOS (ÚNICA) --- */}
        <div className="max-w-2xl mx-auto animate-fade-up" style={{animationDelay: "200ms"}}>
           <TooltipProvider delayDuration={100}>
              <div className="relative p-8 rounded-3xl border border-primary/20 bg-card/40 backdrop-blur-sm text-center">
                 
                {/* Título de la sección */}
                <h3 className="text-xl font-serif text-foreground mb-2 flex items-center justify-center gap-2">
                  <Ban className="w-5 h-5 text-destructive/70" />
                  Nota Importante
                </h3>
                <p className="text-muted-foreground mb-8 font-light">
                  Agradecemos reservar los siguientes colores para uso exclusivo de la festejada:
                </p>

                {/* Círculos de Colores Prohibidos */}
                <div className="flex flex-wrap justify-center gap-8">
                  {reservedColors.map((color, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <div className="group flex flex-col items-center gap-3 cursor-pointer">
                          {/* Círculo de color */}
                          <div 
                            className="w-16 h-16 rounded-full shadow-lg relative border-4 border-background ring-1 ring-primary/20 group-hover:scale-110 transition-all duration-300"
                            style={{ 
                              background: color.gradient || color.hex,
                            }}
                          >
                            {/* Icono de bloqueo sutil al hacer hover */}
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-full text-white">
                               <Ban className="w-6 h-6" />
                             </div>
                          </div>
                          
                          {/* Nombre del color visible (sin necesidad de tooltip en móvil) */}
                          <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                            {color.name.split('(')[0].trim()}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-destructive text-destructive-foreground border-destructive/20 font-serif">
                        <p>Reservado: No utilizar</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>

              </div>
          </TooltipProvider>
        </div>

      </div>
    </section>
  );
};

export default DressCode;