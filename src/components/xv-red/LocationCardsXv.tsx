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
            // CAMBIO: Fondo rojo oscuro translúcido
            className="bg-red-950/40 backdrop-blur-md border border-red-400/30 p-8 md:p-10 rounded-[2.5rem] text-center shadow-2xl hover:border-red-300/50 transition-all"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Church className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-serif text-white mb-2">Ceremonia Religiosa</h3>
            <p className="text-red-200 mb-6 uppercase tracking-widest text-sm font-semibold">5:00 PM</p>
            <p className="text-white text-xl mb-2 font-medium">Templo de Fátima</p>
            <p className="text-red-100 mb-8 leading-relaxed">
              Calle de Fátima 108, Sierra de Alica<br />
              Zacatecas, Zac.
            </p>
            <Button 
              className="w-full bg-white text-red-900 hover:bg-red-100 font-bold rounded-xl py-6 text-lg shadow-lg"
              onClick={() => window.open("https://maps.google.com", "_blank")}
            >
              <MapPin className="mr-2 w-5 h-5 text-red-700" />
              Ver Mapa
            </Button>
          </motion.div>

          {/* RECEPCIÓN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-red-950/40 backdrop-blur-md border border-red-400/30 p-8 md:p-10 rounded-[2.5rem] text-center shadow-2xl hover:border-red-300/50 transition-all"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <PartyPopper className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-serif text-white mb-2">Recepción</h3>
            <p className="text-red-200 mb-6 uppercase tracking-widest text-sm font-semibold">8:00 PM</p>
            <p className="text-white text-xl mb-2 font-medium">Salón Quinta Real</p>
            <p className="text-red-100 mb-8 leading-relaxed">
              Av. González Ortega S/N, Centro<br />
              Zacatecas, Zac.
            </p>
            <Button 
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white border-0 rounded-xl py-6 text-lg shadow-lg"
              onClick={() => window.open("https://maps.google.com", "_blank")}
            >
              <Navigation className="mr-2 w-5 h-5" />
              Cómo llegar
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationCardsXv;