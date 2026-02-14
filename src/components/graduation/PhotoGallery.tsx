import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder images - replace with actual photos later
const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    alt: "Graduados celebrando",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    alt: "Ceremonia de graduación",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=800&q=80",
    alt: "Grupo de estudiantes",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80",
    alt: "Celebración",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
    alt: "Estudiantes universitarios",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80",
    alt: "Graduados felices",
  },
];

const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gold mb-6">
            Galería
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Momentos que atesoraremos siempre
          </p>
        </div>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gold/0 group-hover:bg-gold/90 transition-all duration-300 flex items-center justify-center transform scale-0 group-hover:scale-100">
                  <span className="text-primary-foreground text-lg">+</span>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            {/* Image */}
            <img
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            
            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            
            {/* Photo Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedIndex + 1} / {photos.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
