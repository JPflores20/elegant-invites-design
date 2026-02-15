import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
      {/* Background Image / Texture */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80"></div>
      
      {/* Abstract Geometric Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-slate-900 to-transparent rounded-tr-[100px] opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-widest uppercase rounded">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Evento Corporativo Anual
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Innovación & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Liderazgo 2026
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed border-l-4 border-blue-600 pl-6">
            Únase a los líderes de la industria para una jornada de inspiración, networking y visión estratégica.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Button
              onClick={scrollToRSVP}
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 rounded-none px-8 h-14 text-base font-semibold tracking-wide transition-all shadow-xl hover:translate-x-1"
            >
              Reservar Lugar <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-slate-700 text-white hover:bg-slate-800/50 hover:text-white rounded-none px-8 h-14 text-base font-medium tracking-wide backdrop-blur-sm"
            >
              Ver Agenda
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-8 text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>15 de Noviembre, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Centro de Convenciones, CDMX</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Element (Glass Card Effect) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="hidden lg:block relative"
        >
          <div className="relative z-10 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Organizado por</p>
                <p className="text-xl font-bold text-white">StellarDay Corp.</p>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                 <span className="text-white font-bold text-xl">S</span>
              </div>
            </div>
            
            <ul className="space-y-6">
              {[
                "Keynote Speakers Internacionales",
                "Paneles de Discusión Estratégica",
                "Cena de Gala & Networking",
                "Experiencias Inmersivas"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-xs">
                    {i + 1}
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Decorative Elements around card */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
