import { MapPin, Calendar, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                UBICACIÓN
              </h2>
              <p className="text-purple-400 font-medium text-lg tracking-widest uppercase">
                El lugar de la fiesta
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-colors group">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/20 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Terraza "El Cielo"</h3>
                  <p className="text-slate-400">Av. Revolución 1234, Zona Centro</p>
                  <p className="text-slate-400">Ciudad de México, CDMX</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-pink-500/50 transition-colors group">
                <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400 group-hover:text-pink-300 group-hover:bg-pink-500/20 transition-colors">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Sábado 24 de Octubre</h3>
                  <div className="flex items-center gap-2 text-slate-400 mt-1">
                    <Clock className="w-4 h-4" />
                    <span>Inicia: 8:00 PM - Termina: Al amanecer</span>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-200 font-bold px-8 py-6 rounded-full text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
              asChild
            >
              <a 
                href="https://goo.gl/maps/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Abrir en Google Maps
              </a>
            </Button>
          </motion.div>

          {/* Map Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] w-full rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500"
          >
            {/* Grayscale Map Filter */}
            <div className="absolute inset-0 bg-slate-900/20 z-10 pointer-events-none mix-blend-color"></div>
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.536762264906!2d-99.16869402476532!3d19.43260768184666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8cac4c99555%3A0x6b77207624c9405c!2sPalacio%20de%20Bellas%20Artes!5e0!3m2!1sen!2smx!4v1709669677382!5m2!1sen!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Neon Marker Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
               <div className="relative">
                 <div className="w-8 h-8 bg-purple-500 rounded-full animate-ping absolute opacity-75"></div>
                 <div className="w-8 h-8 bg-purple-600 rounded-full border-4 border-white shadow-[0_0_20px_rgba(168,85,247,0.8)] relative z-10"></div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;
