import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    alt: "Preparación",
    height: "tall"
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    alt: "Celebración",
    height: "short"
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
    alt: "Vestido",
    height: "short"
  },
  {
    src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800&auto=format&fit=crop",
    alt: "Familia",
    height: "tall"
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    alt: "Decoración",
    height: "short"
  },
  {
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
    alt: "Fiesta",
    height: "tall"
  },
  {
    src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=800&auto=format&fit=crop",
    alt: "Baile",
    height: "short"
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
    alt: "Pastel",
    height: "short"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    setSelectedImage((prev) => 
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) => 
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl gold-text mb-4">
            Galería
          </h2>
          <p className="font-elegant text-lg text-muted-foreground">
            Momentos que atesoraremos por siempre
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div
                onClick={() => setSelectedImage(index)}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  image.height === "tall" ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-elegant text-sm text-foreground">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 md:left-8 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 md:right-8 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <p className="font-elegant text-lg text-muted-foreground">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;