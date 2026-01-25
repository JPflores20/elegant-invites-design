import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "La invitación de nuestra boda fue absolutamente perfecta. Todos nuestros invitados quedaron impresionados con la elegancia y las funciones interactivas.",
    author: "María y Carlos",
    event: "Boda - Marzo 2024",
  },
  {
    quote: "El equipo fue increíblemente atento y capturó exactamente la esencia de los XV años de mi hija. ¡El contador regresivo fue un éxito!",
    author: "Laura González",
    event: "XV Años - Febrero 2024",
  },
  {
    quote: "Profesionales desde el primer contacto. La invitación corporativa elevó completamente la imagen de nuestro evento anual.",
    author: "Roberto Mendoza",
    event: "Evento Corporativo - Enero 2024",
  },
  {
    quote: "La integración con Google Maps fue perfecta. Ningún invitado se perdió y el RSVP nos ayudó muchísimo con la organización.",
    author: "Ana y Miguel",
    event: "Boda - Diciembre 2023",
  },
  {
    quote: "Superaron todas mis expectativas. La galería de fotos quedó hermosa y la música de fondo le dio ese toque mágico.",
    author: "Fernanda Ruiz",
    event: "Bautizo - Noviembre 2023",
  },
];

const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  return (
    <section 
      className="py-20 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Lo que dicen{" "}
            <span className="text-gradient-gold">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Historias reales de momentos inolvidables
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_70%] px-4"
                >
                  <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border text-center relative">
                    {/* Decorative quote */}
                    <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
                    
                    <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 pt-8 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="space-y-1">
                      <p className="font-bold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-primary">{testimonial.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 rounded-full bg-card/90 backdrop-blur-sm border-border hover:border-primary/50 hover:bg-card z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 rounded-full bg-card/90 backdrop-blur-sm border-border hover:border-primary/50 hover:bg-card z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
