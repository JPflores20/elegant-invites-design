import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [text, setText] = useState("");
  const phrases = ["Tu Boda", "Tus XV Años", "Tu Bautizo", "Tu Evento"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  const scrollToDesigns = () => {
    document.getElementById("designs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float opacity-60" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float opacity-60" style={{ animationDelay: "-4s" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span>Invitaciones Digitales Premium</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight min-h-[160px] lg:min-h-auto">
              La invitación perfecta para <br />
              <span className="text-primary inline-block">
                {text}
                <span className="animate-blink ml-1">|</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Sorprende a tus invitados con una experiencia digital interactiva, elegante y única.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                onClick={scrollToDesigns}
                size="lg"
                className="gold-gradient text-primary-foreground animate-shimmer hover:opacity-90 transition-opacity px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                Ver Diseños <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-medium rounded-full hover:-translate-y-1 duration-300 bg-background/50 backdrop-blur-sm"
                asChild
              >
                <a href="https://wa.me/5215512345678" target="_blank" rel="noopener noreferrer">
                  Contáctanos
                </a>
              </Button>
            </div>
          </div>

          {/* Phone Mockup con Iframe Escalado */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {/* Aumenté ligeramente el ancho del teléfono para dar más aire */}
            <div className="relative w-72 md:w-80 h-[550px] md:h-[650px] bg-foreground rounded-[3rem] p-3 shadow-2xl animate-float border-[6px] border-foreground/5">
                
                {/* Contenedor de la pantalla */}
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  
                  {/* AQUÍ ESTÁ EL TRUCO: Contenedor de escalado */}
                  {/* Explicación técnica:
                      - El teléfono tiene ~264px de ancho interno (en móvil) y ~296px (en desktop).
                      - La invitación necesita 360px para verse bien.
                      - Forzamos el ancho a 360px y usamos scale() para encogerlo.
                      - w-[360px]: Ancho de un celular estándar.
                      - scale-[0.73]: 264px / 360px = 0.733
                      - scale-[0.82]: 296px / 360px = 0.822
                  */}
                  <div className="absolute top-0 left-0 origin-top-left w-[360px] h-[137%] md:h-[122%] scale-[0.73] md:scale-[0.82]">
                    <iframe 
                        src="/invitacion-boda?autoScroll=true" 
                        className="w-full h-full border-none"
                        title="Vista previa Invitación"
                        style={{ 
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    />
                  </div>
                  
                  {/* Capa invisible para evitar interacción */}
                  <div className="absolute inset-0 bg-transparent pointer-events-auto" />
                </div>
                
                {/* Notch / Isla dinámica */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-20 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;