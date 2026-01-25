import { motion } from "framer-motion";
import { Sparkles, Shirt, Ban, Gem } from "lucide-react";

const DressCodeXv = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-red-900 to-red-950">
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] mix-blend-overlay" />

      <div className="max-w-4xl mx-auto relative z-10 text-center text-red-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Shirt className="w-12 h-12 mx-auto mb-6 text-red-300 opacity-80" strokeWidth={1} />
          <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-wide drop-shadow-lg">
            Código de Vestimenta
          </h2>
          <div className="inline-block border-y border-red-300/30 py-4 px-8">
            <p className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-red-100">
              Formal de Noche
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-8">
          {/* Colores Reservados */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-red-950/50 backdrop-blur-md p-10 rounded-[2rem] border border-red-800/50 shadow-[0_0_40px_rgba(153,27,27,0.2)]"
          >
             <div className="flex items-center justify-center gap-3 mb-6 text-red-200">
                <Ban className="w-6 h-6" />
                <h3 className="font-serif text-2xl">Color Reservado</h3>
             </div>
             <p className="text-red-100/80 mb-8 leading-relaxed">
               Por favor, evita utilizar este color, ya que está reservado exclusivamente para la quinceañera.
             </p>
            
            <div className="flex flex-col items-center">
                <div className="relative group">
                  <Sparkles className="absolute -top-4 -right-4 text-red-300 w-6 h-6 animate-pulse z-20 group-hover:text-white transition-colors" />
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#7f1d1d] to-[#4a0404] shadow-[0_0_30px_rgba(127,29,29,0.7)] border-4 border-red-900/80 relative z-10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="font-serif text-red-100 text-lg font-bold drop-shadow-md group-hover:text-white">
                        Red Velvet
                    </span>
                  </div>
                </div>
            </div>
          </motion.div>

          {/* Sugerencias */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/20 backdrop-blur-md p-10 rounded-[2rem] border border-red-800/30 flex flex-col justify-center"
          >
             <h3 className="font-serif text-2xl mb-8 text-red-200">Sugerencias</h3>
             <ul className="space-y-6 text-left md:text-center text-red-100/90">
                <li className="flex items-center gap-4 md:justify-center p-4 rounded-xl bg-red-950/40 border border-red-900/50 hover:bg-red-900/60 transition-colors">
                    <Gem className="w-8 h-8 text-red-200" strokeWidth={1.5} />
                    <div className="text-left md:text-left">
                        <span className="block font-bold text-lg">Vestido largo</span>
                        <span className="text-sm opacity-70">Tonos oscuros o metálicos</span>
                    </div>
                </li>
                <li className="flex items-center gap-4 md:justify-center p-4 rounded-xl bg-red-950/40 border border-red-900/50 hover:bg-red-900/60 transition-colors">
                    <Shirt className="w-8 h-8 text-red-200" strokeWidth={1.5} />
                    <div className="text-left md:text-left">
                        <span className="block font-bold text-lg">Traje formal</span>
                        <span className="text-sm opacity-70">Oscuro y corbata</span>
                    </div>
                </li>
             </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeXv;