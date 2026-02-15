import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Lock, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

const RSVP = () => {
  const [ticketCode, setTicketCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de verificación
    setTimeout(() => {
      setIsLoading(false);
      if (ticketCode.toUpperCase() === "PARTY2026") {
        toast.success("¡Acceso concedido! Bienvenido a la fiesta.");
      } else {
        toast.error("Código de acceso inválido. Intenta con PARTY2026");
      }
    }, 1500);
  };

  return (
    <section id="rsvp" className="py-24 bg-slate-950 relative flex items-center justify-center min-h-[600px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group"
        >
          {/* Neon Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="text-center mb-8 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-transform duration-300">
               <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-white mb-2">RSVP</h2>
            <p className="text-slate-400">Ingresa tu código de acceso para confirmar tu asistencia.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="CÓDIGO DE ACCESO"
                className="bg-slate-950/50 border-slate-700 text-white placeholder:text-slate-600 text-center text-lg tracking-[0.2em] h-14 rounded-xl focus:border-purple-500 focus:ring-purple-500/20 transition-all uppercase"
                value={ticketCode}
                onChange={(e) => setTicketCode(e.target.value)}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-white text-slate-950 hover:bg-slate-200 font-bold h-14 rounded-xl text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="animate-pulse">VERIFICANDO...</span>
              ) : (
                <span className="flex items-center gap-2 justify-center">
                  CONFIRMAR ACCESO <PartyPopper className="w-5 h-5" />
                </span>
              )}
            </Button>
          </form>

          <p className="text-center mt-6 text-xs text-slate-600">
            ¿No tienes código? Contacta al organizador.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
