import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Music, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      ref={targetRef} 
      className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0" />
      
      {/* Neon Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>
      
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-purple-300 mb-8"
        >
          <PartyPopper className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wider uppercase">Let's Party</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 tracking-tighter mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        >
          NEON
          <br />
          NIGHT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 font-light tracking-wide"
        >
          Prepárate para una noche inolvidable llena de música, luces y buenos momentos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            onClick={scrollToRSVP}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 text-lg px-10 py-8 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300"
          >
            <Music className="mr-2 w-5 h-5" /> Confirmar Asistencia
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 text-lg px-10 py-8 rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300"
          >
            Ver Detalles
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
