import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const examples = [
  {
    title: "Boda Minimalista",
    category: "Bodas",
    color: "bg-[#F5E6D3]", // Beige
    image: "linear-gradient(45deg, #F5E6D3 0%, #FFF 100%)",
    link: "/invitacion-boda", // <--- ENLACE ACTIVO A TU NUEVA RUTA
  },
  {
    title: "XV Años Neón",
    category: "XV Años",
    color: "bg-[#2D1B69]", // Purple
    image: "linear-gradient(45deg, #2D1B69 0%, #9D4EDD 100%)",
    link: "#", // Sin enlace todavía
  },
  {
    title: "Bautizo Floral",
    category: "Bautizos",
    color: "bg-[#E0F7FA]", // Light Blue
    image: "linear-gradient(45deg, #E0F7FA 0%, #B2EBF2 100%)",
    link: "#", // Sin enlace todavía
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 max-w-2xl animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explora nuestra <span className="text-gradient-gold">galería de diseños</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Desde lo clásico hasta lo moderno. Encuentra la inspiración perfecta para tu evento.
            </p>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="outline" className="group">
              Ver todo el portafolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((item, index) => (
            // Usamos <a> para que funcione como enlace real
            <a 
              key={index}
              href={item.link}
              // Si el link no es "#", abrir en pestaña nueva (_blank)
              target={item.link !== "#" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="block group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Fondo simulado de la invitación */}
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{ background: item.image }}
              />
              
              {/* Overlay oscuro al pasar el mouse */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Contenido flotante */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1">
                      {item.title}
                    </h3>
                  </div>
                  {/* Flecha que aparece al hacer hover */}
                  <div className="bg-primary/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;