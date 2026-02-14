import {
  FloatingClouds,
  HeroSection,
  MusicPlayer,
  CountdownTimer,
  LocationCards,
  WeatherSection,
  Itinerary,
  PhotoGallery,
  GiftsSection,
  RSVPForm,
  Footer,
  DressCode, // <--- Importación nueva
} from "@/components/baptism";

import SEO from "@/components/SEO";

// Fotos de ejemplo (puedes cambiarlas por las reales)
const placeholderPhotos = [
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&h=600&fit=crop",
];

// Datos del Bautizo - Traducidos al Español y Completos
const baptismData = {
  babyName: "Sofía Grace",
  date: "Domingo, 15 de Marzo de 2026",
  targetDate: new Date("2026-03-15T11:00:00"),
  
  church: {
    name: "Catedral de Santa María",
    address: "Calle Catedral 123, Centro, Ciudad",
    time: "11:00 AM", // <--- Hora visible para LocationCards
    mapsUrl: "https://maps.google.com/?q=Catedral+de+Santa+Maria",
  },
  
  reception: {
    name: "Jardín El Pabellón",
    address: "Av. Jardines 456, Ribera, Ciudad",
    time: "1:00 PM", // <--- Hora visible para LocationCards
    mapsUrl: "https://maps.google.com/?q=Jardin+El+Pabellon",
  },
  
  // NUEVO: Datos para el Código de Vestimenta
  dressCode: {
    type: "Formal de Día",
    description: "Sugerimos colores claros y pasteles (blanco, beige, rosa palo, azul cielo) para armonizar con la celebración.",
    colors: ["#FFFFFF", "#F5F5DC", "#E0F7FA", "#F8E1E7"], // Blanco, Beige, Azul claro, Rosa claro
  },
  
  weather: {
    condition: "sunny" as const,
    temperature: 22,
    temperatureUnit: "C" as const,
    description: "Soleado con algunas nubes",
    date: "15 de Marzo, 2026",
  },
  
  itinerary: [
    {
      time: "11:00 AM",
      title: "Ceremonia Religiosa",
      description: "La sagrada ceremonia en la Catedral de Santa María",
      icon: "ceremony" as const,
    },
    {
      time: "12:00 PM",
      title: "Sesión de Fotos",
      description: "Capturando momentos hermosos en familia",
      icon: "photos" as const,
    },
    {
      time: "1:00 PM",
      title: "Recepción y Comida",
      description: "Acompáñanos a celebrar en el Jardín El Pabellón",
      icon: "lunch" as const,
    },
    {
      time: "3:00 PM",
      title: "Pastel y Bendiciones",
      description: "Un momento especial con nuestro angelito",
      icon: "blessing" as const,
    },
  ],
  
  godparents: [
    { name: "Maria Elena Rodriguez", role: "Madrina" as const },
    { name: "James Michael Thompson", role: "Padrino" as const },
  ],
};



const BaptismInvite = () => {
  return (
    <div className="min-h-screen bg-background relative font-sans text-foreground">
      <SEO 
        title="Bautizo de Sofía Grace" 
        description="Acompáñanos a recibir la bendición de Sofía Grace. Detalles del evento." 
      />
      {/* Nubes flotantes de fondo */}
      <FloatingClouds />
      
      {/* Reproductor de Música */}
      <MusicPlayer />
      
      {/* Sección Principal */}
      <HeroSection
        babyName={baptismData.babyName}
        date={baptismData.date}
      />
      
      {/* Cuenta Regresiva */}
      <CountdownTimer targetDate={baptismData.targetDate} />
      
      {/* Tarjetas de Ubicación (Con Hora y Lugar) */}
      <LocationCards
        church={baptismData.church}
        reception={baptismData.reception}
      />
      
      {/* Itinerario */}
      <Itinerary events={baptismData.itinerary} />

      {/* NUEVA SECCIÓN: Código de Vestimenta */}
      <DressCode 
        type={baptismData.dressCode.type}
        description={baptismData.dressCode.description}
        colors={baptismData.dressCode.colors}
      />
      
      {/* Sección del Clima */}
      <WeatherSection weather={baptismData.weather} />
      
      {/* Galería de Fotos */}
      <PhotoGallery photos={placeholderPhotos} />
      
      {/* Padrinos y Regalos */}
      <GiftsSection
        godparents={baptismData.godparents}
        message="Su presencia es el mejor regalo de todos. Sin embargo, si desean tener un detalle con Sofía, ella agradecería mucho juguetes didácticos o ropa."
      />
      
      {/* Formulario de Confirmación */}
      <RSVPForm />
      
      {/* Pie de página */}
      <Footer
        babyName={baptismData.babyName}
        date={baptismData.date}
      />
    </div>
  );
};

export default BaptismInvite;