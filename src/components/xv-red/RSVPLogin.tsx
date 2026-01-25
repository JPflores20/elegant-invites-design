import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Lock, User, Mail, Check, Crown, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Correo inválido"),
  guests: z.string().min(1, "Selecciona pases"),
});

const RSVPLogin = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: "¡Bienvenido a la Corte Real!",
      description: `Hola ${values.name}, tu acceso ha sido confirmado.`,
    });
  }

  return (
    <section className="py-24 px-4 bg-red-950 flex items-center justify-center relative overflow-hidden" id="rsvp">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // CAMBIO: Fondo Rojo Degradado en lugar de blanco
        className="w-full max-w-md bg-gradient-to-b from-red-900 to-red-950 border border-red-700/50 p-8 md:p-10 rounded-[2rem] shadow-2xl relative z-10"
      >
        {/* Encabezado de la tarjeta */}
        <div className="text-center mb-8 relative">
          <div className="w-20 h-20 bg-red-800/50 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
            <Crown className="w-10 h-10 text-red-200" />
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
            {/* CAMBIO: Nombre Valentina */}
            <h2 className="font-serif text-4xl text-white tracking-wide">
              Valentina
            </h2>
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
          </div>
          
          {/* CAMBIO: Subtítulo "Bienvenidos" */}
          <p className="text-red-200/80 uppercase tracking-[0.2em] text-xs font-medium border-t border-red-800 pt-4 mt-2">
            Bienvenidos a mis XV
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  
                  {/* Input: Nombre */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative group">
                          <User className="absolute left-4 top-3.5 w-5 h-5 text-red-300 group-focus-within:text-white transition-colors" />
                          <FormControl>
                            <Input 
                              placeholder="Nombre Completo" 
                              {...field} 
                              // Estilos actualizados para fondo rojo
                              className="pl-12 bg-black/20 border-red-800 text-white placeholder:text-red-200/40 focus:border-red-400 focus:bg-black/30 h-12 rounded-xl border-2 transition-all"
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-red-300 text-xs pl-2" />
                      </FormItem>
                    )}
                  />

                  {/* Input: Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-3.5 w-5 h-5 text-red-300 group-focus-within:text-white transition-colors" />
                          <FormControl>
                            <Input 
                              placeholder="Correo Electrónico" 
                              {...field} 
                              className="pl-12 bg-black/20 border-red-800 text-white placeholder:text-red-200/40 focus:border-red-400 focus:bg-black/30 h-12 rounded-xl border-2 transition-all"
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-red-300 text-xs pl-2" />
                      </FormItem>
                    )}
                  />

                  {/* Input: Select */}
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/20 border-red-800 border-2 text-white h-12 rounded-xl focus:ring-0 focus:border-red-400 pl-4">
                              <SelectValue placeholder="Número de Pases" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-red-900 text-white border-red-700">
                            <SelectItem value="1">1 Pase Personal</SelectItem>
                            <SelectItem value="2">2 Pases</SelectItem>
                            <SelectItem value="3">3 Pases</SelectItem>
                            <SelectItem value="4">4 Pases</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-300 text-xs pl-2" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all flex gap-2 text-lg mt-4"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader2 className="animate-spin" /> : <Lock className="w-5 h-5" />}
                    {isLoading ? "Validando Invitación..." : "Ingresar al Evento"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <Check className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">¡Bienvenido!</h3>
              <p className="text-red-200 text-sm leading-relaxed px-4">
                Tu lugar en los XV de Valentina ha sido confirmado exitosamente.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default RSVPLogin;