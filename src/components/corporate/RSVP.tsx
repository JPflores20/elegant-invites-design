import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner"; // Assuming sonner is available based on previous files

const RSVP = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("Registro completado exitosamente.");
    }, 1500);
  };

  return (
    <section id="rsvp" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 skew-x-12 origin-top-right"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Registro</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Confirme su Asistencia</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              El cupo es limitado para garantizar una experiencia de networking de alta calidad. Por favor confirme su asistencia antes del 30 de Octubre.
            </p>
            
            <ul className="space-y-4">
              {[
                "Acceso a todas las conferencias",
                "Kit de bienvenida ejecutivo",
                "Certificado de participación digital",
                "Acceso a la cena de gala"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white text-slate-900 p-8 md:p-10 shadow-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Formulario de Registro</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nombre</label>
                    <Input placeholder="Juan" className="bg-slate-50 border-slate-200 h-12" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Apellido</label>
                    <Input placeholder="Pérez" className="bg-slate-50 border-slate-200 h-12" required />
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-700">Empresa / Organización</label>
                   <Input placeholder="Empresa S.A. de C.V." className="bg-slate-50 border-slate-200 h-12" required />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-700">Correo Electrónico Corporativo</label>
                   <Input type="email" placeholder="juan.perez@empresa.com" className="bg-slate-50 border-slate-200 h-12" required />
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-700">Cargo</label>
                   <Input placeholder="Director General" className="bg-slate-50 border-slate-200 h-12" />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 text-lg rounded-none mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin w-5 h-5" /> Procesando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Completar Registro <ChevronRight className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Registro Exitoso!</h3>
                <p className="text-slate-600 mb-8">
                  Hemos enviado los detalles de su confirmación a su correo electrónico.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="border-slate-300"
                >
                  Registrar otro asistente
                </Button>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default RSVP;
