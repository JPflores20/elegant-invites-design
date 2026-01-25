import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToDesigns = () => {
    document.getElementById("designs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToDesigns}
                size="lg"
                className="gold-gradient text-primary-foreground hover:opacity-90 transition-opacity px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl"
              >
                Ver Diseños
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-medium rounded-full"
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
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-64 md:w-80 h-[500px] md:h-[600px] bg-foreground rounded-[3rem] p-3 shadow-2xl animate-float">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-primary/10 rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  {/* Screen content placeholder */}
                  <div className="text-center p-6 space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-serif text-2xl text-foreground">María & José</p>
                    <p className="text-muted-foreground text-sm">15 de Marzo, 2025</p>
                    <div className="pt-4">
                      <div className="h-px w-24 mx-auto bg-primary/30" />
                    </div>
                    <p className="text-xs text-muted-foreground italic">
                      "El amor es el único tesoro que se multiplica al dividirse"
                    </p>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full" />
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-primary/20 rounded-2xl rotate-12 backdrop-blur-sm" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/30 rounded-xl -rotate-12 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
