import { Hotel, MapPin, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const hotels = [
  {
    name: "Hotel Emporio Zacatecas",
    description: "Ubicación privilegiada frente a Catedral. Ideal si buscas comodidad y lujo.",
    price: "$$$",
    rating: 5,
    address: "Av. Hidalgo 703, Centro Histórico",
    phone: "+52 492 925 6500",
    url: "https://www.emporiohotels.com/zacatecas",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Hotel Santa Rita",
    description: "Elegancia y spa en el corazón de la ciudad. A 5 minutos caminando del salón.",
    price: "$$$",
    rating: 5,
    address: "Av. Hidalgo 507, Centro Histórico",
    phone: "+52 492 925 4700",
    url: "https://www.hotelsantarita.com/",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Hotel Reyna Soledad",
    description: "Casona colonial tradicional y más económica. Excelente ubicación.",
    price: "$$",
    rating: 4,
    address: "Tacuba 163, Centro Histórico",
    phone: "+52 492 922 3156",
    url: "https://www.hotelreynasoledad.com/",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200",
  },
];

const Accommodation = () => {
  return (
    // CAMBIO: Fondo gris claro en lugar de transparente
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#D4AF37]/10 mb-4">
            <Hotel className="w-6 h-6 text-[#D4AF37]" />
          </div>
          {/* CAMBIO: Texto oscuro (gray-900) */}
          <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
            Sugerencias de Hospedaje
          </h2>
          {/* CAMBIO: Texto gris medio (gray-600) */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            Para tu comodidad, hemos seleccionado estas opciones cercanas a los eventos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div
              key={hotel.name}
              // CAMBIO: Fondo blanco, borde gris claro y sombra
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-sm hover:shadow-md"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 z-10 shadow-sm">
                  <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                  <span className="text-xs text-gray-800 font-medium">{hotel.rating} Estrellas</span>
                </div>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  {/* CAMBIO: Texto del título oscuro */}
                  <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                  <span className="text-[#D4AF37] font-medium">{hotel.price}</span>
                </div>
                
                {/* CAMBIO: Texto descriptivo gris */}
                <p className="text-sm text-gray-600 line-clamp-2">
                  {hotel.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{hotel.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>{hotel.phone}</span>
                  </div>
                </div>

                <Button 
                  asChild
                  // CAMBIO: Botón con estilo outline/fantasma oscuro para que resalte
                  className="w-full bg-gray-100 hover:bg-[#D4AF37] text-gray-900 hover:text-white border-0 mt-4 transition-all duration-300"
                >
                  <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                    Ver Hotel
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;