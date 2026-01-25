import { motion } from "framer-motion";
import { Church, MapPin, Navigation, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationCardsXv = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* CEREMONIA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative bg-[#1a0505] border border-red-900/50 p-8 md:p-10 rounded-[2rem] text-center h-full flex flex-col items-center justify-between shadow-2xl">
              <div>
                <div className="w-16 h-16 bg-red-950 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-800/50 group-hover:scale-110 transition-transform duration-300">
                  <Church className="w-8 h-8 text-red-200" />
                </div>
                <h3 className="text-3xl font-serif text-white mb-2">Ceremonia Religiosa</h3>
                <p className="text-red-200/60 mb-6 uppercase tracking-widest text-sm">5:00 PM</p>
                <p className="text-red-100 text-lg mb-2 font-medium">Templo de Fátima</p>
                <p className="text-red-200/50 mb-8 leading-relaxed">
                  Calle de Fátima 108, Sierra de Alica<br />
                  Zacatecas, Zac.
                </p>
              </div>
              <Button 
                className="w-full bg-red-900/50 hover:bg-red-800 text-white border border-red-700/50 rounded-xl py-6 text-lg group-hover:border-red-500/50 transition-all"
                onClick={() => window.open("https://maps.google.com", "_blank")}
              >
                <MapPin className="mr-2 w-5 h-5 text-red-400" />
                Ver Ubicación
              </Button>
            </div>
          </motion.div>

          {/* RECEPCIÓN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-900 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative bg-[#1a0505] border border-red-900/50 p-8 md:p-10 rounded-[2rem] text-center h-full flex flex-col items-center justify-between shadow-2xl">
              <div>
                <div className="w-16 h-16 bg-red-950 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-800/50 group-hover:scale-110 transition-transform duration-300">
                  <PartyPopper className="w-8 h-8 text-red-200" />
                </div>
                <h3 className="text-3xl font-serif text-white mb-2">Recepción</h3>
                <p className="text-red-200/60 mb-6 uppercase tracking-widest text-sm">8:00 PM</p>
                <p className="text-red-100 text-lg mb-2 font-medium">Salón Quinta Real</p>
                <p className="text-red-200/50 mb-8 leading-relaxed">
                  Av. González Ortega S/N, Centro<br />
                  Zacatecas, Zac.
                </p>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white border-0 rounded-xl py-6 text-lg shadow-lg shadow-red-900/20"
                onClick={() => window.open("https://maps.google.com", "_blank")}
              >
                <Navigation className="mr-2 w-5 h-5" />
                Cómo llegar
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationCardsXv;