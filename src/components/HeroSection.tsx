import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToDesigns = () => {
    document.getElementById("designs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="inicio" 
      // CAMBIO AQUÍ: Añadimos el fondo gradiente elegante
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"
    >
      {/* Decorative background elements (Esferas flotantes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Esfera superior izquierda */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float opacity-60" />
        
        {/* Esfera inferior derecha */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float opacity-60" style={{ animationDelay: "-4s" }} />
        
        {/* Luz central sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span>Invitaciones Digitales Premium</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Tu evento comienza con la{" "}
              <span className="text-gradient-gold">invitación perfecta.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Invitaciones digitales interactivas, elegantes y funcionales para tus momentos más especiales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                onClick={scrollToDesigns}
                size="lg"
                className="gold-gradient text-primary-foreground hover:opacity-90 transition-opacity px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                Ver Diseños
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-medium rounded-full hover:-translate-y-1 duration-300 bg-background/50 backdrop-blur-sm"
                asChild
              >
                <a 
                  href="https://wa.me/5215512345678?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20invitaciones%20digitales"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos
                </a>
              </Button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-64 md:w-80 h-[500px] md:h-[600px] bg-foreground rounded-[3rem] p-3 shadow-2xl animate-float border-[6px] border-foreground/5">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-primary/10 rounded-[2.5rem] overflow-hidden flex items-center justify-center relative">
                  
                  {/* Mockup Screen Content */}
                  <div className="text-center p-6 space-y-4 relative z-10">
                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-serif text-2xl text-foreground">María & José</p>
                    <p className="text-muted-foreground text-sm uppercase tracking-widest">15 . 03 . 2025</p>
                    <div className="pt-4">
                      <div className="h-px w-24 mx-auto bg-primary/30" />
                    </div>
                    <p className="text-xs text-muted-foreground italic px-4">
                      "El amor es el único tesoro que se multiplica al dividirse"
                    </p>
                    <Button size="sm" className="mt-4 gold-gradient text-primary-foreground rounded-full text-xs">
                      Confirmar Asistencia
                    </Button>
                  </div>
                  
                  {/* Screen Shine effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
                </div>
                
                {/* Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-20" />
              </div>
              
              {/* Decorative floating elements around phone */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/5 rounded-2xl rotate-12 backdrop-blur-md animate-float border border-primary/10" style={{ animationDelay: "1s" }} />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-primary/40 to-primary/10 rounded-full -rotate-12 backdrop-blur-md animate-float border border-primary/10" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;